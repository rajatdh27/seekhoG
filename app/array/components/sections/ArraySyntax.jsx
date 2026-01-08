"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const languages = [
  { id: "c", name: "C", icon: "🔷" },
  { id: "cpp", name: "C++", icon: "⚡" },
  { id: "java", name: "Java", icon: "☕" },
  { id: "javascript", name: "JavaScript", icon: "🟨" },
  { id: "python", name: "Python", icon: "🐍" },
  { id: "go", name: "Go", icon: "🔵" },
];

const syntaxData = {
  declaration: {
    title: "Declaration & Initialization",
    c: `// Fixed size array
int arr[5];
int arr[] = {1, 2, 3, 4, 5};
int arr[5] = {1, 2, 3}; // Rest filled with 0`,
    cpp: `// Static array
int arr[5];
int arr[] = {1, 2, 3, 4, 5};

// Dynamic array (vector)
#include <vector>
vector<int> arr = {1, 2, 3, 4, 5};
vector<int> arr(5, 0); // Size 5, filled with 0`,
    java: `// Fixed size array
int[] arr = new int[5];
int[] arr = {1, 2, 3, 4, 5};

// Dynamic array (ArrayList)
ArrayList<Integer> arr = new ArrayList<>();
ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1,2,3,4,5));`,
    javascript: `// Arrays are dynamic by default
let arr = [1, 2, 3, 4, 5];
let arr = new Array(5); // Length 5, filled with undefined
let arr = Array.from({length: 5}, (_, i) => i); // [0,1,2,3,4]
let arr = Array(5).fill(0); // [0,0,0,0,0]`,
    python: `# Lists are dynamic by default
arr = [1, 2, 3, 4, 5]
arr = list(range(5))  # [0, 1, 2, 3, 4]
arr = [0] * 5  # [0, 0, 0, 0, 0]

# Fixed size (array module)
from array import array
arr = array('i', [1, 2, 3, 4, 5])`,
    go: `// Fixed size array
var arr [5]int
arr := [5]int{1, 2, 3, 4, 5}
arr := [...]int{1, 2, 3, 4, 5} // Size inferred

// Dynamic array (slice)
arr := []int{1, 2, 3, 4, 5}
arr := make([]int, 5) // Length 5, filled with 0`,
  },
  access: {
    title: "Access Elements",
    c: `// Access
int x = arr[0];  // First element
int y = arr[4];  // Fifth element

// Modify
arr[0] = 10;
arr[2] = 30;`,
    cpp: `// Access (array)
int x = arr[0];
int y = arr.at(2); // With bounds checking

// Access (vector)
int x = arr[0];
int y = arr.at(2); // Throws exception if out of bounds`,
    java: `// Access
int x = arr[0];
int y = arr[4];

// ArrayList
int x = arr.get(0);
int y = arr.get(4);

// Modify
arr[0] = 10;  // Array
arr.set(0, 10);  // ArrayList`,
    javascript: `// Access
let x = arr[0];
let y = arr[4];

// Safe access (won't throw error)
let z = arr[10];  // undefined if doesn't exist

// Modify
arr[0] = 10;
arr[2] = 30;`,
    python: `# Access
x = arr[0]  # First element
y = arr[4]  # Fifth element
z = arr[-1]  # Last element (Python specific!)
w = arr[-2]  # Second to last

# Modify
arr[0] = 10
arr[2] = 30`,
    go: `// Access (array & slice)
x := arr[0]
y := arr[4]

// Modify
arr[0] = 10
arr[2] = 30`,
  },
  insertion: {
    title: "Insert Elements",
    c: `// No built-in insert - manual shift required
void insert(int arr[], int *n, int pos, int val) {
    for(int i = *n; i > pos; i--) {
        arr[i] = arr[i-1];
    }
    arr[pos] = val;
    (*n)++;
}`,
    cpp: `// Vector insert
arr.push_back(6);  // Insert at end - O(1)
arr.insert(arr.begin() + 2, 99);  // Insert at index 2 - O(n)
arr.insert(arr.begin(), 0);  // Insert at beginning - O(n)`,
    java: `// ArrayList insert
arr.add(6);  // Append - O(1) amortized
arr.add(2, 99);  // Insert at index 2 - O(n)
arr.add(0, 0);  // Insert at beginning - O(n)`,
    javascript: `// Insert at end
arr.push(6);  // O(1)

// Insert at beginning
arr.unshift(0);  // O(n)

// Insert at index
arr.splice(2, 0, 99);  // Insert 99 at index 2 - O(n)`,
    python: `# Insert at end
arr.append(6)  # O(1)

# Insert at index
arr.insert(2, 99)  # Insert 99 at index 2 - O(n)
arr.insert(0, 0)  # Insert at beginning - O(n)`,
    go: `// Append to slice
arr = append(arr, 6)  // O(1) amortized

// Insert at index
arr = append(arr[:2], append([]int{99}, arr[2:]...)...)  // O(n)`,
  },
  deletion: {
    title: "Delete Elements",
    c: `// No built-in delete - manual shift required
void delete(int arr[], int *n, int pos) {
    for(int i = pos; i < *n - 1; i++) {
        arr[i] = arr[i+1];
    }
    (*n)--;
}`,
    cpp: `// Vector delete
arr.pop_back();  // Remove last - O(1)
arr.erase(arr.begin() + 2);  // Remove at index 2 - O(n)
arr.erase(arr.begin());  // Remove first - O(n)
arr.clear();  // Remove all`,
    java: `// ArrayList delete
arr.remove(arr.size() - 1);  // Remove last - O(1)
arr.remove(2);  // Remove at index 2 - O(n)
arr.clear();  // Remove all`,
    javascript: `// Remove last
arr.pop();  // O(1)

// Remove first
arr.shift();  // O(n)

// Remove at index
arr.splice(2, 1);  // Remove 1 element at index 2 - O(n)

// Remove multiple
arr.splice(1, 3);  // Remove 3 elements starting at index 1`,
    python: `# Remove by value
arr.remove(3)  # Removes first occurrence - O(n)

# Remove by index
del arr[2]  # O(n)
arr.pop()  # Remove last - O(1)
arr.pop(0)  # Remove first - O(n)

# Clear all
arr.clear()`,
    go: `// Remove last element
arr = arr[:len(arr)-1]  // O(1)

// Remove at index
arr = append(arr[:2], arr[3:]...)  // Remove index 2 - O(n)`,
  },
  searching: {
    title: "Search Elements",
    c: `// Linear search
int search(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == target) return i;
    }
    return -1;
}

// Binary search (sorted array)
#include <stdlib.h>
int* result = bsearch(&target, arr, n, sizeof(int), compare);`,
    cpp: `// Find element
auto it = find(arr.begin(), arr.end(), 30);  // Returns iterator
if(it != arr.end()) {
    int index = distance(arr.begin(), it);
}

// Binary search (sorted array)
bool found = binary_search(arr.begin(), arr.end(), 30);
auto it = lower_bound(arr.begin(), arr.end(), 30);`,
    java: `// Linear search (ArrayList)
int index = arr.indexOf(30);  // Returns -1 if not found
boolean exists = arr.contains(30);

// Binary search (sorted array)
int index = Arrays.binarySearch(arr, 30);  // Array
int index = Collections.binarySearch(arr, 30);  // ArrayList`,
    javascript: `// Linear search
let index = arr.indexOf(30);  // Returns -1 if not found
let exists = arr.includes(30);  // Returns boolean

// Find element
let element = arr.find(x => x > 20);  // First matching element
let index = arr.findIndex(x => x > 20);  // Index of first match`,
    python: `# Linear search
index = arr.index(30)  # Raises ValueError if not found
exists = 30 in arr  # Boolean

# Safe search
try:
    index = arr.index(30)
except ValueError:
    index = -1

# Binary search (sorted array)
import bisect
index = bisect.bisect_left(arr, 30)`,
    go: `// Linear search
func search(arr []int, target int) int {
    for i, v := range arr {
        if v == target {
            return i
        }
    }
    return -1
}

// Binary search (sorted slice)
import "sort"
index := sort.SearchInts(arr, 30)`,
  },
  iteration: {
    title: "Iterate Through Array",
    c: `// Index-based
for(int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
}

// Pointer-based
for(int *p = arr; p < arr + n; p++) {
    printf("%d ", *p);
}`,
    cpp: `// Index-based
for(int i = 0; i < arr.size(); i++) {
    cout << arr[i] << " ";
}

// Range-based (C++11)
for(int x : arr) {
    cout << x << " ";
}

// Iterator
for(auto it = arr.begin(); it != arr.end(); ++it) {
    cout << *it << " ";
}`,
    java: `// Index-based
for(int i = 0; i < arr.length; i++) {  // Array
    System.out.print(arr[i] + " ");
}

// Enhanced for loop
for(int x : arr) {
    System.out.print(x + " ");
}

// ArrayList forEach
arr.forEach(x -> System.out.print(x + " "));`,
    javascript: `// Index-based
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of
for(let x of arr) {
    console.log(x);
}

// forEach
arr.forEach((x, i) => console.log(x, i));

// map (returns new array)
arr.map(x => x * 2);`,
    python: `# Index-based
for i in range(len(arr)):
    print(arr[i])

# Direct iteration
for x in arr:
    print(x)

# With index
for i, x in enumerate(arr):
    print(i, x)

# List comprehension
doubled = [x * 2 for x in arr]`,
    go: `// Index-based
for i := 0; i < len(arr); i++ {
    fmt.Println(arr[i])
}

// Range-based
for i, v := range arr {
    fmt.Println(i, v)  // Index and value
}

// Value only
for _, v := range arr {
    fmt.Println(v)
}`,
  },
};

export default function ArraySyntax() {
  const [selectedLang, setSelectedLang] = useState("javascript");
  const [selectedOperation, setSelectedOperation] = useState("declaration");

  const operations = Object.keys(syntaxData);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Syntax Across Languages
      </motion.h2>

      {/* Language Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Select Language:
        </h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.id}
              onClick={() => setSelectedLang(lang.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                selectedLang === lang.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Operation Tabs */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Operation:
        </h3>
        <div className="flex flex-wrap gap-2">
          {operations.map((op) => (
            <button
              key={op}
              onClick={() => setSelectedOperation(op)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedOperation === op
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {syntaxData[op].title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <motion.div
        key={`${selectedLang}-${selectedOperation}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 overflow-x-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-100">
            {syntaxData[selectedOperation].title} - {languages.find(l => l.id === selectedLang)?.name}
          </h4>
          <button
            onClick={() => {
              navigator.clipboard.writeText(syntaxData[selectedOperation][selectedLang]);
            }}
            className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-sm transition-colors"
          >
            📋 Copy
          </button>
        </div>
        <pre className="text-sm text-slate-300 font-mono leading-relaxed">
          <code>{syntaxData[selectedOperation][selectedLang]}</code>
        </pre>
      </motion.div>

      {/* Quick Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Feature
                </th>
                {languages.map((lang) => (
                  <th
                    key={lang.id}
                    className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {lang.icon} {lang.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Dynamic Size
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (vector)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (ArrayList)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (slice)</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Type Safety
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (typed)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Built-in Methods
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (STL)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Performance
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-bold">
                  ⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-bold">
                  ⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-bold">
                  ⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
