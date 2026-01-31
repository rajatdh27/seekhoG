"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { 
  GitMerge,
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
  BookCopy,
  Undo,
  Globe,
  Layers,
  Users,
  AlertCircle,
  BarChart3
} from "lucide-react";

export default function TreeIntro() {
  const operations = [
    { title: "Search", icon: <Search size={18} />, color: "teal", items: ["O(log n) in BST"] },
    { title: "Insert", icon: <Plus size={18} />, color: "cyan", items: ["O(log n) in BST"] },
    { title: "Delete", icon: <Minus size={18} />, color: "sky", items: ["O(log n) in BST"] },
    { title: "Traversal", icon: <RotateCcw size={18} />, color: "blue", items: ["O(n)"] }
  ];

  return (
    <PerspectiveCard color="teal">
      <SectionHeader 
        title="What is a Tree?" 
        icon={GitMerge} 
        color="teal" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Tree</strong> is a hierarchical data structure consisting of nodes connected by edges. It's a non-linear structure, unlike arrays or linked lists, and is fundamental for representing hierarchical data.
        </p>

        {/* Interactive Tree Demo */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-white/5 shadow-inner relative overflow-hidden">
          <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
            <Zap size={24} className="text-yellow-400" /> Basic Tree Structure
          </h3>
          <div className="flex flex-col items-center">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg cursor-pointer z-10">A</motion.div>
            <div className="flex -mt-2">
              <div className="w-px h-12 bg-teal-400/50 transform -rotate-45 -translate-x-8"></div>
              <div className="w-px h-12 bg-teal-400/50 transform rotate-45 translate-x-8"></div>
            </div>
            <div className="flex gap-24">
              <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg cursor-pointer z-10">B</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg cursor-pointer z-10">C</motion.div>
            </div>
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
            <HelpCircle size={24} className="text-teal-400" /> Real-World Analogies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "File System", desc: "Directories and files form a tree structure.", icon: <BookCopy className="text-emerald-400" /> },
              { title: "DOM in HTML", desc: "Web page elements are structured as a tree.", icon: <Globe className="text-teal-400" /> },
              { title: "Company Hierarchy", desc: "CEO at the root, with employees as nodes.", icon: <Users className="text-blue-400" /> },
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
          <div className="p-8 bg-teal-500/5 border border-teal-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-teal-400 mb-6 flex items-center gap-3">
              <CheckCircle2 size={20} /> Use Trees When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need to store hierarchical data",
                "You need fast search, insertion, and deletion (BST)",
                "You need to represent a file system",
                "You are parsing expressions (Expression Tree)",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-cyan-400 mb-6 flex items-center gap-3">
              <AlertCircle size={20} /> Avoid Trees When:
            </h3>
            <ul className="space-y-3">
              {[
                "You have non-hierarchical data",
                "You need simple, sequential access",
                "You have a small, fixed-size dataset (array might be faster)",
                "You need to access elements by index frequently",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Types of Trees */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-blue-400" /> Types of Trees
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-emerald-500" /></div>
              <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
                Binary Tree
              </h3>
              <p className="text-xs text-slate-400 mb-4">Each node has at most two children.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-rose-500"/></div>
              <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
                Binary Search Tree (BST)
              </h3>
              <p className="text-xs text-slate-400 mb-4">A binary tree where the left child is smaller and the right child is larger than the parent.</p>
            </div>
             <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-cyan-500"/></div>
              <h3 className="text-xl font-black text-cyan-400 mb-6 flex items-center gap-2">
                AVL Tree
              </h3>
              <p className="text-xs text-slate-400 mb-4">A self-balancing binary search tree.</p>
            </div>
             <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} className="text-amber-500"/></div>
              <h3 className="text-xl font-black text-amber-400 mb-6 flex items-center gap-2">
                Heap
              </h3>
              <p className="text-xs text-slate-400 mb-4">A complete binary tree that satisfies the heap property.</p>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}