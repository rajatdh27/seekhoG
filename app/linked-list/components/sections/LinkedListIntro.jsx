"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { 
  Link as LinkIcon, 
  CheckCircle2, 
  Zap, 
  Target, 
  HelpCircle, 
  Box, 
  Layers, 
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
  BarChart3
} from "lucide-react";

export default function LinkedListIntro() {
  const [listDemo, setListDemo] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ]);
  const [nextId, setNextId] = useState(4);

  const insertAtHead = () => {
    if (listDemo.length < 6) {
      setListDemo([{ id: nextId, value: nextId * 10 }, ...listDemo]);
      setNextId(nextId + 1);
    }
  };

  const insertAtTail = () => {
    if (listDemo.length < 6) {
      setListDemo([...listDemo, { id: nextId, value: nextId * 10 }]);
      setNextId(nextId + 1);
    }
  };

  const deleteHead = () => {
    if (listDemo.length > 0) {
      setListDemo(listDemo.slice(1));
    }
  };

  const listTypes = [
    { 
      title: "Singly Linked List", 
      desc: "Each node has one pointer to the next node.", 
      structure: "[data|next] → [data|next] → NULL",
      uses: "Simple forward traversal, undo functionality",
      pros: ["Simple implementation", "Less memory per node", "Efficient forward traversal"],
      cons: ["No backward traversal", "Deleting requires previous node", "No direct tail access"],
      color: "emerald" 
    },
    { 
      title: "Doubly Linked List", 
      desc: "Nodes have pointers to both next and previous nodes.", 
      structure: "NULL ← [prev|data|next] ⇄ [prev|data|next] → NULL",
      uses: "Browser history (back/forward), LRU cache, deque",
      pros: ["Bidirectional traversal", "Easy deletion with node reference", "Can traverse backward"],
      cons: ["Extra memory for prev pointer", "More complex implementation", "Slightly slower"],
      color: "blue" 
    },
    { 
      title: "Circular Linked List", 
      desc: "The last node points back to the first node.", 
      structure: "[data|next] → [data|next] ↰",
      uses: "Round-robin scheduling, multiplayer games, circular buffers",
      pros: ["Reach any node from any node", "Useful for circular processes", "No NULL checks needed"],
      cons: ["Careful to avoid infinite loops", "Slightly complex insertion/deletion"],
      color: "purple" 
    },
    { 
      title: "Doubly Circular", 
      desc: "Combines doubly and circular structures.", 
      structure: "⟲ [prev|data|next] ⇄ [prev|data|next] ⟳",
      uses: "Music playlists, image viewers, advanced data structures",
      pros: ["All benefits of doubly", "Circular traversal both directions", "Elegant for cyclic data"],
      cons: ["Most complex implementation", "Most memory overhead", "Requires careful handling"],
      color: "rose" 
    }
  ];

  const operations = [
    { title: "Insert", icon: <Plus size={18} />, color: "emerald", items: ["At Head - O(1)", "At Tail - O(n)", "At Position - O(n)"] },
    { title: "Delete", icon: <Minus size={18} />, color: "rose", items: ["At Head - O(1)", "At Tail - O(n)", "By Value - O(n)"] },
    { title: "Search", icon: <Search size={18} />, color: "blue", items: ["By Value - O(n)", "By Index - O(n)", "No Binary Search"] },
    { title: "Reverse", icon: <RotateCcw size={18} />, color: "purple", items: ["Iterative - O(n)", "Recursive - O(n)", "In-place - O(1) space"] }
  ];

  return (
    <PerspectiveCard color="emerald">
      <SectionHeader 
        title="What is a Linked List?" 
        icon={LinkIcon} 
        color="emerald" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Linked List</strong> is a linear data structure where elements are stored in <strong className="text-emerald-400">Nodes</strong>. Each node contains a data field and a <strong className="text-white">pointer/reference</strong> to the next node. Unlike arrays, linked list elements are not stored in contiguous memory locations.
        </p>

        {/* Interactive Node Demo */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Zap size={24} className="text-yellow-400" /> Interactive Nodes
            </h3>
            <div className="flex gap-2">
              <button onClick={insertAtHead} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">Head +</button>
              <button onClick={insertAtTail} className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all">Tail +</button>
              <button onClick={deleteHead} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all">Head -</button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mb-8 overflow-x-auto py-6">
            <div className="text-xs font-black text-emerald-500 mr-2 uppercase tracking-tighter shrink-0">Head →</div>
            <AnimatePresence mode="popLayout">
              {listDemo.map((node, i) => (
                <motion.div 
                  key={node.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  className="flex items-center shrink-0"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex border-2 border-emerald-500/30 rounded-xl overflow-hidden bg-slate-900 shadow-xl group hover:border-emerald-500 transition-colors">
                      <div className="w-12 h-14 flex flex-col items-center justify-center border-r border-emerald-500/20">
                        <span className="text-[8px] font-black text-slate-500 uppercase">Data</span>
                        <span className="text-lg font-black text-white">{node.value}</span>
                      </div>
                      <div className="w-10 h-14 flex flex-col items-center justify-center bg-emerald-500/5 group-hover:bg-emerald-500/20 transition-colors">
                        <span className="text-[8px] font-black text-slate-500 uppercase">Next</span>
                        <ChevronRight size={14} className="text-emerald-500" />
                      </div>
                    </div>
                    <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest">[{i}]</div>
                  </div>
                  {i < listDemo.length - 1 && (
                    <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500/20 mx-1" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {listDemo.length > 0 && <div className="ml-4 px-3 py-1.5 bg-slate-900 border border-white/5 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest">Null</div>}
            {listDemo.length === 0 && <div className="text-slate-500 font-bold text-sm italic">List is empty (Head → Null)</div>}
          </div>
        </div>

        {/* Types of Linked Lists - Detailed Cards */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layers size={24} className="text-indigo-400" /> Types of Linked Lists
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {listTypes.map((type, i) => (
              <div key={i} className={`p-8 bg-slate-900/50 border border-${type.color}-500/20 rounded-[2.5rem] relative overflow-hidden group hover:border-${type.color}-500/40 transition-all`}>
                <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-${type.color}-500 text-4xl font-black`}>{type.icon}</div>
                <h4 className={`text-xl font-black text-${type.color}-400 mb-2 uppercase tracking-tight`}>{type.title}</h4>
                <p className="text-slate-400 text-xs font-medium mb-4">{type.desc}</p>
                
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 mb-6 font-mono text-[10px] text-slate-300 text-center">
                  {type.structure}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-white/5 pb-2">Uses: {type.uses}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[9px] font-black text-emerald-500 uppercase mb-2">Pros</div>
                      <ul className="space-y-1">
                        {type.pros.map((p, j) => (
                          <li key={j} className="text-[9px] text-slate-400 font-bold flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500" /> {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-rose-500 uppercase mb-2">Cons</div>
                      <ul className="space-y-1">
                        {type.cons.map((c, j) => (
                          <li key={j} className="text-[9px] text-slate-400 font-bold flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-rose-500" /> {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types Comparison Table */}
        <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative z-10">
            <BarChart3 size={24} className="text-blue-400" /> Comparison Matrix
          </h3>
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <th className="py-4 px-4">Feature</th>
                  <th className="py-4 px-4 text-emerald-400">Singly</th>
                  <th className="py-4 px-4 text-blue-400">Doubly</th>
                  <th className="py-4 px-4 text-purple-400">Circular</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { f: "Pointers per Node", s: "1 (next)", d: "2 (prev, next)", c: "1 (next)" },
                  { f: "Traversal", s: "Forward only", d: "Both Directions", c: "Forward (Circular)" },
                  { f: "Insert at Head", s: "O(1)", d: "O(1)", c: "O(n) / O(1)*" },
                  { f: "Insert at Tail", s: "O(n) / O(1)*", d: "O(1)*", c: "O(n) / O(1)*" },
                  { f: "Delete Node", s: "O(n) need prev", d: "O(1)", c: "O(n)" },
                  { f: "Memory Usage", s: "Lowest", d: "Highest", c: "Low" },
                  { f: "Implementation", s: "Simplest", d: "Complex", c: "Moderate" },
                  { f: "Best Use Case", s: "Stacks, Basic Lists", d: "LRU Cache, Deque", c: "Round-robin" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-black text-slate-500 uppercase text-[10px] tracking-tighter">{row.f}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">{row.s}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{row.d}</td>
                    <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-purple-400 transition-colors">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[9px] text-slate-600 font-bold uppercase text-center">* When tail pointer is maintained</p>
        </div>

        {/* Complexity Summary */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Target size={24} className="text-rose-400" /> Operation Complexity
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
                    <li key={j} className="text-[10px] text-slate-400 font-bold flex items-center gap-2">
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
            <HelpCircle size={24} className="text-emerald-400" /> Real-World Analogies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Train Cars", desc: "Connected by couplings (pointers). Add/remove cars without moving others.", icon: <TrainFront className="text-blue-400" /> },
              { title: "Conga Line", desc: "Each person holds the shoulder of the next. Easy to join or leave.", icon: <Users className="text-emerald-400" /> },
              { title: "Paper Clips", desc: "Links connect to the next clip. Insert anywhere in the sequence.", icon: <Paperclip className="text-rose-400" /> },
              { title: "Playlist", desc: "Sequential songs pointing to the next. Rearrange without copying data.", icon: <Music className="text-purple-400" /> },
              { title: "Blockchain", desc: "Immutable chain where each block references the hash of the previous.", icon: <Blocks className="text-amber-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-2xl flex gap-4 group hover:border-white/10 transition-colors">
                <div className="shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{item.title}</div>
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Choose the right structure */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
              <CheckCircle2 size={20} /> Use Linked Lists When:
            </h3>
            <ul className="space-y-3">
              {[
                "Frequent insertions/deletions at beginning",
                "Size is unknown or changes frequently",
                "You don't need random access",
                "Memory is fragmented",
                "Implementing stacks, queues, graphs",
                "Efficient splitting/merging required",
                "Dynamic memory allocation preferred"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-blue-400 mb-6 flex items-center gap-3">
              <Box size={20} /> Use Arrays When:
            </h3>
            <ul className="space-y-3">
              {[
                "Need random access (index-based)",
                "Size is fixed or known beforehand",
                "Cache locality is critical for performance",
                "Memory overhead must be minimal",
                "Frequent sorting or searching (Binary Search)",
                "Sequential access is the primary pattern",
                "High performance iteration needed"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Comparison Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CheckCircle2 size={100} /></div>
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
              <Plus size={20} /> Advantages
            </h3>
            <ul className="space-y-3 relative z-10">
              {[
                "Dynamic size - grows/shrinks as needed",
                "Efficient insertion/deletion at head - O(1)",
                "No memory wastage from pre-allocation",
                "Easy to implement stacks and queues",
                "No need to shift elements",
                "Easily extended to complex structures"
              ].map((text, i) => (
                <li key={i} className="text-xs font-bold text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><AlertCircle size={100} /></div>
            <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
              <Minus size={20} /> Disadvantages
            </h3>
            <ul className="space-y-3 relative z-10">
              {[
                "No random access - must traverse from head",
                "Extra memory for storing pointers",
                "Not cache-friendly (scattered memory)",
                "Cannot use binary search efficiently",
                "Reverse traversal difficult (singly)",
                "More complex implementation than arrays"
              ].map((text, i) => (
                <li key={i} className="text-xs font-bold text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-rose-500 rounded-full" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
