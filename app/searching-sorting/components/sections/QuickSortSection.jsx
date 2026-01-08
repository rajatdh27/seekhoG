"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function QuickSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [array, setArray] = useState([10, 7, 8, 9, 1, 5]);
  const [pivot, setPivot] = useState(-1);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [partitioned, setPartitioned] = useState([]);

  const languages = {
    c: `#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose last element as pivot
    int i = low - 1;        // Index of smaller element

    for (int j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Swap arr[i+1] and arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // pi is partitioning index
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];  // Choose last element as pivot
    int i = low - 1;        // Index of smaller element

    for (int j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        // pi is partitioning index
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}`,
    java: `public class QuickSort {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // Choose last element as pivot
        int i = low - 1;        // Index of smaller element

        for (int j = low; j < high; j++) {
            // If current element is smaller than pivot
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // Swap arr[i+1] and arr[high] (pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // pi is partitioning index
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);  // Before pi
            quickSort(arr, pi + 1, high); // After pi
        }
    }
}`,
    javascript: `function partition(arr, low, high) {
    const pivot = arr[high];  // Choose last element as pivot
    let i = low - 1;          // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index
        const pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}`,
    python: `def partition(arr, low, high):
    pivot = arr[high]  # Choose last element as pivot
    i = low - 1        # Index of smaller element

    for j in range(low, high):
        # If current element is smaller than pivot
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        # pi is partitioning index
        pi = partition(arr, low, high)

        quick_sort(arr, low, pi - 1)  # Before pi
        quick_sort(arr, pi + 1, high) # After pi`,
    go: `package main

func partition(arr []int, low, high int) int {
    pivot := arr[high]  // Choose last element as pivot
    i := low - 1        // Index of smaller element

    for j := low; j < high; j++ {
        // If current element is smaller than pivot
        if arr[j] < pivot {
            i++
            arr[i], arr[j] = arr[j], arr[i]
        }
    }
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1
}

func quickSort(arr []int, low, high int) {
    if low < high {
        // pi is partitioning index
        pi := partition(arr, low, high)

        quickSort(arr, low, pi-1)  // Before pi
        quickSort(arr, pi+1, high) // After pi
    }
}`,
  };

  const resetArray = () => {
    setArray([10, 7, 8, 9, 1, 5]);
    setSorted([]);
    setPivot(-1);
    setComparing([]);
    setPartitioned([]);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const quickSortVisualize = async (arr, low, high) => {
    if (low >= high) return;

    const pivotIndex = high;
    const pivotValue = arr[high];
    setPivot(pivotIndex);
    await sleep(800);

    let i = low - 1;

    for (let j = low; j < high; j++) {
      setComparing([j, pivotIndex]);
      await sleep(600);

      if (arr[j] < pivotValue) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await sleep(500);
        }
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await sleep(500);

    const newPivotIndex = i + 1;
    setSorted(prev => [...prev, newPivotIndex]);
    setPivot(-1);
    setComparing([]);
    await sleep(400);

    await quickSortVisualize(arr, low, newPivotIndex - 1);
    await quickSortVisualize(arr, newPivotIndex + 1, high);
  };

  const startAnimation = async () => {
    setIsAnimating(true);
    const arr = [10, 7, 8, 9, 1, 5];
    await quickSortVisualize(arr, 0, arr.length - 1);

    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    await sleep(2000);

    setIsAnimating(false);
    resetArray();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
          <span className="text-4xl">⚡</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Quick Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Pick a pivot, partition, and conquer - lightning fast on average!
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-amber-600">
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            🎯 The Partitioning Strategy
          </h3>
          <p className="text-amber-900 dark:text-amber-100 text-lg mb-4">
            Quick Sort picks a "pivot" element and partitions the array so that all smaller elements are on the left and all larger elements are on the right.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-amber-700 dark:text-amber-300 mb-2">1️⃣ Choose Pivot</p>
              <p className="text-amber-800 dark:text-amber-200">
                Select an element as pivot (often the last element)
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-orange-700 dark:text-orange-300 mb-2">2️⃣ Partition</p>
              <p className="text-orange-800 dark:text-orange-200">
                Rearrange: smaller left, larger right
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-300 mb-2">3️⃣ Recursively Sort</p>
              <p className="text-red-800 dark:text-red-200">
                Apply same process to left and right subarrays
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Animation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 See It In Action
        </h3>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              Watch the pivot-based partitioning process
            </p>
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Pivot</span>
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
              const isPivot = pivot === idx;
              const isComparing = comparing.includes(idx);
              const isSorted = sorted.includes(idx);

              let bgColor = "#e2e8f0";
              if (isSorted) bgColor = "#22c55e";
              else if (isPivot) bgColor = "#eab308";
              else if (isComparing) bgColor = "#3b82f6";

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <motion.div
                    animate={{
                      height: `${(num / 10) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isPivot ? 1.2 : isComparing ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 rounded-t-lg shadow-lg flex items-end justify-center pb-2"
                  >
                    <span className="text-xs font-bold text-slate-900">
                      {num}
                    </span>
                  </motion.div>
                  <div className="text-xs font-bold h-4">
                    {isPivot && <span className="text-yellow-600">P</span>}
                  </div>
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
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Sorting..." : "Start Quick Sort"}
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
            "Choose the last element as the pivot",
            "Initialize pointer i at (low - 1) for smaller elements",
            "Iterate through array with pointer j",
            "If arr[j] < pivot: increment i and swap arr[i] with arr[j]",
            "After loop, place pivot in correct position (swap arr[i+1] with pivot)",
            "Pivot is now in its final sorted position!",
            "Recursively apply to left partition (elements < pivot)",
            "Recursively apply to right partition (elements > pivot)",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pivot Selection */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            🎲 Pivot Selection Strategies
          </h3>
          <div className="space-y-3 text-purple-900 dark:text-purple-100">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Last Element (Most Common)</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Simple but can be O(n²) on already sorted data
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Random Element</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Better average case, avoids worst case on sorted data
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">Median-of-Three</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Use median of first, middle, and last elements - best balance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Code Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

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
              <p><strong>Best Case:</strong> O(n log n) - Good pivot selection</p>
              <p><strong>Average Case:</strong> O(n log n) - Most common!</p>
              <p><strong>Worst Case:</strong> O(n²) - Already sorted (bad pivot)</p>
              <p className="text-sm pt-2 italic">In practice, usually faster than merge sort!</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-blue-800 dark:text-blue-200">
              <p><strong>Space:</strong> O(log n) - Recursion stack</p>
              <p>Much better than merge sort's O(n)!</p>
              <p className="text-sm pt-2 italic">In-place sorting algorithm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Quick Sort is Fast */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-l-4 border-yellow-600">
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">
            🚀 Why "Quick" Sort?
          </h3>
          <div className="space-y-3 text-yellow-900 dark:text-yellow-100">
            <p className="text-lg mb-3">
              Despite O(n²) worst case, Quick Sort is often the fastest in practice because:
            </p>
            <div className="space-y-2">
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <strong>✓ Cache Friendly:</strong> Works with adjacent elements (good locality)
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <strong>✓ In-Place:</strong> No extra memory allocation overhead
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <strong>✓ Small Constants:</strong> Hidden constants in O(n log n) are very small
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <strong>✓ Tail Recursion:</strong> Can be optimized by compilers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Quick Sort
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Quick Sort When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Average case performance is priority</li>
              <li>• Memory is limited (in-place sorting)</li>
              <li>• Need fastest practical sorting</li>
              <li>• Working with arrays (not linked lists)</li>
              <li>• Data is randomly ordered</li>
              <li>• Cache performance matters</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Quick Sort When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Need guaranteed O(n log n) (use merge sort)</li>
              <li>• Data is already sorted or nearly sorted</li>
              <li>• Need stable sort (quick sort is unstable)</li>
              <li>• Worst-case performance is critical</li>
              <li>• Working with linked lists (use merge sort)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
