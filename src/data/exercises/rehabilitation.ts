import { Exercise } from './types';

export const rehabilitationExercises: Exercise[] = [
  {
    id: '1',
    name: 'Wall Forearm Slides',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Serratus Anterior', 'Shoulders', 'Upper Back'],
    equipment: 'Wall',
    description: 'A fundamental scapular upward rotation drill that strengthens the serratus anterior and reinforces proper shoulder blade tracking.',
    instructions: [
      'Stand facing a wall with forearms resting vertically against it, elbows bent at 90 degrees',
      'Step one foot slightly forward and gently press forearms into the wall to engage shoulder blades',
      'Slowly slide forearms upward along the wall until arms form a high "V" shape',
      'Pause briefly at the top without arching lower back, then return under control'
    ],
    commonMistakes: [
      'Arching lower back to gain artificial overhead elevation',
      'Shrugging shoulders upward into ears during the upward slide',
      'Lifting forearms away from the wall during movement'
    ],
    progressions: ['Wall Forearm Slide with Liftoff'],
    regressions: ['Seated Scapular Shrugs']
  },
  {
    id: '2',
    name: 'Prone Scapular Y-Raise',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Lower Trapezius', 'Shoulders', 'Upper Back'],
    equipment: 'Floor',
    description: 'An effective lying activation exercise targeting the lower trapezius to improve scapular depression and overhead shoulder control.',
    instructions: [
      'Lie face down on the floor with forehead resting on a small folded towel',
      'Extend arms overhead at a 45-degree angle in a "Y" position, thumbs pointing up toward ceiling',
      'Depress shoulder blades down toward back pockets, then lift arms a few inches off floor',
      'Hold peak position for 2 seconds while breathing smoothly, then lower back down'
    ],
    commonMistakes: [
      'Lifting head or arching lower back to force arm height',
      'Shrugging upper trapezius muscles into neck',
      'Pointing thumbs downward or outward instead of toward ceiling'
    ],
    progressions: ['Standing Hinge Y-Raise'],
    regressions: ['Supported Wall Y-Hold']
  },
  {
    id: '3',
    name: 'Side-Lying Clamshell',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Gluteus Medius', 'Hip Rotators'],
    equipment: 'Floor',
    description: 'A targeted hip exercise that isolates the gluteus medius to enhance pelvic stability during walking and single-leg support.',
    instructions: [
      'Lie on your side with hips stacked, knees bent at 90 degrees, and feet aligned with spine',
      'Keep feet pressed together while slowly rotating top knee upward toward ceiling',
      'Squeeze upper glute firmly at peak opening without rolling hips or pelvis backward',
      'Lower knee back to starting position smoothly and repeat'
    ],
    commonMistakes: [
      'Rolling upper hip backward to cheat rotational range',
      'Lifting feet apart during knee abduction',
      'Rushing repetitions without static contraction at top'
    ],
    progressions: ['Side-Lying Clamshell with Feet Elevated'],
    regressions: ['Supine Isometric Hip Abduction']
  },
  {
    id: '4',
    name: 'Supine Glute Bridge',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Core'],
    equipment: 'Floor',
    description: 'A foundational lumbo-pelvic stabilization drill that activates gluteal muscles while supporting healthy low-back alignment.',
    instructions: [
      'Lie on your back with knees bent, feet flat on floor hip-width apart, and arms at sides',
      'Posteriorly tilt pelvis to press lower back flat against floor',
      'Drive through heels to lift hips until knees, hips, and shoulders form a straight diagonal line',
      'Squeeze glutes at peak for 2 seconds, then lower under control'
    ],
    commonMistakes: [
      'Hyperextending lower back at top of bridge instead of extending hips',
      'Pushing off forefeet/toes instead of driving through heels',
      'Allowing knees to cave inward during lift'
    ],
    progressions: ['Single-Leg Glute Bridge Hold'],
    regressions: ['Isometric Glute Squeeze']
  },
  {
    id: '5',
    name: 'Towel Terminal Knee Extension',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Vastus Medialis'],
    equipment: 'Towel',
    description: 'A gentle knee rehabilitation drill utilizing a rolled towel to activate the vastus medialis oblique (VMO) into full extension.',
    instructions: [
      'Sit on floor with legs extended and place a tightly rolled towel beneath working knee',
      'Relax heel on floor and focus on thigh muscles of working leg',
      'Contract quadriceps forcefully to press back of knee down into towel and lift heel slightly off floor',
      'Hold quadriceps contraction for 5 seconds, then slowly release'
    ],
    commonMistakes: [
      'Lifting thigh off floor instead of driving knee downward into towel',
      'Holding breath during isometric muscle contraction',
      'Rushing isometric hold time'
    ],
    progressions: ['Standing Bodyweight Terminal Knee Extension'],
    regressions: ['Quad Sets (No Towel)']
  },
  {
    id: '6',
    name: 'Chair Sit-to-Stand',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Core'],
    equipment: 'Chair',
    description: 'A vital functional rehabilitation pattern that rebuilds lower-body strength, joint alignment, and movement confidence.',
    instructions: [
      'Sit near front edge of a sturdy chair with feet hip-width apart and heels flat',
      'Lean torso slightly forward from hips, keep chest upright, and press through heels to stand fully',
      'Squeeze glutes at top of standing position',
      'Hinge hips back and slowly lower body back down to touch chair seat lightly under control'
    ],
    commonMistakes: [
      'Allowing knees to cave inward (valgus tracking) during rise or descent',
      'Using momentum or rocking excessively to stand up',
      'Plop-dropping quickly onto chair seat'
    ],
    progressions: ['Step-Up onto Low Stair'],
    regressions: ['Arm-Assisted Chair Sit-to-Stand']
  },
  {
    id: '7',
    name: 'Controlled Stair Step-Down',
    category: 'Rehabilitation',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Ankles'],
    equipment: 'Stairs',
    description: 'An eccentric quadriceps and knee stability drill that improves patellofemoral tracking and force absorption during step control.',
    instructions: [
      'Stand on bottom stair tread with non-working foot suspended off step edge',
      'Keep hips level and hands on wall or railing for light balance if needed',
      'Slowly bend stance knee to lower suspended heel down to touch floor softly',
      'Push through stance heel to return to starting position without bouncing off floor'
    ],
    commonMistakes: [
      'Allowing stance knee to buckle inward during knee flexion',
      'Dropping non-working foot quickly onto floor',
      'Hicking hip up on suspended side'
    ],
    progressions: ['Single-Leg Step-Down from Higher Step'],
    regressions: ['Flat Floor Single-Leg Mini-Squat']
  },
  {
    id: '8',
    name: 'Single-Leg Balance',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Ankles', 'Gluteus Medius', 'Core'],
    equipment: 'Floor',
    description: 'A balance drill that enhances ankle proprioception, lower-leg stabilizer firing, and static joint alignment.',
    instructions: [
      'Stand tall near a wall or chair for safety with feet hip-width apart',
      'Shift body weight onto one leg while lifting opposite foot a few inches off floor',
      'Keep stance knee soft (unlocked) and maintain square hips and tall posture',
      'Hold position for target time while making small automatic adjustments through ankle'
    ],
    commonMistakes: [
      'Locking out stance knee completely',
      'Dropping non-stance hip downward',
      'Gripping floor excessively with toes'
    ],
    progressions: ['Single-Leg Balance with Eyes Closed'],
    regressions: ['Tandem Balance Stance']
  },
  {
    id: '9',
    name: 'Tandem Heel-to-Toe Walk',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Ankles', 'Core', 'Calves'],
    equipment: 'Floor',
    description: 'A dynamic narrow-base balance drill that trains postural control, ankle micro-adjustments, and movement coordination.',
    instructions: [
      'Stand tall near a wall for safety and place one foot directly in front of other, heel touching toe',
      'Fix gaze on a steady focal point ahead and brace core softly',
      'Step trailing foot forward, placing heel directly against toes of front foot',
      'Continue stepping forward in a straight narrow line under strict speed control'
    ],
    commonMistakes: [
      'Looking down at feet continuously instead of keeping head high',
      'Taking wide steps instead of placing feet in a tight heel-to-toe line',
      'Rushing gait speed to avoid losing balance'
    ],
    progressions: ['Tandem Heel-to-Toe Backward Walk'],
    regressions: ['Static Tandem Hold']
  },
  {
    id: '10',
    name: 'Heel-and-Toe Walks',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Anterior Tibialis', 'Calves', 'Ankles'],
    equipment: 'Floor',
    description: 'A lower-leg conditioning drill strengthening the shins and ankles to support healthy foot mechanics and lower-leg endurance.',
    instructions: [
      'Lift forefeet off floor and walk forward on heels for 15-20 paces, keeping toes dorsiflexed',
      'Turn around, rise high onto balls of feet, and walk backward or forward on toes',
      'Keep knees soft and posture tall throughout both phases',
      'Maintain steady speed and controlled ankle positioning'
    ],
    commonMistakes: [
      'Allowing forefeet to drop toward floor during heel walks',
      'Bending knees heavily into a squat position',
      'Leaning torso backward while on heels'
    ],
    progressions: ['Single-Leg Heel Lift Hold'],
    regressions: ['Seated Toe and Heel Raises']
  },
  {
    id: '11',
    name: 'Supine Pelvic Tilt with March',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Deep Core', 'Transverse Abdominis', 'Hip Flexors'],
    equipment: 'Floor',
    description: 'A low-back friendly stabilization exercise that teaches deep abdominal bracing while maintaining pelvic position during limb movement.',
    instructions: [
      'Lie face up with knees bent and feet flat on floor',
      'Exhale slowly and draw belly button toward spine, pressing lower back flat against floor',
      'Maintain flat back contact while lifting one foot 2-3 inches off floor into a march',
      'Lower foot back down gently and alternate sides without letting lumbar spine arch'
    ],
    commonMistakes: [
      'Allowing lower back to lift off floor during foot lift',
      'Holding breath instead of keeping diaphragmatic breathing steady',
      'Lifting foot too high into a full knee-to-chest pull'
    ],
    progressions: ['Dead Bug'],
    regressions: ['Static Supine Pelvic Tilt Hold']
  },
  {
    id: '12',
    name: 'Wall-Supported Single-Leg Hinge',
    category: 'Rehabilitation',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hamstrings', 'Glutes', 'Core'],
    equipment: 'Wall',
    description: 'A supported unilateral hinge that restores posterior chain motor control and balance while reinforcing stable trunk position.',
    instructions: [
      'Stand facing away from a wall, standing about one foot-length in front of it',
      'Place top of rear foot flat against wall behind you for balance support',
      'Hinge at hips, sending glutes back toward wall while keeping front knee soft and spine flat',
      'Squeeze front glute and drive hips forward to return to tall standing position'
    ],
    commonMistakes: [
      'Rounding lumbar spine during hip hinge lowering',
      'Bending front knee into a full squat rather than a hip hinge',
      'Pushing forcefully off wall with back foot'
    ],
    progressions: ['Bodyweight Single-Leg Roman Deadlift'],
    regressions: ['Bilateral Wall-Supported Hip Hinge']
  },
  {
    id: '13',
    name: 'Eccentric Wall Calf Raise',
    category: 'Rehabilitation',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves', 'Achilles', 'Ankles'],
    equipment: 'Wall',
    description: 'A controlled calf loading exercise designed to strengthen the lower leg, build Achilles tendon capacity, and improve ankle control.',
    instructions: [
      'Stand facing wall with fingertips flat against it for balance, feet hip-width',
      'Rise up onto balls of both feet over a 1-second count',
      'Shift weight onto target leg and slowly lower heel down to floor over a 3-to-4 second eccentric count',
      'Place opposite foot back down and repeat cycle'
    ],
    commonMistakes: [
      'Dropping heel down quickly without controlling eccentric phase',
      'Sickling ankles outward during plant flexed position',
      'Leaning forward at waist instead of keeping upright spine'
    ],
    progressions: ['Single-Leg Eccentric Stair Calf Drop'],
    regressions: ['Bilateral Calf Raise and Bilateral Lower']
  },
  {
    id: '14',
    name: 'Quadruped Bird-Dog Hold',
    category: 'Rehabilitation',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Glutes', 'Scapular Stabilizers'],
    equipment: 'Floor',
    description: 'An isometric cross-body stabilization exercise that builds spinal endurance, core balance, and shoulder-hip integration.',
    instructions: [
      'Begin on hands and knees with hands beneath shoulders and knees beneath hips',
      'Slowly reach left arm forward and right leg backward until both are parallel to floor',
      'Keep hips level and spine neutral, holding peak extension statically for 5-10 seconds',
      'Return to starting all-fours position and repeat on opposite arm and leg'
    ],
    commonMistakes: [
      'Arching lower back or lifting leg higher than hip line',
      'Rotating hips side-to-side out of square alignment',
      'Hyperextending neck upward instead of keeping chin tucked'
    ],
    progressions: ['Dynamic Bird-Dog with Elbow-to-Knee Crunch'],
    regressions: ['Quadruped Single-Leg Extension Only']
  }
];