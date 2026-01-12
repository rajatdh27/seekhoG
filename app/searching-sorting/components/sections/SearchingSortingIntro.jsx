"use client";

import { motion } from "framer-motion";
import SearchingSortingCard from "./SearchingSortingCard";
import { Search, ArrowUpDown, Zap, CheckCircle2, Layout, GitMerge, MousePointerClick } from "lucide-react";

export default function SearchingSortingIntro() {
  return (
    <SearchingSortingCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
          <Search size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Searching & Sorting</h2>
      </div>

      <div className="space-y-10">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          Two of the most fundamental operations in computer science. <strong className="text-white">Searching</strong> finds data in a collection, while <strong className="text-white">Sorting</strong> organizes it for efficient retrieval.
        </p>

        {/* Core Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Searching Card */}
          <div className="bg-slate-950/50 border border-blue-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity text-blue-500">
              <Search size={100} />
            </div>
            <h3 className="text-2xl font-black text-blue-400 mb-6 flex items-center gap-3">
              <Search size={24} /> Searching
            </h3>
            <p className="text-slate-400 mb-6 font-medium">Finding a specific element in a collection of data.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <div>
                  <div className="font-bold text-white text-sm">Linear Search</div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">O(n) • Simple</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <div>
                  <div className="font-bold text-white text-sm">Binary Search</div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">O(log n) • Fast (Sorted)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Sorting Card */}
          <div className="bg-slate-950/50 border border-orange-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-orange-500/40 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity text-orange-500">
              <ArrowUpDown size={100} />
            </div>
            <h3 className="text-2xl font-black text-orange-400 mb-6 flex items-center gap-3">
              <ArrowUpDown size={24} /> Sorting
            </h3>
            <p className="text-slate-400 mb-6 font-medium">Arranging data in a specific order (ascending/descending).</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                <div>
                  <div className="font-bold text-white text-sm">Simple Sorts</div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Bubble • Selection • Insertion</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                <div>
                  <div className="font-bold text-white text-sm">Efficient Sorts</div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Merge • Quick • Heap</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 overflow-hidden">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Zap className="text-yellow-400" /> Performance at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-500 text-xs uppercase tracking-widest font-black">
                  <th className="p-4">Algorithm</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Best</th>
                  <th className="p-4">Average</th>
                  <th className="p-4">Worst</th>
                  <th className="p-4">Space</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {[
                  { name: "Linear Search", type: "Search", best: "O(1)", avg: "O(n)", worst: "O(n)", space: "O(1)", color: "blue" },
                  { name: "Binary Search", type: "Search", best: "O(1)", avg: "O(log n)", worst: "O(log n)", space: "O(1)", color: "blue" },
                  { name: "Bubble Sort", type: "Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", color: "orange" },
                  { name: "Merge Sort", type: "Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(n)", color: "purple" },
                  { name: "Quick Sort", type: "Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n)", color: "purple" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`p-4 font-bold text-${row.color}-400`}>{row.name}</td>
                    <td className="p-4 text-slate-400">{row.type}</td>
                    <td className="p-4 text-emerald-400">{row.best}</td>
                    <td className={`p-4 ${row.avg.includes('n²') ? 'text-rose-400' : 'text-yellow-400'}`}>{row.avg}</td>
                    <td className={`p-4 ${row.worst.includes('n²') ? 'text-rose-400' : 'text-yellow-400'}`}>{row.worst}</td>
                    <td className="p-4 text-slate-400">{row.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { text: "Watch algorithms work step-by-step with animations", icon: Layout },
            { text: "Understand the logic & trade-offs", icon: GitMerge },
            { text: "Implement in 6 different languages", icon: MousePointerClick },
            { text: "Know when to use which algorithm", icon: CheckCircle2 }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <item.icon size={20} />
              </div>
              <p className="text-slate-300 font-bold text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SearchingSortingCard>
  );
}