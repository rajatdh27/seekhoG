"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SelectionSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [array, setArray] = useState([64, 25, 12, 22, 11]);
  const [currentMin, setCurrentMin] = useState(-1);
  const [comparing, setComparing] = useState(-1);
  const [sorted, setSorted] = useState([]);
  const [swapping, setSwapping] = useState([-1, -1]);

  const languages = {
    c: `#include <stdio.h>

void selectionSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        int minIndex = i;  // Assume first element is minimum

        // Find the minimum in unsorted portion
        for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }

        // Swap minimum with first unsorted element
        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;  // Assume first element is minimum

        // Find the minimum in unsorted portion
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }

        // Swap minimum with first unsorted element
        if (minIndex != i)
            swap(arr[i], arr[minIndex]);
    }
}`,
    java: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;  // Assume first element is minimum

            // Find the minimum in unsorted portion
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }

            // Swap minimum with first unsorted element
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
}`,
    javascript: `function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;  // Assume first element is minimum

        // Find the minimum in unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }

        // Swap minimum with first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}`,
    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i  # Assume first element is minimum

        # Find the minimum in unsorted portion
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap minimum with first unsorted element
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr`,
    go: `package main

func selectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIndex := i  // Assume first element is minimum

        // Find the minimum in unsorted portion
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIndex] {
                minIndex = j
            }
        }

        // Swap minimum with first unsorted element
        if minIndex != i {
            arr[i], arr[minIndex] = arr[minIndex], arr[i]
        }
    }
}`,
  };

  const resetArray = () => {
    setArray([64, 25, 12, 22, 11]);
    setSorted([]);
    setCurrentMin(-1);
    setComparing(-1);
    setSwapping([-1, -1]);
  };

  const startAnimation = async () => {
    setIsAnimating(true);
    const arr = [64, 25, 12, 22, 11];
    const n = arr.length;
    const sortedIndices = [];

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      setCurrentMin(minIndex);
      await new Promise(resolve => setTimeout(resolve, 600));

      // Find minimum in unsorted portion
      for (let j = i + 1; j < n; j++) {
        setComparing(j);
        await new Promise(resolve => setTimeout(resolve, 400));

        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          setCurrentMin(minIndex);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }

      setComparing(-1);

      // Swap if needed
      if (minIndex !== i) {
        setSwapping([i, minIndex]);
        await new Promise(resolve => setTimeout(resolve, 800));
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 500));
        setSwapping([-1, -1]);
      }

      // Mark as sorted
      sortedIndices.push(i);
      setSorted([...sortedIndices]);
      setCurrentMin(-1);
    }

    // Mark all as sorted
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing(-1);
    setCurrentMin(-1);

    setTimeout(() => {
      setIsAnimating(false);
      resetArray();
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🎯</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Selection Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Select the minimum and place it at the beginning
          </p>
        </div>
      </div>

      {/* Visual Animation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 See It In Action
        </h3>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              Watch how we select the minimum element each time
            </p>
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Minimum</span>
              </div>
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
              const isCurrentMin = currentMin === idx;
              const isComparing = comparing === idx;
              const isSorted = sorted.includes(idx);
              const isSwapping = swapping[0] === idx || swapping[1] === idx;

              let bgColor = "#e2e8f0"; // default gray
              if (isSorted) bgColor = "#22c55e"; // green when sorted
              else if (isSwapping) bgColor = "#f59e0b"; // orange when swapping
              else if (isCurrentMin) bgColor = "#eab308"; // yellow for current min
              else if (isComparing) bgColor = "#3b82f6"; // blue when comparing

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 64) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isCurrentMin || isSwapping ? 1.15 : isComparing ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 rounded-t-lg shadow-lg flex items-end justify-center pb-2"
                  >
                    <span className="text-xs font-bold text-slate-900">
                      {num}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <div className="text-xs font-bold h-4">
                    {isCurrentMin && !isSorted && <span className="text-yellow-600">MIN</span>}
                    {isComparing && <span className="text-blue-600">?</span>}
                  </div>

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
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Sorting..." : "Start Selection Sort"}
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
            "Start with first position (i = 0)",
            "Assume current position has the minimum value",
            "Scan through all remaining unsorted elements",
            "Find the actual minimum element in the unsorted portion",
            "Swap the minimum with the element at position i",
            "Move to next position (i++) - this element is now sorted",
            "Repeat until entire array is sorted",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
            💡 Key Insight
          </h3>
          <p className="text-cyan-900 dark:text-cyan-100 text-lg mb-3">
            <strong>Selection Sort divides the array into two parts:</strong>
          </p>
          <div className="space-y-3 text-cyan-800 dark:text-cyan-200">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p><span className="text-green-600 font-bold">✓ Sorted portion</span> (left side) - grows by 1 each iteration</p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p><span className="text-slate-600 font-bold">? Unsorted portion</span> (right side) - shrinks by 1 each iteration</p>
            </div>
            <p className="pt-2 font-semibold">
              Each pass finds the minimum from the unsorted portion and moves it to the sorted portion!
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
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
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
              <p><strong>Best Case:</strong> O(n²) - Always scans all elements</p>
              <p><strong>Average Case:</strong> O(n²) - Two nested loops</p>
              <p><strong>Worst Case:</strong> O(n²) - Same performance regardless</p>
              <p className="text-sm pt-2 italic">Note: Unlike bubble sort, no early exit optimization possible!</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-green-800 dark:text-green-200">
              <p><strong>Space:</strong> O(1) - In-place sorting</p>
              <p>Only uses a few variables to track indices - very memory efficient!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantage Over Bubble Sort */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            ⚡ Advantage: Fewer Swaps!
          </h3>
          <p className="text-green-900 dark:text-green-100 text-lg mb-3">
            Selection Sort performs <strong>at most n-1 swaps</strong> (one per iteration), compared to bubble sort which can swap many times!
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2 text-green-800 dark:text-green-200">
            <p><strong>Selection Sort:</strong> Max (n-1) swaps</p>
            <p><strong>Bubble Sort:</strong> Can be O(n²) swaps</p>
            <p className="pt-2 font-semibold">This makes selection sort better when swapping is expensive (e.g., large objects)!</p>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Selection Sort
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Selection Sort When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Small datasets (n &lt; 20)</li>
              <li>• Swapping is expensive (minimizes writes)</li>
              <li>• Memory is limited (O(1) space)</li>
              <li>• Simple implementation needed</li>
              <li>• You want consistent performance (always O(n²))</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Selection Sort When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Working with large datasets</li>
              <li>• Array is already nearly sorted (bubble sort would be better)</li>
              <li>• Need stable sort (selection sort is unstable)</li>
              <li>• Performance is critical (use merge/quick sort)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
