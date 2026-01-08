"use client";

import { motion } from "framer-motion";

const applications = [
  {
    id: "function-calls",
    icon: "📞",
    title: "Function Call Stack",
    description: "The runtime stack tracks function calls, local variables, and return addresses",
    realWorld: [
      "Every program execution uses call stack",
      "Recursion relies on call stack",
      "Stack overflow occurs when too deep",
      "Debuggers use call stack for tracebacks",
    ],
    example: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// Call Stack:
// factorial(3)
//   factorial(2)
//     factorial(1) <- top
//       returns 1
//     returns 2
//   returns 6`,
    color: "blue",
  },
  {
    id: "undo-redo",
    icon: "↩️",
    title: "Undo/Redo Operations",
    description: "Text editors, graphics software use stacks for undo/redo functionality",
    realWorld: [
      "Text editors (VSCode, Word, etc.)",
      "Photo editing (Photoshop, GIMP)",
      "Drawing applications",
      "Any software with undo/redo",
    ],
    example: `class TextEditor {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  type(text) {
    this.undoStack.push({ action: 'type', text });
    this.redoStack = []; // Clear redo on new action
  }

  undo() {
    if (this.undoStack.length > 0) {
      const action = this.undoStack.pop();
      this.redoStack.push(action);
      // Reverse the action
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      const action = this.redoStack.pop();
      this.undoStack.push(action);
      // Reapply the action
    }
  }
}`,
    color: "purple",
  },
  {
    id: "browser-history",
    icon: "🌐",
    title: "Browser Back/Forward",
    description: "Web browsers use stacks to navigate through page history",
    realWorld: [
      "Chrome, Firefox, Safari navigation",
      "Back button uses stack pop",
      "Forward button uses another stack",
      "Session history management",
    ],
    example: `class BrowserHistory {
  constructor() {
    this.backStack = [];
    this.forwardStack = [];
    this.currentPage = null;
  }

  visit(url) {
    if (this.currentPage) {
      this.backStack.push(this.currentPage);
    }
    this.currentPage = url;
    this.forwardStack = []; // Clear forward on new visit
  }

  back() {
    if (this.backStack.length > 0) {
      this.forwardStack.push(this.currentPage);
      this.currentPage = this.backStack.pop();
    }
  }

  forward() {
    if (this.forwardStack.length > 0) {
      this.backStack.push(this.currentPage);
      this.currentPage = this.forwardStack.pop();
    }
  }
}`,
    color: "indigo",
  },
  {
    id: "expression-parsing",
    icon: "🧮",
    title: "Expression Evaluation",
    description: "Compilers and calculators use stacks to parse and evaluate expressions",
    realWorld: [
      "Calculator apps",
      "Programming language compilers",
      "Mathematical software (MATLAB, Mathematica)",
      "Spreadsheet formula evaluation (Excel)",
    ],
    example: `// Evaluating postfix: "2 3 + 5 *"
function evaluatePostfix(expr) {
  const stack = [];

  for (let token of expr.split(' ')) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operate(a, b, token));
    }
  }

  return stack.pop(); // Result: 25
}`,
    color: "green",
  },
  {
    id: "syntax-checking",
    icon: "✅",
    title: "Syntax Checking",
    description: "IDEs and compilers use stacks to check balanced brackets and syntax",
    realWorld: [
      "Code editors (VSCode, IntelliJ)",
      "Compilers (GCC, Clang)",
      "Linters and syntax validators",
      "HTML/XML parsers",
    ],
    example: `function checkBalanced(code) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let char of code) {
    if (char in pairs) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }

  return stack.length === 0;
}`,
    color: "pink",
  },
  {
    id: "dfs-traversal",
    icon: "🕸️",
    title: "DFS Traversal",
    description: "Graph and tree algorithms use stacks for depth-first search",
    realWorld: [
      "File system traversal",
      "Web crawlers",
      "Maze solving algorithms",
      "Dependency resolution",
      "Topological sorting",
    ],
    example: `function dfsIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited.has(node)) continue;
    visited.add(node);
    result.push(node);

    // Add neighbors to stack
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}`,
    color: "orange",
  },
  {
    id: "backtracking",
    icon: "🔙",
    title: "Backtracking Algorithms",
    description: "Solving puzzles and games using backtracking with stack",
    realWorld: [
      "Sudoku solvers",
      "Chess engines",
      "Path finding in mazes",
      "N-Queens problem",
      "Constraint satisfaction",
    ],
    example: `function solveMaze(maze, start, end) {
  const stack = [[start, [start]]]; // [position, path]
  const visited = new Set();

  while (stack.length > 0) {
    const [pos, path] = stack.pop();

    if (pos === end) return path;
    if (visited.has(pos)) continue;
    visited.add(pos);

    // Try all 4 directions
    for (let next of getNeighbors(maze, pos)) {
      if (!visited.has(next)) {
        stack.push([next, [...path, next]]);
      }
    }
  }

  return null; // No solution
}`,
    color: "red",
  },
  {
    id: "memory-management",
    icon: "💾",
    title: "Memory Management",
    description: "Operating systems use stack for automatic memory allocation",
    realWorld: [
      "Local variable storage",
      "Thread stack allocation",
      "Stack vs Heap memory",
      "Stack pointer management",
    ],
    example: `// Each function call allocates stack frame
function example() {
  int localVar = 10;     // Allocated on stack
  int array[100];        // Allocated on stack

  // When function returns:
  // - Stack pointer moves back
  // - Memory automatically freed
  // - No garbage collection needed
}

// Benefits:
// - Fast allocation/deallocation (O(1))
// - Automatic cleanup
// - No fragmentation
// - Cache-friendly`,
    color: "teal",
  },
];

export default function StackApplications() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Real-World Applications
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Stacks are fundamental to computer science and used everywhere in software development.
        Here are the most important real-world applications.
      </p>

      <div className="grid gap-6">
        {applications.map((app, idx) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-700 dark:to-purple-900/20 rounded-xl p-6 border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{app.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {app.description}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Used In:
              </h4>
              <div className="grid md:grid-cols-2 gap-2">
                {app.realWorld.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-purple-600 dark:text-purple-400">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                Code Example:
              </h4>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                  <code>{app.example}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">
          Why Stacks Matter in Industry
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              System Programming:
            </h4>
            <ul className="space-y-1">
              <li>• Every program execution uses the call stack</li>
              <li>• Understanding stack is crucial for debugging</li>
              <li>• Critical for performance optimization</li>
              <li>• Essential for understanding recursion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Application Development:
            </h4>
            <ul className="space-y-1">
              <li>• Undo/Redo in every major application</li>
              <li>• Navigation history in browsers and apps</li>
              <li>• Expression parsing in calculators</li>
              <li>• Syntax checking in IDEs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Algorithms:
            </h4>
            <ul className="space-y-1">
              <li>• DFS traversal in graphs and trees</li>
              <li>• Backtracking for constraint problems</li>
              <li>• Iterative tree traversals</li>
              <li>• State management in simulations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Language Design:
            </h4>
            <ul className="space-y-1">
              <li>• Compiler design and parsing</li>
              <li>• Runtime environment management</li>
              <li>• Exception handling mechanisms</li>
              <li>• Closure and scope management</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
