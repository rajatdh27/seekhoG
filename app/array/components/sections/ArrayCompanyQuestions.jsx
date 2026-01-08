"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const companyProblems = {
  Google: {
    icon: "🔍",
    color: "blue",
    total: 156,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "Very High", tags: ["Hash Table", "Two Pointers"] },
      { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", frequency: "Very High", tags: ["Kadane's"] },
      { name: "Merge Sorted Array", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
      { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
      { name: "Majority Element", difficulty: "Easy", frequency: "Medium", tags: ["Boyer-Moore"] },
    ],
    medium: [
      { name: "Container With Most Water", difficulty: "Medium", frequency: "Very High", tags: ["Two Pointers"] },
      { name: "3Sum", difficulty: "Medium", frequency: "Very High", tags: ["Two Pointers", "Sorting"] },
      { name: "Product of Array Except Self", difficulty: "Medium", frequency: "Very High", tags: ["Prefix/Suffix"] },
      { name: "Next Permutation", difficulty: "Medium", frequency: "High", tags: ["Math"] },
      { name: "Search in Rotated Sorted Array", difficulty: "Medium", frequency: "High", tags: ["Binary Search"] },
      { name: "Find Peak Element", difficulty: "Medium", frequency: "High", tags: ["Binary Search"] },
      { name: "Longest Consecutive Sequence", difficulty: "Medium", frequency: "Medium", tags: ["Hash Set"] },
    ],
    hard: [
      { name: "Trapping Rain Water", difficulty: "Hard", frequency: "Very High", tags: ["Two Pointers", "Stack"] },
      { name: "First Missing Positive", difficulty: "Hard", frequency: "High", tags: ["Cyclic Sort"] },
      { name: "Median of Two Sorted Arrays", difficulty: "Hard", frequency: "High", tags: ["Binary Search"] },
      { name: "Longest Increasing Path in a Matrix", difficulty: "Hard", frequency: "Medium", tags: ["DFS", "Memoization"] },
    ],
  },
  Amazon: {
    icon: "📦",
    color: "orange",
    total: 203,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "Very High", tags: ["Hash Table"] },
      { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", frequency: "Very High", tags: ["Kadane's"] },
      { name: "Valid Anagram", difficulty: "Easy", frequency: "High", tags: ["Hash Table", "Sorting"] },
      { name: "Contains Duplicate", difficulty: "Easy", frequency: "High", tags: ["Hash Set"] },
      { name: "Maximum Subarray", difficulty: "Easy", frequency: "High", tags: ["Kadane's"] },
    ],
    medium: [
      { name: "Top K Frequent Elements", difficulty: "Medium", frequency: "Very High", tags: ["Heap", "Bucket Sort"] },
      { name: "Rotate Array", difficulty: "Medium", frequency: "Very High", tags: ["Reversal"] },
      { name: "K Closest Points to Origin", difficulty: "Medium", frequency: "Very High", tags: ["Heap", "Quick Select"] },
      { name: "Meeting Rooms II", difficulty: "Medium", frequency: "High", tags: ["Intervals", "Heap"] },
      { name: "Subarray Sum Equals K", difficulty: "Medium", frequency: "High", tags: ["Prefix Sum", "Hash Map"] },
      { name: "LRU Cache", difficulty: "Medium", frequency: "High", tags: ["Hash Map", "Linked List"] },
    ],
    hard: [
      { name: "Merge k Sorted Lists", difficulty: "Hard", frequency: "Very High", tags: ["Heap", "Divide & Conquer"] },
      { name: "Trapping Rain Water", difficulty: "Hard", frequency: "High", tags: ["Two Pointers"] },
      { name: "Maximum Gap", difficulty: "Hard", frequency: "Medium", tags: ["Bucket Sort"] },
    ],
  },
  Microsoft: {
    icon: "🪟",
    color: "cyan",
    total: 142,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "Very High", tags: ["Hash Table"] },
      { name: "Reverse String", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
      { name: "Excel Sheet Column Number", difficulty: "Easy", frequency: "High", tags: ["Math"] },
      { name: "Missing Number", difficulty: "Easy", frequency: "High", tags: ["XOR", "Math"] },
    ],
    medium: [
      { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", frequency: "Very High", tags: ["Sliding Window"] },
      { name: "3Sum", difficulty: "Medium", frequency: "High", tags: ["Two Pointers"] },
      { name: "Group Anagrams", difficulty: "Medium", frequency: "High", tags: ["Hash Map"] },
      { name: "String to Integer (atoi)", difficulty: "Medium", frequency: "High", tags: ["String"] },
      { name: "Spiral Matrix", difficulty: "Medium", frequency: "Medium", tags: ["Matrix"] },
    ],
    hard: [
      { name: "Reverse Nodes in k-Group", difficulty: "Hard", frequency: "High", tags: ["Linked List"] },
      { name: "Merge k Sorted Lists", difficulty: "Hard", frequency: "High", tags: ["Heap"] },
      { name: "Word Search II", difficulty: "Hard", frequency: "Medium", tags: ["Trie", "Backtracking"] },
    ],
  },
  Meta: {
    icon: "👍",
    color: "indigo",
    total: 98,
    easy: [
      { name: "Valid Parentheses", difficulty: "Easy", frequency: "Very High", tags: ["Stack"] },
      { name: "Merge Two Sorted Lists", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
      { name: "Move Zeroes", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
    ],
    medium: [
      { name: "Subarray Sum Equals K", difficulty: "Medium", frequency: "Very High", tags: ["Prefix Sum"] },
      { name: "Continuous Subarray Sum", difficulty: "Medium", frequency: "Very High", tags: ["Prefix Sum", "Hash Map"] },
      { name: "Next Permutation", difficulty: "Medium", frequency: "High", tags: ["Math"] },
      { name: "Dot Product of Two Sparse Vectors", difficulty: "Medium", frequency: "High", tags: ["Two Pointers"] },
      { name: "Random Pick with Weight", difficulty: "Medium", frequency: "High", tags: ["Prefix Sum", "Binary Search"] },
      { name: "Buildings With an Ocean View", difficulty: "Medium", frequency: "Medium", tags: ["Monotonic Stack"] },
    ],
    hard: [
      { name: "Basic Calculator", difficulty: "Hard", frequency: "High", tags: ["Stack"] },
      { name: "Alien Dictionary", difficulty: "Hard", frequency: "High", tags: ["Topological Sort"] },
      { name: "Minimum Window Substring", difficulty: "Hard", frequency: "Medium", tags: ["Sliding Window"] },
    ],
  },
  Apple: {
    icon: "🍎",
    color: "slate",
    total: 87,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "Very High", tags: ["Hash Table"] },
      { name: "Reverse Linked List", difficulty: "Easy", frequency: "High", tags: ["Linked List"] },
      { name: "Palindrome Number", difficulty: "Easy", frequency: "High", tags: ["Math"] },
    ],
    medium: [
      { name: "Add Two Numbers", difficulty: "Medium", frequency: "Very High", tags: ["Linked List"] },
      { name: "Design Hit Counter", difficulty: "Medium", frequency: "High", tags: ["Queue", "Design"] },
      { name: "Kth Largest Element in an Array", difficulty: "Medium", frequency: "High", tags: ["Quick Select", "Heap"] },
      { name: "Product of Array Except Self", difficulty: "Medium", frequency: "Medium", tags: ["Prefix/Suffix"] },
    ],
    hard: [
      { name: "Median of Two Sorted Arrays", difficulty: "Hard", frequency: "High", tags: ["Binary Search"] },
      { name: "Trapping Rain Water", difficulty: "Hard", frequency: "Medium", tags: ["Two Pointers"] },
    ],
  },
  Netflix: {
    icon: "📺",
    color: "red",
    total: 45,
    easy: [
      { name: "Fizz Buzz", difficulty: "Easy", frequency: "High", tags: ["Math"] },
      { name: "Valid Parentheses", difficulty: "Easy", frequency: "High", tags: ["Stack"] },
    ],
    medium: [
      { name: "LRU Cache", difficulty: "Medium", frequency: "Very High", tags: ["Design", "Hash Map"] },
      { name: "Design Search Autocomplete System", difficulty: "Medium", frequency: "High", tags: ["Trie", "Design"] },
      { name: "Top K Frequent Words", difficulty: "Medium", frequency: "High", tags: ["Heap", "Hash Map"] },
      { name: "Maximum Subarray", difficulty: "Medium", frequency: "Medium", tags: ["Kadane's"] },
    ],
    hard: [
      { name: "Design In-Memory File System", difficulty: "Hard", frequency: "High", tags: ["Design", "Trie"] },
      { name: "Word Ladder II", difficulty: "Hard", frequency: "Medium", tags: ["BFS", "Backtracking"] },
    ],
  },
  Adobe: {
    icon: "🎨",
    color: "red",
    total: 76,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "High", tags: ["Hash Table"] },
      { name: "Valid Palindrome", difficulty: "Easy", frequency: "High", tags: ["Two Pointers"] },
    ],
    medium: [
      { name: "Kth Largest Element in an Array", difficulty: "Medium", frequency: "Very High", tags: ["Quick Select"] },
      { name: "Decode String", difficulty: "Medium", frequency: "High", tags: ["Stack"] },
      { name: "Minimum Size Subarray Sum", difficulty: "Medium", frequency: "High", tags: ["Sliding Window"] },
      { name: "Meeting Rooms II", difficulty: "Medium", frequency: "High", tags: ["Intervals", "Heap"] },
    ],
    hard: [
      { name: "Trapping Rain Water", difficulty: "Hard", frequency: "High", tags: ["Two Pointers"] },
      { name: "Text Justification", difficulty: "Hard", frequency: "Medium", tags: ["String"] },
    ],
  },
  Uber: {
    icon: "🚗",
    color: "green",
    total: 54,
    easy: [
      { name: "Two Sum", difficulty: "Easy", frequency: "Very High", tags: ["Hash Table"] },
      { name: "Valid Parentheses", difficulty: "Easy", frequency: "High", tags: ["Stack"] },
    ],
    medium: [
      { name: "Design Hit Counter", difficulty: "Medium", frequency: "Very High", tags: ["Design", "Queue"] },
      { name: "Design Tic-Tac-Toe", difficulty: "Medium", frequency: "High", tags: ["Design", "Matrix"] },
      { name: "Shortest Path in Binary Matrix", difficulty: "Medium", frequency: "High", tags: ["BFS"] },
      { name: "Insert Delete GetRandom O(1)", difficulty: "Medium", frequency: "High", tags: ["Design", "Hash Map"] },
    ],
    hard: [
      { name: "Word Ladder", difficulty: "Hard", frequency: "High", tags: ["BFS"] },
      { name: "Sliding Window Maximum", difficulty: "Hard", frequency: "Medium", tags: ["Deque", "Sliding Window"] },
    ],
  },
};

export default function ArrayCompanyQuestions() {
  const [selectedCompany, setSelectedCompany] = useState("Google");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const companies = Object.keys(companyProblems);
  const currentCompany = companyProblems[selectedCompany];

  const getProblems = () => {
    if (difficultyFilter === "all") {
      return [
        ...(currentCompany.easy || []),
        ...(currentCompany.medium || []),
        ...(currentCompany.hard || []),
      ];
    }
    return currentCompany[difficultyFilter] || [];
  };

  const getDifficultyColor = (diff) => {
    if (diff === "Easy") return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300";
    if (diff === "Medium") return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300";
    return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300";
  };

  const getFrequencyColor = (freq) => {
    if (freq === "Very High") return "text-red-600 dark:text-red-400";
    if (freq === "High") return "text-orange-600 dark:text-orange-400";
    return "text-slate-600 dark:text-slate-400";
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100"
      >
        Company-Wise Questions
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Practice problems frequently asked by top tech companies. Focus on companies you're targeting.
      </p>

      {/* Company Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {companies.map((company, idx) => {
          const data = companyProblems[company];
          return (
            <motion.button
              key={company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedCompany(company)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedCompany === company
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg"
                  : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
              }`}
            >
              <div className="text-3xl mb-1">{data.icon}</div>
              <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {company}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {data.total} problems
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Difficulty Filter */}
      <div className="flex gap-3 mb-6">
        {["all", "easy", "medium", "hard"].map((diff) => (
          <button
            key={diff}
            onClick={() => setDifficultyFilter(diff)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm capitalize transition-all ${
              difficultyFilter === diff
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            {diff}
            {diff !== "all" && (
              <span className="ml-1 text-xs opacity-75">
                ({currentCompany[diff]?.length || 0})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Problems List */}
      <motion.div
        key={selectedCompany + difficultyFilter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {currentCompany.icon} {selectedCompany} Array Problems
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Showing {getProblems().length} problems
          </div>
        </div>

        {getProblems().map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.01, x: 5 }}
            className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 border border-slate-200 dark:border-slate-600 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {problem.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
                <span className={`text-xs font-semibold ${getFrequencyColor(problem.frequency)}`}>
                  {problem.frequency}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {getProblems().length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No problems found for this difficulty level.
          </div>
        )}
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="text-2xl font-bold text-green-700 dark:text-green-400">
              {currentCompany.easy?.length || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Easy</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">
              {currentCompany.medium?.length || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Medium</div>
          </div>
          <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="text-2xl font-bold text-red-700 dark:text-red-400">
              {currentCompany.hard?.length || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Hard</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
