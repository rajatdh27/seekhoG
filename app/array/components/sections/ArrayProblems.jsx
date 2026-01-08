"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ArrayProblems() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Must-Know Problems
      </motion.h2>
      <p className="text-slate-700 dark:text-slate-300 mb-8">
        100+ curated problems organized by pattern. Start with Easy, master them, then move to Medium and Hard.
      </p>

      <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="text-6xl mb-4">🚧</div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Coming Soon!
        </h3>
        <p className="text-slate-700 dark:text-slate-300 max-w-md mx-auto">
          This section will contain detailed solutions for 100+ array problems, categorized by pattern with complexity analysis and multiple approaches.
        </p>
      </div>
    </div>
  );
}
