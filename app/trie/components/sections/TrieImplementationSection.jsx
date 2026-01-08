"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TrieImplementationSection() {
  const [activeTab, setActiveTab] = useState("javascript");

  const languages = [
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "cpp", name: "C++", icon: "⚙️" },
  ];

  const implementations = {
    javascript: `// JavaScript Implementation
class TrieNode {
    constructor() {
        this.children = {};  // Map: char -> TrieNode
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into trie
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

    // Search for exact word
    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    // Check if prefix exists
    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return true;
    }
}

// Usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));     // true
console.log(trie.search("app"));       // true
console.log(trie.search("appl"));      // false
console.log(trie.startsWith("app"));   // true`,

    python: `# Python Implementation
class TrieNode:
    def __init__(self):
        self.children = {}  # Dict: char -> TrieNode
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """Insert a word into trie"""
        node = self.root

        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]

        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        """Search for exact word"""
        node = self.root

        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]

        return node.is_end_of_word

    def starts_with(self, prefix: str) -> bool:
        """Check if prefix exists"""
        node = self.root

        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]

        return True

# Usage
trie = Trie()
trie.insert("apple")
trie.insert("app")
print(trie.search("apple"))      # True
print(trie.search("app"))        # True
print(trie.search("appl"))       # False
print(trie.starts_with("app"))   # True`,

    java: `// Java Implementation
class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;

    public TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into trie
    public void insert(String word) {
        TrieNode node = root;

        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }

        node.isEndOfWord = true;
    }

    // Search for exact word
    public boolean search(String word) {
        TrieNode node = root;

        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return false;
            }
            node = node.children.get(c);
        }

        return node.isEndOfWord;
    }

    // Check if prefix exists
    public boolean startsWith(String prefix) {
        TrieNode node = root;

        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return false;
            }
            node = node.children.get(c);
        }

        return true;
    }
}

// Usage
Trie trie = new Trie();
trie.insert("apple");
trie.insert("app");
System.out.println(trie.search("apple"));      // true
System.out.println(trie.search("app"));        // true
System.out.println(trie.search("appl"));       // false
System.out.println(trie.startsWith("app"));    // true`,

    cpp: `// C++ Implementation
#include <unordered_map>
#include <string>
using namespace std;

class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    bool isEndOfWord;

    TrieNode() {
        isEndOfWord = false;
    }
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() {
        root = new TrieNode();
    }

    // Insert a word into trie
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

    // Search for exact word
    bool search(string word) {
        TrieNode* node = root;

        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }

        return node->isEndOfWord;
    }

    // Check if prefix exists
    bool startsWith(string prefix) {
        TrieNode* node = root;

        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }

        return true;
    }
};

// Usage
Trie* trie = new Trie();
trie->insert("apple");
trie->insert("app");
cout << trie->search("apple") << endl;      // 1 (true)
cout << trie->search("app") << endl;        // 1 (true)
cout << trie->search("appl") << endl;       // 0 (false)
cout << trie->startsWith("app") << endl;    // 1 (true)`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-lime-600 to-green-600 rounded-xl">
          <span className="text-4xl">💻</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Complete Trie Implementation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Full implementation in multiple languages
          </p>
        </div>
      </div>

      {/* Language Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveTab(lang.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === lang.id
                ? "bg-gradient-to-r from-lime-600 to-green-600 text-white shadow-lg"
                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            {lang.icon} {lang.name}
          </button>
        ))}
      </div>

      {/* Code Implementation */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{implementations[activeTab]}</code>
          </pre>
        </div>
      </motion.div>

      {/* Array-based Implementation (Alternative) */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔤 Array-Based Implementation (Lowercase a-z only)
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-6">
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            More space-efficient for fixed alphabet. Uses array of size 26 instead of HashMap.
          </p>
          <div className="space-y-2 text-sm">
            <div>✓ Faster access (array indexing vs hash lookup)</div>
            <div>✓ Fixed space per node (26 pointers)</div>
            <div>✗ Works only for specific character set (a-z)</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Array-based Trie (lowercase a-z only)
class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);  // a-z
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    charToIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            const index = this.charToIndex(char);

            if (!node.children[index]) {
                node.children[index] = new TrieNode();
            }

            node = node.children[index];
        }

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let char of word) {
            const index = this.charToIndex(char);

            if (!node.children[index]) {
                return false;
            }

            node = node.children[index];
        }

        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            const index = this.charToIndex(char);

            if (!node.children[index]) {
                return false;
            }

            node = node.children[index];
        }

        return true;
    }
}

// Space per node: 26 pointers + 1 boolean = O(26) = O(1)
// Total space: O(26 * n * m) where n = words, m = avg length`}</code>
          </pre>
        </div>
      </div>

      {/* Complexity Analysis */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Time & Space Complexity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-lime-100 dark:bg-lime-900/30">
                <th className="border border-lime-300 dark:border-lime-700 p-4 text-left">Operation</th>
                <th className="border border-lime-300 dark:border-lime-700 p-4 text-center">Time Complexity</th>
                <th className="border border-lime-300 dark:border-lime-700 p-4 text-center">Space Complexity</th>
                <th className="border border-lime-300 dark:border-lime-700 p-4 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  op: "Insert",
                  time: "O(m)",
                  space: "O(m)",
                  note: "m = word length. Creates nodes for new chars",
                },
                {
                  op: "Search",
                  time: "O(m)",
                  space: "O(1)",
                  note: "m = word length. No extra space needed",
                },
                {
                  op: "StartsWith",
                  time: "O(m)",
                  space: "O(1)",
                  note: "m = prefix length. No extra space needed",
                },
                {
                  op: "Space (Total)",
                  time: "-",
                  space: "O(ALPHABET * n * m)",
                  note: "n = words, m = avg length, ALPHABET = 26 or size",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-lime-50 dark:hover:bg-lime-900/10">
                  <td className="border border-lime-300 dark:border-lime-700 p-4 font-bold">
                    {row.op}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-4 text-center font-mono text-green-600 dark:text-green-400">
                    {row.time}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-4 text-center font-mono text-blue-600 dark:text-blue-400">
                    {row.space}
                  </td>
                  <td className="border border-lime-300 dark:border-lime-700 p-4 text-xs">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
