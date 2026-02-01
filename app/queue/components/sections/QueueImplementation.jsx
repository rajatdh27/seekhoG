"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeBlock from "@/app/components/common/CodeBlock";
import { CircuitBoard, Settings, Code2 } from "lucide-react";

const languages = [
  { id: "c", name: "C" },
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const syntaxData = {
  declaration: {
    title: "Declaration & Creation",
    c: `// Using array (fixed size)
#define MAX 100
int queue[MAX];
int front = -1, rear = -1;

// Using linked list
typedef struct Node {
    int data;
    struct Node* next;
} Node;
Node *front = NULL, *rear = NULL;`,
    cpp: `// Using STL queue
#include <queue>
std::queue<int> q;`,
    java: `// Using LinkedList
import java.util.Queue;
import java.util.LinkedList;
Queue<Integer> q = new LinkedList<>();

// Using ArrayDeque (more efficient)
import java.util.Queue;
import java.util.ArrayDeque;
Queue<Integer> q = new ArrayDeque<>();`,
    javascript: `// Using built-in array
let queue = [];`,
    python: `# Using list (less efficient for dequeue)
queue = []

# Using collections.deque (recommended)
from collections import deque
queue = deque()`,
    go: `// Using slice
queue := []int{}`,
  },
  enqueue: {
    title: "Enqueue Operation",
    c: `// Array-based enqueue
void enqueue(int val) {
    if (rear == MAX - 1) return; // Overflow
    if (front == -1) front = 0;
    queue[++rear] = val;
}`,
    cpp: `q.push(10);
q.emplace(20); // C++11+, constructs in-place`,
    java: `q.add(10); // Throws exception if full
q.offer(20); // Returns false if full`,
    javascript: `queue.push(10); // Enqueue to the end`,
    python: `# Using list
queue.append(10)

# Using deque
queue.append(20)`,
    go: `queue = append(queue, 10)`,
  },
  dequeue: {
    title: "Dequeue Operation",
    c: `// Array-based dequeue
int dequeue() {
    if (front == -1 || front > rear) return -1; // Underflow
    return queue[front++];
}`,
    cpp: `if (!q.empty()) {
    int val = q.front();
    q.pop();
}`,
    java: `if (!q.isEmpty()) {
    int val = q.poll(); // Returns null if empty
    int val2 = q.remove(); // Throws exception if empty
}`,
    javascript: `if (queue.length > 0) {
    let val = queue.shift(); // Removes from front
}`,
    python: `# Using list (inefficient - O(n))
if queue:
    val = queue.pop(0)

# Using deque (efficient - O(1))
if queue:
    val = queue.popleft()`,
    go: `if len(queue) > 0 {
    val := queue[0]
    queue = queue[1:]
}`,
  },
  peek: {
    title: "Peek/Front Operation",
    c: `// Array-based
int peek() {
    if (front == -1 || front > rear) return -1;
    return queue[front];
}`,
    cpp: `if (!q.empty()) {
    int val = q.front();
}`,
    java: `if (!q.isEmpty()) {
    int val = q.peek(); // Returns null if empty
    int val2 = q.element(); // Throws exception if empty
}`,
    javascript: `if (queue.length > 0) {
    let val = queue[0];
}`,
    python: `if queue:
    val = queue[0]`,
    go: `if len(queue) > 0 {
    val := queue[0]
}`,
  },
  isEmpty: {
    title: "Check if Empty",
    c: `return front == -1 || front > rear;`,
    cpp: `bool empty = q.empty();`,
    java: `boolean empty = q.isEmpty();`,
    javascript: `const empty = queue.length === 0;`,
    python: `is_empty = not queue`,
    go: `isEmpty := len(queue) == 0`,
  },
  size: {
    title: "Get Size/Length",
    c: `return rear - front + 1;`,
    cpp: `int size = q.size();`,
    java: `int size = q.size();`,
    javascript: `const size = queue.length;`,
    python: `size = len(queue)`,
    go: `size := len(queue)`,
  },
};

export default function QueueImplementation() {
  const [lang, setLang] = useState("cpp");
  const [op, setOp] = useState("declaration");

  return (
    <PerspectiveCard color="green">
      <SectionHeader 
        title="Syntax Guide" 
        description="Common operations across different languages."
        icon={Code2} 
        color="green" 
        className="mb-10"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar for Controls */}
        <aside className="lg:w-1/3 xl:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-black text-green-400 uppercase tracking-widest mb-3">Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <button key={l.id} onClick={() => setLang(l.id)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${lang === l.id ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-3">Operation</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(syntaxData).map(key => (
                  <button key={key} onClick={() => setOp(key)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${op === key ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                    {syntaxData[key].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${op}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CodeBlock code={syntaxData[op][lang]} language={lang} title={`${syntaxData[op].title} in ${languages.find(l => l.id === lang).name}`} />
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
            >
             <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                Implementation Notes
            </h3>
             <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><strong className="text-white">C:</strong> Manual implementation is necessary. Circular arrays are often used to make array-based queues efficient.</li>
                <li><strong className="text-white">C++:</strong> <code className="text-xs bg-slate-800 px-1 rounded">std::queue</code> is a container adapter, typically using <code className="text-xs bg-slate-800 px-1 rounded">std::deque</code> by default.</li>
                <li><strong className="text-white">Java:</strong> The <code className="text-xs bg-slate-800 px-1 rounded">Queue</code> interface is implemented by classes like <code className="text-xs bg-slate-800 px-1 rounded">LinkedList</code> and <code className="text-xs bg-slate-800 px-1 rounded">ArrayDeque</code>. <code className="text-xs bg-slate-800 px-1 rounded">ArrayDeque</code> is generally more efficient.</li>
                <li><strong className="text-white">JavaScript:</strong> Arrays can be used, but <code className="text-xs bg-slate-800 px-1 rounded">shift()</code> is an O(n) operation. For performance-critical applications, a custom implementation or a library is better.</li>
                <li><strong className="text-white">Python:</strong> Use <code className="text-xs bg-slate-800 px-1 rounded">collections.deque</code> for efficient O(1) appends and pops from both ends. Using <code className="text-xs bg-slate-800 px-1 rounded">list.pop(0)</code> is inefficient.</li>
                <li><strong className="text-white">Go:</strong> Slices are used with <code className="text-xs bg-slate-800 px-1 rounded">append</code> for enqueue and re-slicing for dequeue. This can lead to memory reallocations.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="overflow-x-auto mt-12"
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                Quick Comparison
            </h3>
            <table className="w-full text-sm text-left border-collapse">
                <thead className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <tr className="border-b border-white/10">
                        <th className="py-4 px-4">Feature</th>
                        {languages.map(l => <th key={l.id} className="py-4 px-4 text-green-400">{l.name}</th>)}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {[
                        { f: "Built-in Queue", C: "❌", "C++": "✅ (STL)", Java: "✅ (Interface)", JavaScript: "❌", Python: "✅ (deque)", Go: "❌" },
                        { f: "Efficient Dequeue", C: "Manual", "C++": "✅", Java: "✅", JavaScript: "❌ (Array)", Python: "✅ (deque)", Go: "❌ (Slice)" },
                        { f: "Thread-Safe", C: "Manual", "C++": "❌", Java: "✅ (e.g. LinkedBlockingQueue)", JavaScript: "❌", Python: "✅ (Queue)", Go: "Manual" },
                        { f: "Performance", C: "⚡⚡⚡", "C++": "⚡⚡⚡", Java: "⚡⚡", JavaScript: "⚡", Python: "⚡⚡⚡", Go: "⚡⚡" },
                    ].map((row) => (
                        <tr key={row.f} className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-4 font-black text-slate-500 uppercase text-[10px] tracking-tighter">{row.f}</td>
                            {languages.map(l => (
                                <td key={l.id} className="py-4 px-4 font-bold text-center text-slate-300 transition-colors">{row[l.name]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
          </motion.div>
        </main>
      </div>
    </PerspectiveCard>
  );
}