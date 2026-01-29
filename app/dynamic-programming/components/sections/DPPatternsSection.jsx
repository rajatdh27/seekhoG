"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  Layers, 
  Repeat, 
  GitMerge, 
  Box, 
  ArrowRightLeft, 
  Grid, 
  Maximize2,
  ChevronRight
} from "lucide-react";

export default function DPPatternsSection() {
  const patterns = [
    {
      title: "Fibonacci Style (1D)",
      difficulty: "Easy",
      desc: "State depends on previous k states.",
      useWhen: ["Count ways to reach", "Jump games"],
      problems: ["Climbing Stairs", "House Robber"],
      icon: <Repeat size={24} />,
      color: "blue"
    },
    {
      title: "0/1 Knapsack",
      difficulty: "Medium",
      desc: "Choose items with weight/value constraints.",
      useWhen: ["Subset sum", "Partition equal subset"],
      problems: ["0/1 Knapsack", "Target Sum"],
      icon: <Box size={24} />,
      color: "emerald"
    },
    {
      title: "Unbounded Knapsack",
      difficulty: "Medium",
      desc: "Infinite supply of items.",
      useWhen: ["Coin change", "Rod cutting"],
      problems: ["Coin Change", "Rod Cutting"],
      icon: <Layers size={24} />,
      color: "purple"
    },
    {
      title: "Longest Common Subseq.",
      difficulty: "Medium",
      desc: "Compare two strings/sequences.",
      useWhen: ["String editing", "Diff utility"],
      problems: ["LCS", "Edit Distance"],
      icon: <ArrowRightLeft size={24} />,
      color: "amber"
    },
    {
      title: "Longest Increasing Subseq.",
      difficulty: "Medium",
      desc: "Find longest subsequence with property.",
      useWhen: ["Sequence order", "Building bridges"],
      problems: ["LIS", "Russian Doll Envelopes"],
      icon: <Maximize2 size={24} />,
      color: "rose"
    },
    {
      title: "Grid Paths (2D)",
      difficulty: "Medium",
      desc: "Move through a grid with constraints.",
      useWhen: ["Robot paths", "Min path sum"],
      problems: ["Unique Paths", "Min Path Sum"],
      icon: <Grid size={24} />,
      color: "cyan"
    }
  ];

  return (
    <PerspectiveCard color="emerald">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
          <Layers size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Common Patterns</h2>
          <p className="text-slate-400 font-medium">Recognize these structures to solve 90% of DP problems.</p>
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
                <ChevronRight size={10} /> {pattern.problems[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decision Logic Card */}
      <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
        <h3 className="text-2xl font-black text-white mb-8">How to Choose?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { q: "Choices & Constraints?", a: "Knapsack (0/1 or Unbounded)" },
            { q: "Two Strings?", a: "Longest Common Subsequence" },
            { q: "Grid Movement?", a: "Grid Paths (2D DP)" },
            { q: "Sorted Subsequence?", a: "Longest Increasing Subsequence" },
            { q: "Count Ways?", a: "Fibonacci Style (sum previous)" },
            { q: "Merge Intervals?", a: "Matrix Chain Multiplication" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5">
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
              <div className="text-xs font-bold text-emerald-400">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}