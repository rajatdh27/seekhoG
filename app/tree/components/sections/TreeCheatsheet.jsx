"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { FileText, Check, Lightbulb, TrendingUp, Code2, HelpCircle, RefreshCcwDot } from "lucide-react";

export default function TreeCheatsheet() {
  const cheatItems = [
    {
      title: "Pattern Recognition",
      description: "Recognize common tree problem patterns.",
      icon: Lightbulb,
      color: "teal",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Level-by-level traversal → BFS (Queue)",
            "Path from root to leaf → DFS (Stack/Recursion)",
            "Sorted order required → Inorder (BST)",
            "Copying a tree → Preorder",
            "Deleting a tree → Postorder",
            "Kth Smallest/Largest → Inorder",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Time Complexities (BST)",
      description: "Average and worst-case performance metrics.",
      icon: TrendingUp,
      color: "emerald",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Search: O(log n) avg, O(n) worst",
            "Insert: O(log n) avg, O(n) worst",
            "Delete: O(log n) avg, O(n) worst",
            "Traversal: O(n)",
            "Height: O(n) skew, O(log n) balanced",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Edge Cases",
      description: "Special scenarios to consider during coding.",
      icon: RefreshCcwDot,
      color: "cyan",
      footer: (
        <ul className="space-y-2 relative z-10">
          {[
            "Empty tree (root is null)",
            "Single node (root has no children)",
            "Skewed tree (acts like linked list)",
            "Duplicate values (if allowed)",
            "Unbalanced tree",
          ].map((item) => (
            <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <PerspectiveCard color="teal">
      <SectionHeader 
        title="Tree Cheatsheet" 
        description="Quick reference for complexity and use cases."
        icon={FileText} 
        color="teal" 
      />

      <ConceptGrid items={cheatItems} columns={3} className="mb-12" />

      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
        <Code2 size={24} className="text-teal-400" /> Essential Snippets
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <CodeBlock code={`function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`} language="javascript" title="Max Depth (Height)" />
        <CodeBlock code={`function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`} language="javascript" title="Same Tree Check" />
      </div>

      <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem] mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">Interview Tips</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="font-bold text-teal-400 mb-3">Before Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Ask if it's a binary tree or generic tree.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Ask if values are unique.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Clarify if the tree is balanced.</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-teal-400 mb-3">While Coding:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Always handle the base case (root == null).</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Consider recursive vs iterative solutions.</li>
                    <li className="flex items-start gap-2"><Check size={14} className="mt-1 text-green-500"/>Use meaningful variable names (curr, left, right).</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-teal-400 mb-3">Pattern Hints:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Shortest path" → BFS</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"All paths" → DFS</li>
                    <li className="flex items-start gap-2"><Lightbulb size={14} className="mt-1 text-yellow-500"/>"Nearest Common Ancestor" → LCA Algorithm</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-teal-400 mb-3">Common Follow-ups:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>How to handle very deep trees (stack overflow)?</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Morris Traversal (O(1) space).</li>
                    <li className="flex items-start gap-2"><HelpCircle size={14} className="mt-1 text-sky-500"/>Serialize and Deserialize the tree.</li>
                </ul>
            </div>
        </div>
      </div>
      
      <div className="overflow-x-auto mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">Complexity Comparison</h3>
        <table className="w-full text-sm text-left border-collapse">
            <thead className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                <tr className="border-b border-white/10">
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4 text-center">Search (Avg)</th>
                    <th className="py-3 px-4 text-center">Insert (Avg)</th>
                    <th className="py-3 px-4 text-center">Delete (Avg)</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {[
                    { type: "Binary Search Tree", search: "O(log n)", insert: "O(log n)", delete: "O(log n)" },
                    { type: "AVL Tree", search: "O(log n)", insert: "O(log n)", delete: "O(log n)" },
                    { type: "Red-Black Tree", search: "O(log n)", insert: "O(log n)", delete: "O(log n)" },
                    { type: "Unbalanced BST", search: "O(n)", insert: "O(n)", delete: "O(n)" },
                ].map((row) => (
                    <tr key={row.type} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-400 text-xs">{row.type}</td>
                        <td className="py-3 px-4 text-center font-mono text-emerald-400">{row.search}</td>
                        <td className="py-3 px-4 text-center font-mono text-amber-400">{row.insert}</td>
                        <td className="py-3 px-4 text-center font-mono text-rose-400">{row.delete}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </PerspectiveCard>
  );
}