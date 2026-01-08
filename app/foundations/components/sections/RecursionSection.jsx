import { motion } from "framer-motion";
import { useState } from "react";

export default function RecursionSection() {
  const [activeLang, setActiveLang] = useState("python");

  const recursionExamples = {
    python: `# Recursion Examples in Python

# 1. Factorial - Classic recursion
def factorial(n):
    # Base case
    if n <= 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

# 2. Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# 3. Sum of array
def sum_array(arr, n):
    if n <= 0:
        return 0
    return arr[n-1] + sum_array(arr, n-1)

# 4. Tail recursion (optimized)
def factorial_tail(n, accumulator=1):
    if n <= 1:
        return accumulator
    return factorial_tail(n - 1, n * accumulator)

print(factorial(5))  # 120
print(fibonacci(6))  # 8`,
    c: `// Recursion Examples in C
#include <stdio.h>

// 1. Factorial
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}

// 2. Fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// 3. Sum of array
int sumArray(int arr[], int n) {
    if (n <= 0) return 0;
    return arr[n-1] + sumArray(arr, n-1);
}

// 4. Power function
int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}

int main() {
    printf("5! = %d\\n", factorial(5));
    printf("fib(6) = %d\\n", fibonacci(6));
    return 0;
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟩 6. Recursion Fundamentals
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Recursion is when a function calls itself to solve smaller instances of the same problem.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">🎯 Base Case</h3>
          <p className="text-slate-700 dark:text-slate-300">
            The condition that stops recursion. Without it, you get infinite recursion and stack overflow!
          </p>
          <div className="mt-3 p-3 bg-white dark:bg-slate-800 rounded font-mono text-sm">
            if (n &lt;= 1) return 1;
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">🔄 Recursive Case</h3>
          <p className="text-slate-700 dark:text-slate-300">
            The part where function calls itself with a smaller/simpler input, moving towards the base case.
          </p>
          <div className="mt-3 p-3 bg-white dark:bg-slate-800 rounded font-mono text-sm">
            return n * factorial(n - 1);
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📚 How Recursion Works (Call Stack)
        </h3>
        <div className="space-y-2 font-mono text-sm text-slate-700 dark:text-slate-300">
          <div className="p-3 bg-white dark:bg-slate-800 rounded">factorial(3)</div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded ml-4">→ 3 * factorial(2)</div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded ml-8">→ 2 * factorial(1)</div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded ml-12">→ 1 (base case)</div>
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded ml-8">← returns 2 * 1 = 2</div>
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded ml-4">← returns 3 * 2 = 6</div>
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded font-bold">Result: 6</div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">💻 Code Examples</h3>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveLang("python")}
            className={`px-4 py-2 rounded font-semibold ${
              activeLang === "python" ? "bg-green-600 text-white" : "bg-slate-200 dark:bg-slate-700"
            }`}
          >
            Python
          </button>
          <button
            onClick={() => setActiveLang("c")}
            className={`px-4 py-2 rounded font-semibold ${
              activeLang === "c" ? "bg-green-600 text-white" : "bg-slate-200 dark:bg-slate-700"
            }`}
          >
            C
          </button>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{recursionExamples[activeLang]}</code>
          </pre>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-600 mb-6">
        <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">⚠️ Common Pitfalls</h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span><strong>Stack Overflow:</strong> Forgetting base case or never reaching it</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span><strong>Inefficiency:</strong> Redundant calculations (fib without memoization)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span><strong>Deep recursion:</strong> Too many nested calls exhaust stack memory</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">✅ Key Takeaways</h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Recursion breaks problems into smaller subproblems</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Always have a base case to stop recursion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Each recursive call uses stack space</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Tail recursion can be optimized by compilers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
