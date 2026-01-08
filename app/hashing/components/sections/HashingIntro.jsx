"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HashingIntro() {
  const [inputValue, setInputValue] = useState("hello");
  const [hashResult, setHashResult] = useState(null);

  const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i) * (i + 1)) % 10;
    }
    return hash;
  };

  const handleHash = () => {
    const result = simpleHash(inputValue);
    setHashResult(result);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🔐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Introduction to Hashing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Convert data into fixed-size values for ultra-fast lookups
          </p>
        </div>
      </div>

      {/* What is Hashing */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            🎯 What is Hashing?
          </h3>
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            A technique that converts data (keys) into a fixed-size integer (hash code) using a <strong>hash function</strong>.
            This hash code is used as an index in an array (hash table) for O(1) average-case operations.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Key Idea:</strong> hash_function(key) → index in array → O(1) access
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Hash Demo */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎬 Interactive Hash Function Demo
        </h3>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl">
          <div className="max-w-2xl mx-auto">
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Enter a string to hash:
            </label>
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type anything..."
              />
              <button
                onClick={handleHash}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Hash It!
              </button>
            </div>

            {hashResult !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Hash Value (index 0-9):
                  </p>
                  <p className="text-5xl font-bold text-indigo-700 dark:text-indigo-400">
                    {hashResult}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
                    "{inputValue}" maps to index {hashResult} in hash table
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Key Terminology */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📚 Key Terminology
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              term: "Hash Function",
              definition: "Function that maps data to fixed-size values (hash codes)",
              example: "hash('hello') → 42",
            },
            {
              term: "Hash Table",
              definition: "Data structure using hash function to store key-value pairs",
              example: "Array indexed by hash codes",
            },
            {
              term: "Hash Code",
              definition: "Integer result from hash function, used as array index",
              example: "hash('apple') → 7",
            },
            {
              term: "Collision",
              definition: "When two different keys produce the same hash code",
              example: "hash('cat') = hash('dog') = 5",
            },
            {
              term: "Load Factor",
              definition: "Ratio of filled slots to total slots (n/capacity)",
              example: "10 items / 20 slots = 0.5",
            },
            {
              term: "Bucket",
              definition: "Single slot in hash table (may store multiple items)",
              example: "table[5] = [items with hash 5]",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 text-lg">
                {item.term}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                {item.definition}
              </p>
              <p className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                {item.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Use Hashing */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Why Use Hashing?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "O(1) Average Time",
              desc: "Search, insert, delete in constant time on average",
            },
            {
              icon: "🔍",
              title: "Fast Lookups",
              desc: "Check if element exists instantly without searching",
            },
            {
              icon: "🎯",
              title: "Direct Access",
              desc: "Jump directly to location using hash code as index",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center border border-indigo-200 dark:border-indigo-800"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real-World Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌍 Real-World Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              app: "Database Indexing",
              desc: "Fast record lookups using hash indexes",
              icon: "💾",
            },
            {
              app: "Caching",
              desc: "Store computed results with keys for quick retrieval",
              icon: "⚡",
            },
            {
              app: "Password Storage",
              desc: "Hash passwords before storing (SHA-256, bcrypt)",
              icon: "🔒",
            },
            {
              app: "Compiler Symbol Tables",
              desc: "Track variable names and their memory locations",
              icon: "🔧",
            },
            {
              app: "Cryptocurrency",
              desc: "Blockchain uses hash functions for security",
              icon: "💰",
            },
            {
              app: "File Integrity",
              desc: "Verify file hasn't been modified (checksums)",
              icon: "✅",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.app}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
