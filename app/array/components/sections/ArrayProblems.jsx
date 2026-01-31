"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { Trophy, Code2, CheckCircle2, ChevronDown, ChevronUp, Star } from "lucide-react";

export default function ArrayProblems() {
  const [activeProblem, setActiveProblem] = useState(null);
  const [filterDifficulty, setFilterDifficulty] = useState("all");

  const problems = [
    { id: 1, title: "Two Sum II", difficulty: "Easy", pattern: "Two Pointers", desc: "Find two numbers in sorted array that add to target.", key: "Two pointers from both ends (L, R).", time: "O(n)", space: "O(1)" },
    { id: 2, title: "Remove Duplicates", difficulty: "Easy", pattern: "Two Pointers", desc: "Remove duplicates in-place from sorted array.", key: "Slow/fast pointers strategy.", time: "O(n)", space: "O(1)" },
    { id: 3, title: "Move Zeroes", difficulty: "Easy", pattern: "Two Pointers", desc: "Move all 0's to end while maintaining relative order.", key: "Partition with read/write pointers.", time: "O(n)", space: "O(1)" },
    { id: 4, title: "Squares of Sorted Array", difficulty: "Easy", pattern: "Two Pointers", desc: "Return sorted array of squares of each number.", key: "Compare squares from both ends, fill result from back.", time: "O(n)", space: "O(n)" },
    { id: 5, title: "3Sum", difficulty: "Medium", pattern: "Two Pointers", desc: "Find all unique triplets that sum to zero.", key: "Sort + Fix one element, Two Pointers for remaining.", time: "O(n²)", space: "O(1) (excluding output)" },
    { id: 6, title: "Container With Most Water", difficulty: "Medium", pattern: "Two Pointers", desc: "Find two lines that together with x-axis forms container with max water.", key: "Two pointers, move the smaller height inward.", time: "O(n)", space: "O(1)" },
    { id: 7, title: "Max Sum Subarray", difficulty: "Easy", pattern: "Sliding Window", desc: "Find contiguous subarray with max sum (fixed k).", key: "Calculate window sum, slide by adding new and removing old.", time: "O(n)", space: "O(1)" },
    { id: 8, title: "Longest Substring without repeating", difficulty: "Medium", pattern: "Sliding Window", desc: "Find length of longest substring without repeats.", key: "Dynamic window, shrink left when character repeats.", time: "O(n)", space: "O(min(m, n))" },
    { id: 9, title: "Maximum Subarray", difficulty: "Medium", pattern: "Kadane's", desc: "Find contiguous subarray with largest sum.", key: "currSum = max(num, currSum + num).", time: "O(n)", space: "O(1)" },
    { id: 10, title: "Trapping Rain Water", difficulty: "Hard", pattern: "Two Pointers", desc: "Compute how much water it can trap after raining.", key: "Maintain leftMax and rightMax using two pointers.", time: "O(n)", space: "O(1)" },
    { id: 11, title: "Merge Intervals", difficulty: "Medium", pattern: "Intervals", desc: "Merge all overlapping intervals.", key: "Sort by start time, merge if overlap found.", time: "O(n log n)", space: "O(n)" },
    { id: 12, title: "Product Except Self", difficulty: "Medium", pattern: "Prefix Sum", desc: "Calculate product of all elements except current.", key: "Compute prefix products then suffix products.", time: "O(n)", space: "O(1)" }
  ];

  const filteredProblems = filterDifficulty === "all" 
    ? problems 
    : problems.filter(p => p.difficulty.toLowerCase() === filterDifficulty.toLowerCase());

  const getDiffStyle = (diff) => {
    switch (diff) {
      case "Easy": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "Medium": return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Hard": return "text-rose-400 bg-rose-500/10 border-rose-500/20";
      default: return "";
    }
  };

  return (
    <PerspectiveCard color="orange">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <SectionHeader 
          title="Must-Know Problems" 
          description="118+ curated problems to build intuition."
          icon={Trophy} 
          color="orange" 
          className="mb-0"
        />

        <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5 h-fit">
          {["all", "easy", "medium", "hard"].map(d => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filterDifficulty === d ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-white"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredProblems.map((p) => (
          <div 
            key={p.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeProblem === p.id ? "bg-slate-900 border-orange-500/30 shadow-2xl" : "bg-slate-900/40 border-white/5 hover:border-white/10"}`}
          >
            <div 
              className="p-5 cursor-pointer flex items-center justify-between group"
              onClick={() => setActiveProblem(activeProblem === p.id ? null : p.id)}
            >
              <div className="flex items-center gap-4">
                <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border ${getDiffStyle(p.difficulty)}`}>
                  {p.difficulty}
                </span>
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">#{p.id} {p.title}</h3>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest bg-white/5 px-2 rounded-md border border-white/5 hidden sm:block">{p.pattern}</div>
              </div>
              {activeProblem === p.id ? <ChevronUp size={18} className="text-orange-500" /> : <ChevronDown size={18} className="text-slate-600 group-hover:text-slate-400" />}
            </div>

            {activeProblem === p.id && (
              <div className="px-5 pb-6 pt-0 border-t border-white/5">
                <div className="mt-5 space-y-5">
                  <div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Star size={10} /> Description</div>
                    <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-[9px] font-black text-orange-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                      <Code2 size={12} /> Key Insight
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-bold italic">
                      &quot;{p.key}&quot;
                    </p>
                  </div>

                  <div className="flex gap-6 pt-2">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400 tracking-widest">
                      <CheckCircle2 size={12} /> Time: {p.time}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 tracking-widest">
                      <CheckCircle2 size={12} /> Space: {p.space}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-slate-950/50 border border-white/5 rounded-2xl text-center">
        <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
          📚 Complete these 12 first to master the core patterns. <br/>
          The remaining 106+ follow these same principles.
        </p>
      </div>
    </PerspectiveCard>
  );
}
