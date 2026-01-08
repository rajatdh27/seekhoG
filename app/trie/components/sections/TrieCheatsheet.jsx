"use client";
import { motion } from "framer-motion";

export default function TrieCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Trie Cheatsheet
      </h2>

      {/* Time & Space Complexity */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time & Space Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-lime-100 dark:bg-lime-900/30">
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-left">Operation</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-center">Time</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-center">Space</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Insert", time: "O(m)", space: "O(m)", note: "m = word length" },
                { op: "Search", time: "O(m)", space: "O(1)", note: "m = word length" },
                { op: "StartsWith", time: "O(m)", space: "O(1)", note: "m = prefix length" },
                { op: "Delete", time: "O(m)", space: "O(m)", note: "Recursion stack" },
                { op: "Autocomplete", time: "O(p + n)", space: "O(n)", note: "p = prefix, n = results" },
                { op: "Space (Total)", time: "-", space: "O(ALPHABET × n × m)", note: "n = words, ALPHABET = 26" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-lime-50 dark:hover:bg-lime-900/10">
                  <td className="border border-lime-300 dark:border-lime-700 p-3 font-bold">
                    {row.op}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-center font-mono text-green-600 dark:text-green-400">
                    {row.time}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-center font-mono text-blue-600 dark:text-blue-400">
                    {row.space}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-xs">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Use Trie */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 When to Use Trie?
        </h3>
        <div className="space-y-4">
          {[
            {
              question: "Need prefix-based search?",
              answer: "Use Trie - perfect for autocomplete and prefix matching",
              color: "emerald",
            },
            {
              question: "Multiple words with common prefixes?",
              answer: "Use Trie - saves space by sharing prefixes",
              color: "green",
            },
            {
              question: "Word dictionary with wildcards?",
              answer: "Use Trie with DFS for '.' wildcard matching",
              color: "teal",
            },
            {
              question: "Find words in 2D grid?",
              answer: "Use Trie + Backtracking for efficient pruning",
              color: "cyan",
            },
            {
              question: "Lexicographic ordering needed?",
              answer: "Use Trie - DFS gives sorted order automatically",
              color: "blue",
            },
            {
              question: "IP routing or longest prefix?",
              answer: "Use Trie for longest prefix matching",
              color: "lime",
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
          🎯 Common Trie Problems
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Basic Operations",
              problems: ["Implement Trie", "Design Add and Search Words", "Prefix and Suffix Search"],
            },
            {
              type: "Autocomplete",
              problems: ["Search Suggestions System", "Design Search Autocomplete", "Top K Frequent Words"],
            },
            {
              type: "Word Dictionary",
              problems: ["Word Dictionary", "Add and Search Word", "Replace Words"],
            },
            {
              type: "Grid Problems",
              problems: ["Word Search II", "Boggle", "Crossword Puzzle"],
            },
            {
              type: "Word Break",
              problems: ["Word Break", "Word Break II", "Concatenated Words"],
            },
            {
              type: "String Matching",
              problems: ["Longest Word", "Longest Word with All Prefixes", "Stream of Characters"],
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
              <div className="font-bold text-lime-700 dark:text-lime-400 mb-2 text-lg">
                {item.type}
              </div>
              <ul className="space-y-1">
                {item.problems.map((problem, pIdx) => (
                  <li key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-lime-600 dark:text-lime-400">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trie vs Other Data Structures */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Trie vs Other Structures
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-100 dark:bg-green-900/30">
                <th className="border border-green-300 dark:border-green-700 p-3 text-left">Feature</th>
                <th className="border border-green-300 dark:border-green-700 p-3 text-center">Trie</th>
                <th className="border border-green-300 dark:border-green-700 p-3 text-center">HashSet</th>
                <th className="border border-green-300 dark:border-green-700 p-3 text-center">BST</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Insert", trie: "O(m)", hash: "O(m)", bst: "O(m log n)" },
                { feature: "Search", trie: "O(m)", hash: "O(m)", bst: "O(m log n)" },
                { feature: "Prefix Search", trie: "O(m)", hash: "O(n×m)", bst: "O(m log n + k)" },
                { feature: "Autocomplete", trie: "✅ Fast", hash: "❌ Slow", bst: "✅ Possible" },
                { feature: "Sorted Order", trie: "✅ Yes", hash: "❌ No", bst: "✅ Yes" },
                { feature: "Space", trie: "⚠️ High", hash: "✅ Low", bst: "✅ Low" },
                { feature: "Shared Prefixes", trie: "✅ Yes", hash: "❌ No", bst: "❌ No" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-green-50 dark:hover:bg-green-900/10">
                  <td className="border border-green-300 dark:border-green-700 p-3 font-bold">
                    {row.feature}
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-center font-mono">
                    {row.trie}
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-center font-mono">
                    {row.hash}
                  </td>
                  <td className="border border-green-300 dark:border-green-700 p-3 text-center font-mono">
                    {row.bst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            m = word length, n = number of words, k = number of results
          </p>
        </div>
      </div>

      {/* Implementation Tips */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💡 Implementation Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-xl border border-lime-200 dark:border-lime-800">
            <h4 className="font-bold text-lime-900 dark:text-lime-100 mb-4 text-lg">
              HashMap vs Array
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>HashMap (Object/Map):</strong>
                <div className="ml-4 mt-1">
                  ✓ Works with any character set<br/>
                  ✓ Space efficient (only stores existing chars)<br/>
                  ✗ Slightly slower than array
                </div>
              </div>
              <div>
                <strong>Array (size 26):</strong>
                <div className="ml-4 mt-1">
                  ✓ Faster access (O(1) indexing)<br/>
                  ✓ Fixed space per node<br/>
                  ✗ Only for lowercase a-z
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 text-lg">
              Optimization Techniques
            </h4>
            <div className="space-y-2 text-sm">
              <div>✓ Stop early if prefix doesn't exist</div>
              <div>✓ Store frequency/count for weighted ops</div>
              <div>✓ Use isEndOfWord flag to mark words</div>
              <div>✓ Prune subtrees with no words (deletion)</div>
              <div>✓ Cache common prefix queries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎓 Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🔍", tip: "Trie excels at prefix-based operations - autocomplete, search suggestions" },
            { icon: "🌳", tip: "Each path from root to leaf represents a word, shared prefixes save space" },
            { icon: "⚡", tip: "All operations are O(m) where m is word/prefix length, independent of word count" },
            { icon: "💾", tip: "Trade space for speed - uses more memory but gives fast prefix queries" },
            { icon: "🎯", tip: "Perfect for: autocomplete, spell check, word games, IP routing" },
            { icon: "🔤", tip: "Use array (26) for lowercase only, HashMap for general characters" },
            { icon: "🚀", tip: "Combine with DFS for pattern matching, backtracking for grid problems" },
            { icon: "📊", tip: "Add frequency/count fields for weighted autocomplete and ranking" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20 p-4 rounded-xl border border-lime-200 dark:border-lime-800"
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
