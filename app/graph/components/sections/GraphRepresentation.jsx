"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Share2, 
  Grid, 
  List, 
  CheckCircle2, 
  XCircle,
  ArrowRightLeft
} from "lucide-react";

export default function GraphRepresentation() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const adjacencyListCode = {
    javascript: `// Adjacency List Representation
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        if (!this.adjList.has(v)) this.adjList.set(v, []);
    }

    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1); // Undirected
    }
}
// Space: O(V + E)`,
    python: `# Adjacency List Representation
class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, v):
        if v not in self.adj_list:
            self.adj_list[v] = []

    def add_edge(self, v1, v2):
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1) # Undirected
# Space: O(V + E)`,
    java: `// Adjacency List Representation
import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> adjList;

    public Graph() {
        adjList = new HashMap<>();
    }

    public void addVertex(int v) {
        adjList.putIfAbsent(v, new ArrayList<>());
    }

    public void addEdge(int v1, int v2) {
        adjList.get(v1).add(v2);
        adjList.get(v2).add(v1); // Undirected
    }
}`,
    cpp: `// Adjacency List Representation
#include <vector>
#include <unordered_map>
using namespace std;

class Graph {
    unordered_map<int, vector<int>> adjList;

public:
    void addVertex(int v) {
        if (adjList.find(v) == adjList.end()) {
            adjList[v] = vector<int>();
        }
    }

    void addEdge(int v1, int v2) {
        adjList[v1].push_back(v2);
        adjList[v2].push_back(v1); // Undirected
    }
};`,
    go: `// Adjacency List Representation
package main

type Graph struct {
    adjList map[int][]int
}

func NewGraph() *Graph {
    return &Graph{adjList: make(map[int][]int)}
}

func (g *Graph) AddVertex(v int) {
    if _, exists := g.adjList[v]; !exists {
        g.adjList[v] = []int{}
    }
}

func (g *Graph) AddEdge(v1, v2 int) {
    g.adjList[v1] = append(g.adjList[v1], v2)
    g.adjList[v2] = append(g.adjList[v2], v1) // Undirected
}`
  };

  const adjacencyMatrixCode = {
    javascript: `// Adjacency Matrix
// 1 = edge exists, 0 = no edge
const matrix = [
  [0, 1, 1, 0], // Node 0 -> 1, 2
  [1, 0, 1, 1], // Node 1 -> 0, 2, 3
  [1, 1, 0, 1], // Node 2 -> 0, 1, 3
  [0, 1, 1, 0]  // Node 3 -> 1, 2
];
// Space: O(V²)`,
    python: `# Adjacency Matrix
# 1 = edge exists, 0 = no edge
matrix = [
    [0, 1, 1, 0], # Node 0 -> 1, 2
    [1, 0, 1, 1], # Node 1 -> 0, 2, 3
    [1, 1, 0, 1], # Node 2 -> 0, 1, 3
    [0, 1, 1, 0]  # Node 3 -> 1, 2
]
# Space: O(V²)`,
    java: `// Adjacency Matrix
int[][] matrix = {
    {0, 1, 1, 0}, // Node 0
    {1, 0, 1, 1}, // Node 1
    {1, 1, 0, 1}, // Node 2
    {0, 1, 1, 0}  // Node 3
};`,
    cpp: `// Adjacency Matrix
vector<vector<int>> matrix = {
    {0, 1, 1, 0}, // Node 0
    {1, 0, 1, 1}, // Node 1
    {1, 1, 0, 1}, // Node 2
    {0, 1, 1, 0}  // Node 3
};`,
    go: `// Adjacency Matrix
matrix := [][]int{
    {0, 1, 1, 0}, // Node 0
    {1, 0, 1, 1}, // Node 1
    {1, 1, 0, 1}, // Node 2
    {0, 1, 1, 0}, // Node 3
}`
  };

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Graph Representation" 
        description="How to store graphs in memory."
        icon={Share2} 
        color="cyan" 
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Adjacency List */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <List size={24} className="text-cyan-400" />
            <h3 className="text-2xl font-black text-white">1. Adjacency List</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              Each vertex stores a list of connected neighbors. Ideally implemented with a Map or Array of Lists.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Efficient Space O(V+E)
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Good for Sparse Graphs
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <XCircle size={14} /> Slow Edge Lookup O(V)
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={adjacencyListCode}
            color="cyan"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Adjacency Matrix */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Grid size={24} className="text-blue-400" />
            <h3 className="text-2xl font-black text-white">2. Adjacency Matrix</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              A 2D array where <code>matrix[i][j]</code> represents an edge from i to j. 1 means connected, 0 means not.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Instant Edge Lookup O(1)
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Good for Dense Graphs
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <XCircle size={14} /> High Space Cost O(V²)
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={adjacencyMatrixCode}
            color="blue"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <ArrowRightLeft size={24} className="text-cyan-400" />
          <h3 className="text-lg font-black text-white">Quick Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Operation</th>
                <th className="px-6 py-4">Adjacency List</th>
                <th className="px-6 py-4">Adjacency Matrix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { op: "Space", list: "O(V + E)", matrix: "O(V²)" },
                { op: "Add Vertex", list: "O(1)", matrix: "O(V²)" },
                { op: "Add Edge", list: "O(1)", matrix: "O(1)" },
                { op: "Check Edge (u, v)", list: "O(degree of u)", matrix: "O(1)" },
                { op: "Iterate Neighbors", list: "O(degree of u)", matrix: "O(V)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.op}</td>
                  <td className="px-6 py-4 text-cyan-300">{row.list}</td>
                  <td className="px-6 py-4 text-blue-300">{row.matrix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}