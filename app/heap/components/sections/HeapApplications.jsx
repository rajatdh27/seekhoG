"use client";
import { motion } from "framer-motion";

export default function HeapApplications() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🎯 Heap Applications
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400">
        Coming soon: Real-world applications of heaps including priority queues, graph algorithms, and more.
      </p>
    </div>
  );
}
