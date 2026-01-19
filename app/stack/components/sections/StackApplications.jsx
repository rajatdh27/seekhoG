"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  Layout, 
  RefreshCw, 
  History, 
  Calculator, 
  Code, 
  Map, 
  Undo, 
  Server, 
  MessageCircleQuestion 
} from "lucide-react";

const applications = [
  {
    icon: <Undo size={28} className="text-purple-400" />,
    title: "Undo/Redo Functionality",
    description: "Most applications implement undo/redo using two stacks. One for actions performed, and one for actions undone.",
    keywords: ["history", "actions", "editor"],
  },
  {
    icon: <Calculator size={28} className="text-pink-400" />,
    title: "Expression Evaluation/Parsing",
    description: "Compilers use stacks to evaluate arithmetic expressions, convert infix to postfix/prefix, and manage operator precedence.",
    keywords: ["compiler", "arithmetic", "precedence"],
  },
  {
    icon: <Code size={28} className="text-blue-400" />,
    title: "Function Call Management (Call Stack)",
    description: "The operating system uses a call stack to manage function calls. When a function is called, its state is pushed; when it returns, it's popped.",
    keywords: ["recursion", "OS", "program execution"],
  },
  {
    icon: <History size={28} className="text-emerald-400" />,
    title: "Browser History",
    description: "The 'back' and 'forward' buttons in web browsers typically use two stacks to keep track of visited pages.",
    keywords: ["web", "navigation", "browsing"],
  },
  {
    icon: <Map size={28} className="text-orange-400" />,
    title: "Backtracking Algorithms (DFS)",
    description: "Depth-First Search (DFS) on graphs and trees often uses an explicit stack (or implicitly the call stack for recursion) to manage paths and visited nodes.",
    keywords: ["graph", "tree", "search", "maze"],
  },
  {
    icon: <Server size={28} className="text-red-400" />,
    title: "Memory Management",
    description: "The 'stack' segment in memory stores local variables and function call frames. It's automatically managed in a LIFO manner by the CPU.",
    keywords: ["RAM", "variables", "CPU"],
  },
  {
    icon: <MessageCircleQuestion size={28} className="text-yellow-400" />,
    title: "Validating Syntax",
    description: "Used to check for balanced parentheses, curly braces, and square brackets in programming languages or markup.",
    keywords: ["syntax", "validation", "compiler"],
  },
  {
    icon: <RefreshCw size={28} className="text-cyan-400" />,
    title: "Reversing Data",
    description: "Stacks are a natural choice for reversing data structures like strings or lists, as elements are retrieved in reverse order of insertion.",
    keywords: ["reverse", "string", "list"],
  },
];

export default function StackApplications() {
  return (
    <PerspectiveCard color="purple">
       <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-3">Real-World Relevance</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Stack Applications</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-slate-900/70 border border-white/5 rounded-2xl flex flex-col items-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 mb-4 p-3 bg-slate-800 rounded-full group-hover:scale-110 transition-transform border border-white/10">
              {app.icon}
            </div>
            <h4 className="relative z-10 text-xl font-black text-white mb-2">{app.title}</h4>
            <p className="relative z-10 text-sm text-slate-400 leading-relaxed mb-4">{app.description}</p>
            <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-auto">
              {app.keywords.map((keyword, kIndex) => (
                <span key={kIndex} className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs font-medium text-slate-300 group-hover:border-purple-400 transition-colors">
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PerspectiveCard>
  );
}