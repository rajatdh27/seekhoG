"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SearchingSortingCard from "./SearchingSortingCard";
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
    <SearchingSortingCard>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
          <Search size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Binary Search</h2>
          <p className="text-slate-400 font-medium">Divide and conquer! Cut search space in half.</p>
        </div>
      </div>

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
        <div className="bg-slate-950/50 border border-blue-500/20 rounded-[2rem] p-8">
          <h3 className="text-2xl font-black text-blue-400 mb-6">📖 How It Works</h3>
          <div className="space-y-4">
            {[
              "Start with pointers at beginning (L) and end (R).",
              "Calculate middle index: mid = (L + R) / 2.",
              "If target == middle: Found! Return index.",
              "If target < middle: Search left half (R = mid - 1).",
              "If target > middle: Search right half (L = mid + 1).",
              "Repeat until found or L > R."
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

        {/* Complexity Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-emerald-400 font-black mb-4">
              <Gauge size={20} /> Time Complexity
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Best Case</span>
                <span className="text-emerald-400 font-black">O(1)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Average</span>
                <span className="text-blue-400 font-black">O(log n)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
                <span className="text-slate-400 font-medium text-sm">Worst Case</span>
                <span className="text-blue-400 font-black">O(log n)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
            <h4 className="flex items-center gap-2 text-purple-400 font-black mb-4">
              <Zap size={20} /> Why So Fast?
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Logarithmic growth means <strong className="text-white">exponential speed</strong>. We discard half the remaining elements in every step.
            </p>
            <div className="space-y-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
              <div className="flex justify-between">
                <span>100 items</span>
                <span className="text-white">~7 steps</span>
              </div>
              <div className="flex justify-between">
                <span>1,000 items</span>
                <span className="text-white">~10 steps</span>
              </div>
              <div className="flex justify-between">
                <span>1,000,000 items</span>
                <span className="text-white">~20 steps</span>
              </div>
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
                    ? "bg-orange-500 text-white"
                    : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative group/terminal">
            <div className="absolute -inset-1 bg-orange-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
            <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  binary_search.{currentLanguage === 'javascript' ? 'js' : currentLanguage === 'python' ? 'py' : currentLanguage}
                </div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed text-orange-300 font-mono">
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
                 "Array is already sorted",
                 "Need frequent searches",
                 "Large datasets (> 100 items)",
                 "Performance is critical"
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
                 "Array is unsorted (Sorting takes O(n log n))",
                 "Small datasets (Linear search is fine)",
                 "Data changes frequently (Maintenance cost)",
                 "Linked Lists (No random access)"
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