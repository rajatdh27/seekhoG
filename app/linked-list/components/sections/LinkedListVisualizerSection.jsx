"use client";

import { motion } from "framer-motion";

export default function LinkedListVisualizerSection() {
  return (
    <div id="visualizer" className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Interactive Linked List Visualizer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center py-12 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border-2 border-green-200 dark:border-green-800"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Visualizer Already Available!
        </h3>
        <p className="text-slate-700 dark:text-slate-300 max-w-md mx-auto mb-6">
          A fully interactive linked list visualizer with animated insert, delete, and traversal operations
          is already available in the Introduction section.
        </p>

        <a
          href="#intro"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
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

        <div className="mt-8 grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Feature
            icon="⬅️"
            title="Insert Head"
            description="Add at beginning"
          />
          <Feature
            icon="➡️"
            title="Insert Tail"
            description="Add at end"
          />
          <Feature
            icon="❌"
            title="Delete Head"
            description="Remove first node"
          />
          <Feature
            icon="🗑️"
            title="Delete Tail"
            description="Remove last node"
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
            <span><strong>Live Animations:</strong> Watch nodes being inserted and deleted in real-time</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Pointer Visualization:</strong> See next pointers connecting nodes</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Color-Coded:</strong> Green/teal gradient showing node structure</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Interactive Controls:</strong> Insert at head/tail, delete from head/tail</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Hover Effects:</strong> Highlights individual nodes and shows data/pointer details</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Head Indicator:</strong> Clear visual marker showing the head of the list</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Responsive Design:</strong> Works perfectly on desktop, tablet, and mobile</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
            <span><strong>Dark Mode Support:</strong> Seamless experience in both light and dark themes</span>
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
            <span><strong>Node Structure:</strong> Understand how nodes contain data and next pointer references</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </span>
            <span><strong>Pointer Mechanics:</strong> See how changing next pointers restructures the entire list</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </span>
            <span><strong>Head Tracking:</strong> Learn why maintaining head reference is crucial for list access</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              4
            </span>
            <span><strong>Operation Complexity:</strong> Insert/delete at head is O(1), at tail is O(n) without tail pointer</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              5
            </span>
            <span><strong>Memory Layout:</strong> Unlike arrays, nodes are not stored contiguously in memory</span>
          </div>
        </div>
      </motion.div>

      {/* Operations Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-200">
          Try These Operations:
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <OperationCard
            title="Insert at Head"
            steps={[
              "Creates a new node with incremented value",
              "Sets new node's next to current head",
              "Updates head to point to new node",
              "Time Complexity: O(1)",
            ]}
          />
          <OperationCard
            title="Insert at Tail"
            steps={[
              "Creates a new node with incremented value",
              "Traverses to the last node",
              "Sets last node's next to new node",
              "Time Complexity: O(n) - needs traversal",
            ]}
          />
          <OperationCard
            title="Delete Head"
            steps={[
              "Saves reference to current head's next",
              "Updates head to head.next",
              "First node is now unreferenced",
              "Time Complexity: O(1)",
            ]}
          />
          <OperationCard
            title="Delete Tail"
            steps={[
              "Traverses to second-to-last node",
              "Sets its next pointer to null",
              "Last node is now unreferenced",
              "Time Complexity: O(n) - needs traversal",
            ]}
          />
        </div>
      </motion.div>

      {/* Visual Learning Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-200">
          Visual Learning Tips:
        </h3>
        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">💡</span>
            <span><strong>Hover over nodes</strong> to see detailed information about their data and next pointer</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">💡</span>
            <span><strong>Watch the animations</strong> to understand how pointers are updated during operations</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">💡</span>
            <span><strong>Notice the HEAD marker</strong> - it always points to the first node in the list</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">💡</span>
            <span><strong>Observe the arrows</strong> between nodes - they represent the next pointer connections</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">💡</span>
            <span><strong>Compare head vs tail operations</strong> - notice the time complexity difference</span>
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
      className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-200 dark:border-green-700"
    >
      <div className="text-3xl mb-2 text-center">{icon}</div>
      <div className="text-center">
        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm">
          {title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function OperationCard({ title, steps }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
        {title}
      </h4>
      <ul className="space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
            <span className="text-purple-600 dark:text-purple-400 mt-0.5">▸</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
