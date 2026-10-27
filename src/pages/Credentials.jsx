import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, Layers } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import DocumentViewerModal from "../components/DocumentViewerModal";
import { CERTIFICATIONS } from "../data/portfolioData";

export default function Credentials() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div>
        <span className="headline-eyebrow text-amber-600 dark:text-amber-400">OFFICIAL ACCREDITATIONS</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
          Credentials &amp; Certifications.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
          Formally verified technical certifications in Cloud Computing (AWS), Enterprise Mobility (Google Android), and Computer Networks (Cisco).
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert) => (
          <Reveal key={cert.id} y={20}>
            <div className="apple-card p-8 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between h-full space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-amber-600 dark:text-amber-400 font-bold uppercase">{cert.badge}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-700/50 text-[10px]">
                    {cert.status}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {cert.title}
                </h2>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4 flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                  <span>•</span>
                  <span>Issued {cert.year}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cert.summary}
                </p>

                {/* Skills Chips */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase mb-2">
                    Verified Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="apple-pressable inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition"
                >
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Inspect Verification Card</span>
                </button>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">ID: {cert.id.toUpperCase()}</span>
              </div>

            </div>
          </Reveal>
        ))}
      </div>

      {/* Verification Modal */}
      {selectedCert && (
        <DocumentViewerModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          subtitle={`ISSUER: ${selectedCert.issuer} // YEAR: ${selectedCert.year}`}
        >
          <div className="p-8 max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 space-y-4 font-mono text-xs text-slate-800 dark:text-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-amber-600 dark:text-amber-400 font-bold uppercase">{selectedCert.badge}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck size={14} />
                VERIFIED_VALID
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans tracking-tight">
              {selectedCert.title}
            </h4>

            <p className="text-slate-600 dark:text-slate-300 font-sans text-xs leading-relaxed">
              {selectedCert.summary}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-1">
              <div className="text-slate-400 dark:text-slate-500 text-[10px]">VERIFIED DOMAINS COVERED:</div>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                {selectedCert.skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-[10px] text-slate-400 dark:text-slate-500 flex justify-between">
              <span>HOLDER: VARDHAN YERRAMSETTI</span>
              <span>YEAR: {selectedCert.year}</span>
            </div>
          </div>
        </DocumentViewerModal>
      )}

    </div>
  );
}
