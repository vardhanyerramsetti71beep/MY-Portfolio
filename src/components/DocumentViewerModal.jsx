import React, { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from "lucide-react";

export default function DocumentViewerModal({ isOpen, onClose, title, subtitle, children, downloadUrl }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      setZoom(1);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0b1324] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-black/10 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
            {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 shadow-sm">
              <button
                onClick={() => setZoom((prev) => Math.min(prev + 0.2, 2.0))}
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white rounded"
                title="Zoom In"
              >
                <ZoomIn size={15} />
              </button>
              <button
                onClick={() => setZoom((prev) => Math.max(prev - 0.2, 0.6))}
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white rounded"
                title="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white rounded"
                title="Reset Zoom"
              >
                <RotateCcw size={15} />
              </button>
            </div>

            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition shadow-sm"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body with Zoom */}
        <div className="flex-1 overflow-auto p-6 bg-slate-100 dark:bg-slate-950 flex items-center justify-center min-h-[400px]">
          <div
            style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
            className="transition-transform duration-200 ease-out max-w-full"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
