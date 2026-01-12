"use client";

import { motion } from "framer-motion";
import FoundationCard from "./FoundationCard";
import { Sparkles, CheckCircle2, Layout, Zap, Target, BookOpen } from "lucide-react";

export default function FoundationsIntro() {
  return (
    <FoundationCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
          <Sparkles size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">What is DSA?</h2>
      </div>

      <div className="space-y-10">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Data Structures and Algorithms (DSA)</strong> is the study of efficient data storage and algorithmic problem-solving. It is the core foundation upon which all modern software is built.
        </p>

        {/* Why Learn DSA - High Impact Card */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
            <Target size={120} />
          </div>
          <h3 className="text-2xl font-black text-emerald-400 mb-6 flex items-center gap-3">
            <Target size={24} /> Why Learn DSA?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Interview Ready", text: "Ace top tech company (FAANG) interviews" },
              { title: "Efficient Code", text: "Optimize performance and reduce resource use" },
              { title: "Problem Solving", text: "Develop structured logical thinking" },
              { title: "Scalability", text: "Design systems for millions of users" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                <div>
                  <div className="font-black text-white text-sm uppercase tracking-tighter">{item.title}</div>
                  <p className="text-slate-400 text-xs font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The DSA Learning Journey - Split Cards */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layout size={24} className="text-blue-400" /> The Learning Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Data Structures", text: "Ways to organize data: Lists, Trees, Graphs, Hash Tables", icon: "📊", color: "blue" },
              { title: "Algorithms", text: "Procedures: Searching, Sorting, DP, Greedy", icon: "⚡", color: "purple" },
              { title: "Complexity", text: "Understanding performance: Big-O, Time & Space", icon: "🎯", color: "amber" },
              { title: "Patterns", text: "Mastering logic: Two pointers, Sliding window, Recursion", icon: "🧩", color: "pink" }
            ].map((item, i) => (
              <div key={i} className={`p-6 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-5 hover:border-${item.color}-500/30 transition-all group`}>
                <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <div className={`font-black text-${item.color}-400 text-sm uppercase tracking-widest mb-1`}>{item.title}</div>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path - Timeline Style */}
        <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-white/5">
          <h3 className="text-2xl font-black text-white mb-10 text-center">Your Learning Path</h3>
          <div className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-slate-800" />
            {[
              { id: 1, title: "Master Foundations", text: "Complexity analysis, recursion, mathematics", color: "emerald" },
              { id: 2, title: "Learn Data Structures", text: "Arrays, lists, stacks, queues, trees, graphs", color: "blue" },
              { id: 3, title: "Study Algorithms", text: "Sorting, searching, DP, greedy paradigms", color: "purple" },
              { id: 4, title: "Practice Problems", text: "Solve 300-500 problems across all patterns", color: "pink" }
            ].map((step, i) => (
              <div key={i} className="flex gap-10 items-center relative">
                <div className={`w-8 h-8 rounded-full bg-${step.color}-500 text-slate-950 flex items-center justify-center font-black text-xs z-10 shadow-[0_0_15px_rgba(var(--${step.color}-rgb),0.5)]`}>
                  {step.id}
                </div>
                <div>
                  <div className="font-black text-white text-lg tracking-tight mb-1">{step.title}</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FoundationCard>
  );
}