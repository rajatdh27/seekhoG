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
    description: "A stack where elements are always in a sorted order (increasing or decreasing). Essential for finding the 'next greater' or 'previous smaller' element.",
    whenToUse: [
      "Finding next/previous greater/smaller elements",
      "Stock span problems",
      "Largest rectangle in a histogram",
    ],
    template: `function nextGreaterElement(arr) {
  const result = new Array(arr.length);
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
    keyInsight: "Each element is pushed and popped at most once. The sorted nature of the stack efficiently finds the next boundary.",
  },
  {
    id: "expression-evaluation",
    name: "Expression Evaluation",
    icon: <Calculator />,
    description: "Using one stack for numbers and another for operators to correctly evaluate mathematical expressions, respecting precedence.",
    whenToUse: [
      "Implementing a calculator",
      "Converting infix to postfix/prefix",
      "Evaluating Reverse Polish Notation (RPN)",
    ],
    template: `function evaluatePostfix(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else if (token === '/') stack.push(Math.trunc(a / b));
    }
  }
  return stack[0];
}`,
    keyInsight: "A stack perfectly models the order of operations, especially for postfix notation where operators are applied to the most recent operands.",
  },
  {
    id: "parentheses-matching",
    name: "Valid Parentheses",
    icon: <Brackets />,
    description: "The classic use-case. Push opening brackets onto the stack; when a closing bracket appears, pop and check for a match.",
    whenToUse: [
      "Validating any paired delimiters",
      "Finding the length of the longest valid substring",
      "Removing invalid parentheses",
    ],
    template: `function isValid(s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  for (const char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const lastOpen = stack.pop();
      if (map[lastOpen] !== char) return false;
    }
  }
  return stack.length === 0;
}`,
    keyInsight: "The LIFO nature of a stack mirrors the nested structure of valid parentheses. The last bracket opened must be the first one closed.",
  },
  {
    id: "backtracking",
    name: "Backtracking / DFS",
    icon: <Orbit />,
    description: "Using a stack to explicitly manage the nodes to visit in a graph or state space, simulating the recursion of Depth-First Search.",
    whenToUse: [
      "Iterative tree or graph traversals (pre-order, in-order, post-order)",
      "Solving mazes or finding paths",
      "Combinatorial problems (e.g., generating permutations)",
    ],
    template: `function dfs(graph, startNode) {
  const stack = [startNode];
  const visited = new Set();
  
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      // Process node...
      
      // Add neighbors to the stack
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}`,
    keyInsight: "The call stack in a recursive DFS is implicitly a stack. An explicit stack makes the process iterative and can prevent stack overflow errors.",
  },
    {
    id: "min-max-stack",
    name: "Min/Max Stack",
    icon: <ArrowLeftRight />,
    description: "An augmented stack that tracks the current minimum or maximum element in O(1) time.",
    whenToUse: [
      "Frequent queries for the min/max element in a changing dataset",
      "Designing data structures with efficient min/max retrieval",
    ],
    template: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity;
    this.minStack.push(Math.min(currentMin, val));
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`,
    keyInsight: "By using an auxiliary stack that stores the minimum value at each state, we can provide O(1) lookups without traversing the main stack.",
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
                        <h3 className="text-3xl font-black text-white mb-4 flex items-center gap-3">{pattern.icon} {pattern.name}</h3>
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
                             <h4 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2"><HelpCircle size={16}/> Key Insight</h4>
                             <p className="text-sm text-slate-300 font-medium leading-relaxed">{pattern.keyInsight}</p>
                        </div>
                        
                        <CodeBlock code={pattern.template} language="javascript" title="JavaScript Template"/>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </PerspectiveCard>
  );
}