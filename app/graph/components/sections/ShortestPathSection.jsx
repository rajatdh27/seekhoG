"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Route, 
  Map, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRightLeft
} from "lucide-react";

export default function ShortestPathSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const dijkstraCode = {
    javascript: `// Dijkstra's Algorithm
function dijkstra(graph, start) {
    const distances = {};
    const pq = new MinPriorityQueue();

    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const { element: u, priority: dist } = pq.dequeue();

        if (dist > distances[u]) continue;

        for (let [v, weight] of graph[u]) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                pq.enqueue(v, distances[v]);
            }
        }
    }
    return distances;
}`,
    python: `# Dijkstra's Algorithm
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        d, u = heapq.heappop(pq)

        if d > distances[u]: continue

        for v, weight in graph[u]:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
                heapq.heappush(pq, (distances[v], v))
    
    return distances`,
    java: `// Dijkstra's Algorithm
import java.util.*;

class Dijkstra {
    public Map<Integer, Integer> dijkstra(Map<Integer, List<int[]>> graph, int start) {
        Map<Integer, Integer> distances = new HashMap<>();
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));

        for (int node : graph.keySet()) distances.put(node, Integer.MAX_VALUE);
        distances.put(start, 0);
        pq.offer(new int[]{start, 0});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int u = current[0], dist = current[1];

            if (dist > distances.get(u)) continue;

            for (int[] edge : graph.get(u)) {
                int v = edge[0], weight = edge[1];
                if (distances.get(u) + weight < distances.get(v)) {
                    distances.put(v, distances.get(u) + weight);
                    pq.offer(new int[]{v, distances.get(v)});
                }
            }
        }
        return distances;
    }
}`,
    cpp: `// Dijkstra's Algorithm
#include <queue>
#include <vector>
#include <map>
using namespace std;

map<int, int> dijkstra(map<int, vector<pair<int, int>>>& graph, int start) {
    map<int, int> distances;
    for (auto const& [node, _] : graph) distances[node] = INT_MAX;
    distances[start] = 0;
    
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, start});

    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (d > distances[u]) continue;

        for (auto& edge : graph[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                pq.push({distances[v], v});
            }
        }
    }
    return distances;
}`,
    go: `// Dijkstra's Algorithm
import "container/heap"

func dijkstra(graph map[int][]Edge, start int) map[int]int {
    distances := make(map[int]int)
    for node := range graph { distances[node] = 1e9 }
    distances[start] = 0
    
    pq := &PriorityQueue{}
    heap.Init(pq)
    heap.Push(pq, &Item{value: start, priority: 0})
    
    for pq.Len() > 0 {
        item := heap.Pop(pq).(*Item)
        u := item.value
        d := item.priority
        
        if d > distances[u] { continue }
        
        for _, edge := range graph[u] {
            if distances[u] + edge.weight < distances[edge.to] {
                distances[edge.to] = distances[u] + edge.weight
                heap.Push(pq, &Item{value: edge.to, priority: distances[edge.to]})
            }
        }
    }
    return distances
}`
  };

  const bellmanFordCode = {
    javascript: `// Bellman-Ford Algorithm
function bellmanFord(edges, V, start) {
    const dist = new Array(V).fill(Infinity);
    dist[start] = 0;

    // Relax edges V-1 times
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, w] of edges) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    // Check for negative cycle
    for (let [u, v, w] of edges) {
        if (dist[u] + w < dist[v]) {
            console.log("Negative cycle detected");
            return null;
        }
    }
    return dist;
}`,
    python: `# Bellman-Ford Algorithm
def bellman_ford(edges, V, start):
    dist = [float('inf')] * V
    dist[start] = 0

    # Relax edges V-1 times
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Check for negative cycle
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            print("Negative cycle detected")
            return None
            
    return dist`,
    java: `// Bellman-Ford Algorithm
public int[] bellmanFord(int[][] edges, int V, int start) {
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;

    for (int i = 0; i < V - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    
    // Check negative cycle
    for (int[] edge : edges) {
        if (dist[edge[0]] + edge[2] < dist[edge[1]]) return null;
    }
    return dist;
}`,
    cpp: `// Bellman-Ford Algorithm
vector<int> bellmanFord(vector<vector<int>>& edges, int V, int start) {
    vector<int> dist(V, INT_MAX);
    dist[start] = 0;

    for (int i = 0; i < V - 1; i++) {
        for (auto& edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    return dist;
}`,
    go: `// Bellman-Ford Algorithm
func bellmanFord(edges [][]int, V int, start int) []int {
    dist := make([]int, V)
    for i := range dist { dist[i] = 1e9 }
    dist[start] = 0

    for i := 0; i < V-1; i++ {
        for _, edge := range edges {
            u, v, w := edge[0], edge[1], edge[2]
            if dist[u] + w < dist[v] {
                dist[v] = dist[u] + w
            }
        }
    }
    return dist
}`
  };

  return (
    <PerspectiveCard color="amber">
      <SectionHeader 
        title="Shortest Path" 
        description="Finding the optimal route in weighted graphs."
        icon={Route} 
        color="amber" 
      />

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Dijkstra Card */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Map size={24} className="text-amber-400" />
            <h3 className="text-2xl font-black text-white">1. Dijkstra's Algorithm</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              Greedy approach using a Min-Priority Queue. Best for non-negative weights.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Fast: O((V+E) log V)
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Optimal for maps
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle size={14} /> Fails with negative weights
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={dijkstraCode}
            color="amber"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Bellman-Ford Card */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <ArrowRightLeft size={24} className="text-blue-400" />
            <h3 className="text-2xl font-black text-white">2. Bellman-Ford</h3>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 text-sm mb-4">
              Relax all edges V-1 times. Can handle negative weights and detect negative cycles.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Handles negative weights
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={14} /> Detects negative cycles
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle size={14} /> Slow: O(V × E)
              </div>
            </div>
          </div>
          <CodeImplementation 
            languages={bellmanFordCode}
            color="blue"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>
    </PerspectiveCard>
  );
}