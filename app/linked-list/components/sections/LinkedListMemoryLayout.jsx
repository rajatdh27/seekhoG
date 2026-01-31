"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Cpu, Share2, MousePointer2, Zap, ArrowRightLeft, Repeat, Link as LinkIcon, Code2, Plus, Minus } from "lucide-react";

export default function LinkedListMemoryLayout() {
  const nodes = [
    { addr: "0x1024", data: 10, next: "0x2048", pos: { x: 5, y: 20 } },
    { addr: "0x2048", data: 20, next: "0x1500", pos: { x: 35, y: 55 } },
    { addr: "0x1500", data: 30, next: "NULL", pos: { x: 65, y: 15 } },
  ];

  const listTypes = [
    {
      title: "Singly Linked List",
      icon: LinkIcon,
      color: "emerald",
      footer: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl flex items-center justify-center border border-white/5 h-20 overflow-hidden">
            <div className="flex items-center gap-2 py-4">
              <div className="flex border border-emerald-500/30 rounded-lg overflow-hidden bg-slate-900 shadow-lg">
                <div className="px-2 py-1 text-[10px] font-bold border-r border-emerald-500/30">Data</div>
                <div className="px-2 py-1 text-[10px] font-bold text-emerald-400">Next</div>
              </div>
              <ArrowRightLeft size={12} className="text-slate-600" />
              <div className="w-4 h-4 rounded-full border border-slate-700" />
            </div>
          </div>
          <div>
            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Plus size={10} /> Advantages
            </div>
            <ul className="space-y-1.5">
              {["Simple logic", "Minimal memory overhead", "O(1) head insertion"].map((pro, j) => (
                <li key={j} className="text-[9px] text-slate-400 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1 shrink-0" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-white/5">
            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Minus size={10} /> Disadvantages
            </div>
            <ul className="space-y-1.5">
              {["One-way traversal", "Search is O(n)", "Delete needs prev node"].map((con, j) => (
                <li key={j} className="text-[9px] text-slate-500 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-rose-500 mt-1 shrink-0" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Doubly Linked List",
      icon: ArrowRightLeft,
      color: "blue",
      footer: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl flex items-center justify-center border border-white/5 h-20 overflow-hidden">
            <div className="flex items-center gap-2 py-4">
              <div className="w-4 h-4 rounded-full border border-slate-700" />
              <ArrowRightLeft size={12} className="text-slate-600" />
              <div className="flex border border-blue-500/30 rounded-lg overflow-hidden bg-slate-900 shadow-lg">
                <div className="px-2 py-1 text-[10px] font-bold border-r border-blue-500/30 text-blue-400">Prev</div>
                <div className="px-2 py-1 text-[10px] font-bold border-r border-blue-500/30">Data</div>
                <div className="px-2 py-1 text-[10px] font-bold text-blue-400">Next</div>
              </div>
              <ArrowRightLeft size={12} className="text-slate-600" />
            </div>
          </div>
          <div>
            <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Plus size={10} /> Advantages
            </div>
            <ul className="space-y-1.5">
              {["Bidirectional traversal", "O(1) delete with node ref", "Easier to reverse"].map((pro, j) => (
                <li key={j} className="text-[9px] text-slate-400 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-1 shrink-0" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-white/5">
            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Minus size={10} /> Disadvantages
            </div>
            <ul className="space-y-1.5">
              {["Extra memory for pointers", "More complex logic", "Slightly more writes"].map((con, j) => (
                <li key={j} className="text-[9px] text-slate-500 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-rose-500 mt-1 shrink-0" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Circular Linked List",
      icon: Repeat,
      color: "purple",
      footer: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl flex items-center justify-center border border-white/5 h-20 overflow-hidden">
            <div className="flex items-center gap-2 py-4 relative">
              <div className="flex border border-purple-500/30 rounded-lg overflow-hidden bg-slate-900 shadow-lg">
                <div className="px-2 py-1 text-[10px] font-bold border-r border-purple-500/30">Data</div>
                <div className="px-2 py-1 text-[10px] font-bold text-purple-400">Next</div>
              </div>
              <div className="absolute -bottom-2 right-0 w-16 h-4 border-b border-r border-purple-500/20 rounded-br-lg" />
              <div className="absolute -bottom-2 left-0 w-4 h-4 border-l border-purple-500/20 rounded-bl-lg" />
            </div>
          </div>
          <div>
            <div className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Plus size={10} /> Advantages
            </div>
            <ul className="space-y-1.5">
              {["No NULL at end", "Back to start instantly", "Ideal for buffers"].map((pro, j) => (
                <li key={j} className="text-[9px] text-slate-400 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-500 mt-1 shrink-0" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-white/5">
            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Minus size={10} /> Disadvantages
            </div>
            <ul className="space-y-1.5">
              {["Infinite loop risk", "Null check complexity", "Harder to debug"].map((con, j) => (
                <li key={j} className="text-[9px] text-slate-500 font-bold flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-rose-500 mt-1 shrink-0" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Memory & Implementation" 
        description="Visualizing structural differences and performance trade-offs."
        icon={Cpu} 
        color="indigo" 
      />

      <div className="space-y-12">
        {/* Distributed Memory Visualization */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner relative min-h-[350px] overflow-hidden">
          <div className="absolute inset-0 opacity-5 grid grid-cols-12 grid-rows-6 pointer-events-none">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-indigo-500/20" />
            ))}
          </div>

          <div className="flex items-center justify-between mb-10 relative z-10">
            <h3 className="text-xl font-black text-white flex items-center gap-3">
              <Share2 size={20} className="text-indigo-400" /> Non-Contiguous Allocation
            </h3>
            <span className="text-[10px] font-black uppercase text-slate-500 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5">Heap Memory</span>
          </div>

          <div className="relative h-48 w-full">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                style={{ position: 'absolute', left: `${node.pos.x}%`, top: `${node.pos.y}%` }}
                className="group"
              >
                <div className="w-24 h-28 bg-slate-900 border-2 border-indigo-500/30 rounded-xl p-3 flex flex-col justify-between shadow-2xl group-hover:border-indigo-500 transition-all">
                  <div className="text-[8px] font-black text-indigo-400 uppercase">{node.addr}</div>
                  <div className="text-center py-1">
                    <div className="text-[10px] font-black text-white">{node.data}</div>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[8px] text-slate-500 font-bold uppercase">Next</div>
                    <div className="text-[9px] font-mono text-emerald-400 font-black truncate">{node.next}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10 relative z-10">
            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
              Nodes are scattered. The <strong className="text-white">Pointer</strong> is the only link. If the link is broken, the subsequent nodes become unreachable (Memory Leak).
            </p>
          </div>
        </div>

        {/* Comparison Cards with Visuals, Pros, and Cons */}
        <ConceptGrid items={listTypes} columns={3} />

        {/* Step-by-Step Implementation logic */}
        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
          
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Code2 className="text-emerald-400" /> Implementation Blueprint
          </h3>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                { step: "01", title: "Define the Node", desc: "Create a class/struct with a data field and a pointer field." },
                { step: "02", title: "Initialize Head", desc: "Set a Head pointer to NULL to indicate an empty list." },
                { step: "03", title: "Allocate Memory", desc: "For new data, dynamically allocate a new Node on the heap." },
                { step: "04", title: "Link the Pointers", desc: "Update the 'next' pointer of the new/prev node to point to the correct address." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-xl font-black text-slate-800 group-hover:text-emerald-500/20 transition-colors">{item.step}</span>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 border border-white/5 shadow-2xl flex flex-col justify-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Conceptual logic (Insert Head)</div>
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <span className="text-emerald-500">1.</span>
                  <span>newNode = new Node(value)</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <span className="text-emerald-500">2.</span>
                  <span>newNode.next = head</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <span className="text-emerald-500">3.</span>
                  <span>head = newNode</span>
                </div>
              </div>
              <p className="mt-6 text-[9px] text-slate-500 font-bold italic text-center uppercase tracking-widest">
                Result: New node becomes the entry point in O(1).
              </p>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}