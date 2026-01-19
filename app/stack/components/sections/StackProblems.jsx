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
    { name: "Remove All Adjacent Duplicates In String", d: "e", key: "Stack for adjacent removal" },
    { name: "Make The String Great", d: "e", key: "Stack for case matching" },
    { name: "Remove Outermost Parentheses", d: "e", key: "Counter + stack" },
    { name: "Crawler Log Folder", d: "e", key: "Stack for directory navigation" },
    { name: "Daily Temperatures", d: "m", key: "Monotonic decreasing stack" },
    { name: "Next Greater Element II", d: "m", key: "Circular array + stack" },
    { name: "Online Stock Span", d: "m", key: "Monotonic stack with count" },
    { name: "Sum of Subarray Minimums", d: "m", key: "Previous/next smaller with stack" },
    { name: "Sum of Subarray Ranges", d: "m", key: "Min and max contributions" },
    { name: "132 Pattern", d: "m", key: "Monotonic stack tracking" },
    { name: "Remove K Digits", d: "m", key: "Monotonic increasing stack" },
    { name: "Remove Duplicate Letters", d: "m", key: "Greedy + monotonic stack" },
    { name: "Shortest Unsorted Continuous Subarray", d: "m", key: "Find boundaries with stack" },
    { name: "Number of Visible People in a Queue", d: "m", key: "Next greater problem" },
    { name: "Find the Most Competitive Subsequence", d: "m", key: "Monotonic stack + k elements" },
    { name: "Largest Rectangle in Histogram", d: "h", key: "Monotonic increasing stack" },
    { name: "Maximal Rectangle", d: "h", key: "Histogram per row" },
    { name: "Trapping Rain Water", d: "h", key: "Monotonic decreasing stack" },
    { name: "Maximum Score of a Good Subarray", d: "h", key: "Monotonic stack + expand" },
    { name: "Count Subarrays With Fixed Bounds", d: "h", key: "Monotonic deque approach" },
  ],
  "Expression Evaluation": [
    { name: "Valid Parentheses", d: "e", key: "Stack matching pairs" },
    { name: "Remove All Adjacent Duplicates In String", d: "e", key: "Stack building result" },
    { name: "Build an Array With Stack Operations", d: "e", key: "Simulate operations" },
    { name: "Basic Calculator II", d: "m", key: "Operator precedence + stack" },
    { name: "Evaluate Reverse Polish Notation", d: "m", key: "Postfix evaluation" },
    { name: "Decode String", d: "m", key: "Nested encoding with stack" },
    { name: "Asteroid Collision", d: "m", key: "Stack for collision simulation" },
    { name: "Score of Parentheses", d: "m", key: "Depth tracking with stack" },
    { name: "Simplify Path", d: "m", key: "Unix path parsing" },
    { name: "Remove All Adjacent Duplicates in String II", d: "m", key: "Stack with counters" },
    { name: "Parsing A Boolean Expression", d: "m", key: "Recursive stack parsing" },
    { name: "Ternary Expression Parser", d: "m", key: "Stack for ternary" },
    { name: "Basic Calculator", d: "h", key: "Handle +, -, ()" },
    { name: "Basic Calculator III", d: "h", key: "All operators + parentheses" },
    { name: "Expression Add Operators", d: "h", key: "Backtracking + evaluation" },
    { name: "Parse Lisp Expression", d: "h", key: "Complex parsing with stack" },
    { name: "Number of Atoms", d: "h", key: "Chemical formula parsing" },
  ],
  "Parentheses Matching": [
    { name: "Valid Parentheses", d: "e", key: "Basic stack matching" },
    { name: "Remove Outermost Parentheses", d: "e", key: "Track depth" },
    { name: "Maximum Nesting Depth of the Parentheses", d: "e", key: "Counter approach" },
    { name: "Longest Valid Parentheses", d: "m", key: "Stack with indices" },
    { name: "Minimum Add to Make Parentheses Valid", d: "m", key: "Count unmatched" },
    { name: "Minimum Remove to Make Valid Parentheses", d: "m", key: "Mark invalid positions" },
    { name: "Score of Parentheses", d: "m", key: "Depth-based scoring" },
    { name: "Generate Parentheses", d: "m", key: "Backtracking generation" },
    { name: "Different Ways to Add Parentheses", d: "m", key: "Divide and conquer" },
    { name: "Check if a Parentheses String Can Be Valid", d: "m", key: "Two-pass validation" },
    { name: "Remove Invalid Parentheses", d: "h", key: "BFS to find minimum removals" },
    { name: "Valid Parenthesis String", d: "h", key: "Range tracking" },
    { name: "Minimum Number of Swaps to Make the String Balanced", d: "h", key: "Greedy swapping" },
  ],
  "Design": [
    { name: "Min Stack", d: "e", key: "Auxiliary min stack" },
    { name: "Implement Stack using Queues", d: "e", key: "Queue simulation" },
    { name: "Implement Queue using Stacks", d: "e", key: "Two stacks approach" },
    { name: "Max Stack", d: "m", key: "Two stacks or stack + heap" },
    { name: "Design a Stack With Increment Operation", d: "m", key: "Lazy increment array" },
    { name: "Maximum Frequency Stack", d: "m", key: "Frequency map + stacks" },
    { name: "Dinner Plate Stacks", d: "m", key: "Multiple stacks + heap" },
    { name: "Design Browser History", d: "m", key: "Two stacks for back/forward" },
    { name: "LRU Cache", d: "h", key: "Hash map + doubly linked list" },
    { name: "All O`one Data Structure", d: "h", key: "Multiple data structures" },
  ],
  "Tree Traversal": [
    { name: "Binary Tree Inorder Traversal", d: "e", key: "Iterative with stack" },
    { name: "Binary Tree Preorder Traversal", d: "e", key: "Iterative DFS" },
    { name: "Binary Tree Postorder Traversal", d: "e", key: "Modified preorder" },
    { name: "N-ary Tree Preorder Traversal", d: "e", key: "Stack for N-ary" },
    { name: "N-ary Tree Postorder Traversal", d: "e", key: "Reverse of preorder" },
    { name: "Binary Tree Zigzag Level Order Traversal", d: "m", key: "Two stacks for zigzag" },
    { name: "Binary Search Tree Iterator", d: "m", key: "Controlled inorder" },
    { name: "Flatten Binary Tree to Linked List", d: "m", key: "Modified preorder" },
    { name: "Path Sum II", d: "m", key: "DFS with path tracking" },
    { name: "Sum Root to Leaf Numbers", d: "m", key: "DFS accumulate path values" },
    { name: "Kth Smallest Element in a BST", d: "m", key: "Inorder until kth" },
    { name: "Binary Tree Maximum Path Sum", d: "h", key: "DFS with global max" },
    { name: "Serialize and Deserialize Binary Tree", d: "h", key: "Preorder serialization" },
    { name: "Vertical Order Traversal of a Binary Tree", d: "h", key: "DFS + sorting" },
  ],
  "String Processing": [
    { name: "Valid Parentheses", d: "e", key: "Basic stack" },
    { name: "Remove All Adjacent Duplicates In String", d: "e", key: "Stack building" },
    { name: "Backspace String Compare", d: "e", key: "Build final strings" },
    { name: "Make The String Great", d: "e", key: "Remove bad pairs" },
    { name: "Decode String", d: "m", key: "Nested brackets" },
    { name: "Simplify Path", d: "m", key: "Parse Unix path" },
    { name: "Remove Duplicate Letters", d: "m", key: "Lexicographically smallest" },
    { name: "Reverse Substrings Between Each Pair of Parentheses", d: "m", key: "Stack reversal" },
    { name: "Tag Validator", d: "m", key: "Stack for XML tags" },
    { name: "Validate Stack Sequences", d: "m", key: "Simulate push/pop" },
    { name: "Removing Stars From a String", d: "m", key: "Stack for star removal" },
    { name: "Longest Valid Parentheses", d: "h", key: "DP or stack approach" },
    { name: "Number of Atoms", d: "h", key: "Parse chemical formula" },
  ],
  "Sliding Window + Deque": [
    { name: "Sliding Window Maximum", d: "m", key: "Monotonic deque" },
    { name: "Jump Game VI", d: "m", key: "DP + monotonic deque" },
    { name: "Shortest Subarray with Sum at Least K", d: "m", key: "Prefix sum + deque" },
    { name: "Constrained Subsequence Sum", d: "m", key: "DP + deque optimization" },
    { name: "Max Value of Equation", d: "h", key: "Deque for max tracking" },
    { name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", d: "h", key: "Two deques" },
  ],
  "Histogram/Area": [
      { name: "Largest Rectangle in Histogram", d: "h", key: "Monotonic stack" },
      { name: "Maximal Rectangle", d: "h", key: "Multiple histograms" },
      { name: "Maximal Square", d: "h", key: "DP + histogram" },
      { name: "Count Submatrices With All Ones", d: "h", key: "Histogram approach" },
  ],
  "Graph DFS": [
      { name: "Clone Graph", d: "m", key: "DFS with stack + visited" },
      { name: "All Paths From Source to Target", d: "m", key: "DFS path tracking" },
      { name: "Keys and Rooms", d: "m", key: "DFS traversal" },
      { name: "Number of Islands", d: "m", key: "DFS with stack" },
      { name: "Number of Provinces", d: "m", key: "DFS component counting" },
      { name: "Evaluate Division", d: "m", key: "DFS on graph" },
      { name: "Critical Connections in a Network", d: "h", key: "Tarjan's algorithm" },
      { name: "Longest Increasing Path in a Matrix", d: "h", key: "DFS + memoization" },
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