"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";

export default function TutorialModal({ onClose }) {
  const features = [
    {
      icon: "➕",
      title: "Basic Operations",
      desc: "Insert, Delete, Rotate, and Reverse array elements",
      color: "blue"
    },
    {
      icon: "👉👈",
      title: "Two Pointers",
      desc: "Visualize pointer movements and comparisons",
      color: "green"
    },
    {
      icon: "🪟",
      title: "Sliding Window",
      desc: "See the window slide and track maximum values",
      color: "purple"
    },
    {
      icon: "➕",
      title: "Prefix Sum",
      desc: "Watch cumulative sum calculation in real-time",
      color: "orange"
    }
  ];

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          as={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto max-w-2xl rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        >
          <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            🎮 Interactive Array Visualizer
          </DialogTitle>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Learn array operations through interactive animations
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 flex items-center gap-2">
              <span>💡</span> How to Use:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">1.</span>
                <span><strong>Choose an operation</strong> from the control panel on the left</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">2.</span>
                <span><strong>Watch the animation</strong> showing how the operation works</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">3.</span>
                <span><strong>Check the action log</strong> below for step-by-step details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">4.</span>
                <span><strong>Use Randomize</strong> to generate new arrays or <strong>Reset</strong> to start over</span>
              </li>
            </ul>
          </div>

          {/* Color Legend */}
          <div className="flex items-center justify-center gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">Current Pointer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">Pair/Window</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">Active Window</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              Start Exploring! 🚀
            </button>
            <button
              onClick={() => {
                localStorage.setItem("seen-array-tutorial", "yes");
                onClose();
              }}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Don't show again
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
