"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import { 
  Hash, 
  Search, 
  Zap, 
  Database, 
  Key, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  RefreshCw,
  Layers,
  Scale
} from "lucide-react";

export default function HashingIntro() {
  const [inputValue, setInputValue] = useState("hello");
  
  const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i) * (i + 1)) % 10;
    }
    return hash;
  };

  const hashResult = simpleHash(inputValue);

  const terminology = [
    { title: "Hash Function", description: "Maps data to fixed-size values.", icon: Hash, color: "blue" },
    { title: "Collision", description: "Two keys map to the same index.", icon: AlertTriangle, color: "rose" },
    { title: "Load Factor", description: "Ratio of items to capacity (n/k).", icon: Scale, color: "amber" },
    { title: "Buckets", description: "Slots in the hash table array.", icon: Database, color: "emerald" },
  ];

  return (
    <PerspectiveCard color="indigo">
      <SectionHeader 
        title="What is Hashing?" 
        icon={Hash} 
        color="indigo" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Hashing</strong> is a technique used to uniquely identify a specific object from a group of similar objects. It converts large keys into small, fixed-size <strong className="text-indigo-400">integer values (indexes)</strong> using a <strong className="text-indigo-400">hash function</strong>, allowing for <strong className="text-white">O(1)</strong> average time complexity for lookups.
        </p>

        {/* Interactive Demo & Analogy */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
             <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500" />
             <h3 className="text-xl font-black text-white mb-6 relative z-10 flex items-center gap-2">
               <Zap size={20} className="text-indigo-400" /> Interactive Hash Machine
             </h3>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
               <div className="flex-1 w-full">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Input Key</label>
                 <div className="relative">
                   <Key size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                   <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white font-mono focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Type..."
                   />
                 </div>
               </div>

               <div className="hidden md:flex flex-col items-center gap-1 text-slate-600">
                 <span className="text-[10px] font-bold uppercase tracking-widest">Hash Fn</span>
                 <ArrowRight size={24} />
               </div>

               <div className="flex-1 w-full text-center">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Table Index</label>
                 <motion.div 
                   key={hashResult}
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="bg-indigo-600 text-white text-4xl font-black py-3 rounded-xl shadow-lg shadow-indigo-600/20 border border-white/20"
                 >
                   {hashResult}
                 </motion.div>
               </div>
             </div>
             <p className="relative z-10 text-center text-xs text-slate-500 mt-6 font-medium">
               Simple Modulo-10 Hash: Sum(char codes) % 10
             </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-[2.5rem] p-8 flex flex-col justify-center">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <HelpCircle size={20} className="text-indigo-400" /> Real-World
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Library System", desc: "Dewey Decimal System maps books to shelf locations." },
                { title: "DNS Resolution", desc: "Maps domain names (google.com) to IP addresses." },
                { title: "Caches", desc: "Storing data by key for instant retrieval." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="text-2xl mt-1">🏷️</div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-tight">{item.title}</div>
                    <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Terminology */}
        <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Layers size={24} className="text-purple-400" /> Key Terminology
          </h3>
          <ConceptGrid items={terminology} columns={4} />
        </div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-emerald-400 mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} /> Why Use Hashing?
            </h3>
            <ul className="space-y-4">
              {[
                "Average O(1) Search/Insert/Delete",
                "Keys can be of any data type (strings, objects)",
                "No need to keep data sorted",
                "Ideal for caching and frequency counting",
                "Direct access via keys"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
              <AlertTriangle size={20} /> Challenges:
            </h3>
            <ul className="space-y-4">
              {[
                "Collisions must be handled (O(n) worst case)",
                "Unordered data (no range queries)",
                "Resizing the table is expensive (O(n))",
                "Requires a good hash function",
                "Inefficient for small datasets (overhead)"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PerspectiveCard>
  );
}