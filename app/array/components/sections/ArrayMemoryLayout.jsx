"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Cpu, Zap, ArrowRight, Layers, Table, Grid3X3, FastForward, TrendingUp } from "lucide-react";

export default function ArrayMemoryLayout() {
  const growthSteps = [
    { title: "Full Capacity", description: "Current static block is filled.", icon: () => <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black flex items-center justify-center border border-orange-500/30">1</div>, color: "orange" },
    { title: "Allocation", description: "Request new block (usually 2x size) - O(n).", icon: () => <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black flex items-center justify-center border border-orange-500/30">2</div>, color: "orange" },
    { title: "Copy & Free", description: "Move old elements to new block and free old memory.", icon: () => <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black flex items-center justify-center border border-orange-500/30">3</div>, color: "orange" },
    { title: "Amortized O(1)", description: "Average time over n appends remains constant.", icon: () => <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black flex items-center justify-center border border-orange-500/30">4</div>, color: "orange" }
  ];

  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Memory Architecture" 
        description="Contiguous storage, pointers, and cache efficiency."
        icon={Cpu} 
        color="indigo" 
      />

      <div className="space-y-12">
        {/* Low-Level Visualization */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Layers size={24} className="text-indigo-400" /> Contiguous RAM Allocation
            </h3>
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-900 px-4 py-2 rounded-xl">
              <span>Int size: 4 Bytes</span>
              <span className="text-indigo-500">Base: 0x1000</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {[10, 20, 30, 40, 50].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[10px] font-black text-slate-600 mb-2">arr[{i}]</div>
                <div className="w-20 h-24 bg-slate-900 border-2 border-indigo-500/20 rounded-xl flex flex-col items-center justify-center shadow-lg group relative overflow-hidden">
                  <div className="text-2xl font-black text-white z-10">{val}</div>
                  <div className="text-[8px] font-mono text-slate-500 mt-2 z-10">32-bit Bin</div>
                  <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-3 text-[9px] font-mono text-indigo-400 font-bold">0x{1000 + i*4}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <Table size={16} className="text-blue-400" /> The Formula
              </h4>
              <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-indigo-300 border border-white/5 mb-4">
                address = base + (index × size)
              </div>
              <p className="text-slate-400 text-xs font-medium leading-relaxed italic">
                Example: Accessing index 3. <br/>
                0x1000 + (3 × 4 bytes) = <span className="text-white">0x100C</span>
              </p>
            </div>
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                <FastForward size={16} className="text-amber-400" /> Why O(1)?
              </h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                CPU performs a single arithmetic instruction to jump to the exact location. No traversal or searching required.
              </p>
            </div>
          </div>
        </div>

        {/* 2D Layout & Order */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Grid3X3 size={20} className="text-blue-400" /> 2D Array Memory
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">📊 Row-Major Order</div>
                <p className="text-slate-400 text-xs font-medium">Rows stored contiguously. Used by C, C++, Java, JS, Python. Fast row iteration.</p>
              </div>
              <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">📊 Column-Major Order</div>
                <p className="text-slate-400 text-xs font-medium">Columns stored contiguously. Used by Fortran, MATLAB, R. Fast column iteration.</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <Zap size={16} className="text-rose-500 shrink-0" />
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-tight">Accessing in wrong order can be 100x slower due to cache misses!</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <TrendingUp size={20} className="text-orange-400" /> Dynamic Growth
            </h3>
            <ConceptGrid items={growthSteps} columns={1} variant="horizontal" />
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
