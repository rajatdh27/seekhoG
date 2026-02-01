"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { FileText, Zap, Terminal, Clock, Cpu } from "lucide-react";

export default function HeapCheatsheet() {
  const heapTimeComplexity = [
    {
      title: "Operation Timings",
      description: "How heap operations scale with input size n.",
      icon: Clock,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          {[
            { op: "insert(value)", val: "O(log n)" },
            { op: "extractMin/Max()", val: "O(log n)" },
            { op: "getMin/Max()", val: "O(1)" },
            { op: "heapify()", val: "O(log n)" },
            { op: "buildHeap()", val: "O(n)" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
              <span className="text-slate-400 font-bold text-[10px] uppercase">{item.op}</span>
              <span className="font-mono text-emerald-400 font-black text-xs">{item.val}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Index Formulas",
      description: "Mathematical shortcuts for array representation.",
      icon: Cpu,
      color: "blue",
      footer: (
        <div className="space-y-3">
          {[
            { label: "Parent of i", val: "⌊(i-1)/2⌋" },
            { label: "Left Child of i", val: "2i + 1" },
            { label: "Right Child of i", val: "2i + 2" },
            { label: "Height", val: "⌊log₂(n)⌋" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
              <span className="text-slate-400 font-bold text-[10px] uppercase">{item.label}</span>
              <span className="font-mono text-blue-400 font-black text-xs">{item.val}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Heap Cheatsheet" 
        description="Quick reference for complexity and formulas."
        icon={FileText} 
        color="rose" 
      />

      <ConceptGrid items={heapTimeComplexity} columns={2} variant="horizontal" />
    </PerspectiveCard>
  );
}