"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { ArrowUpDown, Timer, Database, Repeat, ChevronRight, Zap } from "lucide-react";

export default function HeapSort() {
  const heapSortSteps = [
    { title: "Build Max Heap", description: "Transform input into a heap. Root becomes largest element.", badge: "O(n)", icon: Database, color: "blue" },
    { title: "Swap & Extract", description: "Swap root with last element. Reduce heap size.", badge: "O(1)", icon: Repeat, color: "purple" },
    { title: "Restore Property", description: "Heapify new root to fix violations.", badge: "O(log n)", icon: Timer, color: "rose" },
    { title: "Repeat", description: "Extract n times until heap is empty.", badge: "n times", icon: ArrowUpDown, color: "orange" }
  ];

  const whyHeapSort = [
    { title: "Guaranteed Performance", description: "Always O(n log n), no bad worst-case scenarios.", icon: Zap, color: "indigo" },
    { title: "In-Place", description: "Requires only O(1) auxiliary space.", icon: Database, color: "indigo" },
    { title: "Memory Efficient", description: "Perfect for systems with strict RAM constraints.", icon: Zap, color: "indigo" },
    { title: "Reliable", description: "Better worst-case performance than Quick Sort.", icon: Zap, color: "indigo" }
  ];

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Heap Sort Algorithm" 
        icon={ArrowUpDown} 
        color="rose" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Heap Sort</strong> is a comparison-based sorting technique based on the Binary Heap data structure. It behaves like Selection Sort by finding the maximum element and moving it to the end.
        </p>

        <ConceptGrid items={heapSortSteps} columns={2} />

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
           <h3 className="text-xl font-black text-indigo-400 mb-8 flex items-center gap-2">
             <Zap size={20} /> Why Use Heap Sort?
           </h3>
           <ConceptGrid items={whyHeapSort} columns={2} variant="horizontal" />
        </div>
      </div>
    </PerspectiveCard>
  );
}
