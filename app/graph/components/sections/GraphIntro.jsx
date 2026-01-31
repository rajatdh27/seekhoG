"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  Network, 
  Share2, 
  Globe, 
  Map, 
  Users, 
  Server, 
  Cpu, 
  ArrowRight,
  GitCommit,
  GitMerge
} from "lucide-react";

export default function GraphIntro() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: "A", x: 20, y: 20 },
    { id: "B", x: 80, y: 20 },
    { id: "C", x: 50, y: 50 },
    { id: "D", x: 20, y: 80 },
    { id: "E", x: 80, y: 80 },
  ];

  const edges = [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "B", to: "C" },
    { from: "B", to: "E" },
    { from: "C", to: "D" },
    { from: "C", to: "E" },
    { from: "D", to: "E" },
  ];

  const terminology = [
    { title: "Vertex (Node)", description: "An entity in the network (e.g., a User, City, or Webpage).", icon: GitCommit, color: "cyan" },
    { title: "Edge (Link)", description: "The connection between two vertices (e.g., Friendship, Road, Hyperlink).", icon: GitMerge, color: "cyan" },
    { title: "Directed vs Undirected", description: "One-way (Twitter follow) vs Two-way (Facebook friend) connections.", icon: ArrowRight, color: "cyan" },
    { title: "Weighted Graph", description: "Edges have a cost or value (e.g., Distance between cities).", icon: Network, color: "cyan" }
  ];

  const applications = [
    { title: "Social Networks", description: "Modeling relationships", icon: Users, color: "cyan" },
    { title: "GPS Navigation", description: "Shortest path finding", icon: Map, color: "cyan" },
    { title: "Network Routing", description: "Data packet flow", icon: Server, color: "cyan" },
    { title: "Web Crawling", description: "PageRank algorithm", icon: Globe, color: "cyan" },
    { title: "Recommendation", description: "Graph filtering", icon: Share2, color: "cyan" },
    { title: "Circuit Design", description: "Component wiring", icon: Cpu, color: "cyan" }
  ];

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Introduction" 
        description="The universal language of relationships."
        icon={Network} 
        color="cyan" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          A <strong className="text-white">Graph</strong> is a non-linear data structure consisting of <strong className="text-cyan-400">vertices</strong> (nodes) connected by <strong className="text-cyan-400">edges</strong> (links). Graphs model complex relationships in everything from social networks to computer circuits.
        </p>

        {/* Interactive Visualization */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
           <h3 className="text-xl font-black text-white mb-6 relative z-10 flex items-center gap-2">
             <Share2 size={20} className="text-cyan-400" /> Interactive Graph
           </h3>
           
           <div className="relative z-10 h-64 bg-slate-950 rounded-2xl border border-white/5 overflow-hidden">
             <svg className="absolute inset-0 w-full h-full">
               {edges.map((edge, i) => {
                 const start = nodes.find(n => n.id === edge.from);
                 const end = nodes.find(n => n.id === edge.to);
                 return (
                   <motion.line 
                     key={i}
                     x1={`${start.x}%`} y1={`${start.y}%`}
                     x2={`${end.x}%`} y2={`${end.y}%`}
                     stroke={hoveredNode && (hoveredNode === edge.from || hoveredNode === edge.to) ? "#22d3ee" : "#334155"}
                     strokeWidth="2"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1, delay: 0.5 }}
                   />
                 );
               })}
             </svg>
             
             {nodes.map((node) => (
               <motion.div
                 key={node.id}
                 className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center font-bold text-white shadow-lg cursor-pointer border-4 transition-colors
                   ${hoveredNode === node.id ? "bg-cyan-500 border-cyan-900 scale-110" : "bg-slate-700 border-slate-800 hover:bg-cyan-600 hover:border-cyan-900"}
                 `}
                 style={{ left: `${node.x}%`, top: `${node.y}%` }}
                 onMouseEnter={() => setHoveredNode(node.id)}
                 onMouseLeave={() => setHoveredNode(null)}
                 whileHover={{ scale: 1.2 }}
               >
                 {node.id}
               </motion.div>
             ))}
           </div>
           
           <div className="flex justify-center gap-8 mt-6 relative z-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
             <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-800" /> Vertex</div>
             <div className="flex items-center gap-2"><div className="w-8 h-0.5 bg-slate-600" /> Edge</div>
           </div>
        </div>

        {/* Terminology */}
        <ConceptGrid 
          items={terminology} 
          columns={2} 
          variant="horizontal"
        />

        {/* Real World Applications */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Globe size={24} className="text-blue-400" /> Applications
          </h3>
          <ConceptGrid 
            items={applications} 
            columns={3} 
          />
        </div>

      </div>
    </PerspectiveCard>
  );
}