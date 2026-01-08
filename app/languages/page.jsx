"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const languageSections = [
  { name: "C Programming", icon: "🔷", href: "/languages/c", description: "Low-level programming, pointers, memory management, system programming", gradient: "from-blue-500 to-cyan-500", status: "coming-soon" },
  { name: "C++ Programming", icon: "⚡", href: "/languages/cpp", description: "OOP, STL, templates, modern C++11/14/17/20 features", gradient: "from-indigo-500 to-blue-500", status: "coming-soon" },
  { name: "Java", icon: "☕", href: "/languages/java", description: "OOP, Collections, Streams, Multithreading, Spring Framework", gradient: "from-orange-500 to-red-500", status: "coming-soon" },
  { name: "JavaScript", icon: "🟨", href: "/languages/javascript", description: "ES6+, Async/Await, Promises, DOM, Node.js, React", gradient: "from-yellow-500 to-amber-500", status: "coming-soon" },
  { name: "TypeScript", icon: "🔵", href: "/languages/typescript", description: "Type system, Interfaces, Generics, Advanced Types", gradient: "from-blue-500 to-indigo-500", status: "coming-soon" },
  { name: "Python", icon: "🐍", href: "/languages/python", description: "Core concepts, Data structures, Decorators, Generators, Django/Flask", gradient: "from-green-500 to-emerald-500", status: "coming-soon" },
  { name: "Go (Golang)", icon: "🔵", href: "/languages/go", description: "Goroutines, Channels, Concurrency patterns, Web services", gradient: "from-cyan-500 to-blue-500", status: "coming-soon" },
  { name: "Rust", icon: "🦀", href: "/languages/rust", description: "Ownership, Borrowing, Lifetimes, Memory safety without GC", gradient: "from-orange-500 to-amber-500", status: "coming-soon" },
  { name: "Kotlin", icon: "💜", href: "/languages/kotlin", description: "Modern JVM language, Coroutines, Null safety, Android development", gradient: "from-purple-500 to-pink-500", status: "coming-soon" },
  { name: "Swift", icon: "🍎", href: "/languages/swift", description: "iOS/macOS development, Optionals, Protocols, SwiftUI", gradient: "from-orange-500 to-red-500", status: "coming-soon" },
  { name: "SQL", icon: "💾", href: "/languages/sql", description: "Queries, Joins, Subqueries, Window functions, Query optimization", gradient: "from-blue-500 to-purple-500", status: "coming-soon" },
  { name: "Bash/Shell Scripting", icon: "💻", href: "/languages/bash", description: "Shell commands, Scripting, Automation, Linux/Unix utilities", gradient: "from-gray-500 to-slate-500", status: "coming-soon" },
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
              Programming Languages
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-10">
              Master multiple programming languages from syntax to advanced concepts
            </p>
            <div className="flex gap-6 justify-center flex-wrap mb-8">
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">12</div>
                <div className="text-sm text-emerald-200 font-medium">Popular Languages</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">∞</div>
                <div className="text-sm text-emerald-200 font-medium">Code Examples</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">0→∞</div>
                <div className="text-sm text-emerald-200 font-medium">Beginner to Expert</div>
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
            Choose Your Language
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Deep dive into any programming language and master it from basics to advanced
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languageSections.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              {lang.status === "live" ? (
                <Link href={lang.href}>
                  <motion.div
                    className="group h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Live badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>

                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${lang.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{lang.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-4">
                        {lang.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 group-hover:gap-3 transition-all">
                        <span>Explore Language</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${lang.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}></div>
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  className="group h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden opacity-75"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-5`}></div>

                  {/* Coming Soon badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    COMING SOON
                  </div>

                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${lang.gradient} rounded-2xl flex items-center justify-center mb-4 opacity-60 shadow-lg`}>
                    <span className="text-3xl">{lang.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-400 mb-3">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {lang.description}
                    </p>

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
              Master Multiple Programming Languages
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Each language section will include comprehensive tutorials, best practices, common patterns, and real-world examples to help you become proficient.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.div
                className="px-6 py-3 bg-slate-700/50 text-slate-300 rounded-full font-semibold border border-slate-600"
              >
                📚 Content Coming Soon
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
