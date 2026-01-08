"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BSTSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [searchValue, setSearchValue] = useState(6);
  const [highlightedNodes, setHighlightedNodes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const languages = {
    javascript: `// BST Search
function search(root, key) {
    if (root === null || root.data === key)
        return root;

    if (key < root.data)
        return search(root.left, key);

    return search(root.right, key);
}

// BST Insert
function insert(root, key) {
    if (root === null)
        return new Node(key);

    if (key < root.data)
        root.left = insert(root.left, key);
    else if (key > root.data)
        root.right = insert(root.right, key);

    return root;
}`,
    python: `# BST Search
def search(root, key):
    if root is None or root.data == key:
        return root

    if key < root.data:
        return search(root.left, key)

    return search(root.right, key)

# BST Insert
def insert(root, key):
    if root is None:
        return Node(key)

    if key < root.data:
        root.left = insert(root.left, key)
    elif key > root.data:
        root.right = insert(root.right, key)

    return root`,
    java: `// BST Search
Node search(Node root, int key) {
    if (root == null || root.data == key)
        return root;

    if (key < root.data)
        return search(root.left, key);

    return search(root.right, key);
}

// BST Insert
Node insert(Node root, int key) {
    if (root == null)
        return new Node(key);

    if (key < root.data)
        root.left = insert(root.left, key);
    else if (key > root.data)
        root.right = insert(root.right, key);

    return root;
}`,
    cpp: `// BST Search
Node* search(Node* root, int key) {
    if (root == nullptr || root->data == key)
        return root;

    if (key < root->data)
        return search(root->left, key);

    return search(root->right, key);
}

// BST Insert
Node* insert(Node* root, int key) {
    if (root == nullptr)
        return new Node(key);

    if (key < root->data)
        root->left = insert(root->left, key);
    else if (key > root->data)
        root->right = insert(root->right, key);

    return root;
}`,
    c: `// BST Search
struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key)
        return root;

    if (key < root->data)
        return search(root->left, key);

    return search(root->right, key);
}

// BST Insert
struct Node* insert(struct Node* root, int key) {
    if (root == NULL)
        return newNode(key);

    if (key < root->data)
        root->left = insert(root->left, key);
    else if (key > root->data)
        root->right = insert(root->right, key);

    return root;
}`,
    go: `// BST Search
func search(root *Node, key int) *Node {
    if root == nil || root.Data == key {
        return root
    }

    if key < root.Data {
        return search(root.Left, key)
    }

    return search(root.Right, key)
}

// BST Insert
func insert(root *Node, key int) *Node {
    if root == nil {
        return NewNode(key)
    }

    if key < root.Data {
        root.Left = insert(root.Left, key)
    } else if key > root.Data {
        root.Right = insert(root.Right, key)
    }

    return root
}`,
  };

  const bstNodes = [
    { id: 1, value: 8, x: 50, y: 15 },
    { id: 2, value: 3, x: 25, y: 40 },
    { id: 3, value: 10, x: 75, y: 40 },
    { id: 4, value: 1, x: 12.5, y: 65 },
    { id: 5, value: 6, x: 37.5, y: 65 },
    { id: 6, value: 14, x: 87.5, y: 65 },
  ];

  const simulateSearch = async () => {
    setIsSearching(true);
    setHighlightedNodes([]);

    const path = [1]; // Start at root
    if (searchValue < 8) path.push(2);
    else if (searchValue > 8) path.push(3);

    if (searchValue === 3 || searchValue === 10 || searchValue === 8) {
      // Found
    } else if (searchValue < 3) path.push(4);
    else if (searchValue > 3 && searchValue < 8) path.push(5);
    else if (searchValue > 10) path.push(6);

    for (let i = 0; i < path.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setHighlightedNodes(prev => [...prev, path[i]]);
    }

    setTimeout(() => {
      setHighlightedNodes([]);
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🔍</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Binary Search Tree (BST)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Left child &lt; Parent &lt; Right child property
          </p>
        </div>
      </div>

      {/* BST Property */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🎯 BST Property
          </h3>
          <div className="text-lg text-blue-900 dark:text-blue-100 space-y-3">
            <p>For every node in a BST:</p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-bold text-purple-600 dark:text-purple-400 mb-2">Left Subtree</p>
                <p className="text-sm">All values &lt; node value</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Current Node</p>
                <p className="text-sm">The reference value</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                <p className="font-bold text-orange-600 dark:text-orange-400 mb-2">Right Subtree</p>
                <p className="text-sm">All values &gt; node value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive BST Search */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎮 Interactive BST Search
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl">
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(parseInt(e.target.value) || 0)}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              disabled={isSearching}
            />
            <button
              onClick={simulateSearch}
              disabled={isSearching}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 transition-all"
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>

          <div className="relative h-80">
            <svg className="w-full h-full">
              {/* Edges */}
              <line x1="50%" y1="15%" x2="25%" y2="40%" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50%" y1="15%" x2="75%" y2="40%" stroke="#94a3b8" strokeWidth="2" />
              <line x1="25%" y1="40%" x2="12.5%" y2="65%" stroke="#94a3b8" strokeWidth="2" />
              <line x1="25%" y1="40%" x2="37.5%" y2="65%" stroke="#94a3b8" strokeWidth="2" />
              <line x1="75%" y1="40%" x2="87.5%" y2="65%" stroke="#94a3b8" strokeWidth="2" />
            </svg>

            {bstNodes.map((node) => (
              <motion.div
                key={node.id}
                animate={{
                  scale: highlightedNodes.includes(node.id) ? 1.2 : 1,
                  backgroundColor: highlightedNodes.includes(node.id) ? "#3b82f6" : "#0891b2",
                }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                {node.value}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 BST Operations
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
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

      {/* Time Complexity */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/30">
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-left">Operation</th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center">Average Case</th>
                <th className="border border-blue-300 dark:border-blue-700 p-4 text-center">Worst Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Search", avg: "O(log n)", worst: "O(n)" },
                { op: "Insert", avg: "O(log n)", worst: "O(n)" },
                { op: "Delete", avg: "O(log n)", worst: "O(n)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50 dark:hover:bg-blue-900/10">
                  <td className="border border-blue-300 dark:border-blue-700 p-4 font-semibold">
                    {row.op}
                  </td>
                  <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                      {row.avg}
                    </span>
                  </td>
                  <td className="border border-blue-300 dark:border-blue-700 p-4 text-center">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                      {row.worst}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
