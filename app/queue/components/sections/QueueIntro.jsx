"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  ChevronsRight,
  CheckCircle2, 
  Zap, 
  Target, 
  HelpCircle, 
  Plus,
  Minus,
  Search,
  RotateCcw,
  AlertCircle,
  BarChart3,
  BookCopy,
  Undo,
  Globe,
  Layers,
  Users
} from "lucide-react";

export default function QueueIntro() {
  const [queueDemo, setQueueDemo] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ]);
  const [nextId, setNextId] = useState(4);

  const enqueue = () => {
    if (queueDemo.length < 8) {
      setQueueDemo([...queueDemo, { id: nextId, value: nextId * 10 }]);
      setNextId(nextId + 1);
    }
  };

  const dequeue = () => {
    if (queueDemo.length > 0) {
      setQueueDemo(queueDemo.slice(1));
    }
  };

  const operations = [
    { title: "Enqueue", icon: <Plus size={18} />, color: "green", items: ["Adds to rear - O(1)"] },
    { title: "Dequeue", icon: <Minus size={18} />, color: "emerald", items: ["Removes from front - O(1)"] },
    { title: "Peek / Front", icon: <Search size={18} />, color: "teal", items: ["Views front - O(1)"] },
    { title: "isEmpty", icon: <RotateCcw size={18} />, color: "cyan", items: ["Checks if empty - O(1)"] }
  ];

  return (
    <PerspectiveCard color="green">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/20">
          <ChevronsRight size={28} />
        </div>
        <h2 className="text-4xl font-black text-white tracking-tight">What is a Queue?</h2>
      </div>

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Queue</strong> is a linear data structure that follows the <strong className="text-green-400">FIFO (First-In, First-Out)</strong> principle. The first element added to the queue is the first element to be removed. Think of it like a line at a ticket counter.
        </p>

        {/* Interactive Queue Demo */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Zap size={24} className="text-yellow-400" /> Interactive FIFO Principle
            </h3>
            <div className="flex gap-2">
              <button onClick={enqueue} className="px-3 py-1.5 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-500/20 hover:bg-green-500 hover:text-white transition-all disabled:opacity-50" disabled={queueDemo.length >= 8}>Enqueue</button>
              <button onClick={dequeue} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-50" disabled={queueDemo.length === 0}>Dequeue</button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-start w-full min-h-[100px] bg-grid-slate-800/[0.2] p-4 rounded-xl border border-white/5">
             <AnimatePresence mode="popLayout">
              {queueDemo.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`w-24 h-24 rounded-lg flex items-center justify-center font-black text-lg text-white shadow-lg relative ${index === 0 ? 'ml-0' : 'ml-1.5'}`}
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(145deg, #34d399, #10b981)'
                      : (index === queueDemo.length - 1 ? 'linear-gradient(145deg, #6ee7b7, #34d399)' : 'linear-gradient(145deg, #2d3748, #1a202c)'),
                    border: index === 0 
                      ? '2px solid #a7f3d0'
                      : (index === queueDemo.length -1 ? '2px solid #a7f3d0' : '2px solid #4a5568'),
                    zIndex: queueDemo.length - index,
                  }}
                >
                  {item.value}
                   {index === 0 && (
                      <motion.span 
                        initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale:1}}
                        className="absolute -top-3 -left-3 bg-green-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                        FRONT
                      </motion.span>
                    )}
                    {index === queueDemo.length - 1 && (
                        <motion.span 
                            initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale:1}}
                            className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                            REAR
                        </motion.span>
                    )}
                </motion.div>
              ))}
            </AnimatePresence>
            {queueDemo.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-500 font-bold text-sm italic">Queue is empty</p>
              </div>
            )}
          </div>
        </div>

        {/* Core Operations */}
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
            <HelpCircle size={24} className="text-green-400" /> Real-World Analogies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Ticket Counter Line", desc: "The first person to join the line is the first person to get a ticket.", icon: <Users className="text-blue-400" /> },
              { title: "Print Queue", desc: "Print jobs are processed in the order they are received.", icon: <BookCopy className="text-emerald-400" /> },
              { title: "Messaging Apps", desc: "Messages are typically displayed in the order they were sent.", icon: <Undo className="text-rose-400" /> },
              { title: "Web Server Requests", desc: "Incoming HTTP requests are handled in a FIFO manner.", icon: <Globe className="text-green-400" /> },
              { title: "CPU Scheduling", desc: "First-come, first-served scheduling algorithm.", icon: <Zap className="text-amber-400" /> }
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
          <div className="p-8 bg-green-500/5 border border-green-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-green-400 mb-6 flex items-center gap-3">
              <CheckCircle2 size={20} /> Use Queues When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need strict FIFO ordering",
                "Processing tasks in the order they are received",
                "Implementing Breadth-First Search (BFS)",
                "Managing requests in a web server",
                "Handling print jobs",
                "Implementing message queues",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
              <AlertCircle size={20} /> Avoid Queues When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need to access elements by index",
                "You need to search for an element",
                "Data needs to be sorted",
                "You require a LIFO (Last-In, First-Out) order",
                "Frequent insertions or deletions in the middle",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Types of Queues */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-blue-400" /> Types of Queues
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-emerald-500" /></div>
              <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
                Simple Queue
              </h3>
              <p className="text-xs text-slate-400 mb-4">Basic FIFO queue with enqueue at rear, dequeue at front.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Simple to implement.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Clear FIFO behavior.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Wasted space in array implementation.</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-rose-500"/></div>
              <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
                Circular Queue
              </h3>
              <p className="text-xs text-slate-400 mb-4">Rear connects back to front, efficient space usage.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Efficient space usage.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Reuses freed space.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> Slightly complex logic.</li>
              </ul>
            </div>
             <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-cyan-500"/></div>
              <h3 className="text-xl font-black text-cyan-400 mb-6 flex items-center gap-2">
                Priority Queue
              </h3>
              <p className="text-xs text-slate-400 mb-4">Elements have priority, highest priority served first.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Priority-based processing.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Flexible ordering.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> O(log n) operations.</li>
              </ul>
            </div>
             <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-amber-500"/></div>
              <h3 className="text-xl font-black text-amber-400 mb-6 flex items-center gap-2">
                Deque
              </h3>
              <p className="text-xs text-slate-400 mb-4">Insert and remove from both ends.</p>
              <ul className="space-y-2 relative z-10 text-xs font-bold">
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Flexible operations.</li>
                <li className="flex items-center gap-2"><Plus size={12} className="text-green-500"/> Can work as stack or queue.</li>
                <li className="flex items-center gap-2"><Minus size={12} className="text-red-500"/> More methods to implement.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}