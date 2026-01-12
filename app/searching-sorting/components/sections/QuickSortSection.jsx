"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SearchingSortingCard from "./SearchingSortingCard";
import { Zap, Play, RefreshCw, Layers, CheckCircle2, AlertCircle, Code2, Gauge, Split, Dice5 } from "lucide-react";

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
    <SearchingSortingCard>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
          <Zap size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Quick Sort</h2>
          <p className="text-slate-400 font-medium">Pick a pivot, partition, and conquer - lightning fast on average!</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Key Concept */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-[2rem] relative overflow-hidden">
          <h3 className="text-xl font-black text-amber-400 mb-3 flex items-center gap-2">
            <Split size={24} /> The Partitioning Strategy
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed relative z-10 mb-4">
            Quick Sort picks a <strong className="text-white">"pivot"</strong> element and partitions the array so that all smaller elements are on the left and all larger elements are on the right.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-xs font-bold relative z-10">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-amber-500/20">
              <p className="text-amber-400 mb-1">1️⃣ Choose Pivot</p>
              <p className="text-slate-400 font-medium">Select an element (e.g., last)</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-orange-400 mb-1">2️⃣ Partition</p>
              <p className="text-slate-400 font-medium">Small left, large right</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-red-400 mb-1">3️⃣ Recursively Sort</p>
              <p className="text-slate-400 font-medium">Repeat for sub-arrays</p>
            </div>
          </div>
        </div>

        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-amber-500" /> Watch It Work
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest flex-wrap justify-end">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400">Pivot</span>
              </div>
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
              const isPivot = pivot === idx;
              const isComparing = comparing.includes(idx);
              const isSorted = sorted.includes(idx);

              let bgColor = "#1e293b"; // slate-800
              if (isSorted) bgColor = "#10b981"; // emerald-500
              else if (isPivot) bgColor = "#eab308"; // yellow-500
              else if (isComparing) bgColor = "#3b82f6"; // blue-500

              return (
                <div key={idx} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                  <motion.div
                    animate={{
                      height: `${(num / 10) * 200}px`,
                      backgroundColor: bgColor,
                      scale: isPivot ? 1.2 : isComparing ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-t-xl border-2 border-b-0 border-white/10 shadow-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  >
                    <span className={`text-xs font-black ${isSorted || isPivot || isComparing ? 'text-white' : 'text-slate-400'}`}>
                      {num}
                    </span>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>
                  <div className="text-[10px] font-bold text-slate-600">
                    {isPivot && <span className="text-yellow-500">P</span>}
                    {!isPivot && `[${idx}]`}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Sorting..." : "Start Quick Sort"}
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
        <div className="bg-slate-950/50 border border-blue-500/20 rounded-[2rem] p-8">
          <h3 className="text-2xl font-black text-blue-400 mb-6">📖 How It Works</h3>
          <div className="space-y-4">
            {[
              "Choose the last element as the pivot.",
              "Partition: Move smaller elements to left, larger to right.",
              "Place pivot in its correct sorted position.",
              "Recursively apply to left partition (elements < pivot).",
              "Recursively apply to right partition (elements > pivot)."
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-300 font-medium pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pivot Selection */}
        <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-[2rem]">
          <h3 className="text-lg font-black text-purple-400 mb-4 flex items-center gap-2">
            <Dice5 size={20} /> Pivot Selection Strategies
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-purple-400 font-bold text-sm mb-1">Last Element</p>
              <p className="text-slate-400 text-xs">Simple, but O(n²) if sorted.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-purple-400 font-bold text-sm mb-1">Random</p>
              <p className="text-slate-400 text-xs">Avoids worst case on sorted data.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-purple-400 font-bold text-sm mb-1">Median-of-3</p>
              <p className="text-slate-400 text-xs">Best balance of performance.</p>
            </div>
          </div>
        </div>

              {/* Code Implementation */}
              <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner mb-8">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <h3 className="text-2xl font-black text-white flex items-center gap-3">
                    <Code2 className="text-blue-400" /> Implementation
                  </h3>
                </div>
        
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(languages).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLanguage(lang)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          currentLanguage === lang
                            ? "bg-amber-500 text-white"
                            : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
        
                  <div className="relative group/terminal">
                    <div className="absolute -inset-1 bg-amber-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
                    <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                          quick_sort.{currentLanguage === 'javascript' ? 'js' : currentLanguage === 'python' ? 'py' : currentLanguage}
                        </div>
                      </div>
                      <div className="p-6 overflow-x-auto">
                        <pre className="text-sm leading-relaxed text-amber-300 font-mono">
                          <code>{languages[currentLanguage]}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        {/* Complexity Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-emerald-400 font-black mb-4">
              <Gauge size={20} /> Time Complexity
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Best Case</span>
                <span className="text-emerald-400 font-black">O(n log n)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Average</span>
                <span className="text-emerald-400 font-black">O(n log n)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Worst Case</span>
                <span className="text-rose-400 font-black">O(n²)</span>
              </div>
            </div>
            <p className="text-center text-slate-500 text-[10px] mt-3 italic">Worst case is rare with random pivot!</p>
          </div>

          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-blue-400 font-black mb-4">
              <Layers size={20} /> Space Complexity
            </h4>
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">O(log n)</div>
                <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Stack Space</div>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-2">In-place sorting (only recursion stack used).</p>
          </div>
        </div>

        {/* Why Quick Sort is Fast */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-6 rounded-[2rem]">
          <h3 className="text-lg font-black text-amber-400 mb-4 flex items-center gap-2">
            <Zap size={20} /> Why "Quick" Sort?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Cache Friendly</p>
                <p className="text-slate-400 text-xs">Good locality of reference.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">In-Place</p>
                <p className="text-slate-400 text-xs">No extra memory allocation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Small Constants</p>
                <p className="text-slate-400 text-xs">Very fast inner loop.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Tail Recursion</p>
                <p className="text-slate-400 text-xs"> optimizable by compilers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-8">
             <h3 className="text-lg font-black text-emerald-400 mb-4 flex items-center gap-2">
               <CheckCircle2 size={20} /> When to Use
             </h3>
             <ul className="space-y-3">
               {[
                 "Average case performance is priority",
                 "Memory is limited (in-place)",
                 "Need fastest practical sorting",
                 "Data is randomly ordered"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
          <div className="bg-rose-500/5 border border-rose-500/10 rounded-[2rem] p-8">
             <h3 className="text-lg font-black text-rose-400 mb-4 flex items-center gap-2">
               <AlertCircle size={20} /> Avoid When
             </h3>
             <ul className="space-y-3">
               {[
                 "Need guaranteed O(n log n)",
                 "Data is already sorted or nearly sorted",
                 "Need stable sort",
                 "Worst-case performance is critical"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                   <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

      </div>
    </SearchingSortingCard>
  );
}