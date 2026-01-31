"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  GitBranch, 
  Plus, 
  Search, 
  MousePointer2, 
  Trash2, 
  ArrowRight
} from "lucide-react";

export default function TrieOperationsSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const operationsCode = {
    javascript: `class Trie {
    // 1. Insert a word
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // 2. Search for exact word
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // 3. Check for prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}`,
    python: `class Trie:
    # 1. Insert a word
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    # 2. Search for exact word
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    # 3. Check for prefix
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
    java: `class Trie {
    // 1. Insert a word
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.isEndOfWord = true;
    }

    // 2. Search for exact word
    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) return false;
            node = node.children.get(c);
        }
        return node.isEndOfWord;
    }

    // 3. Check for prefix
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) return false;
            node = node.children.get(c);
        }
        return true;
    }
}`,
    cpp: `class Trie {
public:
    // 1. Insert a word
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEndOfWord = true;
    }

    // 2. Search for exact word
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) return false;
            node = node->children[c];
        }
        return node->isEndOfWord;
    }

    // 3. Check for prefix
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) return false;
            node = node->children[c];
        }
        return true;
    }
};`,
    go: `type Trie struct {
    root *TrieNode
}

// 1. Insert a word
func (t *Trie) Insert(word string) {
    node := t.root
    for _, char := range word {
        if _, ok := node.children[char]; !ok {
            node.children[char] = &TrieNode{children: make(map[rune]*TrieNode)}
        }
        node = node.children[char]
    }
    node.isEndOfWord = true
}

// 2. Search for exact word
func (t *Trie) Search(word string) bool {
    node := t.root
    for _, char := range word {
        if _, ok := node.children[char]; !ok {
            return false
        }
        node = node.children[char]
    }
    return node.isEndOfWord
}

// 3. Check for prefix
func (t *Trie) StartsWith(prefix string) bool {
    node := t.root
    for _, char := range prefix {
        if _, ok := node.children[char]; !ok {
            return false
        }
        node = node.children[char]
    }
    return true
}`
  };

  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Core Operations" 
        description="The building blocks of Trie interaction."
        icon={GitBranch} 
        color="orange" 
      />

      <div className="space-y-12">
        {/* Operations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900 border border-white/5 rounded-[2rem] hover:border-orange-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Plus size={20} /></div>
              <h3 className="text-xl font-bold text-white">Insert</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Walk down the tree following characters. Create new nodes if path doesn't exist. Mark last node as <code className="text-emerald-400">end</code>.
            </p>
            <div className="text-xs font-mono text-slate-500">Time: O(m) | Space: O(m)</div>
          </div>

          <div className="p-6 bg-slate-900 border border-white/5 rounded-[2rem] hover:border-orange-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Search size={20} /></div>
              <h3 className="text-xl font-bold text-white">Search</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Follow characters. If path breaks, return <code className="text-red-400">false</code>. If path ends, check <code className="text-blue-400">isEndOfWord</code> flag.
            </p>
            <div className="text-xs font-mono text-slate-500">Time: O(m) | Space: O(1)</div>
          </div>

          <div className="p-6 bg-slate-900 border border-white/5 rounded-[2rem] hover:border-orange-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><MousePointer2 size={20} /></div>
              <h3 className="text-xl font-bold text-white">StartsWith</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Identical to Search, but returns <code className="text-purple-400">true</code> as long as the path exists, regardless of the end flag.
            </p>
            <div className="text-xs font-mono text-slate-500">Time: O(m) | Space: O(1)</div>
          </div>

          <div className="p-6 bg-slate-900 border border-white/5 rounded-[2rem] hover:border-orange-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><Trash2 size={20} /></div>
              <h3 className="text-xl font-bold text-white">Delete</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Recursively remove nodes from bottom-up. Only delete a node if it has no other children.
            </p>
            <div className="text-xs font-mono text-slate-500">Time: O(m) | Space: O(m)</div>
          </div>
        </div>

        {/* Implementation */}
        <div>
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
            <GitBranch size={24} className="text-orange-400" /> Full Implementation
          </h3>
          <CodeImplementation 
            languages={operationsCode}
            color="orange"
            initialLanguage={currentLanguage}
          />
        </div>

      </div>
    </PerspectiveCard>
  );
}