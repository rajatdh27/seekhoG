"use client";

import { motion } from "framer-motion";

export default function LinkedListCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Linked List Quick Reference Cheatsheet
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pattern Recognition */}
        <CheatCard
          title="Pattern Recognition"
          items={[
            "Cycle/Middle/Nth → Two Pointers (Fast/Slow)",
            "Reverse List → Reversal Pattern",
            "Find Cycle Start → Floyd's Algorithm",
            "Merge Sorted → Merge Lists Pattern",
            "Head Changes → Dummy Node",
            "Palindrome/Reorder → Runner Technique",
          ]}
          color="green"
        />

        {/* Time Complexities */}
        <CheatCard
          title="Time Complexities"
          items={[
            "Insert at Head: O(1)",
            "Insert at Tail: O(1) with tail pointer",
            "Delete at Head: O(1)",
            "Search: O(n)",
            "Access by Index: O(n)",
            "Reverse: O(n), Space: O(1)",
          ]}
          color="teal"
        />

        {/* Edge Cases */}
        <CheatCard
          title="Edge Cases to Check"
          items={[
            "Empty list (head = null)",
            "Single node list",
            "Two nodes only",
            "Cycle in list",
            "NULL pointer dereference",
            "Modifying while traversing",
          ]}
          color="cyan"
        />

        {/* Common Patterns */}
        <CheatCard
          title="Common Patterns"
          items={[
            "Fast/Slow: Detect cycle, find middle",
            "Dummy: Simplify head edge cases",
            "Prev/Curr/Next: For reversal",
            "Two Lists: Compare or merge",
            "Recursive: For tree-like operations",
            "HashMap: Track visited nodes",
          ]}
          color="emerald"
        />

        {/* Optimization Tricks */}
        <CheatCard
          title="Optimization Tricks"
          items={[
            "Keep tail pointer for O(1) append",
            "Use dummy node to avoid null checks",
            "Fast/slow for O(1) space solutions",
            "Reverse in-place to save space",
            "Circular for infinite loops",
            "Doubly linked for bidirectional",
          ]}
          color="lime"
        />

        {/* Common Mistakes */}
        <CheatCard
          title="Common Mistakes"
          items={[
            "Not checking for null before .next",
            "Losing reference to head",
            "Infinite loops in cycles",
            "Off-by-one in nth from end",
            "Not handling single node case",
            "Forgetting to update tail pointer",
          ]}
          color="red"
        />
      </div>

      {/* Essential Code Snippets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-slate-900 dark:bg-slate-950 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-slate-100 mb-4">
          Essential Code Snippets
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeSnippet
            title="Reverse Linked List"
            code={`function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}`}
          />
          <CodeSnippet
            title="Detect Cycle (Floyd's)"
            code={`function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}`}
          />
          <CodeSnippet
            title="Merge Two Sorted Lists"
            code={`function merge(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return dummy.next;
}`}
          />
          <CodeSnippet
            title="Find Middle Node"
            code={`function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}`}
          />
        </div>
      </motion.div>

      {/* Node Structures */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">
          Node Structure Templates
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <NodeStructure
            title="Singly Linked"
            code={`class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}`}
          />
          <NodeStructure
            title="Doubly Linked"
            code={`class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}`}
          />
          <NodeStructure
            title="Random Pointer"
            code={`class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}`}
          />
        </div>
      </motion.div>

      {/* Language-Specific Quick Ref */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200">
          Language Quick Reference
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <LanguageQuickRef
            lang="JavaScript"
            icon="🟨"
            create="new ListNode(val)"
            next="node.next"
            null="null"
            check="node !== null"
          />
          <LanguageQuickRef
            lang="Python"
            icon="🐍"
            create="ListNode(val)"
            next="node.next"
            null="None"
            check="node is not None"
          />
          <LanguageQuickRef
            lang="C++"
            icon="⚡"
            create="new ListNode(val)"
            next="node->next"
            null="nullptr"
            check="node != nullptr"
          />
          <LanguageQuickRef
            lang="Java"
            icon="☕"
            create="new ListNode(val)"
            next="node.next"
            null="null"
            check="node != null"
          />
          <LanguageQuickRef
            lang="Go"
            icon="🔵"
            create="&ListNode{Val: val}"
            next="node.Next"
            null="nil"
            check="node != nil"
          />
          <LanguageQuickRef
            lang="C"
            icon="🔷"
            create="malloc(sizeof(Node))"
            next="node->next"
            null="NULL"
            check="node != NULL"
          />
        </div>
      </motion.div>

      {/* Interview Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-200">
          Interview Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
              Before Coding:
            </h4>
            <ul className="space-y-1">
              <li>• Ask: Singly or doubly linked?</li>
              <li>• Ask: Is there a cycle possible?</li>
              <li>• Ask: Can I use extra space?</li>
              <li>• Clarify: Do I need to return new head?</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
              While Coding:
            </h4>
            <ul className="space-y-1">
              <li>• Always check null before accessing .next</li>
              <li>• Use dummy node for head modifications</li>
              <li>• Draw diagrams for pointer manipulation</li>
              <li>• Test with 0, 1, 2 nodes first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
              Pattern Hints:
            </h4>
            <ul className="space-y-1">
              <li>• "Find middle" → Fast/slow pointers</li>
              <li>• "Reverse" → Three pointer technique</li>
              <li>• "Nth from end" → Two pointers n apart</li>
              <li>• "Cycle" → Floyd's algorithm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
              Common Follow-ups:
            </h4>
            <ul className="space-y-1">
              <li>• Can you do it in O(1) space?</li>
              <li>• Can you do it in one pass?</li>
              <li>• What if it's a doubly linked list?</li>
              <li>• Can you handle circular list?</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Templates & Formulas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-4">
          Templates & Formulas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <TemplateCard
            title="Fast/Slow Pointer"
            code="slow = head, fast = head
while fast && fast.next:
  slow = slow.next
  fast = fast.next.next"
          />
          <TemplateCard
            title="Reversal"
            code="prev = null, curr = head
while curr:
  next = curr.next
  curr.next = prev
  prev, curr = curr, next"
          />
          <TemplateCard
            title="Dummy Node"
            code="dummy = new Node(0)
dummy.next = head
// do operations
return dummy.next"
          />
          <TemplateCard
            title="Nth from End"
            code="fast = head
for i in range(n):
  fast = fast.next
slow = head
while fast:
  slow, fast = slow.next, fast.next"
          />
        </div>
      </motion.div>

      {/* Complexity Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-700 dark:to-gray-800 border border-slate-200 dark:border-slate-600 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-4">
          Complexity Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-600">
                <th className="text-left py-2 px-4 text-slate-900 dark:text-slate-200">Operation</th>
                <th className="text-center py-2 px-4 text-slate-900 dark:text-slate-200">Singly Linked</th>
                <th className="text-center py-2 px-4 text-slate-900 dark:text-slate-200">Doubly Linked</th>
                <th className="text-center py-2 px-4 text-slate-900 dark:text-slate-200">Array</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-medium">Insert at Head</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-medium">Insert at Tail</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)*</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-medium">Delete at Head</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-medium">Delete at Tail</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-medium">Access by Index</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-red-600 dark:text-red-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-green-600 dark:text-green-400">O(1)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Search</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
                <td className="text-center py-2 px-4 font-mono text-yellow-600 dark:text-yellow-400">O(n)</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            * O(1) if tail pointer is maintained
          </p>
        </div>
      </motion.div>

      {/* Quick Decision Tree */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-green-900 dark:text-green-200 mb-4">
          Quick Decision Tree
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <span className="font-mono text-green-600 dark:text-green-400 whitespace-nowrap">
              if (finding middle/cycle/nth):
            </span>
            <span>→ Use Fast/Slow Pointers</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-green-600 dark:text-green-400 whitespace-nowrap">
              if (reversing list):
            </span>
            <span>→ Use prev, curr, next pointers</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-green-600 dark:text-green-400 whitespace-nowrap">
              if (head might change):
            </span>
            <span>→ Use Dummy Node</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-green-600 dark:text-green-400 whitespace-nowrap">
              if (merging lists):
            </span>
            <span>→ Compare heads, attach smaller</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-green-600 dark:text-green-400 whitespace-nowrap">
              if (detecting cycle start):
            </span>
            <span>→ Floyd's algorithm (2 phases)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CheatCard({ title, items, color }) {
  const colors = {
    green: "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border-green-200 dark:border-green-800",
    teal: "from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border-teal-200 dark:border-teal-800",
    cyan: "from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 border-cyan-200 dark:border-cyan-800",
    emerald: "from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border-emerald-200 dark:border-emerald-800",
    lime: "from-lime-50 to-lime-100 dark:from-lime-900/30 dark:to-lime-800/30 border-lime-200 dark:border-lime-800",
    red: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border-red-200 dark:border-red-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5`}
    >
      <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
          >
            <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function CodeSnippet({ title, code }) {
  return (
    <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-4 border border-slate-700">
      <div className="text-sm font-semibold text-slate-300 mb-2">{title}</div>
      <pre className="text-xs text-slate-400 font-mono leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function NodeStructure({ title, code }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-200 dark:border-green-800">
      <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</div>
      <pre className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LanguageQuickRef({ lang, icon, create, next, null: nullVal, check }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-bold text-slate-900 dark:text-slate-100">{lang}</span>
      </div>
      <div className="space-y-2 text-xs font-mono">
        <div className="flex justify-between gap-2">
          <span className="text-slate-600 dark:text-slate-400">Create:</span>
          <code className="text-green-600 dark:text-green-400 text-right">{create}</code>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-slate-600 dark:text-slate-400">Next:</span>
          <code className="text-green-600 dark:text-green-400">{next}</code>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-slate-600 dark:text-slate-400">Null:</span>
          <code className="text-green-600 dark:text-green-400">{nullVal}</code>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-slate-600 dark:text-slate-400">Check:</span>
          <code className="text-green-600 dark:text-green-400 text-right">{check}</code>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ title, code }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">{title}</div>
      <pre className="text-xs font-mono text-purple-900 dark:text-purple-200 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}
