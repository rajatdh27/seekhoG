"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { 
  Puzzle, 
  Zap, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  GitBranch,
  Layers,
  Repeat
} from "lucide-react";

export default function DPIntro() {
  const [fibComparison, setFibComparison] = useState(null);

  const calculateFibRecursive = (n, calls = { count: 0 }) => {
    calls.count++;
    if (n <= 1) return n;
    return calculateFibRecursive(n - 1, calls) + calculateFibRecursive(n - 2, calls);
  };

  const calculateFibDP = (n) => {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  };

  const compareFib = (n) => {
    const calls = { count: 0 };
    const startRecursive = performance.now();
    const resultRecursive = calculateFibRecursive(n, calls);
    const timeRecursive = (performance.now() - startRecursive).toFixed(4);

    const startDP = performance.now();
    const resultDP = calculateFibDP(n);
    const timeDP = (performance.now() - startDP).toFixed(4);

    setFibComparison({
      n,
      recursive: { result: resultRecursive, time: timeRecursive, calls: calls.count },
      dp: { result: resultDP, time: timeDP, calls: n + 1 },
    });
  };

  return (
    <PerspectiveCard color="pink">
      <SectionHeader 
        title="Introduction" 
        description="Optimize recursive solutions by remembering the past."
        icon={Puzzle} 
        color="pink" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Dynamic Programming (DP)</strong> is a method for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem just once and stores the result to avoid redundant computations.
        </p>

        {/* Interactive Demo */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors duration-500" />
           <h3 className="text-xl font-black text-white mb-6 relative z-10 flex items-center gap-2">
             <Zap size={20} className="text-pink-400" /> Recursion vs DP: The Power of Caching
           </h3>
           
           <div className="relative z-10">
             <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => compareFib(20)}
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-pink-600/20 active:scale-95"
                >
                  Run Fib(20)
                </button>
                <button
                  onClick={() => compareFib(30)}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-rose-600/20 active:scale-95"
                >
                  Run Fib(30)
                </button>
             </div>

             {fibComparison && (
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-slate-950/80 p-6 rounded-2xl border border-rose-500/30">
                   <h4 className="font-black text-rose-400 mb-4 flex items-center gap-2">
                     <AlertTriangle size={18} /> Naive Recursion
                   </h4>
                   <div className="space-y-2 text-sm font-mono text-slate-300">
                     <div className="flex justify-between"><span>Result:</span> <span className="text-white">{fibComparison.recursive.result}</span></div>
                     <div className="flex justify-between"><span>Time:</span> <span className="text-rose-400">{fibComparison.recursive.time}ms</span></div>
                     <div className="flex justify-between"><span>Calls:</span> <span className="text-rose-400">{fibComparison.recursive.calls.toLocaleString()}</span></div>
                     <div className="mt-2 text-xs text-rose-500 font-bold uppercase tracking-widest border-t border-rose-500/20 pt-2">
                       O(2ⁿ) Exponential
                     </div>
                   </div>
                 </div>

                 <div className="bg-slate-950/80 p-6 rounded-2xl border border-emerald-500/30">
                   <h4 className="font-black text-emerald-400 mb-4 flex items-center gap-2">
                     <CheckCircle2 size={18} /> Dynamic Programming
                   </h4>
                   <div className="space-y-2 text-sm font-mono text-slate-300">
                     <div className="flex justify-between"><span>Result:</span> <span className="text-white">{fibComparison.dp.result}</span></div>
                     <div className="flex justify-between"><span>Time:</span> <span className="text-emerald-400">{fibComparison.dp.time}ms</span></div>
                     <div className="flex justify-between"><span>Ops:</span> <span className="text-emerald-400">{fibComparison.dp.calls}</span></div>
                     <div className="mt-2 text-xs text-emerald-500 font-bold uppercase tracking-widest border-t border-emerald-500/20 pt-2">
                       O(n) Linear
                     </div>
                   </div>
                 </div>
               </div>
             )}
           </div>
        </div>

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2rem]">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Layers size={24} className="text-purple-400" /> 1. Overlapping Subproblems
            </h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">
              The problem can be broken down into subproblems which are reused several times.
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-300">
              fib(5) = <span className="text-pink-400">fib(4)</span> + fib(3)<br/>
              <span className="text-pink-400">fib(4)</span> = fib(3) + fib(2)
            </div>
          </div>

          <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2rem]">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <GitBranch size={24} className="text-blue-400" /> 2. Optimal Substructure
            </h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">
              An optimal solution to the problem contains optimal solutions to the sub-problems.
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-300">
              ShortestPath(A→C) = <br/>
              Shortest(A→B) + Shortest(B→C)
            </div>
          </div>
        </div>

        {/* Approaches */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Repeat size={24} className="text-amber-400" /> Two Main Approaches
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
               <h4 className="text-lg font-black text-pink-400 mb-2">Top-Down (Memoization)</h4>
               <p className="text-slate-400 text-sm">Recursion + Caching. Solve the big problem by recursively calling for subproblems and saving results.</p>
             </div>
             <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
               <h4 className="text-lg font-black text-emerald-400 mb-2">Bottom-Up (Tabulation)</h4>
               <p className="text-slate-400 text-sm">Iterative. Solve smallest subproblems first and build up to the final solution using a table.</p>
             </div>
          </div>
        </div>

      </div>
    </PerspectiveCard>
  );
}