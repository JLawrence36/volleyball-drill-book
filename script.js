const STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V4";

const DRILLS = Array.isArray(window.DRILL_DATABASE) ? window.DRILL_DATABASE : [];

const CATEGORY_ORDER = [
  "Warmup",
  "Serving",
  "Serve Receive",
  "Ball Control",
  "Setting",
  "Attacking",
  "Defense",
  "Team Systems",
  "Competition"
];

const MENTAL_BLOCKS = [
  {
    id: "mental_01",
    category: "Reset",
    title: "Breath Reset",
    minutes: 5,
    summary: "Quick reset players can use between points.",
    details: ["Inhale for 4 counts.", "Hold for 2 counts.", "Exhale for 4 counts.", "Say one cue word."],
    coaching: "Use this after mistakes, missed serves, or pressure points."
  },
  {
    id: "mental_02",
    category: "Pressure",
    title: "3-Step Serve Routine",
    minutes: 5,
    summary: "Build a repeatable routine before every serve.",
    details: ["Step behind the line.", "Breathe and choose the target.", "Say the cue word.", "Serve with confidence."],
    coaching: "A routine gives players something to control under pressure."
  },
  {
    id: "mental_03",
    category: "Reset",
    title: "5-Second Reset",
    minutes: 4,
    summary: "Flush the last point and prepare for the next ball.",
    details: ["Turn away from the net.", "Take one breath.", "Say next ball.", "Eyes back to the court."],
    coaching: "The last point is gone. Body language matters."
  },
  {
    id: "mental_04",
    category: "Confidence",
    title: "Cue Words",
    minutes: 6,
    summary: "Give players simple words to use under pressure.",
    details: ["Pick one cue word.", "Use it before pressure reps.", "Use it after mistakes.", "Use it during serve receive."],
    coaching: "Examples: tall, calm, attack, platform, next."
  },
  {
    id: "mental_05",
    category: "Team",
    title: "Next-Ball Huddle",
    minutes: 5,
    summary: "Build a team reset habit after errors.",
    details: ["Come together fast.", "Say next ball.", "No blame.", "Reset and play."],
    coaching: "Good teams recover quickly."
  },
  {
    id: "mental_06",
    category: "Pressure",
    title: "Pressure Point Simulation",
    minutes: 10,
    summary: "Practice late-set pressure situations.",
    details: ["Start at 23-23.", "Play the point live.", "Replay different situations.", "Debrief after each round."],
    coaching: "Pressure gets easier when players have already practiced it."
  }
];

const SC_BLOCKS = [
  {
    id: "sc_01",
    category: "Warmup",
    title: "Dynamic Warmup",
    minutes: 10,
    summary: "Prepare hips, ankles, shoulders, and core.",
    details: ["Jog or shuffle.", "High knees and butt kicks.", "Leg swings and lunges.", "Arm circles and shoulder mobility."],
    coaching: "Raise temperature and prepare players to jump and move."
  },
  {
    id: "sc_02",
    category: "Agility",
    title: "Court Agility Block",
    minutes: 12,
    summary: "Volleyball footwork and change of direction.",
    details: ["Shuffle to sideline and back.", "Drop step and sprint.", "Three-cone reaction shuffle.", "Mirror movement."],
    coaching: "Move low, balanced, and fast."
  },
  {
    id: "sc_03",
    category: "Speed",
    title: "First-Step Speed",
    minutes: 10,
    summary: "Train the first movement to the ball.",
    details: ["Start in ready position.", "Coach points direction.", "Explode 3-5 steps.", "Reset and repeat."],
    coaching: "Volleyball speed is reaction plus first step."
  },
  {
    id: "sc_04",
    category: "Vertical",
    title: "Jump Mechanics",
    minutes: 12,
    summary: "Improve jump technique and landing.",
    details: ["Arm swing jumps.", "Approach jumps.", "Block jumps.", "Stick the landing."],
    coaching: "Land softly with knees tracking over toes."
  },
  {
    id: "sc_05",
    category: "Shoulder Care",
    title: "Shoulder Prehab",
    minutes: 8,
    summary: "Protect shoulders before or after hitting volume.",
    details: ["Band external rotations.", "Band pull-aparts.", "Scap pushups.", "Light Y-T-W raises."],
    coaching: "Use before hitting-heavy days."
  },
  {
    id: "sc_06",
    category: "Cooldown",
    title: "Cooldown & Stretch",
    minutes: 7,
    summary: "Bring the team down and close practice.",
    details: ["Light walk.", "Hamstrings.", "Quads and calves.", "Shoulders and chest."],
    coaching: "Use cooldown to reinforce the practice message."
  }
];

const PRACTICE_TEMPLATES = [
  {
    id: "template_90",
    title: "90-Minute Complete Practice",
    focus: "Warmup, ball control, serve receive, attacking, and 6v6.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 10 },
      { type: "drill", number: "12", minutes: 15 },
      { type: "drill", number: "02", minutes: 15 },
      { type: "drill", number: "14", minutes: 12 },
      { type: "drill", number: "08", minutes: 15 },
      { type: "drill", number: "53", minutes: 18 },
      { type: "custom", title: "Team Talk / Wrap-Up", minutes: 5, summary: "Review one win, one correction, and the next focus." }
    ]
  },
  {
    id: "template_tryout",
    title: "Tryout Evaluation Practice",
    focus: "Evaluate serving, passing, setting, attacking, defense, effort, and communication.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 10 },
      { type: "drill", number: "12", minutes: 10 },
      { type: "drill", number: "06", minutes: 10 },
      { type: "drill", number: "29", minutes: 10 },
      { type: "drill", number: "05", minutes: 8 },
      { type: "drill", number: "62", minutes: 12 },
      { type: "drill", number: "19", minutes: 10 },
      { type: "drill", number: "80", minutes: 20 }
    ]
  },
  {
    id: "template_serving",
    title: "Serving Focus Practice",
    focus: "Serving accuracy, pressure serving, short serves, and serving strategy.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 8 },
      { type: "mental", id: "mental_02", minutes: 5 },
      { type: "drill", number: "06", minutes: 15 },
      { type: "drill", number: "20", minutes: 12 },
      { type: "drill", number: "25", minutes: 12 },
      { type: "drill", number: "26", minutes: 12 },
      { type: "drill", number: "68", minutes: 12 },
      { type: "drill", number: "02", minutes: 15 }
    ]
  },
  {
    id: "template_defense",
    title: "Defense Focus Practice",
    focus: "Reading hitters, digging to target, pursuit, and team defense.",
    blocks: [
      { type: "sc", id: "sc_02", minutes: 10 },
      { type: "drill", number: "01", minutes: 15 },
      { type: "drill", number: "10", minutes: 15 },
      { type: "drill", number: "16", minutes: 12 },
      { type: "drill", number: "43", minutes: 15 },
      { type: "drill", number: "65", minutes: 15 },
      { type: "drill", number: "76", minutes: 12 }
    ]
  },
  {
    id: "template_game_prep",
    title: "Game Prep Practice",
    focus: "Serve receive, sideout, transition, pressure points, and match readiness.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 8 },
      { type: "drill", number: "17", minutes: 18 },
      { type: "drill", number: "23", minutes: 18 },
      { type: "drill", number: "53", minutes: 20 },
      { type: "mental", id: "mental_06", minutes: 8 },
      { type: "drill", number: "79", minutes: 15 },
      { type: "custom", title: "Serve Receive Rotation Review", minutes: 5, summary: "Review rotations, seams, and game plan reminders." }
    ]
  },
  {
    id: "template_light",
    title: "Light Pre-Match Practice",
    focus: "Light movement, touch, confidence, serving rhythm, and clean team energy.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 8 },
      { type: "drill", number: "04", minutes: 8 },
      { type: "drill", number: "12", minutes: 10 },
      { type: "drill", number: "06", minutes: 10 },
      { type: "drill", number: "11", minutes: 10 },
      { type: "drill", number: "74", minutes: 10 },
      { type: "mental", id: "mental_01", minutes: 4 },
      { type: "sc", id: "sc_06", minutes: 5 }
    ]
  }
];

let state = defaultState();
let activeCategory = "All";
let drillSearch = "";
let mentalFilter = "All";

function $(id) {
  return document.getElementById(id);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function makeId(prefix) {
  if (window.crypto && window.crypto.randomUUID) {
    return `${prefix}_${window.crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function defaultState() {
  return {
    activeTab: "plan",
    currentPractice: {
      id: makeId("practice"),
      title: "",
      date: today(),
      team: "",
      focus: "",
      blocks: []
    },
    roster: [],
    savedPractices: [],
    favoriteDrills: []
  };
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    const fresh = defaultState();
    state = {
      ...fresh,
      ...parsed,
      currentPractice: {
        ...fresh.currentPractice,
        ...(parsed.currentPractice || {})
      }
    };
  } catch {
    state = defaultState();
  }

  if (!state.currentPractice) state.currentPractice = defaultState().currentPractice;
  if (!Array.isArray(state.currentPractice.blocks)) state.currentPractice.blocks = [];
  if (!Array.isArray(state.roster)) state.roster = [];
  if (!Array.isArray(state.savedPractices)) state.savedPractices = [];
  if (!Array.isArray(state.favoriteDrills)) state.favoriteDrills = [];
  if (!state.currentPractice.date) state.currentPractice.date = today();
}

function formatDate(value) {
  if (!value) return "";
  try {
    return new Date(value + "T00:00:00").toLocaleDateString();
  } catch {
    return value;
  }
}

function totalMinutes() {
  return state.currentPractice.blocks.reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);
}

function switchTab(tabName) {
  state.activeTab = tabName;

  $all(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  $all(".screen").forEach(screen => {
    screen.classList.toggle("active", screen.id === tabName);
  });

  saveState();
  renderAll();
}

function findDrillById(id) {
  return DRILLS.find(drill => drill.id === id);
}

function findDrillByNumber(number) {
  const clean = String(number).padStart(2, "0");
  return DRILLS.find(drill => String(drill.number).padStart(2, "0") === clean);
}

function isFavoriteDrill(id) {
  return state.favoriteDrills.includes(id);
}

function toggleFavorite(id) {
  if (!id) return;

  if (isFavoriteDrill(id)) {
    state.favoriteDrills = state.favoriteDrills.filter(item => item !== id);
  } else {
    state.favoriteDrills.push(id);
  }

  state.favoriteDrills = [...new Set(state.favoriteDrills)];
  saveState();
  renderDrills();
}

function buildBlockFromDrill(drill) {
  return {
    id: makeId("block"),
    type: "drill",
    title: drill.name,
    category: drill.category,
    minutes: Number(drill.time) || 10,
    summary: drill.purpose || "",
    details: Array.isArray(drill.run) ? drill.run : [],
    coaching: drill.coaching || "",
    evaluate: drill.evaluate || "",
    notes: "",
    sourceId: drill.id
  };
}

function buildLibraryBlock(item, type) {
  return {
    id: makeId("block"),
    type,
    title: item.title,
    category: item.category,
    minutes: Number(item.minutes) || 5,
    summary: item.summary || "",
    details: Array.isArray(item.details) ? item.details : [],
    coaching: item.coaching || "",
    evaluate: "",
    notes: "",
    sourceId: item.id
  };
}

function buildCustomBlock(title, minutes, notes) {
  return {
    id: makeId("block"),
    type: "custom",
    title,
    category: "Custom",
    minutes: Number(minutes) || 5,
    summary: notes || "",
    details: [],
    coaching: "",
    evaluate: "",
    notes: notes || "",
    sourceId: ""
  };
}

function addBlock(block) {
  state.currentPractice.blocks.push(block);
  saveState();
  switchTab("plan");
}

function removeBlock(id) {
  state.currentPractice.blocks = state.currentPractice.blocks.filter(block => block.id !== id);
  saveState();
  renderPlan();
}

function moveBlock(id, amount) {
  const blocks = state.currentPractice.blocks;
  const index = blocks.findIndex(block => block.id === id);
  if (index < 0) return;

  const next = index + amount;
  if (next < 0 || next >= blocks.length) return;

  [blocks[index], blocks[next]] = [blocks[next], blocks[index]];
  saveState();
  renderPlan();
}

function duplicateBlock(id) {
  const block = state.currentPractice.blocks.find(item => item.id === id);
  if (!block) return;

  const copy = JSON.parse(JSON.stringify(block));
  copy.id = makeId("block");
  copy.title = `${copy.title} Copy`;

  state.currentPractice.blocks.push(copy);
  saveState();
  renderPlan();
}

function updatePracticeDetails() {
  state.currentPractice.title = $("practiceTitle")?.value || "";
  state.currentPractice.date = $("practiceDate")?.value || today();
  state.currentPractice.team = $("practiceTeam")?.value || "";
  state.currentPractice.focus = $("practiceFocus")?.value || "";
  saveState();
}

function saveCurrentPractice() {
  const practice = JSON.parse(JSON.stringify(state.currentPractice));

  if (!practice.title.trim()) {
    practice.title = "Untitled Practice";
  }

  practice.updatedAt = new Date().toISOString();

  const index = state.savedPractices.findIndex(item => item.id === practice.id);
  if (index >= 0) {
    state.savedPractices[index] = practice;
  } else {
    state.savedPractices.unshift(practice);
  }

  state.currentPractice = practice;
  saveState();
  renderAll();
  alert("Practice saved.");
}

function loadPractice(id) {
  const practice = state.savedPractices.find(item => item.id === id);
  if (!practice) return;

  state.currentPractice = JSON.parse(JSON.stringify(practice));
  saveState();
  switchTab("plan");
}

function duplicatePractice(id) {
  const practice = state.savedPractices.find(item => item.id === id);
  if (!practice) return;

  const copy = JSON.parse(JSON.stringify(practice));
  copy.id = makeId("practice");
  copy.title = `${copy.title || "Practice"} Copy`;
  copy.updatedAt = new Date().toISOString();

  state.savedPractices.unshift(copy);
  saveState();
  renderSaved();
}

function deletePractice(id) {
  if (!confirm("Delete this saved practice?")) return;
  state.savedPractices = state.savedPractices.filter(item => item.id !== id);
  saveState();
  renderSaved();
}

function buildTemplateBlock(item) {
  if (item.type === "drill") {
    const drill = findDrillByNumber(item.number);
    if (!drill) return null;
    const block = buildBlockFromDrill(drill);
    block.minutes = item.minutes || block.minutes;
    return block;
  }

  if (item.type === "mental") {
    const mental = MENTAL_BLOCKS.find(block => block.id === item.id);
    if (!mental) return null;
    const block = buildLibraryBlock(mental, "mental");
    block.minutes = item.minutes || block.minutes;
    return block;
  }

  if (item.type === "sc") {
    const sc = SC_BLOCKS.find(block => block.id === item.id);
    if (!sc) return null;
    const block = buildLibraryBlock(sc, "sc");
    block.minutes = item.minutes || block.minutes;
    return block;
  }

  if (item.type === "custom") {
    return buildCustomBlock(item.title || "Custom Block", item.minutes || 5, item.summary || "");
  }

  return null;
}

function loadTemplate(id) {
  const template = PRACTICE_TEMPLATES.find(item => item.id === id);
  if (!template) return;

  if (state.currentPractice.blocks.length > 0) {
    const replace = confirm("Load this template and replace the current practice blocks?");
    if (!replace) return;
  }

  state.currentPractice = {
    ...state.currentPractice,
    id: makeId("practice"),
    title: template.title,
    focus: template.focus,
    blocks: template.blocks.map(buildTemplateBlock).filter(Boolean)
  };

  saveState();
  closeTemplateModal();
  switchTab("plan");
}

function renderPlan() {
  if (!$("planList")) return;

  $("practiceTitle").value = state.currentPractice.title || "";
  $("practiceDate").value = state.currentPractice.date || today();
  $("practiceTeam").value = state.currentPractice.team || "";
  $("practiceFocus").value = state.currentPractice.focus || "";
  $("totalMinutes").textContent = `${totalMinutes()}m`;

  const blocks = state.currentPractice.blocks;
  const list = $("planList");
  const empty = $("emptyPlan");

  if (!blocks.length) {
    list.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  list.innerHTML = blocks.map((block, index) => {
    const typeClass =
      block.type === "mental" ? "mental" :
      block.type === "sc" ? "sc" :
      block.type === "custom" ? "custom" :
      "";

    return `
      <div class="plan-block">
        <div class="plan-block-top">
          <div class="block-num ${typeClass}">${index + 1}</div>

          <div>
            <h3 class="block-title">${escapeHtml(block.title)}</h3>

            <div class="block-meta">
              ${escapeHtml(block.category || block.type)}
              ${block.summary ? `· ${escapeHtml(block.summary)}` : ""}
            </div>

            <div class="block-time-edit">
              <span>Minutes</span>
              <input type="number" min="1" max="180" value="${escapeHtml(block.minutes || 1)}" data-block-minutes="${escapeHtml(block.id)}" />
            </div>
          </div>

          <div class="block-actions">
            <button class="icon-btn" data-move-up="${escapeHtml(block.id)}">↑</button>
            <button class="icon-btn" data-move-down="${escapeHtml(block.id)}">↓</button>
            <button class="icon-btn" data-duplicate-block="${escapeHtml(block.id)}">⧉</button>
            <button class="icon-btn danger" data-remove-block="${escapeHtml(block.id)}">×</button>
          </div>
        </div>

        <textarea class="block-notes" data-block-notes="${escapeHtml(block.id)}" placeholder="Coach notes for this block...">${escapeHtml(block.notes || "")}</textarea>
      </div>
    `;
  }).join("");
}

function renderCategories() {
  if (!$("categoryChips")) return;

  const categories = ["All", "Favorites", ...CATEGORY_ORDER.filter(category => DRILLS.some(drill => drill.category === category))];

  $("categoryChips").innerHTML = categories.map(category => {
    const label = category === "Favorites" ? `★ Favorites (${state.favoriteDrills.length})` : category;
    return `<button class="chip ${activeCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(label)}</button>`;
  }).join("");
}

function categoryIcon(category) {
  return {
    Favorites: "★",
    Serving: "🎯",
    "Serve Receive": "🛡️",
    "Ball Control": "🏐",
    Setting: "🤲",
    Attacking: "💥",
    Defense: "🧱",
    "Team Systems": "📋",
    Competition: "🔥",
    Warmup: "⚡"
  }[category] || "🏐";
}

function categoryDescription(category) {
  return {
    Favorites: "Your go-to drills for fast practice building.",
    Serving: "Targets, pressure serves, short serves, and serving strategy.",
    "Serve Receive": "Passing formations, seams, rotations, and first-ball control.",
    "Ball Control": "Pepper, control games, movement, and touch consistency.",
    Setting: "Setter footwork, tempo, decision-making, and hitter connection.",
    Attacking: "Approach work, shot control, quicks, pins, and scoring tools.",
    Defense: "Reading hitters, digging, blocking, pursuit, and team defense.",
    "Team Systems": "Serve-pass-set-hit, transition, sideout, wash drills, and 6v6 work.",
    Competition: "Pressure games, winners-stay formats, scoring, and live competition.",
    Warmup: "Simple prep blocks to get the team moving."
  }[category] || "Volleyball drills.";
}

function sortedDrills() {
  return [...DRILLS].sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a.category);
    const cb = CATEGORY_ORDER.indexOf(b.category);
    const safeA = ca === -1 ? 999 : ca;
    const safeB = cb === -1 ? 999 : cb;
    if (safeA !== safeB) return safeA - safeB;
    return Number(a.number || 0) - Number(b.number || 0);
  });
}

function filteredDrills() {
  const query = drillSearch.toLowerCase().trim();

  return sortedDrills().filter(drill => {
    const categoryMatch =
      activeCategory === "All" ||
      drill.category === activeCategory ||
      (activeCategory === "Favorites" && isFavoriteDrill(drill.id));

    const searchable = [
      drill.number,
      drill.category,
      drill.name,
      drill.players,
      drill.time,
      drill.level,
      drill.skills,
      drill.purpose,
      drill.setup,
      Array.isArray(drill.run) ? drill.run.join(" ") : "",
      drill.coaching,
      drill.evaluate
    ].join(" ").toLowerCase();

    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderCategoryCards() {
  const categories = CATEGORY_ORDER.filter(category => DRILLS.some(drill => drill.category === category));
  const cards = [
    { category: "Favorites", count: state.favoriteDrills.length, locked: state.favoriteDrills.length === 0 },
    ...categories.map(category => ({
      category,
      count: DRILLS.filter(drill => drill.category === category).length,
      locked: false
    }))
  ];

  return `
    <div class="category-dashboard">
      ${cards.map(card => `
        <button class="category-card ${card.category === "Favorites" ? "favorite-card" : ""} ${card.locked ? "locked" : ""}" data-category="${escapeHtml(card.category)}" ${card.locked ? "disabled" : ""}>
          <div class="category-card-icon">${categoryIcon(card.category)}</div>
          <div class="category-card-body">
            <h3>${escapeHtml(card.category)}</h3>
            <p>${escapeHtml(categoryDescription(card.category))}</p>
            <span>${card.count} ${card.count === 1 ? "drill" : "drills"}</span>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function renderDrills() {
  if (!$("drillLibrary")) return;

  renderCategories();

  const list = $("drillLibrary");
  const drills = filteredDrills();
  const searching = drillSearch.trim().length > 0;

  $("drillCountBadge").textContent = `${drills.length} drills`;

  if (!DRILLS.length) {
    list.innerHTML = `<div class="empty-card small"><p>No drills loaded. Check drills.js.</p></div>`;
    return;
  }

  if (activeCategory === "All" && !searching) {
    list.innerHTML = renderCategoryCards();
    return;
  }

  if (!drills.length) {
    list.innerHTML = `<div class="empty-card small"><p>No drills found.</p></div>`;
    return;
  }

  let html = activeCategory !== "All"
    ? `<button class="back-card" data-category="All">← Back to drill categories</button>`
    : "";

  let lastCategory = "";

  drills.forEach(drill => {
    const favorite = isFavoriteDrill(drill.id);

    if ((searching || activeCategory === "All") && drill.category !== lastCategory) {
      lastCategory = drill.category;
      html += `<div class="category-title"><span class="category-dot"></span>${escapeHtml(lastCategory)}</div>`;
    }

    html += `
      <div class="library-card">
        <div>
          <h3>${escapeHtml(drill.number ? `${drill.number}. ${drill.name}` : drill.name)}</h3>
          <p>${escapeHtml(drill.purpose || "")}</p>
          <div class="card-meta">
            ${escapeHtml(drill.level || "All levels")} · ${escapeHtml(drill.time || 10)} min · ${escapeHtml(drill.players || "Any")} · ${escapeHtml(drill.skills || "Volleyball")}
            · <button class="card-link" data-open-drill="${escapeHtml(drill.id)}">Details</button>
          </div>
        </div>

        <div class="card-actions">
          <button class="icon-btn favorite-btn ${favorite ? "active" : ""}" data-toggle-favorite="${escapeHtml(drill.id)}">${favorite ? "★" : "☆"}</button>
          <button class="icon-btn" data-add-drill="${escapeHtml(drill.id)}">＋</button>
          <button class="icon-btn" data-open-drill="${escapeHtml(drill.id)}">?</button>
        </div>
      </div>
    `;
  });

  list.innerHTML = html;
}

function renderMental() {
  if (!$("mentalLibrary")) return;

  $all("[data-mental-filter]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mentalFilter === mentalFilter);
  });

  const blocks = MENTAL_BLOCKS.filter(item => mentalFilter === "All" || item.category === mentalFilter);

  $("mentalLibrary").innerHTML = blocks.map(item => `
    <div class="library-card">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="card-meta">${escapeHtml(item.category)} · ${item.minutes} min · <button class="card-link" data-open-mental="${escapeHtml(item.id)}">Open</button></div>
      </div>
      <div class="card-actions">
        <button class="icon-btn" data-add-mental="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderSC() {
  if (!$("scLibrary")) return;

  $("scLibrary").innerHTML = SC_BLOCKS.map(item => `
    <div class="library-card">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="card-meta">${escapeHtml(item.category)} · ${item.minutes} min · <button class="card-link" data-open-sc="${escapeHtml(item.id)}">Open</button></div>
      </div>
      <div class="card-actions">
        <button class="icon-btn" data-add-sc="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderRoster() {
  if (!$("rosterList")) return;

  const empty = $("emptyRoster");

  if (!state.roster.length) {
    $("rosterList").innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  $("rosterList").innerHTML = state.roster.map(player => `
    <div class="roster-card ${player.present ? "present" : ""}">
      <div data-toggle-player="${escapeHtml(player.id)}">
        <div class="roster-name">${escapeHtml(player.name)}</div>
        <div class="roster-status">${player.present ? "Present" : "Tap to mark present"}</div>
      </div>
      <button class="icon-btn danger" data-delete-player="${escapeHtml(player.id)}">×</button>
    </div>
  `).join("");
}

function renderSaved() {
  if (!$("savedList")) return;

  const empty = $("emptySaved");

  if (!state.savedPractices.length) {
    $("savedList").innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  $("savedList").innerHTML = state.savedPractices.map(practice => {
    const blocks = practice.blocks || [];
    const minutes = blocks.reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);

    return `
      <div class="saved-card">
        <h3>${escapeHtml(practice.title || "Untitled Practice")}</h3>
        <p>${escapeHtml(formatDate(practice.date))} · ${minutes} min · ${blocks.length} blocks</p>
        <div class="saved-actions">
          <button class="btn dark" data-load-practice="${escapeHtml(practice.id)}">Load</button>
          <button class="btn light" data-dupe-practice="${escapeHtml(practice.id)}">Duplicate</button>
          <button class="btn danger" data-delete-practice="${escapeHtml(practice.id)}">Delete</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderTemplates() {
  if (!$("templateList")) return;

  $("templateList").innerHTML = PRACTICE_TEMPLATES.map(template => {
    const minutes = template.blocks.reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);

    return `
      <div class="library-card template-card">
        <div>
          <h3>${escapeHtml(template.title)}</h3>
          <p>${escapeHtml(template.focus)}</p>
          <div class="card-meta">${minutes} min · ${template.blocks.length} blocks</div>
        </div>
        <div class="card-actions">
          <button class="icon-btn" data-load-template="${escapeHtml(template.id)}">⚡</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderAll() {
  renderPlan();
  renderDrills();
  renderMental();
  renderSC();
  renderRoster();
  renderSaved();
}

function openTemplateModal() {
  renderTemplates();
  $("templateModal").classList.remove("hidden");
}

function closeTemplateModal() {
  if ($("templateModal")) $("templateModal").classList.add("hidden");
}

function openCustomModal() {
  $("customTitle").value = "";
  $("customMinutes").value = "";
  $("customNotes").value = "";
  $("customModal").classList.remove("hidden");
}

function closeCustomModal() {
  if ($("customModal")) $("customModal").classList.add("hidden");
}

function saveCustomBlock() {
  const title = $("customTitle").value.trim();
  const minutes = Number($("customMinutes").value) || 5;
  const notes = $("customNotes").value.trim();

  if (!title) {
    alert("Add a block title.");
    return;
  }

  addBlock(buildCustomBlock(title, minutes, notes));
  closeCustomModal();
}

function addPlayer() {
  const name = $("playerNameInput").value.trim();
  if (!name) return;

  state.roster.push({ id: makeId("player"), name, present: false });
  $("playerNameInput").value = "";
  saveState();
  renderRoster();
}

function togglePlayer(id) {
  const player = state.roster.find(item => item.id === id);
  if (!player) return;
  player.present = !player.present;
  saveState();
  renderRoster();
}

function deletePlayer(id) {
  state.roster = state.roster.filter(item => item.id !== id);
  saveState();
  renderRoster();
}

function openDetails(item, type) {
  if (!$("detailsModal") || !$("detailsContent")) return;

  const title = type === "drill" ? `${item.number}. ${item.name}` : item.title;
  const meta = type === "drill" ? `${item.category} · ${item.time} min · ${item.players}` : `${item.category} · ${item.minutes} min`;
  const summary = type === "drill" ? item.purpose : item.summary;
  const details = type === "drill" ? item.run : item.details;
  const coaching = item.coaching || "";
  const evaluate = item.evaluate || "";

  $("detailsContent").innerHTML = `
    <h2 class="detail-title">${escapeHtml(title)}</h2>
    <div class="detail-meta">${escapeHtml(meta)}</div>

    <div class="detail-section">
      <h3>Purpose</h3>
      <p>${escapeHtml(summary || "")}</p>
    </div>

    <div class="detail-section">
      <h3>How to Run It</h3>
      <ol>${(details || []).map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    </div>

    ${coaching ? `<div class="detail-section"><h3>Coaching Points</h3><p>${escapeHtml(coaching)}</p></div>` : ""}
    ${evaluate ? `<div class="detail-section"><h3>Evaluate</h3><p>${escapeHtml(evaluate)}</p></div>` : ""}

    <div class="bottom-actions">
      <button class="btn dark" data-modal-add="${escapeHtml(item.id)}" data-modal-type="${escapeHtml(type)}">＋ Add to Practice</button>
    </div>
  `;

  $("detailsModal").classList.remove("hidden");
}

function closeDetails() {
  if ($("detailsModal")) $("detailsModal").classList.add("hidden");
}

function printPracticePlan() {
  window.print();
}

function backupData() {
  prompt("Copy this backup:", JSON.stringify(state, null, 2));
}

function restoreData() {
  const raw = $("restoreText").value.trim();
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    state = { ...defaultState(), ...parsed };

    if (!Array.isArray(state.currentPractice.blocks)) state.currentPractice.blocks = [];
    if (!Array.isArray(state.roster)) state.roster = [];
    if (!Array.isArray(state.savedPractices)) state.savedPractices = [];
    if (!Array.isArray(state.favoriteDrills)) state.favoriteDrills = [];

    saveState();
    renderAll();
    alert("Backup restored.");
  } catch {
    alert("Could not restore backup.");
  }
}

function bindEvents() {
  document.addEventListener("click", event => {
    const tab = event.target.closest("[data-tab]");
    if (tab) return switchTab(tab.dataset.tab);

    const jump = event.target.closest("[data-jump]");
    if (jump) return switchTab(jump.dataset.jump);

    const templateOpen = event.target.closest("#openTemplatesBtn, #openTemplatesBtnEmpty");
    if (templateOpen) return openTemplateModal();

    const templateClose = event.target.closest("#closeTemplateBtn");
    if (templateClose) return closeTemplateModal();

    const templateLoad = event.target.closest("[data-load-template]");
    if (templateLoad) return loadTemplate(templateLoad.dataset.loadTemplate);

    const category = event.target.closest("[data-category]");
    if (category && !category.disabled) {
      activeCategory = category.dataset.category;
      return renderDrills();
    }

    const fav = event.target.closest("[data-toggle-favorite]");
    if (fav) return toggleFavorite(fav.dataset.toggleFavorite);

    const addDrill = event.target.closest("[data-add-drill]");
    if (addDrill) {
      const drill = findDrillById(addDrill.dataset.addDrill);
      if (drill) addBlock(buildBlockFromDrill(drill));
      return;
    }

    const openDrill = event.target.closest("[data-open-drill]");
    if (openDrill) {
      const drill = findDrillById(openDrill.dataset.openDrill);
      if (drill) openDetails(drill, "drill");
      return;
    }

    const addMental = event.target.closest("[data-add-mental]");
    if (addMental) {
      const item = MENTAL_BLOCKS.find(block => block.id === addMental.dataset.addMental);
      if (item) addBlock(buildLibraryBlock(item, "mental"));
      return;
    }

    const openMental = event.target.closest("[data-open-mental]");
    if (openMental) {
      const item = MENTAL_BLOCKS.find(block => block.id === openMental.dataset.openMental);
      if (item) openDetails(item, "mental");
      return;
    }

    const addSc = event.target.closest("[data-add-sc]");
    if (addSc) {
      const item = SC_BLOCKS.find(block => block.id === addSc.dataset.addSc);
      if (item) addBlock(buildLibraryBlock(item, "sc"));
      return;
    }

    const openSc = event.target.closest("[data-open-sc]");
    if (openSc) {
      const item = SC_BLOCKS.find(block => block.id === openSc.dataset.openSc);
      if (item) openDetails(item, "sc");
      return;
    }

    const modalAdd = event.target.closest("[data-modal-add]");
    if (modalAdd) {
      const type = modalAdd.dataset.modalType;
      const id = modalAdd.dataset.modalAdd;

      if (type === "drill") {
        const drill = findDrillById(id);
        if (drill) addBlock(buildBlockFromDrill(drill));
      }

      if (type === "mental") {
        const item = MENTAL_BLOCKS.find(block => block.id === id);
        if (item) addBlock(buildLibraryBlock(item, "mental"));
      }

      if (type === "sc") {
        const item = SC_BLOCKS.find(block => block.id === id);
        if (item) addBlock(buildLibraryBlock(item, "sc"));
      }

      closeDetails();
      return;
    }

    const remove = event.target.closest("[data-remove-block]");
    if (remove) return removeBlock(remove.dataset.removeBlock);

    const up = event.target.closest("[data-move-up]");
    if (up) return moveBlock(up.dataset.moveUp, -1);

    const down = event.target.closest("[data-move-down]");
    if (down) return moveBlock(down.dataset.moveDown, 1);

    const duplicate = event.target.closest("[data-duplicate-block]");
    if (duplicate) return duplicateBlock(duplicate.dataset.duplicateBlock);

    const customOpen = event.target.closest("#addCustomBlockBtn, #addCustomBlockBtnEmpty");
    if (customOpen) return openCustomModal();

    const customClose = event.target.closest("#closeCustomBtn");
    if (customClose) return closeCustomModal();

    const customSave = event.target.closest("#saveCustomBlockBtn");
    if (customSave) return saveCustomBlock();

    const detailsClose = event.target.closest("#closeDetailsBtn");
    if (detailsClose) return closeDetails();

    const savePractice = event.target.closest("#savePracticeBtn");
    if (savePractice) return saveCurrentPractice();

    const printBtn = event.target.closest("#printPracticeBtn");
    if (printBtn) return printPracticePlan();

    const addPlayerBtn = event.target.closest("#addPlayerBtn");
    if (addPlayerBtn) return addPlayer();

    const togglePlayerBtn = event.target.closest("[data-toggle-player]");
    if (togglePlayerBtn) return togglePlayer(togglePlayerBtn.dataset.togglePlayer);

    const deletePlayerBtn = event.target.closest("[data-delete-player]");
    if (deletePlayerBtn) return deletePlayer(deletePlayerBtn.dataset.deletePlayer);

    const loadSaved = event.target.closest("[data-load-practice]");
    if (loadSaved) return loadPractice(loadSaved.dataset.loadPractice);

    const dupeSaved = event.target.closest("[data-dupe-practice]");
    if (dupeSaved) return duplicatePractice(dupeSaved.dataset.dupePractice);

    const deleteSaved = event.target.closest("[data-delete-practice]");
    if (deleteSaved) return deletePractice(deleteSaved.dataset.deletePractice);

    const backupBtn = event.target.closest("#backupBtn");
    if (backupBtn) return backupData();

    const restoreBtn = event.target.closest("#restoreBtn");
    if (restoreBtn) return restoreData();
  });

  document.addEventListener("input", event => {
    if (event.target.matches("#practiceTitle, #practiceDate, #practiceTeam, #practiceFocus")) {
      updatePracticeDetails();
    }

    if (event.target.matches("#drillSearch")) {
      drillSearch = event.target.value;
      renderDrills();
    }

    if (event.target.matches("[data-block-minutes]")) {
      const block = state.currentPractice.blocks.find(item => item.id === event.target.dataset.blockMinutes);
      if (block) {
        block.minutes = Math.max(1, Number(event.target.value) || 1);
        saveState();
        $("totalMinutes").textContent = `${totalMinutes()}m`;
      }
    }

    if (event.target.matches("[data-block-notes]")) {
      const block = state.currentPractice.blocks.find(item => item.id === event.target.dataset.blockNotes);
      if (block) {
        block.notes = event.target.value;
        saveState();
      }
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target.matches("#playerNameInput")) {
      addPlayer();
    }

    if (event.key === "Escape") {
      closeTemplateModal();
      closeCustomModal();
      closeDetails();
    }
  });

  document.addEventListener("click", event => {
    if (event.target.id === "templateModal") closeTemplateModal();
    if (event.target.id === "customModal") closeCustomModal();
    if (event.target.id === "detailsModal") closeDetails();
  });
}

function initApp() {
  loadState();
  bindEvents();
  renderAll();
  switchTab(state.activeTab || "plan");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}