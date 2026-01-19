"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
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
    { title: "Push", icon: <Plus size={18} />, color: "purple", items: ["Adds to top - O(1)"] },
    { title: "Pop", icon: <Minus size={18} />, color: "pink", items: ["Removes from top - O(1)"] },
    { title: "Peek / Top", icon: <Search size={18} />, color: "blue", items: ["Views top - O(1)"] },
    { title: "isEmpty", icon: <RotateCcw size={18} />, color: "rose", items: ["Checks if empty - O(1)"] }
  ];

  return (
    <PerspectiveCard color="purple">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20">
          <Layers size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">What is a Stack?</h2>
      </div>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {operations.map((op, i) => (
              <div key={i} className={`p-6 bg-slate-900 border border-${op.color}-500/20 rounded-2xl`}>
                <div className={`w-10 h-10 rounded-xl bg-${op.color}-500/10 text-${op.color}-400 flex items-center justify-center mb-4`}>
                  {op.icon}
                </div>
                <h4 className="text-sm font-black text-white uppercase mb-4">{op.title}</h4>
                <ul className="space-y-2">
                  {op.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-400 font-bold flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-${op.color}-500`} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Real-World Analogies */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <HelpCircle size={24} className="text-purple-400" /> Real-World Analogies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Stack of Plates", desc: "You add or remove plates only from the top of the pile.", icon: <Layers className="text-blue-400" /> },
              { title: "Book Pile", desc: "The last book placed on the pile is the first one you'll pick up.", icon: <BookCopy className="text-emerald-400" /> },
              { title: "Undo/Redo", desc: "Actions are pushed onto a stack; undo 'pops' the last action.", icon: <Undo className="text-rose-400" /> },
              { title: "Browser History", desc: "Each visited page is pushed. The back button 'pops' the last page.", icon: <Globe className="text-purple-400" /> },
              { title: "Function Calls", desc: "The 'call stack' manages active functions in a LIFO manner.", icon: <Zap className="text-amber-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex gap-4 group hover:border-white/10 transition-colors">
                <div className="shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{item.title}</div>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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

        {/* Implementation Comparison */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-blue-400" /> Implementation Choices
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Box size={100} className="text-emerald-500" /></div>
              <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
                Array-Based Stack
              </h3>
              <p className="text-xs text-slate-400 mb-4">Uses a fixed-size or dynamic array (like a vector) under the hood. Simple and cache-friendly.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Fast, O(1) operations.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Good cache locality.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Can lead to stack overflow if fixed-size.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Dynamic arrays have O(n) resize cost.</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-rose-500"/></div>
              <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
                Linked-List-Based Stack
              </h3>
              <p className="text-xs text-slate-400 mb-4">Each element is a node pointing to the next. Push/Pop operations affect the head of the list.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Truly dynamic, no overflow.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> No resizing overhead.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Uses extra memory for pointers.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Poor cache locality.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}