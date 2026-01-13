"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { ModuleComplete } from "@/app/components/common/algorithm";
import { FileText, Code2, Zap, AlertTriangle, Lightbulb, Target, ArrowRight } from "lucide-react";

export default function ArrayCheatsheet() {
  const snippets = [
    { 
      title: "Reverse Array", 
      code: `function reverse(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
}`
    },
    { 
      title: "Find Max/Min", 
      code: `function findMaxMin(arr) {
  let max = arr[0], min = arr[0];
  for (let x of arr) {
    max = Math.max(max, x);
    min = Math.min(min, x);
  }
  return [max, min];
}`
    },
    { 
      title: "Remove Duplicates", 
      code: `function removeDuplicates(arr) {
  const seen = new Set();
  return arr.filter(x => {
    if (seen.has(x)) return false;
    seen.add(x);
    return true;
  });
}`
    },
    { 
      title: "Rotate Array", 
      code: `function rotate(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
}`
    }
  ];

  return (
    <PerspectiveCard color="emerald">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-lg">
          <FileText size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Array Cheatsheet</h2>
          <p className="text-slate-400 font-medium">Patterns, complexities, and quick reference formulas.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Pattern Recognition */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <h3 className="text-xl font-black text-blue-400 mb-6 flex items-center gap-3">
            <Target size={20} /> Pattern Recognition
          </h3>
          <ul className="space-y-3">
            {[
              { q: "Sorted?", a: "Binary Search / Two Pointers" },
              { q: "Find Pair?", a: "HashMap / Two Pointers" },
              { q: "Subarray?", a: "Sliding Window / Prefix Sum" },
              { q: "Next Greater?", a: "Monotonic Stack" },
              { q: "Intervals?", a: "Sort + Merge" },
              { q: "Max Subarray?", a: "Kadane's" }
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.q}</span>
                <span className="text-[11px] font-bold text-slate-300">{item.a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complexity Guide */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <h3 className="text-xl font-black text-amber-400 mb-6 flex items-center gap-3">
            <Zap size={20} /> Common Complexities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { op: "Access", val: "O(1)" },
              { op: "Search", val: "O(n)" },
              { op: "Sorted Search", val: "O(log n)" },
              { op: "Insert/Delete", val: "O(n)" },
              { op: "Sort", val: "O(n log n)" },
              { op: "Nested Loops", val: "O(n²)" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-tight mb-1">{item.op}</span>
                <span className="text-xs font-black text-white font-mono">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Cases */}
        <div className="bg-rose-500/5 border border-rose-500/20 p-8 rounded-[2rem]">
          <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-3">
            <AlertTriangle size={20} /> Edge Cases to Check
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {["Empty array []", "Single element [x]", "All same [1,1,1]", "Negative numbers", "Integer overflow", "Duplicates"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <div className="w-1 h-1 rounded-full bg-rose-500" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-[2rem]">
          <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
            <Lightbulb size={20} /> Interview Tips
          </h3>
          <ul className="space-y-3">
            {[
              "Always ask about duplicates",
              "Discuss brute force first, then optimize",
              "Check for integer overflow in sums",
              "Explain approach before coding",
              "Dry run with small test cases"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-slate-400 leading-relaxed">
                <ArrowRight size={10} className="text-emerald-500 shrink-0 mt-1" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Snippets */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <Code2 size={24} className="text-indigo-400" /> Essential Code Snippets
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {snippets.map((snip, i) => (
            <div key={i} className="bg-slate-900 border border-white/5 rounded-2xl p-5 group hover:border-indigo-500/30 transition-all flex flex-col">
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">{snip.title}</div>
              <div className="bg-black/40 rounded-lg border border-white/5 p-4 overflow-x-auto flex-1">
                <pre className="text-xs font-mono text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                  <code>{snip.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleComplete 
        title="Arrays Mastery Complete" 
        description="You've mastered contiguous memory, O(1) access, and the 9 critical interview patterns. You are now ready for Linked Lists."
        nextModuleText="Start Linked Lists" 
        nextModuleLink="/linked-list" 
        color="emerald" 
      />
    </PerspectiveCard>
  );
}
