"use client";

import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

const gradients = {
  blue: "from-blue-600 to-indigo-600",
  indigo: "from-indigo-600 to-violet-600",
  violet: "from-violet-600 to-fuchsia-600",
  purple: "from-purple-600 to-pink-600",
  fuchsia: "from-fuchsia-600 to-pink-600",
  pink: "from-pink-600 to-rose-600",
  rose: "from-rose-600 to-red-600",
  red: "from-red-600 to-orange-600",
  orange: "from-orange-600 to-amber-600",
  amber: "from-amber-600 to-yellow-600",
  yellow: "from-yellow-600 to-lime-600",
  lime: "from-lime-600 to-green-600",
  green: "from-green-600 to-emerald-600",
  emerald: "from-emerald-600 to-teal-600",
  teal: "from-teal-600 to-cyan-600",
  cyan: "from-cyan-600 to-blue-600",
};

const shadows = {
  blue: "shadow-blue-600/20",
  indigo: "shadow-indigo-600/20",
  violet: "shadow-violet-600/20",
  purple: "shadow-purple-600/20",
  fuchsia: "shadow-fuchsia-600/20",
  pink: "shadow-pink-600/20",
  rose: "shadow-rose-600/20",
  red: "shadow-red-600/20",
  orange: "shadow-orange-600/20",
  amber: "shadow-amber-600/20",
  yellow: "shadow-yellow-600/20",
  lime: "shadow-lime-600/20",
  green: "shadow-green-600/20",
  emerald: "shadow-emerald-600/20",
  teal: "shadow-teal-600/20",
  cyan: "shadow-cyan-600/20",
};

export default function NextModuleCard({ 
  title = "Module Complete", 
  description = "You have mastered this section. You are now ready to move to the next level.",
  nextModuleText = "Start Next Module",
  nextModuleLink = "/",
  color = "blue"
}) {
  const gradient = gradients[color] || gradients.blue;
  const shadow = shadows[color] || shadows.blue;
  // Dynamic tailwind classes might need safelisting if not full implementation, 
  // but using inline style for colors is safer if the class names aren't detected by JIT.
  // We'll stick to the template literal approach assuming Tailwind JIT is watching this file.
  
  return (
    <div className="relative group/cta pt-12 pb-24">
      <div className={`absolute inset-0 top-12 bottom-24 bg-gradient-to-r ${gradient} rounded-[2.5rem] blur opacity-20 group-hover/cta:opacity-40 transition-opacity duration-500`} />
      <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden">
        
        {/* Background decorative elements */}
        <div className={`absolute top-0 right-0 p-32 bg-${color}-500/5 blur-3xl rounded-full pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 p-24 bg-${color}-500/5 blur-3xl rounded-full pointer-events-none`} />

        <div className="relative z-10 flex flex-col items-center">
          <div className={`w-20 h-20 bg-${color}-500/10 rounded-2xl flex items-center justify-center text-${color}-500 border border-${color}-500/20 mb-8 group-hover/cta:scale-110 transition-transform duration-500`}>
            <Trophy size={40} />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            {title}
          </h3>
          
          <p className="text-slate-400 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <Link 
            href={nextModuleLink}
            className={`group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-${color}-600 hover:bg-${color}-500 text-white rounded-2xl font-black text-xl transition-all shadow-xl ${shadow} hover:shadow-2xl hover:-translate-y-1 active:scale-95`}
          >
            {nextModuleText}
            <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}