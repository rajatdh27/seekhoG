"use client";
import { motion } from "framer-motion";

export default function TopologicalSortSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">📋</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Topological Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Linear ordering of vertices in Directed Acyclic Graph (DAG)
          </p>
        </div>
      </div>

      {/* What is Topological Sort */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-violet-600">
          <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">
            🎯 What is Topological Sort?
          </h3>
          <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
            A linear ordering of vertices such that for every directed edge (u → v), vertex u comes before v.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold mb-2">Example: Course Prerequisites</p>
            <p className="text-sm">If Calculus requires Algebra, Algebra must come before Calculus in the ordering.</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mt-2">
              Only works for <strong>Directed Acyclic Graphs (DAG)</strong> - no cycles allowed!
            </p>
          </div>
        </div>
      </div>

      {/* DFS-based Approach */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-6">
          🔍 DFS-Based Topological Sort
        </h3>
        <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800 mb-6">
          <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
            Use DFS and add vertices to stack after visiting all neighbors. Pop from stack for topological order.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Run DFS from all unvisited vertices</div>
            <div>2. After visiting all neighbors, push vertex to stack</div>
            <div>3. Pop all vertices from stack → topological order</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function topologicalSortDFS(graph, V) {
    const visited = new Set();
    const stack = [];

    function dfs(vertex) {
        visited.add(vertex);

        // Visit all neighbors
        for (let neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        // Push to stack after visiting all neighbors
        stack.push(vertex);
    }

    // Call DFS for all unvisited vertices
    for (let i = 0; i < V; i++) {
        if (!visited.has(i)) {
            dfs(i);
        }
    }

    // Stack contains topological order (reverse)
    return stack.reverse();
}

// Time: O(V + E)
// Space: O(V)`}</code>
          </pre>
        </div>
      </div>

      {/* Kahn's Algorithm (BFS) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          📊 Kahn's Algorithm (BFS-Based)
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Uses <strong>in-degree</strong> (number of incoming edges). Process vertices with in-degree 0.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Calculate in-degree for all vertices</div>
            <div>2. Add all vertices with in-degree 0 to queue</div>
            <div>3. Process queue: remove vertex, decrease neighbors' in-degree</div>
            <div>4. If neighbor's in-degree becomes 0, add to queue</div>
            <div>5. If processed &lt; V vertices → cycle exists!</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function topologicalSortKahn(graph, V) {
    const inDegree = new Array(V).fill(0);
    const result = [];

    // Calculate in-degree for all vertices
    for (let u = 0; u < V; u++) {
        for (let v of graph[u]) {
            inDegree[v]++;
        }
    }

    // Add all vertices with in-degree 0 to queue
    const queue = [];
    for (let i = 0; i < V; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Process queue
    while (queue.length > 0) {
        const u = queue.shift();
        result.push(u);

        // Decrease in-degree of neighbors
        for (let v of graph[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    // Check if topological sort is possible
    if (result.length !== V) {
        console.log("Cycle detected! Topological sort not possible.");
        return null;
    }

    return result;
}

// Time: O(V + E)
// Space: O(V)`}</code>
          </pre>
        </div>
      </div>

      {/* Applications */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              app: "Course Scheduling",
              desc: "Determine order to take courses with prerequisites",
              icon: "📚",
            },
            {
              app: "Build Systems",
              desc: "Order compilation of dependent modules (Makefile)",
              icon: "🔨",
            },
            {
              app: "Task Scheduling",
              desc: "Schedule tasks with dependencies",
              icon: "📅",
            },
            {
              app: "Package Management",
              desc: "Install packages in correct order (npm, apt)",
              icon: "📦",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.app}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DFS vs Kahn's */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ DFS vs Kahn's Algorithm
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-4 text-lg">
              DFS-Based
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Uses recursion/stack</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Simpler to implement</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>O(V + E) time</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✗</span>
                <span>Doesn't explicitly detect cycles</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-lg">
              Kahn's (BFS-Based)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Uses queue + in-degree</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Explicitly detects cycles</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>O(V + E) time</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>More intuitive for some problems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
