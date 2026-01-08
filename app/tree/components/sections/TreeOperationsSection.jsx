"use client";
import { motion } from "framer-motion";

export default function TreeOperationsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🔧 Common Tree Operations
      </h2>

      {/* Operations Grid */}
      <div className="space-y-12">
        {/* Height Calculation */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
            📏 Calculate Height
          </h3>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm text-slate-100 overflow-x-auto">
              <code>{`function height(root) {
    if (root === null) return -1;

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}`}</code>
            </pre>
          </div>
        </div>

        {/* Count Nodes */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            🔢 Count Nodes
          </h3>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm text-slate-100 overflow-x-auto">
              <code>{`function countNodes(root) {
    if (root === null) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
}`}</code>
            </pre>
          </div>
        </div>

        {/* Find Minimum */}
        <div>
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
            ⬇️ Find Minimum Value
          </h3>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm text-slate-100 overflow-x-auto">
              <code>{`function findMin(root) {
    if (root === null) return null;

    while (root.left !== null) {
        root = root.left;
    }

    return root.data;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Delete Node */}
        <div>
          <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
            🗑️ Delete Node
          </h3>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm text-slate-100 overflow-x-auto">
              <code>{`function deleteNode(root, key) {
    if (root === null) return null;

    if (key < root.data) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.data) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node found - handle 3 cases
        // Case 1: Leaf node
        if (root.left === null && root.right === null)
            return null;

        // Case 2: One child
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Case 3: Two children
        const minRight = findMin(root.right);
        root.data = minRight;
        root.right = deleteNode(root.right, minRight);
    }

    return root;
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { op: "Is Empty?", code: "root === null" },
            { op: "Is Leaf?", code: "!node.left && !node.right" },
            { op: "Has One Child?", code: "!node.left ^ !node.right" },
            { op: "Has Two Children?", code: "node.left && node.right" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.op}
              </div>
              <code className="text-sm text-emerald-600 dark:text-emerald-400">
                {item.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
