export type Exercise = {
  id: string;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  primaryMuscles: string[];
  equipment: string;
  description: string;
  instructions: string[];
  commonMistakes: string[];
  progressions: string[];
  regressions: string[];
  image?: string;
};