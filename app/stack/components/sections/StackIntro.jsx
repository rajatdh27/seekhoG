"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StackIntro() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [stackDemo, setStackDemo] = useState([10, 20, 30]);

  const pushDemo = () => {
    if (stackDemo.length < 6) {
      setStackDemo([...stackDemo, (stackDemo[stackDemo.length - 1] || 0) + 10]);
    }
  };

  const popDemo = () => {
    if (stackDemo.length > 0) {
      setStackDemo(stackDemo.slice(0, -1));
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        What is a Stack?
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
            A <strong>stack</strong> is a linear data structure that follows the{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              LIFO (Last In, First Out)
            </span>{" "}
            principle. The last element added to the stack will be the first one to be removed, like a{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              stack of plates
            </span>{" "}
            where you can only add or remove from the top.
          </p>
        </motion.div>

        {/* Interactive Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Stack Visualization (LIFO)
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Stack Display - Vertical */}
            <div className="flex flex-col-reverse items-center gap-2 min-h-[400px] justify-start">
              {stackDemo.map((value, index) => (
                <motion.div
                  key={`${value}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredBox(index)}
                  onHoverEnd={() => setHoveredBox(null)}
                  className="relative"
                >
                  {/* Stack Element */}
                  <motion.div
                    animate={{
                      scale: hoveredBox === index ? 1.05 : 1,
                      boxShadow:
                        hoveredBox === index
                          ? "0 10px 30px rgba(168, 85, 247, 0.4)"
                          : index === stackDemo.length - 1
                          ? "0 8px 20px rgba(168, 85, 247, 0.3)"
                          : "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    className={`w-48 h-16 flex items-center justify-center rounded-lg border-2 font-mono text-xl font-bold cursor-pointer transition-colors ${
                      index === stackDemo.length - 1
                        ? "bg-purple-600 border-purple-700 text-white"
                        : hoveredBox === index
                        ? "bg-purple-500 border-purple-600 text-white"
                        : "bg-white dark:bg-slate-800 border-purple-300 dark:border-purple-600 text-slate-900 dark:text-slate-100"
                    }`}
                  >
                    {value}
                    {index === stackDemo.length - 1 && (
                      <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">TOP</span>
                    )}
                  </motion.div>

                  {/* Index Label */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-slate-600 dark:text-slate-400">
                    [{index}]
                  </div>
                </motion.div>
              ))}

              {stackDemo.length === 0 && (
                <div className="text-slate-400 dark:text-slate-500 text-center py-8">
                  Stack is empty
                </div>
              )}

              {/* Base */}
              <div className="w-56 h-3 bg-slate-300 dark:bg-slate-600 rounded-b-lg"></div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
              <button
                onClick={pushDemo}
                disabled={stackDemo.length >= 6}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span className="text-2xl">⬆️</span>
                <div className="text-left">
                  <div>PUSH</div>
                  <div className="text-xs opacity-80">Add to top</div>
                </div>
              </button>

              <button
                onClick={popDemo}
                disabled={stackDemo.length === 0}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span className="text-2xl">⬇️</span>
                <div className="text-left">
                  <div>POP</div>
                  <div className="text-xs opacity-80">Remove from top</div>
                </div>
              </button>

              <div className="mt-4 bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">{stackDemo.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top:</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      {stackDemo.length > 0 ? stackDemo[stackDemo.length - 1] : "null"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empty:</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      {stackDemo.length === 0 ? "true" : "false"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LIFO Explanation */}
          <div className="mt-6 bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-purple-900 dark:text-purple-200">LIFO Principle:</strong>{" "}
              The element at the TOP is the most recently added and will be the first to be removed.
              You cannot access elements in the middle - only the top element is accessible!
            </p>
          </div>
        </motion.div>

        {/* Key Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <FeatureCard
            icon="⬆️"
            title="Push - O(1)"
            description="Add element to the top of stack"
            color="green"
          />
          <FeatureCard
            icon="⬇️"
            title="Pop - O(1)"
            description="Remove and return top element"
            color="red"
          />
          <FeatureCard
            icon="👁️"
            title="Peek/Top - O(1)"
            description="View top element without removing"
            color="blue"
          />
          <FeatureCard
            icon="❓"
            title="isEmpty - O(1)"
            description="Check if stack has no elements"
            color="purple"
          />
        </motion.div>

        {/* Stack Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>📦</span> Types of Stacks
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <StackTypeCard
              title="Fixed Size Stack (Array-based)"
              description="Stack with maximum capacity"
              example="Stack<int> stack(100); // Max 100 elements"
              uses="Embedded systems, limited memory"
              pros="• Fast O(1) operations • Cache-friendly • No memory overhead"
              cons="• Fixed capacity • Stack overflow possible • Wasted space if underutilized"
            />
            <StackTypeCard
              title="Dynamic Stack (Resizable)"
              description="Grows as needed (like vector/ArrayList)"
              example="std::stack<int> stack; // Grows automatically"
              uses="General purpose, unknown size"
              pros="• No size limit • Flexible capacity • Easy to use"
              cons="• Occasional O(n) resize • Slight memory overhead • May waste some space"
            />
            <StackTypeCard
              title="Linked Stack"
              description="Stack using linked list nodes"
              example="Each node points to next, top points to head"
              uses="When size varies significantly"
              pros="• True dynamic size • No resize overhead • No wasted space"
              cons="• Extra memory per node (pointer) • Not cache-friendly • Slightly slower"
            />
            <StackTypeCard
              title="Min/Max Stack"
              description="Stack that tracks minimum/maximum"
              example="Each push also updates min/max tracker"
              uses="Stock span, histogram problems"
              pros="• O(1) getMin/getMax • All stack operations O(1) • Useful in interviews"
              cons="• Extra space for min/max tracking • More complex implementation"
            />
          </div>
        </motion.div>

        {/* Real-World Analogies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🌟</span> Real-World Analogies
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🍽️</span>
              <span>
                <strong>Stack of Plates:</strong> You add plates on top and remove from top. Cannot take middle plate!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">📚</span>
              <span>
                <strong>Stack of Books:</strong> Add new books on top, remove from top
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">↩️</span>
              <span>
                <strong>Undo/Redo:</strong> Most recent action is undone first (Ctrl+Z)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">🔙</span>
              <span>
                <strong>Browser Back Button:</strong> Go back to most recent page first
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 mt-1 text-xl">📞</span>
              <span>
                <strong>Function Call Stack:</strong> Most recently called function returns first
              </span>
            </li>
          </ul>
        </motion.div>

        {/* When to Use / Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Use Stacks When:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• You need LIFO ordering</li>
              <li>• Reversing sequences</li>
              <li>• Backtracking (DFS, parentheses matching)</li>
              <li>• Function call management</li>
              <li>• Expression evaluation/conversion</li>
              <li>• Undo/Redo functionality</li>
              <li>• Monotonic stack problems</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>❌</span> Challenges with Stacks:
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Cannot access middle elements</li>
              <li>• No random access (only top)</li>
              <li>• Fixed size can cause overflow (array-based)</li>
              <li>• Sequential access only (LIFO)</li>
              <li>• Not suitable for searching</li>
              <li>• Cannot iterate without popping</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  const colorClasses = {
    green: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200 dark:border-blue-800",
    purple: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200 dark:border-purple-800",
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

function StackTypeCard({ title, description, example, uses, pros, cons }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      className="bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 rounded-lg p-4"
    >
      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">{title}</h4>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
      <div className="bg-slate-50 dark:bg-slate-700 rounded p-2 mb-2">
        <code className="text-xs font-mono text-purple-600 dark:text-purple-400">{example}</code>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
        <strong>Uses:</strong> {uses}
      </p>
      <div className="text-xs space-y-1">
        <div className="text-green-600 dark:text-green-400">{pros}</div>
        <div className="text-red-600 dark:text-red-400">{cons}</div>
      </div>
    </motion.div>
  );
}
