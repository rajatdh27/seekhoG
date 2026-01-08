"use client";
import { motion } from "framer-motion";

export default function GreedyPatterns() {
  const patterns = [
    {
      name: "Sorting-Based Greedy",
      description: "Sort by a criterion, then make greedy choices",
      examples: ["Activity Selection", "Fractional Knapsack", "Job Sequencing"],
      complexity: "O(n log n)",
    },
    {
      name: "Priority Queue/Heap",
      description: "Use min/max heap for greedy selection",
      examples: ["Huffman Coding", "Merge K Sorted Lists", "Dijkstra's Algorithm"],
      complexity: "O(n log n)",
    },
    {
      name: "Two Pointer",
      description: "Greedy choice with two pointers",
      examples: ["Container With Most Water", "Remove Duplicates", "Boats to Save People"],
      complexity: "O(n)",
    },
    {
      name: "Interval Scheduling",
      description: "Greedy on intervals/time slots",
      examples: ["Meeting Rooms", "Minimum Platforms", "Non-overlapping Intervals"],
      complexity: "O(n log n)",
    },
    {
      name: "Prefix/Suffix Selection",
      description: "Choose elements from start or end",
      examples: ["Gas Station", "Jump Game", "Candy Distribution"],
      complexity: "O(n)",
    },
    {
      name: "Exchange Argument",
      description: "Prove greedy by swapping elements",
      examples: ["Task Scheduler", "Minimize Lateness", "Optimal File Merge"],
      complexity: "O(n log n)",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🎯 Greedy Patterns
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {patterns.map((pattern, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800"
          >
            <h3 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-3">
              {pattern.name}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              {pattern.description}
            </p>
            <div className="mb-4">
              <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-2">
                Examples:
              </div>
              <ul className="space-y-1">
                {pattern.examples.map((example, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span className="text-violet-500">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xs font-mono text-green-600 dark:text-green-400">
              Complexity: {pattern.complexity}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
