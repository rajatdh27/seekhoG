"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import SidebarTOC from "@/app/components/common/SidebarTOC";
import NextModuleCard from "@/app/components/common/NextModuleCard";
import JavaScriptOperators from "./components/JavaScriptOperators";
import PythonOperators from "./components/PythonOperators";
import JavaOperators from "./components/JavaOperators";
import COperators from "./components/COperators";
import CppOperators from "./components/CppOperators";
import TypeScriptOperators from "./components/TypeScriptOperators";
import GoOperators from "./components/GoOperators";
import RustOperators from "./components/RustOperators";
import KotlinOperators from "./components/KotlinOperators";
import SwiftOperators from "./components/SwiftOperators";
import ComparisonContent from "./components/ComparisonContent";
import { 
  Calculator, 
  ArrowRightLeft, 
  Scale, 
  Binary, 
  Zap, 
  Sparkles, 
  ChevronDown,
  Code2,
  CheckCircle2
} from "lucide-react";

export default function OperatorsPage() {
  const [activeLanguage, setActiveLanguage] = useState("comparison");
  const [activeSection, setActiveSection] = useState("intro");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("perspective-card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const languages = [
    { id: "comparison", name: "Comparison", icon: "🔀", color: "purple" },
    { id: "c", name: "C", icon: "🔷", color: "blue" },
    { id: "cpp", name: "C++", icon: "⚡", color: "indigo" },
    { id: "java", name: "Java", icon: "☕", color: "orange" },
    { id: "javascript", name: "JavaScript", icon: "🟨", color: "yellow" },
    { id: "typescript", name: "TypeScript", icon: "🔵", color: "blue" },
    { id: "python", name: "Python", icon: "🐍", color: "green" },
    { id: "go", name: "Go", icon: "🔷", color: "cyan" },
    { id: "rust", name: "Rust", icon: "🦀", color: "orange" },
    { id: "kotlin", name: "Kotlin", icon: "💜", color: "purple" },
    { id: "swift", name: "Swift", icon: "🍎", color: "rose" },
  ];

  const languageSections = [
    { id: "intro", title: "Introduction", icon: Sparkles },
    { id: "arithmetic", title: "Arithmetic", icon: Calculator },
    { id: "comparison", title: "Comparison", icon: Scale },
    { id: "logical", title: "Logical", icon: ArrowRightLeft },
    { id: "advanced", title: "Advanced", icon: Zap },
  ];

  const comparisonSections = [
    { id: "intro", title: "The Logic Wars", icon: Scale },
  ];

  const sections = activeLanguage === "comparison" ? comparisonSections : languageSections;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-purple-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Futuristic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 pt-24 pb-20 px-6 overflow-hidden perspective-1000"
      >
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 backdrop-blur-sm rounded-xl"
              style={{
                width: Math.random() * 60 + 40,
                height: Math.random() * 60 + 40,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Code2 size={14} className="fill-purple-400" /> Programming Logic
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-bounce">➕</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Operators
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Master arithmetic, logical, and bitwise operations across <strong className="text-white">10+ programming languages</strong>.
          </motion.p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Select Language & Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      {/* Language Tabs - Sticky */}
      <div className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLanguage(lang.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeLanguage === lang.id
                    ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {activeLanguage === lang.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-600 rounded-xl"
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
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-72 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 shadow-2xl">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-4">Contents</h3>
              <SidebarTOC
                sections={sections}
                activeSection={activeSection}
                onSectionClick={setActiveSection}
                color="purple"
              />
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLanguage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeLanguage === "comparison" && <ComparisonContent />}
                {activeLanguage === "javascript" && <JavaScriptOperators />}
                {activeLanguage === "python" && <PythonOperators />}
                {activeLanguage === "java" && <JavaOperators />}
                {activeLanguage === "c" && <COperators />}
                {activeLanguage === "cpp" && <CppOperators />}
                {activeLanguage === "typescript" && <TypeScriptOperators />}
                {activeLanguage === "go" && <GoOperators />}
                {activeLanguage === "rust" && <RustOperators />}
                {activeLanguage === "kotlin" && <KotlinOperators />}
                {activeLanguage === "swift" && <SwiftOperators />}
              </motion.div>
            </AnimatePresence>

            {/* Next Module */}
            <div className="mt-24">
              <NextModuleCard 
                title="Operators Mastered"
                description="You've crunched the numbers and mastered the logic. Ready to explore Control Structures?"
                nextModuleText="Control Flow (Coming Soon)"
                nextModuleLink="/languages"
                color="purple"
              />
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
        .perspective-card {
          --glow-rgb: 168, 85, 247;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
