"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function TableOfContents({ sections, activeSection, onSectionClick }) {
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust threshold for when section becomes "active"
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
                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                      : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? "bg-orange-500 text-slate-900" : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                  }`}>
                    <Icon size={14} />
                  </div>
                  <span className="truncate">{section.title}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" 
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
          <span className="text-orange-500">
            {Math.round((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
            }}
            className="bg-gradient-to-r from-orange-600 to-amber-400 h-full rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
