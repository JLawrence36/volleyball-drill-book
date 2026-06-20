const STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V6";
const LEGACY_STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V5";
const OLDER_LEGACY_STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V4";

const BASE_DRILLS = Array.isArray(window.DRILL_DATABASE) ? [...window.DRILL_DATABASE] : [];
let DRILLS = [...BASE_DRILLS];

const CATEGORY_ORDER = [
  "Warmup",
  "Serving",
  "Serve Receive",
  "Ball Control",
  "Setting",
  "Attacking",
  "Defense",
  "Out of System",
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

function defaultPractice(teamName = "RISING SUN TIGERS") {
  return {
    id: makeId("practice"),
    title: "",
    date: today(),
    team: teamName,
    focus: "",
    blocks: []
  };
}

function defaultTeam(name = "RISING SUN TIGERS") {
  return {
    id: makeId("team"),
    name,
    currentPractice: defaultPractice(name),
    roster: [],
    savedPractices: []
  };
}

function defaultState() {
  const team = defaultTeam("RISING SUN TIGERS");

  return {
    activeTab: "plan",
    activeTeamId: team.id,
    teams: [team],
    favoriteDrills: [],
    customDrills: []
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

function normalizePractice(practice, teamName) {
  const fresh = defaultPractice(teamName);
  const safePractice = practice && typeof practice === "object" ? practice : {};

  return {
    ...fresh,
    ...safePractice,
    id: safePractice.id || fresh.id,
    date: safePractice.date || today(),
    team: safePractice.team || teamName,
    blocks: Array.isArray(safePractice.blocks) ? safePractice.blocks : []
  };
}

function normalizeTeam(team, fallbackName = "RISING SUN TIGERS") {
  const safeTeam = team && typeof team === "object" ? team : {};
  const name = String(safeTeam.name || fallbackName || "RISING SUN TIGERS").trim() || "RISING SUN TIGERS";

  return {
    id: safeTeam.id || makeId("team"),
    name,
    currentPractice: normalizePractice(safeTeam.currentPractice, name),
    roster: Array.isArray(safeTeam.roster) ? safeTeam.roster : [],
    savedPractices: Array.isArray(safeTeam.savedPractices) ? safeTeam.savedPractices : []
  };
}

function migrateLegacyState(legacyState) {
  const legacy = legacyState && typeof legacyState === "object" ? legacyState : {};
  const legacyPractice = legacy.currentPractice || {};
  const teamName = String(legacyPractice.team || "RISING SUN TIGERS").trim() || "RISING SUN TIGERS";

  const team = normalizeTeam({
    name: teamName,
    currentPractice: legacyPractice,
    roster: legacy.roster || [],
    savedPractices: legacy.savedPractices || []
  }, teamName);

  return {
    activeTab: legacy.activeTab || "plan",
    activeTeamId: team.id,
    teams: [team],
    favoriteDrills: Array.isArray(legacy.favoriteDrills) ? legacy.favoriteDrills : [],
    customDrills: Array.isArray(legacy.customDrills) ? legacy.customDrills : []
  };
}

function normalizeState(input) {
  if (input && Array.isArray(input.teams)) {
    const teams = input.teams.map((team, index) => normalizeTeam(team, index === 0 ? "RISING SUN TIGERS" : `Team ${index + 1}`));

    if (!teams.length) {
      return defaultState();
    }

    const activeTeamId = teams.some(team => team.id === input.activeTeamId)
      ? input.activeTeamId
      : teams[0].id;

    return {
      activeTab: input.activeTab || "plan",
      activeTeamId,
      teams,
      favoriteDrills: Array.isArray(input.favoriteDrills) ? input.favoriteDrills : [],
      customDrills: Array.isArray(input.customDrills) ? input.customDrills : []
    };
  }

  if (input && (input.currentPractice || input.roster || input.savedPractices)) {
    return migrateLegacyState(input);
  }

  return defaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const keys = [STORAGE_KEY, LEGACY_STORAGE_KEY, OLDER_LEGACY_STORAGE_KEY];

  for (const key of keys) {
    const saved = localStorage.getItem(key);

    if (saved) {
      try {
        state = normalizeState(JSON.parse(saved));
        saveState();
        return;
      } catch {
        // Try next key.
      }
    }
  }

  state = defaultState();
}

function syncCustomDrills() {
  const custom = Array.isArray(state.customDrills) ? state.customDrills : [];
  DRILLS = [...BASE_DRILLS, ...custom];
}

function activeTeam() {
  if (!Array.isArray(state.teams) || !state.teams.length) {
    const fresh = defaultState();
    state.teams = fresh.teams;
    state.activeTeamId = fresh.activeTeamId;
  }

  let team = state.teams.find(item => item.id === state.activeTeamId);

  if (!team) {
    team = state.teams[0];
    state.activeTeamId = team.id;
  }

  team.currentPractice = normalizePractice(team.currentPractice, team.name);
  if (!Array.isArray(team.roster)) team.roster = [];
  if (!Array.isArray(team.savedPractices)) team.savedPractices = [];

  return team;
}

function currentPractice() {
  return activeTeam().currentPractice;
}

function currentRoster() {
  return activeTeam().roster;
}

function currentSavedPractices() {
  return activeTeam().savedPractices;
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
  return currentPractice().blocks.reduce((sum, block) => {
    return sum + (Number(block.minutes) || 0);
  }, 0);
}

function renderTeamManager() {
  const team = activeTeam();
  const label = $("activeTeamLabel");
  const select = $("teamSelect");

  if (label) label.textContent = team.name;

  if (select) {
    select.innerHTML = state.teams.map(item => {
      return `<option value="${escapeHtml(item.id)}" ${item.id === team.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`;
    }).join("");
  }
}

function switchActiveTeam(id) {
  updatePracticeDetails();

  if (!state.teams.some(team => team.id === id)) return;

  state.activeTeamId = id;

  const team = activeTeam();
  if (!team.currentPractice.team) team.currentPractice.team = team.name;

  saveState();
  renderAll();
  switchTab("plan");
}

function addTeam() {
  const name = prompt("Team name:");
  if (!name || !name.trim()) return;

  const team = defaultTeam(name.trim());
  state.teams.push(team);
  state.activeTeamId = team.id;

  saveState();
  renderAll();
  switchTab("plan");
}

function renameTeam() {
  const team = activeTeam();
  const oldName = team.name;
  const name = prompt("Rename team:", oldName);

  if (!name || !name.trim()) return;

  const newName = name.trim();
  team.name = newName;

  if (!team.currentPractice.team || team.currentPractice.team === oldName) {
    team.currentPractice.team = newName;
  }

  team.savedPractices = team.savedPractices.map(practice => {
    if (!practice.team || practice.team === oldName) {
      return { ...practice, team: newName };
    }

    return practice;
  });

  saveState();
  renderAll();
}

function deleteTeam() {
  if (state.teams.length <= 1) {
    alert("You need at least one team.");
    return;
  }

  const team = activeTeam();
  const confirmed = confirm(`Delete ${team.name}? This removes that team's roster and saved practices from this device.`);

  if (!confirmed) return;

  state.teams = state.teams.filter(item => item.id !== team.id);
  state.activeTeamId = state.teams[0].id;

  saveState();
  renderAll();
  switchTab("plan");
}

function newPractice() {
  const team = activeTeam();

  if (team.currentPractice.blocks.length > 0) {
    const confirmed = confirm("Start a new blank practice? Save first if you want to keep the current one.");
    if (!confirmed) return;
  }

  team.currentPractice = defaultPractice(team.name);

  saveState();
  renderAll();
  switchTab("plan");
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

  return DRILLS.find(drill => {
    return String(drill.number).padStart(2, "0") === clean;
  });
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
    setup: drill.setup || "",
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
    setup: "",
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
    setup: "",
    coaching: "",
    evaluate: "",
    notes: notes || "",
    sourceId: ""
  };
}

function addBlock(block) {
  currentPractice().blocks.push(block);
  saveState();
  switchTab("plan");
}

function removeBlock(id) {
  const practice = currentPractice();
  practice.blocks = practice.blocks.filter(block => block.id !== id);

  saveState();
  renderPlan();
}

function moveBlock(id, amount) {
  const blocks = currentPractice().blocks;
  const index = blocks.findIndex(block => block.id === id);

  if (index < 0) return;

  const next = index + amount;

  if (next < 0 || next >= blocks.length) return;

  [blocks[index], blocks[next]] = [blocks[next], blocks[index]];

  saveState();
  renderPlan();
}

function duplicateBlock(id) {
  const practice = currentPractice();
  const block = practice.blocks.find(item => item.id === id);
  if (!block) return;

  const copy = JSON.parse(JSON.stringify(block));
  copy.id = makeId("block");
  copy.title = `${copy.title} Copy`;

  practice.blocks.push(copy);

  saveState();
  renderPlan();
}

function updatePracticeDetails() {
  const practice = currentPractice();

  practice.title = $("practiceTitle")?.value || "";
  practice.date = $("practiceDate")?.value || today();
  practice.team = $("practiceTeam")?.value || activeTeam().name;
  practice.focus = $("practiceFocus")?.value || "";

  saveState();
}

function saveCurrentPractice() {
  updatePracticeDetails();

  const team = activeTeam();
  const practice = JSON.parse(JSON.stringify(team.currentPractice));

  if (!practice.title.trim()) {
    practice.title = "Untitled Practice";
  }

  if (!practice.team) {
    practice.team = team.name;
  }

  practice.updatedAt = new Date().toISOString();

  const index = team.savedPractices.findIndex(item => item.id === practice.id);

  if (index >= 0) {
    team.savedPractices[index] = practice;
  } else {
    team.savedPractices.unshift(practice);
  }

  team.currentPractice = practice;

  saveState();
  renderAll();

  alert("Practice saved.");
}

function loadPractice(id) {
  const team = activeTeam();
  const practice = team.savedPractices.find(item => item.id === id);
  if (!practice) return;

  team.currentPractice = normalizePractice(JSON.parse(JSON.stringify(practice)), team.name);

  saveState();
  switchTab("plan");
}

function duplicatePractice(id) {
  const team = activeTeam();
  const practice = team.savedPractices.find(item => item.id === id);
  if (!practice) return;

  const copy = JSON.parse(JSON.stringify(practice));
  copy.id = makeId("practice");
  copy.title = `${copy.title || "Practice"} Copy`;
  copy.updatedAt = new Date().toISOString();

  team.savedPractices.unshift(copy);

  saveState();
  renderSaved();
}

function deletePractice(id) {
  if (!confirm("Delete this saved practice?")) return;

  const team = activeTeam();
  team.savedPractices = team.savedPractices.filter(item => item.id !== id);

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

  const team = activeTeam();
  const practice = team.currentPractice;

  if (practice.blocks.length > 0) {
    const replace = confirm("Load this template and replace the current practice blocks?");
    if (!replace) return;
  }

  team.currentPractice = {
    ...practice,
    id: makeId("practice"),
    title: template.title,
    team: team.name,
    focus: template.focus,
    blocks: template.blocks.map(buildTemplateBlock).filter(Boolean)
  };

  saveState();
  closeTemplateModal();
  switchTab("plan");
}

function renderPlan() {
  if (!$("planList")) return;

  const team = activeTeam();
  const practice = currentPractice();

  renderTeamManager();

  $("practiceTitle").value = practice.title || "";
  $("practiceDate").value = practice.date || today();
  $("practiceTeam").value = practice.team || team.name;
  $("practiceFocus").value = practice.focus || "";
  $("totalMinutes").textContent = `${totalMinutes()}m`;

  const blocks = practice.blocks;
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

  const categories = [
    "All",
    "Favorites",
    ...CATEGORY_ORDER.filter(category => DRILLS.some(drill => drill.category === category))
  ];

  $("categoryChips").innerHTML = categories.map(category => {
    const label = category === "Favorites"
      ? `★ Favorites (${state.favoriteDrills.length})`
      : category;

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
    "Out of System": "🌀",
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
    "Out of System": "Scramble plays, emergency setting, high balls, and broken-play recovery.",
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

    return String(a.number || "").localeCompare(String(b.number || ""), undefined, { numeric: true });
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
      drill.evaluate,
      drill.source
    ].join(" ").toLowerCase();

    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderCategoryCards() {
  const categories = CATEGORY_ORDER.filter(category => {
    return DRILLS.some(drill => drill.category === category);
  });

  const cards = [
    {
      category: "Favorites",
      count: state.favoriteDrills.length,
      locked: state.favoriteDrills.length === 0
    },
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
    list.innerHTML = `<div class="empty-card small"><p>No drills loaded. Check drills.js and drills-extra.js.</p></div>`;
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
            ${drill.custom ? " · Custom" : ""}
            · <button class="card-link" data-open-drill="${escapeHtml(drill.id)}">Details</button>
          </div>
        </div>

        <div class="card-actions">
          <button class="icon-btn favorite-btn ${favorite ? "active" : ""}" data-toggle-favorite="${escapeHtml(drill.id)}">${favorite ? "★" : "☆"}</button>
          <button class="icon-btn" data-add-drill="${escapeHtml(drill.id)}">＋</button>
          <button class="icon-btn" data-open-drill="${escapeHtml(drill.id)}">?</button>
          ${drill.custom ? `<button class="icon-btn danger" data-delete-custom-drill="${escapeHtml(drill.id)}">🗑</button>` : ""}
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

  const blocks = MENTAL_BLOCKS.filter(item => {
    return mentalFilter === "All" || item.category === mentalFilter;
  });

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

  const roster = currentRoster();
  const empty = $("emptyRoster");

  if (!roster.length) {
    $("rosterList").innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  $("rosterList").innerHTML = roster.map(player => `
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

  const savedPractices = currentSavedPractices();
  const empty = $("emptySaved");

  if (!savedPractices.length) {
    $("savedList").innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  $("savedList").innerHTML = savedPractices.map(practice => {
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
  syncCustomDrills();
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

function openCustomDrillModal() {
  $("customDrillName").value = "";
  $("customDrillCategory").value = "Serving";
  $("customDrillPlayers").value = "";
  $("customDrillTime").value = "";
  $("customDrillLevel").value = "Beginner";
  $("customDrillSkills").value = "";
  $("customDrillPurpose").value = "";
  $("customDrillSetup").value = "";
  $("customDrillRun").value = "";
  $("customDrillCoaching").value = "";
  $("customDrillEvaluate").value = "";

  $("customDrillModal").classList.remove("hidden");
}

function closeCustomDrillModal() {
  if ($("customDrillModal")) $("customDrillModal").classList.add("hidden");
}

function saveCustomDrill() {
  const name = $("customDrillName").value.trim();

  if (!name) {
    alert("Add a drill name.");
    return;
  }

  if (!Array.isArray(state.customDrills)) {
    state.customDrills = [];
  }

  const number = `C${String(state.customDrills.length + 1).padStart(3, "0")}`;

  const runSteps = $("customDrillRun").value
    .split("\n")
    .map(step => step.trim())
    .filter(Boolean);

  const newDrill = {
    id: makeId("custom_drill"),
    number,
    category: $("customDrillCategory").value,
    name,
    source: "Custom Coach Drill",
    players: $("customDrillPlayers").value.trim() || "Any",
    time: Number($("customDrillTime").value) || 10,
    level: $("customDrillLevel").value,
    skills: $("customDrillSkills").value.trim() || "Volleyball",
    purpose: $("customDrillPurpose").value.trim(),
    setup: $("customDrillSetup").value.trim(),
    run: runSteps,
    coaching: $("customDrillCoaching").value.trim(),
    evaluate: $("customDrillEvaluate").value.trim(),
    custom: true
  };

  state.customDrills.push(newDrill);
  syncCustomDrills();
  saveState();

  closeCustomDrillModal();

  activeCategory = newDrill.category;
  drillSearch = "";
  if ($("drillSearch")) $("drillSearch").value = "";

  renderAll();
  switchTab("drills");

  alert("Custom drill saved.");
}

function deleteCustomDrill(id) {
  if (!confirm("Delete this custom drill?")) return;

  state.customDrills = (state.customDrills || []).filter(drill => drill.id !== id);
  state.favoriteDrills = state.favoriteDrills.filter(item => item !== id);

  syncCustomDrills();
  saveState();
  renderAll();
}

function addPlayer() {
  const name = $("playerNameInput").value.trim();
  if (!name) return;

  currentRoster().push({
    id: makeId("player"),
    name,
    present: false
  });

  $("playerNameInput").value = "";

  saveState();
  renderRoster();
}

function togglePlayer(id) {
  const player = currentRoster().find(item => item.id === id);
  if (!player) return;

  player.present = !player.present;

  saveState();
  renderRoster();
}

function deletePlayer(id) {
  const team = activeTeam();
  team.roster = team.roster.filter(item => item.id !== id);

  saveState();
  renderRoster();
}

function openDetails(item, type) {
  if (!$("detailsModal") || !$("detailsContent")) return;

  const title = type === "drill" ? `${item.number}. ${item.name}` : item.title;
  const meta = type === "drill"
    ? `${item.category} · ${item.time} min · ${item.players}`
    : `${item.category} · ${item.minutes} min`;
  const summary = type === "drill" ? item.purpose : item.summary;
  const details = type === "drill" ? item.run : item.details;
  const coaching = item.coaching || "";
  const evaluate = item.evaluate || "";

  $("detailsContent").innerHTML = `
    <h2 class="detail-title">${escapeHtml(title)}</h2>
    <div class="detail-meta">${escapeHtml(meta)}${item.source ? ` · ${escapeHtml(item.source)}` : ""}</div>

    <div class="detail-section">
      <h3>Purpose</h3>
      <p>${escapeHtml(summary || "")}</p>
    </div>

    ${type === "drill" && item.setup ? `
      <div class="detail-section">
        <h3>Setup</h3>
        <p>${escapeHtml(item.setup)}</p>
      </div>
    ` : ""}

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
  const code = JSON.stringify(state, null, 2);
  $("restoreText").value = code;
  alert("Backup code created. Copy it or share it to move data to another device.");
}

async function copyBackupData() {
  const text = $("restoreText").value.trim() || JSON.stringify(state, null, 2);

  try {
    await navigator.clipboard.writeText(text);
    alert("Backup code copied.");
  } catch {
    $("restoreText").value = text;
    alert("Copy failed. The backup code is in the box so you can copy it manually.");
  }
}

async function shareBackupData() {
  const text = $("restoreText").value.trim() || JSON.stringify(state, null, 2);

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Volleyball Practice Planner Backup",
        text
      });
    } catch {
      // User cancelled share.
    }
  } else {
    $("restoreText").value = text;
    alert("Sharing is not supported on this device. The backup code is in the box so you can copy it.");
  }
}

function restoreData() {
  const raw = $("restoreText").value.trim();
  if (!raw) return;

  try {
    state = normalizeState(JSON.parse(raw));
    syncCustomDrills();
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

    const addTeamBtn = event.target.closest("#addTeamBtn");
    if (addTeamBtn) return addTeam();

    const renameTeamBtn = event.target.closest("#renameTeamBtn");
    if (renameTeamBtn) return renameTeam();

    const deleteTeamBtn = event.target.closest("#deleteTeamBtn");
    if (deleteTeamBtn) return deleteTeam();

    const newPracticeBtn = event.target.closest("#newPracticeBtn");
    if (newPracticeBtn) return newPractice();

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

    const mentalButton = event.target.closest("[data-mental-filter]");
    if (mentalButton) {
      mentalFilter = mentalButton.dataset.mentalFilter;
      return renderMental();
    }

    const customDrillOpen = event.target.closest("#openCustomDrillBtn");
    if (customDrillOpen) return openCustomDrillModal();

    const customDrillClose = event.target.closest("#closeCustomDrillBtn");
    if (customDrillClose) return closeCustomDrillModal();

    const customDrillSave = event.target.closest("#saveCustomDrillBtn");
    if (customDrillSave) return saveCustomDrill();

    const deleteCustomDrillBtn = event.target.closest("[data-delete-custom-drill]");
    if (deleteCustomDrillBtn) return deleteCustomDrill(deleteCustomDrillBtn.dataset.deleteCustomDrill);

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

    const copyBackupBtn = event.target.closest("#copyBackupBtn");
    if (copyBackupBtn) return copyBackupData();

    const shareBackupBtn = event.target.closest("#shareBackupBtn");
    if (shareBackupBtn) return shareBackupData();

    const restoreBtn = event.target.closest("#restoreBtn");
    if (restoreBtn) return restoreData();
  });

  document.addEventListener("change", event => {
    if (event.target.matches("#teamSelect")) {
      switchActiveTeam(event.target.value);
    }
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
      const block = currentPractice().blocks.find(item => {
        return item.id === event.target.dataset.blockMinutes;
      });

      if (block) {
        block.minutes = Math.max(1, Number(event.target.value) || 1);
        saveState();
        $("totalMinutes").textContent = `${totalMinutes()}m`;
      }
    }

    if (event.target.matches("[data-block-notes]")) {
      const block = currentPractice().blocks.find(item => {
        return item.id === event.target.dataset.blockNotes;
      });

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
      closeCustomDrillModal();
      closeDetails();
    }
  });

  document.addEventListener("click", event => {
    if (event.target.id === "templateModal") closeTemplateModal();
    if (event.target.id === "customModal") closeCustomModal();
    if (event.target.id === "customDrillModal") closeCustomDrillModal();
    if (event.target.id === "detailsModal") closeDetails();
  });
}

function initApp() {
  loadState();
  syncCustomDrills();
  bindEvents();
  renderAll();
  switchTab(state.activeTab || "plan");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}