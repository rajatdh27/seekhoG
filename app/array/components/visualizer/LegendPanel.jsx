"use client";

export default function LegendPanel() {
  const legends = [
    {
      color: "bg-gradient-to-br from-yellow-400 to-amber-500",
      label: "Current Pointer",
      description: "Active element being processed"
    },
    {
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      label: "Window",
      description: "Sliding window range"
    },
    {
      color: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      label: "Pair",
      description: "Two pointer pair/match"
    }
  ];

  return (
    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🎨</span>
        <h4 className="font-semibold text-blue-900 dark:text-blue-200">Color Guide</h4>
      </div>

      {/* Legend Items */}
      <div className="space-y-2">
        {legends.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${item.color} shadow-md flex-shrink-0 border-2 border-white dark:border-slate-900`}></div>
            <div>
              <div className="font-medium text-sm text-slate-900 dark:text-slate-100">
                {item.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
        <div className="text-xs text-blue-800 dark:text-blue-300 space-y-1">
          <div className="flex items-start gap-2">
            <span className="text-sm">💡</span>
            <span>Hover over array boxes to see details</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sm">⚡</span>
            <span>Watch animations to understand operations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
