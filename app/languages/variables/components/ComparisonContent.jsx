"use client";

import { motion } from "framer-motion";
import Section from "@/app/components/common/Section";
import InfoBox from "@/app/components/common/InfoBox";

export default function ComparisonContent() {
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

  return (
    <div className="space-y-12">
      <Section id="intro">
        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          The Great Language Divide
        </h2>

        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Every programming language handles variables differently. The biggest difference is <span className="text-blue-400 font-black">WHEN</span> the language checks your types and <span className="text-indigo-400 font-black">HOW STRICT</span> it is about them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-800/40 p-8 rounded-[2rem] border border-blue-500/30 shadow-xl"
          >
            <h4 className="text-2xl font-black text-blue-400 mb-4 flex items-center gap-2">
              <span>🛡️</span> Statically Typed
            </h4>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">Types are checked <strong>at compile time</strong>. The computer knows what's in the box before the program even starts.</p>
            <div className="grid grid-cols-2 gap-3">
              {["C", "C++", "Java", "Go", "Rust", "Swift", "Kotlin", "TypeScript"].map(lang => (
                <div key={lang} className="px-3 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-xl text-xs font-bold text-center">{lang}</div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-800/40 p-8 rounded-[2rem] border border-yellow-500/30 shadow-xl"
          >
            <h4 className="text-2xl font-black text-yellow-400 mb-4 flex items-center gap-2">
              <span>🚀</span> Dynamically Typed
            </h4>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">Types are checked <strong>at runtime</strong>. The computer figures out what's in the box while the program is running.</p>
            <div className="grid grid-cols-2 gap-3">
              {["JavaScript", "Python"].map(lang => (
                <div key={lang} className="px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded-xl text-xs font-bold text-center">{lang}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="syntax">
        <h3 className="text-3xl font-black mb-8 text-white">Syntax Comparison</h3>
        <div className="bg-slate-900/80 rounded-[2.5rem] border border-slate-700/50 overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700/50">
                  <th className="p-6 text-slate-400 font-black uppercase tracking-widest text-xs">Language</th>
                  <th className="p-6 text-slate-400 font-black uppercase tracking-widest text-xs">Declaration</th>
                  <th className="p-6 text-slate-400 font-black uppercase tracking-widest text-xs">Philosophy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {tableData.map((row, i) => (
                  <motion.tr 
                    key={row.lang}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  >
                    <td className={`p-6 font-black text-lg ${row.color}`}>{row.lang}</td>
                    <td className="p-6">
                      <code className="bg-slate-800 px-3 py-1.5 rounded-lg text-green-400 font-mono text-sm">{row.syntax}</code>
                    </td>
                    <td className="p-6 text-slate-400 font-medium italic">{row.philosophy}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section id="best-practices">
        <InfoBox type="info">
          <h3 className="text-2xl font-black mb-4 text-white">💡 Pro Tip: How to Choose?</h3>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            The &quot;Best&quot; way to handle variables depends on your project goals:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-green-400 font-black mb-1 uppercase tracking-tighter text-xs">Fast Prototyping</div>
              <div className="text-slate-200 font-bold">Python or JavaScript</div>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-blue-400 font-black mb-1 uppercase tracking-tighter text-xs">Enterprise Scale</div>
              <div className="text-slate-200 font-bold">Java or TypeScript</div>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-orange-400 font-black mb-1 uppercase tracking-tighter text-xs">Safety Critical</div>
              <div className="text-slate-200 font-bold">Rust or Swift</div>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-purple-400 font-black mb-1 uppercase tracking-tighter text-xs">Maximum Control</div>
              <div className="text-slate-200 font-bold">C++ or C</div>
            </div>
          </div>
        </InfoBox>
      </Section>
    </div>
  );
}
