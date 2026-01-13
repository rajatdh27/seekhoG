"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  Layout, 
  Globe, 
  History, 
  Music, 
  Database, 
  Terminal, 
  Undo2, 
  Image as ImageIcon, 
  Cpu, 
  FileJson, 
  ChevronRight,
  Code2,
  Share2
} from "lucide-react";

export default function LinkedListApplications() {
  const [activeApp, setActiveApp] = useState(0);

  const apps = [
    {
      title: "Browser History",
      desc: "Web browsers use doubly linked lists to implement back and forward button functionality.",
      icon: <History size={24} />,
      color: "blue",
      usedIn: ["Chrome, Firefox, Safari navigation", "Back button traverses backward", "Forward button moves forward", "New visit clears forward history"],
      code: `class BrowserHistory {
  constructor(homepage) {
    this.current = { url: homepage, prev: null, next: null };
  }

  visit(url) {
    const newNode = { url, prev: this.current, next: null };
    this.current.next = newNode;
    this.current = newNode;
  }

  back(steps) {
    while (steps > 0 && this.current.prev) {
      this.current = this.current.prev;
      steps--;
    }
    return this.current.url;
  }
}`
    },
    {
      title: "Music Playlists",
      desc: "Music players use circular linked lists for continuous playlist looping and shuffle features.",
      icon: <Music size={24} />,
      color: "emerald",
      usedIn: ["Spotify, Apple Music playlists", "Next/Previous song navigation", "Repeat and shuffle modes", "Queue management"],
      code: `class MusicPlaylist {
  addSong(song) {
    const newNode = { song, next: null, prev: null };
    if (!this.head) {
      this.head = this.current = this.tail = newNode;
      newNode.next = newNode.prev = newNode; // Circular
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = this.head.prev = newNode;
      this.tail = newNode;
    }
  }
}`
    },
    {
      title: "Undo/Redo Operations",
      desc: "Text editors and design software use linked lists to track and navigate through action history.",
      icon: <Undo2 size={24} />,
      color: "purple",
      usedIn: ["VSCode, Word, Google Docs", "Photoshop, Figma, Canva", "Video editors (Premiere, Final Cut)", "Any app with edit history"],
      code: `class UndoRedoManager {
  executeAction(action) {
    const newNode = { action, prev: this.current, next: null };
    if (this.current) this.current.next = newNode;
    this.current = newNode;
    action.execute();
  }

  undo() {
    if (this.current) {
      this.current.action.undo();
      this.current = this.current.prev;
    }
  }
}`
    },
    {
      title: "Image Viewer Gallery",
      desc: "Photo gallery apps use doubly linked lists for efficient next/previous image navigation.",
      icon: <ImageIcon size={24} />,
      color: "rose",
      usedIn: ["Instagram, Facebook photo viewers", "Google Photos, Apple Photos", "Windows Photo Viewer", "Gallery apps on mobile"],
      code: `class ImageGallery {
  nextImage() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.image;
    }
    return null;
  }

  deleteCurrentImage() {
    if (!this.current) return;
    const { next, prev } = this.current;
    if (prev) prev.next = next;
    if (next) next.prev = prev;
    this.current = next || prev;
  }
}`
    },
    {
      title: "Hash Table Chaining",
      desc: "Hash tables use linked lists for chaining to handle hash collisions efficiently.",
      icon: <FileJson size={24} />,
      color: "amber",
      usedIn: ["JavaScript objects/Maps", "Python dictionaries", "Java HashMap", "Database indexing"],
      code: `set(key, value) {
  const index = this.hash(key);
  const newNode = { key, value, next: null };
  if (!this.buckets[index]) {
    this.buckets[index] = newNode;
  } else {
    let curr = this.buckets[index];
    while (curr.next && curr.key !== key) curr = curr.next;
    if (curr.key === key) curr.value = value;
    else curr.next = newNode;
  }
}`
    },
    {
      title: "Memory Management",
      desc: "Operating systems use linked lists to manage free memory blocks and allocation.",
      icon: <Database size={24} />,
      color: "indigo",
      usedIn: ["OS memory allocators (malloc/free)", "Garbage collection", "Memory pool management", "Dynamic memory allocation"],
      code: `allocate(size) {
  let curr = this.freeList;
  while (curr) {
    if (curr.size >= size) {
      const allocated = { start: curr.start, size, next: this.allocatedList };
      this.allocatedList = allocated;
      curr.start += size; curr.size -= size;
      return allocated.start;
    }
    curr = curr.next;
  }
}`
    },
    {
      title: "File System Organization",
      desc: "File systems use linked lists to track file blocks and directory entries.",
      icon: <Terminal size={24} />,
      color: "cyan",
      usedIn: ["FAT32 file allocation table", "Directory linked lists", "Inode lists in Unix/Linux", "File block chaining"],
      code: `readFile(filename) {
  let current = this.files[filename];
  let data = '';
  while (current) {
    data += current.data;
    current = current.next;
  }
  return data;
}`
    },
    {
      title: "Process Scheduling",
      desc: "Operating systems use circular linked lists for round-robin CPU scheduling.",
      icon: <Cpu size={24} />,
      color: "orange",
      usedIn: ["OS process schedulers", "Task scheduling in real-time systems", "Round-robin scheduling", "CPU time-slicing"],
      code: `scheduleNext() {
  if (!this.current) return null;
  const process = this.current.process;
  if (process.executeTimeSlice()) {
    this.removeProcess(process.id);
  } else {
    this.current = this.current.next;
  }
  return process;
}`
    }
  ];

  return (
    <PerspectiveCard color="blue">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-lg">
          <Layout size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Real-World Usage</h2>
          <p className="text-slate-400 font-medium">Where dynamic pointer structures power modern software.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          {apps.map((app, i) => (
            <button
              key={i}
              onClick={() => setActiveApp(i)}
              className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center gap-4 group ${
                activeApp === i 
                  ? `bg-${app.color}-500/10 border-${app.color}-500/40 shadow-lg` 
                  : "bg-slate-950/40 border-white/5 hover:border-white/10"
              }`}
            >
              <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeApp === i ? `bg-${app.color}-500 text-white` : "bg-slate-900 text-slate-500 group-hover:text-slate-300"
              }`}>
                {app.icon}
              </div>
              <span className={`text-xs font-black uppercase tracking-wider ${activeApp === i ? "text-white" : "text-slate-500"}`}>
                {app.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className={`p-8 rounded-[2.5rem] bg-slate-900/50 border border-${apps[activeApp].color}-500/20 relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 p-8 opacity-5 text-${apps[activeApp].color}-500`} style={{ transform: 'scale(4)' }}>
              {apps[activeApp].icon}
            </div>
            
            <div className="relative z-10">
              <h3 className={`text-3xl font-black text-${apps[activeApp].color}-400 mb-4`}>{apps[activeApp].title}</h3>
              <p className="text-slate-300 text-sm font-medium leading-relaxed mb-8 max-w-xl">
                {apps[activeApp].desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Used In</h4>
                  <ul className="space-y-3">
                    {apps[activeApp].usedIn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-400">
                        <ChevronRight size={14} className={`text-${apps[activeApp].color}-500 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Why It Matters</h4>
                  <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed italic">
                      Linked lists allow for <span className="text-white">non-contiguous growth</span> and <span className="text-white">O(1) updates</span>, making them superior to arrays for high-frequency history and sequence management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="relative group/terminal">
            <div className={`absolute -inset-1 bg-${apps[activeApp].color}-500/10 rounded-[2rem] blur opacity-0 group-hover/terminal:opacity-100 transition-opacity`} />
            <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Implementation Sketch</span>
                </div>
                <Code2 size={14} className="text-slate-600" />
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs leading-relaxed text-blue-300 font-mono">
                  <code>{apps[activeApp].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Impact Summary */}
      <div className="mt-12 p-8 bg-slate-900 border border-white/5 rounded-[2.5rem]">
        <h3 className="text-2xl font-black text-white mb-8 text-center uppercase tracking-tighter">Why Industry Prefers Linked Lists</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Dynamic Memory", desc: "No need to pre-allocate size. Grow and shrink as needed.", icon: <Database className="text-blue-400" /> },
            { title: "Efficient UI", desc: "Powers browser history, Undo/Redo, and image galleries.", icon: <Layout className="text-emerald-400" /> },
            { title: "System Logic", desc: "Core of OS scheduling, memory allocation, and file systems.", icon: <Cpu className="text-purple-400" /> },
            { title: "Data Core", desc: "Foundation for stacks, queues, and hash table chaining.", icon: <Share2 className="text-orange-400" /> }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-3 p-4">
              <div className="inline-flex w-12 h-12 rounded-xl bg-white/5 items-center justify-center mb-2">{item.icon}</div>
              <h4 className="text-xs font-black text-white uppercase tracking-tight">{item.title}</h4>
              <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PerspectiveCard>
  );
}
