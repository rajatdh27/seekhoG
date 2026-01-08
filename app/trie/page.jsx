"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Lazy load sections
const TrieIntro = lazy(() => import("./components/sections/TrieIntro"));
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

function TableOfContents({ activeSection, onSectionClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700"
    >
      <h2 className="text-2xl font-bold mb-4 text-lime-700 dark:text-lime-400">
        📑 Table of Contents
      </h2>
      <nav className="space-y-2">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
              activeSection === section.id
                ? "bg-gradient-to-r from-lime-600 to-green-600 text-white font-semibold"
                : "text-slate-700 dark:text-slate-300 hover:bg-lime-50 dark:hover:bg-lime-900/20"
            }`}
          >
            <span className="text-sm font-mono mr-2">{idx + 1}.</span>
            {section.title}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}

function ProgressBar({ progress }) {
  return (
    <div className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Progress
          </span>
          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-lime-600 to-green-600"
            />
          </div>
          <span className="text-sm font-bold text-lime-700 dark:text-lime-400">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TriePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.round(progress), 100));

      // Update active section based on scroll
      const sectionElements = sections.map(s => document.getElementById(s.id));
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-lime-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <ProgressBar progress={scrollProgress} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="text-7xl mb-6">🗂️</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Trie (Prefix Tree)
          </h1>
          <p className="text-xl md:text-2xl text-lime-100 max-w-3xl mx-auto">
            Master prefix-based search, autocomplete, and word dictionaries
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <Suspense
                  fallback={
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-12 border border-slate-200 dark:border-slate-700 animate-pulse">
                      <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                    </div>
                  }
                >
                  <section.component />
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
