"use client";
import { motion } from "framer-motion";

export default function HashingCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Hashing Cheatsheet
      </h2>

      {/* Time & Space Complexity */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time & Space Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Operation</th>
                <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-center">Average Case</th>
                <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-center">Worst Case</th>
                <th className="border border-indigo-300 dark:border-indigo-700 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Insert", avg: "O(1)", worst: "O(n)", note: "Worst case if all keys collide" },
                { op: "Delete", avg: "O(1)", worst: "O(n)", note: "Same as insert" },
                { op: "Search", avg: "O(1)", worst: "O(n)", note: "O(n) if poor hash function" },
                { op: "Space", avg: "O(n)", worst: "O(n)", note: "n = number of elements" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-indigo-50 dark:hover:bg-indigo-900/10">
                  <td className="border border-indigo-300 dark:border-indigo-700 p-3 font-bold">
                    {row.op}
                  </td>
                  <td className="border border-indigo-300 dark:border-indigo-700 p-3 text-center font-mono text-green-600 dark:text-green-400">
                    {row.avg}
                  </td>
                  <td className="border border-indigo-300 dark:border-indigo-700 p-3 text-center font-mono text-red-600 dark:text-red-400">
                    {row.worst}
                  </td>
                  <td className="border border-indigo-300 dark:border-indigo-700 p-3 text-xs">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Use Hashing */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 When to Use Hashing?
        </h3>
        <div className="space-y-4">
          {[
            {
              question: "Need O(1) lookup?",
              answer: "Use HashMap/HashSet for constant-time access",
              color: "emerald",
            },
            {
              question: "Checking if element exists?",
              answer: "Use HashSet - faster than array search",
              color: "blue",
            },
            {
              question: "Need frequency count?",
              answer: "Use HashMap with element → count mapping",
              color: "purple",
            },
            {
              question: "Finding pairs with target sum?",
              answer: "Use HashMap to store complements",
              color: "pink",
            },
            {
              question: "Removing duplicates?",
              answer: "Use HashSet to track unique elements",
              color: "orange",
            },
            {
              question: "Grouping items by property?",
              answer: "Use HashMap with property → array mapping",
              color: "teal",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 p-4 rounded-xl border-l-4 border-${item.color}-600`}
            >
              <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                {item.question}
              </div>
              <div className={`text-${item.color}-700 dark:text-${item.color}-300 text-sm`}>
                → {item.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Problem Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common Problem Types
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Two Sum Family",
              problems: ["Two Sum", "Three Sum", "Four Sum", "Subarray Sum Equals K"],
            },
            {
              type: "Anagram Problems",
              problems: ["Valid Anagram", "Group Anagrams", "Find All Anagrams"],
            },
            {
              type: "Frequency Counter",
              problems: ["Top K Frequent", "First Unique Char", "Sort Characters by Frequency"],
            },
            {
              type: "Substring Problems",
              problems: ["Longest Substring No Repeat", "Minimum Window Substring", "Permutation in String"],
            },
            {
              type: "Duplicate Detection",
              problems: ["Contains Duplicate", "Contains Duplicate II/III", "Find Duplicates"],
            },
            {
              type: "Design Problems",
              problems: ["LRU Cache", "Insert Delete GetRandom O(1)", "Design HashMap"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="font-bold text-indigo-700 dark:text-indigo-400 mb-2 text-lg">
                {item.type}
              </div>
              <ul className="space-y-1">
                {item.problems.map((problem, pIdx) => (
                  <li key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HashMap vs Array vs BST */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ HashMap vs Array vs BST
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900/30">
                <th className="border border-purple-300 dark:border-purple-700 p-3 text-left">Operation</th>
                <th className="border border-purple-300 dark:border-purple-700 p-3 text-center">HashMap</th>
                <th className="border border-purple-300 dark:border-purple-700 p-3 text-center">Sorted Array</th>
                <th className="border border-purple-300 dark:border-purple-700 p-3 text-center">BST</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Search", hashmap: "O(1)", array: "O(log n)", bst: "O(log n)" },
                { op: "Insert", hashmap: "O(1)", array: "O(n)", bst: "O(log n)" },
                { op: "Delete", hashmap: "O(1)", array: "O(n)", bst: "O(log n)" },
                { op: "Min/Max", hashmap: "O(n)", array: "O(1)", bst: "O(log n)" },
                { op: "Ordered?", hashmap: "❌ No", array: "✅ Yes", bst: "✅ Yes" },
                { op: "Space", hashmap: "O(n)", array: "O(n)", bst: "O(n)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="border border-purple-300 dark:border-purple-700 p-3 font-bold">
                    {row.op}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3 text-center font-mono">
                    {row.hashmap}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3 text-center font-mono">
                    {row.array}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-3 text-center font-mono">
                    {row.bst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hash Function Selection */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Which Hash Function?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 text-lg">
              Integer Keys
            </h4>
            <div className="space-y-2 text-sm">
              <div><strong>Simple:</strong> Division method (key % prime)</div>
              <div><strong>Better:</strong> Multiplication method</div>
              <div><strong>Best:</strong> Universal hashing</div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 text-lg">
              String Keys
            </h4>
            <div className="space-y-2 text-sm">
              <div><strong>Simple:</strong> Sum of ASCII values</div>
              <div><strong>Better:</strong> Polynomial rolling hash</div>
              <div><strong>Best:</strong> Universal hashing with strings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💡 Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "⚡", tip: "HashMap gives O(1) average lookup - fastest for existence checks" },
            { icon: "🎯", tip: "Use HashSet when you only need to check existence (no values)" },
            { icon: "🔢", tip: "Frequency counter pattern: map element → count" },
            { icon: "💰", tip: "Two Sum pattern: store complements in HashMap" },
            { icon: "🔗", tip: "Chaining handles collisions with linked lists (simple, unlimited)" },
            { icon: "📍", tip: "Open addressing stores in array (compact, cache-friendly)" },
            { icon: "🎲", tip: "Good hash function: deterministic, uniform, fast" },
            { icon: "📊", tip: "Load factor α = n/m should be < 0.75 for performance" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 pt-1">
                {item.tip}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
