import { Exercise } from './types';

export const warmUpExercises: Exercise[] = [
  {
    id: '1',
    name: 'Jumping Jacks',
    slug: 'jumping-jacks',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Full Body', 'Calves', 'Shoulders'],
    image: '/images/exercises/warm-up/jumping-jacks.webp',
    equipment: 'None',
    description: 'A classic rhythmic full-body exercise designed to rapidly elevate heart rate, increase core body temperature, and stimulate system-wide blood flow.',
    instructions: [
      'Stand tall with feet together and arms resting at your sides',
      'Jump feet outward wider than shoulder-width while sweeping arms overhead in a smooth arc',
      'Lightly land on the balls of your feet and immediately reverse the motion',
      'Maintain a consistent, bouncy rhythm while breathing continuously'
    ],
    commonMistakes: [
      'Landing heavily on flat feet or heels',
      'Locking out knees aggressively during the landing phase',
      'Shortening arm sweep range overhead'
    ],
    progressions: ['Pogo Hops', 'High Knees'],
    regressions: ['Step Jacks']
  },
  {
    id: '2',
    name: 'High Knees',
    slug: 'high-knees',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hip Flexors', 'Quadriceps', 'Core'],
    image: '/images/exercises/warm-up/high-knees.webp',
    equipment: 'None',
    description: 'A high-cadence dynamic drill that activates the hip flexors and core while elevating heart rate and preparing lower body nervous system reactivity.',
    instructions: [
      'Stand upright with feet hip-width apart',
      'Drive one knee upward toward chest height while driving the opposite arm forward in a running motion',
      'Quickly switch legs, landing softly on the ball of your foot and lifting opposite knee',
      'Maintain an upright posture and fast cadence throughout'
    ],
    commonMistakes: [
      'Leaning the torso backward to force knees higher',
      'Landing on heels instead of staying springy on forefeet',
      'Driving knees outward instead of straight upward'
    ],
    progressions: ['Fast High Knees with Arm Pump'],
    regressions: ['Marching in Place']
  },
  {
    id: '3',
    name: 'Butt Kicks',
    slug: 'butt-kicks',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Quadriceps', 'Calves'],
    image: '/images/exercises/warm-up/butt-kicks.webp',
    equipment: 'None',
    description: 'A fast-paced running drill emphasizing rapid hamstring contraction and dynamic quadriceps lengthening to prime knees and legs for intense movement.',
    instructions: [
      'Stand tall with feet hip-width apart and arms bent at 90 degrees',
      'Flex hamstring rapidly to lift heel straight up to touch your glutes',
      'Alternate legs quickly in a springy running rhythm, staying light on the balls of your feet',
      'Keep knees pointing down toward the floor rather than driving forward'
    ],
    commonMistakes: [
      'Driving knees forward into a high knee motion instead of pulling heels straight back',
      'Hunching upper back forward',
      'Landing heavily on full foot'
    ],
    progressions: ['High Knees', 'Pogo Hops'],
    regressions: ['Standing Heel Slides']
  },
  {
    id: '4',
    name: 'Dynamic Arm Circles and Cross-Hugs',
    slug: 'dynamic-arm-circles-and-cross-hugs',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Shoulders', 'Chest', 'Upper Back'],
    image: '/images/exercises/warm-up/dynamic-arm-circles-and-cross-hugs.webp',
    equipment: 'None',
    description: 'A rhythmic upper-body activation drill that lubricates the glenohumeral joint, increases shoulder temperature, and dynamically opens the chest and back.',
    instructions: [
      'Stand upright with feet shoulder-width apart and extend arms straight out to the sides at shoulder height',
      'Perform small, controlled forward arm circles, gradually increasing circle size over 10 seconds',
      'Reverse direction to perform backward circles',
      'Transition into horizontal arm cross-hugs, swinging arms open to stretch chest and crossing them over front of torso'
    ],
    commonMistakes: [
      'Shrugging shoulders up toward ears during circles',
      'Arching lower back when opening arms wide',
      'Moving arms jerkily rather than maintaining fluid momentum'
    ],
    progressions: ['Inchworm to Plank'],
    regressions: ['Seated Arm Circles']
  },
  {
    id: '5',
    name: 'Wall Leg Swings',
    slug: 'wall-leg-swings',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hips', 'Hamstrings', 'Adductors', 'Glutes'],
    image: '/images/exercises/warm-up/wall-leg-swings.webp',
    equipment: 'Wall',
    description: 'A multi-directional dynamic hip drill using wall support to prime the hip capsule through active sagittal and frontal plane swings.',
    instructions: [
      'Stand beside a wall and place one hand flat against it for balance',
      'Swing working leg smoothly forward and backward like a pendulum, letting hamstrings and hip flexors dynamically lengthen',
      'Face the wall with both palms on it and swing working leg side-to-side across front of body to activate adductors and abductors',
      'Perform equal reps in both directions before switching legs'
    ],
    commonMistakes: [
      'Excessively arching or rounding lumbar spine to force higher swings',
      'Bending working knee heavily during sagittal swings',
      'Moving with rigid force rather than fluid momentum'
    ],
    progressions: ['Walking Lunge with Rotation'],
    regressions: ['Gentle Standing Hip Hinge']
  },
  {
    id: '6',
    name: 'Toy Soldiers',
    slug: 'toy-soldiers',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Hip Flexors', 'Core'],
    image: '/images/exercises/warm-up/toy-soldiers.webp',
    equipment: 'None',
    description: 'An upright dynamic movement that actively engages hip flexors and core while dynamically lengthening hamstrings through controlled straight-leg kicks.',
    instructions: [
      'Stand tall with arms extended straight out in front of chest at shoulder height',
      'Kick one leg straight up forward to touch opposite fingertips with toes, keeping knee locked',
      'Lower foot back down under control and step forward',
      'Repeat kick with opposite leg in a controlled walking cadence'
    ],
    commonMistakes: [
      'Rounding the chest and reaching down to touch toes instead of kicking foot up',
      'Bending the kicking knee significantly',
      'Losing balance by rushing step forward'
    ],
    progressions: ['Inchworm to Plank'],
    regressions: ['Stationary Low Kicks']
  },
  {
    id: '7',
    name: 'Knee Hug to Toe Raise',
    slug: 'knee-hug-to-toe-raise',
    category: 'Warm-Up',
    difficulty: 'Beginner',
    primaryMuscles: ['Glutes', 'Calves', 'Core'],
    image: '/images/exercises/warm-up/knee-hug-to-toe-raise.webp',
    equipment: 'None',
    description: 'A balance and activation drill that primes single-leg stability, glute engagement, and plantarflexion through the ankles.',
    instructions: [
      'Stand tall and pull one knee up toward chest with both hands wrapped around shin',
      'Squeeze knee firmly to chest while simultaneously rising onto toes of standing foot',
      'Pause briefly at top of ankle elevation, then release leg and step forward',
      'Alternate legs in a rhythmic forward walk'
    ],
    commonMistakes: [
      'Leaning backwards when hugging knee to chest',
      'Failing to rise up onto toes of supporting foot',
      'Losing balance due to rushed execution'
    ],
    progressions: ['Walking Lunge with Rotation'],
    regressions: ['Stationary Knee Hug (Without Calf Raise)']
  },
  {
    id: '8',
    name: 'Inchworm to Plank',
    slug: 'inchworm-to-plank',
    category: 'Intermediate',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Shoulders', 'Hamstrings'],
    image: '/images/exercises/warm-up/inchworm-to-plank.webp',
    equipment: 'Floor',
    description: 'A dynamic total-body walkout pattern that activates shoulder stabilizers, braces the core, and dynamically lengthens the posterior chain.',
    instructions: [
      'Stand tall with feet hip-width apart',
      'Hinge at hips to touch floor with hands, bending knees slightly if needed',
      'Walk hands forward one by one until reaching a high plank position with hands under shoulders',
      'Pause in plank for 1 second with core braced, then walk hands back toward feet and stand tall'
    ],
    commonMistakes: [
      'Sagging hips toward floor during high plank position',
      'Bending knees excessively during walkout',
      'Rushing hands backward without maintaining shoulder control'
    ],
    progressions: ['Inchworm with Push-Up'],
    regressions: ['Hand Walkout from Knees']
  },
  {
    id: '9',
    name: 'World\'s Greatest Stretch (Dynamic)',
    slug: 'world-s-greatest-stretch-dynamic',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hips', 'Thoracic Spine', 'Glutes', 'Hamstrings'],
    image: '/images/exercises/warm-up/world-s-greatest-stretch-dynamic.webp',
    equipment: 'Floor',
    description: 'The premier dynamic warm-up sequence that simultaneously activates hip flexors, glutes, hamstrings, and thoracic rotation in a single fluid flow.',
    instructions: [
      'Step forward into a deep lunge and place both hands flat on floor inside front foot',
      'Keep back leg straight and glute engaged off floor',
      'Reach inside elbow down toward front foot instep, then rotate chest open toward front knee and raise arm straight to ceiling',
      'Return hand to floor, shift hips back to straighten front leg for a quick hamstring stretch, then step forward to repeat on opposite side'
    ],
    commonMistakes: [
      'Collapsing back knee onto floor',
      'Twisting at lower back instead of rotating through mid-back (thoracic spine)',
      'Placing hands outside front foot instead of inside'
    ],
    progressions: ['Walking World\'s Greatest Stretch'],
    regressions: ['Kneeling Dynamic Lunge with Twist']
  },
  {
    id: '10',
    name: 'Walking Lunge with Rotation',
    slug: 'walking-lunge-with-rotation',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Core', 'Thoracic Spine'],
    image: '/images/exercises/warm-up/walking-lunge-with-rotation.webp',
    equipment: 'None',
    description: 'A dynamic multi-planar lunge pattern that fires up glutes and quads while introducing thoracic rotation to activate core stabilizers.',
    instructions: [
      'Step forward into a lunge until both knees reach 90-degree angles',
      'Extend arms out in front or clasp hands at chest',
      'Rotate upper torso smoothly over front lead leg, maintaining steady lower body posture',
      'Rotate back to center, push through front heel to step into next lunge forward'
    ],
    commonMistakes: [
      'Allowing front knee to collapse inward during torso rotation',
      'Rotating torso over trailing leg instead of lead leg',
      'Leaning torso forward over front thigh'
    ],
    progressions: ['Walking Lunge with Overhead Reach'],
    regressions: ['Stationary Lunge with Twist']
  },
  {
    id: '11',
    name: 'Dynamic Squat to Overhead Reach',
    slug: 'dynamic-squat-to-overhead-reach',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Glutes', 'Shoulders', 'Thoracic Spine'],
    image: '/images/exercises/warm-up/dynamic-squat-to-overhead-reach.webp',
    equipment: 'None',
    description: 'A full-body mobility and activation drill that primes lower body squatting mechanics while opening the thoracic spine and overhead shoulder girdle.',
    instructions: [
      'Stand with feet shoulder-width apart, toes pointed slightly out',
      'Hinge hips back and descend into a deep squat while reaching hands to grasp toes',
      'Keep chest up and raise one arm overhead, sweeping eyes toward thumb, then raise opposite arm overhead',
      'Drive through heels to stand up while keeping arms extended overhead'
    ],
    commonMistakes: [
      'Lifting heels off floor during deep squat descent',
      'Severe thoracic rounding while trying to reach toes',
      'Rushing through overhead arm reaches'
    ],
    progressions: ['Dynamic Squat Jumps'],
    regressions: ['Supported Chair Squat with Overhead Reach']
  },
  {
    id: '12',
    name: 'Lateral Shuffle',
    slug: 'lateral-shuffle',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Gluteus Medius', 'Adductors', 'Calves'],
    image: '/images/exercises/warm-up/lateral-shuffle.webp',
    equipment: 'None',
    description: 'A frontal-plane movement drill that activates lateral hip stabilizers, primes rapid footwork, and prepares knees for lateral movement.',
    instructions: [
      'Lower into a athletic half-squat stance with feet wider than hip-width and weight on balls of feet',
      'Quickly push off trailing leg to shuffle laterally without crossing feet over each other',
      'Keep hips low, knees bent, and torso upright throughout shuffle',
      'Shuffle 5-10 yards in one direction, then immediately reverse direction'
    ],
    commonMistakes: [
      'Crossing feet over during shuffle',
      'Standing up tall instead of staying in athletic low stance',
      'Letting knees cave inward during push-off'
    ],
    progressions: ['Carioca'],
    regressions: ['Side Step-Taps']
  },
  {
    id: '13',
    name: 'Carioca',
    slug: 'carioca',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hips', 'Obliques', 'Core'],
    image: '/images/exercises/warm-up/carioca.webp',
    equipment: 'None',
    description: 'A dynamic transverse-plane warm-up drill that improves hip dissociation, cross-body coordination, and foot quickness.',
    instructions: [
      'Stand in athletic stance and move sideways to your right',
      'Cross trailing left leg in front of right leg, step right foot out, then cross left leg behind right leg',
      'Maintain continuous quick footwork while rotating hips smoothly back and forth',
      'Keep upper torso facing forward while hips twist, then reverse direction'
    ],
    commonMistakes: [
      'Rotating shoulders along with hips instead of keeping chest forward',
      'Tripping over feet by moving too fast before establishing rhythm',
      'Staying stiff instead of springy on balls of feet'
    ],
    progressions: ['Fast Carioca with High Knee Drive'],
    regressions: ['Lateral Shuffle']
  },
  {
    id: '14',
    name: 'Pogo Hops',
    slug: 'pogo-hops',
    category: 'Warm-Up',
    difficulty: 'Intermediate',
    primaryMuscles: ['Calves', 'Ankles', 'Quadriceps'],
    image: '/images/exercises/warm-up/pogo-hops.webp',
    equipment: 'None',
    description: 'A low-amplitude elastic jumping drill designed to stiffen the ankle complex, condition the Achilles tendon, and potentiate the central nervous system.',
    instructions: [
      'Stand tall with feet hip-width apart and knees slightly soft (not locked)',
      'Perform small, springy vertical hops using primarily ankle extension and calf elasticity',
      'Minimize ground contact time, bouncing off balls of feet as if landing on hot coals',
      'Keep torso rigid and hands at waist or swinging gently in rhythm'
    ],
    commonMistakes: [
      'Bending knees deeply into a full squat jump',
      'Landing heavily on heels',
      'Spending too much time on the ground between bounces'
    ],
    progressions: ['Single-Leg Pogo Hops'],
    regressions: ['Low Ankle Bounces']
  }
];