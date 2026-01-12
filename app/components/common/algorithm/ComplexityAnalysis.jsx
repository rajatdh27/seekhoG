"use client";
import { Gauge, Layers } from "lucide-react";

const textColors = {
  blue: "text-blue-400",
  pink: "text-pink-400",
  indigo: "text-indigo-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
};

export default function ComplexityAnalysis({ timeBest, timeAverage, timeWorst, space, spaceNote, color = "blue" }) {
  const accentColor = textColors[color] || textColors.blue;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
        <h4 className={`flex items-center gap-2 ${accentColor} font-black mb-4`}>
          <Gauge size={20} /> Time Complexity
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
            <span className="text-slate-400 font-medium text-sm">Best Case</span>
            <span className="text-emerald-400 font-black">{timeBest}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
            <span className="text-slate-400 font-medium text-sm">Average</span>
            <span className={timeAverage.includes('²') ? "text-rose-400 font-black" : "text-emerald-400 font-black"}>{timeAverage}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-white/5">
            <span className="text-slate-400 font-medium text-sm">Worst Case</span>
            <span className={timeWorst.includes('²') ? "text-rose-400 font-black" : "text-emerald-400 font-black"}>{timeWorst}</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 rounded-2xl p-6 border border-white/5">
        <h4 className={`flex items-center gap-2 ${accentColor} font-black mb-4`}>
          <Layers size={20} /> Space Complexity
        </h4>
        <div className="flex items-center justify-center h-32">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">{space}</div>
            <div className={`${accentColor} text-sm font-bold uppercase tracking-widest`}>Auxiliary Space</div>
          </div>
        </div>
        {spaceNote && <p className="text-center text-slate-500 text-xs mt-2">{spaceNote}</p>}
      </div>
    </div>
  );
}
