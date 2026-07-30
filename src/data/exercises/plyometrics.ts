import { Exercise } from './types';

export const plyometricsExercises: Exercise[] = [
  {
    id: '1',
    name: 'Snap-Down and Hold',
    category: 'Plyometrics',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Calves', 'Core'],
    equipment: 'Floor',
    description: 'The foundational plyometric exercise that teaches deceleration, eccentric load acceptance, and proper landing mechanics to prevent injury.',
    instructions: [
      'Reach up high onto your toes with arms extended fully overhead',
      'Rapidly pull your arms down and drop your hips into a athletic half-squat position',
      'Land quietly on mid-foot to heel with knees aligned over toes and chest upright',
      'Hold the stick landing position for 2 full seconds before resetting'
    ],
    commonMistakes: [
      'Landing heavily on heels with knees caving inward (valgus collapse)',
      'Dropping torso excessively forward over thighs',
      'Failing to absorb force dynamically through hips and knees'
    ],
    progressions: ['Broad Jump with Stick Landing', 'Squat Jump'],
    regressions: ['Tall-to-Short Drop without Jump']
  },
  {
    id: '2',
    name: 'Pogo Hops',
    category: 'Plyometrics',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves', 'Ankles'],
    equipment: 'Floor',
    description: 'A fundamental vertical reactivity drill designed to build stiffness in the Achilles tendon and improve elastic energy recoil.',
    instructions: [
      'Stand tall with feet hip-width apart and hands placed on hips',
      'Perform rapid vertical bounces utilizing ankle plantarflexion with minimal knee bend',
      'Minimize ground contact time, popping off the floor as fast as possible',
      'Keep ankles pre-tensioned with toes pulled up (dorsiflexed) while in the air'
    ],
    commonMistakes: [
      'Bending knees excessively into a full squat on landing',
      'Landing heavily on flat feet or heels',
      'Allowing ankles to collapse inward upon impact'
    ],
    progressions: ['Single-Leg Pogo Hop', 'Depth Jump from Stair'],
    regressions: ['Low Amplitude Ankle Bounces']
  },
  {
    id: '3',
    name: 'Explosive Incline Push-Up',
    category: 'Plyometrics',
    difficulty: 'Beginner',
    primaryMuscles: ['Chest', 'Triceps', 'Shoulders', 'Core'],
    equipment: 'Chair',
    description: 'An introductory upper-body power drill that develops pushing velocity and rate of force development against elevated support.',
    instructions: [
      'Set up in a rigid plank position with hands on a sturdy chair or step',
      'Lower chest to edge of surface under control',
      'Explode upward forcefully so hands leave surface briefly at peak extension',
      'Catch surface with soft elbows and immediately absorb into next rep'
    ],
    commonMistakes: [
      'Sagging lower back or hiking hips during push phase',
      'Catching with locked elbows instead of absorbing force',
      'Losing total body tension at peak flight'
    ],
    progressions: ['Plyometric Push-Up'],
    regressions: ['Explosive Wall Push-Up']
  },
  {
    id: '4',
    name: 'Power Skip',
    category: 'Plyometrics',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Calves'],
    equipment: 'Floor',
    description: 'A dynamic multi-directional drill that integrates arm drive and explosive single-leg triple extension for vertical impulse.',
    instructions: [
      'Take a short step forward and drive front knee forcefully upward toward chest',
      'Push off rear ankle, knee, and hip (triple extension) to gain maximum vertical height',
      'Drive opposite arm upward simultaneously in synchronized athletic counter-arm movement',
      'Land softly on takeoff foot and step smoothly into power skip on opposite side'
    ],
    commonMistakes: [
      'Reaching for horizontal distance instead of vertical height',
      'Lack of coordinated contralateral arm drive',
      'Landing flat-footed and stiff-legged'
    ],
    progressions: ['Single-Leg Bound', 'Stair Bounds'],
    regressions: ['High Knee Marching']
  },
  {
    id: '5',
    name: 'Broad Jump with Stick Landing',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Glutes', 'Hamstrings', 'Quadriceps', 'Calves'],
    equipment: 'Floor',
    description: 'A foundational horizontal power exercise that measures maximal propulsion combined with controlled eccentric deceleration.',
    instructions: [
      'Stand with feet hip-width apart and swing arms back while hinging at hips',
      'Explode forward throwing arms up and forward, driving off floor at 45-degree angle',
      'Extend hips, knees, and ankles completely in flight',
      'Land softly on both feet simultaneously in a stable half-squat and freeze landing'
    ],
    commonMistakes: [
      'Jumping too vertically instead of driving horizontally',
      'Stumbling or taking extra steps upon landing',
      'Valgus collapse of knees upon force absorption'
    ],
    progressions: ['Continuous Broad Jumps', 'Bound to Broad Jump'],
    regressions: ['Snap-Down and Hold']
  },
  {
    id: '6',
    name: 'Squat Jump',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Calves'],
    equipment: 'Floor',
    description: 'A classic vertical power exercise that utilizes stretch-shortening cycle action to maximize explosive vertical jump performance.',
    instructions: [
      'Stand tall, then swing arms back while rapidly descending into a quarter-squat',
      'Immediately reverse direction and explode vertically throwing arms overhead',
      'Reach full extension through ankles, knees, and hips in air',
      'Absorb force smoothly upon landing and transition immediately into next jump'
    ],
    commonMistakes: [
      'Dipping too deep into full squat, losing elastic recoil',
      'Landing stiff-legged with locked knees',
      'Pausing at bottom of squat before launching'
    ],
    progressions: ['Tuck Jump', 'Depth Jump from Stair'],
    regressions: ['Snap-Down and Hold']
  },
  {
    id: '7',
    name: 'Skater Jump',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Gluteus Medius', 'Quadriceps', 'Calves', 'Adductors'],
    equipment: 'Floor',
    description: 'A dynamic lateral power drill that enhances single-leg lateral propulsion, frontal plane stability, and hip deceleration.',
    instructions: [
      'Stand on right leg with left knee bent slightly behind',
      'Push off right leg explosively to leap sideways to the left',
      'Land softly on left foot, absorbing force through hip and knee while sweeping right leg behind',
      'Pause briefly to stick landing before exploding laterally back to right'
    ],
    commonMistakes: [
      'Collapsing knee inward on lateral landing',
      'Trunk dumping forward out of control',
      'Rushing side-to-side without establishing force absorption'
    ],
    progressions: ['Continuous Lateral Bounds'],
    regressions: ['Lateral Step and Stick']
  },
  {
    id: '8',
    name: 'Split Jump',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Calves'],
    equipment: 'Floor',
    description: 'A unilateral vertical power drill emphasizing quick leg exchange in flight and eccentric deceleration in a split stance.',
    instructions: [
      'Begin in a split squat stance with front and rear knees bent at 90 degrees',
'Explode straight up vertically into the air while driving through both feet',
      'Switch leg positions quickly at peak height of flight phase',
      'Land smoothly in opposite split stance and absorb load directly into next jump'
    ],
    commonMistakes: [
      'Allowing back knee to slam into floor on landing',
      'Shifting weight too far onto front toes',
      'Failing to reach full vertical flight before switching legs'
    ],
    progressions: ['Continuous Split Jumps with Arm Drive'],
    regressions: ['Explosive Step-Up onto Chair']
  },
  {
    id: '9',
    name: 'Single-Leg Pogo Hop',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Calves', 'Ankles', 'Foot Intrinsic Muscles'],
    equipment: 'Floor',
    description: 'An advanced unilateral stiffness drill that builds ankle joint reactivity, calf power, and addresses lower-limb strength imbalances.',
    instructions: [
      'Balance on one leg with opposite knee flexed at 90 degrees',
      'Bounce rapidly on ball of foot with minimal knee bend',
      'Focus on fast ground contact time and rigid ankle stiffness',
      'Keep dorsiflexed ankle position during flight phase'
    ],
    commonMistakes: [
      'Deep knee bending on landing turning drill into squat bounce',
      'Heel touching ground heavily on every contact',
      'Loss of pelvic stability causing lateral tilt'
    ],
    progressions: ['Single-Leg Lateral Pogo Hop'],
    regressions: ['Pogo Hops']
  },
  {
    id: '10',
    name: 'Plyometric Push-Up',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Chest', 'Triceps', 'Shoulders', 'Core'],
    equipment: 'Floor',
    description: 'A benchmark upper-body plyometric exercise demanding maximal explosive pushing force to launch entire upper body off floor.',
    instructions: [
      'Assume a high plank position with hands slightly wider than shoulder-width and core rigid',
      'Lower chest rapidly to floor',
      'Drive through floor explosively so palms lift entirely off ground',
      'Land softly with hands on floor and instantly absorb into next repetition lowering phase'
    ],
    commonMistakes: [
      'Hyperextending lumbar spine (sagging hips) during push off',
      'Landing with locked wrists and elbows',
      'Piking hips into air to cheat upper body force'
    ],
    progressions: ['Clapping Plyometric Push-Up'],
    regressions: ['Explosive Incline Push-Up']
  },
  {
    id: '11',
    name: 'Stair Bounds',
    category: 'Plyometrics',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Calves'],
    equipment: 'Stairs',
    description: 'An inclined horizontal-vertical propulsion exercise using stairs to maximize posterior chain engagement with lower landing impact force.',
    instructions: [
      'Stand at base of a sturdy staircase in athletic stance',
      'Swing arms back and explode up and forward, skipping 1-2 steps',
      'Land softly on mid-foot with hips back and knees bent',
      'Immediately propel into next stair bound utilizing momentum'
    ],
    commonMistakes: [
      'Catching toes on edge of stair tread due to incomplete elevation',
      'Hunching upper back forward',
      'Landing flat-footed with loud impact noise'
    ],
    progressions: ['Single-Leg Stair Bounds'],
    regressions: ['Power Skip']
  },
  {
    id: '12',
    name: 'Tuck Jump',
    category: 'Plyometrics',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Core', 'Hip Flexors', 'Calves'],
    equipment: 'Floor',
    description: 'A high-intensity vertical power drill requiring explosive hip flexion speed to draw knees to chest at peak height.',
    instructions: [
      'Stand tall, dip rapidly into quarter-squat, and launch vertically into air',
      'At peak altitude, aggressively pull knees up toward chest into tight tuck',
      'Quickly extend legs down before contact with floor',
      'Land softly on forefeet, absorbing landing shock instantly'
    ],
    commonMistakes: [
      'Kicking heels back toward glutes instead of pulling knees up to chest',
      'Bending chest down to meet knees rather than driving knees up',
      'Stiff landing without absorbing force through hips and knees'
    ],
    progressions: ['Continuous Reactive Tuck Jumps'],
    regressions: ['Squat Jump']
  },
  {
    id: '13',
    name: 'Depth Jump from Stair',
    category: 'Plyometrics',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Calves', 'Hamstrings'],
    equipment: 'Stairs',
    description: 'The premier reactive strength exercise utilizing gravity-induced eccentric overload from a step to trigger maximal stretch-shortening cycle response.',
    instructions: [
      'Step off (do not jump off) a bottom stair tread into space',
      'Land on both feet simultaneously on forefeet',
      'Upon ground contact, minimize landing time and immediately explode straight up for maximum height',
      'Absorb landing softly in athletic squat stance on final return'
    ],
    commonMistakes: [
      'Jumping up off stair step instead of stepping off forward',
      'Spending too long on ground (losing reactive elastic response)',
      'Knees collapsing inward upon high impact landing'
    ],
    progressions: ['Depth Jump to Broad Jump'],
    regressions: ['Snap-Down and Hold']
  },
  {
    id: '14',
    name: 'Continuous Lateral Bounds',
    category: 'Plyometrics',
    difficulty: 'Advanced',
    primaryMuscles: ['Gluteus Medius', 'Quadriceps', 'Adductors', 'Calves'],
    equipment: 'Floor',
    description: 'A high-speed reactive frontal plane exercise requiring rapid dynamic coupling of lateral braking force into maximal lateral propulsion.',
    instructions: [
      'Explode laterally from right foot to left foot in wide side-to-side bounds',
      'Minimize ground contact time on landing foot, immediately redirecting force horizontally',
      'Use aggressive dynamic arm drive across body to accelerate transition',
      'Maintain stable low athletic hip height throughout continuous bounding'
    ],
    commonMistakes: [
      'Pausing or sticking landing on each side instead of maintaining fluid reactive recoil',
      'Losing lateral trunk alignment and tipping excessive torso weight outward',
      'Inadequate lateral leap distance'
    ],
    progressions: ['Single-Leg Bound'],
    regressions: ['Skater Jump']
  }
];