"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Code2 } from "lucide-react";

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
int stack[MAX];
int top = -1;

// Using linked list
typedef struct Node {
    int data;
    struct Node* next;
} Node;
Node* top = NULL;`,
    cpp: `// Using STL stack
#include <stack>
std::stack<int> st;

// Using vector
#include <vector>
std::vector<int> stack;

// Using deque
#include <deque>
std::deque<int> stack;`,
    java: `// Using Stack class
import java.util.Stack;
Stack<Integer> stack = new Stack<>();

// Using Deque (recommended)
import java.util.Deque;
import java.util.ArrayDeque;
Deque<Integer> stack = new ArrayDeque<>();`,
    javascript: `// Using built-in array
let stack = [];

// Using class
class Stack {
  constructor() {
    this.items = [];
  }
}
const stack = new Stack();`,
    python: `# Using list (built-in)
stack = []

# Using deque (better performance)
from collections import deque
stack = deque()

# Using LifoQueue (thread-safe)
from queue import LifoQueue
stack = LifoQueue()`,
    go: `// Using slice
stack := []int{}

// Using container/list
import "container/list"
stack := list.New()`,
  },
  push: {
    title: "Push Operation",
    c: `// Array-based push
void push(int stack[], int *top, int val) {
    if (*top >= MAX - 1) return; // Overflow
    stack[++(*top)] = val;
}

// Linked list push
void push(Node** top, int val) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = *top;
    *top = newNode;
}`,
    cpp: `// STL stack
st.push(10);

// Using vector or deque
stack.push_back(20);

// Emplace (construct in-place, more efficient)
st.emplace(30);`,
    java: `// Using Stack or Deque
stack.push(10);

// Deque specific methods
stack.addFirst(20);
stack.offerFirst(30);`,
    javascript: `// Using array
stack.push(10);`,
    python: `# Using list or deque
stack.append(10)

# Using LifoQueue
stack.put(20)`,
    go: `// Using slice
stack = append(stack, 10)

// Using container/list
stack.PushBack(20)`,
  },
  pop: {
    title: "Pop Operation",
    c: `// Array-based pop
int pop(int stack[], int *top) {
    if (*top < 0) return -1; // Underflow
    return stack[(*top)--];
}

// Linked list pop
int pop(Node** top) {
    if (*top == NULL) return -1;
    Node* temp = *top;
    int val = temp->data;
    *top = (*top)->next;
    free(temp);
    return val;
}`,
    cpp: `// STL stack: pop() returns void
if (!st.empty()) {
    int val = st.top();
    st.pop();
}

// Vector or deque
if (!stack.empty()) {
    int val = stack.back();
    stack.pop_back();
}`,
    java: `// Stack or Deque
if (!stack.isEmpty()) {
    int val = stack.pop();
}`,
    javascript: `// Using array
if (stack.length > 0) {
    let val = stack.pop();
}`,
    python: `# Using list or deque
if stack:
    val = stack.pop()

# Using LifoQueue
if not stack.empty():
    val = stack.get()`,
    go: `// Using slice
if len(stack) > 0 {
    val := stack[len(stack)-1]
    stack = stack[:len(stack)-1]
}`,
  },
  peek: {
    title: "Peek/Top Operation",
    c: `// Array-based
int peek(int stack[], int top) {
    if (top < 0) return -1;
    return stack[top];
}`,
    cpp: `// STL stack
if (!st.empty()) {
    int val = st.top();
}`,
    java: `// Stack or Deque
if (!stack.isEmpty()) {
    int val = stack.peek();
}`,
    javascript: `// Using array
if (stack.length > 0) {
    let val = stack[stack.length - 1];
}`,
    python: `# Using list or deque
if stack:
    val = stack[-1]`,
    go: `// Using slice
if len(stack) > 0 {
    val := stack[len(stack)-1]
}`,
  },
  isEmpty: {
    title: "Check if Empty",
    c: `// Array-based
bool isEmpty(int top) {
    return top < 0;
}`,
    cpp: `bool empty = st.empty();`,
    java: `boolean empty = stack.isEmpty();`,
    javascript: `const empty = stack.length === 0;`,
    python: `# Using list or deque
is_empty = not stack`,
    go: `isEmpty := len(stack) == 0`,
  },
  size: {
    title: "Get Size/Length",
    c: `// Array-based
int size(int top) {
    return top + 1;
}`,
    cpp: `int size = st.size();`,
    java: `int size = stack.size();`,
    javascript: `const size = stack.length;`,
    python: `# Using list or deque
size = len(stack)`,
    go: `size := len(stack)`,
  },
};

export default function StackSyntax() {
  const [lang, setLang] = useState("cpp");
  const [op, setOp] = useState("declaration");

  return (
    <PerspectiveCard color="purple">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar for Controls */}
        <aside className="lg:w-1/3 xl:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <button key={l.id} onClick={() => setLang(l.id)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${lang === l.id ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black text-pink-400 uppercase tracking-widest mb-3">Operation</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(syntaxData).map(key => (
                  <button key={key} onClick={() => setOp(key)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${op === key ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
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
                <li><strong className="text-white">C:</strong> Manual memory management required. Use an array for fixed size or a linked list for dynamic size.</li>
                <li><strong className="text-white">C++:</strong> <code className="text-xs bg-slate-800 px-1 rounded">std::stack</code> is the preferred choice. It's a container adapter, using <code className="text-xs bg-slate-800 px-1 rounded">std::deque</code> by default.</li>
                <li><strong className="text-white">Java:</strong> <code className="text-xs bg-slate-800 px-1 rounded">Deque</code> interface (implemented by <code className="text-xs bg-slate-800 px-1 rounded">ArrayDeque</code>) is recommended over the older, synchronized <code className="text-xs bg-slate-800 px-1 rounded">Stack</code> class.</li>
                <li><strong className="text-white">JavaScript:</strong> Arrays have built-in <code className="text-xs bg-slate-800 px-1 rounded">push</code>/<code className="text-xs bg-slate-800 px-1 rounded">pop</code> methods, making them perfect for stacks.</li>
                <li><strong className="text-white">Python:</strong> Lists are most common. Use <code className="text-xs bg-slate-800 px-1 rounded">collections.deque</code> for better performance or <code className="text-xs bg-slate-800 px-1 rounded">queue.LifoQueue</code> for threading.</li>
                <li><strong className="text-white">Go:</strong> Slices are the idiomatic choice and are very efficient.</li>
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
                        {languages.map(l => <th key={l.id} className="py-4 px-4 text-purple-400">{l.name}</th>)}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {[
                        { f: "Built-in Stack", C: "❌", "C++": "✅ (STL)", Java: "✅", JavaScript: "✅ (Array)", Python: "✅ (List)", Go: "✅ (Slice)" },
                        { f: "Dynamic Size", C: "❌", "C++": "✅", Java: "✅", JavaScript: "✅", Python: "✅", Go: "✅" },
                        { f: "Thread-Safe", C: "Manual", "C++": "❌", Java: "✅ (Stack)", JavaScript: "❌", Python: "✅ (Queue)", Go: "Manual" },
                        { f: "Performance", C: "⚡⚡⚡", "C++": "⚡⚡⚡", Java: "⚡⚡", JavaScript: "⚡⚡⚡", Python: "⚡⚡⚡", Go: "⚡⚡⚡" },
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