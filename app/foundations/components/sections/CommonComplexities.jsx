"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { BarChart3, TrendingUp, TrendingDown, Layers, Zap, CheckCircle2 } from "lucide-react";

export default function CommonComplexities() {
  const complexities = [
    { name: "O(1)", color: "emerald", desc: "Constant", examples: ["Array access", "Hash table lookup", "Push/Pop stack"], icon: <TrendingDown size={24} /> },
    { name: "O(log n)", color: "cyan", desc: "Logarithmic", examples: ["Binary search", "Balanced BST search"], icon: <Zap size={24} /> },
    { name: "O(n)", color: "blue", desc: "Linear", examples: ["Array traversal", "Linear search"], icon: <Layers size={24} /> },
    { name: "O(n log n)", color: "indigo", desc: "Linearithmic", examples: ["Merge sort", "Quick sort (avg)"], icon: <BarChart3 size={24} /> },
    { name: "O(n²)", color: "rose", desc: "Quadratic", examples: ["Bubble sort", "Nested loops"], icon: <TrendingUp size={24} /> },
    { name: "O(2ⁿ)", color: "purple", desc: "Exponential", examples: ["Recursive fibonacci", "Subsets"], icon: <TrendingUp size={24} /> },
  ];

  return (
    <PerspectiveCard color="blue">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
          <BarChart3 size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Complexity Atlas</h2>
      </div>

      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
        A map of the most frequent time complexities you will encounter in real-world engineering and competitive coding.
      </p>

      {/* Grid of Complexities */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {complexities.map((c, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className={`p-8 bg-slate-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden group transition-colors`}
          >
            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 p-6 text-${c.color}-500 opacity-10 group-hover:opacity-30 transition-opacity`}>
              {c.icon}
            </div>

            <h3 className={`text-3xl font-black text-${c.color}-400 mb-1`}>
              {c.name}
            </h3>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">
              {c.desc} Pattern
            </div>
            
            <div className="space-y-3">
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Common Examples</div>
              <div className="flex flex-wrap gap-2">
                {c.examples.map((ex, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-slate-300 border border-white/5">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Hierarchy - Terminal Style */}
      <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-rose-500" />
        
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <TrendingUp className="text-blue-400" /> Efficiency Spectrum
        </h3>

        <div className="bg-[#0d1117] p-8 rounded-2xl border border-white/10 shadow-2xl relative">
          <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Growth Rate Hierarchy</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            {[
              { val: "O(1)", color: "text-emerald-400" },
              { val: "O(log n)", color: "text-cyan-400" },
              { val: "O(n)", color: "text-blue-400" },
              { val: "O(n log n)", color: "text-indigo-400" },
              { val: "O(n²)", color: "text-amber-400" },
              { val: "O(2ⁿ)", color: "text-orange-400" },
              { val: "O(n!)", color: "text-rose-400" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className={`text-lg font-black ${item.color}`}>{item.val}</span>
                {i < 6 && <span className="text-slate-700 hidden md:block">&lt;</span>}
                {i < 6 && <span className="text-slate-700 md:hidden">▼</span>}
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
            <span>Great (Goal)</span>
            <span>Unusable (At Scale)</span>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] flex items-start gap-6">
        <CheckCircle2 size={32} className="text-blue-500 shrink-0" />
        <p className="text-slate-300 text-sm font-bold leading-relaxed">
          Pro Tip: Always try to identify the <span className="text-white">Dominant Term</span>. In a loop that does O(n) work and then O(n²) work, the entire algorithm is considered <span className="text-white">O(n²)</span> because at scale, the linear part becomes negligible.
        </p>
      </div>
    </PerspectiveCard>
  );
}