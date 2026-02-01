"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Workflow, 
  Play, 
  RotateCcw, 
  Layers, 
  ArrowRight 
} from "lucide-react";

export default function BFSSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);

  const nodes = [
    { id: 0, label: "A", x: 50, y: 15 },
    { id: 1, label: "B", x: 25, y: 40 },
    { id: 2, label: "C", x: 75, y: 40 },
    { id: 3, label: "D", x: 12.5, y: 65 },
    { id: 4, label: "E", x: 37.5, y: 65 },
    { id: 5, label: "F", x: 87.5, y: 65 },
  ];

  const animateBFS = async () => {
    setIsAnimating(true);
    setVisitedNodes([]);
    setCurrentNode(null);

    const bfsOrder = [0, 1, 2, 3, 4, 5]; // A -> B -> C -> D -> E -> F (Level Order)

    for (let i = 0; i < bfsOrder.length; i++) {
      setCurrentNode(bfsOrder[i]);
      await new Promise(r => setTimeout(r, 800));
      setVisitedNodes(prev => [...prev, bfsOrder[i]]);
      setCurrentNode(null);
      await new Promise(r => setTimeout(r, 200));
    }
    setIsAnimating(false);
  };

  const bfsCode = {
    javascript: `// BFS
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue
        console.log(node); // Process
        
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor); // Enqueue
            }
        }
    }
}`,
    python: `# BFS
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = set([start])
    
    while queue:
        node = queue.popleft() # Dequeue
        print(node) # Process
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor) # Enqueue`,
    java: `// BFS
void bfs(Map<Integer, List<Integer>> graph, int start) {
    Queue<Integer> queue = new LinkedList<>();
    Set<Integer> visited = new HashSet<>();
    
    queue.offer(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.println(node); // Process
        
        for (int neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.offer(neighbor);
            }
        }
    }
}`,
    cpp: `// BFS
void bfs(vector<vector<int>>& graph, int start) {
    queue<int> q;
    vector<bool> visited(graph.size(), false);
    
    q.push(start);
    visited[start] = true;
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " "; // Process
        
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`,
    go: `// BFS
func bfs(graph map[int][]int, start int) {
    queue := []int{start}
    visited := make(map[int]bool)
    visited[start] = true
    
    for len(queue) > 0 {
        // Dequeue
        node := queue[0]
        queue = queue[1:]
        
        fmt.Println(node) // Process
        
        for _, neighbor := range graph[node] {
            if !visited[neighbor] {
                visited[neighbor] = true
                queue = append(queue, neighbor) // Enqueue
            }
        }
    }
}`
  };

  const strategy = [
    {
      title: "The Strategy",
      description: "Explore neighbors level by level, like ripples in a pond. Visit all immediate neighbors before moving to the next level.",
      icon: Layers,
      color: "cyan",
      footer: (
        <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-slate-300">
          <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col items-center">
            <span className="text-slate-500 uppercase">Queue</span>
            <span className="text-cyan-400 font-bold uppercase">FIFO</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col items-center text-center">
            <span className="text-slate-500 uppercase">Time</span>
            <span className="text-emerald-400 font-bold">O(V+E)</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-white/5 flex flex-col items-center text-center">
            <span className="text-slate-500 uppercase">Space</span>
            <span className="text-emerald-400 font-bold">O(V)</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Breadth First Search" 
        description="Explore level by level."
        icon={Workflow} 
        color="cyan" 
      />

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <ConceptGrid items={strategy} columns={1} variant="horizontal" />

        {/* Animation */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden flex flex-col items-center">
          <div className="relative w-64 h-64 mb-6">
            {/* Edges */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="15%" x2="25%" y2="40%" stroke="#334155" strokeWidth="2" />
              <line x1="50%" y1="15%" x2="75%" y2="40%" stroke="#334155" strokeWidth="2" />
              <line x1="25%" y1="40%" x2="12.5%" y2="65%" stroke="#334155" strokeWidth="2" />
              <line x1="25%" y1="40%" x2="37.5%" y2="65%" stroke="#334155" strokeWidth="2" />
              <line x1="75%" y1="40%" x2="87.5%" y2="65%" stroke="#334155" strokeWidth="2" />
            </svg>
            
            {nodes.map((node, i) => {
              const isVisited = visitedNodes.includes(node.id);
              const isCurrent = currentNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  className={`absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors
                    ${isCurrent ? "bg-cyan-500 border-white text-white scale-125 z-10" : 
                      isVisited ? "bg-cyan-900/50 border-cyan-500 text-cyan-200" : 
                      "bg-slate-800 border-slate-700 text-slate-500"}
                  `}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  animate={{ scale: isCurrent ? 1.2 : 1 }}
                >
                  {node.label}
                </motion.div>
              );
            })}
          </div>
          
          <button
            onClick={animateBFS}
            disabled={isAnimating}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {isAnimating ? <RotateCcw size={16} className="animate-spin" /> : <Play size={16} />}
            {isAnimating ? "Traversing..." : "Start BFS"}
          </button>
          
          {visitedNodes.length > 0 && (
            <div className="mt-4 text-xs font-mono text-cyan-300">
              Order: {visitedNodes.map(id => nodes[id].label).join(" → ")}
            </div>
          )}
        </div>
      </div>

      <CodeImplementation 
        languages={bfsCode}
        color="cyan"
        initialLanguage={currentLanguage}
      />
    </PerspectiveCard>
  );
}