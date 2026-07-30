import React, { useState } from 'react';
import {
  calcBMI, bmiCategory, calcBMR, calcTDEE, calcFFMI,
  calcIdealWeight, calcHydration, calc1RM, calcPace, calcWaistToHeightRatio
} from '@/lib/calculations';
import { Calculator, ChevronDown } from 'lucide-react';

type CalcResult = { label: string; value: string; note?: string }[];

type CalcInput = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  unit?: string;
  options?: { value: string; label: string }[];
  showIf?: (values: Record<string, string>) => boolean;
};

const calculators: {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  inputs: CalcInput[];
  compute: (vals: Record<string, string>) => CalcResult;
}[] = [
  {
    id: 'bmi', name: 'BMI', description: 'Body Mass Index — weight relative to height.',
    category: 'Body Composition', color: 'teal',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '75', unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
    ],
    compute: (v) => {
      const bmi = calcBMI(+v.weight, +v.height);
      const catLabel = bmiCategory(bmi).label;
      return [
        { label: 'BMI', value: bmi.toFixed(1), note: catLabel },
        { label: 'Healthy Range', value: '18.5 – 24.9 kg/m²' },
      ];
    },
  },
  {
    id: 'bmr', name: 'BMR', description: 'Basal Metabolic Rate — calories at complete rest.',
    category: 'Energy', color: 'blue',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '75', unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'age', label: 'Age', type: 'number', placeholder: '28', unit: 'years' },
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
    ],
    compute: (v) => {
      const bmr = calcBMR(+v.weight, +v.height, +v.age, v.gender || 'male');
      return [{ label: 'BMR', value: `${Math.round(bmr)} kcal/day`, note: 'Mifflin-St Jeor equation' }];
    },
  },
  {
    id: 'tdee', name: 'TDEE', description: 'Total Daily Energy Expenditure.',
    category: 'Energy', color: 'blue',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '75', unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'age', label: 'Age', type: 'number', placeholder: '28', unit: 'years' },
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
      { id: 'activity', label: 'Activity', type: 'select', placeholder: '', options: [
        { value: 'sedentary', label: 'Sedentary' },
        { value: 'light', label: 'Light (1-3 days/week)' },
        { value: 'moderate', label: 'Moderate (3-5 days/week)' },
        { value: 'active', label: 'Active (6-7 days/week)' },
        { value: 'very_active', label: 'Very Active (2x/day)' },
      ]},
    ],
    compute: (v) => {
      const bmr = calcBMR(+v.weight, +v.height, +v.age, v.gender || 'male');
      const tdee = calcTDEE(bmr, v.activity || 'moderate');
      return [
        { label: 'TDEE', value: `${Math.round(tdee)} kcal/day` },
        { label: 'For Weight Loss', value: `${Math.round(tdee - 500)} kcal/day` },
        { label: 'For Muscle Gain', value: `${Math.round(tdee + 300)} kcal/day` },
      ];
    },
  },
  {
    id: 'ffmi', name: 'FFMI', description: 'Fat-Free Mass Index — lean mass relative to height.',
    category: 'Body Composition', color: 'amber',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '80', unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
    ],
    compute: (v) => {
      const ffmiVal = calcFFMI(+v.weight, +v.height);
      const interpretation = ffmiVal < 18 ? 'Below average' : ffmiVal < 20 ? 'Average' : ffmiVal < 22 ? 'Above average' : ffmiVal < 25 ? 'Excellent' : 'Elite';
      return [
        { label: 'FFMI', value: `${ffmiVal.toFixed(2)} kg/m²`, note: interpretation },
      ];
    },
  },
  {
    id: 'ideal_weight', name: 'Ideal Weight', description: 'Ideal body weight range for your height.',
    category: 'Body Composition', color: 'green',
    inputs: [
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
    ],
    compute: (v) => {
      const ideal = calcIdealWeight(+v.height, v.gender || 'male');
      return [
        { label: 'Ideal Weight', value: `${ideal.toFixed(1)} kg`, note: 'Devine formula' },
        { label: 'Healthy BMI Range', value: `${(18.5 * (+v.height / 100) ** 2).toFixed(1)} – ${(24.9 * (+v.height / 100) ** 2).toFixed(1)} kg` },
      ];
    },
  },
  {
    id: 'hydration', name: 'Hydration', description: 'Daily water intake recommendation.',
    category: 'Nutrition', color: 'blue',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '75', unit: 'kg' },
      { id: 'activity', label: 'Activity', type: 'select', placeholder: '', options: [
        { value: 'sedentary', label: 'Sedentary' },
        { value: 'light', label: 'Light' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'active', label: 'Active' },
        { value: 'very_active', label: 'Very Active' },
      ]},
    ],
    compute: (v) => {
      const h = calcHydration(+v.weight, v.activity || 'moderate');
      return [
        { label: 'Daily Water', value: `${h.toFixed(1)} L`, note: 'Increase on training days' },
        { label: 'Hourly Average', value: `${(h / 16).toFixed(2)} L/hr`, note: 'During waking hours' },
      ];
    },
  },
  {
    id: 'one_rm', name: '1RM Calculator', description: 'Estimated one-rep maximum.',
    category: 'Strength', color: 'rose',
    inputs: [
      { id: 'weight', label: 'Weight Lifted', type: 'number', placeholder: '80', unit: 'kg' },
      { id: 'reps', label: 'Reps Performed', type: 'number', placeholder: '5' },
    ],
    compute: (v) => {
      const orm = calc1RM(+v.weight, +v.reps);
      return [
        { label: 'Estimated 1RM', value: `${orm.toFixed(1)} kg`, note: 'Epley formula' },
        { label: '90% 1RM (3-5 reps)', value: `${(orm * 0.9).toFixed(1)} kg` },
        { label: '80% 1RM (8-12 reps)', value: `${(orm * 0.8).toFixed(1)} kg` },
        { label: '70% 1RM (15-20 reps)', value: `${(orm * 0.7).toFixed(1)} kg` },
      ];
    },
  },
  {
    id: 'pace', name: 'Running Pace', description: 'Calculate your running pace per kilometre.',
    category: 'Performance', color: 'violet',
    inputs: [
      { id: 'distance', label: 'Distance', type: 'number', placeholder: '5', unit: 'km' },
      { id: 'minutes', label: 'Total Time', type: 'number', placeholder: '25', unit: 'minutes' },
    ],
    compute: (v) => {
      const pace = calcPace(+v.distance, +v.minutes);
      const speedKmh = (+v.distance / +v.minutes) * 60;
      return [
        { label: 'Pace', value: `${pace} / km` },
        { label: 'Speed', value: `${speedKmh.toFixed(2)} km/h` },
      ];
    },
  },
  {
    id: 'waist_height', name: 'Waist-to-Height Ratio', description: 'Abdominal obesity screening tool.',
    category: 'Body Composition', color: 'amber',
    inputs: [
      { id: 'waist', label: 'Waist Circumference', type: 'number', placeholder: '82', unit: 'cm' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
    ],
    compute: (v) => {
      const whr = calcWaistToHeightRatio(+v.waist, +v.height);
      const risk = whr < 0.4 ? 'Underweight risk' : whr < 0.5 ? 'Healthy' : whr < 0.6 ? 'Increased risk' : 'High risk';
      return [
        { label: 'WHtR', value: whr.toFixed(3), note: risk },
        { label: 'Healthy Range', value: '< 0.50' },
      ];
    },
  },
];

const categoryColors: Record<string, string> = {
  'Body Composition': 'badge-teal',
  'Energy': 'badge-blue',
  'Nutrition': 'badge-blue',
  'Strength': 'badge-rose',
  'Performance': 'badge-violet',
};

function CalcCard({ calc }: { calc: typeof calculators[0] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CalcResult | null>(null);
  const [open, setOpen] = useState(false);

  const colorMap: Record<string, string> = {
    teal: 'text-teal-600 bg-teal-50',
    blue: 'text-blue-600 bg-blue-50',
    amber: 'text-amber-600 bg-amber-50',
    rose: 'text-rose-600 bg-rose-50',
    green: 'text-green-600 bg-green-50',
    violet: 'text-violet-600 bg-violet-50',
  };

  const visibleInputs = calc.inputs.filter((input) => !input.showIf || input.showIf(values));

  const handleCalculate = () => {
    try {
      const res = calc.compute(values);
      setResult(res);
    } catch {
      setResult(null);
    }
  };

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl ${colorMap[calc.color]} flex items-center justify-center flex-shrink-0`}>
          <Calculator className="w-5 h-5" />
        </div>
        <span className={`${categoryColors[calc.category] || 'badge-teal'} badge text-xs`}>{calc.category}</span>
      </div>

      <h3 className="text-base font-semibold text-slate-900 mb-1">{calc.name}</h3>
      <p className="text-xs text-slate-500 mb-4">{calc.description}</p>

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm text-teal-600 font-medium py-2 hover:text-teal-700 transition-colors"
      >
        {open ? 'Close Calculator' : 'Open Calculator'}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="border-t border-slate-100 pt-4 mt-2 animate-fade-in space-y-4">
          {visibleInputs.map((input) => (
            <div key={input.id}>
              <label className="label">{input.label}{input.unit && <span className="text-slate-400 ml-1">({input.unit})</span>}</label>
              {input.type === 'select' ? (
                <select
                  value={values[input.id] ?? input.options?.[0]?.value ?? ''}
                  onChange={e => setValues({ ...values, [input.id]: e.target.value })}
                  className="select"
                >
                  {input.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ) : (
                <input
                  type="number"
                  value={values[input.id] || ''}
                  onChange={e => setValues({ ...values, [input.id]: e.target.value })}
                  placeholder={input.placeholder}
                  className="input"
                />
              )}
            </div>
          ))}

          <button onClick={handleCalculate} className="btn-primary w-full justify-center">
            Calculate
          </button>

          {result && (
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 space-y-3 animate-fade-in">
              {result.map((r, i) => (
                <div key={i}>
                  <div className="text-xs text-teal-600 font-medium">{r.label}</div>
                  <div className="text-lg font-bold text-teal-900">{r.value}</div>
                  {r.note && <div className="text-xs text-teal-600">{r.note}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const categories = ['All', 'Body Composition', 'Energy', 'Nutrition', 'Strength', 'Performance'];

export default function Calculators() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? calculators
    : calculators.filter ? calculators.filter(c => c.category === activeCategory) : calculators;

  return (
    <div className="min-h-screen bg-surface page-enter">
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-blue mb-4">Calculators</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Performance Calculators</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Professional calculators for body composition, energy, nutrition, strength, and performance metrics.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === c
                  ? 'bg-teal-500 text-white shadow-teal'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((calc) => <CalcCard key={calc.id} calc={calc} />)}
        </div>
      </div>
    </div>
  );
}