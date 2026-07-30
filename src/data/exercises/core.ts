import { Exercise } from './types';

export const coreExercises: Exercise[] = [
  {
    id: '1',
    name: 'Dead Bug',
    category: 'Core',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Hip Flexors'],
    equipment: 'None',
    description: 'A fundamental anti-extension and cross-body coordination drill that teaches deep core engagement while limbs move independently.',
    instructions: [
      'Lie face up with knees bent at 90 degrees and arms extended straight toward the ceiling',
      'Press your lower back flat against the floor, eliminating any gap between back and floor',
      'Slowly extend one arm overhead while extending the opposite leg forward until both are parallel to the floor',
      'Return to starting position under control and repeat on opposite side'
    ],
    commonMistakes: [
      'Allowing the lower back to arch off the floor during limb extension',
      'Rushing the movement and relying on momentum',
      'Holding breath instead of maintaining rhythmic diaphragmatic breathing'
    ],
    progressions: ['Plank', 'Hollow Body Hold'],
    regressions: ['Supported Dead Bug', 'Single-Leg Heel Taps']
  },
  {
    id: '2',
    name: 'Bird-Dog',
    category: 'Core',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Back', 'Glutes'],
    equipment: 'None',
    description: 'A foundational anti-rotation and spinal stability drill that strengthens posterior core muscles and cross-body sling balance.',
    instructions: [
      'Start on hands and knees in a quadruped position with a flat spine and knees under hips',
      'Extend one arm straight forward and opposite leg straight backward simultaneously',
      'Maintain a neutral spine and keep hips square to floor without tilting',
      'Pause briefly at full extension, then return to starting position under control'
    ],
    commonMistakes: [
      'Arching or twisting the spine during limb extension',
      'Rotating hips open toward the side of the raised leg',
      'Hyperextending the neck rather than keeping chin neutral'
    ],
    progressions: ['Plank Shoulder Tap', 'Plank'],
    regressions: ['Quadruped Arm Lift', 'Quadruped Leg Extension']
  },
  {
    id: '3',
    name: 'Plank',
    category: 'Core',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Shoulders', 'Glutes'],
    equipment: 'None',
    description: 'The golden standard isometric anti-extension exercise for total anterior chain stability and shoulder girdle bracing.',
    instructions: [
      'Place forearms flat on floor with elbows directly beneath shoulders',
      'Extend legs behind you with toes tucked, forming a rigid straight line from head to heels',
      'Squeeze glutes, brace abdominals, and press forearms firmly into floor',
      'Hold position while maintaining steady, deep breathing'
    ],
    commonMistakes: [
      'Allowing hips to sag down toward floor',
      'Piking hips too high in the air to cheat core load',
      'Shrugging shoulders toward ears or holding breath'
    ],
    progressions: ['Plank Shoulder Tap', 'Towel Abdominal Rollout', 'Hollow Body Hold'],
    regressions: ['Incline Plank', 'Knee Plank']
  },
  {
    id: '4',
    name: 'Side Plank',
    category: 'Core',
    difficulty: 'Beginner',
    primaryMuscles: ['Obliques', 'Core', 'Gluteus Medius'],
    equipment: 'None',
    description: 'An essential anti-lateral flexion exercise targeting obliques, transverse abdominis, and lateral hip stability.',
    instructions: [
      'Lie on your side with feet stacked and bottom forearm flat on floor beneath shoulder',
      'Press through forearm and feet to lift hips until body forms a straight diagonal line',
      'Engage core and glutes to keep hips stacked without leaning forward or back',
      'Hold position firmly for target duration'
    ],
    commonMistakes: [
      'Dropping hips toward floor',
      'Rotating top hip forward or backward out of alignment',
      'Allowing shoulder to collapse into neck'
    ],
    progressions: ['Side Plank Leg Lift', 'Side Plank Thread the Needle'],
    regressions: ['Knee Side Plank', 'Incline Side Plank']
  },
  {
    id: '5',
    name: 'Reverse Crunch',
    category: 'Core',
    difficulty: 'Beginner',
    primaryMuscles: ['Core', 'Hip Flexors'],
    equipment: 'None',
    description: 'A spine-friendly trunk flexion exercise emphasizing lower abdominal control through posterior pelvic tilt without neck strain.',
    instructions: [
      'Lie on back with arms extended at sides, palms pressing down into floor',
      'Bend knees to 90 degrees and lift feet slightly off floor',
      'Contract lower abs to tilt pelvis backward and curl hips off floor toward chest',
      'Slowly lower hips back to floor under control without letting lower back arch'
    ],
    commonMistakes: [
      'Using leg momentum or swinging knees to force pelvic lift',
      'Pressing hands forcefully into floor to assist movement',
      'Dropping feet quickly on descent phase'
    ],
    progressions: ['Bicycle Crunch', 'Chair Tuck L-Sit'],
    regressions: ['Bent-Knee Heel Taps', 'Pelvic Tilt']
  },
  {
    id: '6',
    name: 'Plank Shoulder Tap',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Shoulders', 'Obliques'],
    equipment: 'None',
    description: 'A dynamic anti-rotation pattern requiring weight transfer across three points of contact while preserving pelvic alignment.',
    instructions: [
      'Assume a high plank push-up position with feet slightly wider than hip-width apart',
      'Brace core and squeeze glutes to keep hips completely stationary',
      'Lift one hand off floor and slowly tap opposite shoulder',
      'Return hand to floor and repeat on opposite side without swaying hips'
    ],
    commonMistakes: [
      'Rotating or swaying hips side-to-side during taps',
      'Placing feet too close together causing loss of balance',
      'Rushing reps without pausing on shoulder contact'
    ],
    progressions: ['Towel Abdominal Rollout', 'Side Plank Leg Lift'],
    regressions: ['Knee Plank Shoulder Tap', 'Plank']
  },
  {
    id: '7',
    name: 'Hollow Body Hold',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Hip Flexors', 'Quadriceps'],
    equipment: 'None',
    description: 'A high-yield gymnastic compression exercise creating maximum anterior chain isometric tension with lower back floor contact.',
    instructions: [
      'Lie flat on back with legs extended straight and arms reaching overhead',
      'Press lower back firmly into floor, tilting pelvis posteriorly',
      'Lift shoulder blades and legs a few inches off floor simultaneously',
      'Maintain banana-shaped hold with lower back glued flat to floor throughout'
    ],
    commonMistakes: [
      'Allowing lower back to arch off floor',
      'Lifting upper back too high into regular crunch',
      'Bending knees or dropping legs too low before core is strong enough'
    ],
    progressions: ['Hollow Body Rock', 'Chair L-Sit Hold'],
    regressions: ['Tuck Hollow Hold', 'Single-Leg Hollow Hold']
  },
  {
    id: '8',
    name: 'Bicycle Crunch',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Obliques', 'Core', 'Hip Flexors'],
    equipment: 'None',
    description: 'A dynamic rotational flexion movement combining cross-body oblique activation with continuous hip flexor compression.',
    instructions: [
      'Lie on back with hands lightly resting behind head and knees lifted at 90 degrees',
      'Lift shoulder blades off floor and press lower back into ground',
      'Rotate torso to touch left elbow to right knee while extending left leg straight',
      'Switch sides in a smooth, controlled pedaling motion without pulling on neck'
    ],
    commonMistakes: [
      'Pulling on neck with hands',
      'Moving too fast without full thoracic rotation',
      'Allowing lower back to arch off floor'
    ],
    progressions: ['Floor Windshield Wipers', 'Hollow Body Rock'],
    regressions: ['Dead Bug', 'Cross-Body Crunch']
  },
  {
    id: '9',
    name: 'Towel Abdominal Rollout',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Back', 'Shoulders'],
    equipment: 'Towel',
    description: 'An exceptional zero-equipment anti-extension rollout exercise utilizing towel friction on smooth floor to challenge core leverage.',
    instructions: [
      'Kneel on a towel placed on smooth floor with hands flat in front of knees',
      'Brace core, tuck pelvis slightly, and maintain a straight torso line',
      'Slowly slide hands forward, extending hips and arms into a long lever position',
      'Contract core forcefully to pull hands back under chest to starting position'
    ],
    commonMistakes: [
      'Allowing lower back to collapse or arch into hyperextension',
      'Leading with hips backward instead of pulling through core',
      'Reaching further than core strength can safely control'
    ],
    progressions: ['Hollow Body Rock'],
    regressions: ['Short-Range Towel Rollout', 'Plank']
  },
  {
    id: '10',
    name: 'Chair Tuck L-Sit',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Core', 'Hip Flexors', 'Triceps'],
    equipment: 'Chair',
    description: 'An accessible gymnastics compression hold using a sturdy chair to develop hip flexor and lower abdominal strength.',
    instructions: [
      'Sit on edge of a sturdy chair with palms flat on seat beside hips',
      'Depress shoulders down and press through palms to lift hips completely off seat',
      'Pull knees up toward chest in a tight tuck position',
      'Hold elevated tuck firmly for target duration without sinking into shoulders'
    ],
    commonMistakes: [
      'Shrugging shoulders up toward ears',
      'Letting feet drag on floor',
      'Rounding chest forward into a collapsed posture'
    ],
    progressions: ['Chair L-Sit Hold'],
    regressions: ['Chair Foot-Supported Tuck Hold', 'Reverse Crunch']
  },
  {
    id: '11',
    name: 'Floor Windshield Wipers',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryMuscles: ['Obliques', 'Core', 'Hip Flexors'],
    equipment: 'None',
    description: 'A rotational control exercise targeting oblique strength, lumbo-pelvic stability, and active spinal mobility.',
    instructions: [
      'Lie on back with arms extended out to sides in T-position for leverage',
      'Lift legs straight up perpendicular to floor with knees slightly soft',
      'Slowly lower legs to one side toward floor under strict oblique control',
      'Reverse direction back to center and lower legs to opposite side'
    ],
    commonMistakes: [
      'Lifting opposite shoulder off floor during leg lowering',
      'Dropping legs quickly using gravity instead of muscle control',
      'Arching lower back excessively'
    ],
    progressions: ['Side Plank Leg Lift'],
    regressions: ['Bent-Knee Floor Windshield Wipers', 'Bicycle Crunch']
  },
  {
    id: '12',
    name: 'Chair L-Sit Hold',
    category: 'Core',
    difficulty: 'Advanced',
    primaryMuscles: ['Core', 'Hip Flexors', 'Quadriceps'],
    equipment: 'Chair',
    description: 'The benchmark bodyweight core compression hold demanding elite abdominal engagement, hip flexor strength, and scapular depression.',
    instructions: [
      'Grip edges of a sturdy chair or press palms flat on seat next to hips',
      'Depress shoulders downward and lock elbows out straight',
      'Lift body off chair and extend legs straight out in front parallel to floor',
      'Hold rigid L-position with quad lockout and toes pointed for target duration'
    ],
    commonMistakes: [
      'Bending knees or letting legs drop below horizontal',
      'Allowing shoulders to shrug into ears',
      'Leaning torso excessively backward'
    ],
    progressions: ['Floor L-Sit Hold'],
    regressions: ['Chair Tuck L-Sit', 'Single-Leg Chair L-Sit']
  },
  {
    id: '13',
    name: 'Side Plank Leg Lift',
    category: 'Core',
    difficulty: 'Advanced',
    primaryMuscles: ['Obliques', 'Gluteus Medius', 'Core'],
    equipment: 'None',
    description: 'An intense anti-lateral flexion and lateral hip integration hold that overloads lateral core stability under dynamic leverage.',
    instructions: [
      'Establish a solid side plank on forearm with feet stacked and body aligned',
      'Maintaining elevated hip height, slowly lift upper leg straight up toward ceiling',
      'Pause briefly at peak abduction without letting lower hip sag',
      'Lower leg down smoothly and repeat before switching sides'
    ],
    commonMistakes: [
      'Sagging bottom hip toward floor during leg lift',
      'Rotating top hip backward',
      'Rushing reps and losing balance'
    ],
    progressions: ['Side Plank Star Hold'],
    regressions: ['Side Plank', 'Knee Side Plank Leg Lift']
  },
  {
    id: '14',
    name: 'Hollow Body Rock',
    category: 'Core',
    difficulty: 'Advanced',
    primaryMuscles: ['Core', 'Hip Flexors', 'Quadriceps'],
    equipment: 'None',
    description: 'A dynamic gymnastic core conditioning movement maintaining static hollow body tension while shifting center of mass.',
    instructions: [
      'Assume a solid hollow body hold with lower back pressed flat and limbs elevated',
      'Maintain rigid banana shape without altering hip or arm angle',
      'Initiate a small, smooth rocking motion forward and backward using core tension',
      'Ensure lower back remains rounded and glued to floor throughout entire rock'
    ],
    commonMistakes: [
      'Bending knees or throwing arms to generate momentum',
      'Losing lower back floor contact at bottom of rock',
      'Breaking body shape during motion'
    ],
    progressions: ['Dragon Flag Progression'],
    regressions: ['Hollow Body Hold', 'Tuck Hollow Rock']
  }
];