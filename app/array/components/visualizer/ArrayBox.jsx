"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ArrayBox({ index, value, highlight, pairHighlight, windowHighlight }) {
  function getStyles() {
    if (pairHighlight) {
      return {
        bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
        text: "text-white",
        border: "border-indigo-400",
        shadow: "shadow-xl shadow-purple-500/50",
        ring: "ring-4 ring-purple-400/30"
      };
    }
    if (highlight) {
      return {
        bg: "bg-gradient-to-br from-yellow-400 to-amber-500",
        text: "text-slate-900",
        border: "border-yellow-400",
        shadow: "shadow-xl shadow-yellow-500/50",
        ring: "ring-4 ring-yellow-400/30"
      };
    }
    if (windowHighlight) {
      return {
        bg: "bg-gradient-to-br from-green-400 to-emerald-500",
        text: "text-white",
        border: "border-green-400",
        shadow: "shadow-lg shadow-green-500/40",
        ring: "ring-2 ring-green-400/20"
      };
    }
    return {
      bg: "bg-white dark:bg-slate-700",
      text: "text-slate-900 dark:text-slate-100",
      border: "border-slate-300 dark:border-slate-600",
      shadow: "shadow-md",
      ring: ""
    };
  }

  const styles = getStyles();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: highlight ? [0, -5, 5, 0] : 0
        }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className={`
          relative w-24 h-28 rounded-xl flex flex-col items-center justify-center
          ${styles.bg} ${styles.border} ${styles.shadow} ${styles.ring}
          border-2 backdrop-blur-sm
          hover:scale-105 transition-transform cursor-pointer
        `}
      >
        {/* Index Label */}
        <div className={`
          absolute -top-3 left-1/2 -translate-x-1/2
          px-2 py-0.5 rounded-full text-xs font-bold
          ${pairHighlight || highlight || windowHighlight
            ? 'bg-white text-slate-900'
            : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
          }
          shadow-md
        `}>
          [{index}]
        </div>

        {/* Value */}
        <div className={`text-3xl font-black ${styles.text} drop-shadow-sm`}>
          {value}
        </div>

        {/* Memory Address (optional detail) */}
        <div className={`
          mt-1 text-xs font-mono opacity-60
          ${styles.text}
        `}>
          0x{(1000 + index * 4).toString(16)}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
