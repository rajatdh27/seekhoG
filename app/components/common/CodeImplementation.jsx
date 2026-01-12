"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";

export default function CodeImplementation({ languages, color = "blue", initialLanguage = "javascript" }) {
  const [activeLang, setActiveLang] = useState(initialLanguage);

  const getExtension = (lang) => {
    switch (lang) {
      case 'javascript': return 'js';
      case 'python': return 'py';
      case 'cpp': return 'cpp';
      case 'c': return 'c';
      case 'java': return 'java';
      case 'go': return 'go';
      default: return lang;
    }
  };

  const getFileName = (lang) => {
    // Generate a generic filename if not provided
    // Or just use 'algorithm'
    return `algorithm.${getExtension(lang)}`;
  };

  const colors = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500",
    teal: "bg-teal-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
  };

  const textColors = {
    blue: "text-blue-400",
    orange: "text-orange-300",
    pink: "text-pink-300",
    indigo: "text-indigo-300",
    teal: "text-teal-300",
    emerald: "text-emerald-300",
    amber: "text-amber-300",
    purple: "text-purple-300",
  };
  
  const iconColors = {
    blue: "text-blue-400",
    orange: "text-orange-400",
    pink: "text-pink-400",
    indigo: "text-indigo-400",
    teal: "text-teal-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    purple: "text-purple-400",
  };

  const bgGlow = {
    blue: "bg-blue-500/10",
    orange: "bg-orange-500/10",
    pink: "bg-pink-500/10",
    indigo: "bg-indigo-500/10",
    teal: "bg-teal-500/10",
    emerald: "bg-emerald-500/10",
    amber: "bg-amber-500/10",
    purple: "bg-purple-500/10",
  };

  const activeColor = colors[color] || colors.blue;
  const textColor = textColors[color] || textColors.blue;
  const iconColor = iconColors[color] || iconColors.blue;
  const glowClass = bgGlow[color] || bgGlow.blue;

  return (
    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner mb-8">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h3 className="text-2xl font-black text-white flex items-center gap-3">
          <Code2 className={iconColor} /> Implementation
        </h3>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeLang === lang
                  ? `${activeColor} text-white`
                  : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-white/5"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="relative group/terminal">
          <div className={`absolute -inset-1 ${glowClass} rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity`} />
          <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                {getFileName(activeLang)}
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className={`text-sm leading-relaxed ${textColor} font-mono`}>
                <code>{languages[activeLang]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
