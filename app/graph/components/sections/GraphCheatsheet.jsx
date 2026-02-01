"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { FileText, Zap, HelpCircle, CheckCircle2, Workflow, GitBranch, Map, Grid3X3, Layers } from "lucide-react";

export default function GraphCheatsheet() {
  const decisionItems = [
    { title: "Shortest path (unweighted)?", description: "BFS (Level Order)", icon: Workflow, color: "cyan" },
    { title: "Shortest path (weighted)?", description: "Dijkstra (Greedy)", icon: Map, color: "amber" },
    { title: "Negative weights?", description: "Bellman-Ford", icon: Zap, color: "rose" },
    { title: "Detect cycles?", description: "DFS (Recursion Stack)", icon: GitBranch, color: "purple" },
    { title: "Connect all nodes cheaply?", description: "Prim's or Kruskal's (MST)", icon: Layers, color: "emerald" },
    { title: "Order dependencies?", description: "Topological Sort", icon: Workflow, color: "violet" }
  ];

  const commonPatterns = [
    { title: "Connected Components", description: "Use DFS or BFS. Count new traversal starts.", icon: CheckCircle2, color: "blue" },
    { title: "Bipartite Check", description: "Use BFS to color with 2 colors. Check adjacent nodes.", icon: CheckCircle2, color: "emerald" },
    { title: "Grid Problems", description: "Treat grid as a graph. Use BFS for shortest path.", icon: Grid3X3, color: "orange" },
    { title: "Island Counting", description: "Sink found '1's using DFS/BFS and count.", icon: CheckCircle2, color: "cyan" }
  ];

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for algorithms and complexity."
        icon={FileText} 
        color="cyan" 
      />

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

      {/* Which Algorithm? */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <HelpCircle size={24} className="text-blue-400" /> Which Algorithm?
        </h3>
        <ConceptGrid items={decisionItems} columns={2} variant="horizontal" />
      </div>

      {/* Common Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" /> Common Patterns
        </h3>
        <ConceptGrid items={commonPatterns} columns={2} />
      </div>
    </PerspectiveCard>
  );
}