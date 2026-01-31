"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  Grid, 
  Search, 
  ListTree, 
  Repeat, 
  Binary, 
  ArrowRight
} from "lucide-react";

export default function TriePatternsSection() {
  const patterns = [
    {
      title: "Prefix Matching",
      description: "Navigate to the node representing the prefix.",
      icon: Search,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Easy</div>
          <div className="flex flex-wrap gap-1.5">
            {["Autocomplete", "Starts With", "Counting prefixes"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase`}>
            <ArrowRight size={10} /> Implement Trie
          </div>
        </div>
      )
    },
    {
      title: "DFS on Trie",
      description: "Traverse the trie to collect or count words.",
      icon: ListTree,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Get all words", "Lexicographical order", "Wildcard search"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase`}>
            <ArrowRight size={10} /> Word Dictionary
          </div>
        </div>
      )
    },
    {
      title: "Backtracking + Trie",
      description: "Use Trie to prune search space in backtracking.",
      icon: Grid,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Grid search", "Boggle", "Word Search II"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase`}>
            <ArrowRight size={10} /> Word Search II
          </div>
        </div>
      )
    },
    {
      title: "Bitwise Trie",
      description: "Store binary representation of numbers.",
      icon: Binary,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["XOR problems", "Maximum XOR pair"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase`}>
            <ArrowRight size={10} /> Maximum XOR of Two Numbers
          </div>
        </div>
      )
    },
    {
      title: "Palindrome Pairs",
      description: "Store words and their reverses to find pairs.",
      icon: Repeat,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Palindrome problems", "Concatenation checks"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase`}>
            <ArrowRight size={10} /> Palindrome Pairs
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Common Patterns" 
        description="Standard templates for solving Trie problems."
        icon={Grid} 
        color="orange" 
      />

      <ConceptGrid items={patterns} columns={3} />

      {/* Decision Logic Card */}
      <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
        <h3 className="text-2xl font-black text-white mb-8">How to Choose?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { q: "Prefix Search?", a: "Standard Trie" },
            { q: "Wildcards?", a: "Trie + DFS" },
            { q: "Max XOR?", a: "Bitwise Trie (0/1)" },
            { q: "Grid Words?", a: "Trie + Backtracking" },
            { q: "Word Frequency?", a: "Trie Node Counter" },
            { q: "Longest Word?", a: "DFS on Trie" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5">
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
              <div className="text-xs font-bold text-orange-400">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}