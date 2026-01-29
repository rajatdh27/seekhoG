"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  GitCommit, 
  Play, 
  RotateCcw, 
  Layers, 
  ArrowRight 
} from "lucide-react";

export default function DFSSection() {
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

  const animateDFS = async () => {
    setIsAnimating(true);
    setVisitedNodes([]);
    setCurrentNode(null);

    const dfsOrder = [0, 1, 3, 4, 2, 5]; // A -> B -> D -> E -> C -> F

    for (let i = 0; i < dfsOrder.length; i++) {
      setCurrentNode(dfsOrder[i]);
      await new Promise(r => setTimeout(r, 800));
      setVisitedNodes(prev => [...prev, dfsOrder[i]]);
      setCurrentNode(null);
      await new Promise(r => setTimeout(r, 200));
    }
    setIsAnimating(false);
  };

  const dfsCode = {
    javascript: `// Recursive DFS
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
    
    console.log(node); // Process node
    visited.add(node);
    
    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
}

// Iterative DFS (Stack)
function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();
    
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            // Add neighbors to stack
            for (let neighbor of graph[node]) {
                stack.push(neighbor);
            }
        }
    }
}`,
    python: `# Recursive DFS
def dfs(graph, node, visited=set()):
    if node in visited: return
    
    print(node) # Process node
    visited.add(node)
    
    for neighbor in graph[node]:
        dfs(graph, neighbor, visited)

# Iterative DFS (Stack)
def dfs_iterative(graph, start):
    stack = [start]
    visited = set()
    
    while stack:
        node = stack.pop()
        if node not in visited:
            print(node)
            visited.add(node)
            # Add neighbors to stack
            for neighbor in graph[node]:
                stack.append(neighbor)`,
    java: `// Recursive DFS
void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited) {
    if (visited.contains(node)) return;
    
    System.out.println(node); // Process
    visited.add(node);
    
    for (int neighbor : graph.get(node)) {
        dfs(graph, neighbor, visited);
    }
}

// Iterative DFS (Stack)
void dfsIterative(Map<Integer, List<Integer>> graph, int start) {
    Stack<Integer> stack = new Stack<>();
    Set<Integer> visited = new HashSet<>();
    
    stack.push(start);
    while (!stack.isEmpty()) {
        int node = stack.pop();
        if (!visited.contains(node)) {
            System.out.println(node);
            visited.add(node);
            for (int neighbor : graph.get(node)) {
                stack.push(neighbor);
            }
        }
    }
}`,
    cpp: `// Recursive DFS
void dfs(vector<vector<int>>& graph, int node, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " "; // Process
    
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Iterative DFS (Stack)
void dfsIterative(vector<vector<int>>& graph, int start) {
    stack<int> s;
    vector<bool> visited(graph.size(), false);
    
    s.push(start);
    while (!s.empty()) {
        int node = s.top();
        s.pop();
        
        if (!visited[node]) {
            cout << node << " ";
            visited[node] = true;
            for (int neighbor : graph[node]) {
                s.push(neighbor);
            }
        }
    }
}`,
    go: `// Recursive DFS
func dfs(graph map[int][]int, node int, visited map[int]bool) {
    if visited[node] { return }
    
    fmt.Println(node) // Process
    visited[node] = true
    
    for _, neighbor := range graph[node] {
        dfs(graph, neighbor, visited)
    }
}

// Iterative DFS (Stack)
func dfsIterative(graph map[int][]int, start int) {
    stack := []int{start}
    visited := make(map[int]bool)
    
    for len(stack) > 0 {
        // Pop
        index := len(stack) - 1
        node := stack[index]
        stack = stack[:index]
        
        if !visited[node] {
            fmt.Println(node)
            visited[node] = true
            // Push neighbors
            for _, neighbor := range graph[node] {
                stack = append(stack, neighbor)
            }
        }
    }
}`
  };

  return (
    <PerspectiveCard color="purple">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
          <GitCommit size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Depth First Search</h2>
          <p className="text-slate-400 font-medium">Go deep before going wide.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Concept Card */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Layers size={24} className="text-purple-400" /> The Strategy
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            DFS explores as far as possible along each branch before backtracking. It behaves like exploring a maze—follow a path until you hit a dead end, then go back to the last junction.
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex justify-between">
              <span>Data Structure:</span>
              <span className="text-purple-400 font-bold">Stack (LIFO)</span>
            </div>
            <div className="flex justify-between">
              <span>Time Complexity:</span>
              <span className="text-emerald-400 font-bold">O(V + E)</span>
            </div>
            <div className="flex justify-between">
              <span>Space Complexity:</span>
              <span className="text-emerald-400 font-bold">O(V)</span>
            </div>
          </div>
        </div>

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
                    ${isCurrent ? "bg-purple-500 border-white text-white scale-125 z-10" : 
                      isVisited ? "bg-purple-900/50 border-purple-500 text-purple-200" : 
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
            onClick={animateDFS}
            disabled={isAnimating}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {isAnimating ? <RotateCcw size={16} className="animate-spin" /> : <Play size={16} />}
            {isAnimating ? "Traversing..." : "Start DFS"}
          </button>
          
          {visitedNodes.length > 0 && (
            <div className="mt-4 text-xs font-mono text-purple-300">
              Order: {visitedNodes.map(id => nodes[id].label).join(" → ")}
            </div>
          )}
        </div>
      </div>

      <CodeImplementation 
        languages={dfsCode}
        color="purple"
        initialLanguage={currentLanguage}
      />
    </PerspectiveCard>
  );
}