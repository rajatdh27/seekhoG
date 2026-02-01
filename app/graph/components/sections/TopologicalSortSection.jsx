"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  ListOrdered, 
  GitCommit, 
  Workflow, 
  CheckCircle2, 
  AlertTriangle
} from "lucide-react";

export default function TopologicalSortSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const dfsSortCode = {
    javascript: `// DFS Topological Sort
function topologicalSortDFS(graph, V) {
    const stack = [];
    const visited = new Set();

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) dfs(neighbor);
        }
        stack.push(node);
    }

    for (let i = 0; i < V; i++) {
        if (!visited.has(i)) dfs(i);
    }
    return stack.reverse();
}`,
    python: `# DFS Topological Sort
def topological_sort_dfs(graph, V):
    visited = set()
    stack = []

    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(node)

    for i in range(V):
        if i not in visited:
            dfs(i)
            
    return stack[::-1]`,
    java: `// DFS Topological Sort
public List<Integer> topologicalSortDFS(List<List<Integer>> graph, int V) {
    boolean[] visited = new boolean[V];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < V; i++) {
        if (!visited[i]) dfs(graph, i, visited, stack);
    }
    
    List<Integer> result = new ArrayList<>();
    while (!stack.isEmpty()) result.add(stack.pop());
    return result;
}

void dfs(List<List<Integer>> graph, int u, boolean[] visited, Stack<Integer> stack) {
    visited[u] = true;
    for (int v : graph.get(u)) {
        if (!visited[v]) dfs(graph, v, visited, stack);
    }
    stack.push(u);
}`,
    cpp: `// DFS Topological Sort
void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited, stack<int>& st) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) dfs(v, adj, visited, st);
    }
    st.push(u);
}

vector<int> topologicalSortDFS(int V, vector<vector<int>>& adj) {
    stack<int> st;
    vector<bool> visited(V, false);
    
    for (int i = 0; i < V; i++) {
        if (!visited[i]) dfs(i, adj, visited, st);
    }
    
    vector<int> result;
    while (!st.empty()) {
        result.push_back(st.top());
        st.pop();
    }
    return result;
}`,
    go: `// DFS Topological Sort
func topologicalSortDFS(V int, graph map[int][]int) []int {
    visited := make(map[int]bool)
    stack := []int{}
    
    var dfs func(int)
    dfs = func(node int) {
        visited[node] = true
        for _, neighbor := range graph[node] {
            if !visited[neighbor] {
                dfs(neighbor)
            }
        }
        stack = append(stack, node)
    }
    
    for i := 0; i < V; i++ {
        if !visited[i] {
            dfs(i)
        }
    }
    
    // Reverse
    for i, j := 0, len(stack)-1; i < j; i, j = i+1, j-1 {
        stack[i], stack[j] = stack[j], stack[i]
    }
    return stack
}`
  };

  const kahnCode = {
    javascript: `// Kahn's Algorithm (BFS)
function kahnSort(graph, V) {
    const inDegree = new Array(V).fill(0);
    for (let u = 0; u < V; u++) {
        for (let v of graph[u] || []) inDegree[v]++;
    }

    const queue = [];
    for (let i = 0; i < V; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const result = [];
    while (queue.length > 0) {
        const u = queue.shift();
        result.push(u);

        for (let v of graph[u] || []) {
            inDegree[v]--;
            if (inDegree[v] === 0) queue.push(v);
        }
    }
    
    return result.length === V ? result : []; // Cycle check
}`,
    python: `# Kahn's Algorithm (BFS)
from collections import deque

def kahn_sort(graph, V):
    in_degree = [0] * V
    for u in range(V):
        for v in graph[u]:
            in_degree[v] += 1
            
    queue = deque([i for i in range(V) if in_degree[i] == 0])
    result = []
    
    while queue:
        u = queue.popleft()
        result.append(u)
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return result if len(result) == V else []`,
    java: `// Kahn's Algorithm (BFS)
public int[] kahnSort(List<List<Integer>> graph, int V) {
    int[] inDegree = new int[V];
    for (List<Integer> adj : graph) {
        for (int v : adj) inDegree[v]++;
    }
    
    Queue<Integer> q = new LinkedList<>();
    for (int i = 0; i < V; i++) {
        if (inDegree[i] == 0) q.offer(i);
    }
    
    int[] result = new int[V];
    int idx = 0;
    while (!q.isEmpty()) {
        int u = q.poll();
        result[idx++] = u;
        
        for (int v : graph.get(u)) {
            inDegree[v]--;
            if (inDegree[v] == 0) q.offer(v);
        }
    }
    return idx == V ? result : new int[0];
}`,
    cpp: `// Kahn's Algorithm (BFS)
vector<int> kahnSort(int V, vector<vector<int>>& adj) {
    vector<int> inDegree(V, 0);
    for (int u = 0; u < V; u++) {
        for (int v : adj[u]) inDegree[v]++;
    }
    
    queue<int> q;
    for (int i = 0; i < V; i++) {
        if (inDegree[i] == 0) q.push(i);
    }
    
    vector<int> result;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        result.push_back(u);
        
        for (int v : adj[u]) {
            inDegree[v]--;
            if (inDegree[v] == 0) q.push(v);
        }
    }
    return result.size() == V ? result : vector<int>();
}`,
    go: `// Kahn's Algorithm (BFS)
func kahnSort(V int, graph map[int][]int) []int {
    inDegree := make([]int, V)
    for u := 0; u < V; u++ {
        for _, v := range graph[u] {
            inDegree[v]++
        }
    }
    
    queue := []int{}
    for i := 0; i < V; i++ {
        if inDegree[i] == 0 {
            queue = append(queue, i)
        }
    }
    
    result := []int{}
    for len(queue) > 0 {
        u := queue[0]; queue = queue[1:]
        result = append(result, u)
        
        for _, v := range graph[u] {
            inDegree[v]--
            if inDegree[v] == 0 {
                queue = append(queue, v)
            }
        }
    }
    
    if len(result) != V { return []int{} }
    return result
}`
  };

  const topoAlgorithms = [
    {
      title: "DFS Approach",
      description: "Add node to stack after visiting all neighbors. Reverse stack for result.",
      icon: GitCommit,
      color: "violet",
      footer: (
        <div className="space-y-6">
          <div className="space-y-2 text-xs font-bold">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> Simple recursion
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> Time: O(V + E)
            </div>
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle size={14} /> Fails to detect cycles easily
            </div>
          </div>
          <CodeImplementation 
            languages={dfsSortCode}
            color="violet"
            initialLanguage={currentLanguage}
          />
        </div>
      )
    },
    {
      title: "Kahn's Algorithm",
      description: "Repeatedly remove nodes with in-degree 0. If nodes remain, graph has a cycle.",
      icon: Workflow,
      color: "purple",
      footer: (
        <div className="space-y-6">
          <div className="space-y-2 text-xs font-bold">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> Detects Cycles
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> BFS-based (Queue)
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> Time: O(V + E)
            </div>
          </div>
          <CodeImplementation 
            languages={kahnCode}
            color="purple"
            initialLanguage={currentLanguage}
          />
        </div>
      )
    }
  ];

  return (
    <PerspectiveCard color="violet">
      <SectionHeader 
        title="Topological Sort" 
        description="Linear ordering of dependencies."
        icon={ListOrdered} 
        color="violet" 
      />

      <ConceptGrid items={topoAlgorithms} columns={2} className="mb-12" />
    </PerspectiveCard>
  );
}