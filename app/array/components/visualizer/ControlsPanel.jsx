"use client";
import { useState } from "react";

export default function ControlsPanel({
  onInsert, onDelete, onRotate, onReverse, onTwoPointers, onSlidingWindow, onPrefixSum,
  onRandomize, onReset, clearLog, isRunning
}) {
  const [val, setVal] = useState(0);
  const [idx, setIdx] = useState(0);
  const [k, setK] = useState(1);

  const operations = [
    {
      category: "Basic Operations",
      icon: "➕",
      color: "blue",
      items: [
        {
          label: "Insert",
          icon: "➕",
          onClick: () => onInsert(Number(idx), Number(val)),
          color: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        },
        {
          label: "Delete",
          icon: "🗑️",
          onClick: () => onDelete(Number(idx)),
          color: "from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700"
        },
        {
          label: "Rotate Left",
          icon: "🔄",
          onClick: () => onRotate(Number(k)),
          color: "from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
        },
        {
          label: "Reverse",
          icon: "↔️",
          onClick: () => onReverse(),
          color: "from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
        }
      ]
    },
    {
      category: "Advanced Algorithms",
      icon: "🎯",
      color: "purple",
      items: [
        {
          label: "Two Pointers",
          icon: "👉👈",
          onClick: () => onTwoPointers(),
          color: "from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"
        },
        {
          label: "Sliding Window",
          icon: "🪟",
          onClick: () => onSlidingWindow(Number(k)),
          color: "from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700"
        },
        {
          label: "Prefix Sum",
          icon: "➕",
          onClick: () => onPrefixSum(),
          color: "from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-full overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎮</span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Controls</h3>
      </div>

      {/* Input Fields */}
      <div className="space-y-3 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 block">
              Value
            </label>
            <input
              type="number"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              disabled={isRunning}
              placeholder="0"
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 block">
              Index
            </label>
            <input
              type="number"
              value={idx}
              onChange={(e) => setIdx(e.target.value)}
              disabled={isRunning}
              placeholder="0"
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 block">
            Window Size (k)
          </label>
          <input
            type="number"
            value={k}
            onChange={(e) => setK(e.target.value)}
            disabled={isRunning}
            placeholder="1"
            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Operation Categories */}
      <div className="space-y-6">
        {operations.map((category, catIdx) => (
          <div key={catIdx}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{category.icon}</span>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {category.category}
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {category.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  onClick={item.onClick}
                  disabled={isRunning}
                  className={`
                    px-4 py-2.5 rounded-lg font-medium text-white
                    bg-gradient-to-r ${item.color}
                    shadow-md hover:shadow-lg
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                    transition-all duration-200
                    flex items-center justify-center gap-2
                    ${category.items.length === itemIdx + 1 && category.items.length % 2 !== 0 ? 'col-span-2' : ''}
                  `}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Utility Buttons */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={clearLog}
          disabled={isRunning}
          className="w-full px-4 py-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 dark:text-slate-100 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
        >
          🧹 Clear Log
        </button>
      </div>
    </div>
  );
}
