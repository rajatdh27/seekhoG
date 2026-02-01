"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { FileText, Plus, Minus, Check, X, RefreshCcwDot, Lightbulb, TrendingUp, Code2, HelpCircle } from "lucide-react";

export default function StackCheatsheet() {
  const cheatItems = [
    {
      title: "Pattern Recognition",
      description: "Quickly identify stack-based problems.",
      icon: Lightbulb,
      color: "purple",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Next Greater/Smaller → Monotonic Stack",
            "Valid Parentheses → Stack Matching",
            "Expression Parsing → Stack Evaluation",
            "Histogram Problems → Monotonic Stack",
            "DFS/Backtracking → Stack for State",
            "Undo/Redo → Two Stacks",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Time Complexities",
      description: "Core operations performance.",
      icon: TrendingUp,
      color: "pink",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Push: O(1)", "Pop: O(1)", "Peek/Top: O(1)",
            "isEmpty: O(1)", "Size: O(1)", "Search: O(n) - avoid",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Edge Cases",
      description: "Scenarios to test your code.",
      icon: RefreshCcwDot,
      color: "blue",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Empty stack", "Full stack (array-based)", "Single element stack",
            "Duplicate elements", "Null/undefined values", "Invalid input",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Stack Cheatsheet" 
        description="Quick Reference"
        icon={FileText} 
        color="purple" 
        className="mb-10"
      />
      
      <ConceptGrid items={cheatItems} columns={3} className="mb-12" />

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
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Always check `isEmpty` before pop/peek</li>
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
    </PerspectiveCard>
  );
}