import { Exercise } from './types';

export const coolDownExercises: Exercise[] = [
  {
    id: '1',
    name: 'Seated Upper Trapezius Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Neck', 'Upper Trapezius'],
    equipment: 'Chair',
    description: 'A gentle static neck stretch targeting upper trapezius and levator scapulae tension accrued from heavy training or posture stress.',
    instructions: [
      'Sit tall on a chair with feet flat on the floor and spine erect',
      'Anchor your right hand under the chair seat to stabilize the right shoulder',
      'Slowly tilt your left ear toward your left shoulder without rotating your head',
      'Gently place left hand on the right side of head for light assistance, breathing deeply into the side of the neck for 30 seconds',
      'Slowly release and repeat on the opposite side'
    ],
    commonMistakes: [
      'Pulling aggressively on the head with the hand',
      'Shrugging the anchored shoulder up toward the ear',
      'Slouching or rounding through the thoracic spine'
    ],
    progressions: ['Standing Upper Trapezius Stretch'],
    regressions: ['Gentle Neck Side Tilt (No Hand Assistance)']
  },
  {
    id: '2',
    name: 'Wall Chest Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Chest', 'Shoulders'],
    equipment: 'Wall',
    description: 'A targeted static pectoral stretch that restores anterior upper-body muscle length and counters shoulder protraction post-workout.',
    instructions: [
      'Stand perpendicular to a wall and place forearm flat against the wall with elbow bent at 90 degrees at shoulder height',
      'Stagger your feet and gently step forward with the inside leg',
      'Rotate your torso slightly away from the wall until a smooth stretch is felt across the chest and front shoulder',
      'Hold position while taking slow, deep diaphragmatic breaths for 30-45 seconds, then switch sides'
    ],
    commonMistakes: [
      'Arching lower back forward instead of rotating through torso',
      'Placing elbow significantly higher or lower than shoulder level',
      'Forcing rotation past comfortable elastic resistance'
    ],
    progressions: ['High-Angle Wall Chest Stretch'],
    regressions: ['Doorway Chest Stretch (Bilateral Support)']
  },
  {
    id: '3',
    name: 'Cross-Body Shoulder Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Shoulders', 'Upper Back'],
    equipment: 'None',
    description: 'A classic post-workout static deltoid stretch that releases posterior shoulder capsule tightness and reduces upper back muscle tone.',
    instructions: [
      'Stand or sit upright with relaxed shoulders dropped down from ears',
      'Bring one arm horizontally across your chest at shoulder height',
      'Use opposite forearm to gently pull the working arm closer to your chest',
      'Hold static position for 30 seconds while maintaining long, slow breaths, then switch arms'
    ],
    commonMistakes: [
      'Shrugging working shoulder up into neck',
      'Twisting torso toward side of pulled arm',
      'Applying force directly onto elbow joint rather than forearm/tricep'
    ],
    progressions: ['Eagle Arms Stretch'],
    regressions: ['Low-Angle Cross-Body Stretch']
  },
  {
    id: '4',
    name: 'Child\'s Pose with Lateral Reach',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Upper Back', 'Lats', 'Lower Back'],
    equipment: 'Floor',
    description: 'A restorative floor stretch that lengthens the latissimus dorsi, decompresses the spine, and promotes parasympathetic nervous system recovery.',
    instructions: [
      'Kneel on floor with big toes touching and knees spread wide apart',
      'Sit hips back onto heels and reach arms straight forward on floor, lowering chest toward ground',
      'Walk both hands toward the right side of the floor until a deep stretch is felt along the left lat and side body',
      'Breathe deeply into ribcage for 45 seconds, then walk hands across center to the left side'
    ],
    commonMistakes: [
      'Lifting hips completely off heels',
      'Shrugging shoulders into ears while reaching',
      'Holding breath rather than exhaling fully to relax deeper into stretch'
    ],
    progressions: ['Child\'s Pose with Thread the Needle'],
    regressions: ['Standard Center Child\'s Pose']
  },
  {
    id: '5',
    name: 'Supine Spinal Twist',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Lower Back', 'Glutes', 'Chest'],
    equipment: 'Floor',
    description: 'A relaxing rotational floor stretch that releases lower back spinal pressure and relieves gluteal tension after heavy lifting.',
    instructions: [
      'Lie face up on floor with legs extended and arms out wide in T-position',
      'Draw right knee into chest, then guide it across body to the left floor with left hand',
      'Keep both shoulder blades flat against floor and turn head gently to look over right hand',
      'Hold position for 45-60 seconds, exhaling fully to drop tension, then repeat on opposite side'
    ],
    commonMistakes: [
      'Lifting opposite shoulder blade off floor to force knee to ground',
      'Rushing movement into rotation rather than easing in passively',
      'Holding breath during twist hold'
    ],
    progressions: ['Bent-Knee Double Leg Supine Twist'],
    regressions: ['Supported Supine Twist with Pillow under Knee']
  },
  {
    id: '6',
    name: 'Kneeling Hip Flexor Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Hip Flexors', 'Quadriceps'],
    equipment: 'Floor',
    description: 'An essential static lunge stretch targeting the psoas and rectus femoris to restore full hip extension following lower body training.',
    instructions: [
      'Kneel on floor in a half-kneeling position with front knee bent at 90 degrees and back knee resting on floor',
      'Tuck pelvis backward (posterior pelvic tilt) to flatten lower back and engage glute of rear leg',
      'Shift weight slightly forward into front foot while maintaining upright torso until stretch is felt in front hip',
      'Hold position statically for 30-45 seconds, then switch legs'
    ],
    commonMistakes: [
      'Arching lower back forward instead of keeping pelvis tucked',
      'Leaning torso excessively forward over front leg',
      'Allowing front knee to cave inward'
    ],
    progressions: ['Kneeling Rear-Foot Elevated Couch Stretch'],
    regressions: ['Standing Chair-Supported Hip Flexor Stretch']
  },
  {
    id: '7',
    name: 'Standing Wall Quadriceps Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Quadriceps', 'Hip Flexors'],
    equipment: 'Wall',
    description: 'A balance-supported standing static stretch isolating the quadriceps muscle group and relieving anterior knee joint tension.',
    instructions: [
      'Stand upright facing or standing sideways next to a wall, placing hand on wall for balance',
      'Bend one knee behind you and grasp top of ankle with same-side hand',
      'Gently pull heel toward glutes while keeping knees aligned beside each other and core braced',
      'Hold upright posture and static stretch for 30-45 seconds, then switch sides'
    ],
    commonMistakes: [
      'Flaring knee outward away from supporting leg',
      'Arching lower back to force heel to glutes',
      'Pulling on toes rather than ankle/instep'
    ],
    progressions: ['Side-Lying Quadriceps Stretch'],
    regressions: ['Seated Chair Quadriceps Stretch']
  },
  {
    id: '8',
    name: 'Supine Figure-Four Glute Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Glutes', 'Hip Rotators'],
    equipment: 'Floor',
    description: 'A safe, back-supported stretch targeting gluteus maximus and deep piriformis to release hip tightness after squatting or running.',
    instructions: [
      'Lie face up on floor with knees bent and feet flat on ground',
      'Cross right ankle over left thigh just above knee, flexing right foot to protect knee',
      'Reach hands around left thigh and pull left knee gently toward chest until stretch is felt in right glute',
      'Keep head and shoulders flat on floor, holding for 45 seconds before switching legs'
    ],
    commonMistakes: [
      'Lifting head and upper back forcefully off floor to reach leg',
      'Allowing crossed foot to stay floppy rather than flexed',
      'Pressing directly on crossed knee joint'
    ],
    progressions: ['Pigeon Pose'],
    regressions: ['Seated Figure-Four Stretch in Chair']
  },
  {
    id: '9',
    name: 'Towel-Assisted Supine Hamstring Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Calves'],
    equipment: 'Towel',
    description: 'A controlled supine hamstring stretch utilizing a towel loop to allow deep posterior chain relaxation without straining low back or neck.',
    instructions: [
      'Lie flat on back on floor with legs extended',
      'Loop a bath towel around the ball of one foot, holding towel ends with both hands',
      'Lift leg toward ceiling while keeping knee straight or slightly soft until comfortable hamstring stretch is achieved',
      'Keep head, neck, and opposite leg relaxed on floor while holding stretch for 45 seconds'
    ],
    commonMistakes: [
      'Locking knee out aggressively into hyperextension',
      'Lifting lower back or hips off floor',
      'Tensing upper body and shoulders to pull towel'
    ],
    progressions: ['Seated Single-Leg Hamstring Stretch'],
    regressions: ['Supine Hamstring Stretch with Bent Opposite Knee']
  },
  {
    id: '10',
    name: 'Seated Butterfly Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Adductors', 'Groin'],
    equipment: 'Floor',
    description: 'A classic static adductor stretch that gently opens inner thigh muscles and relaxes pelvic floor tension post-training.',
    instructions: [
      'Sit tall on floor with soles of feet pressed together and knees bent out to sides',
      'Hold ankles or feet with hands and draw heels comfortably toward pelvis',
      'Keep spine long and chest open, gently letting knees sink toward floor under gravity',
      'Hinge softly forward from hips with flat back to increase stretch, holding for 45-60 seconds'
    ],
    commonMistakes: [
      'Rounding lower back into hunching posture',
      'Bouncing knees up and down rapidly',
      'Yanking on feet to force deeper hinge'
    ],
    progressions: ['Seated Straddle Stretch'],
    regressions: ['Elevated Seated Butterfly (Sitting on Folded Towel)']
  },
  {
    id: '11',
    name: 'Wall Calf Stretch',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Calves', 'Achilles'],
    equipment: 'Wall',
    description: 'A static gastrocnemius and soleus stretch using wall leverage to lengthen lower leg muscles and Achilles tendon post-cardio or resistance work.',
    instructions: [
      'Stand facing wall at arm\'s length and place palms flat against wall at chest height',
      'Step target leg backward, keeping heel pressed flat on floor and knee fully straight',
      'Lean hips forward toward wall until stretch is felt in upper calf',
      'Hold for 30 seconds, then slightly bend rear knee to shift stretch lower into soleus and Achilles for another 30 seconds'
    ],
    commonMistakes: [
      'Lifting rear heel off floor',
      'Turning rear toes outward instead of pointing straight at wall',
      'Collapsing lower back into arching posture'
    ],
    progressions: ['Single-Leg Stair Drop Stretch'],
    regressions: ['Seated Towel Calf Stretch']
  },
  {
    id: '12',
    name: 'Pigeon Pose',
    category: 'Cool-Down',
    difficulty: 'Intermediate',
    primaryMuscles: ['Glutes', 'Hip Flexors', 'Hips'],
    equipment: 'Floor',
    description: 'An intermediate deep hip opener targeting external rotators and deep gluteal tissues for advanced posterior hip recovery.',
    instructions: [
      'From a hands-and-knees position, bring right knee forward and place behind right wrist, laying shin across floor',
      'Slide left leg straight backward with top of foot flat on floor and hips square',
      'Lower torso down over front leg, resting forearms or forehead on floor',
      'Breathe deeply into hip capsule for 45-60 seconds, then transition carefully to opposite side'
    ],
    commonMistakes: [
      'Tilting hips heavily to one side instead of staying centered',
      'Twisting front knee joint painfully',
      'Holding breath under high sensation'
    ],
    progressions: ['Elevated King Pigeon Stretch'],
    regressions: ['Supine Figure-Four Glute Stretch']
  },
  {
    id: '13',
    name: 'Seated Single-Leg Hamstring Stretch',
    category: 'Cool-Down',
    difficulty: 'Intermediate',
    primaryMuscles: ['Hamstrings', 'Lower Back'],
    equipment: 'Floor',
    description: 'A unilateral static stretch that lengthens hamstrings while releasing tension along thoracolumbar fascia and lower spine.',
    instructions: [
      'Sit on floor with one leg extended straight and opposite foot tucked against inner thigh',
      'Sit tall, flex extended foot toward ceiling, and hinge forward from hips over straight leg',
      'Reach hands gently toward ankle or toes keeping back flat and neck aligned',
      'Hold position for 45 seconds while taking long slow exhales, then switch legs'
    ],
    commonMistakes: [
      'Rounding upper spine to touch head to knee',
      'Locking out knee forcefully',
      'Allowing extended leg to rotate outward'
    ],
    progressions: ['Seated Double-Leg Forward Fold'],
    regressions: ['Towel-Assisted Supine Hamstring Stretch']
  },
  {
    id: '14',
    name: 'Legs-Up-the-Wall Restorative Pose',
    category: 'Cool-Down',
    difficulty: 'Beginner',
    primaryMuscles: ['Hamstrings', 'Calves', 'Lower Back'],
    equipment: 'Wall',
    description: 'A parasympathetic recovery pose that promotes venous return, reduces lower limb fluid pooling, and lowers heart rate after intense physical effort.',
    instructions: [
      'Sit sideways next to a wall, then swing legs up onto wall as you roll flat onto your back',
      'Position hips close to wall or a few inches away based on hamstring comfort',
      'Rest arms out to sides with palms facing up and close your eyes',
      'Remain in this inverted position for 2 to 5 minutes taking deep, slow diaphragmatic breaths'
    ],
    commonMistakes: [
      'Placing hips too close to wall causing severe lower back flexion',
      'Tensing shoulders or neck during hold',
      'Breathing shallowly through chest rather than belly'
    ],
    progressions: ['Elevated Legs-Up-the-Wall Pose with Hips on Pillow'],
    regressions: ['Chair Legs-Elevated Restorative Pose']
  }
];