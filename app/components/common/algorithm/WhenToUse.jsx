"use client";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function WhenToUse({ useCases, avoidCases }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-8">
         <h3 className="text-lg font-black text-emerald-400 mb-4 flex items-center gap-2">
           <CheckCircle2 size={20} /> When to Use
         </h3>
         <ul className="space-y-3">
           {useCases.map((item, i) => (
             <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
               {item}
             </li>
           ))}
         </ul>
      </div>
      <div className="bg-rose-500/5 border border-rose-500/10 rounded-[2rem] p-8">
         <h3 className="text-lg font-black text-rose-400 mb-4 flex items-center gap-2">
           <AlertCircle size={20} /> Avoid When
         </h3>
         <ul className="space-y-3">
           {avoidCases.map((item, i) => (
             <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
               {item}
             </li>
           ))}
         </ul>
      </div>
    </div>
  );
}
