"use client";
import { motion } from "framer-motion";

export default function MSTSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
          <span className="text-4xl">🌲</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Minimum Spanning Tree (MST)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Connect all vertices with minimum total edge weight
          </p>
        </div>
      </div>

      {/* What is MST */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            🎯 What is MST?
          </h3>
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            A spanning tree that connects all vertices with the <strong>minimum possible total edge weight</strong>. No cycles, exactly V-1 edges.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Spanning</p>
              <p>Connects all vertices</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Tree</p>
              <p>No cycles, V-1 edges</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Minimum</p>
              <p>Lowest total weight</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kruskal's Algorithm */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          ⚡ Kruskal's Algorithm
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-6">
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            <strong>Edge-based greedy approach:</strong> Sort edges by weight, add them one by one if they don't create a cycle.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Sort all edges by weight (ascending)</div>
            <div>2. Pick smallest edge that doesn't form cycle</div>
            <div>3. Use Union-Find to detect cycles</div>
            <div>4. Repeat until V-1 edges selected</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            return true;
        }
        return false;
    }
}

function kruskal(V, edges) {
    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);

    const uf = new UnionFind(V);
    const mst = [];
    let totalWeight = 0;

    for (let [u, v, weight] of edges) {
        if (uf.union(u, v)) {
            mst.push([u, v, weight]);
            totalWeight += weight;

            if (mst.length === V - 1) break;
        }
    }

    return { mst, totalWeight };
}

// Time: O(E log E) for sorting
// Space: O(V)`}</code>
          </pre>
        </div>
      </div>

      {/* Prim's Algorithm */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">
          🌿 Prim's Algorithm
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-6">
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            <strong>Vertex-based greedy approach:</strong> Start from a vertex, grow MST by adding cheapest edge to new vertex.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Start from any vertex</div>
            <div>2. Add cheapest edge to unvisited vertex</div>
            <div>3. Mark vertex as visited</div>
            <div>4. Repeat until all vertices included</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function prims(graph, V) {
    const visited = new Set();
    const pq = new MinPriorityQueue();
    const mst = [];
    let totalWeight = 0;

    // Start from vertex 0
    visited.add(0);
    for (let [neighbor, weight] of graph[0]) {
        pq.enqueue([0, neighbor, weight], weight);
    }

    while (!pq.isEmpty() && visited.size < V) {
        const { element: [u, v, weight] } = pq.dequeue();

        if (visited.has(v)) continue;

        visited.add(v);
        mst.push([u, v, weight]);
        totalWeight += weight;

        // Add edges from newly added vertex
        for (let [neighbor, edgeWeight] of graph[v]) {
            if (!visited.has(neighbor)) {
                pq.enqueue([v, neighbor, edgeWeight], edgeWeight);
            }
        }
    }

    return { mst, totalWeight };
}

// Time: O((V + E) log V) with min-heap
// Space: O(V + E)`}</code>
          </pre>
        </div>
      </div>

      {/* Comparison */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Kruskal vs Prim
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 text-lg">
              Kruskal's Algorithm
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Edge-based (sorts all edges)</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Better for sparse graphs</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Uses Union-Find</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>O(E log E) time</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 text-lg">
              Prim's Algorithm
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Vertex-based (grows from start)</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Better for dense graphs</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Uses Min-Heap</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>O((V+E) log V) time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
