"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Briefcase, Building2, TrendingUp, Search, Star, Globe, ShieldCheck, Layers, RefreshCw } from "lucide-react";

export default function ArrayCompanyQuestions() {
  const companies = [
    {
      name: "Google",
      problems: 156,
      questions: ["Next Permutation", "3Sum", "Median of Two Sorted Arrays", "Longest Increasing Path"],
      color: "blue",
      icon: <Search size={20} />
    },
    {
      name: "Amazon",
      problems: 203,
      questions: ["Trapping Rain Water", "Product Except Self", "Meeting Rooms II", "Subarray Sum K"],
      color: "amber",
      icon: <Briefcase size={20} />
    },
    {
      name: "Microsoft",
      problems: 142,
      questions: ["Spiral Matrix", "Rotate Image", "Set Matrix Zeroes", "Valid Sudoku"],
      color: "cyan",
      icon: <Building2 size={20} />
    },
    {
      name: "Meta",
      problems: 98,
      questions: ["Merge Intervals", "Valid Palindrome", "Remove Duplicates", "Best Time to Buy Stock"],
      color: "indigo",
      icon: <Globe size={20} />
    }
  ];

  return (
    <PerspectiveCard color="blue">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-lg">
          <Briefcase size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Company Questions</h2>
          <p className="text-slate-400 font-medium">Practice patterns targeted by top-tier tech firms.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {companies.map((company, i) => (
          <div key={i} className={`bg-slate-900/60 p-8 rounded-[2rem] border border-${company.color}-500/20 hover:border-${company.color}-500/40 transition-all group relative overflow-hidden`}>
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${company.color}-500/5 blur-3xl`} />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-${company.color}-500/10 text-${company.color}-400`}>
                  {company.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{company.name}</h3>
              </div>
              <div className={`text-[10px] font-black uppercase tracking-widest text-${company.color}-500 bg-${company.color}-500/10 px-2 py-1 rounded-md border border-${company.color}-500/20`}>
                {company.problems} Problems
              </div>
            </div>

            <ul className="space-y-4 relative z-10">
              {company.questions.map((q, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                  <Star size={12} className={`text-${company.color}-500 fill-${company.color}-500 opacity-20 group-hover:opacity-100 transition-opacity`} />
                  <span className="font-medium">{q}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] group-hover:text-white transition-colors cursor-pointer">
              <span>View All {company.name} Questions</span>
              <TrendingUp size={12} className="ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Bonus Stats */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        {[
          { label: "Total Questions", val: "850+", icon: <Layers size={14} /> },
          { label: "Hiring Success", val: "94%", icon: <ShieldCheck size={14} /> },
          { label: "Updated Daily", val: "2026", icon: <RefreshCw size={14} /> }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-950/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-1">
            <div className="text-slate-600 mb-1">{stat.icon}</div>
            <div className="text-lg font-black text-white tracking-tighter">{stat.val}</div>
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </PerspectiveCard>
  );
}
