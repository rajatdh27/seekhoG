"use client";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { Code2, Terminal, Zap } from "lucide-react";

export default function HeapImplementation() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [heapType, setHeapType] = useState("max");

  const languages = [
    { id: "c", name: "C", icon: "C" },
    { id: "cpp", name: "C++", icon: "C++" },
    { id: "java", name: "Java", icon: "Java" },
    { id: "javascript", name: "JavaScript", icon: "JS" },
    { id: "python", name: "Python", icon: "Py" },
    { id: "go", name: "Go", icon: "Go" },
  ];

  const codeExamples = {
    max: {
      c: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int size;
} MaxHeap;

// Initialize heap - O(1)
MaxHeap* createHeap() {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->size = 0;
    return heap;
}

// Helper indices - O(1)
int parent(int i) { return (i - 1) / 2; }
int leftChild(int i) { return 2 * i + 1; }
int rightChild(int i) { return 2 * i + 2; }

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify up - O(log n)
void heapifyUp(MaxHeap* heap, int index) {
    while (index > 0 && heap->data[parent(index)] < heap->data[index]) {
        swap(&heap->data[parent(index)], &heap->data[index]);
        index = parent(index);
    }
}

// Heapify down - O(log n)
void heapifyDown(MaxHeap* heap, int index) {
    int maxIndex = index;
    int left = leftChild(index);
    int right = rightChild(index);

    if (left < heap->size && heap->data[left] > heap->data[maxIndex]) maxIndex = left;
    if (right < heap->size && heap->data[right] > heap->data[maxIndex]) maxIndex = right;

    if (index != maxIndex) {
        swap(&heap->data[index], &heap->data[maxIndex]);
        heapifyDown(heap, maxIndex);
    }
}

void insert(MaxHeap* heap, int value) {
    if (heap->size >= MAX_SIZE) return;
    heap->data[heap->size] = value;
    heapifyUp(heap, heap->size);
    heap->size++;
}

int extractMax(MaxHeap* heap) {
    if (heap->size == 0) return -1;
    int max = heap->data[0];
    heap->data[0] = heap->data[heap->size - 1];
    heap->size--;
    heapifyDown(heap, 0);
    return max;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class MaxHeap {
private:
    vector<int> data;
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }

    void heapifyUp(int i) {
        while (i > 0 && data[parent(i)] < data[i]) {
            swap(data[parent(i)], data[i]);
            i = parent(i);
        }
    }

    void heapifyDown(int i) {
        int maxIdx = i;
        int l = left(i), r = right(i);
        if (l < data.size() && data[l] > data[maxIdx]) maxIdx = l;
        if (r < data.size() && data[r] > data[maxIdx]) maxIdx = r;
        if (i != maxIdx) {
            swap(data[i], data[maxIdx]);
            heapifyDown(maxIdx);
        }
    }

public:
    void insert(int val) {
        data.push_back(val);
        heapifyUp(data.size() - 1);
    }

    int extractMax() {
        if (data.empty()) return -1;
        int res = data[0];
        data[0] = data.back();
        data.pop_back();
        if (!data.empty()) heapifyDown(0);
        return res;
    }
};`,
      java: `import java.util.ArrayList;

public class MaxHeap {
    private ArrayList<Integer> data = new ArrayList<>();

    public void insert(int val) {
        data.add(val);
        heapifyUp(data.size() - 1);
    }

    private void heapifyUp(int i) {
        while (i > 0 && data.get((i-1)/2) < data.get(i)) {
            swap((i-1)/2, i);
            i = (i-1)/2;
        }
    }

    public int extractMax() {
        if (data.isEmpty()) return -1;
        int max = data.get(0);
        data.set(0, data.get(data.size()-1));
        data.remove(data.size()-1);
        if (!data.isEmpty()) heapifyDown(0);
        return max;
    }

    private void heapifyDown(int i) {
        int max = i, l = 2*i+1, r = 2*i+2;
        if (l < data.size() && data.get(l) > data.get(max)) max = l;
        if (r < data.size() && data.get(r) > data.get(max)) max = r;
        if (max != i) {
            swap(i, max);
            heapifyDown(max);
        }
    }

    private void swap(int i, int j) {
        int temp = data.get(i);
        data.set(i, data.get(j));
        data.set(j, temp);
    }
}`,
      javascript: `class MaxHeap {
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.heapifyUp(this.data.length - 1);
  }

  heapifyUp(i) {
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.data[p] < this.data[i]) {
        [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
        i = p;
      } else break;
    }
  }

  extractMax() {
    if (this.data.length === 0) return null;
    const max = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.heapifyDown(0);
    }
    return max;
  }

  heapifyDown(i) {
    let max = i, l = 2*i+1, r = 2*i+2;
    if (l < this.data.length && this.data[l] > this.data[max]) max = l;
    if (r < this.data.length && this.data[r] > this.data[max]) max = r;
    if (max !== i) {
      [this.data[i], this.data[max]] = [this.data[max], this.data[i]];
      this.heapifyDown(max);
    }
  }
}`,
      python: `class MaxHeap:
    def __init__(self):
        self.data = []

    def insert(self, val):
        self.data.append(val)
        self._heapify_up(len(self.data) - 1)

    def _heapify_up(self, i):
        while i > 0 and self.data[(i-1)//2] < self.data[i]:
            self.data[i], self.data[(i-1)//2] = self.data[(i-1)//2], self.data[i]
            i = (i-1)//2

    def extract_max(self):
        if not self.data: return None
        if len(self.data) == 1: return self.data.pop()
        root = self.data[0]
        self.data[0] = self.data.pop()
        self._heapify_down(0)
        return root

    def _heapify_down(self, i):
        max_idx, l, r = i, 2*i+1, 2*i+2
        if l < len(self.data) and self.data[l] > self.data[max_idx]: max_idx = l
        if r < len(self.data) and self.data[r] > self.data[max_idx]: max_idx = r
        if max_idx != i:
            self.data[i], self.data[max_idx] = self.data[max_idx], self.data[i]
            self._heapify_down(max_idx)`,
      go: `type MaxHeap struct {
    data []int
}

func (h *MaxHeap) Insert(val int) {
    h.data = append(h.data, val)
    h.heapifyUp(len(h.data) - 1)
}

func (h *MaxHeap) heapifyUp(i int) {
    for i > 0 && h.data[(i-1)/2] < h.data[i] {
        h.data[i], h.data[(i-1)/2] = h.data[(i-1)/2], h.data[i]
        i = (i-1)/2
    }
}

func (h *MaxHeap) ExtractMax() int {
    if len(h.data) == 0 { return -1 }
    max := h.data[0]
    h.data[0] = h.data[len(h.data)-1]
    h.data = h.data[:len(h.data)-1]
    h.heapifyDown(0)
    return max
}

func (h *MaxHeap) heapifyDown(i int) {
    max, l, r := i, 2*i+1, 2*i+2
    if l < len(h.data) && h.data[l] > h.data[max] { max = l }
    if r < len(h.data) && h.data[r] > h.data[max] { max = r }
    if max != i {
        h.data[i], h.data[max] = h.data[max], h.data[i]
        h.heapifyDown(max)
    }
}`,
    },
    min: {
      cpp: `// Min Heap implementation is similar, just flip the comparison logic
// Parent < Child instead of Parent > Child in Heapify Up/Down.`,
    },
  };

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Heap Implementation" 
        icon={Code2} 
        color="rose" 
      />

      <div className="space-y-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-900/50 p-6 rounded-2xl border border-white/5">
           <div className="flex gap-2 p-1 bg-slate-900 rounded-lg border border-white/10">
              {["max", "min"].map((type) => (
                <button
                  key={type}
                  onClick={() => setHeapType(type)}
                  className={`px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${
                    heapType === type
                      ? "bg-rose-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {type} Heap
                </button>
              ))}
           </div>

           <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setCurrentLanguage(lang.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 border ${
                    currentLanguage === lang.id
                      ? "bg-rose-500/10 border-rose-500 text-rose-400"
                      : "bg-slate-800 border-white/5 text-slate-400 hover:border-white/20"
                  }`}
                >
                  {lang.icon}
                </button>
              ))}
           </div>
        </div>

        {/* Code Block */}
        <div className="relative group">
           <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur" />
           <div className="relative bg-[#0d1117] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                 </div>
                 <div className="text-xs font-mono text-slate-500">{heapType}_heap.{currentLanguage === "cpp" ? "cpp" : currentLanguage}</div>
              </div>
              <div className="p-6 overflow-x-auto custom-scrollbar">
                 <pre className="font-mono text-sm leading-relaxed text-slate-300">
                    <code>{codeExamples[heapType][currentLanguage] || codeExamples["max"][currentLanguage]}</code>
                 </pre>
              </div>
           </div>
        </div>

        {/* Complexity Grid */}
        <div>
           <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
             <Zap size={24} className="text-yellow-400" /> Time Complexity
           </h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { op: "Insert", val: "O(log n)", desc: "Heapify Up path", color: "emerald" },
                { op: "Extract Max", val: "O(log n)", desc: "Heapify Down path", color: "rose" },
                { op: "Get Max", val: "O(1)", desc: "Root element access", color: "blue" },
                { op: "Heapify", val: "O(log n)", desc: "Fix single violation", color: "purple" },
                { op: "Build Heap", val: "O(n)", desc: "Optimized construction", color: "orange" },
                { op: "Sort", val: "O(n log n)", desc: "Extract n times", color: "cyan" }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-slate-900 border border-white/5 rounded-2xl flex flex-col gap-2 group hover:border-white/10 transition-colors">
                   <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.op}</div>
                   <div className={`text-2xl font-black text-${item.color}-400 font-mono`}>{item.val}</div>
                   <div className="text-xs text-slate-600 font-medium">{item.desc}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Array Formulas */}
        <div className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem]">
           <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2">
             <Terminal size={20} className="text-rose-400" /> Array Indexing Formulas
           </h3>
           <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Parent(i)", formula: "⌊(i - 1) / 2⌋" },
                { label: "Left Child(i)", formula: "2i + 1" },
                { label: "Right Child(i)", formula: "2i + 2" }
              ].map((item, i) => (
                <div key={i} className="bg-[#0d1117] rounded-xl p-6 border border-white/5 flex flex-col items-center gap-3">
                   <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.label}</div>
                   <code className="text-xl font-mono text-rose-400">{item.formula}</code>
                </div>
              ))}
           </div>
           <p className="text-center text-slate-500 text-xs mt-6 font-mono">
             * 0-based indexing used in most modern languages
           </p>
        </div>

      </div>
    </PerspectiveCard>
  );
}
