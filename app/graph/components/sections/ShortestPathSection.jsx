"use client";
import { motion } from "framer-motion";

export default function ShortestPathSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl">
          <span className="text-4xl">🛤️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Shortest Path Algorithms
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Find the shortest path between nodes in weighted graphs
          </p>
        </div>
      </div>

      {/* Dijkstra's Algorithm */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6">
          🎯 Dijkstra's Algorithm
        </h3>
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border-l-4 border-amber-600 mb-6">
          <p className="text-lg text-amber-900 dark:text-amber-100 mb-4">
            Finds shortest path from source to all other vertices in graphs with <strong>non-negative weights</strong>. Uses greedy approach with min-heap.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">1️⃣ Initialize</p>
              <p className="text-xs">Distance to source = 0, others = ∞</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">2️⃣ Pick Min</p>
              <p className="text-xs">Choose unvisited node with min distance</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">3️⃣ Update</p>
              <p className="text-xs">Update neighbor distances if shorter</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <p className="font-bold mb-1">4️⃣ Repeat</p>
              <p className="text-xs">Until all nodes visited</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = new MinPriorityQueue(); // Min heap

    // Initialize distances
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const current = pq.dequeue().element;

        if (visited.has(current)) continue;
        visited.add(current);

        // Update distances to neighbors
        for (let [neighbor, weight] of graph[current]) {
            const distance = distances[current] + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return distances;
}

// Time: O((V + E) log V) with min-heap
// Space: O(V)`}</code>
          </pre>
        </div>
      </div>

      {/* Bellman-Ford */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          🔄 Bellman-Ford Algorithm
        </h3>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            Handles <strong>negative weights</strong> and detects negative cycles. Slower than Dijkstra but more versatile.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold mb-2">Key Idea</p>
            <p className="text-sm">Relax all edges V-1 times. If you can still relax in Vth iteration → negative cycle exists!</p>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function bellmanFord(graph, V, start) {
    const distances = new Array(V).fill(Infinity);
    distances[start] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of graph.edges) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    // Check for negative cycles
    for (let [u, v, weight] of graph.edges) {
        if (distances[u] + weight < distances[v]) {
            console.log("Negative cycle detected!");
            return null;
        }
    }

    return distances;
}

// Time: O(V × E)
// Space: O(V)`}</code>
          </pre>
        </div>
      </div>

      {/* Comparison */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Algorithm Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-100 dark:bg-amber-900/30">
                <th className="border border-amber-300 dark:border-amber-700 p-4 text-left">Algorithm</th>
                <th className="border border-amber-300 dark:border-amber-700 p-4 text-center">Time Complexity</th>
                <th className="border border-amber-300 dark:border-amber-700 p-4 text-center">Negative Weights?</th>
                <th className="border border-amber-300 dark:border-amber-700 p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  algo: "Dijkstra",
                  time: "O((V+E) log V)",
                  negative: "❌ No",
                  use: "Non-negative weights, faster",
                },
                {
                  algo: "Bellman-Ford",
                  time: "O(V × E)",
                  negative: "✅ Yes",
                  use: "Negative weights, cycle detection",
                },
                {
                  algo: "Floyd-Warshall",
                  time: "O(V³)",
                  negative: "✅ Yes",
                  use: "All-pairs shortest paths",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-50 dark:hover:bg-amber-900/10">
                  <td className="border border-amber-300 dark:border-amber-700 p-4 font-bold">
                    {row.algo}
                  </td>
                  <td className="border border-amber-300 dark:border-amber-700 p-4 text-center font-mono text-sm">
                    {row.time}
                  </td>
                  <td className="border border-amber-300 dark:border-amber-700 p-4 text-center">
                    {row.negative}
                  </td>
                  <td className="border border-amber-300 dark:border-amber-700 p-4 text-sm">
                    {row.use}
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
