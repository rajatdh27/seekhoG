"use client";

import { motion } from "framer-motion";
import ContentCard from "./components/common/ContentCard";
import { Zap, ChevronDown } from "lucide-react";

const dsaSections = [
  // Foundations - START HERE
  { name: "DSA Foundations", icon: "🟩", href: "/foundations", description: "Master complexity, mathematics, recursion - essentials before DSA", gradient: "from-green-600 to-emerald-600", status: "live", badges: ["Complexity", "Math", "Recursion"] },
  { name: "Searching & Sorting", icon: "🔍", href: "/searching-sorting", description: "Learn algorithms with animations - linear, binary, bubble, merge, quick sort", gradient: "from-orange-600 to-amber-600", status: "live", badges: ["Binary Search", "Quick Sort", "Merge Sort"] },

  // Basic Data Structures
  { name: "Arrays", icon: "📊", href: "/array", description: "Master array fundamentals, patterns, and 130+ problems", gradient: "from-blue-600 to-indigo-600", status: "live", badges: ["Sliding Window", "Two Pointers"] },
  { name: "Linked Lists", icon: "🔗", href: "/linked-list", description: "Master pointers, nodes, and 100+ linked list problems", gradient: "from-emerald-600 to-teal-600", status: "live", badges: ["Fast & Slow", "Reversal"] },
  { name: "Stacks", icon: "📚", href: "/stack", description: "Learn LIFO operations, patterns, and 120+ problems", gradient: "from-purple-600 to-pink-600", status: "live", badges: ["Monotonic Stack", "Recursion"] },
  { name: "Queues", icon: "📋", href: "/queue", description: "FIFO operations, circular queue, priority queue, and deque patterns", gradient: "from-green-500 to-emerald-500", status: "live", badges: ["BFS", "Priority Queue"] },

  // Tree-based Structures
  { name: "Trees", icon: "🌳", href: "/tree", description: "Binary trees, BST, AVL, and tree traversal patterns", gradient: "from-emerald-600 to-green-600", status: "live", badges: ["DFS", "BFS", "BST"] },
  { name: "Heaps", icon: "🏔️", href: "/heap", description: "Complete binary trees, heap property, priority queues, and heap sort", gradient: "from-rose-600 to-pink-600", status: "live", badges: ["Min/Max Heap", "Heap Sort"] },
  { name: "Trie", icon: "🗂️", href: "/trie", description: "Prefix trees, autocomplete, and word search", gradient: "from-lime-600 to-green-600", status: "live", badges: ["Prefix Search", "Autocomplete"] },

  // Graph & Hashing
  { name: "Graphs", icon: "🕸️", href: "/graph", description: "DFS, BFS, shortest path, MST, and graph algorithms", gradient: "from-cyan-600 to-blue-600", status: "live", badges: ["Dijkstra", "Topological Sort"] },
  { name: "Hashing", icon: "🔐", href: "/hashing", description: "Hash maps, collision handling, and pattern matching", gradient: "from-indigo-600 to-purple-600", status: "live", badges: ["HashMap", "HashSet"] },

  // Algorithmic Paradigms
  { name: "Dynamic Programming", icon: "🧩", href: "/dynamic-programming", description: "Memoization, tabulation, and classic DP patterns", gradient: "from-pink-600 to-rose-600", status: "live", badges: ["Memoization", "Tabulation"] },
  { name: "Greedy Algorithms", icon: "💎", href: "/greedy", description: "Make locally optimal choices - activity selection, knapsack, Huffman coding", gradient: "from-violet-600 to-purple-600", status: "live", badges: ["Optimization", "Intervals"] },
  { name: "Backtracking", icon: "🔄", href: "/backtracking", description: "N-Queens, Sudoku, subsets, and permutations with interactive visualizations", gradient: "from-fuchsia-600 to-pink-600", status: "live", badges: ["Recursion", "Pruning"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-blue-400" /> Complete DSA Roadmap
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-bounce">🎯</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Data Structures <br/>& Algorithms
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Master DSA from fundamentals to advanced problem-solving with interactive visualizations, animations, and in-depth explanations.
          </motion.p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Topics</span>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      {/* Topics Grid */}
      <div id="topics" className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dsaSections.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ContentCard 
                title={topic.name}
                description={topic.description}
                icon={topic.icon}
                gradient={topic.gradient}
                href={topic.href}
                status={topic.status}
                badges={topic.badges}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
      `}</style>
    </div>
  );
}
