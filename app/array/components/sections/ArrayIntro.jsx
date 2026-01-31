"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { Database, CheckCircle2, Layout, Zap, Target, HelpCircle, Box, Layers, Grid3X3, Infinity, RotateCcw, SortAsc } from "lucide-react";

export default function ArrayIntro() {
  const arrayTypes = [
    { name: "1D Array (Linear)", desc: "Single row of elements.", icon: <Box size={20} />, usage: "Lists, basic collections", color: "blue" },
    { name: "2D Array (Matrix)", desc: "Grid structure with rows/cols.", icon: <Grid3X3 size={20} />, usage: "Images, grids, boards", color: "indigo" },
    { name: "Multidimensional", desc: "3D, 4D or higher dimensions.", icon: <Layers size={20} />, usage: "3D graphics, scientific data", color: "purple" },
    { name: "Jagged Array", desc: "Array of arrays with different lengths.", icon: <Database size={20} />, usage: "Irregular data structures", color: "cyan" },
    { name: "Static Array", desc: "Fixed size determined at creation.", icon: <Zap size={20} />, usage: "Embedded systems, fixed data", color: "emerald" },
    { name: "Dynamic Array", desc: "Resizable (Vector, ArrayList).", icon: <Infinity size={20} />, usage: "When size changes at runtime", color: "orange" },
    { name: "Circular Array", desc: "Last element connects to first.", icon: <RotateCcw size={20} />, usage: "Ring buffers, scheduling", color: "rose" },
    { name: "Sorted Array", desc: "Elements in specific order.", icon: <SortAsc size={20} />, usage: "Binary search, range queries", color: "amber" },
  ];

  return (
    <PerspectiveCard color="blue">
      <SectionHeader 
        title="What is an Array?" 
        icon={Database} 
        color="blue" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          An <strong className="text-white">Array</strong> is a fundamental data structure that stores a fixed-size collection of elements of the same type in <strong className="text-blue-400">contiguous memory locations</strong>. Each element can be accessed directly using an index.
        </p>

        {/* Analogy & Core Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {[
              { title: "Random Access", text: "Instant access to any item using its index (O(1)).", icon: <Zap className="text-amber-400" /> },
              { title: "Contiguous Memory", text: "Elements stored in adjacent locations for cache speed.", icon: <Box className="text-blue-400" /> },
              { title: "Fixed Size", text: "Size is determined at creation (in static languages).", icon: <Target className="text-rose-400" /> },
              { title: "Homogeneous", text: "All elements must be of the same data type.", icon: <Layers className="text-emerald-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">{item.icon}</div>
                <div className="font-black text-white text-sm uppercase tracking-tighter">{item.title}</div>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-blue-500/30 rounded-[2.5rem] p-8 flex flex-col justify-center">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <HelpCircle size={20} className="text-blue-400" /> Real-World
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Apartment Building", desc: "Each apartment has a unique number (index)." },
                { title: "Train Compartments", desc: "Sequential and connected in a line." },
                { title: "Egg Carton", desc: "Fixed number of slots for items." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="text-2xl mt-1">🏘️</div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-tight">{item.title}</div>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Types of Arrays */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layers size={24} className="text-purple-400" /> Types of Arrays
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {arrayTypes.map((type, i) => (
              <div key={i} className="p-5 bg-slate-900 border border-white/5 rounded-2xl group hover:border-white/10 transition-colors">
                <div className={`w-10 h-10 rounded-xl bg-${type.color}-500/10 text-${type.color}-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tighter">{type.name}</h4>
                <p className="text-[10px] text-slate-500 font-bold mb-3">{type.desc}</p>
                <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/5 p-2 rounded-lg border border-blue-500/10">
                  {type.usage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} /> Use Arrays When:
            </h3>
            <ul className="space-y-4">
              {[
                "You need fast random access (O(1))",
                "You know the size in advance",
                "Memory efficiency is a priority",
                "Sequential iteration is needed",
                "Cache locality benefits performance"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
              <HelpCircle size={20} /> Challenges:
            </h3>
            <ul className="space-y-4">
              {[
                "Insertions/deletions are expensive (O(n))",
                "Fixed size in many languages",
                "Unsorted search is slow (O(n))",
                "Memory waste if size is overestimated",
                "Cannot grow easily (Static Arrays)"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
