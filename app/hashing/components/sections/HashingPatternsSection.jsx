"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { 
  Grid, 
  Hash, 
  Search, 
  Repeat, 
  Plus, 
  List, 
  Eye, 
  ChevronRight,
  Maximize2
} from "lucide-react";

export default function HashingPatternsSection() {
  const patterns = [
    {
      title: "Frequency Counter",
      difficulty: "Easy",
      desc: "Count occurrences of each element.",
      useWhen: ["Anagrams", "Majority Element", "Character counts"],
      problems: ["Valid Anagram", "Top K Frequent"],
      icon: <Hash size={24} />,
      color: "blue"
    },
    {
      title: "Two Sum (Complement)",
      difficulty: "Easy-Medium",
      desc: "Check if (target - current) exists in Map.",
      useWhen: ["Find pair with sum", "Find difference"],
      problems: ["Two Sum", "Pairs with Diff K"],
      icon: <Plus size={24} />,
      color: "emerald"
    },
    {
      title: "Seen / Visited Set",
      difficulty: "Easy",
      desc: "Track processed elements using a Set.",
      useWhen: ["Detect duplicates", "Cycle detection", "Intersection"],
      problems: ["Contains Duplicate", "Linked List Cycle"],
      icon: <Eye size={24} />,
      color: "purple"
    },
    {
      title: "Prefix Sum + Hash",
      difficulty: "Medium",
      desc: "Store cumulative sums to find subarrays.",
      useWhen: ["Subarray sum = K", "Longest subarray with sum"],
      problems: ["Subarray Sum Equals K", "Contiguous Array"],
      icon: <Maximize2 size={24} />,
      color: "amber"
    },
    {
      title: "Group by Key",
      difficulty: "Medium",
      desc: "Map a derived key to a list of items.",
      useWhen: ["Grouping anagrams", "Categorizing data"],
      problems: ["Group Anagrams", "Group Shifted Strings"],
      icon: <List size={24} />,
      color: "rose"
    },
    {
      title: "Sliding Window + Hash",
      difficulty: "Medium-Hard",
      desc: "Track counts within a moving window.",
      useWhen: ["Longest substring", "Window constraints"],
      problems: ["Longest Substring No Repeat", "Min Window Substring"],
      icon: <Repeat size={24} />,
      color: "cyan"
    }
  ];

  return (
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="Interview Patterns" 
        description="Common strategies to solve hashing problems."
        icon={Grid} 
        color="emerald" 
      />

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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
        <h3 className="text-2xl font-black text-white mb-8">How to Choose?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { q: "Duplicates?", a: "HashSet (Seen Set)" },
            { q: "Frequencies?", a: "HashMap (Counter)" },
            { q: "Pair Sum?", a: "HashMap (Complement)" },
            { q: "Subarray Sum?", a: "Prefix Sum + HashMap" },
            { q: "Grouping?", a: "HashMap <Key, List>" },
            { q: "Window Items?", a: "Sliding Window + Map" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5">
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
              <div className="text-xs font-bold text-emerald-400">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}