import React, { useState, useEffect } from 'react';
import { calcTDEE, calcBMR } from '@/lib/calculations';
import { Apple, Droplets, Zap, BarChart3, Info } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

const mealPlans = [
  {
    goal: 'weight_loss',
    label: 'Fat Loss',
    timing: [
      { time: '7:00 AM', meal: 'Breakfast', example: 'Greek yogurt, berries, almonds (400 kcal)', protein: 30, carbs: 35, fat: 12 },
      { time: '12:30 PM', meal: 'Lunch', example: 'Grilled chicken, quinoa, roasted vegetables (550 kcal)', protein: 45, carbs: 50, fat: 14 },
      { time: '3:30 PM', meal: 'Snack', example: 'Cottage cheese, apple (200 kcal)', protein: 20, carbs: 25, fat: 3 },
      { time: '7:00 PM', meal: 'Dinner', example: 'Salmon, sweet potato, green beans (550 kcal)', protein: 40, carbs: 45, fat: 16 },
    ],
  },
  {
    goal: 'muscle_gain',
    label: 'Muscle Gain',
    timing: [
      { time: '7:00 AM', meal: 'Breakfast', example: 'Oats, eggs, banana, milk (650 kcal)', protein: 40, carbs: 80, fat: 15 },
      { time: '10:30 AM', meal: 'Mid-Morning', example: 'Tuna wrap, vegetables (450 kcal)', protein: 35, carbs: 50, fat: 10 },
      { time: '1:00 PM', meal: 'Lunch', example: 'Rice, chicken breast, broccoli (700 kcal)', protein: 55, carbs: 90, fat: 10 },
      { time: '4:00 PM', meal: 'Pre-Workout', example: 'Banana, peanut butter, protein shake (400 kcal)', protein: 30, carbs: 50, fat: 10 },
      { time: '7:30 PM', meal: 'Dinner', example: 'Lean beef, potatoes, salad (700 kcal)', protein: 50, carbs: 70, fat: 20 },
    ],
  },
  {
    goal: 'maintenance',
    label: 'Maintenance',
    timing: [
      { time: '7:00 AM', meal: 'Breakfast', example: 'Eggs, avocado toast, orange juice (500 kcal)', protein: 25, carbs: 55, fat: 18 },
      { time: '12:30 PM', meal: 'Lunch', example: 'Turkey sandwich, mixed salad (500 kcal)', protein: 35, carbs: 55, fat: 14 },
      { time: '3:30 PM', meal: 'Snack', example: 'Apple, handful mixed nuts (250 kcal)', protein: 8, carbs: 28, fat: 14 },
      { time: '7:00 PM', meal: 'Dinner', example: 'Chicken stir-fry, rice, vegetables (600 kcal)', protein: 40, carbs: 65, fat: 14 },
    ],
  },
];

const nutrients = [
  {
    name: 'Protein',
    icon: Zap,
    color: 'teal',
    description: 'Essential for muscle repair, immune function, and enzyme production.',
    timing: 'Distribute across 3-5 meals. Prioritize post-workout intake within 30-60 minutes.',
    sources: ['Chicken breast', 'Greek yogurt', 'Eggs', 'Tofu', 'Legumes', 'Fish', 'Cottage cheese'],
    target: '1.6-2.4g per kg bodyweight',
  },
  {
    name: 'Carbohydrates',
    icon: BarChart3,
    color: 'amber',
    description: 'Primary fuel for high-intensity exercise and brain function.',
    timing: 'Front-load before training. Carbohydrates are not the enemy — timing and quality matter most.',
    sources: ['Oats', 'Sweet potato', 'Rice', 'Quinoa', 'Banana', 'Berries', 'Whole grain bread'],
    target: '3-7g per kg bodyweight (training-dependent)',
  },
  {
    name: 'Fats',
    icon: Apple,
    color: 'blue',
    description: 'Vital for hormone production, fat-soluble vitamin absorption, and joint health.',
    timing: 'Spread throughout the day. Minimize intake immediately pre-workout to avoid GI issues.',
    sources: ['Avocado', 'Olive oil', 'Nuts', 'Fatty fish', 'Seeds', 'Eggs', 'Dark chocolate'],
    target: '0.5-1.5g per kg bodyweight',
  },
  {
    name: 'Hydration',
    icon: Droplets,
    color: 'green',
    description: 'Dehydration of just 2% impairs cognitive and physical performance significantly.',
    timing: 'Sip consistently throughout the day. 500ml with each meal. 400-800ml/hour during exercise.',
    sources: ['Water', 'Electrolyte drinks', 'Herbal teas', 'Watermelon', 'Cucumber', 'Coconut water'],
    target: '33ml per kg bodyweight + training adjustments',
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  green: { bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-100 text-green-700' },
};

export default function Nutrition() {
  const { user } = useAuth();

  const [selectedGoal, setSelectedGoal] = useState('muscle_gain');
  const [weightInput, setWeightInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [activityInput, setActivityInput] = useState('');

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('age, gender, height_cm, weight_kg, activity_level')
          .eq('user_id', user.id)
          .single();

        if (data && !error) {
          if (data.weight_kg) setWeightInput(String(data.weight_kg));
          if (data.height_cm) setHeightInput(String(data.height_cm));
          if (data.age) setAgeInput(String(data.age));
          if (data.gender) setGenderInput(data.gender);
          if (data.activity_level) setActivityInput(data.activity_level);
        }
      } catch (e) {
        console.error('Error loading profile in Nutrition:', e);
      }
    }

    loadProfile();
  }, [user]);

  const plan = mealPlans.find(m => m.goal === selectedGoal) ?? mealPlans[0];
  const w = parseFloat(weightInput) || 75;
  const protein = (w * 2.0).toFixed(0);
  const bmr = calcBMR(w, parseFloat(heightInput) || 178, parseFloat(ageInput) || 28, genderInput || 'male');
  const tdee = calcTDEE(bmr, activityInput || 'moderate');

  const goalCalories: Record<string, number> = {
    weight_loss: Math.round(tdee - 500),
    maintenance: Math.round(tdee),
    muscle_gain: Math.round(tdee + 300),
    performance: Math.round(tdee + 200),
  };

  return (
    <div className="min-h-screen bg-surface page-enter">
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-amber mb-4">Nutrition</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Performance Nutrition
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Evidence-based nutrition guidance for performance, body composition, and recovery. Tailored to your training goals.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Quick Calculator */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Nutrition Targets Calculator</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  type="number"
                  className="input"
                  value={weightInput}
                  onChange={e => setWeightInput(e.target.value)}
                  placeholder="e.g. 75"
                />
              </div>
              <div>
                <label className="label">Age</label>
                <input
                  type="number"
                  className="input"
                  value={ageInput}
                  onChange={e => setAgeInput(e.target.value)}
                  placeholder="e.g. 28"
                />
              </div>
              <div>
                <label className="label">Height (cm)</label>
                <input
                  type="number"
                  className="input"
                  value={heightInput}
                  onChange={e => setHeightInput(e.target.value)}
                  placeholder="e.g. 178"
                />
              </div>
              <div>
                <label className="label">Sex</label>
                <select className="select" value={genderInput} onChange={e => setGenderInput(e.target.value)}>
                  <option value="" disabled hidden>Select sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label">Activity Level</label>
                <select className="select" value={activityInput} onChange={e => setActivityInput(e.target.value)}>
                  <option value="" disabled hidden>Select activity level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light (1-3 days/week)</option>
                  <option value="moderate">Moderate (3-5 days/week)</option>
                  <option value="active">Active (6-7 days/week)</option>
                  <option value="very_active">Very Active (2x/day)</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {['weight_loss', 'maintenance', 'muscle_gain', 'performance'].map((goal) => {
                const labels: Record<string, string> = { weight_loss: 'Fat Loss', maintenance: 'Maintenance', muscle_gain: 'Muscle Gain', performance: 'Performance' };
                return (
                  <div key={goal} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm font-medium text-slate-700">{labels[goal]}</span>
                    <span className="text-sm font-bold text-teal-700">{goalCalories[goal]} kcal/day</span>
                  </div>
                );
              })}
              <div className="flex items-center justify-between p-3 bg-teal-50 rounded-xl border border-teal-100">
                <span className="text-sm font-medium text-teal-700">Protein Target</span>
                <span className="text-sm font-bold text-teal-900">{protein}g/day</span>
              </div>
            </div>
          </div>

          {/* Macronutrient overview */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Macronutrient Distribution</h2>
            {[
              { label: 'Protein', pct: 30, color: '#14B8A6' },
              { label: 'Carbohydrates', pct: 45, color: '#F59E0B' },
              { label: 'Fats', pct: 25, color: '#3B82F6' },
            ].map((macro) => (
              <div key={macro.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{macro.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{macro.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${macro.pct}%`, backgroundColor: macro.color }}
                  />
                </div>
              </div>
            ))}

            <div className="mt-5 p-4 bg-slate-50 rounded-xl flex items-start gap-3">
              <Info className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-500">
                These are general starting percentages. Adjust based on training phase, individual response, and performance goals. Athlete carbohydrate needs may be significantly higher on training days.
              </p>
            </div>
          </div>
        </div>

        {/* Nutrient guides */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Key Nutrient Guide</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {nutrients.map((n) => {
              const Icon = n.icon;
              const c = colorMap[n.color];
              return (
                <div key={n.name} className="card">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-slate-900">{n.name}</h3>
                    <span className={`badge text-xs ${c.badge}`}>{n.target}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{n.description}</p>

                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-slate-600 mb-1">Timing</p>
                    <p className="text-xs text-slate-500">{n.timing}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-600 mb-2">Top Sources</p>
                    <div className="flex flex-wrap gap-1.5">
                      {n.sources.map(s => (
                        <span key={s} className={`badge text-xs ${c.badge}`}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meal timing */}
        <div>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Sample Meal Plan</h2>
            <div className="flex gap-2">
              {mealPlans.map(m => (
                <button
                  key={m.goal}
                  onClick={() => setSelectedGoal(m.goal)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedGoal === m.goal
                      ? 'bg-teal-500 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {plan.timing.map((meal, i) => (
              <div key={i} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-20 flex-shrink-0">
                  <div className="text-xs font-bold text-teal-600">{meal.time}</div>
                  <div className="text-xs text-slate-500">{meal.meal}</div>
                </div>
                <div className="w-px h-8 bg-slate-100 hidden sm:block" />
                <div className="flex-1">
                  <p className="text-sm text-slate-700">{meal.example}</p>
                </div>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span><b className="text-teal-600">{meal.protein}g</b> protein</span>
                  <span><b className="text-amber-600">{meal.carbs}g</b> carbs</span>
                  <span><b className="text-blue-600">{meal.fat}g</b> fat</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}