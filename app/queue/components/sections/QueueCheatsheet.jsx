"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { FileText, Plus, Minus, Check, X, RefreshCcwDot, Lightbulb, TrendingUp, Code2, HelpCircle } from "lucide-react";

export default function QueueCheatsheet() {
  const cheatItems = [
    {
      title: "Pattern Recognition",
      description: "Quickly identify queue-based problems.",
      icon: Lightbulb,
      color: "green",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Level Order Traversal → BFS with Queue",
            "Shortest Path (Unweighted) → BFS with Queue",
            "Task Scheduling → Simple or Priority Queue",
            "Sliding Window Min/Max → Deque",
            "Rate Limiter → Queue with Timestamps",
            "Producer-Consumer → Blocking Queue",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Time Complexities",
      description: "Standard performance metrics.",
      icon: TrendingUp,
      color: "emerald",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Enqueue: O(1)", "Dequeue: O(1)", "Peek/Front: O(1)",
            "isEmpty: O(1)", "Size: O(1)", "Search: O(n) - avoid",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
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
      color: "teal",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Empty queue", "Full queue (circular array)", "Single element queue",
            "Concurrent access (threading)", "Null/undefined values", "Priority inversion (Priority Queue)",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="green">
      <SectionHeader 
        title="Queue Cheatsheet" 
        description="Quick Reference"
        icon={FileText} 
        color="green" 
        className="mb-10"
      />

      <ConceptGrid items={cheatItems} columns={3} className="mb-12" />

      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
        <Code2 size={24} className="text-green-400" /> Essential Snippets
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <CodeBlock code={`function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const node = queue.shift();
    // process(node)
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`} language="javascript" title="BFS Traversal" />
        <CodeBlock code={`function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // Remove indices out of window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    // Maintain decreasing order
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    // Add max to result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}`} language="javascript" title="Sliding Window Max (Deque)" />
      </div>

      <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem] mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">Interview Tips</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-bold text-green-400 mb-3">Before Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Clarify if FIFO order is strict.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Ask about performance needs (e.g., for dequeue).</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Discuss array vs. linked list vs. deque tradeoffs.</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-green-400 mb-3">While Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Always check \`isEmpty\` before dequeue/peek.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Use a proper \`deque\` for O(1) front removal.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Handle circular queue pointer arithmetic carefully.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-green-400 mb-3">Pattern Hints:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Level-order" or "shortest path" → BFS</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Min/max in a window" → Deque</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Top K elements" → Priority Queue (Heap)</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-green-400 mb-3">Common Follow-ups:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Implement a queue using two stacks.</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>How to make it thread-safe?</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Design a queue with O(1) max operation.</li>
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
                    <th className="py-3 px-4 text-center">Queue (Deque)</th>
                    <th className="py-3 px-4 text-center">Priority Queue (Heap)</th>
                    <th className="py-3 px-4 text-center">Array (as Queue)</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {[
                    { op: "Enqueue", queue: "O(1)", pq: "O(log n)", array: "O(1)" },
                    { op: "Dequeue", queue: "O(1)", pq: "O(log n)", array: "O(n)" },
                    { op: "Peek", queue: "O(1)", pq: "O(1)", array: "O(1)" },
                    { op: "Search", queue: "O(n)", pq: "O(n)", array: "O(n)" },
                ].map((row) => (
                    <tr key={row.op} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-400 text-xs">{row.op}</td>
                        <td className="py-3 px-4 text-center font-mono text-emerald-400">{row.queue}</td>
                        <td className="py-3 px-4 text-center font-mono text-amber-400">{row.pq}</td>
                        <td className="py-3 px-4 text-center font-mono text-sky-400">{row.array}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </PerspectiveCard>
  );
}
