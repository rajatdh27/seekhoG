"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dataStructures = [
  // Foundations - START HERE
  {
    id: "foundations",
    name: "DSA Foundations",
    icon: "🟩",
    gradient: "from-green-600 to-emerald-600",
    description: "Master complexity, mathematics, recursion - essentials before DSA",
    stats: { concepts: "7+", examples: "50+", languages: "6" },
    features: ["Big-O Analysis", "Recursion Patterns", "Math Fundamentals"],
    available: true,
  },
  {
    id: "searching-sorting",
    name: "Searching & Sorting",
    icon: "🔍",
    gradient: "from-orange-600 to-yellow-600",
    description: "Learn algorithms with animations - linear, binary, bubble, merge, quick sort",
    stats: { algorithms: "7+", animations: "Yes", languages: "6" },
    features: ["Visual Animations", "Step-by-Step", "All Languages"],
    available: true,
  },
  // Available
  {
    id: "array",
    name: "Arrays",
    icon: "📊",
    gradient: "from-blue-600 to-indigo-600",
    description: "Master array fundamentals, patterns, and 130+ problems",
    stats: { patterns: "9+", problems: "130+", companies: "8" },
    features: ["Interactive Visualizer", "6 Languages", "Company Problems"],
    available: true,
  },
  {
    id: "linked-list",
    name: "Linked Lists",
    icon: "🔗",
    gradient: "from-green-600 to-teal-600",
    description: "Master pointers, nodes, and 100+ linked list problems",
    stats: { types: "4+", problems: "100+", companies: "8" },
    features: ["Node Visualization", "Pointer Logic", "Reversal Patterns"],
    available: true,
  },
  {
    id: "stack",
    name: "Stacks",
    icon: "📚",
    gradient: "from-purple-600 to-pink-600",
    description: "Learn LIFO operations, patterns, and 120+ problems",
    stats: { patterns: "6+", problems: "120+", applications: "8" },
    features: ["Push/Pop Demo", "Real-world Uses", "Interview Patterns"],
    available: true,
  },
  // Coming Soon
  {
    id: "queue",
    name: "Queues",
    icon: "🎫",
    gradient: "from-orange-600 to-red-600",
    description: "FIFO operations, circular queue, and BFS applications",
    stats: { types: "3+", problems: "100+", patterns: "5+" },
    features: ["FIFO Demo", "BFS Patterns", "Circular Queue"],
    available: false,
  },
  {
    id: "tree",
    name: "Trees",
    icon: "🌳",
    gradient: "from-emerald-600 to-green-600",
    description: "Binary trees, BST, AVL, and tree traversal patterns",
    stats: { types: "8+", problems: "150+", patterns: "12+" },
    features: ["Tree Visualization", "Traversal Demos", "BST Operations"],
    available: true,
  },
  {
    id: "heap",
    name: "Heaps",
    icon: "⛰️",
    gradient: "from-yellow-600 to-orange-600",
    description: "Priority queues, heap operations, and top-K problems",
    stats: { types: "2+", problems: "80+", patterns: "6+" },
    features: ["Heap Visualizer", "Priority Queue", "Heapify Demo"],
    available: false,
  },
  {
    id: "graph",
    name: "Graphs",
    icon: "🕸️",
    gradient: "from-cyan-600 to-blue-600",
    description: "DFS, BFS, shortest path, MST, and graph algorithms",
    stats: { algorithms: "15+", problems: "120+", patterns: "10+" },
    features: ["Graph Visualizer", "Path Finding", "Topological Sort"],
    available: true,
  },
  {
    id: "hashing",
    name: "Hashing",
    icon: "🔐",
    gradient: "from-indigo-600 to-purple-600",
    description: "Hash maps, collision handling, and pattern matching",
    stats: { techniques: "5+", problems: "100+", patterns: "8+" },
    features: ["Hash Function Demo", "Collision Methods", "Use Cases"],
    available: true,
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    icon: "🧩",
    gradient: "from-pink-600 to-rose-600",
    description: "Memoization, tabulation, and classic DP patterns",
    stats: { patterns: "15+", problems: "150+", types: "8+" },
    features: ["DP Visualizer", "State Transition", "Optimization"],
    available: true,
  },
  {
    id: "greedy",
    name: "Greedy Algorithms",
    icon: "💎",
    gradient: "from-violet-600 to-purple-600",
    description: "Activity selection, Huffman coding, and greedy patterns",
    stats: { patterns: "10+", problems: "80+", applications: "8+" },
    features: ["Greedy Choice", "Optimization", "Real Problems"],
    available: false,
  },
  {
    id: "backtracking",
    name: "Backtracking",
    icon: "🔄",
    gradient: "from-fuchsia-600 to-pink-600",
    description: "N-Queens, Sudoku, subsets, and permutations",
    stats: { patterns: "8+", problems: "90+", puzzles: "6+" },
    features: ["State Space Tree", "Pruning", "Classic Puzzles"],
    available: false,
  },
  {
    id: "trie",
    name: "Trie",
    icon: "🗂️",
    gradient: "from-lime-600 to-green-600",
    description: "Prefix trees, autocomplete, and word search",
    stats: { operations: "5+", problems: "60+", patterns: "5+" },
    features: ["Trie Visualizer", "Auto-complete", "Word Dictionary"],
    available: true,
  },
];

const features = [
  {
    icon: "🎯",
    title: "Interactive Learning",
    description: "Visualize algorithms with real-time animations and demos",
  },
  {
    icon: "💻",
    title: "Multi-Language Support",
    description: "Code examples in C, C++, Java, JavaScript, Python, Go",
  },
  {
    icon: "🏢",
    title: "Company-Focused",
    description: "Problems from Google, Amazon, Meta, Microsoft & more",
  },
  {
    icon: "⚡",
    title: "Performance Optimized",
    description: "Blazing fast with lazy loading and code splitting",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2 text-white drop-shadow-lg">
              <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
                sheekoDSA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-light tracking-wide">
              Learn • Practice • Master
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Complete DSA (Data Structures & Algorithms) Master Document - A single, complete, structured, and clean document covering every bit of DSA from basics to advanced
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/foundations"
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              🟩 Start with Foundations
            </Link>
            <Link
              href="/array"
              className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-blue-500"
            >
              📊 Jump to Arrays
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* DSA Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100">
            📘 Complete DSA Learning Path
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            A structured journey from basics to advanced - every concept, every pattern, every algorithm
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🟩", title: "1. Foundations", topics: ["DSA Basics", "Mathematics", "Time & Space Complexity", "Recursion", "Backtracking"] },
              { emoji: "🟦", title: "2. Basic Data Structures", topics: ["Arrays", "Strings", "Linked Lists", "Stack", "Queue", "Deque"] },
              { emoji: "🟨", title: "3. Searching & Sorting", topics: ["Linear & Binary Search", "Merge Sort", "Quick Sort", "Heap Sort", "Non-comparison Sorts"] },
              { emoji: "🟪", title: "4. Hashing", topics: ["Hash Functions", "Collision Handling", "Hash Map & Set", "Bloom Filters"] },
              { emoji: "🟥", title: "5. Trees", topics: ["Binary Trees", "BST", "AVL & Red-Black", "Heaps", "Trie", "Segment Tree"] },
              { emoji: "🟫", title: "6. Graphs", topics: ["BFS & DFS", "Shortest Path", "MST", "Union-Find", "Topological Sort", "SCC"] },
              { emoji: "🟧", title: "7. Greedy", topics: ["Activity Selection", "Huffman Coding", "Fractional Knapsack", "Interval Scheduling"] },
              { emoji: "🟦", title: "8. Dynamic Programming", topics: ["1D & 2D DP", "String DP", "Knapsack Variants", "Tree DP", "Bitmask DP"] },
              { emoji: "🟩", title: "9. Advanced DS", topics: ["Suffix Array/Tree", "Z & KMP", "Skip List", "Treap", "LRU/LFU Cache"] },
              { emoji: "🟦", title: "10. Problem Patterns", topics: ["Sliding Window", "Two Pointers", "Monotonic Stack", "Fast & Slow Pointers"] },
              { emoji: "🟥", title: "11. Interview Prep", topics: ["Common Patterns", "Company Questions", "Time Optimization", "Best Practices"] },
              { emoji: "🟨", title: "12. Practice Plan", topics: ["Beginner Path", "Intermediate Path", "Advanced Path", "300-500 Problems"] },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
              >
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {section.emoji} {section.title}
                </h3>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {section.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Data Structures Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100"
        >
          Complete DSA Master Document
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-slate-600 dark:text-slate-400 mb-12"
        >
          Every bit of DSA from basics to advanced - in the correct order
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataStructures.map((ds, idx) => (
            <motion.div
              key={ds.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={ds.available ? { scale: 1.02, y: -5 } : {}}
              className="group"
            >
              {ds.available ? (
                <Link href={`/${ds.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden h-full hover:shadow-3xl transition-shadow">
                    <div className={`bg-gradient-to-r ${ds.gradient} p-8 text-white relative`}>
                      <div className="text-6xl mb-4">{ds.icon}</div>
                      <h3 className="text-3xl font-bold mb-3">{ds.name}</h3>
                      <p className="text-white/90">{ds.description}</p>
                    </div>

                    <div className="p-6">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(ds.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                              {value}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {ds.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                          >
                            <span className="text-green-600 dark:text-green-400">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className={`text-center font-semibold bg-gradient-to-r ${ds.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                          Explore {ds.name} →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden h-full opacity-75">
                  <div className={`bg-gradient-to-r ${ds.gradient} p-8 text-white relative`}>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                      COMING SOON
                    </div>
                    <div className="text-6xl mb-4">{ds.icon}</div>
                    <h3 className="text-3xl font-bold mb-3">{ds.name}</h3>
                    <p className="text-white/90">{ds.description}</p>
                  </div>

                  <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(ds.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            {value}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {ds.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="text-slate-400">○</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="text-center font-semibold text-slate-400">
                        Coming Soon...
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100"
          >
            Why Choose This Platform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg"
          >
            Everything you need to succeed in your coding interviews
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Everything You Need to Succeed
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "350+", label: "Practice Problems" },
              { value: "20+", label: "Patterns Covered" },
              { value: "6", label: "Programming Languages" },
              { value: "8+", label: "Top Tech Companies" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6"
        >
          Ready to Master Data Structures?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-8"
        >
          Start learning with interactive visualizations and real interview problems
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/array"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
