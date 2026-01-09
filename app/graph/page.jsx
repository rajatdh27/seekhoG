"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "@/app/components/common/TableOfContents";

// Eager load the first section
import GraphIntro from "./components/sections/GraphIntro";

// Lazy load other sections
const GraphRepresentation = lazy(() => import("./components/sections/GraphRepresentation"));
const DFSSection = lazy(() => import("./components/sections/DFSSection"));
const BFSSection = lazy(() => import("./components/sections/BFSSection"));
const ShortestPathSection = lazy(() => import("./components/sections/ShortestPathSection"));
const MSTSection = lazy(() => import("./components/sections/MSTSection"));
const TopologicalSortSection = lazy(() => import("./components/sections/TopologicalSortSection"));
const GraphCheatsheet = lazy(() => import("./components/sections/GraphCheatsheet"));

const sections = [
  { id: "intro", title: "Introduction", component: GraphIntro },
  { id: "representation", title: "Graph Representation", component: GraphRepresentation },
  { id: "dfs", title: "Depth First Search (DFS)", component: DFSSection },
  { id: "bfs", title: "Breadth First Search (BFS)", component: BFSSection },
  { id: "shortest-path", title: "Shortest Path Algorithms", component: ShortestPathSection },
  { id: "mst", title: "Minimum Spanning Tree", component: MSTSection },
  { id: "topological-sort", title: "Topological Sort", component: TopologicalSortSection },
  { id: "cheatsheet", title: "Cheatsheet", component: GraphCheatsheet },
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

export default function GraphPage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-800 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="text-6xl">🕸️</div>
            <h1 className="text-5xl md:text-6xl font-bold">Graphs</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl"
          >
            Master graph algorithms with interactive visualizations - DFS, BFS, Dijkstra, MST, and more!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#dfs"
              className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#cheatsheet"
              className="px-6 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500"
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

      {/* Progress Indicator */}
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
              className="text-cyan-600 dark:text-cyan-500 transition-all duration-300"
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
