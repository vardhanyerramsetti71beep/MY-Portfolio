/* ========================================================
   Vardhan Yerramsetti - Interactive Portfolio Core Logic
   High-Performance Cyber-Clean Interactive Suite
   ======================================================== */

// 1. Dynamic Role Typing Animation
const roles = [
  "Python Full Stack Developer",
  "AWS Certified Cloud Practitioner",
  "Flask & FastAPI Microservices Architect",
  "Computer Vision & ML Pipeline Builder",
  "8+ Full-Stack Deployments Live on Vercel"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typedRole");

function typeRoles() {
  if (!typedElement) return;
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 35 : 75;
  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000; // Pause at end of text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 350;
  }
  setTimeout(typeRoles, speed);
}
typeRoles();

// 2. Interactive Background Particle Canvas (Constellation Network)
const canvas = document.getElementById("particleCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 1.8 + 0.8;
      this.baseColor = Math.random() > 0.4 ? "rgba(14, 165, 233, " : "rgba(139, 92, 246, ";
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor + "0.6)";
      ctx.fill();
    }
  }

  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 60);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.18 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// 3. Mobile Navigation Menu Toggle
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const icon = document.getElementById("mobileMenuIcon");
  if (!nav) return;
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    if (icon) icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    nav.classList.add("hidden");
    if (icon) icon.classList.replace("fa-xmark", "fa-bars");
  }
}

// 4. Projects Category Filter & Real-Time Search
let activeProjectCategory = 'all';

function setProjectFilter(category) {
  activeProjectCategory = category;
  document.querySelectorAll(".project-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.className = "project-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-all";
    } else {
      btn.className = "project-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all";
    }
  });
  filterProjects();
}

function filterProjects() {
  const searchInput = document.getElementById("projectSearch");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const cards = document.querySelectorAll(".project-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const categories = card.getAttribute("data-category") || "";
    const text = card.innerText.toLowerCase();
    const matchesCategory = (activeProjectCategory === 'all') || categories.includes(activeProjectCategory);
    const matchesSearch = query === "" || text.includes(query);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  const countEl = document.getElementById("projectCountBadge");
  if (countEl) {
    countEl.textContent = `Showing ${visibleCount} of ${cards.length} Deployed Projects`;
  }
}

// 5. Skills Category Filter & Search
let activeSkillCategory = 'all';

function setSkillFilter(filter) {
  activeSkillCategory = filter;
  document.querySelectorAll(".skill-tab").forEach(tab => {
    if (tab.getAttribute("data-filter") === filter) {
      tab.classList.add("bg-brand-600", "text-white");
      tab.classList.remove("text-slate-400");
    } else {
      tab.classList.remove("bg-brand-600", "text-white");
      tab.classList.add("text-slate-400");
    }
  });
  filterSkills();
}

function filterSkills() {
  const searchInput = document.getElementById("skillSearch");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const items = document.querySelectorAll(".skill-item");

  items.forEach(item => {
    const categories = item.getAttribute("data-category") || "";
    const text = item.innerText.toLowerCase();
    const matchesCategory = (activeSkillCategory === 'all') || categories.includes(activeSkillCategory);
    const matchesSearch = query === "" || text.includes(query);

    if (matchesCategory && matchesSearch) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// 6. Interactive Simulator: Emotion Recognition & Music Recommendation
const emotionData = {
  happy: {
    emoji: "😄",
    label: "Happy Expression (Joy / Uplifting)",
    confidence: "94.8%",
    track: '"Uplifting Vibes" - Synthwave Sunset',
    meta: "BPM: 124 • Key: G Major • Energy: High",
    color: "text-emerald-400",
    border: "border-emerald-500",
    btnClass: "bg-emerald-600 text-white border-emerald-400"
  },
  sad: {
    emoji: "😢",
    label: "Melancholic Expression (Reflective / Calm)",
    confidence: "92.3%",
    track: '"Quiet Rainfall" - Ambient Acoustic Chill',
    meta: "BPM: 78 • Key: D Minor • Energy: Low",
    color: "text-sky-400",
    border: "border-sky-500",
    btnClass: "bg-sky-600 text-white border-sky-400"
  },
  neutral: {
    emoji: "😐",
    label: "Neutral Expression (Focused / Deep Flow)",
    confidence: "91.1%",
    track: '"Deep Flow" - Lo-Fi Study Beats',
    meta: "BPM: 85 • Key: A Minor • Energy: Balanced",
    color: "text-amber-400",
    border: "border-amber-500",
    btnClass: "bg-amber-600 text-white border-amber-400"
  },
  angry: {
    emoji: "🔥",
    label: "High Arousal (Energetic / Workout Drive)",
    confidence: "93.7%",
    track: '"Adrenaline Rush" - Electronic Rock Beat',
    meta: "BPM: 142 • Key: E Minor • Energy: Maximum",
    color: "text-rose-400",
    border: "border-rose-500",
    btnClass: "bg-rose-600 text-white border-rose-400"
  }
};

function setEmotion(type) {
  const data = emotionData[type];
  if (!data) return;

  document.querySelectorAll(".emotion-btn").forEach(btn => {
    btn.className = "emotion-btn py-2 px-1 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-slate-300 flex flex-col items-center gap-1 border border-slate-800 transition hover:border-slate-600";
  });
  const activeBtn = document.getElementById("btn-" + type);
  if (activeBtn) {
    activeBtn.className = `emotion-btn active py-2 px-1 rounded-xl text-xs font-mono font-semibold ${data.btnClass} flex flex-col items-center gap-1 border transition`;
  }

  const faceEl = document.getElementById("faceEmoji");
  if (faceEl) faceEl.textContent = data.emoji;

  const labelEl = document.getElementById("detectedLabel");
  if (labelEl) {
    labelEl.textContent = data.label;
    labelEl.className = `text-sm font-bold ${data.color}`;
  }

  const confEl = document.getElementById("confidenceScore");
  if (confEl) {
    confEl.textContent = data.confidence;
    confEl.className = data.color;
  }

  const trackEl = document.getElementById("trackTitle");
  if (trackEl) trackEl.textContent = data.track;

  const metaEl = document.getElementById("trackMeta");
  if (metaEl) metaEl.textContent = data.meta;

  const simBox = document.getElementById("simFaceIcon");
  if (simBox) {
    simBox.className = `w-14 h-14 rounded-xl bg-slate-800 border-2 ${data.border} flex items-center justify-center text-3xl shadow-lg relative`;
  }
}

function testApiStream(btn) {
  showToast("Simulated OpenCV + Flask API response: 200 OK (Audio Frame Dispatched)");
}

// 7. Interactive Simulator: S.V.T. Tailors Atelier Configurator & Order Tracker
const tailorData = {
  suit: {
    emoji: "🤵",
    title: "Bespoke 2-Piece Suit",
    fit: "Master Canvassed",
    time: "48h Express",
    badge: "Heritage Craft",
    color: "text-amber-400",
    border: "border-amber-500",
    btnClass: "bg-amber-600 text-white border-amber-400",
    stage: "Stage 3 / 5: Master Stitch",
    progress: "60%",
    desc: "Master craftsman assembling panels with reinforced interior canvas."
  },
  shirt: {
    emoji: "👔",
    title: "Executive Bespoke Shirt",
    fit: "Custom Contoured",
    time: "24h Express",
    badge: "Giza Cotton",
    color: "text-sky-400",
    border: "border-sky-500",
    btnClass: "bg-sky-600 text-white border-sky-400",
    stage: "Stage 4 / 5: Buttonhole & Press",
    progress: "80%",
    desc: "Precision collar stiffening, cuff stitching, and automated buttonholing."
  },
  trouser: {
    emoji: "👖",
    title: "Tailored Formal Trouser",
    fit: "Slim / Executive Cut",
    time: "2 Days",
    badge: "Custom Pleats",
    color: "text-emerald-400",
    border: "border-emerald-500",
    btnClass: "bg-emerald-600 text-white border-emerald-400",
    stage: "Stage 2 / 5: Inseam Tailoring",
    progress: "40%",
    desc: "Computerized chalk drafting, pocket lining assembly, and hem cuffing."
  },
  blazer: {
    emoji: "🧥",
    title: "Classic Bespoke Blazer",
    fit: "Handcrafted Canvassed",
    time: "3 Days",
    badge: "Italian Wool Blend",
    color: "text-indigo-400",
    border: "border-indigo-500",
    btnClass: "bg-indigo-600 text-white border-indigo-400",
    stage: "Stage 3 / 5: Lapel & Lining",
    progress: "60%",
    desc: "Hand-rolled lapel roll, structured shoulder pads, and horn button assembly."
  }
};

let currentGarment = 'suit';
const tailorStages = [
  { stage: "Stage 1 / 5: Order Logged", progress: "20%", desc: "Gents measurements recorded via MySQL REST API and fabric verified." },
  { stage: "Stage 2 / 5: Fabric Cut", progress: "40%", desc: "Individual paper pattern drafted and shear cutting completed." },
  { stage: "Stage 3 / 5: Master Stitch", progress: "60%", desc: "Master craftsman assembling panels with reinforced interior canvas." },
  { stage: "Stage 4 / 5: Steam Press", progress: "80%", desc: "Industrial steam pressure styling and quality audit inspection." },
  { stage: "Stage 5 / 5: Ready / Dispatched", progress: "100%", desc: "Digital invoice generated; ready for doorstep delivery or atelier pickup!" }
];
let currentStageIdx = 2;

function setTailorGarment(type) {
  currentGarment = type;
  const data = tailorData[type];
  if (!data) return;

  document.querySelectorAll(".tailor-btn").forEach(btn => {
    btn.className = "tailor-btn py-2 px-1 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-slate-300 flex flex-col items-center gap-1 border border-slate-800 hover:border-slate-600 transition";
  });
  const activeBtn = document.getElementById("btn-tailor-" + type);
  if (activeBtn) {
    activeBtn.className = `tailor-btn active py-2 px-1 rounded-xl text-xs font-mono font-semibold ${data.btnClass} flex flex-col items-center gap-1 border transition`;
  }

  const emojiEl = document.getElementById("tailorEmoji");
  if (emojiEl) emojiEl.textContent = data.emoji;

  const titleEl = document.getElementById("tailorGarmentTitle");
  if (titleEl) {
    titleEl.textContent = data.title;
    titleEl.className = `text-sm font-bold ${data.color}`;
  }

  const fitEl = document.getElementById("tailorFit");
  if (fitEl) fitEl.textContent = data.fit;

  const timeEl = document.getElementById("tailorTime");
  if (timeEl) timeEl.textContent = data.time;

  const badgeEl = document.getElementById("tailorBadge");
  if (badgeEl) badgeEl.textContent = data.badge;

  const simBox = document.getElementById("tailorGarmentIcon");
  if (simBox) {
    simBox.className = `w-14 h-14 rounded-xl bg-slate-800 border-2 ${data.border} flex items-center justify-center text-3xl shadow-lg relative`;
  }

  const stageEl = document.getElementById("tailorStatusStage");
  if (stageEl) stageEl.textContent = data.stage;

  const barEl = document.getElementById("tailorProgressBar");
  if (barEl) barEl.style.width = data.progress;

  const descEl = document.getElementById("tailorStageDesc");
  if (descEl) descEl.textContent = data.desc;
}

function advanceTailorStage() {
  currentStageIdx = (currentStageIdx + 1) % tailorStages.length;
  const s = tailorStages[currentStageIdx];
  const stageEl = document.getElementById("tailorStatusStage");
  if (stageEl) stageEl.textContent = s.stage;

  const barEl = document.getElementById("tailorProgressBar");
  if (barEl) barEl.style.width = s.progress;

  const descEl = document.getElementById("tailorStageDesc");
  if (descEl) descEl.textContent = s.desc;

  showToast(`Atelier Stage: ${s.stage}`);
}

function simulateOrderDispatch() {
  const g = tailorData[currentGarment];
  const orderId = Math.floor(1000 + Math.random() * 9000);
  showToast(`WhatsApp Payload Formatted: [SVT #${orderId}] ${g.title} (Measurements Validated)`);
}

// 8. Interactive Simulator: MySQL Database Query Optimization Engine
function updateDatabaseSim() {
  const recordsInput = document.getElementById("dbRecords");
  const poolInput = document.getElementById("dbPool");
  const indexedInput = document.getElementById("dbIndexed");

  if (!recordsInput || !poolInput) return;

  const records = parseInt(recordsInput.value, 10);
  const pool = parseInt(poolInput.value, 10);
  const isIndexed = indexedInput ? indexedInput.checked : true;

  document.getElementById("dbRecordsVal").textContent = `${records.toLocaleString()} rows`;
  document.getElementById("dbPoolVal").textContent = `${pool} conns`;

  const rawLatency = Math.round(18 + (records / 2200));
  const optLatency = isIndexed ? Math.max(6, Math.round(rawLatency * 0.22)) : rawLatency;
  const cutPercent = isIndexed ? Math.round(((rawLatency - optLatency) / rawLatency) * 100) : 0;

  const rawEl = document.getElementById("dbRawLatency");
  const optEl = document.getElementById("dbOptLatency");
  const cutEl = document.getElementById("dbLatencyCut");

  if (rawEl) rawEl.textContent = `${rawLatency}ms`;
  if (optEl) optEl.textContent = `${optLatency}ms`;
  if (cutEl) {
    cutEl.textContent = isIndexed ? `-${cutPercent}%` : "0%";
    cutEl.className = isIndexed ? "text-base font-bold font-mono text-emerald-400 mt-0.5" : "text-base font-bold font-mono text-slate-400 mt-0.5";
  }
}

// 9. Interactive Simulator: OmniPulse CLV & Churn Score Estimator
function updateOmniPulse() {
  const recencyInput = document.getElementById("omniRecency");
  const freqInput = document.getElementById("omniFrequency");
  const aovInput = document.getElementById("omniAov");

  if (!recencyInput || !freqInput || !aovInput) return;

  const recency = parseInt(recencyInput.value, 10);
  const freq = parseInt(freqInput.value, 10);
  const aov = parseInt(aovInput.value, 10);

  document.getElementById("omniRecencyVal").textContent = `${recency} days`;
  document.getElementById("omniFreqVal").textContent = `${freq} orders`;
  document.getElementById("omniAovVal").textContent = `₹${aov}`;

  // BG/NBD P(Alive) heuristic: higher recency lowers probability; higher frequency cushions decay
  let pAlive = Math.max(10, Math.min(99, Math.round((100 - (recency * 0.45)) + (freq * 4.5))));
  let churnRisk = 100 - pAlive;
  // Estimated 12-month CLV Equity = frequency rate * monetary spend * pAlive factor
  let clvEquity = Math.round((freq * 2.2) * aov * (pAlive / 100));

  const pAliveEl = document.getElementById("omniPAlive");
  const churnEl = document.getElementById("omniChurnRisk");
  const clvEl = document.getElementById("omniClvForecast");

  if (pAliveEl) pAliveEl.textContent = `${pAlive}%`;
  if (churnEl) {
    churnEl.textContent = `${churnRisk}%`;
    churnEl.className = churnRisk > 50 ? "text-rose-400 font-bold" : "text-emerald-400 font-bold";
  }
  if (clvEl) clvEl.textContent = `₹${clvEquity.toLocaleString('en-IN')}`;
}

// 10. Code Card Simulation & Multi-Tab Switcher
const codeSnippets = {
  python: `class CloudMicroservice:
    def __init__(self):
        self.developer = "Vardhan Yerramsetti"
        self.certification = "AWS Cloud Practitioner"
        self.stack = ["Python", "Flask", "MySQL", "OpenCV"]
        self.endpoints = ["/api/v1/infer", "/api/v1/orders"]

    def process_request(self, payload):
        # Latency cut by 25% via indexed queries
        return {
            "status": 200,
            "latency": "14ms",
            "deployed_on": "Vercel + AWS Cloud"
        }`,
  aws: `# AWS Infrastructure Topology
# Region: ap-south-1 (Mumbai) / High Availability
Resources:
  VardhanMicroserviceLambda:
    Type: AWS::Serverless::Function
    Properties:
      Runtime: python3.11
      MemorySize: 512
      Timeout: 10
  AtelierDatabaseInstance:
    Type: AWS::RDS::DBInstance
    Properties:
      Engine: mysql
      MultiAZ: false`,
  ml: `# OpenCV & Scikit-learn Pipeline
import cv2
from sklearn.ensemble import RandomForestClassifier

def extract_facial_landmarks(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    # >90% Supervised Classification Accuracy
    return model.predict_proba(faces)`
};

function switchCodeTab(tab) {
  document.querySelectorAll(".code-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tab) {
      btn.className = "code-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-brand-600 text-white transition";
    } else {
      btn.className = "code-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white transition";
    }
  });

  const codeEl = document.getElementById("heroCodeBlock");
  if (codeEl && codeSnippets[tab]) {
    codeEl.textContent = codeSnippets[tab];
  }
}

function runSampleCodeAnimation(btn) {
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Executing...`;
  setTimeout(() => {
    btn.innerHTML = `<span class="text-emerald-400 font-bold">✓ 200 OK (14ms)</span>`;
    showToast("Executed simulated microservice: 200 OK across AWS & Vercel runtime.");
    setTimeout(() => {
      btn.innerHTML = `Run Simulation ▶`;
    }, 3000);
  }, 750);
}

// 11. Interactive Terminal CLI
function toggleTerminal() {
  const modal = document.getElementById("terminalModal");
  if (!modal) return;
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    const input = document.getElementById("terminalInput");
    if (input) input.focus();
  }
}

// Keyboard shortcut: ` or ~ toggles terminal
window.addEventListener("keydown", (e) => {
  if (e.key === "`" || e.key === "~") {
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      toggleTerminal();
    }
  }
});

function handleTerminalCommand(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("terminalInput");
    const cmd = input.value.trim().toLowerCase();
    const output = document.getElementById("terminalOutput");

    const line = document.createElement("div");
    line.innerHTML = `<span class="text-emerald-400">vardhan@cloud:~$</span> ${input.value}`;
    output.appendChild(line);

    let response = "";
    switch (cmd) {
      case "help":
        response = `Available commands:<br>
• <span class="text-amber-400">about</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Summary & credentials<br>
• <span class="text-amber-400">projects</span> &nbsp;&nbsp;&nbsp;&nbsp; List all 8 deployed applications<br>
• <span class="text-amber-400">deployments</span> &nbsp; Verified live Vercel URLs<br>
• <span class="text-amber-400">skills</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical stack & tools<br>
• <span class="text-amber-400">aws</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS Certified Cloud Practitioner info<br>
• <span class="text-amber-400">stats</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantified engineering metrics<br>
• <span class="text-amber-400">contact</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email, WhatsApp, and social handles<br>
• <span class="text-amber-400">sudo hire</span> &nbsp;&nbsp;&nbsp; Launch hiring workflow<br>
• <span class="text-amber-400">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Clear terminal output<br>
• <span class="text-amber-400">exit</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Close this terminal window`;
        break;

      case "about":
        response = "Vardhan Yerramsetti | Python Full Stack Developer & AWS Certified Cloud Practitioner. Specializing in high-performance Flask/FastAPI REST APIs, React interfaces, MySQL optimization, and machine learning computer vision pipelines.";
        break;

      case "skills":
        response = "Languages: Python, JavaScript ES6+, SQL, C++, HTML5, CSS3<br>Backend: Flask, FastAPI, Django, RESTful APIs, Serverless<br>Cloud: AWS (EC2, S3, Lambda, IAM), Vercel, Docker<br>ML/Data: OpenCV, Scikit-learn, TensorFlow, NumPy, Pandas<br>Database: MySQL (PyMySQL), Relational Schema Design, Query Optimization (-25% latency)";
        break;

      case "projects":
      case "deployments":
        response = `🚀 <strong>Featured Projects & Production Deployments:</strong><br>
1. 🎵 <strong>Music Emotion Recommender</strong>: <a href="https://music-recommending.vercel.app/" target="_blank" class="text-brand-400 underline">https://music-recommending.vercel.app/</a><br>
2. 🧵 <strong>S.V.T. Tailors Bespoke Atelier</strong>: <a href="https://svt-tailors.vercel.app/" target="_blank" class="text-brand-400 underline">https://svt-tailors.vercel.app/</a><br>
3. 🌶️ <strong>MS Pickles Andhra E-Commerce</strong>: <a href="https://ms-pickles.vercel.app/" target="_blank" class="text-brand-400 underline">https://ms-pickles.vercel.app/</a><br>
4. 🎬 <strong>They Call Him OG Showcase</strong>: <a href="https://they-call-him-og-lemon.vercel.app/" target="_blank" class="text-brand-400 underline">https://they-call-him-og-lemon.vercel.app/</a><br>
5. 🏋️ <strong>90-Day Body Transformation Suite</strong>: <a href="https://90-days-body-transformation.vercel.app/" target="_blank" class="text-brand-400 underline">https://90-days-body-transformation.vercel.app/</a><br>
6. 📝 <strong>Google Forms Clone & MySQL ORM</strong>: <span class="text-blue-400 font-mono">Flask & MySQL Database Engine</span><br>
7. 📈 <strong>OmniPulse CLV & Churn Retention Engine</strong>: <a href="https://github.com/vardhanyerramsetti71beep/OmniPulse-Enterprise-CLV-Churn-Intelligence-Engine" target="_blank" class="text-brand-400 underline">GitHub Source & Live Simulator</a><br>
8. ☁️ <strong>Scalable Task & Cloud Portal</strong>: <span class="text-purple-400 font-mono">AWS EC2, S3 & Docker Architecture</span>`;
        break;

      case "aws":
        response = "AWS Certified Cloud Practitioner (2023) | AWS Academy Cloud Foundations (2023)<br>Hands-on: EC2 Instances, S3 Object Storage, Serverless Lambda Functions, IAM Policies, VPC & Cloud Security.";
        break;

      case "stats":
        response = "• 8 Production Web Applications Deployed Live<br>• >90% Supervised Machine Learning Accuracy<br>• 25% Reduction in Database Query & API Response Latency<br>• 99% Operational SLA & Inventory Accuracy Record<br>• 40+ Students Mentored in Computer Science Fundamentals";
        break;

      case "contact":
        response = "Email: vardhanyerramsetti71@gmail.com<br>Phone & WhatsApp: +91 7386033417<br>LinkedIn: linkedin.com/in/vardhan-yerramsetti<br>GitHub: github.com/vardhanyerramsetti71beep";
        break;

      case "sudo hire":
        response = "<span class='text-emerald-400 font-bold'>Permission granted!</span> Initiating priority interview email to Vardhan...";
        setTimeout(() => {
          window.location.href = "mailto:vardhanyerramsetti71@gmail.com?subject=Opportunity%20Discussion%20with%20Vardhan%20Yerramsetti";
        }, 1200);
        break;

      case "clear":
        output.innerHTML = "";
        input.value = "";
        return;

      case "exit":
        toggleTerminal();
        input.value = "";
        return;

      default:
        response = `command not found: <code>${cmd}</code>. Type <span class='text-amber-400'>'help'</span> for list of commands.`;
    }

    const resLine = document.createElement("div");
    resLine.className = "text-slate-300";
    resLine.innerHTML = response;
    output.appendChild(resLine);

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
}

// 12. Clipboard Copy & Toast Notifications
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || "Copied to clipboard!");
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.remove("translate-y-20", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3200);
}

// 13. Direct Contact Form Email Generator
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("senderName").value;
  const email = document.getElementById("senderEmail").value;
  const subject = document.getElementById("senderSubject").value;
  const msg = document.getElementById("senderMessage").value;

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(msg)}`;
  window.location.href = `mailto:vardhanyerramsetti71@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  showToast("Opening default email client with your message...");
}

// 14. Initialize interactive simulators on DOM load
document.addEventListener("DOMContentLoaded", () => {
  updateDatabaseSim();
  updateOmniPulse();
  filterProjects();
});
