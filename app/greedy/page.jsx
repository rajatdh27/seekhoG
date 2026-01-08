"use client";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

// Lazy load components
const GreedyIntro = lazy(() => import("./components/sections/GreedyIntro"));
const ActivitySelection = lazy(() => import("./components/sections/ActivitySelection"));
const FractionalKnapsack = lazy(() => import("./components/sections/FractionalKnapsack"));
const HuffmanCoding = lazy(() => import("./components/sections/HuffmanCoding"));
const GreedyPatterns = lazy(() => import("./components/sections/GreedyPatterns"));
const GreedyCheatsheet = lazy(() => import("./components/sections/GreedyCheatsheet"));

export default function GreedyPage() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "Introduction", component: GreedyIntro },
    { id: "activity", title: "Activity Selection", component: ActivitySelection },
    { id: "knapsack", title: "Fractional Knapsack", component: FractionalKnapsack },
    { id: "huffman", title: "Huffman Coding", component: HuffmanCoding },
    { id: "patterns", title: "Greedy Patterns", component: GreedyPatterns },
    { id: "cheatsheet", title: "Cheatsheet", component: GreedyCheatsheet },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-violet-200 dark:border-violet-800 sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
              <span className="text-3xl">💎</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Greedy Algorithms
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Make locally optimal choices to find global optimum
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-violet-200 dark:border-violet-800">
              <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">
                Sections
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                        : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1 space-y-12">
            {sections.map((section) => {
              const Component = section.component;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <Suspense
                    fallback={
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-violet-200 dark:border-violet-800">
                        <div className="animate-pulse space-y-4">
                          <div className="h-8 bg-violet-200 dark:bg-violet-800 rounded w-1/3"></div>
                          <div className="h-4 bg-violet-200 dark:bg-violet-800 rounded w-2/3"></div>
                          <div className="h-4 bg-violet-200 dark:bg-violet-800 rounded w-1/2"></div>
                        </div>
                      </div>
                    }
                  >
                    <Component />
                  </Suspense>
                </motion.section>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
