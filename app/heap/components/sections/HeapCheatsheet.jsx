"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { FileText, Zap, Terminal } from "lucide-react";

export default function HeapCheatsheet() {
  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Heap Cheatsheet" 
        icon={FileText} 
        color="rose" 
      />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Basic Operations */}
        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
          <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
            <Zap size={20} /> Time Complexity
          </h3>
          <div className="space-y-4">
            {[
              { op: "insert(value)", val: "O(log n)" },
              { op: "extractMin/Max()", val: "O(log n)" },
              { op: "getMin/Max()", val: "O(1)" },
              { op: "heapify()", val: "O(log n)" },
              { op: "buildHeap()", val: "O(n)" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-300 font-medium text-sm">{item.op}</span>
                <span className="font-mono text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Array Formulas */}
        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
          <h3 className="text-xl font-black text-blue-400 mb-6 flex items-center gap-3">
            <Terminal size={20} /> Array Formulas
          </h3>
          <div className="space-y-4">
            {[
              { label: "Parent of i", val: "⌊(i-1)/2⌋" },
              { label: "Left Child of i", val: "2i + 1" },
              { label: "Right Child of i", val: "2i + 2" },
              { label: "Height", val: "⌊log₂(n)⌋" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-300 font-medium text-sm">{item.label}</span>
                <span className="font-mono text-blue-400 font-bold text-sm bg-blue-500/10 px-2 py-1 rounded">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}