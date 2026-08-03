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

export const rehabilitationExercises: Exercise[] = [
  {
    id: 'chair-sit-to-stand',
    name: 'Chair Sit-to-Stand',
    slug: 'chair-sit-to-stand',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    image: '/images/exercises/rehabilitation/chair-sit-to-stand.webp',
    equipment: 'Chair',
    description: 'A functional lower-body strengthening exercise ideal for rebuilding leg strength and improving transitional mobility.',
    instructions: [
      'Sit near the front of a sturdy chair with feet flat on the floor shoulder-width apart.',
      'Lean your torso slightly forward from the hips, engaging your core and glutes.',
      'Push through your heels to stand up fully to an upright position.',
      'Slowly lower your hips back down to the chair with control.'
    ],
    commonMistakes: [
      'Using momentum from the upper body',
      'Knees caving inward'
    ],
    progressions: [
      'Bodyweight Squat',
      'Goblet Squat'
    ],
    regressions: [
      'Assisted Sit-to-Stand using arm rests',
      'Higher surface sit-to-stand'
    ]
  },
  {
    id: 'controlled-stair-step-down',
    name: 'Controlled Stair Step-Down',
    slug: 'controlled-stair-step-down',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Stabilizers'],
    image: '/images/exercises/rehabilitation/controlled-stair-step-down.webp',
    equipment: 'Step / Stair',
    description: 'A targeted eccentric control exercise designed to improve knee stability, quad strength, and lower limb alignment during descent.',
    instructions: [
      'Stand on a step or low platform with one foot resting lightly beside the edge off the step.',
      'Slowly lower the suspended foot toward the ground by bending the stance knee with controlled deceleration.',
      'Lightly touch the heel to the floor without shifting full weight onto it.',
      'Push back up to the starting standing position.'
    ],
    commonMistakes: [
      'Dropping down too quickly without eccentric control',
      'Allowing the knee to collapse inward'
    ],
    progressions: [
      'Higher step step-down',
      'Single-leg squat'
    ],
    regressions: [
      'Shallow step-down with hand support'
    ]
  },
  {
    id: 'eccentric-wall-calf-raise',
    name: 'Eccentric Wall Calf Raise',
    slug: 'eccentric-wall-calf-raise',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Gastrocnemius', 'Soleus'],
    image: '/images/exercises/rehabilitation/eccentric-wall-calf-raise.webp',
    equipment: 'Wall',
    description: 'An effective rehabilitation exercise focusing on the eccentric phase of calf loading to treat Achilles tendonitis and strengthen lower calves.',
    instructions: [
      'Stand facing a wall with hands resting on the wall for balance.',
      'Rise up onto your toes using both feet.',
      'Lift one foot off the floor and slowly lower the heel of the remaining foot down over 3 to 5 seconds.',
      'Use both feet to push back up to the top.'
    ],
    commonMistakes: [
      'Lowering the heel too quickly',
      'Bending the knee during the descent'
    ],
    progressions: [
      'Standard single-leg calf raise',
      'Weighted eccentric calf raise'
    ],
    regressions: [
      'Two-legged calf raise'
    ]
  },
  {
    id: 'heel-walk',
    name: 'Heel Walk',
    slug: 'heel-walk',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Tibialis Anterior', 'Anterior Lower Leg'],
    image: '/images/exercises/rehabilitation/heel-walk.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic rehabilitation walk focusing on dorsiflexion and strengthening the shin muscles.',
    instructions: [
      'Lift your toes and the front of your feet entirely off the floor so you are balancing strictly on your heels.',
      'Walk forward in a controlled manner, keeping your toes elevated.',
      'Maintain an upright posture and stable core throughout the walk.'
    ],
    commonMistakes: [
      'Allowing toes to drop and slap the floor',
      'Leaning excessively backward'
    ],
    progressions: [
      'Resisted heel walk',
      'Longer duration heel walk'
    ],
    regressions: [
      'Seated ankle dorsiflexion against band'
    ]
  },
  {
    id: 'prone-scapular-y-raise',
    name: 'Prone Scapular Y Raise',
    slug: 'prone-scapular-y-raise',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Lower Trapezius', 'Serratus Anterior', 'Scapular Stabilizers'],
    image: '/images/exercises/rehabilitation/prone-scapular-y-raise.webp',
    equipment: 'Bodyweight',
    description: 'A foundational scapular stabilization exercise targeting the lower trapezius and shoulder girdle.',
    instructions: [
      'Lie face down on a mat or incline bench with your arms extended overhead in a Y shape, thumbs pointing up.',
      'Engage your upper back and lift your arms a few inches off the floor.',
      'Hold briefly at the top while squeezing your shoulder blades downward and together.',
      'Lower your arms back down with control.'
    ],
    commonMistakes: [
      'Shrugging shoulders toward the ears',
      'Using momentum to swing arms'
    ],
    progressions: [
      'Weighted Y raise with light plates',
      'Incline bench Y raise'
    ],
    regressions: [
      'Seated Y raise',
      'Wall slide Y raise'
    ]
  },
  {
    id: 'quadruped-bird-dog-hold',
    name: 'Quadruped Bird-Dog Hold',
    slug: 'quadruped-bird-dog-hold',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Erector Spinae', 'Glutes', 'Shoulder Stabilizers'],
    image: '/images/exercises/rehabilitation/quadruped-bird-dog-hold.webp',
    equipment: 'Bodyweight',
    description: 'An isometric stability exercise designed to improve core strength, spinal alignment, and cross-body coordination.',
    instructions: [
      'Start on your hands and knees in a tabletop position with wrists under shoulders and knees under hips.',
      'Simultaneously extend your right arm forward and left leg backward until parallel to the floor.',
      'Hold this extended position stably without letting your hips or lower back sag or rotate.',
      'Return to the start and switch to the opposite limbs.'
    ],
    commonMistakes: [
      'Arching or rotating the lower back',
      'Lifting limbs too high past parallel'
    ],
    progressions: [
      'Extended hold duration',
      'Unstable surface bird-dog'
    ],
    regressions: [
      'Single-arm lift only',
      'Single-leg lift only'
    ]
  },
  {
    id: 'side-lying-clamshell',
    name: 'Side-Lying Clamshell',
    slug: 'side-lying-clamshell',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Gluteus Medius', 'External Rotators'],
    image: '/images/exercises/rehabilitation/side-lying-clamshell.webp',
    equipment: 'Bodyweight / Resistance Band',
    description: 'A targeted hip rehabilitation exercise strengthening the gluteus medius and improving hip stability.',
    instructions: [
      'Lie on your side with your knees bent at a 90-degree angle and your hips and feet stacked.',
      'Keeping your heels touching, raise your top knee as high as you can without rotating your pelvis backward.',
      'Pause briefly at the top, then slowly lower your knee back to the starting position.'
    ],
    commonMistakes: [
      'Rolling the pelvis backward during the lift',
      'Lifting the bottom foot off the floor'
    ],
    progressions: [
      'Banded Clamshell',
      'Side Plank Clamshell'
    ],
    regressions: [
      'Smaller range of motion without band'
    ]
  },
  {
    id: 'single-leg-balance',
    name: 'Single-Leg Balance',
    slug: 'single-leg-balance',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Ankle Stabilizers', 'Core', 'Gluteus Medius'],
    image: '/images/exercises/rehabilitation/single-leg-balance.webp',
    equipment: 'Bodyweight',
    description: 'An essential proprioceptive and balance exercise to enhance ankle stability and neuromuscular control.',
    instructions: [
      'Stand tall and lift one foot slightly off the floor, keeping your weight centered on the standing foot.',
      'Keep your posture upright, gaze forward, and core engaged.',
      'Hold the balance position steadily for the prescribed time.'
    ],
    commonMistakes: [
      'Leaning heavily to one side',
      'Locking the standing knee hyperextended'
    ],
    progressions: [
      'Eyes closed single-leg balance',
      'Balance pad single-leg stand'
    ],
    regressions: [
      'Holding onto a stable surface for light fingertip support'
    ]
  },
  {
    id: 'supine-glute-bridge',
    name: 'Supine Glute Bridge',
    slug: 'supine-glute-bridge',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    image: '/images/exercises/rehabilitation/supine-glute-bridge.webp',
    equipment: 'Bodyweight',
    description: 'A foundational posterior chain exercise to activate glutes and support lower back rehabilitation.',
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor hip-width apart.',
      'Drive through your heels and squeeze your glutes to lift your hips toward the ceiling until your body forms a straight line from knees to shoulders.',
      'Hold briefly at the top, then lower your hips back down with control.'
    ],
    commonMistakes: [
      'Hyperextending the lower back at the top',
      'Pushing through toes instead of heels'
    ],
    progressions: [
      'Single-leg glute bridge',
      'Weighted glute bridge'
    ],
    regressions: [
      'Smaller range of motion bridge'
    ]
  },
  {
    id: 'supine-pelvic-tilt-with-march',
    name: 'Supine Pelvic Tilt with March',
    slug: 'supine-pelvic-tilt-with-march',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Transverse Abdominis', 'Core', 'Hip Flexors'],
    image: '/images/exercises/rehabilitation/supine-pelvic-tilt-with-march.webp',
    equipment: 'Bodyweight',
    description: 'A core stabilization exercise designed to train deep abdominal engagement and pelvic control.',
    instructions: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Flatten your lower back against the floor by performing a posterior pelvic tilt.',
      'Maintaining this pelvic stability and core engagement, slowly lift one foot a few inches off the floor like marching.',
      'Lower that foot back down and alternate to the other leg without letting your pelvis rock.'
    ],
    commonMistakes: [
      'Allowing the lower back to arch when lifting the leg',
      'Rushing the movement'
    ],
    progressions: [
      'Tabletop alternating leg extensions',
      'Dead bug'
    ],
    regressions: [
      'Static pelvic tilt hold without marching'
    ]
  },
  {
    id: 'tandem-heel-to-toe-walk',
    name: 'Tandem Heel-to-Toe Walk',
    slug: 'tandem-heel-to-toe-walk',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Proprioceptive System', 'Ankle Stabilizers', 'Core'],
    image: '/images/exercises/rehabilitation/tandem-heel-to-toe-walk.webp',
    equipment: 'Bodyweight',
    description: 'A dynamic balance and coordination exercise walking in a straight line with heel touching toe.',
    instructions: [
      'Stand upright and place one foot directly in front of the other so the heel of the front foot touches the toes of the back foot.',
      'Step forward with the back foot, placing its heel directly in front of the lead foot toes.',
      'Walk in a straight line in this tandem fashion, focusing on stability.'
    ],
    commonMistakes: [
      'Looking down directly at your feet',
      'Rushing steps'
    ],
    progressions: [
      'Eyes closed tandem walk',
      'Tandem walk on a foam pad'
    ],
    regressions: [
      'Wide-stance walking',
      'Light fingertip wall support'
    ]
  },
  {
    id: 'toe-walk',
    name: 'Toe Walk',
    slug: 'toe-walk',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Gastrocnemius', 'Soleus', 'Intrinsic Foot Muscles'],
    image: '/images/exercises/rehabilitation/toe-walk.webp',
    equipment: 'Bodyweight',
    description: 'A functional walking exercise focusing on plantarflexion endurance and calf strength.',
    instructions: [
      'Rise up high onto the balls of both feet as high as possible.',
      'Walk forward smoothly while maintaining your elevation on your toes.',
      'Keep your torso tall and core engaged throughout.'
    ],
    commonMistakes: [
      'Dropping heels down during the walk',
      'Slouching forward'
    ],
    progressions: [
      'Resisted toe walk',
      'Longer duration toe walk'
    ],
    regressions: [
      'Static calf raise holds'
    ]
  },
  {
    id: 'towel-terminal-knee-extension',
    name: 'Towel Terminal Knee Extension',
    slug: 'towel-terminal-knee-extension',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Vastus Medialis', 'Quadriceps'],
    image: '/images/exercises/rehabilitation/towel-terminal-knee-extension.webp',
    equipment: 'Resistance Band / Towel',
    description: 'A rehabilitation exercise focusing on terminal knee extension strength, particularly activating the Vastus Medialis Oblique (VMO).',
    instructions: [
      'Anchor a resistance band at knee height and place it around the back of your knee while standing in a staggered stance.',
      'Slightly bend the banded knee, then push backward into full knee extension against the band resistance.',
      'Squeeze your quad firmly at full extension for a brief hold before releasing.'
    ],
    commonMistakes: [
      'Locking the knee with excessive force',
      'Not fully extending the leg'
    ],
    progressions: [
      'Heavy band terminal knee extension',
      'Single-leg cable extension'
    ],
    regressions: [
      'Seated short-arc quad extension'
    ]
  },
  {
    id: 'wall-forearm-slides',
    name: 'Wall Forearm Slides',
    slug: 'wall-forearm-slides',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Serratus Anterior', 'Lower Trapezius', 'Shoulder Girdle'],
    image: '/images/exercises/rehabilitation/wall-forearm-slides.webp',
    equipment: 'Wall',
    description: 'A shoulder mobility and scapular control exercise improving overhead movement mechanics.',
    instructions: [
      'Stand facing a wall with your forearms and palms resting flat against the wall at shoulder height.',
      'Gently press your forearms into the wall and slide them upward overhead while keeping contact.',
      'Lower your arms back to the starting position with control.'
    ],
    commonMistakes: [
      'Arching the lower back as arms go up',
      'Forearms losing contact with the wall'
    ],
    progressions: [
      'Wall slides with a light resistance band around wrists',
      'Foam roller wall slides'
    ],
    regressions: [
      'Reduced range of motion wall slide'
    ]
  }
];

export default rehabilitationExercises;