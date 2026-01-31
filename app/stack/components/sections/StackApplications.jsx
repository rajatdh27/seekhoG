"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Undo, Calculator, Code, History, Map, Server, MessageCircleQuestion, RefreshCw } from "lucide-react";

export default function StackApplications() {
  const apps = [
    {
      title: "Function Call Stack",
      description: "The runtime stack tracks function calls, local variables, and return addresses.",
      icon: Code,
      color: "blue",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Every program execution", "Recursion", "Stack overflow debugging", "Debuggers for tracebacks"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-blue-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n// Call Stack:\n// factorial(3)\n//   factorial(2)\n//     factorial(1) <- top\n//       returns 1\n//     returns 2\n//   returns 6`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      title: "Undo/Redo Operations",
      description: "Text editors and graphics software use stacks for undo/redo functionality.",
      icon: Undo,
      color: "purple",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Text editors (VSCode, Word)", "Photo editing (Photoshop)", "Drawing applications", "Any software with history"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-purple-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`class TextEditor {\n  constructor() {\n    this.undoStack = [];\n    this.redoStack = [];\n  }\n  type(text) {\n    this.undoStack.push({ action: 'type', text });\n    this.redoStack = []; // Clear redo on new action\n  }\n  undo() {\n    if (this.undoStack.length > 0) {\n      this.redoStack.push(this.undoStack.pop());\n      // ... reverse action\n    }\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      title: "Browser Back/Forward",
      description: "Web browsers use two stacks to navigate through page history.",
      icon: History,
      color: "emerald",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Chrome, Firefox, Safari", "Back button uses pop", "Forward button uses another stack", "Session history"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-emerald-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`class BrowserHistory {\n  constructor() {\n    this.backStack = [];\n    this.forwardStack = [];\n  }\n  visit(url) {\n    this.backStack.push(url);\n    this.forwardStack = [];\n  }\n  back() {\n    if(this.backStack.length > 1) {\n       this.forwardStack.push(this.backStack.pop());\n       return this.backStack[this.backStack.length - 1];\n    }\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      title: "Expression Evaluation",
      description: "Compilers and calculators use stacks to parse and evaluate expressions.",
      icon: Calculator,
      color: "pink",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-purple-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Calculator apps", "Compilers", "Mathematical software", "Spreadsheet formulas"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-pink-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`// Evaluates "2 3 + 5 *" (postfix)\nfunction evaluatePostfix(expr) {\n  const stack = [];\n  for (let token of expr.split(' ')) {\n    if (!isNaN(token)) {\n      stack.push(Number(token));\n    } else {\n      const b = stack.pop();\n      const a = stack.pop();\n      // operate(a, b, token)\n      if (token === '+') stack.push(a + b);\n      // ... other ops\n    }\n  }\n  return stack.pop(); // Result\n}`} language="javascript" title="Example"/>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Stack Applications" 
        description="Real-World Relevance"
        icon={Code} 
        color="purple" 
        className="mb-10"
      />

      <ConceptGrid items={apps} columns={1} />
    </PerspectiveCard>
  );
}