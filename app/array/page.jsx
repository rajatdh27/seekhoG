"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "@/app/components/common/TableOfContents";
import SectionSkeleton from "@/app/components/common/SectionSkeleton";
import ProgressIndicator from "@/app/components/common/ProgressIndicator";

// Eager load only the first section for instant display
import ArrayIntro from "./components/sections/ArrayIntro";

// Lazy load all other sections for blazing fast initial load
const ArrayMemoryLayout = lazy(() => import("./components/sections/ArrayMemoryLayout"));
const ArrayVisualizerSection = lazy(() => import("./components/sections/ArrayVisualizerSection"));
const ArraySyntax = lazy(() => import("./components/sections/ArraySyntax"));
const ArrayComplexity = lazy(() => import("./components/sections/ArrayComplexity"));
const ArrayPatterns = lazy(() => import("./components/sections/ArrayPatterns"));
const ArrayProblems = lazy(() => import("./components/sections/ArrayProblems"));
const ArrayCompanyQuestions = lazy(() => import("./components/sections/ArrayCompanyQuestions"));
const ArrayCheatsheet = lazy(() => import("./components/sections/ArrayCheatsheet"));

const sections = [
  { id: "intro", title: "What is an Array?", component: ArrayIntro },
  { id: "memory", title: "Memory Layout & How Arrays Work", component: ArrayMemoryLayout },
  { id: "visualizer", title: "Interactive Visualizer", component: ArrayVisualizerSection },
  { id: "syntax", title: "Syntax Across Languages", component: ArraySyntax },
  { id: "complexity", title: "Time & Space Complexity", component: ArrayComplexity },
  { id: "patterns", title: "Interview Patterns", component: ArrayPatterns },
  { id: "problems", title: "Must-Know Problems", component: ArrayProblems },
  { id: "companies", title: "Company-Wise Questions", component: ArrayCompanyQuestions },
  { id: "cheatsheet", title: "Quick Reference Cheatsheet", component: ArrayCheatsheet },
];

export default function ArrayPage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Master Arrays
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
          >
            From fundamentals to advanced interview patterns. Everything you need to ace your coding interviews.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#intro"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#visualizer"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Try Interactive Visualizer
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sticky Sidebar */}
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
                    // First section loads immediately
                    <Component />
                  ) : (
                    // Other sections lazy load with skeleton
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

      {/* Progress Indicator */}
      <ProgressIndicator
        sections={sections}
        activeSection={activeSection}
        colorClass="blue-600"
        colorClassDark="blue-500"
      />
    </div>
  );
}
