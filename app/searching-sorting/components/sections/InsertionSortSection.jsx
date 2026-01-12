"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { SectionHeader, AlgorithmSteps, ComplexityAnalysis, WhenToUse } from "@/app/components/common/algorithm";
import { ArrowRightLeft, Play, RefreshCw, Zap, CheckCircle2, AlertCircle, Code2, Gauge, Layers, Database } from "lucide-react";

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
    <PerspectiveCard color="teal">
      <SectionHeader 
        title="Insertion Sort" 
        description="Insert each element into its correct position in sorted portion."
        icon={ArrowRightLeft}
        color="teal"
      />

      <div className="space-y-8">
        {/* Key Concept */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-[2rem] relative overflow-hidden group">
          <h3 className="text-xl font-black text-cyan-400 mb-3 flex items-center gap-2">
            <Layers size={24} /> Like Sorting Playing Cards!
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed relative z-10 mb-4">
            Imagine sorting a hand of cards: you pick up one card at a time and <strong className="text-white">insert</strong> it into its correct position among the cards you've already sorted.
          </p>
          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/20">
              <p className="text-emerald-400 font-bold text-sm">Left Side</p>
              <p className="text-slate-400 text-xs mt-1">Always sorted</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-slate-200 font-bold text-sm">Right Side</p>
              <p className="text-slate-400 text-xs mt-1">Unsorted pile</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-orange-500/20">
              <p className="text-orange-400 font-bold text-sm">Process</p>
              <p className="text-slate-400 text-xs mt-1">Pick → Find → Insert</p>
            </div>
          </div>
        </div>

        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-teal-500" /> Watch It Work
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest flex-wrap justify-end">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-orange-400">Current</span>
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
              const isCurrent = currentElement === idx;
              const isComparing = comparing === idx;
              const isSorted = sorted.includes(idx);

              let bgColor = "#1e293b"; // slate-800
              let borderColor = "#334155"; // slate-700
              
              if (isSorted && !isCurrent) {
                bgColor = "#10b981"; // emerald-500
                borderColor = "#059669";
              } else if (isCurrent) {
                bgColor = "#f97316"; // orange-500
                borderColor = "#ea580c";
              } else if (isComparing) {
                bgColor = "#3b82f6"; // blue-500
                borderColor = "#2563eb";
              }

              return (
                <div key={idx} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 13) * 200}px`,
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      scale: isCurrent ? 1.15 : isComparing ? 1.05 : 1,
                      y: isCurrent && inserting ? -20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-t-xl border-2 border-b-0 shadow-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  >
                    <span className={`text-xs font-black ${isSorted || isCurrent || isComparing ? 'text-white' : 'text-slate-400'}`}>
                      {num}
                    </span>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Label */}
                  <div className="text-[10px] font-bold h-4 flex items-center justify-center">
                    {isCurrent && <span className="text-orange-500 animate-pulse">KEY</span>}
                    {isComparing && <span className="text-blue-500">?</span>}
                  </div>

                  {/* Index */}
                  <div className="text-[10px] font-bold text-slate-600">[{idx}]</div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-6">
            {isAnimating && sorted.length < array.length && (
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Sorted: <span className="text-emerald-400">{sorted.length}</span> • Unsorted: <span className="text-slate-300">{array.length - sorted.length}</span>
              </p>
            )}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Sorting..." : "Start Insertion Sort"}
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
            "Start from second element (index 1) - first element is already sorted.",
            "Pick current element as 'key' to be inserted.",
            "Compare key with elements in sorted portion (from right to left).",
            "Shift all elements greater than key one position to the right.",
            "Insert key at the correct position where all left elements are smaller.",
            "Sorted portion grows by 1, unsorted portion shrinks by 1.",
            "Repeat until all elements are in sorted portion."
          ]}
          color="teal"
        />

        {/* Complexity Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-emerald-400 font-black mb-4">
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
            <p className="text-center text-emerald-400 text-[10px] mt-3 font-bold uppercase tracking-widest">Great for nearly sorted data!</p>
          </div>

          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-cyan-400 font-black mb-4">
              <Layers size={20} /> Space Complexity
            </h4>
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">O(1)</div>
                <div className="text-cyan-400 text-sm font-bold uppercase tracking-widest">In-Place</div>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-2">Only uses one variable (key) for temporary storage!</p>
          </div>
        </div>

        {/* Why Insertion Sort is Special */}
        <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-[2rem]">
          <h3 className="text-lg font-black text-purple-400 mb-4 flex items-center gap-2">
            <Zap size={20} /> Why Insertion Sort is Special
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1"><Zap size={14} /> Adaptive</div>
              <p className="text-slate-400 text-xs">Runs faster on nearly sorted data - best case O(n)!</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1"><Layers size={14} /> Stable</div>
              <p className="text-slate-400 text-xs">Maintains relative order of equal elements.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-1"><Database size={14} /> Online</div>
              <p className="text-slate-400 text-xs">Can sort data as it arrives - great for streaming!</p>
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
                            ? "bg-teal-500 text-white"
                            : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
        
                  <div className="relative group/terminal">
                    <div className="absolute -inset-1 bg-teal-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
                    <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                          insertion_sort.{currentLanguage === 'javascript' ? 'js' : currentLanguage === 'python' ? 'py' : currentLanguage}
                        </div>
                      </div>
                      <div className="p-6 overflow-x-auto">
                        <pre className="text-sm leading-relaxed text-teal-300 font-mono">
                          <code>{languages[currentLanguage]}</code>
                        </pre>
                      </div>
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
                 "Small datasets (n < 50)",
                 "Array is nearly sorted",
                 "Need stable sorting",
                 "Data arrives in real-time (online)"
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
                 "Large datasets with random order",
                 "Array is reverse sorted",
                 "Performance is critical",
                 "Better alternatives available"
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
    </PerspectiveCard>
  );
}