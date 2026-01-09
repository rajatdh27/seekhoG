"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "@/app/components/common/TableOfContents";
import SectionSkeleton from "@/app/components/common/SectionSkeleton";
import ProgressIndicator from "@/app/components/common/ProgressIndicator";

// Eager load the first section
import DatabaseIntro from "./components/sections/DatabaseIntro";

// Lazy load other sections
const SQLDatabasesSection = lazy(() => import("./components/sections/SQLDatabasesSection"));
const NoSQLDatabasesSection = lazy(() => import("./components/sections/NoSQLDatabasesSection"));
const DatabaseDesignSection = lazy(() => import("./components/sections/DatabaseDesignSection"));
const QueryOptimizationSection = lazy(() => import("./components/sections/QueryOptimizationSection"));
const TransactionsACIDSection = lazy(() => import("./components/sections/TransactionsACIDSection"));

const sections = [
  { id: "intro", title: "Introduction to Databases", component: DatabaseIntro },
  { id: "sql-databases", title: "SQL Databases", component: SQLDatabasesSection },
  { id: "nosql-databases", title: "NoSQL Databases", component: NoSQLDatabasesSection },
  { id: "database-design", title: "Database Design", component: DatabaseDesignSection },
  { id: "query-optimization", title: "Query Optimization & Indexing", component: QueryOptimizationSection },
  { id: "transactions-acid", title: "Transactions & ACID", component: TransactionsACIDSection },
];

export default function DatabasesPage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-700 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="text-6xl">💾</div>
            <h1 className="text-5xl md:text-6xl font-bold">Databases</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-violet-100 max-w-3xl"
          >
            Master database fundamentals - SQL, NoSQL, design patterns, optimization, and transactions!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#intro"
              className="px-6 py-3 bg-white text-violet-600 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#sql-databases"
              className="px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition-colors border border-violet-500"
            >
              Explore SQL
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
      <ProgressIndicator
        sections={sections}
        activeSection={activeSection}
        colorClass="violet-600"
        colorClassDark="violet-500"
      />
    </div>
  );
}
