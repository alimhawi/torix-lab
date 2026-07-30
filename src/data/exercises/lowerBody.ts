import { Exercise } from './types';

export const lowerBodyExercises: Exercise[] = [
  {
    id: '1',
    name: 'Chair Squat',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes'],
    equipment: 'Chair',
    description: 'An accessible squat regression that teaches proper hip hinge and knee tracking using a chair as a depth marker.',
    instructions: [
      'Stand in front of a sturdy chair with feet shoulder-width apart and toes slightly turned out',
      'Push your hips back and bend knees to lower down until glutes softly touch the chair seat',
      'Pause briefly on the seat without releasing body tension',
      'Drive through your full foot to return to standing'
    ],
    commonMistakes: [
      'Collapsing onto the chair instead of maintaining muscle control',
      'Allowing knees to cave inward during squat or ascent',
      'Lifting heels off the floor'
    ],
    progressions: ['Bodyweight Squat', 'Wall Sit'],
    regressions: ['High Chair Sit-to-Stand']
  },
  {
    id: '2',
    name: 'Bodyweight Squat',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    equipment: 'None',
    description: 'The foundational lower body compound movement. Builds total-leg strength, hip mobility, and core stability.',
    instructions: [
      'Stand with feet shoulder-width apart, chest upright, and core braced',
      'Initiate the movement by hinging hips back and bending knees simultaneously',
      'Lower until thighs are parallel to the floor or as deep as mobility allows with a flat back',
      'Drive through the heels and mid-foot to return to full extension'
    ],
    commonMistakes: [
      'Valgus knee collapse (knees caving inward)',
      'Rounding the lower back at the bottom of the movement',
      'Rising onto the toes rather than keeping feet flat'
    ],
    progressions: ['Reverse Lunge', 'Bulgarian Split Squat', 'Pistol Squat'],
    regressions: ['Chair Squat', 'Wall Sit']
  },
  {
    id: '3',
    name: 'Wall Sit',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes'],
    equipment: 'Wall',
    description: 'An isometric endurance hold that strengthens the quadriceps and knees with minimal joint impact.',
    instructions: [
      'Stand with your back against a smooth wall and feet shoulder-width apart, about two feet from the wall',
      'Slide your back down the wall until knees are bent at a 90-degree angle and thighs are parallel to the floor',
      'Keep your entire spine pressed flat against the wall and arms at your sides',
      'Hold the position firmly for the target duration while breathing steadily'
    ],
    commonMistakes: [
      'Resting hands on thighs to support weight',
      'Allowing knees to extend past toes or collapse inward',
      'Positioning hips higher than knee level'
    ],
    progressions: ['Single-Leg Wall Sit', 'Bodyweight Squat'],
    regressions: ['High-Angle Wall Sit']
  },
  {
    id: '4',
    name: 'Glute Bridge',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    equipment: 'None',
    description: 'The foundational supine hip extension exercise targeting posterior chain activation and hip stability.',
    instructions: [
      'Lie on your back with knees bent, feet flat on the floor hip-width apart, and arms at your sides',
      'Brace your core and press heels into the floor to lift hips until knees, hips, and shoulders form a straight line',
      'Squeeze glutes tightly at the peak position for 1-2 seconds',
      'Lower hips back to the floor under complete control'
    ],
    commonMistakes: [
      'Arching the lower back excessively instead of extending at the hips',
      'Pushing through the toes rather than the heels',
      'Rushing reps without achieving peak glute contraction'
    ],
    progressions: ['Single-Leg Glute Bridge', 'Towel Floor Hamstring Curl'],
    regressions: ['Static Glute Bridge Hold']
  },
  {
    id: '5',
    name: 'Reverse Lunge',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    equipment: 'None',
    description: 'A joint-friendly unilateral exercise that builds single-leg strength, deceleration control, and balance.',
    instructions: [
      'Stand tall with feet hip-width apart and hands on hips or at chest level',
      'Take a controlled step backward with one foot and lower your back knee toward the floor',
      'Lower until both knees form roughly 90-degree angles, keeping front shin nearly vertical',
      'Press through the front heel to step forward into the starting upright position'
    ],
    commonMistakes: [
      'Slamming the back knee forcefully into the floor',
      'Leaning the torso excessively forward or rounding shoulders',
      'Allowing the front knee to cave inward past the big toe'
    ],
    progressions: ['Bulgarian Split Squat', 'Step-Up'],
    regressions: ['Assisted Reverse Lunge', 'Static Split Squat']
  },
  {
    id: '6',
    name: 'Standing Calf Raise',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves'],
    equipment: 'Stairs',
    description: 'An essential lower-leg isolation movement targeting gastrocnemius strength and ankle plantarflexion.',
    instructions: [
      'Stand on the edge of a step or stair with heels hanging off and balls of feet firmly planted',
      'Lightly hold a wall or railing for balance',
      'Lower your heels below the step level to feel a deep calf stretch',
      'Drive through the balls of your feet to raise your heels as high as possible'
    ],
    commonMistakes: [
      'Bending the knees to bounce through repetitions',
      'Shortening the stretch at the bottom or peak contraction at the top',
      'Relying heavily on hands to pull body weight upward'
    ],
    progressions: ['Single-Leg Calf Raise'],
    regressions: ['Floor-Level Calf Raise']
  },
  {
    id: '7',
    name: 'Side-Lying Leg Raise',
    category: 'Lower Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Gluteus Medius', 'Hip Abductors'],
    equipment: 'None',
    description: 'A targeted lateral hip drill for isolating the gluteus medius, essential for pelvic alignment and knee stability.',
    instructions: [
      'Lie on your side with legs fully extended and stacked directly on top of each other',
      'Rest head on lower arm and place upper hand on floor in front of chest for support',
      'Keeping top leg straight and foot slightly pointed downward, raise leg to roughly 45 degrees',
      'Pause briefly at the top, then lower leg down smoothly under tension'
    ],
    commonMistakes: [
      'Rolling hips backward during the leg lift',
      'Pointing toes upward toward ceiling (shifts focus to hip flexors)',
      'Using momentum to kick the leg up'
    ],
    progressions: ['Side Plank with Leg Lift', 'Cossack Squat'],
    regressions: ['Clamshell']
  },
  {
    id: '8',
    name: 'Bulgarian Split Squat',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes'],
    equipment: 'Chair',
    description: 'An advanced elevated unilateral squat that overloads single-leg strength, hip flexor flexibility, and balance.',
    instructions: [
      'Stand about two feet in front of a sturdy chair, facing away',
      'Place top of rear foot flat onto the chair seat behind you',
      'Lower your torso by bending front knee until rear knee almost touches the floor',
      'Drive through front heel to return to standing lockout position'
    ],
    commonMistakes: [
      'Placing front foot directly in line with rear foot (narrow base causes loss of balance)',
      'Allowing front heel to lift off the ground',
      'Rounding upper back or leaning excessively forward'
    ],
    progressions: ['Deficit Bulgarian Split Squat', 'Pistol Squat'],
    regressions: ['Reverse Lunge', 'Static Split Squat']
  },
  {
    id: '9',
    name: 'Single-Leg Glute Bridge',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    equipment: 'None',
    description: 'Unilateral extension drill that corrects left-to-right glute imbalances and strengthens pelvic stabilization.',
    instructions: [
      'Lie on back with knees bent, feet flat, and arms at sides',
      'Extend one leg straight out in line with thigh or pull knee gently toward chest',
      'Drive working heel into floor to raise hips until fully aligned with torso',
      'Lower hips back to floor under control without resting heavily at bottom'
    ],
    commonMistakes: [
      'Tilting or dropping hip of extended leg side during lift',
      'Hyperextending lower back at top lockout',
      'Pushing through forefoot instead of heel'
    ],
    progressions: ['Towel Floor Hamstring Curl', 'Single-Leg Romanian Deadlift'],
    regressions: ['Glute Bridge']
  },
  {
    id: '10',
    name: 'Single-Leg Romanian Deadlift',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hamstrings', 'Glutes', 'Core'],
    equipment: 'None',
    description: 'Unilateral hip hinge movement developing posterior chain strength, dynamic hamstring flexibility, and balance.',
    instructions: [
      'Stand on one leg with a soft bend in working knee',
      'Hinge forward at hips while extending free leg straight behind, keeping back flat',
      'Lower torso until parallel to floor or until hamstring stretch limits motion',
      'Squeeze glute and hamstrings to hinge back up into full standing alignment'
    ],
    commonMistakes: [
      'Rotating open at pelvis instead of keeping hips square to floor',
      'Rounding spine during hinge phase',
      'Locking out working knee completely rigid'
    ],
    progressions: ['Single-Leg RDL with Water Bottle Resistance'],
    regressions: ['Staggered-Stance Hip Hinge', 'Glute Bridge']
  },
  {
    id: '11',
    name: 'Cossack Squat',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Adductors'],
    equipment: 'None',
    description: 'A deep frontal-plane squat pattern that builds lateral hip power, ankle mobility, and groin flexibility.',
    instructions: [
      'Take a wide stance, roughly double shoulder-width apart',
      'Shift weight to one side and squat deeply over working knee while keeping opposite leg straight with heel grounded',
      'Flex straight leg foot upward toward ceiling as you lower hips',
      'Press through working heel to push back to center starting position'
    ],
    commonMistakes: [
      'Lifting working heel off ground at bottom of deep squat',
      'Collapsing chest forward over knee',
      'Failing to keep straight leg properly aligned'
    ],
    progressions: ['Single-Leg Pistol Squat'],
    regressions: ['Lateral Lunge']
  },
  {
    id: '12',
    name: 'Towel Floor Hamstring Curl',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hamstrings', 'Glutes', 'Core'],
    equipment: 'Towel',
    description: 'Dynamic floor exercise utilizing towel sliding friction on smooth floor surfaces for hamstring hypertrophy.',
    instructions: [
      'Lie on back on smooth floor with towel placed under heels and knees bent',
      'Lift hips into bridge position, keeping core tight and glutes engaged',
      'Slowly slide heels forward until legs are almost fully extended, keeping hips elevated off floor',
      'Contract hamstrings forcefully to pull heels back toward glutes'
    ],
    commonMistakes: [
      'Dropping hips to floor during extension phase',
      'Using momentum or arching lower back to pull heels back',
      'Rushing eccentric sliding phase'
    ],
    progressions: ['Single-Leg Towel Hamstring Curl'],
    regressions: ['Single-Leg Glute Bridge', 'Glute Bridge']
  },
  {
    id: '13',
    name: 'Step-Up',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes'],
    equipment: 'Stairs',
    description: 'Functional single-leg concentric power builder mimicking natural stair climbing and gait mechanics.',
    instructions: [
      'Stand facing a sturdy stair or step',
      'Place entire foot of working leg firmly on step',
      'Drive through front heel to lift body up until working leg is fully extended',
      'Lower opposite leg back to ground smoothly under tension'
    ],
    commonMistakes: [
      'Pushing off trailing toe on ground to assist upward lift',
      'Allowing working knee to cave inward',
      'Dropping down rapidly on return step'
    ],
    progressions: ['High Stair Step-Up', 'Bulgarian Split Squat'],
    regressions: ['Low Stair Step-Up', 'Reverse Lunge']
  },
  {
    id: '14',
    name: 'Single-Leg Calf Raise',
    category: 'Lower Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Calves'],
    equipment: 'Stairs',
    description: 'Unilateral calf elevation exercise that overloads gastrocnemius and soleus for improved ankle stiffness.',
    instructions: [
      'Stand on one foot on edge of step with heel hanging off',
      'Hold wall or rail lightly for balance support',
      'Lower heel down fully to achieve full Achilles stretch',
      'Press through ball of foot to elevate heel as high as possible'
    ],
    commonMistakes: [
      'Bending working knee to bounce up',
      'Rushing through eccentric stretch phase',
      'Pushing off balance support hand'
    ],
    progressions: ['Weighted Single-Leg Calf Raise with Water Bottle'],
    regressions: ['Standing Calf Raise']
  },
  {
    id: '15',
    name: 'Pistol Squat',
    category: 'Advanced',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Core'],
    equipment: 'None',
    description: 'The peak bodyweight single-leg exercise requiring elite quad strength, hip flexor tension, and balance.',
    instructions: [
      'Stand on one leg with non-working leg extended straight out in front',
      'Extend arms forward for counter-balance and brace core deeply',
      'Hinge hips and bend working knee to squat down under control until glute touches calf',
      'Drive through working heel to rise all the way back to full lockout'
    ],
    commonMistakes: [
      'Allowing working heel to lift off floor during descent',
      'Losing core tension causing non-working foot to drag on ground',
      'Knee collapsing inward under deep load'
    ],
    progressions: ['Single-Leg Box Jump'],
    regressions: ['Assisted Pistol Squat with Chair Support', 'Bulgarian Split Squat']
  }
];