"use client";

import { motion } from "framer-motion";
import Section from "@/app/components/common/Section";
import CodeBlock from "@/app/components/common/CodeBlock";
import InfoBox from "@/app/components/common/InfoBox";

export default function VariablesLanguageTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <Section id="intro">
        <h2 className={`text-4xl font-bold mb-6 bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>
          {data.name} Variables & Types
        </h2>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-white">What is a Variable?</h3>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            {data.intro.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {data.intro.highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(51, 65, 85, 0.5)" }}
                className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50 transition-all shadow-lg"
              >
                <div className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: `var(--theme-${data.themeColor})` || data.themeColor }}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>{item.title}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Declarations Section */}
      <Section id="declarations">
        <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
          How to Create Variables
        </h3>
        
        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
          {data.declarations.description}
        </p>

        <CodeBlock title={`${data.name} Declarations`}>
          {data.declarations.code}
        </CodeBlock>

        {data.declarations.constants && (
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              🔒 Constants with <code className="bg-slate-800 px-3 py-1 rounded-lg text-purple-400">{data.declarations.constants.keyword}</code>
            </h4>
            <p className="text-slate-300 mb-6 italic">
              {data.declarations.constants.description}
            </p>
            <CodeBlock title="Constants Example">
              {data.declarations.constants.code}
            </CodeBlock>
          </div>
        )}
      </Section>

      {/* Data Types Section */}
      {data.types && (
        <Section id="types">
          <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            🔢 Fundamental Data Types
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {data.types.primitive.map((type, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <code className="text-green-400 font-bold">{type.name}</code>
                  <div className="text-xs text-slate-500 mt-1">{type.range}</div>
                </div>
                <div className="text-xs font-black text-slate-400 bg-slate-900 px-2 py-1 rounded uppercase tracking-tighter">
                  {type.size}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Limits Section */}
      {data.limits && (
        <Section id="limits">
          <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            💾 Memory Limits & Storage
          </h3>
          
          <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">
            {data.limits.description}
          </p>

          <div className="bg-slate-900/80 rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800/50 border-b border-slate-700/50">
                    {data.limits.table.headers.map((header, i) => (
                      <th key={i} className="p-5 text-slate-400 font-black uppercase tracking-widest text-xs">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {data.limits.table.rows.map((row, i) => (
                    <motion.tr 
                      key={i} 
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                      className="transition-colors"
                    >
                      {row.map((cell, j) => (
                        <td key={j} className={`p-5 text-sm ${j === 0 ? 'font-black text-white' : 'text-slate-400 font-medium'}`}>
                          {j === 0 ? (
                            <code className="bg-slate-800/50 px-2 py-1 rounded text-cyan-400">{cell}</code>
                          ) : cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>
      )}

      {/* Limitations Section */}
      {data.limitations && (
        <Section id="limitations">
          <h3 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
            ⚠️ Limitations & Pitfalls
          </h3>
          
          <div className="space-y-4">
            {data.limitations.warnings.map((warning, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl flex items-start gap-4"
              >
                <div className="bg-red-500/20 p-2 rounded-lg text-red-400 font-black text-xs">ERR_{i+1}</div>
                <p className="text-slate-300 font-medium">{warning}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Collections Section */}
      {data.collections && (
        <Section id="collections">
          <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            📚 Built-in Collections
          </h3>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            {data.collections.description}
          </p>
          <CodeBlock title="Collections Example">
            {data.collections.code}
          </CodeBlock>
        </Section>
      )}

      {/* Advanced Section */}
      {data.advanced && (
        <Section id="advanced">
          <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            🚀 Advanced Features
          </h3>
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            {data.advanced.description}
          </p>
          <CodeBlock title="Advanced Syntax">
            {data.advanced.code}
          </CodeBlock>
        </Section>
      )}

      {/* Usage Section */}
      {data.usage && (
        <Section id="usage">
          <h3 className={`text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            🌍 Real-World Usage
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {data.usage.applications.map((app, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-slate-800/30 p-6 rounded-[2rem] border border-slate-700/50 flex flex-col"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h4 className="text-xl font-black text-white mb-2">{app.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{app.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8">
            <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              🏢 Industry Adoption
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.usage.companies.map((company, i) => (
                <span 
                  key={i}
                  className="px-5 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300 font-bold text-sm hover:border-blue-500/50 transition-colors cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Purpose Section */}
      {data.purpose && (
        <Section id="purpose">
          <h3 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            📜 History & Design
          </h3>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 mb-8">
            <h4 className="text-xl font-black text-white mb-4">Origins</h4>
            <p className="text-slate-300 leading-relaxed text-lg italic">
              &quot;{data.purpose.history}&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {data.purpose.principles.map((principle, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-slate-300 font-bold">{principle}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Future Section */}
      {data.future && (
        <Section id="future">
          <h3 className={`text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>
            🔮 Future Outlook
          </h3>
          
          <div className="space-y-4">
            {data.future.trends.map((trend, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-6 bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-blue-500 rounded-r-2xl"
              >
                <p className="text-white font-bold text-lg">{trend}</p>
              </motion.div>
            ))}
          </div>
          
          <InfoBox type="success" className="mt-10">
            <h4 className="text-xl font-bold mb-2">💡 Why Learn {data.name}?</h4>
            <p className="text-slate-300">
              {data.name} remains one of the most in-demand languages in the world. Mastering its variables and type system 
              builds a strong foundation for any software engineering career.
            </p>
          </InfoBox>
        </Section>
      )}
    </div>
  );
}
