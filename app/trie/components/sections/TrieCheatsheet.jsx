"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { FileText, Zap, HelpCircle, CheckCircle2 } from "lucide-react";

export default function TrieCheatsheet() {
  return (
    <PerspectiveCard color="orange">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
          <FileText size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Cheatsheet</h2>
          <p className="text-slate-400 font-medium">Quick reference for complexity and usage.</p>
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
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Autocomplete?", a: "Yes - Fast prefix lookup", color: "emerald" },
            { q: "Spell Checker?", a: "Yes - Dictionary validation", color: "blue" },
            { q: "IP Routing?", a: "Yes - Longest prefix match", color: "purple" },
            { q: "Sort Strings?", a: "Yes - DFS gives sorted order", color: "pink" },
            { q: "Small Alphabet?", a: "Yes - Array[26] is fast", color: "amber" },
            { q: "Large Alphabet?", a: "Maybe - Use HashMap node", color: "cyan" }
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 rounded-xl flex flex-col`}>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.q}</span>
               <span className={`text-sm font-bold text-${item.color}-400`}>{item.a}</span>
            </div>
          ))}
        </div>
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