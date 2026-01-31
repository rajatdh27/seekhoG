"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Grid, 
  ChevronRight, 
  FastForward, 
  Repeat, 
  RefreshCw, 
  Share2, 
  Scissors, 
  Drama, 
  Move, 
  Zap,
  Target,
  Code2,
  CheckCircle2,
  Compass
} from "lucide-react";

export default function LinkedListPatterns() {
  const [activePattern, setActiveOp] = useState("fastSlow");

  const patterns = [
    { id: "fastSlow", title: "Two Pointers (Fast & Slow)", difficulty: "Easy-Medium", icon: <FastForward size={24} />, color: "emerald", desc: "Use two pointers moving at different speeds (Tortoise & Hare).", cases: ["Cycle detection", "Finding middle", "Find loop start"] },
    { id: "reversal", title: "Reversal", difficulty: "Medium", icon: <Repeat size={24} />, color: "blue", desc: "In-place pointer reversal using three variables.", cases: ["Reverse full list", "Reverse sub-range", "Palindrome check"] },
    { id: "cycle", title: "Cycle Detection", difficulty: "Medium", icon: <RefreshCw size={24} />, color: "purple", desc: "Determine if a list loops back using Floyd's algorithm.", cases: ["Has Cycle?", "Loop starting node", "Length of cycle"] },
    { id: "merge", title: "Merge Lists", difficulty: "Easy-Medium", icon: <Share2 size={24} />, color: "cyan", desc: "Combine two or more lists while maintaining order.", cases: ["Merge 2 sorted lists", "Merge K sorted lists", "Interleave nodes"] },
    { id: "intersection", title: "Intersection", difficulty: "Medium", icon: <Scissors size={24} />, color: "rose", desc: "Find the common node where two lists meet.", cases: ["Intersection of Y list", "Common suffix discovery"] },
    { id: "dummy", title: "Dummy Node", difficulty: "Easy", icon: <Drama size={24} />, color: "indigo", desc: "Create a sentinel node before head to simplify head removal/addition.", cases: ["Merging lists", "Deleting head", "Grouping nodes"] },
    { id: "runner", title: "Runner Technique", difficulty: "Medium", icon: <Move size={24} />, color: "amber", desc: "Maintain a fixed distance (K) between two pointers.", cases: ["Kth node from end", "Remove Nth from end"] },
    { id: "inplace", title: "In-place Ops", difficulty: "Easy-Medium", icon: <Zap size={24} />, color: "orange", desc: "Modify structure without extra space.", cases: ["Swap nodes", "Rotate list", "Remove duplicates"] }
  ];

  const codeData = {
    fastSlow: {
      javascript: `let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // Cycle found
}`,
      python: `slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return True # Cycle found`,
      java: `Node slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
}`,
      cpp: `Node *slow = head, *fast = head;
while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) return true;
}`,
      c: `struct Node *slow = head, *fast = head;
while (fast != NULL && fast->next != NULL) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) return 1;
}`,
      go: `slow, fast := head, head
for fast != nil && fast.Next != nil {
    slow = slow.Next
    fast = fast.Next.Next
    if slow == fast { return true }
}`
    },
    reversal: {
      javascript: `let prev = null, curr = head;
while (curr) {
  let next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;`,
      python: `prev, curr = None, head
while curr:
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node
return prev`,
      java: `Node prev = null, curr = head;
while (curr != null) {
    Node next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
return prev;`,
      cpp: `Node *prev = nullptr, *curr = head;
while (curr) {
    Node* next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
}
return prev;`,
      c: `struct Node *prev = NULL, *curr = head, *next;
while (curr != NULL) {
    next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
}
return prev;`,
      go: `var prev *Node
curr := head
for curr != nil {
    next := curr.Next
    curr.Next = prev
    prev = curr
    curr = next
}
return prev`
    },
    dummy: {
      javascript: `const dummy = new Node(0);
dummy.next = head;
let prev = dummy, curr = head;
// Simplified edge case logic (head deletion)
if (curr.data === key) prev.next = curr.next;
return dummy.next;`,
      python: `dummy = Node(0)
dummy.next = head
prev, curr = dummy, head
# Simplified logic for head modification
if curr.data == key: prev.next = curr.next
return dummy.next`,
      java: `Node dummy = new Node(0);
dummy.next = head;
Node prev = dummy, curr = head;
if (curr.data == val) prev.next = curr.next;
return dummy.next;`,
      cpp: `Node* dummy = new Node(0);
dummy->next = head;
Node* prev = dummy;
// Prevents special case if head needs removing
return dummy->next;`,
      c: `struct Node dummy;
dummy.next = head;
struct Node* prev = &dummy;
// Logic here
return dummy.next;`,
      go: `dummy := &Node{Data: 0, Next: head}
prev := dummy
// Logic
return dummy.Next`
    },
    inplace: {
      javascript: `// Remove duplicates
let curr = head;
while (curr && curr.next) {
  if (curr.data === curr.next.data) 
    curr.next = curr.next.next;
  else curr = curr.next;
}`,
      python: `curr = head
while curr and curr.next:
    if curr.data == curr.next.data:
        curr.next = curr.next.next
    else:
        curr = curr.next`,
      java: `Node curr = head;
while (curr != null && curr.next != null) {
    if (curr.data == curr.next.data)
        curr.next = curr.next.next;
    else curr = curr.next;
}`,
      cpp: `Node* curr = head;
while (curr && curr->next) {
    if (curr->data == curr->next->data)
        curr->next = curr->next->next;
    else curr = curr->next;
}`,
      c: `struct Node* curr = head;
while (curr != NULL && curr->next != NULL) {
    if (curr->data == curr->next->data)
        curr->next = curr->next->next;
    else curr = curr->next;
}`,
      go: `curr := head
for curr != nil && curr.Next != nil {
    if curr.Data == curr.Next.Data {
        curr.Next = curr.Next.Next
    } else {
        curr = curr.Next
    }
}`
    }
  };

  // Fallback for missing patterns in codeData to prevent crash while adding
  const activeCode = codeData[activePattern] || codeData.fastSlow;
  const currentPattern = patterns.find(p => p.id === activePattern);

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Interview Patterns" 
        description="8 essential techniques to solve 95% of problems."
        icon={Grid} 
        color="purple" 
      />

      {/* Grid of Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {patterns.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveOp(p.id)}
            className={`p-6 rounded-[2rem] border transition-all text-left group relative overflow-hidden flex flex-col ${
              activePattern === p.id 
                ? `bg-${p.color}-500/10 border-${p.color}-500/40 shadow-lg shadow-${p.color}-500/10` 
                : "bg-slate-900/40 border-white/5 hover:border-white/10"
            }`}
          >
            <div className={`text-2xl mb-4 group-hover:scale-110 transition-transform ${activePattern === p.id ? `text-${p.color}-400` : "text-slate-500"}`}>
              {p.icon}
            </div>
            <h3 className={`text-xs font-black uppercase tracking-widest mb-1 ${activePattern === p.id ? `text-${p.color}-400` : "text-white"}`}>
              {p.title}
            </h3>
            <div className={`text-[8px] font-black uppercase mb-3 ${activePattern === p.id ? `text-${p.color}-500` : "text-slate-600"}`}>
              {p.difficulty}
            </div>
            <p className="text-[10px] text-slate-500 font-bold leading-relaxed mb-4 flex-1">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {p.cases.slice(0, 2).map((c, i) => (
                <span key={i} className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[8px] font-bold text-slate-400">{c}</span>
              ))}
            </div>
            {activePattern === p.id && (
              <motion.div layoutId="activePill" className={`absolute bottom-0 left-0 right-0 h-1 bg-${p.color}-500`} />
            )}
          </button>
        ))}
      </div>

      {/* Pattern Detail Area */}
      <div className="space-y-8">
        <div className={`p-8 rounded-[2.5rem] bg-slate-900/50 border border-${currentPattern.color}-500/20 relative overflow-hidden`}>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h3 className={`text-2xl font-black text-${currentPattern.color}-400 mb-4 flex items-center gap-3`}>
                {currentPattern.icon} {currentPattern.title}
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" /> When to use
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {currentPattern.cases.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                        <ChevronRight size={10} className={`text-${currentPattern.color}-500`} /> {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Key Insight</div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                    {activePattern === "fastSlow" && "Maintain two pointers at the same start. Increment one by 1 node and the other by 2 nodes. Their relative speed difference reveals structural properties (loops, length)."}
                    {activePattern === "reversal" && "Maintain three pointers: prev, current, and next. Iteratively re-point current.next to prev to reverse list direction in O(1) space."}
                    {activePattern === "dummy" && "A 'Sentinal' node points to the head. This removes the 'if (head == null)' or 'if (modifying head)' checks from your code."}
                    {activePattern === "inplace" && "Directly manipulate the '.next' pointers of existing nodes. Be extremely careful not to 'break' the chain and cause a memory leak."}
                    {!["fastSlow", "reversal", "dummy", "inplace"].includes(activePattern) && "Follow the standard pointer arithmetic rules. Ensure you don't lose the reference to the next node before re-assigning pointers."}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Time Complexity</div>
                  <div className="text-xl font-black text-white">O(n)</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Space Complexity</div>
                  <div className="text-xl font-black text-white">O(1)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Block */}
        <div>
          <div className="flex items-center gap-3 mb-6 px-2">
            <Code2 className={`text-${currentPattern.color}-400`} size={20} />
            <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Template Implementation</h4>
          </div>
          <CodeImplementation 
            languages={activeCode} 
            color={currentPattern.color} 
            initialLanguage="javascript" 
          />
        </div>

        {/* How to Choose Matrix */}
        <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500" />
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-emerald-400" />
            <h3 className="text-2xl font-black text-white">Decision Matrix</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { q: "Cycle/Middle/Nth from end?", a: "Fast & Slow Pointers" },
              { q: "Reverse entire/part?", a: "Reversal Pattern" },
              { q: "Detect cycle start?", a: "Floyd's Algorithm" },
              { q: "Merge sorted lists?", a: "Merge Lists Pattern" },
              { q: "Find common node?", a: "Intersection Pattern" },
              { q: "Head might change?", a: "Dummy Node Pattern" },
              { q: "Reorder/Palindrome?", a: "Runner Technique" },
              { q: "Modify without space?", a: "In-place Operations" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-emerald-500/20 transition-colors">
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.q}</div>
                  <div className="text-xs font-bold text-emerald-400">{item.a}</div>
                </div>
                <ChevronRight size={14} className="text-slate-700 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}
