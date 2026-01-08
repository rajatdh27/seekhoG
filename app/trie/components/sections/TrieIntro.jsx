"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TrieIntro() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Simple trie visualization for words: "cat", "car", "card"
  const trieStructure = [
    { id: "root", label: "root", x: 50, y: 10, children: ["c"] },
    { id: "c", label: "c", x: 50, y: 25, children: ["a"], parent: "root" },
    { id: "a", label: "a", x: 50, y: 40, children: ["t", "r"], parent: "c" },
    { id: "t", label: "t*", x: 30, y: 55, children: [], parent: "a", isEnd: true },
    { id: "r", label: "r*", x: 70, y: 55, children: ["d"], parent: "a", isEnd: true },
    { id: "d", label: "d*", x: 70, y: 70, children: [], parent: "r", isEnd: true },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-lime-600 to-green-600 rounded-xl">
          <span className="text-4xl">🗂️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Introduction to Trie
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Tree-based data structure for efficient string operations
          </p>
        </div>
      </div>

      {/* What is a Trie */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20 p-6 rounded-xl border-l-4 border-lime-600">
          <h3 className="text-2xl font-bold text-lime-900 dark:text-lime-100 mb-4">
            🎯 What is a Trie?
          </h3>
          <p className="text-lg text-lime-900 dark:text-lime-100 mb-4">
            A <strong>Trie</strong> (pronounced "try") is a tree data structure used to store strings where each path from root to leaf represents a word.
            Also called <strong>Prefix Tree</strong> or <strong>Digital Tree</strong>.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm mb-2">
              <strong>Key Property:</strong> All descendants of a node share a common prefix
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              Example: Words "cat", "car", "card" share prefix "ca"
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Trie Visualization */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Trie Structure Visualization
        </h3>
        <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20 p-8 rounded-xl">
          <div className="text-center mb-4">
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              Words stored: <strong>"cat"</strong>, <strong>"car"</strong>, <strong>"card"</strong>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              (* indicates end of word)
            </p>
          </div>

          <div className="relative h-96">
            {/* Draw edges */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="50%" y1="10%" x2="50%" y2="25%" stroke="#84cc16" strokeWidth="3" />
              <line x1="50%" y1="25%" x2="50%" y2="40%" stroke="#84cc16" strokeWidth="3" />
              <line x1="50%" y1="40%" x2="30%" y2="55%" stroke="#84cc16" strokeWidth="3" />
              <line x1="50%" y1="40%" x2="70%" y2="55%" stroke="#84cc16" strokeWidth="3" />
              <line x1="70%" y1="55%" x2="70%" y2="70%" stroke="#84cc16" strokeWidth="3" />
            </svg>

            {/* Draw nodes */}
            {trieStructure.map((node) => (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.2 }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg cursor-pointer ${
                  node.isEnd
                    ? "bg-gradient-to-br from-green-600 to-emerald-600"
                    : "bg-gradient-to-br from-lime-600 to-green-600"
                }`}
              >
                {node.label}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
              {hoveredNode === "root" && "Root node - starting point of trie"}
              {hoveredNode === "c" && 'First character "c" - shared by all words'}
              {hoveredNode === "a" && 'Second character "a" - shared by all words'}
              {hoveredNode === "t" && 'Word "cat" ends here'}
              {hoveredNode === "r" && 'Word "car" ends here'}
              {hoveredNode === "d" && 'Word "card" ends here'}
              {!hoveredNode && "Hover over nodes to see details"}
            </p>
          </div>
        </div>
      </div>

      {/* Trie Node Structure */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📦 Trie Node Structure
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-xl border border-lime-200 dark:border-lime-800">
            <h4 className="font-bold text-lime-900 dark:text-lime-100 mb-4 text-lg">
              Node Components
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">1.</span>
                <div>
                  <strong>Children</strong>: Map/Array of child nodes (26 for lowercase a-z)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">2.</span>
                <div>
                  <strong>isEndOfWord</strong>: Boolean flag marking word ending
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">3.</span>
                <div>
                  <strong>Optional</strong>: Character value, frequency, word list
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-xs text-slate-100">
              <code>{`class TrieNode {
    constructor() {
        // Map char -> TrieNode
        this.children = {};

        // Marks end of word
        this.isEndOfWord = false;
    }
}

// Alternative with array
class TrieNode {
    constructor() {
        // Array size 26 (a-z)
        this.children = new Array(26);
        this.isEndOfWord = false;
    }
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Why Use Trie */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Why Use Trie?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔍",
              title: "Fast Prefix Search",
              desc: "Find all words with given prefix in O(m) time",
            },
            {
              icon: "📝",
              title: "Autocomplete",
              desc: "Perfect for search suggestions and word completion",
            },
            {
              icon: "🎯",
              title: "Space Efficient",
              desc: "Shared prefixes save memory compared to storing full words",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20 p-6 rounded-xl text-center border border-lime-200 dark:border-lime-800"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
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
              <tr className="bg-lime-100 dark:bg-lime-900/30">
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-left">Operation</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-center">Trie</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-center">HashSet</th>
                <th className="border border-lime-300 dark:border-lime-700 p-3 text-center">BST</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Insert", trie: "O(m)", hashset: "O(m)", bst: "O(m log n)" },
                { op: "Search", trie: "O(m)", hashset: "O(m)", bst: "O(m log n)" },
                { op: "Prefix Search", trie: "O(m)", hashset: "O(n*m)", bst: "O(m log n)" },
                { op: "Space", trie: "O(ALPHABET * m * n)", hashset: "O(m*n)", bst: "O(m*n)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-lime-50 dark:hover:bg-lime-900/10">
                  <td className="border border-lime-300 dark:border-lime-700 p-3 font-bold">
                    {row.op}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-center font-mono text-green-600 dark:text-green-400">
                    {row.trie}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-center font-mono">
                    {row.hashset}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-3 text-center font-mono">
                    {row.bst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            m = word length, n = number of words, ALPHABET = alphabet size (e.g., 26 for lowercase)
          </p>
        </div>
      </div>

      {/* Real-World Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌍 Real-World Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              app: "Autocomplete Systems",
              desc: "Google search, IDE code completion, address suggestions",
              icon: "🔍",
            },
            {
              app: "Spell Checkers",
              desc: "Word validation, spelling correction, dictionary lookup",
              icon: "✅",
            },
            {
              app: "IP Routing",
              desc: "Longest prefix matching in network routers",
              icon: "🌐",
            },
            {
              app: "T9 Predictive Text",
              desc: "Old phone keyboards word prediction",
              icon: "📱",
            },
            {
              app: "Genome Sequencing",
              desc: "DNA sequence matching and analysis",
              icon: "🧬",
            },
            {
              app: "Browser History",
              desc: "URL autocomplete in browsers",
              icon: "🌍",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.app}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
