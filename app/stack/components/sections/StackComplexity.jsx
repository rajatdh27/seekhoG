"use client";

import { motion } from "framer-motion";
import { Zap, AlertTriangle, Check, X } from "lucide-react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";

const complexityData = [
  { op: "Push", best: "O(1)", avg: "O(1)", worst: "O(1)*", space: "O(1)" },
  { op: "Pop", best: "O(1)", avg: "O(1)", worst: "O(1)", space: "O(1)" },
  { op: "Peek/Top", best: "O(1)", avg: "O(1)", worst: "O(1)", space: "O(1)" },
  { op: "isEmpty", best: "O(1)", avg: "O(1)", worst: "O(1)", space: "O(1)" },
  { op: "Size", best: "O(1)", avg: "O(1)", worst: "O(1)", space: "O(1)" },
  { op: "Search", best: "O(1)", avg: "O(n)", worst: "O(n)", space: "O(1)" },
];

export default function StackComplexity() {
  return (
    <PerspectiveCard color="purple">
      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        Stack operations are extremely efficient. All core operations run in constant time O(1).
      </p>
      
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm text-left border-collapse">
            <thead className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                <tr className="border-b border-white/10">
                    <th className="py-4 px-4">Operation</th>
                    <th className="py-4 px-4 text-center text-purple-400">Best Case</th>
                    <th className="py-4 px-4 text-center text-purple-400">Average Case</th>
                    <th className="py-4 px-4 text-center text-purple-400">Worst Case</th>
                    <th className="py-4 px-4 text-center text-purple-400">Space</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {complexityData.map((row) => (
                    <tr key={row.op} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 font-black text-slate-400 uppercase text-xs tracking-tighter">{row.op}</td>
                        <td className="py-4 px-4 text-center font-bold text-slate-300 transition-colors">
                           <span className={`px-2 py-1 rounded-full font-mono text-xs font-bold ${row.best === 'O(1)' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{row.best}</span>
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-slate-300 transition-colors">
                           <span className={`px-2 py-1 rounded-full font-mono text-xs font-bold ${row.avg === 'O(1)' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{row.avg}</span>
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-slate-300 transition-colors">
                           <span className={`px-2 py-1 rounded-full font-mono text-xs font-bold ${row.worst === 'O(1)' || row.worst === 'O(1)*' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{row.worst}</span>
                        </td>
                         <td className="py-4 px-4 text-center font-bold text-slate-300 transition-colors">
                           <span className="px-2 py-1 rounded-full font-mono text-xs font-bold bg-sky-500/10 text-sky-400">{row.space}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p className="mt-2 text-center text-xs text-slate-500">*O(n) if dynamic array needs resizing (amortized O(1))</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-purple-400 mb-6 flex items-center gap-3">
                Why O(1)?
            </h3>
            <p className="text-sm font-bold text-slate-300 leading-relaxed">
            Stack operations don't need to shift elements or iterate. They only ever interact with the <strong className="text-white">top</strong> of the stack. A simple pointer or index is updated, which is a single, constant-time operation.
            </p>
        </div>
        <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-purple-400 mb-6 flex items-center gap-3">
                Space Complexity: O(n)
            </h3>
            <p className="text-sm font-bold text-slate-300 leading-relaxed">
            The space required is proportional to the number of elements (<strong className="text-white">n</strong>). An array may allocate extra space, and a linked list uses extra space for pointers. All individual operations use O(1) auxiliary space.
            </p>
        </div>
      </div>
      
      <div className="mt-12">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <AlertTriangle size={24} className="text-amber-400" /> Performance Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="p-8 bg-green-500/5 border border-green-500/20 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-green-400 mb-6 flex items-center gap-3">
                  <Check size={20} /> Do
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" /> Preallocate array if size known</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" /> Use array-based for cache performance</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" /> Keep to O(1) operations</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" /> Avoid searching (use a hash map)</li>
                </ul>
             </div>
             <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-3">
                  <X size={20} /> Don't
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" /> Access elements in the middle</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" /> Iterate through the stack frequently</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" /> Use if you need random access</li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" /> Forget to check isEmpty before pop</li>
                </ul>
             </div>
          </div>
      </div>
    </PerspectiveCard>
  );
}