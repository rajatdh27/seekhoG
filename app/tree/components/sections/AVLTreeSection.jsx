"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { Settings, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function AVLTreeSection() {
  const [currentRotation, setCurrentRotation] = useState("ll");

  const rotations = {
    ll: { name: "Left-Left (LL)", desc: "Right rotate once", visual: "Right Rotation" },
    rr: { name: "Right-Right (RR)", desc: "Left rotate once", visual: "Left Rotation" },
    lr: { name: "Left-Right (LR)", desc: "Left rotate child, then right rotate parent", visual: "Left then Right Rotation" },
    rl: { name: "Right-Left (RL)", desc: "Right rotate child, then left rotate parent", visual: "Right then Left Rotation" },
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
                    <p className="text-slate-300 mb-4">{rotations[currentRotation].desc}</p>
                    <div className="bg-slate-800 rounded-xl p-4 text-center">
                        <p className="text-sm font-mono text-teal-300">Visual Representation: {rotations[currentRotation].visual}</p>
                        {/* Placeholder for complex SVG or animation */}
                        <div className="h-32 flex items-center justify-center text-slate-500 text-xs mt-2 border border-dashed border-slate-700 rounded-lg">
                            [Interactive Rotation Visualization Placeholder]
                        </div>
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