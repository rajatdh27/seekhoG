"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Code2, ChevronDown } from "lucide-react";

const languages = [
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const syntaxData = {
  declaration: {
    title: "Declaration",
    cpp: `// Using STL stack (recommended)
#include <stack>
std::stack<int> st;`,
    java: `// Using Deque (recommended)
import java.util.Deque;
import java.util.ArrayDeque;
Deque<Integer> stack = new ArrayDeque<>();`,
    javascript: `// Using a standard Array
let stack = [];`,
    python: `# Using a list (most common)
stack = []

# Or collections.deque for performance
from collections import deque
stack = deque()`,
    go: `// Using a slice (idiomatic)
stack := []int{}`,
  },
  push: {
    title: "Push",
    cpp: `st.push(10);
st.emplace(20); // Avoids creating a temporary object`,
    java: `stack.push(10);
stack.addFirst(20); // Also common`,
    javascript: `stack.push(10);
stack.push(20);`,
    python: `stack.append(10)
stack.append(20)`,
    go: `stack = append(stack, 10)
stack = append(stack, 20)`,
  },
  pop: {
    title: "Pop",
    cpp: `if (!st.empty()) {
    st.pop(); // Note: pop() returns void
}`,
    java: `if (!stack.isEmpty()) {
    int value = stack.pop();
}`,
    javascript: `if (stack.length > 0) {
    let value = stack.pop();
}`,
    python: `if stack: # Check if list is not empty
    value = stack.pop()`,
    go: `if len(stack) > 0 {
    stack = stack[:len(stack)-1]
}`,
  },
  peek: {
    title: "Peek",
    cpp: `if (!st.empty()) {
    int value = st.top();
}`,
    java: `if (!stack.isEmpty()) {
    int value = stack.peek();
}`,
    javascript: `if (stack.length > 0) {
    let value = stack[stack.length - 1];
}`,
    python: `if stack:
    value = stack[-1]`,
    go: `if len(stack) > 0 {
    value := stack[len(stack)-1]
}`,
  },
  isEmpty: {
    title: "Is Empty",
    cpp: `bool is_empty = st.empty();`,
    java: `boolean isEmpty = stack.isEmpty();`,
    javascript: `const isEmpty = stack.length === 0;`,
    python: `is_empty = not stack`,
    go: `isEmpty := len(stack) == 0`,
  },
};

export default function StackSyntax() {
  const [lang, setLang] = useState("javascript");

  return (
    <PerspectiveCard color="purple">
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700">
          {languages.map(l => (
            <button 
              key={l.id} 
              onClick={() => setLang(l.id)} 
              className={`px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl transition-colors ${lang === l.id ? 'bg-purple-500 text-white' : 'text-slate-400 hover:bg-slate-700/50'}`}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(syntaxData).map(([key, op]) => (
          <motion.div 
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-slate-900/70 border border-white/5 rounded-2xl p-1"
          >
            <div className="p-4">
              <h3 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">{op.title}</h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                    <code>{op[lang]}</code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-slate-900/70 border border-white/5 rounded-2xl p-6 md:col-span-2 lg:col-span-3"
          >
            <h3 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Implementation Notes</h3>
            <ul className="space-y-2 text-xs text-slate-400">
                <li><strong className="text-white">C++:</strong> <code className="text-xs bg-slate-800 px-1 rounded">std::stack</code> is an adapter, not a container. It uses <code className="text-xs bg-slate-800 px-1 rounded">std::deque</code> by default.</li>
                <li><strong className="text-white">Java:</strong> The <code className="text-xs bg-slate-800 px-1 rounded">Deque</code> interface (implemented by <code className="text-xs bg-slate-800 px-1 rounded">ArrayDeque</code>) is preferred over the older, synchronized <code className="text-xs bg-slate-800 px-1 rounded">Stack</code> class.</li>
                <li><strong className="text-white">Python:</strong> While lists are easy, <code className="text-xs bg-slate-800 px-1 rounded">collections.deque</code> is often faster for appends and pops from the end.</li>
                <li><strong className="text-white">Go:</strong> Slices are the most idiomatic and efficient way to implement a stack.</li>
                <li><strong className="text-white">JavaScript:</strong> Native Arrays provide all the necessary methods (<code className="text-xs bg-slate-800 px-1 rounded">push</code>, <code className="text-xs bg-slate-800 px-1 rounded">pop</code>) and are highly optimized.</li>
            </ul>
        </motion.div>
      </div>
    </PerspectiveCard>
  );
}