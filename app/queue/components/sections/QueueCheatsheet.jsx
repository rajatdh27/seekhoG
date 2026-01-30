"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { FileText, Plus, Minus, Check, X, RefreshCcwDot, Lightbulb, TrendingUp, Code2, HelpCircle } from "lucide-react";

export default function QueueCheatsheet() {
  return (
    <PerspectiveCard color="green">
      <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-green-400 uppercase tracking-widest mb-3">Quick Reference</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Queue Cheatsheet</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <CheatCard
          title="Pattern Recognition"
          items={[
            "Level Order Traversal → BFS with Queue",
            "Shortest Path (Unweighted) → BFS with Queue",
            "Task Scheduling → Simple Queue or Priority Queue",
            "Sliding Window Min/Max → Deque",
            "Rate Limiter / Throttling → Queue with Timestamps",
            "Producer-Consumer → Blocking Queue",
          ]}
          color="green"
          icon={<Lightbulb />}
        />
        <CheatCard
          title="Time Complexities (Standard)"
          items={[
            "Enqueue: O(1)", "Dequeue: O(1)", "Peek/Front: O(1)",
            "isEmpty: O(1)", "Size: O(1)", "Search: O(n) - avoid",
          ]}
          color="emerald"
          icon={<TrendingUp />}
        />
        <CheatCard
          title="Edge Cases"
          items={[
            "Empty queue", "Full queue (circular array)", "Single element queue",
            "Concurrent access (threading)", "Null/undefined values", "Priority inversion (Priority Queue)",
          ]}
          color="teal"
          icon={<RefreshCcwDot />}
        />
      </div>

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

function CheatCard({ title, items, color, icon }) {
  const colors = {
    green: "from-green-500/10 to-green-500/10 border-green-500/20",
    emerald: "from-emerald-500/10 to-emerald-500/10 border-emerald-500/20",
    teal: "from-teal-500/10 to-teal-500/10 border-teal-500/20",
  };
  const iconColors = {
    green: "text-green-400",
    emerald: "text-emerald-400",
    teal: "text-teal-400",
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
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
