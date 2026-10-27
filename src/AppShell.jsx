import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopElevator from "./components/ScrollToTopElevator";

export default function AppShell({ children }) {
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  // Scroll to top instantly on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fbfbfd] dark:bg-[#070d18] text-[#1d1d1f] dark:text-[#f8fafc] transition-colors duration-300">
      
      {/* Apple Cupertino Ambient Background Diffusion */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60 dark:opacity-40">
        <div
          className="absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full transition-all duration-500"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[65%] rounded-full transition-all duration-500"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255, 153, 0, 0.06) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute top-[40%] right-[15%] w-[45%] h-[45%] rounded-full transition-all duration-500"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Experience Viewport */}
      <main className="relative z-10 flex-1 flex flex-col pt-16">
        {children}
      </main>

      {/* Cupertino Editorial Footer */}
      <Footer />

      {/* VisionOS Floating Scroll Elevator */}
      <ScrollToTopElevator />

    </div>
  );
}
