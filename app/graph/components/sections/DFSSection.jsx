"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DFSSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const nodes = [
    { id: 0, label: "A", x: 50, y: 15 },
    { id: 1, label: "B", x: 25, y: 40 },
    { id: 2, label: "C", x: 75, y: 40 },
    { id: 3, label: "D", x: 12.5, y: 65 },
    { id: 4, label: "E", x: 37.5, y: 65 },
    { id: 5, label: "F", x: 87.5, y: 65 },
  ];

  const languages = {
    javascript: `function dfs(graph, start, visited = new Set()) {
    // Mark current node as visited
    visited.add(start);
    console.log(start);

    // Visit all unvisited neighbors
    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Iterative DFS using stack
function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);

            // Add neighbors to stack
            for (let neighbor of graph[node].reverse()) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}`,
    python: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()

    # Mark current node as visited
    visited.add(start)
    print(start)

    # Visit all unvisited neighbors
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Iterative DFS using stack
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]

    while stack:
        node = stack.pop()

        if node not in visited:
            visited.add(node)
            print(node)

            # Add neighbors to stack
            for neighbor in reversed(graph[node]):
                if neighbor not in visited:
                    stack.append(neighbor)`,
  };

  const animateDFS = async () => {
    setIsAnimating(true);
    setVisitedNodes([]);
    setCurrentNode(null);

    const dfsOrder = [0, 1, 3, 4, 2, 5]; // A → B → D → E → C → F

    for (let i = 0; i < dfsOrder.length; i++) {
      setCurrentNode(dfsOrder[i]);
      await new Promise(resolve => setTimeout(resolve, 800));
      setVisitedNodes(prev => [...prev, dfsOrder[i]]);
      setCurrentNode(null);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setIsAnimating(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">🔍</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Depth First Search (DFS)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Go deep before going wide - explore as far as possible before backtracking
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            🎯 DFS Strategy
          </h3>
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Think of exploring a maze: go down one path completely before trying another path. Uses a <strong>Stack</strong> (LIFO) or recursion.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">1️⃣ Visit Node</p>
              <p>Mark current node as visited</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">2️⃣ Go Deep</p>
              <p>Visit first unvisited neighbor</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">3️⃣ Backtrack</p>
              <p>When stuck, go back and try other paths</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Animation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 DFS Animation
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-700 dark:text-slate-300">
              Watch DFS traverse the graph depth-first
            </p>
            <button
              onClick={animateDFS}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 transition-all"
            >
              {isAnimating ? "Animating..." : "Start DFS"}
            </button>
          </div>

          <div className="relative h-96">
            <svg className="absolute inset-0 w-full h-full">
              <line x1="50%" y1="15%" x2="25%" y2="40%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="50%" y1="15%" x2="75%" y2="40%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="25%" y1="40%" x2="12.5%" y2="65%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="25%" y1="40%" x2="37.5%" y2="65%" stroke="#94a3b8" strokeWidth="3" />
              <line x1="75%" y1="40%" x2="87.5%" y2="65%" stroke="#94a3b8" strokeWidth="3" />
            </svg>

            {nodes.map((node) => {
              const isVisited = visitedNodes.includes(node.id);
              const isCurrent = currentNode === node.id;
              const visitIndex = visitedNodes.indexOf(node.id);

              return (
                <motion.div
                  key={node.id}
                  animate={{
                    scale: isCurrent ? 1.3 : 1,
                    backgroundColor: isCurrent ? "#a855f7" : isVisited ? "#6366f1" : "#94a3b8",
                  }}
                  style={{
                    position: "absolute",
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  <div>{node.label}</div>
                  {isVisited && (
                    <div className="text-xs mt-1">#{visitIndex + 1}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">DFS Order:</p>
            <p className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {visitedNodes.length > 0
                ? visitedNodes.map(id => nodes[id].label).join(" → ")
                : "Click 'Start DFS' to begin"}
            </p>
          </div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>

        <div className="flex gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
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

      {/* Applications */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 DFS Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { app: "Cycle Detection", desc: "Find cycles in graphs", icon: "🔄" },
            { app: "Topological Sorting", desc: "Order tasks with dependencies", icon: "📋" },
            { app: "Path Finding", desc: "Find path between two nodes", icon: "🛤️" },
            { app: "Connected Components", desc: "Find all connected parts", icon: "🧩" },
            { app: "Maze Solving", desc: "Find way out of maze", icon: "🏃" },
            { app: "Tree Traversal", desc: "Inorder, Preorder, Postorder", icon: "🌳" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.app}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Time & Space Complexity */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Complexity
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ⏱️ Time Complexity
            </h4>
            <div className="text-3xl font-bold text-green-600 mb-2">O(V + E)</div>
            <p className="text-sm text-green-800 dark:text-green-200">
              V = vertices, E = edges<br />
              Visit each vertex once, explore each edge once
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-lg">
              💾 Space Complexity
            </h4>
            <div className="text-3xl font-bold text-blue-600 mb-2">O(V)</div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Recursion stack (worst case: linear graph)<br />
              Plus visited set storage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
