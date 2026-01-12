"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { SectionHeader, AlgorithmSteps, ComplexityAnalysis, WhenToUse } from "@/app/components/common/algorithm";
import { GitMerge, Play, RefreshCw, Zap, CheckCircle2, AlertCircle, Code2, Gauge, Layers, Split } from "lucide-react";

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
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="Merge Sort" 
        description="Divide and conquer - split, sort, and merge!"
        icon={GitMerge}
        color="emerald"
      />

      <div className="space-y-8">
        {/* Key Concept */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[2rem] relative overflow-hidden">
          <h3 className="text-xl font-black text-emerald-400 mb-3 flex items-center gap-2">
            <Split size={24} /> Divide and Conquer Strategy
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed relative z-10 mb-4">
            Merge Sort breaks the problem into smaller subproblems, solves them, and combines the results.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-xs font-bold relative z-10">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/20">
              <p className="text-emerald-400 mb-1">1️⃣ Divide</p>
              <p className="text-slate-400 font-medium">Split array recursively until size is 1</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-teal-400 mb-1">2️⃣ Conquer</p>
              <p className="text-slate-400 font-medium">Single elements are already sorted</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-cyan-400 mb-1">3️⃣ Combine</p>
              <p className="text-slate-400 font-medium">Merge sorted halves into one</p>
            </div>
          </div>
        </div>

        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-emerald-500" /> Watch It Work
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest flex-wrap justify-end">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-blue-400">Comparing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-400">Sorted</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end gap-3 mb-10 h-64 px-4">
            {array.map((num, idx) => {
              const isComparing = comparing.includes(idx);
              const isSorted = sorted.includes(idx);

              let bgColor = "#1e293b"; // slate-800
              if (isSorted) bgColor = "#10b981"; // emerald-500
              else if (isComparing) bgColor = "#3b82f6"; // blue-500

              return (
                <div key={idx} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                  <motion.div
                    animate={{
                      height: `${(num / 82) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isComparing ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-t-xl border-2 border-b-0 border-white/10 shadow-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  >
                    <span className={`text-xs font-black ${isSorted || isComparing ? 'text-white' : 'text-slate-400'}`}>
                      {num}
                    </span>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>
                  <div className="text-[10px] font-bold text-slate-600">[{idx}]</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Sorting..." : "Start Merge Sort"}
            </button>
            <button
              onClick={resetArray}
              disabled={isAnimating}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all border border-white/5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
          </div>
        </div>

        {/* How It Works */}
        <AlgorithmSteps 
          steps={[
            "Start with the entire array.",
            "Divide: Split array into two halves at the middle.",
            "Recursively divide each half until arrays have size 1.",
            "Conquer: Single elements are already sorted.",
            "Merge: Compare elements from both halves.",
            "Place smaller element first in the merged array.",
            "Continue merging until entire array is sorted."
          ]}
          color="emerald"
        />

        {/* Complexity Analysis */}
        <ComplexityAnalysis 
          timeBest="O(n log n)"
          timeAverage="O(n log n)"
          timeWorst="O(n log n)"
          space="O(n)"
          spaceNote="Auxiliary Space"
          color="emerald"
        />

        {/* Advantages */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[2rem]">
          <h3 className="text-lg font-black text-emerald-400 mb-4 flex items-center gap-2">
            <Zap size={20} /> Why Merge Sort is Awesome
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1"><Zap size={14} /> Guaranteed Speed</div>
              <p className="text-slate-400 text-xs">Unlike Quick Sort, worst case is still O(n log n).</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1"><Layers size={14} /> Stable</div>
              <p className="text-slate-400 text-xs">Maintains relative order of equal elements.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1"><Code2 size={14} /> Linked Lists</div>
              <p className="text-slate-400 text-xs">Can be done in O(1) space for linked lists!</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm mb-1"><Split size={14} /> Parallelizable</div>
              <p className="text-slate-400 text-xs">Can sort parts on different processors.</p>
            </div>
          </div>
        </div>

        {/* Code Implementation */}
        <CodeImplementation languages={languages} color="emerald" initialLanguage={currentLanguage} />

        {/* When to Use */}
        <WhenToUse 
          useCases={[
            "Need guaranteed O(n log n) performance",
            "Stability is important",
            "Sorting linked lists",
            "External sorting (data doesn't fit in memory)"
          ]}
          avoidCases={[
            "Memory is very limited (needs O(n) space)",
            "Small arrays (overhead not worth it)",
            "In-place sorting is required",
            "Quick sort is faster on average"
          ]}
        />

      </div>
    </PerspectiveCard>
  );
}