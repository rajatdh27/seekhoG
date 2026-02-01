"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  GitBranch, 
  Plus, 
  Search, 
  MousePointer2, 
  Trash2, 
  ArrowRight,
  Clock,
  Layers
} from "lucide-react";

export default function TrieOperationsSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const trieOps = [
    {
      title: "Insert",
      description: "Walk down following characters. Create nodes as needed. Mark end.",
      icon: Plus,
      color: "emerald",
      footer: <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Time: O(m) | Space: O(m)</div>
    },
    {
      title: "Search",
      description: "Follow path. Return false if broken. Check end flag if path finished.",
      icon: Search,
      color: "blue",
      footer: <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Time: O(m) | Space: O(1)</div>
    },
    {
      title: "StartsWith",
      description: "Identical to Search, but returns true as long as the path exists.",
      icon: MousePointer2,
      color: "purple",
      footer: <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Time: O(m) | Space: O(1)</div>
    },
    {
      title: "Delete",
      description: "Recursively remove nodes. Only delete if no other children exist.",
      icon: Trash2,
      color: "rose",
      footer: <div className="text-[10px] font-mono text-slate-500 font-bold uppercase">Time: O(m) | Space: O(m)</div>
    }
  ];

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
        <ConceptGrid items={trieOps} columns={2} />

        {/* Implementation */}
        <div>
          <SectionHeader 
            title="Full Implementation" 
            icon={GitBranch} 
            color="orange" 
            className="mb-6"
          />
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