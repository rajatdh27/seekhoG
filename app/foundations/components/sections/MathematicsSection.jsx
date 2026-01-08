import { motion } from "framer-motion";
import { useState } from "react";

export default function MathematicsSection() {
  const [activeTab, setActiveTab] = useState("logarithms");

  const codeExamples = {
    logarithms: {
      c: `// Logarithms in C
#include <stdio.h>
#include <math.h>

int main() {
    // log2(n) - binary logarithm
    double n = 1024;
    double result = log2(n);  // Result: 10
    printf("log2(%.0f) = %.2f\\n", n, result);

    // Common in divide and conquer algorithms
    // Binary search has O(log n) complexity

    return 0;
}`,
      cpp: `// Logarithms in C++
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // log2(n) - binary logarithm
    double n = 1024;
    double result = log2(n);  // Result: 10
    cout << "log2(" << n << ") = " << result << endl;

    // log(n) - natural logarithm (base e)
    double natural = log(n);
    cout << "ln(" << n << ") = " << natural << endl;

    // log10(n) - common logarithm (base 10)
    double common = log10(n);
    cout << "log10(" << n << ") = " << common << endl;

    return 0;
}`,
      java: `// Logarithms in Java
public class Mathematics {
    public static void main(String[] args) {
        // log2(n) - binary logarithm
        double n = 1024;
        double result = Math.log(n) / Math.log(2);  // Result: 10
        System.out.println("log2(" + n + ") = " + result);

        // Natural logarithm (base e)
        double natural = Math.log(n);
        System.out.println("ln(" + n + ") = " + natural);

        // Common logarithm (base 10)
        double common = Math.log10(n);
        System.out.println("log10(" + n + ") = " + common);
    }
}`,
      javascript: `// Logarithms in JavaScript

// log2(n) - binary logarithm
const n = 1024;
const result = Math.log2(n);  // Result: 10
console.log(\`log2(\${n}) = \${result}\`);

// Natural logarithm (base e)
const natural = Math.log(n);
console.log(\`ln(\${n}) = \${natural}\`);

// Common logarithm (base 10)
const common = Math.log10(n);
console.log(\`log10(\${n}) = \${common}\`);

// Custom base logarithm
function logBase(num, base) {
    return Math.log(num) / Math.log(base);
}

console.log(\`log3(27) = \${logBase(27, 3)}\`);  // 3`,
      python: `# Logarithms in Python
import math

# log2(n) - binary logarithm
n = 1024
result = math.log2(n)  # Result: 10.0
print(f"log2({n}) = {result}")

# Natural logarithm (base e)
natural = math.log(n)
print(f"ln({n}) = {natural}")

# Common logarithm (base 10)
common = math.log10(n)
print(f"log10({n}) = {common}")

# Custom base logarithm
def log_base(num, base):
    return math.log(num) / math.log(base)

print(f"log3(27) = {log_base(27, 3)}")  # 3.0`,
      go: `// Logarithms in Go
package main

import (
    "fmt"
    "math"
)

func main() {
    // log2(n) - binary logarithm
    n := 1024.0
    result := math.Log2(n)  // Result: 10
    fmt.Printf("log2(%.0f) = %.2f\\n", n, result)

    // Natural logarithm (base e)
    natural := math.Log(n)
    fmt.Printf("ln(%.0f) = %.2f\\n", n, natural)

    // Common logarithm (base 10)
    common := math.Log10(n)
    fmt.Printf("log10(%.0f) = %.2f\\n", n, common)

    // Custom base logarithm
    logBase := func(num, base float64) float64 {
        return math.Log(num) / math.Log(base)
    }
    fmt.Printf("log3(27) = %.2f\\n", logBase(27, 3))
}`,
    },
    exponents: {
      c: `// Exponents in C
#include <stdio.h>
#include <math.h>

int main() {
    // Power function
    double base = 2;
    int exponent = 10;
    double result = pow(base, exponent);  // 2^10 = 1024
    printf("%.0f^%d = %.0f\\n", base, exponent, result);

    // Fast exponentiation (Binary exponentiation)
    long long fastPow(long long base, int exp) {
        long long result = 1;
        while (exp > 0) {
            if (exp % 2 == 1) result *= base;
            base *= base;
            exp /= 2;
        }
        return result;
    }

    return 0;
}`,
      cpp: `// Exponents in C++
#include <iostream>
#include <cmath>
using namespace std;

// Fast exponentiation - O(log n)
long long fastPow(long long base, int exp) {
    long long result = 1;
    while (exp > 0) {
        if (exp & 1) result *= base;  // if odd
        base *= base;
        exp >>= 1;  // divide by 2
    }
    return result;
}

int main() {
    // Using pow function
    double result = pow(2, 10);  // 2^10 = 1024
    cout << "2^10 = " << result << endl;

    // Fast exponentiation
    long long fast = fastPow(2, 10);
    cout << "Fast: 2^10 = " << fast << endl;

    // Modular exponentiation
    auto modPow = [](long long base, int exp, int mod) {
        long long result = 1;
        base %= mod;
        while (exp > 0) {
            if (exp & 1) result = (result * base) % mod;
            base = (base * base) % mod;
            exp >>= 1;
        }
        return result;
    };

    cout << "2^10 mod 1000 = " << modPow(2, 10, 1000) << endl;

    return 0;
}`,
      java: `// Exponents in Java
public class Exponents {
    // Fast exponentiation - O(log n)
    public static long fastPow(long base, int exp) {
        long result = 1;
        while (exp > 0) {
            if ((exp & 1) == 1) result *= base;
            base *= base;
            exp >>= 1;
        }
        return result;
    }

    // Modular exponentiation
    public static long modPow(long base, int exp, int mod) {
        long result = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp >>= 1;
        }
        return result;
    }

    public static void main(String[] args) {
        // Using Math.pow
        double result = Math.pow(2, 10);  // 2^10 = 1024
        System.out.println("2^10 = " + result);

        // Fast exponentiation
        long fast = fastPow(2, 10);
        System.out.println("Fast: 2^10 = " + fast);

        // Modular exponentiation
        long mod = modPow(2, 10, 1000);
        System.out.println("2^10 mod 1000 = " + mod);
    }
}`,
      javascript: `// Exponents in JavaScript

// Built-in exponentiation
const result = Math.pow(2, 10);  // 2^10 = 1024
console.log(\`2^10 = \${result}\`);

// ES6 exponentiation operator
const result2 = 2 ** 10;  // 1024
console.log(\`2^10 = \${result2}\`);

// Fast exponentiation - O(log n)
function fastPow(base, exp) {
    let result = 1;
    while (exp > 0) {
        if (exp & 1) result *= base;
        base *= base;
        exp >>= 1;
    }
    return result;
}

console.log(\`Fast: 2^10 = \${fastPow(2, 10)}\`);

// Modular exponentiation
function modPow(base, exp, mod) {
    let result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp >>= 1;
    }
    return result;
}

console.log(\`2^10 mod 1000 = \${modPow(2, 10, 1000)}\`);`,
      python: `# Exponents in Python

# Built-in exponentiation
result = 2 ** 10  # 2^10 = 1024
print(f"2^10 = {result}")

# Using pow function
result2 = pow(2, 10)  # 1024
print(f"2^10 = {result2}")

# Modular exponentiation (built-in)
mod_result = pow(2, 10, 1000)  # (2^10) % 1000
print(f"2^10 mod 1000 = {mod_result}")

# Fast exponentiation - O(log n)
def fast_pow(base, exp):
    result = 1
    while exp > 0:
        if exp & 1:  # if odd
            result *= base
        base *= base
        exp >>= 1  # divide by 2
    return result

print(f"Fast: 2^10 = {fast_pow(2, 10)}")

# Modular exponentiation
def mod_pow(base, exp, mod):
    result = 1
    base %= mod
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp >>= 1
    return result

print(f"2^10 mod 1000 = {mod_pow(2, 10, 1000)}")`,
      go: `// Exponents in Go
package main

import (
    "fmt"
    "math"
)

// Fast exponentiation - O(log n)
func fastPow(base, exp int64) int64 {
    result := int64(1)
    for exp > 0 {
        if exp&1 == 1 {
            result *= base
        }
        base *= base
        exp >>= 1
    }
    return result
}

// Modular exponentiation
func modPow(base, exp, mod int64) int64 {
    result := int64(1)
    base %= mod
    for exp > 0 {
        if exp&1 == 1 {
            result = (result * base) % mod
        }
        base = (base * base) % mod
        exp >>= 1
    }
    return result
}

func main() {
    // Using math.Pow
    result := math.Pow(2, 10)  // 2^10 = 1024
    fmt.Printf("2^10 = %.0f\\n", result)

    // Fast exponentiation
    fast := fastPow(2, 10)
    fmt.Printf("Fast: 2^10 = %d\\n", fast)

    // Modular exponentiation
    mod := modPow(2, 10, 1000)
    fmt.Printf("2^10 mod 1000 = %d\\n", mod)
}`,
    },
  };

  const tabs = [
    { id: "logarithms", name: "Logarithms", icon: "📊" },
    { id: "exponents", name: "Exponents", icon: "⚡" },
  ];

  const languages = ["c", "cpp", "java", "javascript", "python", "go"];
  const [activeLang, setActiveLang] = useState("python");

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟦 2. Mathematics for DSA
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Essential mathematical concepts that form the foundation of algorithm analysis and problem-solving.
      </p>

      {/* Key Concepts Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">📊 Logarithms</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Definition:</strong> log<sub>b</sub>(x) = y means b<sup>y</sup> = x</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Common in:</strong> Binary search, divide & conquer algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Properties:</strong> log(ab) = log(a) + log(b)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Example:</strong> log<sub>2</sub>(1024) = 10</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">⚡ Exponents</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span><strong>Definition:</strong> a<sup>n</sup> = a × a × ... × a (n times)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span><strong>Properties:</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span><strong>Fast exponentiation:</strong> O(log n) instead of O(n)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span><strong>Example:</strong> 2<sup>10</sup> = 1024</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">🎯 Combinatorics</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Permutations:</strong> P(n,r) = n!/(n-r)!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Combinations:</strong> C(n,r) = n!/[r!(n-r)!]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Used in:</strong> Dynamic programming, counting problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Example:</strong> C(5,2) = 10 ways to choose 2 from 5</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
          <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">📐 Sets & Functions</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Sets:</strong> Collections of distinct elements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Operations:</strong> Union, intersection, difference</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Functions:</strong> Mappings from domain to range</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Used in:</strong> Hash tables, graph theory</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Code Examples */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Code Examples
        </h3>

        {/* Topic Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600"
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Language Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded text-sm font-medium whitespace-nowrap transition-all ${
                activeLang === lang
                  ? "bg-green-600 text-white"
                  : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{codeExamples[activeTab][activeLang]}</code>
          </pre>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
          ✅ Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Logarithms appear in divide & conquer algorithms (binary search, merge sort)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Fast exponentiation reduces O(n) to O(log n) using binary representation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Combinatorics is essential for counting and probability problems</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span>Understanding these concepts helps analyze algorithm complexity accurately</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
