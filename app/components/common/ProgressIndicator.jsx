"use client";

import { motion } from "framer-motion";

export default function ProgressIndicator({
  sections,
  activeSection,
  colorClass = "blue-600",
  colorClassDark = "blue-500"
}) {
  const progress = Math.round(
    ((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100
  );

  const circumference = 2 * Math.PI * 28;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <motion.div
      className="fixed bottom-8 right-8 bg-white dark:bg-slate-800 rounded-full shadow-lg p-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="w-16 h-16 relative">
        <svg className="transform -rotate-90 w-16 h-16">
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-slate-200 dark:text-slate-700"
          />
          {/* Progress circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`text-${colorClass} dark:text-${colorClassDark} transition-all duration-300`}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-300">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
}
