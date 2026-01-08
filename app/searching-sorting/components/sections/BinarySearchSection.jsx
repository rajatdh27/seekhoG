"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BinarySearchSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(7);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);

  // MUST be sorted for binary search!
  const array = [2, 5, 8, 12, 16, 23, 38, 45];
  const target = 23;

  const languages = {
    c: `#include <stdio.h>

int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target)
                return mid;  // Found!

            if (arr[mid] < target)
                left = mid + 1;  // Search right half
            else
                right = mid - 1; // Search left half
        }

        return -1;  // Not found
    }
}`,
    javascript: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid  # Found!

        if arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half

    return -1  # Not found`,
    go: `package main

func binarySearch(arr []int, target int) int {
    left := 0
    right := len(arr) - 1

    for left <= right {
        mid := left + (right - left) / 2

        if arr[mid] == target {
            return mid  // Found!
        }

        if arr[mid] < target {
            left = mid + 1  // Search right half
        } else {
            right = mid - 1  // Search left half
        }
    }

    return -1  // Not found
}`,
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setFound(false);
    setSearchComplete(false);
    let l = 0;
    let r = array.length - 1;

    const step = () => {
      if (l <= r) {
        const m = Math.floor((l + r) / 2);
        setLeft(l);
        setRight(r);
        setMid(m);

        setTimeout(() => {
          if (array[m] === target) {
            setFound(true);
            setSearchComplete(true);
            setTimeout(() => {
              setIsAnimating(false);
              setMid(-1);
              setLeft(0);
              setRight(array.length - 1);
            }, 2000);
          } else if (array[m] < target) {
            l = m + 1;
            step();
          } else {
            r = m - 1;
            step();
          }
        }, 1000);
      } else {
        setSearchComplete(true);
        setTimeout(() => {
          setIsAnimating(false);
          setMid(-1);
          setLeft(0);
          setRight(array.length - 1);
        }, 2000);
      }
    };

    step();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl">
          <span className="text-4xl">🔍</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Binary Search
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Divide and conquer! Cut search space in half each time
          </p>
        </div>
      </div>

      {/* IMPORTANT: Array Must Be Sorted */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border-l-4 border-red-600">
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
          ⚠️ Critical Requirement
        </h3>
        <p className="text-red-800 dark:text-red-200 text-lg">
          Binary Search ONLY works on <strong>SORTED arrays</strong>! The array must be in ascending or descending order.
        </p>
      </div>

      {/* Visual Animation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 See It In Action
        </h3>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Searching for: <span className="font-bold text-orange-600 dark:text-orange-400 text-2xl">{target}</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Array is sorted: [2, 5, 8, 12, 16, 23, 38, 45]
            </p>
          </div>

          {/* Pointers Legend */}
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Left Pointer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Right Pointer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Middle (Checking)</span>
            </div>
          </div>

          {/* Array Visualization */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {array.map((num, idx) => {
              const isLeft = idx === left && isAnimating;
              const isRight = idx === right && isAnimating;
              const isMid = idx === mid;
              const isInRange = idx >= left && idx <= right && isAnimating;

              let bgColor = "#e2e8f0"; // default gray
              if (found && isMid) bgColor = "#22c55e"; // green when found
              else if (isMid) bgColor = "#eab308"; // yellow for middle
              else if (isLeft) bgColor = "#3b82f6"; // blue for left
              else if (isRight) bgColor = "#a855f7"; // purple for right
              else if (!isInRange && isAnimating) bgColor = "#94a3b8"; // dimmed if out of range

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  {/* Pointer Labels */}
                  <div className="h-6 text-xs font-bold">
                    {isLeft && isAnimating && <span className="text-blue-600">L</span>}
                    {isRight && isAnimating && <span className="text-purple-600">R</span>}
                    {isMid && <span className="text-yellow-600">M</span>}
                  </div>

                  {/* Array Element */}
                  <motion.div
                    animate={{
                      scale: isMid ? 1.2 : 1,
                      backgroundColor: bgColor,
                      opacity: !isInRange && isAnimating ? 0.3 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg text-slate-900"
                  >
                    {num}
                  </motion.div>

                  {/* Index */}
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    [{idx}]
                  </div>
                </div>
              );
            })}
          </div>

          {/* Status Message */}
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-4"
            >
              {found ? (
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  ✅ Found {target} at index {mid}!
                </p>
              ) : searchComplete ? (
                <p className="text-xl font-bold text-red-600 dark:text-red-400">
                  ❌ {target} not found in array
                </p>
              ) : mid >= 0 ? (
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  Checking middle [{mid}] = {array[mid]}
                  {array[mid] < target ? " → Too small, search right half" : " → Too large, search left half"}
                </p>
              ) : null}
            </motion.div>
          )}

          {/* Control Button */}
          <div className="text-center">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Searching..." : "Start Binary Search"}
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📋 How It Works
        </h3>
        <div className="space-y-3">
          {[
            "Start with left pointer at beginning, right pointer at end",
            "Calculate middle index: mid = (left + right) / 2",
            "Compare target with middle element",
            "If target = middle → Found! Return index",
            "If target < middle → Search left half (right = mid - 1)",
            "If target > middle → Search right half (left = mid + 1)",
            "Repeat until found or left > right",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Code Implementation
        </h3>

        {/* Language Selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{languages[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Time & Space Complexity */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚡ Complexity Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              ⏱️ Time Complexity
            </h4>
            <div className="space-y-2 text-green-800 dark:text-green-200">
              <p><strong>Best Case:</strong> O(1) - Target is middle element</p>
              <p><strong>Average Case:</strong> O(log n) - Halves search space each step</p>
              <p><strong>Worst Case:</strong> O(log n) - Target not found or at edge</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-blue-800 dark:text-blue-200">
              <p><strong>Iterative:</strong> O(1) - Only a few variables</p>
              <p><strong>Recursive:</strong> O(log n) - Call stack depth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why So Fast? */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-600">
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">
            🚀 Why Is Binary Search So Fast?
          </h3>
          <div className="space-y-3 text-yellow-900 dark:text-yellow-100">
            <p>
              <strong>Logarithmic growth means exponential speed!</strong>
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2 text-sm">
              <p>• 100 elements → Max 7 comparisons (log₂ 100 ≈ 6.64)</p>
              <p>• 1,000 elements → Max 10 comparisons (log₂ 1000 ≈ 9.97)</p>
              <p>• 1,000,000 elements → Max 20 comparisons (log₂ 1M ≈ 19.93)</p>
              <p className="font-bold text-orange-700 dark:text-orange-300 pt-2">
                Compare with Linear Search: 1M elements = 1M comparisons! 🐌
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Binary Search
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Binary Search When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Array is already sorted</li>
              <li>• Need to search many times</li>
              <li>• Working with large datasets</li>
              <li>• O(log n) speed is critical</li>
              <li>• Memory is limited (O(1) space)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Binary Search When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Array is unsorted (use linear or sort first)</li>
              <li>• Only searching once (sorting overhead not worth it)</li>
              <li>• Small array (linear search is simple and fast enough)</li>
              <li>• Data changes frequently (maintaining sort is costly)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
