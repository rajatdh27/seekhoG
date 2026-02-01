"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Cpu, Box, Layers, Plus, Minus, ArrowRightLeft } from "lucide-react";

const arrayImplCode = `class Stack {
private:
    int* arr;
    int top;
    int capacity;
public:
    Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
    void push(int x) {
        if (top >= capacity - 1) {
            throw overflow_error("Stack Overflow");
        }
        arr[++top] = x;
    }
    int pop() {
        if (top < 0) {
            throw underflow_error("Stack Underflow");
        }
        return arr[top--];
    }
    int peek() {
        return (top < 0) ? -1 : arr[top];
    }
    bool isEmpty() {
        return top < 0;
    }
};`;

const linkedImplCode = `struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class Stack {
private:
    Node* top;
    int stackSize;
public:
    Stack() : top(nullptr), stackSize(0) {}

    void push(int x) {
        Node* newNode = new Node(x);
        newNode->next = top;
        top = newNode;
        stackSize++;
    }

    int pop() {
        if (isEmpty()) {
            throw underflow_error("Stack Empty");
        }
        Node* temp = top;
        int value = top->data;
        top = top->next;
        delete temp;
        stackSize--;
        return value;
    }

    int peek() {
        return isEmpty() ? -1 : top->data;
    }

    bool isEmpty() {
        return top == nullptr;
    }
};`;

export default function StackMemoryLayout() {
  const [impl, setImpl] = useState("array");

  const comparisonItems = [
    { title: "Memory per Element", description: "Array uses just data. Linked List needs data + pointer.", icon: Cpu, color: "purple" },
    { title: "Cache Performance", description: "Array is excellent due to contiguous memory. Linked List is poor.", icon: Box, color: "blue" },
    { title: "Max Size", description: "Array is typically fixed. Linked List is limited only by total RAM.", icon: Layers, color: "emerald" },
    { title: "Push/Pop Time", description: "Both implementations achieve guaranteed O(1) performance.", icon: ArrowRightLeft, color: "rose" }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Memory & Implementation" 
        description="Two ways to build a stack in memory."
        icon={Cpu} 
        color="purple" 
      />

      <div className="flex items-center justify-center mb-10">
        <div className="flex p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700 shadow-xl">
          <button onClick={() => setImpl("array")} className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${impl === 'array' ? 'bg-purple-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-300'}`}>Array-Based</button>
          <button onClick={() => setImpl("linked")} className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${impl === 'linked' ? 'bg-pink-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-300'}`}>Linked-List</button>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {impl === 'array' ? <ArrayImpl /> : <LinkedImpl />}
      </AnimatePresence>

      {/* Comparison Grid */}
      <div className="mt-12 pt-8 border-t border-white/5">
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <ArrowRightLeft size={24} className="text-blue-400" /> Comparison
        </h3>
        <ConceptGrid items={comparisonItems} columns={2} />
      </div>
    </PerspectiveCard>
  );
}

const ArrayImpl = () => (
  <motion.div
    key="array"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 30 }}
    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
  >
    <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
      <Box size={28} className="text-purple-400" /> Array-Based Stack
    </h3>
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <p className="text-slate-400 font-medium leading-relaxed">
          An array-based stack uses a contiguous block of memory. A <code className="text-purple-400 font-bold bg-slate-800 px-1.5 py-1 rounded-md">top</code> index tracks the last element. This approach is very fast and cache-friendly.
        </p>
        
        <div className="p-6 bg-slate-900/70 border border-purple-500/20 rounded-2xl">
          <h4 className="text-sm font-black text-white uppercase mb-4">Memory Diagram</h4>
          <div className="flex justify-center items-end gap-1 bg-slate-950 p-4 rounded-xl border border-white/5">
            <div className="flex flex-col-reverse">
              {[10, 20, 30].map(v => <div key={v} className="w-16 h-12 flex items-center justify-center font-bold text-lg bg-purple-500 border-2 border-purple-400 text-white">{v}</div>)}
              {[...Array(3)].map((_, i) => <div key={i} className="w-16 h-12 flex items-center justify-center text-slate-600 border-2 border-slate-700">...</div>)}
            </div>
            <div className="flex flex-col-reverse text-xs text-slate-500 font-mono h-full">
               <div className="h-12 flex items-center">[0]</div>
               <div className="h-12 flex items-center">[1]</div>
               <div className="h-12 flex items-center">[2] ← top</div>
               <div className="h-12 flex items-center">[3]</div>
               <div className="h-12 flex items-center">...</div>
               <div className="h-12 flex items-center">[N-1]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 border border-green-500/20 rounded-xl">
                <h4 className="text-sm font-black text-green-400 mb-2 flex items-center gap-2"><Plus/> Pros</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                    <li>Fast O(1) operations</li>
                    <li>Cache-friendly</li>
                    <li>Simple implementation</li>
                    <li>No pointer overhead</li>
                </ul>
            </div>
            <div className="p-4 bg-slate-900 border border-red-500/20 rounded-xl">
                <h4 className="text-sm font-black text-red-400 mb-2 flex items-center gap-2"><Minus/> Cons</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                    <li>Fixed maximum size</li>
                    <li>Stack overflow possible</li>
                    <li>Wasted space if underused</li>
                    <li>Resize is expensive</li>
                </ul>
            </div>
        </div>
      </div>
      <div>
        <CodeBlock code={arrayImplCode} language="cpp" title="Array Stack in C++" />
      </div>
    </div>
  </motion.div>
);

const LinkedImpl = () => (
  <motion.div
    key="linked"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 30 }}
    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
  >
    <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
      <Layers size={28} className="text-pink-400" /> Linked-List-Based Stack
    </h3>
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <p className="text-slate-400 font-medium leading-relaxed">
          A linked-list stack uses nodes scattered in memory. The <code className="text-pink-400 font-bold bg-slate-800 px-1.5 py-1 rounded-md">top</code> is simply the head of the list. This is highly flexible and has no size limit.
        </p>

        <div className="p-6 bg-slate-900/70 border border-pink-500/20 rounded-2xl">
          <h4 className="text-sm font-black text-white uppercase mb-4">Memory Diagram</h4>
          <div className="flex flex-col items-start gap-2 bg-slate-950 p-4 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 font-mono text-xs text-pink-400">top →</div>
            {[30, 20, 10].map((v, i) => (
              <div key={v} className="flex items-center gap-2">
                <div className="w-16 h-12 flex items-center justify-center font-bold text-lg bg-pink-500 border-2 border-pink-400 text-white rounded-lg">
                  {v}
                </div>
                <span className="text-slate-500">→</span>
                {i === 2 ? <span className="text-slate-600 font-bold">NULL</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 border border-green-500/20 rounded-xl">
                <h4 className="text-sm font-black text-green-400 mb-2 flex items-center gap-2"><Plus/> Pros</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                    <li>Truly dynamic size</li>
                    <li>No overflow issues</li>
                    <li>No resize cost</li>
                </ul>
            </div>
            <div className="p-4 bg-slate-900 border border-red-500/20 rounded-xl">
                <h4 className="text-sm font-black text-red-400 mb-2 flex items-center gap-2"><Minus/> Cons</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                    <li>Requires extra memory (pointers)</li>
                    <li>Not cache-friendly</li>
                    <li>Slightly more complex</li>
                </ul>
            </div>
        </div>
      </div>
      <div>
        <CodeBlock code={linkedImplCode} language="cpp" title="Linked List Stack in C++" />
      </div>
    </div>
  </motion.div>
);