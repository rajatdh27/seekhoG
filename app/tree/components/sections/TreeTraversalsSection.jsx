"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TreeTraversalsSection() {
  const [currentTraversal, setCurrentTraversal] = useState("inorder");
  const [animating, setAnimating] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);

  const nodes = [
    { id: 1, value: "A", x: 50, y: 15 },
    { id: 2, value: "B", x: 30, y: 40 },
    { id: 3, value: "C", x: 70, y: 40 },
    { id: 4, value: "D", x: 20, y: 65 },
    { id: 5, value: "E", x: 40, y: 65 },
    { id: 6, value: "F", x: 60, y: 65 },
    { id: 7, value: "G", x: 80, y: 65 },
  ];

  const traversals = {
    inorder: {
      order: [4, 2, 5, 1, 6, 3, 7],
      result: "D → B → E → A → F → C → G",
      description: "Left → Root → Right",
      use: "Get sorted order in BST",
    },
    preorder: {
      order: [1, 2, 4, 5, 3, 6, 7],
      result: "A → B → D → E → C → F → G",
      description: "Root → Left → Right",
      use: "Copy/serialize tree structure",
    },
    postorder: {
      order: [4, 5, 2, 6, 7, 3, 1],
      result: "D → E → B → F → G → C → A",
      description: "Left → Right → Root",
      use: "Delete tree or evaluate expression",
    },
    levelorder: {
      order: [1, 2, 3, 4, 5, 6, 7],
      result: "A → B → C → D → E → F → G",
      description: "Level by level (BFS)",
      use: "Find shortest path, min depth",
    },
  };

  const animate = async () => {
    setAnimating(true);
    setVisitedNodes([]);
    setCurrentNode(null);

    const order = traversals[currentTraversal].order;
    for (let i = 0; i < order.length; i++) {
      setCurrentNode(order[i]);
      await new Promise(resolve => setTimeout(resolve, 600));
      setVisitedNodes(prev => [...prev, order[i]]);
      setCurrentNode(null);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setAnimating(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🚶</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Tree Traversals
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Different ways to visit all nodes in a tree
          </p>
        </div>
      </div>

      {/* Traversal Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {Object.keys(traversals).map((type) => (
            <button
              key={type}
              onClick={() => setCurrentTraversal(type)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentTraversal === type
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Traversal
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Visualization */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                {traversals[currentTraversal].description}
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                Use Case: {traversals[currentTraversal].use}
              </p>
            </div>
            <button
              onClick={animate}
              disabled={animating}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all"
            >
              {animating ? "Animating..." : "Animate"}
            </button>
          </div>

          <div className="relative h-96 mb-6">
            <svg className="w-full h-full">
              <line x1="50%" y1="15%" x2="30%" y2="40%" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="50%" y1="15%" x2="70%" y2="40%" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="30%" y1="40%" x2="20%" y2="65%" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="30%" y1="40%" x2="40%" y2="65%" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="70%" y1="40%" x2="60%" y2="65%" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="70%" y1="40%" x2="80%" y2="65%" stroke="#cbd5e1" strokeWidth="2" />
            </svg>

            {nodes.map((node) => {
              const isVisited = visitedNodes.includes(node.id);
              const isCurrent = currentNode === node.id;
              return (
                <motion.div
                  key={node.id}
                  animate={{
                    scale: isCurrent ? 1.3 : 1,
                    backgroundColor: isCurrent ? "#ec4899" : isVisited ? "#9333ea" : "#94a3b8",
                  }}
                  style={{
                    position: "absolute",
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  {node.value}
                </motion.div>
              );
            })}
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Traversal Order:</p>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {traversals[currentTraversal].result}
            </p>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💻 Implementation (JavaScript)
        </h3>
        <div className="space-y-6">
          {[
            {
              name: "Inorder Traversal",
              code: `function inorder(root) {
    if (root === null) return;

    inorder(root.left);       // Left
    console.log(root.data);   // Root
    inorder(root.right);      // Right
}`,
            },
            {
              name: "Preorder Traversal",
              code: `function preorder(root) {
    if (root === null) return;

    console.log(root.data);   // Root
    preorder(root.left);      // Left
    preorder(root.right);     // Right
}`,
            },
            {
              name: "Postorder Traversal",
              code: `function postorder(root) {
    if (root === null) return;

    postorder(root.left);     // Left
    postorder(root.right);    // Right
    console.log(root.data);   // Root
}`,
            },
            {
              name: "Level Order Traversal",
              code: `function levelOrder(root) {
    if (root === null) return;

    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.data);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}`,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                {item.name}
              </h4>
              <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-slate-100">
                  <code>{item.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Traversal Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900/30">
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Traversal</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Order</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Use Cases</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-center">Time</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-center">Space</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Inorder",
                  order: "L → Root → R",
                  use: "Get sorted BST, Expression trees",
                  time: "O(n)",
                  space: "O(h)",
                },
                {
                  name: "Preorder",
                  order: "Root → L → R",
                  use: "Copy tree, Prefix expression",
                  time: "O(n)",
                  space: "O(h)",
                },
                {
                  name: "Postorder",
                  order: "L → R → Root",
                  use: "Delete tree, Postfix expression",
                  time: "O(n)",
                  space: "O(h)",
                },
                {
                  name: "Level Order",
                  order: "Level by level",
                  use: "BFS, Min depth, Serialization",
                  time: "O(n)",
                  space: "O(w)",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="border border-purple-300 dark:border-purple-700 p-4 font-bold text-purple-700 dark:text-purple-300">
                    {row.name}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 font-mono text-sm">
                    {row.order}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-sm">
                    {row.use}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-center">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded text-sm font-semibold">
                      {row.time}
                    </span>
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-center">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-sm font-semibold">
                      {row.space}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            * h = height of tree, w = maximum width of tree, n = number of nodes
          </p>
        </div>
      </div>
    </div>
  );
}
