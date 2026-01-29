"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { FileText, Zap, HelpCircle, CheckCircle2 } from "lucide-react";

export default function GraphCheatsheet() {
  return (
    <PerspectiveCard color="cyan">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20">
          <FileText size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Cheatsheet</h2>
          <p className="text-slate-400 font-medium">Quick reference for algorithms and complexity.</p>
        </div>
      </div>

      {/* Time & Space Complexity */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Zap size={24} className="text-amber-400" /> Complexity Analysis
        </h3>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Algorithm</th>
                <th className="px-6 py-4 text-center">Time</th>
                <th className="px-6 py-4 text-center">Space</th>
                <th className="px-6 py-4">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { algo: "DFS / BFS", time: "O(V + E)", space: "O(V)", use: "Traversal, Cycles" },
                { algo: "Dijkstra", time: "O((V+E)log V)", space: "O(V)", use: "Shortest Path (Pos)" },
                { algo: "Bellman-Ford", time: "O(VE)", space: "O(V)", use: "Shortest Path (Neg)" },
                { algo: "Floyd-Warshall", time: "O(V³)", space: "O(V²)", use: "All-Pairs Shortest Path" },
                { algo: "Kruskal / Prim", time: "O(E log E)", space: "O(V)", use: "Min Spanning Tree" },
                { algo: "Topological Sort", time: "O(V + E)", space: "O(V)", use: "Dependencies (DAG)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.algo}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.time}</td>
                  <td className="px-6 py-4 text-center font-mono text-indigo-400">{row.space}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Use */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <HelpCircle size={24} className="text-blue-400" /> Which Algorithm?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Shortest path (unweighted)?", a: "BFS (Level Order)", color: "cyan" },
            { q: "Shortest path (weighted)?", a: "Dijkstra (Greedy)", color: "amber" },
            { q: "Negative weights?", a: "Bellman-Ford", color: "rose" },
            { q: "Detect cycles?", a: "DFS (Recursion Stack)", color: "purple" },
            { q: "Connect all nodes cheaply?", a: "Prim's or Kruskal's (MST)", color: "emerald" },
            { q: "Order dependencies?", a: "Topological Sort", color: "violet" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 rounded-xl flex flex-col`}>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.q}</span>
               <span className={`text-sm font-bold text-${item.color}-400`}>{item.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" /> Common Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-2">Connected Components</h4>
            <p className="text-sm text-slate-400">Use DFS or BFS to traverse the graph. Count how many times you start a new traversal.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-2">Bipartite Check</h4>
            <p className="text-sm text-slate-400">Use BFS to color nodes with 2 colors. If adjacent nodes have same color, it's not bipartite.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-2">Grid Problems</h4>
            <p className="text-sm text-slate-400">Treat grid as a graph. Cells are nodes, adjacent cells are edges. Use BFS for shortest path.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-2">Island Counting</h4>
            <p className="text-sm text-slate-400">Iterate through grid. If '1' found, increment count and sink the island using DFS/BFS.</p>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}