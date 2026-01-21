"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Grid, RefreshCw, Award, Star, HelpCircle, Check } from "lucide-react";

const patterns = [
  {
    id: "circular-queue",
    name: "Circular Queue",
    icon: <RefreshCw />,
    difficulty: "Medium",
    description: "An efficient queue implementation that reuses empty slots in an array by wrapping around from the end to the start.",
    whenToUse: ["Resource management in OS (e.g., CPU scheduling)", "Implementing buffers in producer-consumer problems", "Managing traffic lights in a simulation", "Sliding Window problems"],
    template: `class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  enqueue(element) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.front = 0;
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const element = this.items[this.front];
    this.items[this.front] = null;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
    return element;
  }
  // ... other methods
}`,
    problems: ["Design Circular Queue", "Sliding Window Maximum", "Number of Recent Calls"],
    complexity: "Time: O(1) for all ops, Space: O(k) for capacity k",
    keyInsight: "The modulo operator (%) is key to wrapping the front and rear pointers around the array.",
  },
  {
    id: "priority-queue",
    name: "Priority Queue",
    icon: <Award />,
    difficulty: "Medium",
    description: "An abstract data type where each element has a 'priority'. Elements with higher priority are served before elements with lower priority.",
    whenToUse: ["Dijkstra's & Prim's algorithms", "A* search algorithm", "Task scheduling based on priority", "Huffman coding"],
    template: `// In most languages, Priority Queues are implemented using Heaps.
// The template shows a simple array-based idea, but heaps are standard.

class PriorityQueue {
  constructor() {
    this.items = []; // Often a Min-Heap or Max-Heap
  }

  enqueue(element, priority) {
    // In a heap, this would be an O(log n) operation
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    // In a heap, this is O(log n)
    if (this.isEmpty()) return null;
    return this.items.shift();
  }
  // ...
}`,
    problems: ["Kth Largest Element in a Stream", "Find Median from Data Stream", "Merge k Sorted Lists", "Top K Frequent Elements"],
    complexity: "Time: O(log n) for enqueue/dequeue (with Heaps), Space: O(n)",
    keyInsight: "Priority Queues are not FIFO. They are essential for algorithms that need to process the 'best' or 'most important' item next.",
  },
  {
    id: "deque",
    name: "Deque (Double-Ended Queue)",
    icon: <Star />,
    difficulty: "Easy-Medium",
    description: "A queue that allows adding and removing elements from both the front and the back.",
    whenToUse: ["Implementing a sliding window", "Storing a list of recent items", "Implementing both a stack and a queue", "Palindrome checking"],
    template: `// Deques are often implemented with a doubly-linked list or a dynamic array.
// JavaScript arrays can act as deques.
const deque = [];

// Add to back
deque.push(10); 

// Add to front
deque.unshift(20);

// Remove from back
deque.pop();

// Remove from front
deque.shift();`,
    problems: ["Sliding Window Maximum", "Implement Stack using Queues", "Implement Queue using Stacks", "Palindrome Linked List"],
    complexity: "Time: O(1) for all ops (amortized for dynamic arrays), Space: O(n)",
    keyInsight: "A deque is a versatile structure that can function as both a stack (using push/pop) and a queue (using push/shift).",
  },
];

export default function QueuePatterns() {
  const [pattern, setPattern] = useState(patterns[0]);

  return (
    <PerspectiveCard color="green">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-2">
                    {patterns.map(p => (
                        <button 
                            key={p.id} 
                            onClick={() => setPattern(p)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${pattern.id === p.id ? 'bg-green-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                        >
                            <div className={`w-8 h-8 flex items-center justify-center rounded-lg text-green-400 ${pattern.id === p.id ? 'bg-green-500/20' : 'bg-slate-800'}`}>
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
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold whitespace-nowrap border border-green-500/20">{pattern.difficulty}</span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{pattern.description}</p>
                        
                        <div className="mb-8 p-6 bg-slate-900/70 border border-green-500/20 rounded-2xl">
                             <h4 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">When to use</h4>
                             <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                                {pattern.whenToUse.map(item => (
                                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><Check size={14} className="text-green-500"/> {item}</li>
                                ))}
                             </ul>
                        </div>
                        
                         <div className="mb-8 p-6 bg-slate-900/70 border border-white/5 rounded-2xl">
                             <h4 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3 flex items-center gap-2"><HelpCircle size={16}/> Key Insight & Complexity</h4>
                             <p className="text-sm text-slate-300 font-medium leading-relaxed">{pattern.keyInsight}</p>
                             <p className="mt-2 font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full inline-block">{pattern.complexity}</p>
                        </div>
                        
                        <CodeBlock code={pattern.template} language="javascript" title="JavaScript Template"/>

                        <div className="mt-8">
                            <h4 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Common Problems</h4>
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
                <div className="flex items-center gap-3"><span className="font-bold text-green-400 w-40">Efficient Array Queue?</span><span className="text-slate-400">→ Use Circular Queue</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-green-400 w-40">Processing by Importance?</span><span className="text-slate-400">→ Use Priority Queue</span></div>
                <div className="flex items-center gap-3"><span className="font-bold text-green-400 w-40">Add/Remove from both ends?</span><span className="text-slate-400">→ Use Deque</span></div>
             </div>
        </div>
    </PerspectiveCard>
  );
}
