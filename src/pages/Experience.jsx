import React from "react";
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin, Award } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import { EXPERIENCE, EDUCATION } from "../data/portfolioData";

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div>
        <span className="headline-eyebrow">CAREER &amp; EDUCATION</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
          Professional Milestones.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
          Operational responsibilities, technical mentoring, data-driven campaign analytics, and foundational computer science engineering.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-400 dark:text-slate-500">
          <Briefcase size={14} className="text-brand-600 dark:text-brand-400" />
          <span>Professional Experience</span>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <Reveal key={exp.id} y={20}>
              <div className="apple-card p-8 sm:p-10 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">
                      {exp.type}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                      {exp.role}
                    </h2>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {exp.company}
                      {exp.subCompany && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-normal"> ({exp.subCompany})</span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1 self-start sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 font-bold text-slate-700 dark:text-slate-200">
                      <Calendar size={13} className="text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin size={13} className="text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 font-mono text-center">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-400 dark:text-slate-500">
          <GraduationCap size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span>Academic Foundation</span>
        </div>

        <Reveal y={20}>
          <div className="apple-card p-8 sm:p-10 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  UNIVERSITY DEGREE // ACCREDITED
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                  {EDUCATION.degree} in {EDUCATION.major}
                </h2>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                  {EDUCATION.institution}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:text-right space-y-1">
                <div className="font-bold text-slate-700 dark:text-slate-200">{EDUCATION.period}</div>
                <div className="text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-700/50">
                  CGPA: {EDUCATION.cgpa}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase mb-3">
                Relevant Engineering Coursework:
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>

    </div>
  );
}
