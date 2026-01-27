"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Settings, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function AVLTreeSection() {
  const [currentRotation, setCurrentRotation] = useState("ll");

  const rotations = {
    ll: { 
      name: "Left-Left (LL)", 
      desc: "Right rotate once around the unbalanced node.", 
      visual: (
        <svg viewBox="0 0 200 120" className="w-full h-full max-w-[300px] mx-auto">
          {/* Before */}
          <g transform="translate(40, 20)">
            <circle cx="40" cy="20" r="15" className="fill-teal-600" />
            <text x="40" y="25" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
            <line x1="30" y1="30" x2="15" y2="50" className="stroke-teal-400 stroke-2" />
            <circle cx="10" cy="60" r="15" className="fill-teal-500" />
            <text x="10" y="65" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="5" y1="70" x2="-10" y2="90" className="stroke-teal-400 stroke-2" />
            <circle cx="-20" cy="100" r="15" className="fill-teal-400" />
            <text x="-20" y="105" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
          </g>
          {/* Arrow */}
          <path d="M 90 60 L 110 60" className="stroke-slate-500 stroke-2" markerEnd="url(#arrowhead)" />
          {/* After */}
          <g transform="translate(140, 20)">
            <circle cx="30" cy="40" r="15" className="fill-teal-500" />
            <text x="30" y="45" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="20" y1="50" x2="5" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="0" cy="80" r="15" className="fill-teal-400" />
            <text x="0" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="40" y1="50" x2="55" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="60" cy="80" r="15" className="fill-teal-600" />
            <text x="60" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
          </g>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
            </marker>
          </defs>
        </svg>
      )
    },
    rr: { 
      name: "Right-Right (RR)", 
      desc: "Left rotate once around the unbalanced node.", 
      visual: (
        <svg viewBox="0 0 200 120" className="w-full h-full max-w-[300px] mx-auto">
          {/* Before */}
          <g transform="translate(20, 20)">
            <circle cx="20" cy="20" r="15" className="fill-teal-600" />
            <text x="20" y="25" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="30" y1="30" x2="45" y2="50" className="stroke-teal-400 stroke-2" />
            <circle cx="50" cy="60" r="15" className="fill-teal-500" />
            <text x="50" y="65" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="60" y1="70" x2="75" y2="90" className="stroke-teal-400 stroke-2" />
            <circle cx="80" cy="100" r="15" className="fill-teal-400" />
            <text x="80" y="105" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
          </g>
          {/* Arrow */}
          <path d="M 90 60 L 110 60" className="stroke-slate-500 stroke-2" markerEnd="url(#arrowhead)" />
          {/* After */}
          <g transform="translate(140, 20)">
            <circle cx="30" cy="40" r="15" className="fill-teal-500" />
            <text x="30" y="45" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="20" y1="50" x2="5" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="0" cy="80" r="15" className="fill-teal-400" />
            <text x="0" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="40" y1="50" x2="55" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="60" cy="80" r="15" className="fill-teal-600" />
            <text x="60" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
          </g>
        </svg>
      )
    },
    lr: { 
      name: "Left-Right (LR)", 
      desc: "Left rotate child, then right rotate parent.", 
      visual: (
        <svg viewBox="0 0 200 120" className="w-full h-full max-w-[300px] mx-auto">
          <g transform="translate(40, 20)">
            <circle cx="40" cy="20" r="15" className="fill-teal-600" />
            <text x="40" y="25" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
            <line x1="30" y1="30" x2="15" y2="50" className="stroke-teal-400 stroke-2" />
            <circle cx="10" cy="60" r="15" className="fill-teal-400" />
            <text x="10" y="65" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="20" y1="70" x2="35" y2="90" className="stroke-teal-400 stroke-2" />
            <circle cx="40" cy="100" r="15" className="fill-teal-500" />
            <text x="40" y="105" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
          </g>
          <path d="M 90 60 L 110 60" className="stroke-slate-500 stroke-2" markerEnd="url(#arrowhead)" />
          <g transform="translate(140, 20)">
            <circle cx="30" cy="40" r="15" className="fill-teal-500" />
            <text x="30" y="45" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="20" y1="50" x2="5" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="0" cy="80" r="15" className="fill-teal-400" />
            <text x="0" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="40" y1="50" x2="55" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="60" cy="80" r="15" className="fill-teal-600" />
            <text x="60" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
          </g>
        </svg>
      )
    },
    rl: { 
      name: "Right-Left (RL)", 
      desc: "Right rotate child, then left rotate parent.", 
      visual: (
        <svg viewBox="0 0 200 120" className="w-full h-full max-w-[300px] mx-auto">
          <g transform="translate(20, 20)">
            <circle cx="20" cy="20" r="15" className="fill-teal-600" />
            <text x="20" y="25" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="30" y1="30" x2="45" y2="50" className="stroke-teal-400 stroke-2" />
            <circle cx="50" cy="60" r="15" className="fill-teal-400" />
            <text x="50" y="65" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
            <line x1="40" y1="70" x2="25" y2="90" className="stroke-teal-400 stroke-2" />
            <circle cx="20" cy="100" r="15" className="fill-teal-500" />
            <text x="20" y="105" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
          </g>
          <path d="M 90 60 L 110 60" className="stroke-slate-500 stroke-2" markerEnd="url(#arrowhead)" />
          <g transform="translate(140, 20)">
            <circle cx="30" cy="40" r="15" className="fill-teal-500" />
            <text x="30" y="45" textAnchor="middle" className="fill-white text-[10px] font-bold">2</text>
            <line x1="20" y1="50" x2="5" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="0" cy="80" r="15" className="fill-teal-400" />
            <text x="0" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">1</text>
            <line x1="40" y1="50" x2="55" y2="70" className="stroke-teal-400 stroke-2" />
            <circle cx="60" cy="80" r="15" className="fill-teal-600" />
            <text x="60" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold">3</text>
          </g>
        </svg>
      )
    },
  };

  return (
    <PerspectiveCard color="teal">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-2">
                    {Object.keys(rotations).map(key => (
                        <button 
                            key={key} 
                            onClick={() => setCurrentRotation(key)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${currentRotation === key ? 'bg-teal-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                        >
                            <span className="text-sm font-bold">{rotations[key].name}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <main className="lg:col-span-8 xl:col-span-9 min-h-[400px]">
                <h3 className="text-3xl font-black text-white mb-4">AVL Trees & Balancing</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">
                    An AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes.
                </p>

                <div className="bg-slate-900/50 border border-teal-500/20 rounded-2xl p-8 mb-8">
                    <h4 className="text-xl font-bold text-teal-400 mb-2">{rotations[currentRotation].name} Case</h4>
                    <p className="text-slate-300 mb-6">{rotations[currentRotation].desc}</p>
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/5 flex items-center justify-center">
                        {rotations[currentRotation].visual}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                        <h4 className="flex items-center gap-2 font-bold text-green-400 mb-3"><CheckCircle2 size={18}/> Advantages</h4>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>• Guaranteed O(log n) search, insert, delete</li>
                            <li>• Strictly balanced structure</li>
                            <li>• Ideal for read-heavy operations</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                        <h4 className="flex items-center gap-2 font-bold text-rose-400 mb-3"><AlertCircle size={18}/> Disadvantages</h4>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li>• Complex rotation logic</li>
                            <li>• Higher overhead for insertions/deletions</li>
                            <li>• Extra storage for height factor</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    </PerspectiveCard>
  );
}
