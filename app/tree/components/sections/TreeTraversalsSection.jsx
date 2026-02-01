"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeBlock from "@/app/components/common/CodeBlock";
import { ArrowRightLeft, GitMerge, Binary, GitBranch, Settings } from "lucide-react";

const languages = [
  { id: "c", name: "C" },
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const traversals = [
  {
    id: "inorder",
    name: "In-Order Traversal",
    description: "Left → Root → Right. Results in a sorted sequence for a BST.",
    codes: {
      c: `void inorder(struct Node* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}`,
      cpp: `void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}`,
      java: `void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.data + " ");
    inorder(root.right);
}`,
      javascript: `function inorder(node) {
  if (node === null) return;
  inorder(node.left);
  console.log(node.data);
  inorder(node.right);
}`,
      python: `def inorder(root):
    if root is None: return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)`,
      go: `func Inorder(root *Node) {
    if root == nil { return }
    Inorder(root.Left)
    fmt.Printf("%d ", root.Data)
    Inorder(root.Right)
}`,
    },
  },
  {
    id: "preorder",
    name: "Pre-Order Traversal",
    description: "Root → Left → Right. Useful for creating a copy of a tree.",
    codes: {
      c: `void preorder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}`,
      cpp: `void preorder(Node* root) {
    if (root == nullptr) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}`,
      java: `void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.data + " ");
    preorder(root.left);
    preorder(root.right);
}`,
      javascript: `function preorder(node) {
  if (node === null) return;
  console.log(node.data);
  preorder(node.left);
  preorder(node.right);
}`,
      python: `def preorder(root):
    if root is None: return
    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)`,
      go: `func Preorder(root *Node) {
    if root == nil { return }
    fmt.Printf("%d ", root.Data)
    Preorder(root.Left)
    Preorder(root.Right)
}`,
    },
  },
  {
    id: "postorder",
    name: "Post-Order Traversal",
    description: "Left → Right → Root. Useful for deleting nodes or expression evaluation.",
    codes: {
      c: `void postorder(struct Node* root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}`,
      cpp: `void postorder(Node* root) {
    if (root == nullptr) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}`,
      java: `void postorder(Node root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.data + " ");
}`,
      javascript: `function postorder(node) {
  if (node === null) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.data);
}`,
      python: `def postorder(root):
    if root is None: return
    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")`,
      go: `func Postorder(root *Node) {
    if root == nil { return }
    Postorder(root.Left)
    Postorder(root.Right)
    fmt.Printf("%d ", root.Data)
}`,
    },
  },
  {
    id: "levelorder",
    name: "Level-Order Traversal",
    description: "Visits nodes level by level, from left to right. Uses a queue.",
    codes: {
      c: `void levelOrder(struct Node* root) {
    if (root == NULL) return;
    struct Node** queue = createQueue();
    enqueue(queue, root);
    while (!isEmpty(queue)) {
        struct Node* temp = dequeue(queue);
        printf("%d ", temp->data);
        if (temp->left) enqueue(queue, temp->left);
        if (temp->right) enqueue(queue, temp->right);
    }
}`,
      cpp: `void levelOrder(Node* root) {
    if (root == nullptr) return;
    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();
        cout << temp->data << " ";
        if (temp->left) q.push(temp->left);
        if (temp->right) q.push(temp->right);
    }
}`,
      java: `void levelOrder(Node root) {
    if (root == null) return;
    Queue<Node> queue = new LinkedList<>();
    queue.add(root);
    while (!queue.isEmpty()) {
        Node temp = queue.poll();
        System.out.print(temp.data + " ");
        if (temp.left != null) queue.add(temp.left);
        if (temp.right != null) queue.add(temp.right);
    }
}`,
      javascript: `function levelOrder(root) {
  if (root === null) return;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}`,
      python: `def level_order(root):
    if root is None: return
    queue = [root]
    while queue:
        node = queue.pop(0)
        print(node.data, end=" ")
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)`,
      go: `func LevelOrder(root *Node) {
    if root == nil { return }
    queue := []*Node{root}
    for len(queue) > 0 {
        node := queue[0]
        queue = queue[1:]
        fmt.Printf("%d ", node.Data)
        if node.Left != nil { queue = append(queue, node.Left) }
        if node.Right != nil { queue = append(queue, node.Right) }
    }
}`,
    },
  },
];

export default function TreeTraversalsSection() {
  const [traversal, setTraversal] = useState(traversals[0]);
  const [lang, setLang] = useState("javascript");

  return (
    <PerspectiveCard color="teal">
      <SectionHeader 
        title="Tree Traversals" 
        description="Techniques for visiting all nodes in a specific order."
        icon={Share2} 
        color="teal" 
        className="mb-10"
      />

      <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-6">
                    <div>
                        <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-3">Traversal</h3>
                        <div className="space-y-2">
                            {traversals.map(t => (
                                <button 
                                    key={t.id} 
                                    onClick={() => setTraversal(t)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${traversal.id === t.id ? 'bg-teal-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                                >
                                    <span className="text-sm font-bold">{t.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-3">Language</h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map(l => (
                                <button 
                                    key={l.id} 
                                    onClick={() => setLang(l.id)}
                                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${lang === l.id ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                                >
                                    {l.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
            <main className="lg:col-span-8 xl:col-span-9 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${traversal.id}-${lang}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-4">{traversal.name}</h3>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{traversal.description}</p>
                        
                        <CodeBlock 
                            code={traversal.codes[lang]} 
                            language={lang} 
                            title={`${traversal.name} in ${languages.find(l => l.id === lang).name}`}
                        />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </PerspectiveCard>
  );
}
