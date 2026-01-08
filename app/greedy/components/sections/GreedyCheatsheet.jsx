"use client";
import { motion } from "framer-motion";

export default function GreedyCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        📚 Greedy Algorithms Cheatsheet
      </h2>

      {/* Quick Reference */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
            <h4 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-4">
              Classic Problems
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Activity Selection</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(n log n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Fractional Knapsack</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(n log n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Huffman Coding</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(n log n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Job Sequencing</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(n²)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Dijkstra's Algorithm</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(E log V)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Key Properties
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                  Greedy Choice Property
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  Local optimum leads to global optimum
                </div>
              </div>
              <div>
                <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                  Optimal Substructure
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  Problem has optimal subproblems
                </div>
              </div>
              <div>
                <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                  No Backtracking
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  Choices are never reconsidered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Greedy Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔑 Common Greedy Strategies
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              strategy: "Sort First",
              desc: "Sort by key criterion, then select greedily",
              when: "Activity selection, interval problems",
            },
            {
              strategy: "Max/Min Selection",
              desc: "Always pick maximum or minimum element",
              when: "Coin change, knapsack with fractions",
            },
            {
              strategy: "Earliest Deadline",
              desc: "Process items with earliest deadline first",
              when: "Job scheduling, minimize lateness",
            },
            {
              strategy: "Highest Ratio",
              desc: "Pick item with best value/cost ratio",
              when: "Fractional knapsack, gas station",
            },
            {
              strategy: "Two Pointers",
              desc: "Greedy choices from both ends",
              when: "Container with water, boats problem",
            },
            {
              strategy: "Priority Queue",
              desc: "Use heap for dynamic greedy selection",
              when: "Huffman coding, merge k lists",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <h4 className="font-bold text-violet-700 dark:text-violet-400 mb-2">
                {item.strategy}
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
              <p className="text-xs text-green-600 dark:text-green-400 italic">
                When: {item.when}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Greedy vs DP */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Greedy vs Dynamic Programming
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-violet-50 dark:bg-violet-900/20">
                <th className="border border-violet-200 dark:border-violet-800 px-4 py-3 text-left">
                  Aspect
                </th>
                <th className="border border-violet-200 dark:border-violet-800 px-4 py-3 text-left">
                  Greedy
                </th>
                <th className="border border-violet-200 dark:border-violet-800 px-4 py-3 text-left">
                  Dynamic Programming
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Approach
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Make locally optimal choice
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Explore all possibilities
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Backtracking
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  No backtracking
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Considers all subproblems
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Optimal Solution
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Not always guaranteed
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Always finds optimal
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Time Complexity
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Usually O(n log n) or O(n)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Usually O(n²) or higher
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Example
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Fractional Knapsack
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  0/1 Knapsack
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-2xl border-2 border-violet-300 dark:border-violet-700">
        <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-6">
          ✨ Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Fast & Efficient:</strong> Greedy algorithms are usually faster than DP
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Proof Required:</strong> Must prove greedy choice property for correctness
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Sorting Common:</strong> Many greedy problems start with sorting
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>No Backtrack:</strong> Once a choice is made, it's never reconsidered
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Not Always Optimal:</strong> Greedy doesn't guarantee optimal for all problems
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Test with Examples:</strong> Verify greedy works with small test cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
