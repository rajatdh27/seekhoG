"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StackVisualizerSection() {
  return (
    <div id="visualizer" className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Interactive Stack Visualizer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Visualizer Already Available!
        </h3>
        <p className="text-slate-700 dark:text-slate-300 max-w-md mx-auto mb-6">
          A fully interactive stack visualizer with animated push, pop, and peek operations
          is already available in the Introduction section.
        </p>

        <a
          href="#intro"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          <span>Go to Interactive Demo</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Feature
            icon="⬇️"
            title="Push"
            description="Add elements to top"
          />
          <Feature
            icon="⬆️"
            title="Pop"
            description="Remove from top"
          />
          <Feature
            icon="👁️"
            title="Peek"
            description="View top element"
          />
        </div>
      </motion.div>

      {/* Features List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          Visualizer Features:
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Live Animations:</strong> Watch elements being pushed and popped in real-time</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Color-Coded:</strong> Purple/pink gradient showing LIFO structure</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Interactive Controls:</strong> Push, pop, peek, and clear operations</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Visual Feedback:</strong> Highlights top element and shows size</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Example Operations:</strong> Pre-loaded examples to demonstrate behavior</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Responsive Design:</strong> Works perfectly on all screen sizes</span>
          </div>
        </div>
      </motion.div>

      {/* What You Can Learn */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-200">
          What You'll Learn:
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              1
            </span>
            <span><strong>LIFO Principle:</strong> See how Last-In-First-Out works visually</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </span>
            <span><strong>Stack Operations:</strong> Understand push, pop, and peek through animation</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </span>
            <span><strong>Time Complexity:</strong> All operations happen in O(1) constant time</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              4
            </span>
            <span><strong>Stack Overflow:</strong> Understand how stacks fill up and what happens at limits</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700"
    >
      <div className="text-3xl mb-2 text-center">{icon}</div>
      <div className="text-center">
        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
          {title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
