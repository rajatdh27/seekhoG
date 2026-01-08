"use client";
import { motion } from "framer-motion";

export default function GraphCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Graph Algorithms Cheatsheet
      </h2>

      {/* Algorithm Complexity Table */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time & Space Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-cyan-100 dark:bg-cyan-900/30">
                <th className="border border-cyan-300 dark:border-cyan-700 p-3 text-left">Algorithm</th>
                <th className="border border-cyan-300 dark:border-cyan-700 p-3 text-center">Time</th>
                <th className="border border-cyan-300 dark:border-cyan-700 p-3 text-center">Space</th>
                <th className="border border-cyan-300 dark:border-cyan-700 p-3 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                { algo: "DFS", time: "O(V + E)", space: "O(V)", use: "Cycle detection, topological sort" },
                { algo: "BFS", time: "O(V + E)", space: "O(V)", use: "Shortest path (unweighted)" },
                { algo: "Dijkstra", time: "O((V+E) log V)", space: "O(V)", use: "Shortest path (non-negative)" },
                { algo: "Bellman-Ford", time: "O(V × E)", space: "O(V)", use: "Negative weights, detect cycles" },
                { algo: "Floyd-Warshall", time: "O(V³)", space: "O(V²)", use: "All-pairs shortest path" },
                { algo: "Kruskal's MST", time: "O(E log E)", space: "O(V)", use: "MST (sparse graphs)" },
                { algo: "Prim's MST", time: "O((V+E) log V)", space: "O(V)", use: "MST (dense graphs)" },
                { algo: "Topological Sort", time: "O(V + E)", space: "O(V)", use: "DAG ordering" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-cyan-50 dark:hover:bg-cyan-900/10">
                  <td className="border border-cyan-300 dark:border-cyan-700 p-3 font-bold">
                    {row.algo}
                  </td>
                  <td className="border border-cyan-300 dark:border-cyan-700 p-3 text-center font-mono">
                    {row.time}
                  </td>
                  <td className="border border-cyan-300 dark:border-cyan-700 p-3 text-center font-mono">
                    {row.space}
                  </td>
                  <td className="border border-cyan-300 dark:border-cyan-700 p-3">
                    {row.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Use Which Algorithm */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 Which Algorithm to Use?
        </h3>
        <div className="space-y-4">
          {[
            {
              question: "Need shortest path in unweighted graph?",
              answer: "Use BFS",
              color: "teal",
            },
            {
              question: "Need shortest path with positive weights?",
              answer: "Use Dijkstra's Algorithm",
              color: "amber",
            },
            {
              question: "Graph has negative weights?",
              answer: "Use Bellman-Ford",
              color: "blue",
            },
            {
              question: "Need all-pairs shortest paths?",
              answer: "Use Floyd-Warshall (small graphs) or run Dijkstra V times",
              color: "purple",
            },
            {
              question: "Connect all nodes with minimum cost?",
              answer: "Use MST (Kruskal for sparse, Prim for dense)",
              color: "green",
            },
            {
              question: "Need to order tasks with dependencies?",
              answer: "Use Topological Sort",
              color: "violet",
            },
            {
              question: "Detect cycle in graph?",
              answer: "Use DFS or Kahn's algorithm (for DAG)",
              color: "red",
            },
            {
              question: "Find connected components?",
              answer: "Use DFS or BFS",
              color: "cyan",
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
              <div className={`text-${item.color}-700 dark:text-${item.color}-300`}>
                → {item.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Graph Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common Graph Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              pattern: "Clone Graph",
              approach: "DFS/BFS with HashMap to track cloned nodes",
            },
            {
              pattern: "Number of Islands",
              approach: "DFS/BFS on 2D grid, mark visited",
            },
            {
              pattern: "Course Schedule",
              approach: "Topological sort with cycle detection",
            },
            {
              pattern: "Word Ladder",
              approach: "BFS for shortest transformation",
            },
            {
              pattern: "Network Delay Time",
              approach: "Dijkstra from source node",
            },
            {
              pattern: "Cheapest Flights K Stops",
              approach: "Modified Dijkstra/Bellman-Ford",
            },
            {
              pattern: "Critical Connections",
              approach: "Tarjan's algorithm (bridges)",
            },
            {
              pattern: "Redundant Connection",
              approach: "Union-Find to detect cycle",
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
              <div className="font-bold text-cyan-700 dark:text-cyan-400 mb-2">
                {item.pattern}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {item.approach}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Graph Representations Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Representation Comparison
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-lg">
              Adjacency Matrix
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Best For:</strong> Dense graphs, quick edge lookup
              </div>
              <div>
                <strong>Space:</strong> O(V²)
              </div>
              <div>
                <strong>Edge Check:</strong> O(1)
              </div>
              <div>
                <strong>Get Neighbors:</strong> O(V)
              </div>
              <div className="text-green-600 dark:text-green-400">
                ✓ Simple implementation<br/>
                ✓ Fast edge existence check
              </div>
              <div className="text-red-600 dark:text-red-400">
                ✗ Wastes space for sparse graphs<br/>
                ✗ Slow to find all neighbors
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 text-lg">
              Adjacency List
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Best For:</strong> Sparse graphs, iterate neighbors
              </div>
              <div>
                <strong>Space:</strong> O(V + E)
              </div>
              <div>
                <strong>Edge Check:</strong> O(degree)
              </div>
              <div>
                <strong>Get Neighbors:</strong> O(1)
              </div>
              <div className="text-green-600 dark:text-green-400">
                ✓ Space efficient for sparse graphs<br/>
                ✓ Fast neighbor iteration
              </div>
              <div className="text-red-600 dark:text-red-400">
                ✗ Slower edge existence check<br/>
                ✗ More complex implementation
              </div>
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
            { icon: "🔍", tip: "DFS for depth, cycles, and backtracking problems" },
            { icon: "📊", tip: "BFS for shortest path in unweighted graphs" },
            { icon: "⚡", tip: "Dijkstra for shortest path with positive weights" },
            { icon: "🌲", tip: "MST algorithms for minimum cost networks" },
            { icon: "📋", tip: "Topological sort only works on DAGs" },
            { icon: "🔄", tip: "Union-Find for cycle detection and connectivity" },
            { icon: "⚖️", tip: "Choose representation based on graph density" },
            { icon: "🎯", tip: "Most graph problems: O(V + E) time complexity" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800"
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
