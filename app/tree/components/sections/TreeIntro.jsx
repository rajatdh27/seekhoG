"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
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
    { title: "Search", icon: Search, color: "teal", description: "O(log n) in BST" },
    { title: "Insert", icon: Plus, color: "cyan", description: "O(log n) in BST" },
    { title: "Delete", icon: Minus, color: "sky", description: "O(log n) in BST" },
    { title: "Traversal", icon: RotateCcw, color: "blue", description: "O(n)" }
  ];

  const analogies = [
    { title: "File System", description: "Directories and files form a tree structure.", icon: BookCopy, color: "emerald" },
    { title: "DOM in HTML", description: "Web page elements are structured as a tree.", icon: Globe, color: "teal" },
    { title: "Company Hierarchy", description: "CEO at the root, with employees as nodes.", icon: Users, color: "blue" },
  ];

  const treeTypes = [
    { title: "Binary Tree", description: "Each node has at most two children.", icon: Layers, color: "emerald" },
    { title: "BST", description: "Left child < Parent < Right child.", icon: Layers, color: "rose" },
    { title: "AVL Tree", description: "Self-balancing binary search tree.", icon: Layers, color: "cyan" },
    { title: "Heap", description: "Complete binary tree with heap property.", icon: Layers, color: "amber" }
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
          <ConceptGrid items={operations} columns={4} />
        </div>
        
        {/* Real-World Analogies */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <HelpCircle size={24} className="text-teal-400" /> Real-World Analogies
          </h3>
          <ConceptGrid items={analogies} columns={3} />
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
          <ConceptGrid items={treeTypes} columns={2} />
        </div>
      </div>
    </PerspectiveCard>
  );
}