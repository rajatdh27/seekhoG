"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { Calculator, BarChart3, Zap, Hash, Sigma, CheckCircle2, Code2 } from "lucide-react";

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
    printf("log2(%.0f) = %.2f\n", n, result);

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
console.log('log2(' + n + ') = ' + result);

// Natural logarithm (base e)
const natural = Math.log(n);
console.log('ln(' + n + ') = ' + natural);

// Common logarithm (base 10)
const common = Math.log10(n);
console.log('log10(' + n + ') = ' + common);

// Custom base logarithm
function logBase(num, base) {
    return Math.log(num) / Math.log(base);
}

console.log('log3(27) = ' + logBase(27, 3));  // 3`,
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
    fmt.Printf("log2(%.0f) = %.2f\n", n, result)

    // Natural logarithm (base e)
    natural := math.Log(n)
    fmt.Printf("ln(%.0f) = %.2f\n", n, natural)

    // Common logarithm (base 10)
    common := math.Log10(n)
    fmt.Printf("log10(%.0f) = %.2f\n", n, common)

    // Custom base logarithm
    logBase := func(num, base float64) float64 {
        return math.Log(num) / math.Log(base)
    }
    fmt.Printf("log3(27) = %.2f\n", logBase(27, 3))
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
    printf("%.0f^%d = %.0f\n", base, exponent, result);

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
console.log('2^10 = ' + result);

// ES6 exponentiation operator
const result2 = 2 ** 10;  // 1024
console.log('2^10 = ' + result2);

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

console.log('Fast: 2^10 = ' + fastPow(2, 10));

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

console.log('2^10 mod 1000 = ' + modPow(2, 10, 1000));`,
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
    fmt.Printf("2^10 = %.0f\n", result)

    // Fast exponentiation
    fast := fastPow(2, 10)
    fmt.Printf("Fast: 2^10 = %d\n", fast)

    // Modular exponentiation
    mod := modPow(2, 10, 1000)
    fmt.Printf("2^10 mod 1000 = %d\n", mod)
}`,
    },
  };

  const tabs = [
    { id: "logarithms", name: "Logarithms", icon: <BarChart3 size={18} /> },
    { id: "exponents", name: "Exponents", icon: <Zap size={18} /> },
  ];

  return (
    <PerspectiveCard color="blue">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
          <Calculator size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">Mathematics for DSA</h2>
      </div>

      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        Essential mathematical concepts that form the foundation of algorithm analysis and complex problem-solving strategies.
      </p>

      {/* Key Concepts Grid - Glassmorphism style */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[ 
          { title: "Logarithms", icon: <BarChart3 className="text-blue-400" />, items: ["log_b(x) = y means b^y = x", "Common in divide & conquer", "Example: log2(1024) = 10"], color: "blue" },
          { title: "Exponents", icon: <Zap className="text-purple-400" />, items: ["a^n = a multiplied n times", "Properties: a^m * a^n = a^(m+n)", "O(log n) fast exponentiation"], color: "purple" },
          { title: "Combinatorics", icon: <Hash className="text-emerald-400" />, items: ["P(n,r) = n!/(n-r)!", "C(n,r) = n!/[r!(n-r)!]", "Choice and probability logic"], color: "emerald" },
          { title: "Sets & Logic", icon: <Sigma className="text-orange-400" />, items: ["Distinct element collections", "Union, Intersect, Difference", "Basis for Graph & Hashing"], color: "orange" }
        ].map((concept, i) => (
          <div key={i} className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:border-white/10 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                {concept.icon}
              </div>
              <h3 className="text-xl font-black text-white">{concept.title}</h3>
            </div>
            <ul className="space-y-2">
              {concept.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs font-bold text-slate-400">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${concept.color}-500 mt-1`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interactive Code Lab */}
      <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h3 className="text-2xl font-black text-white flex items-center gap-3">
            <Code2 className="text-blue-400" /> Math in Implementation
          </h3>
          
          <div className="flex p-1 bg-slate-900 rounded-xl border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                    ? "bg-white text-black shadow-lg"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>
        </div>

        <CodeImplementation languages={codeExamples[activeTab]} color="blue" />
      </div>

      <div className="mt-12 p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem]">
        <h3 className="text-xl font-black text-emerald-400 mb-4 flex items-center gap-3">
          <CheckCircle2 size={24} /> Key Takeaways
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[ "Logarithms power O(log n) divide & conquer algos", "Fast exponentiation optimizes O(n) to O(log n)", "Combinatorics handles counting and probability", "Sets form the basis for Graphs and Hash Tables"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {item}
            </li>
          ))}
        </ul>
        {/* Next Topic Transition */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-widest text-[10px]">
            <div className="w-8 h-px bg-emerald-500/20" />
            Coming Up Next: Time & Space Complexity
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
