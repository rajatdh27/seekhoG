"use client";

import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Server, Cpu, Globe, MessageCircleQuestion, RefreshCw, Code } from "lucide-react";

const applications = [
  {
    icon: <Cpu size={28} />,
    title: "Operating Systems",
    description: "Queues are fundamental in managing processes, I/O devices, and other system resources.",
    usedIn: ["CPU Scheduling (Round-Robin)", "Disk Scheduling (FCFS)", "Print Spooling", "Managing system calls"],
    code: `// Pseudocode for a simple scheduler queue
function scheduler(processes) {
  const readyQueue = new Queue();
  for (let p of processes) {
    readyQueue.enqueue(p);
  }

  while(!readyQueue.isEmpty()) {
    const currentProcess = readyQueue.dequeue();
    // execute(currentProcess);
  }
}`,
    color: "green"
  },
  {
    icon: <Server size={28} />,
    title: "Web Servers & Networking",
    description: "Queues handle asynchronous tasks and manage the flow of data in networked systems.",
    usedIn: ["Handling HTTP requests", "Load balancing", "Packet queuing in routers", "Task queues for background jobs"],
    code: `// Pseudocode for a web server request handler
function handleRequest(request) {
  requestQueue.enqueue(request);
  
  // A worker process will later dequeue and process it
}

function worker() {
  if (!requestQueue.isEmpty()) {
    const req = requestQueue.dequeue();
    // process(req)
  }
}`,
    color: "emerald"
  },
  {
    icon: <Code size={28} />,
    title: "Algorithms",
    description: "Queues are a core component of several important graph and tree traversal algorithms.",
    usedIn: ["Breadth-First Search (BFS)", "Level-Order Traversal of a tree", "Finding shortest path in unweighted graphs", "Topological Sorting (Kahn's algorithm)"],
    code: `function bfs(graph, startNode) {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(startNode);
  visited.add(startNode);

  while(!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    // visit(currentNode)
    for (let neighbor of graph.getNeighbors(currentNode)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}`,
    color: "teal"
  },
  {
    icon: <Globe size={28} />,
    title: "Real-World Systems",
    description: "Many real-world systems model lines or waiting lists, for which queues are a perfect fit.",
    usedIn: ["Call center phone systems", "Messaging services (e.g., RabbitMQ, Kafka)", "Order processing in e-commerce", "Ticket booking systems"],
    code: `// Pseudocode for a message queue
class MessageBroker {
  constructor() {
    this.topics = new Map();
  }

  publish(topic, message) {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, new Queue());
    }
    this.topics.get(topic).enqueue(message);
  }

  subscribe(topic) {
    // Consumer would dequeue from this topic's queue
    return this.topics.get(topic)?.dequeue();
  }
}`,
    color: "cyan"
  },
];

export default function QueueApplications() {
  return (
    <PerspectiveCard color="green">
      <div className="mb-10 text-center">
        <h3 className="text-sm font-black text-green-400 uppercase tracking-widest mb-3">Real-World Relevance</h3>
        <p className="text-3xl md:text-4xl font-black text-white">Queue Applications</p>
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
                    <h5 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Used In:</h5>
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