import React, { useState } from 'react';
import {
  calcBMI, bmiCategory, calcBMR, calcTDEE, calcFFMIAdvanced,
  calcIdealWeight, calcHydration, calcProtein, getCalorieGoal
} from '@/lib/calculations';
import { ArrowRight, User, Ruler, Weight, Activity, Target, ChevronRight } from 'lucide-react';

type FormData = {
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
};

const activityLabels: Record<string, string> = {
  sedentary: 'Sedentary (desk job, little movement)',
  light: 'Lightly Active (1-3 days/week)',
  moderate: 'Moderately Active (3-5 days/week)',
  active: 'Very Active (6-7 days/week)',
  very_active: 'Extremely Active (2x/day training)',
};

const goalLabels: Record<string, string> = {
  weight_loss: 'Weight Loss',
  maintenance: 'Maintenance',
  muscle_gain: 'Muscle Gain',
  performance: 'Athletic Performance',
  rehabilitation: 'Rehabilitation & Recovery',
};

function extractNumber(val: any): number {
  if (typeof val === 'number') return val;
  if (val && typeof val === 'object') {
    for (const key of ['number', 'value', 'score', 'result', 'bmi', 'bmr', 'tdee', 'ffmi']) {
      if (key in val && typeof val[key] === 'number') {
        return val[key];
      }
    }
    for (const v of Object.values(val)) {
      if (typeof v === 'number') return v;
      const num = Number(v);
      if (!isNaN(num)) return num;
    }
    return 0;
  }
  const parsed = Number(val);
  return isNaN(parsed) ? 0 : parsed;
}

function calculateNewScore(
  bmi: number,
  ffmi: number,
  gender: string,
  activityLevel: string,
  goal: string,
  weight: number,
  protein: number,
  hydration: number,
  tdee: number,
  calories: number
): number {
  let bmiScore = 0;
  if (bmi >= 18.5 && bmi <= 24.9) {
    const distance = Math.abs(bmi - 22.5);
    bmiScore = Math.max(12, 20 - distance * 3.5);
  } else if (bmi >= 25 && bmi <= 28) {
    bmiScore = Math.max(8, 15 - (bmi - 25) * 2.5);
  } else if (bmi >= 17 && bmi < 18.5) {
    bmiScore = 12;
  } else {
    bmiScore = 5;
  }

  let ffmiScore = 10;
  if (gender === 'male') {
    if (ffmi >= 22.5) ffmiScore = 25;
    else if (ffmi >= 20) ffmiScore = 18 + (ffmi - 20) * 2.8;
    else if (ffmi >= 17.5) ffmiScore = 12 + (ffmi - 17.5) * 2.4;
    else ffmiScore = Math.max(5, ffmi * 0.6);
  } else {
    if (ffmi >= 19.5) ffmiScore = 25;
    else if (ffmi >= 17) ffmiScore = 18 + (ffmi - 17) * 2.8;
    else if (ffmi >= 15) ffmiScore = 12 + (ffmi - 15) * 3;
    else ffmiScore = Math.max(5, ffmi * 0.7);
  }
  ffmiScore = Math.min(25, Math.max(5, ffmiScore));

  const activityScores: Record<string, number> = {
    sedentary: 6,
    light: 10,
    moderate: 13,
    active: 15,
    very_active: 15,
  };
  const activityScore = activityScores[activityLevel] || 10;

  const proteinPerKg = weight > 0 ? protein / weight : 1.2;
  let proteinScore = 8;
  if (proteinPerKg >= 1.8) proteinScore = 15;
  else if (proteinPerKg >= 1.4) proteinScore = 13;
  else if (proteinPerKg >= 1.0) proteinScore = 10;
  else proteinScore = 6;

  let hydrationScore = 8;
  if (hydration >= 3.0) hydrationScore = 10;
  else if (hydration >= 2.2) hydrationScore = 9;
  else if (hydration >= 1.5) hydrationScore = 7;
  else hydrationScore = 5;

  let calorieScore = 10;
  const diff = calories - tdee;
  if (goal === 'weight_loss' && diff < 0 && diff >= -750) calorieScore = 15;
  else if (goal === 'muscle_gain' && diff > 0 && diff <= 500) calorieScore = 15;
  else if (goal === 'maintenance' && Math.abs(diff) <= 100) calorieScore = 15;
  else if (goal === 'performance' || goal === 'rehabilitation') calorieScore = 13;
  else calorieScore = 8;

  const total = bmiScore + ffmiScore + activityScore + proteinScore + hydrationScore + calorieScore;
  return Math.round(Math.min(100, Math.max(20, total)));
}

function MetricCard({ label, value, unit, sub, color = 'teal' }: {
  label: string; value: string | number | any; unit?: string; sub?: string; color?: string
}) {
  const colors: Record<string, string> = {
    teal: 'border-teal-100 bg-teal-50/50',
    blue: 'border-blue-100 bg-blue-50/50',
    amber: 'border-amber-100 bg-amber-50/50',
    rose: 'border-rose-100 bg-rose-50/50',
    green: 'border-green-100 bg-green-50/50',
    violet: 'border-violet-100 bg-violet-50/50',
  };
  const numericValue = typeof value === 'number' ? value : extractNumber(value);
  return (
    <div className={`rounded-2xl border p-4 ${colors[color] || colors.teal}`}>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900">
        {typeof numericValue === 'number' && !isNaN(numericValue) ? numericValue.toFixed(1) : value}
        {unit && <span className="text-sm font-normal text-slate-400 ml-1">{unit}</span>}
      </div>
      {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
    </div>
  );
}

export default function Analysis() {
  const [form, setForm] = useState<FormData>({
    age: '', gender: 'male', height: '', weight: '',
    activityLevel: 'moderate', goal: 'maintenance'
  });
  const [results, setResults] = useState<ReturnType<typeof compute> | null>(null);
  const [step, setStep] = useState(0);

  function compute(f: FormData) {
    const age = parseFloat(f.age);
    const height = parseFloat(f.height);
    const weight = parseFloat(f.weight);
    const bmi = extractNumber(calcBMI(weight, height));
    const bmr = extractNumber(calcBMR(weight, height, age, f.gender));
    const tdee = extractNumber(calcTDEE(bmr, f.activityLevel));
    
    // Using Mode B (Boer LBM Equation) for automated analysis
    const ffmiRes = calcFFMIAdvanced(weight, height, f.gender);
    const ffmi = extractNumber(ffmiRes.ffmi);
    
    const idealWeight = extractNumber(calcIdealWeight(height, f.gender));
    const hydration = extractNumber(calcHydration(weight, f.activityLevel));
    const protein = extractNumber(calcProtein(weight, f.goal, f.activityLevel));
    const calories = extractNumber(getCalorieGoal(tdee, f.goal));
    const perfScore = calculateNewScore(bmi, ffmi, f.gender, f.activityLevel, f.goal, weight, protein, hydration, tdee, calories);
    const bmiCat = bmiCategory(bmi);

    return {
      bmi, bmr, tdee, ffmi, ffmiMethod: ffmiRes.method, idealWeight, hydration, protein, calories,
      perfScore, bmiCat, age, height, weight, goal: f.goal,
      activityLevel: f.activityLevel, gender: f.gender,
    };
  }

  function handleSubmit() {
    const r = compute(form);
    setResults(r);
  }

  const steps = [
    {
      icon: User,
      title: 'Personal Info',
      fields: (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Age</label>
              <input type="number" min="10" max="100" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} className="input" placeholder="e.g. 28" />
            </div>
            <div>
              <label className="label">Biological Sex</label>
              <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} className="select">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Ruler,
      title: 'Body Measurements',
      fields: (
        <div className="space-y-5">
          <div>
            <label className="label">Height (cm)</label>
            <input type="number" min="100" max="250" value={form.height} onChange={e => setForm({ ...form, height: e.target.value })} className="input" placeholder="e.g. 178" />
          </div>
          <div>
            <label className="label">Weight (kg)</label>
            <input type="number" min="30" max="300" value={form.weight} onChange={e => setForm({ ...form, weight: e.target.value })} className="input" placeholder="e.g. 75" />
          </div>
        </div>
      ),
    },
    {
      icon: Activity,
      title: 'Activity Level',
      fields: (
        <div className="space-y-3">
          {Object.entries(activityLabels).map(([val, label]) => (
            <label key={val} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
              form.activityLevel === val ? 'border-teal-400 bg-teal-50' : 'border-slate-200 hover:border-teal-200'
            }`}>
              <input
                type="radio" name="activity" value={val} checked={form.activityLevel === val}
                onChange={e => setForm({ ...form, activityLevel: e.target.value })}
                className="w-4 h-4 accent-teal-500"
              />
              <span className="text-sm text-slate-700">{label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      icon: Target,
      title: 'Your Goal',
      fields: (
        <div className="space-y-3">
          {Object.entries(goalLabels).map(([val, label]) => (
            <label key={val} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
              form.goal === val ? 'border-teal-400 bg-teal-50' : 'border-slate-200 hover:border-teal-200'
            }`}>
              <input
                type="radio" name="goal" value={val} checked={form.goal === val}
                onChange={e => setForm({ ...form, goal: e.target.value })}
                className="w-4 h-4 accent-teal-500"
              />
              <span className="text-sm text-slate-700">{label}</span>
            </label>
          ))}
        </div>
      ),
    },
  ];

  const isStepValid = () => {
    if (step === 0) return form.age && form.gender;
    if (step === 1) return form.height && form.weight;
    return true;
  };

  if (results) {
    return (
      <div className="min-h-screen bg-surface page-enter">
        <div className="bg-white border-b border-slate-100">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-10 pt-24">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="badge-teal mb-3">Analysis Complete</div>
                <h1 className="text-3xl font-bold text-slate-900">Your Performance Report</h1>
                <p className="text-slate-500 mt-1">Based on your data — {results.age}y, {results.gender}, {results.weight}kg, {results.height}cm</p>
              </div>
              <button onClick={() => { setResults(null); setStep(0); }} className="btn-secondary text-sm">
                Redo Analysis
              </button>
            </div>
          </div>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="card flex flex-col sm:flex-row items-center gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-teal-500 mb-1">{results.perfScore}</div>
              <div className="text-sm text-slate-500">Overall Score</div>
              <div className="text-xs text-slate-400 mt-1">out of 100</div>
            </div>
            <div className="w-px h-20 bg-slate-100 hidden sm:block" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">
                {results.perfScore >= 90 ? 'Elite Performance Profile' :
                  results.perfScore >= 80 ? 'Excellent Performance Profile' :
                  results.perfScore >= 70 ? 'Very Good Performance Profile' :
                  results.perfScore >= 60 ? 'Good Performance Profile' :
                  results.perfScore >= 50 ? 'Fair Performance Profile' : 'Needs Improvement'}
              </h2>
              <p className="text-slate-500 text-sm">
                Your score is evidence-based, derived from BMI (WHO Classification), Estimated FFMI (Boer Equation), activity level, nutritional targets, and hydration consistency.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Body Composition</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <MetricCard label="BMI" value={results.bmi} unit="kg/m²" sub={results.bmiCat.label} color="teal" />
              <MetricCard label="Estimated FFMI" value={results.ffmi} unit="kg/m²" sub="Boer Lean Body Mass Equation" color="violet" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Energy & Nutrition</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <MetricCard label="BMR" value={Math.round(results.bmr)} unit="kcal/day" sub="Mifflin-St Jeor Equation" color="amber" />
              <MetricCard label="TDEE" value={Math.round(results.tdee)} unit="kcal/day" sub="Mifflin-St Jeor + Activity Multipliers" color="teal" />
              <MetricCard label="Calorie Goal" value={Math.round(results.calories)} unit="kcal/day" sub={goalLabels[results.goal]} color="blue" />
              <MetricCard label="Protein Target" value={Math.round(results.protein)} unit="g/day" sub={`${(results.protein / results.weight).toFixed(1)}g/kg/day`} color="rose" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Fitness Metrics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <MetricCard label="Estimated Ideal Weight" value={results.idealWeight} unit="kg" sub="Devine Formula" color="green" />
              <MetricCard label="Hydration" value={results.hydration} unit="L/day" sub="General daily hydration estimate" color="blue" />
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-slate-900 mb-5">Personalized Recommendations</h2>
            <div className="space-y-3">
              {[
                results.bmi > 25 && `Your BMI is ${results.bmi.toFixed(1)} (WHO Classification) — working toward a BMI of 18.5–24.9 would improve your performance score.`,
                `Target ${Math.round(results.protein)}g protein daily spread across 3-4 meals (${(results.protein / results.weight).toFixed(1)}g/kg/day) to support your ${goalLabels[results.goal].toLowerCase()} goal.`,
                `Drink at least ${results.hydration.toFixed(1)}L of water daily (general daily hydration estimate) — increase this on training days.`,
                results.goal === 'weight_loss' && `A deficit of 500 kcal/day puts you at ${Math.round(results.calories)} kcal — expect approximately 0.5kg of fat loss per week.`,
                results.goal === 'muscle_gain' && `A surplus of 300 kcal puts you at ${Math.round(results.calories)} kcal — combine with progressive overload training for optimal muscle gain.`,
              ].filter(Boolean).map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-sm text-slate-700">{rec as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface page-enter">
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-teal mb-4">Body Analysis</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Complete Body Analysis</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Enter your information once. Receive your complete performance report — BMI, body composition, energy targets, and personalized recommendations.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={i}>
                  <div className={`flex items-center gap-2 ${i <= step ? 'text-teal-600' : 'text-slate-300'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      i < step ? 'bg-teal-500 text-white' :
                      i === step ? 'bg-teal-500 text-white ring-4 ring-teal-100' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-teal-700' : i < step ? 'text-slate-500' : 'text-slate-300'}`}>
                      {s.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-px transition-all duration-300 ${i < step ? 'bg-teal-300' : 'bg-slate-200'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="card animate-fade-in">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">{steps[step].title}</h2>
              <p className="text-sm text-slate-500 mt-1">Step {step + 1} of {steps.length}</p>
            </div>

            {steps[step].fields}

            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
              )}
              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepValid()}
                  className="btn-primary flex-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!form.age || !form.height || !form.weight}
                  className="btn-primary flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Generate Report <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 p-5 bg-teal-50 rounded-2xl border border-teal-100">
            <p className="text-xs font-semibold text-teal-700 mb-3 uppercase tracking-wider">Your report includes</p>
            <div className="grid grid-cols-2 gap-2">
              {['BMI & WHO Class', 'BMR (Mifflin-St Jeor)', 'TDEE', 'Estimated FFMI (Boer)', 'Calorie Target', 'Protein Target', 'Hydration Goal', 'Estimated Ideal Weight', 'Performance Score'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-teal-800">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
