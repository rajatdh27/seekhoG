"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StackComplexity() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const complexityData = [
    {
      operation: "Push",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)*",
      space: "O(1)",
      description: "Add element to top of stack",
      example: "Simply increment pointer and add element",
      color: "green",
      note: "*O(n) if dynamic array needs resizing (amortized O(1))",
    },
    {
      operation: "Pop",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "Remove and return top element",
      example: "Decrement pointer and return element",
      color: "green",
    },
    {
      operation: "Peek/Top",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "View top element without removing",
      example: "Return element at top pointer",
      color: "green",
    },
    {
      operation: "isEmpty",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "Check if stack is empty",
      example: "Compare size to 0 or check pointer",
      color: "green",
    },
    {
      operation: "Size",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "Get number of elements",
      example: "Return size counter variable",
      color: "green",
    },
    {
      operation: "Search",
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Find element in stack",
      example: "Must traverse entire stack sequentially",
      color: "yellow",
      note: "Not a typical stack operation - requires O(n) traversal",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
      red: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
    };
    return colors[color];
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Time & Space Complexity
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-6">
        Stack operations are extremely efficient. All core operations run in constant time O(1).
      </p>

      {/* Complexity Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="overflow-x-auto mb-8"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <th className="border border-purple-500 px-4 py-3 text-left font-semibold">
                Operation
              </th>
              <th className="border border-purple-500 px-4 py-3 text-center font-semibold">
                Best Case
              </th>
              <th className="border border-purple-500 px-4 py-3 text-center font-semibold">
                Average Case
              </th>
              <th className="border border-purple-500 px-4 py-3 text-center font-semibold">
                Worst Case
              </th>
              <th className="border border-purple-500 px-4 py-3 text-center font-semibold">
                Space
              </th>
            </tr>
          </thead>
          <tbody>
            {complexityData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`transition-colors ${
                  hoveredRow === idx
                    ? "bg-purple-50 dark:bg-purple-900/20"
                    : idx % 2 === 0
                    ? "bg-slate-50 dark:bg-slate-700/50"
                    : "bg-white dark:bg-slate-800"
                }`}
              >
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                  {row.operation}
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-full font-mono text-sm font-bold ${getColorClasses(row.color)}`}>
                    {row.best}
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-full font-mono text-sm font-bold ${getColorClasses(row.color)}`}>
                    {row.average}
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-full font-mono text-sm font-bold ${getColorClasses(row.color)}`}>
                    {row.worst}
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                  <span className="px-3 py-1 rounded-full font-mono text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                    {row.space}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Detail View */}
      {hoveredRow !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-8"
        >
          <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">
            {complexityData[hoveredRow].operation}
          </h4>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            <strong>Description:</strong> {complexityData[hoveredRow].description}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            <strong>How it works:</strong> {complexityData[hoveredRow].example}
          </p>
          {complexityData[hoveredRow].note && (
            <p className="text-sm text-purple-700 dark:text-purple-300 italic">
              <strong>Note:</strong> {complexityData[hoveredRow].note}
            </p>
          )}
        </motion.div>
      )}

      {/* Implementation Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Array vs Linked List Implementation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Array Implementation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-200">
              Array-Based Stack
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Push:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)*</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Pop:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Peek:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Space:</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">O(n)</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                <strong>Pros:</strong>
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Cache-friendly (contiguous memory)</li>
                <li>• Simple implementation</li>
                <li>• No pointer overhead</li>
              </ul>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 mb-2">
                <strong>Cons:</strong>
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• May need resizing (O(n) occasionally)</li>
                <li>• Wasted space if preallocated</li>
              </ul>
            </div>
          </div>

          {/* Linked List Implementation */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-purple-900 dark:text-purple-200">
              Linked List Stack
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Push:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Pop:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Peek:</span>
                <span className="font-mono font-bold text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Space:</span>
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400">O(n)</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                <strong>Pros:</strong>
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• No resizing needed</li>
                <li>• Truly dynamic size</li>
                <li>• Always O(1) push</li>
              </ul>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 mb-2">
                <strong>Cons:</strong>
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Extra space for pointers</li>
                <li>• Not cache-friendly</li>
                <li>• Memory allocation overhead</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Complexity Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Why Stack Operations are O(1)
        </h3>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Push Operation:</h4>
            <p className="text-sm">
              Only modifies the top pointer and adds one element. No traversal or shifting needed.
              In array implementation, simply increment index and assign value. In linked list, create
              new node and update head pointer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Pop Operation:</h4>
            <p className="text-sm">
              Only accesses and removes the top element. No need to move other elements. In array,
              decrement index. In linked list, move head pointer to next node.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Peek Operation:</h4>
            <p className="text-sm">
              Direct access to top element via pointer or index. No traversal required since we always
              maintain a reference to the top.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Space Complexity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <span>💾</span> Space Complexity Analysis
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold mt-1">•</span>
            <span>
              <strong>Stack itself:</strong> O(n) space where n is the number of elements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold mt-1">•</span>
            <span>
              <strong>Array implementation:</strong> May allocate extra space for future growth (capacity &gt; size)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold mt-1">•</span>
            <span>
              <strong>Linked list implementation:</strong> Extra O(n) space for node pointers
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold mt-1">•</span>
            <span>
              <strong>Auxiliary space:</strong> All operations use O(1) extra space
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 dark:text-amber-400 font-bold mt-1">•</span>
            <span>
              <strong>Recursion:</strong> Recursive calls use O(n) call stack space in worst case
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Performance Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">
          Performance Optimization Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Do:</h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Preallocate array capacity if size is known</li>
              <li>• Use array-based for better cache performance</li>
              <li>• Keep operations to O(1) - push, pop, peek only</li>
              <li>• Avoid searching through stack (use hash map)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Don't:</h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Access elements in middle of stack</li>
              <li>• Iterate through entire stack frequently</li>
              <li>• Use stack if you need random access</li>
              <li>• Forget to check isEmpty before pop/peek</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
