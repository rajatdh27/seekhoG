"use client";
import { useEffect, useState, useRef } from "react";
import ArrayBox from "./ArrayBox";
import ControlsPanel from "./ControlsPanel";
import ActionLog from "./ActionLog";
import LegendPanel from "./LegendPanel";
import TutorialModal from "./TutorialModal";
import useArrayEngine from "./useArrayEngine";

export default function ArrayVisualizer() {
  const {
    arr, prefix, log, ptrHighlight, pairHighlight, windowHighlight,
    setArr, reset, randomize, runInsert, runDelete, runRotate, runReverse,
    runTwoPointers, runSlidingWindow, runPrefixSum, clearLog
  } = useArrayEngine([3, 1, 4, 1, 5, 9]);

  const [showTutorial, setShowTutorial] = useState(false);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seen-array-tutorial");

    if (!seen) {
      queueMicrotask(() => setShowTutorial(true));
    }
  }, []);

  // Check scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    checkScroll();
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [arr]);

  function closeTutorial() {
    localStorage.setItem("seen-array-tutorial", "yes");
    setShowTutorial(false);
  }

  function scrollLeft() {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight() {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  }

  return (
    <>
      {showTutorial && <TutorialModal onClose={closeTutorial} />}

      {/* Main Container */}
      <div className="space-y-6 w-full overflow-hidden">

        {/* Array Display Section - Full Width */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 w-full overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="text-3xl">📊</span>
                Array Visualizer
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Watch array operations come to life
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <button
                onClick={randomize}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                🎲 Randomize
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          {/* Array Display - Carousel Container */}
          <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-inner border border-slate-200 dark:border-slate-700 w-full overflow-hidden">

            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Scrollable Array Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e1 transparent',
                maxWidth: '100%'
              }}
            >
              <div className="flex gap-3 items-center py-4 px-2 w-max">
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

            {/* Right Scroll Button */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Scroll Indicator */}
            {(canScrollLeft || canScrollRight) && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>Scroll to see all</span>
              </div>
            )}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          />

          <ActionLog log={log} />
        </div>
      </div>
    </>
  );
}
