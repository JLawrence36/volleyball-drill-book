(function () {
  const EDGE_SOURCE = "The Mental Edge Team Training Sequence";
  const PROGRAM_SOURCE = "RSHS 7-Week Total Athlete Program";

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function makeExtraId(prefix) {
    if (window.crypto && window.crypto.randomUUID) {
      return `${prefix}_${window.crypto.randomUUID()}`;
    }

    return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
  }

  function closeDetailsModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) modal.classList.add("hidden");
  }

  function safeAddBlock(block) {
    if (typeof window.addBlock === "function") {
      window.addBlock(block);
      closeDetailsModal();
      return;
    }

    alert("Could not add this block. Make sure planner-extras.js loads after script.js.");
  }

  function blockFromItem(item, type) {
    return {
      id: makeExtraId("block"),
      type,
      title: item.title,
      category: item.category,
      minutes: Number(item.minutes) || 10,
      summary: item.summary || "",
      details: Array.isArray(item.details) ? item.details : [],
      setup: item.setup || "",
      coaching: item.coaching || "",
      evaluate: item.evaluate || "",
      notes: "",
      sourceId: item.id
    };
  }

  function openExtraDetails(item, type) {
    const modal = document.getElementById("detailsModal");
    const content = document.getElementById("detailsContent");

    if (!modal || !content) {
      alert("Details modal not found.");
      return;
    }

    content.innerHTML = `
      <h2 class="detail-title">${esc(item.title)}</h2>
      <div class="detail-meta">${esc(item.category)} · ${esc(item.minutes)} min · ${esc(item.source || "Coach Library")}</div>

      <div class="detail-section">
        <h3>Purpose</h3>
        <p>${esc(item.summary || "")}</p>
      </div>

      ${item.setup ? `
        <div class="detail-section">
          <h3>Setup</h3>
          <p>${esc(item.setup)}</p>
        </div>
      ` : ""}

      <div class="detail-section">
        <h3>How to Run It</h3>
        <ol>${(item.details || []).map(step => `<li>${esc(step)}</li>`).join("")}</ol>
      </div>

      ${item.coaching ? `
        <div class="detail-section">
          <h3>Coach's Cue</h3>
          <p>${esc(item.coaching)}</p>
        </div>
      ` : ""}

      ${item.evaluate ? `
        <div class="detail-section">
          <h3>Evaluate</h3>
          <p>${esc(item.evaluate)}</p>
        </div>
      ` : ""}

      <div class="bottom-actions">
        <button class="btn dark" data-add-extra-block="${esc(item.id)}" data-extra-type="${esc(type)}">＋ Add to Practice</button>
      </div>
    `;

    modal.classList.remove("hidden");
  }

  const MENTAL_EDGE = [
    {
      id: "edge_01",
      title: "1. Breath Anchor Circle",
      category: "Mental Edge · Presence",
      minutes: 5,
      source: EDGE_SOURCE,
      summary: "The foundation reset tool every later mental skill builds on.",
      setup: "Whole team in a standing circle, arms loose at sides.",
      details: [
        "Coach leads five breaths in unison: full exhale, then slow inhale through the nose.",
        "Add the cue word reset spoken quietly on each exhale.",
        "On the final three breaths, players close their eyes and notice where they feel the breath move."
      ],
      coaching: "This one breath is your reset button."
    },
    {
      id: "edge_02",
      title: "2. The Body Scan Check-In",
      category: "Mental Edge · Presence",
      minutes: 7,
      source: EDGE_SOURCE,
      summary: "Players learn to notice body tension before trying to control it.",
      setup: "Circle or scattered spacing, everyone in an athletic stance.",
      details: [
        "Start with three reset breaths.",
        "Coach guides a head-to-toe scan: feet, ankles, knees, hips, core, shoulders, hands, and jaw.",
        "On each exhale, players drop shoulders and soften the jaw.",
        "Each player says one word for where they hold tension."
      ],
      coaching: "Awareness comes before control."
    },
    {
      id: "edge_03",
      title: "3. Ravizza’s Three Questions",
      category: "Mental Edge · Presence",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "A fast mental reset using three questions: Where am I? What is happening? What do I need to do?",
      setup: "Players in pairs, facing a partner.",
      details: [
        "Team takes one reset breath plus quick body scan.",
        "Coach teaches the three questions.",
        "Partner calls a game situation like serve receive, down 20-23.",
        "Other partner answers all three questions aloud in under five seconds.",
        "Switch roles and repeat four to five times each."
      ],
      coaching: "These questions interrupt the wandering mind and drop you back into the play."
    },
    {
      id: "edge_04",
      title: "4. Control the Controllables Sort",
      category: "Mental Edge · Presence",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Players physically sort game elements into control and can’t-control zones.",
      setup: "Mark two zones with cones: CONTROL and CAN’T CONTROL.",
      details: [
        "Open with a team reset breath.",
        "Coach reads game elements: ref calls, effort, score, body language, crowd, routine, teammate error, opponent skill, reaction to mistake.",
        "Players walk to the zone they believe it belongs in.",
        "Pause and discuss if the team splits.",
        "Each player names one controllable they commit to owning this week."
      ],
      coaching: "Energy spent on what you can’t control is stolen from what you can change."
    },
    {
      id: "edge_05",
      title: "5. Between-Point Reset Sequence",
      category: "Mental Edge · Presence",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "A five-second reset sequence: Release, Breathe, Look, Decide, Play.",
      setup: "Players spread across the court with a ball each or shared.",
      details: [
        "Teach Release, Breathe, Look, Decide, Play.",
        "Players walk through the full sequence slowly three times.",
        "Coach calls point over at random moments.",
        "Players run the full reset in under six seconds.",
        "Repeat six to eight times, getting faster each round."
      ],
      coaching: "This is your between-point home base."
    },
    {
      id: "edge_06",
      title: "6. Soft Eyes Court Scan",
      category: "Mental Edge · Awareness & Confidence",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "Players train wide court awareness instead of tunnel vision.",
      setup: "Players in serve receive or base defensive positions.",
      details: [
        "Open with one reset breath and the Look step.",
        "Coach explains hard eyes versus soft eyes.",
        "A feeder tosses or hits balls.",
        "As each ball travels, players name one thing beyond the ball: teammate position, setter release, or open floor.",
        "Run eight to ten reps with off-ball observations called out."
      ],
      coaching: "Soft eyes see the ball inside the whole picture."
    },
    {
      id: "edge_07",
      title: "7. Cue Word Build",
      category: "Mental Edge · Awareness & Confidence",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "Players choose a performance cue word and a reset cue word.",
      setup: "Team seated or circled with something to write on.",
      details: [
        "Take one team reset breath.",
        "Each player chooses one performance cue word like sharp, trust, free, or now.",
        "Each player chooses one reset cue word like next, fresh, or let go.",
        "Players pair up, share both words, and explain why they matter.",
        "Everyone says their performance word out loud to close."
      ],
      coaching: "A cue word works when it is conditioned in practice."
    },
    {
      id: "edge_08",
      title: "8. Highlight Reel Recall",
      category: "Mental Edge · Awareness & Confidence",
      minutes: 9,
      source: EDGE_SOURCE,
      summary: "Players use best-memory recall to rebuild confidence.",
      setup: "Players spread out, seated or lying down, eyes closed.",
      details: [
        "Take three slow reset breaths.",
        "Coach guides players to replay three of their best volleyball moments in vivid detail.",
        "As each memory lands, players repeat their performance cue word.",
        "Players write one sentence describing their single best moment.",
        "A few volunteers share and the team celebrates each one."
      ],
      coaching: "A vivid memory acts almost like a real rep."
    },
    {
      id: "edge_09",
      title: "9. Verbal Persuasion Partners",
      category: "Mental Edge · Awareness & Confidence",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "Players give specific confidence deposits to teammates.",
      setup: "Players in pairs, ideally with someone they trust.",
      details: [
        "Take one reset breath together.",
        "Partner A tells Partner B one specific thing they have seen them do well.",
        "Partner B says thank you without deflecting.",
        "Switch roles.",
        "Rotate to a new partner and repeat once more."
      ],
      coaching: "Specific, honest words from teammates are real deposits in the confidence account."
    },
    {
      id: "edge_10",
      title: "10. Confident Body Language Reset",
      category: "Mental Edge · Awareness & Confidence",
      minutes: 9,
      source: EDGE_SOURCE,
      summary: "Players train the first three seconds after a mistake.",
      setup: "Players spread out with room to move.",
      details: [
        "Coach names confident markers: head up, shoulders back and down, open chest, quick decisive feet.",
        "Players practice the three-second post-error reset.",
        "Coach calls errors like you just got blocked or you missed a serve.",
        "Players immediately reset body language and say their reset cue word.",
        "Finish by pairing the reset with a real fist bump to a teammate."
      ],
      coaching: "The physical choices after an error shape the next play."
    },
    {
      id: "edge_11",
      title: "11. Pre-Serve Ritual Build",
      category: "Mental Edge · Flow & Peak Performance",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Players build a consistent 6-10 second serving ritual.",
      setup: "Players at the service line with balls available.",
      details: [
        "Teach the five-step frame: receive the ball, physical reset, see the target, intention word, commit.",
        "Each player designs their own version.",
        "Players walk through the ritual three times without serving.",
        "Players serve five balls, running the full ritual every time.",
        "Rule: once the ritual starts, finish it."
      ],
      coaching: "The ritual is a one-way door."
    },
    {
      id: "edge_12",
      title: "12. One Clear Intention",
      category: "Mental Edge · Flow & Peak Performance",
      minutes: 6,
      source: EDGE_SOURCE,
      summary: "Players carry one specific performance goal into the next drill.",
      setup: "Team in a circle before a drill or scrimmage.",
      details: [
        "Take one reset breath.",
        "Coach explains that play well is too vague.",
        "Each player states one clear intention out loud.",
        "Players carry that one intention into the next 10-15 minutes of play.",
        "Quickly debrief whether the intention stayed clear."
      ],
      coaching: "One specific intention gives attention something solid to lock onto."
    },
    {
      id: "edge_13",
      title: "13. Refocusing Under Distraction",
      category: "Mental Edge · Flow & Peak Performance",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Players learn to lose focus and come straight back.",
      setup: "Players run a simple serving or passing drill. Designate two or three distractors.",
      details: [
        "Players begin with ritual and one clear intention.",
        "Distractors create controlled noise or movement.",
        "When focus breaks, player uses one breath, reset cue word, and returns to the intention.",
        "After each rep, player reports lost it or stayed.",
        "Swap distractors so everyone trains under pressure."
      ],
      coaching: "Losing focus is not failure. Staying lost is."
    },
    {
      id: "edge_14",
      title: "14. Championship Point Protocol",
      category: "Mental Edge · Flow & Peak Performance",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Players use the full mental toolkit on one high-stakes point.",
      setup: "Two teams on court, ready to play single points.",
      details: [
        "Coach declares the next point championship point.",
        "Server runs complete ritual.",
        "Receivers run reset breath and soft-eyes read.",
        "Play the point at full intensity.",
        "Win or lose, both teams run the between-point reset before the next championship point.",
        "Play six to eight points, rotating servers."
      ],
      coaching: "Pressure is the exact condition the mental skills were built for."
    },
    {
      id: "edge_15",
      title: "15. The Reframe Round",
      category: "Mental Edge · Growth & Resilience",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "Players reframe fixed thoughts into growth language.",
      setup: "Team seated in a circle.",
      details: [
        "Take one reset breath.",
        "Coach reads fixed-mindset statements like I’m not a good server.",
        "Players reframe them into growth language, adding yet where it fits.",
        "Each player shares one fixed thought they catch themselves having.",
        "Team helps reframe it."
      ],
      coaching: "The word yet opens the door."
    },
    {
      id: "edge_16",
      title: "16. Error Response Protocol",
      category: "Mental Edge · Growth & Resilience",
      minutes: 9,
      source: EDGE_SOURCE,
      summary: "Players combine body language, reframe, breath, and cue word after mistakes.",
      setup: "Use a drill where errors are likely, like new serve targets or fast-tempo passing.",
      details: [
        "Coach teaches the full response: body-language reset, one reframe thought, breath, and cue word.",
        "Players run the drill.",
        "Every time they make an error, they complete the protocol before the next rep.",
        "A partner watches and confirms the protocol happened.",
        "Switch watchers halfway through."
      ],
      coaching: "Errors are information, not indictments."
    },
    {
      id: "edge_17",
      title: "17. Comeback Scenario",
      category: "Mental Edge · Growth & Resilience",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Players apply the toolkit while losing.",
      setup: "Two teams on court. One team starts down, for example 15-20.",
      details: [
        "Team reset breath and one shared intention before first serve.",
        "Play out the set from the deficit.",
        "Trailing team must run resets between points and hold body-language standards.",
        "On errors, players run the error response protocol.",
        "After the scenario, team names one moment they stayed in process while behind."
      ],
      coaching: "Resilience is what the team does when the scoreboard is against them."
    },
    {
      id: "edge_18",
      title: "18. Psychological Safety Circle",
      category: "Mental Edge · Team & Integration",
      minutes: 8,
      source: EDGE_SOURCE,
      summary: "The team names what makes it safe to call, help, learn, and take risks.",
      setup: "Whole team in a tight circle.",
      details: [
        "Take one reset breath together.",
        "Coach names the standard: safe to call unsure balls, say help, admit errors, and ask questions.",
        "Each player finishes the sentence: I play my best when my teammates...",
        "Captains and coach model by naming one recent mistake.",
        "Team agrees on one communication standard."
      ],
      coaching: "Safety lets six players take real risks together."
    },
    {
      id: "edge_19",
      title: "19. Team Flow Communication",
      category: "Mental Edge · Team & Integration",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "Soft eyes plus trust become loud, continuous team talk.",
      setup: "Two teams ready to play out rallies.",
      details: [
        "Set the standard: every player makes at least one call per rally.",
        "Silence loses the point on purpose.",
        "Play rallies where a clean, loud, early call earns the point even on a shanked ball.",
        "Players use soft eyes to see teammates and call early.",
        "Add pressure with a deficit or noise and require communication to hold."
      ],
      coaching: "Teams in collective flow talk more, not less."
    },
    {
      id: "edge_20",
      title: "20. Championship Identity & Commitment",
      category: "Mental Edge · Team & Integration",
      minutes: 10,
      source: EDGE_SOURCE,
      summary: "The team turns the full mental sequence into a shared identity.",
      setup: "Whole team in a circle with something to write on.",
      details: [
        "Take three slow team reset breaths.",
        "Each player writes one present-tense identity statement.",
        "Players share statements with the circle.",
        "Team creates one shared identity sentence.",
        "Close with a team commitment that can be repeated before matches."
      ],
      coaching: "Everything you build becomes who the team is under pressure."
    }
  ];

  const SUMMER_PROGRAM = [
    {
      id: "program_w1",
      title: "Week 1 · Foundation & Assessment",
      category: "7-Week Program",
      minutes: 60,
      source: PROGRAM_SOURCE,
      summary: "Mobility, body awareness, movement patterns, and learning every barbell lift with perfect form.",
      setup: "Gym + court. Keep loads light and teach clean movement first.",
      details: [
        "Mon: Mobility + lower body foundation. Jump rope, mobility circuit, back squat intro, RDL intro, goblet squat, TRX split squat, hamstring curl, ball tracking.",
        "Tue: Upper body + reaction. Shoulder warmup, lateral shuffle calls, mirror drill, bench press intro, bent-over row, TRX row, external rotation, face pulls, dead bug, passing form.",
        "Wed: Active recovery + flexibility. Walk or bike, full-body flexibility flow, footwork patterns.",
        "Thu: Power intro + core. Dynamic warmup, broad jumps, box step-ups, med ball slams, TRX plank, Pallof press, V-ups, approach jump footwork.",
        "Fri: Speed + agility. A-skips, B-skips, carioca, 10-yard dash, flying 10s, ladder work, 5-10-5, T-drill, serve receive movement.",
        "Sat/Sun: Rest or light skill work."
      ],
      coaching: "Always prioritize form over load."
    },
    {
      id: "program_w2",
      title: "Week 2 · Build Volume",
      category: "7-Week Program",
      minutes: 65,
      source: PROGRAM_SOURCE,
      summary: "Increase reps and sets, introduce plyometrics, deepen flexibility, and add barbell load.",
      setup: "Gym + court. Add small load only if Week 1 form was clean.",
      details: [
        "Mon: Lower strength + plyos. Back squat, RDL, TRX Bulgarian split squat, KB step-up, squat jumps, lateral bounds, box jumps, blocking footwork.",
        "Tue: Upper + reaction speed. Tennis ball drop, lateral shuffle signal, bench press, bent-over row, TRX row, shoulder press, external rotation, farmer carry, setting hand position.",
        "Wed: Active recovery + yoga flow. Sun salutations, warrior holds, lizard lunge, spinal twist, forward fold, visualization or video study.",
        "Thu: Core + vertical power. Depth drop to jump, approach jumps, single-leg hop, TRX pike, Russian twist, hollow hold, wood chop, approach + swing mechanics.",
        "Fri: Speed + reactive agility. Resisted sprint, flying 20s, random cone drill, partner mirror, ladder patterns, defensive positioning.",
        "Sat/Sun: Rest or optional passing/setting reps."
      ],
      coaching: "Add volume without losing movement quality."
    },
    {
      id: "program_w3",
      title: "Week 3 · Intensify",
      category: "7-Week Program",
      minutes: 70,
      source: PROGRAM_SOURCE,
      summary: "Heavier barbell loads, advanced plyos, and sport-specific combinations.",
      setup: "Gym + court. Use stronger loads with clean mechanics and full rest.",
      details: [
        "Mon: Strength + jump combo. Squat, deadlift, single-leg RDL, box jumps after squat sets, depth jumps, full approach jump with hit off toss.",
        "Tue: Upper power + reaction. Signal sprint starts, ball drop sprint, bench, row, med ball chest pass, explosive TRX row, slams, clap pushups, arm swing power.",
        "Wed: Deep mobility + recovery. Hip stretch, hip flexor reach, thoracic work, PNF hamstrings, ankle mobility, yoga flow, film review.",
        "Thu: Vertical + core peak. Max approach jumps, altitude drop to jump, single-leg bounds, TRX atomic push-up, med ball rotational throws, serve-to-base transition.",
        "Fri: Max speed + agility. Block starts, max velocity 20s, reactive 5-10-5, zig-zag sprint, ladder + lateral bound, defensive game simulation.",
        "Sat/Sun: Active recovery or full rest."
      ],
      coaching: "High intent, clean reps, and full recovery between explosive efforts."
    },
    {
      id: "program_w4",
      title: "Week 4 · Deload",
      category: "7-Week Program",
      minutes: 45,
      source: PROGRAM_SOURCE,
      summary: "Reduce volume 40%, maintain intensity, recover, and reassess benchmarks.",
      setup: "Keep work light and crisp. This week should leave players fresher, not crushed.",
      details: [
        "Mon: Light lower + mobility. Light squat pattern, TRX split squat, glute bridge, easy passing/setting.",
        "Tue: Light upper + reaction. Band circuit, light bench, TRX row, reaction ball catch, low-intensity footwork.",
        "Wed: Full yoga + recovery. Vinyasa flow, yin holds, meditation and breathwork.",
        "Thu: Light power + core. Low box jumps, broad jumps, planks, dead bugs, light approach footwork.",
        "Fri: Light speed + benchmark. 10-yard dash, vertical jump, easy ladder, skill review.",
        "Sat/Sun: Rest."
      ],
      coaching: "Deload is training. Recover hard so the next block can be powerful."
    },
    {
      id: "program_w5",
      title: "Week 5 · Peak Block 1",
      category: "7-Week Program",
      minutes: 75,
      source: PROGRAM_SOURCE,
      summary: "Max barbell strength, complex plyos, and game-speed reaction.",
      setup: "Gym + court. Use stronger loads but keep safe, technical reps.",
      details: [
        "Mon: Max lower strength. Squat, deadlift, front squat, Nordic curl, drop jump to max vertical, lateral bound to sprint, block-to-transition drill.",
        "Tue: Upper max + shoulder health. Bench, row, pull-up/TRX row, landmine press, face pull + external rotation, arm swing and hit live reps.",
        "Wed: Recovery + mobility. Foam roll, deep yoga, PNF stretching, visualization session.",
        "Thu: Vertical peak + core. Track approach jump PR, weighted jump squat, single-leg depth jump, TRX pike + rotation, landmine rotation, attack-pattern sequence.",
        "Fri: Game-speed everything. 10-yard and 40-yard timed work, random direction sprints, volleyball-specific reactive calls, competitive game simulation.",
        "Sat/Sun: Optional skill or rest."
      ],
      coaching: "Power needs quality. Do not chase load if jump speed or mechanics drop."
    },
    {
      id: "program_w6",
      title: "Week 6 · Peak Block 2",
      category: "7-Week Program",
      minutes: 75,
      source: PROGRAM_SOURCE,
      summary: "Sport integration, barbell complex training, and max power output.",
      setup: "Gym + court. Pair strength with explosive movement.",
      details: [
        "Mon: Complex strength-power. Squat then box jump, RDL then broad jump, single-leg squat to box, Nordic curl, dig-to-set-to-hit chain.",
        "Tue: Upper complex + speed. Bench then plyo push-up, row then med ball slam, pull-up then explosive TRX row, reaction ball wall drill, setter-hitter timing.",
        "Wed: Deep recovery. Contrast therapy if available, foam roll/lacrosse ball, yoga mobility, breathwork.",
        "Thu: Vertical + quickness peak. Max jumps, approach jumps, quick feet + lateral burst, bound + sprint combo, live scrimmage movement reads.",
        "Fri: Speed test + skills. 10-yard dash, vertical jump, pro agility, full game all positions.",
        "Sat/Sun: Active recovery and full rest."
      ],
      coaching: "Complex work should feel explosive, not sloppy."
    },
    {
      id: "program_w7",
      title: "Week 7 · Peak Expression",
      category: "7-Week Program",
      minutes: 60,
      source: PROGRAM_SOURCE,
      summary: "Show what was built. Fresh, sharp, explosive, and ready for final benchmarks.",
      setup: "Low volume, max intent. Keep athletes fresh.",
      details: [
        "Mon: Power refresh. Light squat/bench, max box jump, broad jump, approach jump PR attempt, high-energy skill reps.",
        "Tue: Upper + reaction refresh. Pull-ups, med ball chest pass, ball drop reaction, sprint starts, serve + receive flow.",
        "Wed: Mobility + mental prep. Full-body mobility, visualization/game-speed mental reps, light touch.",
        "Thu: Final benchmark day. Standing vertical, approach vertical, 10-yard dash, pro agility, showcase game scenarios.",
        "Fri: Active rest or fun scrimmage with no coaching pressure.",
        "Sat/Sun: Rest."
      ],
      coaching: "Fresh, sharp, explosive. Test what matters and celebrate the work."
    },
    {
      id: "program_nutrition",
      title: "7-Week Nutrition & Hydration Guide",
      category: "7-Week Program",
      minutes: 10,
      source: PROGRAM_SOURCE,
      summary: "Simple athlete fueling reminders from the summer program.",
      setup: "Use as a quick team talk or handout reminder.",
      details: [
        "Focus on whole foods, lean proteins, colorful fruits, and vegetables.",
        "Use more carbs around training and fewer on rest days.",
        "Protein target: 0.7-0.9g per pound of bodyweight daily.",
        "Hydration target: minimum 80 oz water per day plus electrolytes on training days.",
        "Training-day hydration rhythm: 16 oz on waking, 16 oz before training, 6-8 oz every 20 minutes during training, 20-24 oz after training.",
        "Snack ideas: Greek yogurt with granola and honey, trail mix, sweet potato wedges, smoothie, hard-boiled eggs, hummus with pita, apple with cheese, cottage cheese with fruit."
      ],
      coaching: "No strict restrictions. Fuel the athlete and keep it simple."
    }
  ];

  function mentalCard(item) {
    return `
      <div class="library-card extra-library-card">
        <div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.summary)}</p>
          <div class="card-meta">
            ${esc(item.category)} · ${item.minutes} min ·
            <button class="card-link" data-open-extra-block="${esc(item.id)}" data-extra-type="mental-edge">Open</button>
          </div>
        </div>

        <div class="card-actions">
          <button class="icon-btn" data-add-extra-block="${esc(item.id)}" data-extra-type="mental-edge">＋</button>
        </div>
      </div>
    `;
  }

  function programCard(item) {
    return `
      <div class="library-card extra-library-card">
        <div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.summary)}</p>
          <div class="card-meta">
            ${esc(item.category)} · ${item.minutes} min ·
            <button class="card-link" data-open-extra-block="${esc(item.id)}" data-extra-type="summer-program">Open</button>
          </div>
        </div>

        <div class="card-actions">
          <button class="icon-btn" data-add-extra-block="${esc(item.id)}" data-extra-type="summer-program">＋</button>
        </div>
      </div>
    `;
  }

  function appendMentalEdge() {
    const container = document.getElementById("mentalLibrary");

    if (!container || document.getElementById("mentalEdgeSection")) return;

    const section = document.createElement("div");
    section.id = "mentalEdgeSection";
    section.className = "extra-section";

    section.innerHTML = `
      <div class="category-title">
        <span class="category-dot"></span>Mental Edge Sequence · 20 Exercises
      </div>

      <div class="info-card">
        <h3>The Mental Edge</h3>
        <p>Run these in order, one or two per practice, across the season. They build from presence and reset work into confidence, flow, resilience, communication, and team identity.</p>
      </div>

      ${MENTAL_EDGE.map(mentalCard).join("")}
    `;

    container.appendChild(section);
  }

  function appendSummerProgram() {
    const container = document.getElementById("scLibrary");

    if (!container || document.getElementById("sevenWeekProgramSection")) return;

    const section = document.createElement("div");
    section.id = "sevenWeekProgramSection";
    section.className = "extra-section";

    section.innerHTML = `
      <div class="category-title">
        <span class="category-dot"></span>7-Week Summer Program
      </div>

      <div class="info-card">
        <h3>RSHS 7-Week Total Athlete Program</h3>
        <p>Weekly training blocks for vertical, speed, reaction, strength, flexibility, recovery, and athlete fueling.</p>
      </div>

      ${SUMMER_PROGRAM.map(programCard).join("")}
    `;

    container.appendChild(section);
  }

  function appendExtras() {
    appendMentalEdge();
    appendSummerProgram();
  }

  function findExtra(idValue, type) {
    if (type === "mental-edge") return MENTAL_EDGE.find(item => item.id === idValue);
    if (type === "summer-program") return SUMMER_PROGRAM.find(item => item.id === idValue);
    return null;
  }

  function injectExtraStyles() {
    if (document.getElementById("plannerExtrasStyle")) return;

    const style = document.createElement("style");
    style.id = "plannerExtrasStyle";

    style.textContent = `
      .extra-section {
        margin-top: 12px;
      }

      .extra-library-card {
        border-left: 4px solid var(--gold);
      }

      .extra-section .info-card {
        margin: 8px 0 10px;
      }
    `;

    document.head.appendChild(style);
  }

  document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-extra-block]");

    if (addButton) {
      const item = findExtra(addButton.dataset.addExtraBlock, addButton.dataset.extraType);
      if (!item) return;

      const blockType = addButton.dataset.extraType === "mental-edge" ? "mental" : "sc";
      safeAddBlock(blockFromItem(item, blockType));
      return;
    }

    const openButton = event.target.closest("[data-open-extra-block]");

    if (openButton) {
      const item = findExtra(openButton.dataset.openExtraBlock, openButton.dataset.extraType);
      if (!item) return;

      const blockType = openButton.dataset.extraType === "mental-edge" ? "mental" : "sc";
      openExtraDetails(item, blockType);
    }
  });

  const observer = new MutationObserver(() => appendExtras());

  function startExtras() {
    injectExtraStyles();
    appendExtras();

    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startExtras);
  } else {
    startExtras();
  }
})();