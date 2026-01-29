"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { ModuleComplete } from "@/app/components/common/algorithm";
import { FileText, Plus, Minus, Check, X, RefreshCcwDot, Lightbulb, TrendingUp, Code2, HelpCircle } from "lucide-react";

export default function StackCheatsheet() {
  return (
    <PerspectiveCard color="purple">
       {/* ... existing content ... */}
       <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Quick Reference</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Stack Cheatsheet</p>
      </div>
      
      {/* ... keeping all tables and cards ... */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
        <CheatCard
          title="Time Complexities"
          items={[
            "Push: O(1)", "Pop: O(1)", "Peek/Top: O(1)",
            "isEmpty: O(1)", "Size: O(1)", "Search: O(n) - avoid",
          ]}
          color="pink"
          icon={<TrendingUp />}
        />
        <CheatCard
          title="Edge Cases"
          items={[
            "Empty stack", "Full stack (array-based)", "Single element stack",
            "Duplicate elements", "Null/undefined values", "Invalid input",
          ]}
          color="blue"
          icon={<RefreshCcwDot />}
        />
      </div>

      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
        <Code2 size={24} className="text-purple-400" /> Essential Snippets
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <CodeBlock code={`function nextGreater(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}`} language="javascript" title="Monotonic Stack (Next Greater)" />
        <CodeBlock code={`function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (!(char in pairs)) {
      stack.push(char);
    } else if (!stack.length || stack.pop() !== pairs[char]) {
      return false;
    }
  }
  return stack.length === 0;
}`} language="javascript" title="Valid Parentheses" />
      </div>

      <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem] mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">Interview Tips</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-bold text-purple-400 mb-3">Before Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Ask if LIFO order is required</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Clarify size constraints</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Discuss array vs. linked list tradeoffs</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-purple-400 mb-3">While Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Always check \`isEmpty\` before pop/peek</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Consider using indices instead of values</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Test with edge cases (empty, single)</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-purple-400 mb-3">Pattern Hints:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Next Greater" → Monotonic stack</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Valid brackets" → Stack matching</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Histogram" → Monotonic stack with area</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-purple-400 mb-3">Common Follow-ups:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Solve without extra space?</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>How to getMin in O(1)?</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Handle circular array?</li>
                </ul>
            </div>
        </div>
      </div>
      
      <div className="overflow-x-auto mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">Complexity Comparison</h3>
        <table className="w-full text-sm text-left border-collapse">
            <thead className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                <tr className="border-b border-white/10">
                    <th className="py-3 px-4">Operation</th>
                    <th className="py-3 px-4 text-center">Stack</th>
                    <th className="py-3 px-4 text-center">Queue</th>
                    <th className="py-3 px-4 text-center">Array</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {[
                    { op: "Insert at end", stack: "O(1)", queue: "O(1)", array: "O(1)" },
                    { op: "Remove from end", stack: "O(1)", queue: "O(n)", array: "O(1)" },
                    { op: "Access by index", stack: "O(n)", queue: "O(n)", array: "O(1)" },
                    { op: "Search", stack: "O(n)", queue: "O(n)", array: "O(n)" },
                ].map((row) => (
                    <tr key={row.op} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-400 text-xs">{row.op}</td>
                        <td className="py-3 px-4 text-center font-mono text-emerald-400">{row.stack}</td>
                        <td className="py-3 px-4 text-center font-mono text-amber-400">{row.queue}</td>
                        <td className="py-3 px-4 text-center font-mono text-sky-400">{row.array}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      <ModuleComplete 
        title="Stacks Mastery Complete" 
        description="You've mastered LIFO dynamics and monotonic patterns. Next up: Queues."
        nextModuleText="Start Queues" 
        nextModuleLink="/queue" 
        color="purple" 
      />
    </PerspectiveCard>
  );
}

function CheatCard({ title, items, color, icon }) {
  const colors = {
    purple: "from-purple-500/10 to-purple-500/10 border-purple-500/20",
    pink: "from-pink-500/10 to-pink-500/10 border-pink-500/20",
    blue: "from-blue-500/10 to-blue-500/10 border-blue-500/20",
  };
  const iconColors = {
    purple: "text-purple-400",
    pink: "text-pink-400",
    blue: "text-blue-400",
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
      <h3 className="font-black text-lg text-white mb-4 relative z-10">{title}</h3>
      <ul className="space-y-2 relative z-10">
        {items.map((item) => (
          <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
