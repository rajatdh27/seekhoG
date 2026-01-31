"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import KeyTakeaways from "@/app/components/common/KeyTakeaways";
import { 
  RotateCw, 
  Target, 
  RefreshCw, 
  Layers, 
  AlertTriangle, 
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function RecursionSection() {
  const [activeLang, setActiveLang] = useState("python");

  const recursionConcepts = [
    { 
      title: "Base Case", 
      description: "The condition that stops recursion. Without it, you get infinite recursion and stack overflow!", 
      icon: Target, 
      color: "blue",
      footer: <div className="mt-3 p-3 bg-slate-950 rounded font-mono text-[10px] text-blue-400 border border-blue-500/20">if (n &lt;= 1) return 1;</div>
    },
    { 
      title: "Recursive Case", 
      description: "The part where function calls itself with a smaller input, moving towards the base case.", 
      icon: RefreshCw, 
      color: "purple",
      footer: <div className="mt-3 p-3 bg-slate-950 rounded font-mono text-[10px] text-purple-400 border border-purple-500/20">return n * factorial(n - 1);</div>
    }
  ];

  const recursionExamples = {
    python: `# Recursion Examples in Python\n\ndef factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\ndef fibonacci(n):\n    if n <= 1: return n\n    return fibonacci(n - 1) + fibonacci(n - 2)`,
    javascript: `// Recursion Examples in JS\n\nfunction factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nfunction fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}`
  };

  return (
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="Recursion Fundamentals" 
        description="Functions that call themselves to solve complex problems."
        icon={RotateCw} 
        color="emerald" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Recursion</strong> is a problem-solving technique where a function solves a problem by breaking it down into smaller subproblems of the same type.
        </p>

        <ConceptGrid items={recursionConcepts} columns={2} />

        {/* How it Works - Call Stack Visual */}
        <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Cpu size={120} className="text-emerald-500" /></div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layers size={24} className="text-emerald-400" /> The Call Stack
          </h3>
          
          <div className="space-y-3 font-mono text-sm max-w-md mx-auto">
            {[
              { text: "factorial(3)", ml: "ml-0", bg: "bg-slate-900" },
              { text: "→ 3 * factorial(2)", ml: "ml-4", bg: "bg-slate-900" },
              { text: "→ 2 * factorial(1)", ml: "ml-8", bg: "bg-slate-900" },
              { text: "→ 1 (base case)", ml: "ml-12", bg: "bg-emerald-500/20 text-emerald-400" },
              { text: "← returns 2 * 1 = 2", ml: "ml-8", bg: "bg-slate-800" },
              { text: "← returns 3 * 2 = 6", ml: "ml-4", bg: "bg-slate-800" },
              { text: "Result: 6", ml: "ml-0", bg: "bg-emerald-600 text-white font-black" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-3 rounded-xl border border-white/5 ${step.ml} ${step.bg}`}
              >
                {step.text}
              </motion.div>
            ))}
          </div>
        </div>

        <CodeBlock 
          code={recursionExamples[activeLang]} 
          language={activeLang} 
          title="Recursive Logic"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
              <AlertTriangle size={20} /> Pitfalls
            </h3>
            <ul className="space-y-4">
              {[
                "Infinite recursion (missing base case)",
                "Stack Overflow (too many calls)",
                "Redundant work (exponential time)",
                "Harder to debug than loops"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <KeyTakeaways 
            items={[
              "Identify the simplest possible input (Base Case)",
              "Break the main problem into a subproblem",
              "Each call must move towards the Base Case",
              "Recursion uses O(N) space on the Call Stack"
            ]}
            gradientFrom="emerald-500"
            gradientTo="teal-500"
          />
        </div>
      </div>
    </PerspectiveCard>
  );
}
