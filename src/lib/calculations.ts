export function calcBMI(weight: number, height: number): number {
  if (!weight || !height) return 0;
  const heightM = height / 100;
  return weight / (heightM * heightM);
}

export function bmiCategory(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: 'Underweight', color: 'blue' };
  if (bmi < 25) return { label: 'Normal weight', color: 'green' };
  if (bmi < 30) return { label: 'Overweight', color: 'amber' };
  return { label: 'Obese', color: 'rose' };
}

export function calcBMR(weight: number, height: number, age: number, gender: string): number {
  if (!weight || !height || !age) return 0;
  const s = gender === 'female' ? -161 : 5;
  return (10 * weight) + (6.25 * height) - (5 * age) + s;
}

const activityMultipliers: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export function calcTDEE(bmr: number, activityLevel: string): number {
  const mult = activityMultipliers[activityLevel] || 1.55;
  return bmr * mult;
}

export function calcFFMI(weight: number, height: number): number {
  if (!weight || !height) return 0;
  const heightM = height / 100;
  const lbm = weight * 0.82;
  return lbm / (heightM * heightM);
}

export function calcIdealWeight(height: number, gender: string): number {
  if (!height) return 0;
  const heightInches = height / 2.54;
  const inchesOver5Feet = Math.max(0, heightInches - 60);
  const base = gender === 'female' ? 45.5 : 50;
  return base + (2.3 * inchesOver5Feet);
}

export function calcHydration(weight: number, activityLevel: string): number {
  if (!weight) return 0;
  const base = weight * 0.035;
  const additions: Record<string, number> = {
    sedentary: 0,
    light: 0.3,
    moderate: 0.5,
    active: 0.8,
    very_active: 1.0,
  };
  return base + (additions[activityLevel] || 0.5);
}

export function calcProtein(weight: number, goal: string, activityLevel: string): number {
  if (!weight) return 0;
  let multiplier = 1.6;
  if (goal === 'muscle_gain') multiplier = 2.0;
  else if (goal === 'weight_loss') multiplier = 1.8;
  else if (goal === 'performance') multiplier = 1.8;
  else if (goal === 'rehabilitation') multiplier = 1.7;
  else if (goal === 'maintenance') multiplier = 1.6;
  return weight * multiplier;
}

export function getCalorieGoal(tdee: number, goal: string): number {
  if (!tdee) return 0;
  if (goal === 'weight_loss') return tdee - 500;
  if (goal === 'muscle_gain') return tdee + 300;
  if (goal === 'performance') return tdee + 150;
  if (goal === 'rehabilitation') return tdee;
  return tdee;
}

export function calc1RM(weight: number, reps: number): number {
  if (!weight || !reps) return 0;
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

export function calcPace(distance: number, minutes: number): string {
  if (!distance || !minutes) return '0:00';
  const totalSeconds = (minutes / distance) * 60;
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.round(totalSeconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function calcWaistToHeightRatio(waist: number, height: number): number {
  if (!waist || !height) return 0;
  return waist / height;
}
export function calcEstimatedLBM(weight: number, height: number, gender: string = 'male'): number {
  if (!weight || !height) return 0;
  // معادلة Boer لحساب الكتلة العضلية الخالية من الدهون (Lean Body Mass)
  if (gender === 'female') {
    return 0.252 * weight + 0.473 * height - 48.3;
  }
  return 0.407 * weight + 0.267 * height - 19.2;
}