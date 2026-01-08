"use client";
import { motion } from "framer-motion";

export default function SearchingSortingCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Algorithm Cheatsheet
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
        Quick reference for all searching and sorting algorithms - time complexity, space complexity, and when to use each one.
      </p>

      {/* Searching Algorithms */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-3"
        >
          <span className="text-4xl">🔍</span>
          Searching Algorithms
        </motion.h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/30">
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left text-slate-900 dark:text-slate-100">
                  Algorithm
                </th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Best Case
                </th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Average Case
                </th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Worst Case
                </th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Space
                </th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left text-slate-900 dark:text-slate-100">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                <td className="border border-blue-300 dark:border-blue-700 p-4">
                  <strong className="text-blue-700 dark:text-blue-300">Linear Search</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Sequential scan</p>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                    O(n)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                    O(n)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  Small or unsorted arrays
                </td>
              </tr>
              <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                <td className="border border-blue-300 dark:border-blue-700 p-4">
                  <strong className="text-blue-700 dark:text-blue-300">Binary Search</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Divide & conquer</p>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(log n)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(log n)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-blue-300 dark:border-blue-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  <strong>Sorted arrays</strong>, large datasets
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sorting Algorithms */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-6 flex items-center gap-3"
        >
          <span className="text-4xl">📊</span>
          Sorting Algorithms
        </motion.h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-100 dark:bg-orange-900/30">
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-left text-slate-900 dark:text-slate-100">
                  Algorithm
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Best Case
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Average Case
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Worst Case
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Space
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-center text-slate-900 dark:text-slate-100">
                  Stable?
                </th>
                <th className="border border-orange-300 dark:border-orange-700 p-4 text-left text-slate-900 dark:text-slate-100">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <td className="border border-orange-300 dark:border-orange-700 p-4">
                  <strong className="text-orange-700 dark:text-orange-300">Bubble Sort</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Bubble up largest</p>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                    O(n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  Learning, nearly sorted data
                </td>
              </tr>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <td className="border border-orange-300 dark:border-orange-700 p-4">
                  <strong className="text-orange-700 dark:text-orange-300">Selection Sort</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Select minimum</p>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  Minimizing swaps
                </td>
              </tr>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <td className="border border-orange-300 dark:border-orange-700 p-4">
                  <strong className="text-orange-700 dark:text-orange-300">Insertion Sort</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Insert in place</p>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                    O(n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(1)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  <strong>Nearly sorted</strong>, online sorting
                </td>
              </tr>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <td className="border border-orange-300 dark:border-orange-700 p-4">
                  <strong className="text-orange-700 dark:text-orange-300">Merge Sort</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Divide & merge</p>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(n log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(n log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(n log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                    O(n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  <strong>Guaranteed O(n log n)</strong>, stable sort
                </td>
              </tr>
              <tr className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <td className="border border-orange-300 dark:border-orange-700 p-4">
                  <strong className="text-orange-700 dark:text-orange-300">Quick Sort</strong>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Partition & conquer</p>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(n log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(n log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-semibold">
                    O(n²)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    O(log n)
                  </span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                </td>
                <td className="border border-orange-300 dark:border-orange-700 p-4 text-sm text-slate-700 dark:text-slate-300">
                  <strong>Fastest in practice</strong>, in-place
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Decision Guide */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-6 flex items-center gap-3"
        >
          <span className="text-4xl">🤔</span>
          Quick Decision Guide
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
              🔍 Searching: Which to Use?
            </h4>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-green-700 dark:text-green-300 mb-1">Sorted Array?</p>
                <p className="text-sm">→ Use <strong>Binary Search</strong> - O(log n)</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-green-700 dark:text-green-300 mb-1">Unsorted Array?</p>
                <p className="text-sm">→ Use <strong>Linear Search</strong> - O(n)</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-green-700 dark:text-green-300 mb-1">Search Many Times?</p>
                <p className="text-sm">→ Sort once, then <strong>Binary Search</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-l-4 border-orange-600">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">
              📊 Sorting: Which to Use?
            </h4>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">Best Performance?</p>
                <p className="text-sm">→ Use <strong>Quick Sort</strong> (usually fastest)</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">Guaranteed O(n log n)?</p>
                <p className="text-sm">→ Use <strong>Merge Sort</strong> (consistent)</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">Nearly Sorted?</p>
                <p className="text-sm">→ Use <strong>Insertion Sort</strong> (adaptive)</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">Learning?</p>
                <p className="text-sm">→ Start with <strong>Bubble Sort</strong> (simple)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Terms */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-cyan-900 dark:text-cyan-100 mb-6 flex items-center gap-3"
        >
          <span className="text-4xl">📖</span>
          Key Terms
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2 text-lg">
              ✓ Stable Sort
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Maintains the relative order of equal elements. If two elements are equal, their original order is preserved.
            </p>
            <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-2">
              Example: Bubble, Insertion, Merge
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-lg">
              🏠 In-Place Sort
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Uses O(1) or O(log n) extra space. Sorts the array within itself without requiring significant additional memory.
            </p>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-2">
              Example: Bubble, Selection, Insertion, Quick
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 text-lg">
              🎯 Adaptive Algorithm
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Performance improves when data is already partially sorted. Takes advantage of existing order in the input.
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
              Example: Insertion Sort, Bubble Sort (optimized)
            </p>
          </div>

          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2 text-lg">
              🔀 Divide & Conquer
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Breaks problem into smaller subproblems, solves them recursively, then combines results. Often leads to O(n log n) complexity.
            </p>
            <p className="text-xs text-pink-700 dark:text-pink-300 mt-2">
              Example: Binary Search, Merge Sort, Quick Sort
            </p>
          </div>
        </div>
      </div>

      {/* Big O Complexity Quick Reference */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3"
        >
          <span className="text-4xl">⚡</span>
          Big O Complexity Rankings
        </motion.h3>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">From fastest to slowest:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-bold text-green-900 dark:text-green-100">O(1) - Constant</p>
                <p className="text-sm text-green-800 dark:text-green-200">Best case for any algorithm - instant!</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-bold text-emerald-900 dark:text-emerald-100">O(log n) - Logarithmic</p>
                <p className="text-sm text-emerald-800 dark:text-emerald-200">Very efficient - halves problem each step (Binary Search)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-yellow-900 dark:text-yellow-100">O(n) - Linear</p>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">Proportional to input size (Linear Search)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-lime-100 dark:bg-lime-900/30 rounded-lg">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-bold text-lime-900 dark:text-lime-100">O(n log n) - Linearithmic</p>
                <p className="text-sm text-lime-800 dark:text-lime-200">Best achievable for comparison sorts (Merge, Quick)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <span className="text-2xl">🐌</span>
              <div>
                <p className="font-bold text-red-900 dark:text-red-100">O(n²) - Quadratic</p>
                <p className="text-sm text-red-800 dark:text-red-200">Avoid for large datasets (Bubble, Selection, Insertion)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
