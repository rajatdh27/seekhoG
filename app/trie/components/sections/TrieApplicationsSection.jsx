"use client";
import { motion } from "framer-motion";

export default function TrieApplicationsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🎯</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Trie Applications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Real-world use cases and implementations
          </p>
        </div>
      </div>

      {/* Application 1: Autocomplete System */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          1️⃣ Autocomplete System
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-6">
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            Find all words that start with a given prefix. Used in search engines, IDEs, and text editors.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Approach:</strong> Navigate to prefix node, then DFS to collect all complete words
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`class AutocompleteTrie {
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

    // Find all words with given prefix
    autocomplete(prefix) {
        let node = this.root;

        // Navigate to prefix node
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];  // No words with this prefix
            }
            node = node.children[char];
        }

        // DFS from prefix node to find all words
        const results = [];
        this.dfs(node, prefix, results);
        return results;
    }

    dfs(node, currentWord, results) {
        if (node.isEndOfWord) {
            results.push(currentWord);
        }

        for (let char in node.children) {
            this.dfs(node.children[char], currentWord + char, results);
        }
    }
}

// Example Usage
const trie = new AutocompleteTrie();
const words = ["apple", "app", "application", "apply", "banana", "band"];

words.forEach(word => trie.insert(word));

console.log(trie.autocomplete("app"));
// Output: ["app", "apple", "application", "apply"]

console.log(trie.autocomplete("ban"));
// Output: ["banana", "band"]

// Time: O(p + n) where p = prefix length, n = number of nodes in subtree
// Space: O(n) for recursion stack`}</code>
          </pre>
        </div>
      </div>

      {/* Application 2: Word Dictionary (Add & Search with Wildcards) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
          2️⃣ Word Dictionary with Wildcards
        </h3>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 mb-6">
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Support searching with wildcard '.' that matches any character. LeetCode Problem #211.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> search("b.d") matches "bad", "bed", "bid"
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
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
        return this.searchHelper(word, 0, this.root);
    }

    searchHelper(word, index, node) {
        // Base case: reached end of word
        if (index === word.length) {
            return node.isEndOfWord;
        }

        const char = word[index];

        if (char === '.') {
            // Wildcard: try all children
            for (let childChar in node.children) {
                if (this.searchHelper(word, index + 1, node.children[childChar])) {
                    return true;
                }
            }
            return false;
        } else {
            // Regular character
            if (!node.children[char]) {
                return false;
            }
            return this.searchHelper(word, index + 1, node.children[char]);
        }
    }
}

// Example Usage
const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");

console.log(dict.search("pad"));    // false
console.log(dict.search("bad"));    // true
console.log(dict.search(".ad"));    // true (matches bad, dad, mad)
console.log(dict.search("b.."));    // true (matches bad)
console.log(dict.search("b.d"));    // true (matches bad)

// Time: O(m) for addWord, O(26^m) worst case for search with wildcards
// Space: O(m) for recursion stack`}</code>
          </pre>
        </div>
      </div>

      {/* Application 3: Longest Word with All Prefixes */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">
          3️⃣ Longest Word with All Prefixes
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-6">
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            Find longest word where all its prefixes exist in trie. LeetCode Problem #720.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> ["w", "wo", "wor", "worl", "world"] → "world" (all prefixes exist)
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function longestWord(words) {
    const trie = new Trie();

    // Insert all words
    for (let word of words) {
        trie.insert(word);
    }

    let longest = "";

    // DFS to find longest word with all prefixes
    function dfs(node, currentWord) {
        // Update longest if current word is valid and longer
        if (currentWord.length > longest.length ||
            (currentWord.length === longest.length && currentWord < longest)) {
            longest = currentWord;
        }

        // Explore children (only if they form complete words)
        for (let char in node.children) {
            const childNode = node.children[char];

            // Only continue if child is end of word (prefix exists)
            if (childNode.isEndOfWord) {
                dfs(childNode, currentWord + char);
            }
        }
    }

    dfs(trie.root, "");
    return longest;
}

// Example
const words = ["w", "wo", "wor", "worl", "world", "a", "banana"];
console.log(longestWord(words));  // "world"

// Explanation:
// "world" has all prefixes: w, wo, wor, worl
// "banana" is longer but missing prefixes: b, ba, ban, bana

// Time: O(n * m) where n = words, m = avg length
// Space: O(n * m) for trie`}</code>
          </pre>
        </div>
      </div>

      {/* Application 4: Word Search II (2D Grid) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-lime-700 dark:text-lime-400 mb-6">
          4️⃣ Word Search II (2D Grid)
        </h3>
        <div className="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-xl border border-lime-200 dark:border-lime-800 mb-6">
          <p className="text-lg text-lime-900 dark:text-lime-100 mb-4">
            Find all words from dictionary in 2D board. LeetCode Problem #212.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Approach:</strong> Build trie from dictionary, then DFS from each cell
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function findWords(board, words) {
    // Build trie from dictionary
    const trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    const result = new Set();
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, node, path) {
        // Out of bounds or already visited
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }

        const char = board[row][col];

        if (char === '#' || !node.children[char]) {
            return;
        }

        // Move to child node
        node = node.children[char];
        path += char;

        // Found a word
        if (node.isEndOfWord) {
            result.add(path);
        }

        // Mark as visited
        board[row][col] = '#';

        // Explore 4 directions
        dfs(row + 1, col, node, path);
        dfs(row - 1, col, node, path);
        dfs(row, col + 1, node, path);
        dfs(row, col - 1, node, path);

        // Unmark
        board[row][col] = char;
    }

    // Start DFS from each cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, trie.root, "");
        }
    }

    return Array.from(result);
}

// Example
const board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
];
const words = ["oath","pea","eat","rain"];

console.log(findWords(board, words));
// Output: ["oath", "eat"]

// Time: O(m * n * 4^L) where L = max word length
// Space: O(w * L) where w = number of words`}</code>
          </pre>
        </div>
      </div>

      {/* Application 5: Replace Words (Word Root) */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-6">
          5️⃣ Replace Words with Roots
        </h3>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            Replace words with shortest root from dictionary. LeetCode Problem #648.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> roots=["cat","bat"], sentence="the cattle was rattled" → "the cat was rattled"
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function replaceWords(dictionary, sentence) {
    // Build trie from roots
    const trie = new Trie();
    for (let root of dictionary) {
        trie.insert(root);
    }

    // Find shortest root for a word
    function findRoot(word) {
        let node = trie.root;
        let prefix = "";

        for (let char of word) {
            if (!node.children[char]) {
                return word;  // No root found, return original
            }

            prefix += char;
            node = node.children[char];

            // Found a root
            if (node.isEndOfWord) {
                return prefix;
            }
        }

        return word;  // No root found
    }

    // Replace each word with its root
    const words = sentence.split(' ');
    const result = words.map(word => findRoot(word));

    return result.join(' ');
}

// Example
const dictionary = ["cat", "bat", "rat"];
const sentence = "the cattle was rattled by the battery";

console.log(replaceWords(dictionary, sentence));
// Output: "the cat was rat by the bat"

// Time: O(d + n * m) where d = dictionary size, n = words, m = avg length
// Space: O(d) for trie`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
