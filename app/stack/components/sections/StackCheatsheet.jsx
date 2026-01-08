"use client";

import { motion } from "framer-motion";

export default function StackCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Stack Quick Reference Cheatsheet
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
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
            "Search: O(n) - not recommended",
          ]}
          color="pink"
        />

        {/* Edge Cases */}
        <CheatCard
          title="Edge Cases to Check"
          items={[
            "Empty stack - check before pop/peek",
            "Stack overflow (array implementation)",
            "Single element stack",
            "Duplicate elements",
            "Null/undefined values",
            "Circular dependencies",
          ]}
          color="indigo"
        />

        {/* Common Patterns */}
        <CheatCard
          title="Common Patterns"
          items={[
            "Monotonic: Keep stack increasing/decreasing",
            "Matching: Push opening, pop on closing",
            "Expression: Use stack for operators",
            "Min/Max: Auxiliary stack tracks extremes",
            "DFS: Stack replaces recursion",
            "Backtracking: Stack stores state",
          ]}
          color="blue"
        />

        {/* Optimization Tricks */}
        <CheatCard
          title="Optimization Tricks"
          items={[
            "Use array for O(1) operations",
            "Avoid searching through stack",
            "Monotonic stack for O(n) solutions",
            "Store indices instead of values",
            "Use deque for sliding window max",
            "Preallocate if size known",
          ]}
          color="green"
        />

        {/* Common Mistakes */}
        <CheatCard
          title="Common Mistakes"
          items={[
            "Not checking isEmpty before pop",
            "Accessing middle elements (wrong DS)",
            "Forgetting to handle empty brackets",
            "Wrong monotonic stack direction",
            "Losing track of indices vs values",
            "Not handling stack overflow",
          ]}
          color="red"
        />
      </div>

      {/* Essential Code Snippets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-slate-900 dark:bg-slate-950 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-slate-100 mb-4">
          Essential Code Snippets
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeSnippet
            title="Monotonic Stack (Next Greater)"
            code={`function nextGreater(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}`}
          />
          <CodeSnippet
            title="Valid Parentheses"
            code={`function isValid(s) {
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
}`}
          />
          <CodeSnippet
            title="Min Stack"
            code={`class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0 ? val :
                Math.min(val, this.getMin());
    this.minStack.push(min);
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`}
          />
          <CodeSnippet
            title="DFS with Stack"
            code={`function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;

    visited.add(node);
    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
}`}
          />
        </div>
      </motion.div>

      {/* Language-Specific Quick Ref */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200">
          Language Quick Reference
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
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
            push="arr.append(x)"
            pop="arr.pop()"
            peek="arr[-1]"
            isEmpty="len(arr) == 0"
          />
          <LanguageQuickRef
            lang="C++"
            icon="⚡"
            push="st.push(x)"
            pop="st.pop()"
            peek="st.top()"
            isEmpty="st.empty()"
          />
          <LanguageQuickRef
            lang="Java"
            icon="☕"
            push="stack.push(x)"
            pop="stack.pop()"
            peek="stack.peek()"
            isEmpty="stack.isEmpty()"
          />
          <LanguageQuickRef
            lang="Go"
            icon="🔵"
            push="arr = append(arr, x)"
            pop="arr = arr[:len(arr)-1]"
            peek="arr[len(arr)-1]"
            isEmpty="len(arr) == 0"
          />
          <LanguageQuickRef
            lang="C"
            icon="🔷"
            push="arr[++top] = x"
            pop="arr[top--]"
            peek="arr[top]"
            isEmpty="top < 0"
          />
        </div>
      </motion.div>

      {/* Interview Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          Interview Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Before Coding:
            </h4>
            <ul className="space-y-1">
              <li>• Ask if stack is appropriate data structure</li>
              <li>• Clarify if LIFO order is required</li>
              <li>• Check for size constraints</li>
              <li>• Discuss array vs linked list implementation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              While Coding:
            </h4>
            <ul className="space-y-1">
              <li>• Always check isEmpty before pop/peek</li>
              <li>• Consider using indices instead of values</li>
              <li>• Think about monotonic stack for optimization</li>
              <li>• Test with edge cases (empty, single element)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Pattern Hints:
            </h4>
            <ul className="space-y-1">
              <li>• "Next Greater" → Monotonic decreasing stack</li>
              <li>• "Next Smaller" → Monotonic increasing stack</li>
              <li>• "Valid brackets" → Stack matching</li>
              <li>• "Histogram" → Monotonic stack with area</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Common Followups:
            </h4>
            <ul className="space-y-1">
              <li>• Can you solve without extra space?</li>
              <li>• What if we need getMin in O(1)?</li>
              <li>• How to handle circular array?</li>
              <li>• Can you solve iteratively (no recursion)?</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Formula/Template Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
          Templates & Formulas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <TemplateCard
            title="Monotonic Stack Template"
            code="while (stack.length && condition)\n  stack.pop()\nstack.push(current)"
          />
          <TemplateCard
            title="Valid Brackets"
            code="if (opening) push\nelse if (closing && match) pop\nreturn stack.isEmpty()"
          />
          <TemplateCard
            title="Next Greater/Smaller"
            code="Store indices in stack\nPop when found answer\nResult[idx] = current"
          />
          <TemplateCard
            title="DFS Iterative"
            code="stack.push(start)\nwhile (!isEmpty)\n  node = pop()\n  process + push neighbors"
          />
        </div>
      </motion.div>

      {/* Complexity Cheat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-green-900 dark:text-green-200 mb-4">
          Complexity Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-green-300 dark:border-green-700">
                <th className="text-left py-2 px-4 text-green-900 dark:text-green-200">Operation</th>
                <th className="text-center py-2 px-4 text-green-900 dark:text-green-200">Stack</th>
                <th className="text-center py-2 px-4 text-green-900 dark:text-green-200">Queue</th>
                <th className="text-center py-2 px-4 text-green-900 dark:text-green-200">Array</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b border-green-200 dark:border-green-800">
                <td className="py-2 px-4 font-medium">Insert at end</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr className="border-b border-green-200 dark:border-green-800">
                <td className="py-2 px-4 font-medium">Remove from end</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr className="border-b border-green-200 dark:border-green-800">
                <td className="py-2 px-4 font-medium">Access by index</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Search</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

function CheatCard({ title, items, color }) {
  const colors = {
    purple: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200 dark:border-purple-800",
    pink: "from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 border-pink-200 dark:border-pink-800",
    indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 border-indigo-200 dark:border-indigo-800",
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    green: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5`}
    >
      <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
          >
            <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function CodeSnippet({ title, code }) {
  return (
    <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 border border-slate-700">
      <div className="text-sm font-semibold text-slate-300 mb-2">{title}</div>
      <pre className="text-xs text-slate-400 font-mono leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LanguageQuickRef({ lang, icon, push, pop, peek, isEmpty }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-bold text-slate-900 dark:text-slate-100">{lang}</span>
      </div>
      <div className="space-y-2 text-xs font-mono">
        <div className="flex justify-between">
          <span className="text-slate-600 dark:text-slate-400">Push:</span>
          <code className="text-purple-600 dark:text-purple-400">{push}</code>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600 dark:text-slate-400">Pop:</span>
          <code className="text-purple-600 dark:text-purple-400">{pop}</code>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600 dark:text-slate-400">Peek:</span>
          <code className="text-purple-600 dark:text-purple-400">{peek}</code>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600 dark:text-slate-400">Empty:</span>
          <code className="text-purple-600 dark:text-purple-400">{isEmpty}</code>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ title, code }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">{title}</div>
      <pre className="text-xs font-mono text-amber-900 dark:text-amber-200 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}
