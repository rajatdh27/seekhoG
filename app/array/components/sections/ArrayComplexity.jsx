"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { ComplexityAnalysis } from "@/app/components/common/algorithm";
import { Zap } from "lucide-react";

export default function ArrayComplexity() {
  return (
    <PerspectiveCard color="amber">
      <SectionHeader 
        title="Complexity Analysis" 
        description="Performance characteristics of common array operations."
        icon={Zap} 
        color="amber" 
      />

      <div className="space-y-8">
        <ComplexityAnalysis 
          timeBest="O(1)"
          timeAverage="O(n)"
          timeWorst="O(n)"
          space="O(n)"
          spaceNote="Contiguous Block"
          color="amber"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-emerald-500/20">
            <h4 className="text-lg font-black text-emerald-400 mb-4">Fast Operations (O(1))</h4>
            <ul className="space-y-3">
              {[
                "Accessing element by index",
                "Updating element at index",
                "Adding to end (Dynamic Array, amortized)",
                "Removing from end"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-rose-500/20">
            <h4 className="text-lg font-black text-rose-400 mb-4">Slow Operations (O(n))</h4>
            <ul className="space-y-3">
              {[
                "Inserting at beginning/middle (shifting required)",
                "Removing from beginning/middle",
                "Searching value (Linear Search)",
                "Resizing (when capacity is full)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}