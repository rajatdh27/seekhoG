"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Code2, 
  Box, 
  ListTree, 
  ArrowRight
} from "lucide-react";

export default function TrieImplementationSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
          <Code2 size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Implementation</h2>
          <p className="text-slate-400 font-medium">Building the Prefix Tree from scratch.</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Structure Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-8">
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Box size={20} className="text-orange-400" /> The Node
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              The basic building block. Contains links to children and a flag.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-white/5">
                <span className="text-orange-500 font-mono text-xs">children</span>
                <span className="text-slate-500 text-xs">Map&lt;Char, Node&gt;</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-white/5">
                <span className="text-orange-500 font-mono text-xs">isEndOfWord</span>
                <span className="text-slate-500 text-xs">Boolean</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-8">
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <ListTree size={20} className="text-amber-400" /> Storage Choice
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-bold mb-1">Array (Size 26)</h4>
                <p className="text-slate-500 text-xs">Fastest access, but wastes space if sparse. Only for 'a'-'z'.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold mb-1">HashMap / Dict</h4>
                <p className="text-slate-500 text-xs">Flexible (any char), saves space for sparse data. Slightly slower.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Code */}
        <div>
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
            <ArrowRight size={20} className="text-orange-400" /> Complete Class
          </h3>
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