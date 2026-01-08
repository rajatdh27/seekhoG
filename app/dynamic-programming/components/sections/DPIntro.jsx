"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DPIntro() {
  const [fibComparison, setFibComparison] = useState(null);

  const calculateFibRecursive = (n, calls = { count: 0 }) => {
    calls.count++;
    if (n <= 1) return n;
    return calculateFibRecursive(n - 1, calls) + calculateFibRecursive(n - 2, calls);
  };

  const calculateFibDP = (n) => {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  };

  const compareFib = (n) => {
    const calls = { count: 0 };
    const startRecursive = performance.now();
    const resultRecursive = calculateFibRecursive(n, calls);
    const timeRecursive = (performance.now() - startRecursive).toFixed(4);

    const startDP = performance.now();
    const resultDP = calculateFibDP(n);
    const timeDP = (performance.now() - startDP).toFixed(4);

    setFibComparison({
      n,
      recursive: { result: resultRecursive, time: timeRecursive, calls: calls.count },
      dp: { result: resultDP, time: timeDP, calls: n + 1 },
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl">
          <span className="text-4xl">🧩</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Introduction to Dynamic Programming
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Optimize recursive solutions by storing computed results
          </p>
        </div>
      </div>

      {/* What is DP */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border-l-4 border-pink-600">
          <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">
            🎯 What is Dynamic Programming?
          </h3>
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            <strong>Dynamic Programming (DP)</strong> is an algorithmic technique that solves complex problems by breaking them into simpler subproblems
            and storing their solutions to avoid redundant calculations.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm mb-2">
              <strong>Core Idea:</strong> Trade space for time
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              Instead of recalculating same subproblems, store results in memory (memoization/tabulation)
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Fibonacci Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Recursion vs DP: Fibonacci Demo
        </h3>
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => compareFib(20)}
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all"
            >
              Compare Fib(20)
            </button>
            <button
              onClick={() => compareFib(30)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Compare Fib(30)
            </button>
          </div>

          {fibComparison && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 text-lg">
                  ❌ Recursive (Naive)
                </h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Result:</strong> {fibComparison.recursive.result}</div>
                  <div><strong>Time:</strong> {fibComparison.recursive.time}ms</div>
                  <div><strong>Function Calls:</strong> {fibComparison.recursive.calls.toLocaleString()}</div>
                  <div className="text-xs text-red-600 dark:text-red-400 mt-2">
                    O(2^n) - Exponential time! 💀
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 text-lg">
                  ✅ Dynamic Programming
                </h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Result:</strong> {fibComparison.dp.result}</div>
                  <div><strong>Time:</strong> {fibComparison.dp.time}ms</div>
                  <div><strong>Operations:</strong> {fibComparison.dp.calls}</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    O(n) - Linear time! ⚡
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* When to Use DP */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✅ When to Use Dynamic Programming?
        </h3>
        <div className="space-y-4">
          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3 text-lg">
              1️⃣ Overlapping Subproblems
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Same subproblems are solved multiple times in recursion
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded font-mono text-xs">
              fib(5) = fib(4) + fib(3)<br/>
              fib(4) = fib(3) + fib(2) ← fib(3) calculated again!
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3 text-lg">
              2️⃣ Optimal Substructure
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Optimal solution can be built from optimal solutions of subproblems
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded font-mono text-xs">
              Shortest path from A to C = Shortest(A to B) + Shortest(B to C)
            </div>
          </div>
        </div>
      </div>

      {/* Two Main Approaches */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Two Main Approaches
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-lg">
              Top-Down (Memoization)
            </h4>
            <div className="space-y-2 text-sm">
              <div>✓ Start with original problem</div>
              <div>✓ Recursively break down</div>
              <div>✓ Store results in cache (memo)</div>
              <div>✓ Check cache before computing</div>
              <div className="mt-3 text-xs text-purple-700 dark:text-purple-300">
                Easier to write, intuitive
              </div>
            </div>
          </div>

          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-4 text-lg">
              Bottom-Up (Tabulation)
            </h4>
            <div className="space-y-2 text-sm">
              <div>✓ Start with base cases</div>
              <div>✓ Build up iteratively</div>
              <div>✓ Fill DP table/array</div>
              <div>✓ No recursion overhead</div>
              <div className="mt-3 text-xs text-pink-700 dark:text-pink-300">
                Faster, better space optimization
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DP vs Other Techniques */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ DP vs Other Techniques
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-pink-100 dark:bg-pink-900/30">
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-left">Technique</th>
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-left">When to Use</th>
                <th className="border border-pink-300 dark:border-pink-700 p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  technique: "Recursion",
                  when: "Simple problem, no overlapping subproblems",
                  example: "Tree traversal, factorial",
                },
                {
                  technique: "Dynamic Programming",
                  when: "Overlapping subproblems + optimal substructure",
                  example: "Fibonacci, LCS, Knapsack",
                },
                {
                  technique: "Greedy",
                  when: "Local optimal leads to global optimal",
                  example: "Activity selection, Huffman",
                },
                {
                  technique: "Divide & Conquer",
                  when: "Independent subproblems",
                  example: "Merge sort, binary search",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-pink-50 dark:hover:bg-pink-900/10">
                  <td className="border border-pink-300 dark:border-pink-700 p-3 font-bold">
                    {row.technique}
                  </td>
                  <td className="border border-pink-300 dark:border-pink-700 p-3 text-xs">
                    {row.when}
                  </td>
                  <td className="border border-pink-300 dark:border-pink-700 p-3 text-xs">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-World Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌍 Real-World Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              app: "Route Optimization",
              desc: "GPS navigation, shortest path (Dijkstra with DP)",
              icon: "🗺️",
            },
            {
              app: "Text Algorithms",
              desc: "Autocorrect, diff tools, longest common subsequence",
              icon: "📝",
            },
            {
              app: "Finance",
              desc: "Stock trading strategies, portfolio optimization",
              icon: "💰",
            },
            {
              app: "Resource Allocation",
              desc: "Knapsack problems, budget optimization",
              icon: "📦",
            },
            {
              app: "Bioinformatics",
              desc: "DNA sequence alignment, gene prediction",
              icon: "🧬",
            },
            {
              app: "Game AI",
              desc: "Chess engines, optimal game strategies",
              icon: "🎮",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.app}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
