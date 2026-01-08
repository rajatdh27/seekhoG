"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const languages = [
  { id: "c", name: "C", icon: "🔷" },
  { id: "cpp", name: "C++", icon: "⚡" },
  { id: "java", name: "Java", icon: "☕" },
  { id: "javascript", name: "JavaScript", icon: "🟨" },
  { id: "python", name: "Python", icon: "🐍" },
  { id: "go", name: "Go", icon: "🔵" },
];

const syntaxData = {
  declaration: {
    title: "Declaration & Creation",
    c: `// Using array (fixed size)
#define MAX 100
int stack[MAX];
int top = -1;

// Using linked list
typedef struct Node {
    int data;
    struct Node* next;
} Node;
Node* top = NULL;`,
    cpp: `// Using STL stack
#include <stack>
stack<int> st;

// Using vector
#include <vector>
vector<int> stack;

// Using deque
#include <deque>
deque<int> stack;`,
    java: `// Using Stack class
import java.util.Stack;
Stack<Integer> stack = new Stack<>();

// Using Deque (recommended)
import java.util.Deque;
import java.util.ArrayDeque;
Deque<Integer> stack = new ArrayDeque<>();

// Using ArrayList
ArrayList<Integer> stack = new ArrayList<>();`,
    javascript: `// Using built-in array
let stack = [];

// Using class
class Stack {
  constructor() {
    this.items = [];
  }
}
const stack = new Stack();`,
    python: `# Using list (built-in)
stack = []

# Using deque (better performance)
from collections import deque
stack = deque()

# Using LifoQueue (thread-safe)
from queue import LifoQueue
stack = LifoQueue()`,
    go: `// Using slice
stack := []int{}

// Using container/list
import "container/list"
stack := list.New()

// Custom struct
type Stack struct {
    items []int
}`,
  },
  push: {
    title: "Push Operation",
    c: `// Array-based push
void push(int stack[], int *top, int val) {
    if (*top >= MAX - 1) {
        printf("Stack Overflow\\n");
        return;
    }
    stack[++(*top)] = val;
}

// Linked list push
void push(Node** top, int val) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = *top;
    *top = newNode;
}`,
    cpp: `// STL stack
st.push(10);
st.push(20);
st.push(30);

// Vector
stack.push_back(10);
stack.push_back(20);

// Emplace (construct in-place)
st.emplace(10);`,
    java: `// Stack class
stack.push(10);
stack.push(20);
stack.push(30);

// Deque
stack.push(10);  // or addFirst()
stack.offerFirst(20);

// ArrayList
stack.add(10);`,
    javascript: `// Using array
stack.push(10);
stack.push(20);
stack.push(30);

// Using class
class Stack {
  push(val) {
    this.items.push(val);
  }
}`,
    python: `# Using list
stack.append(10)
stack.append(20)
stack.append(30)

# Using deque
stack.append(10)

# Using LifoQueue
stack.put(10)`,
    go: `// Using slice
stack = append(stack, 10)
stack = append(stack, 20)

// Using list
stack.PushBack(10)

// Custom struct
func (s *Stack) Push(val int) {
    s.items = append(s.items, val)
}`,
  },
  pop: {
    title: "Pop Operation",
    c: `// Array-based pop
int pop(int stack[], int *top) {
    if (*top < 0) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return stack[(*top)--];
}

// Linked list pop
int pop(Node** top) {
    if (*top == NULL) return -1;
    Node* temp = *top;
    int val = temp->data;
    *top = (*top)->next;
    free(temp);
    return val;
}`,
    cpp: `// STL stack
if (!st.empty()) {
    int val = st.top();
    st.pop();  // pop() returns void
}

// Vector
if (!stack.empty()) {
    int val = stack.back();
    stack.pop_back();
}`,
    java: `// Stack class
if (!stack.isEmpty()) {
    int val = stack.pop();
}

// Deque
if (!stack.isEmpty()) {
    int val = stack.pop();  // or pollFirst()
}

// ArrayList
if (!stack.isEmpty()) {
    int val = stack.remove(stack.size() - 1);
}`,
    javascript: `// Using array
if (stack.length > 0) {
    let val = stack.pop();
}

// Using class
class Stack {
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
}`,
    python: `# Using list
if stack:
    val = stack.pop()

# Using deque
if stack:
    val = stack.pop()

# Using LifoQueue
if not stack.empty():
    val = stack.get()`,
    go: `// Using slice
if len(stack) > 0 {
    val := stack[len(stack)-1]
    stack = stack[:len(stack)-1]
}

// Custom struct
func (s *Stack) Pop() int {
    if len(s.items) == 0 {
        return -1
    }
    val := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return val
}`,
  },
  peek: {
    title: "Peek/Top Operation",
    c: `// Array-based peek
int peek(int stack[], int top) {
    if (top < 0) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack[top];
}

// Linked list peek
int peek(Node* top) {
    if (top == NULL) return -1;
    return top->data;
}`,
    cpp: `// STL stack
if (!st.empty()) {
    int val = st.top();
}

// Vector
if (!stack.empty()) {
    int val = stack.back();
}`,
    java: `// Stack class
if (!stack.isEmpty()) {
    int val = stack.peek();
}

// Deque
if (!stack.isEmpty()) {
    int val = stack.peek();  // or peekFirst()
}

// ArrayList
if (!stack.isEmpty()) {
    int val = stack.get(stack.size() - 1);
}`,
    javascript: `// Using array
if (stack.length > 0) {
    let val = stack[stack.length - 1];
}

// Using class
class Stack {
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
}`,
    python: `# Using list
if stack:
    val = stack[-1]

# Using deque
if stack:
    val = stack[-1]

# LifoQueue doesn't support peek without pop`,
    go: `// Using slice
if len(stack) > 0 {
    val := stack[len(stack)-1]
}

// Custom struct
func (s *Stack) Peek() int {
    if len(s.items) == 0 {
        return -1
    }
    return s.items[len(s.items)-1]
}`,
  },
  isEmpty: {
    title: "Check if Empty",
    c: `// Array-based
bool isEmpty(int top) {
    return top < 0;
}

// Linked list
bool isEmpty(Node* top) {
    return top == NULL;
}`,
    cpp: `// STL stack
bool empty = st.empty();

// Vector
bool empty = stack.empty();

// Check size
bool empty = st.size() == 0;`,
    java: `// Stack class
boolean empty = stack.isEmpty();

// Deque
boolean empty = stack.isEmpty();

// ArrayList
boolean empty = stack.isEmpty();

// Check size
boolean empty = stack.size() == 0;`,
    javascript: `// Using array
let empty = stack.length === 0;

// Using class
class Stack {
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    python: `# Using list
is_empty = len(stack) == 0
# or simply
is_empty = not stack

# Using deque
is_empty = len(stack) == 0

# Using LifoQueue
is_empty = stack.empty()`,
    go: `// Using slice
isEmpty := len(stack) == 0

// Custom struct
func (s *Stack) IsEmpty() bool {
    return len(s.items) == 0
}`,
  },
  size: {
    title: "Get Size/Length",
    c: `// Array-based
int size(int top) {
    return top + 1;
}

// Linked list
int size(Node* top) {
    int count = 0;
    Node* curr = top;
    while (curr != NULL) {
        count++;
        curr = curr->next;
    }
    return count;
}`,
    cpp: `// STL stack
int size = st.size();

// Vector
int size = stack.size();`,
    java: `// Stack class
int size = stack.size();

// Deque
int size = stack.size();

// ArrayList
int size = stack.size();`,
    javascript: `// Using array
let size = stack.length;

// Using class
class Stack {
  size() {
    return this.items.length;
  }
}`,
    python: `# Using list
size = len(stack)

# Using deque
size = len(stack)

# Using LifoQueue
size = stack.qsize()`,
    go: `// Using slice
size := len(stack)

// Using list
size := stack.Len()

// Custom struct
func (s *Stack) Size() int {
    return len(s.items)
}`,
  },
};

export default function StackSyntax() {
  const [selectedLang, setSelectedLang] = useState("javascript");
  const [selectedOperation, setSelectedOperation] = useState("declaration");

  const operations = Object.keys(syntaxData);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Stack Syntax Across Languages
      </motion.h2>

      {/* Language Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Select Language:
        </h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.id}
              onClick={() => setSelectedLang(lang.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                selectedLang === lang.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Operation Tabs */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
          Operation:
        </h3>
        <div className="flex flex-wrap gap-2">
          {operations.map((op) => (
            <button
              key={op}
              onClick={() => setSelectedOperation(op)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedOperation === op
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {syntaxData[op].title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <motion.div
        key={`${selectedLang}-${selectedOperation}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 overflow-x-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-100">
            {syntaxData[selectedOperation].title} - {languages.find(l => l.id === selectedLang)?.name}
          </h4>
          <button
            onClick={() => {
              navigator.clipboard.writeText(syntaxData[selectedOperation][selectedLang]);
            }}
            className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
          >
            Copy
          </button>
        </div>
        <pre className="text-sm text-slate-300 font-mono leading-relaxed">
          <code>{syntaxData[selectedOperation][selectedLang]}</code>
        </pre>
      </motion.div>

      {/* Quick Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
          Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <th className="border border-purple-500 px-4 py-2 text-left text-sm font-semibold">
                  Feature
                </th>
                {languages.map((lang) => (
                  <th
                    key={lang.id}
                    className="border border-purple-500 px-4 py-2 text-center text-sm font-semibold"
                  >
                    {lang.icon} {lang.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Built-in Stack
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (STL)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Array)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (List)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Slice)</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Dynamic Size
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Thread-Safe
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">Manual</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Stack)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">❌</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">✅ (Queue)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center">Manual</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium text-slate-700 dark:text-slate-300">
                  Performance
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-yellow-600 dark:text-yellow-400 font-bold">
                  ⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-center text-green-600 dark:text-green-400 font-bold">
                  ⚡⚡⚡
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Implementation Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200">
          Implementation Notes
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>C:</strong> Manual memory management required. Use array for fixed size or linked list for dynamic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>C++:</strong> STL stack is the preferred choice. It's a container adapter wrapping deque by default.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Java:</strong> Deque is recommended over Stack class (legacy). ArrayDeque is more efficient.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>JavaScript:</strong> Arrays have built-in push/pop methods, making them perfect for stacks.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Python:</strong> Lists are the most common. Use deque for better performance or LifoQueue for threading.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
            <span>
              <strong>Go:</strong> Slices are idiomatic. Container/list can be used but slices are more efficient.
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
