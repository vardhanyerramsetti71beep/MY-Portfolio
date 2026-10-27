import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu,
  Database,
  Award,
  Sparkles,
  ExternalLink,
  Code2,
  Play,
  Activity,
  Server,
  Cloud
} from "lucide-react";
import Reveal from "../components/motion/Reveal";
import {
  PROFILE,
  TECH_TRAIN_1,
  TECH_TRAIN_2,
  PROJECTS,
  CERTIFICATIONS,
  EXPERIENCE
} from "../data/portfolioData";

export default function Overview() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const flagshipProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      
      {/* ============================================================
          SECTION 01 — CINEMATIC HERO (APPLE CUPERTINO REFINED IDENTITY)
          ============================================================ */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Badge */}
            <Reveal y={12} delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-mono shadow-sm border border-slate-700/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">AWS Certified Cloud Practitioner</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">8 Live Deployed Apps</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal y={16} delay={0.1}>
              <h1 className="headline-editorial text-4xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white tracking-tight text-balance">
                Engineered for Speed. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-500 via-indigo-500 to-amber-500 dark:from-brand-400 dark:via-indigo-400 dark:to-amber-300 bg-clip-text text-transparent">
                  Architected for the Cloud.
                </span>
              </h1>
            </Reveal>

            {/* Subtitle & Value Proposition */}
            <Reveal y={14} delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{PROFILE.name}</strong> — a Python Full Stack Developer and AWS Certified Cloud Practitioner. I specialize in high-throughput Flask/FastAPI microservices, computer vision pipelines, and reactive full-stack web applications backed by 8 verified production deployments.
              </p>
            </Reveal>

            {/* Metrics Row */}
            <Reveal y={14} delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {PROFILE.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-left hover:border-brand-500/40 transition-colors"
                  >
                    <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white flex items-baseline">
                      {stat.value}
                      <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 ml-0.5">{stat.suffix}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Primary & Secondary Action CTAs */}
            <Reveal y={14} delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigate("/work")}
                  className="apple-pressable inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Flagship Systems</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => navigate("/lab")}
                  className="apple-pressable inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs tracking-wide shadow-sm transition-all"
                >
                  <Activity size={14} className="text-emerald-500" />
                  <span>Launch Interactive Simulators</span>
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="apple-pressable inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors border border-transparent dark:border-slate-700/60"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <span>vardhanyerramsetti71@gmail.com</span>
                  )}
                </button>
              </div>
            </Reveal>

          </div>

          {/* Interactive Systems Status Display Frame */}
          <div className="lg:col-span-5">
            <Reveal y={20} delay={0.2}>
              <div className="relative rounded-3xl bg-[#0b1120] text-slate-200 p-6 sm:p-7 shadow-2xl border border-white/10 overflow-hidden font-mono text-xs">
                
                {/* Decorative header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider">
                    CLOUD_NODE // AWS_PRACTITIONER_v1.0
                  </span>
                </div>

                {/* Code execution telemetry */}
                <div className="py-4 space-y-3 font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-brand-400">&gt; identity.status</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE_READY
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <div className="text-slate-400 text-[11px]">&gt; Primary Architecture:</div>
                    <div className="text-white font-bold text-xs">Python Microservices + AWS EC2/S3</div>
                    <div className="text-slate-400 text-[10px]">Frameworks: Flask, FastAPI, PyMySQL, React 19</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Verified ML Accuracy</div>
                      <div className="text-brand-400 font-bold text-sm mt-0.5">&gt;90% Emotion CV</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-[10px]">MySQL Query Latency</div>
                      <div className="text-amber-400 font-bold text-sm mt-0.5">-25% Latency Drop</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-xs">AWS Cloud Practitioner</div>
                      <div className="text-slate-400 text-[10px]">Credential ID: AWS-CCP-2023</div>
                    </div>
                    <Link
                      to="/credentials"
                      className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-[10px] font-semibold border border-amber-500/30 hover:bg-amber-500/30 transition"
                    >
                      Verify →
                    </Link>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span>DEPLOYMENT: VERCEL_EDGE</span>
                  <span>LOCATION: ANDHRA PRADESH, IN</span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 02 — DUAL-DIRECTION CONTINUOUS TECHNOLOGY TRAINS
          ============================================================ */}
      <section className="w-full overflow-hidden py-4 border-y border-black/5 dark:border-white/5 bg-slate-50/60 dark:bg-[#050a14]/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
            ENGINEERING STACK &amp; PRODUCTION ECOSYSTEM
          </span>
        </div>

        {/* Train 1: Left-to-Right */}
        <div className="relative w-full overflow-hidden mb-2.5">
          <div className="animate-marquee-ltr flex items-center gap-3">
            {[...TECH_TRAIN_1, ...TECH_TRAIN_1].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                <span>{tech.name}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-normal">/ {tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Train 2: Right-to-Left */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-rtl flex items-center gap-3">
            {[...TECH_TRAIN_2, ...TECH_TRAIN_2].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                <span>{tech.name}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-normal">/ {tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 03 — FLAGSHIP SYSTEMS EXHIBITION (TOP 4 ARCHITECTURAL BUILDS)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="headline-eyebrow">VERIFIED PRODUCTION PORTFOLIO</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Flagship Systems.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
              Production web applications and microservices engineered, benchmarked, and deployed with verified live links.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition group"
          >
            <span>View All 8 Deployed Applications</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Flagship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipProjects.map((project) => (
            <Reveal key={project.id} y={20}>
              <div className="apple-card p-7 flex flex-col justify-between h-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 relative overflow-hidden group">
                
                {/* Top Card Meta */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-slate-400 dark:text-slate-500 font-bold">{project.index} // {project.category}</span>
                    {project.live && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-700/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live on Vercel
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.solution}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 mb-6 font-mono">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{s.value}</div>
                        <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2.5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="apple-pressable inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold shadow-sm transition"
                      >
                        <span>Launch Live App</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="apple-pressable inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition"
                      >
                        <Code2 size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <Link
                    to="/work"
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition text-[11px] font-mono"
                  >
                    Case Study →
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 04 — ENGINEERING PHILOSOPHY (APPLE EDITORIAL QUOTE)
          ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
        <Reveal y={16}>
          <div className="relative py-14 px-8 sm:px-14 rounded-3xl bg-slate-900 dark:bg-[#0b1324] text-white shadow-2xl border border-slate-800 dark:border-white/10 overflow-hidden">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold mb-4 block">
              ENGINEERING PHILOSOPHY
            </span>
            <blockquote className="text-xl sm:text-3xl font-extrabold tracking-tight leading-snug max-w-3xl mx-auto text-slate-100">
              "{PROFILE.philosophy}"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
              <span>Vardhan Yerramsetti</span>
              <span>•</span>
              <span className="text-brand-400">AWS Certified Cloud Practitioner</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================================================
          SECTION 05 — INTERACTIVE ALGORITHM SIMULATORS PREVIEW
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0b1120] to-slate-950 text-white shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                INTERACTIVE ENGINEERING LAB
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Experience the Algorithms Live in Your Browser.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Test my real-time OpenCV emotion recognition model, interact with the S.V.T. 5-stage workshop tracker, benchmark live MySQL query index latency (-78%), and simulate OmniPulse customer retention mathematics.
              </p>
              <div className="pt-2">
                <Link
                  to="/lab"
                  className="apple-pressable inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition"
                >
                  <Play size={14} fill="currentColor" />
                  <span>Launch 4 Interactive Simulators</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 text-sm font-bold">Sim 01</div>
                <div className="text-white font-semibold mt-1">OpenCV Face Emotion</div>
                <div className="text-[11px] text-slate-400 mt-1">&gt;90% detection &amp; audio player</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-brand-400 text-sm font-bold">Sim 02</div>
                <div className="text-white font-semibold mt-1">S.V.T. Order Pipeline</div>
                <div className="text-[11px] text-slate-400 mt-1">5-stage live workshop state</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-amber-400 text-sm font-bold">Sim 03</div>
                <div className="text-white font-semibold mt-1">MySQL Latency Bench</div>
                <div className="text-[11px] text-slate-400 mt-1">Index hit vs Full table scan</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-indigo-400 text-sm font-bold">Sim 04</div>
                <div className="text-white font-semibold mt-1">OmniPulse Retention</div>
                <div className="text-[11px] text-slate-400 mt-1">BG/NBD P(Alive) equation</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 06 — CREDENTIALS & EXPERIENCE SNAPSHOT
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Certifications Snapshot */}
          <div className="apple-card p-7 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="headline-eyebrow text-amber-600 dark:text-amber-400">OFFICIAL CERTIFICATIONS</span>
                <Link to="/credentials" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">
                  View All (4) →
                </Link>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Validated Cloud &amp; Engineering Credentials
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.slice(0, 3).map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{cert.issuer} • {cert.year}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold whitespace-nowrap">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60">
              <Link to="/credentials" className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
                <span>Inspect full verification registry</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right: Career Experience Snapshot */}
          <div className="apple-card p-7 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="headline-eyebrow text-indigo-600 dark:text-indigo-400">PROFESSIONAL TRACK RECORD</span>
                <Link to="/experience" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">
                  Full Timeline →
                </Link>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Operational &amp; Academic Milestones
              </h3>
              <div className="space-y-3">
                {EXPERIENCE.slice(0, 2).map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                      <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px]">{exp.period}</span>
                    </div>
                    <div className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-0.5">{exp.company}</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {exp.bullets[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60">
              <Link to="/experience" className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
                <span>Explore career journey &amp; JNTUK degree</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 07 — INTERACTIVE CALL TO ACTION
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal y={16}>
          <div className="p-10 sm:p-14 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-card space-y-5">
            <span className="headline-eyebrow">READY TO COLLABORATE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's engineer something remarkable.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Whether you need a high-performance Python microservice architect, a certified AWS cloud engineer, or a full-stack developer who builds systems that scale.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/connect"
                className="apple-pressable inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs tracking-wide shadow-md transition"
              >
                <span>Initiate Direct Outreach</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="apple-pressable inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md transition"
              >
                <span>WhatsApp Instant Chat</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
