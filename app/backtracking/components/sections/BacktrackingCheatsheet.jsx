"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { FileText, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function BacktrackingCheatsheet() {
  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for complexity and implementation."
        icon={FileText} 
        color="purple" 
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
                <th className="px-6 py-4">Branching Factor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { type: "Permutations", time: "O(n × n!)", space: "O(n)", factor: "n, n-1, ..." },
                { type: "Subsets/Comb.", time: "O(n × 2ⁿ)", space: "O(n)", factor: "2 (Include/Exclude)" },
                { type: "N-Queens", time: "O(n!)", space: "O(n)", factor: "n (columns)" },
                { type: "Sudoku", time: "O(9ᵐ)", space: "O(m)", factor: "9 (digits)" },
                { type: "Word Search", time: "O(N × 3ᴸ)", space: "O(L)", factor: "3 (directions)" },
                { type: "Hamiltonian", time: "O(n!)", space: "O(n)", factor: "n (neighbors)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.type}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.time}</td>
                  <td className="px-6 py-4 text-center font-mono text-indigo-400">{row.space}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{row.factor}</td>
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
            { q: "Forgot to Backtrack?", a: "Undo changes (pop/remove) after recursion.", color: "rose" },
            { q: "Reference Issues?", a: "Pass copies of arrays/objects (e.g. [...path]).", color: "orange" },
            { q: "Base Case Missing?", a: "Infinite recursion. Check termination.", color: "red" },
            { q: "Inefficient?", a: "Add pruning (return early if invalid).", color: "amber" },
            { q: "Wrong State?", a: "Ensure state is consistent before/after calls.", color: "purple" },
            { q: "Duplicates?", a: "Sort input or use Set for unique results.", color: "blue" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 rounded-xl flex flex-col`}>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.q}</span>
               <span className={`text-sm font-bold text-${item.color}-400`}>{item.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Template Checklist */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" /> Implementation Checklist
        </h3>
        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
           <ul className="space-y-3">
             <li className="flex items-center gap-3 text-slate-300 text-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
               <strong>Base Case:</strong> Is the goal reached? (Add to solution)
             </li>
             <li className="flex items-center gap-3 text-slate-300 text-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
               <strong>Constraint Check:</strong> Is the current state valid? (Pruning)
             </li>
             <li className="flex items-center gap-3 text-slate-300 text-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
               <strong>Make Choice:</strong> Add element / mark visited.
             </li>
             <li className="flex items-center gap-3 text-slate-300 text-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
               <strong>Recursive Call:</strong> Move to next step (index + 1).
             </li>
             <li className="flex items-center gap-3 text-slate-300 text-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
               <strong>Undo Choice:</strong> Remove element / unmark visited (Backtrack).
             </li>
           </ul>
        </div>
      </div>
    </PerspectiveCard>
  );
}