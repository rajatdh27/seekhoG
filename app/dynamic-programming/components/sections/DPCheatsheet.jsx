"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { FileText, Zap, HelpCircle, CheckCircle2 } from "lucide-react";

export default function DPCheatsheet() {
  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for patterns and complexity."
        icon={FileText} 
        color="indigo" 
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
                <th className="px-6 py-4">Problem Type</th>
                <th className="px-6 py-4 text-center">Time</th>
                <th className="px-6 py-4 text-center">Space</th>
                <th className="px-6 py-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { type: "1D (Fibonacci)", time: "O(n)", space: "O(1)", note: "Optimized (2 vars)" },
                { type: "1D (Generic)", time: "O(n)", space: "O(n)", note: "Linear table" },
                { type: "2D Grid Paths", time: "O(m*n)", space: "O(n)", note: "Row optimization" },
                { type: "Knapsack 0/1", time: "O(n*W)", space: "O(W)", note: "Pseudo-polynomial" },
                { type: "LCS / Edit Dist.", time: "O(n*m)", space: "O(min(n,m))", note: "Optimized space" },
                { type: "LIS", time: "O(n log n)", space: "O(n)", note: "Binary Search approach" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.type}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.time}</td>
                  <td className="px-6 py-4 text-center font-mono text-indigo-400">{row.space}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Use */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <HelpCircle size={24} className="text-blue-400" /> When to Use?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Optimization?", a: "Min/Max cost, path, or profit", color: "emerald" },
            { q: "Counting?", a: "Number of ways to reach state", color: "blue" },
            { q: "Decision Making?", a: "Yes/No (Can we reach?)", color: "purple" },
            { q: "Dependencies?", a: "Current state depends on past", color: "pink" },
            { q: "Overlapping?", a: "Subproblems repeat often", color: "amber" },
            { q: "Constraints?", a: "Limited capacity/time/moves", color: "cyan" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 rounded-xl flex flex-col`}>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.q}</span>
               <span className={`text-sm font-bold text-${item.color}-400`}>{item.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison: Recursion vs DP */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-purple-400" /> Recursion vs Dynamic Programming
        </h3>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
           <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center">Naive Recursion</th>
                <th className="px-6 py-4 text-center">Dynamic Programming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { feat: "Redundancy", rec: "High (re-calculates)", dp: "None (caches)" },
                { feat: "Time Complexity", rec: "Exponential O(2ⁿ)", dp: "Polynomial O(n²)/O(n)" },
                { feat: "Memory", rec: "Stack Depth O(n)", dp: "Table Size O(n²)/O(n)" },
                { feat: "Approach", rec: "Top-Down", dp: "Top-Down or Bottom-Up" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.feat}</td>
                  <td className="px-6 py-4 text-center font-mono text-rose-400">{row.rec}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.dp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}