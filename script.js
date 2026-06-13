const STORAGE_KEY = "VOLLEYBALL_PRACTICE_PLANNER_V2";

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

let state = {
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
  savedPractices: []
};

let drillSearch = "";
let activeCategory = "All";
let mentalFilter = "All";

function makeId(prefix) {
  if (window.crypto && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state = {
      ...state,
      ...parsed,
      currentPractice: {
        ...state.currentPractice,
        ...(parsed.currentPractice || {})
      }
    };
  } catch {
    saveState();
  }

  if (!Array.isArray(state.currentPractice.blocks)) state.currentPractice.blocks = [];
  if (!Array.isArray(state.roster)) state.roster = [];
  if (!Array.isArray(state.savedPractices)) state.savedPractices = [];
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

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.toggle("active", screen.id === tabName);
  });

  saveState();
  renderAll();
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
    details: item.details || [],
    coaching: item.coaching || "",
    evaluate: "",
    notes: "",
    sourceId: item.id
  };
}

function addBlock(block) {
  state.currentPractice.blocks.push(block);
  saveState();
  renderAll();
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

function updateBlockNotes(id, notes) {
  const block = state.currentPractice.blocks.find(item => item.id === id);
  if (!block) return;

  block.notes = notes;
  saveState();
}

function updatePracticeDetails() {
  state.currentPractice.title = document.getElementById("practiceTitle").value;
  state.currentPractice.date = document.getElementById("practiceDate").value;
  state.currentPractice.team = document.getElementById("practiceTeam").value;
  state.currentPractice.focus = document.getElementById("practiceFocus").value;
  saveState();
}

function saveCurrentPractice() {
  const practice = {
    ...JSON.parse(JSON.stringify(state.currentPractice)),
    id: state.currentPractice.id || makeId("practice"),
    updatedAt: new Date().toISOString()
  };

  if (!practice.title.trim()) {
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
  renderAll();
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

function newPractice() {
  if (!confirm("Start a new blank practice? Save this one first if you want to keep it.")) return;

  state.currentPractice = {
    id: makeId("practice"),
    title: "",
    date: today(),
    team: "",
    focus: "",
    blocks: []
  };

  saveState();
  renderAll();
  switchTab("plan");
}

function addPlayer() {
  const input = document.getElementById("playerNameInput");
  const name = input.value.trim();

  if (!name) return;

  state.roster.push({
    id: makeId("player"),
    name,
    present: false
  });

  input.value = "";
  saveState();
  renderAll();
}

function togglePlayer(id) {
  const player = state.roster.find(item => item.id === id);
  if (!player) return;

  player.present = !player.present;
  saveState();
  renderAll();
}

function deletePlayer(id) {
  if (!confirm("Remove this player?")) return;

  state.roster = state.roster.filter(item => item.id !== id);
  saveState();
  renderAll();
}

function openCustomModal() {
  document.getElementById("customTitle").value = "";
  document.getElementById("customMinutes").value = "";
  document.getElementById("customNotes").value = "";
  document.getElementById("customModal").classList.remove("hidden");
}

function closeCustomModal() {
  document.getElementById("customModal").classList.add("hidden");
}

function saveCustomBlock() {
  const title = document.getElementById("customTitle").value.trim();
  const minutes = Number(document.getElementById("customMinutes").value) || 5;
  const notes = document.getElementById("customNotes").value.trim();

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

function openDetails(item, type) {
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
    details = item.details || [];
    coaching = item.coaching || "";
  }

  const detailList = details.length
    ? `<ol>${details.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
    : `<p>No steps added yet.</p>`;

  document.getElementById("detailsContent").innerHTML = `
    <h2 class="detail-title">${escapeHtml(title)}</h2>
    <div class="detail-meta">${escapeHtml(meta)}</div>

    <div class="detail-section">
      <h3>Purpose</h3>
      <p>${escapeHtml(summary)}</p>
    </div>

    <div class="detail-section">
      <h3>How to Run It</h3>
      ${detailList}
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
      <button class="btn dark" data-modal-add="${escapeHtml(item.id)}" data-modal-type="${type}">＋ Add to Practice</button>
    </div>
  `;

  document.getElementById("detailsModal").classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("detailsModal").classList.add("hidden");
}

function renderPlan() {
  const practice = state.currentPractice;

  document.getElementById("practiceTitle").value = practice.title || "";
  document.getElementById("practiceDate").value = practice.date || today();
  document.getElementById("practiceTeam").value = practice.team || "";
  document.getElementById("practiceFocus").value = practice.focus || "";
  document.getElementById("totalMinutes").textContent = `${totalMinutes()}m`;

  const planList = document.getElementById("planList");
  const emptyPlan = document.getElementById("emptyPlan");

  if (practice.blocks.length === 0) {
    planList.innerHTML = "";
    emptyPlan.style.display = "block";
    return;
  }

  emptyPlan.style.display = "none";

  planList.innerHTML = practice.blocks.map((block, index) => {
    const typeClass = block.type === "mental" ? "mental" : block.type === "sc" ? "sc" : block.type === "custom" ? "custom" : "";

    return `
      <div class="plan-block">
        <div class="plan-block-top">
          <div class="block-num ${typeClass}">${index + 1}</div>

          <div>
            <h3 class="block-title">${escapeHtml(block.title)}</h3>
            <div class="block-meta">
              ${escapeHtml(block.category || block.type)} · ${escapeHtml(block.minutes)} min
              ${block.summary ? `· ${escapeHtml(block.summary)}` : ""}
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
  const categoryChips = document.getElementById("categoryChips");
  const categories = ["All", ...CATEGORY_ORDER.filter(category => DRILLS.some(drill => drill.category === category))];

  categoryChips.innerHTML = categories.map(category => `
    <button class="chip ${activeCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join("");
}

function filteredDrills() {
  const q = drillSearch.toLowerCase().trim();

  return DRILLS.filter(drill => {
    const categoryMatch = activeCategory === "All" || drill.category === activeCategory;

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

    const searchMatch = !q || searchable.includes(q);

    return categoryMatch && searchMatch;
  });
}

function renderDrills() {
  renderCategories();

  const list = document.getElementById("drillLibrary");
  const drills = filteredDrills();

  document.getElementById("drillCountBadge").textContent = `${drills.length} drills`;

  if (drills.length === 0) {
    list.innerHTML = `<div class="empty-card small"><p>No drills found.</p></div>`;
    return;
  }

  let html = "";
  let lastCategory = "";

  drills.forEach(drill => {
    if (drill.category !== lastCategory) {
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
          <h3>${escapeHtml(drill.name)}</h3>
          <p>${escapeHtml(drill.purpose)}</p>
          <div class="card-meta">
            ${escapeHtml(drill.level)} · ${escapeHtml(drill.time)} min · ${escapeHtml(drill.players)} · ${escapeHtml(drill.skills)}
            · <button class="card-link" data-open-drill="${escapeHtml(drill.id)}">Details</button>
          </div>
        </div>

        <div class="card-actions">
          <button class="icon-btn" data-add-drill="${escapeHtml(drill.id)}">＋</button>
          <button class="icon-btn" data-open-drill="${escapeHtml(drill.id)}">?</button>
        </div>
      </div>
    `;
  });

  list.innerHTML = html;
}

function renderMental() {
  const list = document.getElementById("mentalLibrary");

  const blocks = MENTAL_BLOCKS.filter(item => {
    return mentalFilter === "All" || item.category === mentalFilter;
  });

  list.innerHTML = blocks.map((item, index) => `
    <div class="library-card">
      <div>
        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="card-meta">
          ${escapeHtml(item.minutes)} min session ·
          <button class="card-link" data-open-mental="${escapeHtml(item.id)}">Open session</button>
        </div>
      </div>

      <div class="card-actions">
        <button class="icon-btn" data-add-mental="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderSC() {
  const list = document.getElementById("scLibrary");

  list.innerHTML = SC_BLOCKS.map((item, index) => `
    <div class="library-card">
      <div>
        <h3>${index + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="card-meta">
          ${escapeHtml(item.category)} · ${escapeHtml(item.minutes)} min
          · <button class="card-link" data-open-sc="${escapeHtml(item.id)}">Open drills</button>
        </div>
      </div>

      <div class="card-actions">
        <button class="icon-btn" data-add-sc="${escapeHtml(item.id)}">＋</button>
      </div>
    </div>
  `).join("");
}

function renderRoster() {
  const list = document.getElementById("rosterList");
  const empty = document.getElementById("emptyRoster");

  if (state.roster.length === 0) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.innerHTML = state.roster.map(player => `
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
  const list = document.getElementById("savedList");
  const empty = document.getElementById("emptySaved");

  if (state.savedPractices.length === 0) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.innerHTML = state.savedPractices.map(practice => {
    const minutes = (practice.blocks || []).reduce((sum, block) => sum + (Number(block.minutes) || 0), 0);

    return `
      <div class="saved-card">
        <h3>${escapeHtml(practice.title || "Untitled Practice")}</h3>
        <p>${escapeHtml(formatDate(practice.date))} · ${minutes} min · ${(practice.blocks || []).length} blocks</p>

        <div class="saved-actions">
          <button class="btn dark" data-load-practice="${escapeHtml(practice.id)}">Load</button>
          <button class="btn light" data-dupe-practice="${escapeHtml(practice.id)}">Duplicate</button>
          <button class="btn danger" data-delete-practice="${escapeHtml(practice.id)}">Delete</button>
        </div>
      </div>
    `;
  }).join("");
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
  const raw = document.getElementById("restoreText").value.trim();

  if (!raw) {
    alert("Paste backup text first.");
    return;
  }

  try {
    const parsed = JSON.parse(raw);

    if (!parsed.currentPractice || !Array.isArray(parsed.savedPractices)) {
      alert("That does not look like a valid backup.");
      return;
    }

    state = parsed;
    saveState();
    renderAll();
    alert("Backup restored.");
  } catch {
    alert("Could not read that backup text.");
  }
}

function renderAll() {
  renderPlan();
  renderDrills();
  renderMental();
  renderSC();
  renderRoster();
  renderSaved();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.jump));
});

["practiceTitle", "practiceDate", "practiceTeam", "practiceFocus"].forEach(id => {
  document.getElementById(id).addEventListener("input", updatePracticeDetails);
});

document.getElementById("drillSearch").addEventListener("input", event => {
  drillSearch = event.target.value;
  renderDrills();
});

document.getElementById("addPlayerBtn").addEventListener("click", addPlayer);
document.getElementById("playerNameInput").addEventListener("keydown", event => {
  if (event.key === "Enter") addPlayer();
});

document.getElementById("addCustomBlockBtn").addEventListener("click", openCustomModal);
document.getElementById("closeCustomBtn").addEventListener("click", closeCustomModal);
document.getElementById("saveCustomBlockBtn").addEventListener("click", saveCustomBlock);

document.getElementById("closeDetailsBtn").addEventListener("click", closeDetails);
document.getElementById("detailsModal").addEventListener("click", event => {
  if (event.target.id === "detailsModal") closeDetails();
});

document.getElementById("customModal").addEventListener("click", event => {
  if (event.target.id === "customModal") closeCustomModal();
});

document.getElementById("savePracticeBtn").addEventListener("click", saveCurrentPractice);
document.getElementById("printPracticeBtn").addEventListener("click", printPracticePlan);

document.getElementById("backupBtn").addEventListener("click", backupData);
document.getElementById("restoreBtn").addEventListener("click", restoreData);

document.addEventListener("click", event => {
  const categoryBtn = event.target.closest("[data-category]");
  const mentalBtn = event.target.closest("[data-mental-filter]");
  const addDrillBtn = event.target.closest("[data-add-drill]");
  const openDrillBtn = event.target.closest("[data-open-drill]");
  const addMentalBtn = event.target.closest("[data-add-mental]");
  const openMentalBtn = event.target.closest("[data-open-mental]");
  const addSCBtn = event.target.closest("[data-add-sc]");
  const openSCBtn = event.target.closest("[data-open-sc]");
  const removeBlockBtn = event.target.closest("[data-remove-block]");
  const duplicateBlockBtn = event.target.closest("[data-duplicate-block]");
  const moveUpBtn = event.target.closest("[data-move-up]");
  const moveDownBtn = event.target.closest("[data-move-down]");
  const togglePlayerBtn = event.target.closest("[data-toggle-player]");
  const deletePlayerBtn = event.target.closest("[data-delete-player]");
  const loadPracticeBtn = event.target.closest("[data-load-practice]");
  const dupePracticeBtn = event.target.closest("[data-dupe-practice]");
  const deletePracticeBtn = event.target.closest("[data-delete-practice]");
  const modalAddBtn = event.target.closest("[data-modal-add]");

  if (categoryBtn) {
    activeCategory = categoryBtn.dataset.category;
    renderDrills();
  }

  if (mentalBtn) {
    mentalFilter = mentalBtn.dataset.mentalFilter;
    document.querySelectorAll("[data-mental-filter]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mentalFilter === mentalFilter);
    });
    renderMental();
  }

  if (addDrillBtn) {
    const drill = DRILLS.find(item => item.id === addDrillBtn.dataset.addDrill);
    if (drill) addBlock(buildBlockFromDrill(drill));
  }

  if (openDrillBtn) {
    const drill = DRILLS.find(item => item.id === openDrillBtn.dataset.openDrill);
    if (drill) openDetails(drill, "drill");
  }

  if (addMentalBtn) {
    const item = MENTAL_BLOCKS.find(block => block.id === addMentalBtn.dataset.addMental);
    if (item) addBlock(buildBlockFromLibrary(item, "mental"));
  }

  if (openMentalBtn) {
    const item = MENTAL_BLOCKS.find(block => block.id === openMentalBtn.dataset.openMental);
    if (item) openDetails(item, "mental");
  }

  if (addSCBtn) {
    const item = SC_BLOCKS.find(block => block.id === addSCBtn.dataset.addSc);
    if (item) addBlock(buildBlockFromLibrary(item, "sc"));
  }

  if (openSCBtn) {
    const item = SC_BLOCKS.find(block => block.id === openSCBtn.dataset.openSc);
    if (item) openDetails(item, "sc");
  }

  if (removeBlockBtn) {
    removeBlock(removeBlockBtn.dataset.removeBlock);
  }

  if (duplicateBlockBtn) {
    duplicateBlock(duplicateBlockBtn.dataset.duplicateBlock);
  }

  if (moveUpBtn) {
    moveBlock(moveUpBtn.dataset.moveUp, -1);
  }

  if (moveDownBtn) {
    moveBlock(moveDownBtn.dataset.moveDown, 1);
  }

  if (togglePlayerBtn) {
    togglePlayer(togglePlayerBtn.dataset.togglePlayer);
  }

  if (deletePlayerBtn) {
    deletePlayer(deletePlayerBtn.dataset.deletePlayer);
  }

  if (loadPracticeBtn) {
    loadPractice(loadPracticeBtn.dataset.loadPractice);
  }

  if (dupePracticeBtn) {
    duplicatePractice(dupePracticeBtn.dataset.dupePractice);
  }

  if (deletePracticeBtn) {
    deletePractice(deletePracticeBtn.dataset.deletePractice);
  }

  if (modalAddBtn) {
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

document.addEventListener("input", event => {
  const notesInput = event.target.closest("[data-block-notes]");
  if (notesInput) {
    updateBlockNotes(notesInput.dataset.blockNotes, notesInput.value);
  }
});

loadState();
switchTab(state.activeTab || "plan");
renderAll();