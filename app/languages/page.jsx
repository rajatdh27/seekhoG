"use client";

import { motion } from "framer-motion";
import ContentCard from "../components/common/ContentCard";
import { Zap, ChevronDown } from "lucide-react";

// All supported languages
const allLanguages = ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "Go", "Rust", "Kotlin", "Swift"];

// Universal programming concepts across all languages
const programmingConcepts = [
  {
    id: "variables",
    name: "Variables & Data Types",
    icon: "📦",
    description: "Learn how to store and work with different types of data",
    gradient: "from-blue-600 to-cyan-600",
    languages: allLanguages,
    href: "/languages/variables",
    status: "live"
  },
  {
    id: "operators",
    name: "Operators",
    icon: "➕",
    description: "Master arithmetic, logical, and comparison operations",
    gradient: "from-purple-600 to-pink-600",
    languages: allLanguages,
    href: "/languages/operators",
    status: "coming-soon"
  },
  {
    id: "control-flow",
    name: "Control Flow",
    icon: "🔀",
    description: "Conditionals, loops, and program flow control",
    gradient: "from-orange-600 to-red-600",
    languages: allLanguages,
    href: "/languages/control-flow",
    status: "coming-soon"
  },
  {
    id: "functions",
    name: "Functions",
    icon: "⚡",
    description: "Reusable code blocks, parameters, and return values",
    gradient: "from-yellow-600 to-amber-600",
    languages: allLanguages,
    href: "/languages/functions",
    status: "coming-soon"
  },
  {
    id: "arrays-lists",
    name: "Arrays & Lists",
    icon: "📚",
    description: "Working with ordered collections of data",
    gradient: "from-green-600 to-emerald-600",
    languages: allLanguages,
    href: "/languages/arrays-lists",
    status: "coming-soon"
  },
  {
    id: "objects-classes",
    name: "Objects & Classes",
    icon: "🎯",
    description: "Object-oriented programming and data structures",
    gradient: "from-indigo-600 to-purple-600",
    languages: allLanguages,
    href: "/languages/objects-classes",
    status: "coming-soon"
  },
  {
    id: "strings",
    name: "Strings",
    icon: "💬",
    description: "Text manipulation and string operations",
    gradient: "from-pink-600 to-rose-600",
    languages: allLanguages,
    href: "/languages/strings",
    status: "coming-soon"
  },
  {
    id: "error-handling",
    name: "Error Handling",
    icon: "⚠️",
    description: "Exception handling and error management",
    gradient: "from-red-600 to-orange-600",
    languages: allLanguages,
    href: "/languages/error-handling",
    status: "coming-soon"
  },
  {
    id: "async-programming",
    name: "Async Programming",
    icon: "⏱️",
    description: "Asynchronous operations and concurrency",
    gradient: "from-cyan-600 to-blue-600",
    languages: allLanguages,
    href: "/languages/async-programming",
    status: "coming-soon"
  },
  {
    id: "file-io",
    name: "File I/O",
    icon: "📁",
    description: "Reading and writing files",
    gradient: "from-teal-600 to-cyan-600",
    languages: allLanguages,
    href: "/languages/file-io",
    status: "coming-soon"
  },
  {
    id: "modules-packages",
    name: "Modules & Packages",
    icon: "📦",
    description: "Code organization and reusability",
    gradient: "from-violet-600 to-purple-600",
    languages: allLanguages,
    href: "/languages/modules-packages",
    status: "coming-soon"
  },
  {
    id: "memory-management",
    name: "Memory Management",
    icon: "🧠",
    description: "Understanding memory allocation and garbage collection",
    gradient: "from-amber-600 to-orange-600",
    languages: allLanguages,
    href: "/languages/memory-management",
    status: "coming-soon"
  },
];

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-emerald-600/20 to-transparent blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-emerald-400" /> Multi-Language Proficiency
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-bounce">💻</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Programming Concepts
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Learn core programming concepts across 10+ languages. Compare syntax, understand memory models, and master best practices.
          </motion.p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Concepts</span>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div id="topics" className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmingConcepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ContentCard 
                title={concept.name}
                description={concept.description}
                icon={concept.icon}
                gradient={concept.gradient}
                href={concept.href}
                status={concept.status}
                badges={concept.languages}
                actionText="Learn Concept"
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