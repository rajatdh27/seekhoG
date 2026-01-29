"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
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
      difficulty: "Basic",
      desc: "Make a series of choices to reach a goal.",
      useWhen: ["Explore all options", "Simple branching"],
      problems: ["Letter Combinations", "Generate Parentheses"],
      icon: <GitBranch size={24} />,
      color: "blue"
    },
    {
      title: "Subset Generation",
      difficulty: "Medium",
      desc: "Include or exclude each element.",
      useWhen: ["Combinations", "Subsequences", "Power Set"],
      problems: ["Subsets", "Combination Sum"],
      icon: <Copy size={24} />,
      color: "emerald"
    },
    {
      title: "Permutations",
      difficulty: "Medium",
      desc: "Arranging elements where order matters.",
      useWhen: ["Ordering", "Anagrams", "Factorial complexity"],
      problems: ["Permutations", "N-Queens"],
      icon: <RotateCw size={24} />,
      color: "purple"
    },
    {
      title: "Grid/Maze Paths",
      difficulty: "Medium",
      desc: "Moving through 2D grids with backtracking.",
      useWhen: ["Maze solver", "Word Search", "Island constraints"],
      problems: ["Word Search", "Rat in Maze"],
      icon: <Map size={24} />,
      color: "amber"
    },
    {
      title: "Constraint Satisfaction",
      difficulty: "Hard",
      desc: "Filling blanks while following strict rules.",
      useWhen: ["Validating state", "Puzzles", "Coloring"],
      problems: ["Sudoku Solver", "Graph Coloring"],
      icon: <CheckSquare size={24} />,
      color: "rose"
    },
    {
      title: "Optimization (Pruning)",
      difficulty: "Hard",
      desc: "Find best solution, cut bad branches early.",
      useWhen: ["Max/Min value", "TSP", "Knapsack (small N)"],
      problems: ["TSP", "Maximum Gold"],
      icon: <TrendingUp size={24} />,
      color: "cyan"
    }
  ];

  return (
    <PerspectiveCard color="fuchsia">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center text-fuchsia-500 border border-fuchsia-500/20">
          <GitBranch size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Common Patterns</h2>
          <p className="text-slate-400 font-medium">Standard templates for solving backtracking problems.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {patterns.map((pattern, i) => (
          <div key={i} className={`bg-slate-900/60 p-6 rounded-[2rem] border border-${pattern.color}-500/20 hover:border-${pattern.color}-500/40 transition-all group relative overflow-hidden flex flex-col`}>
            <div className={`absolute top-0 right-0 p-4 text-${pattern.color}-500 opacity-5 group-hover:opacity-10 transition-opacity`}>
              {pattern.icon}
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className={`px-2 py-1 rounded-md bg-${pattern.color}-500/10 border border-${pattern.color}-500/20 text-[8px] font-black uppercase text-${pattern.color}-400`}>
                {pattern.difficulty}
              </div>
            </div>

            <h3 className="text-lg font-black text-white mb-2">{pattern.title}</h3>
            <p className="text-slate-500 text-[10px] font-bold leading-relaxed mb-4 flex-1">
              {pattern.desc}
            </p>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {pattern.useWhen.map((tag, j) => (
                  <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`flex items-center gap-2 text-[9px] font-black text-${pattern.color}-400 uppercase`}>
                <ChevronRight size={10} /> {pattern.problems[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

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