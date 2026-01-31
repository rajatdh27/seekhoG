"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { Code2, Brackets, Plus, List, Trash2, Search, RefreshCw, ChevronRight, Share2 } from "lucide-react";

export default function LinkedListSyntax() {
  const [activeOp, setActiveOp] = useState("structure");

  const ops = [
    { id: "structure", label: "Node Structure", icon: <Brackets size={14} /> },
    { id: "insertHead", label: "Insert at Head", icon: <Plus size={14} /> },
    { id: "insertTail", label: "Insert at Tail", icon: <List size={14} /> },
    { id: "delete", label: "Delete Node", icon: <Trash2 size={14} /> },
    { id: "search", label: "Search", icon: <Search size={14} /> },
    { id: "reverse", label: "Reverse List", icon: <RefreshCw size={14} /> },
  ];

  const codeData = {
    structure: {
      javascript: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}`,
      python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None`,
      java: `class Node {
    int data;
    Node next;
    Node(int d) { 
        data = d; 
        next = null; 
    }
}`,
      cpp: `struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};`,
      c: `struct Node {
    int data;
    struct Node* next;
};`,
      go: `type Node struct {
    data int
    next *Node
}`
    },
    insertHead: {
      javascript: `function insertHead(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode; // New head
}`,
      python: `def insert_head(head, data):
    new_node = Node(data)
    new_node.next = head
    return new_node`,
      java: `public Node insertHead(Node head, int data) {
    Node newNode = new Node(data);
    newNode.next = head;
    return newNode;
}`,
      cpp: `Node* insertHead(Node* head, int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    return newNode;
}`,
      c: `void insertHead(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}`,
      go: `func insertHead(head *Node, data int) *Node {
    newNode := &Node{data: data, next: head}
    return newNode
}`
    },
    insertTail: {
      javascript: `function insertTail(head, data) {
  const newNode = new Node(data);
  if (!head) return newNode;
  
  let curr = head;
  while (curr.next) curr = curr.next;
  curr.next = newNode;
  return head;
}`,
      python: `def insert_tail(head, data):
    new_node = Node(data)
    if not head: return new_node
    
    curr = head
    while curr.next:
        curr = curr.next
    curr.next = new_node
    return head`,
      java: `public Node insertTail(Node head, int data) {
    Node newNode = new Node(data);
    if (head == null) return newNode;
    
    Node curr = head;
    while (curr.next != null) curr = curr.next;
    curr.next = newNode;
    return head;
}`,
      cpp: `Node* insertTail(Node* head, int data) {
    Node* newNode = new Node(data);
    if (!head) return newNode;
    
    Node* curr = head;
    while (curr->next) curr = curr->next;
    curr->next = newNode;
    return head;
}`,
      c: `void insertTail(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = NULL;
    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }
    struct Node* last = *head_ref;
    while (last->next != NULL) last = last->next;
    last->next = new_node;
}`,
      go: `func insertTail(head *Node, data int) *Node {
    newNode := &Node{data: data}
    if head == nil { return newNode }
    
    curr := head
    for curr.next != nil { curr = curr.next }
    curr.next = newNode
    return head
}`
    },
    delete: {
      javascript: `function deleteNode(head, key) {
  if (!head) return null;
  if (head.data === key) return head.next;
  
  let curr = head;
  while (curr.next && curr.next.data !== key) {
    curr = curr.next;
  }
  if (curr.next) curr.next = curr.next.next;
  return head;
}`,
      python: `def delete_node(head, key):
    if not head: return None
    if head.data == key: return head.next
    
    curr = head
    while curr.next and curr.next.data != key:
        curr = curr.next
    if curr.next:
        curr.next = curr.next.next
    return head`,
      java: `public Node deleteNode(Node head, int key) {
    if (head == null) return null;
    if (head.data == key) return head.next;
    
    Node curr = head;
    while (curr.next != null && curr.next.data != key) {
        curr = curr.next;
    }
    if (curr.next != null) curr.next = curr.next.next;
    return head;
}`,
      cpp: `Node* deleteNode(Node* head, int key) {
    if (!head) return nullptr;
    if (head->data == key) {
        Node* temp = head->next;
        delete head;
        return temp;
    }
    Node* curr = head;
    while (curr->next && curr->next->data != key) curr = curr->next;
    if (curr->next) {
        Node* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }
    return head;
}`,
      c: `void deleteNode(struct Node** head_ref, int key) {
    struct Node *temp = *head_ref, *prev;
    if (temp != NULL && temp->data == key) {
        *head_ref = temp->next;
        free(temp); return;
    }
    while (temp != NULL && temp->data != key) {
        prev = temp; temp = temp->next;
    }
    if (temp == NULL) return;
    prev->next = temp->next;
    free(temp);
}`,
      go: `func deleteNode(head *Node, key int) *Node {
    if head == nil { return nil }
    if head.data == key { return head.next }
    
    curr := head
    for curr.next != nil && curr.next.data != key {
        curr = curr.next
    }
    if curr.next != nil { curr.next = curr.next.next }
    return head
}`
    },
    search: {
      javascript: `function search(head, target) {
  let curr = head;
  while (curr) {
    if (curr.data === target) return true;
    curr = curr.next;
  }
  return false;
}`,
      python: `def search(head, target):
    curr = head
    while curr:
        if curr.data == target:
            return True
        curr = curr.next
    return False`,
      java: `public boolean search(Node head, int target) {
    Node curr = head;
    while (curr != null) {
        if (curr.data == target) return true;
        curr = curr.next;
    }
    return false;
}`,
      cpp: `bool search(Node* head, int target) {
    Node* curr = head;
    while (curr) {
        if (curr->data == target) return true;
        curr = curr->next;
    }
    return false;
}`,
      c: `bool search(struct Node* head, int target) {
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->data == target) return true;
        curr = curr->next;
    }
    return false;
}`,
      go: `func search(head *Node, target int) bool {
    curr := head
    for curr != nil {
        if curr.data == target { return true }
        curr = curr.next
    }
    return false
}`
    },
    reverse: {
      javascript: `function reverse(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
      python: `def reverse(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`,
      java: `public Node reverse(Node head) {
    Node prev = null, curr = head;
    while (curr != null) {
        Node next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      cpp: `Node* reverse(Node* head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
      c: `void reverse(struct Node** head_ref) {
    struct Node *prev = NULL, *curr = *head_ref, *next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    *head_ref = prev;
}`,
      go: `func reverse(head *Node) *Node {
    var prev *Node
    curr := head
    for curr != nil {
        next := curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}`
    }
  };

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Syntax Guide" 
        description="Core operations across 6 programming languages."
        icon={Code2} 
        color="cyan" 
      />

      {/* Operation Selector */}
      <div className="flex p-1 bg-slate-950 rounded-2xl border border-white/5 mb-8 overflow-x-auto scrollbar-hide">
        {ops.map((op) => (
          <button
            key={op.id}
            onClick={() => setActiveOp(op.id)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeOp === op.id 
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20" 
                : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
            }`}
          >
            {op.icon}
            {op.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-xl border border-white/5 w-fit">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Mode: {ops.find(o => o.id === activeOp).label}
          </span>
        </div>

        <CodeImplementation 
          languages={codeData[activeOp]} 
          color="cyan" 
          initialLanguage="javascript" 
        />
      </div>

      {/* Quick Comparison Table */}
      <div className="mt-12 bg-slate-950 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />
        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative z-10">
          <Share2 size={24} className="text-cyan-400" /> Language Ecosystems
        </h3>
        
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <th className="py-4 px-4">Feature</th>
                <th className="py-4 px-4">🔷 C</th>
                <th className="py-4 px-4">⚡ C++</th>
                <th className="py-4 px-4">☕ Java</th>
                <th className="py-4 px-4">🟨 JS</th>
                <th className="py-4 px-4">🐍 Python</th>
                <th className="py-4 px-4">🔵 Go</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { f: "Built-in List", val: ["❌", "✅ (std::list)", "✅ (LinkedList)", "❌", "❌", "✅ (list)"] },
                { f: "Manual Memory", val: ["✅ (malloc)", "✅ (new)", "❌ (GC)", "❌ (GC)", "❌ (GC)", "❌ (GC)"] },
                { f: "Generics", val: ["❌", "✅ (Templates)", "✅ (Generics)", "✅ (Dynamic)", "✅ (Dynamic)", "✅ (Generics)"] },
                { f: "Ease of Use", val: ["⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] }
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-black text-slate-500 uppercase text-[9px] tracking-tighter">{row.f}</td>
                  {row.val.map((v, j) => (
                    <td key={j} className="py-4 px-4 font-bold text-slate-300 group-hover:text-cyan-400 transition-colors whitespace-nowrap">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { lang: "C", note: "Manual memory with malloc/free. High risk of memory leaks and dangling pointers." },
          { lang: "C++", note: "Manual new/delete or use std::list (doubly linked) for automatic management." },
          { lang: "Java", note: "Built-in LinkedList is doubly linked and implements both List and Deque interfaces." },
          { lang: "JavaScript", note: "No built-in list. Must implement manually using classes. Objects act as references." },
          { lang: "Python", note: "No built-in singly list. use collections.deque for high-perf doubly linked ops." },
          { lang: "Go", note: "container/list provides doubly linked lists. Pointers are safe and efficient." }
        ].map((item, i) => (
          <div key={i} className="p-5 bg-slate-900 border border-white/5 rounded-2xl group hover:border-cyan-500/20 transition-all">
            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <ChevronRight size={12} className="opacity-50" /> {item.lang}
            </div>
            <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>

      {/* Existing Tips */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-900 border border-white/5 rounded-2xl">
          <div className="text-[10px] font-black text-cyan-400 uppercase mb-2">Memory Management</div>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
            In C/C++, don&apos;t forget to manually <code className="text-rose-400">free()</code> or <code className="text-rose-400">delete</code> nodes when removing them to avoid memory leaks.
          </p>
        </div>
        <div className="p-4 bg-slate-900 border border-white/5 rounded-2xl">
          <div className="text-[10px] font-black text-emerald-400 uppercase mb-2">Head Updates</div>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
            When inserting at the head, you must update the global <code className="text-white">head</code> pointer, otherwise you lose access to the new start of the list.
          </p>
        </div>
      </div>
    </PerspectiveCard>
  );
}