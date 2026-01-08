"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ArrayMemoryLayout() {
  const [selectedOperation, setSelectedOperation] = useState("access");

  const memoryBlocks = [
    { address: "0x1000", value: 10, index: 0 },
    { address: "0x1004", value: 20, index: 1 },
    { address: "0x1008", value: 30, index: 2 },
    { address: "0x100C", value: 40, index: 3 },
    { address: "0x1010", value: 50, index: 4 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Memory Layout & How Arrays Work
      </motion.h2>

      {/* Memory Diagram */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Contiguous Memory Allocation
          </h3>

          {/* Memory Visualization */}
          <div className="space-y-2">
            {memoryBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-4"
              >
                {/* Memory Address */}
                <div className="w-24 font-mono text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {block.address}
                </div>

                {/* Memory Block */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 flex items-center gap-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      arr[{block.index}]
                    </span>
                    <div className="w-16 h-16 bg-blue-600 text-white font-mono text-xl font-bold flex items-center justify-center rounded">
                      {block.value}
                    </div>
                  </div>

                  {/* Binary Representation */}
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                      Binary (32-bit int)
                    </div>
                    <div className="font-mono text-xs text-slate-700 dark:text-slate-300">
                      {block.value.toString(2).padStart(32, "0").match(/.{1,8}/g).join(" ")}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow to next block */}
                {idx < memoryBlocks.length - 1 && (
                  <div className="text-slate-400 dark:text-slate-600 text-2xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
          >
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Notice:</strong> Each integer (4 bytes) is stored in consecutive
              memory addresses. The address increments by 4 (0x4 in hex) for each element.
            </p>
          </motion.div>
        </motion.div>

        {/* Index Calculation Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            How Index Access Works (Low-Level)
          </h3>

          <div className="space-y-4">
            <div className="font-mono text-lg bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
              <div className="text-slate-600 dark:text-slate-400 text-sm mb-2">Formula:</div>
              <div className="text-blue-600 dark:text-blue-400 font-bold">
                address = base_address + (index × size_of_element)
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Example: Access arr[3]
                </div>
                <div className="font-mono text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <div>base_address = 0x1000</div>
                  <div>index = 3</div>
                  <div>size = 4 bytes (int)</div>
                  <div className="border-t border-slate-300 dark:border-slate-600 pt-1 mt-2">
                    address = 0x1000 + (3 × 4)
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold">
                    = 0x100C ✓
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Why O(1) Time?
                </div>
                <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• Simple arithmetic: one multiplication, one addition</li>
                  <li>• CPU performs this in a single instruction</li>
                  <li>• No loops or traversal needed</li>
                  <li>• Direct memory access via pointer</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Operation Visualizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Common Array Operations (Memory Perspective)
          </h3>

          {/* Operation Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: "access", label: "🎯 Access", color: "blue" },
              { id: "insert", label: "➕ Insert", color: "green" },
              { id: "delete", label: "🗑️ Delete", color: "red" },
              { id: "search", label: "🔍 Search", color: "purple" },
            ].map((op) => (
              <button
                key={op.id}
                onClick={() => setSelectedOperation(op.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedOperation === op.id
                    ? `bg-${op.color}-600 text-white shadow-lg`
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>

          {/* Operation Details */}
          <OperationDetails operation={selectedOperation} />
        </motion.div>

        {/* Cache Locality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
            <span>⚡</span> Cache Locality Advantage
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <p>
              Because array elements are stored contiguously, they benefit from{" "}
              <strong>spatial locality</strong>:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                <span>
                  When you access <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">arr[0]</code>,
                  the CPU cache loads nearby elements too
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                <span>Sequential access is extremely fast (cache hits)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                <span>
                  Much faster than linked lists for iteration (10-100x speedup)
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function OperationDetails({ operation }) {
  const details = {
    access: {
      title: "Random Access - O(1)",
      steps: [
        "Calculate memory address using formula",
        "CPU directly jumps to that address",
        "Read value from memory",
        "Return value to program",
      ],
      complexity: "Time: O(1), Space: O(1)",
      visual: "Direct pointer arithmetic - single operation",
    },
    insert: {
      title: "Insert at Index i - O(n)",
      steps: [
        "Shift all elements from i to end one position right",
        "This requires n-i copy operations",
        "Place new element at index i",
        "Update array length (if dynamic)",
      ],
      complexity: "Time: O(n), Space: O(1)",
      visual: "Worst case: Insert at beginning requires shifting all n elements",
    },
    delete: {
      title: "Delete at Index i - O(n)",
      steps: [
        "Remove element at index i",
        "Shift all elements from i+1 to end one position left",
        "This requires n-i-1 copy operations",
        "Update array length",
      ],
      complexity: "Time: O(n), Space: O(1)",
      visual: "Worst case: Delete at beginning requires shifting all remaining elements",
    },
    search: {
      title: "Linear Search - O(n)",
      steps: [
        "Start from index 0",
        "Compare each element with target",
        "If found, return index",
        "If not found after checking all, return -1",
      ],
      complexity: "Time: O(n), Space: O(1)",
      visual: "Must potentially check every element (n comparisons in worst case)",
    },
  };

  const detail = details[operation];

  return (
    <motion.div
      key={operation}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl p-6"
    >
      <h4 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">
        {detail.title}
      </h4>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Steps:
          </div>
          <ol className="space-y-2">
            {detail.steps.map((step, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
          <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
            Complexity:
          </div>
          <div className="font-mono text-sm text-blue-600 dark:text-blue-400">
            {detail.complexity}
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-lg">
          <div className="text-xs font-semibold text-amber-900 dark:text-amber-200 mb-1">
            💡 Key Insight:
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-300">{detail.visual}</div>
        </div>
      </div>
    </motion.div>
  );
}
