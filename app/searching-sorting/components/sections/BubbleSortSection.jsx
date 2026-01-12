"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SearchingSortingCard from "./SearchingSortingCard";
import { Circle, Play, RefreshCw, Zap, CheckCircle2, AlertCircle, Code2, Gauge, Timer, Layers, ArrowUp } from "lucide-react";

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
    <SearchingSortingCard>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 border border-pink-500/20">
          <Circle size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Bubble Sort</h2>
          <p className="text-slate-400 font-medium">Bubbles largest elements to the end, one by one.</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-pink-500" /> Watch It Work
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
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
              const isComparing = comparing[0] === idx || comparing[1] === idx;
              const isSorted = sorted.includes(idx);

              let bgColor = "#1e293b"; // slate-800
              let borderColor = "#334155"; // slate-700
              
              if (isSorted) {
                bgColor = "#10b981"; // emerald-500
                borderColor = "#059669";
              } else if (isComparing) {
                bgColor = "#3b82f6"; // blue-500
                borderColor = "#2563eb";
              }

              return (
                <div key={idx} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 90) * 200}px`,
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      scale: isComparing ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-t-xl border-2 border-b-0 shadow-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  >
                    <span className={`text-xs font-black ${isSorted || isComparing ? 'text-white' : 'text-slate-400'}`}>
                      {num}
                    </span>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Index */}
                  <div className="text-[10px] font-bold text-slate-600">[{idx}]</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Sorting..." : "Start Bubble Sort"}
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
              "Start from the beginning of the array.",
              "Compare adjacent elements (current and next).",
              "If current > next, swap them.",
              "Move to the next pair and repeat.",
              "After one full pass, the largest element 'bubbles' to the end.",
              "Repeat for remaining unsorted elements until done."
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

        {/* Why "Bubble"? */}
        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
            <Circle size={150} />
          </div>
          <h3 className="text-xl font-black text-blue-400 mb-3 flex items-center gap-2">
            <ArrowUp size={24} /> Why Is It Called "Bubble" Sort?
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed relative z-10">
            Just like air bubbles rise to the surface of water, larger values <strong className="text-white">"bubble up"</strong> to the end of the array with each pass!
          </p>
          <div className="mt-4 bg-slate-900/50 p-4 rounded-xl border border-white/5 relative z-10">
            <code className="text-xs font-mono text-blue-300">
              [5, 2, 8, 1] → [2, 5, 1, <span className="text-emerald-400 font-bold">8</span>]
            </code>
          </div>
        </div>

        {/* Complexity Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-orange-400 font-black mb-4">
              <Gauge size={20} /> Time Complexity
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Best Case</span>
                <span className="text-emerald-400 font-black">O(n)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Average</span>
                <span className="text-rose-400 font-black">O(n²)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Worst Case</span>
                <span className="text-rose-400 font-black">O(n²)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-emerald-400 font-black mb-4">
              <Layers size={20} /> Space Complexity
            </h4>
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">O(1)</div>
                <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest">In-Place</div>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-2">Only uses a single temporary variable for swapping.</p>
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
                            ? "bg-pink-500 text-white"
                            : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
        
                  <div className="relative group/terminal">
                    <div className="absolute -inset-1 bg-pink-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
                    <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                          bubble_sort.{currentLanguage === 'javascript' ? 'js' : currentLanguage === 'python' ? 'py' : currentLanguage}
                        </div>
                      </div>
                      <div className="p-6 overflow-x-auto">
                        <pre className="text-sm leading-relaxed text-pink-300 font-mono">
                          <code>{languages[currentLanguage]}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        {/* Optimization Tip */}
        <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-[2rem]">
          <h3 className="text-lg font-black text-purple-400 mb-3 flex items-center gap-2">
            <Zap size={20} /> Optimization: Early Exit
          </h3>
          <p className="text-slate-300 text-sm font-medium mb-4">
            Track if any swaps occurred in a pass. If no swaps happen, the array is already sorted!
          </p>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
            <pre className="text-xs font-mono text-purple-300">
{`if (!swapped) break; // Array is sorted!`}
            </pre>
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
                 "Learning sorting concepts",
                 "Tiny datasets (n < 10)",
                 "Array is nearly sorted",
                 "Memory is extremely limited"
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
                 "Large datasets (O(n²) is slow)",
                 "Performance is critical",
                 "Production environments",
                 "Reverse sorted data"
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