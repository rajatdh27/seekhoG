"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SearchingSortingCard from "./SearchingSortingCard";
import { Search, Play, RefreshCw, CheckCircle2, AlertCircle, Code2 } from "lucide-react";

export default function LinearSearchSection() {
  const [activeLang, setActiveLang] = useState("python");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [found, setFound] = useState(false);

  const array = [3, 7, 1, 9, 5, 2, 8];
  const target = 5;

  const startAnimation = () => {
    setIsAnimating(true);
    setFound(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < array.length) {
        setCurrentIndex(index);
        if (array[index] === target) {
          setFound(true);
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(false);
            setCurrentIndex(-1);
          }, 2000);
        }
        index++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
        setCurrentIndex(-1);
      }
    }, 800);
  };

  const code = {
    c: `// Linear Search in C
#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    // Check each element one by one
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;  // Found! Return index
        }
    }
    return -1;  // Not found
}

int main() {
    int arr[] = {3, 7, 1, 9, 5, 2, 8};
    int n = 7;
    int target = 5;

    int result = linearSearch(arr, n, target);
    if (result != -1)
        printf("Found at index %d\n", result);
    else
        printf("Not found\n");

    return 0;
}`,
    cpp: `// Linear Search in C++
#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    // Check each element one by one
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;  // Found! Return index
        }
    }
    return -1;  // Not found
}

int main() {
    vector<int> arr = {3, 7, 1, 9, 5, 2, 8};
    int target = 5;

    int result = linearSearch(arr, target);
    if (result != -1)
        cout << "Found at index " << result << endl;
    else
        cout << "Not found" << endl;

    return 0;
}`,
    java: `// Linear Search in Java
public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        // Check each element one by one
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;  // Found! Return index
            }
        }
        return -1;  // Not found
    }

    public static void main(String[] args) {
        int[] arr = {3, 7, 1, 9, 5, 2, 8};
        int target = 5;

        int result = linearSearch(arr, target);
        if (result != -1)
            System.out.println("Found at index " + result);
        else
            System.out.println("Not found");
    }
}`,
    javascript: `// Linear Search in JavaScript
function linearSearch(arr, target) {
    // Check each element one by one
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Found! Return index
        }
    }
    return -1;  // Not found
}

// Example usage
const arr = [3, 7, 1, 9, 5, 2, 8];
const target = 5;

const result = linearSearch(arr, target);
if (result !== -1)
    console.log('Found at index ' + result);
else
    console.log("Not found");`,
    python: `# Linear Search in Python
def linear_search(arr, target):
    """
    Check each element one by one
    """
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Found! Return index
    return -1  # Not found

# Example usage
arr = [3, 7, 1, 9, 5, 2, 8]
target = 5

result = linear_search(arr, target)
if result != -1:
    print(f"Found at index {result}")
else:
    print("Not found")`,
    go: `// Linear Search in Go
package main

import "fmt"

func linearSearch(arr []int, target int) int {
    // Check each element one by one
    for i := 0; i < len(arr); i++ {
        if arr[i] == target {
            return i  // Found! Return index
        }
    }
    return -1  // Not found
}

func main() {
    arr := []int{3, 7, 1, 9, 5, 2, 8}
    target := 5

    result := linearSearch(arr, target)
    if result != -1 {
        fmt.Printf("Found at index %d\n", result)
    } else {
        fmt.Println("Not found")
    }
}`,
  };

  const languages = [
    { id: "c", name: "C" },
    { id: "cpp", name: "C++" },
    { id: "java", name: "Java" },
    { id: "javascript", name: "JS" },
    { id: "python", name: "Python" },
    { id: "go", name: "Go" },
  ];

  return (
    <SearchingSortingCard>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
          <Search size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Linear Search</h2>
          <p className="text-slate-400 font-medium">The simplest searching algorithm.</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Logic Steps */}
        <div className="bg-slate-950/50 border border-blue-500/20 rounded-[2rem] p-8">
          <h3 className="text-2xl font-black text-blue-400 mb-6">📖 How It Works</h3>
          <div className="space-y-4">
            {[ 
              "Start from the beginning (index 0).",
              "Check each element one by one: Is this the target?",
              "If found: Return the index.",
              "If not found: Move to the next element.",
              "End of list: Return -1 (Not found)."
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

        {/* Visualization */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="text-emerald-500" /> Watch It Work
            </h3>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Target: <span className="text-white">{target}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mb-10 min-h-[80px]">
            {array.map((num, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: currentIndex === idx ? 1.15 : 1,
                  backgroundColor: found && currentIndex === idx
                    ? "#10b981" // Emerald-500
                    : currentIndex === idx
                    ? "#3b82f6" // Blue-500
                    : "#1e293b", // Slate-800
                  borderColor:
                    found && currentIndex === idx
                      ? "#059669"
                      : currentIndex === idx
                      ? "#2563eb"
                      : "#334155"
                }}
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-black rounded-2xl border-2 text-white shadow-lg transition-colors"
              >
                {num}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="h-8">
              {found ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-emerald-400 font-black text-lg">
                  <CheckCircle2 size={24} /> Found at index {currentIndex}!
                </motion.div>
              ) : currentIndex >= 0 ? (
                <div className="text-blue-400 font-bold animate-pulse">Checking index {currentIndex}...</div>
              ) : (
                <div className="text-slate-500 font-medium">Ready to search...</div>
              )}
            </div>

            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isAnimating ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
              {isAnimating ? "Searching..." : "Start Animation"}
            </button>
          </div>
        </div>

        {/* Complexity Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
            <div className="text-emerald-500 font-black text-sm uppercase tracking-widest mb-1">Best Case</div>
            <div className="text-3xl font-black text-white mb-1">O(1)</div>
            <div className="text-emerald-400/60 text-xs font-bold">First element</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-2xl">
            <div className="text-yellow-500 font-black text-sm uppercase tracking-widest mb-1">Average</div>
            <div className="text-3xl font-black text-white mb-1">O(n)</div>
            <div className="text-yellow-400/60 text-xs font-bold">Middle element</div>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-2xl">
            <div className="text-rose-500 font-black text-sm uppercase tracking-widest mb-1">Worst Case</div>
            <div className="text-3xl font-black text-white mb-1">O(n)</div>
            <div className="text-rose-400/60 text-xs font-bold">Last or not found</div>
          </div>
        </div>

                {/* Code Implementation */}
                <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
                  <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                      <Code2 className="text-blue-400" /> Implementation
                    </h3>
                  </div>
        
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => setActiveLang(lang.id)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeLang === lang.id
                              ? "bg-blue-500 text-white"
                              : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
        
                    <div className="relative group/terminal">
                      <div className="absolute -inset-1 bg-blue-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
                      <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                          </div>
                          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                            linear_search.{activeLang === 'javascript' ? 'js' : activeLang === 'python' ? 'py' : activeLang}
                          </div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                          <pre className="text-sm leading-relaxed text-blue-400 font-mono">
                            <code>{code[activeLang]}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        {/* When to Use */}
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-8">
           <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
             <CheckCircle2 /> When to Use
           </h3>
           <div className="grid md:grid-cols-2 gap-4">
             {[ 
               { text: "Small arrays (< 100 elements)", type: "good" },
               { text: "Unsorted data", type: "good" },
               { text: "Simple implementation needed", type: "good" },
               { text: "Large sorted arrays (Use Binary Search instead)", type: "bad" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                  {item.type === "good" ? (
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="text-rose-500 shrink-0" />
                  )}
                  <span className={`text-sm font-bold ${item.type === "good" ? "text-slate-300" : "text-rose-300/80"}`}>
                    {item.text}
                  </span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </SearchingSortingCard>
  );
}