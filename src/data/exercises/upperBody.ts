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

export const upperBodyExercises: Exercise[] = [
  {
    id: 'push-up',
    name: 'Push Up',
    slug: 'push-up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Chest', 'Triceps', 'Anterior Deltoids', 'Core'],
    image: '/images/exercises/upper-body/push-up.webp',
    equipment: 'Bodyweight',
    description: 'A foundational compound bodyweight exercise targeting the chest, shoulders, and triceps while engaging the core.',
    instructions: [
      'Start in a high plank position with hands slightly wider than shoulder-width apart.',
      'Keep your core tight, glutes squeezed, and body in a straight line from head to heels.',
      'Lower your body by bending your elbows until your chest nearly touches the floor.',
      'Push back up to the starting position, fully extending your arms.'
    ],
    commonMistakes: [
      'Sagging hips',
      'Flaring elbows too wide',
      'Incomplete range of motion'
    ],
    progressions: [
      'Decline Push Up',
      'Archer Push Up',
      'One Arm Push Up'
    ],
    regressions: [
      'Incline Push Up',
      'Wall Push Up'
    ]
  },
  {
    id: 'wide-push-up',
    name: 'Wide Push Up',
    slug: 'wide-push-up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Outer Chest', 'Anterior Deltoids', 'Triceps'],
    image: '/images/exercises/upper-body/wide-push-up.webp',
    equipment: 'Bodyweight',
    description: 'A push-up variation with hands placed wider than shoulder-width to place greater emphasis on the pectoral muscles.',
    instructions: [
      'Assume a standard plank position but place your hands significantly wider than shoulder-width.',
      'Engage your core and maintain a straight body alignment.',
      'Lower your torso until your chest approaches the floor, flaring elbows moderately.',
      'Press through your palms to return to the starting position.'
    ],
    commonMistakes: [
      'Placing hands too far out causing shoulder strain',
      'Sagging the lower back'
    ],
    progressions: [
      'Archer Push Up',
      'Decline Push Up'
    ],
    regressions: [
      'Standard Push Up',
      'Incline Push Up'
    ]
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push Up',
    slug: 'diamond-push-up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Triceps Brachii', 'Inner Chest', 'Anterior Deltoids'],
    image: '/images/exercises/upper-body/diamond-push-up.webp',
    equipment: 'Bodyweight',
    description: 'A challenging push-up variation with hands close together forming a diamond shape, focusing heavily on the triceps.',
    instructions: [
      'Place your hands close together under your chest so index fingers and thumbs form a diamond shape.',
      'Extend your legs back into a high plank position with a rigid core.',
      'Lower your chest toward your hands, keeping elbows close to your torso.',
      'Press upward, focusing on extending your elbows to engage the triceps.'
    ],
    commonMistakes: [
      'Flaring elbows out away from the body',
      'Bending at the hips instead of maintaining a straight plank'
    ],
    progressions: [
      'Decline Diamond Push Up',
      'One Arm Push Up'
    ],
    regressions: [
      'Standard Push Up',
      'Incline Push Up'
    ]
  },
  {
    id: 'incline-push-up',
    name: 'Incline Push Up',
    slug: 'incline-push-up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Lower Chest', 'Triceps', 'Anterior Deltoids'],
    image: '/images/exercises/upper-body/incline-push-up.webp',
    equipment: 'Bench / Elevated Surface',
    description: 'An easier variation of the standard push-up performed with hands elevated on a stable surface, reducing the load on the upper body.',
    instructions: [
      'Place your hands firmly on an elevated platform or bench slightly wider than shoulder-width.',
      'Step your feet back so your body forms a straight line at an incline.',
      'Lower your chest toward the edge of the platform by bending your elbows.',
      'Press back up to the starting position while keeping your core braced.'
    ],
    commonMistakes: [
      'Using an unstable surface',
      'Not lowering the chest fully to the surface edge'
    ],
    progressions: [
      'Standard Push Up',
      'Wide Push Up',
      'Decline Push Up'
    ],
    regressions: [
      'Wall Push Up'
    ]
  },
  {
    id: 'decline-push-up',
    name: 'Decline Push Up',
    slug: 'decline-push-up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Upper Chest', 'Anterior Deltoids', 'Triceps'],
    image: '/images/exercises/upper-body/decline-push-up.webp',
    equipment: 'Bench / Elevated Surface',
    description: 'A push-up variation with feet elevated on a platform, placing more load on the upper chest and shoulders.',
    instructions: [
      'Place your feet securely on an elevated surface or bench and your hands on the floor.',
      'Align your body in a straight line with your core and glutes fully engaged.',
      'Lower your head and chest toward the floor in a controlled motion.',
      'Press powerfully through your palms to return to the starting position.'
    ],
    commonMistakes: [
      'Arching the lower back',
      'Looking up and straining the cervical spine'
    ],
    progressions: [
      'Pike Push Up',
      'Handstand Push Up'
    ],
    regressions: [
      'Standard Push Up',
      'Incline Push Up'
    ]
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push Up',
    slug: 'pike-push-up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Anterior Deltoids', 'Triceps', 'Upper Pectorals'],
    image: '/images/exercises/upper-body/pike-push-up.webp',
    equipment: 'Bodyweight',
    description: 'An overhead pressing bodyweight movement performed with hips raised high in a pike position to target the shoulders.',
    instructions: [
      'Start in a push-up position, then walk your feet forward and lift your hips high to form an inverted V-shape.',
      'Keep your legs relatively straight and look toward your feet or hands.',
      'Lower the top of your head toward the floor by bending your elbows forward and down.',
      'Press through your shoulders and palms to push your body back to the starting position.'
    ],
    commonMistakes: [
      'Flaring elbows outward instead of tracking them backward/inward',
      'Bending knees too much'
    ],
    progressions: [
      'Wall Handstand Hold',
      'Handstand Push Up'
    ],
    regressions: [
      'Decline Push Up',
      'Standard Push Up'
    ]
  },
  {
    id: 'hindu-push-up',
    name: 'Hindu Push Up',
    slug: 'hindu-push-up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Shoulders', 'Chest', 'Triceps', 'Spine Extensors'],
    image: '/images/exercises/upper-body/hindu-push-up.webp',
    equipment: 'Bodyweight',
    description: 'A fluid, dynamic bodyweight movement transitioning from a pike position into a deep arch, enhancing upper body mobility and strength.',
    instructions: [
      'Begin in a pike position with hips high and feet wide.',
      'Swoop your body down and forward by bending your elbows, grazing your chest close to the floor.',
      'Arch your upper back and press your chest upward and forward into an upward-dog position.',
      'Reverse the motion by pushing your hips back and up to return to the start.'
    ],
    commonMistakes: [
      'Rushing the motion',
      'Locking the elbows harshly at the top of the arch'
    ],
    progressions: [
      'Handstand Push Up'
    ],
    regressions: [
      'Pike Push Up',
      'Standard Push Up'
    ]
  },
  {
    id: 'archer-push-up',
    name: 'Archer Push Up',
    slug: 'archer-push-up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Chest', 'Triceps', 'Core', 'Unilateral Stabilizers'],
    image: '/images/exercises/upper-body/archer-push-up.webp',
    equipment: 'Bodyweight',
    description: 'An advanced asymmetric push-up where the body shifts toward one straightening arm while the other arm extends sideways.',
    instructions: [
      'Assume a wide hand placement position on the floor.',
      'Lower your body toward one side, bending that elbow while keeping the opposite arm straight out to the side.',
      'Press through the working arm to drive your body back up.',
      'Alternate sides with each rep or complete all reps on one side before switching.'
    ],
    commonMistakes: [
      'Using momentum to shift sides',
      'Failing to keep the extended arm straight'
    ],
    progressions: [
      'One Arm Push Up'
    ],
    regressions: [
      'Wide Push Up',
      'Standard Push Up'
    ]
  },
  {
    id: 'one-arm-push-up',
    name: 'One Arm Push Up',
    slug: 'one-arm-push-up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Chest', 'Triceps', 'Core', 'Unilateral Stabilizers'],
    image: '/images/exercises/upper-body/one-arm-push-up.webp',
    equipment: 'Bodyweight',
    description: 'The ultimate test of upper body pushing strength and core anti-rotation, performed using a single arm.',
    instructions: [
      'Take a wide stance with your feet and place one hand centrally under your chest, placing the other hand behind your back.',
      'Brace your core intensely to prevent rotational twisting.',
      'Lower your torso in a controlled descent until your chest nears the floor.',
      'Drive powerfully through the single working arm to return to the top.'
    ],
    commonMistakes: [
      'Allowing the torso to rotate open',
      'Placing feet too close together'
    ],
    progressions: [
      'Weighted One Arm Push Up'
    ],
    regressions: [
      'Archer Push Up',
      'Decline Push Up'
    ]
  },
  {
    id: 'scapular-push-up',
    name: 'Scapular Push Up',
    slug: 'scapular-push-up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Serratus Anterior', 'Scapular Retractors/Protractors'],
    image: '/images/exercises/upper-body/scapular-push-up.webp',
    equipment: 'Bodyweight',
    description: 'A small movement focusing on scapular protraction and retraction to improve shoulder stability and serratus anterior strength.',
    instructions: [
      'Maintain a strict high plank position with completely straight arms and locked elbows.',
      'Allow your shoulder blades to pinch together as your chest drops slightly without bending your elbows.',
      'Push the floor away actively to spread your shoulder blades apart (protraction).',
      'Repeat this controlled gliding motion continuously.'
    ],
    commonMistakes: [
      'Bending the elbows during the movement',
      'Moving too fast without full range of motion'
    ],
    progressions: [
      'Standard Push Up'
    ],
    regressions: [
      'Wall Scapular Push Up'
    ]
  },
  {
    id: 'handstand-push-up',
    name: 'Handstand Push Up',
    slug: 'handstand-push-up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Shoulders (Anterior/Lateral Deltoids)', 'Triceps', 'Core'],
    image: '/images/exercises/upper-body/handstand-push-up.webp',
    equipment: 'Wall / Free Standing',
    description: 'An elite bodyweight pressing exercise performed in a handstand against a wall, requiring exceptional shoulder strength and balance.',
    instructions: [
      'Kick up into a handstand position facing or backing against a wall for support.',
      'Lower your head toward the floor in a controlled descent by bending your elbows.',
      'Keep your body aligned and core engaged throughout the movement.',
      'Press forcefully back up to full arm extension.'
    ],
    commonMistakes: [
      'Losing core tension causing body to banana-shape',
      'Uncontrolled descent'
    ],
    progressions: [
      'Freestanding Handstand Push Up'
    ],
    regressions: [
      'Wall Handstand Hold',
      'Pike Push Up'
    ]
  },
  {
    id: 'bench-tricep-dip',
    name: 'Bench Tricep Dip',
    slug: 'bench-tricep-dip',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Triceps Brachii', 'Anterior Deltoids', 'Pectorals'],
    image: '/images/exercises/upper-body/bench-tricep-dip.webp',
    equipment: 'Bench / Chair',
    description: 'A compound bodyweight movement using a bench to target the triceps and anterior shoulders.',
    instructions: [
      'Sit on the edge of a bench, place your hands beside your hips, and slide your glutes off the edge.',
      'Extend your legs outward in front of you with knees slightly bent or straight.',
      'Lower your hips downward by bending your elbows to about a 90-degree angle.',
      'Press back up to the starting position using your triceps.'
    ],
    commonMistakes: [
      'Moving the hips too far away from the bench',
      'Flaring elbows outward'
    ],
    progressions: [
      'Straight Leg Bench Dip',
      'Parallel Bar Dip'
    ],
    regressions: [
      'Bent-knee Bench Dip with closer foot placement'
    ]
  },
  {
    id: 'pull-up',
    name: 'Pull Up',
    slug: 'pull-up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Latissimus Dorsi', 'Biceps', 'Rhomboids', 'Rear Deltoids'],
    image: '/images/exercises/upper-body/pull-up.webp',
    equipment: 'Pull-up Bar',
    description: 'A supreme compound pulling exercise lifting the body up to a bar, targeting the lats and upper back.',
    instructions: [
      'Grip an overhead pull-up bar with an overhand grip slightly wider than shoulder-width.',
      'Hang fully extended with your core engaged and shoulders depressed.',
      'Pull your chest up toward the bar by driving your elbows down and back.',
      'Lower yourself with control back to a full hang.'
    ],
    commonMistakes: [
      'Using momentum or kipping when strict form is needed',
      'Not achieving full extension at the bottom'
    ],
    progressions: [
      'Weighted Pull Up',
      'L-Sit Pull Up',
      'Archer Pull Up'
    ],
    regressions: [
      'Table Row',
      'Band-Assisted Pull Up',
      'Negative Pull Up'
    ]
  },
  {
    id: 'table-row',
    name: 'Table Row',
    slug: 'table-row',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Upper Back', 'Lats', 'Biceps', 'Rear Deltoids'],
    image: '/images/exercises/upper-body/table-row.webp',
    equipment: 'Sturdy Table / Desk',
    description: 'An accessible horizontal pulling exercise using a sturdy table edge to strengthen the upper back and arms.',
    instructions: [
      'Lie underneath a sturdy table and grip the edge with an overhand or neutral grip.',
      'Keep your body rigid and straight with your heels on the floor.',
      'Pull your chest up until it meets or approaches the underside of the table.',
      'Lower yourself back down in a controlled motion.'
    ],
    commonMistakes: [
      'Sagging hips during the pull',
      'Using arms instead of driving with the upper back'
    ],
    progressions: [
      'Inverted Row',
      'Pull Up'
    ],
    regressions: [
      'Higher incline row / Standing band row'
    ]
  },
  {
    id: 'superman',
    name: 'Superman',
    slug: 'superman',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Erector Spinae', 'Glutes', 'Upper Back'],
    image: '/images/exercises/upper-body/superman.webp',
    equipment: 'Bodyweight',
    description: 'A prone bodyweight extension exercise strengthening the lower back and posterior chain.',
    instructions: [
      'Lie face down on the floor with your arms extended straight overhead and legs straight.',
      'Simultaneously lift your arms, chest, and straight legs a few inches off the floor.',
      'Squeeze your lower back and glutes at the top position for a brief moment.',
      'Lower back down with control to complete the rep.'
    ],
    commonMistakes: [
      'Hyperextending the neck by looking straight up',
      'Jerking limbs upward'
    ],
    progressions: [
      'Weighted Superman Extension',
      'Back Extension on Bench'
    ],
    regressions: [
      'Bird-Dog',
      'Single-arm/leg lifts'
    ]
  },
];

export default upperBodyExercises;