"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { ListChecks, ArrowRight, BookOpen, Calculator, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function FoundationsCheatsheet() {
  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Foundations Cheatsheet" 
        icon={ListChecks} 
        color="indigo" 
      />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
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
    </PerspectiveCard>
  );
}