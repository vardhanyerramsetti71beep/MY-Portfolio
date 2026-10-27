import React, { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Code2, CheckCircle2, Layers, Cpu, Database, Activity, Sparkles } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import { PROJECTS } from "../data/portfolioData";

const CATEGORIES = ["All", "AI & Computer Vision", "Full Stack & Microservices", "E-Commerce & Frontend", "Analytics & Systems"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState("01");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(selectedCategory) || (selectedCategory === "Full Stack & Microservices" && p.category.includes("Full Stack")));

  // Scroll listener to update active rail
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = PROJECTS.length - 1; i >= 0; i--) {
        const el = document.getElementById(PROJECTS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveProject(PROJECTS[i].index);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Header Section */}
      <div className="mb-12">
        <span className="headline-eyebrow">ENGINEERING EXHIBITION</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
          Projects &amp; Deployments.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
          8 verified production web applications and microservices grounded in authentic repositories from GitHub, deployed live across Vercel and AWS.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition apple-pressable ${
                selectedCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Floating Spatial Navigation Rail (Desktop) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-28 space-y-2">
          <div className="apple-card p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-1 text-xs font-mono">
            <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-2 px-2">
              DEPLOYMENT RAIL
            </div>
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => scrollToSection(p.id)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition ${
                  activeProject === p.index
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[11px] opacity-60">{p.index}</span>
                  <span className="truncate">{p.title}</span>
                </div>
                {p.live && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                )}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400 font-mono space-y-1">
            <div className="text-slate-900 dark:text-white font-bold">100% REPRODUCIBLE</div>
            <p>Every application listed includes public source code or verified live demonstration endpoints.</p>
          </div>
        </div>

        {/* Project Cards Stream */}
        <div className="lg:col-span-9 space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-28"
            >
              <Reveal y={24}>
                <article className="apple-card p-8 sm:p-10 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 font-bold mb-1">
                        <span>{project.index} //</span>
                        <span className="text-brand-600 dark:text-brand-400 uppercase">{project.category}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Verification Badges */}
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {project.live ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold font-mono border border-emerald-200 dark:border-emerald-700/50">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Live Production
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-xs font-semibold font-mono">
                          Microservice
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Problem & Solution Double-Column */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100/80 dark:border-rose-900/40 space-y-1.5">
                      <div className="text-xs font-bold font-mono text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                        The Challenge // Problem
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/40 space-y-1.5">
                      <div className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                        The Architectural Solution
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Flow Pipeline */}
                  <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-xs border border-transparent dark:border-white/5">
                    <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers size={12} className="text-brand-400" />
                      <span>Architecture Pipeline:</span>
                    </div>
                    <div className="text-slate-200 text-xs leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 font-mono text-center">
                    {project.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges & Actions Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="apple-pressable inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold shadow-sm transition"
                        >
                          <span>Launch Live App</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="apple-pressable inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm transition"
                        >
                          <Code2 size={14} />
                          <span>View Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              </Reveal>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
