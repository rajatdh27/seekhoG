"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { FileText, Search, BarChart3, HelpCircle, Zap, BookOpen } from "lucide-react";

export default function SearchingSortingCheatsheet() {
  return (
    <PerspectiveCard color="orange">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 border border-indigo-500/20">
          <FileText size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Algorithm Cheatsheet</h2>
          <p className="text-slate-400 font-medium">Quick reference for complexity and use cases.</p>
        </div>
      </div>

      {/* Searching Algorithms */}
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

      {/* Sorting Algorithms */}
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
              {/* Bubble Sort */}
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
              {/* Selection Sort */}
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
              {/* Insertion Sort */}
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
              {/* Merge Sort */}
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
              {/* Quick Sort */}
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

      {/* Quick Decision Guide */}
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

      {/* Complexity Reference */}
      <div>
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Zap size={24} className="text-yellow-400" /> Complexity Reference
        </h3>
        
        <div className="bg-slate-950 p-6 rounded-[2rem] border border-white/10">
          <div className="grid gap-3">
            {[
              { val: "O(1)", name: "Constant", desc: "Instant access (Hash Map, Array Index)", color: "emerald" },
              { val: "O(log n)", name: "Logarithmic", desc: "Divide & Conquer (Binary Search)", color: "teal" },
              { val: "O(n)", name: "Linear", desc: "Looping through elements (Linear Search)", color: "yellow" },
              { val: "O(n log n)", name: "Linearithmic", desc: "Efficient Sorting (Merge/Quick Sort)", color: "orange" },
              { val: "O(n²)", name: "Quadratic", desc: "Nested Loops (Bubble/Insertion Sort)", color: "rose" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <div className={`w-20 text-center font-black text-${item.color}-400 text-lg`}>{item.val}</div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className={`font-bold text-${item.color}-400 text-sm uppercase tracking-wider`}>{item.name}</div>
                  <div className="text-slate-500 text-xs font-medium">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PerspectiveCard>
  );
}