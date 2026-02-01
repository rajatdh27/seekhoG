"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { ListChecks, Clock, Calculator, Zap } from "lucide-react";

export default function FoundationsCheatsheet() {
  const cheatItems = [
    {
      title: "Time Scales",
      description: "Standard time complexity rankings.",
      icon: Clock,
      color: "blue",
      footer: (
        <div className="space-y-3">
          {[
            { val: "O(1)", label: "Constant" },
            { val: "O(log n)", label: "Logarithmic" },
            { val: "O(n)", label: "Linear" },
            { val: "O(n log n)", label: "Linearithmic" },
            { val: "O(n²)", label: "Quadratic" },
            { val: "O(2ⁿ)", label: "Exponential" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs font-mono font-black text-white">{item.val}</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Math Logic",
      description: "Essential formulas for analysis.",
      icon: Calculator,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          {[
            "log₂(1024) = 10",
            "2¹⁰ = 1024",
            "P(n,r) = n! / (n-r)!",
            "C(n,r) = n! / [r!(n-r)!]",
            "log(ab) = log(a) + log(b)",
            "aᵐ * aⁿ = aᵐ⁺ⁿ"
          ].map((item, i) => (
            <div key={i} className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-[11px] font-mono font-bold text-slate-300 text-center">
              {item}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Big-O Rules",
      description: "How to simplify complexity.",
      icon: Zap,
      color: "amber",
      footer: (
        <ul className="space-y-4">
          {[
            { title: "Drop Constants", text: "O(2n) → O(n)" },
            { title: "Dominant Term", text: "O(n² + n) → O(n²)" },
            { title: "Worst Case", text: "Target the boundary" },
            { title: "Input Types", text: "Unique variables per input" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
              <div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</div>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Real-World Impact",
      description: "Why efficiency matters at scale.",
      icon: Zap,
      color: "rose",
      footer: (
        <ul className="space-y-4">
          {[
            { title: "Small Data", text: "Hardware hides bad choices" },
            { title: "Big Data", text: "Feasibility defined by code" },
            { title: "O(n²) Scale", text: "Hours on 1M items" },
            { title: "O(n log n)", text: "Seconds on 1M items" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
              <div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</div>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Foundations Cheatsheet" 
        icon={ListChecks} 
        color="indigo" 
      />

      <ConceptGrid items={cheatItems} columns={2} />
    </PerspectiveCard>
  );
}