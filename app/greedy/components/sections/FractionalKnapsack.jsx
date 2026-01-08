"use client";
import { motion } from "framer-motion";

export default function FractionalKnapsack() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🎒</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Fractional Knapsack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Maximize value with weight constraint (fractions allowed)
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-violet-600">
        <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">
          📝 Problem & Greedy Strategy
        </h3>
        <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
          Given weights and values of n items, put these items in a knapsack of capacity W to get the
          maximum total value. You can take fractions of items.
        </p>
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
          <p className="font-bold text-violet-700 dark:text-violet-300 mb-2">
            Greedy Approach:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-violet-600">1.</span>
              <span>Calculate value/weight ratio for each item</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-violet-600">2.</span>
              <span>Sort items by ratio in descending order</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-violet-600">3.</span>
              <span>Take items with highest ratio until knapsack is full</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
            Time Complexity
          </h4>
          <div className="text-3xl font-bold text-green-600 mb-2 font-mono">O(n log n)</div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Due to sorting</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
            Space Complexity
          </h4>
          <div className="text-3xl font-bold text-blue-600 mb-2 font-mono">O(1)</div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Constant extra space</p>
        </div>
      </div>
    </div>
  );
}
