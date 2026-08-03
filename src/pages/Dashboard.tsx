import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Activity, TrendingUp, Target, Zap, Heart, Droplets, User,
  Edit2, Save, X, ArrowRight, BarChart3, Award, LogOut
} from 'lucide-react';
import {
  calcBMI, bmiCategory, calcBMR, calcTDEE, calcFFMI,
  calcProtein, calcHydration, getCalorieGoal, calcEstimatedLBM
} from '@/lib/calculations';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

type Profile = {
  full_name: string;
  age: string;
  gender: string;
  height_cm: string;
  weight_kg: string;
  activity_level: string;
  goal: string;
};

const defaultProfile: Profile = {
  full_name: '',
  age: '',
  gender: 'male',
  height_cm: '',
  weight_kg: '',
  activity_level: 'moderate',
  goal: 'maintenance',
};

const goalLabels: Record<string, string> = {
  weight_loss: 'Fat Loss',
  maintenance: 'Maintenance',
  muscle_gain: 'Muscle Gain',
  performance: 'Athletic Performance',
  rehabilitation: 'Rehabilitation',
};

const activityLabels: Record<string, string> = {
  sedentary: 'Sedentary',
  light: 'Light',
  moderate: 'Moderate',
  active: 'Active',
  very_active: 'Very Active',
};

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [savedProfile, setSavedProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (data && !error) {
          const loaded: Profile = {
            full_name: data.full_name || user.user_metadata?.full_name || '',
            age: data.age ? String(data.age) : '',
            gender: data.gender || 'male',
            height_cm: data.height_cm ? String(data.height_cm) : '',
            weight_kg: data.weight_kg ? String(data.weight_kg) : '',
            activity_level: data.activity_level || 'moderate',
            goal: data.goal || 'maintenance',
          };
          setProfile(loaded);
          setSavedProfile(loaded);
        } else {
          setProfile((prev) => ({
            ...prev,
            full_name: user.user_metadata?.full_name || '',
          }));
        }
      } catch (e) {
        console.error('Error fetching profile:', e);
      } finally {
        setProfileLoaded(true);
      }
    }

    loadProfile();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);

    try {
      const payload = {
        full_name: profile.full_name,
        age: profile.age ? parseInt(profile.age, 10) : null,
        gender: profile.gender,
        height_cm: profile.height_cm ? parseFloat(profile.height_cm) : null,
        weight_kg: profile.weight_kg ? parseFloat(profile.weight_kg) : null,
        activity_level: profile.activity_level,
        goal: profile.goal,
      };

      const { error } = await supabase
        .from('profiles')
        .update(payload)
        .eq('user_id', user.id);

      if (error) {
        console.error('Failed to save profile:', error);
      } else {
        setSavedProfile({ ...profile });
        setEditing(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const hasMetrics = Boolean(profile.height_cm && profile.weight_kg && profile.age);

  const metrics = hasMetrics ? (() => {
    const h = parseFloat(profile.height_cm);
    const w = parseFloat(profile.weight_kg);
    const a = parseInt(profile.age, 10);
    const g = profile.gender;
    const act = profile.activity_level;
    const goal = profile.goal;

    const bmi = calcBMI(w, h);
    const bmiCat = bmiCategory(bmi);
    const bmr = calcBMR(w, h, a, g);
    const tdee = calcTDEE(bmr, act);
    const calories = getCalorieGoal(tdee, goal);
    const protein = calcProtein(w, goal || act);
    const hydration = calcHydration(w, act);
    const estimatedLBM = calcEstimatedLBM(w, h, g);
    const ffmi = calcFFMI(w, h);

    return { bmi, bmiCat, bmr, tdee, calories, protein, hydration, estimatedLBM, ffmi };
  })() : null;

  if (!profileLoaded) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const userName = profile.full_name || user?.user_metadata?.full_name || 'Athlete';

  return (
    <div className="min-h-screen bg-surface page-enter">
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-10 pt-24">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="badge-teal mb-2">Dashboard</div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome back, {userName}</h1>
              <p className="text-slate-500 text-sm mt-1">Track your progress and personalize your performance profile.</p>
            </div>
            <button
              onClick={handleSignOut}
              className="btn-secondary text-sm py-2 px-4 gap-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50 hover:border-rose-200"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* No metrics prompt */}
        {!metrics && !editing && (
          <div className="card border-dashed border-2 border-slate-200 text-center py-12">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-7 h-7 text-teal-500" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Complete your profile</h2>
            <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
              Add your measurements to unlock your full performance dashboard.
            </p>
            <button onClick={() => setEditing(true)} className="btn-primary mx-auto">
              Add Measurements
            </button>
          </div>
        )}

        {/* Metrics cards - Profile-derived metrics only */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Daily Calories', value: `${Math.round(metrics.calories)}`, unit: 'kcal', icon: Zap, color: 'text-teal-600 bg-teal-50' },
              { label: 'Protein Target', value: `${Math.round(metrics.protein)}`, unit: 'g', icon: Target, color: 'text-blue-600 bg-blue-50' },
              { label: 'Hydration', value: metrics.hydration.toFixed(1), unit: 'L', icon: Droplets, color: 'text-cyan-600 bg-cyan-50' },
              { label: 'Estimated Lean Body Mass', value: metrics.estimatedLBM.toFixed(1), unit: 'kg', icon: Award, color: 'text-violet-600 bg-violet-50' },
              { label: 'BMR', value: `${Math.round(metrics.bmr)}`, unit: 'kcal', icon: Activity, color: 'text-amber-600 bg-amber-50' },
              { label: 'TDEE', value: `${Math.round(metrics.tdee)}`, unit: 'kcal', icon: TrendingUp, color: 'text-green-600 bg-green-50' },
              { label: 'BMI', value: metrics.bmi.toFixed(1), unit: metrics.bmiCat.label || String(metrics.bmiCat), icon: BarChart3, color: 'text-rose-600 bg-rose-50' },
              { label: 'FFMI', value: Number(metrics.ffmi).toFixed(1), unit: 'kg/m²', icon: Heart, color: 'text-indigo-600 bg-indigo-50' },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="card">
                  <div className={`w-9 h-9 rounded-xl ${m.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.unit}</div>
                  <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                </div>
              );
            })}
          </div>
        )}

        {/* Profile section */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Profile</h2>
            </div>
            <div className="flex gap-2">
              {editing ? (
                <>
                  <button
                    onClick={() => { setProfile(savedProfile ?? defaultProfile); setEditing(false); }}
                    className="btn-secondary text-sm py-2 px-4 gap-2"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                  <button
                    onClick={handleSave} disabled={saving}
                    className="btn-primary text-sm py-2 px-4 gap-2 disabled:opacity-60"
                  >
                    {saving ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : <Save className="w-4 h-4" />}
                    Save
                  </button>
                </>
              ) : (
                <button onClick={() => setEditing(true)} className="btn-secondary text-sm py-2 px-4 gap-2">
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
              )}
            </div>
          </div>

          {editing ? (
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="label">Full Name</label>
                <input type="text" value={profile.full_name} onChange={e => setProfile({ ...profile, full_name: e.target.value })} className="input" placeholder="Your name" />
              </div>
              <div>
                <label className="label">Age</label>
                <input type="number" value={profile.age} onChange={e => setProfile({ ...profile, age: e.target.value })} className="input" placeholder="28" />
              </div>
              <div>
                <label className="label">Sex</label>
                <select value={profile.gender} onChange={e => setProfile({ ...profile, gender: e.target.value })} className="select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">Height (cm)</label>
                <input type="number" value={profile.height_cm} onChange={e => setProfile({ ...profile, height_cm: e.target.value })} className="input" placeholder="178" />
              </div>
              <div>
                <label className="label">Weight (kg)</label>
                <input type="number" value={profile.weight_kg} onChange={e => setProfile({ ...profile, weight_kg: e.target.value })} className="input" placeholder="75" />
              </div>
              <div>
                <label className="label">Activity Level</label>
                <select value={profile.activity_level} onChange={e => setProfile({ ...profile, activity_level: e.target.value })} className="select">
                  {Object.entries(activityLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Goal</label>
                <select value={profile.goal} onChange={e => setProfile({ ...profile, goal: e.target.value })} className="select">
                  {Object.entries(goalLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Name', value: profile.full_name || '—' },
                { label: 'Age', value: profile.age ? `${profile.age} years` : '—' },
                { label: 'Sex', value: profile.gender === 'male' ? 'Male' : 'Female' },
                { label: 'Height', value: profile.height_cm ? `${profile.height_cm} cm` : '—' },
                { label: 'Weight', value: profile.weight_kg ? `${profile.weight_kg} kg` : '—' },
                { label: 'Activity', value: activityLabels[profile.activity_level] },
                { label: 'Goal', value: goalLabels[profile.goal] },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-xs text-slate-400 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-5">Explore TORIX</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Full Body Analysis', desc: 'Complete performance report', href: '/analysis', color: 'text-teal-600 bg-teal-50' },
              { label: 'Exercise Library', desc: '150+ bodyweight exercises', href: '/exercises', color: 'text-blue-600 bg-blue-50' },
              { label: 'Rehabilitation', desc: 'Evidence-based protocols', href: '/rehabilitation', color: 'text-rose-600 bg-rose-50' },
              { label: 'Calculators', desc: 'All performance tools', href: '/calculators', color: 'text-amber-600 bg-amber-50' },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="card-hover group">
                <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}