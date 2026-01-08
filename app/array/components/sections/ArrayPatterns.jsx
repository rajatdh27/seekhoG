"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const patterns = [
  {
    id: "two-pointers",
    name: "Two Pointers",
    icon: "👉👈",
    difficulty: "Easy-Medium",
    description: "Use two pointers to traverse array from different positions",
    whenToUse: [
      "Sorted array problems",
      "Pair sum problems",
      "Palindrome checking",
      "Removing duplicates",
      "Partitioning problems",
    ],
    template: `function twoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Process current pair
    if (condition) {
      // Found answer
      return [left, right];
    } else if (needMoveLeft) {
      left++;
    } else {
      right--;
    }
  }

  return -1; // Not found
}`,
    problems: [
      "Two Sum II (Sorted Array)",
      "3Sum",
      "Container With Most Water",
      "Remove Duplicates from Sorted Array",
      "Valid Palindrome",
      "Sort Colors (Dutch National Flag)",
    ],
    complexity: "Time: O(n), Space: O(1)",
  },
  {
    id: "sliding-window",
    name: "Sliding Window",
    icon: "🪟",
    difficulty: "Medium",
    description: "Maintain a window that slides through array to find optimal solution",
    whenToUse: [
      "Subarray/substring problems",
      "Finding max/min in subarrays",
      "Problems with contiguous elements",
      "Fixed or variable window size",
    ],
    template: `function slidingWindow(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Initialize first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}`,
    problems: [
      "Maximum Sum Subarray of Size K",
      "Longest Substring Without Repeating Characters",
      "Minimum Window Substring",
      "Sliding Window Maximum",
      "Permutation in String",
    ],
    complexity: "Time: O(n), Space: O(1) or O(k)",
  },
  {
    id: "prefix-sum",
    name: "Prefix Sum / Cumulative Sum",
    icon: "➕",
    difficulty: "Easy-Medium",
    description: "Precompute cumulative sums for O(1) range queries",
    whenToUse: [
      "Range sum queries",
      "Subarray sum problems",
      "Equilibrium index",
      "Multiple queries on same array",
    ],
    template: `function buildPrefixSum(arr) {
  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}

function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}`,
    problems: [
      "Range Sum Query - Immutable",
      "Subarray Sum Equals K",
      "Continuous Subarray Sum",
      "Find Pivot Index",
      "Product of Array Except Self",
    ],
    complexity: "Time: O(n) preprocessing, O(1) query, Space: O(n)",
  },
  {
    id: "kadane",
    name: "Kadane's Algorithm",
    icon: "📊",
    difficulty: "Medium",
    description: "Find maximum sum subarray using dynamic programming",
    whenToUse: [
      "Maximum subarray sum",
      "Maximum product subarray",
      "Any \"best contiguous subarray\" problem",
    ],
    template: `function maxSubarray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}`,
    problems: [
      "Maximum Subarray",
      "Maximum Product Subarray",
      "Maximum Sum Circular Subarray",
      "Best Time to Buy and Sell Stock",
    ],
    complexity: "Time: O(n), Space: O(1)",
  },
  {
    id: "binary-search",
    name: "Binary Search & Variants",
    icon: "🔍",
    difficulty: "Medium-Hard",
    description: "Search in sorted array or search space by dividing in half",
    whenToUse: [
      "Sorted array search",
      "Finding boundaries (first/last occurrence)",
      "Search in rotated array",
      "Binary search on answer",
    ],
    template: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`,
    problems: [
      "Binary Search",
      "Search in Rotated Sorted Array",
      "Find First and Last Position",
      "Search Insert Position",
      "Koko Eating Bananas",
      "Median of Two Sorted Arrays",
    ],
    complexity: "Time: O(log n), Space: O(1)",
  },
  {
    id: "hashmap",
    name: "HashMap / Frequency Counter",
    icon: "🗂️",
    difficulty: "Easy-Medium",
    description: "Use hash table to count frequencies or store seen elements",
    whenToUse: [
      "Finding duplicates",
      "Counting occurrences",
      "Two sum with unsorted array",
      "Anagram problems",
    ],
    template: `function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [];
}`,
    problems: [
      "Two Sum",
      "Contains Duplicate",
      "Group Anagrams",
      "Top K Frequent Elements",
      "Longest Consecutive Sequence",
    ],
    complexity: "Time: O(n), Space: O(n)",
  },
  {
    id: "intervals",
    name: "Merge Intervals",
    icon: "🔀",
    difficulty: "Medium",
    description: "Sort intervals and merge overlapping ones",
    whenToUse: [
      "Overlapping intervals",
      "Meeting rooms",
      "Interval scheduling",
      "Range merge problems",
    ],
    template: `function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}`,
    problems: [
      "Merge Intervals",
      "Insert Interval",
      "Meeting Rooms II",
      "Non-overlapping Intervals",
      "Minimum Number of Arrows to Burst Balloons",
    ],
    complexity: "Time: O(n log n), Space: O(n)",
  },
  {
    id: "monotonic-stack",
    name: "Monotonic Stack/Queue",
    icon: "📚",
    difficulty: "Hard",
    description: "Maintain stack/queue in sorted order for next greater/smaller element",
    whenToUse: [
      "Next greater/smaller element",
      "Stock span problem",
      "Largest rectangle problems",
      "Trapping rain water",
    ],
    template: `function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }

  return result;
}`,
    problems: [
      "Next Greater Element",
      "Daily Temperatures",
      "Largest Rectangle in Histogram",
      "Trapping Rain Water",
      "Car Fleet",
    ],
    complexity: "Time: O(n), Space: O(n)",
  },
  {
    id: "sorting",
    name: "Sorting + Greedy",
    icon: "🔄",
    difficulty: "Medium",
    description: "Sort array first, then apply greedy approach",
    whenToUse: [
      "Problems where order matters",
      "Greedy selection",
      "Interval problems",
      "Meeting scheduling",
    ],
    template: `function assignCookies(greed, cookies) {
  greed.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  while (child < greed.length && cookie < cookies.length) {
    if (cookies[cookie] >= greed[child]) {
      child++;
    }
    cookie++;
  }

  return child;
}`,
    problems: [
      "Assign Cookies",
      "Non-overlapping Intervals",
      "Minimum Arrows to Burst Balloons",
      "Largest Number",
      "3Sum Closest",
    ],
    complexity: "Time: O(n log n), Space: O(1) or O(n)",
  },
];

export default function ArrayPatterns() {
  const [selectedPattern, setSelectedPattern] = useState(patterns[0]);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Interview Patterns
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Master these 9 essential patterns to solve 90% of array interview questions.
        Each pattern is a problem-solving technique that applies to multiple problems.
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
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg"
                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
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
        className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-blue-900/20 rounded-xl p-8 border border-slate-200 dark:border-slate-600"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 mb-2">
              <span className="text-3xl">{selectedPattern.icon}</span>
              {selectedPattern.name}
            </h3>
            <p className="text-slate-700 dark:text-slate-300">{selectedPattern.description}</p>
          </div>
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold whitespace-nowrap">
            {selectedPattern.difficulty}
          </span>
        </div>

        {/* When to Use */}
        <div className="mb-6">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
            ✅ When to Use This Pattern:
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
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">▸</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Complexity */}
        <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
          <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">
            Complexity:
          </h4>
          <p className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
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
            🎯 Common LeetCode Problems:
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {selectedPattern.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
              >
                {problem}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pattern Flowchart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-200">
          📋 How to Choose the Right Pattern
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              1. Sorted?
            </span>
            <span>→ Try Binary Search or Two Pointers</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              2. Subarray/Substring?
            </span>
            <span>→ Try Sliding Window or Prefix Sum</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              3. Need pair/sum?
            </span>
            <span>→ Try HashMap or Two Pointers</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              4. Intervals?
            </span>
            <span>→ Try Merge Intervals or Sorting</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              5. Next greater/smaller?
            </span>
            <span>→ Try Monotonic Stack</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
              6. Max/min subarray?
            </span>
            <span>→ Try Kadane's Algorithm</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
