"use client";
import { useEffect, useState, useRef } from "react";
import ArrayBox from "./ArrayBox";
import ControlsPanel from "./ControlsPanel";
import ActionLog from "./ActionLog";
import LegendPanel from "./LegendPanel";
import TutorialModal from "./TutorialModal";
import useArrayEngine from "./useArrayEngine";

export default function ArrayVisualizer() {
  const arrayScrollRef = useRef(null);

  const scrollToArray = () => {
    // Find and click the Table of Contents link that works!
    const tocLink = document.querySelector('a[href="#visualizer"]');
    if (tocLink) {
      tocLink.click();
    } else {
      // Fallback: use hash
      window.location.hash = 'visualizer';
      setTimeout(() => {
        window.scrollBy(0, -100); // Adjust by 100px
      }, 100);
    }
  };

  const scrollToElement = (index) => {
    // Scroll horizontally to show the element at index
    if (arrayScrollRef.current && index !== null && index !== undefined) {
      const container = arrayScrollRef.current;
      const elementWidth = 100; // Approximate width of each box (96px + gap)
      const scrollPosition = index * elementWidth - (container.clientWidth / 2) + 50;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  const {
    arr, prefix, log, ptrHighlight, pairHighlight, windowHighlight, isRunning, statusMessage,
    setArr, reset, randomize, runInsert, runDelete, runRotate, runReverse,
    runTwoPointers, runSlidingWindow, runPrefixSum, clearLog
  } = useArrayEngine([3, 1, 4, 1, 5, 9], scrollToArray, scrollToElement);

  // Auto-scroll to highlighted element
  useEffect(() => {
    if (ptrHighlight !== null) {
      scrollToElement(ptrHighlight);
    } else if (pairHighlight) {
      scrollToElement(pairHighlight.l);
    } else if (windowHighlight) {
      scrollToElement(windowHighlight.start);
    }
  }, [ptrHighlight, pairHighlight, windowHighlight]);

  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seen-array-tutorial");

    if (!seen) {
      queueMicrotask(() => setShowTutorial(true));
    }
  }, []);

  function closeTutorial() {
    localStorage.setItem("seen-array-tutorial", "yes");
    setShowTutorial(false);
  }

  return (
    <>
      {showTutorial && <TutorialModal onClose={closeTutorial} />}

      {/* Main Container */}
      <div className="space-y-6 w-full max-w-full overflow-hidden">

        {/* Array Display Section - Full Width */}
        <div id="array-visualizer" className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 w-full overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="text-3xl">📊</span>
                Array Visualizer
                {isRunning && (
                  <span className="ml-2 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full animate-pulse">
                    Running...
                  </span>
                )}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Watch array operations come to life
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <button
                onClick={randomize}
                disabled={isRunning}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:shadow-none"
              >
                🎲 Randomize
              </button>
              <button
                onClick={reset}
                disabled={isRunning}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:shadow-none"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg border-2 border-blue-400 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="text-2xl">⚡</div>
                <div className="text-lg font-semibold">{statusMessage}</div>
              </div>
            </div>
          )}

          {/* Array Display - Scrollable Container */}
          <div id="array-display-target" className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-inner border border-slate-200 dark:border-slate-700 w-full">

            {/* Scrollable Array Container with visible scrollbar */}
            <div ref={arrayScrollRef} className="overflow-x-auto overflow-y-hidden w-full pb-2">
              <div className="flex gap-3 items-center py-4 px-2 min-w-min">
                {arr.map((v, i) => (
                  <ArrayBox
                    key={`${v}-${i}-${arr.length}`}
                    index={i}
                    value={v}
                    highlight={ptrHighlight === i}
                    pairHighlight={pairHighlight && (pairHighlight.l === i || pairHighlight.r === i)}
                    windowHighlight={windowHighlight && i >= windowHighlight.start && i <= windowHighlight.end}
                  />
                ))}
                {arr.length === 0 && (
                  <div className="text-slate-400 dark:text-slate-500 py-8 text-center w-full">
                    Array is empty. Use Insert or Randomize to add elements.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Prefix Sum Display */}
          {prefix.length > 0 && (
            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">➕</span>
                <span className="font-semibold text-purple-900 dark:text-purple-200">Prefix Sum Array</span>
              </div>
              <div className="font-mono text-sm text-purple-800 dark:text-purple-300">
                [{prefix.join(", ")}]
              </div>
            </div>
          )}

          {/* Legend */}
          <LegendPanel />
        </div>

        {/* Controls and Log - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-full overflow-hidden">
          <div className="min-w-0 overflow-hidden">
            <ControlsPanel
              onInsert={runInsert}
              onDelete={runDelete}
              onRotate={runRotate}
              onReverse={runReverse}
              onTwoPointers={runTwoPointers}
              onSlidingWindow={runSlidingWindow}
              onPrefixSum={runPrefixSum}
              onRandomize={randomize}
              onReset={reset}
              clearLog={clearLog}
              isRunning={isRunning}
            />
          </div>

          <div className="min-w-0 overflow-hidden">
            <ActionLog log={log} />
          </div>
        </div>
      </div>
    </>
  );
}
