"use client";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import { Grid, Star, Navigation, BarChart3, Cpu, Server, Activity } from "lucide-react";

export default function HeapApplications() {
  const apps = [
    {
      title: "Priority Queues",
      icon: <Star size={20} className="text-yellow-400" />,
      desc: "Heaps are the standard implementation for Priority Queues, allowing efficient access to elements with the highest (or lowest) priority.",
      usage: "OS Task Scheduling, Event Handling"
    },
    {
      title: "Dijkstra's Algorithm",
      icon: <Navigation size={20} className="text-blue-400" />,
      desc: "Used to find the shortest path in a graph. A Min-Heap stores unvisited nodes, always extracting the one with the smallest distance.",
      usage: "Google Maps, Network Routing"
    },
    {
      title: "Median Maintenance",
      icon: <Activity size={20} className="text-rose-400" />,
      desc: "Using two heaps (Max-Heap for the left half, Min-Heap for the right half) to find the median of a dynamic stream of numbers in O(1).",
      usage: "Data Streaming, Financial Analysis"
    },
    {
      title: "K-th Largest/Smallest",
      icon: <BarChart3 size={20} className="text-emerald-400" />,
      desc: "A Min-Heap of size K can track the K largest elements in a massive stream of data efficiently in O(N log K).",
      usage: "Leaderboards, Top Trends"
    },
    {
      title: "Huffman Coding",
      icon: <Cpu size={20} className="text-purple-400" />,
      desc: "Heaps are used to build the Huffman tree by repeatedly merging the two least frequent nodes during data compression.",
      usage: "ZIP files, JPEG, MP3"
    },
    {
      title: "Load Balancing",
      icon: <Server size={20} className="text-cyan-400" />,
      desc: "Managing server requests where the server with the least current load is prioritized for the next incoming task.",
      usage: "Cloud Computing, Microservices"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-3xl group hover:border-rose-500/30 transition-all flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-3">{app.title}</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 flex-grow">
                {app.desc}
              </p>
              <div className="pt-4 border-t border-white/5 mt-auto">
                 <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Common Usage</div>
                 <div className="text-[11px] font-bold text-slate-300">{app.usage}</div>
              </div>
            </div>
          ))}
        </div>

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
