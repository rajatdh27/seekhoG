"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Unlock, 
  AlertTriangle, 
  Link, 
  Target, 
  ArrowRight, 
  LayoutList,
  GitMerge
} from "lucide-react";

export default function CollisionHandlingSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const chainingCode = {
    javascript: `class HashTableChaining {
  constructor(size = 10) {
    this.table = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) hash += char.charCodeAt(0);
    return hash % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    // Check if key exists
    for (let entry of this.table[index]) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }
    // Append to list
    this.table[index].push({ key, value }); 
  }
}`,
    python: `class HashTableChaining:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return sum(ord(c) for c in key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        # Check if key exists
        for entry in self.table[index]:
            if entry[0] == key:
                entry[1] = value
                return
        # Append to list
        self.table[index].append([key, value])`,
    java: `import java.util.LinkedList;

class HashTableChaining {
    class Entry {
        String key;
        int value;
        Entry(String k, int v) { key = k; value = v; }
    }
    
    private LinkedList<Entry>[] table;
    private int size;

    public HashTableChaining(int size) {
        this.size = size;
        table = new LinkedList[size];
        for (int i = 0; i < size; i++) table[i] = new LinkedList<>();
    }

    private int hash(String key) {
        return Math.abs(key.hashCode()) % size;
    }

    public void insert(String key, int value) {
        int index = hash(key);
        for (Entry e : table[index]) {
            if (e.key.equals(key)) {
                e.value = value;
                return;
            }
        }
        table[index].add(new Entry(key, value));
    }
}`,
    cpp: `#include <vector>
#include <list>
#include <string>
using namespace std;

class HashTableChaining {
    struct Entry { string key; int value; };
    vector<list<Entry>> table;
    int size;

    int hash(string key) {
        int sum = 0;
        for (char c : key) sum += c;
        return sum % size;
    }

public:
    HashTableChaining(int s) : size(s) {
        table.resize(size);
    }

    void insert(string key, int value) {
        int index = hash(key);
        for (auto& entry : table[index]) {
            if (entry.key == key) {
                entry.value = value;
                return;
            }
        }
        table[index].push_back({key, value});
    }
};`,
    go: `type Entry struct {
    Key   string
    Value int
}

type HashTableChaining struct {
    Table [][]Entry
    Size  int
}

func NewHashTable(size int) *HashTableChaining {
    return &HashTableChaining{
        Table: make([][]Entry, size),
        Size:  size,
    }
}

func (h *HashTableChaining) hash(key string) int {
    sum := 0
    for _, c := range key {
        sum += int(c)
    }
    return sum % h.Size
}

func (h *HashTableChaining) Insert(key string, value int) {
    index := h.hash(key)
    for i, entry := range h.Table[index] {
        if entry.Key == key {
            h.Table[index][i].Value = value
            return
        }
    }
    h.Table[index] = append(h.Table[index], Entry{key, value})
}`
  };

  const linearProbingCode = {
    javascript: `class HashTableLinearProbing {
  constructor(size = 10) {
    this.table = new Array(size).fill(null);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) hash += char.charCodeAt(0);
    return hash % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);
    let start = index;

    // Probe until empty slot or key found
    while (this.table[index] !== null) {
      if (this.table[index].key === key) {
        this.table[index].value = value;
        return;
      }
      index = (index + 1) % this.size;
      if (index === start) throw new Error("Table full");
    }
    
    this.table[index] = { key, value };
  }
}`,
    python: `class HashTableLinearProbing:
    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size

    def _hash(self, key):
        return sum(ord(c) for c in key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        start = index

        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = (key, value)
                return
            index = (index + 1) % self.size
            if index == start:
                raise Exception("Table full")
        
        self.table[index] = (key, value)`,
    java: `class HashTableLinearProbing {
    class Entry { String key; int value; Entry(String k, int v){key=k;value=v;} }
    private Entry[] table;
    private int size;

    public HashTableLinearProbing(int size) {
        this.size = size;
        table = new Entry[size];
    }

    private int hash(String key) { return Math.abs(key.hashCode()) % size; }

    public void insert(String key, int value) {
        int index = hash(key);
        int start = index;

        while (table[index] != null) {
            if (table[index].key.equals(key)) {
                table[index].value = value;
                return;
            }
            index = (index + 1) % size;
            if (index == start) throw new RuntimeException("Full");
        }
        table[index] = new Entry(key, value);
    }
}`,
    cpp: `#include <vector>
#include <string>
#include <stdexcept>
using namespace std;

class HashTableLinearProbing {
    struct Entry { string key; int value; bool active; };
    vector<Entry> table;
    int size;

    int hash(string key) {
        int sum = 0;
        for (char c : key) sum += c;
        return sum % size;
    }

public:
    HashTableLinearProbing(int s) : size(s) {
        table.resize(size, {"", 0, false});
    }

    void insert(string key, int value) {
        int index = hash(key);
        int start = index;

        while (table[index].active) {
            if (table[index].key == key) {
                table[index].value = value;
                return;
            }
            index = (index + 1) % size;
            if (index == start) throw runtime_error("Full");
        }
        table[index] = {key, value, true};
    }
};`,
    go: `type Entry struct {
    Key    string
    Value  int
    Active bool
}

type HashTableLinearProbing struct {
    Table []Entry
    Size  int
}

func NewHashTable(size int) *HashTableLinearProbing {
    return &HashTableLinearProbing{
        Table: make([]Entry, size),
        Size:  size,
    }
}

func (h *HashTableLinearProbing) hash(key string) int {
    sum := 0
    for _, c := range key {
        sum += int(c)
    }
    return sum % h.Size
}

func (h *HashTableLinearProbing) Insert(key string, value int) {
    index := h.hash(key)
    start := index

    for h.Table[index].Active {
        if h.Table[index].Key == key {
            h.Table[index].Value = value
            return
        }
        index = (index + 1) % h.Size
        if index == start {
            panic("Table full")
        }
    }
    h.Table[index] = Entry{Key: key, Value: value, Active: true}
}`
  };

  return (
    <PerspectiveCard color="rose">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 border border-rose-500/20">
          <Unlock size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Collision Handling</h2>
          <p className="text-slate-400 font-medium">Strategies to resolve hash conflicts.</p>
        </div>
      </div>

      {/* What is a Collision? */}
      <div className="mb-12 p-8 bg-rose-950/20 border border-rose-500/20 rounded-[2rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-rose-500/10 blur-[100px] rounded-full" />
        <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3 relative z-10">
          <AlertTriangle size={24} className="text-rose-500" /> The Problem
        </h3>
        <p className="text-lg text-rose-200 mb-6 relative z-10 font-medium leading-relaxed">
          A collision occurs when two distinct keys generate the same hash value and try to occupy the same index.
        </p>
        <div className="bg-slate-950/50 p-6 rounded-xl border border-rose-500/10 relative z-10 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400">hash("apple")</span> 
            <ArrowRight size={14} className="text-slate-600" /> 
            <span className="text-white font-bold">Index 5</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-amber-400">hash("banana")</span> 
            <ArrowRight size={14} className="text-slate-600" /> 
            <span className="text-white font-bold">Index 5</span>
            <span className="ml-2 px-2 py-0.5 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded">Collision!</span>
          </div>
        </div>
      </div>

      {/* Method 1: Chaining */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Link size={24} className="text-blue-400" /> Method 1: Separate Chaining
        </h3>
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-8">
          <p className="text-slate-300 mb-6 font-medium leading-relaxed">
            Instead of storing the value directly, each slot (bucket) stores a <strong className="text-blue-400">Linked List</strong>. 
            Colliding elements are simply appended to the list.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <ul className="space-y-3">
               {[
                 "Simple to implement",
                 "Table never fills up",
                 "Performance degrades gracefully"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm text-emerald-300 font-bold">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {item}
                 </li>
               ))}
            </ul>
            <ul className="space-y-3">
               {[
                 "Uses extra memory (pointers)",
                 "Poor cache locality (linked lists)",
                 "Wasted space if empty buckets"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm text-rose-300 font-bold">
                   <div className="w-1.5 h-1.5 rounded-full bg-rose-400" /> {item}
                 </li>
               ))}
            </ul>
          </div>
          
          <CodeImplementation 
             languages={chainingCode}
             color="blue"
             initialLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* Method 2: Open Addressing */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Target size={24} className="text-amber-400" /> Method 2: Open Addressing
        </h3>
        
        <div className="space-y-6 mb-8">
          <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-amber-500/20 transition-colors">
            <h4 className="text-lg font-black text-amber-400 mb-2 flex items-center gap-2">
              <ArrowRight size={18} /> Linear Probing
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              If slot is full, try next: <code className="bg-white/10 px-1 rounded text-white">index + 1</code>, <code className="bg-white/10 px-1 rounded text-white">index + 2</code>...
              <br/><span className="text-rose-400 text-xs mt-1 block">Problem: Primary Clustering (clusters grow large).</span>
            </p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-amber-500/20 transition-colors">
             <h4 className="text-lg font-black text-amber-400 mb-2 flex items-center gap-2">
              <LayoutList size={18} /> Quadratic Probing
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Jump by squares: <code className="bg-white/10 px-1 rounded text-white">+1²</code>, <code className="bg-white/10 px-1 rounded text-white">+2²</code>, <code className="bg-white/10 px-1 rounded text-white">+3²</code>...
              <br/><span className="text-emerald-400 text-xs mt-1 block">Reduces primary clustering.</span>
            </p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-amber-500/20 transition-colors">
             <h4 className="text-lg font-black text-amber-400 mb-2 flex items-center gap-2">
              <GitMerge size={18} /> Double Hashing
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Use a second hash function for step size: <code className="bg-white/10 px-1 rounded text-white">index + i * hash2(key)</code>.
              <br/><span className="text-emerald-400 text-xs mt-1 block">Best distribution, no clustering.</span>
            </p>
          </div>
        </div>

        {/* Linear Probing Implementation */}
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-8">
            <h4 className="text-lg font-black text-white mb-4">Linear Probing Implementation</h4>
            <CodeImplementation 
                languages={linearProbingCode}
                color="amber"
                initialLanguage={currentLanguage}
            />
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2rem]">
          <h3 className="text-xl font-black text-blue-400 mb-4 flex items-center gap-2">
            <Link size={20} /> Use Chaining When:
          </h3>
          <ul className="space-y-3">
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-blue-500 mt-1">●</span> Unknown number of insertions
             </li>
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-blue-500 mt-1">●</span> Deletion is frequent
             </li>
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-blue-500 mt-1">●</span> Keys are large objects
             </li>
          </ul>
        </div>

        <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2rem]">
          <h3 className="text-xl font-black text-amber-400 mb-4 flex items-center gap-2">
            <Target size={20} /> Use Open Addressing When:
          </h3>
          <ul className="space-y-3">
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-amber-500 mt-1">●</span> Table size is known/fixed
             </li>
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-amber-500 mt-1">●</span> Memory is limited (no pointers)
             </li>
             <li className="text-sm text-slate-300 font-medium flex items-start gap-2">
               <span className="text-amber-500 mt-1">●</span> Cache performance is critical
             </li>
          </ul>
        </div>
      </div>
    </PerspectiveCard>
  );
}
