"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { FileText, Zap, AlertTriangle, CheckCircle2, RotateCcw, Copy, Target, ShieldAlert, ListChecks, Plus, ArrowRight } from "lucide-react";

export default function BacktrackingCheatsheet() {
  const pitfalls = [
    { title: "Forgot to Backtrack?", description: "Undo changes (pop/remove) after recursion.", icon: RotateCcw, color: "rose" },
    { title: "Reference Issues?", description: "Pass copies of arrays/objects (e.g. [...path]).", icon: Copy, color: "orange" },
    { title: "Base Case Missing?", description: "Infinite recursion. Check termination.", icon: ShieldAlert, color: "red" },
    { title: "Inefficient?", description: "Add pruning (return early if invalid).", icon: Target, color: "amber" },
    { title: "Wrong State?", description: "Ensure state is consistent before/after calls.", icon: AlertTriangle, color: "purple" },
    { title: "Duplicates?", description: "Sort input or use Set for unique results.", icon: Copy, color: "blue" }
  ];

  const checklist = [
    { title: "Base Case", description: "Is the goal reached? Add to solution.", icon: Target, color: "fuchsia" },
    { title: "Constraint Check", description: "Is the current state valid? Prune early.", icon: ShieldAlert, color: "fuchsia" },
    { title: "Make Choice", description: "Add element or mark as visited.", icon: Plus, color: "fuchsia" },
    { title: "Recursive Call", description: "Move to the next step (e.g. index + 1).", icon: ArrowRight, color: "fuchsia" },
    { title: "Undo Choice", description: "Remove element (Backtrack).", icon: RotateCcw, color: "fuchsia" }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Backtracking Cheatsheet" 
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
        <ConceptGrid items={pitfalls} columns={2} variant="horizontal" />
      </div>

      {/* Template Checklist */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-400" /> Implementation Checklist
        </h3>
        <ConceptGrid items={checklist} columns={1} variant="horizontal" />
      </div>
    </PerspectiveCard>
  );
}