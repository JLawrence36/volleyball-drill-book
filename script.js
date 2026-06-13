const STORAGE_KEY = "VOLLEYBALL_DRILL_BOOK_V1";

const CATEGORIES = [
  "Attacking",
  "Serve Receive",
  "Ball Control",
  "Serving",
  "Competition",
  "Setting",
  "Defense",
  "Team Systems",
  "Warmup",
  "Conditioning",
  "Mental Game",
  "Custom"
];

const BUILT_IN_DRILLS = window.DRILL_DATABASE || [
  {
    id: "drill_001",
    number: "01",
    category: "Defense",
    name: "Reading the Hitter (Block Read)",
    source: "GMS",
    players: "6-12",
    time: 15,
    level: "Intermediate",
    skills: "Blocking, Reading",
    purpose: "Train blockers and defenders to read the attacker's approach, arm, and shoulders rather than the ball.",
    setup: "Coach or hitter on a box at the net. Blockers in front, back-row defenders in base position.",
    run: [
      "Hitter on the box attacks to predetermined zones, exaggerating shoulder/arm cues.",
      "Blockers call the seam and press over; defenders read around the block.",
      "Progress from tossed attacks to live swings off a set.",
      "Add a second hitter so blockers must choose who to commit to."
    ],
    coaching: "Eyes sequence: ball → setter → hitter's approach angle → hitting arm. Reward correct reads even if the dig fails.",
    evaluate: "Footwork, timing at the net, reading cues, hands penetration over the net.",
    custom: false
  },
  {
    id: "drill_002",
    number: "02",
    category: "Serve Receive",
    name: "Serve & Pass Wash",
    source: "GMS",
    players: "8-16",
    time: 20,
    level: "All levels",
    skills: "Serving, Passing",
    purpose: "Game-like serving and passing under scoring pressure.",
    setup: "Servers on one side, full serve-receive formation on the other, target/setter at the net.",
    run: [
      "Server serves a tough, in-bounds serve.",
      "Passers run their serve-receive system and pass to target.",
      "Score the pass 0-3. Passing side must wash by winning two rallies to rotate.",
      "Rotate servers and passers; track team passing average."
    ],
    coaching: "Emphasize platform angle and posture to target. Servers must serve aggressively in-bounds, not lob.",
    evaluate: "Passing accuracy, serving aggressiveness and accuracy, communication on seams.",
    custom: false
  },
  {
    id: "drill_003",
    number: "03",
    category: "Competition",
    name: "Queen / King of the Court",
    source: "AOC",
    players: "9-18",
    time: 20,
    level: "All levels",
    skills: "All-around, Competing",
    purpose: "High-rep competitive game that reveals who competes, adapts, and wins points with changing teammates.",
    setup: "Teams of 3 or 2. One Queen side defends; challenger teams rotate in from the other side.",
    run: [
      "Challenger team initiates with a serve or free ball.",
      "Win the rally on the Queen side to earn a point and stay.",
      "Challengers who win move to the Queen side.",
      "Play to a set score or time; track individual points."
    ],
    coaching: "Keep the pace fast with a ball cart. Great for evaluating competitiveness and adaptability.",
    evaluate: "Competing under pressure, all-around skill, communication with new teammates, consistency.",
    custom: false
  },
  {
    id: "drill_004",
    number: "04",
    category: "Ball Control",
    name: "Pepper Progression",
    source: "AOC",
    players: "Pairs",
    time: 10,
    level: "Beginner",
    skills: "Passing, Setting, Hitting",
    purpose: "Warm-up and ball-control fundamentals using a controlled dig-set-hit sequence between partners.",
    setup: "Partners 10-15 feet apart, one ball per pair.",
    run: [
      "Dig to self then to partner; partner sets back.",
      "Add a controlled downball or roll shot to restart the sequence.",
      "Progress to one-touch pepper.",
      "Add movement before each contact."
    ],
    coaching: "Insist on calling mine, facing the target, and controlled contacts.",
    evaluate: "Ball control, platform consistency, communication, hand-setting form.",
    custom: false
  },
  {
    id: "drill_005",
    number: "05",
    category: "Setting",
    name: "Sits Test (Setter Accuracy)",
    source: "AOC",
    players: "Individual",
    time: 10,
    level: "Intermediate",
    skills: "Setting",
    purpose: "Test setting accuracy, agility, and conditioning in a continuous measurable format.",
    setup: "Setter at target zone with a ball, coach feeding.",
    run: [
      "Setter sits, sets to self, stands, sets to a target, then sits again.",
      "Repeat continuously for reps or time.",
      "Count accurate sets to the target zone.",
      "Test both front and back sets."
    ],
    coaching: "Hand position, square to target, consistent release point.",
    evaluate: "Setting accuracy, agility, conditioning, consistency under fatigue.",
    custom: false
  },
  {
    id: "drill_006",
    number: "06",
    category: "Serving",
    name: "Serving Targets / Zones",
    source: "GMS",
    players: "Any",
    time: 15,
    level: "All levels",
    skills: "Serving",
    purpose: "Develop serving accuracy to specific zones and aggressiveness under a scoring system.",
    setup: "Place targets in zones 1, 5, 6 and short seams. Servers behind the end line.",
    run: [
      "Servers take 10 serves, scoring points for hitting target zones.",
      "Award bonus points for short serves and seam serves.",
      "Track misses separately.",
      "Add pressure by requiring a target number of makes."
    ],
    coaching: "Consistent toss and contact. Aggressive but in-bounds. Vary depth, not just side-to-side.",
    evaluate: "Serving accuracy, aggressiveness, consistency, ability to hit zones on demand.",
    custom: false
  }
];

let appState = {
  favorites: [],
  customDrills: [],
  practice: [],
  settings: {
    programName: "Rising Sun Volleyball",
    coachName: "Coach"
  },
  practiceDetails: {
    name: "",
    date: "",
    team: "",
    focus: ""
  }
};

let activeTab = "home";
let searchText = "";
let categoryFilter = "All";
let levelFilter = "All";
let timeFilter = "all";

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return;
  }

  try {
    appState = JSON.parse(saved);
  } catch {
    saveState();
  }

  if (!Array.isArray(appState.favorites)) appState.favorites = [];
  if (!Array.isArray(appState.customDrills)) appState.customDrills = [];
  if (!Array.isArray(appState.practice)) appState.practice = [];
  if (!appState.settings) appState.settings = {};
  if (!appState.practiceDetails) appState.practiceDetails = {};
}

function allDrills() {
  return [...BUILT_IN_DRILLS, ...appState.customDrills];
}

function makeId(prefix) {
  if (crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }

  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function renderTextBlock(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function getDrillById(id) {
  return allDrills().find(drill => drill.id === id);
}

function isFavorite(id) {
  return appState.favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    appState.favorites = appState.favorites.filter(item => item !== id);
  } else {
    appState.favorites.push(id);
  }

  saveState();
  renderAll();
}

function addToPractice(id) {
  const drill = getDrillById(id);

  if (!drill) return;

  appState.practice.push({
    id: makeId("practice"),
    drillId: id,
    minutes: drill.time || 10,
    notes: ""
  });

  saveState();
  renderAll();
  switchTab("planner");
}

function removeFromPractice(practiceId) {
  appState.practice = appState.practice.filter(item => item.id !== practiceId);
  saveState();
  renderAll();
}

function updatePracticeItem(practiceId, field, value) {
  const item = appState.practice.find(item => item.id === practiceId);

  if (!item) return;

  if (field === "minutes") {
    item.minutes = Number(value) || 0;
  } else {
    item[field] = value;
  }

  saveState();
  renderAll();
}

function getFilteredDrills() {
  return allDrills().filter(drill => {
    const searchable = [
      drill.number,
      drill.category,
      drill.name,
      drill.source,
      drill.players,
      drill.time,
      drill.level,
      drill.skills,
      drill.purpose,
      drill.setup,
      Array.isArray(drill.run) ? drill.run.join(" ") : drill.run,
      drill.coaching,
      drill.evaluate
    ].join(" ").toLowerCase();

    const matchesSearch = !searchText || searchable.includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter === "All" || drill.category === categoryFilter;
    const matchesLevel = levelFilter === "All" || drill.level === levelFilter;
    const matchesTime = timeFilter === "all" || Number(drill.time) <= Number(timeFilter);

    return matchesSearch && matchesCategory && matchesLevel && matchesTime;
  });
}

function switchTab(tabName) {
  activeTab = tabName;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.toggle("active", screen.id === tabName);
  });

  renderAll();
}

function renderFilters() {
  const categorySelect = document.getElementById("categoryFilter");
  const levelSelect = document.getElementById("levelFilter");
  const customCategory = document.getElementById("customCategory");

  const categories = ["All", ...CATEGORIES];
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All levels"];

  categorySelect.innerHTML = categories.map(category => {
    return `<option value="${escapeHtml(category)}" ${category === categoryFilter ? "selected" : ""}>${escapeHtml(category)}</option>`;
  }).join("");

  levelSelect.innerHTML = levels.map(level => {
    return `<option value="${escapeHtml(level)}" ${level === levelFilter ? "selected" : ""}>${escapeHtml(level)}</option>`;
  }).join("");

  customCategory.innerHTML = CATEGORIES.map(category => {
    return `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`;
  }).join("");

  document.getElementById("timeFilter").value = timeFilter;
}

function renderHome() {
  const drills = allDrills();

  document.getElementById("totalDrills").textContent = drills.length;
  document.getElementById("favoriteCount").textContent = appState.favorites.length;
  document.getElementById("customCount").textContent = appState.customDrills.length;
  document.getElementById("practiceCount").textContent = appState.practice.length;
}

function renderDrillCard(drill) {
  const star = isFavorite(drill.id) ? "★ Favorite" : "☆ Favorite";

  return `
    <div class="drill-card">
      <div class="drill-top">
        <div>
          <h3>${escapeHtml(drill.number ? drill.number + " " : "")}${escapeHtml(drill.name)}</h3>
          <div class="drill-meta">
            <span class="badge category-badge">${escapeHtml(drill.category)}</span>
            <span class="badge source-badge">${escapeHtml(drill.source || "Custom")}</span>
            <span class="badge">${escapeHtml(drill.players)}</span>
            <span class="badge">${escapeHtml(drill.time)} min</span>
            <span class="badge">${escapeHtml(drill.level)}</span>
          </div>
        </div>

        <button class="star-btn ${isFavorite(drill.id) ? "active" : ""}" data-favorite="${escapeHtml(drill.id)}">${star}</button>
      </div>

      <p class="drill-purpose">${escapeHtml(drill.purpose)}</p>

      <div class="drill-actions">
        <button class="btn small dark" data-open="${escapeHtml(drill.id)}">Open Drill</button>
        <button class="btn small primary" data-add-practice="${escapeHtml(drill.id)}">Add to Practice</button>
        ${drill.custom ? `<button class="btn small danger" data-delete-custom="${escapeHtml(drill.id)}">Delete</button>` : ""}
      </div>
    </div>
  `;
}

function renderDrills() {
  const drills = getFilteredDrills();
  const list = document.getElementById("drillList");

  document.getElementById("drillResultCount").textContent = `${drills.length} drills`;

  if (drills.length === 0) {
    list.innerHTML = `<p class="hint">No drills match your filters.</p>`;
    return;
  }

  list.innerHTML = drills.map(renderDrillCard).join("");
}

function renderFavorites() {
  const favorites = allDrills().filter(drill => isFavorite(drill.id));
  const list = document.getElementById("favoriteList");

  document.getElementById("favoriteResultCount").textContent = `${favorites.length} favorites`;

  if (favorites.length === 0) {
    list.innerHTML = `<p class="hint">No favorite drills yet. Star drills from the Drill Book tab.</p>`;
    return;
  }

  list.innerHTML = favorites.map(renderDrillCard).join("");
}

function renderPractice() {
  const list = document.getElementById("practiceList");

  const totalMinutes = appState.practice.reduce((sum, item) => sum + (Number(item.minutes) || 0), 0);
  document.getElementById("practiceMinutes").textContent = `${totalMinutes} minutes`;

  document.getElementById("practiceName").value = appState.practiceDetails.name || "";
  document.getElementById("practiceDate").value = appState.practiceDetails.date || "";
  document.getElementById("practiceTeam").value = appState.practiceDetails.team || "";
  document.getElementById("practiceFocus").value = appState.practiceDetails.focus || "";

  if (appState.practice.length === 0) {
    list.innerHTML = `<p class="hint">No drills added yet. Go to the Drill Book tab and tap Add to Practice.</p>`;
    return;
  }

  list.innerHTML = appState.practice.map((item, index) => {
    const drill = getDrillById(item.drillId);

    if (!drill) return "";

    return `
      <div class="practice-item">
        <div class="practice-item-top">
          <div>
            <h3>${index + 1}. ${escapeHtml(drill.name)}</h3>
            <div class="drill-meta">
              ${escapeHtml(drill.category)} • ${escapeHtml(drill.level)} • ${escapeHtml(drill.skills)}
            </div>
          </div>

          <button class="btn small danger" data-remove-practice="${escapeHtml(item.id)}">Remove</button>
        </div>

        <label>Minutes</label>
        <input class="control" type="number" value="${escapeHtml(item.minutes)}" data-practice-minutes="${escapeHtml(item.id)}" />

        <label>Coach Notes</label>
        <textarea class="practice-notes" data-practice-notes="${escapeHtml(item.id)}">${escapeHtml(item.notes)}</textarea>

        <div class="detail-section">
          <h4>Purpose</h4>
          <p>${escapeHtml(drill.purpose)}</p>
        </div>
      </div>
    `;
  }).join("");
}

function renderSettings() {
  document.getElementById("programName").value = appState.settings.programName || "";
  document.getElementById("coachName").value = appState.settings.coachName || "";
}

function openDrillModal(id) {
  const drill = getDrillById(id);

  if (!drill) return;

  const runSteps = Array.isArray(drill.run)
    ? drill.run.map(step => `<li>${escapeHtml(step)}</li>`).join("")
    : `<li>${escapeHtml(drill.run)}</li>`;

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-content">
      <h2>${escapeHtml(drill.number ? drill.number + " " : "")}${escapeHtml(drill.name)}</h2>

      <div class="detail-grid">
        <div class="detail-box"><strong>Category</strong>${escapeHtml(drill.category)}</div>
        <div class="detail-box"><strong>Source</strong>${escapeHtml(drill.source || "Custom")}</div>
        <div class="detail-box"><strong>Players</strong>${escapeHtml(drill.players)}</div>
        <div class="detail-box"><strong>Time</strong>${escapeHtml(drill.time)} min</div>
        <div class="detail-box"><strong>Level</strong>${escapeHtml(drill.level)}</div>
        <div class="detail-box"><strong>Skills</strong>${escapeHtml(drill.skills)}</div>
      </div>

      <div class="detail-section">
        <h3>Purpose</h3>
        <p>${renderTextBlock(drill.purpose)}</p>
      </div>

      <div class="detail-section">
        <h3>Setup</h3>
        <p>${renderTextBlock(drill.setup)}</p>
      </div>

      <div class="detail-section">
        <h3>How To Run It</h3>
        <ol>${runSteps}</ol>
      </div>

      <div class="detail-section">
        <h3>Coaching Points</h3>
        <p>${renderTextBlock(drill.coaching)}</p>
      </div>

      <div class="detail-section">
        <h3>What To Evaluate</h3>
        <p>${renderTextBlock(drill.evaluate)}</p>
      </div>

      <div class="drill-actions">
        <button class="btn primary" data-add-practice="${escapeHtml(drill.id)}">Add to Practice</button>
        <button class="btn light" data-favorite="${escapeHtml(drill.id)}">${isFavorite(drill.id) ? "★ Remove Favorite" : "☆ Add Favorite"}</button>
      </div>
    </div>
  `;

  document.getElementById("drillModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("drillModal").classList.add("hidden");
}

function saveCustomDrill() {
  const name = document.getElementById("customName").value.trim();

  if (!name) {
    alert("Add a drill name.");
    return;
  }

  const drill = {
    id: makeId("custom"),
    number: "",
    category: document.getElementById("customCategory").value,
    name,
    source: "Custom",
    players: document.getElementById("customPlayers").value.trim() || "Any",
    time: Number(document.getElementById("customTime").value) || 10,
    level: document.getElementById("customLevel").value,
    skills: document.getElementById("customSkills").value.trim() || "Volleyball",
    purpose: document.getElementById("customPurpose").value.trim(),
    setup: document.getElementById("customSetup").value.trim(),
    run: document.getElementById("customRun").value.trim().split("\n").filter(Boolean),
    coaching: document.getElementById("customCoaching").value.trim(),
    evaluate: document.getElementById("customEvaluate").value.trim(),
    custom: true
  };

  appState.customDrills.push(drill);
  saveState();

  document.querySelectorAll("#add input, #add textarea").forEach(input => {
    input.value = "";
  });

  renderAll();
  switchTab("drills");
}

function deleteCustomDrill(id) {
  if (!confirm("Delete this custom drill?")) return;

  appState.customDrills = appState.customDrills.filter(drill => drill.id !== id);
  appState.favorites = appState.favorites.filter(item => item !== id);
  appState.practice = appState.practice.filter(item => item.drillId !== id);

  saveState();
  renderAll();
}

function clearPractice() {
  if (!confirm("Clear the current practice plan?")) return;

  appState.practice = [];
  saveState();
  renderAll();
}

function saveSettings() {
  appState.settings.programName = document.getElementById("programName").value.trim();
  appState.settings.coachName = document.getElementById("coachName").value.trim();

  saveState();
  renderAll();
  alert("Settings saved.");
}

function resetLocalData() {
  if (!confirm("Reset all local website data?")) return;

  localStorage.removeItem(STORAGE_KEY);

  appState = {
    favorites: [],
    customDrills: [],
    practice: [],
    settings: {
      programName: "Rising Sun Volleyball",
      coachName: "Coach"
    },
    practiceDetails: {
      name: "",
      date: "",
      team: "",
      focus: ""
    }
  };

  renderAll();
  switchTab("home");
}

function backupData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    appState
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "volleyball-drill-book-backup.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importData(file) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    try {
      const data = JSON.parse(reader.result);

      if (data.appState) {
        appState = data.appState;
        saveState();
        renderAll();
        alert("Backup imported.");
      } else {
        alert("Invalid backup file.");
      }
    } catch {
      alert("Could not import this file.");
    }
  };

  reader.readAsText(file);
}

function renderAll() {
  renderFilters();
  renderHome();
  renderDrills();
  renderFavorites();
  renderPractice();
  renderSettings();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    switchTab(tab.dataset.tab);
  });
});

document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.jump);
  });
});

document.getElementById("searchInput").addEventListener("input", event => {
  searchText = event.target.value;
  renderDrills();
});

document.getElementById("categoryFilter").addEventListener("change", event => {
  categoryFilter = event.target.value;
  renderDrills();
});

document.getElementById("levelFilter").addEventListener("change", event => {
  levelFilter = event.target.value;
  renderDrills();
});

document.getElementById("timeFilter").addEventListener("change", event => {
  timeFilter = event.target.value;
  renderDrills();
});

document.getElementById("clearFiltersBtn").addEventListener("click", () => {
  searchText = "";
  categoryFilter = "All";
  levelFilter = "All";
  timeFilter = "all";
  document.getElementById("searchInput").value = "";
  renderAll();
});

document.getElementById("saveCustomDrillBtn").addEventListener("click", saveCustomDrill);
document.getElementById("clearPracticeBtn").addEventListener("click", clearPractice);
document.getElementById("saveSettingsBtn").addEventListener("click", saveSettings);
document.getElementById("resetBtn").addEventListener("click", resetLocalData);
document.getElementById("backupBtn").addEventListener("click", backupData);
document.getElementById("importInput").addEventListener("change", event => importData(event.target.files[0]));
document.getElementById("printBtn").addEventListener("click", () => window.print());

document.getElementById("practiceName").addEventListener("input", event => {
  appState.practiceDetails.name = event.target.value;
  saveState();
});

document.getElementById("practiceDate").addEventListener("input", event => {
  appState.practiceDetails.date = event.target.value;
  saveState();
});

document.getElementById("practiceTeam").addEventListener("input", event => {
  appState.practiceDetails.team = event.target.value;
  saveState();
});

document.getElementById("practiceFocus").addEventListener("input", event => {
  appState.practiceDetails.focus = event.target.value;
  saveState();
});

document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("drillModal").addEventListener("click", event => {
  if (event.target.id === "drillModal") {
    closeModal();
  }
});

document.addEventListener("click", event => {
  const openButton = event.target.closest("[data-open]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const addPracticeButton = event.target.closest("[data-add-practice]");
  const deleteCustomButton = event.target.closest("[data-delete-custom]");
  const removePracticeButton = event.target.closest("[data-remove-practice]");

  if (openButton) {
    openDrillModal(openButton.dataset.open);
  }

  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
  }

  if (addPracticeButton) {
    addToPractice(addPracticeButton.dataset.addPractice);
  }

  if (deleteCustomButton) {
    deleteCustomDrill(deleteCustomButton.dataset.deleteCustom);
  }

  if (removePracticeButton) {
    removeFromPractice(removePracticeButton.dataset.removePractice);
  }
});

document.addEventListener("input", event => {
  const minutesInput = event.target.closest("[data-practice-minutes]");
  const notesInput = event.target.closest("[data-practice-notes]");

  if (minutesInput) {
    updatePracticeItem(minutesInput.dataset.practiceMinutes, "minutes", minutesInput.value);
  }

  if (notesInput) {
    updatePracticeItem(notesInput.dataset.practiceNotes, "notes", notesInput.value);
  }
});

loadState();
renderAll();
