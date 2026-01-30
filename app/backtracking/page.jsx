"use client";

import { useState, lazy, Suspense, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SidebarTOC from "@/app/components/common/SidebarTOC";
import ModuleComplete from "@/app/components/common/algorithm/ModuleComplete";
import { 
  RotateCcw, 
  LayoutGrid, 
  Grid3X3, 
  GitMerge, 
  Layers, 
  FileText, 
  ChevronDown,
  Undo2
} from "lucide-react";

// Eager load only the first section for instant display
import BacktrackingIntro from "./components/sections/BacktrackingIntro";

// Lazy load all other sections for blazing fast initial load
const NQueens = lazy(() => import("./components/sections/NQueens"));
const SudokuSolver = lazy(() => import("./components/sections/SudokuSolver"));
const SubsetsPermutations = lazy(() => import("./components/sections/SubsetsPermutations"));
const BacktrackingPatterns = lazy(() => import("./components/sections/BacktrackingPatterns"));
const BacktrackingCheatsheet = lazy(() => import("./components/sections/BacktrackingCheatsheet"));

const sections = [
  { id: "intro", title: "Introduction", component: BacktrackingIntro, icon: RotateCcw },
  { id: "nqueens", title: "N-Queens Problem", component: NQueens, icon: LayoutGrid },
  { id: "sudoku", title: "Sudoku Solver", component: SudokuSolver, icon: Grid3X3 },
  { id: "subsets", title: "Subsets & Permutations", component: SubsetsPermutations, icon: GitMerge },
  { id: "patterns", title: "Backtracking Patterns", component: BacktrackingPatterns, icon: Layers },
  { id: "cheatsheet", title: "Cheatsheet", component: BacktrackingCheatsheet, icon: FileText },
];

function SectionSkeleton() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 border border-slate-700/50 animate-pulse">
      <div className="h-8 bg-slate-800 rounded w-1/3 mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-slate-800 rounded w-full"></div>
        <div className="h-4 bg-slate-800 rounded w-5/6"></div>
        <div className="h-4 bg-slate-800 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export default function BacktrackingPage() {
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

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-fuchsia-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Futuristic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-fuchsia-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 pt-24 pb-20 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Undo2 size={14} className="fill-fuchsia-400" /> Exhaustive Search
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <div className="text-8xl filter drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] animate-bounce">🌲</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Backtracking
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Explore all possibilities by building solutions incrementally and abandoning those that fail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#intro"
              className="px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-fuchsia-600/20 active:scale-95"
            >
              Start Learning
            </a>
            <a
              href="#cheatsheet"
              className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black text-lg transition-all border border-white/10 active:scale-95"
            >
              View Cheatsheet
            </a>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-slate-500 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll to Explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents - Hidden on mobile, visible on desktop */}
          <aside className="hidden lg:block lg:w-72 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 shadow-2xl">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-4">Curriculum</h3>
              <SidebarTOC
                sections={sections}
                activeSection={activeSection}
                onSectionClick={setActiveSection}
                color="fuchsia"
              />
            </div>
          </aside>

          {/* Content Sections */}
          <main className="flex-1 space-y-24 min-w-0">
            {sections.map((section, index) => {
              const Component = section.component;
              const Icon = section.icon;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", damping: 25 }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-8 group">
                    <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 border border-fuchsia-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{section.title}</h2>
                  </div>

                  <Suspense fallback={<SectionSkeleton />}>
                    <Component />
                  </Suspense>
                </motion.section>
              );
            })}

             {/* Next Section Pointer */}
             <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12 pb-24"
            >
              <ModuleComplete 
                title="Curriculum Completed!"
                description="Congratulations! You've mastered the core Data Structures & Algorithms. Now go forth and build amazing things!"
                nextModuleText="Return Home"
                nextModuleLink="/"
                color="fuchsia"
              />
            </motion.div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
        .perspective-card {
          --glow-rgb: 217, 70, 239;
        }
      `}</style>
    </div>
  );
}
