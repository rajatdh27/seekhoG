"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { GitBranch } from "lucide-react";

const languages = [
  { id: "c", name: "C" },
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const syntaxData = {
  search: {
    title: "BST Search",
    c: `struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}`,
    cpp: `Node* search(Node* root, int key) {
    if (root == nullptr || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}`,
    java: `Node search(Node root, int key) {
    if (root == null || root.data == key) return root;
    if (key < root.data) return search(root.left, key);
    return search(root.right, key);
}`,
    javascript: `function search(root, key) {
    if (root === null || root.data === key) return root;
    if (key < root.data) return search(root.left, key);
    return search(root.right, key);
}`,
    python: `def search(root, key):
    if root is None or root.data == key: return root
    if key < root.data: return search(root.left, key)
    return search(root.right, key)`,
    go: `func search(root *Node, key int) *Node {
    if root == nil || root.Data == key { return root }
    if key < root.Data { return search(root.Left, key) }
    return search(root.Right, key)
}`,
  },
  insert: {
    title: "BST Insert",
    c: `struct Node* insert(struct Node* root, int key) {
    if (root == NULL) return newNode(key);
    if (key < root->data) root->left = insert(root->left, key);
    else if (key > root->data) root->right = insert(root->right, key);
    return root;
}`,
    cpp: `Node* insert(Node* root, int key) {
    if (root == nullptr) return new Node(key);
    if (key < root->data) root->left = insert(root->left, key);
    else if (key > root->data) root->right = insert(root->right, key);
    return root;
}`,
    java: `Node insert(Node root, int key) {
    if (root == null) return new Node(key);
    if (key < root.data) root.left = insert(root.left, key);
    else if (key > root.data) root.right = insert(root.right, key);
    return root;
}`,
    javascript: `function insert(root, key) {
    if (root === null) return new Node(key);
    if (key < root.data) root.left = insert(root.left, key);
    else if (key > root.data) root.right = insert(root.right, key);
    return root;
}`,
    python: `def insert(root, key):
    if root is None: return Node(key)
    if key < root.data: root.left = insert(root.left, key)
    elif key > root.data: root.right = insert(root.right, key)
    return root`,
    go: `func insert(root *Node, key int) *Node {
    if root == nil { return NewNode(key) }
    if key < root.Data { root.Left = insert(root.Left, key) }
    else if key > root.Data { root.Right = insert(root.Right, key) }
    return root
}`,
  },
};

export default function BSTSection() {
  const [lang, setLang] = useState("cpp");
  const [op, setOp] = useState("search");

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
            <div>
              <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-3">Operation</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(syntaxData).map(key => (
                  <button key={key} onClick={() => setOp(key)} className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${op === key ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                    {syntaxData[key].title}
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