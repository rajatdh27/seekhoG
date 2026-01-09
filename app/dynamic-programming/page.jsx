"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "@/app/components/common/TableOfContents";

// Eager load the first section
import DPIntro from "./components/sections/DPIntro";

// Lazy load other sections
const DPApproachesSection = lazy(() => import("./components/sections/DPApproachesSection"));
const DP1DSection = lazy(() => import("./components/sections/DP1DSection"));
const DP2DSection = lazy(() => import("./components/sections/DP2DSection"));
const DPPatternsSection = lazy(() => import("./components/sections/DPPatternsSection"));
const DPCheatsheet = lazy(() => import("./components/sections/DPCheatsheet"));

const sections = [
  { id: "intro", title: "Introduction", component: DPIntro },
  { id: "approaches", title: "Memoization vs Tabulation", component: DPApproachesSection },
  { id: "1d-dp", title: "1D DP Problems", component: DP1DSection },
  { id: "2d-dp", title: "2D DP Problems", component: DP2DSection },
  { id: "patterns", title: "Common Patterns", component: DPPatternsSection },
  { id: "cheatsheet", title: "Cheatsheet", component: DPCheatsheet },
];

function SectionSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 animate-pulse">
      <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export default function DynamicProgrammingPage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 dark:from-pink-700 dark:via-rose-800 dark:to-red-700 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="text-6xl">🧩</div>
            <h1 className="text-5xl md:text-6xl font-bold">Dynamic Programming</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-pink-100 max-w-3xl"
          >
            Master memoization, tabulation, and optimization problems with interactive visualizations!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#approaches"
              className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#cheatsheet"
              className="px-6 py-3 bg-pink-700 text-white rounded-lg font-semibold hover:bg-pink-800 transition-colors border border-pink-500"
            >
              View Cheatsheet
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <aside className="lg:w-64 lg:sticky lg:top-4 lg:self-start">
            <TableOfContents
              sections={sections}
              activeSection={activeSection}
              onSectionClick={setActiveSection}
            />
          </aside>

          {/* Content Sections */}
          <main className="flex-1 space-y-16 min-w-0 overflow-hidden">
            {sections.map((section, index) => {
              const Component = section.component;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                  whileInView={index === 0 ? undefined : { opacity: 1, y: 0 }}
                  viewport={index === 0 ? undefined : { once: true, margin: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-20"
                >
                  {index === 0 ? (
                    <Component />
                  ) : (
                    <Suspense fallback={<SectionSkeleton />}>
                      <Component />
                    </Suspense>
                  )}
                </motion.section>
              );
            })}
          </main>
        </div>
      </div>

      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 bg-white dark:bg-slate-800 rounded-full shadow-lg p-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-16 h-16 relative">
          <svg className="transform -rotate-90 w-16 h-16">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-slate-200 dark:text-slate-700"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - (sections.findIndex((s) => s.id === activeSection) + 1) / sections.length)}`}
              className="text-pink-600 dark:text-pink-500 transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-300">
            {Math.round((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%
          </div>
        </div>
      </motion.div>
    </div>
  );
}
