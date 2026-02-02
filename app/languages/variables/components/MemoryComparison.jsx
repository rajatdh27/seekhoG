"use client";

import { motion } from "framer-motion";
import { Database, Layers, Cpu, Trash2, RefreshCw, ShieldCheck } from "lucide-react";
import ConceptGrid from "@/app/components/common/ConceptGrid";

export default function MemoryComparison() {
  const memoryModels = [
    {
      title: "Manual Management",
      description: "You allocate and free memory yourself. Fast but dangerous.",
      languages: ["C", "C++"],
      icon: Cpu,
      color: "blue",
      pros: ["Zero overhead", "Predictable"],
      cons: ["Memory leaks", "Segfaults"]
    },
    {
      title: "Garbage Collection",
      description: "A runtime process cleans up unused memory automatically.",
      languages: ["Java", "Python", "JS", "Go", "Kotlin", "Swift"],
      icon: RefreshCw,
      color: "emerald",
      pros: ["Safety", "Ease of use"],
      cons: ["GC Pauses", "Memory overhead"]
    },
    {
      title: "Ownership Model",
      description: "Compiler enforces memory safety rules at build time.",
      languages: ["Rust"],
      icon: ShieldCheck,
      color: "orange",
      pros: ["Safe AND Fast", "No GC pauses"],
      cons: ["Steep learning curve"]
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black text-white mb-4 flex items-center justify-center gap-3">
          <Database size={32} className="text-purple-400" /> Memory Models
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          How a language handles variable storage defines its performance and safety profile.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Visualizer: Stack vs Heap */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
          <h4 className="text-xl font-black text-white mb-8 flex items-center gap-2">
            <Layers size={20} className="text-blue-400" /> Stack vs. Heap
          </h4>
          
          <div className="flex gap-8 h-64">
            {/* Stack Visual */}
            <div className="flex-1 flex flex-col gap-2 justify-end bg-blue-900/10 p-4 rounded-xl border border-blue-500/20 relative">
              <span className="absolute top-4 left-0 w-full text-center text-xs font-black text-blue-400 uppercase tracking-widest">Stack (LIFO)</span>
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i}
                  className="h-10 w-full bg-blue-600 rounded-lg shadow-lg border border-blue-400/30"
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                />
              ))}
              <div className="text-center text-[10px] text-slate-500 mt-2">Primitives & Pointers</div>
            </div>

            {/* Heap Visual */}
            <div className="flex-1 relative bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
              <span className="absolute top-4 left-0 w-full text-center text-xs font-black text-purple-400 uppercase tracking-widest">Heap (Dynamic)</span>
              {[1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  className="absolute w-12 h-12 bg-purple-600 rounded-full shadow-lg border border-purple-400/30 flex items-center justify-center"
                  style={{
                    top: `${20 + Math.random() * 50}%`,
                    left: `${10 + Math.random() * 60}%`
                  }}
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
              <div className="absolute bottom-4 w-full text-center text-[10px] text-slate-500">Objects & Complex Data</div>
            </div>
          </div>
        </div>

        {/* Management Strategies */}
        <div className="space-y-4">
          {memoryModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-slate-900 border border-${model.color}-500/20 hover:border-${model.color}-500/50 transition-colors group`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${model.color}-500/10 text-${model.color}-400`}>
                    <model.icon size={18} />
                  </div>
                  <h5 className="font-bold text-white">{model.title}</h5>
                </div>
                <div className="flex -space-x-2">
                  {model.languages.map(lang => (
                    <span key={lang} className={`w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[8px] font-bold text-slate-300 z-10`}>
                      {lang[0]}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">{model.description}</p>
              <div className="flex gap-4 text-[10px] uppercase font-black tracking-widest">
                <span className={`text-${model.color}-400`}>+ {model.pros[0]}</span>
                <span className="text-slate-600">- {model.cons[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
