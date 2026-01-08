"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const patterns = [
  {
    id: "two-pointers",
    name: "Two Pointers (Fast & Slow)",
    icon: "🐢🐇",
    difficulty: "Easy-Medium",
    description: "Use two pointers moving at different speeds to detect cycles, find middle, or detect patterns",
    whenToUse: [
      "Detect cycle in linked list",
      "Find middle of linked list",
      "Find nth node from end",
      "Check if linked list is palindrome",
      "Remove nth node from end",
      "Detect intersection point",
    ],
    template: `// Floyd's Cycle Detection (Tortoise & Hare)
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;        // Move 1 step
    fast = fast.next.next;   // Move 2 steps

    if (slow === fast) {
      return true;  // Cycle detected
    }
  }

  return false;  // No cycle
}

// Find Middle Node
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;  // Middle node
}

// Find Nth from End
function nthFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return null;
    fast = fast.next;
  }

  // Move both until fast reaches end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}`,
    problems: [
      "Linked List Cycle",
      "Linked List Cycle II",
      "Middle of the Linked List",
      "Remove Nth Node From End of List",
      "Palindrome Linked List",
      "Happy Number",
      "Reorder List",
      "Delete the Middle Node of a Linked List",
    ],
    complexity: "Time: O(n), Space: O(1)",
    keyInsight: "Fast pointer moves 2x speed. When they meet in a cycle, they'll be at same node. For middle, when fast reaches end, slow is at middle.",
  },
  {
    id: "reversal",
    name: "Reversal",
    icon: "🔄",
    difficulty: "Medium",
    description: "Reverse entire list or portions of it by changing next pointers",
    whenToUse: [
      "Reverse entire linked list",
      "Reverse in groups of k",
      "Reverse between positions",
      "Palindrome checking",
      "Reorder list problems",
    ],
    template: `// Reverse Entire List
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;  // Save next
    curr.next = prev;        // Reverse link
    prev = curr;             // Move prev forward
    curr = next;             // Move curr forward
  }

  return prev;  // New head
}

// Reverse in Groups of K
function reverseKGroup(head, k) {
  // Check if we have k nodes
  let count = 0;
  let curr = head;
  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) return head;  // Not enough nodes

  // Reverse k nodes
  let prev = null;
  curr = head;
  for (let i = 0; i < k; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Recursively reverse remaining
  head.next = reverseKGroup(curr, k);
  return prev;
}

// Reverse Between Positions
function reverseBetween(head, left, right) {
  if (left === right) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy;

  // Move to position before left
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Reverse the sublist
  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}`,
    problems: [
      "Reverse Linked List",
      "Reverse Linked List II",
      "Reverse Nodes in k-Group",
      "Swap Nodes in Pairs",
      "Palindrome Linked List",
      "Reorder List",
      "Add Two Numbers II",
    ],
    complexity: "Time: O(n), Space: O(1) iterative, O(n) recursive",
    keyInsight: "Track three pointers: prev, curr, next. Reverse by setting curr.next = prev, then advance all three pointers.",
  },
  {
    id: "cycle-detection",
    name: "Cycle Detection",
    icon: "🔁",
    difficulty: "Medium",
    description: "Detect and handle cycles in linked lists using Floyd's algorithm",
    whenToUse: [
      "Detect if list has cycle",
      "Find cycle starting point",
      "Remove cycle from list",
      "Find cycle length",
      "Intersection with cycle",
    ],
    template: `// Detect Cycle
function detectCycle(head) {
  let slow = head;
  let fast = head;

  // Phase 1: Detect if cycle exists
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Phase 2: Find cycle start
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;  // Cycle start
    }
  }

  return null;  // No cycle
}

// Find Cycle Length
function cycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Count nodes in cycle
      let count = 1;
      let curr = slow.next;
      while (curr !== slow) {
        count++;
        curr = curr.next;
      }
      return count;
    }
  }

  return 0;  // No cycle
}

// Remove Cycle
function removeCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
      fast.next = null;  // Break cycle
      return;
    }
  }
}`,
    problems: [
      "Linked List Cycle",
      "Linked List Cycle II",
      "Find the Duplicate Number",
      "Happy Number",
      "Circular Array Loop",
    ],
    complexity: "Time: O(n), Space: O(1)",
    keyInsight: "Floyd's algorithm: Fast and slow meet in cycle. Then reset slow to head, move both at same speed - they meet at cycle start.",
  },
  {
    id: "merge-lists",
    name: "Merge Lists",
    icon: "🔀",
    difficulty: "Easy-Medium",
    description: "Merge multiple sorted or unsorted lists efficiently",
    whenToUse: [
      "Merge two sorted lists",
      "Merge k sorted lists",
      "Sort linked list",
      "Merge sort on linked list",
      "Flatten multilevel list",
    ],
    template: `// Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
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

  curr.next = l1 || l2;  // Attach remaining
  return dummy.next;
}

// Merge K Sorted Lists (Min Heap)
function mergeKLists(lists) {
  if (!lists.length) return null;

  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged.push(mergeTwoLists(l1, l2));
    }
    lists = merged;
  }

  return lists[0];
}

// Sort Linked List (Merge Sort)
function sortList(head) {
  if (!head || !head.next) return head;

  // Find middle
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split
  const mid = slow.next;
  slow.next = null;

  // Recursively sort and merge
  const left = sortList(head);
  const right = sortList(mid);
  return mergeTwoLists(left, right);
}`,
    problems: [
      "Merge Two Sorted Lists",
      "Merge k Sorted Lists",
      "Sort List",
      "Merge In Between Linked Lists",
      "Flatten a Multilevel Doubly Linked List",
      "Add Two Numbers",
    ],
    complexity: "Time: O(n log k) for k lists, Space: O(log k) for recursion",
    keyInsight: "Use dummy node to simplify edge cases. Compare heads of lists, attach smaller, advance that pointer. Repeat.",
  },
  {
    id: "intersection",
    name: "Intersection",
    icon: "✂️",
    difficulty: "Medium",
    description: "Find intersection point of two linked lists",
    whenToUse: [
      "Find intersection of two lists",
      "Check if lists intersect",
      "Find common node",
      "Y-shaped list problems",
    ],
    template: `// Find Intersection Node
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // When reaching end, switch to other list's head
  // They will meet at intersection or both be null
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;  // Intersection or null
}

// Using Length Difference
function getIntersectionLength(headA, headB) {
  const getLength = (head) => {
    let len = 0;
    while (head) {
      len++;
      head = head.next;
    }
    return len;
  };

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  // Align starting points
  while (lenA > lenB) {
    headA = headA.next;
    lenA--;
  }
  while (lenB > lenA) {
    headB = headB.next;
    lenB--;
  }

  // Find intersection
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}`,
    problems: [
      "Intersection of Two Linked Lists",
      "Intersection of Two Linked Lists II",
    ],
    complexity: "Time: O(m + n), Space: O(1)",
    keyInsight: "Two pointers traverse both lists. When one reaches end, switch to other list's head. They'll meet at intersection after covering same total distance.",
  },
  {
    id: "dummy-node",
    name: "Dummy Node",
    icon: "🎭",
    difficulty: "Easy",
    description: "Use dummy node to simplify edge cases when head might change",
    whenToUse: [
      "Removing nodes (might remove head)",
      "Merging lists",
      "Inserting at any position",
      "Partitioning list",
      "Any operation that might change head",
    ],
    template: `// Remove Elements
function removeElements(head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;  // Skip node
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
}

// Partition List
function partition(head, x) {
  const beforeDummy = new ListNode(0);
  const afterDummy = new ListNode(0);
  let before = beforeDummy;
  let after = afterDummy;

  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }

  after.next = null;
  before.next = afterDummy.next;
  return beforeDummy.next;
}

// Remove Duplicates from Sorted List II
function deleteDuplicates(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      // Skip all duplicates
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }

  return dummy.next;
}`,
    problems: [
      "Remove Linked List Elements",
      "Partition List",
      "Remove Duplicates from Sorted List II",
      "Merge Two Sorted Lists",
      "Delete Node in a Linked List",
      "Insertion Sort List",
    ],
    complexity: "Time: O(n), Space: O(1)",
    keyInsight: "Dummy node points to head. Simplifies cases where head might be removed or changed. Always return dummy.next as new head.",
  },
  {
    id: "runner-technique",
    name: "Runner Technique",
    icon: "🏃",
    difficulty: "Medium",
    description: "Use two pointers with different advancement strategies",
    whenToUse: [
      "Reorder list (L0→Ln→L1→Ln-1...)",
      "Check palindrome",
      "Get kth percentile",
      "Weave/interleave nodes",
    ],
    template: `// Reorder List (L0→Ln→L1→Ln-1→L2→Ln-2...)
function reorderList(head) {
  if (!head || !head.next) return;

  // Step 1: Find middle
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let prev = null;
  let curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Merge two halves
  let first = head;
  let second = prev;
  while (second) {
    const tmp1 = first.next;
    const tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}

// Check if Palindrome
function isPalindrome(head) {
  // Find middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}`,
    problems: [
      "Reorder List",
      "Palindrome Linked List",
      "Odd Even Linked List",
      "Split Linked List in Parts",
    ],
    complexity: "Time: O(n), Space: O(1)",
    keyInsight: "Combine multiple techniques: find middle (fast/slow), reverse second half, then merge/compare. All in one pass.",
  },
  {
    id: "in-place",
    name: "In-place Operations",
    icon: "📍",
    difficulty: "Easy-Medium",
    description: "Modify list structure without extra space",
    whenToUse: [
      "Remove nth node from end",
      "Delete middle node",
      "Remove duplicates",
      "Swap adjacent nodes",
      "Rotate list",
    ],
    template: `// Remove Nth Node from End
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Move fast n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove nth node
  slow.next = slow.next.next;
  return dummy.next;
}

// Swap Pairs
function swapPairs(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = prev.next.next;

    // Swap
    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }

  return dummy.next;
}

// Rotate Right
function rotateRight(head, k) {
  if (!head || k === 0) return head;

  // Get length and make circular
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;

  // Find new tail (len - k % len - 1)
  k = k % len;
  let stepsToNewTail = len - k - 1;
  let newTail = head;
  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
}`,
    problems: [
      "Remove Nth Node From End of List",
      "Delete Node in a Linked List",
      "Swap Nodes in Pairs",
      "Rotate List",
      "Odd Even Linked List",
      "Remove Duplicates from Sorted List",
    ],
    complexity: "Time: O(n), Space: O(1)",
    keyInsight: "Manipulate next pointers directly. Use dummy node for edge cases. Track multiple pointers to avoid losing references.",
  },
];

export default function LinkedListPatterns() {
  const [selectedPattern, setSelectedPattern] = useState(patterns[0]);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
      >
        Linked List Interview Patterns
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Master these 8 essential linked list patterns to solve 95% of linked list interview questions.
        Each pattern represents a proven problem-solving technique.
      </p>

      {/* Pattern Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {patterns.map((pattern, idx) => (
          <motion.button
            key={pattern.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => {
              setSelectedPattern(pattern);
              setShowCode(false);
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              selectedPattern.id === pattern.id
                ? "border-green-500 bg-green-50 dark:bg-green-900/30 shadow-lg"
                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-green-300 dark:hover:border-green-700"
            }`}
          >
            <div className="text-2xl mb-2">{pattern.icon}</div>
            <div className="font-bold text-xs text-slate-900 dark:text-slate-100 mb-1">
              {pattern.name}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {pattern.difficulty}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Pattern Details */}
      <motion.div
        key={selectedPattern.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 mb-2">
              <span className="text-3xl">{selectedPattern.icon}</span>
              {selectedPattern.name}
            </h3>
            <p className="text-slate-700 dark:text-slate-300">{selectedPattern.description}</p>
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-semibold whitespace-nowrap">
            {selectedPattern.difficulty}
          </span>
        </div>

        {/* When to Use */}
        <div className="mb-6">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
            When to Use This Pattern:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {selectedPattern.whenToUse.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="text-green-600 dark:text-green-400 mt-0.5">▸</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Key Insight */}
        <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-green-600">
          <h4 className="font-bold text-sm text-green-600 dark:text-green-400 mb-2">
            Key Insight:
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            {selectedPattern.keyInsight}
          </p>
        </div>

        {/* Complexity */}
        <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
          <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">
            Complexity:
          </h4>
          <p className="font-mono text-green-600 dark:text-green-400 font-semibold">
            {selectedPattern.complexity}
          </p>
        </div>

        {/* Code Template */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">
              Code Template:
            </h4>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
            >
              {showCode ? "Hide Code" : "Show Code"}
            </button>
          </div>

          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto"
            >
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                <code>{selectedPattern.template}</code>
              </pre>
            </motion.div>
          )}
        </div>

        {/* Common Problems */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
            Common LeetCode Problems:
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {selectedPattern.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300 hover:border-green-400 dark:hover:border-green-600 transition-colors"
              >
                {problem}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pattern Selection Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          How to Choose the Right Pattern
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Cycle/Middle/Nth from end?
            </span>
            <span>→ Use Two Pointers (Fast & Slow)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Reverse entire/part of list?
            </span>
            <span>→ Use Reversal Pattern</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Detect cycle start?
            </span>
            <span>→ Use Cycle Detection (Floyd's Algorithm)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Merge sorted lists?
            </span>
            <span>→ Use Merge Lists Pattern</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Find common node?
            </span>
            <span>→ Use Intersection Pattern</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Head might change?
            </span>
            <span>→ Use Dummy Node Pattern</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Reorder/Palindrome?
            </span>
            <span>→ Use Runner Technique</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
              Modify without extra space?
            </span>
            <span>→ Use In-place Operations</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
