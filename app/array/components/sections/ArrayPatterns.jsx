"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Grid, ArrowRightLeft, Maximize2, Hash, Zap, Search, Layers, Briefcase, RefreshCw, ChevronRight } from "lucide-react";

export default function ArrayPatterns() {
  const patterns = [
    {
      title: "Two Pointers",
      difficulty: "Easy-Medium",
      desc: "Traverse array from different positions (ends or same direction).",
      useWhen: ["Sorted arrays", "Pair sums", "Palindromes", "In-place removal"],
      problems: ["3Sum", "Container With Most Water"],
      icon: <ArrowRightLeft size={24} />,
      color: "blue"
    },
    {
      title: "Sliding Window",
      difficulty: "Medium",
      desc: "Maintain sub-range that satisfies a condition.",
      useWhen: ["Subarrays", "Substrings", "Contiguous data"],
      problems: ["Max Sum Subarray", "Longest Substring"],
      icon: <Maximize2 size={24} />,
      color: "emerald"
    },
    {
      title: "Prefix Sum",
      difficulty: "Easy-Medium",
      desc: "Precompute cumulative sums for O(1) range queries.",
      useWhen: ["Range sum queries", "Subarray sum equals K"],
      problems: ["Range Sum Query", "Subarray Sums"],
      icon: <Hash size={24} />,
      color: "purple"
    },
    {
      title: "Kadane's Algo",
      difficulty: "Medium",
      desc: "Iterative dynamic programming for subarray sums.",
      useWhen: ["Maximum subarray sum", "Maximum product"],
      problems: ["Maximum Subarray"],
      icon: <Zap size={24} />,
      color: "amber"
    },
    {
      title: "Binary Search",
      difficulty: "Medium-Hard",
      desc: "Halve search space each step.",
      useWhen: ["Sorted data", "Optimization (Min/Max of Max/Min)"],
      problems: ["Search in Rotated Array", "Peak Element"],
      icon: <Search size={24} />,
      color: "cyan"
    },
    {
      title: "HashMap/Freq",
      difficulty: "Easy-Medium",
      desc: "Trade space for time using frequency counters.",
      useWhen: ["Element frequency", "Finding pairs (O(1) lookup)"],
      problems: ["Two Sum", "Majority Element"],
      icon: <Briefcase size={24} />,
      color: "indigo"
    },
    {
      title: "Merge Intervals",
      difficulty: "Medium",
      desc: "Sort and compare interval boundaries.",
      useWhen: ["Time scheduling", "Overlapping ranges"],
      problems: ["Merge Intervals", "Insert Interval"],
      icon: <Layers size={24} />,
      color: "rose"
    },
    {
      title: "Monotonic Stack",
      difficulty: "Hard",
      desc: "Stack that maintains elements in increasing/decreasing order.",
      useWhen: ["Next greater element", "Nearest smaller"],
      problems: ["Daily Temperatures", "Next Greater Element"],
      icon: <Layers size={24} />,
      color: "orange"
    },
    {
      title: "Sorting + Greedy",
      difficulty: "Medium",
      desc: "Sort first to simplify decision making.",
      useWhen: ["Minimizing/Maximizing costs", "Meeting scheduling"],
      problems: ["Meeting Rooms", "Interval List Intersection"],
      icon: <RefreshCw size={24} />,
      color: "blue"
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
          <Grid size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Interview Patterns</h2>
          <p className="text-slate-400 font-medium">9 essential techniques to solve 90% of array problems.</p>
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
