"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GraphIntro() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🕸️ Introduction to Graphs
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
        A <strong>graph</strong> is a non-linear data structure consisting of vertices (nodes) connected by edges. Graphs are the most versatile data structure, used to model networks, relationships, maps, social connections, and much more!
      </p>

      {/* Graph Visualization */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📊 Graph Structure
        </h3>
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl">
          <div className="relative h-80">
            {/* SVG for edges */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="30%" y1="30%" x2="70%" y2="30%" stroke="#0891b2" strokeWidth="3" />
              <line x1="30%" y1="30%" x2="20%" y2="70%" stroke="#0891b2" strokeWidth="3" />
              <line x1="70%" y1="30%" x2="80%" y2="70%" stroke="#0891b2" strokeWidth="3" />
              <line x1="20%" y1="70%" x2="50%" y2="85%" stroke="#0891b2" strokeWidth="3" />
              <line x1="80%" y1="70%" x2="50%" y2="85%" stroke="#0891b2" strokeWidth="3" />
              <line x1="70%" y1="30%" x2="20%" y2="70%" stroke="#0891b2" strokeWidth="3" strokeDasharray="5,5" />
            </svg>

            {/* Nodes */}
            {[
              { id: "A", x: 30, y: 30 },
              { id: "B", x: 70, y: 30 },
              { id: "C", x: 20, y: 70 },
              { id: "D", x: 80, y: 70 },
              { id: "E", x: 50, y: 85 },
            ].map((node) => (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.2 }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg cursor-pointer border-4 border-white dark:border-slate-800"
              >
                {node.id}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Terminology */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📖 Key Terminology
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              term: "Vertex (Node)",
              definition: "A fundamental unit representing an entity",
              example: "Cities in a map, people in social network",
            },
            {
              term: "Edge",
              definition: "Connection between two vertices",
              example: "Roads between cities, friendships between people",
            },
            {
              term: "Directed Graph",
              definition: "Edges have direction (one-way)",
              example: "Twitter follows (A follows B ≠ B follows A)",
            },
            {
              term: "Undirected Graph",
              definition: "Edges have no direction (two-way)",
              example: "Facebook friends (mutual connection)",
            },
            {
              term: "Weighted Graph",
              definition: "Edges have weights/costs",
              example: "Distance between cities, time to travel",
            },
            {
              term: "Degree",
              definition: "Number of edges connected to a vertex",
              example: "Node A has degree 2 if connected to 2 nodes",
            },
            {
              term: "Path",
              definition: "Sequence of vertices connected by edges",
              example: "A → B → C is a path from A to C",
            },
            {
              term: "Cycle",
              definition: "Path that starts and ends at same vertex",
              example: "A → B → C → A forms a cycle",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all"
            >
              <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mb-2">
                {item.term}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm">
                {item.definition}
              </p>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 italic">
                💡 {item.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Types of Graphs */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌐 Types of Graphs
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Undirected Graph",
              icon: "↔️",
              desc: "Edges have no direction (bidirectional)",
              use: "Social networks, road networks",
            },
            {
              type: "Directed Graph (Digraph)",
              icon: "→",
              desc: "Edges have specific direction",
              use: "Web pages, dependency graphs",
            },
            {
              type: "Weighted Graph",
              icon: "⚖️",
              desc: "Edges have weights/costs",
              use: "Maps with distances, network flow",
            },
            {
              type: "Cyclic Graph",
              icon: "🔄",
              desc: "Contains at least one cycle",
              use: "General purpose graphs",
            },
            {
              type: "Acyclic Graph",
              icon: "➡️",
              desc: "No cycles present (DAG if directed)",
              use: "Task scheduling, course prerequisites",
            },
            {
              type: "Connected Graph",
              icon: "🔗",
              desc: "Path exists between every pair of vertices",
              use: "Complete networks",
            },
          ].map((graph, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{graph.icon}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {graph.type}
                </h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm">
                {graph.desc}
              </p>
              <div className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold">
                💼 Use: {graph.use}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real World Applications */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌍 Real-World Applications
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              app: "Social Networks",
              icon: "👥",
              examples: ["Facebook friends", "Twitter followers", "LinkedIn connections"],
            },
            {
              app: "Maps & Navigation",
              icon: "🗺️",
              examples: ["Google Maps", "GPS routing", "Flight connections"],
            },
            {
              app: "Web & Internet",
              icon: "🌐",
              examples: ["Web crawling", "PageRank", "Hyperlinks"],
            },
            {
              app: "Computer Networks",
              icon: "💻",
              examples: ["Internet topology", "Router networks", "Network flow"],
            },
            {
              app: "Recommendation Systems",
              icon: "🎯",
              examples: ["Netflix recommendations", "Product suggestions", "Friend suggestions"],
            },
            {
              app: "Biology & Chemistry",
              icon: "🧬",
              examples: ["Protein structures", "Neural networks", "Molecular graphs"],
            },
          ].map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{app.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {app.app}
              </h4>
              <div className="space-y-1">
                {app.examples.map((example, exIdx) => (
                  <div key={exIdx} className="text-sm text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                    <span>•</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
