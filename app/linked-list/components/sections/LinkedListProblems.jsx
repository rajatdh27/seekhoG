"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { 
  Trophy, 
  Code2, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Compass
} from "lucide-react";

export default function LinkedListProblems() {
  const [activeProblem, setActiveProblem] = useState(null);
  const [activePattern, setActivePattern] = useState("Two Pointers");
  const [filterDifficulty, setFilterDifficulty] = useState("all");

  const patterns = [
    { id: "Two Pointers", icon: "🐢🐇" },
    { id: "Reversal", icon: "🔄" },
    { id: "Cycle Detection", icon: "🔁" },
    { id: "Merge Lists", icon: "🔀" },
    { id: "Intersection", icon: "✂️" },
    { id: "Dummy Node", icon: "🎭" },
    { id: "Runner Technique", icon: "🏃" },
    { id: "In-place", icon: "📍" },
    { id: "Design", icon: "🏗️" },
    { id: "Advanced", icon: "🚀" },
  ];

  const problems = [
    // Two Pointers
    { id: 1, title: "Linked List Cycle", difficulty: "Easy", pattern: "Two Pointers", freq: "HIGH", desc: "Detect if a cycle exists.", key: "Fast/slow pointers meet if cycle exists.", time: "O(n)", space: "O(1)" },
    { id: 2, title: "Middle of the Linked List", difficulty: "Easy", pattern: "Two Pointers", freq: "HIGH", desc: "Return the middle node.", key: "When fast reaches end, slow is at middle.", time: "O(n)", space: "O(1)" },
    { id: 3, title: "Remove Duplicates from Sorted List", difficulty: "Easy", pattern: "Two Pointers", freq: "MEDIUM", desc: "Remove duplicates from sorted list.", key: "Compare current with next.", time: "O(n)", space: "O(1)" },
    { id: 4, title: "Intersection of Two Linked Lists", difficulty: "Easy", pattern: "Two Pointers", freq: "HIGH", desc: "Find intersection node.", key: "Switch heads when reaching null.", time: "O(n+m)", space: "O(1)" },
    { id: 5, title: "Delete Node in a Linked List", difficulty: "Easy", pattern: "Two Pointers", freq: "LOW", desc: "Delete given node (not head/tail).", key: "Copy next value and skip next.", time: "O(1)", space: "O(1)" },
    { id: 6, title: "Palindrome Linked List", difficulty: "Easy", pattern: "Two Pointers", freq: "HIGH", desc: "Check if list is palindrome.", key: "Reverse second half, compare with first.", time: "O(n)", space: "O(1)" },
    { id: 7, title: "Linked List Cycle II", difficulty: "Medium", pattern: "Two Pointers", freq: "HIGH", desc: "Find cycle start node.", key: "Floyd's: reset slow to head after meeting.", time: "O(n)", space: "O(1)" },
    { id: 8, title: "Remove Nth Node From End", difficulty: "Medium", pattern: "Two Pointers", freq: "HIGH", desc: "Remove nth from end.", key: "Fast pointer n steps ahead.", time: "O(n)", space: "O(1)" },
    { id: 9, title: "Reorder List", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "L0→Ln→L1→Ln-1...", key: "Find middle, reverse second, merge alternating.", time: "O(n)", space: "O(1)" },
    { id: 10, title: "Odd Even Linked List", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "Group odd/even nodes.", key: "Two pointers for odd/even positions.", time: "O(n)", space: "O(1)" },
    { id: 11, title: "Add Two Numbers", difficulty: "Medium", pattern: "Two Pointers", freq: "HIGH", desc: "Add two numbers as lists.", key: "Two pointers with carry.", time: "O(max(n,m))", space: "O(max(n,m))" },
    { id: 12, title: "Rotate List", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "Rotate list by k.", key: "Make circular, find new tail.", time: "O(n)", space: "O(1)" },
    { id: 13, title: "Swap Nodes in Pairs", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "Swap adjacent nodes.", key: "Swap adjacent nodes with pointers.", time: "O(n)", space: "O(1)" },
    { id: 14, title: "Delete Middle Node", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "Delete middle node.", key: "Fast/slow to find middle, delete.", time: "O(n)", space: "O(1)" },
    { id: 15, title: "Remove Duplicates II", difficulty: "Medium", pattern: "Two Pointers", freq: "MEDIUM", desc: "Delete nodes with duplicates.", key: "Skip all duplicate sequences.", time: "O(n)", space: "O(1)" },
    { id: 16, title: "Sort List", difficulty: "Medium", pattern: "Two Pointers", freq: "HIGH", desc: "Sort list in O(n log n).", key: "Merge sort with fast/slow to split.", time: "O(n log n)", space: "O(log n)" },
    { id: 17, title: "Reverse Nodes in k-Group", difficulty: "Hard", pattern: "Two Pointers", freq: "HIGH", desc: "Reverse groups of k.", key: "Reverse k nodes at a time.", time: "O(n)", space: "O(1)" },
    { id: 18, title: "Merge k Sorted Lists", difficulty: "Hard", pattern: "Two Pointers", freq: "HIGH", desc: "Merge k sorted lists.", key: "Divide and conquer merge.", time: "O(N log k)", space: "O(log k)" },

    // Reversal
    { id: 19, title: "Reverse Linked List", difficulty: "Easy", pattern: "Reversal", freq: "HIGH", desc: "Reverse singly linked list.", key: "Three pointers: prev, curr, next.", time: "O(n)", space: "O(1)" },
    { id: 20, title: "Palindrome Linked List", difficulty: "Easy", pattern: "Reversal", freq: "HIGH", desc: "Check if list is palindrome.", key: "Reverse second half, compare.", time: "O(n)", space: "O(1)" },
    { id: 21, title: "Reverse Linked List II", difficulty: "Medium", pattern: "Reversal", freq: "HIGH", desc: "Reverse sub-range m to n.", key: "Reverse between positions m and n.", time: "O(n)", space: "O(1)" },
    { id: 22, title: "Swap Nodes in Pairs", difficulty: "Medium", pattern: "Reversal", freq: "MEDIUM", desc: "Swap adjacent nodes.", key: "Reverse every 2 nodes.", time: "O(n)", space: "O(1)" },
    { id: 23, title: "Reorder List", difficulty: "Medium", pattern: "Reversal", freq: "MEDIUM", desc: "L0→Ln→L1→Ln-1...", key: "Reverse second half, merge with first.", time: "O(n)", space: "O(1)" },
    { id: 24, title: "Add Two Numbers II", difficulty: "Medium", pattern: "Reversal", freq: "MEDIUM", desc: "Add numbers (MSB at head).", key: "Reverse both, add, reverse result.", time: "O(n)", space: "O(max(n,m))" },
    { id: 25, title: "Reverse Odd Length Groups", difficulty: "Medium", pattern: "Reversal", freq: "LOW", desc: "Reverse odd length groups.", key: "Reverse groups of odd length.", time: "O(n)", space: "O(1)" },
    { id: 26, title: "Swapping Nodes", difficulty: "Medium", pattern: "Reversal", freq: "MEDIUM", desc: "Swap kth from start and end.", key: "Swap kth from start with kth from end.", time: "O(n)", space: "O(1)" },
    { id: 27, title: "Reverse Nodes in k-Group", difficulty: "Hard", pattern: "Reversal", freq: "HIGH", desc: "Reverse every k nodes.", key: "Reverse every k nodes.", time: "O(n)", space: "O(1)" },
    { id: 28, title: "Reverse in Groups of K", difficulty: "Hard", pattern: "Reversal", freq: "MEDIUM", desc: "Reverse k-sized groups.", key: "Reverse k-sized groups iteratively.", time: "O(n)", space: "O(1)" },

    // Cycle Detection
    { id: 29, title: "Linked List Cycle", difficulty: "Easy", pattern: "Cycle Detection", freq: "HIGH", desc: "Detect if cycle exists.", key: "Floyd's tortoise and hare.", time: "O(n)", space: "O(1)" },
    { id: 30, title: "Happy Number", difficulty: "Easy", pattern: "Cycle Detection", freq: "MEDIUM", desc: "Detect cycle in digits sum.", key: "Detect cycle in number sequence.", time: "O(log n)", space: "O(1)" },
    { id: 31, title: "Linked List Cycle II", difficulty: "Medium", pattern: "Cycle Detection", freq: "HIGH", desc: "Find cycle start node.", key: "Find cycle start with Floyd's.", time: "O(n)", space: "O(1)" },
    { id: 32, title: "Find Duplicate Number", difficulty: "Medium", pattern: "Cycle Detection", freq: "HIGH", desc: "Find duplicate in array.", key: "Array as linked list, find cycle start.", time: "O(n)", space: "O(1)" },
    { id: 33, title: "Circular Array Loop", difficulty: "Medium", pattern: "Cycle Detection", freq: "LOW", desc: "Cycle in circular array.", key: "Detect cycle in circular array.", time: "O(n)", space: "O(1)" },

    // Merge Lists
    { id: 34, title: "Merge Two Sorted Lists", difficulty: "Easy", pattern: "Merge Lists", freq: "HIGH", desc: "Combine two sorted lists.", key: "Compare heads, attach smaller.", time: "O(n+m)", space: "O(1)" },
    { id: 35, title: "Remove Duplicates", difficulty: "Easy", pattern: "Merge Lists", freq: "MEDIUM", desc: "Remove duplicates in sorted.", key: "Skip duplicate nodes.", time: "O(n)", space: "O(1)" },
    { id: 36, title: "Merge In Between", difficulty: "Medium", pattern: "Merge Lists", freq: "MEDIUM", desc: "Insert list into another.", key: "Remove section, insert new list.", time: "O(n+m)", space: "O(1)" },
    { id: 37, title: "Add Two Numbers", difficulty: "Medium", pattern: "Merge Lists", freq: "HIGH", desc: "Add two lists.", key: "Merge with carry calculation.", time: "O(n)", space: "O(n)" },
    { id: 38, title: "Insertion Sort List", difficulty: "Medium", pattern: "Merge Lists", freq: "MEDIUM", desc: "Sort using insertion.", key: "Build sorted list by inserting.", time: "O(n²)", space: "O(1)" },
    { id: 39, title: "Sort List", difficulty: "Medium", pattern: "Merge Lists", freq: "HIGH", desc: "Merge sort logic.", key: "Merge sort on linked list.", time: "O(n log n)", space: "O(log n)" },
    { id: 40, title: "Split List in Parts", difficulty: "Medium", pattern: "Merge Lists", freq: "MEDIUM", desc: "Divide list into k parts.", key: "Divide list into k parts.", time: "O(n)", space: "O(k)" },
    { id: 41, title: "Partition List", difficulty: "Medium", pattern: "Merge Lists", freq: "MEDIUM", desc: "Split by value x.", key: "Split by value, merge back.", time: "O(n)", space: "O(1)" },
    { id: 42, title: "Merge k Sorted Lists", difficulty: "Hard", pattern: "Merge Lists", freq: "HIGH", desc: "Combine k sorted lists.", key: "Divide and conquer or min heap.", time: "O(N log k)", space: "O(k)" },
    { id: 43, title: "Flatten Multilevel List", difficulty: "Hard", pattern: "Merge Lists", freq: "MEDIUM", desc: "Flatten doubly list.", key: "DFS flatten with merging.", time: "O(n)", space: "O(n)" },

    // Intersection
    { id: 44, title: "Intersection of Two Lists", difficulty: "Easy", pattern: "Intersection", freq: "HIGH", desc: "Find intersection point.", key: "Switch heads when null, meet at intersection.", time: "O(n+m)", space: "O(1)" },
    { id: 45, title: "Intersection II", difficulty: "Medium", pattern: "Intersection", freq: "LOW", desc: "Intersection with diff lengths.", key: "Handle different lengths.", time: "O(n+m)", space: "O(1)" },

    // Dummy Node
    { id: 46, title: "Remove Elements", difficulty: "Easy", pattern: "Dummy Node", freq: "MEDIUM", desc: "Remove nodes by value.", key: "Dummy simplifies head removal.", time: "O(n)", space: "O(1)" },
    { id: 47, title: "Merge Sorted Lists", difficulty: "Easy", pattern: "Dummy Node", freq: "HIGH", desc: "Combine two lists.", key: "Dummy as merge start.", time: "O(n+m)", space: "O(1)" },
    { id: 48, title: "Delete Node", difficulty: "Easy", pattern: "Dummy Node", freq: "LOW", desc: "Delete target node.", key: "Copy next, skip next node.", time: "O(1)", space: "O(1)" },
    { id: 49, title: "Remove Duplicates II", difficulty: "Medium", pattern: "Dummy Node", freq: "MEDIUM", desc: "Skip all duplicates.", key: "Dummy handles head duplicates.", time: "O(n)", space: "O(1)" },
    { id: 50, title: "Partition List", difficulty: "Medium", pattern: "Dummy Node", freq: "MEDIUM", desc: "Rearrange around x.", key: "Two dummies for before/after.", time: "O(n)", space: "O(1)" },
    { id: 51, title: "Insertion Sort List", difficulty: "Medium", pattern: "Dummy Node", freq: "MEDIUM", desc: "Sort list.", key: "Dummy simplifies insertions.", time: "O(n²)", space: "O(1)" },
    { id: 52, title: "Add Two Numbers", difficulty: "Medium", pattern: "Dummy Node", freq: "HIGH", desc: "Sum up lists.", key: "Dummy for result list.", time: "O(n)", space: "O(n)" },
    { id: 53, title: "Merge In Between", difficulty: "Medium", pattern: "Dummy Node", freq: "MEDIUM", desc: "Modify middle segment.", key: "Dummy helps with connection.", time: "O(n)", space: "O(1)" },
    { id: 54, title: "Remove Zero Sum Nodes", difficulty: "Medium", pattern: "Dummy Node", freq: "MEDIUM", desc: "Remove segments that sum to 0.", key: "Dummy with prefix sum.", time: "O(n)", space: "O(n)" },

    // Runner Technique
    { id: 55, title: "Reorder List", difficulty: "Medium", pattern: "Runner Technique", freq: "MEDIUM", desc: "L0→Ln→L1→Ln-1...", key: "Find middle, reverse, merge.", time: "O(n)", space: "O(1)" },
    { id: 56, title: "Palindrome Linked List", difficulty: "Medium", pattern: "Runner Technique", freq: "HIGH", desc: "Check palindrome status.", key: "Find middle, reverse second half.", time: "O(n)", space: "O(1)" },
    { id: 57, title: "Odd Even Linked List", difficulty: "Medium", pattern: "Runner Technique", freq: "MEDIUM", desc: "Split odd/even nodes.", key: "Separate odd/even positions.", time: "O(n)", space: "O(1)" },
    { id: 58, title: "Split List in Parts", difficulty: "Medium", pattern: "Runner Technique", freq: "MEDIUM", desc: "Split into k chunks.", key: "Calculate sizes, split.", time: "O(n)", space: "O(k)" },

    // In-place
    { id: 59, title: "Remove Duplicates", difficulty: "Easy", pattern: "In-place", freq: "MEDIUM", desc: "In-place removal.", key: "Skip duplicate nodes in-place.", time: "O(n)", space: "O(1)" },
    { id: 60, title: "Delete Node", difficulty: "Easy", pattern: "In-place", freq: "LOW", desc: "No access to head.", key: "Copy next value, skip next.", time: "O(1)", space: "O(1)" },
    { id: 61, title: "Remove Nth Node", difficulty: "Medium", pattern: "In-place", freq: "HIGH", desc: "From end of list.", key: "Two pointers, no extra space.", time: "O(n)", space: "O(1)" },
    { id: 62, title: "Swap Nodes in Pairs", difficulty: "Medium", pattern: "In-place", freq: "MEDIUM", desc: "Iterative swap.", key: "Swap adjacent in-place.", time: "O(n)", space: "O(1)" },
    { id: 63, title: "Rotate List", difficulty: "Medium", pattern: "In-place", freq: "MEDIUM", desc: "Shift right by k.", key: "Make circular, break at new tail.", time: "O(n)", space: "O(1)" },
    { id: 64, title: "Odd Even List", difficulty: "Medium", pattern: "In-place", freq: "MEDIUM", desc: "Rearrange nodes.", key: "Rearrange odd/even in-place.", time: "O(n)", space: "O(1)" },
    { id: 65, title: "Reverse Linked List II", difficulty: "Medium", pattern: "In-place", freq: "HIGH", desc: "Reverse range.", key: "Reverse portion in-place.", time: "O(n)", space: "O(1)" },
    { id: 66, title: "Remove Zero Sum Nodes", difficulty: "Medium", pattern: "In-place", freq: "MEDIUM", desc: "Cumulative sum logic.", key: "HashMap with prefix sum.", time: "O(n)", space: "O(n)" },
    { id: 67, title: "Swapping Nodes", difficulty: "Medium", pattern: "In-place", freq: "MEDIUM", desc: "Swap kth nodes.", key: "Swap values of kth nodes.", time: "O(n)", space: "O(1)" },
    { id: 68, title: "Reverse in k-Group", difficulty: "Hard", pattern: "In-place", freq: "HIGH", desc: "Complex reversal.", key: "Reverse k-groups in-place.", time: "O(n)", space: "O(1)" },

    // Design
    { id: 69, title: "Design Linked List", difficulty: "Easy", pattern: "Design", freq: "MEDIUM", desc: "Implement all methods.", key: "Implement all operations.", time: "O(n)", space: "O(n)" },
    { id: 70, title: "Design HashSet", difficulty: "Easy", pattern: "Design", freq: "LOW", desc: "No built-in maps.", key: "Use linked list for chaining.", time: "O(n)", space: "O(n)" },
    { id: 71, title: "Design HashMap", difficulty: "Easy", pattern: "Design", freq: "LOW", desc: "Chaining strategy.", key: "Array of linked lists.", time: "O(n)", space: "O(n)" },
    { id: 72, title: "LRU Cache", difficulty: "Medium", pattern: "Design", freq: "HIGH", desc: "Least Recently Used.", key: "HashMap + doubly linked list.", time: "O(1)", space: "O(cap)" },
    { id: 73, title: "Browser History", difficulty: "Medium", pattern: "Design", freq: "MEDIUM", desc: "Forward/back ops.", key: "Doubly linked list for back/forward.", time: "O(1)", space: "O(n)" },
    { id: 74, title: "All O`one Data Structure", difficulty: "Medium", pattern: "Design", freq: "MEDIUM", desc: "O(1) for all ops.", key: "HashMap + doubly linked list.", time: "O(1)", space: "O(n)" },
    { id: 75, title: "Design Skiplist", difficulty: "Medium", pattern: "Design", freq: "LOW", desc: "O(log n) search.", key: "Multi-level linked lists.", time: "O(log n)", space: "O(n log n)" },
    { id: 76, title: "LFU Cache", difficulty: "Hard", pattern: "Design", freq: "HIGH", desc: "Least Frequently Used.", key: "HashMap + doubly linked lists.", time: "O(1)", space: "O(cap)" },
    { id: 77, title: "In-Memory File System", difficulty: "Hard", pattern: "Design", freq: "LOW", desc: "Complex hierarchy.", key: "Tree with linked structures.", time: "O(path)", space: "O(n)" },

    // Advanced
    { id: 78, title: "Copy with Random Ptr", difficulty: "Medium", pattern: "Advanced", freq: "HIGH", desc: "Deep copy with random links.", key: "Interweave or hashmap.", time: "O(n)", space: "O(n)" },
    { id: 79, title: "Flatten Multilevel DLL", difficulty: "Medium", pattern: "Advanced", freq: "MEDIUM", desc: "DFS flattening.", key: "DFS with stack.", time: "O(n)", space: "O(n)" },
    { id: 80, title: "BST to Sorted DLL", difficulty: "Medium", pattern: "Advanced", freq: "MEDIUM", desc: "Inorder traversal.", key: "Inorder with linking.", time: "O(n)", space: "O(log n)" },
    { id: 81, title: "Add Two Numbers II", difficulty: "Medium", pattern: "Advanced", freq: "MEDIUM", desc: "Numbers as lists.", key: "Reverse, add, reverse back.", time: "O(n)", space: "O(n)" },
    { id: 82, title: "Next Greater Node", difficulty: "Medium", pattern: "Advanced", freq: "MEDIUM", desc: "Monotonic stack on list.", key: "Stack for next greater.", time: "O(n)", space: "O(n)" },
    { id: 83, title: "Remove Zero Sum", difficulty: "Medium", pattern: "Advanced", freq: "MEDIUM", desc: "Segment sum removal.", key: "Prefix sum with HashMap.", time: "O(n)", space: "O(n)" },
    { id: 84, title: "Reverse Even groups", difficulty: "Hard", pattern: "Advanced", freq: "LOW", desc: "Count based groups.", key: "Count groups, reverse even.", time: "O(n)", space: "O(1)" },
    { id: 85, title: "Max Twin Sum", difficulty: "Hard", pattern: "Advanced", freq: "MEDIUM", desc: "Twin nodes at i, n-1-i.", key: "Find middle, reverse, compare.", time: "O(n)", space: "O(1)" },
  ];

  const filteredProblems = problems.filter(p => {
    const matchesPattern = p.pattern === activePattern;
    const matchesDifficulty = filterDifficulty === "all" || p.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
    return matchesPattern && matchesDifficulty;
  });

  const activeStats = {
    easy: filteredProblems.filter(p => p.difficulty === "Easy").length,
    medium: filteredProblems.filter(p => p.difficulty === "Medium").length,
    hard: filteredProblems.filter(p => p.difficulty === "Hard").length,
  };

  const getDiffStyle = (diff) => {
    switch (diff) {
      case "Easy": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "Medium": return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Hard": return "text-rose-400 bg-rose-500/10 border-rose-500/20";
      default: return "";
    }
  };

  const getFreqStyle = (freq) => {
    switch (freq) {
      case "HIGH": return "text-rose-400 bg-rose-500/10";
      case "MEDIUM": return "text-amber-400 bg-amber-500/10";
      case "LOW": return "text-slate-400 bg-slate-500/10";
      default: return "";
    }
  };

  return (
    <PerspectiveCard color="orange">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <SectionHeader 
          title="Must-Know Problems" 
          description="85+ curated problems organized by pattern."
          icon={Trophy} 
          color="orange" 
          className="mb-0"
        />

        <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5 h-fit">
          {["all", "easy", "medium", "hard"].map(d => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filterDifficulty === d ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-white"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Tabs */}
      <div className="flex p-1 bg-slate-950 rounded-2xl border border-white/5 mb-8 overflow-x-auto scrollbar-hide">
        {patterns.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePattern(p.id);
              setActiveProblem(null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activePattern === p.id 
                ? "bg-orange-500 text-white shadow-lg" 
                : "text-slate-500 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-sm">{p.icon}</span>
            {p.id}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-2 mb-4">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <span className="text-lg">{patterns.find(pt => pt.id === activePattern).icon}</span>
            {activePattern} • {filteredProblems.length} Problems
          </div>
          <div className="flex gap-3">
            <span className="text-[9px] font-black text-emerald-500 uppercase">{activeStats.easy} Easy</span>
            <span className="text-[9px] font-black text-amber-500 uppercase">{activeStats.medium} Medium</span>
            <span className="text-[9px] font-black text-rose-500 uppercase">{activeStats.hard} Hard</span>
          </div>
        </div>

        {filteredProblems.map((p) => (
          <div 
            key={p.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeProblem === p.id ? "bg-slate-900 border-orange-500/30 shadow-2xl" : "bg-slate-900/40 border-white/5 hover:border-white/10"}`}
          >
            <div 
              className="p-5 cursor-pointer flex items-center justify-between group"
              onClick={() => setActiveProblem(activeProblem === p.id ? null : p.id)}
            >
              <div className="flex items-center gap-4">
                <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border ${getDiffStyle(p.difficulty)}`}>
                  {p.difficulty}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${getFreqStyle(p.freq)}`}>
                  {p.freq}
                </span>
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">#{p.id} {p.title}</h3>
              </div>
              {activeProblem === p.id ? <ChevronUp size={18} className="text-orange-500" /> : <ChevronDown size={18} className="text-slate-600 group-hover:text-slate-400" />}
            </div>

            {activeProblem === p.id && (
              <div className="px-5 pb-6 pt-0 border-t border-white/5">
                <div className="mt-5 space-y-5">
                  <div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Star size={10} /> Description</div>
                    <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-[9px] font-black text-orange-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                      <Code2 size={12} /> Key Strategy
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-bold italic">
                      &quot;{p.key}&quot;
                    </p>
                  </div>

                  <div className="flex gap-6 pt-2">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400 tracking-widest">
                      <CheckCircle2 size={12} /> Time: {p.time}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 tracking-widest">
                      <CheckCircle2 size={12} /> Space: {p.space}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {filteredProblems.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest italic border-2 border-dashed border-white/5 rounded-2xl">
            No problems found for this criteria
          </div>
        )}
      </div>

      {/* Legend & Help */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-950/50 border border-white/5 rounded-[2rem]">
          <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Compass size={16} className="text-blue-400" /> How to Practice
          </h4>
          <div className="space-y-3">
            {[
              { step: "1", text: "Start with Easy problems and HIGH frequency problems first" },
              { step: "2", text: "Read the 'Key' hint - it reveals the essential pattern to use" },
              { step: "3", text: "Master Two Pointers and Reversal patterns first" },
              { step: "4", text: "Progress to Medium and Hard after mastering Easy in each pattern" }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-blue-400 shrink-0">{item.step}</div>
                <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-950/50 border border-white/5 rounded-[2rem]">
          <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Star size={16} className="text-orange-400" /> Frequency Legend
          </h4>
          <div className="space-y-2">
            {[
              { label: "HIGH", desc: "Asked in 70%+ interviews", color: "rose" },
              { label: "MEDIUM", desc: "Asked in 30-70% interviews", color: "amber" },
              { label: "LOW", desc: "Asked in <30% interviews", color: "slate" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <span className={`text-[8px] font-black px-2 py-0.5 rounded bg-${item.color}-500/10 text-${item.color}-400`}>{item.label}</span>
                <span className="text-[9px] font-bold text-slate-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}