"use client";
import { motion } from "framer-motion";

export default function DPCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Dynamic Programming Cheatsheet
      </h2>

      {/* DP Problem Checklist */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✅ How to Identify DP Problems
        </h3>
        <div className="space-y-4">
          {[
            {
              question: "Can problem be broken into subproblems?",
              answer: "Yes → Consider DP (or Divide & Conquer)",
              color: "pink",
            },
            {
              question: "Are subproblems overlapping?",
              answer: "Yes → DP is better than plain recursion",
              color: "rose",
            },
            {
              question: "Does optimal substructure exist?",
              answer: "Yes → DP can find optimal solution",
              color: "fuchsia",
            },
            {
              question: "Keywords: Min/Max, Count ways, Optimize?",
              answer: "These often indicate DP problems",
              color: "purple",
            },
            {
              question: "Multiple choices at each step?",
              answer: "DP helps explore all possibilities efficiently",
              color: "violet",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 p-4 rounded-xl border-l-4 border-${item.color}-600`}
            >
              <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                {item.question}
              </div>
              <div className={`text-${item.color}-700 dark:text-${item.color}-300 text-sm`}>
                → {item.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common DP Problem Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common DP Problem Types
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "1D DP",
              problems: ["Climbing Stairs", "House Robber", "Coin Change", "Decode Ways", "Longest Increasing Subsequence"],
            },
            {
              type: "2D DP",
              problems: ["Unique Paths", "LCS", "Edit Distance", "0/1 Knapsack", "Min Path Sum"],
            },
            {
              type: "String DP",
              problems: ["LCS", "Edit Distance", "Palindrome Substrings", "Distinct Subsequences"],
            },
            {
              type: "Knapsack Variants",
              problems: ["0/1 Knapsack", "Unbounded Knapsack", "Partition Equal Subset", "Target Sum"],
            },
            {
              type: "Stock Trading",
              problems: ["Best Time to Buy/Sell Stock I-VI", "With Cooldown", "With Fee"],
            },
            {
              type: "Game Theory",
              problems: ["Stone Game", "Predict the Winner", "Nim Game"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="font-bold text-pink-700 dark:text-pink-400 mb-2 text-lg">
                {item.type}
              </div>
              <ul className="space-y-1">
                {item.problems.map((problem, pIdx) => (
                  <li key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-pink-600 dark:text-pink-400">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DP Steps */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔢 5 Steps to Solve DP Problems
        </h3>
        <div className="space-y-4">
          {[
            { step: "1. Define State", desc: "What does dp[i] or dp[i][j] represent?" },
            { step: "2. Find Recurrence Relation", desc: "How to compute dp[i] from previous states?" },
            { step: "3. Initialize Base Cases", desc: "What are dp[0], dp[1], or boundary values?" },
            { step: "4. Decide Order", desc: "Which direction to fill the DP table?" },
            { step: "5. Return Answer", desc: "Where is the final answer in DP table?" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-slate-100">{item.step}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Complexity Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Complexity Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-pink-100 dark:bg-pink-900/30">
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-left">Problem Type</th>
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-center">Time</th>
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-center">Space</th>
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-left">Can Optimize Space?</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Fibonacci (1D)", time: "O(n)", space: "O(n)", optimize: "Yes → O(1)" },
                { type: "2D Grid", time: "O(m×n)", space: "O(m×n)", optimize: "Yes → O(n)" },
                { type: "String DP", time: "O(m×n)", space: "O(m×n)", optimize: "Sometimes" },
                { type: "Knapsack", time: "O(n×W)", space: "O(n×W)", optimize: "Yes → O(W)" },
                { type: "LIS", time: "O(n²)", space: "O(n)", optimize: "No, but O(n log n) possible" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-pink-50 dark:hover:bg-pink-900/10">
                  <td className="border border-pink-300 dark:border-pink-700 p-3 font-bold">
                    {row.type}
                  </td>
                  <td className="border border-pink-300 dark:border-pink-700 p-3 text-center font-mono text-green-600 dark:text-green-400">
                    {row.time}
                  </td>
                  <td className="border border-pink-300 dark:border-pink-700 p-3 text-center font-mono text-blue-600 dark:text-blue-400">
                    {row.space}
                  </td>
                  <td className="border border-pink-300 dark:border-pink-700 p-3 text-xs">
                    {row.optimize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaways */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💡 Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🎯", tip: "DP = Optimized recursion with memoization or tabulation" },
            { icon: "🔄", tip: "Check for overlapping subproblems and optimal substructure" },
            { icon: "📝", tip: "Top-down (memo) easier to write, bottom-up (tab) more efficient" },
            { icon: "💾", tip: "Often can optimize space from O(n²) to O(n) or O(1)" },
            { icon: "🎨", tip: "Learn patterns: Fibonacci, Knapsack, String, Grid, LIS" },
            { icon: "⚡", tip: "DP converts exponential O(2^n) to polynomial O(n²) or O(n)" },
            { icon: "🔢", tip: "Always start with base cases, then build up solution" },
            { icon: "🎓", tip: "Practice! DP becomes intuitive with enough problems" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 pt-1">
                {item.tip}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
