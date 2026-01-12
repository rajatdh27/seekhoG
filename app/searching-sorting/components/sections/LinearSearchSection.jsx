"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { SectionHeader, AlgorithmSteps, ComplexityAnalysis, WhenToUse } from "@/app/components/common/algorithm";
import { Search, Play, RefreshCw, CheckCircle2, AlertCircle, Code2 } from "lucide-react";

export default function LinearSearchSection() {
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
    <PerspectiveCard color="blue">
      <SectionHeader 
        title="Linear Search" 
        description="The simplest searching algorithm - check every element one by one until you find what you're looking for."
        icon={Search}
        color="blue"
      />

      <div className="space-y-8">
        {/* Logic Steps */}
        <AlgorithmSteps 
          steps={[
            "Start from the beginning (index 0).",
            "Check each element one by one: Is this the target?",
            "If found: Return the index.",
            "If not found: Move to the next element.",
            "End of list: Return -1 (Not found)."
          ]}
          color="blue"
        />

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

                <ComplexityAnalysis 

                  timeBest="O(1)"

                  timeAverage="O(n)"

                  timeWorst="O(n)"

                  space="O(1)"

                  color="blue"

                />

        

                {/* Code Implementation */}

                <CodeImplementation languages={code} color="blue" />

        

                {/* When to Use */}

                <WhenToUse 

                  useCases={[

                    "Small arrays (< 100 elements)",

                    "Unsorted data",

                    "Simple implementation needed"

                  ]}

                  avoidCases={[

                    "Large sorted arrays (Use Binary Search instead)"

                  ]}

                />

        

              </div>

            </PerspectiveCard>
  );
}