"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Search, 
  Type, 
  Maximize2, 
  Grid, 
  Replace, 
  ArrowRight
} from "lucide-react";

export default function TrieApplicationsSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const autocompleteCode = {
    javascript: `class AutocompleteTrie {
    // Standard Trie insert...
    insert(word) { /* ... */ }

    // Find all words starting with prefix
    autocomplete(prefix) {
        let node = this.root;
        // 1. Navigate to end of prefix
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        
        // 2. DFS to collect all words
        const results = [];
        this.dfs(node, prefix, results);
        return results;
    }

    dfs(node, currentWord, results) {
        if (node.isEndOfWord) results.push(currentWord);
        
        for (let char in node.children) {
            this.dfs(node.children[char], currentWord + char, results);
        }
    }
}`,
    python: `class AutocompleteTrie:
    # Standard insert...
    def insert(self, word): pass

    def autocomplete(self, prefix):
        node = self.root
        # 1. Navigate to end of prefix
        for char in prefix:
            if char not in node.children: return []
            node = node.children[char]
            
        # 2. DFS to collect words
        results = []
        self.dfs(node, prefix, results)
        return results
    
    def dfs(self, node, current_word, results):
        if node.is_end_of_word:
            results.append(current_word)
            
        for char, child in node.children.items():
            self.dfs(child, current_word + char, results)`,
    java: `class AutocompleteTrie {
    // Standard insert...
    
    public List<String> autocomplete(String prefix) {
        TrieNode node = root;
        // 1. Navigate to prefix
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) return new ArrayList<>();
            node = node.children.get(c);
        }
        
        // 2. DFS
        List<String> results = new ArrayList<>();
        dfs(node, prefix, results);
        return results;
    }
    
    private void dfs(TrieNode node, String current, List<String> res) {
        if (node.isEndOfWord) res.add(current);
        
        for (Character c : node.children.keySet()) {
            dfs(node.children.get(c), current + c, res);
        }
    }
}`,
    cpp: `// C++ Autocomplete
vector<string> autocomplete(string prefix) {
    TrieNode* node = root;
    for (char c : prefix) {
        if (node->children.find(c) == node->children.end()) return {};
        node = node->children[c];
    }
    
    vector<string> results;
    dfs(node, prefix, results);
    return results;
}

void dfs(TrieNode* node, string current, vector<string>& results) {
    if (node->isEndOfWord) results.push_back(current);
    
    for (auto const& [key, val] : node->children) {
        dfs(val, current + key, results);
    }
}`,
    go: `func (t *Trie) Autocomplete(prefix string) []string {
    node := t.root
    for _, char := range prefix {
        if _, exists := node.children[char]; !exists {
            return []string{}
        }
        node = node.children[char]
    }
    
    var results []string
    var dfs func(*TrieNode, string)
    dfs = func(n *TrieNode, curr string) {
        if n.isEndOfWord {
            results = append(results, curr)
        }
        for char, child := range n.children {
            dfs(child, curr + string(char))
        }
    }
    
    dfs(node, prefix)
    return results
}`
  };

  const wordSearchCode = {
    javascript: `// Word Search II (Backtracking + Trie)
function findWords(board, words) {
    const trie = new Trie();
    words.forEach(w => trie.insert(w));
    
    const rows = board.length, cols = board[0].length;
    const result = new Set();
    
    function dfs(r, c, node, path) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        
        const char = board[r][c];
        if (char === '#' || !node.children[char]) return;
        
        node = node.children[char];
        path += char;
        if (node.isEndOfWord) result.add(path);
        
        board[r][c] = '#'; // Visit
        
        // Explore neighbors
        dfs(r+1, c, node, path); dfs(r-1, c, node, path);
        dfs(r, c+1, node, path); dfs(r, c-1, node, path);
        
        board[r][c] = char; // Backtrack
    }
    
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            dfs(r, c, trie.root, "");
        }
    }
    return Array.from(result);
}`,
    python: `# Word Search II
def findWords(board, words):
    trie = Trie()
    for w in words: trie.insert(w)
    
    res = set()
    rows, cols = len(board), len(board[0])
    
    def dfs(r, c, node, path):
        if r < 0 or r >= rows or c < 0 or c >= cols: return
        char = board[r][c]
        if char == '#' or char not in node.children: return
        
        node = node.children[char]
        path += char
        if node.is_end_of_word: res.add(path)
        
        board[r][c] = '#' # Visit
        for dr, dc in [(0,1), (0,-1), (1,0), (-1,0)]:
            dfs(r+dr, c+dc, node, path)
        board[r][c] = char # Backtrack
        
    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie.root, "")
    return list(res)`,
    java: `// Word Search II
public List<String> findWords(char[][] board, String[] words) {
    Trie trie = new Trie();
    for (String w : words) trie.insert(w);
    
    Set<String> res = new HashSet<>();
    for (int r = 0; r < board.length; r++) {
        for (int c = 0; c < board[0].length; c++) {
            dfs(board, r, c, trie.root, "", res);
        }
    }
    return new ArrayList<>(res);
}

void dfs(char[][] board, int r, int c, TrieNode node, String path, Set<String> res) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;
    char ch = board[r][c];
    if (ch == '#' || !node.children.containsKey(ch)) return;
    
    node = node.children.get(ch);
    path += ch;
    if (node.isEndOfWord) res.add(path);
    
    board[r][c] = '#'; // Visit
    dfs(board, r+1, c, node, path, res); dfs(board, r-1, c, node, path, res);
    dfs(board, r, c+1, node, path, res); dfs(board, r, c-1, node, path, res);
    board[r][c] = ch; // Backtrack
}`,
    cpp: `// Word Search II
void dfs(vector<vector<char>>& board, int r, int c, TrieNode* node, string path, set<string>& res) {
    if (r < 0 || r >= board.size() || c < 0 || c >= board[0].size()) return;
    char ch = board[r][c];
    if (ch == '#' || node->children.find(ch) == node->children.end()) return;
    
    node = node->children[ch];
    path += ch;
    if (node->isEndOfWord) res.insert(path);
    
    board[r][c] = '#';
    int dirs[] = {0, 1, 0, -1, 0};
    for(int i=0; i<4; i++) dfs(board, r+dirs[i], c+dirs[i+1], node, path, res);
    board[r][c] = ch;
}`,
    go: `// Word Search II
func findWords(board [][]byte, words []string) []string {
    trie := NewTrie()
    for _, w := range words { trie.Insert(w) }
    
    res := make(map[string]bool)
    rows, cols := len(board), len(board[0])
    
    var dfs func(int, int, *TrieNode, string)
    dfs = func(r, c int, node *TrieNode, path string) {
        if r < 0 || r >= rows || c < 0 || c >= cols { return }
        char := board[r][c]
        if char == '#' { return }
        if _, ok := node.children[rune(char)]; !ok { return }
        
        node = node.children[rune(char)]
        path += string(char)
        if node.isEndOfWord { res[path] = true }
        
        board[r][c] = '#'
        dfs(r+1, c, node, path); dfs(r-1, c, node, path)
        dfs(r, c+1, node, path); dfs(r, c-1, node, path)
        board[r][c] = char
    }
    
    for r := 0; r < rows; r++ {
        for c := 0; c < cols; c++ {
            dfs(r, c, trie.root, "")
        }
    }
    // convert map keys to slice...
}`
  };

  const moreUseCases = [
    { 
      title: "Longest Prefix Matching", 
      description: "Used in IP routing to forward packets to the most specific network prefix.", 
      icon: Maximize2, 
      color: "orange" 
    },
    { 
      title: "Spell Checker", 
      description: "Store valid dictionary words. Suggest words with small edit distance if exact match fails.", 
      icon: Replace, 
      color: "amber" 
    }
  ];

  return (
    <PerspectiveCard color="orange">
      <SectionHeader 
        title="Real-World Applications" 
        description="From search engines to spell checkers."
        icon={Search} 
        color="orange" 
      />

      <div className="space-y-12">
        {/* Application 1: Autocomplete */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <SectionHeader 
            title="Autocomplete System" 
            icon={Type} 
            color="orange" 
            className="mb-6"
          />
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The most common use of Trie. When a user types a prefix, we traverse to that node and perform a DFS to find all complete words in that subtree.
          </p>
          <CodeImplementation 
            languages={autocompleteCode}
            color="orange"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Application 2: Word Search II */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <SectionHeader 
            title="Boggle / Word Search II" 
            icon={Grid} 
            color="amber" 
            className="mb-6"
          />
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Finding valid dictionary words in a grid of characters. We use a Trie to prune the DFS search space—if a prefix doesn't exist in the Trie, we stop searching that path immediately.
          </p>
          <CodeImplementation 
            languages={wordSearchCode}
            color="amber"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Other Applications Grid */}
        <div>
          <SectionHeader 
            title="More Use Cases" 
            icon={ArrowRight} 
            color="orange" 
            className="mb-6"
          />
          <ConceptGrid items={moreUseCases} columns={2} />
        </div>
      </div>
    </PerspectiveCard>
  );
}