"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  Layers, 
  CheckCircle2, 
  Zap, 
  Target, 
  HelpCircle, 
  Box, 
  RefreshCw, 
  ChevronRight,
  Plus,
  Minus,
  Search,
  RotateCcw,
  TrainFront,
  Users,
  Paperclip,
  Music,
  Blocks,
  AlertCircle,
  BarChart3,
  BookCopy,
  Undo,
  Globe
} from "lucide-react";

export default function StackIntro() {
  const [stackDemo, setStackDemo] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ]);
  const [nextId, setNextId] = useState(4);

  const push = () => {
    if (stackDemo.length < 8) {
      setStackDemo([...stackDemo, { id: nextId, value: nextId * 10 }]);
      setNextId(nextId + 1);
    }
  };

  const pop = () => {
    if (stackDemo.length > 0) {
      setStackDemo(stackDemo.slice(0, -1));
    }
  };

  const operations = [
    { title: "Push", icon: Plus, color: "purple", description: "Adds to top - O(1)" },
    { title: "Pop", icon: Minus, color: "pink", description: "Removes from top - O(1)" },
    { title: "Peek / Top", icon: Search, color: "blue", description: "Views top - O(1)" },
    { title: "isEmpty", icon: RotateCcw, color: "rose", description: "Checks if empty - O(1)" }
  ];

  const analogies = [
    { title: "Stack of Plates", description: "You add or remove plates only from the top of the pile.", icon: Layers, color: "blue" },
    { title: "Book Pile", description: "The last book placed on the pile is the first one you'll pick up.", icon: BookCopy, color: "emerald" },
    { title: "Undo/Redo", description: "Actions are pushed onto a stack; undo 'pops' the last action.", icon: Undo, color: "rose" },
    { title: "Browser History", description: "Each visited page is pushed. The back button 'pops' the last page.", icon: Globe, color: "purple" },
    { title: "Function Calls", description: "The 'call stack' manages active functions in a LIFO manner.", icon: Zap, color: "amber" }
  ];

  const stackTypes = [
    {
      title: "Fixed-Size / Array",
      description: "Uses a static array. Simple and cache-friendly, but has a fixed capacity.",
      icon: Box,
      color: "emerald",
      footer: (
        <ul className="space-y-2 relative z-10 text-xs font-bold">
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Fast, O(1) operations.</li>
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Excellent cache locality.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Stack overflow possible.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Wasted space if underutilized.</li>
        </ul>
      )
    },
    {
      title: "Dynamic / Resizable",
      description: "Uses a dynamic array (like std::vector or ArrayList) that grows as needed.",
      icon: Layers,
      color: "rose",
      footer: (
        <ul className="space-y-2 relative z-10 text-xs font-bold">
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Flexible, no size limit.</li>
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Easy to use.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Occasional O(n) resize cost.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Slight memory overhead.</li>
        </ul>
      )
    },
    {
      title: "Linked-List-Based",
      description: "Each element is a node pointing to the next. Push/Pop operations affect the head of the list.",
      icon: Layers,
      color: "cyan",
      footer: (
        <ul className="space-y-2 relative z-10 text-xs font-bold">
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Truly dynamic, no overflow.</li>
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> No resizing overhead.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Uses extra memory for pointers.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Poor cache locality.</li>
        </ul>
      )
    },
    {
      title: "Min/Max Stack",
      description: "An augmented stack that also tracks the minimum or maximum element in O(1) time.",
      icon: Layers,
      color: "amber",
      footer: (
        <ul className="space-y-2 relative z-10 text-xs font-bold">
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> O(1) getMin/getMax.</li>
          <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> All other stack ops are O(1).</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Extra O(n) space required.</li>
          <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> More complex implementation.</li>
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="What is a Stack?" 
        icon={Layers} 
        color="purple" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Stack</strong> is a linear data structure that follows the <strong className="text-purple-400">LIFO (Last-In, First-Out)</strong> principle. The last element added to the stack is the first element to be removed. Think of it like a stack of plates or a pile of books.
        </p>

        {/* Interactive Stack Demo */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Zap size={24} className="text-yellow-400" /> Interactive LIFO Principle
            </h3>
            <div className="flex gap-2">
              <button onClick={push} className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-purple-500/20 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50" disabled={stackDemo.length >= 8}>Push</button>
              <button onClick={pop} className="px-3 py-1.5 bg-pink-500/10 text-pink-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-pink-500/20 hover:bg-pink-500 hover:text-white transition-all disabled:opacity-50" disabled={stackDemo.length === 0}>Pop</button>
            </div>
          </div>
          
          <div className="relative flex flex-col-reverse items-center justify-end w-full min-h-[300px] bg-grid-slate-800/[0.2] p-4 rounded-xl border border-white/5">
             <div className="w-48 h-2 bg-slate-800 rounded-full mt-2 border border-white/5"/>
             <AnimatePresence mode="popLayout">
              {stackDemo.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`w-48 h-14 rounded-lg flex items-center justify-center font-black text-lg text-white shadow-lg relative ${index === stackDemo.length -1 ? 'mt-0' : 'mt-1.5'}`}
                  style={{
                    background: index === stackDemo.length - 1 
                      ? 'linear-gradient(145deg, #c084fc, #a855f7)'
                      : 'linear-gradient(145deg, #2d3748, #1a202c)',
                    border: index === stackDemo.length - 1 
                      ? '2px solid #d8b4fe'
                      : '2px solid #4a5568',
                    zIndex: index,
                  }}
                >
                  {item.value}
                   {index === stackDemo.length - 1 && (
                      <motion.span 
                        initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale:1}}
                        className="absolute -top-3 -right-3 bg-pink-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                        TOP
                      </motion.span>
                    )}
                </motion.div>
              ))}
            </AnimatePresence>
            {stackDemo.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-500 font-bold text-sm italic">Stack is empty</p>
              </div>
            )}
          </div>
        </div>

        {/* Complexity Summary */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Target size={24} className="text-rose-400" /> Core Operations
          </h3>
          <ConceptGrid items={operations} columns={4} />
        </div>
        
        {/* Real-World Analogies */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <HelpCircle size={24} className="text-purple-400" /> Real-World Analogies
          </h3>
          <ConceptGrid items={analogies} columns={3} />
        </div>

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-purple-400 mb-6 flex items-center gap-3">
              <CheckCircle2 size={20} /> Use Stacks When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need strict LIFO ordering",
                "Reversing sequences or strings",
                "Implementing Backtracking (e.g., DFS)",
                "Parsing expressions (e.g., compilers)",
                "Managing function calls (Call Stack)",
                "Implementing Undo/Redo features",
                "Solving Monotonic Stack problems"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-pink-500/5 border border-pink-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-pink-400 mb-6 flex items-center gap-3">
              <AlertCircle size={20} /> Avoid Stacks When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need to access elements by index",
                "You need to search for an element",
                "Data needs to be sorted",
                "You require a FIFO (First-In, First-Out) order",
                "Frequent insertions or deletions in the middle",
                "Cache performance is absolutely critical"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Implementation Comparison / Types of Stacks */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-blue-400" /> Types of Stacks
          </h3>
          <ConceptGrid items={stackTypes} columns={2} />
        </div>
      </div>
    </PerspectiveCard>
  );
}