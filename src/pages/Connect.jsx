import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Github, Linkedin, Send, CheckCircle2, ArrowUpRight, Copy } from "lucide-react";
import Reveal from "../components/motion/Reveal";
import { PROFILE } from "../data/portfolioData";

export default function Connect() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sent
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(formData.subject || "Collaboration Inquiry")}&body=${encodeURIComponent(`Hi Vardhan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div>
        <span className="headline-eyebrow text-emerald-600 dark:text-emerald-400">DIRECT OUTREACH</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
          Let's Connect.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-2xl leading-relaxed">
          Open to full-time engineering roles, high-impact backend contracts, cloud architecture consulting, or technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Direct Contacts & Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Card */}
          <div className="apple-card p-6 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">DIRECT EMAIL</span>
              <button
                onClick={() => copyToClipboard(PROFILE.email, "email")}
                className="text-xs text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-semibold flex items-center gap-1"
              >
                {copiedField === "email" ? <CheckCircle2 size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedField === "email" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition truncate block"
            >
              {PROFILE.email}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Response SLA: Typically within 4–6 business hours.
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="apple-card p-6 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">WHATSAPP INSTANT CHAT</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <span>{PROFILE.phone}</span>
              <ArrowUpRight size={16} />
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              One-click instant messaging via WhatsApp Web or mobile app.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="apple-card p-5 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Github size={20} className="text-slate-900 dark:text-white" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">GitHub</span>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="apple-card p-5 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin size={20} className="text-[#0077b5] dark:text-[#38bdf8]" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">LinkedIn</span>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Location note */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div>LOCATION: Andhra Pradesh, India (IST / UTC+5:30)</div>
            <div>STATUS: Ready for Global Remote &amp; On-Site Relocation</div>
          </div>

        </div>

        {/* Right: Message Terminal Form */}
        <div className="lg:col-span-7">
          <Reveal y={20}>
            <form onSubmit={handleSubmit} className="apple-card p-8 sm:p-10 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill out this form to launch a pre-addressed message directly to my inbox.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Python Full Stack Role / Cloud Architecture Project"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your opportunity, role details, or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="apple-pressable w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs tracking-wide shadow-md transition flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>Transmit Message via Email</span>
              </button>

              {status === "sent" && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Email client triggered. I will follow up promptly!</span>
                </div>
              )}
            </form>
          </Reveal>
        </div>

      </div>

    </div>
  );
}
