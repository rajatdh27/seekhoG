"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
        printf("Found at index %d\\n", result);
    else
        printf("Not found\\n");

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
    console.log(\`Found at index \${result}\`);
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
        fmt.Printf("Found at index %d\\n", result)
    } else {
        fmt.Println("Not found")
    }
}`,
  };

  const languages = [
    { id: "c", name: "C" },
    { id: "cpp", name: "C++" },
    { id: "java", name: "Java" },
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "go", name: "Go" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🔍 Linear Search
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        The simplest search algorithm - check every element one by one until you find what you're looking for.
      </p>

      {/* How It Works */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
          📖 How It Works
        </h3>
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <strong>Start from the beginning:</strong> Begin at index 0
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <strong>Check current element:</strong> Is this the target?
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <strong>If found:</strong> Return the index
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <strong>If not found:</strong> Move to next element and repeat
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
            <div>
              <strong>End of array:</strong> Return -1 (not found)
            </div>
          </div>
        </div>
      </div>

      {/* Visual Animation */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Watch It Work
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Searching for <strong>{target}</strong> in the array
        </p>

        <div className="flex gap-2 mb-6 justify-center flex-wrap">
          {array.map((num, idx) => (
            <motion.div
              key={idx}
              animate={{
                scale: currentIndex === idx ? 1.2 : 1,
                backgroundColor: found && currentIndex === idx
                  ? "#22c55e"
                  : currentIndex === idx
                  ? "#3b82f6"
                  : "#e2e8f0",
                color: currentIndex === idx || (found && currentIndex === idx) ? "#ffffff" : "#1e293b"
              }}
              className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-lg border-2 border-slate-300 dark:border-slate-600"
            >
              {num}
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-4">
          {found && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-600 dark:text-green-400 font-bold text-xl"
            >
              ✓ Found at index {currentIndex}!
            </motion.div>
          )}
          {!found && currentIndex >= 0 && (
            <div className="text-blue-600 dark:text-blue-400 font-semibold">
              Checking index {currentIndex}...
            </div>
          )}
        </div>

        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isAnimating ? "Searching..." : "Start Animation"}
        </button>
      </div>

      {/* Complexity */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-sm text-green-700 dark:text-green-300 font-semibold mb-1">Best Case</div>
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">O(1)</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Element at first position</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-sm text-yellow-700 dark:text-yellow-300 font-semibold mb-1">Average Case</div>
          <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">O(n)</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Element in middle</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-sm text-red-700 dark:text-red-300 font-semibold mb-1">Worst Case</div>
          <div className="text-2xl font-bold text-red-900 dark:text-red-100">O(n)</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Element at last or not found</div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Code in All Languages
        </h3>

        {/* Language Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setActiveLang(lang.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeLang === lang.id
                  ? "bg-orange-600 text-white"
                  : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-600"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{code[activeLang]}</code>
          </pre>
        </div>
      </div>

      {/* When to Use */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
          ✅ When to Use Linear Search
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Small arrays (less than 100 elements)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Unsorted data (can't use binary search)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Simple implementation needed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 dark:text-red-400">✗</span>
            <span>Large sorted arrays (use binary search instead!)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
