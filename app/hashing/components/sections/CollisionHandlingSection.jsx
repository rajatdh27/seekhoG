"use client";
import { motion } from "framer-motion";

export default function CollisionHandlingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
          <span className="text-4xl">💥</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Collision Handling
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Resolve conflicts when multiple keys hash to the same index
          </p>
        </div>
      </div>

      {/* What is a Collision */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-l-4 border-orange-600">
          <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
            💥 What is a Collision?
          </h3>
          <p className="text-lg text-orange-900 dark:text-orange-100 mb-4">
            When two different keys produce the same hash value: <strong>hash(k1) = hash(k2)</strong>
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg font-mono text-sm">
            <p>hash("apple") = 5</p>
            <p>hash("banana") = 5  ← Collision!</p>
            <p className="mt-2 text-orange-700 dark:text-orange-400">
              Both keys want index 5 in the hash table
            </p>
          </div>
        </div>
      </div>

      {/* Method 1: Chaining (Separate Chaining) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mb-6">
          🔗 Method 1: Chaining (Separate Chaining)
        </h3>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 mb-6">
          <p className="text-lg text-orange-900 dark:text-orange-100 mb-4">
            Store all keys with same hash in a <strong>linked list</strong> (or dynamic array) at that index.
          </p>
          <div className="space-y-2 text-sm">
            <div>✓ Each bucket is a linked list</div>
            <div>✓ Can store unlimited items (no fixed size)</div>
            <div>✓ Average O(1) if load factor is low</div>
            <div>✗ Extra memory for pointers</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`class HashTableChaining {
    constructor(size = 10) {
        this.table = new Array(size).fill(null).map(() => []);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Check if key exists, update if found
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // Key doesn't exist, add new entry
        bucket.push([key, value]);
    }

    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null; // Not found
    }

    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

// Average Time: O(1) if load factor α = n/m < 1
// Worst Case: O(n) if all keys hash to same bucket
// Space: O(n + m) where n = keys, m = table size`}</code>
          </pre>
        </div>

        {/* Visual Example */}
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
            📊 Visual Example:
          </h4>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">Index 0:</span>
              <span>[]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">Index 1:</span>
              <span>["cat", 10] → ["dog", 20]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">Index 2:</span>
              <span>["apple", 5]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">Index 3:</span>
              <span>[]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">Index 4:</span>
              <span>["banana", 15] → ["grape", 8] → ["mango", 12]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Method 2: Open Addressing */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6">
          🎯 Method 2: Open Addressing
        </h3>
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 mb-6">
          <p className="text-lg text-red-900 dark:text-red-100 mb-4">
            Store all keys <strong>directly in the array</strong>. If collision, probe for next empty slot.
          </p>
          <div className="space-y-2 text-sm">
            <div>✓ No extra memory for pointers</div>
            <div>✓ Better cache performance (contiguous memory)</div>
            <div>✗ Table can fill up (need resizing)</div>
            <div>✗ Deletion is tricky (need tombstones)</div>
          </div>
        </div>

        {/* Linear Probing */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">
            1️⃣ Linear Probing
          </h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 mb-4">
            <p className="text-lg text-red-900 dark:text-red-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key, i) = (hash(key) + i) % table_size</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              If slot is full, try next slot (i = 1, 2, 3, ...). Simple but causes <strong>clustering</strong>.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`class HashTableLinearProbing {
    constructor(size = 10) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        let index = this.hash(key);
        let i = 0;

        // Linear probing: try next slots
        while (this.table[index] !== null && this.table[index][0] !== key) {
            i++;
            index = (this.hash(key) + i) % this.size;

            if (i === this.size) {
                throw new Error("Hash table is full");
            }
        }

        this.table[index] = [key, value];
    }

    search(key) {
        let index = this.hash(key);
        let i = 0;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            i++;
            index = (this.hash(key) + i) % this.size;

            if (i === this.size) break;
        }
        return null;
    }
}

// Average Time: O(1 / (1 - α)) where α = load factor
// Issue: Primary clustering - consecutive occupied slots`}</code>
            </pre>
          </div>
        </div>

        {/* Quadratic Probing */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-4">
            2️⃣ Quadratic Probing
          </h4>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-4">
            <p className="text-lg text-pink-900 dark:text-pink-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key, i) = (hash(key) + c₁*i + c₂*i²) % table_size</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Jump by quadratic increments (1, 4, 9, 16, ...). Reduces clustering better than linear.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function quadraticProbing(key, i, tableSize) {
    // Common: c1 = 1, c2 = 1
    return (hash(key) + i + i * i) % tableSize;
}

// Probing sequence for key with hash 5 (table size 10):
// i=0: (5 + 0 + 0) % 10 = 5
// i=1: (5 + 1 + 1) % 10 = 7
// i=2: (5 + 2 + 4) % 10 = 1
// i=3: (5 + 3 + 9) % 10 = 7 (may revisit slots)

// Reduces primary clustering
// Still has secondary clustering`}</code>
            </pre>
          </div>
        </div>

        {/* Double Hashing */}
        <div>
          <h4 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">
            3️⃣ Double Hashing
          </h4>
          <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800 mb-4">
            <p className="text-lg text-violet-900 dark:text-violet-100 mb-3">
              <strong>Formula:</strong> <code className="font-mono">h(key, i) = (h₁(key) + i * h₂(key)) % table_size</code>
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Use second hash function for step size. Best open addressing method - no clustering!
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function doubleHashing(key, i, tableSize) {
    const h1 = hash1(key) % tableSize;
    const h2 = 1 + (hash2(key) % (tableSize - 1)); // h2 must be non-zero
    return (h1 + i * h2) % tableSize;
}

// Example: tableSize = 10, key hashes to 5
// h1(key) = 5
// h2(key) = 3 (step size)
// i=0: (5 + 0*3) % 10 = 5
// i=1: (5 + 1*3) % 10 = 8
// i=2: (5 + 2*3) % 10 = 1
// i=3: (5 + 3*3) % 10 = 4

// No clustering!
// h2 must be relatively prime to table_size`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Chaining vs Open Addressing
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 text-lg">
              🔗 Chaining
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Simple to implement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Never fills up (dynamic)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Easy deletion</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Works well with high load factor</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Extra memory for pointers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Poor cache locality</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 text-lg">
              🎯 Open Addressing
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>No extra memory (compact)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Better cache performance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Simple data structure</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Table can fill up</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Deletion needs tombstones</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Performance degrades with load</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
