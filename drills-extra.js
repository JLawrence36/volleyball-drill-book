(function () {
  const SOURCE = "Rising Sun Beginner-Intermediate Drill Book";

  function clean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function slug(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function drill(bookCode, number, category, name, players, time, level, skills, purpose, setup, run, coaching, evaluate) {
    return {
      id: `extra_${bookCode}_${number}_${slug(name)}`,
      number: `B${String(number).padStart(3, "0")}`,
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

  function isDuplicate(existingDrills, newDrill) {
    const newName = clean(newDrill.name);

    return existingDrills.some(existing => {
      const existingName = clean(existing.name);

      if (existingName === newName) return true;

      const combined = `${existingName} ${clean(existing.purpose)} ${clean(existing.skills)}`;

      if (newName.includes(existingName) || existingName.includes(newName)) {
        return true;
      }

      return combined.includes(newName);
    });
  }

  const EXTRA_DRILLS = [
    // =========================
    // SERVE RECEIVE — NEW ONLY
    // =========================

    drill(
      "sr",
      "001",
      "Serve Receive",
      "Platform Freeze",
      "Any",
      5,
      "Beginner",
      "Passing, Platform, Body Mechanics",
      "Build a consistent serve-receive platform before adding the ball.",
      "Players stand in passing posture facing a partner, wall, or coach with no ball.",
      [
        "Coach calls set.",
        "Players form their platform and freeze.",
        "Coach checks thumbs, wrists, elbows, shoulders, knees, and balance.",
        "Reset and repeat."
      ],
      "Flat and frozen. Thumbs to the floor. Wrists locked. Shoulders slightly forward.",
      "Platform shape, posture, balance, and ability to hold correct mechanics."
    ),

    drill(
      "sr",
      "002",
      "Serve Receive",
      "Toss-and-Pass to Self",
      "Individual",
      5,
      "Beginner",
      "Passing, Contact Point, Control",
      "Teach clean forearm contact and quiet arms.",
      "Player gently tosses the ball straight up and passes it back to themselves.",
      [
        "Toss the ball straight up.",
        "Pass it back to yourself using a flat platform.",
        "Keep the contact between knees and waist.",
        "Count consecutive controlled passes."
      ],
      "Pass with your legs. Quiet arms. Contact 6–8 inches above the wrists.",
      "Contact point, platform angle, control, and no arm swing."
    ),

    drill(
      "sr",
      "003",
      "Serve Receive",
      "Partner Pass Catch",
      "Pairs",
      8,
      "Beginner",
      "Passing, Target Accuracy, Platform Angle",
      "Build basic passing accuracy to a partner target.",
      "Partners stand about 15 feet apart. One tosses, one passes, and the partner catches at forehead height.",
      [
        "Partner tosses an easy ball.",
        "Passer moves behind the ball and passes to partner.",
        "Partner catches at forehead height.",
        "Switch after 10 good passes."
      ],
      "Ramp to the target. Catch it at the forehead. Hold balance after the pass.",
      "Accuracy, platform angle, posture, and target control."
    ),

    drill(
      "sr",
      "004",
      "Serve Receive",
      "Step-Through Footwork",
      "3-8",
      8,
      "Beginner",
      "Passing, Footwork, Balance",
      "Teach players to move their feet before forming the platform.",
      "Coach tosses balls slightly left or right. Passer starts in serve-receive posture.",
      [
        "Coach tosses left or right.",
        "Passer shuffles, plants, and gets balanced.",
        "Passer forms platform and passes to target.",
        "Reset after every rep."
      ],
      "Beat the ball, then stop. Feet first, platform second.",
      "First step, balance, stopping before contact, and pass quality."
    ),

    drill(
      "sr",
      "005",
      "Serve Receive",
      "Deep-Serve Drop Step",
      "3-8",
      10,
      "Intermediate",
      "Serve Receive, Deep Serves, Footwork",
      "Teach passers how to handle deep serves without backpedaling.",
      "Server or coach targets deep zones. Passer starts in serve receive.",
      [
        "Server sends a deep serve.",
        "Passer drop-steps to open the hips.",
        "Passer gets behind the ball and passes forward to target.",
        "Reset and repeat."
      ],
      "Open the gate, get behind it. Do not backpedal.",
      "Drop step, depth read, balance, and pass to target."
    ),

    drill(
      "sr",
      "006",
      "Serve Receive",
      "Short-Serve Sprint",
      "3-8",
      10,
      "Intermediate",
      "Serve Receive, Short Serves, Movement",
      "Teach passers to explode forward and lift short serves.",
      "Server drops serves just over the net. Passer begins in normal receive depth.",
      [
        "Server sends a short serve.",
        "Passer reads short and sprints forward.",
        "Passer lowers hips and lifts the ball to target.",
        "Reset and mix with normal serves when ready."
      ],
      "Sprint and sink. Lift it up, not out.",
      "Short-serve read, forward speed, low platform, and controlled lift."
    ),

    drill(
      "sr",
      "007",
      "Serve Receive",
      "Float Read Drill",
      "3-9",
      10,
      "Intermediate",
      "Serve Receive, Float Serve, Reading",
      "Train passers to stay patient and adjust late to a moving float serve.",
      "Server hits float serves. Passers focus on small late foot adjustments.",
      [
        "Server hits a float serve.",
        "Passer tracks the ball through movement.",
        "Passer uses small steps late.",
        "Passer presents platform and passes to target."
      ],
      "Patient platform. Small feet late. Stay tall longer before committing.",
      "Float read, late adjustment, platform control, and composure."
    ),

    drill(
      "sr",
      "008",
      "Serve Receive",
      "Quiet Hands Challenge",
      "3-12",
      8,
      "Intermediate",
      "Passing, Platform Discipline, No Arm Swing",
      "Remove arm swing from serve receive passing.",
      "Coach or server sends controlled serves. Coach watches for arm swing.",
      [
        "Passer starts in receive posture.",
        "Server sends a controlled serve.",
        "Passer locks the platform and passes with legs.",
        "Any visible arm swing resets the count."
      ],
      "Dead arms. Legs do the work. Lock the platform before contact.",
      "No arm swing, platform discipline, balance, and pass height."
    ),

    // =========================
    // DIGGING / DEFENSE — NEW ONLY
    // =========================

    drill(
      "def",
      "009",
      "Defense",
      "Low Base Hold",
      "Any",
      5,
      "Beginner",
      "Defense, Stance, Body Mechanics",
      "Teach the correct low and wide defensive posture.",
      "Players spread out with enough space to hold a defensive stance.",
      [
        "Players drop into defensive base.",
        "Coach checks feet, hips, chest, hands, and eyes.",
        "Hold for time.",
        "Reset and repeat."
      ],
      "Low and wide. Nose over toes. Hands apart and ready.",
      "Defensive posture, balance, readiness, and body control."
    ),

    drill(
      "def",
      "010",
      "Defense",
      "Self-Toss Dig Absorb",
      "Individual",
      6,
      "Beginner",
      "Digging, Absorbing Pace, Platform",
      "Teach players to absorb pace instead of swinging at hard-driven balls.",
      "Player works alone with one ball.",
      [
        "Player tosses the ball down near themselves.",
        "Player digs the rebound straight up.",
        "Focus on a firm but giving platform.",
        "Repeat for controlled reps."
      ],
      "Catch it soft, send it up. No swing.",
      "Absorption, platform angle, low base, and control."
    ),

    drill(
      "def",
      "011",
      "Defense",
      "Hands-Apart Ready Reps",
      "Any",
      5,
      "Beginner",
      "Defense, Ready Position, Reaction",
      "Teach defenders to keep hands apart and form the platform late.",
      "Players line up facing the coach.",
      [
        "Players hold defensive ready position.",
        "Coach calls platform.",
        "Players snap hands together into platform.",
        "Reset hands apart after each rep."
      ],
      "Hands apart, then join. Late platform.",
      "Ready position, reaction, hand speed, and platform formation."
    ),

    drill(
      "def",
      "012",
      "Defense",
      "Collapse Dig Technique",
      "2-8",
      8,
      "Intermediate",
      "Digging, Emergency Defense, Floor Skills",
      "Teach controlled collapse technique for low balls.",
      "Coach tosses low balls to either side of the defender.",
      [
        "Defender extends platform low to the ball.",
        "Defender collapses onto hip or thigh, not the knee.",
        "Pop the ball up high.",
        "Recover to the feet."
      ],
      "Platform first, then collapse. Hip, not knee.",
      "Low-ball technique, safety, platform control, and recovery."
    ),

    drill(
      "def",
      "013",
      "Defense",
      "Overhand Tomahawk Dig",
      "2-8",
      8,
      "Intermediate",
      "Defense, Overhand Dig, Hard-Driven Ball",
      "Teach defenders how to handle hard balls above the shoulders.",
      "Coach sends high hard balls at the defender.",
      [
        "Defender reads the high ball.",
        "Join hands overhead.",
        "Contact with firm hands.",
        "Direct the ball high to the middle."
      ],
      "Firm hands up top. Punch it high.",
      "Overhand dig choice, hand firmness, control, and safe contact."
    ),

    // =========================
    // SERVING — NEW ONLY
    // =========================

    drill(
      "srv",
      "014",
      "Serving",
      "Toss Consistency Drill",
      "Any",
      6,
      "Beginner",
      "Serving, Toss, Body Mechanics",
      "Build the most important part of serving: a repeatable toss.",
      "Place a floor marker in front of the hitting shoulder.",
      [
        "Player practices the toss only.",
        "Toss should land on or near the marker.",
        "Catch or let it drop to check accuracy.",
        "Repeat until the toss is consistent."
      ],
      "Lift, do not flick. Land it on the dot.",
      "Toss location, toss height, consistency, and control."
    ),

    drill(
      "srv",
      "015",
      "Serving",
      "Underhand Serve Form",
      "Any",
      8,
      "Beginner",
      "Serving, Underhand Serve, Consistency",
      "Give new players a reliable first serve.",
      "Players serve underhand from a comfortable distance, then move back as they improve.",
      [
        "Start in staggered stance.",
        "Hold the ball still.",
        "Step and swing low to high.",
        "Serve into the court."
      ],
      "Step, swing, follow. Hit the bottom of the ball.",
      "Contact, weight transfer, court entry, and repeatable motion."
    ),

    drill(
      "srv",
      "016",
      "Serving",
      "Float Toss-and-Hold",
      "Any",
      6,
      "Beginner",
      "Serving, Float Serve, Toss Control",
      "Pair the float-serve toss with good decision-making.",
      "Player practices tosses before live serving.",
      [
        "Player tosses the float-serve toss.",
        "Player catches the ball to confirm location.",
        "Only swing when the toss is good.",
        "Progress to live serves."
      ],
      "Good toss or no swing. Catch to check.",
      "Toss discipline, float preparation, and serving consistency."
    ),

    drill(
      "srv",
      "017",
      "Serving",
      "Serve Routine Builder",
      "Any",
      6,
      "Beginner",
      "Serving, Routine, Mental",
      "Build a consistent pre-serve routine for pressure moments.",
      "Players serve individually or in a line with one ball each.",
      [
        "Pick a simple routine.",
        "Use the same routine before every serve.",
        "Breathe and choose the target.",
        "Serve without hesitation."
      ],
      "Same routine every serve. Breathe, see it, serve it.",
      "Routine consistency, focus, target selection, and execution."
    ),

    drill(
      "srv",
      "018",
      "Serving",
      "Aces or Errors Tracker",
      "Any",
      12,
      "Intermediate",
      "Serving, Risk Reward, Strategy",
      "Help servers understand their aggression level and serve profile.",
      "Player serves a set of 20 while coach or partner tracks results.",
      [
        "Player serves at match aggression.",
        "Track aces, in-play serves, and errors.",
        "Review ace-to-error ratio.",
        "Adjust aggression level."
      ],
      "Know your numbers. Healthy risk.",
      "Serve effectiveness, aggression control, errors, and tactical awareness."
    ),

    // =========================
    // SETTING — NEW ONLY
    // =========================

    drill(
      "set",
      "019",
      "Setting",
      "Hand-Shape Window",
      "Any",
      5,
      "Beginner",
      "Setting, Hand Shape, Body Mechanics",
      "Teach correct hand position before adding movement or tempo.",
      "Player holds the ball above the forehead in the setting window.",
      [
        "Player forms the setting window.",
        "Coach checks thumbs, index fingers, wrists, and elbows.",
        "Hold for three seconds.",
        "Reset and repeat."
      ],
      "Window at the forehead. Shape like the ball.",
      "Hand shape, elbow position, wrist position, and setting readiness."
    ),

    drill(
      "set",
      "020",
      "Setting",
      "Set to Self",
      "Individual",
      6,
      "Beginner",
      "Setting, Touch, Control",
      "Build clean setting touch and soft hands.",
      "Player works alone with one ball.",
      [
        "Set the ball straight up.",
        "Keep the ball over the forehead.",
        "Use legs and arms together.",
        "Count consecutive clean sets."
      ],
      "Soft catch, full push. Ten fingers, one touch.",
      "Clean contact, control, no spin, and consistency."
    ),

    drill(
      "set",
      "021",
      "Setting",
      "Two-Hand Symmetry Check",
      "Individual",
      6,
      "Beginner",
      "Setting, Hand Contact, No Spin",
      "Teach even hand contact by watching ball spin.",
      "Setter works alone or with a partner.",
      [
        "Setter sets the ball upward or to partner.",
        "Watch the ball for spin.",
        "Adjust weaker hand pressure.",
        "Repeat until the ball comes out clean."
      ],
      "No spin, even hands. Match the pressure.",
      "Even hand contact, clean release, and ball control."
    ),

    drill(
      "set",
      "022",
      "Setting",
      "Front and Back Disguise",
      "2-6",
      10,
      "Intermediate",
      "Setting, Back Set, Deception",
      "Train setters to front set and back set from the same body posture.",
      "Setter works at the net with front and back targets.",
      [
        "Setter starts in neutral posture.",
        "Coach calls front or back.",
        "Setter delivers the called set without showing early.",
        "Targets or hitters catch/attack."
      ],
      "Same look, two sets. Decide late.",
      "Deception, back-set control, posture, and decision timing."
    ),

    // =========================
    // OUT OF SYSTEM — NEW CATEGORY
    // =========================

    drill(
      "oos",
      "023",
      "Out of System",
      "High Outside Emergency Ball",
      "4-10",
      10,
      "Beginner",
      "Out of System, Bump Setting, Recovery",
      "Teach players the safest broken-play option: high ball to the outside.",
      "Use passers, a target outside hitter, and coach-entered bad balls.",
      [
        "Coach sends a poor first contact or scramble ball.",
        "Nearest player calls help.",
        "Player sends a high, safe ball to the outside pin.",
        "Hitter keeps the ball in play or attacks smart."
      ],
      "High and outside. Give the hitter time.",
      "Communication, emergency setting, height, control, and composure."
    ),

    drill(
      "oos",
      "024",
      "Out of System",
      "Setter Out Call",
      "6-12",
      10,
      "Intermediate",
      "Out of System, Communication, Team Recovery",
      "Train the team to respond when the setter takes first contact.",
      "Run team defense or serve receive with a setter and hitters.",
      [
        "Coach sends a ball that forces setter to take first contact.",
        "Setter calls out.",
        "A non-setter steps in to set.",
        "Team sends a high, hittable ball to a safe option."
      ],
      "Setter out. Next best hands. High ball buys time.",
      "Setter-out communication, non-setter setting, composure, and attack recovery."
    )
  ];

  const existing = Array.isArray(window.DRILL_DATABASE) ? window.DRILL_DATABASE : [];
  const uniqueExtras = EXTRA_DRILLS.filter(newDrill => !isDuplicate(existing, newDrill));

  window.DRILL_DATABASE = existing.concat(uniqueExtras);
})();