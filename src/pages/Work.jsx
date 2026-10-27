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
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-1">
          Projects &amp; Deployments.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl leading-relaxed">
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
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
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
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1 text-xs font-mono">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-2 px-2">
              DEPLOYMENT RAIL
            </div>
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => scrollToSection(p.id)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition ${
                  activeProject === p.index
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-600 hover:bg-slate-100"
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

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-500 font-mono space-y-1">
            <div className="text-slate-900 font-bold">100% REPRODUCIBLE</div>
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
                <article className="apple-card p-8 sm:p-10 bg-white border border-slate-200/80 space-y-6">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-bold mb-1">
                        <span>{project.index} //</span>
                        <span className="text-brand-600 uppercase">{project.category}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Verification Badges */}
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {project.live ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold font-mono border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Live Production
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold font-mono">
                          Microservice
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Problem & Solution Double-Column */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100/80 space-y-1.5">
                      <div className="text-xs font-bold font-mono text-rose-700 uppercase tracking-wider">
                        The Challenge // Problem
                      </div>
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/80 space-y-1.5">
                      <div className="text-xs font-bold font-mono text-emerald-800 uppercase tracking-wider">
                        The Architectural Solution
                      </div>
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Flow Pipeline */}
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
                    <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers size={12} className="text-brand-400" />
                      <span>Architecture Pipeline:</span>
                    </div>
                    <div className="text-slate-200 text-xs leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 font-mono text-center">
                    {project.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges & Actions Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 font-semibold"
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
                          className="apple-pressable inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition"
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
                          className="apple-pressable inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition"
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
