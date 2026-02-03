"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Scale, Shield, AlertTriangle, Zap, CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonContent() {
  
  const comparisonPoints = [
    {
      title: "Equality Checks",
      description: "How languages handle '==' vs '==='.",
      icon: Scale,
      color: "blue",
      footer: (
        <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
                <span>JavaScript</span>
                <span className="text-yellow-400 font-bold">Loose (==) & Strict (===)</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Java / Kotlin</span>
                <span className="text-red-400 font-bold">.equals() for content</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Python</span>
                <span className="text-green-400 font-bold">== is content, 'is' is identity</span>
            </div>
        </div>
      )
    },
    {
      title: "Operator Overloading",
      description: "Can you change what '+' does for your custom objects?",
      icon: Zap,
      color: "purple",
      footer: (
        <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
                <span>C++ / Python / Swift</span>
                <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={12}/> Yes</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Java / Go / TS</span>
                <span className="text-rose-400 flex items-center gap-1"><XCircle size={12}/> No</span>
            </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <div id="intro" className="scroll-mt-32">
        <SectionHeader 
          title="The Logic Wars" 
          description="Different philosophies on how math and logic should work."
          icon={Scale} 
          color="purple" 
        />
        
        <div className="mt-12">
          <ConceptGrid items={comparisonPoints} columns={2} />
        </div>

        <div className="mt-24 space-y-12">
            <h3 className="text-2xl font-black text-white text-center">Quirks & Gotchas</h3>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
                    <div className="text-yellow-400 font-black mb-2">JavaScript</div>
                    <div className="text-slate-400 text-sm">
                        <code>'5' + 1 = '51'</code><br/>
                        <code>'5' - 1 = 4</code>
                    </div>
                </div>
                <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
                    <div className="text-blue-400 font-black mb-2">C / C++</div>
                    <div className="text-slate-400 text-sm">
                        <code>ptr + 1</code> moves by size of type (4 bytes for int).
                    </div>
                </div>
                <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl">
                    <div className="text-green-400 font-black mb-2">Python</div>
                    <div className="text-slate-400 text-sm">
                        <code>10 &lt; x &lt; 20</code> is valid syntax.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
