"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TreeIntro() {
  const [hoveredExample, setHoveredExample] = useState(null);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🌳 Introduction to Trees
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
        A <strong>tree</strong> is a hierarchical data structure consisting of nodes connected by edges. It's one of the most important non-linear data structures with applications in file systems, databases, AI decision making, and more!
      </p>

      {/* Tree Structure Visualization */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📊 Tree Structure
        </h3>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-xl">
          <div className="flex flex-col items-center">
            {/* Root */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg cursor-pointer"
            >
              1
            </motion.div>
            <div className="w-1 h-8 bg-emerald-400"></div>

            {/* Level 1 */}
            <div className="flex gap-32 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-emerald-400"></div>
              {[2, 3].map((num, idx) => (
                <div key={num} className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg cursor-pointer"
                  >
                    {num}
                  </motion.div>
                  <div className="w-1 h-8 bg-green-400"></div>
                </div>
              ))}
            </div>

            {/* Level 2 */}
            <div className="flex gap-8 relative">
              {[4, 5, 6, 7].map((num) => (
                <motion.div
                  key={num}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg cursor-pointer"
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Terminology */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📖 Key Terminology
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              term: "Node",
              definition: "A single element in a tree containing data and references to child nodes",
              example: "In our tree above, 1, 2, 3, 4, 5, 6, 7 are all nodes",
            },
            {
              term: "Root",
              definition: "The topmost node in a tree with no parent",
              example: "Node 1 is the root of our tree",
            },
            {
              term: "Edge",
              definition: "The connection between two nodes (parent and child)",
              example: "The line connecting node 1 to node 2",
            },
            {
              term: "Leaf",
              definition: "A node with no children (terminal node)",
              example: "Nodes 4, 5, 6, 7 are leaf nodes",
            },
            {
              term: "Height",
              definition: "The longest path from root to any leaf",
              example: "Our tree has height 2 (root → child → grandchild)",
            },
            {
              term: "Depth",
              definition: "The distance from root to a specific node",
              example: "Node 4 has depth 2",
            },
            {
              term: "Parent",
              definition: "A node that has one or more child nodes",
              example: "Node 1 is parent of nodes 2 and 3",
            },
            {
              term: "Subtree",
              definition: "A tree formed by a node and all its descendants",
              example: "Node 2 with nodes 4 and 5 forms a subtree",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredExample(idx)}
              onMouseLeave={() => setHoveredExample(null)}
              className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                {item.term}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                {item.definition}
              </p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 italic">
                💡 {item.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tree Properties */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Important Properties
        </h3>
        <div className="space-y-4">
          {[
            {
              property: "Exactly ONE path between any two nodes",
              icon: "🔗",
              description: "Unlike graphs, trees have no cycles - only one way to get from A to B",
            },
            {
              property: "N nodes → N-1 edges",
              icon: "📊",
              description: "A tree with n nodes always has exactly n-1 edges",
            },
            {
              property: "Connected and Acyclic",
              icon: "🔄",
              description: "All nodes are connected, and there are no loops",
            },
            {
              property: "Removing any edge disconnects the tree",
              icon: "✂️",
              description: "Every edge is critical for connectivity",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border-l-4 border-emerald-600"
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.property}
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real World Applications */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌍 Real-World Applications
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "File Systems",
              icon: "📁",
              description: "Folders and files organized hierarchically",
              examples: ["Windows Explorer", "Mac Finder", "Linux directories"],
            },
            {
              title: "DOM Structure",
              icon: "🌐",
              description: "HTML elements form a tree structure",
              examples: ["React Virtual DOM", "Browser DOM", "XML parsing"],
            },
            {
              title: "Organization Charts",
              icon: "👔",
              description: "Company hierarchy and reporting structure",
              examples: ["Management tree", "Family tree", "Decision trees"],
            },
            {
              title: "Database Indexing",
              icon: "💾",
              description: "B-trees and B+ trees for fast data retrieval",
              examples: ["MySQL indexes", "MongoDB", "PostgreSQL"],
            },
            {
              title: "AI & ML",
              icon: "🤖",
              description: "Decision trees for classification",
              examples: ["Random Forest", "CART", "Game trees"],
            },
            {
              title: "Compilers",
              icon: "⚙️",
              description: "Abstract Syntax Trees (AST) for code parsing",
              examples: ["Babel", "TypeScript", "Syntax analysis"],
            },
          ].map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{app.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {app.title}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {app.description}
              </p>
              <div className="space-y-1">
                {app.examples.map((example, exIdx) => (
                  <div key={exIdx} className="text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <span>•</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Types of Trees */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌲 Types of Trees
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Binary Tree",
              emoji: "🌳",
              description: "Each node has at most 2 children (left and right)",
              useCase: "Expression evaluation, Huffman coding",
            },
            {
              type: "Binary Search Tree (BST)",
              emoji: "🔍",
              description: "Binary tree with left < parent < right property",
              useCase: "Fast searching, sorting, and retrieval",
            },
            {
              type: "AVL Tree",
              emoji: "⚖️",
              description: "Self-balancing BST with height difference ≤ 1",
              useCase: "Guaranteed O(log n) operations",
            },
            {
              type: "Heap",
              emoji: "⛰️",
              description: "Complete binary tree with heap property",
              useCase: "Priority queues, heap sort",
            },
            {
              type: "Trie (Prefix Tree)",
              emoji: "🗂️",
              description: "Tree for storing strings character by character",
              useCase: "Autocomplete, spell checker, IP routing",
            },
            {
              type: "B-Tree",
              emoji: "📚",
              description: "Self-balancing tree with multiple children per node",
              useCase: "Database indexing, file systems",
            },
          ].map((tree, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-700 dark:to-emerald-900/20 p-6 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{tree.emoji}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {tree.type}
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                {tree.description}
              </p>
              <div className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
                💼 Use Case: {tree.useCase}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
