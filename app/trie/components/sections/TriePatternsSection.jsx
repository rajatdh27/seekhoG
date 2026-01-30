"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
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
      difficulty: "Easy",
      desc: "Navigate to the node representing the prefix.",
      useWhen: ["Autocomplete", "Starts With", "Counting prefixes"],
      problems: ["Implement Trie", "Search Suggestions System"],
      icon: <Search size={24} />,
      color: "blue"
    },
    {
      title: "DFS on Trie",
      difficulty: "Medium",
      desc: "Traverse the trie to collect or count words.",
      useWhen: ["Get all words", "Lexicographical order", "Wildcard search"],
      problems: ["Word Dictionary", "Design Add and Search Words"],
      icon: <ListTree size={24} />,
      color: "emerald"
    },
    {
      title: "Backtracking + Trie",
      difficulty: "Hard",
      desc: "Use Trie to prune search space in backtracking.",
      useWhen: ["Grid search", "Boggle", "Word Search II"],
      problems: ["Word Search II", "Concatenated Words"],
      icon: <Grid size={24} />,
      color: "purple"
    },
    {
      title: "Bitwise Trie",
      difficulty: "Hard",
      desc: "Store binary representation of numbers.",
      useWhen: ["XOR problems", "Maximum XOR pair"],
      problems: ["Maximum XOR of Two Numbers"],
      icon: <Binary size={24} />,
      color: "amber"
    },
    {
      title: "Palindrome Pairs",
      difficulty: "Hard",
      desc: "Store words and their reverses to find pairs.",
      useWhen: ["Palindrome problems", "Concatenation checks"],
      problems: ["Palindrome Pairs"],
      icon: <Repeat size={24} />,
      color: "rose"
    }
  ];

  return (
    <PerspectiveCard color="orange">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
          <Grid size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Common Patterns</h2>
          <p className="text-slate-400 font-medium">Standard templates for solving Trie problems.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {patterns.map((pattern, i) => (
          <div key={i} className={`bg-slate-900/60 p-6 rounded-[2rem] border border-${pattern.color}-500/20 hover:border-${pattern.color}-500/40 transition-all group relative overflow-hidden flex flex-col`}>
            <div className={`absolute top-0 right-0 p-4 text-${pattern.color}-500 opacity-5 group-hover:opacity-10 transition-opacity`}>
              {pattern.icon}
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className={`px-2 py-1 rounded-md bg-${pattern.color}-500/10 border border-${pattern.color}-500/20 text-[8px] font-black uppercase text-${pattern.color}-400`}>
                {pattern.difficulty}
              </div>
            </div>

            <h3 className="text-lg font-black text-white mb-2">{pattern.title}</h3>
            <p className="text-slate-500 text-[10px] font-bold leading-relaxed mb-4 flex-1">
              {pattern.desc}
            </p>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {pattern.useWhen.map((tag, j) => (
                  <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`flex items-center gap-2 text-[9px] font-black text-${pattern.color}-400 uppercase`}>
                <ArrowRight size={10} /> {pattern.problems[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

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