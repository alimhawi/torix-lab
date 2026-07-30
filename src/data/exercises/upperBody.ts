import { Exercise } from './types';

export const upperBodyExercises: Exercise[] = [
  {
    id: '1',
    name: 'Push-Up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Chest', 'Triceps', 'Shoulders'],
    equipment: 'None',
    description: 'The foundational upper body pushing exercise. Develops chest, triceps, and shoulder strength with core stability.',
    instructions: [
      'Start in high plank with hands shoulder-width apart',
      'Lower your chest toward the floor with elbows at a 45-degree angle',
      'Keep your core engaged and maintain a rigid body line',
      'Push firmly through palms back to the starting position'
    ],
    commonMistakes: [
      'Letting hips sag or arching the lower back',
      'Flaring elbows out perpendicular to the torso',
      'Incomplete range of motion'
    ],
    progressions: ['Decline Push-Up', 'Diamond Push-Up', 'Archer Push-Up'],
    regressions: ['Incline Push-Up', 'Wall Push-Up']
  },
  {
    id: '2',
    name: 'Incline Push-Up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Chest', 'Shoulders', 'Triceps'],
    equipment: 'Chair',
    description: 'An elevated pushing variation that reduces the percentage of body weight moved while preserving standard plank alignment.',
    instructions: [
      'Place hands slightly wider than shoulder-width on a sturdy chair, bench, or step',
      'Extend legs behind you so your body forms a straight line from head to heels',
      'Lower your chest toward the elevated surface by bending elbows at a 45-degree angle',
      'Press firmly through your palms to return to full arm extension'
    ],
    commonMistakes: [
      'Allowing the lower back to arch excessively',
      'Flaring elbows outward perpendicular to the torso',
      'Bending only at the neck instead of lowering the whole body'
    ],
    progressions: ['Push-Up', 'Decline Push-Up'],
    regressions: ['Wall Push-Up', 'High Incline Push-Up']
  },
  {
    id: '3',
    name: 'Scapular Push-Up',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Back', 'Shoulders'],
    equipment: 'None',
    description: 'A scapular isolation drill that targets the serratus anterior and lower traps to build foundational shoulder health.',
    instructions: [
      'Assume a high plank position with arms straight and wrists directly under shoulders',
      'Keep your elbows fully locked throughout the entire movement',
      'Pinch your shoulder blades together to lower your chest slightly',
      'Push through your hands to protract your shoulder blades and spread your upper back'
    ],
    commonMistakes: [
      'Bending the elbows to lower the body',
      'Sagging at the waist or lumbar spine',
      'Shrugging shoulders up toward the ears'
    ],
    progressions: ['Push-Up', 'Pike Push-Up'],
    regressions: ['Quadruped Scapular Push-Up']
  },
  {
    id: '4',
    name: 'Wall Handstand Hold',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Shoulders', 'Triceps', 'Back'],
    equipment: 'Wall',
    description: 'An isometric overhead pressing drill that develops upper body isometric endurance and overhead shoulder mobility.',
    instructions: [
      'Place hands on the floor a few inches away from a wall',
      'Kick up or walk your feet up until your body is vertically aligned against the wall',
      'Press forcefully into the floor to elevate your shoulders toward your ears',
      'Maintain a hollow body shape with glutes and core tightly engaged',
      'Hold for the target duration, then lower down with control'
    ],
    commonMistakes: [
      'Arching the lower back into a banana shape',
      'Bending the elbows',
      'Looking straight down at the hands instead of keeping a neutral neck'
    ],
    progressions: ['Freestanding Handstand Hold', 'Handstand Push-Up'],
    regressions: ['Pike Hold', 'Elevated Feet Pike Hold']
  },
  {
    id: '5',
    name: 'Prone Y-T-W Raises',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Back', 'Shoulders'],
    equipment: 'None',
    description: 'A bodyweight scapular stability series targeting the lower traps, mid traps, and rear deltoids.',
    instructions: [
      'Lie face down on the floor with legs extended and forehead resting softly down',
      'Form a Y-shape with arms overhead, thumbs pointing up, and raise arms off floor',
      'Move arms out to the sides into a T-shape, thumbs up, and lift again',
      'Bend elbows to form a W-shape, pull shoulder blades down, and lift arms',
      'Perform reps smoothly in each position before switching'
    ],
    commonMistakes: [
      'Hyperextending the neck or lower back',
      'Rushing through reps without achieving a contraction',
      'Using momentum instead of controlled muscle engagement'
    ],
    progressions: ['Reverse Snow Angel', 'Prone Cobra'],
    regressions: ['Seated Y-T-W Drills']
  },
  {
    id: '6',
    name: 'Bench Tricep Dip',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Triceps', 'Shoulders', 'Chest'],
    equipment: 'Chair',
    description: 'An accessible triceps isolation exercise performed using a sturdy household chair or elevated surface.',
    instructions: [
      'Sit on the edge of a sturdy chair or bench and place hands next to your hips, fingers facing forward',
      'Slide your hips off the edge with knees bent at 90 degrees or legs extended',
      'Lower your torso by bending elbows until upper arms are parallel to the floor',
      'Press through your palms to extend elbows back to the start'
    ],
    commonMistakes: [
      'Flaring elbows outward away from the body',
      'Lowering too deep and stressing the anterior shoulder joint',
      'Shrugging shoulders up toward the ears'
    ],
    progressions: ['Diamond Push-Up', 'Straight-Leg Bench Dip'],
    regressions: ['Bent-Knee Bench Dip']
  },
  {
    id: '7',
    name: 'Diamond Push-Up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Triceps', 'Chest', 'Shoulders'],
    equipment: 'None',
    description: 'A narrow-stance push-up variation that dramatically increases load on the triceps and inner chest.',
    instructions: [
      'Assume a push-up position with hands close together under your chest',
      'Form a diamond shape with your thumbs and index fingers touching',
      'Lower your chest toward your hands while keeping elbows close to your sides',
      'Press forcefully back up to full elbow lockout'
    ],
    commonMistakes: [
      'Flaring elbows straight out to the sides',
      'Sagging hips due to insufficient core engagement',
      'Shortening range of motion at the bottom'
    ],
    progressions: ['Decline Diamond Push-Up', 'One-Arm Push-Up'],
    regressions: ['Incline Diamond Push-Up', 'Push-Up']
  },
  {
    id: '8',
    name: 'Pike Push-Up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Shoulders', 'Triceps', 'Back'],
    equipment: 'None',
    description: 'A vertical pushing exercise that shifts body weight onto the deltoids, building power for handstands.',
    instructions: [
      'Start in a push-up position and walk feet forward, lifting hips into an inverted V shape',
      'Look toward your feet to keep a neutral neck position',
      'Lower your head forward down toward the floor, forming a tripod with your hands',
      'Press diagonally back up to return to the starting pike position'
    ],
    commonMistakes: [
      'Lowering head straight between hands instead of forward',
      'Allowing hips to drop during the movement',
      'Bending knees excessively'
    ],
    progressions: ['Feet-Elevated Pike Push-Up', 'Handstand Push-Up'],
    regressions: ['Push-Up', 'Wall Handstand Hold']
  },
  {
    id: '9',
    name: 'Archer Push-Up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Chest', 'Triceps', 'Shoulders'],
    equipment: 'None',
    description: 'An asymmetric pressing pattern that overloads one arm while the other provides lateral support.',
    instructions: [
      'Assume a push-up position with hands placed significantly wider than shoulder-width',
      'Lower your body toward one side, bending that elbow while keeping the opposite arm straight',
      'Press back up through the bent arm to return to the center',
      'Repeat on the opposite arm or alternate sides'
    ],
    commonMistakes: [
      'Bending the assisting straight arm',
      'Rotating the hips and torso sideways',
      'Rushing the tempo and losing control'
    ],
    progressions: ['One-Arm Push-Up'],
    regressions: ['Push-Up', 'Incline Archer Push-Up']
  },
  {
    id: '10',
    name: 'Decline Push-Up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Chest', 'Shoulders', 'Triceps'],
    equipment: 'Chair',
    description: 'An elevated-feet push-up variation that emphasizes the upper chest fibers and anterior deltoids.',
    instructions: [
      'Place your feet on a chair or bench and hands on the floor shoulder-width apart',
      'Maintain a stiff plank line from shoulders to ankles',
      'Lower your chest to the floor with elbows bent at 45 degrees',
      'Press firmly through your palms to return to full lockout'
    ],
    commonMistakes: [
      'Arching or sagging at the lumbar spine',
      'Placing hands too far forward relative to shoulders',
      'Dropping the chin to reach the floor early'
    ],
    progressions: ['Pike Push-Up', 'One-Arm Push-Up'],
    regressions: ['Push-Up', 'Incline Push-Up']
  },
  {
    id: '11',
    name: 'Hindu Push-Up',
    category: 'Upper Body',
    difficulty: 'Intermediate',
    primaryMuscles: ['Shoulders', 'Chest', 'Triceps'],
    equipment: 'None',
    description: 'A dynamic multi-plane pushing pattern that combines shoulder pressing, chest pressing, and spinal mobility.',
    instructions: [
      'Begin in a downward dog position with hips high and feet shoulder-width',
      'Sweep your head down toward the floor by bending elbows',
      'Swoop your chest forward between your hands and push up into cobra pose with hips near floor',
      'Reverse or press back up into downward dog position'
    ],
    commonMistakes: [
      'Rushing through the bottom sweeping transition',
      'Hyperextending the lower back without core control',
      'Incomplete shoulder extension in top position'
    ],
    progressions: ['Dive Bomber Push-Up', 'Pike Push-Up'],
    regressions: ['Push-Up', 'Incline Push-Up']
  },
  {
    id: '12',
    name: 'Handstand Push-Up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Shoulders', 'Triceps', 'Back'],
    equipment: 'Wall',
    description: 'The pinnacle bodyweight vertical pressing movement, lifting total body weight entirely through the shoulders.',
    instructions: [
      'Kick up into a wall handstand with hands shoulder-width apart',
      'Maintain a rigid core and hollow body hold',
      'Lower your head forward toward the floor to form a tripod position',
      'Press aggressively through your palms to return to full handstand extension'
    ],
    commonMistakes: [
      'Arching back heavily into a banana shape',
      'Lowering head straight down between hands',
      'Flaring elbows outward during the press'
    ],
    progressions: ['Freestanding Handstand Push-Up', 'Deficit Handstand Push-Up'],
    regressions: ['Wall Handstand Hold', 'Pike Push-Up']
  },
  {
    id: '13',
    name: 'One-Arm Push-Up',
    category: 'Upper Body',
    difficulty: 'Advanced',
    primaryMuscles: ['Chest', 'Triceps', 'Shoulders'],
    equipment: 'None',
    description: 'An extreme unilateral pushing exercise demanding tremendous chest strength and anti-rotational core stability.',
    instructions: [
      'Set up in push-up position with feet wide apart for balance',
      'Place working hand under center of chest and place non-working hand behind lower back',
      'Lower chest to floor while maintaining hips parallel to ground',
      'Press back up forcefully without twisting shoulders or hips'
    ],
    commonMistakes: [
      'Excessive twisting of hips and torso',
      'Spreading weight unevenly',
      'Incomplete depth at bottom'
    ],
    progressions: ['Single-Leg One-Arm Push-Up'],
    regressions: ['Archer Push-Up', 'Incline Archer Push-Up']
  },
  {
    id: '14',
    name: 'Superman',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Back', 'Glutes', 'Shoulders'],
    equipment: 'None',
    description: 'A floor-based posterior chain activation drill that targets the erector spinae, upper back, and glutes.',
    instructions: [
      'Lie face down on the floor with arms extended straight overhead and legs straight',
      'Engage your glutes and lower back to simultaneously lift your chest, arms, and legs a few inches off the ground',
      'Pause at the top of the lift for 1-2 seconds while squeezing your upper back muscles',
      'Slowly lower back down to the starting position under full control'
    ],
    commonMistakes: [
      'Hyperextending the neck by looking straight up',
      'Jerking forcefully instead of lifting with controlled muscular contraction',
      'Holding breath during the hold phase'
    ],
    progressions: ['Reverse Snow Angel', 'Prone Cobra'],
    regressions: ['Alternating Superman']
  },
  {
    id: '15',
    name: 'Reverse Snow Angel',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Back', 'Shoulders'],
    equipment: 'None',
    description: 'A continuous prone scapular mobilization drill that builds upper back endurance and scapular tracking without equipment.',
    instructions: [
      'Lie face down with forehead resting on the floor and arms extended down by your sides, palms facing down',
      'Lift your chest slightly and elevate your hands an inch or two off the floor',
      'Slowly sweep your arms in a wide arc outward and up over your head while keeping them straight',
      'Reverse the smooth arcing movement to bring arms back down to your sides'
    ],
    commonMistakes: [
      'Letting hands drag along the floor during the arc',
      'Over-arching the lumbar spine',
      'Bending the elbows to compensate for shoulder mobility limitations'
    ],
    progressions: ['Prone Cobra'],
    regressions: ['Prone Y-T-W Raises', 'Superman']
  },
  {
    id: '16',
    name: 'Prone Cobra',
    category: 'Upper Body',
    difficulty: 'Beginner',
    primaryMuscles: ['Back', 'Shoulders'],
    equipment: 'None',
    description: 'An essential postural isometric drill that strengthens the rhomboids, middle/lower trapezius, and shoulder external rotators.',
    instructions: [
      'Lie face down with legs extended and arms down by your sides, palms down',
      'Lifting your chest off the floor, externally rotate your shoulders so your thumbs point up toward the ceiling',
      'Squeeze your shoulder blades down and together while keeping your chin tucked',
      'Hold the top position for the target duration while breathing continuously'
    ],
    commonMistakes: [
      'Leading with the head and craning the neck backward',
      'Flaring thumbs downward instead of pointing toward the ceiling',
      'Shrugging shoulders up toward the ears'
    ],
    progressions: ['Reverse Snow Angel'],
    regressions: ['Superman', 'Prone T-Raises']
  }
];