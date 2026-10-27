import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Command, FileText, Layers, Award, Terminal, Code } from "lucide-react";
import { SEARCH_INDEX } from "../data/portfolioData";

export default function SearchModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Filter items based on query
  const filtered = query.trim() === ""
    ? SEARCH_INDEX.slice(0, 8)
    : SEARCH_INDEX.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      );

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        navigate(filtered[selectedIndex].path);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  const getItemIcon = (title) => {
    if (title.includes("Overview")) return <FileText size={16} className="text-brand-500" />;
    if (title.includes("Ecosystem") || title.includes("Architecture")) return <Layers size={16} className="text-indigo-500" />;
    if (title.includes("Credentials") || title.includes("AWS")) return <Award size={16} className="text-amber-500" />;
    if (title.includes("Lab") || title.includes("Simulators")) return <Terminal size={16} className="text-emerald-500" />;
    return <Code size={16} className="text-sky-500" />;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-black/5 gap-3">
          <Search size={18} className="text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, technologies, AWS credentials, experience..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 divide-y divide-slate-100/60">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              No results found for "<span className="font-semibold text-slate-700">{query}</span>"
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={item.title + idx}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-colors ${
                  idx === selectedIndex
                    ? "bg-slate-100/90 text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-200/60">
                    {getItemIcon(item.title)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 font-mono">
                      {item.keywords}
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={15}
                  className={`text-slate-400 transition-transform ${
                    idx === selectedIndex ? "translate-x-1 text-brand-600" : ""
                  }`}
                />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-t border-black/5 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span className="font-mono text-slate-400">Vardhan Portfolio Search</span>
        </div>
      </div>
    </div>
  );
}
