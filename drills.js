(function () {
  const SOURCE = "Coach Library";

  function drill(number, category, name, players, time, level, skills, purpose, setup, run, coaching, evaluate) {
    return {
      id: `drill_${number}`,
      number,
      category,
      name,
      source: SOURCE,
      players,
      time,
      level,
      skills,
      purpose,
      setup,
      run,
      coaching,
      evaluate,
      custom: false
    };
  }

  window.DRILL_DATABASE = [
    drill(
      "01",
      "Defense",
      "Reading the Hitter",
      "6-12",
      15,
      "Intermediate",
      "Blocking, Reading, Defense",
      "Train blockers and defenders to read the attacker’s approach, shoulders, and arm swing instead of only tracking the ball.",
      "Place a coach or hitter at the net. Blockers start at the net and back-row defenders begin in base defense.",
      [
        "Coach or hitter attacks to different zones.",
        "Blockers call the hitting lane and press over the net.",
        "Defenders read around the block and dig to target.",
        "Progress from controlled attacks to live swings."
      ],
      "Teach the eye sequence: ball, setter, hitter approach, hitting arm. Reward correct reads even when the dig is not perfect.",
      "Footwork, timing, block position, reading cues, defensive movement, and hand penetration."
    ),

    drill(
      "02",
      "Serve Receive",
      "Serve & Pass Wash",
      "8-16",
      20,
      "All levels",
      "Serving, Passing, Communication",
      "Create game-like serve receive reps under scoring pressure.",
      "Servers line up on one side. Passers set up in serve receive with a setter or target at the net.",
      [
        "Server delivers a tough in-bounds serve.",
        "Passers communicate and pass to target.",
        "Score pass quality after each serve.",
        "Rotate servers and passers after each round."
      ],
      "Serve aggressively while keeping the ball in. Passers should hold posture, angle the platform, and communicate seams early.",
      "Passing accuracy, serve pressure, seam communication, and consistency."
    ),

    drill(
      "03",
      "Competition",
      "Queen / King of the Court",
      "9-18",
      20,
      "All levels",
      "Competing, Communication, All-Around Play",
      "Build competitive pressure with fast reps and constantly changing teammates.",
      "Use teams of two or three. One side is the queen/king side and challengers rotate in from the opposite side.",
      [
        "Challengers initiate with a serve, toss, or free ball.",
        "Winner moves to or stays on the queen/king side.",
        "Losing team rotates off.",
        "Play for time or to a target score."
      ],
      "Keep the pace high. This drill is great for evaluating competitiveness, communication, and adaptability.",
      "Effort, communication, ball control, ability to win points, and teamwork with changing groups."
    ),

    drill(
      "04",
      "Ball Control",
      "Pepper Progression",
      "Pairs",
      10,
      "Beginner",
      "Passing, Setting, Controlled Attacking",
      "Warm up while building basic ball-control rhythm.",
      "Pair players 10-15 feet apart with one ball per pair.",
      [
        "Start with pass-set-catch or pass-set-pass control.",
        "Progress to dig-set-roll shot.",
        "Add one-touch pepper for advanced groups.",
        "Add movement before each contact."
      ],
      "Players should call the ball, face the target, and prioritize control over power.",
      "Platform control, hand setting, communication, and ability to keep the ball alive."
    ),

    drill(
      "05",
      "Setting",
      "Setter Accuracy Test",
      "Individual",
      10,
      "Intermediate",
      "Setting, Footwork, Conditioning",
      "Evaluate setter accuracy and consistency while moving under fatigue.",
      "Place setter in the target area with a feeder and a setting target.",
      [
        "Setter begins low, seated, or in an athletic start.",
        "Setter moves into position and delivers to target.",
        "Repeat for a timed round or set number of reps.",
        "Track accurate sets."
      ],
      "Focus on clean hands, balanced feet, square body position, and a repeatable release point.",
      "Accuracy, footwork, conditioning, balance, and consistency."
    ),

    drill(
      "06",
      "Serving",
      "Serving Targets / Zones",
      "Any",
      15,
      "All levels",
      "Serving, Accuracy, Strategy",
      "Improve serving accuracy to specific zones and seams.",
      "Place targets in deep zones and short seams. Servers begin behind the end line.",
      [
        "Players serve a set number of balls.",
        "Award points for hitting called zones.",
        "Track missed serves separately.",
        "Add pressure by requiring makes in a row."
      ],
      "Build a consistent toss and routine. Players should serve aggressively without giving away easy errors.",
      "Serve accuracy, consistency, ability to hit zones, and serving under pressure."
    ),

    drill(
      "07",
      "Serve Receive",
      "Triangle Serve Receive",
      "3-6",
      15,
      "Intermediate",
      "Passing, Seams, Communication",
      "Train three-player serve receive communication and seam responsibility.",
      "Three passers form a receive triangle. Servers are across the net with a target at the net.",
      [
        "Serve into seams between passers.",
        "Passers call early and pass to target.",
        "Rotate passing positions after each round.",
        "Increase tempo with multiple servers when ready."
      ],
      "The earliest loud call wins. Define seam rules before the drill starts.",
      "First step, communication, seam ownership, and pass quality."
    ),

    drill(
      "08",
      "Attacking",
      "Approach & Swing Lines",
      "Any",
      15,
      "All levels",
      "Hitting, Footwork, Timing",
      "Groove approach footwork, timing, and arm swing mechanics.",
      "Hitters line up at the pin. Coach or setter delivers balls.",
      [
        "Hitters approach and swing to a called zone.",
        "Alternate line and cross-court swings.",
        "Progress from tossed balls to live sets.",
        "Add targets or a blocker as players improve."
      ],
      "Approach should be late and fast. Emphasize high contact and full arm swing.",
      "Footwork, timing, contact point, shot control, and swing mechanics."
    ),

    drill(
      "09",
      "Team Systems",
      "Coverage & Transition Wash",
      "12+",
      20,
      "Advanced",
      "Coverage, Transition, Team Defense",
      "Train players to cover hitters and transition quickly from defense to offense.",
      "Run full 6v6 with coach-entered balls.",
      [
        "Coach enters a ball to start the rally.",
        "Team attacks and immediately covers the hitter.",
        "Continue the rally through transition situations.",
        "Use wash scoring to reward consecutive execution."
      ],
      "Players must collapse into coverage, then release quickly into transition.",
      "Coverage position, transition speed, team organization, and rally consistency."
    ),

    drill(
      "10",
      "Defense",
      "Defense vs. Live Hitting",
      "6-12",
      15,
      "Intermediate",
      "Digging, Defense, Reading",
      "Give defenders repeated reps against live or controlled attacks.",
      "Place hitters or coaches at the net. Defenders start in base positions with a setter target.",
      [
        "Attack balls to assigned defensive zones.",
        "Defenders dig to target.",
        "Rotate defenders through each position.",
        "Mix in tips and roll shots."
      ],
      "Stop feet before contact, stay low, angle the platform, and pursue every ball.",
      "Defensive reads, platform control, pursuit, and dig-to-target accuracy."
    ),

    drill(
      "11",
      "Team Systems",
      "Free Ball to Attack",
      "6-12",
      15,
      "All levels",
      "Passing, Setting, Hitting, Transition",
      "Teach the team to recognize an easy free ball and turn it into an organized attack.",
      "Coach stands across the net with balls. Receiving team sets up in base or free-ball formation.",
      [
        "Coach sends a free ball over the net.",
        "Players call free ball early and pass to the setter area.",
        "Setter runs the offense and hitters take full approaches.",
        "Score only clean conversions or kills."
      ],
      "Free balls should become scoring chances. Demand early communication, clean first contact, and aggressive transition footwork.",
      "Free-ball communication, pass quality, setter decision, hitter readiness, and attack conversion."
    ),

    drill(
      "12",
      "Ball Control",
      "Butterfly Drill",
      "6-12",
      15,
      "Beginner",
      "Serving, Passing, Setting, Movement",
      "Create a continuous serve-pass-set rotation that gives every player repeated contacts.",
      "Set up serving, passing, setting, and target/shag positions in a rotation loop.",
      [
        "Player serves and follows the serve to the passing line.",
        "Passer passes to the setter or target.",
        "Setter sets to target, then rotates into shag or serve position.",
        "Keep the pattern moving with minimal stopping."
      ],
      "Keep the pace quick but controlled. Every contact should have a target and purpose.",
      "Serve consistency, passing platform, movement, setting touch, and ability to rotate roles."
    ),

    drill(
      "13",
      "Defense",
      "Middle Blocker Footwork",
      "Any",
      12,
      "Intermediate",
      "Blocking, Footwork, Timing",
      "Train middle blockers to move laterally, close space, and press over the net.",
      "Middle blockers start at the net. Coach or hitter is positioned at either pin.",
      [
        "Middle moves from base to the called side.",
        "Use shuffle or crossover footwork depending on distance.",
        "Blocker jumps and presses over the net.",
        "Alternate left and right sides."
      ],
      "Square the hips before jumping. Hands should press over the net, not just reach straight up.",
      "Footwork, balance, timing, hand penetration, and ability to close to the pin."
    ),

    drill(
      "14",
      "Setting",
      "Setter Transition",
      "2-6",
      12,
      "Intermediate",
      "Setting, Transition, Footwork",
      "Train the setter to release from base and beat the ball to the target area.",
      "Setter begins in defensive base. Coach feeds pass-quality balls to different locations.",
      [
        "Coach feeds a ball that forces setter movement.",
        "Setter releases to the net or target zone.",
        "Setter delivers a hittable ball to the pin or middle.",
        "Vary the feed location and set option."
      ],
      "Setter must move early, arrive balanced, and square to the target before release.",
      "Release speed, footwork, balance, set location, and decision-making."
    ),

    drill(
      "15",
      "Setting",
      "Out-of-System Setting",
      "3-6",
      12,
      "Advanced",
      "Setting, Ball Control, Out-of-System Play",
      "Practice delivering hittable balls when the first contact pulls the team out of system.",
      "Use a passer, setter, and hitter. Coach sends difficult balls to force off-target passes.",
      [
        "Coach sends a tough ball to the passer.",
        "Setter chases the ball and delivers a high, hittable set.",
        "Hitter adjusts and attacks safely.",
        "Rotate passers, setters, and hitters."
      ],
      "When out of system, high to the pin is usually the safest answer. A controlled bump set is acceptable.",
      "Composure, chase footwork, set height, hitter adjustment, and keeping the rally playable."
    ),

    drill(
      "16",
      "Defense",
      "Pursuit / Emergency Defense",
      "4-12",
      12,
      "Intermediate",
      "Digging, Pursuit, Effort",
      "Build hustle, emergency movement, and the habit of keeping difficult balls alive.",
      "Coach has balls at the net. Defenders begin in the back court.",
      [
        "Coach tips, rolls, or drives balls into open space.",
        "Defenders sprint, sprawl, or run through the ball to keep it alive.",
        "Add a setter target so the save must be playable.",
        "Score effort and successful saves."
      ],
      "Players must read early and go now. Reward effort, body control, and balls kept playable.",
      "Pursuit speed, emergency technique, effort, court awareness, and playable saves."
    ),

    drill(
      "17",
      "Team Systems",
      "Serve Receive to Attack",
      "12",
      20,
      "Advanced",
      "Passing, Setting, Hitting, Sideout",
      "Train first-ball offense from serve receive through a full attack.",
      "Run 6v6. One side serves and the receiving side runs its serve-receive pattern.",
      [
        "Server initiates with a tough serve.",
        "Receiving team passes, sets, and attacks.",
        "Play the rally out after the first attack.",
        "Rotate through all six rotations."
      ],
      "A clean pass creates offensive options. Track sideout success by rotation.",
      "Pass quality, first-ball attack, rotation alignment, communication, and sideout efficiency."
    ),

    drill(
      "18",
      "Attacking",
      "Down-Ball Hitting Repetition",
      "Any",
      12,
      "Beginner",
      "Hitting, Contact, Shot Control",
      "Build clean swing mechanics through high-repetition controlled attacks.",
      "Hitters line up at the pin or middle. Coach tosses consistent balls.",
      [
        "Hitter swings at a controlled toss or set.",
        "Aim to specific target zones.",
        "Rotate quickly for high reps.",
        "Progress from standing swings to short approaches."
      ],
      "One cue at a time: high elbow, contact in front, fast arm, controlled finish.",
      "Contact point, arm swing, shot accuracy, consistency, and ability to adjust."
    ),

    drill(
      "19",
      "Defense",
      "Two-Person Defense",
      "Pairs",
      12,
      "Intermediate",
      "Defense, Reading, Communication",
      "Give two defenders repeated read-and-dig reps while owning the seam between them.",
      "Two defenders start in the back court. Coach attacks from across the net or from a box.",
      [
        "Coach attacks at or between the two defenders.",
        "Defenders call the ball and dig to target.",
        "Reset to base after each contact.",
        "Mix hard-driven balls with tips."
      ],
      "Stop before contact and angle the platform to target. Seam communication must be early.",
      "Reading, platform control, recovery, seam ownership, and communication."
    ),

    drill(
      "20",
      "Competition",
      "Serving Under Pressure",
      "Any",
      10,
      "All levels",
      "Serving, Mental Toughness, Pressure",
      "Train servers to keep their routine and make serves when pressure increases.",
      "Servers line up behind the end line. Add a visible target or team goal.",
      [
        "Players must make a set number of serves in a row.",
        "A miss resets the count.",
        "Progress from in-bounds serves to called zones.",
        "Add conditioning before the serve for fatigue pressure."
      ],
      "The routine matters. Breathe, reset, repeat the same toss, and do not rush after a miss.",
      "Serve consistency, composure, target accuracy, and routine under pressure."
    ),

    drill(
      "21",
      "Attacking",
      "Tip & Roll Shot Control",
      "Any",
      12,
      "Intermediate",
      "Hitting, Shot Control, Decision-Making",
      "Teach hitters to use controlled off-speed attacks instead of only swinging hard.",
      "Hitters line up at the pin with a setter or coach. Add targets, defenders, or blockers when ready.",
      [
        "Hitter takes a full approach and tips to a called open zone.",
        "Progress to roll shots and high-control off-speed attacks.",
        "Mix full swings with off-speed shots.",
        "Call target zones before the set."
      ],
      "Off-speed shots should look like a real attack until the last moment. Same approach, different finish.",
      "Shot placement, disguise, hitter control, and decision-making."
    ),

    drill(
      "22",
      "Defense",
      "Blocking Footwork & Hand Penetration",
      "Any",
      12,
      "Beginner",
      "Blocking, Footwork, Net Play",
      "Build clean blocking movement, timing, and strong hands over the net.",
      "Blockers start at the net. Coach or hitter stands across the net with controlled attacks.",
      [
        "Blocker moves laterally to the attack location.",
        "Player loads, jumps, and presses hands over the net.",
        "Repeat on both sides of the court.",
        "Add a live ball once footwork is clean."
      ],
      "Hands should press over, not just reach up. Land balanced and avoid drifting into the net.",
      "Footwork, timing, balance, hand position, and net awareness."
    ),

    drill(
      "23",
      "Competition",
      "10-Ball Sideout Game",
      "12",
      20,
      "Advanced",
      "Sideout, Team Play, Serve Receive",
      "Train the team to side out consistently under repeated first-ball pressure.",
      "Run 6v6. One team serves while the receiving team tries to side out.",
      [
        "Serve one ball to the receiving team.",
        "Receiving team must pass, set, and attack to win the point.",
        "Run 10 balls per rotation.",
        "Track sideout success rate before rotating."
      ],
      "Treat every first ball like it matters. Clean pass, confident set, aggressive but smart swing.",
      "Sideout percentage, serve-receive quality, attacking choices, and rotation strength."
    ),

    drill(
      "24",
      "Ball Control",
      "Continuous Cross-Court Pepper",
      "Pairs / Groups",
      10,
      "Intermediate",
      "Passing, Digging, Movement",
      "Build directional ball control while players move through the contact.",
      "Set players diagonally across the court with one ball moving cross-court.",
      [
        "Player sends the ball cross-court to the opposite line or partner.",
        "Receiver controls the ball back across.",
        "Players follow or rotate after contact.",
        "Add a third contact for more advanced groups."
      ],
      "Players should move their feet first and angle the platform to the target.",
      "Movement, platform angle, control, and consistency across distance."
    ),

    drill(
      "25",
      "Serving",
      "Serving Ladder",
      "Any",
      12,
      "All levels",
      "Serving, Consistency, Mental Toughness",
      "Build serving consistency through a simple pressure ladder.",
      "Servers line up behind the end line with a visible scoring system.",
      [
        "Each successful serve moves the player up one rung.",
        "A missed serve drops the player back down.",
        "First player to reach the target rung wins.",
        "Add zone bonuses for more advanced groups."
      ],
      "Players need the same routine every serve. Do not rush after makes or panic after misses.",
      "Consistency, routine, composure, and ability to serve to zones."
    ),

    drill(
      "26",
      "Serving",
      "Short-Serve Targets",
      "Any",
      10,
      "Intermediate",
      "Serving, Placement, Strategy",
      "Train players to use short serves that stress seams and front-row decision-making.",
      "Place targets just behind the attack line in front-court zones.",
      [
        "Servers aim for short target zones.",
        "Award points for accurate short serves.",
        "Mix short and deep serves so the pattern is not predictable.",
        "Add a live passer to read and handle the serve."
      ],
      "Disguise the short serve with the same routine as a deep serve. Control depth with contact and follow-through.",
      "Depth control, serve disguise, accuracy, and strategic serving."
    ),

    drill(
      "27",
      "Serving",
      "Jump Serve Progression",
      "Any",
      15,
      "Advanced",
      "Jump Serving, Toss, Contact",
      "Build the jump serve step by step from toss control to full-speed serving.",
      "Servers work behind the end line with space for approach footwork.",
      [
        "Start with consistent toss reps.",
        "Add approach footwork without contact.",
        "Combine toss, approach, and controlled swing.",
        "Progress to full-speed jump serves into the court."
      ],
      "The toss controls the serve. Keep contact high and in front, and land safely inside the court.",
      "Toss consistency, approach timing, contact quality, and serve control."
    ),

    drill(
      "28",
      "Serving",
      "Serve & Sprint Conditioning",
      "Any",
      12,
      "All levels",
      "Serving, Conditioning, Pressure",
      "Teach players to serve accurately while tired.",
      "Servers start at the end line with cones set for a sprint lane.",
      [
        "Player serves one ball.",
        "Immediately sprint to the cone and back.",
        "Serve again right away.",
        "Track makes and misses through the fatigue set."
      ],
      "Players must control breathing before each serve and keep mechanics clean while tired.",
      "Serving under fatigue, composure, conditioning, and serve accuracy."
    ),

    drill(
      "29",
      "Serve Receive",
      "Target Passing to Number",
      "3-9",
      12,
      "Intermediate",
      "Passing, Accuracy, Adjustment",
      "Improve passing accuracy by forcing passers to adjust to a called target.",
      "Set numbered target zones near the setter area. Passers begin in serve receive.",
      [
        "Coach or server initiates the ball.",
        "Coach calls the target number before or during the serve.",
        "Passer must angle the platform to that target.",
        "Score pass quality after each rep."
      ],
      "Read the serve early, move feet first, then finish the platform to the called target.",
      "Passing accuracy, adjustment, platform control, and focus."
    ),

    drill(
      "30",
      "Serve Receive",
      "Serve Receive Plus-Minus",
      "6+",
      15,
      "Intermediate",
      "Passing, Team Serve Receive, Communication",
      "Use a simple plus-minus score to show serve receive quality over time.",
      "Use a full serve-receive formation with servers across the net and a setter target.",
      [
        "Server serves to the receiving team.",
        "Score each pass as positive, neutral, or negative.",
        "Team must reach a positive score goal before rotating.",
        "Run through multiple rotations."
      ],
      "Eliminate negative passes first. Passers need early seam calls and disciplined platforms.",
      "Pass quality, seam communication, rotation consistency, and serve-receive confidence."
    ),

    drill(
      "31",
      "Serve Receive",
      "Two-Passer Serve Receive",
      "2-4",
      12,
      "Advanced",
      "Passing, Movement, Seams",
      "Challenge two passers to cover more court and own seams under pressure.",
      "Two passers split the court. Servers attack seams, corners, deep zones, and short space.",
      [
        "Servers serve to the full court.",
        "Passers call early and cover their half.",
        "Pass to target and reset quickly.",
        "Add short/deep variation to stretch movement."
      ],
      "Passers need a big first step, clear seam rules, and constant talk.",
      "Court coverage, range, seam communication, and passing accuracy."
    ),

    drill(
      "32",
      "Serve Receive",
      "Overpass Read & Attack",
      "6+",
      12,
      "Intermediate",
      "Passing, Overpass Reads, Attacking",
      "Teach the serving team to recognize overpasses and the receiving team to avoid them.",
      "Use 6v6 or front-row players ready to attack any ball that crosses the net.",
      [
        "Serve into the receiving team.",
        "If the ball crosses the net, front-row players attack it immediately.",
        "Receiving team works to keep the ball playable on their side.",
        "Score bonus points for punishing overpasses."
      ],
      "Front-row players must expect overpasses. Passers should stay low and control the platform angle.",
      "Overpass recognition, disciplined passing, quick attack reaction, and net awareness."
    ),

    drill(
      "33",
      "Setting",
      "Hand-Setting Footwork",
      "Any",
      10,
      "Beginner",
      "Setting, Footwork, Balance",
      "Build the setter’s movement pattern to arrive balanced and square to the target.",
      "Setter works near the net with a feeder tossing to different spots.",
      [
        "Feeder tosses to varied locations.",
        "Setter moves feet to get under the ball.",
        "Setter finishes square and delivers to target.",
        "Reset to base after each set."
      ],
      "Beat the ball to the spot. Feet create the set before the hands do.",
      "Footwork, balance, square finish, and set location."
    ),

    drill(
      "34",
      "Setting",
      "Back-Set Accuracy",
      "Any",
      10,
      "Intermediate",
      "Setting, Back Sets, Deception",
      "Develop a consistent back set while keeping the same body language as a front set.",
      "Setter works at the net with a feeder and a right-side target.",
      [
        "Feeder delivers a pass to the setter.",
        "Setter back-sets to a target area.",
        "Score accuracy.",
        "Alternate front and back sets on command."
      ],
      "Avoid tipping the decision early. Stay neutral and release cleanly.",
      "Back-set accuracy, consistency, deception, and body control."
    ),

    drill(
      "35",
      "Setting",
      "Tempo Setting",
      "3-6",
      15,
      "Advanced",
      "Setting, Tempo, Offense",
      "Train the setter to deliver different tempos to different hitters.",
      "Setter works with middle and pin hitters. Feeder provides game-like passes.",
      [
        "Coach calls the tempo or hitter option.",
        "Setter delivers the correct speed and location.",
        "Hitter attacks the set.",
        "Mix calls randomly to simulate offense."
      ],
      "Set speed must match the hitter’s approach and the team’s offense.",
      "Tempo control, set location, hitter connection, and decision-making."
    ),

    drill(
      "36",
      "Setting",
      "Setter Dump Decision",
      "3-6",
      10,
      "Intermediate",
      "Setting, Attacking, Decision-Making",
      "Teach setters to read the block and attack the second ball when available.",
      "Setter works at the net with blockers or defenders across and hitters available.",
      [
        "Feeder passes to the setter.",
        "Setter reads the block and chooses dump or set.",
        "Reward the correct decision.",
        "Vary pass quality and blocker position."
      ],
      "Setter should keep eyes up and attack open space without showing the dump too early.",
      "Decision-making, deception, block reading, and second-ball attack confidence."
    ),

    drill(
      "37",
      "Setting",
      "Jump Setting Reps",
      "Any",
      10,
      "Advanced",
      "Setting, Jump Setting, Tempo",
      "Build jump-setting balance, speed, and offensive threat.",
      "Setter works at the net with a consistent feeder.",
      [
        "Setter receives a controlled pass.",
        "Setter jump-sets to a called target.",
        "Alternate front and back jump sets.",
        "Add a dump option when ready."
      ],
      "Jump straight up, set at the peak, and stay balanced in the air.",
      "Jump-set accuracy, balance, tempo, and deception."
    ),

    drill(
      "38",
      "Attacking",
      "Cross-Court vs. Line Hitting",
      "Any",
      12,
      "Intermediate",
      "Hitting, Shot Control, Accuracy",
      "Teach hitters to hit both line and angle from the same approach.",
      "Hitters work at the pin with a setter or coach and targets in line and cross-court zones.",
      [
        "Coach calls line or angle before the set.",
        "Hitter uses a full approach and attacks the called shot.",
        "Score for hitting the correct zone.",
        "Add a blocker once control improves."
      ],
      "The approach should look the same. The finish and shoulder turn direct the ball.",
      "Shot accuracy, approach consistency, shoulder control, and deception."
    ),

    drill(
      "39",
      "Attacking",
      "Hitting Off the Block",
      "3-6",
      12,
      "Advanced",
      "Hitting, Tooling, Shot Selection",
      "Teach hitters how to use the block to score points.",
      "Hitter works at the pin with a setter and a live blocker or held target across the net.",
      [
        "Hitter attacks high off the outside hand.",
        "Aim for controlled deflections out of bounds.",
        "Mix line, angle, and tool attempts.",
        "Progress to a live block read."
      ],
      "This is a smart shot, not just power. Hit high, see the block, and use the outside hand.",
      "Block awareness, shot selection, accuracy, and ability to score against a block."
    ),

    drill(
      "40",
      "Attacking",
      "Back-Row Attack",
      "3-6",
      12,
      "Advanced",
      "Back-Row Attack, Timing, Offense",
      "Develop back-row attacking as an offensive option.",
      "Back-row hitter, setter, and feeder work with a visible attack line.",
      [
        "Setter delivers a back-row set.",
        "Hitter takes off from behind the attack line.",
        "Hitter contacts high and attacks with control.",
        "Add front-row options to simulate a full offense."
      ],
      "Hitter must take off legally from behind the line and attack with timing, not panic.",
      "Approach discipline, takeoff location, contact point, and back-row attacking power."
    ),

    drill(
      "41",
      "Attacking",
      "Hitting Lines vs. Live Block",
      "6+",
      15,
      "Advanced",
      "Hitting, Reading, Block Awareness",
      "Give hitters repeated attacking reps against a live moving block.",
      "Hitters line up at the pin. Setter delivers balls with one or two blockers across the net.",
      [
        "Setter sets the pin.",
        "Hitter reads the block in the air.",
        "Blockers try to seal or channel the hit.",
        "Track kills, errors, smart shots, and blocked balls."
      ],
      "Hitters should see the block and choose a shot, not swing blindly.",
      "Block reading, shot selection, attack efficiency, and error control."
    ),

    drill(
      "42",
      "Attacking",
      "Quick Attack Timing",
      "2-6",
      12,
      "Advanced",
      "Middle Attack, Timing, Setter Connection",
      "Build timing between the setter and middle hitter on quick attacks.",
      "Setter and middle work with a feeder providing passes.",
      [
        "Middle begins approach as the pass travels to setter.",
        "Setter delivers a fast set to the hitting hand.",
        "Middle contacts at peak jump.",
        "Repeat until timing becomes consistent."
      ],
      "The hitter and setter must agree on tempo. Quick attacks require early approach and clean delivery.",
      "Timing, contact point, setter-hitter connection, and quick-arm execution."
    ),

    drill(
      "43",
      "Defense",
      "Perimeter Defense Base & Read",
      "6+",
      15,
      "Intermediate",
      "Defense, Reading, Positioning",
      "Train defenders to start in base, read the set, and move to defensive responsibility.",
      "Set up full back-row defense with blockers and coach attacks.",
      [
        "Defenders begin in base.",
        "On the set, defenders move to read positions.",
        "Coach attacks line, angle, or tip.",
        "Dig to target and reset."
      ],
      "Base first, then read. Defenders should stop before contact and play around the block.",
      "Positioning, reading, footwork, and dig-to-target control."
    ),

    drill(
      "44",
      "Defense",
      "Rotation Defense",
      "6+",
      15,
      "Advanced",
      "Defense, Team Movement, Coverage",
      "Teach team defensive rotation and responsibility against varied attacks.",
      "Use full defense against coach or live attacks.",
      [
        "Defense rotates based on the set location.",
        "Off-blocker covers short space.",
        "Back-row defenders adjust deep and seam coverage.",
        "Dig and transition after each contact."
      ],
      "Everyone moves on the set. Communication tells the team what the block is taking away.",
      "Team movement, coverage responsibility, communication, and defensive reads."
    ),

    drill(
      "45",
      "Defense",
      "Digging Off-Speed & Tips",
      "4-8",
      12,
      "Intermediate",
      "Digging, Reading, Short Defense",
      "Improve defenders’ ability to read tips and off-speed shots without cheating too early.",
      "Defenders start in base while coach mixes hard swings, tips, and roll shots.",
      [
        "Coach disguises off-speed balls among harder attacks.",
        "Defenders read and release forward.",
        "Play the ball to target.",
        "Mix hard swings so defenders stay honest."
      ],
      "Stay home until the read is clear, then explode forward with control.",
      "Off-speed reading, forward movement, touch control, and discipline."
    ),

    drill(
      "46",
      "Defense",
      "Block-Touch Transition",
      "4-8",
      12,
      "Advanced",
      "Blocking, Transition, Attacking",
      "Connect blocking action to the next offensive opportunity.",
      "Blockers work at the net with a setter and transition hitter option.",
      [
        "Blocker presses to block or touch the ball.",
        "Player lands balanced and clears the net.",
        "Setter delivers a transition set.",
        "Blocker transitions into an attack."
      ],
      "Land under control and turn immediately into the next play.",
      "Block action, landing balance, transition footwork, and attack readiness."
    ),

    drill(
      "47",
      "Defense",
      "Double-Block Closing",
      "4-8",
      12,
      "Advanced",
      "Blocking, Teamwork, Net Defense",
      "Train blockers to close a clean double block with no seam.",
      "Outside and middle blockers work together against coach attacks from the pin.",
      [
        "Outside sets the block position.",
        "Middle closes to the outside blocker.",
        "Both blockers press hands over the net.",
        "Coach attacks the seam to test the close."
      ],
      "Outside owns the line. Middle closes tight with hands pressing over.",
      "Closing footwork, timing, hand position, and blocker teamwork."
    ),

    drill(
      "48",
      "Defense",
      "Libero Pursuit & Platform",
      "1-4",
      12,
      "Intermediate",
      "Libero, Pursuit, Platform Control",
      "Give liberos position-specific reps for range, platform angle, and leadership.",
      "Libero starts in the back court. Coach drives and tips balls to different spaces.",
      [
        "Coach sends hard balls and tips to all areas.",
        "Libero pursues and digs to target.",
        "Add emergency moves when needed.",
        "Finish with playable dig-to-set reps."
      ],
      "Read early, sprint to the spot, and angle the platform to target.",
      "Range, pursuit, platform quality, dig accuracy, and leadership."
    ),

    drill(
      "49",
      "Ball Control",
      "Triangle Pepper",
      "3",
      10,
      "Intermediate",
      "Passing, Setting, Hitting, Communication",
      "Build three-player ball control in a continuous triangle pattern.",
      "Three players form a triangle with one ball.",
      [
        "Player A sends a controlled attack to Player B.",
        "Player B digs to Player C.",
        "Player C sets back to Player A.",
        "Rotate roles or direction after a set time."
      ],
      "Control over power. Players should call names and face targets.",
      "Ball control, communication, all three contacts, and consistency."
    ),

    drill(
      "50",
      "Ball Control",
      "Wall Passing & Setting",
      "Individual",
      10,
      "Beginner",
      "Passing, Setting, Individual Reps",
      "Give players solo reps to improve platform and hand-setting mechanics.",
      "Player works against a wall with a target line or marked zone.",
      [
        "Pass continuously against the wall.",
        "Switch to hand-setting against the wall.",
        "Alternate pass and set.",
        "Count consecutive controlled contacts."
      ],
      "Quiet platform, clean hand shape, and consistent target height matter more than speed.",
      "Platform consistency, setting form, control, and focus."
    ),

    drill(
      "51",
      "Ball Control",
      "Four-Corner Ball Control",
      "4-8",
      12,
      "Intermediate",
      "Passing, Movement, Directional Control",
      "Train directional passing while players rotate through court positions.",
      "Place players in four corners with one ball and a feeder if needed.",
      [
        "Ball travels from corner to corner.",
        "Player passes or sets to the next corner.",
        "Follow the ball after contact.",
        "Reverse direction on coach command."
      ],
      "Feet move before the platform. Angle the ball to the next target.",
      "Directional control, movement, platform angles, and focus."
    ),

    drill(
      "52",
      "Ball Control",
      "Mini-Court Ball Control Game",
      "4-8",
      15,
      "Intermediate",
      "Ball Control, Placement, Teamwork",
      "Use small-court play to reward control, three contacts, and placement.",
      "Create a reduced court for 2v2 or 3v3.",
      [
        "Teams must use controlled contacts.",
        "Encourage three contacts before sending the ball over.",
        "Play rallies within the smaller court.",
        "Gradually allow stronger attacks as control improves."
      ],
      "Control wins small-court games. Players should place the ball and work angles.",
      "Ball control, three-contact discipline, placement, and teamwork."
    ),

    drill(
      "53",
      "Team Systems",
      "6v6 Wash Scrimmage",
      "12",
      25,
      "Advanced",
      "Team Systems, Consistency, Transition",
      "Build consistency by requiring teams to win multiple rallies to score.",
      "Run full 6v6 with coach-entered balls.",
      [
        "Coach enters the first ball.",
        "Teams play it out.",
        "Coach immediately enters another ball.",
        "Only winning the required sequence earns a point."
      ],
      "This rewards sustained execution, not one lucky swing.",
      "Consistency, transition, team organization, and composure."
    ),

    drill(
      "54",
      "Team Systems",
      "First-Ball Side-Out Race",
      "12",
      20,
      "Advanced",
      "Sideout, Serve Receive, Offense",
      "Create a race to see which team can score first-ball sideouts fastest.",
      "Run 6v6 with servers alternating between receiving teams.",
      [
        "Team receives serve and attempts to side out immediately.",
        "Only first-ball kills or clean sideouts count.",
        "Track each team’s successful sideouts.",
        "Rotate after a set number of serves."
      ],
      "The first-ball attack is a major separator. Demand a clean pass and confident swing.",
      "Sideout efficiency, passing, set delivery, and attacking."
    ),

    drill(
      "55",
      "Team Systems",
      "Out-of-System Scramble",
      "6-12",
      15,
      "Advanced",
      "Scramble, Ball Control, Transition",
      "Train players to stay composed and score from broken plays.",
      "Coach sends difficult balls that pull players away from normal system shape.",
      [
        "Coach enters an off-target or chaotic ball.",
        "Team scrambles to keep it playable.",
        "Set a hittable ball to the safest option.",
        "Reward controlled conversion from chaos."
      ],
      "When the play breaks down, stay calm, send a high ball to the pin, and keep the rally alive.",
      "Composure, out-of-system decision-making, ball control, and transition attack."
    ),

    drill(
      "56",
      "Team Systems",
      "Serve, Receive, Score",
      "12",
      20,
      "Intermediate",
      "Match Play, Systems, Rally Scoring",
      "Simulate match play from serve through full rally scoring.",
      "Use full 6v6 with normal serving and rotation rules.",
      [
        "Every rally begins with a serve.",
        "Teams play the rally out.",
        "Use normal scoring.",
        "Coach can freeze play to correct reads or spacing."
      ],
      "Treat every rep like a match. Run the system and communicate every ball.",
      "Match execution, systems discipline, rotation IQ, and competitiveness."
    ),

    drill(
      "57",
      "Team Systems",
      "Transition Wash",
      "12",
      20,
      "Advanced",
      "Transition, Sideout, Team Play",
      "Force teams to side out and then win again in transition.",
      "Run 6v6 with coach or server initiation.",
      [
        "Receiving team must win the first rally.",
        "Coach enters a second ball for transition.",
        "Team must win both to score.",
        "Rotate through multiple situations."
      ],
      "Sideout first, then defend and convert. Transition scoring separates strong teams.",
      "Transition execution, defense-to-offense speed, consistency, and team coordination."
    ),

    drill(
      "58",
      "Competition",
      "Narrow-Court Competition",
      "4-12",
      15,
      "Intermediate",
      "Control, Placement, Competing",
      "Use a narrowed court to reward control and reduce careless power errors.",
      "Mark a narrower court using lines, cones, or tape.",
      [
        "Teams play rallies inside the narrow court.",
        "Balls outside the narrow boundary count out.",
        "Emphasize control and placement.",
        "Widen the court as execution improves."
      ],
      "Control beats power in this format. Players must place shots and manage errors.",
      "Control, placement, consistency, and competitive decision-making."
    ),

    drill(
      "59",
      "Competition",
      "Point-Streak Challenge",
      "6-12",
      15,
      "Intermediate",
      "Mental Toughness, Focus, Competing",
      "Build focus by challenging teams to string consecutive points together.",
      "Use two teams on a normal court with coach tracking streaks.",
      [
        "Team must win a set number of points in a row.",
        "A lost point resets the streak.",
        "Raise the required streak each level.",
        "First team to complete all levels wins."
      ],
      "Players must reset after every rally and avoid letting one mistake snowball.",
      "Focus, consistency, mental toughness, and pressure response."
    ),

    drill(
      "60",
      "Competition",
      "Winners Stay",
      "9-18",
      20,
      "All levels",
      "3v3, Competing, Communication",
      "Create quick competitive reps where winning teams stay on the court.",
      "Use teams of three with one court and a waiting line.",
      [
        "Two teams play a short rally series.",
        "Winner stays on.",
        "Losing team rotates off.",
        "New team enters immediately."
      ],
      "Fast pace rewards effort and adaptability. Keep entries quick.",
      "Competing, all-around skill, communication, and adaptation."
    ),

    drill(
      "61",
      "Competition",
      "Pressure Free-Ball Conversion",
      "6-12",
      12,
      "Intermediate",
      "Free-Ball, Transition, Pressure",
      "Pressure the team to convert easy balls into points repeatedly.",
      "Coach tosses free balls to a full receiving side.",
      [
        "Coach sends a free ball.",
        "Team must pass, set, and attack.",
        "Count consecutive successful conversions.",
        "A miss resets the count."
      ],
      "Easy balls should become points. Demand a clean call, clean pass, and full approach.",
      "Free-ball conversion, focus, transition offense, and consistency."
    ),

    drill(
      "62",
      "Attacking",
      "Coach-on-Box Hitting Reps",
      "Any",
      12,
      "Beginner",
      "Hitting, Repetition, Contact",
      "Maximize hitting repetitions with consistent balls from a coach.",
      "Coach stands on a box near the net. Hitters line up at the pin or middle.",
      [
        "Coach delivers a consistent ball.",
        "Hitter approaches and swings.",
        "Rotate quickly.",
        "Use one target or cue per round."
      ],
      "Consistent feeds allow hitters to focus on one correction at a time.",
      "Approach, arm swing, contact point, and consistency at volume."
    ),

    drill(
      "63",
      "Setting",
      "Setter-Hitter Connection Reps",
      "2-6",
      12,
      "Intermediate",
      "Setting, Hitting, Timing",
      "Build timing and communication between setter and hitters.",
      "Setter works with one hitter at a time and a feeder providing passes.",
      [
        "Feeder passes to setter.",
        "Setter delivers to the hitter’s preferred spot.",
        "Hitter attacks and gives feedback.",
        "Repeat until timing improves."
      ],
      "Setter and hitter should talk about height, tempo, and location.",
      "Set location, hitter timing, communication, and attack conversion."
    ),

    drill(
      "64",
      "Serve Receive",
      "Serve Receive vs. Tough Serving",
      "6-12",
      15,
      "Advanced",
      "Passing, Pressure, Mental Toughness",
      "Harden serve receive by facing the team’s strongest servers.",
      "Best servers serve aggressively at a full receive formation.",
      [
        "Top servers serve at match speed.",
        "Passers work to maintain in-system passing.",
        "Score pass quality.",
        "Rotate passers and track averages."
      ],
      "Calm passing under a tough serve wins matches. Emphasize early read and platform strength.",
      "Passing under pressure, composure, platform control, and seam communication."
    ),

    drill(
      "65",
      "Defense",
      "Block-Defense Integration",
      "6-12",
      15,
      "Advanced",
      "Blocking, Digging, Team Defense",
      "Connect the block and back-row defense into one system.",
      "Run full block and defense against live or coach attacks.",
      [
        "Blockers take away a called shot.",
        "Defenders cover the remaining space.",
        "Dig to target and transition.",
        "Vary the attack to test the system."
      ],
      "The block and defense must work together. Defenders play based on what the block removes.",
      "Block-defense coordination, communication, positioning, and digging."
    ),

    drill(
      "66",
      "Defense",
      "Down-Ball & Free-Ball Reads",
      "6-12",
      12,
      "Intermediate",
      "Defense, Transition, Communication",
      "Teach the team to recognize down balls and free balls quickly.",
      "Coach mixes down balls and free balls from across the net.",
      [
        "Coach sends either a down ball or free ball.",
        "Team calls the ball type early.",
        "Players adjust posture and spacing.",
        "Pass to target and convert."
      ],
      "The call changes the team’s shape. Players must recognize early and communicate loudly.",
      "Reading, calling, transition passing, and conversion."
    ),

    drill(
      "67",
      "Ball Control",
      "Continuous Cross-Court Rally",
      "2-4",
      10,
      "Intermediate",
      "Digging, Hitting, Control",
      "Build endurance and control through sustained diagonal rallies.",
      "Two players or pairs set up diagonally across the net.",
      [
        "Players rally cross-court.",
        "Control the dig and attack back cross-court.",
        "Add a setter touch for three-contact play.",
        "Count consecutive successful exchanges."
      ],
      "The goal is controlled attacking and playable digs, not just winning the rally.",
      "Ball control, digging, controlled attacking, and stamina."
    ),

    drill(
      "68",
      "Serving",
      "Serving to Rotation Weakness",
      "Any",
      12,
      "Advanced",
      "Serving, Strategy, Targeting",
      "Teach servers to attack specific rotation weaknesses.",
      "Place targets in strategic seams or zones based on a rotation.",
      [
        "Identify the target zone or weak passer.",
        "Servers aim to hit the called area.",
        "Score for strategic accuracy.",
        "Change the target each round."
      ],
      "Serving is strategy. Players should attack seams, space, and weak passers with intent.",
      "Strategic placement, accuracy, serving IQ, and execution."
    ),

    drill(
      "69",
      "Setting",
      "Setter Live Decision Game",
      "6+",
      15,
      "Advanced",
      "Setting, Offense, Decision-Making",
      "Score the setter on distribution, tempo, and live offensive decisions.",
      "Setter works with a full front row and live entry balls.",
      [
        "Ball enters from serve, free ball, or dig.",
        "Setter reads pass quality and block alignment.",
        "Setter chooses the best option.",
        "Reward smart decisions and clean distribution."
      ],
      "The setter runs the offense. Decision-making matters as much as hand skill.",
      "Distribution, tempo, decision-making, and offensive control."
    ),

    drill(
      "70",
      "Ball Control",
      "Six-Player Pepper Circle",
      "6",
      10,
      "Intermediate",
      "Ball Control, Communication, All-Around Skills",
      "Use a group pepper circle to keep controlled contacts moving.",
      "Six players form a circle with one ball.",
      [
        "Players keep a dig-set-hit pattern moving.",
        "Call the next player’s name before contact.",
        "Keep contacts controlled.",
        "Add a second ball for advanced groups."
      ],
      "Communication and control keep the drill alive.",
      "Ball control, communication, clean contacts, and focus."
    ),

    drill(
      "71",
      "Defense",
      "Block Movement Footwork Lines",
      "Any",
      10,
      "Beginner",
      "Blocking, Footwork, Balance",
      "Drill clean lateral and crossover blocking footwork without needing full live play.",
      "Blockers line up at the net with cones or visual movement marks.",
      [
        "Move from pin to middle using shuffle or crossover steps.",
        "Stop square and press a block jump.",
        "Repeat in both directions.",
        "Add a ball or coach attack after footwork is clean."
      ],
      "Clean footwork creates good blocks. No drifting, no sloppy landings.",
      "Footwork, balance, square body position, and timing."
    ),

    drill(
      "72",
      "Team Systems",
      "Serve-Pass-Set-Hit Continuous",
      "8-14",
      15,
      "Intermediate",
      "Serve, Pass, Set, Attack",
      "Create a continuous full-skill sequence from serve through attack.",
      "Set up servers, passers, setters, hitters, and shaggers in a rotation loop.",
      [
        "Serve begins the sequence.",
        "Passer passes to setter.",
        "Setter sets hitter.",
        "Players rotate through roles after contact."
      ],
      "Every contact has a job. Keep the loop moving and quality high.",
      "All-around skill, role versatility, flow, and execution."
    ),

    drill(
      "73",
      "Team Systems",
      "Defense-to-Offense Sprint",
      "6-12",
      12,
      "Advanced",
      "Transition, Conditioning, Defense",
      "Train fast transition from defensive contact into attack while under fatigue.",
      "Defenders begin in base with coach attacking rapid balls.",
      [
        "Coach attacks to a defender.",
        "Defender digs to target.",
        "Player immediately transitions to attack the next ball.",
        "Rotate before technique breaks down."
      ],
      "Dig, transition, attack, repeat. Technique must hold under pace.",
      "Transition speed, conditioning, defensive control, and attacking after movement."
    ),

    drill(
      "74",
      "Ball Control",
      "Mintonette Control Game",
      "6-12",
      12,
      "Beginner",
      "Control, Team Play, Placement",
      "Use a no-jump control game to slow the sport down and improve fundamentals.",
      "Use normal court or smaller teams with a no-jump and no-hard-swing rule.",
      [
        "Teams rally using controlled contacts.",
        "Require three contacts when possible.",
        "No jumping or hard attacks early.",
        "Progress toward controlled attacks."
      ],
      "Slow the game down and execute. Placement over power.",
      "Ball control, three-contact discipline, placement, and teamwork."
    ),

    drill(
      "75",
      "Attacking",
      "Pin Hitter Shot Menu",
      "Any",
      12,
      "Advanced",
      "Hitting, Shot Variety, Decision-Making",
      "Expand a pin hitter’s options beyond one hard swing.",
      "Hitter works at the pin with a setter, targets, and optional blockers.",
      [
        "Coach calls a shot type before the set.",
        "Hitter executes the called shot.",
        "Cycle through line, angle, seam, high hands, and tip.",
        "Add a live block to read."
      ],
      "Same approach, different finish. Complete hitters have multiple answers.",
      "Shot variety, control, deception, and decision-making."
    ),

    drill(
      "76",
      "Defense",
      "Scramble Cover & Replay",
      "6-12",
      12,
      "Advanced",
      "Defense, Pursuit, Team Coverage",
      "Build relentless team defense by replaying chaotic balls until the rally dies.",
      "Full team on court with coach driving, tipping, and creating scramble situations.",
      [
        "Coach sends chaotic balls into space.",
        "Players cover, pursue, and keep the ball alive.",
        "Replay the ball to target whenever possible.",
        "Reward extended rallies and effort."
      ],
      "No ball dies without full effort. Players must cover teammates and keep playing.",
      "Pursuit, team coverage, effort, and ball control under chaos."
    ),

    drill(
      "77",
      "Serve Receive",
      "Rotational Serve Receive",
      "6-12",
      18,
      "Advanced",
      "Serve Receive, Rotation, Team Organization",
      "Rep all six serve-receive rotations so players understand spacing and seams.",
      "Full receive team sets up in each rotation with servers across the net.",
      [
        "Start in rotation one.",
        "Receive a set number of serves.",
        "Discuss seams and responsibilities.",
        "Rotate through all six alignments."
      ],
      "Players must know their spot and seam in every rotation.",
      "Rotation alignment, serve receive, seam responsibility, and organization."
    ),

    drill(
      "78",
      "Setting",
      "Setter Release & Run Offense",
      "6+",
      15,
      "Advanced",
      "Setting, Release, Offense",
      "Train the setter to release from defense or serve receive and run the offense.",
      "Setter starts from different base or receive positions with hitters available.",
      [
        "Ball enters from serve receive, dig, or free ball.",
        "Setter releases to the net.",
        "Setter runs the offense.",
        "Vary entry location and pass quality."
      ],
      "Beat the ball to the net, arrive balanced, and run the offense with confidence.",
      "Release footwork, set distribution, offensive control, and decision-making."
    ),

    drill(
      "79",
      "Competition",
      "Game-Point Pressure Scrimmage",
      "12",
      20,
      "Advanced",
      "Pressure, Match Play, Mental Toughness",
      "Simulate late-set pressure so players practice match-deciding moments.",
      "Run 6v6 with the scoreboard set near the end of a set.",
      [
        "Start at a late-game score.",
        "Play out the pressure points.",
        "Reset and replay different scenarios.",
        "Add specific goals like sideout or tough serve."
      ],
      "Practice the moments that decide matches. Calm execution wins tight sets.",
      "Composure, execution under pressure, communication, and clutch play."
    ),

    drill(
      "80",
      "Team Systems",
      "All-Skills Rotation Circuit",
      "12+",
      25,
      "All levels",
      "All Skills, Tryouts, Evaluation",
      "Run a station circuit that evaluates every major volleyball skill.",
      "Set up stations for serving, passing, setting, hitting, defense, and competition.",
      [
        "Split players into small groups.",
        "Each group starts at one station.",
        "Rotate on a timer or whistle.",
        "Coaches score or take notes at each station."
      ],
      "Keep stations moving and reps high. This is ideal for tryouts or large groups.",
      "Serving, passing, setting, attacking, defense, effort, and overall volleyball skill."
    )
  ];
})();