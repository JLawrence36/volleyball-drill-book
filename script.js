const STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V3";

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
    summary: "Teach a quick 4-count reset players can use between points.",
    details: [
      "Inhale for 4 counts.",
      "Hold for 2 counts.",
      "Exhale for 4 counts.",
      "Say a cue word like next, calm, or attack."
    ],
    coaching: "The goal is to give players a routine they can use after mistakes, missed serves, or pressure points."
  },
  {
    id: "mental_02",
    category: "Pressure",
    title: "3-Step Serve Routine",
    minutes: 5,
    summary: "Build a repeatable routine before every serve.",
    details: [
      "Step behind the line.",
      "Breathe and choose the target.",
      "Say the cue word and serve with confidence."
    ],
    coaching: "A routine gives the brain something to do so nerves do not fill the space."
  },
  {
    id: "mental_03",
    category: "Reset",
    title: "5-Second Reset",
    minutes: 4,
    summary: "Teach players to flush the last point and get ready for the next one.",
    details: [
      "Mistake happens.",
      "Player turns away from the net.",
      "One breath.",
      "Cue word.",
      "Eyes back to the court."
    ],
    coaching: "You can only play the ball in front of you. The last point is gone."
  },
  {
    id: "mental_04",
    category: "Confidence",
    title: "Cue Words & Reframes",
    minutes: 6,
    summary: "Players build simple phrases to use during pressure.",
    details: [
      "Ask each player to pick one cue word.",
      "Examples: tall, attack, calm, platform, next.",
      "Practice saying it before pressure reps.",
      "Use it during serving or serve receive."
    ],
    coaching: "Players are always talking to themselves. Make it sound like a teammate, not a critic."
  },
  {
    id: "mental_05",
    category: "Team",
    title: "Next-Ball Huddle",
    minutes: 5,
    summary: "Create a team habit after mistakes.",
    details: [
      "After an error, nearest players come together fast.",
      "Use one short phrase: next ball.",
      "No blame, no lecture.",
      "Reset and get back into position."
    ],
    coaching: "The best teams recover fast. Body language after errors matters."
  },
  {
    id: "mental_06",
    category: "Pressure",
    title: "Pressure Point Simulation",
    minutes: 10,
    summary: "Start drills at pressure scores so players get used to late-set stress.",
    details: [
      "Start at 23-23, 24-24, or down 22-24.",
      "Require a serve, pass, or sideout goal.",
      "Replay the scenario several times.",
      "Debrief decision-making after each round."
    ],
    coaching: "Pressure gets easier when players have already practiced the moment."
  }
];

const SC_BLOCKS = [
  {
    id: "sc_01",
    category: "Warmup",
    title: "Dynamic Warmup",
    minutes: 10,
    summary: "Prepare hips, ankles, shoulders, and core before volleyball work.",
    details: [
      "Jog or shuffle for 2 minutes.",
      "High knees, butt kicks, and skips.",
      "Walking lunges and leg swings.",
      "Arm circles, band pull-aparts, and shoulder mobility."
    ],
    coaching: "Warmup should raise temperature, open joints, and prepare players to jump and change direction."
  },
  {
    id: "sc_02",
    category: "Agility",
    title: "Court Agility Block",
    minutes: 12,
    summary: "Short movement reps for volleyball footwork and change of direction.",
    details: [
      "Shuffle to the sideline and back.",
      "Drop step and sprint.",
      "Three-cone reaction shuffle.",
      "Finish with court-line mirror movement."
    ],
    coaching: "Quality matters more than exhaustion. Players should move low, balanced, and fast."
  },
  {
    id: "sc_03",
    category: "Speed",
    title: "First-Step Speed",
    minutes: 10,
    summary: "Train explosive first movement to the ball.",
    details: [
      "Start in ready position.",
      "Coach points or calls a direction.",
      "Player explodes for 3-5 steps.",
      "Reset and repeat."
    ],
    coaching: "Volleyball speed is mostly reaction and first-step quickness."
  },
  {
    id: "sc_04",
    category: "Vertical",
    title: "Jump Mechanics",
    minutes: 12,
    summary: "Improve jump technique and safe landing.",
    details: [
      "Arm swing jumps.",
      "Approach jumps without ball.",
      "Block jumps with soft landing.",
      "Stick the landing for balance."
    ],
    coaching: "Land softly with knees tracking over toes. Quality jumps beat sloppy volume."
  },
  {
    id: "sc_05",
    category: "Shoulder Care",
    title: "Shoulder Prehab",
    minutes: 8,
    summary: "Protect shoulders before or after high-volume hitting.",
    details: [
      "Band external rotations.",
      "Band pull-aparts.",
      "Scap pushups.",
      "Light Y-T-W raises."
    ],
    coaching: "Use this before hitting-heavy days and after tournaments."
  },
  {
    id: "sc_06",
    category: "Cooldown",
    title: "Cooldown & Stretch",
    minutes: 7,
    summary: "Bring the team down and close practice with recovery.",
    details: [
      "Light jog or walk.",
      "Hamstring, quad, calf, hip flexor stretch.",
      "Shoulder and chest stretch.",
      "One team takeaway before leaving."
    ],
    coaching: "Cooldown is a good time to reinforce the practice message."
  }
];

const PRACTICE_TEMPLATES = [
  {
    id: "template_90",
    title: "90-Minute Complete Practice",
    focus: "Full team practice: warmup, ball control, serve receive, attacking, and 6v6.",
    blocks: [
      { type: "sc", id: "sc_01", minutes: 10 },
      { type: "drill", number: "12", minutes: 15 },
      { type: "drill", number: "02", minutes: 15 },
      { type: "drill", number: "14", minutes: 12 },
      { type: "drill", number: "08", minutes: 15 },
      { type: "drill", number: "53", minutes: 18 },
      { type: "custom", title: "Team Talk / Wrap-Up", category: "Custom", minutes: 5, summary: "Review one win, one correction, and the next practice focus." }
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
    focus: "Serving accuracy, pressure serving, short serves, and serve-to-score mentality.",
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
      { type: "custom", title: "Serve Receive Rotation Review", category: "Custom", minutes: 5, summary: "Review rotations, seams, and game plan reminders." }
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

let drillSearch = "";
let activeCategory = "All";
let mentalFilter = "All";
let state = defaultState();

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

function makeId(prefix) {
  if (window.crypto && window.crypto.randomUUID) {
    return `${prefix}_${window.crypto.randomUUID()}`;
  }

  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function $(id) {
  return document.getElementById(id);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const fresh = defaultState();
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    state = fresh;
    return;
  }

  try {
    const parsed = JSON.parse(saved);

    state = {
      ...fresh,
      ...parsed,
      currentPractice: {
        ...fresh.currentPractice,
        ...(parsed.currentPractice || {})
      }
    };
  } catch {
    state = fresh;
  }

  if (!state.currentPractice) state.currentPractice = fresh.currentPractice;
  if (!Array.isArray(state.currentPractice.blocks)) state.currentPractice.blocks = [];
  if (!Array.isArray(state.roster)) state.roster = [];
  if (!Array.isArray(state.savedPractices)) state.savedPractices = [];
  if (!Array.isArray(state.favoriteDrills)) state.favoriteDrills = [];

  state.favoriteDrills = [...new Set(state.favoriteDrills)];

  if (!state.currentPractice.id) state.currentPractice.id = makeId("practice");
  if (!state.currentPractice.date) state.currentPractice.date = today();
  if (!state.activeTab) state.activeTab = "plan";
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
  return state.currentPractice.blocks.reduce((sum, block) => {
    return sum + (Number(block.minutes) || 0);
  }, 0);
}

function switchTab(tabName) {
  const validTabs = ["plan", "drills", "mental", "sc", "roster", "saved"];

  if (!validTabs.includes(tabName)) {
    tabName = "plan";
  }

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

function isFavoriteDrill(id) {
  return Array.isArray(state.favoriteDrills) && state.favoriteDrills.includes(id);
}

function toggleFavoriteDrill(id) {
  if (!id) return;

  if (!Array.isArray(state.favoriteDrills)) {
    state.favoriteDrills = [];
  }

  if (isFavoriteDrill(id)) {
    state.favoriteDrills = state.favoriteDrills.filter(drillId => drillId !== id);
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

function buildBlockFromLibrary(item, type) {
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

function addBlock(block) {
  state.currentPractice.blocks.push(block);
  saveState();
  switchTab("plan");
}

function removeBlock(id) {
  state.currentPractice.blocks = state.currentPractice.blocks.filter(block => block.id !== id);
  saveState();
  renderAll();
}

function moveBlock(id, direction) {
  const blocks = state.currentPractice.blocks;
  const index = blocks.findIndex(block => block.id === id);

  if (index < 0) return;

  const nextIndex = index + direction;

  if (nextIndex < 0 || nextIndex >= blocks.length) return;

  [blocks[index], blocks[nextIndex]] = [blocks[nextIndex], blocks[index]];

  saveState();
  renderAll();
}

function duplicateBlock(id) {
  const block = state.currentPractice.blocks.find(item => item.id === id);

  if (!block) return;

  const copy = {
    ...JSON.parse(JSON.stringify(block)),
    id: makeId("block"),
    title: `${block.title} Copy`
  };

  state.currentPractice.blocks.push(copy);
  saveState();
  renderAll();
}

function updateBlockMinutes(id, value) {
  const block = state.currentPractice.blocks.find(item => item.id === id);

  if (!block) return;

  const minutes = Math.max(1, Number(value) || 1);
  block.minutes = minutes;

  if ($("totalMinutes")) {
    $("totalMinutes").textContent = `${totalMinutes()}m`;
  }

  saveState();
}

function updateBlockNotes(id, notes) {
  const block = state.currentPractice.blocks.find(item => item.id === id);

  if (!block) return;

  block.notes = notes;
  saveState();
}

function updatePracticeDetails() {
  if (!$("practiceTitle")) return;

  state.currentPractice.title = $("practiceTitle").value;
  state.currentPractice.date = $("practiceDate").value;
  state.currentPractice.team = $("practiceTeam").value;
  state.currentPractice.focus = $("practiceFocus").value;

  saveState();
}

function saveCurrentPractice() {
  const practice = JSON.parse(JSON.stringify(state.currentPractice));

  practice.id = practice.id || makeId("practice");
  practice.updatedAt = new Date().toISOString();

  if (!practice.title || !practice.title.trim()) {
    practice.title = "Untitled Practice";
  }

  const existingIndex = state.savedPractices.findIndex(item => item.id === practice.id);

  if (existingIndex >= 0) {
    state.savedPractices[existingIndex] = practice;
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

  const copy = {
    ...JSON.parse(JSON.stringify(practice)),
    id: makeId("practice"),
    title: `${practice.title || "Practice"} Copy`,
    updatedAt: new Date().toISOString()
  };

  state.savedPractices.unshift(copy);

  saveState();
  renderAll();
}

function deletePractice(id) {
  if (!confirm("Delete this saved practice?")) return;

  state.savedPractices = state.savedPractices.filter(item => item.id !== id);

  saveState();
  renderAll();
}

function addPlayer() {
  const input = $("playerNameInput");
  if (!input) return;

  const name = input.value.trim();

  if (!name) return;

  state.roster.push({
    id: makeId("player"),
    name,
    present: false
  });

  input.value = "";

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
  if (!confirm("Remove this player?")) return;

  state.roster = state.roster.filter(item => item.id !== id);

  saveState();
  renderRoster();
}

function findDrillByNumber(number) {
  const cleanNumber = String(number).padStart(2, "0");

  return DRILLS.find(drill => {
    return String(drill.number).padStart(2, "0") === cleanNumber;
  });
}

function buildTemplateBlock(templateBlock) {
  if (templateBlock.type === "drill") {
    const drill = findDrillByNumber(templateBlock.number);
    if (!drill) return null;

    const block = buildBlockFromDrill(drill);
    block.minutes = Number(templateBlock.minutes) || block.minutes;
    return block;
  }

  if (templateBlock.type === "mental") {
    const item = MENTAL_BLOCKS.find(block => block.id === templateBlock.id);
    if (!item) return null;

    const block = buildBlockFromLibrary(item, "mental");
    block.minutes = Number(templateBlock.minutes) || block.minutes;
    return block;
  }

  if (templateBlock.type === "sc") {
    const item = SC_BLOCKS.find(block => block.id === templateBlock.id);
    if (!item) return null;

    const block = buildBlockFromLibrary(item, "sc");
    block.minutes = Number(templateBlock.minutes) || block.minutes;
    return block;
  }

  if (templateBlock.type === "custom") {
    return {
      id: makeId("block"),
      type: "custom",
      title: templateBlock.title || "Custom Block",
      category: templateBlock.category || "Custom",
      minutes: Number(templateBlock.minutes) || 5,
      summary: templateBlock.summary || "",
      details: [],
      coaching: "",
      evaluate: "",
      notes: templateBlock.summary || "",
      sourceId: ""
    };
  }

  return null;
}

function templateMinutes(template) {
  return template.blocks.reduce((sum, block) => {
    return sum + (Number(block.minutes) || 0);
  }, 0);
}

function renderTemplates() {
  const list = $("templateList");
  if (!list) return;

  list.innerHTML = PRACTICE_TEMPLATES.map(template => {
    const minutes = templateMinutes(template);

    const blockPreview = template.blocks.map(block => {
      if (block.type === "drill") {
        const drill = findDrillByNumber(block.number);
        return drill ? drill.name : `Drill ${block.number}`;
      }

      if (block.type === "mental") {
        const item = MENTAL_BLOCKS.find(mental => mental.id === block.id);
        return item ? item.title : "Mental Block";
      }

      if (block.type === "sc") {
        const item = SC_BLOCKS.find(sc => sc.id === block.id);
        return item ? item.title : "S&C Block";
      }

      return block.title || "Custom Block";
    }).join(" · ");

    return `
      <div class="library-card template-card">
        <div>
          <h3>${escapeHtml(template.title)}</h3>
          <p>${escapeHtml(template.focus)}</p>

          <div class="card-meta">
            ${minutes} min · ${template.blocks.length} blocks
          </div>

          <div class="template-preview">
            ${escapeHtml(blockPreview)}
          </div>
        </div>

        <div class="card-actions">
          <button 
            type="button" 
            class="icon-btn" 
            data-load-template="${escapeHtml(template.id)}"
            title="Load template"
          >⚡</button>
        </div>
      </div>
    `;
  }).join("");
}

function openTemplateModal() {
  renderTemplates();

  const modal = $("templateModal");

  if (!modal) {
    alert("Template window is missing from index.html.");
    return;
  }

  modal.classList.remove("hidden");
}

function closeTemplateModal() {
  const modal = $("templateModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}

function loadTemplate(templateId) {
  const template = PRACTICE_TEMPLATES.find(item => item.id === templateId);

  if (!template) return;

  if (state.currentPractice.blocks.length > 0) {
    const replace = confirm("Load this template and replace the current practice blocks?");
    if (!replace) return;
  }

  const blocks = template.blocks
    .map(buildTemplateBlock)
    .filter(Boolean);

  state.currentPractice = {
    ...state.currentPractice,
    id: makeId("practice"),
    title: template.title,
    focus: template.focus,
    blocks
  };

  saveState();
  closeTemplateModal();
  switchTab("plan");
}

function openCustomModal() {
  if (!$("customModal")) return;

  $("customTitle").value = "";
  $("customMinutes").value = "";
  $("customNotes").value = "";
  $("customModal").classList.remove("hidden");
}

function closeCustomModal() {
  if ($("customModal")) {
    $("customModal").classList.add("hidden");
  }
}

function saveCustomBlock() {
  const title = $("customTitle").value.trim();
  const minutes = Number($("customMinutes").value) || 5;
  const notes = $("customNotes").value.trim();

  if (!title) {
    alert("Add a block title.");
    return;
  }

  addBlock({
    id: makeId("block"),
    type: "custom",
    title,
    category: "Custom",
    minutes,
    summary: notes,
    details: [],
    coaching: "",
    evaluate: "",
    notes,
    sourceId: ""
  });

  closeCustomModal();
}

function closeDetails() {
  if ($("detailsModal")) {
    $("detailsModal").classList.add("hidden");
  }
}

function openDetails(item, type) {
  if (!$("detailsContent") || !$("detailsModal")) return;

  let title = "";
  let meta = "";
  let summary = "";
  let details = [];
  let coaching = "";
  let evaluate = "";

  if (type === "drill") {
    title = `${item.number ? item.number + " " : ""}${item.name}`;
    meta = `${item.category} · ${item.players} · ${item.time} min · ${item.level} · ${item.skills}`;
    summary = item.purpose || "";
    details = Array.isArray(item.run) ? item.run : [];
    coaching = item.coaching || "";
    evaluate = item.evaluate || "";
  } else {
    title = item.title;
    meta = `${item.category} · ${item.minutes} min`;
    summary = item.summary || "";
    details = Array.isArray(item.details) ? item.details : [];
    coaching = item.coaching || "";
  }

  const detailsHtml = details.length
    ? `<ol>${details.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
    : `<p>No steps added yet.</p>`;

  $("detailsContent").innerHTML = `
    <h2 class="detail-title">${escapeHtml(title)}</h2>
    <div class="detail-meta">${escapeHtml(meta)}</div>

    <div class="detail-section">
      <h3>Purpose</h3>
      <p>${escapeHtml(summary)}</p>
    </div>

    <div class="detail-section">
      <h3>How to Run It</h3>
      ${detailsHtml}
    </div>

    ${coaching ? `
      <div class="detail-section">
        <h3>Coaching Points</h3>
        <p>${escapeHtml(coaching)}</p>
      </div>
    ` : ""}

    ${evaluate ? `
      <div class="detail-section">
        <h3>What to Evaluate</h3>
        <p>${escapeHtml(evaluate)}</p>
      </div>
    ` : ""}

    <div class="bottom-actions">
      <button class="btn dark" data-modal-add="${escapeHtml(item.id)}" data-modal-type="${escapeHtml(type)}">
        ＋ Add to Practice
      </button>
    </div>
  `;

  $("detailsModal").classList.remove("hidden");
}

function getSortedDrills(drills) {
  return [...drills].sort((a, b) => {
    const categoryA = CATEGORY_ORDER.indexOf(a.category);
    const categoryB = CATEGORY_ORDER.indexOf(b.category);

    const safeA = categoryA === -1 ? 999 : categoryA;
    const safeB = categoryB === -1 ? 999 : categoryB;

    if (safeA !== safeB) return safeA - safeB;

    return Number(a.number || 0) - Number(b.number || 0);
  });
}

function filteredDrills() {
  const query = drillSearch.toLowerCase().trim();

  return getSortedDrills(DRILLS).filter(drill => {
    const categoryMatch =
      activeCategory === "All" ||
      (activeCategory === "Favorites" && isFavoriteDrill(drill.id)) ||
      drill.category === activeCategory;

    const searchable = [
      drill.id,
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

    const searchMatch = !query || searchable.includes(query);

    return categoryMatch && searchMatch;
  });
}

function categoryIcon(category) {
  const icons = {
    "Favorites": "★",
    "Serving": "🎯",
    "Serve Receive": "🛡️",
    "Ball Control": "🏐",
    "Setting": "🤲",
    "Attacking": "💥",
    "Defense": "🧱",
    "Team Systems": "📋",
    "Competition": "🔥",
    "Warmup": "⚡"
  };

  return icons[category] || "🏐";
}

function categoryDescription(category) {
  const descriptions = {
    "Favorites": "Your go-to drills for fast practice building.",
    "Serving": "Targets, pressure serves, short serves, and serving strategy.",
    "Serve Receive": "Passing formations, seams, rotations, and first-ball control.",
    "Ball Control": "Pepper, control games, movement, and touch consistency.",
    "Setting": "Setter footwork, tempo, decision-making, and hitter connection.",
    "Attacking": "Approach work, shot control, quicks, pins, and scoring tools.",
    "Defense": "Reading hitters, digging, blocking, pursuit, and team defense.",
    "Team Systems": "Serve-pass-set-hit, transition, sideout, wash drills, and 6v6 work.",
    "Competition": "Pressure games, winners-stay formats, scoring, and live competition.",
    "Warmup": "Simple prep blocks to get the team moving."
  };

  return descriptions[category] || "Volleyball drills for practice planning.";
}

function renderCategoryCards() {
  const realCategories = CATEGORY_ORDER.filter(category => {
    return DRILLS.some(drill => drill.category === category);
  });

  const favoriteCount = state.favoriteDrills.length;

  const cards = [
    {
      category: "Favorites",
      count: favoriteCount,
      locked: favoriteCount === 0
    },
    ...realCategories.map(category => ({
      category,
      count: DRILLS.filter(drill => drill.category === category).length,
      locked: false
    }))
  ];

  return `
    <div class="category-dashboard">
      ${cards.map(card => `
        <button 
          type="button"
          class="category-card ${card.category === "Favorites" ? "favorite-card" : ""} ${card.locked ? "locked" : ""}" 
          data-category="${escapeHtml(card.category)}"
          ${card.locked ? "disabled" : ""}
        >
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

function renderPlan() {
  if (!$("practiceTitle")) return;

  const practice = state.currentPractice;

  $("practiceTitle").value = practice.title || "";
  $("practiceDate").value = practice.date || today();
  $("practiceTeam").value = practice.team || "";
  $("practiceFocus").value = practice.focus || "";
  $("totalMinutes").textContent = `${totalMinutes()}m`;

  const list = $("planList");
  const empty = $("emptyPlan");

  if (practice.blocks.length === 0) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.innerHTML = practice.blocks.map((block, index) => {
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
              <input 
                type="number" 
                min="1" 
                max="180" 
                value="${escapeHtml(block.minutes || 1)}" 
                data-block-minutes="${escapeHtml(block.id)}"
              />
            </div>
          </div>

          <div class="block-actions">
            <button type="button" class="icon-btn" data-move-up="${escapeHtml(block.id)}">↑</button>
            <button type="button" class="icon-btn" data-move-down="${escapeHtml(block.id)}">↓</button>
            <button type="button" class="icon-btn" data-duplicate-block="${escapeHtml(block.id)}">⧉</button>
            <button type="button" class="icon-btn danger" data-remove-block="${escapeHtml(block.id)}">×</button>
          </div>
        </div>

        <textarea class="block-notes" data-block-notes="${escapeHtml(block.id)}" placeholder="Coach notes for this block...">${escapeHtml(block.notes || "")}</textarea>
      </div>
    `;
  }).join("");
}

function renderCategories() {
  const categoryChips = $("categoryChips");
  if (!categoryChips) return;

  const realCategories = CATEGORY_ORDER.filter(category => DRILLS.some(drill => drill.category === category));
  const categories = ["All", "Favorites", ...realCategories];

  if (!categories.includes(activeCategory)) {
    activeCategory = "All";
  }

  categoryChips.innerHTML = categories.map(category => {
    const label = category === "Favorites"
      ? `★ Favorites (${state.favoriteDrills.length})`
      : category;

    return `
      <button class="chip ${activeCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}">
        ${escapeHtml(label)}
      </button>
    `;
  }).join("");
}

function renderDrills() {
  if (!$("drillLibrary")) return;

  renderCategories();

  const list = $("drillLibrary");
  const drills = filteredDrills();
  const searching = drillSearch.trim().length > 0;

  if ($("drillCountBadge")) {
    $("drillCountBadge").textContent = `${drills.length} drills`;
  }

  if (!DRILLS.length) {
    list.innerHTML = `
      <div class="empty-card small">
        <p>No drills loaded. Check that drills.js is still connected above script.js.</p>
      </div>
    `;
    return;
  }

  if (activeCategory === "All" && !searching) {
    list.innerHTML = renderCategoryCards();
    return;
  }

  if (!drills.length) {
    list.innerHTML = `
      <div class="empty-card small">
        <p>No drills found.</p>
      </div>
    `;
    return;
  }

  let html = "";

  if (activeCategory !== "All") {
    html += `
      <button type="button" class="back-card" data-category="All">
        ← Back to drill categories
      </button>
    `;
  }

  let lastCategory = "";

  drills.forEach(drill => {
    const favorite = isFavoriteDrill(drill.id);

    if ((searching || activeCategory === "All") && drill.category !== lastCategory) {
      lastCategory = drill.category;

      html += `
        <div class="category-title">
          <span class="category-dot"></span>
          ${escapeHtml(lastCategory)}
        </div>
      `;
    }

    html += `
      <div class="library-card">
        <div>
          <h3>${escapeHtml(drill.number ? drill.number + ". " + drill.name : drill.name)}</h3>
          <p>${escapeHtml(drill.purpose || "")}</p>

          <div class="card-meta">
            ${escapeHtml(drill.level || "All levels")} · 
            ${escapeHtml(drill.time || 10)} min · 
            ${escapeHtml(drill.players || "Any")} · 
            ${escapeHtml(drill.skills || "Volleyball")}
            · <button class="card-link" data-open-drill="${escapeHtml(drill.id)}">Details</button>
          </div>
        </div>

        <div class="card-actions">
          <button 
            type="button"
            class="icon-btn favorite-btn ${favorite ? "active" : ""}" 
            data-toggle-favorite="${escapeHtml(drill.id)}"
            aria-label="Favorite drill"
            title="Favorite drill"
          >${favorite ? "★" : "☆"}</button>

          <button 
            type="button"
            class="icon-btn" 
            data-add-drill="${escapeHtml(drill.id)}"
            aria-label="Add drill"
            title="Add drill"
          >＋</button>

          <button 
            type="button"
            class="icon-btn" 
            data-open-drill="${escapeHtml(drill.id)}"
            aria-label="Open drill details"
            title="Open drill details"
          >?</button>
        </div>
      </div>
    `;
  });

  list.innerHTML = html;
}

function renderMental() {
  if (!$("mentalLibrary")) return;

  $all("[data-mental-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.mentalFilter === mentalFilter);
  });

  const blocks = MENTAL_BLOCKS.filter(item => {
    return mentalFilter === "All" || item.category === mentalFilter;
  });

  $("mentalLibrary").innerHTML = blocks.map((item, index) => `
    <div class="library-card">
      <div>
        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>

        <div class="card-meta">
          ${escapeHtml(item.category)} · ${escapeHtml(item.minutes)} min
          · <button class="card-link" data-open-mental="${escapeHtml(item.id)}">Open session</button>
        </div>
      </div>

      <div class="card-actions">
        <button type="button" class="icon-btn" data-add-mental="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderSC() {
  if (!$("scLibrary")) return;

  $("scLibrary").innerHTML = SC_BLOCKS.map((item, index) => `
    <div class="library-card">
      <div>
        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>

        <div class="card-meta">
          ${escapeHtml(item.category)} · ${escapeHtml(item.minutes)} min
          · <button class="card-link" data-open-sc="${escapeHtml(item.id)}">Open block</button>
        </div>
      </div>

      <div class="card-actions">
        <button type="button" class="icon-btn" data-add-sc="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderRoster() {
  if (!$("rosterList")) return;

  const list = $("rosterList");
  const empty = $("emptyRoster");

  if (!state.roster.length) {
    list.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  list.innerHTML = state.roster.map(player => `
    <div class="roster-card ${player.present ? "present" : ""}">
      <div data-toggle-player="${escapeHtml(player.id)}">
        <div class="roster-name">${escapeHtml(player.name)}</div>
        <div class="roster-status">${player.present ? "Present" : "Tap to mark present"}</div>
      </div>

      <button type="button" class="icon-btn danger" data-delete-player="${escapeHtml(player.id)}">×</button>
    </div>
  `).join("");
}

function renderSaved() {
  if (!$("savedList")) return;

  const list = $("savedList");
  const empty = $("emptySaved");

  if (!state.savedPractices.length) {
    list.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  list.innerHTML = state.savedPractices.map(practice => {
    const blocks = Array.isArray(practice.blocks) ? practice.blocks : [];
    const minutes = blocks.reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);

    return `
      <div class="saved-card">
        <h3>${escapeHtml(practice.title || "Untitled Practice")}</h3>
        <p>${escapeHtml(formatDate(practice.date))} · ${minutes} min · ${blocks.length} blocks</p>

        <div class="saved-actions">
          <button type="button" class="btn dark" data-load-practice="${escapeHtml(practice.id)}">Load</button>
          <button type="button" class="btn light" data-dupe-practice="${escapeHtml(practice.id)}">Duplicate</button>
          <button type="button" class="btn danger" data-delete-practice="${escapeHtml(practice.id)}">Delete</button>
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

function backupData() {
  const backup = JSON.stringify(state, null, 2);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(backup).then(() => {
      alert("Backup copied to clipboard.");
    }).catch(() => {
      prompt("Copy this backup text:", backup);
    });
  } else {
    prompt("Copy this backup text:", backup);
  }
}

function restoreData() {
  const raw = $("restoreText") ? $("restoreText").value.trim() : "";

  if (!raw) {
    alert("Paste backup text first.");
    return;
  }

  try {
    const parsed = JSON.parse(raw);

    if (!parsed.currentPractice) {
      alert("That does not look like a valid backup.");
      return;
    }

    state = {
      ...defaultState(),
      ...parsed
    };

    if (!Array.isArray(state.roster)) state.roster = [];
    if (!Array.isArray(state.savedPractices)) state.savedPractices = [];
    if (!Array.isArray(state.favoriteDrills)) state.favoriteDrills = [];
    if (!Array.isArray(state.currentPractice.blocks)) state.currentPractice.blocks = [];

    saveState();
    renderAll();

    alert("Backup restored.");
  } catch {
    alert("Could not read that backup text.");
  }
}

function printPracticePlan() {
  const practice = state.currentPractice || {};
  const blocks = Array.isArray(practice.blocks) ? practice.blocks : [];

  const title = practice.title && practice.title.trim()
    ? practice.title.trim()
    : "Volleyball Practice";

  const date = practice.date ? formatDate(practice.date) : "";
  const team = practice.team && practice.team.trim() ? practice.team.trim() : "";
  const focus = practice.focus && practice.focus.trim() ? practice.focus.trim() : "";

  const total = blocks.reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);

  let runningMinute = 0;

  const blocksHtml = blocks.length
    ? blocks.map((block, index) => {
        const minutes = Number(block.minutes) || 0;
        const start = runningMinute;
        const end = runningMinute + minutes;
        runningMinute = end;

        const typeClass = ["drill", "mental", "sc", "custom"].includes(block.type)
          ? block.type
          : "drill";

        const steps = Array.isArray(block.details) && block.details.length
          ? `<ol>${block.details.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
          : "";

        return `
          <section class="practice-block ${typeClass}">
            <div class="block-head">
              <div class="block-number">${index + 1}</div>

              <div class="block-main">
                <h2>${escapeHtml(block.title)}</h2>
                <div class="block-meta">
                  <span>${start}–${end} min</span>
                  <span>${escapeHtml(block.minutes)} min</span>
                  <span>${escapeHtml(block.category || block.type || "Block")}</span>
                </div>
              </div>
            </div>

            ${block.summary ? `<p class="summary">${escapeHtml(block.summary)}</p>` : ""}

            ${steps ? `
              <div class="section">
                <h3>Run It</h3>
                ${steps}
              </div>
            ` : ""}

            ${block.coaching ? `
              <div class="section">
                <h3>Coaching Points</h3>
                <p>${escapeHtml(block.coaching)}</p>
              </div>
            ` : ""}

            ${block.evaluate ? `
              <div class="section">
                <h3>Evaluate</h3>
                <p>${escapeHtml(block.evaluate)}</p>
              </div>
            ` : ""}

            ${block.notes ? `
              <div class="section notes">
                <h3>Coach Notes</h3>
                <p>${escapeHtml(block.notes)}</p>
              </div>
            ` : ""}
          </section>
        `;
      }).join("")
    : `
      <section class="empty-print">
        <h2>No practice blocks added.</h2>
        <p>Add drills, mental blocks, S&C blocks, or custom notes before printing.</p>
      </section>
    `;

  const rosterHtml = state.roster.length
    ? state.roster.map(player => `
        <div class="player ${player.present ? "present" : ""}">
          <span>${player.present ? "✓" : "□"}</span>
          ${escapeHtml(player.name)}
        </div>
      `).join("")
    : `<p class="muted">No roster added.</p>`;

  const printHtml = `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(title)}</title>

      <style>
        @page { size: letter; margin: 0.45in; }
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #14212b;
          background: white;
        }

        .top-bar {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: start;
          border-bottom: 5px solid #153b56;
          padding-bottom: 16px;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: 34px;
          color: #153b56;
          line-height: 1.05;
        }

        .subtitle {
          margin-top: 8px;
          color: #607080;
          font-size: 14px;
          font-weight: 700;
        }

        .summary-box {
          border: 2px solid #153b56;
          border-radius: 14px;
          padding: 12px 14px;
          text-align: right;
          min-width: 150px;
        }

        .summary-box strong {
          display: block;
          font-size: 30px;
          color: #153b56;
        }

        .summary-box span {
          color: #607080;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 900;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }

        .info-card {
          border: 1px solid #d7e0e8;
          background: #f6f9fb;
          border-radius: 12px;
          padding: 10px;
          min-height: 58px;
        }

        .info-card span {
          display: block;
          color: #6f8193;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 900;
          margin-bottom: 4px;
        }

        .info-card strong {
          font-size: 15px;
          color: #14212b;
        }

        .practice-block {
          border: 1px solid #d7e0e8;
          border-left: 8px solid #153b56;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 12px;
          break-inside: avoid;
        }

        .practice-block.mental { border-left-color: #4f5fb8; }
        .practice-block.sc { border-left-color: #168995; }
        .practice-block.custom { border-left-color: #607d8b; }

        .block-head {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          align-items: start;
        }

        .block-number {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #153b56;
          color: white;
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 20px;
        }

        .practice-block.mental .block-number { background: #4f5fb8; }
        .practice-block.sc .block-number { background: #168995; }
        .practice-block.custom .block-number { background: #607d8b; }

        .block-main h2 {
          margin: 0 0 5px;
          font-size: 21px;
          color: #14212b;
        }

        .block-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          color: #607080;
          font-size: 12px;
          font-weight: 900;
        }

        .block-meta span {
          background: #edf3f7;
          border-radius: 999px;
          padding: 5px 8px;
        }

        .summary {
          margin: 12px 0 0;
          color: #304255;
          line-height: 1.35;
          font-size: 14px;
        }

        .section {
          margin-top: 12px;
          border-top: 1px solid #e4ebf0;
          padding-top: 10px;
        }

        .section h3 {
          margin: 0 0 6px;
          font-size: 13px;
          color: #153b56;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .section p,
        .section li {
          font-size: 13.5px;
          line-height: 1.35;
          color: #304255;
        }

        ol {
          margin: 0;
          padding-left: 20px;
        }

        .notes {
          background: #fff8ec;
          border-radius: 10px;
          border-top: 0;
          padding: 10px;
        }

        .roster-section {
          margin-top: 20px;
          border-top: 4px solid #153b56;
          padding-top: 14px;
          break-inside: avoid;
        }

        .roster-section h2 {
          margin: 0 0 10px;
          color: #153b56;
          font-size: 22px;
        }

        .roster-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .player {
          border: 1px solid #d7e0e8;
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 14px;
          font-weight: 800;
        }

        .player span {
          margin-right: 6px;
          color: #607080;
        }

        .player.present {
          background: #f0fdf4;
          border-color: #86efac;
        }

        .empty-print {
          border: 2px dashed #cbd5e1;
          border-radius: 14px;
          padding: 28px;
          text-align: center;
          color: #607080;
        }

        .muted {
          color: #607080;
        }

        .footer {
          margin-top: 18px;
          padding-top: 10px;
          border-top: 1px solid #d7e0e8;
          color: #8a9aab;
          font-size: 11px;
          text-align: center;
        }
      </style>
    </head>

    <body>
      <main class="sheet">
        <div class="top-bar">
          <div>
            <h1>${escapeHtml(title)}</h1>
            <div class="subtitle">Volleyball Practice Plan</div>
          </div>

          <div class="summary-box">
            <strong>${total}</strong>
            <span>Total Minutes</span>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-card">
            <span>Date</span>
            <strong>${escapeHtml(date || "Not set")}</strong>
          </div>

          <div class="info-card">
            <span>Team / Group</span>
            <strong>${escapeHtml(team || "Not set")}</strong>
          </div>

          <div class="info-card">
            <span>Practice Focus</span>
            <strong>${escapeHtml(focus || "Not set")}</strong>
          </div>
        </div>

        ${blocksHtml}

        <section class="roster-section">
          <h2>Attendance</h2>
          <div class="roster-grid">
            ${rosterHtml}
          </div>
        </section>

        <div class="footer">
          Built with Volleyball Practice Planner
        </div>
      </main>
    </body>
    </html>
  `;

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    window.print();
    return;
  }

  printWindow.document.open();
  printWindow.document.write(printHtml);
  printWindow.document.close();
  printWindow.focus();

  setTimeout(() => {
    printWindow.print();
  }, 350);
}

function initEvents() {
  $all(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  $all("[data-jump]").forEach(button => {
    button.addEventListener("click", () => {
      switchTab(button.dataset.jump);
    });
  });

  ["practiceTitle", "practiceDate", "practiceTeam", "practiceFocus"].forEach(id => {
    const element = $(id);
    if (element) {
      element.addEventListener("input", updatePracticeDetails);
    }
  });

  if ($("drillSearch")) {
    $("drillSearch").addEventListener("input", event => {
      drillSearch = event.target.value;
      renderDrills();
    });
  }

  if ($("addPlayerBtn")) {
    $("addPlayerBtn").addEventListener("click", addPlayer);
  }

  if ($("playerNameInput")) {
    $("playerNameInput").addEventListener("keydown", event => {
      if (event.key === "Enter") addPlayer();
    });
  }

  if ($("openTemplatesBtn")) {
    $("openTemplatesBtn").addEventListener("click", openTemplateModal);
  }

  if ($("closeTemplateBtn")) {
    $("closeTemplateBtn").addEventListener("click", closeTemplateModal);
  }

  if ($("templateModal")) {
    $("templateModal").addEventListener("click", event => {
      if (event.target.id === "templateModal") closeTemplateModal();
    });
  }

  if ($("addCustomBlockBtn")) {
    $("addCustomBlockBtn").addEventListener("click", openCustomModal);
  }

  if ($("closeCustomBtn")) {
    $("closeCustomBtn").addEventListener("click", closeCustomModal);
  }

  if ($("saveCustomBlockBtn")) {
    $("saveCustomBlockBtn").addEventListener("click", saveCustomBlock);
  }

  if ($("closeDetailsBtn")) {
    $("closeDetailsBtn").addEventListener("click", closeDetails);
  }

  if ($("detailsModal")) {
    $("detailsModal").addEventListener("click", event => {
      if (event.target.id === "detailsModal") closeDetails();
    });
  }

  if ($("customModal")) {
    $("customModal").addEventListener("click", event => {
      if (event.target.id === "customModal") closeCustomModal();
    });
  }

  if ($("savePracticeBtn")) {
    $("savePracticeBtn").addEventListener("click", saveCurrentPractice);
  }

  if ($("printPracticeBtn")) {
    $("printPracticeBtn").addEventListener("click", () => {
      printPracticePlan();
    });
  }

  if ($("backupBtn")) {
    $("backupBtn").addEventListener("click", backupData);
  }

  if ($("restoreBtn")) {
    $("restoreBtn").addEventListener("click", restoreData);
  }

  document.addEventListener("input", event => {
    const notesInput = event.target.closest("[data-block-notes]");
    const minutesInput = event.target.closest("[data-block-minutes]");

    if (notesInput) {
      updateBlockNotes(notesInput.dataset.blockNotes, notesInput.value);
    }

    if (minutesInput) {
      updateBlockMinutes(minutesInput.dataset.blockMinutes, minutesInput.value);
    }
  });

  document.addEventListener("click", event => {
    const templateBtn = event.target.closest("[data-load-template]");
    if (templateBtn) {
      event.preventDefault();
      event.stopPropagation();
      loadTemplate(templateBtn.dataset.loadTemplate);
      return;
    }

    const favoriteBtn = event.target.closest("[data-toggle-favorite]");
    if (favoriteBtn) {
      event.preventDefault();
      event.stopPropagation();
      toggleFavoriteDrill(favoriteBtn.dataset.toggleFavorite);
      return;
    }

    const categoryBtn = event.target.closest("[data-category]");
    if (categoryBtn) {
      event.preventDefault();
      activeCategory = categoryBtn.dataset.category || "All";
      renderDrills();
      return;
    }

    const mentalBtn = event.target.closest("[data-mental-filter]");
    if (mentalBtn) {
      event.preventDefault();
      mentalFilter = mentalBtn.dataset.mentalFilter || "All";
      renderMental();
      return;
    }

    const addDrillBtn = event.target.closest("[data-add-drill]");
    if (addDrillBtn) {
      event.preventDefault();
      const drill = DRILLS.find(item => item.id === addDrillBtn.dataset.addDrill);
      if (drill) addBlock(buildBlockFromDrill(drill));
      return;
    }

    const openDrillBtn = event.target.closest("[data-open-drill]");
    if (openDrillBtn) {
      event.preventDefault();
      const drill = DRILLS.find(item => item.id === openDrillBtn.dataset.openDrill);
      if (drill) openDetails(drill, "drill");
      return;
    }

    const addMentalBtn = event.target.closest("[data-add-mental]");
    if (addMentalBtn) {
      event.preventDefault();
      const item = MENTAL_BLOCKS.find(block => block.id === addMentalBtn.dataset.addMental);
      if (item) addBlock(buildBlockFromLibrary(item, "mental"));
      return;
    }

    const openMentalBtn = event.target.closest("[data-open-mental]");
    if (openMentalBtn) {
      event.preventDefault();
      const item = MENTAL_BLOCKS.find(block => block.id === openMentalBtn.dataset.openMental);
      if (item) openDetails(item, "mental");
      return;
    }

    const addSCBtn = event.target.closest("[data-add-sc]");
    if (addSCBtn) {
      event.preventDefault();
      const item = SC_BLOCKS.find(block => block.id === addSCBtn.dataset.addSc);
      if (item) addBlock(buildBlockFromLibrary(item, "sc"));
      return;
    }

    const openSCBtn = event.target.closest("[data-open-sc]");
    if (openSCBtn) {
      event.preventDefault();
      const item = SC_BLOCKS.find(block => block.id === openSCBtn.dataset.openSc);
      if (item) openDetails(item, "sc");
      return;
    }

    const removeBlockBtn = event.target.closest("[data-remove-block]");
    if (removeBlockBtn) {
      event.preventDefault();
      removeBlock(removeBlockBtn.dataset.removeBlock);
      return;
    }

    const duplicateBlockBtn = event.target.closest("[data-duplicate-block]");
    if (duplicateBlockBtn) {
      event.preventDefault();
      duplicateBlock(duplicateBlockBtn.dataset.duplicateBlock);
      return;
    }

    const moveUpBtn = event.target.closest("[data-move-up]");
    if (moveUpBtn) {
      event.preventDefault();
      moveBlock(moveUpBtn.dataset.moveUp, -1);
      return;
    }

    const moveDownBtn = event.target.closest("[data-move-down]");
    if (moveDownBtn) {
      event.preventDefault();
      moveBlock(moveDownBtn.dataset.moveDown, 1);
      return;
    }

    const togglePlayerBtn = event.target.closest("[data-toggle-player]");
    if (togglePlayerBtn) {
      event.preventDefault();
      togglePlayer(togglePlayerBtn.dataset.togglePlayer);
      return;
    }

    const deletePlayerBtn = event.target.closest("[data-delete-player]");
    if (deletePlayerBtn) {
      event.preventDefault();
      deletePlayer(deletePlayerBtn.dataset.deletePlayer);
      return;
    }

    const loadPracticeBtn = event.target.closest("[data-load-practice]");
    if (loadPracticeBtn) {
      event.preventDefault();
      loadPractice(loadPracticeBtn.dataset.loadPractice);
      return;
    }

    const dupePracticeBtn = event.target.closest("[data-dupe-practice]");
    if (dupePracticeBtn) {
      event.preventDefault();
      duplicatePractice(dupePracticeBtn.dataset.dupePractice);
      return;
    }

    const deletePracticeBtn = event.target.closest("[data-delete-practice]");
    if (deletePracticeBtn) {
      event.preventDefault();
      deletePractice(deletePracticeBtn.dataset.deletePractice);
      return;
    }

    const modalAddBtn = event.target.closest("[data-modal-add]");
    if (modalAddBtn) {
      event.preventDefault();

      const type = modalAddBtn.dataset.modalType;
      const id = modalAddBtn.dataset.modalAdd;

      if (type === "drill") {
        const drill = DRILLS.find(item => item.id === id);
        if (drill) addBlock(buildBlockFromDrill(drill));
      }

      if (type === "mental") {
        const item = MENTAL_BLOCKS.find(block => block.id === id);
        if (item) addBlock(buildBlockFromLibrary(item, "mental"));
      }

      if (type === "sc") {
        const item = SC_BLOCKS.find(block => block.id === id);
        if (item) addBlock(buildBlockFromLibrary(item, "sc"));
      }

      closeDetails();
    }
  });
}

loadState();
initEvents();
switchTab(state.activeTab || "plan");