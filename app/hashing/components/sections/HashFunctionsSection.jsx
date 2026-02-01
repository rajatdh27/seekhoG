"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Settings, 
  CheckCircle2, 
  Zap, 
  Hash, 
  ShieldCheck, 
  Divide, 
  X, 
  Type, 
  Globe 
} from "lucide-react";

export default function HashFunctionsSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const hashProperties = [
    { 
      title: "Deterministic", 
      description: "Same input always produces same hash.", 
      icon: CheckCircle2, 
      color: "emerald",
      footer: <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">hash('apple') → 42</span>
    },
    { 
      title: "Uniform", 
      description: "Evenly distributes keys across table.", 
      icon: Hash, 
      color: "blue",
      footer: <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Minimizes clustering</span>
    },
    { 
      title: "Efficient", 
      description: "Should compute quickly (O(1) or O(k)).", 
      icon: Zap, 
      color: "amber",
      footer: <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">Simple arithmetic</span>
    },
    { 
      title: "Minimize Collisions", 
      description: "Different keys produce different hashes.", 
      icon: X, 
      color: "rose",
      footer: <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">Reduces conflicts</span>
    }
  ];

  const divisionCode = {
    javascript: `function divisionHash(key, tableSize) {
    // tableSize should preferably be prime
    return key % tableSize;
}

// Example: tableSize = 11
// divisionHash(25, 11) -> 3
// divisionHash(36, 11) -> 3 (Collision!)`,
    python: `def division_hash(key, table_size):
    # table_size should preferably be prime
    return key % table_size

# Example: table_size = 11
# division_hash(25, 11) -> 3`,
    java: `public int divisionHash(int key, int tableSize) {
    // tableSize should preferably be prime
    return Math.abs(key) % tableSize;
}
// Note: Math.abs handles negative keys`,
    cpp: `int divisionHash(int key, int tableSize) {
    // tableSize should preferably be prime
    return std::abs(key) % tableSize;
}`,
    go: `func divisionHash(key int, tableSize int) int {
    // tableSize should preferably be prime
    if key < 0 {
        key = -key
    }
    return key % tableSize
}`
  };

  const multiplicationCode = {
    javascript: `function multiplicationHash(key, tableSize) {
    const A = 0.6180339887; // (√5 - 1) / 2 (Golden Ratio)
    const fractionalPart = (key * A) % 1;
    return Math.floor(tableSize * fractionalPart);
}`,
    python: `import math

def multiplication_hash(key, table_size):
    A = 0.6180339887 # (√5 - 1) / 2
    fractional_part = (key * A) % 1
    return math.floor(table_size * fractional_part)`,
    java: `public int multiplicationHash(int key, int tableSize) {
    double A = 0.6180339887;
    double fractionalPart = (key * A) % 1;
    return (int) (tableSize * fractionalPart);
}`,
    cpp: `int multiplicationHash(int key, int tableSize) {
    double A = 0.6180339887;
    double fractionalPart = fmod(key * A, 1.0);
    return (int)(tableSize * fractionalPart);
}`,
    go: `import "math"

func multiplicationHash(key int, tableSize int) int {
    A := 0.6180339887
    fractionalPart := math.Mod(float64(key)*A, 1.0)
    return int(float64(tableSize) * fractionalPart)
}`
  };

  const polynomialCode = {
    javascript: `function stringHash(str, tableSize) {
    const p = 31; 
    const m = 1e9 + 9; // Large prime
    let hashValue = 0;
    let pPow = 1;

    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue + (str.charCodeAt(i) - 96) * pPow) % m;
        pPow = (pPow * p) % m;
    }

    return hashValue % tableSize;
}`,
    python: `def string_hash(s, table_size):
    p = 31
    m = 10**9 + 9
    hash_value = 0
    p_pow = 1
    
    for char in s:
        # ord(char) - 96 gets 1-based index for lowercase
        hash_value = (hash_value + (ord(char) - 96) * p_pow) % m
        p_pow = (p_pow * p) % m
        
    return hash_value % table_size`,
    java: `public int stringHash(String str, int tableSize) {
    int p = 31;
    int m = 1000000009;
    long hashValue = 0;
    long pPow = 1;

    for (char c : str.toCharArray()) {
        hashValue = (hashValue + (c - 'a' + 1) * pPow) % m;
        pPow = (pPow * p) % m;
    }
    return (int) (hashValue % tableSize);
}`,
    cpp: `long long stringHash(string str, int tableSize) {
    const int p = 31;
    const int m = 1e9 + 9;
    long long hashValue = 0;
    long long pPow = 1;
    
    for (char c : str) {
        hashValue = (hashValue + (c - 'a' + 1) * pPow) % m;
        pPow = (pPow * p) % m;
    }
    return hashValue % tableSize;
}`,
    go: `func stringHash(str string, tableSize int) int {
    p := 31
    m := 1000000009
    hashValue := 0
    pPow := 1
    
    for _, c := range str {
        hashValue = (hashValue + (int(c) - 'a' + 1) * pPow) % m
        pPow = (pPow * p) % m
    }
    return hashValue % tableSize
}`
  };

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Hash Functions" 
        description="The magic that converts keys into indexes."
        icon={Settings} 
        color="purple" 
      />

      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <ShieldCheck size={24} className="text-purple-400" /> Good Hash Function Properties
        </h3>
        <ConceptGrid items={hashProperties} columns={2} />
      </div>

      {/* Common Hash Functions */}
      <div className="space-y-8 mb-12">
        <h3 className="text-2xl font-black text-white flex items-center gap-3">
          <Zap size={24} className="text-amber-400" /> Common Algorithms
        </h3>

        {/* Division Method */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Divide size={20} /></div>
            <h4 className="text-xl font-bold text-blue-400">Division Method (Modulo)</h4>
          </div>
          <p className="text-slate-300 mb-6 font-medium">
            Maps a key to one of <code className="text-blue-300">m</code> slots by taking the remainder of division.
            Best when table size <code className="text-blue-300">m</code> is a prime number.
          </p>
          <CodeImplementation 
            languages={divisionCode}
            color="blue"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Multiplication Method */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><X size={20} /></div>
            <h4 className="text-xl font-bold text-pink-400">Multiplication Method</h4>
          </div>
          <p className="text-slate-300 mb-6 font-medium">
            Multiplies key by a constant <code className="text-pink-300">A</code> (0 &lt; A &lt; 1), extracts the fractional part, 
            and multiplies by table size <code className="text-pink-300">m</code>.
          </p>
          <CodeImplementation 
            languages={multiplicationCode}
            color="pink"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* String Hashing */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Type size={20} /></div>
            <h4 className="text-xl font-bold text-emerald-400">Polynomial Rolling Hash</h4>
          </div>
          <p className="text-slate-300 mb-6 font-medium">
            Standard way to hash strings. Treats string as a number in base <code className="text-emerald-300">p</code> (usually 31 or 53).
          </p>
          <CodeImplementation 
            languages={polynomialCode}
            color="emerald"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <Globe size={24} className="text-purple-400" />
          <h3 className="text-lg font-black text-white">Method Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Collision Rate</th>
                <th className="px-6 py-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { method: "Division", time: "O(1)", rate: "Medium", best: "Integer keys" },
                { method: "Multiplication", time: "O(1)", rate: "Low", best: "General purpose" },
                { method: "Polynomial", time: "O(n)", rate: "Very Low", best: "Strings" },
                { method: "Universal", time: "O(1)", rate: "Minimal", best: "Security / Production" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-indigo-300">{row.method}</td>
                  <td className="px-6 py-4 font-mono text-emerald-400">{row.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${
                      row.rate === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {row.rate}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}