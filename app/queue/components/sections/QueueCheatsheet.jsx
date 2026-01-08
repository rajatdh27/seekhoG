"use client";
import { motion } from "framer-motion";

export default function QueueCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        📚 Queue Cheatsheet
      </h2>

      {/* Quick Reference */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">
              Basic Operations
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">enqueue(element)</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">dequeue()</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">peek()</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">isEmpty()</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">size()</span>
                <span className="font-mono text-green-600 dark:text-green-400">O(1)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Space Complexity
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Array Implementation</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">O(n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Linked List Implementation</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">O(n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Circular Queue</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">O(n)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 dark:text-slate-300">Priority Queue (Heap)</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">O(n)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Type Comparison */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Queue Types Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-50 dark:bg-orange-900/20">
                <th className="border border-orange-200 dark:border-orange-800 px-4 py-3 text-left">Type</th>
                <th className="border border-orange-200 dark:border-orange-800 px-4 py-3 text-left">Enqueue</th>
                <th className="border border-orange-200 dark:border-orange-800 px-4 py-3 text-left">Dequeue</th>
                <th className="border border-orange-200 dark:border-orange-800 px-4 py-3 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">Simple Queue</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Basic FIFO operations</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">Circular Queue</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">CPU scheduling, buffering</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">Priority Queue</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-yellow-600">O(log n)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-yellow-600">O(log n)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Dijkstra, task scheduling</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">Deque</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-green-600">O(1)</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Undo/redo, sliding window</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common Coding Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              pattern: "BFS Traversal",
              code: `function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const node = queue.shift();
    process(node);
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
              color: "from-blue-500 to-cyan-500",
            },
            {
              pattern: "Sliding Window Maximum",
              code: `function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Remove out of window
    while (deque[0] < i - k + 1) {
      deque.shift();
    }
    
    // Remove smaller elements
    while (nums[deque[deque.length-1]] < nums[i]) {
      deque.pop();
    }
    
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}`,
              color: "from-purple-500 to-pink-500",
            },
            {
              pattern: "Task Scheduler with Priority",
              code: `function scheduleTasks(tasks) {
  const pq = new PriorityQueue();
  
  for (let task of tasks) {
    pq.enqueue(task, task.priority);
  }
  
  while (!pq.isEmpty()) {
    const task = pq.dequeue();
    execute(task);
  }
}`,
              color: "from-green-500 to-emerald-500",
            },
            {
              pattern: "Recent Counter (Circular Queue)",
              code: `class RecentCounter {
  constructor() {
    this.queue = [];
  }
  
  ping(t) {
    this.queue.push(t);
    // Remove requests older than 3000ms
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}`,
              color: "from-orange-500 to-amber-500",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${item.color} px-4 py-3`}>
                <h4 className="font-bold text-white">{item.pattern}</h4>
              </div>
              <div className="p-4">
                <pre className="text-xs text-slate-100 overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* When to Use */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 When to Use Which Queue?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              scenario: "Order matters (FIFO)",
              solution: "Simple Queue",
              examples: ["Task scheduling", "BFS", "Print queue"],
            },
            {
              scenario: "Fixed size buffer",
              solution: "Circular Queue",
              examples: ["Ring buffer", "CPU scheduling", "Streaming data"],
            },
            {
              scenario: "Priority-based processing",
              solution: "Priority Queue",
              examples: ["Dijkstra's algorithm", "Task scheduler", "Event simulation"],
            },
            {
              scenario: "Need to add/remove from both ends",
              solution: "Deque",
              examples: ["Sliding window", "Palindrome check", "Undo/redo"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700"
            >
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Scenario:
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                {item.scenario}
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
                → Use: {item.solution}
              </p>
              <div className="space-y-1">
                {item.examples.map((example, exIdx) => (
                  <div key={exIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span>•</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border-2 border-orange-300 dark:border-orange-700">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-6">
          ✨ Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>FIFO Principle:</strong> First element added is first to be removed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(1) Operations:</strong> Enqueue and dequeue are constant time
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>BFS Essential:</strong> Queue is fundamental for breadth-first traversal
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Circular for Efficiency:</strong> Use circular queue to reuse freed space
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Priority for Scheduling:</strong> Priority queue when order depends on priority
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Deque for Flexibility:</strong> Use deque when you need both-ended operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
