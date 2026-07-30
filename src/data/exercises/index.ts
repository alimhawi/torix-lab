import { Exercise } from './types';
import { upperBodyExercises } from './upperBody';
import { lowerBodyExercises } from './lowerBody';
import { coreExercises } from './core';
import { mobilityExercises } from './mobility';
import { rehabilitationExercises } from './rehabilitation';
import { warmUpExercises } from './warmup';
import { coolDownExercises } from './cooldown';
import { plyometricsExercises } from './plyometrics';

export type { Exercise };

const rawExercises: Exercise[] = [
  ...upperBodyExercises,
  ...lowerBodyExercises,
  ...coreExercises,
  ...mobilityExercises,
  ...rehabilitationExercises,
  ...warmUpExercises,
  ...coolDownExercises,
  ...plyometricsExercises,
];

// دمج وتوليد ID فريد لكل تمرين لحل مشكلة التكرار نهائياً
export const exercises: Exercise[] = rawExercises.map((exercise, index) => ({
  ...exercise,
  id: `${exercise.id || 'ex'}-${index}`,
}));