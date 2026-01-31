"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Grid, ArrowRightLeft, Maximize2, Hash, Zap, Search, Layers, Briefcase, RefreshCw, ChevronRight } from "lucide-react";

export default function ArrayPatterns() {
  const patterns = [
    {
      title: "Two Pointers",
      description: "Traverse array from different positions (ends or same direction).",
      icon: ArrowRightLeft,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Easy-Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Sorted arrays", "Pair sums", "Palindromes", "In-place removal"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase">
            <ChevronRight size={10} /> 3Sum
          </div>
        </div>
      )
    },
    {
      title: "Sliding Window",
      description: "Maintain sub-range that satisfies a condition.",
      icon: Maximize2,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Subarrays", "Substrings", "Contiguous data"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase">
            <ChevronRight size={10} /> Max Sum Subarray
          </div>
        </div>
      )
    },
    {
      title: "Prefix Sum",
      description: "Precompute cumulative sums for O(1) range queries.",
      icon: Hash,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Easy-Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Range sum queries", "Subarray sum equals K"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase">
            <ChevronRight size={10} /> Range Sum Query
          </div>
        </div>
      )
    },
    {
      title: "Kadane's Algo",
      description: "Iterative dynamic programming for subarray sums.",
      icon: Zap,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Maximum subarray sum", "Maximum product"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase">
            <ChevronRight size={10} /> Maximum Subarray
          </div>
        </div>
      )
    },
    {
      title: "Binary Search",
      description: "Halve search space each step.",
      icon: Search,
      color: "cyan",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[8px] font-black uppercase text-cyan-400 mb-2">Medium-Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Sorted data", "Optimization (Min/Max of Max/Min)"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-cyan-400 uppercase">
            <ChevronRight size={10} /> Search in Rotated Array
          </div>
        </div>
      )
    },
    {
      title: "HashMap/Freq",
      description: "Trade space for time using frequency counters.",
      icon: Briefcase,
      color: "indigo",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[8px] font-black uppercase text-indigo-400 mb-2">Easy-Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Element frequency", "Finding pairs (O(1) lookup)"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-indigo-400 uppercase">
            <ChevronRight size={10} /> Two Sum
          </div>
        </div>
      )
    },
    {
      title: "Merge Intervals",
      description: "Sort and compare interval boundaries.",
      icon: Layers,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Time scheduling", "Overlapping ranges"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase">
            <ChevronRight size={10} /> Merge Intervals
          </div>
        </div>
      )
    },
    {
      title: "Monotonic Stack",
      description: "Stack that maintains elements in increasing/decreasing order.",
      icon: Layers,
      color: "orange",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-orange-500/10 border border-orange-500/20 text-[8px] font-black uppercase text-orange-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Next greater element", "Nearest smaller"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-orange-400 uppercase">
            <ChevronRight size={10} /> Daily Temperatures
          </div>
        </div>
      )
    },
    {
      title: "Sorting + Greedy",
      description: "Sort first to simplify decision making.",
      icon: RefreshCw,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Minimizing/Maximizing costs", "Meeting scheduling"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase">
            <ChevronRight size={10} /> Meeting Rooms
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Interview Patterns" 
        description="9 essential techniques to solve 90% of array problems."
        icon={Grid} 
        color="purple" 
      />

      <ConceptGrid items={patterns} columns={3} />

      {/* Decision Logic Card */}
      <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <h3 className="text-2xl font-black text-white mb-8">How to Choose?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { q: "Sorted?", a: "Two Pointers / Binary Search" },
            { q: "Subarray?", a: "Sliding Window / Prefix Sum" },
            { q: "Pair/Sum?", a: "HashMap / Two Pointers" },
            { q: "Intervals?", a: "Merge Intervals / Sorting" },
            { q: "Next Greater?", a: "Monotonic Stack" },
            { q: "Max Subarray?", a: "Kadane's Algorithm" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5">
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
              <div className="text-xs font-bold text-blue-400">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}
