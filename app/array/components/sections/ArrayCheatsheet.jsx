"use client";

import { motion } from "framer-motion";

export default function ArrayCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Quick Reference Cheatsheet
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pattern Recognition */}
        <CheatCard
          title="🎯 Pattern Recognition"
          items={[
            "Sorted array → Binary Search, Two Pointers",
            "Find pair → HashMap, Two Pointers",
            "Subarray → Sliding Window, Prefix Sum",
            "Next greater/smaller → Monotonic Stack",
            "Intervals → Sort + Merge",
            "Max/min subarray → Kadane's",
          ]}
          color="blue"
        />

        {/* Time Complexities */}
        <CheatCard
          title="⏱️ Common Complexities"
          items={[
            "Access: O(1)",
            "Search (unsorted): O(n)",
            "Search (sorted): O(log n)",
            "Insert/Delete: O(n)",
            "Sort: O(n log n)",
            "Two nested loops: O(n²)",
          ]}
          color="green"
        />

        {/* Edge Cases */}
        <CheatCard
          title="⚠️ Edge Cases to Check"
          items={[
            "Empty array []",
            "Single element [x]",
            "All same elements [1,1,1]",
            "Negative numbers [-1,-2]",
            "Integer overflow",
            "Duplicate values",
          ]}
          color="red"
        />

        {/* Optimization Tricks */}
        <CheatCard
          title="⚡ Optimization Tricks"
          items={[
            "Sort first if order doesn't matter",
            "Use HashMap for O(1) lookup",
            "Two pointers for O(n) vs O(n²)",
            "Prefix sum for range queries",
            "In-place to save space",
            "Early termination in loops",
          ]}
          color="purple"
        />

        {/* Common Mistakes */}
        <CheatCard
          title="🐛 Common Mistakes"
          items={[
            "Off-by-one errors (i <= n vs i < n)",
            "Modifying array while iterating",
            "Not checking for empty input",
            "Integer overflow in sum",
            "Wrong loop boundaries",
            "Forgetting to handle duplicates",
          ]}
          color="orange"
        />

        {/* Interview Tips */}
        <CheatCard
          title="💡 Interview Tips"
          items={[
            "Always ask about duplicates",
            "Clarify if sorted or not",
            "Ask about input size constraints",
            "Discuss brute force first",
            "Explain your approach before coding",
            "Test with examples",
          ]}
          color="indigo"
        />
      </div>

      {/* Code Snippets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-slate-900 dark:bg-slate-950 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-slate-100 mb-4">
          🔧 Essential Code Snippets
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeSnippet
            title="Reverse Array"
            code={`function reverse(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
}`}
          />
          <CodeSnippet
            title="Find Max/Min"
            code={`function findMaxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let x of arr) {
    max = Math.max(max, x);
    min = Math.min(min, x);
  }
  return [max, min];
}`}
          />
          <CodeSnippet
            title="Remove Duplicates"
            code={`function removeDuplicates(arr) {
  const seen = new Set();
  return arr.filter(x => {
    if (seen.has(x)) return false;
    seen.add(x);
    return true;
  });
}`}
          />
          <CodeSnippet
            title="Rotate Array"
            code={`function rotate(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
}`}
          />
        </div>
      </motion.div>

      {/* Formulas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
          📐 Essential Formulas
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <FormulaCard
            title="Sum of n numbers"
            formula="n × (n + 1) / 2"
          />
          <FormulaCard
            title="Sum of array"
            formula="arr.reduce((a,b) => a+b, 0)"
          />
          <FormulaCard
            title="Middle index"
            formula="Math.floor((left + right) / 2)"
          />
          <FormulaCard
            title="Circular index"
            formula="(i + k) % arr.length"
          />
          <FormulaCard
            title="Range sum (prefix)"
            formula="prefix[r+1] - prefix[l]"
          />
          <FormulaCard
            title="Average"
            formula="sum / arr.length"
          />
        </div>
      </motion.div>
    </div>
  );
}

function CheatCard({ title, items, color }) {
  const colors = {
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    green: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
    purple: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200 dark:border-purple-800",
    orange: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 border-orange-200 dark:border-orange-800",
    indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 border-indigo-200 dark:border-indigo-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5`}
    >
      <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
          >
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function CodeSnippet({ title, code }) {
  return (
    <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 border border-slate-700">
      <div className="text-sm font-semibold text-slate-300 mb-2">{title}</div>
      <pre className="text-xs text-slate-400 font-mono leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FormulaCard({ title, formula }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
      <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">{title}</div>
      <div className="font-mono text-sm font-bold text-amber-900 dark:text-amber-200">
        {formula}
      </div>
    </div>
  );
}
