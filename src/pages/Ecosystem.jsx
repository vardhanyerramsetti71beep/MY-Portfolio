import React from "react";
import { Layers, Cloud, Server, Cpu, Database, Layout, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import { ECOSYSTEM_LAYERS } from "../data/portfolioData";

export default function Ecosystem() {
  const getLayerIcon = (layer) => {
    switch (layer) {
      case "01": return <Cloud size={20} className="text-amber-500" />;
      case "02": return <Server size={20} className="text-brand-500" />;
      case "03": return <Cpu size={20} className="text-purple-500" />;
      case "04": return <Database size={20} className="text-indigo-500" />;
      case "05": return <Layout size={20} className="text-emerald-500" />;
      default: return <Layers size={20} className="text-slate-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div>
        <span className="headline-eyebrow">SYSTEMS ARCHITECTURE</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
          Technology Ecosystem.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
          A layered architectural breakdown of how I engineer end-to-end applications — from AWS cloud infrastructure and Python microservices to normalized databases and reactive interfaces.
        </p>
      </div>

      {/* Layer Cards Stream */}
      <div className="space-y-8">
        {ECOSYSTEM_LAYERS.map((layer) => (
          <Reveal key={layer.layer} y={20}>
            <div className="apple-card p-8 sm:p-10 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
              
              {/* Layer Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                    {getLayerIcon(layer.layer)}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      LAYER {layer.layer} //
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {layer.name}
                    </h2>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-semibold self-start sm:self-center">
                  Production Verified
                </span>
              </div>

              {/* Layer Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl">
                {layer.description}
              </p>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {layer.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{tech.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {tech.role}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        ))}
      </div>

      {/* Cloud Reliability Note */}
      <div className="p-8 rounded-3xl bg-slate-900 dark:bg-[#0b1324] text-white font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 dark:border-white/10">
        <div className="space-y-1">
          <div className="text-amber-400 font-bold text-sm">AWS CLOUD ARCHITECTURE PRINCIPLE</div>
          <p className="text-slate-300 text-xs max-w-2xl leading-relaxed">
            All services are structured adhering to the AWS Well-Architected Framework: Security through least-privilege IAM, Performance efficiency through connection pooling, and Cost optimization through serverless triggers.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 whitespace-nowrap">
          <ShieldCheck size={16} />
          <span>AWS-CCP Validated</span>
        </div>
      </div>

    </div>
  );
}
