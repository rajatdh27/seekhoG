"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ArrayIntro() {
  const [hoveredBox, setHoveredBox] = useState(null);

  const demoArray = [10, 20, 30, 40, 50];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        What is an Array?
      </motion.h2>

      <div className="space-y-8">
        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            An <strong>array</strong> is a fundamental data structure that stores a{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              fixed-size collection of elements
            </span>{" "}
            of the same type in{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              contiguous memory locations
            </span>
            . Each element can be accessed directly using an index.
          </p>
        </motion.div>

        {/* Visual Demonstration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Array Visualization
          </h3>

          {/* Array Boxes */}
          <div className="flex justify-center gap-2 mb-8">
            {demoArray.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredBox(index)}
                onHoverEnd={() => setHoveredBox(null)}
                className="relative"
              >
                {/* Index Label */}
                <motion.div
                  animate={{
                    scale: hoveredBox === index ? 1.1 : 1,
                    y: hoveredBox === index ? -5 : 0,
                  }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-mono text-slate-600 dark:text-slate-400"
                >
                  [{index}]
                </motion.div>

                {/* Array Box */}
                <motion.div
                  animate={{
                    scale: hoveredBox === index ? 1.05 : 1,
                    boxShadow:
                      hoveredBox === index
                        ? "0 10px 30px rgba(59, 130, 246, 0.4)"
                        : "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  className={`w-20 h-20 flex items-center justify-center rounded-lg border-2 font-mono text-xl font-bold cursor-pointer transition-colors ${
                    hoveredBox === index
                      ? "bg-blue-600 border-blue-700 text-white"
                      : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                  }`}
                >
                  {value}
                </motion.div>

                {/* Memory Address (simulated) */}
                <motion.div
                  animate={{
                    opacity: hoveredBox === index ? 1 : 0.5,
                    y: hoveredBox === index ? 5 : 0,
                  }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-slate-500 dark:text-slate-500"
                >
                  0x{(1000 + index * 4).toString(16).toUpperCase()}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Hover Info */}
          <motion.div
            animate={{ opacity: hoveredBox !== null ? 1 : 0 }}
            className="text-center min-h-[60px] flex items-center justify-center"
          >
            {hoveredBox !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Index {hoveredBox}:</strong> Value = {demoArray[hoveredBox]} |
                  Memory = 0x{(1000 + hoveredBox * 4).toString(16).toUpperCase()}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Key Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <FeatureCard
            icon="⚡"
            title="O(1) Random Access"
            description="Access any element instantly using its index"
            color="blue"
          />
          <FeatureCard
            icon="📦"
            title="Contiguous Memory"
            description="Elements stored in adjacent memory locations"
            color="indigo"
          />
          <FeatureCard
            icon="📏"
            title="Fixed Size"
            description="Size determined at creation (in most languages)"
            color="purple"
          />
          <FeatureCard
            icon="🔢"
            title="Same Data Type"
            description="All elements must be of the same type"
            color="pink"
          />
        </motion.div>

        {/* Real-World Analogies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🌟</span> Real-World Analogies
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
              <span>
                <strong>Apartment Building:</strong> Each apartment has a unique number
                (index) and you can directly go to any apartment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
              <span>
                <strong>Train Compartments:</strong> Numbered sequentially, all connected
                in a line
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
              <span>
                <strong>Egg Carton:</strong> Fixed number of slots, each holds exactly one
                egg
              </span>
            </li>
          </ul>
        </motion.div>

        {/* When to Use / Avoid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Use Arrays When:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• You need fast random access (O(1))</li>
              <li>• You know the size in advance</li>
              <li>• Memory efficiency is important</li>
              <li>• You need to iterate sequentially</li>
              <li>• Cache locality is beneficial</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>❌</span> Avoid Arrays When:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Frequent insertions/deletions needed</li>
              <li>• Size changes dynamically</li>
              <li>• You need fast search (use hash table)</li>
              <li>• You need sorted order with updates</li>
              <li>• Memory is very limited and sparse</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    indigo:
      "from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 border-indigo-200 dark:border-indigo-800",
    purple:
      "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200 dark:border-purple-800",
    pink: "from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 border-pink-200 dark:border-pink-800",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-5`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </motion.div>
  );
}
