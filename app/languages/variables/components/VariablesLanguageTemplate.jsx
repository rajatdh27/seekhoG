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
  Rocket, 
  Globe, 
  History, 
  Sparkles,
  CheckCircle2,
  Box,
  Layers,
  Code2
} from "lucide-react";

export default function VariablesLanguageTemplate({ data }) {
  if (!data) return null;

  const color = data.themeColor.split("-")[0]; // e.g., "blue-400" -> "blue"

  // Map highlights to ConceptGrid format
  const highlights = data.intro.highlights.map(h => ({
    title: h.title,
    description: h.text,
    icon: h.icon, // Emoji works with FeatureCard
    color: color
  }));

  // Map primitive types to ConceptGrid format
  const primitives = data.types?.primitive.map(t => ({
    title: t.name,
    description: t.range,
    badge: t.size,
    icon: Box,
    color: color
  })) || [];

  // Map limitations
  const limitations = data.limitations?.warnings.map(w => ({
    title: "Limitation",
    description: w,
    icon: AlertTriangle,
    color: "rose"
  })) || [];

  // Map applications
  const applications = data.usage?.applications.map(app => ({
    title: app.title,
    description: app.text,
    icon: app.icon,
    color: color
  })) || [];

  return (
    <PerspectiveCard color={color}>
      {/* Intro Section */}
      <div id="intro" className="scroll-mt-32">
        <SectionHeader 
          title={`${data.name} Variables`} 
          icon={BookOpen} 
          color={color} 
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-8 mb-12">
          <div className="flex-1 space-y-6">
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              {data.intro.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-400 text-xs font-black uppercase tracking-widest`}>
                Type: {data.id === 'python' || data.id === 'javascript' ? 'Dynamic' : 'Static'}
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800 border border-white/5 text-slate-400 text-xs font-black uppercase tracking-widest">
                Storage: Stack/Heap
              </span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center py-8 bg-slate-900/50 rounded-[2.5rem] border border-white/5 shadow-inner relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <VariableVisualizer3D 
              name="score" 
              value="100" 
              type={data.id === 'javascript' ? 'number' : 'int'} 
              color={color} 
            />
          </div>
        </div>

        <ConceptGrid items={highlights} columns={2} />
      </div>

      <div className="space-y-16 mt-16">
        {/* Declarations Section */}
        <section id="declarations" className="scroll-mt-32">
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <FileText size={24} className={`text-${color}-400`} /> Declarations
          </h3>
          
          <div className={`p-6 bg-${color}-500/5 border border-${color}-500/20 rounded-[2rem] space-y-6`}>
            <p className="text-slate-300 text-sm leading-relaxed">
              {data.declarations.description}
            </p>
            <CodeBlock 
              code={data.declarations.code} 
              language={data.id} 
              title="Declaration Syntax"
            />

            {data.declarations.constants && (
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-lg bg-${color}-500/20 text-${color}-400 font-mono text-xs font-bold`}>
                    {data.declarations.constants.keyword}
                  </div>
                  <h4 className="text-lg font-bold text-white">Constants</h4>
                </div>
                <p className="text-slate-400 text-xs mb-4">
                  {data.declarations.constants.description}
                </p>
                <CodeBlock 
                  code={data.declarations.constants.code} 
                  language={data.id}
                  title="Constants" 
                />
              </div>
            )}
          </div>
        </section>

        {/* Data Types Section */}
        {data.types && (
          <section id="types" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Database size={24} className={`text-${color}-400`} /> Data Types
            </h3>
            <ConceptGrid items={primitives} columns={3} />
          </section>
        )}

        {/* Limits Section */}
        {data.limits && (
          <section id="limits" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <HardDrive size={24} className={`text-${color}-400`} /> Memory Limits
            </h3>
            
            <div className="bg-slate-950 border border-white/5 rounded-[2rem] p-8 overflow-hidden shadow-inner">
              <p className="text-slate-400 text-sm mb-6 font-medium italic">
                {data.limits.description}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {data.limits.table.headers.map((h, i) => (
                        <th key={i} className="py-4 px-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {data.limits.table.rows.map((row, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`py-4 px-4 ${j === 0 ? `font-bold text-${color}-400` : "text-slate-300"}`}>
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

        {/* Limitations */}
        {data.limitations && (
          <section id="limitations" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <AlertTriangle size={24} className="text-rose-400" /> Limitations
            </h3>
            <ConceptGrid items={limitations} columns={2} />
          </section>
        )}

        {/* Collections */}
        {data.collections && (
          <section id="collections" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Library size={24} className={`text-${color}-400`} /> Collections
            </h3>
            <div className={`p-6 bg-${color}-500/5 border border-${color}-500/20 rounded-[2rem]`}>
              <p className="text-slate-300 text-sm mb-6">{data.collections.description}</p>
              <CodeBlock code={data.collections.code} language={data.id} />
            </div>
          </section>
        )}

        {/* Advanced */}
        {data.advanced && (
          <section id="advanced" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Rocket size={24} className={`text-${color}-400`} /> Advanced Features
            </h3>
            <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-6">
              <p className="text-slate-300 text-sm mb-6">{data.advanced.description}</p>
              <CodeBlock code={data.advanced.code} language={data.id} />
            </div>
          </section>
        )}

        {/* Usage */}
        {data.usage && (
          <section id="usage" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Globe size={24} className={`text-${color}-400`} /> Usage
            </h3>
            <ConceptGrid items={applications} columns={2} />
            
            <div className="mt-8 p-6 bg-slate-900 border border-white/5 rounded-[2rem]">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Used By</h4>
              <div className="flex flex-wrap gap-3">
                {data.usage.companies.map((company, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-800 rounded-xl text-xs font-bold text-slate-300 border border-white/5">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Purpose */}
        {data.purpose && (
          <section id="purpose" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <History size={24} className={`text-${color}-400`} /> History
            </h3>
            <div className={`p-8 bg-${color}-500/10 border border-${color}-500/20 rounded-[2rem]`}>
              <p className="text-slate-200 text-lg font-medium italic leading-relaxed">
                &quot;{data.purpose.history}&quot;
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {data.purpose.principles.map((principle, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                    <div className={`w-2 h-2 rounded-full bg-${color}-500`} />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Future */}
        {data.future && (
          <section id="future" className="scroll-mt-32">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Sparkles size={24} className={`text-${color}-400`} /> Future Outlook
            </h3>
            <div className="space-y-4">
              {data.future.trends.map((trend, i) => (
                <div key={i} className="p-4 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-400 font-bold text-xs`}>
                    {i + 1}
                  </div>
                  <p className="text-slate-300 text-sm font-medium">{trend}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </PerspectiveCard>
  );
}
