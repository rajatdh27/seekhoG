"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const colors = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    shadow: "shadow-[0_0_20px_rgba(16,185,129,0.1)]",
    iconBg: "bg-emerald-500",
    dot: "bg-emerald-500",
    dotShadow: "shadow-[0_0_10px_rgba(16,185,129,0.8)]",
    bar: "from-emerald-600 to-green-400",
    barShadow: "shadow-[0_0_10px_rgba(16,185,129,0.4)]",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    shadow: "shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    iconBg: "bg-blue-500",
    dot: "bg-blue-500",
    dotShadow: "shadow-[0_0_10px_rgba(59,130,246,0.8)]",
    bar: "from-blue-600 to-indigo-400",
    barShadow: "shadow-[0_0_10px_rgba(59,130,246,0.4)]",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/20",
    shadow: "shadow-[0_0_20px_rgba(249,115,22,0.1)]",
    iconBg: "bg-orange-500",
    dot: "bg-orange-500",
    dotShadow: "shadow-[0_0_10px_rgba(249,115,22,0.8)]",
    bar: "from-orange-600 to-amber-400",
    barShadow: "shadow-[0_0_10px_rgba(249,115,22,0.4)]",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    shadow: "shadow-[0_0_20px_rgba(168,85,247,0.1)]",
    iconBg: "bg-purple-500",
    dot: "bg-purple-500",
    dotShadow: "shadow-[0_0_10px_rgba(168,85,247,0.8)]",
    bar: "from-purple-600 to-pink-400",
    barShadow: "shadow-[0_0_10px_rgba(168,85,247,0.4)]",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    shadow: "shadow-[0_0_20px_rgba(99,102,241,0.1)]",
    iconBg: "bg-indigo-500",
    dot: "bg-indigo-500",
    dotShadow: "shadow-[0_0_10px_rgba(99,102,241,0.8)]",
    bar: "from-indigo-600 to-violet-400",
    barShadow: "shadow-[0_0_10px_rgba(99,102,241,0.4)]",
  },
};

export default function SidebarTOC({ sections, activeSection, onSectionClick, color = "emerald" }) {
  const theme = colors[color] || colors.emerald;

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            onSectionClick(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, onSectionClick]);

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const progress = Math.round(((currentIndex + 1) / sections.length) * 100);

  return (
    <div className="space-y-6">
      <nav>
        <ul className="space-y-2">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionClick(section.id);
                    const el = document.getElementById(section.id);
                    if (el) {
                      const offset = 100;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 group ${
                    isActive
                      ? `${theme.bg} ${theme.text} ${theme.border} ${theme.shadow}`
                      : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? `${theme.iconBg} text-slate-900` : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                  }`}>
                    {Icon && <Icon size={14} />}
                  </div>
                  <span className="truncate">{section.title}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className={`ml-auto w-1.5 h-1.5 rounded-full ${theme.dot} ${theme.dotShadow}`} 
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Progress Card */}
      <div className="p-6 bg-slate-900/60 rounded-[2rem] border border-white/5 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 px-1">
          <span>Completion</span>
          <span className={theme.text}>{progress}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={`bg-gradient-to-r ${theme.bar} h-full rounded-full ${theme.barShadow}`}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
