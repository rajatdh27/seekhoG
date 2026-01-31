"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
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
      description: "State depends on previous k states.",
      icon: Repeat,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Easy</div>
          <div className="flex flex-wrap gap-1.5">
            {["Count ways to reach", "Jump games"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase`}>
            <ChevronRight size={10} /> Climbing Stairs
          </div>
        </div>
      )
    },
    {
      title: "0/1 Knapsack",
      description: "Choose items with weight/value constraints.",
      icon: Box,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Subset sum", "Partition equal subset"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase`}>
            <ChevronRight size={10} /> 0/1 Knapsack
          </div>
        </div>
      )
    },
    {
      title: "Unbounded Knapsack",
      description: "Infinite supply of items.",
      icon: Layers,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Coin change", "Rod cutting"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase`}>
            <ChevronRight size={10} /> Coin Change
          </div>
        </div>
      )
    },
    {
      title: "Longest Common Subseq.",
      description: "Compare two strings/sequences.",
      icon: ArrowRightLeft,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["String editing", "Diff utility"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase`}>
            <ChevronRight size={10} /> LCS
          </div>
        </div>
      )
    },
    {
      title: "Longest Increasing Subseq.",
      description: "Find longest subsequence with property.",
      icon: Maximize2,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Sequence order", "Building bridges"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase`}>
            <ChevronRight size={10} /> LIS
          </div>
        </div>
      )
    },
    {
      title: "Grid Paths (2D)",
      description: "Move through a grid with constraints.",
      icon: Grid,
      color: "cyan",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[8px] font-black uppercase text-cyan-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Robot paths", "Min path sum"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-cyan-400 uppercase`}>
            <ChevronRight size={10} /> Unique Paths
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="Common Patterns" 
        description="Recognize these structures to solve 90% of DP problems."
        icon={Layers} 
        color="emerald" 
      />

      <ConceptGrid items={patterns} columns={3} />

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