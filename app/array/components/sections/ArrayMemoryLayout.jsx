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
                  Sequential iteration benefits massively from cache prefetching
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 2D Arrays Memory Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
            <span>📐</span> 2D Arrays & Memory Layout
          </h3>

          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              2D arrays are stored in memory as a <strong>continuous block</strong>, but there are two common layouts:
            </p>

            {/* Row-Major Order */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-sm text-blue-900 dark:text-blue-200 mb-2">
                📊 Row-Major Order (C, C++, Java, JavaScript, Python)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Rows are stored contiguously. Elements in the same row are adjacent in memory.
              </p>
              <div className="font-mono text-xs space-y-1 text-slate-600 dark:text-slate-400">
                <div className="mb-2">Array: <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">int arr[2][3] = [[1,2,3], [4,5,6]]</code></div>
                <div>Memory: <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">[1][2][3][4][5][6]</code></div>
                <div className="text-green-600 dark:text-green-400 mt-2">
                  ✓ Iterate rows faster: <code>for i, for j → arr[i][j]</code>
                </div>
                <div className="text-xs mt-2">
                  Formula: <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">address = base + (i × cols + j) × size</code>
                </div>
              </div>
            </div>

            {/* Column-Major Order */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-sm text-purple-900 dark:text-purple-200 mb-2">
                📊 Column-Major Order (Fortran, MATLAB, R)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Columns are stored contiguously. Elements in the same column are adjacent in memory.
              </p>
              <div className="font-mono text-xs space-y-1 text-slate-600 dark:text-slate-400">
                <div className="mb-2">Array: <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">int arr[2][3] = [[1,2,3], [4,5,6]]</code></div>
                <div>Memory: <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">[1][4][2][5][3][6]</code></div>
                <div className="text-green-600 dark:text-green-400 mt-2">
                  ✓ Iterate columns faster: <code>for j, for i → arr[i][j]</code>
                </div>
                <div className="text-xs mt-2">
                  Formula: <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">address = base + (j × rows + i) × size</code>
                </div>
              </div>
            </div>

            {/* Performance Impact */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <h4 className="font-bold text-sm text-amber-900 dark:text-amber-200 mb-2">
                ⚡ Performance Impact
              </h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>• <strong>Row-major:</strong> Access arr[i][j] by iterating i then j (cache-friendly)</li>
                <li>• <strong>Column-major:</strong> Access arr[i][j] by iterating j then i (cache-friendly)</li>
                <li>• <strong>Wrong order:</strong> Can be 10-100x slower due to cache misses!</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Array Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-violet-900 dark:text-violet-200 flex items-center gap-2">
            <span>📈</span> Dynamic Array Growth & Amortization
          </h3>

          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Dynamic arrays (vector, ArrayList) automatically resize when capacity is exceeded:
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-sm mb-2 text-slate-900 dark:text-slate-100">
                How Resizing Works:
              </h4>
              <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span>When array is full, allocate a new array (typically 2x the size)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span>Copy all existing elements to the new array - O(n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span>Free the old array memory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span>Insert the new element</span>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-sm text-green-900 dark:text-green-200 mb-2">
                  Amortized O(1) Append
                </h4>
                <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <div>• Most appends: O(1) - just add to end</div>
                  <div>• Occasional resize: O(n) - copy all</div>
                  <div>• Average over n ops: O(1) amortized</div>
                  <div className="mt-2 font-mono text-xs">
                    Cost = 1+1+...+n+1+1+...+2n = O(n) total
                    <br />
                    → O(n)/n = O(1) per operation
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-sm text-blue-900 dark:text-blue-200 mb-2">
                  Growth Factors
                </h4>
                <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <div>• <strong>2x growth:</strong> C++, Java (wastes 50% memory max)</div>
                  <div>• <strong>1.5x growth:</strong> Python (more memory efficient)</div>
                  <div>• <strong>φ growth:</strong> Some implementations (golden ratio)</div>
                  <div className="mt-2 text-amber-600 dark:text-amber-400">
                    Trade-off: Larger factor = fewer reallocations but more wasted space
                  </div>
                </div>
              </div>
            </div>
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
