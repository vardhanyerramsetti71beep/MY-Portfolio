import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./AppShell";

// Lazy-loaded pages for high-speed performance
const Overview = lazy(() => import("./pages/Overview"));
const Work = lazy(() => import("./pages/Work"));
const Ecosystem = lazy(() => import("./pages/Ecosystem"));
const Lab = lazy(() => import("./pages/Lab"));
const Experience = lazy(() => import("./pages/Experience"));
const Credentials = lazy(() => import("./pages/Credentials"));
const Resume = lazy(() => import("./pages/Resume"));
const Connect = lazy(() => import("./pages/Connect"));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      <span className="font-mono text-xs text-slate-400">Loading experience...</span>
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/work" element={<Work />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
