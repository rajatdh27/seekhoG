"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const problemsByPattern = {
  "two-pointers": {
    easy: [
      { name: "Two Sum II - Input Array Is Sorted", key: "Two pointers from both ends" },
      { name: "Remove Duplicates from Sorted Array", key: "Slow/fast pointers" },
      { name: "Move Zeroes", key: "Partition with two pointers" },
      { name: "Remove Element", key: "Filter in-place" },
      { name: "Valid Palindrome", key: "Left/right pointers" },
      { name: "Squares of a Sorted Array", key: "Merge from both ends" },
      { name: "Reverse String", key: "Swap from ends" },
      { name: "Reverse Vowels of a String", key: "Two pointers with condition" },
    ],
    medium: [
      { name: "3Sum", key: "Fix one, two pointers for rest" },
      { name: "Container With Most Water", key: "Greedy with two pointers" },
      { name: "Sort Colors (Dutch National Flag)", key: "Three-way partitioning" },
      { name: "4Sum", key: "Nested two pointers" },
      { name: "3Sum Closest", key: "Two pointers with min diff" },
      { name: "Partition Labels", key: "Greedy with end pointers" },
      { name: "Minimum Size Subarray Sum", key: "Sliding window variant" },
    ],
    hard: [
      { name: "Trapping Rain Water", key: "Two pointers with max heights" },
      { name: "4Sum II", key: "Two hash tables approach" },
      { name: "Substring with Concatenation of All Words", key: "Sliding window + hash" },
    ],
  },
  "sliding-window": {
    easy: [
      { name: "Maximum Average Subarray I", key: "Fixed size window" },
      { name: "Contains Duplicate II", key: "Window with set" },
      { name: "Max Consecutive Ones III", key: "Window with flip count" },
    ],
    medium: [
      { name: "Longest Substring Without Repeating Characters", key: "Variable window with hash" },
      { name: "Minimum Window Substring", key: "Variable window, char frequency" },
      { name: "Permutation in String", key: "Fixed window, frequency match" },
      { name: "Find All Anagrams in a String", key: "Sliding window + frequency" },
      { name: "Maximum Sum of Distinct Subarrays With Length K", key: "Fixed window + hash" },
      { name: "Longest Repeating Character Replacement", key: "Window with max frequency" },
      { name: "Fruit Into Baskets", key: "Window with at most 2 types" },
      { name: "Subarrays with K Different Integers", key: "At most K - at most K-1" },
    ],
    hard: [
      { name: "Sliding Window Maximum", key: "Monotonic deque" },
      { name: "Minimum Window Subsequence", key: "Two pointers with backtrack" },
    ],
  },
  "prefix-sum": {
    easy: [
      { name: "Range Sum Query - Immutable", key: "Basic prefix sum" },
      { name: "Find Pivot Index", key: "Left sum = right sum" },
      { name: "Running Sum of 1d Array", key: "Direct prefix sum" },
      { name: "Left and Right Sum Differences", key: "Two prefix arrays" },
    ],
    medium: [
      { name: "Subarray Sum Equals K", key: "Prefix sum + hash map" },
      { name: "Continuous Subarray Sum", key: "Prefix sum modulo" },
      { name: "Product of Array Except Self", key: "Prefix/suffix product" },
      { name: "Minimum Size Subarray Sum", key: "Prefix sum + binary search" },
      { name: "Subarray Sums Divisible by K", key: "Prefix sum mod + frequency" },
      { name: "Count Number of Nice Subarrays", key: "Transform + prefix sum" },
    ],
    hard: [
      { name: "Maximum Sum of 3 Non-Overlapping Subarrays", key: "Multiple prefix arrays" },
      { name: "Shortest Subarray with Sum at Least K", key: "Prefix + monotonic deque" },
    ],
  },
  "kadane": {
    easy: [
      { name: "Maximum Subarray", key: "Classic Kadane's" },
      { name: "Best Time to Buy and Sell Stock", key: "Min price + max profit" },
    ],
    medium: [
      { name: "Maximum Product Subarray", key: "Track both max and min" },
      { name: "Maximum Sum Circular Subarray", key: "Max normal + min to wrap" },
      { name: "Longest Turbulent Subarray", key: "Kadane variant" },
      { name: "Maximum Absolute Sum of Any Subarray", key: "Max of |Kadane|" },
    ],
    hard: [
      { name: "Maximum Sum of Two Non-Overlapping Subarrays", key: "Two Kadane passes" },
    ],
  },
  "binary-search": {
    easy: [
      { name: "Binary Search", key: "Classic binary search" },
      { name: "Search Insert Position", key: "Find insertion point" },
      { name: "First Bad Version", key: "Binary search on range" },
      { name: "Sqrt(x)", key: "Binary search on answer" },
      { name: "Valid Perfect Square", key: "Binary search 1 to x" },
      { name: "Intersection of Two Arrays", key: "Sort + binary search" },
    ],
    medium: [
      { name: "Search in Rotated Sorted Array", key: "Modified binary search" },
      { name: "Find First and Last Position of Element in Sorted Array", key: "Two binary searches" },
      { name: "Find Peak Element", key: "Binary search on peak" },
      { name: "Search a 2D Matrix", key: "Treat as 1D array" },
      { name: "Koko Eating Bananas", key: "Binary search on speed" },
      { name: "Capacity To Ship Packages Within D Days", key: "Binary search on capacity" },
      { name: "Minimum Number of Days to Make m Bouquets", key: "Binary search on days" },
      { name: "Find Minimum in Rotated Sorted Array", key: "Binary search variant" },
    ],
    hard: [
      { name: "Median of Two Sorted Arrays", key: "Binary search on partition" },
      { name: "Split Array Largest Sum", key: "Binary search + greedy" },
      { name: "Minimum Number of Removals to Make Mountain Array", key: "LIS with binary search" },
    ],
  },
  "hashmap": {
    easy: [
      { name: "Two Sum", key: "Value → index map" },
      { name: "Contains Duplicate", key: "Check if in set" },
      { name: "Valid Anagram", key: "Frequency map" },
      { name: "Intersection of Two Arrays II", key: "Frequency count" },
      { name: "Majority Element", key: "Count frequency" },
      { name: "Single Number", key: "XOR or hash set" },
      { name: "Happy Number", key: "Detect cycle with set" },
    ],
    medium: [
      { name: "Group Anagrams", key: "Sorted string as key" },
      { name: "Top K Frequent Elements", key: "Frequency map + sorting" },
      { name: "Longest Consecutive Sequence", key: "Set for O(1) lookup" },
      { name: "4Sum II", key: "Two maps for pairs" },
      { name: "Contiguous Array", key: "Balance map" },
      { name: "Subarray Sum Equals K", key: "Prefix sum map" },
    ],
    hard: [
      { name: "First Missing Positive", key: "Array as hash" },
      { name: "Longest Substring with At Most K Distinct Characters", key: "Window + frequency map" },
    ],
  },
  "sorting": {
    easy: [
      { name: "Sort an Array", key: "Implement sorting algorithm" },
      { name: "Sort Array By Parity", key: "Partition" },
      { name: "Merge Sorted Array", key: "Two pointers from end" },
      { name: "Relative Sort Array", key: "Custom comparator" },
      { name: "Largest Number At Least Twice of Others", key: "Find max twice" },
    ],
    medium: [
      { name: "3Sum", key: "Sort then two pointers" },
      { name: "Merge Intervals", key: "Sort by start" },
      { name: "Sort Colors", key: "Dutch flag algorithm" },
      { name: "Wiggle Sort", key: "Sort + rearrange" },
      { name: "Largest Number", key: "Custom string sort" },
      { name: "H-Index", key: "Sort + find threshold" },
      { name: "Kth Largest Element in an Array", key: "QuickSelect or heap" },
    ],
    hard: [
      { name: "Median of Two Sorted Arrays", key: "Binary search" },
      { name: "Count of Range Sum", key: "Merge sort + prefix" },
      { name: "Reverse Pairs", key: "Modified merge sort" },
    ],
  },
  "intervals": {
    easy: [
      { name: "Meeting Rooms", key: "Check overlap after sort" },
      { name: "Can Attend Meetings", key: "Sort + check adjacent" },
    ],
    medium: [
      { name: "Merge Intervals", key: "Sort + merge overlaps" },
      { name: "Insert Interval", key: "Find position + merge" },
      { name: "Meeting Rooms II", key: "Min heap or sweep line" },
      { name: "Non-overlapping Intervals", key: "Greedy by end time" },
      { name: "Minimum Number of Arrows to Burst Balloons", key: "Greedy overlap" },
      { name: "Partition Labels", key: "Last occurrence map" },
    ],
    hard: [
      { name: "Employee Free Time", key: "Merge all intervals" },
      { name: "My Calendar III", key: "Sweep line algorithm" },
    ],
  },
  "monotonic-stack": {
    easy: [
      { name: "Next Greater Element I", key: "Stack with hash" },
      { name: "Baseball Game", key: "Stack simulation" },
    ],
    medium: [
      { name: "Daily Temperatures", key: "Decreasing stack" },
      { name: "Next Greater Element II", key: "Circular with stack" },
      { name: "Online Stock Span", key: "Decreasing stack with count" },
      { name: "Sum of Subarray Minimums", key: "Previous/next smaller" },
      { name: "132 Pattern", key: "Stack to track 3-2 pattern" },
    ],
    hard: [
      { name: "Largest Rectangle in Histogram", key: "Monotonic increasing stack" },
      { name: "Trapping Rain Water", key: "Decreasing stack" },
      { name: "Maximal Rectangle", key: "Histogram for each row" },
      { name: "Maximum Score of a Good Subarray", key: "Monotonic stack" },
    ],
  },
};

const patternInfo = {
  "two-pointers": { icon: "👉👈", name: "Two Pointers", color: "blue" },
  "sliding-window": { icon: "🪟", name: "Sliding Window", color: "purple" },
  "prefix-sum": { icon: "➕", name: "Prefix Sum", color: "green" },
  "kadane": { icon: "📊", name: "Kadane's Algorithm", color: "orange" },
  "binary-search": { icon: "🔍", name: "Binary Search", color: "indigo" },
  "hashmap": { icon: "🗂️", name: "HashMap", color: "pink" },
  "sorting": { icon: "🔄", name: "Sorting", color: "teal" },
  "intervals": { icon: "🔀", name: "Intervals", color: "violet" },
  "monotonic-stack": { icon: "📚", name: "Monotonic Stack", color: "rose" },
};

export default function ArrayProblems() {
  const [selectedPattern, setSelectedPattern] = useState("two-pointers");
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
    return total + pattern.easy.length + pattern.medium.length + (pattern.hard?.length || 0);
  }, 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100"
      >
        Must-Know Array Problems
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-2">
        {allProblems}+ curated array problems organized by pattern. Master these patterns to solve any array problem.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
        Each problem includes the key insight/approach to help you understand the pattern.
      </p>

      {/* Pattern Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Select Pattern:
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
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
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
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
                  ? "bg-blue-600 text-white shadow"
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
        className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-blue-900/20 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="text-2xl">{info.icon}</span>
            {info.name}
          </h3>
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
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
              className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
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
                    <span className="text-blue-600 dark:text-blue-400">💡</span>
                    Key: {problem.key}
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
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-200">
          📚 How to Practice
        </h3>
        <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Start with <strong>Easy</strong> problems to understand the pattern</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </span>
            <span>Read the "Key" hint - it tells you the core insight</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Try to code the solution using the pattern template</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              4
            </span>
            <span>Move to <strong>Medium</strong> after completing all Easy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              5
            </span>
            <span>Attempt <strong>Hard</strong> problems once you've mastered the pattern</span>
          </li>
        </ol>
      </motion.div>
    </div>
  );
}
