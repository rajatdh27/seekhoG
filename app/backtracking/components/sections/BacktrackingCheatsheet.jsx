"use client";
import { motion } from "framer-motion";

export default function BacktrackingCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        📚 Backtracking Cheatsheet
      </h2>

      {/* Quick Reference */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
            <h4 className="text-xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-4">
              Classic Problems
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">N-Queens</span>
                <span className="font-mono text-red-600 dark:text-red-400">O(N!)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Sudoku Solver</span>
                <span className="font-mono text-red-600 dark:text-red-400">O(9^(n²))</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Subsets</span>
                <span className="font-mono text-orange-600 dark:text-orange-400">O(n × 2ⁿ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Permutations</span>
                <span className="font-mono text-red-600 dark:text-red-400">O(n × n!)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Combination Sum</span>
                <span className="font-mono text-orange-600 dark:text-orange-400">O(2ⁿ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Word Search</span>
                <span className="font-mono text-orange-600 dark:text-orange-400">O(m×n × 4ᴸ)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Core Template
            </h4>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-slate-100">
{`function backtrack(state, choices) {
    // Base case
    if (isComplete(state)) {
        addSolution(state);
        return;
    }

    // Try each choice
    for (choice in choices) {
        if (isValid(state, choice)) {
            makeChoice(state);
            backtrack(newState);
            undoChoice(state);
        }
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Categories */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Problem Categories
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              category: "Decision Problems",
              icon: "🎲",
              problems: ["N-Queens", "Sudoku", "Graph Coloring", "Crossword"],
              pattern: "Try each option, validate constraints",
            },
            {
              category: "Combinatorial",
              icon: "🔢",
              problems: ["Subsets", "Permutations", "Combinations", "Partitions"],
              pattern: "Include/exclude or arrange elements",
            },
            {
              category: "Path Finding",
              icon: "🗺️",
              problems: ["Maze Solver", "Word Search", "Rat in Maze", "Knight's Tour"],
              pattern: "Explore paths, backtrack on dead ends",
            },
            {
              category: "Optimization",
              icon: "⚡",
              problems: ["0/1 Knapsack", "TSP", "Job Assignment", "String Matching"],
              pattern: "Find best solution with pruning",
            },
            {
              category: "Generation",
              icon: "🌟",
              problems: ["Parentheses", "IP Addresses", "Palindrome Partition", "Restore"],
              pattern: "Generate all valid configurations",
            },
            {
              category: "Constraint",
              icon: "✅",
              problems: ["Sudoku", "Map Coloring", "Scheduling", "Latin Square"],
              pattern: "Satisfy all constraints",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-400">
                  {item.category}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                {item.pattern}
              </p>
              <div className="space-y-1">
                {item.problems.map((problem, pidx) => (
                  <div key={pidx} className="text-xs text-slate-700 dark:text-slate-300">
                    • {problem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Complexity Guide */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⏱️ Time Complexity Quick Guide
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-fuchsia-50 dark:bg-fuchsia-900/20">
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Problem Type
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Time Complexity
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Space Complexity
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Explanation
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Subsets
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-orange-600 dark:text-orange-400">O(n × 2ⁿ)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(n)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  2ⁿ subsets, each takes O(n) to copy
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Permutations
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-red-600 dark:text-red-400">O(n × n!)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(n)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  n! permutations, each takes O(n) to copy
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  N-Queens
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-red-600 dark:text-red-400">O(N!)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(N)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  N choices for row 1, N-1 for row 2, etc.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Sudoku (9×9)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-red-600 dark:text-red-400">O(9^(n²))</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(n²)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Up to 9 choices for each empty cell
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Word Search (m×n grid)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-orange-600 dark:text-orange-400">O(m×n × 4ᴸ)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(L)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Start from each cell, 4 directions, L is word length
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Combination Sum
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code className="text-orange-600 dark:text-orange-400">O(2ⁿ)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  <code>O(target/min)</code>
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Each element: include or exclude
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚠️ Common Mistakes to Avoid
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              mistake: "Forgetting to Backtrack",
              wrong: "current.push(choice); backtrack(); // Missing pop!",
              right: "current.push(choice); backtrack(); current.pop();",
              why: "State persists across recursive calls without undo",
            },
            {
              mistake: "Not Copying Arrays",
              wrong: "result.push(current); // Reference issue!",
              right: "result.push([...current]); // Make a copy",
              why: "All solutions point to same modified array",
            },
            {
              mistake: "Missing Base Case",
              wrong: "function backtrack() { for (...) backtrack(); }",
              right: "if (isComplete()) return; // Add base case",
              why: "Infinite recursion without termination",
            },
            {
              mistake: "Wrong Validation Order",
              wrong: "makeChoice(); if (!isValid()) undo();",
              right: "if (isValid()) { makeChoice(); backtrack(); }",
              why: "Wastes time on invalid choices",
            },
            {
              mistake: "Modifying Input",
              wrong: "nums.sort(); // Modifies original array",
              right: "const sorted = [...nums].sort();",
              why: "Side effects can cause unexpected behavior",
            },
            {
              mistake: "Incorrect Pruning",
              wrong: "if (sum > target) continue; // Wrong level",
              right: "if (sum + nums[i] > target) continue;",
              why: "Must check before recursion, not after",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">{item.mistake}</h4>
              <div className="mb-2">
                <div className="text-xs text-red-600 dark:text-red-400 mb-1">❌ Wrong:</div>
                <code className="text-xs bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded block">
                  {item.wrong}
                </code>
              </div>
              <div className="mb-2">
                <div className="text-xs text-green-600 dark:text-green-400 mb-1">✅ Right:</div>
                <code className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded block">
                  {item.right}
                </code>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">💡 {item.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backtracking vs Other Approaches */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Backtracking vs Other Approaches
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-fuchsia-50 dark:bg-fuchsia-900/20">
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Aspect
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Backtracking
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Dynamic Programming
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Greedy
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Approach
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Try all, backtrack on failure
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Build solution from subproblems
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Make locally optimal choice
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  When to Use
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Find ALL solutions
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Overlapping subproblems
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Greedy choice property holds
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Complexity
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Usually exponential
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Usually polynomial
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Usually O(n log n)
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Optimal Solution
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Guaranteed (explores all)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Guaranteed
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Not always guaranteed
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Example
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  N-Queens, Sudoku
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Knapsack, Longest Path
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Activity Selection
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-fuchsia-300 dark:border-fuchsia-700">
        <h3 className="text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-6">
          ✨ Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Always Backtrack:</strong> Undo choices to explore other branches
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Validate Early:</strong> Check constraints before recursing
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Copy Arrays:</strong> Use spread operator when storing solutions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Base Case First:</strong> Always handle termination condition
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Prune Branches:</strong> Skip impossible paths early
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Track State:</strong> Use visited/used arrays when needed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Consider Space:</strong> Recursion depth = stack space
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Test Small Cases:</strong> Verify logic with small inputs first
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
