"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Trophy, Tag } from "lucide-react";


const problemsByPattern = {
  "Monotonic Stack": [
    { name: "Next Greater Element I", d: "e", key: "Hash map + monotonic stack" },
    { name: "Daily Temperatures", d: "m", key: "Monotonic decreasing stack" },
    { name: "Largest Rectangle in Histogram", d: "h", key: "Monotonic increasing stack" },
    { name: "132 Pattern", d: "m", key: "Monotonic stack tracking" },
    { name: "Remove K Digits", d: "m", key: "Monotonic increasing stack" },
    { name: "Trapping Rain Water", d: "h", key: "Monotonic decreasing stack" },
    { name: "Sum of Subarray Minimums", d: "m", key: "Previous/next smaller elements" },
  ],
  "Expression Evaluation": [
      { name: "Valid Parentheses", d: "e", key: "Stack matching pairs" },
      { name: "Evaluate Reverse Polish Notation", d: "m", key: "Postfix evaluation" },
      { name: "Basic Calculator II", d: "m", key: "Operator precedence" },
      { name: "Decode String", d: "m", key: "Nested encoding with counts" },
      { name: "Simplify Path", d: "m", key: "Unix path parsing" },
      { name: "Basic Calculator", d: "h", key: "Handle parentheses" },
  ],
  "Backtracking / DFS": [
      { name: "Binary Tree Inorder Traversal", d: "e", key: "Iterative with stack" },
      { name: "Clone Graph", d: "m", key: "DFS with stack + visited map" },
      { name: "Number of Islands", d: "m", key: "Iterative DFS" },
      { name: "Generate Parentheses", d: "m", key: "Backtracking with counts" },
      { name: "Target Sum", d: "m", key: "DFS with state" },
  ],
  "Design": [
    { name: "Min Stack", d: "e", key: "Auxiliary min stack" },
    { name: "Implement Stack using Queues", d: "e", key: "Two-queue simulation" },
    { name: "Design Browser History", d: "m", key: "Two stacks for back/forward" },
    { name: "Maximum Frequency Stack", d: "h", key: "Map of stacks" },
    { name: "Dinner Plate Stacks", d: "h", key: "Array of stacks + min-heap" },
  ],
};
const patterns = Object.keys(problemsByPattern);
const difficulties = [
    {id: "all", name: "All"},
    {id: "e", name: "Easy"},
    {id: "m", name: "Medium"},
    {id: "h", name: "Hard"},
]

const diffStyles = {
    e: { tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", name: "Easy" },
    m: { tag: "bg-amber-500/10 text-amber-400 border-amber-500/20", name: "Medium" },
    h: { tag: "bg-rose-500/10 text-rose-400 border-rose-500/20", name: "Hard" },
}

export default function StackProblems() {
  const [activePattern, setActivePattern] = useState(patterns[0]);
  const [activeDiff, setActiveDiff] = useState("all");

  const filteredProblems = problemsByPattern[activePattern].filter(p => activeDiff === 'all' || p.d === activeDiff);

  return (
    <PerspectiveCard color="purple">
      <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Problem Bank</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Must-Know Problems</p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700">
          {patterns.map(p => (
            <button key={p} onClick={() => setActivePattern(p)} className={`px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl transition-colors ${activePattern === p ? 'bg-purple-500 text-white' : 'text-slate-400 hover:bg-slate-700/50'}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-center gap-4">
            {difficulties.map(d => (
                 <button key={d.id} onClick={() => setActiveDiff(d.id)} className={`px-4 py-1 text-xs font-bold rounded-full transition-colors ${activeDiff === d.id ? 'bg-slate-700 text-white' : 'text-slate-500 hover:bg-slate-800'}`}>
                    {d.name}
                 </button>
            ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredProblems.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-6 bg-slate-900/70 border border-white/5 rounded-2xl group"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors pr-4">{p.name}</h4>
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${diffStyles[p.d].tag}`}>{diffStyles[p.d].name}</span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-2">
                <Tag size={12} className="text-slate-600"/>
                {p.key}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredProblems.length === 0 && (
         <div className="text-center py-12">
            <p className="text-slate-500 font-bold">No problems match the selected difficulty.</p>
         </div>
      )}

    </PerspectiveCard>
  );
}