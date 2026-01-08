"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BinaryTreeSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [highlightedNode, setHighlightedNode] = useState(null);

  const languages = {
    c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Create a new node
struct Node* newNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}`,
    cpp: `#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    // Constructor
    Node(int val) {
        data = val;
        left = nullptr;
        right = nullptr;
    }
};`,
    java: `class Node {
    int data;
    Node left, right;

    // Constructor
    public Node(int item) {
        data = item;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    BinaryTree() {
        root = null;
    }
}`,
    javascript: `class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
}`,
    python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None`,
    go: `package main

type Node struct {
    Data  int
    Left  *Node
    Right *Node
}

type BinaryTree struct {
    Root *Node
}

func NewNode(data int) *Node {
    return &Node{
        Data:  data,
        Left:  nil,
        Right: nil,
    }
}`,
  };

  const treeNodes = [
    { id: 1, value: 1, x: 50, y: 10, level: 0 },
    { id: 2, value: 2, x: 25, y: 35, level: 1, parent: 1 },
    { id: 3, value: 3, x: 75, y: 35, level: 1, parent: 1 },
    { id: 4, value: 4, x: 12.5, y: 60, level: 2, parent: 2 },
    { id: 5, value: 5, x: 37.5, y: 60, level: 2, parent: 2 },
    { id: 6, value: 6, x: 62.5, y: 60, level: 2, parent: 3 },
    { id: 7, value: 7, x: 87.5, y: 60, level: 2, parent: 3 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
          <span className="text-4xl">🌳</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Binary Tree
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Each node has at most two children: left and right
          </p>
        </div>
      </div>

      {/* Interactive Tree Visualization */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎨 Interactive Binary Tree
        </h3>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-xl">
          <p className="text-center text-slate-700 dark:text-slate-300 mb-6">
            Hover over nodes to see their relationships
          </p>
          <div className="relative h-96">
            <svg className="w-full h-full">
              {/* Draw edges first */}
              {treeNodes.slice(1).map((node) => {
                const parent = treeNodes.find((n) => n.id === node.parent);
                return (
                  <motion.line
                    key={`edge-${node.id}`}
                    x1={`${parent.x}%`}
                    y1={`${parent.y}%`}
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke={highlightedNode === node.id || highlightedNode === parent.id ? "#10b981" : "#94a3b8"}
                    strokeWidth={highlightedNode === node.id || highlightedNode === parent.id ? "3" : "2"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: node.level * 0.2 }}
                  />
                );
              })}
            </svg>

            {/* Draw nodes */}
            {treeNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: node.level * 0.2 + 0.1 }}
                onMouseEnter={() => setHighlightedNode(node.id)}
                onMouseLeave={() => setHighlightedNode(null)}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: highlightedNode === node.id ? 1.2 : 1,
                    backgroundColor:
                      node.level === 0
                        ? "#10b981"
                        : highlightedNode === node.id
                        ? "#10b981"
                        : "#059669",
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  {node.value}
                </motion.div>
                {highlightedNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-slate-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap"
                  >
                    {node.level === 0 ? "Root" : node.level === 1 ? "Child" : "Grandchild"}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Binary Tree Properties */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Binary Tree Properties
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              property: "Maximum nodes at level i",
              formula: "2^i",
              example: "Level 2 has max 2² = 4 nodes",
            },
            {
              property: "Maximum nodes in tree of height h",
              formula: "2^(h+1) - 1",
              example: "Height 2 tree has max 2³-1 = 7 nodes",
            },
            {
              property: "Minimum height for n nodes",
              formula: "⌈log₂(n+1)⌉ - 1",
              example: "7 nodes need min height 2",
            },
            {
              property: "Number of leaf nodes",
              formula: "Internal nodes + 1",
              example: "3 internal → 4 leaf nodes",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border-l-4 border-emerald-600"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.property}
              </h4>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 my-3">
                {item.formula}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                💡 {item.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Types of Binary Trees */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌲 Types of Binary Trees
        </h3>
        <div className="space-y-6">
          {[
            {
              name: "Full Binary Tree",
              description: "Every node has 0 or 2 children (no node has only 1 child)",
              visual: "🔸—🔹—🔸",
            },
            {
              name: "Complete Binary Tree",
              description: "All levels completely filled except possibly the last, filled from left to right",
              visual: "Perfect except last level",
            },
            {
              name: "Perfect Binary Tree",
              description: "All internal nodes have 2 children, all leaves at same level",
              visual: "2^h+1 - 1 nodes",
            },
            {
              name: "Balanced Binary Tree",
              description: "Height of left and right subtrees differ by at most 1",
              visual: "|h(left) - h(right)| ≤ 1",
            },
            {
              name: "Degenerate/Pathological Tree",
              description: "Each parent has only one child (essentially a linked list)",
              visual: "🔸—🔸—🔸—🔸",
            },
          ].map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                    {type.name}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    {type.description}
                  </p>
                </div>
                <div className="ml-4 text-2xl font-mono text-slate-400">
                  {type.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Node Structure Code */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Node Structure Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{languages[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Advantages & Disadvantages */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Advantages & Disadvantages
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 text-lg flex items-center gap-2">
              <span>✅</span> Advantages
            </h4>
            <ul className="space-y-3 text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Hierarchical structure perfect for representing relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Efficient searching (O(log n) for balanced trees)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Fast insertion and deletion operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Natural fit for divide-and-conquer algorithms</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 text-lg flex items-center gap-2">
              <span>❌</span> Disadvantages
            </h4>
            <ul className="space-y-3 text-red-800 dark:text-red-200">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Can degenerate to O(n) if not balanced</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>More complex implementation than arrays/lists</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Extra memory for storing pointers</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>No constant-time access to arbitrary elements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
