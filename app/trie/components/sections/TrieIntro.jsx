"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import { 
  Library, 
  Search, 
  GitMerge, 
  Type, 
  ArrowRight,
  Database,
  Zap,
  Globe
} from "lucide-react";

export default function TrieIntro() {
  const [inputWord, setInputWord] = useState("");
  const [trieWords, setTrieWords] = useState(["cat", "car", "dog"]);
  const [activeNode, setActiveNode] = useState(null);

  // Simplified Trie structure for visualization
  const buildVisualTree = (words) => {
    const root = { id: "root", char: "root", children: {}, isEnd: false };
    
    words.forEach(word => {
      let node = root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = { 
            id: node.id + "-" + char, 
            char, 
            children: {}, 
            isEnd: false 
          };
        }
        node = node.children[char];
      }
      node.isEnd = true;
    });
    return root;
  };

  const [visualRoot, setVisualRoot] = useState(buildVisualTree(trieWords));

  const addWord = () => {
    if (inputWord && !trieWords.includes(inputWord)) {
      const newWords = [...trieWords, inputWord];
      setTrieWords(newWords);
      setVisualRoot(buildVisualTree(newWords));
      setInputWord("");
    }
  };

  // Recursive component to render tree
  const TreeNode = ({ node, depth = 0, xOffset = 0 }) => {
    return (
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 shadow-lg relative z-10
            ${node.isEnd ? "bg-orange-500 border-white text-white" : "bg-slate-800 border-orange-500/30 text-orange-200"}
            ${node.id === "root" ? "w-14 h-14 bg-gradient-to-r from-orange-600 to-red-600 border-none" : ""}
          `}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
        >
          {node.id === "root" ? <Database size={20} /> : node.char}
          
          {activeNode === node.id && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 bg-slate-900 text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap z-20"
            >
              ID: {node.id}
            </motion.div>
          )}
        </motion.div>

        {Object.keys(node.children).length > 0 && (
          <div className="flex gap-4 mt-8 relative">
            {Object.values(node.children).map((child, i) => (
              <div key={child.id} className="relative flex flex-col items-center">
                {/* Connecting Line */}
                <svg className="absolute -top-8 left-1/2 -ml-[1px] w-[2px] h-8 overflow-visible z-0">
                  <line 
                    x1="0" y1="0" 
                    x2="0" y2="100%" 
                    stroke="#f97316" 
                    strokeWidth="2" 
                    opacity="0.3"
                  />
                </svg>
                <TreeNode node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <PerspectiveCard color="orange">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
          <Library size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">What is a Trie?</h2>
          <p className="text-slate-400 font-medium">The ultimate data structure for string operations.</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Definition & Concept */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Type size={20} className="text-orange-400" /> Prefix Tree
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A <strong>Trie</strong> (pronounced "try") is a tree-based data structure used to efficiently store and retrieve keys in a dataset of strings. Unlike a binary tree, nodes don't store their keys associated with them; instead, the <strong>position</strong> in the tree defines the key.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-white/5">
                <GitMerge size={18} className="text-emerald-400" />
                <span className="text-xs text-slate-300"><strong>Shared Prefixes:</strong> Saves space by merging common starts (e.g. "ca" in "cat", "car")</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-white/5">
                <Search size={18} className="text-blue-400" />
                <span className="text-xs text-slate-300"><strong>Fast Search:</strong> Lookup takes O(L) where L is word length</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center">
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-orange-500 blur-[40px] opacity-20" />
              <Globe size={64} className="text-orange-400 relative z-10" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Google Search</h3>
            <p className="text-slate-400 text-xs max-w-xs">
              Every time you type in a search bar, a Trie is likely working behind the scenes to fetch millions of autocomplete suggestions in milliseconds.
            </p>
          </div>
        </div>

        {/* Interactive Visualizer */}
        <div className="bg-slate-950 border border-white/10 rounded-[2.5rem] p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Library size={120} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 relative z-10">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Zap size={20} className="text-orange-400" /> Live Trie Builder
              </h3>
              <p className="text-slate-500 text-xs mt-1">Add words to see how the tree grows dynamically.</p>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value.toLowerCase())}
                placeholder="Type a word..."
                className="bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 w-40"
                onKeyDown={(e) => e.key === 'Enter' && addWord()}
              />
              <button 
                onClick={addWord}
                className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-xl transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center overflow-x-auto pb-4 min-h-[300px]">
            <TreeNode node={visualRoot} />
          </div>

          <div className="flex gap-2 justify-center mt-4">
            {trieWords.map(word => (
              <span key={word} className="px-3 py-1 bg-slate-900 border border-white/10 rounded-full text-xs text-orange-300">
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Node Structure Code Snippet */}
        <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-8">
          <h3 className="text-xl font-black text-white mb-6">The Blueprint</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Children Map</h4>
                  <p className="text-xs text-slate-400">Stores links to next characters. Usually an array of size 26 or a HashMap.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                <div>
                  <h4 className="text-sm font-bold text-white">isEndOfWord</h4>
                  <p className="text-xs text-slate-400">Boolean flag. True if the path from root to here forms a valid word.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-4 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
{`class TrieNode {
    constructor() {
        // Links to child nodes
        this.children = {}; 
        
        // Is this the end of a valid word?
        this.isEndOfWord = false; 
    }
}`}
            </div>
          </div>
        </div>

      </div>
    </PerspectiveCard>
  );
}