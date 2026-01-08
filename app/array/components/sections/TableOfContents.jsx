"use client";

import { motion } from "framer-motion";

export default function TableOfContents({ sections, activeSection, onSectionClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700"
    >
      <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-slate-100">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick(section.id);
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
              activeSection === section.id
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <span className="text-sm font-medium">{section.title}</span>
          </motion.a>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Patterns</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">9+</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Problems</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">100+</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Companies</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">50+</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
