"use client";

import { motion } from "framer-motion";
import FoundationCard from "./FoundationCard";
import { ShieldAlert, ShieldCheck, Shield, ChevronRight, CheckCircle2 } from "lucide-react";

export default function BigONotation() {
  return (
    <FoundationCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
          <Shield size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Complexity Bounds</h2>
      </div>
      
      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        Mathematical notations to describe algorithm complexity boundaries. Understanding these is crucial for precise communication between engineers.
      </p>

      {/* Three Bound Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Big-O (O)", sub: "Upper Bound", desc: "Worst-case complexity. Maximum time/space required.", formula: "f(n) ≤ c × g(n)", icon: <ShieldAlert className="text-rose-400" />, color: "rose" },
          { title: "Big-Omega (Ω)", sub: "Lower Bound", desc: "Best-case complexity. Minimum time required.", formula: "f(n) ≥ c × g(n)", icon: <ShieldCheck className="text-emerald-400" />, color: "emerald" },
          { title: "Big-Theta (Θ)", sub: "Tight Bound", desc: "Precise growth rate. Exact complexity match.", formula: "c₁g(n) ≤ f(n) ≤ c₂g(n)", icon: <Shield className="text-blue-400" />, color: "blue" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 relative overflow-hidden group`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${item.color}-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
            <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className={`text-xl font-black text-white mb-1`}>{item.title}</h3>
            <div className={`text-[10px] font-black uppercase tracking-[0.2em] text-${item.color}-500 mb-4`}>{item.sub}</div>
            <p className="text-slate-400 text-xs font-bold leading-relaxed mb-6">{item.desc}</p>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] font-mono text-slate-300 text-center">
              {item.formula}
            </div>
          </motion.div>
        ))}
      </div>

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
      </div>
    </FoundationCard>
  );
}