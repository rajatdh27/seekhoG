"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function InsertionSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [array, setArray] = useState([12, 11, 13, 5, 6]);
  const [currentElement, setCurrentElement] = useState(-1);
  const [comparing, setComparing] = useState(-1);
  const [sorted, setSorted] = useState([0]); // First element is always sorted
  const [inserting, setInserting] = useState(false);

  const languages = {
    c: `#include <stdio.h>

void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];  // Element to be inserted
        int j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];  // Element to be inserted
        int j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }
}`,
    java: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];  // Element to be inserted
            int j = i - 1;

            // Shift elements greater than key to the right
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // Insert key at correct position
            arr[j + 1] = key;
        }
    }
}`,
    javascript: `function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];  // Element to be inserted
        let j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }
    return arr;
}`,
    python: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]  # Element to be inserted
        j = i - 1

        # Shift elements greater than key to the right
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        # Insert key at correct position
        arr[j + 1] = key
    return arr`,
    go: `package main

func insertionSort(arr []int) {
    n := len(arr)
    for i := 1; i < n; i++ {
        key := arr[i]  // Element to be inserted
        j := i - 1

        // Shift elements greater than key to the right
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j--
        }

        // Insert key at correct position
        arr[j+1] = key
    }
}`,
  };

  const resetArray = () => {
    setArray([12, 11, 13, 5, 6]);
    setSorted([0]);
    setCurrentElement(-1);
    setComparing(-1);
    setInserting(false);
  };

  const startAnimation = async () => {
    setIsAnimating(true);
    const arr = [12, 11, 13, 5, 6];
    const n = arr.length;
    const sortedIndices = [0]; // First element is always sorted

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      setCurrentElement(i);
      await new Promise(resolve => setTimeout(resolve, 800));

      let j = i - 1;

      // Compare and shift
      while (j >= 0 && arr[j] > key) {
        setComparing(j);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Shift element to the right
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 400));

        j--;
      }

      // Insert key at correct position
      setComparing(-1);
      setInserting(true);
      await new Promise(resolve => setTimeout(resolve, 400));

      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 500));

      setInserting(false);
      setCurrentElement(-1);

      // Update sorted portion
      sortedIndices.push(i);
      setSorted([...sortedIndices]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Mark all as sorted
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing(-1);
    setCurrentElement(-1);

    setTimeout(() => {
      setIsAnimating(false);
      resetArray();
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">📌</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Insertion Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Insert each element into its correct position in sorted portion
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
            🎴 Like Sorting Playing Cards!
          </h3>
          <p className="text-cyan-900 dark:text-cyan-100 text-lg mb-3">
            Imagine sorting a hand of cards: you pick up one card at a time and insert it into its correct position among the cards you've already sorted.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="text-cyan-800 dark:text-cyan-200">
              <strong>Left side:</strong> Always sorted<br />
              <strong>Right side:</strong> Unsorted cards to pick from<br />
              <strong>Process:</strong> Pick one, find position, insert!
            </p>
          </div>
        </div>
      </div>

      {/* Visual Animation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 See It In Action
        </h3>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              Watch how each element is inserted into the sorted portion
            </p>
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Element</span>
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
              const isCurrent = currentElement === idx;
              const isComparing = comparing === idx;
              const isSorted = sorted.includes(idx);

              let bgColor = "#e2e8f0"; // default gray
              if (isSorted && !isCurrent) bgColor = "#22c55e"; // green when sorted
              else if (isCurrent) bgColor = "#f97316"; // orange for current element
              else if (isComparing) bgColor = "#3b82f6"; // blue when comparing

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 13) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isCurrent ? 1.2 : isComparing ? 1.1 : 1,
                      y: isCurrent && inserting ? -20 : 0,
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
                    {isCurrent && <span className="text-orange-600">KEY</span>}
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

          {/* Sorted Boundary Indicator */}
          <div className="text-center mb-4">
            {isAnimating && sorted.length < array.length && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Sorted: {sorted.length} elements | Unsorted: {array.length - sorted.length} elements
              </p>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Sorting..." : "Start Insertion Sort"}
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
            "Start from second element (index 1) - first element is already sorted",
            "Pick current element as 'key' to be inserted",
            "Compare key with elements in sorted portion (from right to left)",
            "Shift all elements greater than key one position to the right",
            "Insert key at the correct position where all left elements are smaller",
            "Sorted portion grows by 1, unsorted portion shrinks by 1",
            "Repeat until all elements are in sorted portion",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
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
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg"
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
              <p><strong>Best Case:</strong> O(n) - Already sorted! 🎉</p>
              <p><strong>Average Case:</strong> O(n²) - Random order</p>
              <p><strong>Worst Case:</strong> O(n²) - Reverse sorted</p>
              <p className="text-sm pt-2 italic">Great for nearly sorted data!</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-blue-800 dark:text-blue-200">
              <p><strong>Space:</strong> O(1) - In-place sorting</p>
              <p>Only uses one variable (key) for temporary storage!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Insertion Sort is Special */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            ⭐ Why Insertion Sort is Special
          </h3>
          <div className="space-y-3 text-purple-900 dark:text-purple-100">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Adaptive Algorithm</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Runs faster on nearly sorted data - best case O(n)!
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Stable Sort</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Maintains relative order of equal elements
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Online Algorithm</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Can sort data as it arrives - great for streaming!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Insertion Sort
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Insertion Sort When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Small datasets (n &lt; 50)</li>
              <li>• Array is nearly sorted or partially sorted</li>
              <li>• Need stable sorting</li>
              <li>• Data arrives in real-time (online sorting)</li>
              <li>• Simple implementation needed</li>
              <li>• Used in hybrid algorithms (Timsort, Introsort)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Insertion Sort When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Large datasets with random order</li>
              <li>• Array is reverse sorted</li>
              <li>• Performance is critical for large n</li>
              <li>• Better alternatives available (merge/quick sort)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
