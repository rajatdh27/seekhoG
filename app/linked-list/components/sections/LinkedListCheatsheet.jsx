"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { ModuleComplete } from "@/app/components/common/algorithm";
import { 
  FileText, 
  Zap, 
  Compass, 
  AlertTriangle, 
  Code2, 
  Target, 
  CheckCircle2, 
  Trash2, 
  List, 
  Share2, 
  ArrowRight,
  MousePointer2,
  Brackets,
  IterationCcw,
  ZapOff,
  BarChart3,
  ChevronRight,
  GitMerge
} from "lucide-react";

export default function LinkedListCheatsheet() {
  const snippets = [
    { 
      title: "Reverse List", 
      code: "let prev = null, curr = head;\nwhile (curr) {\n  let next = curr.next;\n  curr.next = prev;\n  prev = curr; curr = next;\n}\nreturn prev;" 
    },
    { 
      title: "Cycle Detection (Floyd's)", 
      code: "let slow = head, fast = head;\nwhile (fast && fast.next) {\n  slow = slow.next;\n  fast = fast.next.next;\n  if (slow === fast) return true;\n}\nreturn false;" 
    },
    { 
      title: "Merge Sorted Lists", 
      code: "const dummy = new Node(0);\nlet curr = dummy;\nwhile (l1 && l2) {\n  if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }\n  else { curr.next = l2; l2 = l2.next; }\n  curr = curr.next;\n}\ncurr.next = l1 || l2;" 
    },
    { 
      title: "Find Middle", 
      code: "let slow = head, fast = head;\nwhile (fast && fast.next) {\n  slow = slow.next;\n  fast = fast.next.next;\n}\nreturn slow;" 
    }
  ];

  return (
    <PerspectiveCard color="emerald">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-lg">
          <FileText size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Quick Reference</h2>
          <p className="text-slate-400 font-medium">Core pointer mechanics and complexity shortcuts.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Pattern Recognition */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <h3 className="text-xl font-black text-blue-400 mb-6 flex items-center gap-3">
            <Compass size={20} /> Pattern Recognition
          </h3>
          <ul className="space-y-3">
            {[ 
              { q: "Cycle/Middle/Nth?", a: "Two Pointers (Fast/Slow)" },
              { q: "Reverse List?", a: "Reversal Pattern" },
              { q: "Detect Cycle Start?", a: "Floyd's Algorithm" },
              { q: "Merge Sorted?", a: "Merge Lists Pattern" },
              { q: "Head Changes?", a: "Dummy Node Sentinel" },
              { q: "Palindrome/Reorder?", a: "Runner Technique" }
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.q}</span>
                <span className="text-[11px] font-bold text-slate-300">{item.a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complexity Guide */}
        <div className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group">
          <h3 className="text-xl font-black text-amber-400 mb-6 flex items-center gap-3">
            <Zap size={20} /> Time Complexities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[ 
              { op: "Insert Head", val: "O(1)" },
              { op: "Insert Tail", val: "O(1)*" },
              { op: "Delete Head", val: "O(1)" },
              { op: "Search", val: "O(n)" },
              { op: "Access Index", val: "O(n)" },
              { op: "Reverse", val: "O(n)" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-tight mb-1">{item.op}</span>
                <span className="text-xs font-black text-white font-mono">{item.val}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[8px] text-slate-600 font-bold uppercase text-center">* O(1) if tail pointer is maintained</p>
        </div>

        {/* Edge Cases */}
        <div className="bg-rose-500/5 border border-rose-500/20 p-8 rounded-[2rem]">
          <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-3">
            <AlertTriangle size={20} /> Edge Cases to Check
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {["Empty list (head = null)", "Single node list", "Two nodes only", "Cycle in list", "NULL dereference", "Modify while traversing"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <div className="w-1 h-1 rounded-full bg-rose-500" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-[2rem]">
          <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
            <CheckCircle2 size={20} /> Interview Tips
          </h3>
          <ul className="space-y-3">
            {[ 
              "Check null BEFORE accessing .next",
              "Use dummy node for head modifications",
              "Draw diagrams for pointer manipulation",
              "Discuss brute force first, then optimize",
              "Always clarify: Singly or Doubly linked?"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-slate-400 leading-relaxed">
                <ArrowRight size={10} className="text-emerald-500 shrink-0 mt-1" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Language Quick Reference */}
      <div className="mb-12 bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <Brackets size={24} className="text-blue-400" /> Language Quick Ref
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[ 
            { lang: "JS", create: "new Node()", next: ".next", null: "null" },
            { lang: "Py", create: "Node()", next: ".next", null: "None" },
            { lang: "C++", create: "new Node()", next: "->next", null: "nullptr" },
            { lang: "Java", create: "new Node()", next: ".next", null: "null" },
            { lang: "Go", create: "&Node{}", next: ".Next", null: "nil" },
            { lang: "C", create: "malloc()", next: "->next", null: "NULL" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-950 p-4 rounded-xl border border-white/5 text-center group hover:border-blue-500/30 transition-all">
              <div className="text-[10px] font-black text-white mb-3 uppercase tracking-widest">{item.lang}</div>
              <div className="space-y-2">
                <div className="text-[8px] font-mono text-slate-500 uppercase">Create</div>
                <div className="text-[9px] font-mono text-blue-400 font-bold">{item.create}</div>
                <div className="text-[8px] font-mono text-slate-500 uppercase">Next</div>
                <div className="text-[9px] font-mono text-emerald-400 font-bold">{item.next}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complexity Comparison Table */}
      <div className="mb-12 bg-slate-950 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative z-10">
          <BarChart3 size={24} className="text-emerald-400" /> Complexity Comparison
        </h3>
        
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <th className="py-4 px-4">Operation</th>
                <th className="py-4 px-4 text-emerald-400">Singly</th>
                <th className="py-4 px-4 text-blue-400">Doubly</th>
                <th className="py-4 px-4 text-amber-400">Array</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { op: "Insert at Head", s: "O(1)", d: "O(1)", a: "O(n)" },
                { op: "Insert at Tail", s: "O(n)*", d: "O(1)", a: "O(1)" },
                { op: "Delete at Head", s: "O(1)", d: "O(1)", a: "O(n)" },
                { op: "Delete at Tail", s: "O(n)", d: "O(1)", a: "O(1)" },
                { op: "Access by Index", s: "O(n)", d: "O(n)", a: "O(1)" },
                { op: "Search", s: "O(n)", d: "O(n)", a: "O(n)" }
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-black text-slate-500 uppercase text-[9px] tracking-tighter">{row.op}</td>
                  <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">{row.s}</td>
                  <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{row.d}</td>
                  <td className="py-4 px-4 font-bold text-slate-300 group-hover:text-amber-400 transition-colors">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-[9px] text-slate-600 font-bold uppercase text-center">* O(1) if tail pointer is maintained</p>
      </div>

      {/* Templates & Decision Tree */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem]">
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <GitMerge size={20} className="text-purple-400" /> Quick Decision Tree
          </h3>
          <div className="space-y-4">
            {[ 
              { q: "Finding middle/cycle/nth?", a: "Fast & Slow Pointers" },
              { q: "Reversing entire/part of list?", a: "Use prev, curr, next pointers" },
              { q: "Head might change?", a: "Use Dummy Node" },
              { q: "Merging sorted lists?", a: "Compare heads, attach smaller" },
              { q: "Detecting cycle start?", a: "Floyd's algorithm (2 phases)" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-purple-500/30 transition-colors">
                <div className="text-[9px] font-black text-slate-500 uppercase flex items-center gap-2">
                  <span className="text-purple-500 font-black tracking-tighter">IF</span> {item.q}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1 flex items-center gap-2">
                  <ChevronRight size={12} className="text-purple-500" /> {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem]">
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <ZapOff size={20} className="text-rose-400" /> Common Mistakes
          </h3>
          <ul className="space-y-3">
            {[ 
              "Not checking null before .next",
              "Losing reference to head",
              "Infinite loops in cycles",
              "Off-by-one in nth from end",
              "Forgetting tail pointer update"
            ].map((text, i) => (
              <li key={i} className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                <div className="w-1 h-1 bg-rose-500 rounded-full" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Snippets */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <Code2 size={24} className="text-indigo-400" /> Essential Code Snippets
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {snippets.map((snip, i) => (
            <div key={i} className="bg-slate-900 border border-white/5 rounded-2xl p-5 group hover:border-indigo-500/30 transition-all flex flex-col">
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">{snip.title}</div>
              <div className="bg-black/40 rounded-lg border border-white/5 p-4 overflow-x-auto flex-1">
                <pre className="text-xs font-mono text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                  <code>{snip.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleComplete 
        title="Linked List Mastery" 
        description="You've mastered nodes, dynamic allocation, and the Tortoise & Hare patterns. You are now ready for Stacks."
        nextModuleText="Start Stacks" 
        nextModuleLink="/stack" 
        color="emerald" 
      />
    </PerspectiveCard>
  );
}
