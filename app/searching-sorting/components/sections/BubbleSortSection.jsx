"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BubbleSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [comparing, setComparing] = useState([-1, -1]);
  const [sorted, setSorted] = useState([]);

  const languages = {
    c: `#include <stdio.h>

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they're in wrong order
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they're in wrong order
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,
    java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                // Compare adjacent elements
                if (arr[j] > arr[j + 1]) {
                    // Swap if they're in wrong order
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`,
    javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they're in wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`,
    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            # Compare adjacent elements
            if arr[j] > arr[j + 1]:
                # Swap if they're in wrong order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    go: `package main

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            // Compare adjacent elements
            if arr[j] > arr[j+1] {
                // Swap if they're in wrong order
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}`,
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setSorted([]);
    setComparing([-1, -1]);
  };

  const startAnimation = async () => {
    setIsAnimating(true);
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const n = arr.length;
    const sortedIndices = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight comparing elements
        setComparing([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Swap if needed
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      // Mark last unsorted element as sorted
      sortedIndices.push(n - i - 1);
      setSorted([...sortedIndices]);
    }

    // Mark all as sorted
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([-1, -1]);

    setTimeout(() => {
      setIsAnimating(false);
      resetArray();
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl">
          <span className="text-4xl">🫧</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Bubble Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Bubbles largest elements to the end, one by one
          </p>
        </div>
      </div>

      {/* Visual Animation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 See It In Action
        </h3>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              Watch how larger values "bubble" to the right
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Comparing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Sorted</span>
              </div>
            </div>
          </div>

          {/* Array Visualization */}
          <div className="flex justify-center items-end gap-2 mb-6 h-64">
            {array.map((num, idx) => {
              const isComparing = comparing[0] === idx || comparing[1] === idx;
              const isSorted = sorted.includes(idx);

              let bgColor = "#e2e8f0"; // default gray
              if (isSorted) bgColor = "#22c55e"; // green when sorted
              else if (isComparing) bgColor = "#3b82f6"; // blue when comparing

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 90) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isComparing ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 rounded-t-lg shadow-lg flex items-end justify-center pb-2"
                  >
                    <span className="text-xs font-bold text-slate-900">
                      {num}
                    </span>
                  </motion.div>

                  {/* Index */}
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    [{idx}]
                  </div>
                </div>
              );
            })}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Sorting..." : "Start Bubble Sort"}
            </button>
            <button
              onClick={resetArray}
              disabled={isAnimating}
              className="px-8 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Reset
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
            "Start from the beginning of the array",
            "Compare each pair of adjacent elements (arr[j] and arr[j+1])",
            "If left element > right element → Swap them",
            "Continue until end of unsorted portion",
            "After each pass, the largest unsorted element 'bubbles' to its correct position",
            "Repeat for n-1 passes (where n is array length)",
            "Each pass reduces unsorted portion by 1",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why "Bubble"? */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🫧 Why Is It Called "Bubble" Sort?
          </h3>
          <p className="text-blue-900 dark:text-blue-100 text-lg mb-3">
            Just like air bubbles rise to the surface of water, larger values "bubble up" to the end of the array with each pass!
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>Example Pass:</strong> [5, 2, 8, 1] → [2, 5, 1, <span className="text-green-600 font-bold">8</span>]
              <br />
              The largest value (8) "bubbled" to the end!
            </p>
          </div>
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
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg"
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
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
              ⏱️ Time Complexity
            </h4>
            <div className="space-y-2 text-orange-800 dark:text-orange-200">
              <p><strong>Best Case:</strong> O(n) - Already sorted (with optimization)</p>
              <p><strong>Average Case:</strong> O(n²) - Two nested loops</p>
              <p><strong>Worst Case:</strong> O(n²) - Reverse sorted array</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-green-800 dark:text-green-200">
              <p><strong>Space:</strong> O(1) - In-place sorting</p>
              <p>Only uses a single temporary variable for swapping - very memory efficient!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Tip */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            ⚡ Optimization: Early Exit
          </h3>
          <p className="text-purple-900 dark:text-purple-100 mb-3">
            You can optimize bubble sort by tracking if any swaps occurred in a pass. If no swaps happen, the array is already sorted!
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <pre className="text-sm text-purple-800 dark:text-purple-200">
{`for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(arr[j], arr[j + 1]);
            swapped = true;
        }
    }
    if (!swapped) break;  // Array is sorted!
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Bubble Sort
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Bubble Sort When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Learning sorting algorithms (great for understanding!)</li>
              <li>• Very small datasets (n &lt; 10)</li>
              <li>• Array is nearly sorted</li>
              <li>• You need a simple, easy-to-understand algorithm</li>
              <li>• Memory is extremely limited (O(1) space)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Bubble Sort When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Working with large datasets (O(n²) is too slow)</li>
              <li>• Performance is critical</li>
              <li>• In production code (use Quick/Merge Sort instead)</li>
              <li>• Array is randomly ordered or reverse sorted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
