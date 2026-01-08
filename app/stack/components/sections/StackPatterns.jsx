"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const patterns = [
  {
    id: "monotonic-stack",
    name: "Monotonic Stack",
    icon: "📊",
    difficulty: "Medium-Hard",
    description: "Maintain stack in sorted (increasing/decreasing) order to find next greater/smaller elements",
    whenToUse: [
      "Next Greater/Smaller Element problems",
      "Stock Span problems",
      "Largest Rectangle in Histogram",
      "Trapping Rain Water",
      "Daily Temperatures",
      "Building skyline problems",
    ],
    template: `function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // Stores indices

  for (let i = 0; i < arr.length; i++) {
    // Pop elements smaller than current
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

// Monotonic Decreasing Stack
function nextSmallerElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }

  return result;
}`,
    problems: [
      "Next Greater Element I & II",
      "Daily Temperatures",
      "Online Stock Span",
      "Largest Rectangle in Histogram",
      "Maximal Rectangle",
      "Trapping Rain Water",
      "Sum of Subarray Minimums",
      "132 Pattern",
    ],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Each element is pushed and popped from stack at most once, giving O(n) time complexity",
  },
  {
    id: "expression-evaluation",
    name: "Expression Evaluation",
    icon: "🧮",
    difficulty: "Medium",
    description: "Evaluate arithmetic expressions using stack for operators and operands",
    whenToUse: [
      "Infix to Postfix conversion",
      "Postfix evaluation",
      "Calculator problems",
      "Expression parsing",
      "Operator precedence handling",
    ],
    template: `// Evaluate Postfix Expression
function evaluatePostfix(expression) {
  const stack = [];

  for (let token of expression.split(' ')) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch(token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(Math.floor(a / b)); break;
      }
    }
  }

  return stack.pop();
}

// Infix to Postfix
function infixToPostfix(expression) {
  const precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3};
  const stack = [];
  let result = [];

  for (let char of expression) {
    if (/[a-zA-Z0-9]/.test(char)) {
      result.push(char);
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      stack.pop(); // Remove '('
    } else {
      while (stack.length && precedence[stack[stack.length - 1]] >= precedence[char]) {
        result.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.join('');
}`,
    problems: [
      "Basic Calculator I, II, III",
      "Evaluate Reverse Polish Notation",
      "Parse Lisp Expression",
      "Score of Parentheses",
      "Decode String",
    ],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Use stack to handle operator precedence and parentheses efficiently",
  },
  {
    id: "parentheses-matching",
    name: "Parentheses Matching",
    icon: "🔗",
    difficulty: "Easy-Medium",
    description: "Use stack to validate and match opening/closing brackets",
    whenToUse: [
      "Valid Parentheses problems",
      "Balanced brackets checking",
      "Longest Valid Parentheses",
      "Remove Invalid Parentheses",
      "Score calculations",
    ],
    template: `function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Longest Valid Parentheses
function longestValidParentheses(s) {
  const stack = [-1];
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
}`,
    problems: [
      "Valid Parentheses",
      "Longest Valid Parentheses",
      "Remove Invalid Parentheses",
      "Minimum Add to Make Parentheses Valid",
      "Score of Parentheses",
      "Generate Parentheses",
    ],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Stack tracks unmatched opening brackets; closing bracket pops matching opening",
  },
  {
    id: "histogram-problems",
    name: "Histogram/Rectangle Problems",
    icon: "📊",
    difficulty: "Hard",
    description: "Find largest rectangle in histogram using monotonic stack",
    whenToUse: [
      "Largest Rectangle in Histogram",
      "Maximal Rectangle in matrix",
      "Max area calculations",
      "Building/skyline problems",
    ],
    template: `function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0); // Sentinel to pop all remaining

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  return maxArea;
}

// Maximal Rectangle in binary matrix
function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  const heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;

  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea([...heights]));
  }

  return maxArea;
}`,
    problems: [
      "Largest Rectangle in Histogram",
      "Maximal Rectangle",
      "Maximal Square",
      "Count Submatrices With All Ones",
    ],
    complexity: "Time: O(n), Space: O(n)",
    keyInsight: "Use monotonic stack to find previous/next smaller heights efficiently",
  },
  {
    id: "backtracking-stack",
    name: "Backtracking with Stack",
    icon: "🔙",
    difficulty: "Medium",
    description: "Use stack to track state in backtracking/DFS problems",
    whenToUse: [
      "DFS traversal",
      "Path tracking",
      "Undo/Redo operations",
      "State restoration",
      "Maze solving",
    ],
    template: `// DFS with explicit stack
function dfsIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited.has(node)) continue;
    visited.add(node);
    result.push(node);

    // Push neighbors in reverse order for correct traversal
    for (let i = graph[node].length - 1; i >= 0; i--) {
      if (!visited.has(graph[node][i])) {
        stack.push(graph[node][i]);
      }
    }
  }

  return result;
}

// Path tracking
function findPath(maze, start, end) {
  const stack = [[start, [start]]];
  const visited = new Set();

  while (stack.length > 0) {
    const [pos, path] = stack.pop();

    if (pos === end) return path;
    if (visited.has(pos)) continue;
    visited.add(pos);

    for (let neighbor of getNeighbors(maze, pos)) {
      stack.push([neighbor, [...path, neighbor]]);
    }
  }

  return null;
}`,
    problems: [
      "Binary Tree Inorder/Preorder/Postorder Traversal",
      "Path Sum II",
      "All Paths From Source to Target",
      "Letter Combinations of a Phone Number",
      "Combination Sum",
    ],
    complexity: "Time: O(V + E), Space: O(V)",
    keyInsight: "Stack maintains current path/state, allows backtracking by popping",
  },
  {
    id: "min-max-stack",
    name: "Min/Max Stack",
    icon: "📉",
    difficulty: "Easy-Medium",
    description: "Design stack that supports getMin/getMax in O(1) time",
    whenToUse: [
      "Min/Max Stack design",
      "Sliding Window Maximum",
      "Stock span with min/max tracking",
      "Range queries on stack",
    ],
    template: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.getMin()) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Max Stack with popMax
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(x) {
    const max = this.maxStack.length === 0 ? x :
                Math.max(x, this.maxStack[this.maxStack.length - 1]);
    this.stack.push(x);
    this.maxStack.push(max);
  }

  pop() {
    this.maxStack.pop();
    return this.stack.pop();
  }

  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}`,
    problems: [
      "Min Stack",
      "Max Stack",
      "Sliding Window Maximum",
      "Stock Span Problem",
    ],
    complexity: "Time: O(1) for all operations, Space: O(n)",
    keyInsight: "Maintain auxiliary stack tracking min/max up to each position",
  },
];

export default function StackPatterns() {
  const [selectedPattern, setSelectedPattern] = useState(patterns[0]);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Stack Interview Patterns
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Master these 6 essential stack patterns to solve 95% of stack interview questions.
        Each pattern represents a proven problem-solving technique.
      </p>

      {/* Pattern Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {patterns.map((pattern, idx) => (
          <motion.button
            key={pattern.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => {
              setSelectedPattern(pattern);
              setShowCode(false);
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-5 rounded-xl border-2 text-left transition-all ${
              selectedPattern.id === pattern.id
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg"
                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
            }`}
          >
            <div className="text-3xl mb-2">{pattern.icon}</div>
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
              {pattern.name}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {pattern.difficulty}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Pattern Details */}
      <motion.div
        key={selectedPattern.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 mb-2">
              <span className="text-3xl">{selectedPattern.icon}</span>
              {selectedPattern.name}
            </h3>
            <p className="text-slate-700 dark:text-slate-300">{selectedPattern.description}</p>
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold whitespace-nowrap">
            {selectedPattern.difficulty}
          </span>
        </div>

        {/* When to Use */}
        <div className="mb-6">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
            When to Use This Pattern:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {selectedPattern.whenToUse.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="text-purple-600 dark:text-purple-400 mt-0.5">▸</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Key Insight */}
        <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-600">
          <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2">
            Key Insight:
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            {selectedPattern.keyInsight}
          </p>
        </div>

        {/* Complexity */}
        <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
          <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">
            Complexity:
          </h4>
          <p className="font-mono text-purple-600 dark:text-purple-400 font-semibold">
            {selectedPattern.complexity}
          </p>
        </div>

        {/* Code Template */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">
              Code Template:
            </h4>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
            >
              {showCode ? "Hide Code" : "Show Code"}
            </button>
          </div>

          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto"
            >
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                <code>{selectedPattern.template}</code>
              </pre>
            </motion.div>
          )}
        </div>

        {/* Common Problems */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
            Common LeetCode Problems:
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {selectedPattern.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-600 transition-colors"
              >
                {problem}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pattern Selection Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          How to Choose the Right Pattern
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Next Greater/Smaller?
            </span>
            <span>→ Use Monotonic Stack</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Valid Parentheses?
            </span>
            <span>→ Use Parentheses Matching</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Expression Parsing?
            </span>
            <span>→ Use Expression Evaluation</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Rectangle/Histogram?
            </span>
            <span>→ Use Histogram Pattern with Monotonic Stack</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              DFS/Path Tracking?
            </span>
            <span>→ Use Backtracking with Stack</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Need Min/Max in O(1)?
            </span>
            <span>→ Use Min/Max Stack Design</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
