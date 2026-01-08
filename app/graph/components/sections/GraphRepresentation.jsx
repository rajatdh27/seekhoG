"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GraphRepresentation() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const languages = {
    javascript: `// Adjacency List
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList.get(v1).push(v2);
        this.adjacencyList.get(v2).push(v1); // For undirected
    }
}

// Adjacency Matrix
const adjacencyMatrix = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];`,
    python: `# Adjacency List
class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []

    def add_edge(self, v1, v2):
        self.adjacency_list[v1].append(v2)
        self.adjacency_list[v2].append(v1)  # For undirected

# Adjacency Matrix
adjacency_matrix = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]`,
    java: `// Adjacency List
import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> adjacencyList;

    public Graph() {
        adjacencyList = new HashMap<>();
    }

    public void addVertex(int vertex) {
        adjacencyList.putIfAbsent(vertex, new ArrayList<>());
    }

    public void addEdge(int v1, int v2) {
        adjacencyList.get(v1).add(v2);
        adjacencyList.get(v2).add(v1); // For undirected
    }
}

// Adjacency Matrix
int[][] adjacencyMatrix = {
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 1},
    {0, 1, 1, 0}
};`,
    cpp: `// Adjacency List
#include <vector>
#include <unordered_map>
using namespace std;

class Graph {
    unordered_map<int, vector<int>> adjacencyList;

public:
    void addVertex(int vertex) {
        if (adjacencyList.find(vertex) == adjacencyList.end()) {
            adjacencyList[vertex] = vector<int>();
        }
    }

    void addEdge(int v1, int v2) {
        adjacencyList[v1].push_back(v2);
        adjacencyList[v2].push_back(v1); // For undirected
    }
};

// Adjacency Matrix
vector<vector<int>> adjacencyMatrix = {
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 1},
    {0, 1, 1, 0}
};`,
    c: `// Adjacency Matrix (simpler in C)
#define V 4

int adjacencyMatrix[V][V] = {
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 1},
    {0, 1, 1, 0}
};

// Adjacency List using array of linked lists
struct Node {
    int vertex;
    struct Node* next;
};

struct Graph {
    int numVertices;
    struct Node** adjLists;
};`,
    go: `// Adjacency List
package main

type Graph struct {
    adjacencyList map[int][]int
}

func NewGraph() *Graph {
    return &Graph{
        adjacencyList: make(map[int][]int),
    }
}

func (g *Graph) AddVertex(vertex int) {
    if _, exists := g.adjacencyList[vertex]; !exists {
        g.adjacencyList[vertex] = []int{}
    }
}

func (g *Graph) AddEdge(v1, v2 int) {
    g.adjacencyList[v1] = append(g.adjacencyList[v1], v2)
    g.adjacencyList[v2] = append(g.adjacencyList[v2], v1)
}

// Adjacency Matrix
adjacencyMatrix := [][]int{
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 1},
    {0, 1, 1, 0},
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📊 Graph Representation
      </h2>

      {/* Two Main Methods */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Adjacency Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800"
          >
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              📋 Adjacency Matrix
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              2D array where cell [i][j] = 1 if edge exists between vertex i and j
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg mb-4">
              <table className="w-full text-center text-sm">
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    <th className="p-2 font-bold">A</th>
                    <th className="p-2 font-bold">B</th>
                    <th className="p-2 font-bold">C</th>
                    <th className="p-2 font-bold">D</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A", 0, 1, 1, 0],
                    ["B", 1, 0, 1, 1],
                    ["C", 1, 1, 0, 1],
                    ["D", 0, 1, 1, 0],
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-2 font-bold">{row[0]}</td>
                      {row.slice(1).map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`p-2 ${
                            cell === 1
                              ? "bg-purple-200 dark:bg-purple-700 font-bold"
                              : "bg-slate-100 dark:bg-slate-700"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>O(1) edge lookup</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Simple implementation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>O(V²) space</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Sparse graphs waste space</span>
              </div>
            </div>
          </motion.div>

          {/* Adjacency List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800"
          >
            <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">
              🔗 Adjacency List
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Array/Map of lists where each vertex stores list of adjacent vertices
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg mb-4 font-mono text-sm space-y-2">
              <div>A → [B, C]</div>
              <div>B → [A, C, D]</div>
              <div>C → [A, B, D]</div>
              <div>D → [B, C]</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>O(V + E) space</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Efficient for sparse graphs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Easy to find neighbors</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>O(V) edge lookup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Code Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentLanguage === lang
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{languages[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cyan-100 dark:bg-cyan-900/30">
                <th className="border border-cyan-300 dark:border-cyan-700 p-4 text-left">Operation</th>
                <th className="border border-cyan-300 dark:border-cyan-700 p-4 text-center">Adjacency Matrix</th>
                <th className="border border-cyan-300 dark:border-cyan-700 p-4 text-center">Adjacency List</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: "Space", matrix: "O(V²)", list: "O(V + E)" },
                { op: "Add Vertex", matrix: "O(V²)", list: "O(1)" },
                { op: "Add Edge", matrix: "O(1)", list: "O(1)" },
                { op: "Remove Edge", matrix: "O(1)", list: "O(E)" },
                { op: "Check Edge", matrix: "O(1)", list: "O(V)" },
                { op: "Find Neighbors", matrix: "O(V)", list: "O(1)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-cyan-50 dark:hover:bg-cyan-900/10">
                  <td className="border border-cyan-300 dark:border-cyan-700 p-4 font-semibold">
                    {row.op}
                  </td>
                  <td className="border border-cyan-300 dark:border-cyan-700 p-4 text-center font-mono text-sm">
                    {row.matrix}
                  </td>
                  <td className="border border-cyan-300 dark:border-cyan-700 p-4 text-center font-mono text-sm">
                    {row.list}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
