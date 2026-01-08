"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LinkedListComplexity() {
  const [selectedType, setSelectedType] = useState("singly");

  const complexityData = {
    singly: {
      name: "Singly Linked List",
      operations: [
        { operation: "Access by Index", time: "O(n)", space: "O(1)", explanation: "Must traverse from head to reach index i" },
        { operation: "Search by Value", time: "O(n)", space: "O(1)", explanation: "Must check each node until value found" },
        { operation: "Insert at Head", time: "O(1)", space: "O(1)", explanation: "Just update head pointer" },
        { operation: "Insert at Tail", time: "O(n)", space: "O(1)", explanation: "Must traverse to end (O(1) with tail pointer)" },
        { operation: "Insert at Position", time: "O(n)", space: "O(1)", explanation: "Traverse to position i-1, then insert" },
        { operation: "Delete at Head", time: "O(1)", space: "O(1)", explanation: "Just update head pointer" },
        { operation: "Delete at Tail", time: "O(n)", space: "O(1)", explanation: "Must traverse to second-to-last node" },
        { operation: "Delete by Value", time: "O(n)", space: "O(1)", explanation: "Search O(n) + Delete O(1)" },
        { operation: "Reverse", time: "O(n)", space: "O(1)", explanation: "Iterate through list once, reversing pointers" },
        { operation: "Find Middle", time: "O(n)", space: "O(1)", explanation: "Floyd's algorithm: slow and fast pointers" },
        { operation: "Detect Cycle", time: "O(n)", space: "O(1)", explanation: "Floyd's cycle detection algorithm" },
        { operation: "Get Length", time: "O(n)", space: "O(1)", explanation: "Traverse entire list counting nodes" },
      ],
    },
    doubly: {
      name: "Doubly Linked List",
      operations: [
        { operation: "Access by Index", time: "O(n)", space: "O(1)", explanation: "Can traverse from nearest end (head/tail)" },
        { operation: "Search by Value", time: "O(n)", space: "O(1)", explanation: "Must check each node" },
        { operation: "Insert at Head", time: "O(1)", space: "O(1)", explanation: "Update head and head.prev" },
        { operation: "Insert at Tail", time: "O(1)", space: "O(1)", explanation: "Update tail and tail.next (with tail pointer)" },
        { operation: "Insert at Position", time: "O(n)", space: "O(1)", explanation: "Traverse to position, update 4 pointers" },
        { operation: "Delete at Head", time: "O(1)", space: "O(1)", explanation: "Update head and head.prev" },
        { operation: "Delete at Tail", time: "O(1)", space: "O(1)", explanation: "Update tail and tail.next (with tail pointer)" },
        { operation: "Delete Node (given ref)", time: "O(1)", space: "O(1)", explanation: "Direct access via prev and next pointers" },
        { operation: "Delete by Value", time: "O(n)", space: "O(1)", explanation: "Search O(n) + Delete O(1)" },
        { operation: "Reverse", time: "O(n)", space: "O(1)", explanation: "Swap prev and next for each node" },
        { operation: "Traverse Backward", time: "O(n)", space: "O(1)", explanation: "Start from tail, follow prev pointers" },
        { operation: "Get Length", time: "O(n)", space: "O(1)", explanation: "Traverse entire list (or maintain size variable for O(1))" },
      ],
    },
    circular: {
      name: "Circular Linked List",
      operations: [
        { operation: "Access by Index", time: "O(n)", space: "O(1)", explanation: "Traverse from head, stop after n iterations" },
        { operation: "Search by Value", time: "O(n)", space: "O(1)", explanation: "Must check all nodes (careful with infinite loop)" },
        { operation: "Insert at Head", time: "O(n)", space: "O(1)", explanation: "Must update last node's pointer (O(1) with tail pointer)" },
        { operation: "Insert at Tail", time: "O(n)", space: "O(1)", explanation: "Traverse to last node, update its next" },
        { operation: "Delete at Head", time: "O(n)", space: "O(1)", explanation: "Must update last node's pointer" },
        { operation: "Delete Node", time: "O(n)", space: "O(1)", explanation: "Find previous node, update pointers" },
        { operation: "Reverse", time: "O(n)", space: "O(1)", explanation: "Reverse pointers, ensure circularity maintained" },
        { operation: "Check if Circular", time: "O(1)", space: "O(1)", explanation: "last.next == head" },
        { operation: "Split into Two", time: "O(n)", space: "O(1)", explanation: "Find middle, create two circular lists" },
      ],
    },
  };

  const currentData = complexityData[selectedType];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Time & Space Complexity
      </motion.h2>

      <div className="space-y-8">
        {/* Type Selector */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedType("singly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedType === "singly"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            Singly Linked List
          </button>
          <button
            onClick={() => setSelectedType("doubly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedType === "doubly"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            Doubly Linked List
          </button>
          <button
            onClick={() => setSelectedType("circular")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedType === "circular"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            }`}
          >
            Circular Linked List
          </button>
        </div>

        {/* Complexity Table */}
        <motion.div
          key={selectedType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-x-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">{currentData.name}</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <th className="border border-green-500 px-4 py-3 text-left font-semibold">Operation</th>
                <th className="border border-green-500 px-4 py-3 text-center font-semibold">Time Complexity</th>
                <th className="border border-green-500 px-4 py-3 text-center font-semibold">Space Complexity</th>
                <th className="border border-green-500 px-4 py-3 text-left font-semibold">Explanation</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentData.operations.map((op, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={idx % 2 === 0 ? "bg-slate-50 dark:bg-slate-700" : "bg-white dark:bg-slate-800"}
                >
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                    {op.operation}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                    <code className={`font-mono font-bold px-2 py-1 rounded ${
                      op.time === "O(1)" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" :
                      op.time === "O(n)" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" :
                      "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    }`}>
                      {op.time}
                    </code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
                    <code className="font-mono font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                      {op.space}
                    </code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-600 dark:text-slate-400">
                    {op.explanation}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Comparison with Arrays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200">
            Linked List vs Array Complexity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="border border-indigo-500 px-4 py-2 text-left text-sm">Operation</th>
                  <th className="border border-indigo-500 px-4 py-2 text-center text-sm">Array</th>
                  <th className="border border-indigo-500 px-4 py-2 text-center text-sm">Singly Linked List</th>
                  <th className="border border-indigo-500 px-4 py-2 text-center text-sm">Doubly Linked List</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-white dark:bg-slate-800">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Access by Index</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-red-600 dark:text-red-400">O(n)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-red-600 dark:text-red-400">O(n)</span>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Insert at Beginning</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-red-600 dark:text-red-400">O(n)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-800">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Insert at End</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-yellow-600 dark:text-yellow-400">O(n) / O(1)*</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Delete at Beginning</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-red-600 dark:text-red-400">O(n)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">O(1)</span>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-800">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Search</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-yellow-600 dark:text-yellow-400">O(n) / O(log n)**</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-yellow-600 dark:text-yellow-400">O(n)</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-yellow-600 dark:text-yellow-400">O(n)</span>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Memory per Element</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">Data only</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-yellow-600 dark:text-yellow-400">Data + 1 ptr</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">
                    <span className="text-red-600 dark:text-red-400">Data + 2 ptrs</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
              <p>* O(1) with tail pointer maintained</p>
              <p>** Binary search O(log n) only if array is sorted</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>💡</span> Optimization Tips
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Maintain a <strong>tail pointer</strong> for O(1) insertion at end</li>
              <li>• Maintain a <strong>size variable</strong> for O(1) length queries</li>
              <li>• Use <strong>dummy head node</strong> to simplify edge cases</li>
              <li>• Use <strong>two pointers</strong> technique for many algorithms</li>
              <li>• Consider <strong>doubly linked list</strong> if backward traversal needed</li>
              <li>• Use <strong>fast & slow pointers</strong> for cycle detection</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <span>⚠️</span> Common Pitfalls
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• <strong>Off-by-one errors</strong> when traversing</li>
              <li>• <strong>Null pointer dereference</strong> - always check null</li>
              <li>• <strong>Memory leaks</strong> in C/C++ - remember to free/delete</li>
              <li>• <strong>Losing head reference</strong> when modifying list</li>
              <li>• <strong>Infinite loops</strong> in circular lists</li>
              <li>• <strong>Not updating size</strong> after insertions/deletions</li>
            </ul>
          </motion.div>
        </div>

        {/* Space Complexity Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200">
            Space Complexity Analysis
          </h3>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
              <div>
                <strong>Singly Linked List:</strong> Each node requires memory for data + 1 pointer (typically 4-8 bytes on 32/64-bit systems)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
              <div>
                <strong>Doubly Linked List:</strong> Each node requires memory for data + 2 pointers (prev and next)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
              <div>
                <strong>Overall Space:</strong> O(n) where n is the number of elements in the list
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
              <div>
                <strong>Overhead vs Array:</strong> Linked list has 25-100% more memory overhead due to pointers
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
              <div>
                <strong>Auxiliary Space:</strong> Most operations use O(1) extra space (except recursive operations which use O(n) call stack)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
