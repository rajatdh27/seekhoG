"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { ComplexityAnalysis } from "@/app/components/common/algorithm";
import { Zap, Clock, MousePointer2, Trash2, List, Share2, ArrowRightLeft, Repeat, Lightbulb, AlertTriangle, BarChart3, CheckCircle2 } from "lucide-react";

export default function LinkedListComplexity() {
  const [activeType, setActiveType] = useState("singly");

  const opsData = {
    singly: [
      { op: "Access by Index", time: "O(n)", space: "O(1)", desc: "Must traverse from head to reach index i" },
      { op: "Search by Value", time: "O(n)", space: "O(1)", desc: "Must check each node until value found" },
      { op: "Insert at Head", time: "O(1)", space: "O(1)", desc: "Just update head pointer" },
      { op: "Insert at Tail", time: "O(n)", space: "O(1)", desc: "Must traverse to end (O(1) with tail ptr)" },
      { op: "Insert at Position", time: "O(n)", space: "O(1)", desc: "Traverse to position i-1, then link" },
      { op: "Delete at Head", time: "O(1)", space: "O(1)", desc: "Just update head pointer" },
      { op: "Delete at Tail", time: "O(n)", space: "O(1)", desc: "Must traverse to second-to-last node" },
      { op: "Reverse List", time: "O(n)", space: "O(1)", desc: "Iterate once, reversing pointers in-place" },
      { op: "Find Middle", time: "O(n)", space: "O(1)", desc: "Slow and fast pointers (Floyd's algorithm)" },
      { op: "Detect Cycle", time: "O(n)", space: "O(1)", desc: "Floyd's cycle detection algorithm" },
    ],
    doubly: [
      { op: "Access by Index", time: "O(n)", space: "O(1)", desc: "Can traverse from nearest end (head/tail)" },
      { op: "Search by Value", time: "O(n)", space: "O(1)", desc: "Must check each node" },
      { op: "Insert at Head", time: "O(1)", space: "O(1)", desc: "Update head and head.prev" },
      { op: "Insert at Tail", time: "O(1)", space: "O(1)", desc: "Update tail and tail.next (with tail pointer)" },
      { op: "Insert at Position", time: "O(n)", space: "O(1)", desc: "Traverse to position, update 4 pointers" },
      { op: "Delete at Head", time: "O(1)", space: "O(1)", desc: "Update head and head.prev" },
      { op: "Delete at Tail", time: "O(1)", space: "O(1)", desc: "Update tail and tail.next (with tail pointer)" },
      { op: "Delete Node (ref)", time: "O(1)", space: "O(1)", desc: "Direct access via prev and next pointers" },
      { op: "Reverse", time: "O(n)", space: "O(1)", desc: "Swap prev and next for each node" },
      { op: "Traverse Backward", time: "O(n)", space: "O(1)", desc: "Start from tail, follow prev pointers" },
    ],
    circular: [
      { op: "Access by Index", time: "O(n)", space: "O(1)", desc: "Traverse from head, stop after n iterations" },
      { op: "Search by Value", time: "O(n)", space: "O(1)", desc: "Must check all nodes (avoid infinite loop)" },
      { op: "Insert at Head", time: "O(n)", space: "O(1)", desc: "Update last node's pointer (O(1) with tail ptr)" },
      { op: "Insert at Tail", time: "O(n)", space: "O(1)", desc: "Traverse to last node, update its next" },
      { op: "Delete at Head", time: "O(n)", space: "O(1)", desc: "Must update last node's pointer" },
      { op: "Delete Node", time: "O(n)", space: "O(1)", desc: "Find previous node, update pointers" },
      { op: "Reverse", time: "O(n)", space: "O(1)", desc: "Reverse pointers, maintain circularity" },
      { op: "Check if Circular", time: "O(1)", space: "O(1)", desc: "last.next == head" },
      { op: "Split into Two", time: "O(n)", space: "O(1)", desc: "Find middle, create two circular lists" },
      { op: "Get Length", time: "O(n)", space: "O(1)", desc: "Traverse until head is reached again" },
    ]
  };

  const comparisonData = [
    { op: "Access Index", array: "O(1)", singly: "O(n)", doubly: "O(n)" },
    { op: "Insert Start", array: "O(n)", singly: "O(1)", doubly: "O(1)" },
    { op: "Insert End", array: "O(1)", singly: "O(n)*", doubly: "O(1)" },
    { op: "Delete Start", array: "O(n)", singly: "O(1)", doubly: "O(1)" },
    { op: "Search", array: "O(n)**", singly: "O(n)", doubly: "O(n)" },
    { op: "Memory/Node", array: "Data only", singly: "Data + 1 ptr", doubly: "Data + 2 ptrs" },
  ];

  const typeConfig = {
    singly: { color: "emerald", label: "Singly", icon: Share2 },
    doubly: { color: "blue", label: "Doubly", icon: ArrowRightLeft },
    circular: { color: "purple", label: "Circular", icon: Repeat }
  };

  const activeColor = typeConfig[activeType].color;

  return (
    <PerspectiveCard color="amber">
      <SectionHeader 
        title="Complexity Analysis" 
        description="Efficiency patterns across all list variations."
        icon={Zap} 
        color="amber" 
      />

      <div className="space-y-12">
        {/* Type Selector */}
        <div className="flex p-1 bg-slate-950 rounded-2xl border border-white/5 mb-8 w-fit mx-auto overflow-x-auto">
          {Object.entries(typeConfig).map(([id, config]) => (
            <button
              key={id}
              onClick={() => setActiveType(id)}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeType === id 
                  ? `bg-${config.color}-500 text-white shadow-lg shadow-${config.color}-500/20` 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              <config.icon size={14} />
              {config.label}
            </button>
          ))}
        </div>

        <ComplexityAnalysis 
          timeBest="O(1)"
          timeAverage="O(n)"
          timeWorst="O(n)"
          space="O(n)"
          spaceNote={activeType === "singly" ? "Data + 1 Pointer" : activeType === "doubly" ? "Data + 2 Pointers" : "Data + Loop Link"}
          color={activeColor}
        />

        {/* Detailed Operations Table */}
        <div className={`bg-slate-950 border border-${activeColor}-500/20 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl relative transition-colors duration-500`}>
          <div className={`absolute top-0 right-0 w-64 h-64 bg-${activeColor}-500/5 blur-[100px] pointer-events-none`} />
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative z-10">
            <List size={24} className={`text-${activeColor}-400`} /> {typeConfig[activeType].label} List Operations
          </h3>
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <th className="py-4 px-4">Operation</th>
                  <th className={`py-4 px-4 text-${activeColor}-400`}>Time</th>
                  <th className="py-4 px-4 text-blue-400">Space</th>
                  <th className="py-4 px-4">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {opsData[activeType].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-200">{row.op}</td>
                    <td className={`py-4 px-4 font-mono font-black text-${activeColor}-400 text-xs`}>{row.time}</td>
                    <td className="py-4 px-4 font-mono font-black text-blue-400 text-xs">{row.space}</td>
                    <td className="py-4 px-4 text-[10px] text-slate-500 font-bold leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Linked List vs Array Comparison */}
        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl relative">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-blue-400" /> List vs Array Matrix
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <th className="py-4 px-4">Operation</th>
                  <th className="py-4 px-4 text-blue-400">Array</th>
                  <th className="py-4 px-4 text-emerald-400">Singly List</th>
                  <th className="py-4 px-4 text-indigo-400">Doubly List</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-black text-slate-500 uppercase text-[9px] tracking-tighter">{row.op}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{row.array}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">{row.singly}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-indigo-400 transition-colors">{row.doubly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-2 px-4">
            <p className="text-[9px] text-slate-600 font-bold uppercase">* O(1) if tail pointer is maintained</p>
            <p className="text-[9px] text-slate-600 font-bold uppercase">** Binary search O(log n) only if sorted</p>
          </div>
        </div>

        {/* Tips & Pitfalls */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Lightbulb size={80} /></div>
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
              <Lightbulb size={20} /> Optimization Tips
            </h3>
            <ul className="space-y-3 relative z-10">
              {[
                "Maintain tail pointer for O(1) end insertion",
                "Keep a size variable for O(1) length queries",
                "Use dummy head nodes to simplify edge logic",
                "Apply Fast & Slow pointers for cycle detection",
                "Consider doubly lists for frequent back-traversal"
              ].map((text, i) => (
                <li key={i} className="text-[11px] font-bold text-slate-400 flex items-start gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><AlertTriangle size={80} /></div>
            <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
              <AlertTriangle size={20} /> Common Pitfalls
            </h3>
            <ul className="space-y-3 relative z-10">
              {[
                "Null pointer dereference - always check if head is null",
                "Memory leaks in C/C++ - missing free() or delete",
                "Losing head reference when modifying the list",
                "Infinite loops in circular lists (missing break condition)",
                "Off-by-one errors when traversing to a position"
              ].map((text, i) => (
                <li key={i} className="text-[11px] font-bold text-slate-400 flex items-start gap-2">
                  <div className="w-1 h-1 bg-rose-500 rounded-full mt-1.5 shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Space Complexity Analysis Block */}
        <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem]">
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Share2 size={24} className="text-blue-400" /> Space Complexity Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Singly List Overhead</div>
                <p className="text-slate-300 text-xs font-medium">Data + 1 Pointer per node. Approx 12-16 bytes/node.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Doubly List Overhead</div>
                <p className="text-slate-300 text-xs font-medium">Data + 2 Pointers per node. Approx 20-24 bytes/node.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <p className="text-[11px] text-slate-400 font-bold">Overall Space: <span className="text-white">O(n)</span> for n elements.</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <p className="text-[11px] text-slate-400 font-bold">Auxiliary Space: <span className="text-white">O(1)</span> for most iterative ops.</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <BarChart3 size={16} className="text-blue-400 shrink-0" />
                <p className="text-[10px] text-blue-300 font-bold uppercase tracking-tight leading-snug">Linked Lists use 25-100% more memory than arrays due to pointer storage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}