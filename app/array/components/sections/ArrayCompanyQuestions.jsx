"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Briefcase, Building2, TrendingUp, Search, Star, Globe, ShieldCheck, Layers, RefreshCw, ChevronRight } from "lucide-react";

export default function ArrayCompanyQuestions() {
  const companies = [
    {
      title: "Google",
      description: "156 Problems",
      icon: Search,
      color: "blue",
      footer: (
        <div className="space-y-4">
          <ul className="space-y-3">
            {["Next Permutation", "3Sum", "Median of Two Sorted Arrays", "Longest Increasing Path"].map((q, j) => (
              <li key={j} className="flex items-center gap-3 text-[11px] text-slate-400 font-bold">
                <Star size={10} className="text-blue-500 fill-blue-500 opacity-20" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-black uppercase text-slate-500 tracking-widest hover:text-blue-400 transition-colors cursor-pointer">
            View All <ChevronRight size={10} />
          </div>
        </div>
      )
    },
    {
      title: "Amazon",
      description: "203 Problems",
      icon: Briefcase,
      color: "amber",
      footer: (
        <div className="space-y-4">
          <ul className="space-y-3">
            {["Trapping Rain Water", "Product Except Self", "Meeting Rooms II", "Subarray Sum K"].map((q, j) => (
              <li key={j} className="flex items-center gap-3 text-[11px] text-slate-400 font-bold">
                <Star size={10} className="text-amber-500 fill-amber-500 opacity-20" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-black uppercase text-slate-500 tracking-widest hover:text-amber-400 transition-colors cursor-pointer">
            View All <ChevronRight size={10} />
          </div>
        </div>
      )
    },
    {
      title: "Microsoft",
      description: "142 Problems",
      icon: Building2,
      color: "cyan",
      footer: (
        <div className="space-y-4">
          <ul className="space-y-3">
            {["Spiral Matrix", "Rotate Image", "Set Matrix Zeroes", "Valid Sudoku"].map((q, j) => (
              <li key={j} className="flex items-center gap-3 text-[11px] text-slate-400 font-bold">
                <Star size={10} className="text-cyan-500 fill-cyan-500 opacity-20" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-black uppercase text-slate-500 tracking-widest hover:text-cyan-400 transition-colors cursor-pointer">
            View All <ChevronRight size={10} />
          </div>
        </div>
      )
    },
    {
      title: "Meta",
      description: "98 Problems",
      icon: Globe,
      color: "indigo",
      footer: (
        <div className="space-y-4">
          <ul className="space-y-3">
            {["Merge Intervals", "Valid Palindrome", "Remove Duplicates", "Best Time to Buy Stock"].map((q, j) => (
              <li key={j} className="flex items-center gap-3 text-[11px] text-slate-400 font-bold">
                <Star size={10} className="text-indigo-500 fill-indigo-500 opacity-20" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-black uppercase text-slate-500 tracking-widest hover:text-indigo-400 transition-colors cursor-pointer">
            View All <ChevronRight size={10} />
          </div>
        </div>
      )
    }
  ];

  const stats = [
    { title: "850+", description: "Total Questions", icon: Layers, color: "blue" },
    { title: "94%", description: "Hiring Success", icon: ShieldCheck, color: "emerald" },
    { title: "2026", description: "Updated Daily", icon: RefreshCw, color: "purple" }
  ];

  return (
    <PerspectiveCard color="blue">
      <SectionHeader 
        title="Company Questions" 
        description="Practice patterns targeted by top-tier tech firms."
        icon={Briefcase} 
        color="blue" 
        className="mb-10"
      />

      <ConceptGrid items={companies} columns={2} className="mb-10" />

      {/* Bonus Stats */}
      <ConceptGrid items={stats} columns={3} variant="horizontal" />
    </PerspectiveCard>
  );
}
