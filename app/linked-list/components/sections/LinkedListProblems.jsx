"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const problemsByPattern = {
  "two-pointers": {
    easy: [
      { name: "Linked List Cycle", key: "Fast/slow pointers meet if cycle exists", frequency: "high" },
      { name: "Middle of the Linked List", key: "When fast reaches end, slow is at middle", frequency: "high" },
      { name: "Remove Duplicates from Sorted List", key: "Compare current with next", frequency: "medium" },
      { name: "Intersection of Two Linked Lists", key: "Switch heads when reaching null", frequency: "high" },
      { name: "Delete Node in a Linked List", key: "Copy next value and skip next", frequency: "low" },
      { name: "Palindrome Linked List", key: "Reverse second half, compare with first", frequency: "high" },
    ],
    medium: [
      { name: "Linked List Cycle II", key: "Floyd's: reset slow to head after meeting", frequency: "high" },
      { name: "Remove Nth Node From End of List", key: "Fast pointer n steps ahead", frequency: "high" },
      { name: "Reorder List", key: "Find middle, reverse second, merge alternating", frequency: "medium" },
      { name: "Odd Even Linked List", key: "Two pointers for odd/even positions", frequency: "medium" },
      { name: "Add Two Numbers", key: "Two pointers with carry", frequency: "high" },
      { name: "Rotate List", key: "Make circular, find new tail", frequency: "medium" },
      { name: "Swap Nodes in Pairs", key: "Swap adjacent nodes with pointers", frequency: "medium" },
      { name: "Delete the Middle Node of a Linked List", key: "Fast/slow to find middle, delete", frequency: "medium" },
      { name: "Remove Duplicates from Sorted List II", key: "Skip all duplicate sequences", frequency: "medium" },
      { name: "Sort List", key: "Merge sort with fast/slow to split", frequency: "high" },
    ],
    hard: [
      { name: "Reverse Nodes in k-Group", key: "Reverse k nodes at a time", frequency: "high" },
      { name: "Merge k Sorted Lists", key: "Divide and conquer merge", frequency: "high" },
    ],
  },
  "reversal": {
    easy: [
      { name: "Reverse Linked List", key: "Three pointers: prev, curr, next", frequency: "high" },
      { name: "Palindrome Linked List", key: "Reverse second half, compare", frequency: "high" },
    ],
    medium: [
      { name: "Reverse Linked List II", key: "Reverse between positions m and n", frequency: "high" },
      { name: "Swap Nodes in Pairs", key: "Reverse every 2 nodes", frequency: "medium" },
      { name: "Reorder List", key: "Reverse second half, merge with first", frequency: "medium" },
      { name: "Add Two Numbers II", key: "Reverse both, add, reverse result", frequency: "medium" },
      { name: "Reverse Odd Length Groups", key: "Reverse groups of odd length", frequency: "low" },
      { name: "Swapping Nodes in a Linked List", key: "Swap kth from start with kth from end", frequency: "medium" },
    ],
    hard: [
      { name: "Reverse Nodes in k-Group", key: "Reverse every k nodes", frequency: "high" },
      { name: "Reverse Linked List in Groups of Size K", key: "Reverse k-sized groups iteratively", frequency: "medium" },
    ],
  },
  "cycle-detection": {
    easy: [
      { name: "Linked List Cycle", key: "Floyd's tortoise and hare", frequency: "high" },
      { name: "Happy Number", key: "Detect cycle in number sequence", frequency: "medium" },
    ],
    medium: [
      { name: "Linked List Cycle II", key: "Find cycle start with Floyd's", frequency: "high" },
      { name: "Find the Duplicate Number", key: "Array as linked list, find cycle start", frequency: "high" },
      { name: "Circular Array Loop", key: "Detect cycle in circular array", frequency: "low" },
    ],
    hard: [],
  },
  "merge-lists": {
    easy: [
      { name: "Merge Two Sorted Lists", key: "Compare heads, attach smaller", frequency: "high" },
      { name: "Remove Duplicates from Sorted List", key: "Skip duplicate nodes", frequency: "medium" },
    ],
    medium: [
      { name: "Merge In Between Linked Lists", key: "Remove section, insert new list", frequency: "medium" },
      { name: "Add Two Numbers", key: "Merge with carry calculation", frequency: "high" },
      { name: "Insertion Sort List", key: "Build sorted list by inserting", frequency: "medium" },
      { name: "Sort List", key: "Merge sort on linked list", frequency: "high" },
      { name: "Split Linked List in Parts", key: "Divide list into k parts", frequency: "medium" },
      { name: "Partition List", key: "Split by value, merge back", frequency: "medium" },
    ],
    hard: [
      { name: "Merge k Sorted Lists", key: "Divide and conquer or min heap", frequency: "high" },
      { name: "Flatten a Multilevel Doubly Linked List", key: "DFS flatten with merging", frequency: "medium" },
    ],
  },
  "intersection": {
    easy: [
      { name: "Intersection of Two Linked Lists", key: "Switch heads when null, meet at intersection", frequency: "high" },
    ],
    medium: [
      { name: "Intersection of Two Linked Lists II", key: "Handle different lengths", frequency: "low" },
    ],
    hard: [],
  },
  "dummy-node": {
    easy: [
      { name: "Remove Linked List Elements", key: "Dummy simplifies head removal", frequency: "medium" },
      { name: "Merge Two Sorted Lists", key: "Dummy as merge start", frequency: "high" },
      { name: "Delete Node in a Linked List", key: "Copy next, skip next node", frequency: "low" },
    ],
    medium: [
      { name: "Remove Duplicates from Sorted List II", key: "Dummy handles head duplicates", frequency: "medium" },
      { name: "Partition List", key: "Two dummies for before/after", frequency: "medium" },
      { name: "Insertion Sort List", key: "Dummy simplifies insertions", frequency: "medium" },
      { name: "Add Two Numbers", key: "Dummy for result list", frequency: "high" },
      { name: "Merge In Between Linked Lists", key: "Dummy helps with connection", frequency: "medium" },
      { name: "Remove Zero Sum Consecutive Nodes", key: "Dummy with prefix sum", frequency: "medium" },
    ],
    hard: [],
  },
  "runner-technique": {
    medium: [
      { name: "Reorder List", key: "Find middle, reverse, merge", frequency: "medium" },
      { name: "Palindrome Linked List", key: "Find middle, reverse second half", frequency: "high" },
      { name: "Odd Even Linked List", key: "Separate odd/even positions", frequency: "medium" },
      { name: "Split Linked List in Parts", key: "Calculate sizes, split", frequency: "medium" },
    ],
    hard: [],
  },
  "in-place": {
    easy: [
      { name: "Remove Duplicates from Sorted List", key: "Skip duplicate nodes in-place", frequency: "medium" },
      { name: "Delete Node in a Linked List", key: "Copy next value, skip next", frequency: "low" },
    ],
    medium: [
      { name: "Remove Nth Node From End of List", key: "Two pointers, no extra space", frequency: "high" },
      { name: "Swap Nodes in Pairs", key: "Swap adjacent in-place", frequency: "medium" },
      { name: "Rotate List", key: "Make circular, break at new tail", frequency: "medium" },
      { name: "Odd Even Linked List", key: "Rearrange odd/even in-place", frequency: "medium" },
      { name: "Reverse Linked List II", key: "Reverse portion in-place", frequency: "high" },
      { name: "Remove Zero Sum Consecutive Nodes", key: "HashMap with prefix sum", frequency: "medium" },
      { name: "Swapping Nodes in a Linked List", key: "Swap values of kth nodes", frequency: "medium" },
    ],
    hard: [
      { name: "Reverse Nodes in k-Group", key: "Reverse k-groups in-place", frequency: "high" },
    ],
  },
  "design": {
    easy: [
      { name: "Design Linked List", key: "Implement all operations", frequency: "medium" },
      { name: "Design HashSet", key: "Use linked list for chaining", frequency: "low" },
      { name: "Design HashMap", key: "Array of linked lists", frequency: "low" },
    ],
    medium: [
      { name: "LRU Cache", key: "HashMap + doubly linked list", frequency: "high" },
      { name: "Design Browser History", key: "Doubly linked list for back/forward", frequency: "medium" },
      { name: "All O`one Data Structure", key: "HashMap + doubly linked list", frequency: "medium" },
      { name: "Design Skiplist", key: "Multi-level linked lists", frequency: "low" },
    ],
    hard: [
      { name: "LFU Cache", key: "HashMap + doubly linked lists", frequency: "high" },
      { name: "Design In-Memory File System", key: "Tree with linked structures", frequency: "low" },
    ],
  },
  "advanced": {
    medium: [
      { name: "Copy List with Random Pointer", key: "Interweave or hashmap", frequency: "high" },
      { name: "Flatten a Multilevel Doubly Linked List", key: "DFS with stack", frequency: "medium" },
      { name: "Convert Binary Search Tree to Sorted Doubly Linked List", key: "Inorder with linking", frequency: "medium" },
      { name: "Add Two Numbers II", key: "Reverse, add, reverse back", frequency: "medium" },
      { name: "Next Greater Node In Linked List", key: "Stack for next greater", frequency: "medium" },
      { name: "Remove Zero Sum Consecutive Nodes from Linked List", key: "Prefix sum with HashMap", frequency: "medium" },
    ],
    hard: [
      { name: "Reverse Nodes in Even Length Groups", key: "Count groups, reverse even", frequency: "low" },
      { name: "Maximum Twin Sum of a Linked List", key: "Find middle, reverse, compare", frequency: "medium" },
    ],
  },
};

const patternInfo = {
  "two-pointers": { icon: "🐢🐇", name: "Two Pointers", color: "green" },
  "reversal": { icon: "🔄", name: "Reversal", color: "teal" },
  "cycle-detection": { icon: "🔁", name: "Cycle Detection", color: "cyan" },
  "merge-lists": { icon: "🔀", name: "Merge Lists", color: "emerald" },
  "intersection": { icon: "✂️", name: "Intersection", color: "lime" },
  "dummy-node": { icon: "🎭", name: "Dummy Node", color: "green" },
  "runner-technique": { icon: "🏃", name: "Runner Technique", color: "teal" },
  "in-place": { icon: "📍", name: "In-place Operations", color: "emerald" },
  "design": { icon: "🏗️", name: "Design Problems", color: "blue" },
  "advanced": { icon: "🚀", name: "Advanced", color: "purple" },
};

export default function LinkedListProblems() {
  const [selectedPattern, setSelectedPattern] = useState("two-pointers");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const currentPattern = problemsByPattern[selectedPattern];
  const info = patternInfo[selectedPattern];

  const getProblems = () => {
    if (selectedDifficulty === "all") {
      return [
        ...(currentPattern.easy || []).map((p) => ({ ...p, difficulty: "easy" })),
        ...(currentPattern.medium || []).map((p) => ({ ...p, difficulty: "medium" })),
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

  const getFrequencyBadge = (freq) => {
    if (freq === "high") return "bg-red-500 text-white";
    if (freq === "medium") return "bg-orange-500 text-white";
    return "bg-gray-400 text-white";
  };

  const allProblems = Object.entries(problemsByPattern).reduce((total, [_, pattern]) => {
    return total + (pattern.easy?.length || 0) + (pattern.medium?.length || 0) + (pattern.hard?.length || 0);
  }, 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Must-Know Linked List Problems
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-2">
        {allProblems}+ curated linked list problems organized by pattern. Master these patterns to solve any linked list problem.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
        Each problem includes the key insight/approach and frequency indicator to help you prioritize.
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
                  ? "border-green-500 bg-green-50 dark:bg-green-900/30 shadow-lg"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-green-300 dark:hover:border-green-700"
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
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow"
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
        className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="text-2xl">{info.icon}</span>
            {info.name}
          </h3>
          <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-semibold">
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
              className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:border-green-400 dark:hover:border-green-600 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-slate-400 dark:text-slate-600 text-sm font-mono">
                      #{idx + 1}
                    </span>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 break-words">
                      {problem.name}
                    </h4>
                    {problem.frequency && (
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${getFrequencyBadge(problem.frequency)}`}>
                        {problem.frequency.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <span className="text-green-600 dark:text-green-400">Key:</span>
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
            {(currentPattern.easy || []).length}
          </div>
          <div className="text-sm text-green-700 dark:text-green-300">Easy</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-200">
            {(currentPattern.medium || []).length}
          </div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Medium</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-900 dark:text-red-200">
            {(currentPattern.hard || []).length || 0}
          </div>
          <div className="text-sm text-red-700 dark:text-red-300">Hard</div>
        </div>
      </motion.div>

      {/* Frequency Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4"
      >
        <h3 className="text-sm font-bold mb-3 text-amber-900 dark:text-amber-200">
          Frequency Legend:
        </h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-red-500 text-white rounded font-bold">HIGH</span>
            <span className="text-slate-700 dark:text-slate-300">Asked in 70%+ interviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-orange-500 text-white rounded font-bold">MEDIUM</span>
            <span className="text-slate-700 dark:text-slate-300">Asked in 30-70% interviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-gray-400 text-white rounded font-bold">LOW</span>
            <span className="text-slate-700 dark:text-slate-300">Asked in &lt;30% interviews</span>
          </div>
        </div>
      </motion.div>

      {/* Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-200">
          How to Practice
        </h3>
        <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Start with <strong>Easy</strong> problems and <strong>HIGH</strong> frequency problems first</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </span>
            <span>Read the "Key" hint - it reveals the essential pattern to use</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Use the pattern template from the Patterns section as your starting point</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              4
            </span>
            <span>Master <strong>Two Pointers</strong> and <strong>Reversal</strong> patterns first - they appear most often</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              5
            </span>
            <span>Progress to <strong>Medium</strong> and <strong>Hard</strong> after mastering Easy problems in each pattern</span>
          </li>
        </ol>
      </motion.div>
    </div>
  );
}
