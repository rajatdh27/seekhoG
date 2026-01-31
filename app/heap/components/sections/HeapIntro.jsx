"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  Layers, 
  ArrowUp, 
  ArrowDown, 
  GitGraph, 
  Target, 
  Zap, 
  Database,
  Gamepad2,
  ListOrdered
} from "lucide-react";

export default function HeapIntro() {
  const [heapType, setHeapType] = useState("max");
  const [heapDemo, setHeapDemo] = useState([90, 70, 80, 30, 50, 60, 40]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const properties = [
    { title: "Complete Tree", description: "All levels filled except last, left-to-right.", icon: Layers, color: "blue" },
    { title: "Heap Order", description: "Parent vs Child relationship maintained.", icon: ListOrdered, color: "purple" },
    { title: "Fast Access", description: "Get Min/Max in O(1) time.", icon: Zap, color: "yellow" },
    { title: "Efficient", description: "Insert/Delete in O(log n).", icon: Database, color: "cyan" }
  ];

  const applications = [
    { title: "Priority Queues", description: "Job scheduling in OS.", icon: ListOrdered, color: "blue" },
    { title: "Graph Algorithms", description: "Dijkstra's & Prim's algo.", icon: GitGraph, color: "emerald" },
    { title: "Heap Sort", description: "O(n log n) in-place sort.", icon: Layers, color: "rose" },
    { title: "Order Statistics", description: "Finding k-th largest element.", icon: Target, color: "purple" },
    { title: "Load Balancing", description: "Managing server loads.", icon: Zap, color: "amber" },
    { title: "Memory Mgmt", description: "Allocation in some runtimes.", icon: Database, color: "indigo" }
  ];

  // Calculate tree positions
  const getPosition = (index, level, posInLevel, nodesInLevel) => {
    const levelHeight = 80;
    const baseWidth = 600;
    const y = level * levelHeight + 50;
    const x = (posInLevel + 1) * (baseWidth / (nodesInLevel + 1));
    return { x, y };
  };

  // Build tree structure
  const buildTree = (arr) => {
    const tree = [];
    let level = 0;
    let index = 0;

    while (index < arr.length) {
      const nodesInLevel = Math.pow(2, level);
      const levelNodes = [];

      for (let i = 0; i < nodesInLevel && index < arr.length; i++) {
        const pos = getPosition(index, level, i, nodesInLevel);
        levelNodes.push({
          value: arr[index],
          index: index,
          ...pos,
          parent: index > 0 ? Math.floor((index - 1) / 2) : null,
        });
        index++;
      }

      tree.push(...levelNodes);
      level++;
    }

    return tree;
  };

  const treeNodes = buildTree(heapDemo);

  const insertValue = () => {
    if (heapDemo.length >= 15) return;

    const newValue = Math.floor(Math.random() * 100);
    let newHeap = [...heapDemo, newValue];

    // Heapify up
    let index = newHeap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heapType === "max") {
        if (newHeap[index] > newHeap[parentIndex]) {
          [newHeap[index], newHeap[parentIndex]] = [newHeap[parentIndex], newHeap[index]];
          index = parentIndex;
        } else {
          break;
        }
      } else {
        if (newHeap[index] < newHeap[parentIndex]) {
          [newHeap[index], newHeap[parentIndex]] = [newHeap[parentIndex], newHeap[index]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }

    setHeapDemo(newHeap);
  };

  const extractRoot = () => {
    if (heapDemo.length === 0) return;

    let newHeap = [...heapDemo];
    newHeap[0] = newHeap[newHeap.length - 1];
    newHeap.pop();

    if (newHeap.length === 0) {
      setHeapDemo([]);
      return;
    }

    // Heapify down
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let targetIndex = index;

      if (heapType === "max") {
        if (leftChild < newHeap.length && newHeap[leftChild] > newHeap[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < newHeap.length && newHeap[rightChild] > newHeap[targetIndex]) {
          targetIndex = rightChild;
        }
      } else {
        if (leftChild < newHeap.length && newHeap[leftChild] < newHeap[targetIndex]) {
          targetIndex = leftChild;
        }
        if (rightChild < newHeap.length && newHeap[rightChild] < newHeap[targetIndex]) {
          targetIndex = rightChild;
        }
      }

      if (targetIndex !== index) {
        [newHeap[index], newHeap[targetIndex]] = [newHeap[targetIndex], newHeap[index]];
        index = targetIndex;
      } else {
        break;
      }
    }

    setHeapDemo(newHeap);
  };

  const switchHeapType = () => {
    setHeapType(heapType === "max" ? "min" : "max");
    // Re-heapify the array for the new type
    // Simple re-sort for demo purposes or rebuild properly
    // For true heapify, we'd do build-heap O(n), but here we just reset or simple logic
    // Let's just reset to a valid state for simplicity or re-insert all
    const arr = [...heapDemo];
    arr.sort((a, b) => heapType === "max" ? a - b : b - a); // Inverse sort to get close
    setHeapDemo(arr); 
  };

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Introduction to Heaps" 
        icon={Layers} 
        color="rose" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Heap</strong> is a specialized tree-based data structure that satisfies the <strong className="text-rose-400">heap property</strong>. It is a <strong className="text-white">Complete Binary Tree</strong> where every level is filled except possibly the last level, which is filled from left to right.
        </p>

        {/* Interactive Visualization */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden relative">
           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20" />
           
           <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <GitGraph size={20} className="text-rose-400"/> 
                  Interactive Visualization
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Currently viewing: <span className="text-rose-400 uppercase font-bold">{heapType} Heap</span>
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={insertValue}
                  disabled={heapDemo.length >= 15}
                  className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-600/30 rounded-lg text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  + Insert
                </button>
                <button
                  onClick={extractRoot}
                  disabled={heapDemo.length === 0}
                  className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/40 text-rose-400 border border-rose-600/30 rounded-lg text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  - Extract Root
                </button>
                <button
                  onClick={switchHeapType}
                  className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Switch Type
                </button>
              </div>
           </div>

           <div className="relative min-w-[600px] h-[320px] mx-auto bg-slate-950/30 rounded-2xl border border-white/5 shadow-inner mb-6">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {treeNodes.map((node) => {
                  if (node.parent !== null) {
                    const parent = treeNodes[node.parent];
                    return (
                      <line
                        key={`edge-${node.index}`}
                        x1={parent.x}
                        y1={parent.y}
                        x2={node.x}
                        y2={node.y}
                        stroke="#f43f5e"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                      />
                    );
                  }
                  return null;
                })}
              </svg>

              {treeNodes.map((node) => (
                <motion.div
                  key={node.index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    position: "absolute",
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                  onHoverStart={() => setHoveredIndex(node.index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === node.index ? 1.2 : 1,
                      boxShadow: hoveredIndex === node.index 
                        ? "0 0 20px rgba(244, 63, 94, 0.6)" 
                        : "0 0 10px rgba(0,0,0,0.5)",
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-default border-2 
                      ${node.index === 0 
                        ? "bg-rose-500 border-rose-400 text-white" 
                        : "bg-slate-800 border-rose-500/30 text-rose-100"
                      } font-black text-sm shadow-xl`}
                  >
                    {node.value}
                  </motion.div>
                </motion.div>
              ))}
           </div>
           
           <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-t border-white/5 pt-4">
              <div>Size: <span className="text-rose-400">{heapDemo.length}</span></div>
              <div>Root: <span className="text-rose-400">{heapDemo[0] ?? "null"}</span></div>
              <div>Height: <span className="text-rose-400">{heapDemo.length > 0 ? Math.floor(Math.log2(heapDemo.length)) : 0}</span></div>
           </div>
        </div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Max Heap",
              desc: "The parent node is always greater than or equal to its children.",
              root: "Maximum Element",
              icon: <ArrowUp size={24} className="text-emerald-400" />,
              color: "emerald"
            },
            {
              title: "Min Heap",
              desc: "The parent node is always smaller than or equal to its children.",
              root: "Minimum Element",
              icon: <ArrowDown size={24} className="text-amber-400" />,
              color: "amber"
            }
          ].map((type, i) => (
            <div key={i} className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl flex flex-col gap-4 group hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl bg-${type.color}-500/10 flex items-center justify-center border border-${type.color}-500/20`}>
                  {type.icon}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">
                  Root = {type.root}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-2">{type.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Properties Grid */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Target size={24} className="text-rose-400" /> Key Properties
          </h3>
          <ConceptGrid items={properties} columns={4} />
        </div>

        {/* Applications */}
        <div className="p-8 bg-gradient-to-br from-indigo-900/10 to-blue-900/10 border border-indigo-500/20 rounded-[2.5rem]">
           <h3 className="text-xl font-black text-indigo-400 mb-6 flex items-center gap-2">
             <Gamepad2 size={24} /> Real-World Applications
           </h3>
           <ConceptGrid items={applications} columns={3} variant="horizontal" />
        </div>

      </div>
    </PerspectiveCard>
  );
}