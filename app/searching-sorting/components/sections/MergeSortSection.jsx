"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MergeSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [dividing, setDividing] = useState([]);

  const languages = {
    c: `#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp arrays
    int* L = (int*)malloc(n1 * sizeof(int));
    int* R = (int*)malloc(n2 * sizeof(int));

    // Copy data to temp arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    // Copy remaining elements
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];

    free(L);
    free(R);
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);      // Sort left half
        mergeSort(arr, mid + 1, right); // Sort right half
        merge(arr, left, mid, right);   // Merge sorted halves
    }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp arrays
    vector<int> L(n1), R(n2);

    // Copy data to temp arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    // Copy remaining elements
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);      // Sort left half
        mergeSort(arr, mid + 1, right); // Sort right half
        merge(arr, left, mid, right);   // Merge sorted halves
    }
}`,
    java: `public class MergeSort {
    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        // Create temp arrays
        int[] L = new int[n1];
        int[] R = new int[n2];

        // Copy data to temp arrays
        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        // Merge the temp arrays back
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j])
                arr[k++] = L[i++];
            else
                arr[k++] = R[j++];
        }

        // Copy remaining elements
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);      // Sort left half
            mergeSort(arr, mid + 1, right); // Sort right half
            merge(arr, left, mid, right);   // Merge sorted halves
        }
    }
}`,
    javascript: `function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays
    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back
    let i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    // Copy remaining elements
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid);      // Sort left half
        mergeSort(arr, mid + 1, right); // Sort right half
        merge(arr, left, mid, right);   // Merge sorted halves
    }
}`,
    python: `def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid

    # Create temp arrays
    L = arr[left:mid + 1]
    R = arr[mid + 1:right + 1]

    # Merge the temp arrays back
    i = j = 0
    k = left

    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # Copy remaining elements
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    if left < right:
        mid = (left + right) // 2

        merge_sort(arr, left, mid)      # Sort left half
        merge_sort(arr, mid + 1, right) # Sort right half
        merge(arr, left, mid, right)    # Merge sorted halves`,
    go: `package main

func merge(arr []int, left, mid, right int) {
    n1 := mid - left + 1
    n2 := right - mid

    // Create temp arrays
    L := make([]int, n1)
    R := make([]int, n2)

    // Copy data to temp arrays
    for i := 0; i < n1; i++ {
        L[i] = arr[left+i]
    }
    for j := 0; j < n2; j++ {
        R[j] = arr[mid+1+j]
    }

    // Merge the temp arrays back
    i, j, k := 0, 0, left
    for i < n1 && j < n2 {
        if L[i] <= R[j] {
            arr[k] = L[i]
            i++
        } else {
            arr[k] = R[j]
            j++
        }
        k++
    }

    // Copy remaining elements
    for i < n1 {
        arr[k] = L[i]
        i++
        k++
    }
    for j < n2 {
        arr[k] = R[j]
        j++
        k++
    }
}

func mergeSort(arr []int, left, right int) {
    if left < right {
        mid := left + (right-left)/2

        mergeSort(arr, left, mid)      // Sort left half
        mergeSort(arr, mid+1, right)   // Sort right half
        merge(arr, left, mid, right)   // Merge sorted halves
    }
}`,
  };

  const resetArray = () => {
    setArray([38, 27, 43, 3, 9, 82, 10]);
    setSorted([]);
    setComparing([]);
    setDividing([]);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const mergeSortVisualize = async (arr, left, right, depth = 0) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    // Show division
    setDividing([left, right]);
    await sleep(600);

    // Recursively sort left and right halves
    await mergeSortVisualize(arr, left, mid, depth + 1);
    await mergeSortVisualize(arr, mid + 1, right, depth + 1);

    // Merge phase
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
      setComparing([left + i, mid + 1 + j]);
      await sleep(500);

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      setArray([...arr]);
      await sleep(400);
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setArray([...arr]);
      await sleep(300);
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setArray([...arr]);
      await sleep(300);
    }

    setComparing([]);
    setDividing([]);
  };

  const startAnimation = async () => {
    setIsAnimating(true);
    const arr = [38, 27, 43, 3, 9, 82, 10];
    await mergeSortVisualize(arr, 0, arr.length - 1);

    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    await sleep(2000);

    setIsAnimating(false);
    resetArray();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🔀</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Merge Sort
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Divide and conquer - split, sort, and merge!
          </p>
        </div>
      </div>

      {/* Key Concept */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-emerald-600">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
            🧩 Divide and Conquer Strategy
          </h3>
          <p className="text-emerald-900 dark:text-emerald-100 text-lg mb-4">
            Merge Sort breaks the problem into smaller subproblems, solves them, and combines the results.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">1️⃣ Divide</p>
              <p className="text-emerald-800 dark:text-emerald-200">
                Split array into two halves recursively until size is 1
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-teal-700 dark:text-teal-300 mb-2">2️⃣ Conquer</p>
              <p className="text-teal-800 dark:text-teal-200">
                Single elements are already sorted
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">3️⃣ Combine</p>
              <p className="text-cyan-800 dark:text-cyan-200">
                Merge sorted halves into one sorted array
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

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl">
          <div className="mb-6 text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">
              Watch the divide and merge process
            </p>
            <div className="flex justify-center gap-4 text-sm flex-wrap">
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
              const isComparing = comparing.includes(idx);
              const isSorted = sorted.includes(idx);

              let bgColor = "#e2e8f0";
              if (isSorted) bgColor = "#22c55e";
              else if (isComparing) bgColor = "#3b82f6";

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <motion.div
                    animate={{
                      height: `${(num / 82) * 200}px`,
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
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {isAnimating ? "Sorting..." : "Start Merge Sort"}
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
            "Start with the entire array",
            "Divide: Split array into two halves at the middle",
            "Recursively divide each half until arrays have size 1",
            "Conquer: Single elements are already sorted",
            "Merge: Compare elements from both halves",
            "Place smaller element first in the merged array",
            "Continue merging until entire array is sorted",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold">
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

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
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
              <p><strong>Best Case:</strong> O(n log n) - Consistent!</p>
              <p><strong>Average Case:</strong> O(n log n) - Consistent!</p>
              <p><strong>Worst Case:</strong> O(n log n) - Consistent!</p>
              <p className="text-sm pt-2 italic">Always the same - very predictable!</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
              💾 Space Complexity
            </h4>
            <div className="space-y-2 text-orange-800 dark:text-orange-200">
              <p><strong>Space:</strong> O(n) - Needs extra arrays</p>
              <p>Requires temporary storage for merging - not in-place</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            ⭐ Why Merge Sort is Awesome
          </h3>
          <div className="space-y-3 text-green-900 dark:text-green-100">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Guaranteed O(n log n)</p>
              <p className="text-sm text-green-800 dark:text-green-200">
                Unlike Quick Sort, worst case is still O(n log n)
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Stable Sort</p>
              <p className="text-sm text-green-800 dark:text-green-200">
                Maintains relative order of equal elements
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Great for Linked Lists</p>
              <p className="text-sm text-green-800 dark:text-green-200">
                Can be done in O(1) space for linked lists!
              </p>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <p className="font-bold mb-2">✅ Parallelizable</p>
              <p className="text-sm text-green-800 dark:text-green-200">
                Can sort different parts on different processors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 When to Use Merge Sort
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Use Merge Sort When:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Need guaranteed O(n log n) performance</li>
              <li>• Stability is important</li>
              <li>• Sorting linked lists</li>
              <li>• External sorting (data doesn't fit in memory)</li>
              <li>• Parallelization is possible</li>
              <li>• Worst-case performance matters</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 text-lg">
              ❌ Don't Use Merge Sort When:
            </h4>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>• Memory is very limited (needs O(n) extra space)</li>
              <li>• Small arrays (overhead not worth it)</li>
              <li>• In-place sorting is required</li>
              <li>• Quick sort would be faster (average case)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
