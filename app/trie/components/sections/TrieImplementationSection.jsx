"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Code2, 
  Box, 
  ListTree, 
  ArrowRight,
  Database,
  Hash
} from "lucide-react";

export default function TrieImplementationSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const structureItems = [
    {
      title: "The Node",
      description: "The basic building block containing links and a completion flag.",
      icon: Box,
      color: "orange",
      footer: (
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-white/5">
            <span className="text-orange-500 font-mono text-[10px]">children</span>
            <span className="text-slate-500 text-[10px]">Map&lt;Char, Node&gt;</span>
          </div>
          <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-white/5">
            <span className="text-orange-500 font-mono text-[10px]">isEndOfWord</span>
            <span className="text-slate-500 text-[10px]">Boolean</span>
          </div>
        </div>
      )
    },
    {
      title: "Storage Choice",
      description: "Trade-off between speed and memory efficiency.",
      icon: ListTree,
      color: "amber",
      footer: (
        <div className="space-y-3">
          <div>
            <h5 className="text-white text-[10px] font-bold uppercase mb-1">Array (26)</h5>
            <p className="text-slate-500 text-[10px]">Fastest access, sparse waste.</p>
          </div>
          <div className="pt-2 border-t border-white/5">
            <h5 className="text-white text-[10px] font-bold uppercase mb-1">HashMap</h5>
            <p className="text-slate-500 text-[10px]">Flexible, saves space.</p>
          </div>
        </div>
      )
    }
  ];

  const fullImplementationCode = {
    javascript: `// Complete Trie Implementation
class TrieNode {
    constructor() {
        this.children = {}; // or new Array(26)
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

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

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}`,
    python: `# Complete Trie Implementation
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
    java: `// Complete Trie Implementation
class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord = false;
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) return false;
            node = node.children.get(c);
        }
        return node.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) return false;
            node = node.children.get(c);
        }
        return true;
    }
}`,
    cpp: `// Complete Trie Implementation
struct TrieNode {
    unordered_map<char, TrieNode*> children;
    bool isEndOfWord = false;
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }

    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (!node->children.count(c))
                node->children[c] = new TrieNode();
            node = node->children[c];
        }
        node->isEndOfWord = true;
    }

    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (!node->children.count(c)) return false;
            node = node->children[c];
        }
        return node->isEndOfWord;
    }

    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            if (!node->children.count(c)) return false;
            node = node->children[c];
        }
        return true;
    }
};`,
    go: `// Complete Trie Implementation
type TrieNode struct {
    children map[rune]*TrieNode
    isEnd    bool
}

type Trie struct {
    root *TrieNode
}

func Constructor() Trie {
    return Trie{root: &TrieNode{children: make(map[rune]*TrieNode)}}
}

func (this *Trie) Insert(word string) {
    node := this.root
    for _, char := range word {
        if _, ok := node.children[char]; !ok {
            node.children[char] = &TrieNode{children: make(map[rune]*TrieNode)}
        }
        node = node.children[char]
    }
    node.isEnd = true
}

func (this *Trie) Search(word string) bool {
    node := this.root
    for _, char := range word {
        if _, ok := node.children[char]; !ok {
            return false
        }
        node = node.children[char]
    }
    return node.isEnd
}

func (this *Trie) StartsWith(prefix string) bool {
    node := this.root
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
        title="Implementation" 
        description="Building the Prefix Tree from scratch."
        icon={Code2} 
        color="orange" 
      />

      <div className="space-y-12">
        {/* Structure Breakdown */}
        <ConceptGrid items={structureItems} columns={2} />

        {/* Full Code */}
        <div>
          <SectionHeader 
            title="Complete Class" 
            icon={ArrowRight} 
            color="orange" 
            className="mb-6"
          />
          <CodeImplementation 
            languages={fullImplementationCode}
            color="orange"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>
    </PerspectiveCard>
  );
}