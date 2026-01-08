"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TableOfContents({ sections, activeSection, onSectionClick }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);

      // Update active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all ${
        isSticky ? "lg:shadow-2xl" : ""
      }`}
    >
      <div className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-700 dark:to-teal-800 p-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>📚</span> Table of Contents
        </h3>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {sections.map((section, idx) => (
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
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 border-l-4 border-green-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {section.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Progress */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-2">
          <span>Progress</span>
          <span>{Math.round((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
            }}
            className="bg-gradient-to-r from-green-600 to-teal-600 h-2 rounded-full transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
}
