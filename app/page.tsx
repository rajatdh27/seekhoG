"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dsaSections = [
  // Foundations - START HERE
  { name: "DSA Foundations", icon: "🟩", href: "/foundations", description: "Master complexity, mathematics, recursion - essentials before DSA", gradient: "from-green-500 to-emerald-500", status: "live" },
  { name: "Searching & Sorting", icon: "🔍", href: "/searching-sorting", description: "Learn algorithms with animations - linear, binary, bubble, merge, quick sort", gradient: "from-orange-500 to-yellow-500", status: "live" },

  // Basic Data Structures
  { name: "Arrays", icon: "📊", href: "/array", description: "Master array fundamentals, patterns, and 130+ problems", gradient: "from-blue-500 to-indigo-500", status: "live" },
  { name: "Linked Lists", icon: "🔗", href: "/linked-list", description: "Master pointers, nodes, and 100+ linked list problems", gradient: "from-green-500 to-teal-500", status: "live" },
  { name: "Stacks", icon: "📚", href: "/stack", description: "Learn LIFO operations, patterns, and 120+ problems", gradient: "from-purple-500 to-pink-500", status: "live" },
  { name: "Queues", icon: "📋", href: "/queue", description: "FIFO operations, circular queue, priority queue, and deque patterns", gradient: "from-orange-500 to-amber-500", status: "live" },

  // Tree-based Structures
  { name: "Trees", icon: "🌳", href: "/tree", description: "Binary trees, BST, AVL, and tree traversal patterns", gradient: "from-emerald-500 to-green-500", status: "live" },
  { name: "Heaps", icon: "🌳", href: "/heap", description: "Complete binary trees, heap property, priority queues, and heap sort", gradient: "from-rose-500 to-pink-500", status: "live" },
  { name: "Trie", icon: "🗂️", href: "/trie", description: "Prefix trees, autocomplete, and word search", gradient: "from-lime-500 to-green-500", status: "live" },

  // Graph & Hashing
  { name: "Graphs", icon: "🕸️", href: "/graph", description: "DFS, BFS, shortest path, MST, and graph algorithms", gradient: "from-cyan-500 to-blue-500", status: "live" },
  { name: "Hashing", icon: "🔐", href: "/hashing", description: "Hash maps, collision handling, and pattern matching", gradient: "from-indigo-500 to-purple-500", status: "live" },

  // Algorithmic Paradigms
  { name: "Dynamic Programming", icon: "🧩", href: "/dynamic-programming", description: "Memoization, tabulation, and classic DP patterns", gradient: "from-pink-500 to-rose-500", status: "live" },
  { name: "Greedy Algorithms", icon: "💎", href: "/greedy", description: "Make locally optimal choices - activity selection, knapsack, Huffman coding", gradient: "from-violet-500 to-purple-500", status: "live" },
  { name: "Backtracking", icon: "🔄", href: "/backtracking", description: "N-Queens, Sudoku, subsets, and permutations with interactive visualizations", gradient: "from-fuchsia-500 to-pink-500", status: "live" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-6 relative overflow-hidden"
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
              🎯
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Data Structures & Algorithms
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10">
              Master DSA from fundamentals to advanced problem-solving
            </p>
            <div className="flex gap-6 justify-center flex-wrap mb-8">
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">14</div>
                <div className="text-sm text-blue-200 font-medium">Comprehensive Topics</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">100%</div>
                <div className="text-sm text-blue-200 font-medium">Complete & Live</div>
              </motion.div>
              <motion.div
                className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">350+</div>
                <div className="text-sm text-blue-200 font-medium">Practice Problems</div>
              </motion.div>
            </div>
            <motion.a
              href="#topics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20"
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
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dive deep into any topic and master data structures & algorithms at your own pace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dsaSections.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={topic.href}>
                <motion.div
                  className="group h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Live badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    LIVE
                  </div>

                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${topic.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{topic.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 group-hover:gap-3 transition-all">
                      <span>Explore Topic</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${topic.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}></div>
                </motion.div>
              </Link>
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
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-pink-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl px-12 py-8">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Master Data Structures & Algorithms?
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              All topics are complete with in-depth explanations, interactive visualizations, code examples in 6 languages, and hundreds of practice problems.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="/foundations"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start from Foundations
              </motion.a>
              <motion.a
                href="/array"
                className="px-6 py-3 bg-slate-700 text-white rounded-full font-semibold hover:bg-slate-600 transition-all border border-slate-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jump to Arrays
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
