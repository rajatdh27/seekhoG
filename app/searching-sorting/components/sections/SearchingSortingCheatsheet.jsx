"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { FileText, Search, BarChart3, HelpCircle, Zap, BookOpen } from "lucide-react";

export default function SearchingSortingCheatsheet() {
  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Algorithm Cheatsheet" 
        description="Quick reference for complexity and use cases."
        icon={FileText} 
        color="indigo" 
      />

      {/* ... keeping existing content tables ... */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-blue-400 mb-6 flex items-center gap-3">
          <Search size={24} /> Searching Algorithms
        </h3>

        <div className="overflow-x-auto rounded-[2rem] border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse bg-slate-950/50">
            <thead>
              <tr className="border-b border-white/10 text-slate-500 text-xs uppercase tracking-widest font-black bg-slate-900/80">
                <th className="p-5">Algorithm</th>
                <th className="p-5 text-center">Best Case</th>
                <th className="p-5 text-center">Average</th>
                <th className="p-5 text-center">Worst Case</th>
                <th className="p-5 text-center">Space</th>
                <th className="p-5">Best For</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-300">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-blue-400 text-base">Linear Search</strong>
                  <div className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wider">Sequential Scan</div>
                </td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-center"><span className="text-yellow-400 font-bold">O(n)</span></td>
                <td className="p-5 text-center"><span className="text-yellow-400 font-bold">O(n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-xs font-bold leading-relaxed text-slate-400">
                  Small or unsorted arrays
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-blue-400 text-base">Binary Search</strong>
                  <div className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wider">Divide & Conquer</div>
                </td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(log n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(log n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-xs font-bold leading-relaxed text-slate-400">
                  <span className="text-white">Sorted arrays</span>, large datasets
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-black text-orange-400 mb-6 flex items-center gap-3">
          <BarChart3 size={24} /> Sorting Algorithms
        </h3>

        <div className="overflow-x-auto rounded-[2rem] border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse bg-slate-950/50">
            <thead>
              <tr className="border-b border-white/10 text-slate-500 text-xs uppercase tracking-widest font-black bg-slate-900/80">
                <th className="p-5">Algorithm</th>
                <th className="p-5 text-center">Best</th>
                <th className="p-5 text-center">Average</th>
                <th className="p-5 text-center">Worst</th>
                <th className="p-5 text-center">Space</th>
                <th className="p-5 text-center">Stable?</th>
                <th className="p-5">Best For</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-300">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-orange-400 text-base">Bubble Sort</strong>
                </td>
                <td className="p-5 text-center"><span className="text-yellow-400 font-bold">O(n)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-black">✓</span></td>
                <td className="p-5 text-xs font-bold text-slate-400">Learning, tiny datasets</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-orange-400 text-base">Selection Sort</strong>
                </td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-black">✗</span></td>
                <td className="p-5 text-xs font-bold text-slate-400">Minimizing memory writes</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-orange-400 text-base">Insertion Sort</strong>
                </td>
                <td className="p-5 text-center"><span className="text-yellow-400 font-bold">O(n)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(1)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-black">✓</span></td>
                <td className="p-5 text-xs font-bold text-slate-400"><span className="text-white">Nearly sorted</span>, small data</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-orange-400 text-base">Merge Sort</strong>
                </td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(n log n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(n log n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(n log n)</span></td>
                <td className="p-5 text-center"><span className="text-yellow-400 font-bold">O(n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-black">✓</span></td>
                <td className="p-5 text-xs font-bold text-slate-400"><span className="text-white">Guaranteed speed</span>, stable</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5">
                  <strong className="text-orange-400 text-base">Quick Sort</strong>
                </td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(n log n)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(n log n)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-bold">O(n²)</span></td>
                <td className="p-5 text-center"><span className="text-emerald-400 font-bold">O(log n)</span></td>
                <td className="p-5 text-center"><span className="text-rose-400 font-black">✗</span></td>
                <td className="p-5 text-xs font-bold text-slate-400"><span className="text-white">Fastest</span> average case</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-black text-purple-400 mb-6 flex items-center gap-3">
          <HelpCircle size={24} /> Quick Decision Guide
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-[2rem]">
            <h4 className="text-lg font-black text-blue-400 mb-4 flex items-center gap-2">
              <Search size={18} /> Searching
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Sorted Array?", action: "Binary Search", complex: "O(log n)" },
                { label: "Unsorted Array?", action: "Linear Search", complex: "O(n)" },
                { label: "Search Many Times?", action: "Sort + Binary", complex: "O(n log n)" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-300 text-xs font-bold uppercase tracking-wide">{item.label}</span>
                  <div className="text-right">
                    <div className="text-blue-400 font-black text-sm">{item.action}</div>
                    <div className="text-slate-500 text-[10px] font-bold">{item.complex}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-[2rem]">
            <h4 className="text-lg font-black text-orange-400 mb-4 flex items-center gap-2">
              <BarChart3 size={18} /> Sorting
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Fastest Generally?", action: "Quick Sort", complex: "Avg O(n log n)" },
                { label: "Guaranteed Speed?", action: "Merge Sort", complex: "Always O(n log n)" },
                { label: "Nearly Sorted?", action: "Insertion Sort", complex: "Best O(n)" },
                { label: "Tiny Dataset?", action: "Bubble Sort", complex: "Simple Code" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-300 text-xs font-bold uppercase tracking-wide">{item.label}</span>
                  <div className="text-right">
                    <div className="text-orange-400 font-black text-sm">{item.action}</div>
                    <div className="text-slate-500 text-[10px] font-bold">{item.complex}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}