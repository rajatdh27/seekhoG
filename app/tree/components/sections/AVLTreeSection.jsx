"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AVLTreeSection() {
  const [currentRotation, setCurrentRotation] = useState("ll");

  const rotations = {
    ll: { name: "Left-Left (LL) Rotation", desc: "Right rotate once" },
    rr: { name: "Right-Right (RR) Rotation", desc: "Left rotate once" },
    lr: { name: "Left-Right (LR) Rotation", desc: "Left rotate child, then right rotate parent" },
    rl: { name: "Right-Left (RL) Rotation", desc: "Right rotate child, then left rotate parent" },
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
          <span className="text-4xl">⚖️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            AVL Trees
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Self-balancing Binary Search Tree
          </p>
        </div>
      </div>

      {/* AVL Property */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-amber-600">
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            🎯 Balance Factor
          </h3>
          <p className="text-lg text-amber-900 dark:text-amber-100 mb-4">
            For every node: <strong>|height(left) - height(right)| ≤ 1</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">-1</div>
              <div className="text-sm text-amber-800 dark:text-amber-200">Right Heavy (OK)</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-sm text-amber-800 dark:text-amber-200">Perfectly Balanced</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+1</div>
              <div className="text-sm text-amber-800 dark:text-amber-200">Left Heavy (OK)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotation Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Rotation Types
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {Object.keys(rotations).map((type) => (
            <button
              key={type}
              onClick={() => setCurrentRotation(type)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentRotation === type
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              {rotations[type].name}
            </button>
          ))}
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl">
          <p className="text-center text-lg font-semibold text-amber-900 dark:text-amber-100">
            {rotations[currentRotation].desc}
          </p>
        </div>
      </div>

      {/* Time Complexity */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time Complexity
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { op: "Search", time: "O(log n)" },
            { op: "Insert", time: "O(log n)" },
            { op: "Delete", time: "O(log n)" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 text-center"
            >
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.op}
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {item.time}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300 mt-2">
                Guaranteed!
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⭐ Why Use AVL Trees?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 text-lg">
              ✅ Advantages
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Guaranteed O(log n) for all operations</li>
              <li>• Faster search than insertion-heavy trees</li>
              <li>• Good for lookup-intensive applications</li>
              <li>• Strict balance ensures predictable performance</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 text-lg">
              ⚠️ Disadvantages
            </h4>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200">
              <li>• Extra space for storing height/balance factor</li>
              <li>• More rotations on insertion (compared to Red-Black trees)</li>
              <li>• Complex implementation</li>
              <li>• Not ideal for frequent insertions/deletions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
