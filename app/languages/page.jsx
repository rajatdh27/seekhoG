"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// All supported languages
const allLanguages = ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "Go", "Rust", "Kotlin", "Swift"];

// Universal programming concepts across all languages
const programmingConcepts = [
  {
    id: "variables",
    name: "Variables & Data Types",
    icon: "📦",
    description: "Learn how to store and work with different types of data",
    gradient: "from-blue-500 to-cyan-500",
    languages: allLanguages,
    href: "/languages/variables",
    status: "live"
  },
  {
    id: "operators",
    name: "Operators",
    icon: "➕",
    description: "Master arithmetic, logical, and comparison operations",
    gradient: "from-purple-500 to-pink-500",
    languages: allLanguages,
    href: "/languages/operators",
    status: "coming-soon"
  },
  {
    id: "control-flow",
    name: "Control Flow",
    icon: "🔀",
    description: "Conditionals, loops, and program flow control",
    gradient: "from-orange-500 to-red-500",
    languages: allLanguages,
    href: "/languages/control-flow",
    status: "coming-soon"
  },
  {
    id: "functions",
    name: "Functions",
    icon: "⚡",
    description: "Reusable code blocks, parameters, and return values",
    gradient: "from-yellow-500 to-amber-500",
    languages: allLanguages,
    href: "/languages/functions",
    status: "coming-soon"
  },
  {
    id: "arrays-lists",
    name: "Arrays & Lists",
    icon: "📚",
    description: "Working with ordered collections of data",
    gradient: "from-green-500 to-emerald-500",
    languages: allLanguages,
    href: "/languages/arrays-lists",
    status: "coming-soon"
  },
  {
    id: "objects-classes",
    name: "Objects & Classes",
    icon: "🎯",
    description: "Object-oriented programming and data structures",
    gradient: "from-indigo-500 to-purple-500",
    languages: allLanguages,
    href: "/languages/objects-classes",
    status: "coming-soon"
  },
  {
    id: "strings",
    name: "Strings",
    icon: "💬",
    description: "Text manipulation and string operations",
    gradient: "from-pink-500 to-rose-500",
    languages: allLanguages,
    href: "/languages/strings",
    status: "coming-soon"
  },
  {
    id: "error-handling",
    name: "Error Handling",
    icon: "⚠️",
    description: "Exception handling and error management",
    gradient: "from-red-500 to-orange-500",
    languages: allLanguages,
    href: "/languages/error-handling",
    status: "coming-soon"
  },
  {
    id: "async-programming",
    name: "Async Programming",
    icon: "⏱️",
    description: "Asynchronous operations and concurrency",
    gradient: "from-cyan-500 to-blue-500",
    languages: allLanguages,
    href: "/languages/async-programming",
    status: "coming-soon"
  },
  {
    id: "file-io",
    name: "File I/O",
    icon: "📁",
    description: "Reading and writing files",
    gradient: "from-teal-500 to-cyan-500",
    languages: allLanguages,
    href: "/languages/file-io",
    status: "coming-soon"
  },
  {
    id: "modules-packages",
    name: "Modules & Packages",
    icon: "📦",
    description: "Code organization and reusability",
    gradient: "from-violet-500 to-purple-500",
    languages: allLanguages,
    href: "/languages/modules-packages",
    status: "coming-soon"
  },
  {
    id: "memory-management",
    name: "Memory Management",
    icon: "🧠",
    description: "Understanding memory allocation and garbage collection",
    gradient: "from-amber-500 to-orange-500",
    languages: allLanguages,
    href: "/languages/memory-management",
    status: "coming-soon"
  },
];

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-24 px-6 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              className="text-8xl mb-6 inline-block"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              💻
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white">
              Programming Concepts
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-10">
              Learn core programming concepts across multiple languages - one topic at a time
            </p>
            <div className="flex gap-6 justify-center flex-wrap mb-8">
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">12</div>
                <div className="text-sm text-emerald-200 font-medium">Core Concepts</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">4+</div>
                <div className="text-sm text-emerald-200 font-medium">Languages Each</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">∞</div>
                <div className="text-sm text-emerald-200 font-medium">Code Examples</div>
              </motion.div>
            </div>
            <motion.a
              href="#topics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div id="topics" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose a Concept to Master
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Learn each programming concept and compare syntax across C, C++, Java, JavaScript, TypeScript, Python, Go, Rust, Kotlin, and Swift
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmingConcepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              {concept.status === "live" ? (
                <Link href={concept.href}>
                  <motion.div
                    className="group h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Live badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>

                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${concept.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{concept.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                        {concept.name}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-4">
                        {concept.description}
                      </p>

                      {/* Language badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {concept.languages.map((lang) => (
                          <span
                            key={lang}
                            className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 group-hover:gap-3 transition-all">
                        <span>Learn Concept</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${concept.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}></div>
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  className="group h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden opacity-75"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-5`}></div>

                  {/* Coming Soon badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    COMING SOON
                  </div>

                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${concept.gradient} rounded-2xl flex items-center justify-center mb-4 opacity-60 shadow-lg`}>
                    <span className="text-3xl">{concept.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-400 mb-3">
                      {concept.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {concept.description}
                    </p>

                    {/* Language badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {concept.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-xs px-2 py-1 bg-slate-700/30 text-slate-500 rounded-md border border-slate-600/30"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    {/* Coming soon indicator */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                      <span>Coming Soon...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-3xl px-12 py-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Compare & Learn Across Languages
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Each concept includes side-by-side comparisons, best practices, and real-world examples across JavaScript, Python, Java, and C++.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="/languages/variables"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📦 Start with Variables
              </motion.a>
              <motion.div
                className="px-6 py-3 bg-slate-700/50 text-slate-300 rounded-full font-semibold border border-slate-600"
              >
                📚 More Concepts Coming Soon
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
