const DB_KEY = "focusflux-db-v1";

const stateOptions = [
  "Foggy",
  "Restless",
  "Avoiding",
  "Overwhelmed",
  "Hyperfocused",
  "Tired",
  "Anxious",
  "Ready",
];

const taskOptions = [
  "Admin",
  "Studying",
  "Writing",
  "Coding",
  "Cleaning",
  "Creative work",
  "Reading",
  "Planning",
  "Deep work",
  "Quick chores",
];

const rooms = [
  "10-minute panic start",
  "25-minute work sprint",
  "50-minute deep work",
  "Admin hell room",
  "Study room",
  "Cleaning room",
  "Late-night catch-up",
  "I'm avoiding something",
];

const toneModes = [
  "Ignition",
  "Lock-in",
  "Drift Recovery",
  "Reward",
  "Cooldown",
  "Start Mode",
  "Flow Mode",
  "Chaos Mode",
  "Body Mode",
  "Deadline Mode",
];

const toneFeelings = [
  "Foggy",
  "Restless",
  "Avoiding",
  "Overwhelmed",
  "Hyperfocused",
  "Tired",
  "Anxious",
  "Ready",
  "Understimulated",
  "Overstimulated",
  "Bored",
  "Pressured",
  "Scattered",
  "Tender",
  "Stuck",
  "Curious",
  "Numb",
  "Wired",
  "Slow",
  "Steady",
];

const tonePhases = ["spark", "thread", "anchor", "return", "landing"];

const toneModeProfiles = {
  Ignition: { bpm: [92, 112], energy: 7, motion: "rhythmic", vocals: "none", load: "medium" },
  "Lock-in": { bpm: [58, 78], energy: 4, motion: "repetitive", vocals: "none", load: "low" },
  "Drift Recovery": { bpm: [70, 88], energy: 5, motion: "clear pulse", vocals: "minimal", load: "low" },
  Reward: { bpm: [96, 122], energy: 8, motion: "short lift", vocals: "chops only", load: "medium" },
  Cooldown: { bpm: [48, 66], energy: 2, motion: "slow decay", vocals: "none", load: "low" },
  "Start Mode": { bpm: [82, 104], energy: 6, motion: "forward", vocals: "none", load: "medium" },
  "Flow Mode": { bpm: [56, 74], energy: 3, motion: "stable", vocals: "none", load: "low" },
  "Chaos Mode": { bpm: [62, 84], energy: 4, motion: "simple", vocals: "none", load: "very low" },
  "Body Mode": { bpm: [100, 128], energy: 7, motion: "movement", vocals: "minimal", load: "medium" },
  "Deadline Mode": { bpm: [88, 116], energy: 8, motion: "countdown", vocals: "none", load: "medium" },
};

const feelingProfiles = {
  Foggy: { offset: 8, texture: "bright, crisp transients", tag: "light percussion" },
  Restless: { offset: 10, texture: "steady motor rhythm", tag: "driving beat" },
  Avoiding: { offset: -2, texture: "low-friction minimal loop", tag: "minimal electronic" },
  Overwhelmed: { offset: -8, texture: "soft edges, sparse layers", tag: "ambient calm" },
  Hyperfocused: { offset: -6, texture: "narrow-band stable bed", tag: "deep focus" },
  Tired: { offset: -10, texture: "warm low arousal", tag: "soft ambient" },
  Anxious: { offset: -6, texture: "predictable pulse, no surprises", tag: "calm tension" },
  Ready: { offset: 0, texture: "balanced momentum", tag: "focus beat" },
  Understimulated: { offset: 12, texture: "clean novelty every 16 bars", tag: "uplifting electronic" },
  Overstimulated: { offset: -12, texture: "low spectral density", tag: "meditative" },
  Bored: { offset: 10, texture: "playful but non-lyrical", tag: "quirky pulse" },
  Pressured: { offset: 6, texture: "firm pulse, simple harmony", tag: "determined" },
  Scattered: { offset: -4, texture: "single motif, few scene changes", tag: "minimal pulse" },
  Tender: { offset: -8, texture: "soft consonant pads", tag: "gentle piano" },
  Stuck: { offset: 4, texture: "small rising movement", tag: "building focus" },
  Curious: { offset: 2, texture: "subtle detail without vocals", tag: "curious electronic" },
  Numb: { offset: 6, texture: "warm pulse with tactile lows", tag: "warm beat" },
  Wired: { offset: -10, texture: "steady downshift groove", tag: "slow pulse" },
  Slow: { offset: 8, texture: "brighter attack and clear grid", tag: "light groove" },
  Steady: { offset: 0, texture: "consistent loop architecture", tag: "steady rhythm" },
};

const playerSeedTracks = [
  { mode: "Ignition", feeling: "Ready", title: "Ready Spark" },
  { mode: "Lock-in", feeling: "Hyperfocused", title: "Threadline Loop" },
  { mode: "Drift Recovery", feeling: "Scattered", title: "Return Cue" },
  { mode: "Reward", feeling: "Stuck", title: "Tiny Win Lift" },
  { mode: "Cooldown", feeling: "Tired", title: "Soft Landing" },
];

const dom = {
  authButton: document.querySelector("#authButton"),
  authDialog: document.querySelector("#authDialog"),
  authForm: document.querySelector("#authForm"),
  authTitle: document.querySelector("#authTitle"),
  authSubtitle: document.querySelector("#authSubtitle"),
  authError: document.querySelector("#authError"),
  closeAuthButton: document.querySelector("#closeAuthButton"),
  switchAuthButton: document.querySelector("#switchAuthButton"),
  submitAuthButton: document.querySelector("#submitAuthButton"),
  demoButton: document.querySelector("#demoButton"),
  nameField: document.querySelector("#nameField"),
  nameInput: document.querySelector("#nameInput"),
  emailInput: document.querySelector("#emailInput"),
  passwordInput: document.querySelector("#passwordInput"),
  stateOptions: document.querySelector("#stateOptions"),
  taskOptions: document.querySelector("#taskOptions"),
  pulseForm: document.querySelector("#pulseForm"),
  taskInput: document.querySelector("#taskInput"),
  modePill: document.querySelector("#modePill"),
  pulseState: document.querySelector("#pulseState"),
  pulseMinutes: document.querySelector("#pulseMinutes"),
  pulseOrb: document.querySelector("#pulseOrb"),
  nextActionText: document.querySelector("#nextActionText"),
  sessionLabel: document.querySelector("#sessionLabel"),
  timerDisplay: document.querySelector("#timerDisplay"),
  playPauseIcon: document.querySelector("#playPauseIcon"),
  startTimerButton: document.querySelector("#startTimerButton"),
  resetTimerButton: document.querySelector("#resetTimerButton"),
  soundButton: document.querySelector("#soundButton"),
  playerCanvas: document.querySelector("#playerCanvas"),
  playerPhaseLabel: document.querySelector("#playerPhaseLabel"),
  playerTitle: document.querySelector("#playerTitle"),
  playerTrackMeta: document.querySelector("#playerTrackMeta"),
  playerProgressBar: document.querySelector("#playerProgressBar"),
  playerPrevButton: document.querySelector("#playerPrevButton"),
  playerPlayButton: document.querySelector("#playerPlayButton"),
  playerNextButton: document.querySelector("#playerNextButton"),
  playerPlayIcon: document.querySelector("#playerPlayIcon"),
  playerPhaseSelect: document.querySelector("#playerPhaseSelect"),
  playerIntensityRange: document.querySelector("#playerIntensityRange"),
  playerQueue: document.querySelector("#playerQueue"),
  driftButton: document.querySelector("#driftButton"),
  breadcrumbStack: document.querySelector("#breadcrumbStack"),
  stepsList: document.querySelector("#stepsList"),
  completeStepButton: document.querySelector("#completeStepButton"),
  shuffleStepsButton: document.querySelector("#shuffleStepsButton"),
  checklistProgressText: document.querySelector("#checklistProgressText"),
  checklistMeter: document.querySelector("#checklistMeter"),
  checklistDoneCount: document.querySelector("#checklistDoneCount"),
  checklistForm: document.querySelector("#checklistForm"),
  checklistInput: document.querySelector("#checklistInput"),
  checklistList: document.querySelector("#checklistList"),
  checklistSyncButton: document.querySelector("#checklistSyncButton"),
  checklistClearButton: document.querySelector("#checklistClearButton"),
  coachCopy: document.querySelector("#coachCopy"),
  nudgeLevel: document.querySelector("#nudgeLevel"),
  moxieMessages: document.querySelector("#moxieMessages"),
  moxieForm: document.querySelector("#moxieForm"),
  moxieInput: document.querySelector("#moxieInput"),
  roomSelect: document.querySelector("#roomSelect"),
  roomCount: document.querySelector("#roomCount"),
  joinRoomButton: document.querySelector("#joinRoomButton"),
  signalLog: document.querySelector("#signalLog"),
  fidgetPad: document.querySelector("#fidgetPad"),
  syncScore: document.querySelector("#syncScore"),
  toneModeSelect: document.querySelector("#toneModeSelect"),
  toneFeelingSelect: document.querySelector("#toneFeelingSelect"),
  tonePreview: document.querySelector("#tonePreview"),
  previewToneButton: document.querySelector("#previewToneButton"),
  exportToneButton: document.querySelector("#exportToneButton"),
  fingerprintGrid: document.querySelector("#fingerprintGrid"),
  savedCount: document.querySelector("#savedCount"),
  openDataButton: document.querySelector("#openDataButton"),
  dataDialog: document.querySelector("#dataDialog"),
  databasePreview: document.querySelector("#databasePreview"),
  closeDataButton: document.querySelector("#closeDataButton"),
  exportDataButton: document.querySelector("#exportDataButton"),
  clearDataButton: document.querySelector("#clearDataButton"),
};

let db = loadDatabase();
let authMode = "login";
let selectedState = "Ready";
let selectedTask = "Admin";
let currentPulse = null;
let currentSteps = [];
let currentStepIndex = 0;
let currentRoom = rooms[0];
let timerId = null;
let lastTapAt = 0;
let fidgetScore = 0;
let checklistItems = db.checklist || [];
let playerTracks = [];
let playerIndex = 0;
let playerProgress = 0;
let playerAnimationId = null;

let session = {
  id: makeId(),
  running: false,
  saved: false,
  duration: 9 * 60,
  remaining: 9 * 60,
  driftCount: 0,
  completedSteps: 0,
  phase: "Ignition",
};

const audio = {
  context: null,
  master: null,
  filter: null,
  oscA: null,
  oscB: null,
  playing: false,
};

function loadDatabase() {
  try {
    const stored = localStorage.getItem(DB_KEY);
    if (!stored) {
    return {
      version: 1,
      activeUserId: null,
      users: {},
      checklist: [],
      updatedAt: new Date().toISOString(),
    };
    }
    const parsed = JSON.parse(stored);
    return {
      version: 1,
      activeUserId: parsed.activeUserId || null,
      users: parsed.users || {},
      checklist: parsed.checklist || [],
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    };
  } catch {
    return {
      version: 1,
      activeUserId: null,
      users: {},
      checklist: [],
      updatedAt: new Date().toISOString(),
    };
  }
}

function saveDatabase() {
  db.updatedAt = new Date().toISOString();
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function makeId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `ff-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getActiveUser() {
  return db.activeUserId ? db.users[db.activeUserId] : null;
}

async function hashPassword(value) {
  const normalized = value.trim();
  if (crypto.subtle && window.TextEncoder) {
    const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(normalized));
    return Array.from(new Uint8Array(buffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }
  let hash = 0;
  for (let index = 0; index < normalized.length; index += 1) {
    hash = (hash << 5) - hash + normalized.charCodeAt(index);
    hash |= 0;
  }
  return `fallback-${Math.abs(hash)}`;
}

function renderOptions() {
  dom.stateOptions.replaceChildren(
    ...stateOptions.map((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = label;
      button.setAttribute("aria-pressed", String(label === selectedState));
      button.addEventListener("click", () => {
        selectedState = label;
        renderOptions();
        previewPulse();
      });
      return button;
    }),
  );

  dom.taskOptions.replaceChildren(
    ...taskOptions.map((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = label;
      button.setAttribute("aria-pressed", String(label === selectedTask));
      button.addEventListener("click", () => {
        selectedTask = label;
        renderOptions();
        previewPulse();
      });
      return button;
    }),
  );
}

function buildPulse({ state, taskType, taskText }) {
  const lowerTask = taskText.toLowerCase();
  const urgent = /urgent|deadline|due|tonight|tomorrow|late|panic/.test(lowerTask);
  const physical = ["Cleaning", "Quick chores"].includes(taskType);
  const deep = ["Coding", "Writing", "Reading", "Studying", "Deep work"].includes(taskType);

  const map = {
    Foggy: {
      mode: "Start Mode",
      minutes: 8,
      tempo: 82,
      audio: "bright ignition pulse",
      nudge: "Medium",
      reward: "Every step",
      coach: "Start with the visible part. You do not need the full plan yet.",
      color: "foggy",
    },
    Restless: {
      mode: physical ? "Body Mode" : "Start Mode",
      minutes: physical ? 10 : 12,
      tempo: 96,
      audio: "movement pulse",
      nudge: "Medium",
      reward: "Fast",
      coach: "Use the restlessness as motion. One step, then one check-in.",
      color: "restless",
    },
    Avoiding: {
      mode: "Chaos Mode",
      minutes: 9,
      tempo: 74,
      audio: "low-friction rhythm",
      nudge: "Gentle",
      reward: "Immediate",
      coach: "Make it easy enough to do badly. That counts.",
      color: "avoiding",
    },
    Overwhelmed: {
      mode: "Chaos Mode",
      minutes: 7,
      tempo: 64,
      audio: "low-stimulation sound",
      nudge: "Gentle",
      reward: "Immediate",
      coach: "We are making this tiny. Only the next visible action matters.",
      color: "overwhelmed",
    },
    Hyperfocused: {
      mode: "Flow Mode",
      minutes: 25,
      tempo: 58,
      audio: "stable lock-in bed",
      nudge: "Low",
      reward: "Milestones",
      coach: "Protect the thread. I will keep prompts quiet.",
      color: "hyperfocused",
    },
    Tired: {
      mode: "Recovery Mode",
      minutes: 6,
      tempo: 54,
      audio: "warm cooldown layer",
      nudge: "Gentle",
      reward: "Soft",
      coach: "This can be a restart, not a productivity test.",
      color: "tired",
    },
    Anxious: {
      mode: "Recovery Mode",
      minutes: 7,
      tempo: 60,
      audio: "steady re-entry cue",
      nudge: "Gentle",
      reward: "Immediate",
      coach: "Pressure down. Name the next action and keep it visible.",
      color: "anxious",
    },
    Ready: {
      mode: deep ? "Flow Mode" : "Start Mode",
      minutes: deep ? 25 : 12,
      tempo: deep ? 62 : 78,
      audio: deep ? "stable lock-in bed" : "clean ignition pulse",
      nudge: deep ? "Low" : "Medium",
      reward: "Every step",
      coach: "Use the momentum. Choose the first action and let the rest stay parked.",
      color: "ready",
    },
  };

  const pulse = { ...map[state] };
  if (urgent) {
    pulse.mode = "Deadline Mode";
    pulse.minutes = Math.max(pulse.minutes, 15);
    pulse.tempo = Math.max(pulse.tempo, 88);
    pulse.nudge = "Assertive";
    pulse.reward = "Checkpoint";
    pulse.coach = "Deadline mode is on. One clear checkpoint at a time.";
  }

  if (physical) {
    pulse.mode = "Body Mode";
    pulse.minutes = state === "Overwhelmed" ? 6 : Math.min(pulse.minutes + 2, 14);
    pulse.audio = "movement-based pulse";
  }

  const recommendation = getLengthRecommendation(taskType, state);
  if (recommendation) {
    pulse.minutes = recommendation;
  }

  pulse.taskType = taskType;
  pulse.state = state;
  pulse.taskText = taskText;
  return pulse;
}

function getLengthRecommendation(taskType, state) {
  const user = getActiveUser();
  if (!user || !user.sessions || user.sessions.length < 3) {
    return null;
  }
  const matches = user.sessions.filter(
    (item) => item.taskType === taskType && item.state === state && item.completedSteps > 0,
  );
  if (matches.length < 2) {
    return null;
  }
  const average = matches.reduce((sum, item) => sum + item.durationMin, 0) / matches.length;
  return Math.max(5, Math.min(30, Math.round(average)));
}

function fractureTask(taskText, taskType, state) {
  const normalized = taskText.trim() || "Start the task";
  const lower = normalized.toLowerCase();
  let steps = [
    `Open or place "${normalized}" where you can see it`,
    "Find the first visible piece",
    "Do the smallest ugly version",
    "Stop and mark what changed",
  ];

  if (/tax|invoice|bank|document|paper|form|admin/.test(lower) || taskType === "Admin") {
    steps = [
      "Open the folder, email, or app",
      "Find one required document",
      "Put documents in one place",
      "Start the form or list",
      "Stop after 15 minutes if needed",
    ];
  }

  if (taskType === "Coding") {
    steps = [
      "Open the project",
      "Find the exact file or failing screen",
      "Write one sentence about the next change",
      "Change one small thing",
      "Run the smallest check",
    ];
  }

  if (taskType === "Writing") {
    steps = [
      "Open the draft",
      "Write the rough heading",
      "Add three messy bullets",
      "Turn one bullet into a sentence",
      "Leave the next sentence cue",
    ];
  }

  if (taskType === "Studying" || taskType === "Reading") {
    steps = [
      "Open the material",
      "Choose one page or section",
      "Read for two minutes",
      "Write one rough note",
      "Mark the next place to restart",
    ];
  }

  if (taskType === "Cleaning" || taskType === "Quick chores") {
    steps = [
      "Stand up and choose one zone",
      "Move clothes or obvious items",
      "Collect cups or dishes",
      "Throw away visible trash",
      "Stop and look at the reset",
    ];
  }

  if (taskType === "Planning") {
    steps = [
      "Open a blank list",
      "Write the outcome in plain words",
      "Add three possible steps",
      "Circle the easiest first step",
      "Schedule only the next move",
    ];
  }

  if (taskType === "Creative work") {
    steps = [
      "Open the canvas or tool",
      "Make one intentionally rough mark",
      "Choose one constraint",
      "Create for five minutes",
      "Save the next idea",
    ];
  }

  if (taskType === "Deep work") {
    steps = [
      "Clear the working surface",
      "Open only the core material",
      "Define the next 25-minute outcome",
      "Do the first imperfect pass",
      "Capture the restart point",
    ];
  }

  if (state === "Overwhelmed" || state === "Anxious") {
    return steps.slice(0, 3);
  }
  if (state === "Avoiding") {
    return ["Make the task visible", ...steps.slice(1, 4)];
  }
  return steps;
}

function previewPulse() {
  const taskText = dom.taskInput.value.trim() || "Start one visible piece";
  const pulse = buildPulse({ state: selectedState, taskType: selectedTask, taskText });
  dom.modePill.textContent = pulse.mode;
  dom.pulseState.textContent = pulse.state;
  dom.pulseMinutes.textContent = pulse.minutes;
  dom.coachCopy.textContent = pulse.coach;
  dom.nudgeLevel.textContent = pulse.nudge;
  applyPulseColor(pulse);
}

function generatePulse() {
  const taskText = dom.taskInput.value.trim() || "Start one visible piece";
  currentPulse = buildPulse({ state: selectedState, taskType: selectedTask, taskText });
  currentSteps = fractureTask(taskText, selectedTask, selectedState);
  currentStepIndex = 0;
  fidgetScore = 0;
  session = {
    id: makeId(),
    running: false,
    saved: false,
    duration: currentPulse.minutes * 60,
    remaining: currentPulse.minutes * 60,
    driftCount: 0,
    completedSteps: 0,
    phase: "Ignition",
    startedAt: null,
  };
  addBreadcrumb("You named the thing.");
  renderPulse();
  renderSteps();
  syncChecklistFromSteps(true);
  buildPlayerQueue();
  renderPlayer();
  addMoxieMessage("coach", getMoxieReply("pulse"));
  renderTimer();
  renderFingerprint();
  applyAudioSettings();
}

function renderPulse() {
  if (!currentPulse) {
    previewPulse();
    return;
  }
  dom.modePill.textContent = currentPulse.mode;
  dom.pulseState.textContent = currentPulse.state;
  dom.pulseMinutes.textContent = currentPulse.minutes;
  dom.nudgeLevel.textContent = currentPulse.nudge;
  dom.coachCopy.textContent = currentPulse.coach;
  dom.nextActionText.textContent = currentSteps[currentStepIndex] || "Choose the next restart point.";
  applyPulseColor(currentPulse);
}

function applyPulseColor(pulse) {
  const colors = {
    foggy: ["#5477d8", "#f2b84b", "#2f8f82"],
    restless: ["#f26f5e", "#f2b84b", "#2f8f82"],
    avoiding: ["#8f75d8", "#f2b84b", "#2f8f82"],
    overwhelmed: ["#2f8f82", "#f7f4eb", "#5477d8"],
    hyperfocused: ["#13211e", "#2f8f82", "#5477d8"],
    tired: ["#f2b84b", "#f7f4eb", "#2f8f82"],
    anxious: ["#5477d8", "#f7f4eb", "#2f8f82"],
    ready: ["#2f8f82", "#f2b84b", "#f26f5e"],
  };
  const selected = colors[pulse.color] || colors.ready;
  dom.pulseOrb.style.background = `
    radial-gradient(circle at 42% 38%, rgba(255, 255, 255, 0.94), rgba(255, 253, 246, 0.22) 38%, transparent 39%),
    conic-gradient(from 210deg, ${selected[0]}, ${selected[1]}, ${selected[2]}, ${selected[0]})
  `;
}

function renderSteps() {
  dom.stepsList.replaceChildren(
    ...currentSteps.map((step, index) => {
      const item = document.createElement("li");
      item.textContent = step;
      if (index < currentStepIndex) {
        item.classList.add("is-done");
      }
      return item;
    }),
  );
  dom.completeStepButton.disabled = currentSteps.length === 0;
  dom.nextActionText.textContent = currentSteps[currentStepIndex] || "Stop now or choose a short continuation.";
}

function makeChecklistItem(text, done = false) {
  return {
    id: makeId(),
    text,
    done,
    createdAt: new Date().toISOString(),
  };
}

function syncChecklistFromSteps(replace = false) {
  if (!currentSteps.length) {
    return;
  }
  if (replace || checklistItems.length === 0) {
    checklistItems = currentSteps.map((step, index) => makeChecklistItem(step, index < currentStepIndex));
  } else {
    const existing = new Set(checklistItems.map((item) => item.text));
    currentSteps.forEach((step) => {
      if (!existing.has(step)) {
        checklistItems.push(makeChecklistItem(step));
      }
    });
  }
  persistChecklist();
  renderChecklist();
}

function persistChecklist() {
  db.checklist = checklistItems.slice(0, 60);
  const user = getActiveUser();
  if (user) {
    user.checklist = db.checklist;
  }
  saveDatabase();
}

function renderChecklist() {
  const doneCount = checklistItems.filter((item) => item.done).length;
  const total = checklistItems.length || 1;
  const percent = Math.round((doneCount / total) * 100);
  dom.checklistProgressText.textContent = `${percent}%`;
  dom.checklistDoneCount.textContent = doneCount;
  dom.checklistMeter.style.setProperty("--progress", `${percent * 3.6}deg`);

  if (!checklistItems.length) {
    const empty = document.createElement("li");
    empty.className = "checklist-empty";
    empty.textContent = "Add one tiny step or sync from Flux Fracture.";
    dom.checklistList.replaceChildren(empty);
    return;
  }

  dom.checklistList.replaceChildren(
    ...checklistItems.map((item) => {
      const li = document.createElement("li");
      li.className = "checklist-item";
      li.classList.toggle("is-done", item.done);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "check-toggle";
      toggle.setAttribute("aria-label", item.done ? "Mark incomplete" : "Mark complete");
      toggle.innerHTML = "<span></span>";
      toggle.addEventListener("click", () => toggleChecklistItem(item.id));

      const text = document.createElement("span");
      text.className = "check-text";
      text.textContent = item.text;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "check-remove";
      remove.setAttribute("aria-label", "Remove checklist item");
      remove.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
      remove.addEventListener("click", () => removeChecklistItem(item.id));

      li.append(toggle, text, remove);
      return li;
    }),
  );
}

function toggleChecklistItem(id) {
  const item = checklistItems.find((entry) => entry.id === id);
  if (!item) {
    return;
  }
  item.done = !item.done;
  if (item.done) {
    addBreadcrumb("You sparked a checklist step.");
    playRewardSound();
    dom.checklistMeter.classList.remove("is-pulsing");
    window.requestAnimationFrame(() => dom.checklistMeter.classList.add("is-pulsing"));
    addMoxieMessage("coach", "Moxie: Nice. That is evidence, not vibes. Want the next step smaller or steady?");
  }
  persistChecklist();
  renderChecklist();
}

function markChecklistIndexDone(index) {
  const item = checklistItems[index];
  if (!item || item.done) {
    return;
  }
  item.done = true;
  persistChecklist();
  renderChecklist();
}

function addChecklistItem(text) {
  const cleaned = text.trim();
  if (!cleaned) {
    return;
  }
  checklistItems.unshift(makeChecklistItem(cleaned));
  persistChecklist();
  renderChecklist();
  addMoxieMessage("coach", "Moxie: Good. Keep it visible, keep it small, keep the exit easy.");
}

function removeChecklistItem(id) {
  checklistItems = checklistItems.filter((item) => item.id !== id);
  persistChecklist();
  renderChecklist();
}

function clearDoneChecklistItems() {
  checklistItems = checklistItems.filter((item) => !item.done);
  persistChecklist();
  renderChecklist();
}

function renderTimer() {
  const minutes = Math.floor(session.remaining / 60).toString().padStart(2, "0");
  const seconds = Math.floor(session.remaining % 60).toString().padStart(2, "0");
  dom.timerDisplay.textContent = `${minutes}:${seconds}`;
  dom.sessionLabel.textContent = session.running
    ? `${session.phase} phase`
    : currentPulse
      ? `${currentPulse.minutes}-minute ${currentPulse.mode.toLowerCase()}`
      : "No active sprint";
  dom.playPauseIcon.setAttribute(
    "d",
    session.running ? "M7 5h4v14H7zM13 5h4v14h-4z" : "M8 5v14l11-7Z",
  );
  dom.pulseOrb.classList.toggle("is-running", session.running);
}

function startTimer() {
  if (!currentPulse) {
    generatePulse();
  }
  if (session.running) {
    pauseTimer();
    return;
  }
  session.running = true;
  session.startedAt = session.startedAt || new Date().toISOString();
  addBreadcrumb("You started the sprint.");
  timerId = window.setInterval(tickTimer, 1000);
  renderTimer();
}

function pauseTimer() {
  session.running = false;
  window.clearInterval(timerId);
  timerId = null;
  renderTimer();
}

function resetTimer() {
  pauseTimer();
  const duration = currentPulse ? currentPulse.minutes * 60 : 9 * 60;
  session.remaining = duration;
  session.duration = duration;
  session.phase = "Ignition";
  session.saved = false;
  renderTimer();
  applyAudioSettings();
}

function tickTimer() {
  session.remaining = Math.max(0, session.remaining - 1);
  const elapsedRatio = 1 - session.remaining / session.duration;
  if (elapsedRatio > 0.9) {
    session.phase = "Cooldown";
  } else if (elapsedRatio > 0.18) {
    session.phase = "Lock-in";
  } else {
    session.phase = "Ignition";
  }
  if (session.remaining % 20 === 0) {
    applyAudioSettings();
  }
  if (session.remaining <= 0) {
    completeSession("timer");
  }
  renderTimer();
}

function completeSession(reason) {
  pauseTimer();
  session.remaining = 0;
  session.phase = "Cooldown";
  addBreadcrumb(reason === "steps" ? "You completed the visible path." : "You reached the timer.");
  saveSessionSummary(reason);
  renderTimer();
  renderFingerprint();
  playRewardSound();
}

function saveSessionSummary(reason) {
  if (session.saved || !currentPulse) {
    return;
  }
  const user = getActiveUser();
  if (!user) {
    dom.coachCopy.textContent = "Log in to save this session to your attention fingerprint.";
    return;
  }
  const summary = {
    id: session.id,
    taskText: currentPulse.taskText,
    taskType: currentPulse.taskType,
    state: currentPulse.state,
    mode: currentPulse.mode,
    durationMin: Math.round(session.duration / 60),
    completedSteps: session.completedSteps,
    driftCount: session.driftCount,
    fidgetScore,
    room: currentRoom,
    reason,
    endedAt: new Date().toISOString(),
  };
  user.sessions = [summary, ...(user.sessions || [])].slice(0, 50);
  user.breadcrumbs = Array.from(dom.breadcrumbStack.children)
    .map((item) => item.textContent)
    .slice(0, 30);
  session.saved = true;
  saveDatabase();
}

function completeVisibleStep() {
  if (!currentPulse) {
    generatePulse();
  }
  if (currentStepIndex >= currentSteps.length) {
    return;
  }
  currentStepIndex += 1;
  session.completedSteps += 1;
  markChecklistIndexDone(currentStepIndex - 1);
  addBreadcrumb(getStepReward(session.completedSteps));
  playRewardSound();
  if (currentStepIndex >= currentSteps.length) {
    dom.coachCopy.textContent = "You made the task easier to re-enter. Stop now or build a tiny continuation.";
    completeSession("steps");
  } else {
    dom.coachCopy.textContent = "Good. Keep the next step visible and ignore the rest for now.";
  }
  renderSteps();
  applyAudioSettings();
}

function getStepReward(count) {
  const rewards = [
    "You opened the door.",
    "You did the first ugly version.",
    "You made the task smaller.",
    "You returned after friction.",
    "You completed a boring task.",
  ];
  return rewards[Math.min(count - 1, rewards.length - 1)];
}

function addBreadcrumb(text) {
  const item = document.createElement("span");
  item.textContent = text;
  dom.breadcrumbStack.prepend(item);
  while (dom.breadcrumbStack.children.length > 7) {
    dom.breadcrumbStack.lastElementChild.remove();
  }
}

function driftReset() {
  if (!currentPulse) {
    generatePulse();
  }
  session.driftCount += 1;
  session.phase = "Drift recovery";
  const lastStep = currentSteps[currentStepIndex] || currentSteps[currentSteps.length - 1] || "look at the task";
  dom.coachCopy.textContent = `No problem. Your last step was: ${lastStep}. Do only the next 30 seconds.`;
  addBreadcrumb("You returned after drifting.");
  playDriftCue();
  renderTimer();
  applyAudioSettings();
}

function shuffleSteps() {
  const taskText = dom.taskInput.value.trim() || (currentPulse && currentPulse.taskText) || "Start the task";
  const tiny = fractureTask(taskText, selectedTask, "Overwhelmed");
  currentSteps = tiny.map((step) => {
    if (step.length < 24) {
      return step;
    }
    return step.replace(/^Open or place /, "Put ").replace(/^Find /, "Find just ");
  });
  currentStepIndex = 0;
  dom.coachCopy.textContent = "Smaller mode: choose the step you could do badly.";
  renderSteps();
}

function renderRooms() {
  dom.roomSelect.replaceChildren(
    ...rooms.map((room) => {
      const option = document.createElement("option");
      option.value = room;
      option.textContent = room;
      return option;
    }),
  );
  dom.roomSelect.value = currentRoom;
  updateRoomCount();
}

function updateRoomCount() {
  const seed = currentRoom.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  dom.roomCount.textContent = `${(seed % 33) + 8} here`;
}

function joinRoom() {
  currentRoom = dom.roomSelect.value;
  updateRoomCount();
  addSignal("Joined room");
  dom.coachCopy.textContent = "Company is on. Keep the signal lightweight.";
}

function addSignal(text) {
  const item = document.createElement("span");
  item.textContent = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} ${text}`;
  dom.signalLog.prepend(item);
  while (dom.signalLog.children.length > 5) {
    dom.signalLog.lastElementChild.remove();
  }
  const user = getActiveUser();
  if (user) {
    user.roomSignals = [
      {
        text,
        room: currentRoom,
        at: new Date().toISOString(),
      },
      ...(user.roomSignals || []),
    ].slice(0, 30);
    saveDatabase();
  }
}

function tapFidget(type = "tap") {
  const now = performance.now();
  const target = currentPulse ? 60000 / currentPulse.tempo : 780;
  const delta = lastTapAt ? Math.abs(now - lastTapAt - target) : target;
  const closeness = Math.max(0, 1 - delta / target);
  fidgetScore = Math.round((fidgetScore * 0.7 + closeness * 100 * 0.3) || 18);
  lastTapAt = now;
  dom.syncScore.textContent = `${fidgetScore}%`;
  dom.fidgetPad.classList.remove("is-tapped");
  window.requestAnimationFrame(() => dom.fidgetPad.classList.add("is-tapped"));
  if (navigator.vibrate) {
    navigator.vibrate(type === "hold" ? [35, 30, 35] : 24);
  }
}

function buildToneMap(modeName, feelingName, index = 0, includeSlots = false) {
  const modeProfile = toneModeProfiles[modeName] || toneModeProfiles["Flow Mode"];
  const feelingProfile = feelingProfiles[feelingName] || feelingProfiles.Ready;
  const phase = tonePhases[index % tonePhases.length];
  const low = modeProfile.bpm[0] + feelingProfile.offset;
  const high = modeProfile.bpm[1] + feelingProfile.offset;
  const bpmTarget = Math.max(42, Math.min(132, Math.round((low + high) / 2 + (index % 7) - 3)));
  const energyTarget = Math.max(1, Math.min(10, modeProfile.energy + ((index % 5) - 2)));
  const sensoryLoad = modeProfile.load;
  const tags = [
    feelingProfile.tag,
    modeProfile.motion,
    `${sensoryLoad} sensory load`,
    `${modeProfile.vocals} vocals`,
    phase,
  ];
  const map = {
    id: `fluxtone-${String(index + 1).padStart(4, "0")}`,
    title: `${feelingName} ${modeName} ${phase}`,
    mode: modeName,
    feeling: feelingName,
    phase,
    bpmRange: [Math.max(42, low), Math.min(140, high)],
    bpmTarget,
    energyTarget,
    vocalDensity: modeProfile.vocals,
    sensoryLoad,
    texture: feelingProfile.texture,
    scienceCue:
      "Designed for predictable rhythm, low lyric interference, controlled novelty, and phase-based arousal regulation.",
    epidemicSearchTags: tags,
    trackSlotCount: 100,
  };

  if (includeSlots) {
    map.trackSlots = Array.from({ length: 100 }, (_, slotIndex) => ({
      slot: slotIndex + 1,
      targetBpm: Math.max(42, Math.min(140, bpmTarget + ((slotIndex % 9) - 4))),
      energyTarget: Math.max(1, Math.min(10, energyTarget + ((slotIndex % 3) - 1))),
      textureTarget: slotIndex % 4 === 0 ? `${feelingProfile.texture}; subtle transition` : feelingProfile.texture,
      searchTags: tags,
      licensingNote: "Fill with an approved, licensed track from Epidemic Sound or another licensed library.",
    }));
  }

  return map;
}

function generateToneAtlas() {
  return Array.from({ length: 1000 }, (_, index) => {
    const modeName = toneModes[index % toneModes.length];
    const feelingName = toneFeelings[Math.floor(index / toneModes.length) % toneFeelings.length];
    return buildToneMap(modeName, feelingName, index, true);
  });
}

function renderToneControls() {
  dom.toneModeSelect.replaceChildren(
    ...toneModes.map((modeName) => {
      const option = document.createElement("option");
      option.value = modeName;
      option.textContent = modeName;
      return option;
    }),
  );
  dom.toneFeelingSelect.replaceChildren(
    ...toneFeelings.map((feelingName) => {
      const option = document.createElement("option");
      option.value = feelingName;
      option.textContent = feelingName;
      return option;
    }),
  );
  dom.toneModeSelect.value = "Flow Mode";
  dom.toneFeelingSelect.value = "Ready";
  renderTonePreview();
}

function renderTonePreview() {
  const map = buildToneMap(dom.toneModeSelect.value, dom.toneFeelingSelect.value, 0, false);
  dom.tonePreview.innerHTML = `
    <strong>${map.title}</strong>
    <p>${map.bpmRange[0]}-${map.bpmRange[1]} BPM · energy ${map.energyTarget}/10 · ${map.texture}</p>
    <div class="tone-tags">${map.epidemicSearchTags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
}

function exportToneAtlas() {
  const atlas = {
    product: "FocusFlux",
    feature: "FluxTone Atlas",
    playlistCount: 1000,
    slotsPerPlaylist: 100,
    generatedAt: new Date().toISOString(),
    licensing: "Playlist maps only. Add tracks you are licensed to use.",
    playlists: generateToneAtlas(),
  };
  const blob = new Blob([JSON.stringify(atlas, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "focusflux-fluxtone-atlas.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function buildPlayerQueue() {
  const pulseMode = currentPulse ? currentPulse.mode : "Start Mode";
  const pulseFeeling = currentPulse ? currentPulse.state : "Ready";
  playerTracks = [
    buildToneMap("Ignition", pulseFeeling, 0, false),
    buildToneMap(pulseMode, pulseFeeling, 1, false),
    buildToneMap("Drift Recovery", pulseFeeling === "Ready" ? "Scattered" : pulseFeeling, 2, false),
    buildToneMap("Reward", pulseFeeling, 3, false),
    buildToneMap("Cooldown", pulseFeeling, 4, false),
    ...playerSeedTracks.map((track, index) => ({
      ...buildToneMap(track.mode, track.feeling, index + 5, false),
      title: `FluxTone: ${track.title}`,
    })),
  ];
  playerIndex = Math.min(playerIndex, playerTracks.length - 1);
}

function renderPlayer() {
  if (!playerTracks.length) {
    buildPlayerQueue();
  }
  const track = playerTracks[playerIndex];
  dom.playerPhaseLabel.textContent = track.mode;
  dom.playerTitle.textContent = track.title.startsWith("FluxTone") ? track.title : `FluxTone: ${track.title}`;
  dom.playerTrackMeta.textContent = `${track.bpmTarget} BPM · energy ${track.energyTarget}/10 · ${track.vocalDensity} vocals`;
  dom.playerPhaseSelect.value = toneModeProfiles[track.mode] ? track.mode : "Ignition";
  dom.playerPlayIcon.setAttribute(
    "d",
    audio.playing ? "M7 5h4v14H7zM13 5h4v14h-4z" : "M8 5v14l11-7Z",
  );
  dom.playerProgressBar.style.width = `${Math.round(playerProgress * 100)}%`;
  dom.playerQueue.replaceChildren(
    ...playerTracks.map((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.phase;
      button.setAttribute("aria-pressed", String(index === playerIndex));
      button.addEventListener("click", () => {
        playerIndex = index;
        playerProgress = 0;
        renderPlayer();
        applyAudioSettings();
      });
      return button;
    }),
  );
}

function setAudioPlaying(playing) {
  setupAudio();
  if (!audio.context) {
    return;
  }
  if (audio.context.state === "suspended") {
    audio.context.resume();
  }
  audio.playing = playing;
  audio.master.gain.setTargetAtTime(audio.playing ? 0.05 : 0.0001, audio.context.currentTime, 0.03);
  dom.soundButton.classList.toggle("is-on", audio.playing);
  renderPlayer();
  applyAudioSettings();
}

function previousPlayerTrack() {
  playerIndex = (playerIndex - 1 + playerTracks.length) % playerTracks.length;
  playerProgress = 0;
  renderPlayer();
  applyAudioSettings();
}

function nextPlayerTrack() {
  playerIndex = (playerIndex + 1) % playerTracks.length;
  playerProgress = 0;
  renderPlayer();
  applyAudioSettings();
}

function setPlayerPhase(modeName) {
  const feeling = currentPulse ? currentPulse.state : selectedState;
  playerTracks[playerIndex] = buildToneMap(modeName, feeling, playerIndex, false);
  session.phase = modeName === "Drift Recovery" ? "Drift recovery" : modeName;
  playerProgress = 0;
  renderPlayer();
  renderTimer();
  applyAudioSettings();
}

function drawPlayerVisualizer() {
  const canvas = dom.playerCanvas;
  if (!canvas) {
    return;
  }
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const track = playerTracks[playerIndex] || buildToneMap("Ignition", "Ready", 0, false);
  const time = performance.now() / 1000;
  if (audio.playing) {
    playerProgress = (playerProgress + 0.0024) % 1;
    dom.playerProgressBar.style.width = `${Math.round(playerProgress * 100)}%`;
  }

  context.clearRect(0, 0, width, height);
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "rgba(47, 143, 130, 0.9)");
  gradient.addColorStop(0.48, "rgba(242, 184, 75, 0.82)");
  gradient.addColorStop(1, "rgba(242, 111, 94, 0.72)");
  context.fillStyle = "rgba(255, 253, 246, 0.045)";
  for (let x = 0; x < width; x += 34) {
    context.fillRect(x, 0, 1, height);
  }
  context.strokeStyle = gradient;
  context.lineWidth = 7;
  context.lineCap = "round";
  for (let line = 0; line < 3; line += 1) {
    context.beginPath();
    const amp = (track.energyTarget * 3.6 + line * 9) * (audio.playing ? 1 : 0.38);
    const baseY = height * (0.32 + line * 0.2);
    for (let x = 0; x <= width; x += 10) {
      const y = baseY + Math.sin(x / 42 + time * (line + 1.4)) * amp;
      if (x === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    context.globalAlpha = 0.88 - line * 0.2;
    context.stroke();
  }
  context.globalAlpha = 1;
  context.fillStyle = "rgba(255, 253, 246, 0.72)";
  for (let bar = 0; bar < 18; bar += 1) {
    const barHeight = 12 + Math.abs(Math.sin(time * 2 + bar)) * track.energyTarget * 4;
    context.fillRect(28 + bar * 34, height - 28 - barHeight, 8, barHeight);
  }
  playerAnimationId = window.requestAnimationFrame(drawPlayerVisualizer);
}

function addMoxieMessage(role, text) {
  const message = document.createElement("p");
  message.className = `moxie-message is-${role}`;
  message.textContent = text;
  dom.moxieMessages.prepend(message);
  while (dom.moxieMessages.children.length > 5) {
    dom.moxieMessages.lastElementChild.remove();
  }
}

function getMoxieReply(intent, input = "") {
  const nextStep = currentSteps[currentStepIndex] || "make the task visible";
  const state = currentPulse ? currentPulse.state : selectedState;
  const taskText = input || (currentPulse && currentPulse.taskText) || dom.taskInput.value.trim() || "the sticky thing";
  const lower = taskText.toLowerCase();
  const hasAnxiety = /anxious|anxiety|panic|worried|overwhelmed|spiral|stress/.test(lower);
  const hasProcrastination = /avoid|avoiding|procrastinat|stuck|can't start|cant start|later|putting off/.test(lower);
  const hasADHD = /adhd|add|distract|executive|focus|scattered|restless|drift/.test(lower);
  const tasks = extractTasks(taskText);
  const replies = {
    pulse: `Moxie: ${state} noted. Put your attention on this only: ${nextStep}.`,
    smaller: `Moxie: Shrink "${taskText}" until it is almost silly. Next move: ${nextStep}.`,
    restart: `Moxie: Restart lane open. Look at the last visible step, touch the workspace, then do 30 seconds.`,
    calm: hasAnxiety
      ? "Moxie: Anxiety mode. Exhale, lower the stakes, and choose the task that reduces the most pressure in the next 10 minutes."
      : "Moxie: Pressure down. Slow pulse, fewer prompts, one visible action.",
    plan: buildMoxiePlan(tasks, taskText),
    triage: buildMoxieTriage(tasks, taskText),
    unstick: hasProcrastination
      ? `Moxie: Procrastination usually means the entry point is too vague, too big, or too emotionally expensive. Open with this: ${nextStep}.`
      : `Moxie: Find the sticky edge. Is it unclear, boring, scary, or too large? Then do: ${nextStep}.`,
    custom: buildMoxieCustomReply({ taskText, tasks, hasADHD, hasAnxiety, hasProcrastination, nextStep }),
  };
  return replies[intent] || replies.custom;
}

function extractTasks(text) {
  return text
    .split(/\n|,|;|\band\b|\bthen\b|\balso\b/i)
    .map((item) => item.replace(/^i need to\s+/i, "").replace(/^need to\s+/i, "").trim())
    .filter((item) => item.length > 2)
    .slice(0, 8);
}

function scoreTaskPriority(task) {
  const lower = task.toLowerCase();
  let score = 0;
  if (/today|tonight|urgent|deadline|due|late|now/.test(lower)) score += 5;
  if (/email|call|submit|pay|send|book|appointment|form/.test(lower)) score += 3;
  if (/clean|laundry|dishes|trash|room/.test(lower)) score += 2;
  if (/finish|start|fix|study|write|code/.test(lower)) score += 2;
  if (/tiny|quick|small|5 min|five/.test(lower)) score += 1;
  return score;
}

function prioritizeTasks(tasks, fallback) {
  const usable = tasks.length ? tasks : [fallback];
  return usable
    .map((task) => ({ task, score: scoreTaskPriority(task) }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.task);
}

function buildMoxiePlan(tasks, fallback) {
  const prioritized = prioritizeTasks(tasks, fallback);
  const first = prioritized[0] || "make the task visible";
  const second = prioritized[1] || "capture the next restart point";
  const third = prioritized[2] || "stop before burnout";
  return `Moxie plan: 1. Start with "${first}" for 7 minutes. 2. Do only the next visible piece of "${second}". 3. Park "${third}" as the restart cue.`;
}

function buildMoxieTriage(tasks, fallback) {
  const prioritized = prioritizeTasks(tasks, fallback);
  const pressure = prioritized[0] || fallback;
  const quick = prioritized.find((task) => /email|call|pay|send|trash|dishes|quick|small/i.test(task)) || prioritized[1] || pressure;
  return `Moxie triage: pressure first is "${pressure}". Quick win is "${quick}". If both feel sticky, do 30 seconds of setup, not the whole task.`;
}

function buildMoxieCustomReply({ taskText, tasks, hasADHD, hasAnxiety, hasProcrastination, nextStep }) {
  if (tasks.length > 1) {
    return buildMoxieTriage(tasks, taskText);
  }
  if (hasAnxiety) {
    return `Moxie: Anxiety wants certainty before action. We will use a tiny reversible step: ${nextStep}.`;
  }
  if (hasProcrastination) {
    return `Moxie: This is an initiation problem, not a character problem. Make the task visible, then do: ${nextStep}.`;
  }
  if (hasADHD) {
    return `Moxie: ADHD-friendly path: externalize it, shrink it, add a cue, then restart fast. First cue: ${nextStep}.`;
  }
  return `Moxie: I hear "${taskText}". Want a plan, triage, calm, or an unstick move?`;
}

function handleMoxieChoice(event) {
  const intent = event.currentTarget.dataset.moxie;
  addMoxieMessage("coach", getMoxieReply(intent));
  if (intent === "smaller") {
    shuffleSteps();
  }
  if (intent === "restart") {
    driftReset();
  }
  if (intent === "calm") {
    setPlayerPhase("Cooldown");
  }
  if (intent === "plan" || intent === "triage") {
    const tasks = extractTasks(dom.taskInput.value || (currentPulse && currentPulse.taskText) || "");
    const prioritized = prioritizeTasks(tasks, dom.taskInput.value || "Start the task");
    if (prioritized.length) {
      currentSteps = fractureTask(prioritized[0], selectedTask, selectedState);
      currentStepIndex = 0;
      syncChecklistFromSteps(true);
      renderSteps();
    }
  }
  if (intent === "unstick") {
    shuffleSteps();
  }
}

function renderFingerprint() {
  const user = getActiveUser();
  const sessions = user ? user.sessions || [] : [];
  dom.savedCount.textContent = `${sessions.length} saved`;

  const completed = sessions.filter((item) => item.completedSteps > 0);
  const bestLength = completed.length
    ? `${mode(completed.map((item) => item.durationMin))} min`
    : "Not enough data";
  const bestMode = completed.length ? mode(completed.map((item) => item.mode)) : "Learning";
  const driftAverage = completed.length
    ? `${(completed.reduce((sum, item) => sum + item.driftCount, 0) / completed.length).toFixed(1)} drifts`
    : "Learning";
  const bestRoom = completed.length ? mode(completed.map((item) => item.room)) : "Try one";
  const taskFriction = sessions.length ? mode(sessions.map((item) => item.taskType)) : "Unknown";

  const rows = [
    ["Best length", bestLength],
    ["Best mode", bestMode],
    ["Re-entry need", driftAverage],
    ["Helpful room", bestRoom],
    ["Friction task", taskFriction],
  ];

  dom.fingerprintGrid.replaceChildren(
    ...rows.map(([label, value]) => {
      const wrapper = document.createElement("div");
      const term = document.createElement("dt");
      const detail = document.createElement("dd");
      term.textContent = label;
      detail.textContent = value;
      wrapper.append(term, detail);
      return wrapper;
    }),
  );
}

function mode(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || values[0];
}

function setAuthMode(modeName) {
  authMode = modeName;
  const isCreate = authMode === "create";
  dom.authTitle.textContent = isCreate ? "Create account" : "Log in";
  dom.authSubtitle.textContent = isCreate
    ? "Your sessions, rooms, and attention fingerprint save locally."
    : "Your FocusFlux database stays on this device.";
  dom.nameField.hidden = !isCreate;
  dom.nameInput.required = isCreate;
  dom.submitAuthButton.textContent = isCreate ? "Create account" : "Log in";
  dom.switchAuthButton.textContent = isCreate ? "Log in instead" : "Create account";
  dom.authError.textContent = "";
}

function openAuth(modeName = "login") {
  setAuthMode(modeName);
  if (typeof dom.authDialog.showModal === "function") {
    dom.authDialog.showModal();
  } else {
    dom.authDialog.setAttribute("open", "");
  }
}

function closeAuth() {
  dom.authDialog.close();
}

async function submitAuth(event) {
  event.preventDefault();
  dom.authError.textContent = "";
  const email = dom.emailInput.value.trim().toLowerCase();
  const password = dom.passwordInput.value;
  const passwordHash = await hashPassword(password);
  const existing = Object.values(db.users).find((user) => user.email === email);

  if (authMode === "create") {
    if (existing) {
      dom.authError.textContent = "That account already exists on this device.";
      return;
    }
    const id = makeId();
    db.users[id] = {
      id,
      name: dom.nameInput.value.trim() || email.split("@")[0],
      email,
      passwordHash,
      createdAt: new Date().toISOString(),
      sessions: [],
      roomSignals: [],
      breadcrumbs: [],
    };
    db.activeUserId = id;
  } else {
    if (!existing || existing.passwordHash !== passwordHash) {
      dom.authError.textContent = "Email or password does not match this browser database.";
      return;
    }
    db.activeUserId = existing.id;
  }

  saveDatabase();
  dom.authForm.reset();
  closeAuth();
  renderAuthState();
  renderFingerprint();
  addBreadcrumb("Your Fluxbase is active.");
}

async function useDemoAccount() {
  const email = "demo@focusflux.local";
  const existing = Object.values(db.users).find((user) => user.email === email);
  if (existing) {
    db.activeUserId = existing.id;
  } else {
    const id = makeId();
    db.users[id] = {
      id,
      name: "Demo Focuser",
      email,
      passwordHash: await hashPassword("focusflux-demo"),
      createdAt: new Date().toISOString(),
      sessions: [
        {
          id: makeId(),
          taskText: "Clean my room",
          taskType: "Cleaning",
          state: "Overwhelmed",
          mode: "Body Mode",
          durationMin: 6,
          completedSteps: 3,
          driftCount: 1,
          fidgetScore: 67,
          room: "Cleaning room",
          reason: "steps",
          endedAt: new Date().toISOString(),
        },
        {
          id: makeId(),
          taskText: "Finish tax stuff",
          taskType: "Admin",
          state: "Avoiding",
          mode: "Chaos Mode",
          durationMin: 9,
          completedSteps: 4,
          driftCount: 2,
          fidgetScore: 42,
          room: "Admin hell room",
          reason: "steps",
          endedAt: new Date().toISOString(),
        },
        {
          id: makeId(),
          taskText: "Fix app bug",
          taskType: "Coding",
          state: "Ready",
          mode: "Flow Mode",
          durationMin: 25,
          completedSteps: 5,
          driftCount: 0,
          fidgetScore: 73,
          room: "25-minute work sprint",
          reason: "timer",
          endedAt: new Date().toISOString(),
        },
      ],
      roomSignals: [],
      breadcrumbs: [],
    };
    db.activeUserId = id;
  }
  saveDatabase();
  closeAuth();
  renderAuthState();
  renderFingerprint();
  addBreadcrumb("Demo Fluxbase loaded.");
}

function renderAuthState() {
  const user = getActiveUser();
  dom.authButton.textContent = user ? `Log out, ${user.name.split(" ")[0]}` : "Log in";
}

function handleAuthButton() {
  if (getActiveUser()) {
    db.activeUserId = null;
    saveDatabase();
    renderAuthState();
    renderFingerprint();
    addBreadcrumb("Logged out.");
    return;
  }
  openAuth("login");
}

function sanitizeDatabaseForPreview() {
  const copy = JSON.parse(JSON.stringify(db));
  Object.values(copy.users || {}).forEach((user) => {
    user.passwordHash = "[saved hash]";
  });
  return copy;
}

function openDatabaseDialog() {
  dom.databasePreview.textContent = JSON.stringify(sanitizeDatabaseForPreview(), null, 2);
  if (typeof dom.dataDialog.showModal === "function") {
    dom.dataDialog.showModal();
  } else {
    dom.dataDialog.setAttribute("open", "");
  }
}

function exportDatabase() {
  const blob = new Blob([JSON.stringify(sanitizeDatabaseForPreview(), null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "focusflux-database.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function clearDatabase() {
  const confirmed = window.confirm("Clear all FocusFlux data saved in this browser?");
  if (!confirmed) {
    return;
  }
  localStorage.removeItem(DB_KEY);
  db = loadDatabase();
  dom.dataDialog.close();
  renderAuthState();
  renderFingerprint();
  addBreadcrumb("Fluxbase cleared.");
}

function setupAudio() {
  if (audio.context) {
    return;
  }
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    dom.coachCopy.textContent = "This browser does not support the audio engine.";
    return;
  }
  audio.context = new AudioContext();
  audio.master = audio.context.createGain();
  audio.master.gain.value = 0.045;
  audio.filter = audio.context.createBiquadFilter();
  audio.filter.type = "lowpass";
  audio.filter.frequency.value = 520;
  audio.oscA = audio.context.createOscillator();
  audio.oscB = audio.context.createOscillator();
  audio.oscA.type = "sine";
  audio.oscB.type = "triangle";
  audio.oscA.connect(audio.filter);
  audio.oscB.connect(audio.filter);
  audio.filter.connect(audio.master);
  audio.master.connect(audio.context.destination);
  audio.oscA.start();
  audio.oscB.start();
}

function toggleSound() {
  setAudioPlaying(!audio.playing);
}

function applyAudioSettings() {
  if (!audio.context) {
    return;
  }
  const track = playerTracks[playerIndex];
  const base = currentPulse ? currentPulse.tempo : track ? track.bpmTarget : 78;
  const progressLift = session.completedSteps * 8;
  const driftDrop = session.phase === "Drift recovery" ? -18 : 0;
  const intensity = Number(dom.playerIntensityRange.value || 6);
  const phaseMap = {
    Ignition: 1.28,
    "Lock-in": 1,
    "Drift recovery": 0.82,
    "Drift Recovery": 0.82,
    Reward: 1.35,
    Cooldown: 0.64,
    "Deadline Mode": 1.22,
  };
  const multiplier = phaseMap[session.phase] || 1;
  const a = 90 + base * multiplier + progressLift + driftDrop + intensity * 2;
  const b = a * 1.5;
  const filter = session.phase === "Lock-in" ? 420 : 560 + intensity * 50 + session.completedSteps * 70;
  const now = audio.context.currentTime;
  audio.oscA.frequency.setTargetAtTime(a, now, 0.18);
  audio.oscB.frequency.setTargetAtTime(b, now, 0.18);
  audio.filter.frequency.setTargetAtTime(filter, now, 0.18);
}

function playRewardSound() {
  playCue([520, 660, 780], 0.055);
}

function playDriftCue() {
  playCue([240, 220, 300], 0.04);
}

function playCue(notes, volume) {
  if (!audio.context || !audio.playing) {
    return;
  }
  const now = audio.context.currentTime;
  notes.forEach((frequency, index) => {
    const osc = audio.context.createOscillator();
    const gain = audio.context.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, now + index * 0.08);
    gain.gain.exponentialRampToValueAtTime(volume, now + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.18);
    osc.connect(gain);
    gain.connect(audio.context.destination);
    osc.start(now + index * 0.08);
    osc.stop(now + index * 0.08 + 0.2);
  });
}

function handleCoachChoice(event) {
  const choice = event.currentTarget.dataset.coach;
  if (choice === "restart") {
    driftReset();
  }
  if (choice === "smaller") {
    shuffleSteps();
  }
  if (choice === "company") {
    dom.roomSelect.value = "I'm avoiding something";
    joinRoom();
  }
}

function bindEvents() {
  dom.authButton.addEventListener("click", handleAuthButton);
  dom.closeAuthButton.addEventListener("click", closeAuth);
  dom.switchAuthButton.addEventListener("click", () => {
    setAuthMode(authMode === "login" ? "create" : "login");
  });
  dom.authForm.addEventListener("submit", submitAuth);
  dom.demoButton.addEventListener("click", useDemoAccount);
  dom.pulseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generatePulse();
  });
  dom.taskInput.addEventListener("input", previewPulse);
  dom.startTimerButton.addEventListener("click", startTimer);
  dom.resetTimerButton.addEventListener("click", resetTimer);
  dom.soundButton.addEventListener("click", toggleSound);
  dom.playerPlayButton.addEventListener("click", toggleSound);
  dom.playerPrevButton.addEventListener("click", previousPlayerTrack);
  dom.playerNextButton.addEventListener("click", nextPlayerTrack);
  dom.playerPhaseSelect.addEventListener("change", () => setPlayerPhase(dom.playerPhaseSelect.value));
  dom.playerIntensityRange.addEventListener("input", applyAudioSettings);
  dom.driftButton.addEventListener("click", driftReset);
  dom.completeStepButton.addEventListener("click", completeVisibleStep);
  dom.shuffleStepsButton.addEventListener("click", shuffleSteps);
  dom.checklistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addChecklistItem(dom.checklistInput.value);
    dom.checklistInput.value = "";
  });
  dom.checklistSyncButton.addEventListener("click", () => syncChecklistFromSteps(false));
  dom.checklistClearButton.addEventListener("click", clearDoneChecklistItems);
  dom.moxieForm.addEventListener("submit", (event) => {
    event.preventDefault();
  const value = dom.moxieInput.value.trim();
    if (!value) {
      return;
    }
    addMoxieMessage("user", value);
    const tasks = extractTasks(value);
    if (tasks.length > 1) {
      const prioritized = prioritizeTasks(tasks, value);
      checklistItems = prioritized.map((task) => makeChecklistItem(task));
      currentSteps = fractureTask(prioritized[0], selectedTask, selectedState);
      currentStepIndex = 0;
      persistChecklist();
      renderChecklist();
      renderSteps();
    }
    addMoxieMessage("coach", getMoxieReply("custom", value));
    dom.moxieInput.value = "";
  });
  document.querySelectorAll("[data-moxie]").forEach((button) => {
    button.addEventListener("click", handleMoxieChoice);
  });
  dom.roomSelect.addEventListener("change", () => {
    currentRoom = dom.roomSelect.value;
    updateRoomCount();
  });
  dom.joinRoomButton.addEventListener("click", joinRoom);
  document.querySelectorAll("[data-signal]").forEach((button) => {
    button.addEventListener("click", () => addSignal(button.dataset.signal));
  });
  dom.fidgetPad.addEventListener("click", () => tapFidget("tap"));
  document.querySelectorAll("[data-fidget]").forEach((button) => {
    button.addEventListener("click", () => tapFidget(button.dataset.fidget));
  });
  document.querySelectorAll("[data-coach]").forEach((button) => {
    button.addEventListener("click", handleCoachChoice);
  });
  dom.toneModeSelect.addEventListener("change", renderTonePreview);
  dom.toneFeelingSelect.addEventListener("change", renderTonePreview);
  dom.previewToneButton.addEventListener("click", renderTonePreview);
  dom.exportToneButton.addEventListener("click", exportToneAtlas);
  dom.openDataButton.addEventListener("click", openDatabaseDialog);
  dom.closeDataButton.addEventListener("click", () => dom.dataDialog.close());
  dom.exportDataButton.addEventListener("click", exportDatabase);
  dom.clearDataButton.addEventListener("click", clearDatabase);
}

function init() {
  renderOptions();
  renderRooms();
  renderToneControls();
  bindEvents();
  renderAuthState();
  renderFingerprint();
  previewPulse();
  currentSteps = fractureTask("Start one visible piece", selectedTask, selectedState);
  if (!checklistItems.length) {
    checklistItems = currentSteps.map((step) => makeChecklistItem(step));
  }
  renderSteps();
  renderChecklist();
  buildPlayerQueue();
  renderPlayer();
  renderTimer();
  addMoxieMessage("coach", "Moxie: Name the sticky bit. I will turn it into a tiny next move.");
  drawPlayerVisualizer();
}

init();
