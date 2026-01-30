"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  ArrowDownAZ, 
  Layers, 
  ArrowRightLeft, 
  Calendar, 
  ChevronsRightLeft, 
  ArrowRight
} from "lucide-react";

export default function GreedyPatterns() {
  const patterns = [
    {
      title: "Sorting + Greedy",
      difficulty: "Easy",
      desc: "Sort data first to make optimal local choices.",
      useWhen: ["Intervals", "Deadlines", "Weights"],
      problems: ["Activity Selection", "Meeting Rooms"],
      icon: <ArrowDownAZ size={24} />,
      color: "blue"
    },
    {
      title: "Priority Queue",
      difficulty: "Medium",
      desc: "Dynamically select min/max element.",
      useWhen: ["Dynamic updates", "Merge K items"],
      problems: ["Huffman Coding", "Merge K Lists"],
      icon: <Layers size={24} />,
      color: "emerald"
    },
    {
      title: "Two Pointers",
      difficulty: "Medium",
      desc: "Greedy choices from ends of an array.",
      useWhen: ["Pairs", "Water Container"],
      problems: ["Container With Most Water", "Boats to Save People"],
      icon: <ArrowRightLeft size={24} />,
      color: "purple"
    },
    {
      title: "Interval Scheduling",
      difficulty: "Medium",
      desc: "Handling overlapping time slots.",
      useWhen: ["Scheduling", "Resource allocation"],
      problems: ["Non-overlapping Intervals", "Minimum Platforms"],
      icon: <Calendar size={24} />,
      color: "amber"
    },
    {
      title: "Prefix/Suffix",
      difficulty: "Medium",
      desc: "Greedy decisions based on running totals.",
      useWhen: ["Subarrays", "Balances"],
      problems: ["Gas Station", "Partition Labels"],
      icon: <ChevronsRightLeft size={24} />,
      color: "rose"
    }
  ];

  return (
    <PerspectiveCard color="violet">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-500 border border-violet-500/20">
          <Layers size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Greedy Patterns</h2>
          <p className="text-slate-400 font-medium">Standard templates for solving greedy problems.</p>
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
                <ArrowRight size={10} /> {pattern.problems[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PerspectiveCard>
  );
}