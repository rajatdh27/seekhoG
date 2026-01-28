"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Settings, Zap, ArrowUp, ArrowDown, Trash2, PlusCircle } from "lucide-react";

export default function HeapOperations() {
  const operations = [
    {
      title: "Heapify Up (Bubble Up)",
      icon: <ArrowUp className="text-emerald-400" />,
      desc: "Used during insertion to maintain the heap property by moving a node up the tree.",
      steps: [
        "Add the new element at the end of the array (last leaf).",
        "Compare the element with its parent.",
        "If it violates the heap property, swap it with the parent.",
        "Repeat until the property is satisfied or the root is reached."
      ],
      complexity: "O(log n)"
    },
    {
      title: "Heapify Down (Sift Down)",
      icon: <ArrowDown className="text-rose-400" />,
      desc: "Used during deletion (extract root) to restore the heap property by moving a node down.",
      steps: [
        "Replace the root with the last element in the array.",
        "Compare the new root with its children.",
        "Swap with the larger child (Max Heap) or smaller child (Min Heap).",
        "Repeat until the node is in its correct position."
      ],
      complexity: "O(log n)"
    }
  ];

  return (
    <PerspectiveCard color="rose">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 border border-rose-500/20">
          <Settings size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Core Operations</h2>
      </div>

      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {operations.map((op, i) => (
            <div key={i} className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-500/30 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {op.icon}
                </div>
                <div className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] font-black text-rose-400 uppercase tracking-widest">
                  {op.complexity}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4">{op.title}</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">{op.desc}</p>
              
              <div className="space-y-4">
                {op.steps.map((step, si) => (
                  <div key={si} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-slate-500 border border-white/5">
                      {si + 1}
                    </div>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
