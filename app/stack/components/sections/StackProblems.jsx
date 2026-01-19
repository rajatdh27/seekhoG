"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Trophy, Tag } from "lucide-react";

const problemsByPattern = {
  "Monotonic Stack": [
    { name: "Next Greater Element I", d: "e", key: "Hash map + monotonic stack" },
    { name: "Baseball Game", d: "e", key: "Stack simulation" },
    { name: "Backspace String Compare", d: "e", key: "Build strings using stack" },
    { name: "Daily Temperatures", d: "m", key: "Monotonic decreasing stack" },
    { name: "Next Greater Element II", d: "m", key: "Circular array + stack" },
    { name: "Online Stock Span", d: "m", key: "Monotonic stack with count" },
    { name: "Sum of Subarray Minimums", d: "m", key: "Previous/next smaller with stack" },
    { name: "132 Pattern", d: "m", key: "Monotonic stack tracking" },
    { name: "Largest Rectangle in Histogram", d: "h", key: "Monotonic increasing stack" },
    { name: "Maximal Rectangle", d: "h", key: "Histogram per row" },
    { name: "Trapping Rain Water", d: "h", key: "Monotonic decreasing stack" },
  ],
  "Expression Evaluation": [
    { name: "Valid Parentheses", d: "e", key: "Stack matching pairs" },
    { name: "Basic Calculator II", d: "m", key: "Operator precedence + stack" },
    { name: "Evaluate Reverse Polish Notation", d: "m", key: "Postfix evaluation" },
    { name: "Decode String", d: "m", key: "Nested encoding with stack" },
    { name: "Simplify Path", d: "m", key: "Unix path parsing" },
    { name: "Basic Calculator", d: "h", key: "Handle +, -, ()" },
    { name: "Expression Add Operators", d: "h", key: "Backtracking + evaluation" },
  ],
  "Parentheses Matching": [
    { name: "Valid Parentheses", d: "e", key: "Basic stack matching" },
    { name: "Maximum Nesting Depth", d: "e", key: "Counter approach" },
    { name: "Longest Valid Parentheses", d: "m", key: "Stack with indices" },
    { name: "Minimum Add to Make Valid", d: "m", key: "Count unmatched" },
    { name: "Generate Parentheses", d: "m", key: "Backtracking generation" },
    { name: "Remove Invalid Parentheses", d: "h", key: "BFS to find minimum removals" },
  ],
  "Design": [
    { name: "Min Stack", d: "e", key: "Auxiliary min stack" },
    { name: "Implement Stack using Queues", d: "e", key: "Queue simulation" },
    { name: "Max Stack", d: "m", key: "Two stacks or stack + heap" },
    { name: "Design Browser History", d: "m", key: "Two stacks for back/forward" },
    { name: "Maximum Frequency Stack", d: "h", key: "Frequency map + stacks" },
  ],
  "Tree Traversal": [
      { name: "Binary Tree Inorder Traversal", d: "e", key: "Iterative with stack" },
      { name: "Binary Tree Preorder Traversal", d: "e", key: "Iterative DFS" },
      { name: "Binary Tree Postorder Traversal", d: "e", key: "Modified preorder" },
      { name: "Binary Tree Zigzag Level Order Traversal", d: "m", key: "Two stacks for zigzag" },
      { name: "Binary Search Tree Iterator", d: "m", key: "Controlled inorder" },
      { name: "Flatten Binary Tree to Linked List", d: "m", key: "Modified preorder" },
      { name: "Kth Smallest Element in a BST", d: "m", key: "Inorder until kth" },
      { name: "Binary Tree Maximum Path Sum", d: "h", key: "DFS with global max" },
  ],
  "String Processing": [
      { name: "Valid Parentheses", d: "e", key: "Basic stack" },
      { name: "Backspace String Compare", d: "e", key: "Build final strings" },
      { name: "Decode String", d: "m", key: "Nested brackets" },
      { name: "Simplify Path", d: "m", key: "Parse Unix path" },
      { name: "Remove Duplicate Letters", d: "m", key: "Lexicographically smallest" },
      { name: "Validate Stack Sequences", d: "m", key: "Simulate push/pop" },
      { name: "Longest Valid Parentheses", d: "h", key: "DP or stack approach" },
  ],
  "Sliding Window / Deque": [
      { name: "Sliding Window Maximum", d: "m", key: "Monotonic deque" },
      { name: "Shortest Subarray with Sum at Least K", d: "m", key: "Prefix sum + deque" },
      { name: "Longest Continuous Subarray With Absolute Diff", d: "h", key: "Two deques" },
  ],
  "Graph / DFS": [
      { name: "Clone Graph", d: "m", key: "DFS with stack + visited" },
      { name: "All Paths From Source to Target", d: "m", key: "DFS path tracking" },
      { name: "Number of Islands", d: "m", key: "DFS with stack" },
      { name: "Critical Connections in a Network", d: "h", key: "Tarjan's algorithm" },
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

  const getStats = (pattern) => {
    const problems = problemsByPattern[pattern];
    return {
      easy: problems.filter(p => p.d === 'e').length,
      medium: problems.filter(p => p.d === 'm').length,
      hard: problems.filter(p => p.d === 'h').length,
    }
  }

  const currentStats = getStats(activePattern);

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
      
      <div className="mb-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20"><span className="font-black text-2xl text-emerald-400">{currentStats.easy}</span><p className="text-xs text-slate-400">Easy</p></div>
          <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20"><span className="font-black text-2xl text-amber-400">{currentStats.medium}</span><p className="text-xs text-slate-400">Medium</p></div>
          <div className="p-4 bg-rose-500/10 rounded-lg border border-rose-500/20"><span className="font-black text-2xl text-rose-400">{currentStats.hard}</span><p className="text-xs text-slate-400">Hard</p></div>
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

      <div className="mt-12 p-8 bg-slate-900/70 border border-white/5 rounded-2xl">
         <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3">How to Practice</h3>
         <ol className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-3"><span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span><span>Start with <strong>Easy</strong> problems to understand the core pattern.</span></li>
            <li className="flex items-start gap-3"><span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span><span>Read the "Key" hint - it reveals the essential insight.</span></li>
            <li className="flex items-start gap-3"><span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span><span>Use the pattern template from the Patterns section.</span></li>
            <li className="flex items-start gap-3"><span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span><span>Progress to <strong>Medium</strong> after mastering the easy ones.</span></li>
            <li className="flex items-start gap-3"><span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span><span>Tackle <strong>Hard</strong> problems once confident with the pattern.</span></li>
         </ol>
      </div>

    </PerspectiveCard>
  );
}