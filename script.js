/* ========================================================
   Vardhan Yerramsetti - Interactive Portfolio Scripts
   ======================================================== */

// 1. Dynamic Role Typing Animation
const roles = [
  "Python Full Stack Developer",
  "AWS Certified Cloud Practitioner",
  "Machine Learning & Computer Vision Enthusiast",
  "RESTful API & Microservices Architect"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typedRole");

function typeRoles() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;
  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800; // Pause at end of line
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }
  setTimeout(typeRoles, speed);
}
typeRoles();

// 2. Interactive Background Particle Canvas
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.7;
    this.vy = (Math.random() - 0.5) * 0.7;
    this.radius = Math.random() * 1.8 + 0.8;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(14, 165, 233, 0.4)";
    ctx.fill();
  }
}

for (let i = 0; i < 45; i++) {
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
      if (dist < 110) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 110)})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// 3. Mobile Navigation Menu Toggle
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const icon = document.getElementById("mobileMenuIcon");
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    nav.classList.add("hidden");
    icon.classList.replace("fa-xmark", "fa-bars");
  }
}

// 4. Skills Filtering & Real-time Search
let currentFilter = 'all';

function setSkillFilter(filter) {
  currentFilter = filter;
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
  const query = document.getElementById("skillSearch").value.toLowerCase();
  const items = document.querySelectorAll(".skill-item");

  items.forEach(item => {
    const categories = item.getAttribute("data-category") || "";
    const text = item.innerText.toLowerCase();
    const matchesCategory = (currentFilter === 'all') || categories.includes(currentFilter);
    const matchesSearch = text.includes(query);

    if (matchesCategory && matchesSearch) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// 5. Interactive Emotion & Music Recommendation Simulator
const emotionData = {
  happy: {
    emoji: "😄",
    label: "Happy Expression (Joy / Uplifting)",
    confidence: "94.8%",
    track: '"Uplifting Vibes" - Synthwave Sunset',
    meta: "BPM: 124 • Mode: Harmonic Major • Energy: High",
    color: "text-emerald-400",
    border: "border-emerald-500",
    btnClass: "bg-emerald-600 text-white"
  },
  sad: {
    emoji: "😢",
    label: "Melancholic Expression (Sad / Reflective)",
    confidence: "92.3%",
    track: '"Quiet Rainfall" - Ambient Acoustic Chill',
    meta: "BPM: 78 • Mode: Minor Pentatonic • Energy: Low",
    color: "text-sky-400",
    border: "border-sky-500",
    btnClass: "bg-sky-600 text-white"
  },
  neutral: {
    emoji: "😐",
    label: "Neutral Expression (Calm / Focused)",
    confidence: "91.1%",
    track: '"Deep Flow" - Lo-Fi Study Beats',
    meta: "BPM: 85 • Mode: Dorian • Energy: Balanced",
    color: "text-amber-400",
    border: "border-amber-500",
    btnClass: "bg-amber-600 text-white"
  },
  angry: {
    emoji: "🔥",
    label: "High Arousal (Energetic / Workout)",
    confidence: "93.7%",
    track: '"Adrenaline Rush" - Electronic Rock Beat',
    meta: "BPM: 142 • Mode: Phrygian • Energy: Maximum",
    color: "text-rose-400",
    border: "border-rose-500",
    btnClass: "bg-rose-600 text-white"
  }
};

function setEmotion(type) {
  const data = emotionData[type];
  document.querySelectorAll(".emotion-btn").forEach(btn => {
    btn.className = "emotion-btn py-2 px-1 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-slate-300 flex flex-col items-center gap-1 border border-slate-800 transition";
  });
  const activeBtn = document.getElementById("btn-" + type);
  activeBtn.className = `emotion-btn active py-2 px-1 rounded-xl text-xs font-mono font-semibold ${data.btnClass} flex flex-col items-center gap-1 border transition`;

  document.getElementById("faceEmoji").textContent = data.emoji;
  document.getElementById("detectedLabel").textContent = data.label;
  document.getElementById("detectedLabel").className = `text-sm font-bold ${data.color}`;
  document.getElementById("confidenceScore").textContent = data.confidence;
  document.getElementById("confidenceScore").className = data.color;
  document.getElementById("trackTitle").textContent = data.track;
  document.getElementById("trackMeta").textContent = data.meta;

  const simBox = document.getElementById("simFaceIcon");
  simBox.className = `w-14 h-14 rounded-xl bg-slate-800 border-2 ${data.border} flex items-center justify-center text-3xl shadow-lg relative`;
}

function toggleAudioPreview(btn) {
  showToast("Triggered simulated Flask API stream: 200 OK (Audio Frame Dispatched)");
}

// 6. Interactive SVT Tailors Bespoke Estimator & Order Tracker Simulator
const tailorData = {
  suit: {
    emoji: "🤵",
    title: "Bespoke 2-Piece Suit",
    price: "₹4,500",
    time: "48h Express",
    badge: "Luxury Fit",
    color: "text-amber-400",
    border: "border-amber-500",
    btnClass: "bg-amber-600 text-white border-amber-400",
    stage: "Stage 3 / 5: Master Stitch",
    progress: "60%",
    desc: "Master craftsman executing bespoke canvassing and precision shoulder alignment."
  },
  shirt: {
    emoji: "👔",
    title: "Executive Bespoke Shirt",
    price: "₹650",
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
    price: "₹550",
    time: "2 Days",
    badge: "Comfort Waist",
    color: "text-emerald-400",
    border: "border-emerald-500",
    btnClass: "bg-emerald-600 text-white border-emerald-400",
    stage: "Stage 2 / 5: Inseam Tailoring",
    progress: "40%",
    desc: "Computerized chalk drafting, pocket lining assembly, and hem cuffing."
  },
  blouse: {
    emoji: "🥻",
    title: "Designer Bridal Blouse",
    price: "₹950",
    time: "48h Handcrafted",
    badge: "Maggam Work",
    color: "text-rose-400",
    border: "border-rose-500",
    btnClass: "bg-rose-600 text-white border-rose-400",
    stage: "Stage 3 / 5: Hand Embroidery",
    progress: "60%",
    desc: "Intricate zari work stitching, reinforced lining, and latkan attachment."
  }
};

let currentGarment = 'suit';
const tailorStages = [
  { stage: "Stage 1 / 5: Order Logged", progress: "20%", desc: "Measurements recorded via MySQL REST API and fabric verified." },
  { stage: "Stage 2 / 5: Fabric Cut", progress: "40%", desc: "Individual paper pattern drafted and shear cutting completed." },
  { stage: "Stage 3 / 5: Master Stitch", progress: "60%", desc: "Master craftsman assembling panels with reinforced interior canvas." },
  { stage: "Stage 4 / 5: Steam Press", progress: "80%", desc: "Industrial steam pressure styling and quality audit inspection." },
  { stage: "Stage 5 / 5: Ready / Dispatched", progress: "100%", desc: "Digital invoice generated; ready for doorstep delivery / pickup!" }
];
let currentStageIdx = 2;

function setTailorGarment(type) {
  currentGarment = type;
  const data = tailorData[type];
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

  const priceEl = document.getElementById("tailorPrice");
  if (priceEl) priceEl.textContent = data.price;

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
  showToast(`WhatsApp Order Formatted: [SVT #${orderId}] ${g.title} (${g.price})`);
}

// 7. Interactive Terminal CLI
function toggleTerminal() {
  const modal = document.getElementById("terminalModal");
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    document.getElementById("terminalInput").focus();
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
        response = "Commands: <span class='text-amber-400'>about</span>, <span class='text-amber-400'>skills</span>, <span class='text-amber-400'>projects</span>, <span class='text-amber-400'>aws</span>, <span class='text-amber-400'>contact</span>, <span class='text-amber-400'>clear</span>, <span class='text-amber-400'>exit</span>";
        break;
      case "about":
        response = "Vardhan Yerramsetti | Python Full Stack Developer & AWS Certified Cloud Practitioner. Specializing in Flask, React, MySQL, Computer Vision (OpenCV), and AWS Deployments.";
        break;
      case "skills":
        response = "Languages: Python, JS ES6+, SQL, C++ | Frameworks: Flask, Django, React.js | Cloud: AWS (EC2, S3, Lambda) | ML: OpenCV, Scikit-learn, TensorFlow.";
        break;
      case "projects":
        response = "1. Facial Expression Music Recommendation (OpenCV + Flask, >90% accuracy)<br>2. S.V.T. Tailors — Bespoke Atelier & Luxury E-Commerce Platform (Python + MySQL + Vercel)";
        break;
      case "aws":
        response = "AWS Certified Cloud Practitioner (2023) | AWS Academy Cloud Foundations (2023) | Hands-on: EC2, S3, Lambda, Cloud Architecture.";
        break;
      case "contact":
        response = "Email: vardhanyerramsetti71@gmail.com | Phone: +91 7386033417 | LinkedIn: linkedin.com/in/vardhan-yerramsetti | GitHub: github.com/vardhanyerramsetti71beep";
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
        response = `command not found: ${cmd}. Type <span class='text-amber-400'>'help'</span> for list of commands.`;
    }

    const resLine = document.createElement("div");
    resLine.className = "text-slate-400";
    resLine.innerHTML = response;
    output.appendChild(resLine);

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
}

// 8. Clipboard Copy & Toast notification
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  document.getElementById("toastMessage").textContent = msg;
  toast.classList.remove("translate-y-20", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 2800);
}

// 9. Contact Form Email Generator
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("senderName").value;
  const email = document.getElementById("senderEmail").value;
  const subject = document.getElementById("senderSubject").value;
  const msg = document.getElementById("senderMessage").value;

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(msg)}`;
  window.location.href = `mailto:vardhanyerramsetti71@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  showToast("Redirecting to email client...");
}

// 10. Code Card Simulation
function runSampleCodeAnimation(btn) {
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Executing...`;
  setTimeout(() => {
    btn.innerHTML = `<span class="text-emerald-400 font-bold">✓ 200 OK (18ms)</span>`;
    showToast("Code executed successfully! Microservices active on AWS.");
    setTimeout(() => {
      btn.innerHTML = `Run Simulation ▶`;
    }, 3000);
  }, 800);
}