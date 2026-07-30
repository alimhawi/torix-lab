import { Exercise } from './types';

export const mobilityExercises: Exercise[] = [
  {
    id: '1',
    name: 'Neck Controlled Articular Rotations',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Neck', 'Upper Trapezius'],
    equipment: 'None',
    description: 'A controlled joint rotation drill designed to safely explore full cervical spine range of motion and maintain neck joint health.',
    instructions: [
      'Stand or sit upright with shoulders packed down and core gently braced',
      'Tuck your chin toward your chest without rounding your upper back',
      'Trace your collarbone with your chin toward your right shoulder',
      'Tilt your head back smoothly to sweep across the ceiling toward your left shoulder',
      'Return to center chest position and repeat in the opposite direction'
    ],
    commonMistakes: [
      'Shrugging shoulders up toward ears during rotations',
      'Rushing through sticky or tight angles',
      'Bending through the lumbar or thoracic spine instead of isolating the neck'
    ],
    progressions: ['Standing Shoulder CARs'],
    regressions: ['Seated Neck Flexion and Extension']
  },
  {
    id: '2',
    name: 'Wall Angels',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Shoulders', 'Back', 'Thoracic Spine'],
    equipment: 'Wall',
    description: 'A postural mobility drill that active-engages shoulder rotators and upper back muscles to restore overhead arm tracking against a wall.',
    instructions: [
      'Stand with your head, upper back, and glutes pressed flat against a wall, feet a few inches out',
      'Raise arms into a "cactus" position at 90 degrees with elbows and backs of hands touching the wall',
      'Maintain continuous wall contact while slowly sliding hands upward overhead',
      'Slide arms back down to starting position while pulling shoulder blades down'
    ],
    commonMistakes: [
      'Arching the lower back off the wall as arms move overhead',
      'Allowing wrists or elbows to lift away from the wall',
      'Shrugging shoulders upward'
    ],
    progressions: ['Standing Shoulder CARs'],
    regressions: ['Floor Wall Angels']
  },
  {
    id: '3',
    name: 'Quadruped Thoracic Rotation',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Thoracic Spine', 'Back'],
    equipment: 'None',
    description: 'An essential rotational mobility exercise for the mid-back that isolates thoracic rotation while anchoring the lower back.',
    instructions: [
      'Start on all fours with hands under shoulders and knees under hips',
      'Place one hand lightly behind your head with elbow pointed out to the side',
      'Rotate your elbow down toward the supporting hand, feeling a stretch in your mid-back',
      'Rotate outward and upward, driving your elbow toward the ceiling while opening your chest',
      'Perform all reps on one side before switching'
    ],
    commonMistakes: [
      'Shifting hips side-to-side to cheat rotation',
      'Driving motion from the lumbar spine rather than mid-back',
      'Yanking on the neck with the hand behind head'
    ],
    progressions: ['Spiderman Lunge with Thoracic Reach', 'Sidelying Thoracic Windmill'],
    regressions: ['Seated Thoracic Twist']
  },
  {
    id: '4',
    name: 'Segmental Cat-Cow',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Spine', 'Back', 'Core'],
    equipment: 'None',
    description: 'A controlled spinal articulation movement that restores bone-by-bone awareness and flexional mobility along the spine.',
    instructions: [
      'Begin on hands and knees with a neutral, flat spine',
      'Initiate flexion at the tailbone, curling it down while slowly rippling wave-like up through lumbar, thoracic, and cervical spine until head tucks',
      'Reverse the wave starting back at the tailbone, tilting pelvis forward and unfurling spine segmentally into extension',
      'Move deliberately, isolating one vertebra at a time'
    ],
    commonMistakes: [
      'Moving the spine as one rigid block instead of segmentally',
      'Rushing through transitions',
      'Hyperextending the neck excessively at end range'
    ],
    progressions: ['Quadruped Thoracic Rotation'],
    regressions: ['Standard Cat-Cow']
  },
  {
    id: '5',
    name: 'Hip 90/90 Rotational Switch',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Hip Flexors', 'Glutes', 'Hip External Rotators'],
    equipment: 'None',
    description: 'A dynamic hip mobilization drill targeting both internal and external rotation essential for deep squatting and stride mechanics.',
    instructions: [
      'Sit on the floor with front leg bent at 90 degrees in front and back leg bent at 90 degrees to the side',
      'Sit tall through your spine without leaning heavily into hands',
      'Lift back knee and sweep legs open across the floor, pivoting on heels to flip into 90/90 on the opposite side',
      'Control the transfer using active hip muscles'
    ],
    commonMistakes: [
      'Slouching or rounding the spine during the transition',
      'Relying excessively on hands pushing off the floor',
      'Collapsing knees down forcefully'
    ],
    progressions: ['Hands-Free 90/90 Hip Switch with Forward Hinge'],
    regressions: ['Seated Figure-4 Dynamic Stretch']
  },
  {
    id: '6',
    name: 'Quadruped Adductor Rocking',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Adductors', 'Hips'],
    equipment: 'None',
    description: 'A dynamic inner-thigh and hip mobility pattern that improves groin flexibility and lateral pelvic control.',
    instructions: [
      'Start on hands and knees, then extend one leg straight out to the side with foot flat on floor',
      'Keep your hands planted under shoulders and spine flat',
      'Slowly rock your hips back toward the heel of your bent knee until a mild groin stretch is felt',
      'Pause briefly, then glide forward back over hands'
    ],
    commonMistakes: [
      'Rounding the lower back during the backward rock',
      'Lifting the planted foot off the ground',
      'Locking out the standing hip aggressively'
    ],
    progressions: ['Cossack Squat'],
    regressions: ['Seated Butterfly Dynamic Pulses']
  },
  {
    id: '7',
    name: 'Elephant Walk',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Calves'],
    equipment: 'None',
    description: 'An active hamstring and calf mobilization exercise that lengthens the posterior leg chain through continuous knee flexion and extension.',
    instructions: [
      'Hinge forward at hips and place hands flat on the floor or on a low chair in front of you',
      'Bend both knees slightly to settle into position',
      'Press one heel down and fully straighten that knee to stretch the hamstring while keeping opposite knee soft',
      'Alternate legs smoothly, driving one knee straight while bending the other'
    ],
    commonMistakes: [
      'Forcing knees straight when hands cannot reach support, straining back',
      'Bouncing or jerking rapidly',
      'Lifting heels off the floor during extension'
    ],
    progressions: ['Standing Dynamic Single-Leg Hinge'],
    regressions: ['Chair-Supported Elephant Walk']
  },
  {
    id: '8',
    name: 'Knee-to-Wall Ankle Mobilization',
    category: 'Mobility',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves', 'Ankle Flexors'],
    equipment: 'Wall',
    description: 'A targeted ankle dorsiflexion drill that mobilizes the talocrural joint to support deeper squat depth and reduce Achilles strain.',
    instructions: [
      'Stand facing a wall with toes of front foot a few inches away from the baseboard',
      'Keep front heel firmly glued flat to the floor throughout',
      'Drive front knee forward directly over second toe until it touches the wall',
      'Hold for 1-2 seconds, return to start, and adjust foot distance to find current mobile limit'
    ],
    commonMistakes: [
      'Allowing the front heel to lift off the floor',
      'Letting the knee cave inward (valgus collapse) instead of tracking over toes',
      'Twisting hips out of square alignment'
    ],
    progressions: ['Deep Squat Mobilizer'],
    regressions: ['Seated Ankle Circles']
  },
  {
    id: '9',
    name: 'Spiderman Lunge with Thoracic Reach',
    category: 'Mobility',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hip Flexors', 'Adductors', 'Thoracic Spine'],
    equipment: 'None',
    description: 'A comprehensive full-body mobility dynamic drill opening the hips, groin, and thoracic spine simultaneously.',
    instructions: [
      'Start in a high plank position and step right foot outside right hand',
      'Lower back knee softly or keep leg straight, sinking hips down into lunge',
      'Reach right elbow down toward right instep',
      'Rotate chest right and reach right arm straight up toward ceiling, tracing hand with eyes',
      'Return hand to floor, step back to plank, and repeat on left side'
    ],
    commonMistakes: [
      'Stepping foot too far behind hand instead of outside wrist',
      'Driving rotation from lower back rather than mid-back',
      'Collapsing shoulders toward ears'
    ],
    progressions: ['Deep Squat Mobilizer'],
    regressions: ['Kneeling Lunge with Thoracic Reach']
  },
  {
    id: '10',
    name: 'Sidelying Thoracic Windmill',
    category: 'Mobility',
    difficulty: 'Intermediate',
    primaryMuscles: ['Thoracic Spine', 'Shoulders'],
    equipment: 'None',
    description: 'A restorative dynamic rotational stretch for upper back thoracic extension and shoulder girdle freedom.',
    instructions: [
      'Lie on your side with knees stacked and bent at 90 degrees in front of hips',
      'Extend arms straight out on floor in front of chest, palms touching',
      'Sweep top hand up and over head in a wide full circle across floor, rotating chest open to sky',
      'Continue circle until arm sweeps past hips back to starting hand-to-hand position'
    ],
    commonMistakes: [
      'Allowing top knee to slide back or lift off bottom knee',
      'Bending elbow instead of moving through shoulder and spine',
      'Rushing the movement arc'
    ],
    progressions: ['Standing Shoulder CARs'],
    regressions: ['Sidelying Open Book']
  },
  {
    id: '11',
    name: 'Deep Squat Mobilizer',
    category: 'Mobility',
    difficulty: 'Intermediate',
    primaryMuscles: ['Quadriceps', 'Hips', 'Calves', 'Thoracic Spine'],
    equipment: 'None',
    description: 'An integrated end-range lower body drill that improves ankle dorsiflexion, hip abduction, and upright thoracic stance.',
    instructions: [
      'Stand with feet shoulder-width apart and sit down into a deep squat',
      'Press elbows against inner knees to gently push hips open',
      'Keep chest upright and shift weight subtly side-to-side to load each ankle',
      'Reach one arm up to ceiling, rotating torso, then repeat on opposite side'
    ],
    commonMistakes: [
      'Heels lifting off the floor (place towel under heels if needed)',
      'Severe thoracic rounding',
      'Collapsing inward through arches'
    ],
    progressions: ['Cossack Squat'],
    regressions: ['Chair-Assisted Deep Squat Hold']
  },
  {
    id: '12',
    name: 'Standing Shoulder CARs',
    category: 'Mobility',
    difficulty: 'Intermediate',
    primaryMuscles: ['Shoulders', 'Rotator Cuff', 'Back'],
    equipment: 'None',
    description: 'The definitive shoulder joint isolation drill for expanding active shoulder range of motion and joint resilience.',
    instructions: [
      'Stand tall with feet hip-width, brace core, and make a soft fist with working hand',
      'Raise arm straight up forward into full flexion until arm is next to ear',
      'Internally rotate shoulder (turn thumb down and back) and sweep arm backward in wide circle',
      'Finish with back of hand against thigh, then reverse movement back to start'
    ],
    commonMistakes: [
      'Arching lower back as arm reaches overhead',
      'Rotating torso or hips to fake shoulder motion',
      'Bending the working elbow'
    ],
    progressions: ['Wall Angels'],
    regressions: ['Wall Shoulder CARs']
  }
];