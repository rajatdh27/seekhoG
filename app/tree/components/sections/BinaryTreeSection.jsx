"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Binary, GitMerge } from "lucide-react";

const languages = [
  { id: "c", name: "C" },
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const syntaxData = {
  declaration: {
    title: "Node Declaration",
    c: `struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};`,
    cpp: `class Node {
public:
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};`,
    java: `class Node {
    int data;
    Node left, right;
    public Node(int item) {
        data = item;
        left = right = null;
    }
}`,
    javascript: `class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}`,
    python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None`,
    go: `type Node struct {
    Data  int
    Left  *Node
    Right *Node
}`,
  },
};

export default function BinaryTreeSection() {
  const [lang, setLang] = useState("cpp");
  const op = "declaration";

  return (
    <PerspectiveCard color="teal">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/3 xl:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-3">Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <button key={l.id} onClick={() => setLang(l.id)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${lang === l.id ? 'bg-teal-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${op}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CodeBlock code={syntaxData[op][lang]} language={lang} title={`${syntaxData[op].title} in ${languages.find(l => l.id === lang).name}`} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </PerspectiveCard>
  );
}