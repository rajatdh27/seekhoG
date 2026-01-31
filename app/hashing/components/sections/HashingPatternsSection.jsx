"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
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
      description: "Count occurrences of each element.",
      icon: Hash,
      color: "blue",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase text-blue-400 mb-2">Easy</div>
          <div className="flex flex-wrap gap-1.5">
            {["Anagrams", "Majority Element", "Character counts"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase`}>
            <ChevronRight size={10} /> Valid Anagram
          </div>
        </div>
      )
    },
    {
      title: "Two Sum (Complement)",
      description: "Check if (target - current) exists in Map.",
      icon: Plus,
      color: "emerald",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-black uppercase text-emerald-400 mb-2">Easy-Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Find pair with sum", "Find difference"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-emerald-400 uppercase`}>
            <ChevronRight size={10} /> Two Sum
          </div>
        </div>
      )
    },
    {
      title: "Seen / Visited Set",
      description: "Track processed elements using a Set.",
      icon: Eye,
      color: "purple",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-purple-500/10 border border-purple-500/20 text-[8px] font-black uppercase text-purple-400 mb-2">Easy</div>
          <div className="flex flex-wrap gap-1.5">
            {["Detect duplicates", "Cycle detection", "Intersection"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-purple-400 uppercase`}>
            <ChevronRight size={10} /> Contains Duplicate
          </div>
        </div>
      )
    },
    {
      title: "Prefix Sum + Hash",
      description: "Store cumulative sums to find subarrays.",
      icon: Maximize2,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-amber-500/10 border border-amber-500/20 text-[8px] font-black uppercase text-amber-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Subarray sum = K", "Longest subarray with sum"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-amber-400 uppercase`}>
            <ChevronRight size={10} /> Subarray Sum Equals K
          </div>
        </div>
      )
    },
    {
      title: "Group by Key",
      description: "Map a derived key to a list of items.",
      icon: List,
      color: "rose",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-rose-500/10 border border-rose-500/20 text-[8px] font-black uppercase text-rose-400 mb-2">Medium</div>
          <div className="flex flex-wrap gap-1.5">
            {["Grouping anagrams", "Categorizing data"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-rose-400 uppercase`}>
            <ChevronRight size={10} /> Group Anagrams
          </div>
        </div>
      )
    },
    {
      title: "Sliding Window + Hash",
      description: "Track counts within a moving window.",
      icon: Repeat,
      color: "cyan",
      footer: (
        <div className="space-y-3">
          <div className="px-2 py-1 w-fit rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[8px] font-black uppercase text-cyan-400 mb-2">Medium-Hard</div>
          <div className="flex flex-wrap gap-1.5">
            {["Longest substring", "Window constraints"].map((tag, j) => (
              <span key={j} className="text-[8px] font-black text-slate-400 uppercase tracking-tighter bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{tag}</span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-[9px] font-black text-cyan-400 uppercase`}>
            <ChevronRight size={10} /> Longest Substring No Repeat
          </div>
        </div>
      )
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

      <ConceptGrid items={patterns} columns={3} />

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