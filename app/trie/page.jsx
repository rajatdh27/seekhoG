"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "../array/components/sections/TableOfContents";

// Eager load the first section
import TrieIntro from "./components/sections/TrieIntro";

// Lazy load other sections
const TrieOperationsSection = lazy(() => import("./components/sections/TrieOperationsSection"));
const TrieImplementationSection = lazy(() => import("./components/sections/TrieImplementationSection"));
const TrieApplicationsSection = lazy(() => import("./components/sections/TrieApplicationsSection"));
const TriePatternsSection = lazy(() => import("./components/sections/TriePatternsSection"));
const TrieCheatsheet = lazy(() => import("./components/sections/TrieCheatsheet"));

const sections = [
  { id: "intro", title: "Introduction", component: TrieIntro },
  { id: "operations", title: "Trie Operations", component: TrieOperationsSection },
  { id: "implementation", title: "Implementation", component: TrieImplementationSection },
  { id: "applications", title: "Applications", component: TrieApplicationsSection },
  { id: "patterns", title: "Common Patterns", component: TriePatternsSection },
  { id: "cheatsheet", title: "Cheatsheet", component: TrieCheatsheet },
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

export default function TriePage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-lime-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 dark:from-lime-700 dark:via-green-800 dark:to-emerald-700 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="text-6xl">🗂️</div>
            <h1 className="text-5xl md:text-6xl font-bold">Trie (Prefix Tree)</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-lime-100 max-w-3xl"
          >
            Master prefix-based search, autocomplete, and word dictionaries with interactive visualizations!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#operations"
              className="px-6 py-3 bg-white text-lime-600 rounded-lg font-semibold hover:bg-lime-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#cheatsheet"
              className="px-6 py-3 bg-lime-700 text-white rounded-lg font-semibold hover:bg-lime-800 transition-colors border border-lime-500"
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
              className="text-lime-600 dark:text-lime-500 transition-all duration-300"
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
