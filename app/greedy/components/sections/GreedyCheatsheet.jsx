"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { FileText, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function GreedyCheatsheet() {
  return (
    <PerspectiveCard color="violet">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for complexity and strategies."
        icon={FileText} 
        color="violet" 
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
                <th className="px-6 py-4">Problem</th>
                <th className="px-6 py-4 text-center">Time</th>
                <th className="px-6 py-4 text-center">Space</th>
                <th className="px-6 py-4">Constraint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { prob: "Activity Selection", time: "O(n log n)", space: "O(1)", const: "Sort by finish time" },
                { prob: "Fractional Knapsack", time: "O(n log n)", space: "O(1)", const: "Sort by ratio" },
                { prob: "Huffman Coding", time: "O(n log n)", space: "O(n)", const: "Min-Heap" },
                { prob: "Job Sequencing", time: "O(n²)", space: "O(n)", const: "Disjoint Set (Opt: O(n log n))" },
                { prob: "Coin Change (Greedy)", time: "O(n)", space: "O(1)", const: "Canonical systems only" },
                { prob: "Dijkstra", time: "O(E log V)", space: "O(V)", const: "Non-negative weights" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.prob}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.time}</td>
                  <td className="px-6 py-4 text-center font-mono text-indigo-400">{row.space}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{row.const}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Pitfalls */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <AlertTriangle size={24} className="text-rose-400" /> Common Pitfalls
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Wrong Sorting Order?", a: "Always double check criterion (Start vs Finish time).", color: "rose" },
            { q: "Non-Canonical Coins?", a: "Greedy fails for random coin systems. Use DP.", color: "orange" },
            { q: "0/1 Knapsack?", a: "Greedy fails if items can't be broken. Use DP.", color: "red" },
            { q: "Negative Edges?", a: "Dijkstra (Greedy) fails. Use Bellman-Ford.", color: "purple" },
            { q: "Longest Path?", a: "Greedy doesn't work for Longest Path in general.", color: "blue" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 rounded-xl flex flex-col`}>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.q}</span>
               <span className={`text-sm font-bold text-${item.color}-400`}>{item.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Greedy vs DP Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" /> Greedy vs Dynamic Programming
        </h3>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
           <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">Greedy Approach</th>
                <th className="px-6 py-4">Dynamic Programming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { feat: "Choice", greedy: "Local Optimal", dp: "Exhaustive / All Cases" },
                { feat: "Backtracking", greedy: "Never", dp: "Allowed (implicitly)" },
                { feat: "Correctness", greedy: "Harder to prove", dp: "Generally guaranteed" },
                { feat: "Efficiency", greedy: "Faster (often O(n log n))", dp: "Slower (often O(n²))" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.feat}</td>
                  <td className="px-6 py-4 text-violet-300">{row.greedy}</td>
                  <td className="px-6 py-4 text-pink-300">{row.dp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}