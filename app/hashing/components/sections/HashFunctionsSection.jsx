"use client";
import { motion } from "framer-motion";

export default function HashFunctionsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">⚙️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Hash Functions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Convert keys into array indexes efficiently
          </p>
        </div>
      </div>

      {/* Properties of Good Hash Functions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          ✨ Properties of Good Hash Functions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              property: "Deterministic",
              desc: "Same input always produces same hash",
              example: "hash('apple') always = 42",
            },
            {
              property: "Uniform Distribution",
              desc: "Evenly distributes keys across table",
              example: "Minimizes clustering",
            },
            {
              property: "Fast Computation",
              desc: "Should compute quickly (O(1) or O(k))",
              example: "Simple arithmetic operations",
            },
            {
              property: "Minimize Collisions",
              desc: "Different keys should produce different hashes",
              example: "Reduces conflict",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-lg">
                {item.property}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                {item.desc}
              </p>
              <p className="text-xs font-mono text-purple-700 dark:text-purple-400 bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                {item.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Hash Functions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 Common Hash Functions
        </h3>

        {/* Division Method */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">
            1️⃣ Division Method (Modulo)
          </h4>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-4">
            <p className="text-lg text-purple-900 dark:text-purple-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key) = key % table_size</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Simple and fast. Choose table size as a prime number to reduce collisions.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function divisionHash(key, tableSize) {
    return key % tableSize;
}

// Example: tableSize = 11 (prime number)
divisionHash(25, 11);  // → 3
divisionHash(36, 11);  // → 3 (collision!)
divisionHash(47, 11);  // → 3 (collision!)

// Time: O(1)
// Best for: Integer keys`}</code>
            </pre>
          </div>
        </div>

        {/* Multiplication Method */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-4">
            2️⃣ Multiplication Method
          </h4>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-4">
            <p className="text-lg text-pink-900 dark:text-pink-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key) = floor(m * (key * A mod 1))</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Multiply key by constant A (0 &lt; A &lt; 1), extract fractional part, multiply by table size.
              Knuth suggests A ≈ 0.618... (golden ratio - 1).
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function multiplicationHash(key, tableSize) {
    const A = 0.6180339887; // (√5 - 1) / 2 (golden ratio)
    const fractionalPart = (key * A) % 1;
    return Math.floor(tableSize * fractionalPart);
}

// Example: tableSize = 100
multiplicationHash(123, 100);  // → 80
multiplicationHash(456, 100);  // → 18

// Time: O(1)
// Best for: Any table size (power of 2 works well)`}</code>
            </pre>
          </div>
        </div>

        {/* String Hashing */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
            3️⃣ String Hashing (Polynomial Rolling Hash)
          </h4>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-4">
            <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(s) = (s[0]*p^0 + s[1]*p^1 + ... + s[n-1]*p^(n-1)) mod m</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Commonly used for strings. Choose prime p (31, 37, etc.) and large prime m.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function stringHash(str, tableSize) {
    const p = 31; // Prime multiplier
    const m = 1e9 + 9; // Large prime modulo
    let hashValue = 0;
    let pPow = 1;

    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue + (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * pPow) % m;
        pPow = (pPow * p) % m;
    }

    return hashValue % tableSize;
}

// Example:
stringHash("hello", 100);  // → 85
stringHash("world", 100);  // → 42

// Time: O(n) where n = string length
// Space: O(1)`}</code>
            </pre>
          </div>
        </div>

        {/* Universal Hashing */}
        <div>
          <h4 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">
            4️⃣ Universal Hashing
          </h4>
          <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800 mb-4">
            <p className="text-lg text-violet-900 dark:text-violet-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key) = ((a * key + b) % p) % m</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Random selection of a and b from [1, p-1]. Guarantees low collision probability.
              Used in real implementations (Java, Python).
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function universalHash(key, tableSize, a, b, p) {
    // a and b are random from [1, p-1]
    // p is prime > tableSize
    return ((a * key + b) % p) % tableSize;
}

// Example: p = 101 (prime), tableSize = 10
const a = 7, b = 5; // Random choices
universalHash(25, 10, a, b, 101);  // → variable
universalHash(36, 10, a, b, 101);  // → variable

// Average collision probability: 1/m
// Time: O(1)`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Hash Function Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900/30">
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Method</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-center">Time</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-center">Collision Rate</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  method: "Division",
                  time: "O(1)",
                  collision: "Medium",
                  best: "Integer keys, prime table size",
                },
                {
                  method: "Multiplication",
                  time: "O(1)",
                  collision: "Low",
                  best: "Any key type, any table size",
                },
                {
                  method: "String Polynomial",
                  time: "O(n)",
                  collision: "Low",
                  best: "String keys, pattern matching",
                },
                {
                  method: "Universal",
                  time: "O(1)",
                  collision: "Very Low",
                  best: "Production systems, worst-case guarantees",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="border border-purple-300 dark:border-purple-700 p-4 font-bold">
                    {row.method}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-center font-mono text-sm">
                    {row.time}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-center">
                    {row.collision}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-sm">
                    {row.best}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
