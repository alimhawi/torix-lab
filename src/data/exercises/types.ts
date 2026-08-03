export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
  equipment: string;
  difficulty: Difficulty;
  primaryMuscles: string[];
  description: string;
  instructions: string[];
  commonMistakes: string[];
  coachingTips?: string[];
  progressions: string[];
  regressions: string[];
}