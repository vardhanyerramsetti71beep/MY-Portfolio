import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopElevator() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-scaleUp">
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl hover:border-brand-500/40 text-slate-700 hover:text-brand-600 transition-all apple-pressable"
        aria-label="Scroll to top"
        title={`Scroll to Top (${Math.round(progress)}%)`}
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="rgba(0, 0, 0, 0.06)"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeDasharray="119.38"
            strokeDashoffset={119.38 - (119.38 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        <ArrowUp size={16} strokeWidth={2.2} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
