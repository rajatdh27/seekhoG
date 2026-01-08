"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BFSSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);

  const nodes = [
    { id: 0, label: "A", x: 50, y: 15 },
    { id: 1, label: "B", x: 25, y: 40 },
    { id: 2, label: "C", x: 75, y: 40 },
    { id: 3, label: "D", x: 12.5, y: 65 },
    { id: 4, label: "E", x: 37.5, y: 65 },
    { id: 5, label: "F", x: 87.5, y: 65 },
  ];

  const animateBFS = async () => {
    setIsAnimating(true);
    setVisitedNodes([]);
    setCurrentNode(null);

    const bfsOrder = [0, 1, 2, 3, 4, 5]; // A → B → C → D → E → F (level by level)

    for (let i = 0; i < bfsOrder.length; i++) {
      setCurrentNode(bfsOrder[i]);
      await new Promise(resolve => setTimeout(resolve, 800));
      setVisitedNodes(prev => [...prev, bfsOrder[i]]);
      setCurrentNode(null);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setIsAnimating(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">📊</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Breadth First Search (BFS)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Explore level by level - visit all neighbors before going deeper
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-teal-600">
          <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4">
            🎯 BFS Strategy
          </h3>
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Think of ripples in water: spread outward in waves. Uses a <strong>Queue</strong> (FIFO).
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-teal-700 dark:text-teal-300 mb-2">1️⃣ Start Node</p>
              <p>Add start node to queue</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-teal-700 dark:text-teal-300 mb-2">2️⃣ Visit Level</p>
              <p>Process all nodes at current level</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-teal-700 dark:text-teal-300 mb-2">3️⃣ Next Level</p>
              <p>Add neighbors to queue, repeat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Animation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 BFS Animation
        </h3>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-8 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-700 dark:text-slate-300">
              Watch BFS traverse the graph level by level
            </p>
            <button
              onClick={animateBFS}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 transition-all"
            >
              {isAnimating ? "Animating..." : "Start BFS"}
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
                    backgroundColor: isCurrent ? "#14b8a6" : isVisited ? "#06b6d4" : "#94a3b8",
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
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">BFS Order:</p>
            <p className="text-xl font-bold text-teal-900 dark:text-teal-100">
              {visitedNodes.length > 0
                ? visitedNodes.map(id => nodes[id].label).join(" → ")
                : "Click 'Start BFS' to begin"}
            </p>
          </div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue (FIFO)
        console.log(node);

        // Add all unvisited neighbors to queue
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// BFS with level tracking
function bfsWithLevels(graph, start) {
    const visited = new Set([start]);
    const queue = [[start, 0]]; // [node, level]

    while (queue.length > 0) {
        const [node, level] = queue.shift();
        console.log(\`Node \${node} at level \${level}\`);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, level + 1]);
            }
        }
    }
}`}</code>
          </pre>
        </div>
      </div>

      {/* DFS vs BFS Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ DFS vs BFS
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-100 dark:bg-teal-900/30">
                <th className="border border-teal-300 dark:border-teal-700 p-4 text-left">Aspect</th>
                <th className="border border-teal-300 dark:border-teal-700 p-4 text-left">DFS</th>
                <th className="border border-teal-300 dark:border-teal-700 p-4 text-left">BFS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { aspect: "Data Structure", dfs: "Stack (or recursion)", bfs: "Queue" },
                { aspect: "Traversal", dfs: "Go deep first", bfs: "Go level by level" },
                { aspect: "Memory", dfs: "O(h) - height", bfs: "O(w) - width" },
                { aspect: "Shortest Path", dfs: "❌ Not guaranteed", bfs: "✅ Guaranteed (unweighted)" },
                { aspect: "Use Case", dfs: "Topological sort, cycles", bfs: "Shortest path, min distance" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-teal-50 dark:hover:bg-teal-900/10">
                  <td className="border border-teal-300 dark:border-teal-700 p-4 font-bold">
                    {row.aspect}
                  </td>
                  <td className="border border-teal-300 dark:border-teal-700 p-4">
                    {row.dfs}
                  </td>
                  <td className="border border-teal-300 dark:border-teal-700 p-4">
                    {row.bfs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 BFS Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { app: "Shortest Path", desc: "Find shortest path in unweighted graph", icon: "🛤️" },
            { app: "Level Order Traversal", desc: "Tree level-by-level traversal", icon: "🌳" },
            { app: "Web Crawler", desc: "Crawl web pages level by level", icon: "🕷️" },
            { app: "Social Network", desc: "Find connections within N degrees", icon: "👥" },
            { app: "GPS Navigation", desc: "Find nearby locations", icon: "🗺️" },
            { app: "Peer-to-Peer Networks", desc: "Broadcasting in networks", icon: "📡" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-200 dark:border-teal-800"
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
    </div>
  );
}
