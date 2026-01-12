"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { SectionHeader, AlgorithmSteps, ComplexityAnalysis, WhenToUse } from "@/app/components/common/algorithm";
import { Search, Play, RefreshCw, AlertTriangle, Zap, CheckCircle2, AlertCircle, Code2, Gauge } from "lucide-react";

export default function BinarySearchSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(7);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);

  // MUST be sorted for binary search!
  const array = [2, 5, 8, 12, 16, 23, 38, 45];
  const target = 23;

  const languages = {
    c: `#include <stdio.h>

int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target)
                return mid;  // Found!

            if (arr[mid] < target)
                left = mid + 1;  // Search right half
            else
                right = mid - 1; // Search left half
        }

        return -1;  // Not found
    }
}`,
    javascript: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;  // Found!

        if (arr[mid] < target)
            left = mid + 1;  // Search right half
        else
            right = mid - 1; // Search left half
    }

    return -1;  // Not found
}`,
    python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid  # Found!

        if arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half

    return -1  # Not found`,
    go: `package main

func binarySearch(arr []int, target int) int {
    left := 0
    right := len(arr) - 1

    for left <= right {
        mid := left + (right - left) / 2

        if arr[mid] == target {
            return mid  // Found!
        }

        if arr[mid] < target {
            left = mid + 1  // Search right half
        } else {
            right = mid - 1  // Search left half
        }
    }

    return -1  // Not found
}`,
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setFound(false);
    setSearchComplete(false);
    let l = 0;
    let r = array.length - 1;

    const step = () => {
      if (l <= r) {
        const m = Math.floor((l + r) / 2);
        setLeft(l);
        setRight(r);
        setMid(m);

        setTimeout(() => {
          if (array[m] === target) {
            setFound(true);
            setSearchComplete(true);
            setTimeout(() => {
              setIsAnimating(false);
              setMid(-1);
              setLeft(0);
              setRight(array.length - 1);
            }, 2000);
          } else if (array[m] < target) {
            l = m + 1;
            step();
          } else {
            r = m - 1;
            step();
          }
        }, 1000);
      } else {
        setSearchComplete(true);
        setTimeout(() => {
          setIsAnimating(false);
          setMid(-1);
          setLeft(0);
          setRight(array.length - 1);
        }, 2000);
      }
    };

    step();
  };

  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Binary Search" 
        description="Divide and conquer! Cut search space in half."
        icon={Search}
        color="orange"
      />

      <div className="space-y-8">
        {/* Critical Requirement */}
        <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-[2rem] flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-rose-400 mb-1">Critical Requirement</h3>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Binary Search ONLY works on <strong className="text-white">SORTED arrays</strong>! The array must be in ascending or descending order.
            </p>
          </div>
        </div>

        {/* Visual Animation */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-emerald-500" /> Watch It Work
            </h3>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Target</div>
              <div className="text-2xl font-black text-white">{target}</div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400">Left</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-400">Mid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-purple-400">Right</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mb-10 min-h-[100px]">
            {array.map((num, idx) => {
              const isLeft = idx === left && isAnimating;
              const isRight = idx === right && isAnimating;
              const isMid = idx === mid;
              const isInRange = idx >= left && idx <= right && isAnimating;

              let bgColor = "#1e293b"; // slate-800
              let borderColor = "#334155"; // slate-700
              let textColor = "#94a3b8"; // slate-400
              let scale = 1;

              if (found && isMid) {
                bgColor = "#10b981"; // emerald-500
                borderColor = "#059669";
                textColor = "#ffffff";
                scale = 1.15;
              } else if (isMid) {
                bgColor = "#eab308"; // yellow-500
                borderColor = "#ca8a04";
                textColor = "#ffffff";
                scale = 1.15;
              } else if (isLeft) {
                borderColor = "#3b82f6"; // blue-500
                textColor = "#60a5fa";
              } else if (isRight) {
                borderColor = "#a855f7"; // purple-500
                textColor = "#c084fc";
              } 
              
              if (isInRange || !isAnimating) {
                 if (!isMid && !found) textColor = "#e2e8f0"; // slate-200
              } else {
                 bgColor = "#0f172a"; // slate-900 (dimmed)
                 borderColor = "#1e293b";
                 textColor = "#334155"; // slate-700
              }

              return (
                <div key={idx} className="flex flex-col items-center gap-2 relative">
                  {/* Pointers */}
                  <div className="h-4 absolute -top-6 w-full flex justify-center">
                    {isLeft && isAnimating && <div className="text-blue-500 font-black text-xs">L</div>}
                    {isRight && isAnimating && <div className="text-purple-500 font-black text-xs">R</div>}
                    {isMid && <div className="text-yellow-500 font-black text-xs">M</div>}
                  </div>

                  <motion.div
                    animate={{
                      scale,
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      color: textColor
                    }}
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-black rounded-2xl border-2 transition-all shadow-lg z-10"
                  >
                    {num}
                  </motion.div>
                  <div className="text-[10px] font-bold text-slate-600">[{idx}]</div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="h-8 text-center">
              {found ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-emerald-400 font-black text-lg">
                  <CheckCircle2 size={24} /> Found {target} at index {mid}!
                </motion.div>
              ) : searchComplete ? (
                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-rose-400 font-black text-lg">
                  <AlertCircle size={24} /> {target} not found
                </motion.div>
              ) : mid >= 0 ? (
                <div className="text-slate-300 font-medium">
                  Checking middle <span className="text-yellow-400 font-bold">[{mid}]</span> = {array[mid]}
                  {array[mid] < target ? <span className="text-blue-400 ml-2">→ Too small, search right</span> : <span className="text-purple-400 ml-2">→ Too large, search left</span>}
                </div>
              ) : (
                <div className="text-slate-500 font-medium">Range: [{left}, {right}]</div>
              )}
            </div>

            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Searching..." : "Start Binary Search"}
            </button>
          </div>
        </div>

        {/* How It Works */}
        <AlgorithmSteps 
          steps={[
            "Start with pointers at beginning (L) and end (R).",
            "Calculate middle index: mid = (L + R) / 2.",
            "If target == middle: Found! Return index.",
            "If target < middle: Search left half (R = mid - 1).",
            "If target > middle: Search right half (L = mid + 1).",
            "Repeat until found or L > R."
          ]}
          color="orange"
        />

        {/* Complexity Analysis */}
        <ComplexityAnalysis 
          timeBest="O(1)"
          timeAverage="O(log n)"
          timeWorst="O(log n)"
          space="O(1)"
          spaceNote="Iterative"
          color="orange"
        />

        {/* Code Implementation */}
        <CodeImplementation languages={languages} color="orange" initialLanguage={currentLanguage} />

        {/* When to Use */}
        <WhenToUse 
          useCases={[
            "Array is already sorted",
            "Need frequent searches",
            "Large datasets (> 100 items)",
            "Performance is critical"
          ]}
          avoidCases={[
            "Array is unsorted (Sorting takes O(n log n))",
            "Small datasets (Linear search is fine)",
            "Data changes frequently (Maintenance cost)",
            "Linked Lists (No random access)"
          ]}
        />

      </div>
    </PerspectiveCard>
  );
}