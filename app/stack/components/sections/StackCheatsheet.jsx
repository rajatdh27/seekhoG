"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { FileText, Plus, Minus, Check, X, RefreshCcwDot, Lightbulb, TrendingUp, Code2 } from "lucide-react";

export default function StackCheatsheet() {
  return (
    <PerspectiveCard color="purple">
       <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Quick Reference</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Stack Cheatsheet</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Pattern Recognition */}
        <CheatCard
          title="Pattern Recognition"
          items={[
            "Next Greater/Smaller → Monotonic Stack",
            "Valid Parentheses → Stack Matching",
            "Expression Parsing → Stack Evaluation",
            "Histogram Problems → Monotonic Stack",
            "DFS/Backtracking → Stack for State",
            "Undo/Redo → Two Stacks",
          ]}
          color="purple"
          icon={<Lightbulb />}
        />

        {/* Time Complexities */}
        <CheatCard
          title="Time Complexities"
          items={[
            "Push: O(1)",
            "Pop: O(1)",
            "Peek/Top: O(1)",
            "isEmpty: O(1)",
            "Size: O(1)",
            "Search: O(n) - avoid",
          ]}
          color="pink"
          icon={<TrendingUp />}
        />

        {/* Edge Cases */}
        <CheatCard
          title="Edge Cases to Check"
          items={[
            "Empty stack",
            "Full stack (array-based)",
            "Single element stack",
            "Duplicate elements",
            "Null/undefined values",
            "Invalid input",
          ]}
          color="blue"
          icon={<RefreshCcwDot />}
        />

        {/* Common Mistakes */}
        <CheatCard
          title="Common Mistakes"
          items={[
            "Not checking isEmpty before pop/peek",
            "Accessing middle elements (wrong DS)",
            "Forgetting stack overflow for arrays",
            "Wrong monotonic stack direction",
            "Confusing LIFO with FIFO",
            "Not handling parentheses properly",
          ]}
          color="rose"
          icon={<X />}
        />
        
        {/* Implementation Comparison */}
        <CheatCard
          title="Implementation Choices"
          items={[
            "Array-Based: fixed size, cache-friendly, O(1) ops*",
            "Linked-List: dynamic size, extra memory for pointers, O(1) ops",
            "*Array push can be O(N) on resize (amortized O(1))"
          ]}
          color="emerald"
          icon={<Code2 />}
        />
        
         {/* Interview Tips */}
        <CheatCard
          title="Interview Tips"
          items={[
            "Clearly state assumptions",
            "Discuss tradeoffs (space/time)",
            "Handle edge cases explicitly",
            "Dry run with examples",
            "Always check constraints",
            "Explain your thought process"
          ]}
          color="amber"
          icon={<Check />}
        />
      </div>

      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
        <Code2 size={24} className="text-purple-400" /> Essential Code Snippets
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <CodeBlock code={`// Monotonic Stack (Next Greater)
function nextGreater(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}`} language="javascript" title="Monotonic Stack" />

        <CodeBlock code={`// Valid Parentheses
function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
    if (!(char in pairs)) { // Opening bracket
      stack.push(char);
    } else { // Closing bracket
      if (!stack.length || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}`} language="javascript" title="Valid Parentheses" />

        <CodeBlock code={`// Min Stack Design
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Auxiliary stack
  }

  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0 ? val :
                        this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(currentMin, val));
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`} language="javascript" title="Min Stack" />

        <CodeBlock code={`// DFS Iterative with Stack
function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;

    visited.add(node);
    result.push(node); // Process node

    // Add neighbors in reverse order for consistent traversal
    for (let i = graph[node].length - 1; i >= 0; i--) {
      const neighbor = graph[node][i];
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
  return result;
}`} language="javascript" title="DFS Iterative" />
      </div>

      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
        <Code2 size={24} className="text-pink-400" /> Language Quick Reference
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LanguageQuickRef
            lang="JavaScript"
            icon="🟨"
            push="arr.push(x)"
            pop="arr.pop()"
            peek="arr[arr.length - 1]"
            isEmpty="arr.length === 0"
          />
          <LanguageQuickRef
            lang="Python"
            icon="🐍"
            push="stack.append(x)"
            pop="stack.pop()"
            peek="stack[-1]"
            isEmpty="not stack"
          />
          <LanguageQuickRef
            lang="C++ (std::stack)"
            icon="⚡"
            push="st.push(x)"
            pop="st.pop()" // returns void
            peek="st.top()"
            isEmpty="st.empty()"
          />
          <LanguageQuickRef
            lang="Java (Deque)"
            icon="☕"
            push="deque.push(x)"
            pop="deque.pop()"
            peek="deque.peek()"
            isEmpty="deque.isEmpty()"
          />
          <LanguageQuickRef
            lang="Go (slice)"
            icon="🔵"
            push="stack = append(stack, x)"
            pop="stack = stack[:len(stack)-1]"
            peek="stack[len(stack)-1]"
            isEmpty="len(stack) == 0"
          />
          <LanguageQuickRef
            lang="C (Array-based)"
            icon="🔷"
            push="s[++top] = x"
            pop="s[top--]"
            peek="s[top]"
            isEmpty="top == -1"
          />
        </div>
    </PerspectiveCard>
  );
}

function CheatCard({ title, items, color, icon }) {
  const colors = {
    purple: "from-purple-500/10 to-purple-500/10 border-purple-500/20",
    pink: "from-pink-500/10 to-pink-500/10 border-pink-500/20",
    blue: "from-blue-500/10 to-blue-500/10 border-blue-500/20",
    rose: "from-rose-500/10 to-rose-500/10 border-rose-500/20",
    emerald: "from-emerald-500/10 to-emerald-500/10 border-emerald-500/20",
    amber: "from-amber-500/10 to-amber-500/10 border-amber-500/20",
  };

  const iconColors = {
    purple: "text-purple-400",
    pink: "text-pink-400",
    blue: "text-blue-400",
    rose: "text-rose-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`p-6 bg-slate-900/70 border ${colors[color]} rounded-2xl shadow-lg group relative overflow-hidden`}
    >
      <div className={`absolute -top-4 -right-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity ${iconColors[color]}`}>
        {icon}
      </div>
      <h3 className="font-black text-lg text-white mb-4 relative z-10">
        {title}
      </h3>
      <ul className="space-y-2 relative z-10">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xs text-slate-300 flex items-start gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function LanguageQuickRef({ lang, icon, push, pop, peek, isEmpty }) {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-900/70 border border-white/5 rounded-2xl flex flex-col items-center text-center group"
    >
      <div className={`text-3xl mb-4 p-3 rounded-full bg-slate-800 border border-white/10 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="font-black text-sm text-purple-400 uppercase tracking-wider mb-4">{lang}</h4>
      <div className="space-y-2 w-full text-xs font-mono">
        <div className="flex justify-between items-center text-slate-400">
          <span>Push:</span>
          <code className="text-white bg-slate-800 px-2 py-1 rounded">{push}</code>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <span>Pop:</span>
          <code className="text-white bg-slate-800 px-2 py-1 rounded">{pop}</code>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <span>Peek:</span>
          <code className="text-white bg-slate-800 px-2 py-1 rounded">{peek}</code>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <span>isEmpty:</span>
          <code className="text-white bg-slate-800 px-2 py-1 rounded">{isEmpty}</code>
        </div>
      </div>
    </motion.div>
  );
}