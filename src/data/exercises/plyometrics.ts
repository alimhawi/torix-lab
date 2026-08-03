import { Exercise } from './types';

export const plyometricsExercises: Exercise[] = [
  {
    id: 'box_jump',
    slug: 'box-jump',
    name: 'Box Jump',
    category: 'Plyometrics',
    equipment: 'Plyo Box',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Core'],
    description: 'A foundational explosive power movement targeting lower body fast-twitch muscle fibers and vertical leap capacity.',
    instructions: [
      'Stand facing a sturdy plyo box at an appropriate height.',
      'Drop into a quarter squat, swinging arms back, then forcefully extend hips, knees, and ankles.',
      'Land softly on the box with both feet in a partial squat position, absorbing the impact.',
      'Step down carefully one foot at a time.'
    ],
    coachingTips: [
      'Focus on minimal ground contact time and soft, silent landings to protect joints.',
      'Keep your chest upright and do not round your spine during takeoff.'
    ],
    image: '/images/exercises/plyometric/box-jump.webp',
    commonMistakes: ["Stepping down instead of landing with soft knees on the box.","Choosing a box that is too high and rounding the back on landing.","Using momentum from swinging the body instead of a controlled hip drive."],
    progressions: ["Single-Leg Box Jump","Weighted Box Jump"],
    regressions: ["Step-Up","Seated Box Jump"],
  },
  {
    id: 'broad_jump',
    slug: 'broad-jump',
    name: 'Broad Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    primaryMuscles: ['Gluteus Maximus', 'Quadriceps', 'Hamstrings', 'Calves'],
    description: 'A horizontal explosive power exercise designed to improve explosive leg drive and overall neuromuscular coordination.',
    instructions: [
      'Stand with feet shoulder-width apart behind a starting line.',
      'Swing arms back and flex hips and knees into a loading position.',
      'Explode forward and upward simultaneously, driving arms forward to maximize distance.',
      'Land softly with bent knees to absorb deceleration forces.'
    ],
    coachingTips: [
      'Ensure full triple extension of hips, knees, and ankles at takeoff.',
      'Control the landing by sinking hips back immediately upon contact.'
    ],
    image: '/images/exercises/plyometric/broad-jump.webp',
    commonMistakes: ["Landing with locked knees or a flat-footed thud.","Collapsing the knees inward on landing.","Jumping upward instead of forward for distance."],
    progressions: ["Stair Bounds","Single-Leg Broad Jump"],
    regressions: ["Squat Jump","Standing Long Jump with Stick"],
  },
  {
    id: 'continuous_lateral_bounds',
    slug: 'continuous-lateral-bounds',
    name: 'Continuous Lateral Bounds',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Advanced',
    primaryMuscles: ['Gluteus Medius', 'Quadriceps', 'Calves', 'Core'],
    description: 'Multi-directional lateral plyometric drill enhancing lateral agility, ankle stability, and frontal plane power.',
    instructions: [
      'Start on one leg in a slight athletic quarter squat position.',
      'Push laterally off the outside leg to bound sideways onto the opposite foot.',
      'Immediately absorb the landing and rebound dynamically back in the opposite direction.',
      'Maintain a rhythmic, continuous flow between bounds.'
    ],
    coachingTips: [
      'Keep knees tracking over toes and prevent inward collapse upon landing.',
      'Use your arms to drive momentum side to side.'
    ],
    image: '/images/exercises/plyometric/continuous-lateral-bounds.webp',
    commonMistakes: ["Rushing the bounds at the expense of landing control.","Letting the knee collapse inward on each landing.","Dropping the hips below a quarter-squat stance."],
    progressions: ["Single-Leg Continuous Bounds"],
    regressions: ["Lateral Bound","Lateral Lunge"],
  },
  {
    id: 'countermovement_jump',
    slug: 'countermovement-jump',
    name: 'Countermovement Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves'],
    description: 'Standard vertical jump utilizing the stretch-shortening cycle (SSC) to maximize explosive power output.',
    instructions: [
      'Stand tall with feet hip-width apart and hands on hips or ready to swing.',
      'Rapidly dip into a countermovement quarter squat while swinging arms back.',
      'Immediately reverse motion and explode vertically upward for maximum height.',
      'Land softly on the balls of the feet and transition into the next repetition if continuous.'
    ],
    coachingTips: [
      'Maximize the transition speed between the downward dip and upward drive.',
      'Keep torso upright throughout the countermovement phase.'
    ],
    image: '/images/exercises/plyometric/countermovement-jump.webp',
    commonMistakes: ["Taking too long between the dip and the jump, losing the stretch-shortening cycle.","Landing with straight, stiff knees.","Swinging the arms erratically instead of rhythmically."],
    progressions: ["Depth Jump","Tuck Jump"],
    regressions: ["Squat Jump","Pogo Jump"],
  },
  {
    id: 'depth_jump',
    slug: 'depth-jump',
    name: 'Depth Jump',
    category: 'Plyometrics',
    equipment: 'Plyo Box',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Core'],
    description: 'Advanced shock method training designed to maximize reactive strength index and explosive vertical power via high-intensity stretch-shortening cycle stimulation.',
    instructions: [
      'Stand on top of a low to moderate height plyo box with toes near the edge.',
      'Step off forward (do not jump up) and drop down to the floor.',
      'Upon ground contact, minimize contact time and immediately rebound upward into a maximum vertical jump.',
      'Land securely on both feet with controlled deceleration.'
    ],
    coachingTips: [
      'Keep ground contact time as short as possible (stiff ankle response).',
      'Recommended only for advanced athletes with high baseline eccentric strength.'
    ],
    image: '/images/exercises/plyometric/depth-jump.webp',
    commonMistakes: ["Starting from a box that is too high for your current strength.","Spending too long on the ground between landing and rebound.","Absorbing the drop with a rounded back."],
    progressions: ["Depth Jump to Box","Depth Jump with Forward Leap"],
    regressions: ["Countermovement Jump","Drop to Stabilize"],
  },
  {
    id: 'drop_jump',
    slug: 'drop-jump',
    name: 'Drop Jump',
    category: 'Plyometrics',
    equipment: 'Plyo Box',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves'],
    description: 'High-velocity reactive training focused on explosive vertical takeoff immediately following an elevated drop.',
    instructions: [
      'Step off a plyo box and drop straight down to the ground.',
      'Upon immediate contact, rebound upward for maximum vertical height or explosive distance.',
      'Focus on minimal knee flexion during ground absorption to maximize tendon stiffness.',
      'Land softly after the explosive rebound.'
    ],
    coachingTips: [
      'Do not let heels touch the ground during contact; stay on the forefoot/midfoot.',
      'Prioritize reactive stiffness over jumping height initially.'
    ],
    image: '/images/exercises/plyometric/drop-jump.webp',
    commonMistakes: ["Softening the landing excessively and losing the reactive rebound.","Letting the heels slam the ground on contact.","Rounding the spine on impact."],
    progressions: ["Depth Jump","Rebound Box Jump"],
    regressions: ["Pogo Jump","Countermovement Jump"],
  },
  {
    id: 'explosive_incline_push_up',
    slug: 'explosive-incline-push-up',
    name: 'Explosive Incline Push-Up',
    category: 'Plyometrics',
    equipment: 'Elevated Platform / Bench',
    difficulty: 'Intermediate',
    primaryMuscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps Brachii', 'Core'],
    description: 'Upper body explosive plyometric movement performed on an incline to develop upper body power and rate of force development.',
    instructions: [
      'Place hands securely on an elevated stable bench or platform slightly wider than shoulder-width.',
      'Lower your chest toward the bench in a controlled eccentric phase.',
      'Explosively push your upper body away from the bench with enough force to lift your hands briefly off the surface.',
      'Land softly back into the starting push-up position.'
    ],
    coachingTips: [
      'Keep core braced tightly to prevent lower back hyperextension.',
      'Maintain a rigid plank alignment from head to heels throughout.'
    ],
    image: '/images/exercises/plyometric/explosive-incline-push-up.webp',
    commonMistakes: ["Arching the lower back during the explosive push.","Landing with locked, straight elbows.","Not achieving full hand release off the bench."],
    progressions: ["Plyometric Push-Up","Clapping Push-Up"],
    regressions: ["Incline Push-Up","Pause Push-Up"],
  },
  {
    id: 'lateral_bound',
    slug: 'lateral-bound',
    name: 'Lateral Bound',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    primaryMuscles: ['Gluteus Medius', 'Quadriceps', 'Calves'],
    description: 'Single-repetition lateral bounding drill for developing single-leg lateral power and ankle stability.',
    instructions: [
      'Stand on the right leg in a semi-squat athletic stance.',
      'Push laterally to the left, driving off the right foot.',
      'Land softly and stabilize completely on the left foot for 2 seconds before repeating or switching sides.',
      'Maintain upright posture during stabilization.'
    ],
    coachingTips: [
      'Focus on a stable, balanced landing before initiating the return movement.',
      'Ensure the knee does not cave inward upon impact.'
    ],
    image: '/images/exercises/plyometric/lateral-bound.webp',
    commonMistakes: ["Landing on a straight leg without absorbing through the hip.","Letting the knee cave inward on the single-leg landing.","Failing to hold the landing position for a full second."],
    progressions: ["Continuous Lateral Bounds","Single-Leg Lateral Bounds"],
    regressions: ["Lateral Lunge","Step-Back Lateral Bound"],
  },
  {
    id: 'plyometric_push_up',
    slug: 'plyometric-push-up',
    name: 'Plyometric Push-Up',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Advanced',
    primaryMuscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps Brachii', 'Core'],
    description: 'Advanced upper body plyometric exercise requiring explosive chest and arm extension to lift hands off the floor.',
    instructions: [
      'Assume a standard push-up plank position with hands shoulder-width apart.',
      'Lower your chest to the floor with control.',
      'Explosively push up with maximum force so your hands leave the floor.',
      'Land softly with slightly bent elbows to absorb impact and immediately flow into the next rep.'
    ],
    coachingTips: [
      'Keep core and glutes locked tight to protect the lumbar spine.',
      'Progress from incline push-ups before attempting full floor plyo push-ups.'
    ],
    image: '/images/exercises/plyometric/plyometric-push-up.webp',
    commonMistakes: ["Sagging the hips during the explosive phase.","Failing to generate enough force to fully leave the floor.","Landing with elbows locked out."],
    progressions: ["Clapping Push-Up","Plyometric Decline Push-Up"],
    regressions: ["Explosive Incline Push-Up","Pause Push-Up"],
  },
  {
    id: 'pogo_jump',
    slug: 'pogo-jump',
    name: 'Pogo Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves', 'Soleus', 'Ankle Complex'],
    description: 'Low-amplitude, high-frequency spring training designed to improve ankle stiffness and elastic energy storage.',
    instructions: [
      'Stand tall with hands on hips and legs relatively straight with soft knees.',
      'Bounce continuously off the floor using primarily ankle and calf action, keeping ground contact minimal.',
      'Rebound instantly upon touching the ground with minimal knee bend.',
      'Maintain a steady rhythm and high rebound frequency.'
    ],
    coachingTips: [
      'Imagine the floor is extremely hot to encourage ultra-fast ground contact times.',
      'Keep torso tall and stable.'
    ],
    image: '/images/exercises/plyometric/pogo-jump.webp',
    commonMistakes: ["Bending the knees too much and turning it into a squat jump.","Moving the torso around instead of staying tall.","Slapping the ground instead of landing quietly."],
    progressions: ["Double-Leg Pogo Jump","Countermovement Jump"],
    regressions: ["Standing Calf Raise","Soft-Bounce Pogo"],
  },
  {
    id: 'single_leg_box_jump',
    slug: 'single-leg-box-jump',
    name: 'Single-Leg Box Jump',
    category: 'Plyometrics',
    equipment: 'Low Plyo Box',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Core'],
    description: 'Advanced unilateral lower body explosive power drill challenging balance, coordination, and single-leg force production.',
    instructions: [
      'Stand on one leg facing a low, secure plyo box.',
      'Dip into a single-leg quarter squat and use arm swing to drive upward.',
      'Explode off the working leg and land securely on top of the box on the same leg.',
      'Step down safely with control.'
    ],
    coachingTips: [
      'Start with a very low box height to master mechanics safely before progressing.',
      'Keep the landing knee aligned directly over the foot.'
    ],
    image: '/images/exercises/plyometric/single-leg-box-jump.webp',
    commonMistakes: ["Using a box that is too high for safe single-leg mechanics.","Letting the landing knee collapse inward.","Pushing off the toes only instead of the full foot."],
    progressions: ["Weighted Single-Leg Box Jump"],
    regressions: ["Box Jump","Single-Leg Step-Up"],
  },
  {
    id: 'single_leg_broad_jump',
    slug: 'single-leg-broad-jump',
    name: 'Single-Leg Broad Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Advanced',
    primaryMuscles: ['Gluteus Maximus', 'Quadriceps', 'Hamstrings', 'Calves'],
    description: 'Unilateral horizontal jumping exercise for maximal single-leg distance and power development.',
    instructions: [
      'Stand balanced on one leg behind the starting line.',
      'Load the hip and knee into a deep athletic quarter squat.',
      'Explode forward horizontally off the single leg, driving arms forward.',
      'Land on the same foot and stabilize immediately in an athletic stance.'
    ],
    coachingTips: [
      'Prioritize safe, stable landing mechanics over maximal distance initially.',
      'Keep core engaged to prevent torso rotation during flight.'
    ],
    image: '/images/exercises/plyometric/single-leg-broad-jump.webp',
    commonMistakes: ["Collapsing the landing knee inward.","Leaning the torso too far forward to compensate.","Failing to stabilize after the landing."],
    progressions: ["Stair Bounds","Single-Leg Depth Jump"],
    regressions: ["Broad Jump","Single-Leg Step-Up"],
  },
  {
    id: 'skater_jump',
    slug: 'skater-jump',
    name: 'Skater Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    primaryMuscles: ['Gluteus Medius', 'Quadriceps', 'Gluteus Maximus', 'Core'],
    description: 'Dynamic lateral movement mimicking speed skating action to enhance lateral stability, agility, and power.',
    instructions: [
      'Start on the right leg, bounding laterally to the left while sweeping the right leg behind the left ankle.',
      'Land softly on the left foot, absorbing the force into the hip and knee.',
      'Immediately bound back in the opposite direction onto the right foot.',
      'Continue in a fluid, skating rhythm.'
    ],
    coachingTips: [
      'Keep your chest up and look forward rather than staring straight down at your feet.',
      'Use deep hip flexion on landing to absorb force efficiently.'
    ],
    image: '/images/exercises/plyometric/skater-jump.webp',
    commonMistakes: ["Landing heavily on a straight leg.","Looking down and rounding the shoulders.","Letting the landing knee drift inward."],
    progressions: ["Continuous Lateral Bounds","Single-Leg Skater Bounds"],
    regressions: ["Lateral Bound","Lateral Lunge"],
  },
  {
    id: 'snap_down_and_hold',
    slug: 'snap-down-and-hold',
    name: 'Snap Down and Hold',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Core'],
    description: 'Deceleration and landing mechanics drill crucial for injury prevention and safe force absorption.',
    instructions: [
      'Stand tall on toes with arms extended overhead.',
      'Rapidly \'snap\' down into an athletic quarter-squat position while simultaneously driving arms down and back.',
      'Land simultaneously on the midfoot with knees tracking over toes and hold stillness for 2 seconds.',
      'Check posture and reset.'
    ],
    coachingTips: [
      'Focus on eliminating any wobbling or knee valgus upon the landing snap.',
      'Ensure full stabilization before releasing the position.'
    ],
    image: '/images/exercises/plyometric/snap-down-and-hold.webp',
    commonMistakes: ["Landing with the knees collapsed inward.","Failing to hold stillness for the full two seconds.","Dropping the hips too low into a full squat."],
    progressions: ["Depth Jump to Hold","Countermovement Jump"],
    regressions: ["Quarter-Squat Hold","Step-Down to Hold"],
  },
  {
    id: 'split_jump',
    slug: 'split-jump',
    name: 'Split Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Calves'],
    description: 'Alternating lunging jump designed to develop explosive leg power, dynamic balance, and unilateral lower body endurance.',
    instructions: [
      'Start in a staggered lunge position with one foot forward and one foot back.',
      'Drop into a lunge, then explosively jump straight up into the air.',
      'While airborne, switch leg positions so the opposite foot lands forward.',
      'Land softly directly into the bottom of the next lunge and repeat fluidly.'
    ],
    coachingTips: [
      'Keep your torso upright and vertical throughout the jump and landing.',
      'Use arms to synchronize rhythm and vertical lift.'
    ],
    image: '/images/exercises/plyometric/split-jump.webp',
    commonMistakes: ["Drifting forward instead of jumping straight up.","Landing with a misaligned front knee.","Letting the back knee touch the floor."],
    progressions: ["Stair Bounds","Single-Leg Box Jump"],
    regressions: ["Split Squat","Slow-Tempo Jumping Lunge"],
  },
  {
    id: 'stair_bounds',
    slug: 'stair-bounds',
    name: 'Stair Bounds',
    category: 'Plyometrics',
    equipment: 'Stairs / Bleachers',
    difficulty: 'Advanced',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Hamstrings'],
    description: 'Vertical and horizontal multi-step bounding exercise utilizing stairs to build explosive lower body power.',
    instructions: [
      'Stand at the base of a safe flight of stairs or bleachers.',
      'Explode upward and forward, skipping one or two steps per bound.',
      'Drive knees upward powerfully and use arm swing for momentum.',
      'Land rhythmically on each targeted step, absorbing impact before the next bound.'
    ],
    coachingTips: [
      'Ensure stairs are completely dry and clear of slipping hazards before execution.',
      'Control the pace to maintain clean explosive form.'
    ],
    image: '/images/exercises/plyometric/stair-bounds.webp',
    commonMistakes: ["Bounding too aggressively and losing landing control.","Rounding the back during the drive phase.","Using stairs that are wet or unstable."],
    progressions: ["Higher-Step Stair Bounds","Depth Bounds"],
    regressions: ["Broad Jump","Step-Up"],
  },
  {
    id: 'tuck_jump',
    slug: 'tuck-jump',
    name: 'Tuck Jump',
    category: 'Plyometrics',
    equipment: 'Bodyweight',
    difficulty: 'Advanced',
    primaryMuscles: ['Hip Flexors', 'Quadriceps', 'Core', 'Calves'],
    description: 'High-intensity vertical jump emphasizing rapid knee-to-chest tucks to develop explosive power and vertical leap speed.',
    instructions: [
      'Stand with feet shoulder-width apart and knees slightly bent.',
      'Drop into a quick countermovement dip, then explode vertically upward.',
      'At the peak of the jump, rapidly pull your knees up toward your chest, touching or reaching toward your hands briefly.',
      'Land softly on the balls of your feet with immediate shock absorption.'
    ],
    coachingTips: [
      'Keep your torso upright; do not lean your upper body forward to meet your knees.',
      'Minimize ground contact time between consecutive jumps.'
    ],
    image: '/images/exercises/plyometric/tuck-jump.webp',
    commonMistakes: ["Leaning the chest forward to meet the knees.","Slapping the ground on landing instead of absorbing quietly.","Losing arm drive during the jump."],
    progressions: ["Tuck Jump with Knee Grab","Depth Jump"],
    regressions: ["Countermovement Jump","Pogo Jump"],
  }
];
