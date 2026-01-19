"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Undo, Calculator, Code, History, Map, Server, MessageCircleQuestion, RefreshCw } from "lucide-react";

const applications = [
  {
    icon: <Code size={28} />,
    title: "Function Call Stack",
    description: "The runtime stack tracks function calls, local variables, and return addresses.",
    usedIn: ["Every program execution", "Recursion", "Stack overflow debugging", "Debuggers for tracebacks"],
    code: `function factorial(n) {
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
    color: "blue"
  },
  {
    icon: <Undo size={28} />,
    title: "Undo/Redo Operations",
    description: "Text editors and graphics software use stacks for undo/redo functionality.",
    usedIn: ["Text editors (VSCode, Word)", "Photo editing (Photoshop)", "Drawing applications", "Any software with history"],
    code: `class TextEditor {
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
      this.redoStack.push(this.undoStack.pop());
      // ... reverse action
    }
  }
}`,
    color: "purple"
  },
  {
    icon: <History size={28} />,
    title: "Browser Back/Forward",
    description: "Web browsers use two stacks to navigate through page history.",
    usedIn: ["Chrome, Firefox, Safari", "Back button uses pop", "Forward button uses another stack", "Session history"],
    code: `class BrowserHistory {
  constructor() {
    this.backStack = [];
    this.forwardStack = [];
  }
  visit(url) {
    this.backStack.push(url);
    this.forwardStack = [];
  }
  back() {
    if(this.backStack.length > 1) {
       this.forwardStack.push(this.backStack.pop());
       return this.backStack[this.backStack.length - 1];
    }
  }
}`,
    color: "emerald"
  },
  {
    icon: <Calculator size={28} />,
    title: "Expression Evaluation",
    description: "Compilers and calculators use stacks to parse and evaluate expressions.",
    usedIn: ["Calculator apps", "Compilers", "Mathematical software", "Spreadsheet formulas"],
    code: `// Evaluates "2 3 + 5 *" (postfix)
function evaluatePostfix(expr) {
  const stack = [];
  for (let token of expr.split(' ')) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      // operate(a, b, token)
      if (token === '+') stack.push(a + b);
      // ... other ops
    }
  }
  return stack.pop(); // Result
}`,
    color: "pink"
  },
];

export default function StackApplications() {
  return (
    <PerspectiveCard color="purple">
      <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Real-World Relevance</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Stack Applications</p>
      </div>

      <div className="space-y-8">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={`p-8 bg-slate-900/70 border border-${app.color}-500/20 rounded-[2.5rem] shadow-lg`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className={`shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-${app.color}-500/10 text-${app.color}-400 border border-${app.color}-500/20`}>
                    {app.icon}
                </div>
                <div>
                    <h4 className="text-2xl font-black text-white mb-1">{app.title}</h4>
                    <p className="text-md text-slate-400 leading-relaxed">{app.description}</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h5 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Used In:</h5>
                    <ul className="space-y-2">
                        {app.usedIn.map(item => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className={`w-1 h-1 rounded-full bg-${app.color}-500`}/>{item}</li>
                        ))}
                    </ul>
                </div>
                <CodeBlock code={app.code} language="javascript" title="Example"/>
            </div>

          </motion.div>
        ))}
      </div>
    </PerspectiveCard>
  );
}