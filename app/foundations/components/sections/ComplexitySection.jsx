"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FoundationCard from "./FoundationCard";
import { Clock, Zap, Cpu, Code2, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

export default function ComplexitySection() {
  const [activeExample, setActiveExample] = useState("constant");
  const [activeLang, setActiveLang] = useState("python");

  const complexityExamples = {
    constant: {
      title: "O(1) - Constant Time",
      description: "Execution time doesn't depend on input size - always same speed!",
      realWorld: "Accessing a book page number, checking your watch",
      accent: "emerald",
      code: {
        c: `// O(1) - Constant time
int getFirstElement(int arr[], int n) {
    return arr[0];  // Always 1 operation
}

int getLastElement(int arr[], int n) {
    return arr[n-1];  // Always 1 operation
}`,
        cpp: `// O(1) - Constant time
int getFirstElement(vector<int>& arr) {
    return arr[0];  // Always 1 operation
}

int getLastElement(vector<int>& arr) {
    return arr[arr.size()-1];  // Always 1 operation
}`,
        java: `// O(1) - Constant time
public int getFirstElement(int[] arr) {
    return arr[0];  // Always 1 operation
}

public int getLastElement(int[] arr) {
    return arr[arr.length-1];  // Always 1 operation
}`,
        javascript: `// O(1) - Constant time
function getFirstElement(arr) {
    return arr[0];  // Always 1 operation
}

function getLastElement(arr) {
    return arr[arr.length-1];  // Always 1 operation
}`,
        python: `# O(1) - Constant time
def get_first_element(arr):
    return arr[0]  # Always 1 operation

def get_last_element(arr):
    return arr[-1]  # Always 1 operation`,
        go: `// O(1) - Constant time
func getFirstElement(arr []int) int {
    return arr[0]  // Always 1 operation
}

func getLastElement(arr []int) int {
    return arr[len(arr)-1]  // Always 1 operation
}`,
      },
    },
    linear: {
      title: "O(n) - Linear Time",
      description: "Time grows directly with input size - double input, double time",
      realWorld: "Reading all pages in a book, counting all people in a room",
      accent: "blue",
      code: {
        c: `// O(n) - Linear time
int findMax(int arr[], int n) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        cpp: `// O(n) - Linear time
int findMax(vector<int>& arr) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        java: `// O(n) - Linear time
public int findMax(int[] arr) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        javascript: `// O(n) - Linear time
function findMax(arr) {
    let max = arr[0];
    // Must check every element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        python: `# O(n) - Linear time
def find_max(arr):
    max_val = arr[0]
    # Must check every element
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val`,
        go: `// O(n) - Linear time
func findMax(arr []int) int {
    max := arr[0]
    // Must check every element
    for i := 1; i < len(arr); i++ {
        if arr[i] > max {
            max = arr[i]
        }
    }
    return max
}`,
      },
    },
    logarithmic: {
      title: "O(log n) - Logarithmic Time",
      description: "Cuts problem in half each step - extremely efficient!",
      realWorld: "Finding a word in dictionary, finding a name in phone book",
      accent: "cyan",
      code: {
        c: `// O(log n) - Binary search
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        cpp: `// O(log n) - Binary search
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        java: `// O(log n) - Binary search
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        javascript: `// O(log n) - Binary search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        python: `# O(log n) - Binary search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] < target:
            left = mid + 1   # Search right half
        else:
            right = mid - 1  # Search left half

    return -1`,
        go: `// O(log n) - Binary search
func binarySearch(arr []int, target int) int {
    left, right := 0, len(arr)-1

    for left <= right {
        mid := left + (right-left)/2

        if arr[mid] == target {
            return mid
        }

        if arr[mid] < target {
            left = mid + 1   // Search right half
        } else {
            right = mid - 1  // Search left half
        }
    }
    return -1
}`,
      },
    },
    quadratic: {
      title: "O(n²) - Quadratic Time",
      description: "Nested loops - time grows with n × n (gets slow quickly!)",
      realWorld: "Comparing every person with every other person in a room",
      accent: "rose",
      code: {
        c: `// O(n²) - Bubble sort
void bubbleSort(int arr[], int n) {
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        cpp: `// O(n²) - Bubble sort
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
        java: `// O(n²) - Bubble sort
public void bubbleSort(int[] arr) {
    int n = arr.length;
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        javascript: `// O(n²) - Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    // Outer loop: n times
    for (let i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}`,
        python: `# O(n²) - Bubble sort
def bubble_sort(arr):
    n = len(arr)
    # Outer loop: n times
    for i in range(n):
        # Inner loop: n times
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
        go: `// O(n²) - Bubble sort
func bubbleSort(arr []int) {
    n := len(arr)
    // Outer loop: n times
    for i := 0; i < n-1; i++ {
        // Inner loop: n times
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                // Swap
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}`,
      },
    },
  };

  const languages = [
    { id: "c", name: "C", color: "blue" },
    { id: "cpp", name: "C++", color: "blue" },
    { id: "java", name: "Java", color: "red" },
    { id: "javascript", name: "JavaScript", color: "yellow" },
    { id: "python", name: "Python", color: "green" },
    { id: "go", name: "Go", color: "cyan" },
  ];

  return (
    <FoundationCard className="overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 border border-yellow-500/20">
          <TrendingUp size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Time & Space Complexity</h2>
      </div>

      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        Complexity analysis helps us understand how an algorithm&apos;s performance changes as input size grows. It is the language of algorithm efficiency.
      </p>

      {/* Why Complexity Matters - Floating Terminal Style */}
      <div className="relative mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-[2rem] blur opacity-20" />
        <div className="relative bg-slate-950/80 rounded-[2rem] border border-white/10 p-8 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-4 text-xs font-black text-slate-500 uppercase tracking-widest">Performance Simulation</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white flex items-center gap-3">
                <Zap className="text-yellow-400" /> Why It Matters
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Small Data", text: "Everything seems fast at 100 items", icon: "🌱" },
                  { title: "Real World", text: "Millions of users, billions of records", icon: "🌎" },
                  { title: "Scale Gap", text: "Hours vs seconds on large datasets", icon: "📈" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                    <div>
                      <div className="font-black text-white text-sm uppercase tracking-tighter">{item.title}</div>
                      <p className="text-slate-400 text-xs font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 border border-white/5 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-xs font-bold text-slate-400">1,000 Items</span>
                  <span className="text-xs font-black text-emerald-400">O(n²) = 1ms ✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                  <span className="text-xs font-bold text-slate-400">1M Items</span>
                  <span className="text-xs font-black text-rose-400">O(n²) = 16 min ✗</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <span className="text-xs font-bold text-slate-400">1M Items</span>
                  <span className="text-xs font-black text-emerald-400">O(n log n) = 20ms ✓✓</span>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-slate-500 text-center uppercase font-black tracking-widest leading-relaxed">
                The same hardware, different algorithms.<br/>Choice defines the product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Time vs Space - Split Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div whileHover={{ y: -5 }} className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Clock size={80} />
          </div>
          <h3 className="text-2xl font-black text-blue-400 mb-4 flex items-center gap-3">
            <Clock size={24} /> Time Complexity
          </h3>
          <p className="text-slate-400 text-sm font-medium mb-6">How many operations as input grows? Focus on the rate of growth, not exact seconds.</p>
          <ul className="space-y-3">
            {["Measures number of operations", "Focus on worst-case scenario", "Ignore constants: 5n → O(n)"].map((li, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <CheckCircle2 size={14} className="text-blue-500" /> {li}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-purple-500/5 border border-purple-500/20 p-8 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Cpu size={80} />
          </div>
          <h3 className="text-2xl font-black text-purple-400 mb-4 flex items-center gap-3">
            <Cpu size={24} /> Space Complexity
          </h3>
          <p className="text-slate-400 text-sm font-medium mb-6">How much extra memory does the algorithm need? Includes variables and data structures.</p>
          <ul className="space-y-3">
            {["Includes auxiliary space", "Creating array of size n → O(n)", "Few variables → O(1) space"].map((li, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <CheckCircle2 size={14} className="text-purple-500" /> {li}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Interactive Examples - The Grid Lab */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h3 className="text-3xl font-black text-white flex items-center gap-3">
            <Code2 className="text-emerald-400" /> The Complexity Lab
          </h3>
          
          <div className="flex p-1 bg-slate-950 rounded-xl border border-white/5 overflow-x-auto max-w-full">
            {Object.keys(complexityExamples).map((key) => (
              <button
                key={key}
                onClick={() => setActiveExample(key)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                  activeExample === key
                    ? "bg-white text-black shadow-lg"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-8 rounded-[2rem] bg-slate-900 border border-white/5`}>
              <div className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Complexity Profile</div>
              <h4 className="text-3xl font-black text-white mb-4">
                {complexityExamples[activeExample].title}
              </h4>
              <p className="text-slate-400 text-base font-medium leading-relaxed mb-6">
                {complexityExamples[activeExample].description}
              </p>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                <AlertTriangle size={18} className="text-yellow-500 shrink-0 mt-1" />
                <div className="text-xs font-bold text-slate-300 italic">
                  &quot;{complexityExamples[activeExample].realWorld}&quot;
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex flex-wrap gap-2 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeLang === lang.id
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-slate-800 text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Code Side - Floating Terminal */}
          <div className="lg:col-span-3 relative group/terminal">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
            <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl h-full flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{activeLang}_module.log</div>
              </div>
              <div className="p-6 flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <pre className="text-sm leading-relaxed text-emerald-400 font-mono">
                  <code>{complexityExamples[activeExample].code[activeLang]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Comparison Table - High Performance Table Style */}
      <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 mb-12 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
        
        <h3 className="text-3xl font-black text-white mb-8 text-center tracking-tight">
          Algorithmic Scaling Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-6 px-4 text-slate-500 font-black uppercase tracking-widest text-[10px]">Input Size (n)</th>
                <th className="text-right py-6 px-4 text-emerald-400 font-black uppercase tracking-widest text-[10px]">O(1)</th>
                <th className="text-right py-6 px-4 text-cyan-400 font-black uppercase tracking-widest text-[10px]">O(log n)</th>
                <th className="text-right py-6 px-4 text-blue-400 font-black uppercase tracking-widest text-[10px]">O(n)</th>
                <th className="text-right py-6 px-4 text-amber-400 font-black uppercase tracking-widest text-[10px]">O(n log n)</th>
                <th className="text-right py-6 px-4 text-rose-400 font-black uppercase tracking-widest text-[10px]">O(n²)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { size: "10", vals: ["1", "3", "10", "33", "100"], colors: ["emerald", "cyan", "blue", "amber", "rose"] },
                { size: "100", vals: ["1", "7", "100", "664", "10,000"], colors: ["emerald", "cyan", "blue", "amber", "rose"] },
                { size: "1,000", vals: ["1", "10", "1,000", "9,966", "1,000,000"], colors: ["emerald", "cyan", "blue", "amber", "rose"] },
                { size: "1,000,000", vals: ["1", "20", "1,000,000", "20,000,000", "1 Trillion"], colors: ["emerald", "cyan", "blue", "amber", "rose"] }
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-4 font-black text-white">{row.size}</td>
                  {row.vals.map((val, j) => (
                    <td key={j} className={`py-6 px-4 text-right font-mono font-bold text-slate-400 group-hover:text-white transition-colors`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl text-center">
          <p className="text-xs font-bold text-rose-400 leading-relaxed uppercase tracking-widest">
            🛑 Notice: O(n²) grows to a <span className="underline decoration-2 underline-offset-4">Trillion</span> operations at 1M items.<br/>
            Engineers build for the 1,000,000 use-case, not the 10.
          </p>
        </div>
      </div>

      {/* Key Takeaways - Floating Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { text: "O(1) is best: Constant time, always fast", color: "emerald" },
          { text: "O(log n) is great: Scales amazingly (binary search)", color: "cyan" },
          { text: "O(n) is acceptable: Linear growth, usually fine", color: "blue" },
          { text: "O(n log n) is efficient: Best sorting algorithms", color: "amber" },
          { text: "O(n²) avoid when possible: Gets slow very quickly", color: "rose" }
        ].map((item, i) => (
          <div key={i} className={`p-6 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-${item.color}-500/30 transition-all`}>
            <div className={`w-2 h-2 rounded-full bg-${item.color}-500 shadow-[0_0_10px_rgba(var(--${item.color}-rgb),0.5)]`} />
            <p className="text-[11px] font-black text-slate-300 uppercase tracking-tighter leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </FoundationCard>
  );
}