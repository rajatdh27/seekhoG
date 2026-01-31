"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Database, CheckCircle2, Layout, Zap, Target, HelpCircle, Box, Layers, Grid3X3, Infinity, RotateCcw, SortAsc } from "lucide-react";

export default function ArrayIntro() {
  const characteristics = [
    { title: "Random Access", description: "Instant access to any item using its index (O(1)).", icon: Zap, color: "amber" },
    { title: "Contiguous Memory", description: "Elements stored in adjacent locations for cache speed.", icon: Box, color: "blue" },
    { title: "Fixed Size", description: "Size is determined at creation (in static languages).", icon: Target, color: "rose" },
    { title: "Homogeneous", description: "All elements must be of the same data type.", icon: Layers, color: "emerald" }
  ];

  const arrayTypes = [
    { title: "1D Array (Linear)", description: "Single row of elements.", icon: Box, color: "blue", footer: <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/5 p-2 rounded-lg border border-blue-500/10">Lists, basic collections</div> },
    { title: "2D Array (Matrix)", description: "Grid structure with rows/cols.", icon: Grid3X3, color: "indigo", footer: <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/5 p-2 rounded-lg border border-indigo-500/10">Images, grids, boards</div> },
    { title: "Multidimensional", description: "3D, 4D or higher dimensions.", icon: Layers, color: "purple", footer: <div className="text-[9px] font-black text-purple-400 uppercase tracking-widest bg-purple-500/5 p-2 rounded-lg border border-purple-500/10">3D graphics, scientific data</div> },
    { title: "Jagged Array", description: "Array of arrays with different lengths.", icon: Database, color: "cyan", footer: <div className="text-[9px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/5 p-2 rounded-lg border border-cyan-500/10">Irregular data structures</div> },
    { title: "Static Array", description: "Fixed size determined at creation.", icon: Zap, color: "emerald", footer: <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">Embedded systems, fixed data</div> },
    { title: "Dynamic Array", description: "Resizable (Vector, ArrayList).", icon: Infinity, color: "orange", footer: <div className="text-[9px] font-black text-orange-400 uppercase tracking-widest bg-orange-500/5 p-2 rounded-lg border border-orange-500/10">When size changes at runtime</div> },
    { title: "Circular Array", description: "Last element connects to first.", icon: RotateCcw, color: "rose", footer: <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest bg-rose-500/5 p-2 rounded-lg border border-rose-500/10">Ring buffers, scheduling</div> },
    { title: "Sorted Array", description: "Elements in specific order.", icon: SortAsc, color: "amber", footer: <div className="text-[9px] font-black text-amber-400 uppercase tracking-widest bg-amber-500/5 p-2 rounded-lg border border-amber-500/10">Binary search, range queries</div> },
  ];

  const realWorldAnalogies = [
    { title: "Apartment Building", description: "Each apartment has a unique number (index).", icon: () => <span className="text-2xl">🏘️</span>, color: "blue" },
    { title: "Train Compartments", description: "Sequential and connected in a line.", icon: () => <span className="text-2xl">🚂</span>, color: "blue" },
    { title: "Egg Carton", description: "Fixed number of slots for items.", icon: () => <span className="text-2xl">🥚</span>, color: "blue" }
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
          <ConceptGrid 
            items={characteristics} 
            columns={2} 
            className="lg:col-span-2"
          />
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-blue-500/30 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <HelpCircle size={20} className="text-blue-400" /> Real-World
            </h3>
            <ConceptGrid items={realWorldAnalogies} columns={1} variant="horizontal" />
          </div>
        </div>

        {/* Types of Arrays */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layers size={24} className="text-purple-400" /> Types of Arrays
          </h3>
          <ConceptGrid 
            items={arrayTypes} 
            columns={4} 
          />
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
