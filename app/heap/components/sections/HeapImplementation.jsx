"use client";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Code2, Terminal, Zap, Cpu, Layers, Settings, ListOrdered } from "lucide-react";

export default function HeapImplementation() {
  const [heapType, setHeapType] = useState("max");
  const [currentLanguage, setCurrentLanguage] = useState("cpp");

  const languages = [
    { id: "cpp", icon: <span>C++</span> },
    { id: "java", icon: <span>Java</span> },
    { id: "python", icon: <span>Python</span> },
    { id: "javascript", icon: <span>JS</span> }
  ];

  const codeExamples = {
      max: {
          cpp: "// Max Heap Implementation in C++\n// Coming soon...",
          java: "// Max Heap Implementation in Java\n// Coming soon...",
          python: "# Max Heap Implementation in Python\n# Coming soon...",
          javascript: "// Max Heap Implementation in JS\n// Coming soon..."
      },
      min: {
          cpp: "// Min Heap Implementation in C++\n// Coming soon...",
          java: "// Min Heap Implementation in Java\n// Coming soon...",
          python: "# Min Heap Implementation in Python\n# Coming soon...",
          javascript: "// Min Heap Implementation in JS\n// Coming soon..."
      }
  };

  const heapComplexity = [
    { title: "Insert", description: "Heapify Up path", badge: "O(log n)", icon: Zap, color: "emerald" },
    { title: "Extract Max", description: "Heapify Down path", badge: "O(log n)", icon: Zap, color: "rose" },
    { title: "Get Max", description: "Root element access", badge: "O(1)", icon: Zap, color: "blue" },
    { title: "Heapify", description: "Fix single violation", badge: "O(log n)", icon: Settings, color: "purple" },
    { title: "Build Heap", description: "Optimized construction", badge: "O(n)", icon: Layers, color: "orange" },
    { title: "Sort", description: "Extract n times", badge: "O(n log n)", icon: ListOrdered, color: "cyan" }
  ];

  const heapFormulas = [
    { title: "Parent(i)", description: "Get index of parent node", badge: "⌊(i - 1) / 2⌋", icon: Cpu, color: "rose" },
    { title: "Left Child(i)", description: "Get index of left child", badge: "2i + 1", icon: Cpu, color: "rose" },
    { title: "Right Child(i)", description: "Get index of right child", badge: "2i + 2", icon: Cpu, color: "rose" }
  ];

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Heap Implementation" 
        icon={Code2} 
        color="rose" 
      />

      <div className="space-y-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-900/50 p-6 rounded-2xl border border-white/5">
           <div className="flex gap-2 p-1 bg-slate-900 rounded-lg border border-white/10 shadow-xl">
              {["max", "min"].map((type) => (
                <button
                  key={type}
                  onClick={() => setHeapType(type)}
                  className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                    heapType === type
                      ? "bg-rose-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {type} Heap
                </button>
              ))}
           </div>

           <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setCurrentLanguage(lang.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 border ${
                    currentLanguage === lang.id
                      ? "bg-rose-500/10 border-rose-500 text-rose-400"
                      : "bg-slate-800 border-white/5 text-slate-400 hover:border-white/20"
                  }`}
                >
                  {lang.icon}
                </button>
              ))}
           </div>
        </div>

        {/* Code Block */}
        <div className="relative group">
           <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur" />
           <div className="relative bg-[#0d1117] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                 </div>
                 <div className="text-xs font-mono text-slate-500">{heapType}_heap.{currentLanguage === "cpp" ? "cpp" : currentLanguage}</div>
              </div>
              <div className="p-6 overflow-x-auto custom-scrollbar">
                 <pre className="font-mono text-sm leading-relaxed text-slate-300">
                    <code>{codeExamples[heapType][currentLanguage] || codeExamples["max"][currentLanguage]}</code>
                 </pre>
              </div>
           </div>
        </div>

        {/* Complexity Grid */}
        <div>
           <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
             <Zap size={24} className="text-yellow-400" /> Time Complexity
           </h3>
           <ConceptGrid items={heapComplexity} columns={3} />
        </div>

        {/* Array Formulas */}
        <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem]">
           <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2">
             <Terminal size={20} className="text-rose-400" /> Array Indexing Formulas
           </h3>
           <ConceptGrid items={heapFormulas} columns={3} variant="horizontal" />
           <p className="text-center text-slate-500 text-[10px] mt-8 font-black uppercase tracking-widest">
             * 0-based indexing used in most modern languages
           </p>
        </div>

      </div>
    </PerspectiveCard>
  );
}
