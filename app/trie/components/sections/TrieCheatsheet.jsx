"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { FileText, Zap, HelpCircle, CheckCircle2, Search, Type, Globe, ListOrdered, Box, Hash } from "lucide-react";

export default function TrieCheatsheet() {
  const trieUseCases = [
    { title: "Autocomplete?", description: "Yes - Fast prefix lookup.", icon: Search, color: "emerald" },
    { title: "Spell Checker?", description: "Yes - Dictionary validation.", icon: Type, color: "blue" },
    { title: "IP Routing?", description: "Yes - Longest prefix match.", icon: Globe, color: "purple" },
    { title: "Sort Strings?", description: "Yes - DFS gives sorted order.", icon: ListOrdered, color: "pink" },
    { title: "Small Alphabet?", description: "Yes - Array[26] is fast.", icon: Box, color: "amber" },
    { title: "Large Alphabet?", description: "Maybe - Use HashMap node.", icon: Hash, color: "cyan" }
  ];

  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Cheatsheet" 
        description="Quick reference for complexity and usage."
        icon={FileText} 
        color="orange" 
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
                <th className="px-6 py-4 text-center">Time</th>
                <th className="px-6 py-4 text-center">Space</th>
                <th className="px-6 py-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { op: "Insert", time: "O(m)", space: "O(m)", note: "m = word length" },
                { op: "Search", time: "O(m)", space: "O(1)", note: "m = word length" },
                { op: "StartsWith", time: "O(m)", space: "O(1)", note: "m = prefix length" },
                { op: "Space (Total)", time: "-", space: "O(N × m)", note: "N = num words, m = avg len" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.op}</td>
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
        <ConceptGrid items={trieUseCases} columns={2} variant="horizontal" />
      </div>

      {/* Comparison: Trie vs HashMap */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-purple-400" /> Trie vs HashMap
        </h3>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
           <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center">Trie</th>
                <th className="px-6 py-4 text-center">HashMap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { feat: "Prefix Search", trie: "O(m) - Very Fast", hash: "O(N × m) - Slow" },
                { feat: "Exact Search", trie: "O(m)", hash: "O(m) (avg)" },
                { feat: "Space", trie: "O(N × m) - Optimized", hash: "O(N × m) - Duplicates" },
                { feat: "Sorting", trie: "Automatic (DFS)", hash: "Need to sort keys" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.feat}</td>
                  <td className="px-6 py-4 text-center text-emerald-400">{row.trie}</td>
                  <td className="px-6 py-4 text-center text-rose-400">{row.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}