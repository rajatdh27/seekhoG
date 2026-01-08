"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ArrayComplexity() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const complexityData = [
    {
      operation: "Access",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "Direct index calculation: base + (index × size)",
      example: "arr[5] - Calculate address and read",
      color: "green",
    },
    {
      operation: "Search (Unsorted)",
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Must check each element sequentially",
      example: "Linear scan from start to end",
      color: "yellow",
    },
    {
      operation: "Search (Sorted)",
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)",
      space: "O(1)",
      description: "Binary search - divide and conquer",
      example: "Eliminate half the elements each step",
      color: "blue",
    },
    {
      operation: "Insert at End",
      best: "O(1)",
      average: "O(1)",
      worst: "O(n)",
      space: "O(1)",
      description: "O(1) if space available, O(n) if resize needed",
      example: "Dynamic arrays may need to reallocate",
      color: "green",
    },
    {
      operation: "Insert at Beginning",
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Must shift all existing elements right",
      example: "Shift n elements → n operations",
      color: "red",
    },
    {
      operation: "Insert at Middle",
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Must shift half the elements on average",
      example: "Shift n/2 elements on average",
      color: "yellow",
    },
    {
      operation: "Delete at End",
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
      space: "O(1)",
      description: "Simply reduce size counter",
      example: "No shifting needed",
      color: "green",
    },
    {
      operation: "Delete at Beginning",
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Must shift all remaining elements left",
      example: "Shift n-1 elements → O(n)",
      color: "red",
    },
    {
      operation: "Delete at Middle",
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      description: "Must shift elements after deletion point",
      example: "Shift n/2 elements on average",
      color: "yellow",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
      red: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    };
    return colors[color];
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Time & Space Complexity
      </motion.h2>

      {/* Complexity Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="overflow-x-auto mb-8"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="border border-blue-500 px-4 py-3 text-left font-semibold">
                Operation
              </th>
              <th className="border border-blue-500 px-4 py-3 text-center font-semibold">
                Best Case
              </th>
              <th className="border border-blue-500 px-4 py-3 text-center font-semibold">
                Average Case
              </th>
              <th className="border border-blue-500 px-4 py-3 text-center font-semibold">
                Worst Case
              </th>
              <th className="border border-blue-500 px-4 py-3 text-center font-semibold">
                Space
              </th>
            </tr>
          </thead>
          <tbody>
            {complexityData.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`transition-colors ${
                  hoveredRow === idx
                    ? "bg-blue-50 dark:bg-blue-900/20"
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
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Detail View */}
      {hoveredRow !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8"
        >
          <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">
            {complexityData[hoveredRow].operation}
          </h4>
          <p className="text-slate-700 dark:text-slate-300 mb-2">
            <strong>Why:</strong> {complexityData[hoveredRow].description}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Example:</strong> {complexityData[hoveredRow].example}
          </p>
        </motion.div>
      )}

      {/* Complexity Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-4 gap-4 mb-8"
      >
        <ComplexityLegend
          complexity="O(1)"
          name="Constant"
          description="Same time regardless of input size"
          color="green"
          icon="⚡"
        />
        <ComplexityLegend
          complexity="O(log n)"
          name="Logarithmic"
          description="Time grows slowly with input"
          color="blue"
          icon="📊"
        />
        <ComplexityLegend
          complexity="O(n)"
          name="Linear"
          description="Time proportional to input size"
          color="yellow"
          icon="📈"
        />
        <ComplexityLegend
          complexity="O(n²)"
          name="Quadratic"
          description="Time grows with square of input"
          color="red"
          icon="🔥"
        />
      </motion.div>

      {/* Visual Complexity Growth */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Complexity Growth Visualization
        </h3>
        <div className="space-y-4">
          <ComplexityBar label="O(1)" value={5} color="bg-green-500" />
          <ComplexityBar label="O(log n)" value={15} color="bg-blue-500" />
          <ComplexityBar label="O(n)" value={40} color="bg-yellow-500" />
          <ComplexityBar label="O(n log n)" value={65} color="bg-orange-500" />
          <ComplexityBar label="O(n²)" value={90} color="bg-red-500" />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
          For n = 100 elements. Bar length represents relative time taken.
        </p>
      </motion.div>

      {/* Space Complexity Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200 flex items-center gap-2">
          <span>💾</span> Space Complexity Notes
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Array itself:</strong> O(n) space where n is the number of elements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Operations:</strong> Most operations use O(1) auxiliary space
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Sorting:</strong> Depends on algorithm (QuickSort O(log n), MergeSort O(n))
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Copying:</strong> Creating a copy requires O(n) additional space
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

function ComplexityLegend({ complexity, name, description, color, icon }) {
  const colors = {
    green: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    yellow: "from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 border-yellow-200 dark:border-yellow-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-4`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-mono font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">
        {complexity}
      </div>
      <div className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-1">
        {name}
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-400">{description}</div>
    </motion.div>
  );
}

function ComplexityBar({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-sm font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-500">{value}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full ${color} flex items-center justify-end pr-2`}
        >
          <span className="text-xs font-bold text-white">{value > 10 && `${value}%`}</span>
        </motion.div>
      </div>
    </div>
  );
}
