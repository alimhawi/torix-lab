export interface Exercise {
  id: string;
  name: string;
  slug: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  primaryMuscles: string[];
  image: string;
  equipment: string;
  description: string;
  instructions: string[];
  commonMistakes: string[];
  progressions: string[];
  regressions: string[];
}

export const warmUpExercises: Exercise[] = [
  {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    slug: 'jumping-jacks',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Full Body', 'Cardiovascular System', 'Calves', 'Shoulders'],
    image: '/images/exercises/warm-up/jumping-jacks.webp',
    equipment: 'Bodyweight',
    description: 'A classic full-body calisthenic movement designed to elevate heart rate, increase circulation, and Warm-Up major muscle groups.',
    instructions: [
      'Stand upright with feet together and arms at your sides.',
      'Simultaneously jump your feet out to the sides while swinging your arms overhead.',
      'Quickly reverse the movement by jumping your feet back together and bringing your arms to your sides.',
      'Maintain a steady, rhythmic pace.'
    ],
    commonMistakes: [
      'Landing heavily on heels',
      'Flailing arms without control'
    ],
    progressions: [
      'High Knees',
      'Pogo Hops'
    ],
    regressions: [
      'Step Jacks'
    ]
  },
  {
    id: 'high-knees',
    name: 'High Knees',
    slug: 'high-knees',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hip Flexors', 'Core', 'Quadriceps', 'Cardiovascular System'],
    image: '/images/exercises/warm-up/high-knees.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic running-in-place movement that activates hip flexors, engages the core, and rapidly elevates core body temperature.',
    instructions: [
      'Stand tall with feet hip-width apart.',
      'Drive one knee up toward your chest while pumping the opposite arm.',
      'Quickly switch legs in a running motion, landing softly on the balls of your feet.',
      'Keep your torso upright and core engaged throughout.'
    ],
    commonMistakes: [
      'Leaning backward during knee drives',
      'Slumping shoulders forward'
    ],
    progressions: [
      'Sprinting High Knees'
    ],
    regressions: [
      'Marching in Place'
    ]
  },
  {
    id: 'butt-kicks',
    name: 'Butt Kicks',
    slug: 'butt-kicks',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Glutes', 'Calves'],
    image: '/images/exercises/warm-up/butt-kicks.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic running warm-up exercise focusing on hamstring activation and knee flexion mobility.',
    instructions: [
      'Stand upright with feet hip-width apart.',
      'Jog in place or move forward while bending your knees to bring your heels up toward your glutes.',
      'Pump your arms naturally in coordination with your leg movement.',
      'Keep your thighs relatively vertical and focus on a fast turnover rate.'
    ],
    commonMistakes: [
      'Leaning too far forward',
      'Failing to bring heels fully up'
    ],
    progressions: [
      'Fast-paced Butt Kicks'
    ],
    regressions: [
      'Slow Walking Butt Kicks'
    ]
  },
  {
    id: 'dynamic-arm-circles-and-cross-hugs',
    name: 'Dynamic Arm Circles & Cross Hugs',
    slug: 'dynamic-arm-circles-and-cross-hugs',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Shoulders', 'Chest', 'Upper Back', 'Rotator Cuff'],
    image: '/images/exercises/warm-up/dynamic-arm-circles-and-cross-hugs.webp',
    equipment: 'Bodyweight',
    description: 'A mobility sequence designed to lubricate the shoulder joints, open the chest, and Warm-Up the upper back.',
    instructions: [
      'Stand with feet shoulder-width apart and arms extended straight out to the sides.',
      'Perform controlled circular motions with your arms, starting small and gradually increasing the circle size.',
      'After several rotations, reverse direction.',
      'Transition into cross hugs by swinging arms wide apart and then crossing them over your chest alternately.'
    ],
    commonMistakes: [
      'Performing circles too fast without control',
      'Shrugging shoulders upward'
    ],
    progressions: [
      'Resistance Band Arm Circles'
    ],
    regressions: [
      'Smaller amplitude circles'
    ]
  },
  {
    id: 'wall-leg-swings',
    name: 'Wall Leg Swings',
    slug: 'wall-leg-swings',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hips', 'Hamstrings', 'Hip Flexors', 'Adductors'],
    image: '/images/exercises/warm-up/wall-leg-swings.webp',
    equipment: 'Wall',
    description: 'A dynamic lower-body mobility drill to loosen the hip joint, hamstrings, and hip flexors before activity.',
    instructions: [
      'Stand facing a wall and place both hands on the wall for support.',
      'Shift your weight onto one leg and swing the other leg forward and backward in a controlled pendulum motion.',
      'After completing front-to-back swings, turn sideways to the wall, hold with one hand, and swing the leg side-to-side across your body.',
      'Switch sides and repeat.'
    ],
    commonMistakes: [
      'Using momentum instead of controlled muscular swing',
      'Arching lower back during forward swing'
    ],
    progressions: [
      'Larger amplitude swings without holding wall support'
    ],
    regressions: [
      'Smaller, restricted range of motion swings'
    ]
  },
  {
    id: 'toy-soldiers',
    name: 'Toy Soldiers',
    slug: 'toy-soldiers',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Core', 'Hip Flexors'],
    image: '/images/exercises/warm-up/toy-soldiers.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic walking stretch that actively lengthens the hamstrings and mobilizes the hip complex.',
    instructions: [
      'Stand tall with arms extended straight out in front of you at shoulder height, palms facing down.',
      'Step forward and kick one straight leg up toward the opposite hand while keeping your torso upright.',
      'Lower the leg with control and step forward into the opposite leg kick.',
      'Continue alternating legs in a walking motion.'
    ],
    commonMistakes: [
      'Rounding the lower back to reach the foot',
      'Bending the kicking knee'
    ],
    progressions: [
      'Accelerated Toy Soldier skips'
    ],
    regressions: [
      'Slower, lower-height kicks'
    ]
  },
  {
    id: 'knee-hug-to-toe-raise',
    name: 'Knee Hug to Toe Raise',
    slug: 'knee-hug-to-toe-raise',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Glutes', 'Calves', 'Hip Flexors', 'Ankle Stabilizers'],
    image: '/images/exercises/warm-up/knee-hug-to-toe-raise.webp',
    equipment: 'Bodyweight',
    description: 'A combined mobility and activation drill that stretches the glutes/hip flexors and primes the lower calves.',
    instructions: [
      'Walk forward, pulling one knee into your chest with both hands while standing tall on the standing leg.',
      'Release the leg, step down into a stride, and immediately rise up onto your toes (calf raise) before taking the next step.',
      'Alternate legs continuously with each step forward.'
    ],
    commonMistakes: [
      'Rushing the balance transition',
      'Hunching forward when hugging the knee'
    ],
    progressions: [
      'Adding a single-leg hop at the top of the toe raise'
    ],
    regressions: [
      'Performing the movements separately while stationary holding a wall'
    ]
  },
  {
    id: 'dynamic-squat-to-overhead-reach',
    name: 'Dynamic Squat to Overhead Reach',
    slug: 'dynamic-squat-to-overhead-reach',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Shoulders', 'Thoracic Spine'],
    image: '/images/exercises/warm-up/dynamic-squat-to-overhead-reach.webp',
    equipment: 'Bodyweight',
    description: 'A multi-joint warm-up movement combining a deep bodyweight squat with an overhead extension to mobilize hips, spine, and shoulders.',
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Descend into a deep bodyweight squat, keeping your chest up and heels flat.',
      'Place your elbows inside your knees or reach down to touch your toes briefly, then drive up explosively while extending your arms overhead.',
      'Return to the starting position and repeat.'
    ],
    commonMistakes: [
      'Heels lifting off the floor during the squat',
      'Rushing the full extension phase'
    ],
    progressions: [
      'Jump Squat to Overhead Reach'
    ],
    regressions: [
      'Box Squat to Overhead Reach'
    ]
  },
  {
    id: 'walking-lunge-with-rotation',
    name: 'Walking Lunge with Rotation',
    slug: 'walking-lunge-with-rotation',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Core', 'Obliques', 'Thoracic Spine'],
    image: '/images/exercises/warm-up/walking-lunge-with-rotation.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic lunge variation incorporating torso rotation to activate lower body stability and mobilize the thoracic spine.',
    instructions: [
      'Step forward into a lunge position, lowering your back knee gently toward the floor.',
      'As you settle into the lunge, rotate your torso toward the front leg.',
      'Return your torso to center, push off the front foot, and step directly into the next lunge on the opposite leg.'
    ],
    commonMistakes: [
      'Front knee collapsing inward',
      'Rotating too quickly and losing balance'
    ],
    progressions: [
      'Adding a light medicine ball or plate twist'
    ],
    regressions: [
      'Stationary lunge with static rotation'
    ]
  },
  {
    id: 'lateral-shuffle',
    name: 'Lateral Shuffle',
    slug: 'lateral-shuffle',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Adductors', 'Abductors', 'Glutes', 'Agility Systems'],
    image: '/images/exercises/warm-up/lateral-shuffle.webp',
    equipment: 'Bodyweight',
    description: 'An agility and lateral movement drill designed to prime side-to-side muscle groups and improve multi-directional coordination.',
    instructions: [
      'Assume an athletic quarter-squat stance with feet shoulder-width apart and knees slightly bent.',
      'Push off your lead foot and shuffle sideways across the floor, bringing your trailing foot to meet your lead foot rapidly.',
      'Maintain a low athletic center of gravity and avoid crossing your feet.',
      'Reverse direction after a set distance.'
    ],
    commonMistakes: [
      'Crossing feet during the shuffle',
      'Standing too upright'
    ],
    progressions: [
      'Resisted lateral shuffle with band'
    ],
    regressions: [
      'Slow lateral step-outs'
    ]
  },
  {
    id: 'carioca',
    name: 'Carioca',
    slug: 'carioca',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hips', 'Obliques', 'Agility Systems', 'Coordination'],
    image: '/images/exercises/warm-up/carioca.webp',
    equipment: 'Bodyweight',
    description: 'An advanced footwork and agility drill that enhances hip mobility, coordination, and lateral speed.',
    instructions: [
      'Stand sideways and begin moving laterally by stepping your trailing foot alternately behind and then in front of your lead foot.',
      'Rotate your hips fluidly with each step while keeping your upper body relatively stable and facing forward.',
      'Maintain a quick, light footwork rhythm across the floor.'
    ],
    commonMistakes: [
      'Tripping over feet due to rushing',
      'Stiff hip rotation'
    ],
    progressions: [
      'High-speed Carioca with arm drive'
    ],
    regressions: [
      'Slow-motion Carioca step-through'
    ]
  },
  {
    id: 'pogo-hops',
    name: 'Pogo Hops',
    slug: 'pogo-hops',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Calves', 'Ankle Complex', 'Achilles Tendon', 'Elastic Recoil'],
    image: '/images/exercises/warm-up/pogo-hops.webp',
    equipment: 'Bodyweight',
    description: 'A plyometric spring-loading drill designed to activate the lower leg stiffness, ankle reactivity, and elastic energy storage.',
    instructions: [
      'Stand tall with hands on your hips or by your sides.',
      'Perform rapid, small bounces off the balls of your feet, minimizing ground contact time with each hop.',
      'Keep your legs relatively straight with soft knee bends, utilizing ankle snap and calf elasticity.'
    ],
    commonMistakes: [
      'Bending knees excessively like a squat jump',
      'Landing heavily on heels'
    ],
    progressions: [
      'Single-leg Pogo Hops'
    ],
    regressions: [
      'Low-amplitude calf bounces on a soft mat'
    ]
  },
  {
    id: 'worlds-greatest-stretch-dynamic',
    name: "World's Greatest Stretch (Dynamic)",
    slug: 'worlds-greatest-stretch-dynamic',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hip Flexors', 'Thoracic Spine', 'Hamstrings', 'Groin', 'Core'],
    image: '/images/exercises/warm-up/worlds-greatest-stretch-dynamic.webp',
    equipment: 'Bodyweight',
    description: 'A comprehensive full-body mobility flow targeting the hips, thoracic spine, hamstrings, and groin simultaneously.',
    instructions: [
      'Step forward into a long lunge with your right foot, placing your hands on the floor inside your right foot.',
      'Drop your left knee gently or keep it straight while sinking your hips forward.',
      'Take your right arm and reach it upward toward the ceiling, rotating your thoracic spine.',
      'Return your hand to the floor, shift your hips back to stretch your front hamstring, then step forward into the next repetition.'
    ],
    commonMistakes: [
      'Rushing through the transitions',
      'Failing to rotate from the upper back'
    ],
    progressions: [
      'Adding an overhead reach at the top of the lunge'
    ],
    regressions: [
      'Kneeling variation with modified reach'
    ]
  },
  {
    id: 'inchworm-to-plank',
    name: 'Inchworm to Plank',
    slug: 'inchworm-to-plank',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Hamstrings', 'Shoulders', 'Chest'],
    image: '/images/exercises/warm-up/inchworm-to-plank.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic flexibility and core strength exercise that actively stretches the hamstrings and engages the shoulder girdle.',
    instructions: [
      'Stand with feet hip-width apart, hinge at your hips, and place your hands on the floor (bending knees slightly if needed).',
      'Walk your hands forward incrementally until your body forms a stable high plank position.',
      'Hold the plank for a brief moment, then walk your feet forward toward your hands or walk your hands back to return to standing.'
    ],
    commonMistakes: [
      'Sagging hips when reaching the plank position',
      'Bending elbows prematurely'
    ],
    progressions: [
      'Adding a push-up at the bottom of the plank'
    ],
    regressions: [
      'Inchworm stopping at an elevated incline surface'
    ]
  }
];