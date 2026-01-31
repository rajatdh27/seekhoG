"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { Grid, Star, Navigation, BarChart3, Cpu, Server, Activity } from "lucide-react";

export default function HeapApplications() {
  const apps = [
    {
      title: "Priority Queues",
      icon: Star,
      color: "amber",
      description: "Heaps are the standard implementation for Priority Queues, allowing efficient access to elements with the highest (or lowest) priority.",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">OS Task Scheduling, Event Handling</div></div>
    },
    {
      title: "Dijkstra's Algorithm",
      icon: Navigation,
      color: "blue",
      description: "Used to find the shortest path in a graph. A Min-Heap stores unvisited nodes, always extracting the one with the smallest distance.",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">Google Maps, Network Routing</div></div>
    },
    {
      title: "Median Maintenance",
      icon: Activity,
      color: "rose",
      description: "Using two heaps (Max-Heap for the left half, Min-Heap for the right half) to find the median of a dynamic stream of numbers in O(1).",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">Data Streaming, Financial Analysis</div></div>
    },
    {
      title: "K-th Largest/Smallest",
      icon: BarChart3,
      color: "emerald",
      description: "A Min-Heap of size K can track the K largest elements in a massive stream of data efficiently in O(N log K).",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">Leaderboards, Top Trends</div></div>
    },
    {
      title: "Huffman Coding",
      icon: Cpu,
      color: "purple",
      description: "Heaps are used to build the Huffman tree by repeatedly merging the two least frequent nodes during data compression.",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">ZIP files, JPEG, MP3</div></div>
    },
    {
      title: "Load Balancing",
      icon: Server,
      color: "cyan",
      description: "Managing server requests where the server with the least current load is prioritized for the next incoming task.",
      footer: <div className="pt-4 border-t border-white/5"><div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div><div className="text-[11px] font-bold text-slate-300">Cloud Computing, Microservices</div></div>
    }
  ];

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="Real-World Applications" 
        icon={Grid} 
        color="rose" 
      />

      <div className="space-y-8">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          Heaps are not just theoretical; they power some of the most critical systems in modern computing, from the <strong className="text-white">task scheduler</strong> in your laptop to <strong className="text-white">routing algorithms</strong> on the internet.
        </p>

        <ConceptGrid items={apps} columns={3} />

        {/* Interview Focus */}
        <div className="mt-12 p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem]">
           <h3 className="text-xl font-black text-blue-400 mb-4 flex items-center gap-2">
             💡 Interview Pattern: The &quot;Two Heaps&quot;
           </h3>
           <p className="text-sm text-slate-400 font-medium leading-relaxed">
             One of the most frequent heap-related interview questions is <strong className="text-white">&quot;Find Median from Data Stream&quot;</strong>. 
             The optimal solution uses a <span className="text-rose-400">Max-Heap</span> to store the smaller half of numbers and a <span className="text-emerald-400">Min-Heap</span> to store the larger half. 
             This allows you to find the median in <strong className="text-white">O(1)</strong> and insert new numbers in <strong className="text-white">O(log n)</strong>.
           </p>
        </div>
      </div>
    </PerspectiveCard>
  );
}
