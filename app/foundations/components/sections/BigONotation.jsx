"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { ShieldAlert, ShieldCheck, Shield, ChevronRight, CheckCircle2 } from "lucide-react";

export default function BigONotation() {
  const bounds = [
    { 
      title: "Big-O (O)", 
      description: "Worst-case complexity. Maximum time/space required.", 
      icon: ShieldAlert, 
      color: "rose",
      footer: (
        <>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500 mb-4">Upper Bound</div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] font-mono text-slate-300 text-center">f(n) ≤ c × g(n)</div>
        </>
      )
    },
    { 
      title: "Big-Omega (Ω)", 
      description: "Best-case complexity. Minimum time required.", 
      icon: ShieldCheck, 
      color: "emerald",
      footer: (
        <>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-4">Lower Bound</div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] font-mono text-slate-300 text-center">f(n) ≥ c × g(n)</div>
        </>
      )
    },
    { 
      title: "Big-Theta (Θ)", 
      description: "Precise growth rate. Exact complexity match.", 
      icon: Shield, 
      color: "blue",
      footer: (
        <>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4">Tight Bound</div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] font-mono text-slate-300 text-center">c₁g(n) ≤ f(n) ≤ c₂g(n)</div>
        </>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Complexity Bounds" 
        icon={Shield} 
        color="purple" 
      />
      
      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        Mathematical notations to describe algorithm complexity boundaries. Understanding these is crucial for precise communication between engineers.
      </p>

      {/* Three Bound Cards */}
      <ConceptGrid items={bounds} columns={3} className="mb-12" />

      {/* Real-World Case Study - Visual Card */}
      <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
        
        <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
          <ChevronRight className="text-purple-500" /> Case Study: Linear Search
        </h3>

        <div className="grid gap-4">
          {[
            { label: "Best Case (Ω)", val: "Ω(1)", text: "Element is at the very first position.", color: "text-emerald-400" },
            { label: "Average Case (Θ)", val: "Θ(n)", text: "Element is somewhere in the middle.", color: "text-blue-400" },
            { label: "Worst Case (O)", val: "O(n)", text: "Element is at the end or not present.", color: "text-rose-400" }
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-slate-950/50 rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
              <div className="flex items-center gap-6">
                <div className={`text-lg font-black ${row.color} min-w-[60px]`}>{row.val}</div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.label}</div>
                  <p className="text-sm font-bold text-slate-300">{row.text}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-700 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-8">
        <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
          <CheckCircle2 size={24} /> Crucial Rule of Thumb
        </h3>
        <p className="text-slate-300 text-sm font-bold leading-relaxed italic">
          &quot;In software interviews and performance reviews, when people say &apos;Complexity&apos;, they almost always mean <span className="text-white underline decoration-rose-500 decoration-2 underline-offset-4">Big-O (Worst Case)</span>. It represents the safety guarantee of your algorithm.&quot;
        </p>
        {/* Next Topic Transition */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-widest text-[10px]">
            <div className="w-8 h-px bg-emerald-500/20" />
            Coming Up Next: Common Complexities
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}