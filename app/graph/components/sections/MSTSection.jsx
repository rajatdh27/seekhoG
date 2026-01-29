"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  TreePine, 
  GitMerge, 
  GitCommit, 
  CheckCircle2, 
  XCircle,
  ArrowRightLeft
} from "lucide-react";

export default function MSTSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const kruskalCode = {
    javascript: `// Kruskal's Algorithm (Union-Find)
class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
    }
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
            return true;
        }
        return false;
    }
}

function kruskal(n, edges) {
    edges.sort((a, b) => a[2] - b[2]); // Sort by weight
    const uf = new UnionFind(n);
    let mstCost = 0, edgesCount = 0;
    
    for (let [u, v, w] of edges) {
        if (uf.union(u, v)) {
            mstCost += w;
            edgesCount++;
            if (edgesCount === n - 1) break;
        }
    }
    return mstCost;
}`,
    python: `# Kruskal's Algorithm
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
        
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX != rootY:
            self.parent[rootX] = rootY
            return True
        return False

def kruskal(n, edges):
    edges.sort(key=lambda x: x[2]) # Sort by weight
    uf = UnionFind(n)
    mst_cost = 0
    count = 0
    
    for u, v, w in edges:
        if uf.union(u, v):
            mst_cost += w
            count += 1
            if count == n - 1: break
            
    return mst_cost`,
    java: `// Kruskal's Algorithm
class UnionFind {
    int[] parent;
    UnionFind(int n) {
        parent = new int[n];
        for(int i=0; i<n; i++) parent[i] = i;
    }
    int find(int x) {
        if(parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    boolean union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if(rootX != rootY) {
            parent[rootX] = rootY;
            return true;
        }
        return false;
    }
}

public int kruskal(int n, int[][] edges) {
    Arrays.sort(edges, (a, b) -> a[2] - b[2]);
    UnionFind uf = new UnionFind(n);
    int cost = 0, count = 0;
    
    for(int[] edge : edges) {
        if(uf.union(edge[0], edge[1])) {
            cost += edge[2];
            if(++count == n - 1) break;
        }
    }
    return cost;
}`,
    cpp: `// Kruskal's Algorithm
struct Edge { int u, v, w; };
bool compare(Edge a, Edge b) { return a.w < b.w; }

struct UnionFind {
    vector<int> parent;
    UnionFind(int n) {
        parent.resize(n);
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        if(parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    bool unite(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if(rootX != rootY) {
            parent[rootX] = rootY;
            return true;
        }
        return false;
    }
};

int kruskal(int n, vector<Edge>& edges) {
    sort(edges.begin(), edges.end(), compare);
    UnionFind uf(n);
    int cost = 0, count = 0;
    
    for(auto& e : edges) {
        if(uf.unite(e.u, e.v)) {
            cost += e.w;
            if(++count == n - 1) break;
        }
    }
    return cost;
}`,
    go: `// Kruskal's Algorithm
type Edge struct { u, v, w int }
type UnionFind struct { parent []int }

func NewUnionFind(n int) *UnionFind {
    p := make([]int, n)
    for i := range p { p[i] = i }
    return &UnionFind{p}
}

func (uf *UnionFind) Find(x int) int {
    if uf.parent[x] != x {
        uf.parent[x] = uf.Find(uf.parent[x])
    }
    return uf.parent[x]
}

func (uf *UnionFind) Union(x, y int) bool {
    rootX, rootY := uf.Find(x), uf.Find(y)
    if rootX != rootY {
        uf.parent[rootX] = rootY
        return true
    }
    return false
}

func kruskal(n int, edges []Edge) int {
    sort.Slice(edges, func(i, j int) bool { return edges[i].w < edges[j].w })
    uf := NewUnionFind(n)
    cost := 0
    count := 0
    
    for _, e := range edges {
        if uf.Union(e.u, e.v) {
            cost += e.w
            count++
            if count == n-1 { break }
        }
    }
    return cost
}`
  };

  const primsCode = {
    javascript: `// Prim's Algorithm
function prims(n, adj) {
    const minHeap = new MinPriorityQueue();
    const visited = new Set();
    let cost = 0;
    
    minHeap.enqueue(0, 0); // start at node 0, cost 0
    
    while (!minHeap.isEmpty() && visited.size < n) {
        const { element: u, priority: w } = minHeap.dequeue();
        
        if (visited.has(u)) continue;
        visited.add(u);
        cost += w;
        
        for (let [v, weight] of adj[u]) {
            if (!visited.has(v)) {
                minHeap.enqueue(v, weight);
            }
        }
    }
    return cost;
}`,
    python: `# Prim's Algorithm
import heapq

def prims(n, adj):
    visited = set()
    min_heap = [(0, 0)] # cost, node
    total_cost = 0
    
    while min_heap and len(visited) < n:
        w, u = heapq.heappop(min_heap)
        
        if u in visited: continue
        visited.add(u)
        total_cost += w
        
        for v, weight in adj[u]:
            if v not in visited:
                heapq.heappush(min_heap, (weight, v))
                
    return total_cost`,
    java: `// Prim's Algorithm
public int prims(int n, List<List<int[]>> adj) {
    boolean[] visited = new boolean[n];
    PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0] - b[0]);
    int cost = 0, count = 0;
    
    pq.offer(new int[]{0, 0}); // cost, node
    
    while (!pq.isEmpty() && count < n) {
        int[] curr = pq.poll();
        int w = curr[0], u = curr[1];
        
        if (visited[u]) continue;
        visited[u] = true;
        cost += w;
        count++;
        
        for (int[] neighbor : adj.get(u)) {
            if (!visited[neighbor[0]]) {
                pq.offer(new int[]{neighbor[1], neighbor[0]});
            }
        }
    }
    return cost;
}`,
    cpp: `// Prim's Algorithm
int prims(int n, vector<vector<pair<int,int>>>& adj) {
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    vector<bool> visited(n, false);
    int cost = 0, count = 0;
    
    pq.push({0, 0}); // cost, node
    
    while (!pq.empty() && count < n) {
        auto [w, u] = pq.top(); pq.pop();
        
        if (visited[u]) continue;
        visited[u] = true;
        cost += w;
        count++;
        
        for (auto& [v, weight] : adj[u]) {
            if (!visited[v]) {
                pq.push({weight, v});
            }
        }
    }
    return cost;
}`,
    go: `// Prim's Algorithm
func prims(n int, adj map[int][]Edge) int {
    visited := make(map[int]bool)
    pq := &MinHeap{} // Assume heap impl
    heap.Push(pq, Item{node: 0, cost: 0})
    totalCost := 0
    
    for pq.Len() > 0 && len(visited) < n {
        item := heap.Pop(pq).(Item)
        u, w := item.node, item.cost
        
        if visited[u] { continue }
        visited[u] = true
        totalCost += w
        
        for _, e := range adj[u] {
            if !visited[e.to] {
                heap.Push(pq, Item{node: e.to, cost: e.weight})
            }
        }
    }
    return totalCost
}`
  };

  return (
    <PerspectiveCard color="emerald">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
          <TreePine size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Minimum Spanning Tree</h2>
          <p className="text-slate-400 font-medium">Connect all nodes with minimal cost.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Kruskal's Card */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GitMerge size={24} className="text-emerald-400" />
            <h3 className="text-2xl font-black text-white">1. Kruskal's Algorithm</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              Greedy approach processing <strong>edges</strong> by weight. Uses Union-Find to detect cycles.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Good for Sparse Graphs
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Easy to implement with Union-Find
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Time: O(E log E)
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={kruskalCode}
            color="emerald"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Prim's Card */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GitCommit size={24} className="text-green-400" />
            <h3 className="text-2xl font-black text-white">2. Prim's Algorithm</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              Greedy approach growing from a <strong>vertex</strong>. Uses Min-Heap to find nearest unvisited node.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Good for Dense Graphs
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Grows single component
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Time: O(E log V)
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={primsCode}
            color="green"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>
    </PerspectiveCard>
  );
}