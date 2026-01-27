"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Settings, BarChart3, Calculator, Search, Trash2 } from "lucide-react";

const languages = [
  { id: "c", name: "C" },
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
];

const operations = [
  {
    id: "height",
    name: "Calculate Height",
    icon: <BarChart3 />,
    description: "Computes the maximum depth of the tree from the root to the farthest leaf node.",
    codes: {
      c: `int height(struct Node* root) {
    if (root == NULL) return -1;
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}`,
      cpp: `int height(Node* root) {
    if (root == nullptr) return -1;
    return 1 + max(height(root->left), height(root->right));
}`,
      java: `int height(Node root) {
    if (root == null) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}`,
      javascript: `function height(root) {
  if (root === null) return -1;
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
}`,
      python: `def height(root):
    if root is None: return -1
    return 1 + max(height(root.left), height(root.right))`,
      go: `func Height(root *Node) int {
    if root == nil { return -1 }
    left := Height(root.Left)
    right := Height(root.Right)
    if left > right { return 1 + left }
    return 1 + right
}`,
    },
  },
  {
    id: "count",
    name: "Count Nodes",
    icon: <Calculator />,
    description: "Recursively counts the total number of nodes in the tree.",
    codes: {
      c: `int countNodes(struct Node* root) {
    if (root == NULL) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}`,
      cpp: `int countNodes(Node* root) {
    if (root == nullptr) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}`,
      java: `int countNodes(Node root) {
    if (root == null) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}`,
      javascript: `function countNodes(root) {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}`,
      python: `def count_nodes(root):
    if root is None: return 0
    return 1 + count_nodes(root.left) + count_nodes(root.right)`,
      go: `func CountNodes(root *Node) int {
    if root == nil { return 0 }
    return 1 + CountNodes(root.Left) + CountNodes(root.Right)
}`,
    },
  },
  {
    id: "min",
    name: "Find Minimum",
    icon: <Search />,
    description: "Finds the node with the minimum value. In a BST, this is the leftmost node.",
    codes: {
      c: `int findMin(struct Node* root) {
    if (root == NULL) return -1; // Error
    while (root->left != NULL) {
        root = root->left;
    }
    return root->data;
}`,
      cpp: `int findMin(Node* root) {
    if (root == nullptr) throw runtime_error("Empty tree");
    while (root->left != nullptr) {
        root = root->left;
    }
    return root->data;
}`,
      java: `int findMin(Node root) {
    if (root == null) throw new RuntimeException("Empty tree");
    while (root.left != null) {
        root = root.left;
    }
    return root.data;
}`,
      javascript: `function findMin(root) {
  if (root === null) return null;
  while (root.left !== null) {
    root = root.left;
  }
  return root.data;
}`,
      python: `def find_min(root):
    if root is None: return None
    while root.left:
        root = root.left
    return root.data`,
      go: `func FindMin(root *Node) int {
    if root == nil { return 0 } // Or error
    for root.Left != nil {
        root = root.Left
    }
    return root.Data
}`,
    },
  },
  {
    id: "delete",
    name: "Delete Node",
    icon: <Trash2 />,
    description: "Removes a node from a BST while maintaining the BST property. Handles leaf nodes, nodes with one child, and nodes with two children.",
    codes: {
      c: `struct Node* deleteNode(struct Node* root, int key) {
    if (root == NULL) return root;
    if (key < root->data) root->left = deleteNode(root->left, key);
    else if (key > root->data) root->right = deleteNode(root->right, key);
    else {
        if (root->left == NULL) {
            struct Node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            struct Node* temp = root->left;
            free(root);
            return temp;
        }
        struct Node* temp = minValueNode(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}`,
      cpp: `Node* deleteNode(Node* root, int key) {
    if (root == nullptr) return root;
    if (key < root->data) root->left = deleteNode(root->left, key);
    else if (key > root->data) root->right = deleteNode(root->right, key);
    else {
        if (root->left == nullptr) {
            Node* temp = root->right;
            delete root;
            return temp;
        } else if (root->right == nullptr) {
            Node* temp = root->left;
            delete root;
            return temp;
        }
        Node* temp = minValueNode(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}`,
      java: `Node deleteNode(Node root, int key) {
    if (root == null) return root;
    if (key < root.data) root.left = deleteNode(root.left, key);
    else if (key > root.data) root.right = deleteNode(root.right, key);
    else {
        if (root.left == null) return root.right;
        else if (root.right == null) return root.left;
        root.data = minValue(root.right);
        root.right = deleteNode(root.right, root.data);
    }
    return root;
}`,
      javascript: `function deleteNode(root, key) {
  if (root === null) return null;
  if (key < root.data) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.data) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    const minVal = findMin(root.right);
    root.data = minVal;
    root.right = deleteNode(root.right, minVal);
  }
  return root;
}`,
      python: `def delete_node(root, key):
    if root is None: return root
    if key < root.data:
        root.left = delete_node(root.left, key)
    elif key > root.data:
        root.right = delete_node(root.right, key)
    else:
        if root.left is None: return root.right
        elif root.right is None: return root.left
        temp = min_value_node(root.right)
        root.data = temp.data
        root.right = delete_node(root.right, temp.data)
    return root`,
      go: `func DeleteNode(root *Node, key int) *Node {
    if root == nil { return root }
    if key < root.Data {
        root.Left = DeleteNode(root.Left, key)
    } else if key > root.Data {
        root.Right = DeleteNode(root.Right, key)
    } else {
        if root.Left == nil { return root.Right }
        if root.Right == nil { return root.Left }
        minVal := FindMin(root.Right)
        root.Data = minVal
        root.Right = DeleteNode(root.Right, minVal)
    }
    return root
}`,
    },
  },
];

export default function TreeOperationsSection() {
  const [activeOp, setActiveOp] = useState(operations[0]);
  const [lang, setLang] = useState("javascript");

  return (
    <PerspectiveCard color="teal">
        <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24 space-y-6">
                    <div>
                        <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-3">Operation</h3>
                        <div className="space-y-2">
                            {operations.map(op => (
                                <button 
                                    key={op.id} 
                                    onClick={() => setActiveOp(op)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${activeOp.id === op.id ? 'bg-teal-500/20 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}
                                >
                                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg text-teal-400 ${activeOp.id === op.id ? 'bg-teal-500/20' : 'bg-slate-800'}`}>
                                        {op.icon}
                                    </div>
                                    <span className="text-sm font-bold">{op.name}</span>
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
                        key={`${activeOp.id}-${lang}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-4">{activeOp.name}</h3>
                        <p className="text-slate-400 font-medium leading-relaxed mb-8">{activeOp.description}</p>
                        
                        <CodeBlock 
                            code={activeOp.codes[lang]} 
                            language={lang} 
                            title={`${activeOp.name} in ${languages.find(l => l.id === lang).name}`}
                        />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </PerspectiveCard>
  );
}
