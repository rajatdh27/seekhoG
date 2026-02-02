"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import VariableVisualizer3D from "./VariableVisualizer3D";
import { 
  BookOpen, 
  FileText, 
  Database, 
  HardDrive, 
  AlertTriangle, 
  Library, 
  Globe, 
  CheckCircle2,
  Box,
  Layers,
  Zap,
  Sparkles,
  Building2,
  Scan,
  Cpu,
  ShieldAlert
} from "lucide-react";

export default function VariablesLanguageTemplate({ data }) {
  if (!data) return null;

  const color = data.themeColor.split("-")[0]; // e.g., "blue-400" -> "blue"

  return (
    <PerspectiveCard color={color}>
      {/* 1. Magical Hero Section */}
      <div id="intro" className="scroll-mt-32 pt-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-400 text-xs font-black uppercase tracking-widest mb-6`}>
                <Sparkles size={14} /> Introduction
              </div>
              <h1 className="text-6xl font-black text-white tracking-tight mb-8 leading-tight">
                Learning <br/>
                <span className={`text-${color}-400`}>{data.name} Variables</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                {data.intro.description}
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-${color}-500/5 border border-${color}-500/20`}>
                <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400`}>
                  <Scan size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase mb-0.5">Type System</div>
                  <div className="text-white font-bold text-xs">{data.id === 'python' || data.id === 'javascript' ? 'Dynamic' : 'Static'}</div>
                </div>
              </div>
              <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 border border-white/5`}>
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase mb-0.5">Memory</div>
                  <div className="text-white font-bold text-xs">Stack & Heap</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 flex justify-center py-12 bg-slate-900/30 rounded-[3rem] border border-white/5 shadow-inner relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]`} />
            <VariableVisualizer3D 
              name="score" 
              value="100" 
              type={data.id === 'javascript' ? 'number' : 'int'} 
              color={color} 
            />
          </motion.div>
        </div>

        {/* Core Benefits */}
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
        {/* 2. The Basics (Declarations) */}
        <section id="declarations" className="scroll-mt-32">
          <SectionHeader 
            title="The Basics" 
            icon={FileText} 
            color={color} 
            description="How to create and use variables in your code." 
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {data.declarations.description}
              </p>
              {data.declarations.constants && (
                <div className={`p-6 rounded-2xl bg-${color}-500/5 border-l-4 border-${color}-500`}>
                  <h4 className="text-sm font-black text-white uppercase mb-2 flex items-center gap-2">
                    <Layers size={16} /> Immutable Data
                  </h4>
                  <p className="text-slate-400 text-sm italic">
                    {data.declarations.constants.description}
                  </p>
                </div>
              )}
            </div>
            <div className="shadow-2xl rounded-3xl overflow-hidden border border-white/5 bg-slate-950 p-1">
              <CodeBlock code={data.declarations.code} language={data.id} />
            </div>
          </div>
        </section>

        {/* 3. The Toolbox (Data Types) */}
        {data.types && (
          <section id="types" className="scroll-mt-32">
            <SectionHeader 
              title="Your Data Toolbox" 
              icon={Database} 
              color={color} 
              description="Different types of data you can store." 
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.types.primitive.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-slate-900 border border-white/5 flex items-center gap-6"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center text-${color}-400 font-black text-xl`}>
                    {type.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{type.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{type.range}</p>
                    <div className="mt-2 text-[9px] font-black text-slate-600 uppercase tracking-tighter bg-slate-950 px-2 py-0.5 rounded border border-white/5 inline-block">{type.size}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Memory Limits */}
        {data.limits && (
          <section id="limits" className="scroll-mt-32">
            <SectionHeader 
              title="Memory Limits" 
              icon={HardDrive} 
              color={color} 
              description="Understanding the capacity of your data boxes." 
            />
            <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/5 shadow-inner">
              <p className="text-slate-400 text-sm mb-8 italic text-center max-w-2xl mx-auto">{data.limits.description}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                      {data.limits.table.headers.map((h, i) => (
                        <th key={i} className="py-4 px-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {data.limits.table.rows.map((row, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`py-4 px-4 ${j === 0 ? `font-bold text-${color}-400` : "text-slate-300 font-medium"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 5. Limitations & Constraints */}
        {data.limitations && (
          <section id="limitations" className="scroll-mt-32">
            <SectionHeader 
              title="Limitations" 
              icon={AlertTriangle} 
              color="rose" 
              description="Important logical constraints and common pitfalls." 
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.limitations.warnings.map((w, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[2rem] bg-rose-500/5 border border-rose-500/10 flex items-start gap-4 group hover:bg-rose-500/10 transition-colors shadow-2xl shadow-rose-500/5"
                >
                  <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 group-hover:scale-110 transition-transform shadow-inner">
                    <ShieldAlert size={20} />
                  </div>
                  <p className="text-slate-300 text-sm font-bold leading-relaxed">{w}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Organizing Data (Collections) */}
        {data.collections && (
          <section id="collections" className="scroll-mt-32">
            <SectionHeader 
              title="Organizing Data" 
              icon={Library} 
              color={color} 
              description="How to store lists and groups of data." 
            />
            <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {data.collections.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <div className={`px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2`}>
                    <Layers size={12} /> Sequences
                  </div>
                  <div className={`px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2`}>
                    <Database size={12} /> Mappings
                  </div>
                </div>
              </div>
              <div className="shadow-2xl rounded-3xl overflow-hidden border border-white/5 bg-slate-950 p-1">
                <CodeBlock code={data.collections.code} language={data.id} />
              </div>
            </div>
          </section>
        )}

        {/* 7. Level Up (Advanced) */}
        {data.advanced && (
          <section id="advanced" className="scroll-mt-32">
            <SectionHeader 
              title="Level Up" 
              icon={Zap} 
              color={color} 
              description="Powerful features for cleaner code." 
            />
            <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 relative overflow-hidden shadow-2xl shadow-indigo-500/5">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
              
              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <div className="order-2 lg:order-1 shadow-xl rounded-2xl overflow-hidden border border-white/5 bg-slate-950">
                  <CodeBlock code={data.advanced.code} language={data.id} />
                </div>
                <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
                  <h4 className="text-2xl font-black text-white tracking-tight uppercase text-xs">Neural Enhancements</h4>
                  <p className="text-slate-400 text-lg leading-relaxed font-light italic">
                    {data.advanced.description}
                  </p>
                  <div className={`inline-flex self-start items-center gap-2 px-4 py-2 rounded-lg bg-${color}-500/10 text-${color}-400 text-[10px] font-black uppercase tracking-widest border border-${color}-500/20`}>
                    Pro Pattern
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. Real World Usage */}
        {data.usage && (
          <section id="usage" className="scroll-mt-32">
            <SectionHeader 
              title="Real World" 
              icon={Globe} 
              color={color} 
              description="Where you will see this language in action." 
            />
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {data.usage.applications.map((app, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative shadow-xl">
                  <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-white font-black text-4xl`}>{app.icon}</div>
                  <div className="text-4xl mb-6">{app.icon}</div>
                  <h4 className="font-bold text-white mb-2 tracking-tight text-lg">{app.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-bold">{app.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center p-10 bg-slate-950 border border-white/5 rounded-[3rem] shadow-inner">
              <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">
                <Building2 size={12} className={`text-${color}-400`} /> Industry Adoption
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {data.usage.companies.map((company, i) => (
                  <span key={i} className="px-6 py-3 bg-slate-900 border border-white/5 rounded-[1.2rem] text-sm font-black text-slate-300 hover:text-white hover:border-blue-500/30 transition-all cursor-default shadow-lg">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PerspectiveCard>
  );
}
