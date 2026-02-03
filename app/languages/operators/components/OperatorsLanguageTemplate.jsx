"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeBlock from "@/app/components/common/CodeBlock";
import CinematicQuiz from "@/app/components/common/CinematicQuiz";
import { 
  Calculator, 
  ArrowRightLeft, 
  Scale, 
  Binary, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react";

export default function OperatorsLanguageTemplate({ data }) {
  if (!data) return null;

  const color = data.themeColor.split("-")[0];

  return (
    <PerspectiveCard color={color}>
      {/* 1. Hero Section */}
      <div id="intro" className="scroll-mt-32 pt-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-400 text-xs font-black uppercase tracking-widest mb-6`}>
                <Sparkles size={14} /> Operators
              </div>
              <h1 className="text-6xl font-black text-white tracking-tight mb-8 leading-tight">
                Mastering <br/>
                <span className={`text-${color}-400`}>{data.name} Logic</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                {data.intro.description}
              </p>
            </motion.div>
          </div>

          {/* Visualizer Placeholder - To be implemented or swapped with a generic animation */}
          <div className="flex-1 flex justify-center items-center h-64 bg-slate-900/30 rounded-[3rem] border border-white/5 relative overflow-hidden group">
             <div className={`absolute inset-0 bg-${color}-500/5 group-hover:bg-${color}-500/10 transition-colors`} />
             <div className="text-6xl font-black text-slate-700 select-none animate-pulse">
                + - * / %
             </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.intro.highlights.map((h, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col items-center text-center group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                {h.icon}
              </div>
              <h4 className="font-bold text-white mb-2 tracking-tight uppercase text-xs">{h.title}</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed font-bold">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-32 mt-32">
        
        {/* Categories Loop */}
        {data.categories.map((cat, i) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
                <SectionHeader 
                    title={cat.title} 
                    icon={cat.id === 'arithmetic' ? Calculator : cat.id === 'comparison' ? Scale : ArrowRightLeft} 
                    color={color} 
                    description={cat.description} 
                />
                <div className="mt-12 shadow-2xl rounded-3xl overflow-hidden border border-white/5 bg-slate-950 p-1">
                    <CodeBlock code={cat.code} language={data.id} />
                </div>
            </section>
        ))}

        {/* Advanced Section */}
        {data.advanced && (
            <section id="advanced" className="scroll-mt-32">
                <SectionHeader 
                    title="Advanced Tactics" 
                    icon={Zap} 
                    color={color} 
                    description={data.advanced.description} 
                />
                <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-${color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                    <CodeBlock code={data.advanced.code} language={data.id} />
                </div>
            </section>
        )}

        {/* Quiz */}
        {data.quiz && (
           <CinematicQuiz quizData={data.quiz} color={color} />
        )}

      </div>
    </PerspectiveCard>
  );
}
