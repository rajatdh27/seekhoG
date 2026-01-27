"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { ArrowRightLeft, GitMerge, Binary, GitBranch, Settings } from "lucide-react";

const traversals = [
  {
    id: "inorder",
    name: "In-Order Traversal",
    description: "Left → Root → Right. Results in a sorted sequence for a BST.",
    code: `function inorder(node) {
  if (node === null) return;
  inorder(node.left);
  console.log(node.data);
  inorder(node.right);
}`,
  },
  {
    id: "preorder",
    name: "Pre-Order Traversal",
    description: "Root → Left → Right. Useful for creating a copy of a tree.",
    code: `function preorder(node) {
  if (node === null) return;
  console.log(node.data);
  preorder(node.left);
  preorder(node.right);
}`,
  },
  {
    id: "postorder",
    name: "Post-Order Traversal",
    description: "Left → Right → Root. Useful for deleting nodes or expression evaluation.",
    code: `function postorder(node) {
  if (node === null) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.data);
}`,
  },
  {
    id: "levelorder",
    name: "Level-Order Traversal",
    description: "Visits nodes level by level, from left to right. Uses a queue.",
    code: `function levelOrder(root) {
  if (root === null) return;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}`,
  },
];

export default function TreeTraversalsSection() {
  const [traversal, setTraversal] = useState(traversals[0]);

  return (
    <PerspectiveCard color="teal">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-2">
                    {traversals.map(t => (
                        <button 
                            key={t.id} 
                            onClick={() => setTraversal(t)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${traversal.id === t.id ? 'bg-teal-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                        >
                            <span className="text-sm font-bold">{t.name}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <main className="lg:col-span-8 xl:col-span-9 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={traversal.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-4">{traversal.name}</h3>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{traversal.description}</p>
                        
                        <CodeBlock code={traversal.code} language="javascript" title="JavaScript Implementation"/>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </PerspectiveCard>
  );
}