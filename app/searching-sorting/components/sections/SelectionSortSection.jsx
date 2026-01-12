"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { SectionHeader, AlgorithmSteps, ComplexityAnalysis, WhenToUse } from "@/app/components/common/algorithm";
import { MousePointerClick, Play, RefreshCw, Zap, CheckCircle2, AlertCircle, Code2, Gauge, Layers, ArrowRightLeft } from "lucide-react";

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
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="Selection Sort" 
        description="Selects the minimum and places it at the beginning."
        icon={MousePointerClick}
        color="indigo"
      />

      <div className="space-y-8">
        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-indigo-500" /> Watch It Work
            </h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest flex-wrap justify-end">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400">Min</span>
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
              const isCurrentMin = currentMin === idx;
              const isComparing = comparing === idx;
              const isSorted = sorted.includes(idx);
              const isSwapping = swapping[0] === idx || swapping[1] === idx;

              let bgColor = "#1e293b"; // slate-800
              let borderColor = "#334155"; // slate-700
              
              if (isSorted) {
                bgColor = "#10b981"; // emerald-500
                borderColor = "#059669";
              } else if (isSwapping) {
                bgColor = "#f59e0b"; // orange-500
                borderColor = "#d97706";
              } else if (isCurrentMin) {
                bgColor = "#eab308"; // yellow-500
                borderColor = "#ca8a04";
              } else if (isComparing) {
                bgColor = "#3b82f6"; // blue-500
                borderColor = "#2563eb";
              }

              return (
                <div key={idx} className="flex flex-col items-center gap-2 w-full max-w-[60px]">
                  {/* Bar */}
                  <motion.div
                    animate={{
                      height: `${(num / 64) * 200}px`,
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      scale: isCurrentMin || isSwapping ? 1.1 : isComparing ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-t-xl border-2 border-b-0 shadow-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  >
                    <span className={`text-xs font-black ${isSorted || isCurrentMin || isSwapping ? 'text-white' : 'text-slate-400'}`}>
                      {num}
                    </span>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Label */}
                  <div className="text-[10px] font-bold h-4 flex items-center justify-center">
                    {isCurrentMin && !isSorted && <span className="text-yellow-500 animate-pulse">MIN</span>}
                    {isComparing && <span className="text-blue-500">?</span>}
                  </div>

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
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Sorting..." : "Start Selection Sort"}
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
            "Start with the first position (i = 0).",
            "Assume current position has the minimum value.",
            "Scan all remaining unsorted elements to find the actual minimum.",
            "Swap the minimum found with the element at position i.",
            "The element at position i is now sorted.",
            "Move to next position (i++) and repeat until sorted."
          ]}
          color="indigo"
        />

        {/* Key Insight */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-[2rem] relative overflow-hidden">
          <h3 className="text-xl font-black text-cyan-400 mb-3 flex items-center gap-2">
            <Zap size={24} /> Key Insight
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed relative z-10 mb-4">
            Selection Sort divides the array into two distinct parts:
          </p>
          <div className="grid md:grid-cols-2 gap-4 relative z-10">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/20">
              <p className="text-emerald-400 font-bold text-sm">✓ Sorted Portion</p>
              <p className="text-slate-400 text-xs mt-1">Left side, grows by 1 each pass</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
              <p className="text-slate-200 font-bold text-sm">? Unsorted Portion</p>
              <p className="text-slate-400 text-xs mt-1">Right side, shrinks by 1 each pass</p>
            </div>
          </div>
        </div>

        {/* Complexity Analysis */}
        <ComplexityAnalysis 
          timeBest="O(n²)"
          timeAverage="O(n²)"
          timeWorst="O(n²)"
          space="O(1)"
          spaceNote="In-Place"
          color="indigo"
        />

        {/* Code Implementation */}
        <CodeImplementation languages={languages} color="indigo" initialLanguage={currentLanguage} />

        {/* When to Use */}
        <WhenToUse 
          useCases={[
            "Small datasets",
            "Swapping is expensive (minimizes writes)",
            "Memory is limited (O(1) space)",
            "Simple implementation needed",
            "Consistent performance is acceptable"
          ]}
          avoidCases={[
            "Large datasets (O(n²) is slow)",
            "Array is nearly sorted (Bubble is faster)",
            "Stability is required (unstable sort)",
            "Performance is critical"
          ]}
        />

      </div>
    </PerspectiveCard>
  );
}