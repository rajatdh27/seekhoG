"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Sparkles, CheckCircle2, Layout, Zap, Target, BookOpen } from "lucide-react";

export default function FoundationsIntro() {
  const journeyItems = [
    { title: "Data Structures", description: "Ways to organize data: Lists, Trees, Graphs, Hash Tables", icon: () => <span className="text-3xl">📊</span>, color: "blue" },
    { title: "Algorithms", description: "Procedures: Searching, Sorting, DP, Greedy", icon: () => <span className="text-3xl">⚡</span>, color: "purple" },
    { title: "Complexity", description: "Understanding performance: Big-O, Time & Space", icon: () => <span className="text-3xl">🎯</span>, color: "amber" },
    { title: "Patterns", description: "Mastering logic: Two pointers, Sliding window, Recursion", icon: () => <span className="text-3xl">🧩</span>, color: "pink" }
  ];

  const whyLearn = [
    { title: "Interview Ready", description: "Ace top tech company (FAANG) interviews", icon: CheckCircle2, color: "emerald" },
    { title: "Efficient Code", description: "Optimize performance and reduce resource use", icon: CheckCircle2, color: "emerald" },
    { title: "Problem Solving", description: "Develop structured logical thinking", icon: CheckCircle2, color: "emerald" },
    { title: "Scalability", description: "Design systems for millions of users", icon: CheckCircle2, color: "emerald" }
  ];

  return (
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="What is DSA?" 
        icon={Sparkles} 
        color="emerald" 
      />

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
          <ConceptGrid items={whyLearn} columns={2} variant="horizontal" />
        </div>

        {/* The DSA Learning Journey - Split Cards */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layout size={24} className="text-blue-400" /> The Learning Journey
          </h3>
          <ConceptGrid items={journeyItems} columns={2} variant="horizontal" />
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
        {/* Next Topic Transition */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-widest text-[10px]">
            <div className="w-8 h-px bg-emerald-500/20" />
            Coming Up Next: Mathematics for DSA
          </div>
        </div>
              </div>
            </div>
          </PerspectiveCard>  );
}