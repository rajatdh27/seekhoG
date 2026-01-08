"use client";
import { motion } from "framer-motion";

export default function TriePatternsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🎨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Common Trie Patterns
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Master these patterns to solve trie problems efficiently
          </p>
        </div>
      </div>

      {/* Pattern 1: Prefix Matching */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
          1️⃣ Prefix Matching Pattern
        </h3>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 mb-6">
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Navigate to prefix node, then perform action (count, collect, search).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Autocomplete, count words with prefix, longest prefix
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Count words with given prefix
countWordsWithPrefix(prefix) {
    let node = this.root;

    // Navigate to prefix node
    for (let char of prefix) {
        if (!node.children[char]) {
            return 0;
        }
        node = node.children[char];
    }

    // Count all words in subtree
    return this.countWords(node);
}

countWords(node) {
    let count = node.isEndOfWord ? 1 : 0;

    for (let char in node.children) {
        count += this.countWords(node.children[char]);
    }

    return count;
}

// Example: Count words starting with "app"
// trie has: ["apple", "app", "application", "apply", "banana"]
// countWordsWithPrefix("app") → 4

// Time: O(p + n) where p = prefix length, n = nodes in subtree
// Space: O(h) for recursion, h = height

// Problems:
// - Autocomplete suggestions
// - Count words with prefix
// - Longest common prefix`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 2: DFS/BFS on Trie */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-6">
          2️⃣ DFS/BFS Traversal Pattern
        </h3>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mb-6">
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            Traverse trie to collect all words, find patterns, or perform operations.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Get all words, lexicographic sorting, pattern matching
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Get all words in lexicographic order (DFS)
getAllWords() {
    const words = [];
    this.dfs(this.root, "", words);
    return words;
}

dfs(node, currentWord, words) {
    if (node.isEndOfWord) {
        words.push(currentWord);
    }

    // Traverse children in order (lexicographic)
    for (let char in node.children) {
        this.dfs(node.children[char], currentWord + char, words);
    }
}

// BFS approach (level-order)
getAllWordsBFS() {
    const words = [];
    const queue = [{node: this.root, word: ""}];

    while (queue.length > 0) {
        const {node, word} = queue.shift();

        if (node.isEndOfWord) {
            words.push(word);
        }

        for (let char in node.children) {
            queue.push({
                node: node.children[char],
                word: word + char
            });
        }
    }

    return words;
}

// Problems:
// - Lexicographic sorting of strings
// - Find all words in trie
// - Pattern matching with wildcards`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 3: Backtracking with Trie */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          3️⃣ Backtracking Pattern
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-6">
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            Explore paths while marking visited, then backtrack. Used in grid problems.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Word Search, Boggle, grid exploration
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Boggle: Find all words in grid
function findWordsInGrid(grid, dictionary) {
    const trie = buildTrie(dictionary);
    const result = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    function backtrack(row, col, node, path) {
        // Out of bounds or visited
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }

        const char = grid[row][col];
        if (char === '#' || !node.children[char]) {
            return;
        }

        // Move to child
        node = node.children[char];
        path += char;

        // Found word
        if (node.isEndOfWord) {
            result.add(path);
        }

        // Mark visited
        const temp = grid[row][col];
        grid[row][col] = '#';

        // Explore 4 directions
        const dirs = [[0,1], [0,-1], [1,0], [-1,0]];
        for (let [dr, dc] of dirs) {
            backtrack(row + dr, col + dc, node, path);
        }

        // Backtrack (unmark)
        grid[row][col] = temp;
    }

    // Try starting from each cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            backtrack(i, j, trie.root, "");
        }
    }

    return Array.from(result);
}

// Key points:
// 1. Mark cell as visited before exploring
// 2. Unmark after exploring (backtrack)
// 3. Use trie to prune invalid paths early

// Problems:
// - Word Search II (LeetCode 212)
// - Boggle Game
// - Crossword Puzzle`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 4: Trie with Frequency/Count */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">
          4️⃣ Trie with Frequency Pattern
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-6">
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            Store additional data in nodes (frequency, count, score) for weighted operations.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Top K frequent words, weighted autocomplete, ranking
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Trie node with frequency
class TrieNodeWithFreq {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.frequency = 0;  // How many times inserted
    }
}

class TrieWithFrequency {
    constructor() {
        this.root = new TrieNodeWithFreq();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNodeWithFreq();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
        node.frequency++;
    }

    // Get top K frequent words with prefix
    topKWithPrefix(prefix, k) {
        let node = this.root;

        // Navigate to prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }

        // Collect all words with frequencies
        const words = [];
        this.collectWords(node, prefix, words);

        // Sort by frequency and return top K
        words.sort((a, b) => b.freq - a.freq);
        return words.slice(0, k).map(w => w.word);
    }

    collectWords(node, currentWord, words) {
        if (node.isEndOfWord) {
            words.push({word: currentWord, freq: node.frequency});
        }

        for (let char in node.children) {
            this.collectWords(
                node.children[char],
                currentWord + char,
                words
            );
        }
    }
}

// Example: Search autocomplete with popularity
const trie = new TrieWithFrequency();
trie.insert("apple");  // freq = 1
trie.insert("apple");  // freq = 2
trie.insert("app");    // freq = 1
trie.insert("apply");  // freq = 1

console.log(trie.topKWithPrefix("app", 2));
// Output: ["apple", "app"] (apple has higher frequency)

// Problems:
// - Top K Frequent Words
// - Autocomplete with popularity
// - Search Suggestions System (LeetCode 1268)`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 5: Trie + DP */}
      <div>
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          5️⃣ Trie + Dynamic Programming Pattern
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Combine trie with DP for word break, concatenation, and partition problems.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>When to use:</strong> Word break, concatenated words, string partition
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Word Break with Trie
function wordBreak(s, wordDict) {
    const trie = new Trie();
    for (let word of wordDict) {
        trie.insert(word);
    }

    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;  // Empty string

    for (let i = 0; i < n; i++) {
        if (!dp[i]) continue;

        let node = trie.root;

        // Try to match words starting at position i
        for (let j = i; j < n; j++) {
            const char = s[j];

            if (!node.children[char]) {
                break;  // No word starts with this prefix
            }

            node = node.children[char];

            // Found a word
            if (node.isEndOfWord) {
                dp[j + 1] = true;
            }
        }
    }

    return dp[n];
}

// Example
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));  // true

// Concatenated Words (harder)
function findAllConcatenatedWords(words) {
    const trie = new Trie();
    const result = [];

    // Sort by length, insert shorter words first
    words.sort((a, b) => a.length - b.length);

    for (let word of words) {
        if (canForm(word, trie)) {
            result.push(word);
        }
        trie.insert(word);
    }

    return result;
}

function canForm(word, trie) {
    const n = word.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        if (!dp[i]) continue;

        let node = trie.root;
        for (let j = i; j < n; j++) {
            if (!node.children[word[j]]) break;
            node = node.children[word[j]];
            if (node.isEndOfWord && j < n - 1) {
                dp[j + 1] = true;
            }
        }
    }

    return dp[n];
}

// Problems:
// - Word Break (LeetCode 139)
// - Word Break II (LeetCode 140)
// - Concatenated Words (LeetCode 472)`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
