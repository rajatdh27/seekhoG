"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  GitBranch, 
  Copy, 
  RotateCw, 
  Map, 
  CheckSquare, 
  TrendingUp, 
  ChevronRight
} from "lucide-react";

export default function BacktrackingPatterns() {
  const patterns = [
    {
      title: "Decision Tree",
      description: "Make a series of choices to reach a goal.",
      icon: GitBranch,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Basic</div>
          <div className="flex flex-wrap gap-1.5">
            {["Explore all options", "Simple branching"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase`}>
            <ChevronRight size={10} /> Letter Combinations
          </div>
        </div>
      )
    },
    {
      title: "Subset Generation",
      description: "Include or exclude each element.",
      icon: Copy,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Combinations", "Subsequences", "Power Set"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase`}>
            <ChevronRight size={10} /> Subsets
          </div>
        </div>
      )
    },
    {
      title: "Permutations",
      description: "Arranging elements where order matters.",
      icon: RotateCw,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Ordering", "Anagrams", "Factorial complexity"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase`}>
            <ChevronRight size={10} /> Permutations
          </div>
        </div>
      )
    },
    {
      title: "Grid/Maze Paths",
      description: "Moving through 2D grids with backtracking.",
      icon: Map,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Maze solver", "Word Search", "Island constraints"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase`}>
            <ChevronRight size={10} /> Word Search
          </div>
        </div>
      )
    },
    {
      title: "Constraint Satisfaction",
      description: "Filling blanks while following strict rules.",
      icon: CheckSquare,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Validating state", "Puzzles", "Coloring"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase`}>
            <ChevronRight size={10} /> Sudoku Solver
          </div>
        </div>
      )
    },
    {
      title: "Optimization (Pruning)",
      description: "Find best solution, cut bad branches early.",
      icon: TrendingUp,
      color: "cyan",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[8px] font-black uppercase text-cyan-400 mb-2">Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Max/Min value", "TSP", "Knapsack (small N)"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-cyan-400 uppercase`}>
            <ChevronRight size={10} /> TSP
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="fuchsia">
      <SectionHeader 
        title="Common Patterns" 
        description="Standard templates for solving backtracking problems."
        icon={GitBranch} 
        color="fuchsia" 
      />

      <ConceptGrid items={patterns} columns={3} />

      {/* Decision Logic Card */}
      <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500" />
        <h3 className="text-2xl font-black text-white mb-8">How to Choose?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { q: "Combinations?", a: "Subset Pattern (Include/Exclude)" },
            { q: "Order Matters?", a: "Permutation Pattern (Swap/Vis)" },
            { q: "Fill Grid?", a: "Constraint Satisfaction (Sudoku)" },
            { q: "Find Path?", a: "Maze/Grid DFS" },
            { q: "String Rules?", a: "Decision Tree (Partitioning)" },
            { q: "Optimization?", a: "Backtracking + Pruning" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5">
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
              <div className="text-xs font-bold text-fuchsia-400">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}