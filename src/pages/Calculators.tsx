import React, { useState } from 'react';
import {
  calcBMI, bmiCategory, calcBMR, calcTDEE, calcFFMIAdvanced,
  calcIdealWeight, calcHydration, calc1RM, calcPace, calcWaistToHeightRatio, calcNavyBodyFat
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
        { label: 'Method', value: 'WHO BMI Classification', note: 'Does not distinguish fat mass from lean mass.' },
      ];
    },
  },
  {
    id: 'navy_body_fat', name: 'Body Fat Calculator', description: 'Anthropometric body composition estimation.',
    category: 'Body Composition', color: 'teal',
    inputs: [
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'neck', label: 'Neck Circumference', type: 'number', placeholder: '38', unit: 'cm' },
      { id: 'waist', label: 'Waist Circumference', type: 'number', placeholder: '82', unit: 'cm' },
      { id: 'hip', label: 'Hip Circumference (Female only)', type: 'number', placeholder: '95', unit: 'cm', showIf: (vals) => vals.gender === 'female' },
    ],
    compute: (v) => {
      const bf = calcNavyBodyFat(v.gender || 'male', +v.height, +v.neck, +v.waist, v.hip ? +v.hip : undefined);
      return [
        { label: 'Estimated Body Fat %', value: `${bf.toFixed(1)}%` },
        { label: 'Method', value: 'U.S. Navy Body Fat Equation' },
        { label: 'Note', value: 'This estimate is based on the validated U.S. Navy anthropometric equation and should not be interpreted as a laboratory body composition measurement such as DEXA.' },
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
      return [
        { label: 'BMR', value: `${Math.round(bmr)} kcal/day` },
        { label: 'Method', value: 'Mifflin-St Jeor Equation', note: 'Validated metabolic rate estimation formula.' },
      ];
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
        { label: 'Method', value: 'Mifflin-St Jeor Equation + Standard Physical Activity Multipliers' },
      ];
    },
  },
  {
    id: 'ffmi', name: 'FFMI', description: 'Fat-Free Mass Index — lean mass relative to height.',
    category: 'Body Composition', color: 'amber',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', placeholder: '80', unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
      { id: 'bodyFat', label: 'Body Fat % (Optional - Enables Mode A)', type: 'number', placeholder: '15', unit: '%' },
    ],
    compute: (v) => {
      const bfInput = v.bodyFat ? parseFloat(v.bodyFat) : undefined;
      const result = calcFFMIAdvanced(+v.weight, +v.height, v.gender || 'male', bfInput);
      
      const res: CalcResult = [
        { label: result.displayName, value: `${result.ffmi.toFixed(2)} kg/m²`, note: result.isEstimated ? 'Estimated LBM via Boer Equation' : 'Direct calculation' },
      ];
      if (result.normalizedFfmi !== undefined) {
        res.push({ label: 'Normalized FFMI', value: `${result.normalizedFfmi.toFixed(2)} kg/m²`, note: 'Height-normalized to 1.80m' });
      }
      res.push({ label: 'Method', value: result.isEstimated ? 'Boer Lean Body Mass Equation' : 'Direct calculation from user-entered body fat percentage.' });
      return res;
    },
  },
  {
    id: 'ideal_weight', name: 'Estimated Ideal Body Weight', description: 'Ideal body weight range for your height.',
    category: 'Body Composition', color: 'green',
    inputs: [
      { id: 'height', label: 'Height', type: 'number', placeholder: '178', unit: 'cm' },
      { id: 'gender', label: 'Sex', type: 'select', placeholder: '', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
    ],
    compute: (v) => {
      const ideal = calcIdealWeight(+v.height, v.gender || 'male');
      return [
        { label: 'Estimated Ideal Weight', value: `${ideal.toFixed(1)} kg` },
        { label: 'Method', value: 'Devine Formula' },
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
        { label: 'Daily Water', value: `${h.toFixed(1)} L` },
        { label: 'Method', value: 'General daily hydration estimate', note: 'General daily hydration estimate (not a clinical recommendation).' },
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
        { label: 'Estimated 1RM', value: `${orm.toFixed(1)} kg` },
        { label: 'Method', value: 'Epley Equation' },
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
        { label: 'Method', value: 'Standard distance/time velocity calculation' },
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
        { label: 'Healthy Cutoff', value: '< 0.50' },
        { label: 'Method', value: 'Waist-to-Height Ratio (WHtR)' },
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
    : calculators.filter(c => c.category === activeCategory);

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
