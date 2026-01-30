"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  TreeDeciduous, 
  Binary, 
  Minimize2, 
  ArrowRight
} from "lucide-react";

export default function HuffmanCoding() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const huffmanCode = {
    javascript: `// Huffman Coding
class Node {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function huffmanCoding(chars, freqs) {
    const pq = new MinPriorityQueue({ priority: x => x.freq });
    
    // 1. Create leaf nodes
    for (let i = 0; i < chars.length; i++) {
        pq.enqueue(new Node(chars[i], freqs[i]));
    }
    
    // 2. Build Tree
    while (pq.size() > 1) {
        const left = pq.dequeue().element;
        const right = pq.dequeue().element;
        
        const internal = new Node('$', left.freq + right.freq, left, right);
        pq.enqueue(internal);
    }
    
    const root = pq.dequeue().element;
    const codes = {};
    
    // 3. Generate Codes
    function generateCodes(node, code) {
        if (!node) return;
        if (!node.left && !node.right) {
            codes[node.char] = code;
            return;
        }
        generateCodes(node.left, code + '0');
        generateCodes(node.right, code + '1');
    }
    
    generateCodes(root, "");
    return codes;
}
// Time: O(n log n)`,
    python: `# Huffman Coding
import heapq

class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
        
    def __lt__(self, other):
        return self.freq < other.freq

def huffman_coding(chars, freqs):
    # 1. Create heap
    pq = [Node(chars[i], freqs[i]) for i in range(len(chars))]
    heapq.heapify(pq)
    
    # 2. Build Tree
    while len(pq) > 1:
        left = heapq.heappop(pq)
        right = heapq.heappop(pq)
        
        internal = Node('$', left.freq + right.freq)
        internal.left = left
        internal.right = right
        
        heapq.heappush(pq, internal)
        
    root = heapq.heappop(pq)
    codes = {}
    
    # 3. Generate Codes
    def generate_codes(node, code):
        if not node: return
        if not node.left and not node.right:
            codes[node.char] = code
            return
        
        generate_codes(node.left, code + '0')
        generate_codes(node.right, code + '1')
        
    generate_codes(root, "")
    return codes`,
    java: `// Huffman Coding
import java.util.*;

class Node implements Comparable<Node> {
    char ch;
    int freq;
    Node left, right;
    
    Node(char ch, int freq) {
        this.ch = ch;
        this.freq = freq;
    }
    
    public int compareTo(Node other) {
        return this.freq - other.freq;
    }
}

public Map<Character, String> huffmanCoding(char[] chars, int[] freqs) {
    PriorityQueue<Node> pq = new PriorityQueue<>();
    
    for (int i = 0; i < chars.length; i++) {
        pq.offer(new Node(chars[i], freqs[i]));
    }
    
    while (pq.size() > 1) {
        Node left = pq.poll();
        Node right = pq.poll();
        
        Node internal = new Node('$', left.freq + right.freq);
        internal.left = left;
        internal.right = right;
        
        pq.offer(internal);
    }
    
    Map<Character, String> codes = new HashMap<>();
    generateCodes(pq.poll(), "", codes);
    return codes;
}

void generateCodes(Node node, String code, Map<Character, String> codes) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
        codes.put(node.ch, code);
        return;
    }
    generateCodes(node.left, code + "0", codes);
    generateCodes(node.right, code + "1", codes);
}`,
    cpp: `// Huffman Coding
struct Node {
    char ch;
    int freq;
    Node *left, *right;
    
    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}
};

struct Compare {
    bool operator()(Node* l, Node* r) {
        return l->freq > r->freq;
    }
};

void generateCodes(Node* root, string code, map<char, string>& codes) {
    if (!root) return;
    if (!root->left && !root->right) {
        codes[root->ch] = code;
        return;
    }
    generateCodes(root->left, code + "0", codes);
    generateCodes(root->right, code + "1", codes);
}

map<char, string> huffmanCoding(vector<char>& chars, vector<int>& freqs) {
    priority_queue<Node*, vector<Node*>, Compare> pq;
    
    for (size_t i = 0; i < chars.size(); i++) {
        pq.push(new Node(chars[i], freqs[i]));
    }
    
    while (pq.size() > 1) {
        Node* left = pq.top(); pq.pop();
        Node* right = pq.top(); pq.pop();
        
        Node* internal = new Node('$', left->freq + right->freq);
        internal->left = left;
        internal->right = right;
        
        pq.push(internal);
    }
    
    map<char, string> codes;
    generateCodes(pq.top(), "", codes);
    return codes;
}`,
    go: `// Huffman Coding
import "container/heap"

type Node struct {
    char  rune
    freq  int
    left  *Node
    right *Node
}

// Priority Queue Implementation (omitted for brevity)

func huffmanCoding(chars []rune, freqs []int) map[rune]string {
    pq := &PriorityQueue{}
    heap.Init(pq)
    
    for i, ch := range chars {
        heap.Push(pq, &Node{char: ch, freq: freqs[i]})
    }
    
    for pq.Len() > 1 {
        left := heap.Pop(pq).(*Node)
        right := heap.Pop(pq).(*Node)
        
        internal := &Node{
            char: '$', 
            freq: left.freq + right.freq,
            left: left,
            right: right,
        }
        heap.Push(pq, internal)
    }
    
    codes := make(map[rune]string)
    generateCodes(heap.Pop(pq).(*Node), "", codes)
    return codes
}

func generateCodes(node *Node, code string, codes map[rune]string) {
    if node == nil { return }
    if node.left == nil && node.right == nil {
        codes[node.char] = code
        return
    }
    generateCodes(node.left, code+"0", codes)
    generateCodes(node.right, code+"1", codes)
}`
  };

  return (
    <PerspectiveCard color="violet">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-500 border border-violet-500/20">
          <TreeDeciduous size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Huffman Coding</h2>
          <p className="text-slate-400 font-medium">Lossless data compression using greedy trees.</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Concept */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <Minimize2 size={20} className="text-violet-400" /> The Strategy
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Assign shorter binary codes to more frequent characters. Build a binary tree from the bottom up by repeatedly combining the two nodes with the <strong className="text-violet-400">lowest frequency</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 1</div>
              <div className="text-slate-300 text-sm">Create leaf nodes for all chars.</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 2</div>
              <div className="text-slate-300 text-sm">Merge two smallest nodes into one.</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 3</div>
              <div className="text-slate-300 text-sm">Traverse tree to assign 0/1 codes.</div>
            </div>
          </div>
        </div>

        {/* Code */}
        <CodeImplementation 
          languages={huffmanCode}
          color="violet"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}