import React, { useState } from "react";
import { Download, Printer, CheckCircle2, ShieldCheck, FileText, ArrowRight, Award } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import { PROFILE, EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../data/portfolioData";

export default function Resume() {
  const [atsScore, setAtsScore] = useState(98);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      
      {/* Header & ATS Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 print:hidden">
        <div>
          <span className="headline-eyebrow">CURRICULUM VITAE</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Resume Center.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
            Optimized for Applicant Tracking Systems (ATS) and human engineering leaders. Available for instant print or review.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="apple-pressable inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm transition"
          >
            <Printer size={14} />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* ATS Match Meter Box (Screen only) */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-brand-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-brand-950/40 border border-emerald-200/80 dark:border-emerald-800/40 shadow-sm print:hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg font-mono shadow-md">
              98%
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">ATS Keyword Optimization Match</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                Matched for: Python Full Stack Developer, AWS Cloud Practitioner, Microservice Architect
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-emerald-800 dark:text-emerald-300">
            <span className="px-2 py-0.5 rounded bg-emerald-100/80 dark:bg-emerald-900/60">✓ Flask / FastAPI</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100/80 dark:bg-emerald-900/60">✓ AWS Cloud</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100/80 dark:bg-emerald-900/60">✓ MySQL Optimization</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100/80 dark:bg-emerald-900/60">✓ OpenCV / ML</span>
          </div>
        </div>
      </div>

      {/* Canonical Printable Resume Document */}
      <div className="p-8 sm:p-14 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8 text-slate-800 dark:text-slate-200 font-sans print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 dark:border-slate-100 print:border-black pb-5 text-center space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight uppercase">
            {PROFILE.name}
          </h2>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 print:text-gray-800 font-mono">
            Python Full Stack Developer • AWS Certified Cloud Practitioner • Data Science
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 print:text-gray-600 font-mono flex flex-wrap items-center justify-center gap-2 pt-1">
            <span>{PROFILE.phone}</span>
            <span>|</span>
            <span>{PROFILE.email}</span>
            <span>|</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">
              linkedin.com/in/vardhan-yerramsetti
            </a>
            <span>|</span>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">
              github.com/vardhanyerramsetti71beep
            </a>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
            Professional Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-gray-800 leading-relaxed text-justify">
            {PROFILE.bio}
          </p>
        </div>

        {/* Section: Technical Skills */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs">
            <div><strong className="text-slate-900 dark:text-white print:text-black">Languages:</strong> Python, JavaScript (ES6+), SQL, C++, HTML5, CSS3</div>
            <div><strong className="text-slate-900 dark:text-white print:text-black">Backend &amp; APIs:</strong> Flask, FastAPI, Django, RESTful Architecture, Serverless</div>
            <div><strong className="text-slate-900 dark:text-white print:text-black">Cloud &amp; DevOps:</strong> AWS (EC2, S3, Lambda, IAM), Vercel, Docker basics</div>
            <div><strong className="text-slate-900 dark:text-white print:text-black">Data Science &amp; ML:</strong> OpenCV, Scikit-learn, TensorFlow, NumPy, Pandas, BG/NBD, Plotly 3D</div>
            <div><strong className="text-slate-900 dark:text-white print:text-black">Databases:</strong> MySQL, PyMySQL, Relational Schema Design, Query Optimization (-25%)</div>
            <div><strong className="text-slate-900 dark:text-white print:text-black">Frontend:</strong> React.js, Next.js 14, Tailwind CSS, DOM Manipulation, SPAs</div>
          </div>
        </div>

        {/* Section: Key Technical Projects */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
            Key Technical Projects (Verified Production Deployments)
          </h3>
          
          {/* Project 1: Scalable Task Cloud Portal */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>Scalable Task &amp; Data Management Cloud Portal</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">Python, Flask REST API, React.js, MySQL, AWS EC2/S3</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Architected a multi-tenant enterprise portal featuring complete tenant data isolation, JWT authentication, and compliance audit logging.</li>
              <li>Engineered compound B-Tree indexes on <code>(tenant_id, status)</code> in MySQL, reducing query latency by 25% (18.4ms down to 13.8ms).</li>
              <li>Decoupled binary storage into Amazon S3 with TLS 1.2+ security policies and containerized execution on AWS EC2.</li>
            </ul>
          </div>

          {/* Project 2: OmniPulse Retention & CLV Engine */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>OmniPulse Enterprise CLV &amp; Retention Prediction Microservice</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">FastAPI, Scikit-learn, BG/NBD, Gamma-Gamma, Python</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Implemented Beta-Geometric/Negative Binomial (BG/NBD) probabilistic models to compute real-time customer vitality probability P(Alive).</li>
              <li>Integrated Gamma-Gamma sub-models to estimate monetary value and 12-month expected customer lifetime value (CLV) forecasts.</li>
              <li>Delivered high-throughput in-memory REST inference endpoints with sub-15ms prediction latency.</li>
            </ul>
          </div>

          {/* Project 3: Music Emotion Recommender */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>Music Recommendation System Based on Facial Expression Recognition</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">Python, Flask REST API, OpenCV, Scikit-learn</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Built an end-to-end computer vision pipeline analyzing facial expressions via live stream with &gt;90% classification accuracy.</li>
              <li>Engineered high-throughput Flask RESTful APIs managing asynchronous model inference and targeted audio playlist dispatch.</li>
              <li>Optimized image processing pipeline using OpenCV for low-latency facial landmark extraction in production.</li>
            </ul>
          </div>

          {/* Project 4: 90-Day Body Transformation */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>90-Day Body Transformation Biometric 3D Manifolds Dashboard</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">Python, Plotly 3D WebGL, Biometrics, HTML5/CSS3</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Developed a biometric analytics dashboard converting time-series physical measurements into interactive Plotly 3D WebGL surface meshes.</li>
              <li>Implemented mathematical data smoothing algorithms to track morphological variations across circumference and body fat timelines.</li>
              <li>Designed interactive 3D spatial rotation controls and temporal telemetry sliders for exploratory health metrics analysis.</li>
            </ul>
          </div>

          {/* Project 5: S.V.T. Tailors Atelier */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>S.V.T. Tailors Bespoke Atelier &amp; 5-Stage Workshop Tracker</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">Python Serverless, MySQL, PyMySQL, React, Tailwind</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Built an end-to-end digital atelier configurator with dynamic garment customizer (fabrics, collar, cuffs, measurements).</li>
              <li>Architected a 5-stage workshop state machine persisting orders into normalized MySQL schemas with &lt;35ms transaction latency.</li>
              <li>Engineered public tracking portal providing transparent visibility into handcrafted garment fabrication milestones.</li>
            </ul>
          </div>

          {/* Project 6: MS Pickles Store */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
              <span>MS Pickles Artisanal Andhra E-Commerce Platform</span>
              <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, LocalStorage</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5 leading-relaxed">
              <li>Engineered a responsive, mobile-first artisanal food e-commerce platform with dynamic flavor filtering and localized regional UX.</li>
              <li>Implemented persistent client-side cart state management supporting real-time price calculations, quantity updates, and local storage hydration.</li>
              <li>Optimized critical rendering paths and asset delivery, achieving sub-second first contentful paint (FCP).</li>
            </ul>
          </div>
        </div>

        {/* Section: Work Experience */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
            Work Experience
          </h3>
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="space-y-1">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-900 dark:text-white print:text-black">
                <span>{exp.role} — {exp.company}</span>
                <span className="font-mono font-normal text-slate-500 dark:text-slate-400 print:text-gray-600">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-1 leading-relaxed">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section: Education & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="space-y-1">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
              Education
            </h3>
            <div className="text-xs font-bold text-slate-900 dark:text-white print:text-black">{EDUCATION.degree} in {EDUCATION.major}</div>
            <div className="text-xs text-slate-700 dark:text-slate-300 print:text-gray-800">{EDUCATION.institution} (2018 – 2026)</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600 font-mono">CGPA: {EDUCATION.cgpa}</div>
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-gray-300 pb-1">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 space-y-0.5">
              <li>AWS Certified Cloud Practitioner — Amazon Web Services (2023)</li>
              <li>AWS Academy Cloud Foundations — Amazon Web Services (2023)</li>
              <li>Android Enterprise Associate — Google (2022)</li>
              <li>Cisco Networking Essentials — Cisco Academy (2022)</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
