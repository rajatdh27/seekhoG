"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const problemsByPattern = {
  "monotonic-stack": {
    easy: [
      { name: "Next Greater Element I", key: "Hash map + monotonic stack" },
      { name: "Baseball Game", key: "Stack simulation" },
      { name: "Backspace String Compare", key: "Build strings using stack" },
      { name: "Remove All Adjacent Duplicates In String", key: "Stack for adjacent removal" },
      { name: "Make The String Great", key: "Stack for case matching" },
      { name: "Remove Outermost Parentheses", key: "Counter + stack" },
      { name: "Crawler Log Folder", key: "Stack for directory navigation" },
    ],
    medium: [
      { name: "Daily Temperatures", key: "Monotonic decreasing stack" },
      { name: "Next Greater Element II", key: "Circular array + stack" },
      { name: "Online Stock Span", key: "Monotonic stack with count" },
      { name: "Sum of Subarray Minimums", key: "Previous/next smaller with stack" },
      { name: "Sum of Subarray Ranges", key: "Min and max contributions" },
      { name: "132 Pattern", key: "Monotonic stack tracking" },
      { name: "Remove K Digits", key: "Monotonic increasing stack" },
      { name: "Remove Duplicate Letters", key: "Greedy + monotonic stack" },
      { name: "Shortest Unsorted Continuous Subarray", key: "Find boundaries with stack" },
      { name: "Number of Visible People in a Queue", key: "Next greater problem" },
      { name: "Find the Most Competitive Subsequence", key: "Monotonic stack + k elements" },
    ],
    hard: [
      { name: "Largest Rectangle in Histogram", key: "Monotonic increasing stack" },
      { name: "Maximal Rectangle", key: "Histogram per row" },
      { name: "Trapping Rain Water", key: "Monotonic decreasing stack" },
      { name: "Maximum Score of a Good Subarray", key: "Monotonic stack + expand" },
      { name: "Count Subarrays With Fixed Bounds", key: "Monotonic deque approach" },
    ],
  },
  "expression-evaluation": {
    easy: [
      { name: "Valid Parentheses", key: "Stack matching pairs" },
      { name: "Remove All Adjacent Duplicates In String", key: "Stack building result" },
      { name: "Build an Array With Stack Operations", key: "Simulate operations" },
    ],
    medium: [
      { name: "Basic Calculator II", key: "Operator precedence + stack" },
      { name: "Evaluate Reverse Polish Notation", key: "Postfix evaluation" },
      { name: "Decode String", key: "Nested encoding with stack" },
      { name: "Asteroid Collision", key: "Stack for collision simulation" },
      { name: "Score of Parentheses", key: "Depth tracking with stack" },
      { name: "Simplify Path", key: "Unix path parsing" },
      { name: "Remove All Adjacent Duplicates in String II", key: "Stack with counters" },
      { name: "Parsing A Boolean Expression", key: "Recursive stack parsing" },
      { name: "Ternary Expression Parser", key: "Stack for ternary" },
    ],
    hard: [
      { name: "Basic Calculator", key: "Handle +, -, ()" },
      { name: "Basic Calculator III", key: "All operators + parentheses" },
      { name: "Expression Add Operators", key: "Backtracking + evaluation" },
      { name: "Parse Lisp Expression", key: "Complex parsing with stack" },
      { name: "Number of Atoms", key: "Chemical formula parsing" },
    ],
  },
  "parentheses-matching": {
    easy: [
      { name: "Valid Parentheses", key: "Basic stack matching" },
      { name: "Remove Outermost Parentheses", key: "Track depth" },
      { name: "Maximum Nesting Depth of the Parentheses", key: "Counter approach" },
    ],
    medium: [
      { name: "Longest Valid Parentheses", key: "Stack with indices" },
      { name: "Minimum Add to Make Parentheses Valid", key: "Count unmatched" },
      { name: "Minimum Remove to Make Valid Parentheses", key: "Mark invalid positions" },
      { name: "Score of Parentheses", key: "Depth-based scoring" },
      { name: "Generate Parentheses", key: "Backtracking generation" },
      { name: "Different Ways to Add Parentheses", key: "Divide and conquer" },
      { name: "Check if a Parentheses String Can Be Valid", key: "Two-pass validation" },
    ],
    hard: [
      { name: "Remove Invalid Parentheses", key: "BFS to find minimum removals" },
      { name: "Valid Parenthesis String", key: "Range tracking" },
      { name: "Minimum Number of Swaps to Make the String Balanced", key: "Greedy swapping" },
    ],
  },
  "design": {
    easy: [
      { name: "Min Stack", key: "Auxiliary min stack" },
      { name: "Implement Stack using Queues", key: "Queue simulation" },
      { name: "Implement Queue using Stacks", key: "Two stacks approach" },
    ],
    medium: [
      { name: "Max Stack", key: "Two stacks or stack + heap" },
      { name: "Design a Stack With Increment Operation", key: "Lazy increment array" },
      { name: "Maximum Frequency Stack", key: "Frequency map + stacks" },
      { name: "Dinner Plate Stacks", key: "Multiple stacks + heap" },
      { name: "Design Browser History", key: "Two stacks for back/forward" },
    ],
    hard: [
      { name: "LRU Cache", key: "Hash map + doubly linked list" },
      { name: "All O`one Data Structure", key: "Multiple data structures" },
    ],
  },
  "tree-traversal": {
    easy: [
      { name: "Binary Tree Inorder Traversal", key: "Iterative with stack" },
      { name: "Binary Tree Preorder Traversal", key: "Iterative DFS" },
      { name: "Binary Tree Postorder Traversal", key: "Modified preorder" },
      { name: "N-ary Tree Preorder Traversal", key: "Stack for N-ary" },
      { name: "N-ary Tree Postorder Traversal", key: "Reverse of preorder" },
    ],
    medium: [
      { name: "Binary Tree Zigzag Level Order Traversal", key: "Two stacks for zigzag" },
      { name: "Binary Search Tree Iterator", key: "Controlled inorder" },
      { name: "Flatten Binary Tree to Linked List", key: "Modified preorder" },
      { name: "Path Sum II", key: "DFS with path tracking" },
      { name: "Sum Root to Leaf Numbers", key: "DFS accumulate path values" },
      { name: "Kth Smallest Element in a BST", key: "Inorder until kth" },
    ],
    hard: [
      { name: "Binary Tree Maximum Path Sum", key: "DFS with global max" },
      { name: "Serialize and Deserialize Binary Tree", key: "Preorder serialization" },
      { name: "Vertical Order Traversal of a Binary Tree", key: "DFS + sorting" },
    ],
  },
  "string-processing": {
    easy: [
      { name: "Valid Parentheses", key: "Basic stack" },
      { name: "Remove All Adjacent Duplicates In String", key: "Stack building" },
      { name: "Backspace String Compare", key: "Build final strings" },
      { name: "Make The String Great", key: "Remove bad pairs" },
    ],
    medium: [
      { name: "Decode String", key: "Nested brackets" },
      { name: "Simplify Path", key: "Parse Unix path" },
      { name: "Remove Duplicate Letters", key: "Lexicographically smallest" },
      { name: "Reverse Substrings Between Each Pair of Parentheses", key: "Stack reversal" },
      { name: "Tag Validator", key: "Stack for XML tags" },
      { name: "Validate Stack Sequences", key: "Simulate push/pop" },
      { name: "Removing Stars From a String", key: "Stack for star removal" },
    ],
    hard: [
      { name: "Longest Valid Parentheses", key: "DP or stack approach" },
      { name: "Number of Atoms", key: "Parse chemical formula" },
    ],
  },
  "sliding-window-deque": {
    medium: [
      { name: "Sliding Window Maximum", key: "Monotonic deque" },
      { name: "Jump Game VI", key: "DP + monotonic deque" },
      { name: "Shortest Subarray with Sum at Least K", key: "Prefix sum + deque" },
      { name: "Constrained Subsequence Sum", key: "DP + deque optimization" },
    ],
    hard: [
      { name: "Max Value of Equation", key: "Deque for max tracking" },
      { name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", key: "Two deques" },
    ],
  },
  "histogram-area": {
    hard: [
      { name: "Largest Rectangle in Histogram", key: "Monotonic stack" },
      { name: "Maximal Rectangle", key: "Multiple histograms" },
      { name: "Maximal Square", key: "DP + histogram" },
      { name: "Count Submatrices With All Ones", key: "Histogram approach" },
    ],
  },
  "graph-dfs": {
    medium: [
      { name: "Clone Graph", key: "DFS with stack + visited" },
      { name: "All Paths From Source to Target", key: "DFS path tracking" },
      { name: "Keys and Rooms", key: "DFS traversal" },
      { name: "Number of Islands", key: "DFS with stack" },
      { name: "Number of Provinces", key: "DFS component counting" },
      { name: "Evaluate Division", key: "DFS on graph" },
    ],
    hard: [
      { name: "Critical Connections in a Network", key: "Tarjan's algorithm" },
      { name: "Longest Increasing Path in a Matrix", key: "DFS + memoization" },
    ],
  },
};

const patternInfo = {
  "monotonic-stack": { icon: "📊", name: "Monotonic Stack", color: "purple" },
  "expression-evaluation": { icon: "🧮", name: "Expression Evaluation", color: "pink" },
  "parentheses-matching": { icon: "🔗", name: "Parentheses Matching", color: "indigo" },
  "design": { icon: "🏗️", name: "Stack Design", color: "blue" },
  "tree-traversal": { icon: "🌳", name: "Tree Traversal", color: "green" },
  "string-processing": { icon: "📝", name: "String Processing", color: "orange" },
  "sliding-window-deque": { icon: "🪟", name: "Sliding Window + Deque", color: "teal" },
  "histogram-area": { icon: "📊", name: "Histogram/Area", color: "red" },
  "graph-dfs": { icon: "🕸️", name: "Graph DFS", color: "violet" },
};

export default function StackProblems() {
  const [selectedPattern, setSelectedPattern] = useState("monotonic-stack");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const currentPattern = problemsByPattern[selectedPattern];
  const info = patternInfo[selectedPattern];

  const getProblems = () => {
    if (selectedDifficulty === "all") {
      return [
        ...currentPattern.easy.map((p) => ({ ...p, difficulty: "easy" })),
        ...currentPattern.medium.map((p) => ({ ...p, difficulty: "medium" })),
        ...(currentPattern.hard || []).map((p) => ({ ...p, difficulty: "hard" })),
      ];
    }
    return (currentPattern[selectedDifficulty] || []).map((p) => ({
      ...p,
      difficulty: selectedDifficulty,
    }));
  };

  const getDifficultyColor = (diff) => {
    if (diff === "easy") return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300";
    if (diff === "medium") return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300";
    return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300";
  };

  const allProblems = Object.entries(problemsByPattern).reduce((total, [_, pattern]) => {
    return total + (pattern.easy?.length || 0) + (pattern.medium?.length || 0) + (pattern.hard?.length || 0);
  }, 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Must-Know Stack Problems
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-2">
        {allProblems}+ curated stack problems organized by pattern. Master these patterns to solve any stack problem.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
        Each problem includes the key insight/approach to help you understand the pattern.
      </p>

      {/* Pattern Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Select Pattern:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {Object.entries(patternInfo).map(([key, { icon, name }]) => (
            <motion.button
              key={key}
              onClick={() => {
                setSelectedPattern(key);
                setSelectedDifficulty("all");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg border-2 text-center transition-all ${
                selectedPattern === key
                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
              }`}
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                {name}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Filter by Difficulty:
        </h3>
        <div className="flex gap-2">
          {["all", "easy", "medium", "hard"].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                selectedDifficulty === diff
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {diff} {diff === "all" && `(${getProblems().length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Problem List */}
      <motion.div
        key={`${selectedPattern}-${selectedDifficulty}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="text-2xl">{info.icon}</span>
            {info.name}
          </h3>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
            {getProblems().length} problems
          </span>
        </div>

        <div className="space-y-2">
          {getProblems().map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-600 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-400 dark:text-slate-600 text-sm font-mono">
                      #{idx + 1}
                    </span>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 break-words">
                      {problem.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <span className="text-purple-600 dark:text-purple-400">Key:</span>
                    {problem.key}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-900 dark:text-green-200">
            {currentPattern.easy.length}
          </div>
          <div className="text-sm text-green-700 dark:text-green-300">Easy</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-200">
            {currentPattern.medium.length}
          </div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Medium</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-900 dark:text-red-200">
            {currentPattern.hard?.length || 0}
          </div>
          <div className="text-sm text-red-700 dark:text-red-300">Hard</div>
        </div>
      </motion.div>

      {/* Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-200">
          How to Practice
        </h3>
        <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Start with <strong>Easy</strong> problems to understand the core pattern</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </span>
            <span>Read the "Key" hint - it reveals the essential insight</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Use the pattern template from the Patterns section</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              4
            </span>
            <span>Progress to <strong>Medium</strong> after mastering Easy problems</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              5
            </span>
            <span>Tackle <strong>Hard</strong> problems once you're confident with the pattern</span>
          </li>
        </ol>
      </motion.div>
    </div>
  );
}
