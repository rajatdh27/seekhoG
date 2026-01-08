"use client";
import { motion } from "framer-motion";

export default function HeapCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        📚 Heap Cheatsheet
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
          <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-4">
            Basic Operations
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">insert(value)</span>
              <span className="font-mono text-green-600 dark:text-green-400">O(log n)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">extractMin/Max()</span>
              <span className="font-mono text-green-600 dark:text-green-400">O(log n)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">getMin/Max()</span>
              <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">heapify()</span>
              <span className="font-mono text-green-600 dark:text-green-400">O(log n)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">buildHeap()</span>
              <span className="font-mono text-green-600 dark:text-green-400">O(n)</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Array Formulas
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">Parent of i</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">⌊(i-1)/2⌋</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">Left Child of i</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">2i + 1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">Right Child of i</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">2i + 2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-700 dark:text-slate-300">Height</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">⌊log₂(n)⌋</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
