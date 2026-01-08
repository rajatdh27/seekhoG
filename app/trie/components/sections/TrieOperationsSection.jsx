"use client";
import { motion } from "framer-motion";

export default function TrieOperationsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
          <span className="text-4xl">⚙️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Trie Operations
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Core operations: Insert, Search, and StartsWith
          </p>
        </div>
      </div>

      {/* Operation 1: Insert */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6">
          1️⃣ Insert Operation
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-6">
          <p className="text-lg text-green-900 dark:text-green-100 mb-4">
            Add a word to the trie by creating nodes for each character along the path.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Start from root</div>
            <div>2. For each character, check if child node exists</div>
            <div>3. If not, create new node</div>
            <div>4. Move to child node</div>
            <div>5. Mark last node as end of word</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`insert(word) {
    let node = this.root;

    for (let char of word) {
        // If child doesn't exist, create it
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }

        // Move to child
        node = node.children[char];
    }

    // Mark end of word
    node.isEndOfWord = true;
}

// Example: Insert "cat"
// root -> c -> a -> t (isEndOfWord = true)

// Time: O(m) where m = word length
// Space: O(m) in worst case (all new nodes)`}</code>
          </pre>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">
            Step-by-Step Example: Insert "cat"
          </h4>
          <div className="space-y-2 font-mono text-sm">
            <div>1. Start at root</div>
            <div>2. Check 'c': not found → create node for 'c'</div>
            <div>3. Move to 'c', check 'a': not found → create node for 'a'</div>
            <div>4. Move to 'a', check 't': not found → create node for 't'</div>
            <div>5. Mark 't' node as end of word ✓</div>
          </div>
        </div>
      </div>

      {/* Operation 2: Search */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          2️⃣ Search Operation
        </h3>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-6">
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            Check if a complete word exists in the trie. Must reach end of word.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Start from root</div>
            <div>2. For each character, check if child exists</div>
            <div>3. If any character missing → return false</div>
            <div>4. After all characters, check isEndOfWord flag</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`search(word) {
    let node = this.root;

    for (let char of word) {
        // If character path doesn't exist
        if (!node.children[char]) {
            return false;  // Word not found
        }

        // Move to child
        node = node.children[char];
    }

    // Check if this is end of a word
    return node.isEndOfWord;
}

// Example: Search "car" in trie with ["cat", "car", "card"]
// root -> c -> a -> r (isEndOfWord = true) → returns true

// Example: Search "ca" in same trie
// root -> c -> a (isEndOfWord = false) → returns false

// Time: O(m) where m = word length
// Space: O(1)`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">
              ✅ Found Example
            </h4>
            <p className="text-sm font-mono">
              search("cat") → true<br/>
              (all chars exist AND isEndOfWord = true)
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
              ❌ Not Found Examples
            </h4>
            <p className="text-sm font-mono">
              search("ca") → false (prefix only)<br/>
              search("cats") → false (extra char)
            </p>
          </div>
        </div>
      </div>

      {/* Operation 3: StartsWith (Prefix Search) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
          3️⃣ StartsWith (Prefix Search)
        </h3>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 mb-6">
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Check if any word in trie starts with given prefix. No need for isEndOfWord check.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Start from root</div>
            <div>2. For each character in prefix, check if child exists</div>
            <div>3. If all characters found → return true</div>
            <div>4. Don't check isEndOfWord flag (prefix only)</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`startsWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
        // If character path doesn't exist
        if (!node.children[char]) {
            return false;  // No word with this prefix
        }

        // Move to child
        node = node.children[char];
    }

    // All prefix characters found
    return true;
}

// Example: startsWith("ca") in trie with ["cat", "car", "card"]
// root -> c -> a → returns true (prefix exists)

// Example: startsWith("dog")
// root -> (no 'd' child) → returns false

// Difference from search():
// - search("ca") → false (not a complete word)
// - startsWith("ca") → true (valid prefix)

// Time: O(m) where m = prefix length
// Space: O(1)`}</code>
          </pre>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">
            🔍 Search vs StartsWith
          </h4>
          <div className="space-y-2 text-sm">
            <div><strong>search("cat")</strong> → checks for complete word "cat"</div>
            <div><strong>startsWith("cat")</strong> → checks if any word starts with "cat"</div>
            <div className="mt-3 pt-3 border-t border-teal-300 dark:border-teal-700">
              Example with trie ["cat", "catalog"]:
              <div className="ml-4 mt-2 space-y-1">
                <div>search("cat") → ✅ true (complete word)</div>
                <div>search("catal") → ❌ false (not complete word)</div>
                <div>startsWith("catal") → ✅ true (prefix of "catalog")</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Operation (Bonus) */}
      <div>
        <h3 className="text-2xl font-bold text-lime-700 dark:text-lime-400 mb-6">
          4️⃣ Delete Operation (Advanced)
        </h3>
        <div className="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-xl border border-lime-200 dark:border-lime-800 mb-6">
          <p className="text-lg text-lime-900 dark:text-lime-100 mb-4">
            Remove a word from trie. Must handle shared prefixes carefully.
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Search for the word</div>
            <div>2. If found, unmark isEndOfWord</div>
            <div>3. Delete nodes only if they have no children and aren't part of other words</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`delete(word) {
    const deleteHelper = (node, word, index) => {
        if (index === word.length) {
            // Reached end of word
            if (!node.isEndOfWord) {
                return false;  // Word doesn't exist
            }

            node.isEndOfWord = false;

            // Delete node if it has no children
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        const childNode = node.children[char];

        if (!childNode) {
            return false;  // Word doesn't exist
        }

        const shouldDeleteChild = deleteHelper(childNode, word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];

            // Delete current node if:
            // 1. Not end of another word
            // 2. Has no other children
            return !node.isEndOfWord && Object.keys(node.children).length === 0;
        }

        return false;
    };

    deleteHelper(this.root, word, 0);
}

// Time: O(m) where m = word length
// Space: O(m) for recursion stack`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
