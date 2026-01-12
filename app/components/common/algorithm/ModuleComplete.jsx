"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gradients = {
  blue: "from-blue-600 to-indigo-600",
  orange: "from-orange-600 to-red-600",
  emerald: "from-emerald-600 to-teal-600",
  purple: "from-purple-600 to-pink-600",
  indigo: "from-indigo-600 to-violet-600",
};

const shadows = {
  blue: "shadow-blue-600/20",
  orange: "shadow-orange-600/20",
  emerald: "shadow-emerald-600/20",
  purple: "shadow-purple-600/20",
  indigo: "shadow-indigo-600/20",
};

export default function ModuleComplete({ 
  title = "Module Complete", 
  description = "You have mastered this section. You are now ready to move to the next level.",
  nextModuleText = "Start Next Module",
  nextModuleLink = "/",
  color = "blue"
}) {
  const gradient = gradients[color] || gradients.blue;
  const shadow = shadows[color] || shadows.blue;
  const btnColor = `bg-${color}-600 hover:bg-${color}-500`;

  return (
    <div className="relative group/cta">
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-[2.5rem] blur opacity-20 group-hover/cta:opacity-40 transition-opacity`} />
      <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 text-center">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">🎓</div>
        <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
        <p className="text-slate-400 text-base font-medium mb-10 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={nextModuleLink}
            className={`px-10 py-5 ${btnColor} text-white rounded-2xl font-black text-lg transition-all shadow-2xl ${shadow} active:scale-95 flex items-center justify-center gap-3`}
          >
            {nextModuleText} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
