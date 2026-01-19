"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Grid, BarChart2, Calculator, Brackets, Orbit, ArrowLeftRight, HelpCircle, Check } from "lucide-react";

const patterns = [
  {
    id: "monotonic-stack",
    name: "Monotonic Stack",
    icon: <BarChart2 />,
    difficulty: "Medium-Hard",
    description: "Maintain a stack in sorted (increasing or decreasing) order to efficiently find the next or previous greater/smaller elements.",
    whenToUse: ["Next Greater/Smaller Element", "Stock Span problems", "Largest Rectangle in Histogram", "Trapping Rain Water"],
    template: `function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }
  return result;
}`,
    problems: ["Next Greater Element I & II", "Daily Temperatures", "Online Stock Span", "Largest Rectangle in Histogram"],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Each element is pushed and popped from the stack at most once, giving O(n) time complexity.",
  },
  {
    id: "expression-evaluation",
    name: "Expression Evaluation",
    icon: <Calculator />,
    difficulty: "Medium",
    description: "Use stacks to evaluate arithmetic expressions, correctly handling operator precedence and parentheses.",
    whenToUse: ["Infix to Postfix conversion", "Postfix evaluation", "Calculator problems", "Expression parsing"],
    template: `function evaluatePostfix(expression) {
  const stack = [];
  for (let token of expression.split(' ')) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch(token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(Math.trunc(a / b)); break;
      }
    }
  }
  return stack.pop();
}`,
    problems: ["Basic Calculator I, II, III", "Evaluate Reverse Polish Notation", "Decode String"],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Use a stack to manage operands and operators, applying operators to the most recent operands in the correct order.",
  },
  {
    id: "parentheses-matching",
    name: "Parentheses Matching",
    icon: <Brackets />,
    difficulty: "Easy-Medium",
    description: "Use a stack to validate and match pairs of opening and closing brackets.",
    whenToUse: ["Validating parentheses", "Longest valid parentheses", "Removing invalid parentheses", "Balanced brackets checking"],
    template: `function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (pairs[char] === undefined) { // is opening bracket
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}`,
    problems: ["Valid Parentheses", "Longest Valid Parentheses", "Remove Invalid Parentheses", "Score of Parentheses"],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "The LIFO nature of a stack perfectly mirrors the nested structure of valid parentheses.",
  },
   {
    id: "histogram-problems",
    name: "Histogram/Rectangle",
    icon: <BarChart2 />,
    difficulty: "Hard",
    description: "Find the largest rectangle in a histogram using a monotonic stack to efficiently calculate width.",
    whenToUse: ["Largest Rectangle in Histogram", "Maximal Rectangle in a matrix", "Max area calculations"],
    template: `function largestRectangleArea(heights) {
  const stack = []; // stores indices
  let maxArea = 0;
  heights.push(0); // Sentinel value
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  return maxArea;
}`,
    problems: ["Largest Rectangle in Histogram", "Maximal Rectangle"],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "For each bar, the monotonic stack helps find the nearest left and right bars that are shorter, defining the width of the largest possible rectangle.",
  },
  {
    id: "backtracking-stack",
    name: "Backtracking with Stack",
    icon: <Orbit />,
    difficulty: "Medium",
    description: "Use a stack to explicitly manage state in backtracking or DFS problems, simulating recursion iteratively.",
    whenToUse: ["Iterative DFS traversal", "Path tracking in a maze", "State restoration in puzzles", "Combination and permutation problems"],
    template: `function dfsIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    // process(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}`,
    problems: ["Binary Tree Traversals (Inorder, Preorder, Postorder)", "All Paths From Source to Target", "Letter Combinations of a Phone Number"],
    complexity: "Time: O(V + E), Space: O(V)",
    keyInsight: "An explicit stack mimics the system's call stack, allowing DFS without deep recursion, thus preventing stack overflow errors.",
  },
  {
    id: "min-max-stack",
    name: "Min/Max Stack",
    icon: <ArrowLeftRight />,
    difficulty: "Easy-Medium",
    description: "Design a stack that supports `getMin()` or `getMax()` in O(1) time by using an auxiliary stack.",
    whenToUse: ["Designing a Min/Max Stack", "Sliding Window Maximum (with deque)", "Stock span with min/max tracking"],
    template: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    const min = this.minStack.length > 0 ? this.minStack[this.minStack.length-1] : val;
    this.minStack.push(Math.min(min, val));
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  getMin() {
    return this.minStack[this.minStack.length-1];
  }
}`,
    problems: ["Min Stack", "Max Stack", "Sliding Window Maximum"],
    complexity: "Time: O(1) for all ops, Space: O(n)",
    keyInsight: "Maintain a second stack that tracks the minimum/maximum value at each level of the main stack.",
  },
];

export default function StackPatterns() {
  const [pattern, setPattern] = useState(patterns[0]);

  return (
    <PerspectiveCard color="purple">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-2">
                    {patterns.map(p => (
                        <button 
                            key={p.id} 
                            onClick={() => setPattern(p)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${pattern.id === p.id ? 'bg-purple-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                        >
                            <div className={`w-8 h-8 flex items-center justify-center rounded-lg text-purple-400 ${pattern.id === p.id ? 'bg-purple-500/20' : 'bg-slate-800'}`}>
                                {p.icon}
                            </div>
                            <span className="text-sm font-bold">{p.name}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <main className="lg:col-span-8 xl:col-span-9 min-h-[600px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pattern.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <h3 className="text-3xl font-black text-white mb-2 sm:mb-0 flex items-center gap-3">{pattern.icon} {pattern.name}</h3>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-bold whitespace-nowrap border border-purple-500/20">{pattern.difficulty}</span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{pattern.description}</p>
                        
                        <div className="mb-8 p-6 bg-slate-900/70 border border-purple-500/20 rounded-2xl">
                             <h4 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">When to use</h4>
                             <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                                {pattern.whenToUse.map(item => (
                                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><Check size={14} className="text-green-500"/> {item}</li>
                                ))}
                             </ul>
                        </div>
                        
                         <div className="mb-8 p-6 bg-slate-900/70 border border-white/5 rounded-2xl">
                             <h4 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2"><HelpCircle size={16}/> Key Insight & Complexity</h4>
                             <p className="text-sm text-slate-300 font-medium leading-relaxed">{pattern.keyInsight}</p>
                             <p className="mt-2 font-mono text-xs text-pink-400 bg-pink-500/10 px-2 py-1 rounded-full inline-block">{pattern.complexity}</p>
                        </div>
                        
                        <CodeBlock code={pattern.template} language="javascript" title="JavaScript Template"/>

                        <div className="mt-8">
                            <h4 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Common Problems</h4>
                            <div className="flex flex-wrap gap-2">
                                {pattern.problems.map(prob => (
                                    <span key={prob} className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs font-medium text-slate-300">{prob}</span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
        <div className="mt-12 p-8 bg-slate-900/70 border border-white/5 rounded-2xl">
             <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3">How to Choose the Right Pattern</h3>
             <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">Next Greater/Smaller?</span><span className="text-slate-400">→ Use Monotonic Stack</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">Valid Parentheses?</span><span className="text-slate-400">→ Use Parentheses Matching</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">Expression Parsing?</span><span className="text-slate-400">→ Use Expression Evaluation</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">Rectangle/Histogram?</span><span className="text-slate-400">→ Use Histogram Pattern</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">DFS/Path Tracking?</span><span className="text-slate-400">→ Use Backtracking with Stack</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-purple-400 w-40">Need Min/Max in O(1)?</span><span className="text-slate-400">→ Use Min/Max Stack</span></div>
             </div>
        </div>
    </PerspectiveCard>
  );
}