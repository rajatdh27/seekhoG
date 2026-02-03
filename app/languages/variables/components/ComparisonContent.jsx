"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import LanguageShowcase3D from "./LanguageShowcase3D";
import MemoryComparison from "./MemoryComparison";
import { variablesData } from "../../configs/variablesConfig";
import { Scale, Shield, Rocket, Code2, CheckCircle2, AlertTriangle, Zap, Server, ShieldCheck, Cpu, Globe, LayoutGrid, History, Sparkles, Scan } from "lucide-react";

export default function ComparisonContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax background movement
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const tableData = [
    { lang: "JavaScript", syntax: "let x = 10;", philosophy: "Dynamic & Flexible", color: "text-yellow-400" },
    { lang: "Python", syntax: "x = 10", philosophy: "Minimalist & Simple", color: "text-green-400" },
    { lang: "Java", syntax: "int x = 10;", philosophy: "Explicit & Strict", color: "text-red-400" },
    { lang: "C++", syntax: "auto x = 10;", philosophy: "Power & Control", color: "text-blue-400" },
    { lang: "Rust", syntax: "let x = 10;", philosophy: "Safety & Ownership", color: "text-orange-400" },
    { lang: "Go", syntax: "x := 10", philosophy: "Clean & Simple", color: "text-cyan-400" },
    { lang: "Swift", syntax: "let x = 10", philosophy: "Safe & Fast", color: "text-orange-500" },
    { lang: "Kotlin", syntax: "val x = 10", philosophy: "Modern & Concise", color: "text-purple-400" },
  ];

  const typingSystems = [
    {
      title: "Statically Typed",
      description: "Types are checked at compile time. The computer knows what's in the box before the program even starts.",
      icon: Shield,
      color: "blue",
      footer: (
        <div className="flex flex-wrap gap-2 mt-2">
          {["C", "C++", "Java", "Go", "Rust", "Swift", "Kotlin", "TypeScript"].map(lang => (
            <span key={lang} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded text-[10px] font-bold">{lang}</span>
          ))}
        </div>
      )
    },
    {
      title: "Dynamically Typed",
      description: "Types are checked at runtime. The computer figures out what's in the box while the program is running.",
      icon: Rocket,
      color: "yellow",
      footer: (
        <div className="flex flex-wrap gap-2 mt-2">
          {["JavaScript", "Python"].map(lang => (
            <span key={lang} className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded text-[10px] font-bold">{lang}</span>
          ))}
        </div>
      )
    }
  ];

  const getDomains = (id) => {
    const domains = {
      javascript: ["Web", "Backend", "Mobile"],
      python: ["AI/ML", "Data", "Scripts"],
      java: ["Enterprise", "Android", "Systems"],
      c: ["OS Kernels", "Embedded", "IoT"],
      cpp: ["Games", "High-Perf", "System"],
      typescript: ["Scalable Web", "Type Safe"],
      go: ["Cloud", "Microservices", "DevOps"],
      rust: ["Systems", "WebAssembly", "Safe"],
      kotlin: ["Android", "Server", "Multiplatform"],
      swift: ["iOS", "macOS", "Apple TV"],
    };
    return domains[id] || ["General Purpose"];
  };

  const getSlogan = (id) => {
    const slogans = {
      javascript: "Runs Everywhere",
      python: "Simplicity First",
      java: "Write Once, Run Anywhere",
      c: "Performance Absolute",
      cpp: "Zero Overhead",
      typescript: "JavaScript that Scales",
      go: "Simple & Efficient",
      rust: "Fearless Concurrency",
      kotlin: "Concise & Safe",
      swift: "Safe, Fast, Expressive"
    };
    return slogans[id] || "Programming Language";
  };

  const getKeywords = (id) => {
    const kw = {
      javascript: ["function", "const", "let", "=>", "async", "await", "import"],
      python: ["def", "import", "class", "if", "elif", "for", "in"],
      java: ["public", "class", "static", "void", "new", "extends", "final"],
      c: ["int", "char", "void", "struct", "include", "if", "while"],
      cpp: ["template", "class", "std::", "auto", "virtual", "const", "new"],
      typescript: ["interface", "type", "const", "any", "as", "export", "enum"],
      go: ["func", "var", "package", "go", "chan", "struct", "if"],
      rust: ["fn", "let", "mut", "impl", "match", "pub", "use"],
      kotlin: ["fun", "val", "var", "data", "class", "when", "by"],
      swift: ["func", "let", "var", "guard", "if", "struct", "extension"]
    };
    return kw[id] || ["var", "if", "else"];
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: yBg }} className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
        </motion.div>
        {/* Floating Particles */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <PerspectiveCard color="purple" className="relative z-10 backdrop-blur-sm bg-slate-950/80">
        {/* Intro Section - Theatrical Entrance */}
        <div id="intro" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader 
              title="The Great Language Divide" 
              description="A cinematic journey through the philosophies that define modern programming."
              icon={Scale} 
              color="purple" 
            />
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <ConceptGrid items={typingSystems} columns={2} />
          </motion.div>
        </div>

        <div className="space-y-48 mt-32">
          {/* Syntax Table - Sci-Fi Interface Style */}
          <section id="syntax" className="scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Code2 size={32} />
              </div>
              <h3 className="text-4xl font-black text-white tracking-tight">Syntax Matrix</h3>
            </motion.div>
            
            <div className="bg-slate-950/80 border border-white/10 rounded-[2rem] p-1 overflow-hidden shadow-2xl relative group">
              {/* Scanner Line Effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20 opacity-50"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="overflow-x-auto rounded-[1.8rem]">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <th className="py-6 px-8">Language</th>
                      <th className="py-6 px-8">Declaration</th>
                      <th className="py-6 px-8">Philosophy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {tableData.map((row, i) => (
                      <motion.tr 
                        key={row.lang}
                        initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="group/row hover:bg-white/[0.03] transition-colors relative"
                      >
                        <td className={`py-5 px-8 font-black text-xl ${row.color} flex items-center gap-3`}>
                          <span className="w-1 h-1 rounded-full bg-current opacity-0 group-hover/row:opacity-100 transition-opacity" />
                          {row.lang}
                        </td>
                        <td className="py-5 px-8">
                          <code className="bg-black/40 px-4 py-2 rounded-lg text-emerald-400 font-mono text-sm border border-white/5 group-hover/row:border-emerald-500/30 transition-colors shadow-inner block w-fit">
                            {row.syntax}
                          </code>
                        </td>
                        <td className="py-5 px-8 text-slate-400 font-medium italic relative">
                          {row.philosophy}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Deep Dive Showcases with Timeline */}
          <section id="showcase" className="scroll-mt-32 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-32"
            >
              <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.5em] mb-4 block">The Collection</span>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-6 flex items-center justify-center gap-4">
                <LayoutGrid size={48} className="text-emerald-400" /> Language Showcase
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
                Explore the DNA of modern computing.
              </p>
            </motion.div>
            
            {/* Central Timeline Line with Gradient Fade */}
            <div className="absolute left-1/2 top-40 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 -translate-x-1/2 hidden lg:block" />

            <div className="space-y-48">
              {Object.values(variablesData).map((lang, index) => {
                const isEven = index % 2 === 0;
                const color = lang.themeColor.split("-")[0]; // e.g. "blue"
                
                return (
                  <motion.div 
                    key={lang.id} 
                    className="relative"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-${color}-500 shadow-[0_0_20px_currentColor] hidden lg:block z-10`} />
                    
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}>
                      
                      {/* 3D Visualizer Side */}
                      <div className="w-full lg:w-1/2 relative perspective-1000 group">
                        {/* Connection Line to Center */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "3rem" }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className={`absolute top-1/2 ${isEven ? 'right-[-3rem]' : 'left-[-3rem]'} h-px bg-${color}-500/50 hidden lg:block origin-${isEven ? "right" : "left"}`} 
                        />
                        
                        <div className="transform transition-transform duration-700 hover:scale-105">
                          <LanguageShowcase3D 
                            name={lang.name}
                            slogan={getSlogan(lang.id)}
                            domains={getDomains(lang.id)}
                            icon={lang.icon}
                            color={color}
                            keywords={getKeywords(lang.id)}
                          />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-${color}-500/10 text-${color}-400 text-xs font-black uppercase tracking-widest mb-6 border border-${color}-500/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                            <Scan size={14} />
                            {lang.id === 'javascript' || lang.id === 'python' ? 'Dynamic' : 'Static'} Typed
                          </div>
                          <h4 className="text-4xl font-black text-white mb-6 tracking-tight">
                            {lang.name}
                          </h4>
                          
                          {/* History Block */}
                          <div className={`p-6 rounded-2xl bg-slate-900 border border-white/5 relative overflow-hidden group/quote shadow-inner mb-6`}>
                            <div className={`absolute top-0 left-0 w-1 h-full bg-${color}-500 opacity-50 group-hover:opacity-100 transition-opacity`} />
                            <div className="relative z-10">
                                <span className={`text-${color}-400 text-xs font-bold uppercase tracking-wider mb-2 block`}>Origin Story</span>
                                <p className="text-slate-300 text-sm leading-relaxed italic">
                                &quot;{lang.purpose?.history || "A powerful language for modern development."}&quot;
                                </p>
                            </div>
                          </div>

                          {/* Origin Grid */}
                          <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />
                                    <span className="text-xs text-slate-500 uppercase font-bold">Creator</span>
                                </div>
                                <div className="text-white font-medium text-sm">{lang.purpose?.creator || "Unknown"}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />
                                    <span className="text-xs text-slate-500 uppercase font-bold">Born</span>
                                </div>
                                <div className="text-white font-medium text-sm">{lang.purpose?.year || "Unknown"}</div>
                            </div>
                            <div className="col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />
                                    <span className="text-xs text-slate-500 uppercase font-bold">The Need</span>
                                </div>
                                <div className="text-slate-300 text-sm leading-relaxed">{lang.purpose?.why || "To solve complex problems."}</div>
                            </div>
                          </div>
                        </motion.div>

                        <div className="space-y-4">
                          <h5 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 mb-2">
                            <Sparkles size={14} className={`text-${color}-400`} /> Future Scope
                          </h5>
                          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {lang.future?.scope || "Continues to evolve."}
                          </p>
                          <div className="grid gap-3">
                            {lang.future?.trends?.slice(0, 3).map((trend, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex items-center gap-4 p-4 bg-slate-900/40 rounded-2xl border border-white/5 hover:bg-slate-800/60 hover:border-white/10 transition-all cursor-default group/item"
                              >
                                <div className={`w-8 h-8 rounded-full bg-${color}-500/10 flex items-center justify-center text-${color}-400 group-hover/item:bg-${color}-500 group-hover/item:text-white transition-colors`}>
                                  <span className="text-xs font-bold">{i + 1}</span>
                                </div>
                                <span className="text-slate-300 text-sm font-medium">{trend}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </PerspectiveCard>
    </div>
  );
}
