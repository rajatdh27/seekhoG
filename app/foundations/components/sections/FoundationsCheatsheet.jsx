"use client";

import { motion } from "framer-motion";
import FoundationCard from "./FoundationCard";
import { ListChecks, ArrowRight, BookOpen, Calculator, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function FoundationsCheatsheet() {
  return (
    <FoundationCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 border border-indigo-500/20">
          <ListChecks size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Foundations Cheatsheet</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Time Complexities Card */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Clock size={60} />
          </div>
          <h3 className="text-xl font-black text-blue-400 mb-6 flex items-center gap-3">
            <Clock size={20} /> Time Scales
          </h3>
          <div className="space-y-3">
            {[
              { val: "O(1)", label: "Constant" },
              { val: "O(log n)", label: "Logarithmic" },
              { val: "O(n)", label: "Linear" },
              { val: "O(n log n)", label: "Linearithmic" },
              { val: "O(n²)", label: "Quadratic" },
              { val: "O(2ⁿ)", label: "Exponential" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-xs font-mono font-black text-white">{item.val}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mathematics Card */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Calculator size={60} />
          </div>
          <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
            <Calculator size={20} /> Math Logic
          </h3>
          <div className="space-y-3">
            {[
              "log₂(1024) = 10",
              "2¹⁰ = 1024",
              "P(n,r) = n! / (n-r)!",
              "C(n,r) = n! / [r!(n-r)!]",
              "log(ab) = log(a) + log(b)",
              "aᵐ * aⁿ = aᵐ⁺ⁿ"
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] font-mono font-bold text-slate-300 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Rules Card */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap size={60} />
          </div>
          <h3 className="text-xl font-black text-amber-400 mb-6 flex items-center gap-3">
            <Zap size={20} /> Big-O Rules
          </h3>
          <ul className="space-y-4">
            {[
              { title: "Drop Constants", text: "O(2n) simplifies to O(n)" },
              { title: "Dominant Term", text: "O(n² + n) simplifies to O(n²)" },
              { title: "Worst Case", text: "Always optimize for the max boundary" },
              { title: "Input Types", text: "Different inputs = different variables" }
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
        </div>

        {/* Impact Card */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap size={60} />
          </div>
          <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-3">
            <Zap size={20} /> Real-World Impact
          </h3>
          <ul className="space-y-4">
            {[
              { title: "Small Data", text: "Hardware hides bad algorithm choices" },
              { title: "Big Data", text: "Software choices define feasibility" },
              { title: "O(n²) Scale", text: "Hours of execution on 1M items" },
              { title: "O(n log n)", text: "Seconds of execution on 1M items" }
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
        </div>
      </div>

      <div className="relative group/cta">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[2.5rem] blur opacity-20 group-hover/cta:opacity-40 transition-opacity" />
        <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 text-center">
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">🎓</div>
          <h3 className="text-2xl font-black text-white mb-4">Phase 1 Complete</h3>
          <p className="text-slate-400 text-base font-medium mb-10 max-w-xl mx-auto">
            You have mastered the theoretical foundations of engineering. You are now ready to implement efficient structures in code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/array" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-3"
            >
              Start Arrays Module <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </FoundationCard>
  );
}