"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  ArrowDownAZ, 
  Layers, 
  ArrowRightLeft, 
  Calendar, 
  ChevronsRightLeft, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

export default function GreedyPatterns() {
  const patterns = [
    {
      title: "Sorting + Greedy",
      description: "Sort data first to make optimal local choices.",
      icon: ArrowDownAZ,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Easy</div>
          <div className="flex flex-wrap gap-1.5">
            {["Intervals", "Deadlines", "Weights"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase`}>
            <ChevronRight size={10} /> Activity Selection
          </div>
        </div>
      )
    },
    {
      title: "Priority Queue",
      description: "Dynamically select min/max element.",
      icon: Layers,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Dynamic updates", "Merge K items"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase`}>
            <ChevronRight size={10} /> Huffman Coding
          </div>
        </div>
      )
    },
    {
      title: "Two Pointers",
      description: "Greedy choices from ends of an array.",
      icon: ArrowRightLeft,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Pairs", "Water Container"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase`}>
            <ChevronRight size={10} /> Container With Most Water
          </div>
        </div>
      )
    },
    {
      title: "Interval Scheduling",
      description: "Handling overlapping time slots.",
      icon: Calendar,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Scheduling", "Resource allocation"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase`}>
            <ChevronRight size={10} /> Non-overlapping Intervals
          </div>
        </div>
      )
    },
    {
      title: "Prefix/Suffix",
      description: "Greedy decisions based on running totals.",
      icon: ChevronsRightLeft,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Subarrays", "Balances"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase`}>
            <ChevronRight size={10} /> Gas Station
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="violet">
      <SectionHeader 
        title="Greedy Patterns" 
        description="Standard templates for solving greedy problems."
        icon={Layers} 
        color="violet" 
      />

      <ConceptGrid items={patterns} columns={3} />
    </PerspectiveCard>
  );
}