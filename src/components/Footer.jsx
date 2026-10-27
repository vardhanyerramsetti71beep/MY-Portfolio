import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight, Award, Terminal, Code2 } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/5 bg-[#f5f5f7] dark:bg-[#050a14] py-14 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center font-mono font-bold text-white dark:text-slate-900 text-xs shadow-sm">
                VY
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">
                Vardhan Yerramsetti
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">
              Python Full Stack Developer &amp; AWS Certified Cloud Practitioner. Specializing in high-throughput microservices and reactive cloud applications.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Full-Time &amp; High-Impact Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              System Map
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Flagship Projects (8 Live)</Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-slate-900 dark:hover:text-white transition-colors">Architecture Ecosystem</Link>
              </li>
              <li>
                <Link to="/lab" className="hover:text-slate-900 dark:hover:text-white transition-colors">Interactive Lab &amp; Simulators</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience &amp; Career</Link>
              </li>
              <li>
                <Link to="/credentials" className="hover:text-slate-900 dark:hover:text-white transition-colors">AWS &amp; Technical Credentials</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Deployments */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Verified Deployments
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="https://music-recommending.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Music Emotion Recommender</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://svt-tailors.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>S.V.T. Tailors Atelier Tracker</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://ms-pickles.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>MS Pickles Andhra Store</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://they-call-him-og-lemon.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>"They Call Him OG" Showcase</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://90-days-body-transformation.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>90-Day 3D Body Manifolds</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://flask-google-form.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Google Forms Clone &amp; SQL Engine</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://omni-pulse-enterprise-clv-churn-int-teal.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>OmniPulse CLV &amp; Retention Engine</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://task-cloud-portal.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Task Cloud Portal (AWS S3 &amp; EC2)</span>
                  <ArrowUpRight size={11} className="text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Connect */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Direct Reach
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-[#0077b5] dark:hover:text-[#38bdf8] transition"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition"
                title="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {PROFILE.email}
            </p>
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {PROFILE.phone}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 dark:text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Vardhan Yerramsetti. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React 19 &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="font-mono">Apple Cupertino Design System (Light / Dark)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
