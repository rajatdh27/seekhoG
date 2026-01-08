"use client";
import { motion } from "framer-motion";

export default function TreeCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Tree Cheatsheet
      </h2>

      {/* Binary Tree vs BST */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌳 Binary Tree vs BST
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/30">
                <th className="border border-emerald-300 dark:border-emerald-700 p-4 text-left">Property</th>
                <th className="border border-emerald-300 dark:border-emerald-700 p-4 text-left">Binary Tree</th>
                <th className="border border-emerald-300 dark:border-emerald-700 p-4 text-left">Binary Search Tree</th>
              </tr>
            </thead>
            <tbody>
              {[
                { prop: "Structure", bt: "Max 2 children per node", bst: "Max 2 children + BST property" },
                { prop: "Ordering", bt: "No specific order", bst: "Left < Parent < Right" },
                { prop: "Search", bt: "O(n)", bst: "O(log n) average, O(n) worst" },
                { prop: "Insert", bt: "O(1) if position known", bst: "O(log n) average" },
                { prop: "Use Case", bt: "Expression trees, Huffman coding", bst: "Searching, sorting, databases" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-emerald-50 dark:hover:bg-emerald-900/10">
                  <td className="border border-emerald-300 dark:border-emerald-700 p-4 font-bold">{row.prop}</td>
                  <td className="border border-emerald-300 dark:border-emerald-700 p-4">{row.bt}</td>
                  <td className="border border-emerald-300 dark:border-emerald-700 p-4">{row.bst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tree Types Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗂️ Tree Types Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Binary Tree",
              complexity: "O(n)",
              pros: "Simple, flexible structure",
              cons: "No search optimization",
            },
            {
              type: "Binary Search Tree",
              complexity: "O(log n) avg",
              pros: "Fast search, ordered data",
              cons: "Can become unbalanced",
            },
            {
              type: "AVL Tree",
              complexity: "O(log n) guaranteed",
              pros: "Strictly balanced, predictable",
              cons: "More rotations, complex",
            },
            {
              type: "Red-Black Tree",
              complexity: "O(log n) guaranteed",
              pros: "Less strict balance, fewer rotations",
              cons: "Complex implementation",
            },
          ].map((tree, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800"
            >
              <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">
                {tree.type}
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Complexity:</span>{" "}
                  <span className="text-green-600 dark:text-green-400">{tree.complexity}</span>
                </div>
                <div>
                  <span className="font-semibold">✅ Pros:</span> {tree.pros}
                </div>
                <div>
                  <span className="font-semibold">❌ Cons:</span> {tree.cons}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Traversals Quick Reference */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚶 Traversals Quick Reference
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: "Inorder", order: "L→Root→R", use: "Sorted order" },
            { name: "Preorder", order: "Root→L→R", use: "Copy tree" },
            { name: "Postorder", order: "L→R→Root", use: "Delete tree" },
            { name: "Level Order", order: "Level by level", use: "BFS" },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800 text-center"
            >
              <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">{t.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{t.order}</div>
              <div className="text-xs text-purple-600 dark:text-purple-300">{t.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common Tree Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              pattern: "Recursive DFS",
              code: "function dfs(node) { if (!node) return; dfs(node.left); dfs(node.right); }",
            },
            {
              pattern: "Iterative BFS",
              code: "queue = [root]; while(queue.length) { node = queue.shift(); }",
            },
            {
              pattern: "Height Calculation",
              code: "height = 1 + max(height(left), height(right))",
            },
            {
              pattern: "Path Sum",
              code: "Track sum while traversing, backtrack on return",
            },
            {
              pattern: "Lowest Common Ancestor",
              code: "Both nodes in left? Go left. Both in right? Go right. Else: current",
            },
            {
              pattern: "Serialize/Deserialize",
              code: "Preorder for serialize, rebuild using queue for deserialize",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                {item.pattern}
              </div>
              <code className="text-xs text-slate-600 dark:text-slate-400 block">
                {item.code}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 When to Use Which Tree?
        </h3>
        <div className="space-y-4">
          {[
            {
              scenario: "Need sorted order output?",
              answer: "Use BST with Inorder traversal",
              color: "blue",
            },
            {
              scenario: "Frequent insertions/deletions?",
              answer: "Use Red-Black Tree (fewer rotations than AVL)",
              color: "purple",
            },
            {
              scenario: "Search-heavy workload?",
              answer: "Use AVL Tree (strictly balanced for faster lookups)",
              color: "emerald",
            },
            {
              scenario: "Need to store expression?",
              answer: "Use Binary Tree (Expression tree)",
              color: "amber",
            },
            {
              scenario: "Priority queue needed?",
              answer: "Use Heap (Complete binary tree)",
              color: "orange",
            },
            {
              scenario: "String prefix matching?",
              answer: "Use Trie (Prefix tree)",
              color: "cyan",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 p-4 rounded-xl border-l-4 border-${item.color}-600`}
            >
              <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                {item.scenario}
              </div>
              <div className={`text-${item.color}-700 dark:text-${item.color}-300`}>
                → {item.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
