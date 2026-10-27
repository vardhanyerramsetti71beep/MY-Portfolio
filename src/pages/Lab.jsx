import React, { useState, useEffect } from "react";
import { Play, Pause, RefreshCw, CheckCircle2, Activity, Volume2, Database, Sliders, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../components/motion/Reveal";

export default function Lab() {
  // Sim 1: OpenCV Emotion Recognition & Music
  const [selectedEmotion, setSelectedEmotion] = useState("Happy");
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Sim 2: SVT Tailors Pipeline
  const [orderStage, setOrderStage] = useState(2); // 0 to 4
  const [garmentType, setGarmentType] = useState("Silk Kurta");

  // Sim 3: MySQL Query Benchmark
  const [indexMode, setIndexMode] = useState("indexed"); // "unindexed" vs "indexed"
  const [isQueryRunning, setIsQueryRunning] = useState(false);

  // Sim 4: OmniPulse CLV Calculation
  const [purchaseFrequency, setPurchaseFrequency] = useState(5);
  const [recencyWeeks, setRecencyWeeks] = useState(12);

  const STAGES = [
    { title: "Order Logged", desc: "Measurements saved in MySQL" },
    { title: "Fabric Cut", desc: "Pattern drafted by Master Cutter" },
    { title: "Master Stitch", desc: "Assembly & canvas interlining" },
    { title: "Steam Press", desc: "Finish, cuff buttons & QC audit" },
    { title: "Ready for Delivery", desc: "Packaged & dispatched" }
  ];

  const EMOTIONS = {
    Happy: { confidence: "94.8%", bpm: 124, track: "Lofi Uplift & Synth Grooves", mood: "Optimistic" },
    Sad: { confidence: "91.2%", bpm: 72, track: "Deep Rain Piano & Ambient Cello", mood: "Reflective" },
    Neutral: { confidence: "89.5%", bpm: 95, track: "Focus Deep Flow & Chillhop", mood: "Analytical" },
    Energetic: { confidence: "96.4%", bpm: 138, track: "Electropulse & Fast Synthwave", mood: "High Voltage" }
  };

  // Run benchmark simulation
  const runQueryBenchmark = () => {
    setIsQueryRunning(true);
    setTimeout(() => {
      setIsQueryRunning(false);
    }, indexMode === "unindexed" ? 600 : 150);
  };

  // Compute BG/NBD probability of being alive
  const pAlive = Math.max(10, Math.min(98, Math.round(95 - recencyWeeks * 3.8 + purchaseFrequency * 4.2)));
  const expectedValue = Math.round((purchaseFrequency * 1800 * (pAlive / 100)) + 2500);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Page Header */}
      <div>
        <span className="headline-eyebrow text-emerald-600">INTERACTIVE ENGINEERING LAB</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-1">
          In-Browser Simulators.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl leading-relaxed">
          Experience the mathematical models, computer vision classifiers, database optimizers, and workflow state engines running live in your browser.
        </p>
      </div>

      {/* Grid of 4 Interactive Simulators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ============================================================
            SIMULATOR 01: OPENCV EMOTION RECOGNITION & MUSIC RECOMMENDER
            ============================================================ */}
        <div className="apple-card p-7 bg-white border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-600 font-bold">SIM_01 // COMPUTER VISION</span>
              <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold text-[10px]">
                OpenCV + Scikit-learn
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Facial Emotion Classifier &amp; Audio Stream
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5 mb-5">
              Real-time facial landmark detection with automated mood playlist dispatch.
            </p>

            {/* Interactive Emotion Selectors */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-semibold text-slate-700">Simulate Facial State:</div>
              <div className="grid grid-cols-4 gap-2">
                {Object.keys(EMOTIONS).map((emo) => (
                  <button
                    key={emo}
                    onClick={() => setSelectedEmotion(emo)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold font-mono transition apple-pressable ${
                      selectedEmotion === emo
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {emo}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Vision Camera Frame */}
            <div className="relative rounded-2xl bg-slate-950 p-5 text-white font-mono text-xs overflow-hidden mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  STREAM: 1280x720 @ 30FPS
                </span>
                <span>CONFIDENCE: {EMOTIONS[selectedEmotion].confidence}</span>
              </div>

              {/* Landmark Frame Mock */}
              <div className="py-6 flex flex-col items-center justify-center gap-2">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-400/80 flex items-center justify-center relative">
                  <span className="text-2xl">
                    {selectedEmotion === "Happy" ? "😊" : selectedEmotion === "Sad" ? "😔" : selectedEmotion === "Neutral" ? "😐" : "⚡"}
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-400 rounded-full animate-ping"></div>
                </div>
                <div className="text-xs text-brand-300 font-bold">
                  DETECTED: {selectedEmotion.toUpperCase()} ({EMOTIONS[selectedEmotion].confidence})
                </div>
              </div>

              {/* Audio Spectrum Visualizer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 size={15} className="text-brand-400" />
                  <span className="text-slate-300 text-xs truncate max-w-[180px]">
                    {EMOTIONS[selectedEmotion].track}
                  </span>
                </div>

                <div className="flex items-end gap-1 h-6">
                  <span className="w-1 bg-brand-400 rounded-full eq-bar-1"></span>
                  <span className="w-1 bg-brand-400 rounded-full eq-bar-2"></span>
                  <span className="w-1 bg-brand-400 rounded-full eq-bar-3"></span>
                  <span className="w-1 bg-brand-400 rounded-full eq-bar-4"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            Deployed on Vercel: <a href="https://music-recommending.vercel.app/" target="_blank" rel="noreferrer" className="text-brand-600 underline">music-recommending.vercel.app</a>
          </div>
        </div>

        {/* ============================================================
            SIMULATOR 02: S.V.T. TAILORS 5-STAGE WORKSHOP TRACKER
            ============================================================ */}
        <div className="apple-card p-7 bg-white border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-amber-600 font-bold">SIM_02 // WORKFLOW ENGINE</span>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold text-[10px]">
                Python Serverless + PyMySQL
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              S.V.T. Bespoke Atelier 5-Stage Tracker
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5 mb-5">
              Production state-machine tracking garment fabrication through atelier stages.
            </p>

            {/* Garment Selector */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold text-slate-700">Garment:</span>
              {["Silk Kurta", "Formal Shirt", "2-Piece Suit"].map((item) => (
                <button
                  key={item}
                  onClick={() => setGarmentType(item)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition apple-pressable ${
                    garmentType === item
                      ? "bg-amber-500 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* 5-Stage Stepper View */}
            <div className="space-y-3 mb-6">
              {STAGES.map((s, idx) => {
                const isPassed = idx < orderStage;
                const isCurrent = idx === orderStage;
                return (
                  <div
                    key={s.title}
                    onClick={() => setOrderStage(idx)}
                    className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                      isCurrent
                        ? "bg-amber-50/70 border-amber-300 shadow-sm"
                        : isPassed
                        ? "bg-slate-50 border-slate-200 opacity-80"
                        : "bg-white border-slate-100 opacity-40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                          isPassed || isCurrent ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{s.title}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{s.desc}</div>
                      </div>
                    </div>

                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-200 text-amber-900 font-bold animate-pulse">
                        LIVE STATE
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
            <span>ORDER_ID: SVT-2026-8492</span>
            <a href="https://svt-tailors.vercel.app/" target="_blank" rel="noreferrer" className="text-amber-600 underline">
              svt-tailors.vercel.app →
            </a>
          </div>
        </div>

        {/* ============================================================
            SIMULATOR 03: MYSQL LATENCY & INDEX OPTIMIZER
            ============================================================ */}
        <div className="apple-card p-7 bg-white border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-indigo-600 font-bold">SIM_03 // DATABASE OPTIMIZATION</span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold text-[10px]">
                MySQL B-Tree Index Bench
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              MySQL Query Latency &amp; Index Hit
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5 mb-5">
              Simulating the -25% to -78% query latency reduction engineered in my task portal.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 mb-6">
              <span className="text-xs font-semibold text-slate-700">Schema Index Strategy:</span>
              <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setIndexMode("unindexed")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                    indexMode === "unindexed" ? "bg-rose-600 text-white font-bold" : "text-slate-600"
                  }`}
                >
                  Full Table Scan
                </button>
                <button
                  onClick={() => setIndexMode("indexed")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                    indexMode === "indexed" ? "bg-emerald-600 text-white font-bold" : "text-slate-600"
                  }`}
                >
                  B-Tree Indexed
                </button>
              </div>
            </div>

            {/* Benchmark Console */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs space-y-3 mb-6">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/10">
                <span>SQL QUERY: SELECT * FROM tasks WHERE user_id = 4281</span>
                <button
                  onClick={runQueryBenchmark}
                  className="px-2 py-0.5 rounded bg-brand-500 text-white text-[10px] font-bold hover:bg-brand-400"
                >
                  {isQueryRunning ? "Running..." : "Re-Run Query"}
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Rows Inspected:</span>
                  <span className={indexMode === "unindexed" ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                    {indexMode === "unindexed" ? "150,000 Rows (Table Scan)" : "12 Rows (Index Seek)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Execution Time:</span>
                  <span className={indexMode === "unindexed" ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                    {indexMode === "unindexed" ? "248.4 ms" : "3.2 ms (-78% drop)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Memory Buffer Cache:</span>
                  <span className="text-slate-200">
                    {indexMode === "unindexed" ? "Buffer Pool Exhausted" : "L1 Buffer Hit (100%)"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            Grounded in: <strong className="text-slate-700">Scalable Task &amp; Data Management Portal</strong>
          </div>
        </div>

        {/* ============================================================
            SIMULATOR 04: OMNIPULSE RETENTION & CLV MATHEMATICS
            ============================================================ */}
        <div className="apple-card p-7 bg-white border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-purple-600 font-bold">SIM_04 // PROBABILISTIC MODEL</span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold text-[10px]">
                BG/NBD + Gamma-Gamma
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              OmniPulse Customer Retention Calculator
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5 mb-5">
              Live Beta-Geometric/Negative Binomial equation estimating P(Alive).
            </p>

            {/* Sliders */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Repeat Purchases (Frequency):</span>
                  <span className="font-mono text-purple-600">{purchaseFrequency} transactions</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={purchaseFrequency}
                  onChange={(e) => setPurchaseFrequency(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Weeks Since Last Order (Recency):</span>
                  <span className="font-mono text-purple-600">{recencyWeeks} weeks</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={recencyWeeks}
                  onChange={(e) => setRecencyWeeks(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>
            </div>

            {/* Calculated Results */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 font-mono text-center">
              <div>
                <div className="text-2xl font-black text-purple-900">{pAlive}%</div>
                <div className="text-[11px] text-purple-700 mt-0.5">P(Alive) Probability</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-900">₹{expectedValue.toLocaleString()}</div>
                <div className="text-[11px] text-purple-700 mt-0.5">12-Mo Expected CLV</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 font-mono pt-4">
            Repository: <a href="https://github.com/vardhanyerramsetti71beep/OmniPulse-Enterprise-CLV-Churn-Intelligence-Engine" target="_blank" rel="noreferrer" className="text-purple-600 underline">OmniPulse Engine GitHub →</a>
          </div>
        </div>

      </div>

    </div>
  );
}
