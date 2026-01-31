"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Settings, Zap, ArrowUp, ArrowDown, Trash2, PlusCircle } from "lucide-react";

export default function HeapOperations() {
  const heapOps = [
    {
      title: "Heapify Up (Bubble Up)",
      icon: ArrowUp,
      color: "emerald",
      description: "Used during insertion to maintain the heap property by moving a node up the tree.",
      footer: (
        <div className="space-y-6">
          <div className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] font-black text-rose-400 uppercase tracking-widest inline-block">
            O(log n)
          </div>
          <div className="space-y-4">
            {[
              "Add the new element at the end of the array (last leaf).",
              "Compare the element with its parent.",
              "If it violates the heap property, swap it with the parent.",
              "Repeat until the property is satisfied or the root is reached."
            ].map((step, si) => (
              <div key={si} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-slate-500 border border-white/5">
                  {si + 1}
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Heapify Down (Sift Down)",
      icon: ArrowDown,
      color: "rose",
      description: "Used during deletion (extract root) to restore the heap property by moving a node down.",
      footer: (
        <div className="space-y-6">
          <div className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] font-black text-rose-400 uppercase tracking-widest inline-block">
            O(log n)
          </div>
          <div className="space-y-4">
            {[
              "Replace the root with the last element in the array.",
              "Compare the new root with its children.",
              "Swap with the larger child (Max Heap) or smaller child (Min Heap).",
              "Repeat until the node is in its correct position."
            ].map((step, si) => (
              <div key={si} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-slate-500 border border-white/5">
                  {si + 1}
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Core Operations" 
        icon={Settings} 
        color="rose" 
      />

      <div className="space-y-12">
        <ConceptGrid items={heapOps} columns={2} />

        {/* Insertion vs Deletion Highlight */}
        <div className="grid md:grid-cols-2 gap-6">
           <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
              <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
                <PlusCircle size={20} /> Insertion Logic
              </h3>
              <div className="font-mono text-[11px] text-slate-400 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                heap.push(newValue); <br/>
                heapifyUp(heap.length - 1);
              </div>
           </div>

           <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem]">
              <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
                <Trash2 size={20} /> Deletion (Extract)
              </h3>
              <div className="font-mono text-[11px] text-slate-400 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                root = heap[0]; <br/>
                heap[0] = heap.pop(); <br/>
                heapifyDown(0);
              </div>
           </div>
        </div>

        {/* Pro Tip */}
        <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 flex-shrink-0">
              <Zap size={20} />
           </div>
           <p className="text-xs text-slate-400 font-medium">
             <strong className="text-amber-400 uppercase tracking-tighter">Pro Tip:</strong> Building a heap from an unsorted array using <code className="text-amber-300">heapifyDown</code> starting from the last non-leaf node takes only <strong className="text-white font-black">O(n)</strong> time, which is more efficient than inserting elements one by one (O(n log n)).
           </p>
        </div>
      </div>
    </PerspectiveCard>
  );
}
