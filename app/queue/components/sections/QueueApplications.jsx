"use client";

import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeBlock from "@/app/components/common/CodeBlock";
import { Server, Cpu, Globe, MessageCircleQuestion, RefreshCw, Code } from "lucide-react";

export default function QueueApplications() {
  const apps = [
    {
      icon: Cpu,
      title: "Operating Systems",
      description: "Queues are fundamental in managing processes, I/O devices, and other system resources.",
      color: "green",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["CPU Scheduling (Round-Robin)", "Disk Scheduling (FCFS)", "Print Spooling", "Managing system calls"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-green-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`// Pseudocode for a simple scheduler queue\nfunction scheduler(processes) {\n  const readyQueue = new Queue();\n  for (let p of processes) {\n    readyQueue.enqueue(p);\n  }\n\n  while(!readyQueue.isEmpty()) {\n    const currentProcess = readyQueue.dequeue();\n    // execute(currentProcess);\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      icon: Server,
      title: "Web Servers & Networking",
      description: "Queues handle asynchronous tasks and manage the flow of data in networked systems.",
      color: "emerald",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Handling HTTP requests", "Load balancing", "Packet queuing in routers", "Task queues for background jobs"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-emerald-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`// Pseudocode for a web server request handler\nfunction handleRequest(request) {\n  requestQueue.enqueue(request);\n  \n  // A worker process will later dequeue and process it\n}\n\nfunction worker() {\n  if (!requestQueue.isEmpty()) {\n    const req = requestQueue.dequeue();\n    // process(req)\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      icon: Code,
      title: "Algorithms",
      description: "Queues are a core component of several important graph and tree traversal algorithms.",
      color: "teal",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Breadth-First Search (BFS)", "Level-Order Traversal of a tree", "Finding shortest path in unweighted graphs", "Topological Sorting (Kahn's algorithm)"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-teal-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`function bfs(graph, startNode) {\n  const queue = new Queue();\n  const visited = new Set();\n\n  queue.enqueue(startNode);\n  visited.add(startNode);\n\n  while(!queue.isEmpty()) {\n    const currentNode = queue.dequeue();\n    // visit(currentNode)\n    for (let neighbor of graph.getNeighbors(currentNode)) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.enqueue(neighbor);\n      }\n    }\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Real-World Systems",
      description: "Many real-world systems model lines or waiting lists, for which queues are a perfect fit.",
      color: "cyan",
      footer: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-black text-green-400 uppercase tracking-wider mb-3">Used In:</h5>
            <ul className="space-y-2">
              {["Call center phone systems", "Messaging services (e.g., RabbitMQ, Kafka)", "Order processing in e-commerce", "Ticket booking systems"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300 font-bold"><div className="w-1 h-1 rounded-full bg-cyan-500"/>{item}</li>
              ))}
            </ul>
          </div>
          <CodeBlock code={`// Pseudocode for a message queue\nclass MessageBroker {\n  constructor() {\n    this.topics = new Map();\n  }\n\n  publish(topic, message) {\n    if (!this.topics.has(topic)) {\n      this.topics.set(topic, new Queue());\n    }\n    this.topics.get(topic).enqueue(message);\n  }\n\n  subscribe(topic) {\n    // Consumer would dequeue from this topic's queue\n    return this.topics.get(topic)?.dequeue();\n  }\n}`} language="javascript" title="Example"/>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="green">
      <SectionHeader 
        title="Queue Applications" 
        description="Real-World Relevance"
        icon={Code} 
        color="green" 
        className="mb-10"
      />

      <ConceptGrid items={apps} columns={1} />
    </PerspectiveCard>
  );
}