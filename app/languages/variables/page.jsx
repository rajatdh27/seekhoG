"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TableOfContents from "@/app/components/common/TableOfContents";
import ProgressIndicator from "@/app/components/common/ProgressIndicator";
import JavaScriptContent from "./components/JavaScriptContent";
import PythonContent from "./components/PythonContent";
import JavaContent from "./components/JavaContent";
import CContent from "./components/CContent";
import CppContent from "./components/CppContent";
import TypeScriptContent from "./components/TypeScriptContent";
import GoContent from "./components/GoContent";
import RustContent from "./components/RustContent";
import KotlinContent from "./components/KotlinContent";
import SwiftContent from "./components/SwiftContent";
import ComparisonContent from "./components/ComparisonContent";

export default function VariablesPage() {
  const [activeLanguage, setActiveLanguage] = useState("comparison");
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { id: "comparison", name: "All Languages", icon: "🔀", gradient: "from-pink-500 to-purple-500" },
    { id: "c", name: "C", icon: "🔷", gradient: "from-blue-500 to-cyan-500" },
    { id: "cpp", name: "C++", icon: "⚡", gradient: "from-indigo-500 to-blue-500" },
    { id: "java", name: "Java", icon: "☕", gradient: "from-orange-500 to-red-500" },
    { id: "javascript", name: "JavaScript", icon: "🟨", gradient: "from-yellow-500 to-amber-500" },
    { id: "typescript", name: "TypeScript", icon: "🔵", gradient: "from-blue-500 to-indigo-500" },
    { id: "python", name: "Python", icon: "🐍", gradient: "from-green-500 to-emerald-500" },
    { id: "go", name: "Go", icon: "🔷", gradient: "from-cyan-500 to-blue-500" },
    { id: "rust", name: "Rust", icon: "🦀", gradient: "from-orange-500 to-amber-500" },
    { id: "kotlin", name: "Kotlin", icon: "💜", gradient: "from-purple-500 to-pink-500" },
    { id: "swift", name: "Swift", icon: "🍎", gradient: "from-orange-500 to-red-500" },
  ];

  const sections = [
    { id: "intro", title: "Introduction", icon: "📖" },
    { id: "declarations", title: "Variable Declarations", icon: "📝" },
    { id: "types", title: "Data Types", icon: "🔢" },
    { id: "limits", title: "Memory Limits & Storage", icon: "💾" },
    { id: "limitations", title: "Limitations & Constraints", icon: "⚠️" },
    { id: "collections", title: "Collections", icon: "📚" },
    { id: "advanced", title: "Advanced Features", icon: "🚀" },
    { id: "usage", title: "Real-World Usage", icon: "🌍" },
    { id: "purpose", title: "Purpose & History", icon: "📜" },
    { id: "future", title: "Future Outlook", icon: "🔮" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-7xl mb-4">📦</div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Variables & Data Types
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              Master how to store and work with data across 10 programming languages
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Examples</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Language Tabs */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLanguage(lang.id)}
                className={`relative px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${activeLanguage === lang.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {activeLanguage === lang.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${lang.gradient} rounded-lg`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{lang.icon}</span>
                  <span>{lang.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 lg:sticky lg:top-4 lg:self-start">
            <TableOfContents
              sections={sections}
              activeSection={activeSection}
              onSectionClick={setActiveSection}
              gradientFrom="cyan-600"
              gradientTo="teal-600"
              gradientFromDark="cyan-700"
              gradientToDark="teal-800"
            />
          </aside>

          {/* Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLanguage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeLanguage === "comparison" && <ComparisonContent />}
                {activeLanguage === "javascript" && <JavaScriptContent />}
                {activeLanguage === "python" && <PythonContent />}
                {activeLanguage === "java" && <JavaContent />}
                {activeLanguage === "c" && <CContent />}
                {activeLanguage === "cpp" && <CppContent />}
                {activeLanguage === "typescript" && <TypeScriptContent />}
                {activeLanguage === "go" && <GoContent />}
                {activeLanguage === "rust" && <RustContent />}
                {activeLanguage === "kotlin" && <KotlinContent />}
                {activeLanguage === "swift" && <SwiftContent />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Circular Progress Indicator */}
      <ProgressIndicator
        sections={sections}
        activeSection={activeSection}
        colorClass="blue-600"
        colorClassDark="cyan-600"
      />
    </div>
  );
}