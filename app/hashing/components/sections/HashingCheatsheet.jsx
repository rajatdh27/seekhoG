"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { FileText, Zap, HelpCircle, CheckCircle2, Search, Trash2, Layers, BarChart3 } from "lucide-react";

export default function HashingCheatsheet() {
  const hashingUseCases = [
    { title: "Need fast lookups?", description: "HashMap (O(1) avg)", icon: Search, color: "emerald" },
    { title: "Remove duplicates?", description: "HashSet", icon: Trash2, color: "blue" },
    { title: "Count frequencies?", description: "HashMap <Item, Count>", icon: BarChart3, color: "purple" },
    { title: "Find pair sum?", description: "HashMap (Complements)", icon: Search, color: "pink" },
    { title: "Group items?", description: "HashMap <Key, List>", icon: Layers, color: "amber" },
    { title: "Sliding Window?", description: "Map for window counts", icon: Zap, color: "cyan" }
  ];

  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for complexity and usage."
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
                <th className="px-6 py-4">Operation</th>
                <th className="px-6 py-4 text-center">Average</th>
                <th className="px-6 py-4 text-center">Worst</th>
                <th className="px-6 py-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { op: "Insert", avg: "O(1)", worst: "O(n)", note: "Resize or Collision" },
                { op: "Delete", avg: "O(1)", worst: "O(n)", note: "Same as insert" },
                { op: "Search", avg: "O(1)", worst: "O(n)", note: "Depends on Hash Fn" },
                { op: "Space", avg: "O(n)", worst: "O(n)", note: "n = elements" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.op}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.avg}</td>
                  <td className="px-6 py-4 text-center font-mono text-rose-400">{row.worst}</td>
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
        <ConceptGrid items={hashingUseCases} columns={2} variant="horizontal" />
      </div>

      {/* Comparison: Map vs BST */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-purple-400" /> HashMap vs BST
        </h3>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
           <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center">HashMap</th>
                <th className="px-6 py-4 text-center">TreeMap (BST)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { op: "Search/Insert", hash: "O(1) avg", bst: "O(log n)" },
                { op: "Ordered?", hash: "❌ No", bst: "✅ Yes" },
                { op: "Range Query?", hash: "❌ No", bst: "✅ Yes" },
                { op: "Memory", hash: "High (Table)", bst: "Medium (Nodes)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.op}</td>
                  <td className="px-6 py-4 text-center font-mono text-emerald-400">{row.hash}</td>
                  <td className="px-6 py-4 text-center font-mono text-amber-400">{row.bst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}