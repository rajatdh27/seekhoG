"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { ArrowUpDown, Timer, Database, Repeat, ChevronRight } from "lucide-react";

export default function HeapSort() {
  const sortingSteps = [
    {
      title: "1. Build a Max Heap",
      desc: "Transform the unsorted input array into a Max Heap. This ensures the largest element is at the root (index 0).",
      complexity: "O(n)"
    },
    {
      title: "2. Swap and Extract",
      desc: "Swap the root (largest element) with the last element of the array. Reduce the heap size by one.",
      complexity: "O(1)"
    },
    {
      title: "3. Restore Heap Property",
      desc: "Heapify the new root to restore the Max Heap property for the remaining elements.",
      complexity: "O(log n)"
    },
    {
      title: "4. Repeat",
      desc: "Continue swapping and heapifying until the heap is empty. The array is now sorted.",
      complexity: "Repeat n times"
    }
  ];

  return (
    <PerspectiveCard color="rose">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 border border-rose-500/20">
          <ArrowUpDown size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Heap Sort Algorithm</h2>
      </div>

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Heap Sort</strong> is a comparison-based sorting technique based on the Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place it at the end.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {sortingSteps.map((step, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-2xl group hover:border-rose-500/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black text-white uppercase tracking-tighter">{step.title}</h3>
                <span className="text-[10px] font-bold text-rose-400 font-mono bg-rose-500/5 px-2 py-1 rounded-lg">
                  {step.complexity}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Complexity Card */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2">
            <Timer size={20} className="text-rose-400" /> Complexity Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Best Case", val: "O(n log n)", color: "blue" },
              { label: "Average Case", val: "O(n log n)", color: "purple" },
              { label: "Worst Case", val: "O(n log n)", color: "rose" }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-${item.color}-500/5 border border-${item.color}-500/20`}>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                <div className={`text-2xl font-black text-${item.color}-400 font-mono`}>{item.val}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
             <div className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-white/5 flex items-center gap-3">
                <Database size={18} className="text-cyan-400" />
                <div>
                   <div className="text-[10px] font-black text-slate-500 uppercase">Space Complexity</div>
                   <div className="text-sm font-bold text-white font-mono">O(1) - In-place</div>
                </div>
             </div>
             <div className="flex-1 p-4 bg-slate-800/50 rounded-xl border border-white/5 flex items-center gap-3">
                <Repeat size={18} className="text-amber-400" />
                <div>
                   <div className="text-[10px] font-black text-slate-500 uppercase">Stability</div>
                   <div className="text-sm font-bold text-white font-mono">Not Stable</div>
                </div>
             </div>
          </div>
        </div>

        {/* Why Use Heap Sort? */}
        <div className="p-8 bg-gradient-to-br from-indigo-900/10 to-blue-900/10 border border-indigo-500/20 rounded-[2.5rem]">
           <h3 className="text-xl font-black text-indigo-400 mb-6">Why Use Heap Sort?</h3>
           <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Guaranteed O(n log n) performance.",
                "In-place sorting (O(1) extra space).",
                "Great for systems with strict memory limits.",
                "Better worst-case than Quick Sort."
              ].map((reason, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <ChevronRight size={14} className="text-indigo-500" />
                  {reason}
                </li>
              ))}
           </ul>
        </div>
      </div>
    </PerspectiveCard>
  );
}
