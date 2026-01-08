"use client";

import { motion } from "framer-motion";
import ArrayVisualizer from "../visualizer/ArrayVisualizer";

export default function ArrayVisualizerSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Interactive Visualizer
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-6">
        Practice array operations with this interactive visualizer. See how different patterns and algorithms work in real-time!
      </p>

      <div className="w-full overflow-hidden">
        <ArrayVisualizer />
      </div>
    </div>
  );
}
