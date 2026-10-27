import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ArrowUpRight, Award, FileText, Terminal, Layers } from "lucide-react";
import SearchModal from "./SearchModal";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Overview", path: "/" },
  { label: "Projects", path: "/work", badge: "8 Live" },
  { label: "Architecture", path: "/ecosystem" },
  { label: "Simulators", path: "/lab" },
  { label: "Experience", path: "/experience" },
  { label: "Credentials", path: "/credentials" },
  { label: "Resume", path: "/resume" },
  { label: "Connect", path: "/connect" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener: Command+K or Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar-shell ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          
          {/* Brand Signature */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-amber-500 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              VY
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Vardhan Yerramsetti
              </span>
              <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AWS Certified • 8 Live Apps
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command+K Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="nav-search-btn"
              title="Search Portfolio (Ctrl + K)"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[9px] font-mono px-1 py-0.5 rounded bg-black/5 border border-black/10">
                ⌘K
              </kbd>
            </button>

            {/* Quick Resume Button */}
            <Link
              to="/resume"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition shadow-sm"
            >
              <FileText size={13} />
              <span>Resume</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-black/5"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[64px] left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-black/10 p-4 space-y-1 shadow-xl animate-fadeIn">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium ${
                    isActive ? "bg-brand-50 text-brand-600 font-semibold" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-700">
                        {link.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Command+K Search Palette */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
