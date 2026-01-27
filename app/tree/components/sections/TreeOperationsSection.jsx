"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Settings, BarChart3, Calculator, Search, Trash2 } from "lucide-react";

const operations = [
  {
    id: "height",
    name: "Calculate Height",
    icon: <BarChart3 />,
    description: "Computes the maximum depth of the tree from the root to the farthest leaf node.",
    code: `function height(root) {
  if (root === null) return -1;
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
}`,
  },
  {
    id: "count",
    name: "Count Nodes",
    icon: <Calculator />,
    description: "Recursively counts the total number of nodes in the tree.",
    code: `function countNodes(root) {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}`,
  },
  {
    id: "min",
    name: "Find Minimum",
    icon: <Search />,
    description: "Finds the node with the minimum value. In a BST, this is the leftmost node.",
    code: `function findMin(root) {
  if (root === null) return null;
  while (root.left !== null) {
    root = root.left;
  }
  return root.data;
}`,
  },
  {
    id: "delete",
    name: "Delete Node",
    icon: <Trash2 />,
    description: "Removes a node from a BST while maintaining the BST property. Handles leaf nodes, nodes with one child, and nodes with two children.",
    code: `function deleteNode(root, key) {
  if (root === null) return null;
  if (key < root.data) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.data) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node found
    if (root.left === null && root.right === null) return null; // Leaf
    if (root.left === null) return root.right; // One child
    if (root.right === null) return root.left; // One child
    
    // Two children
    const minRight = findMin(root.right);
    root.data = minRight;
    root.right = deleteNode(root.right, minRight);
  }
  return root;
}`,
  },
];

export default function TreeOperationsSection() {
  const [activeOp, setActiveOp] = useState(operations[0]);

  return (
    <PerspectiveCard color="teal">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-2">
                    {operations.map(op => (
                        <button 
                            key={op.id} 
                            onClick={() => setActiveOp(op)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${activeOp.id === op.id ? 'bg-teal-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                        >
                            <div className={`w-8 h-8 flex items-center justify-center rounded-lg text-teal-400 ${activeOp.id === op.id ? 'bg-teal-500/20' : 'bg-slate-800'}`}>
                                {op.icon}
                            </div>
                            <span className="text-sm font-bold">{op.name}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <main className="lg:col-span-8 xl:col-span-9 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeOp.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-4">{activeOp.name}</h3>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{activeOp.description}</p>
                        
                        <CodeBlock code={activeOp.code} language="javascript" title="JavaScript Implementation"/>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </PerspectiveCard>
  );
}