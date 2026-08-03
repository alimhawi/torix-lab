/**
 * TORIX LAB - Sports Science Calculation Engine
 * Evidence-based formulas for fitness, nutrition, and rehabilitation professionals.
 */

export interface FFMIResult {
  ffmi: number;
  normalizedFfmi?: number;
  lbm: number;
  isEstimated: boolean;
  method: string;
  displayName: string;
}

/**
 * Body Mass Index (BMI)
 * Method: WHO BMI Classification
 */
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

/**
 * Basal Metabolic Rate (BMR)
 * Method: Mifflin-St Jeor Equation
 */
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

/**
 * Total Daily Energy Expenditure (TDEE)
 * Method: Mifflin-St Jeor Equation + Standard Physical Activity Multipliers
 */
export function calcTDEE(bmr: number, activityLevel: string): number {
  const mult = activityMultipliers[activityLevel] || 1.55;
  return bmr * mult;
}

/**
 * Fat-Free Mass Index (FFMI)
 * Mode A (Preferred): Direct calculation from user-entered body fat percentage.
 * Mode B (Estimated): Estimated Lean Body Mass using the validated Boer Equation.
 */
export function calcFFMIAdvanced(weight: number, height: number, gender: string = 'male', bodyFat?: number): FFMIResult {
  if (!weight || !height) return { ffmi: 0, lbm: 0, isEstimated: true, method: '', displayName: '' };
  const heightM = height / 100;

  if (bodyFat !== undefined && !isNaN(bodyFat) && bodyFat > 0) {
    // Mode A: Direct calculation from body fat %
    const lbm = weight * (1 - bodyFat / 100);
    const rawFFMI = lbm / (heightM * heightM);
    const normalizedFFMI = rawFFMI + 6.1 * (1.80 - heightM);
    return {
      ffmi: rawFFMI,
      normalizedFfmi: normalizedFFMI,
      lbm,
      isEstimated: false,
      method: 'Direct calculation from user-entered body fat percentage.',
      displayName: 'FFMI',
    };
  } else {
    // Mode B: Estimated using Boer Equation
    const lbm = gender === 'female'
      ? (0.252 * weight + 0.473 * height - 48.3)
      : (0.407 * weight + 0.267 * height - 19.2);
    const ffmi = lbm / (heightM * heightM);
    return {
      ffmi,
      lbm,
      isEstimated: true,
      method: 'Boer Lean Body Mass Equation',
      displayName: 'Estimated FFMI',
    };
  }
}

/**
 * Legacy wrapper for simple FFMI calculations
 */
export function calcFFMI(weight: number, height: number, gender: string = 'male', bodyFat?: number): number {
  return calcFFMIAdvanced(weight, height, gender, bodyFat).ffmi;
}

/**
 * Estimated Lean Body Mass (LBM)
 * Method: Boer Lean Body Mass Equation
 */
export function calcEstimatedLBM(weight: number, height: number, gender: string = 'male'): number {
  if (!weight || !height) return 0;
  if (gender === 'female') {
    return 0.252 * weight + 0.473 * height - 48.3;
  }
  return 0.407 * weight + 0.267 * height - 19.2;
}

/**
 * U.S. Navy Body Fat Percentage Calculator
 * Method: U.S. Navy Body Fat Equation (inputs converted to inches for imperial coefficient precision)
 */
export function calcNavyBodyFat(
  gender: string,
  height: number, // cm
  neck: number,   // cm
  waist: number,  // cm
  hip?: number    // cm (female only)
): number {
  if (!height || !neck || !waist) return 0;
  const heightIn = height / 2.54;
  const neckIn = neck / 2.54;
  const waistIn = waist / 2.54;

  if (gender === 'female') {
    if (!hip) return 0;
    const hipIn = hip / 2.54;
    const bf = 163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387;
    return Math.max(0, bf);
  } else {
    const bf = 86.010 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.76;
    return Math.max(0, bf);
  }
}

/**
 * Estimated Ideal Body Weight
 * Method: Devine Formula
 */
export function calcIdealWeight(height: number, gender: string): number {
  if (!height) return 0;
  const heightInches = height / 2.54;
  const inchesOver5Feet = Math.max(0, heightInches - 60);
  const base = gender === 'female' ? 45.5 : 50;
  return base + (2.3 * inchesOver5Feet);
}

/**
 * General Daily Hydration Estimate
 * Method: General daily hydration estimate (not a clinical recommendation)
 */
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

/**
 * Estimated One-Rep Maximum (1RM)
 * Method: Epley Equation
 */
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

/**
 * Waist-to-Height Ratio (WHtR)
 * Method: Waist-to-Height Ratio (WHtR)
 */
export function calcWaistToHeightRatio(waist: number, height: number): number {
  if (!waist || !height) return 0;
  return waist / height;
}