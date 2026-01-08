"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ActionLog({ log }) {
  const logContainerRef = useRef(null);

  // Auto-scroll WITHIN the log container only (not the whole page)
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-full overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📜</span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Action Log</h3>
        {log.length > 0 && (
          <span className="ml-auto px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
            {log.length} {log.length === 1 ? 'action' : 'actions'}
          </span>
        )}
      </div>

      {/* Log Container */}
      <div ref={logContainerRef} className="bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-200 dark:border-slate-700 p-4 max-h-96 overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {log.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8"
            >
              <div className="text-4xl mb-2 opacity-50">📭</div>
              <div className="text-sm text-slate-400 dark:text-slate-500">
                No actions yet. Try an operation!
              </div>
            </motion.div>
          ) : (
            <div className="space-y-2">
              {log.map((l, i) => (
                <motion.div
                  key={`log-${i}-${log.length}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    duration: 0.2
                  }}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all group max-w-full"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>

                  {/* Action Text */}
                  <div className="flex-1 text-sm text-slate-700 dark:text-slate-300 font-mono break-all overflow-wrap-anywhere min-w-0">
                    {l}
                  </div>

                  {/* Timestamp (optional) */}
                  <div className="flex-shrink-0 text-xs text-slate-400 dark:text-slate-600">
                    {new Date().toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Stats Footer */}
      {log.length > 0 && (
        <div className="mt-4 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Live tracking</span>
          </div>
          <div>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
}
