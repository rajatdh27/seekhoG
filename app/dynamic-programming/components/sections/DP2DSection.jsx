"use client";
import { motion } from "framer-motion";

export default function DP2DSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🎯</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            2D Dynamic Programming
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Problems with two dimensional state (matrix DP)
          </p>
        </div>
      </div>

      {/* Problem 1: Unique Paths */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-6">
          1️⃣ Unique Paths (LeetCode #62)
        </h3>
        <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800 mb-6">
          <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
            Count paths in m×n grid from top-left to bottom-right (only right/down moves).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i][j] = dp[i-1][j] + dp[i][j-1]
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    // Base cases: first row and column all have 1 path
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

// Example: 3×7 grid
// 1  1  1  1  1  1  1
// 1  2  3  4  5  6  7
// 1  3  6 10 15 21 28  ← answer

// Space Optimized: O(n)
function uniquePathsOptimized(m, n) {
    const dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];
}

// Time: O(m×n), Space: O(n)`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 2: Longest Common Subsequence */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          2️⃣ Longest Common Subsequence (LeetCode #1143)
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Find length of longest subsequence common to both strings.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> "abcde", "ace" → 3 (ace)
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Example: "abcde", "ace"
//     ""  a  c  e
// ""   0  0  0  0
// a    0  1  1  1
// b    0  1  1  1
// c    0  1  2  2
// d    0  1  2  2
// e    0  1  2  3  ← answer

// Time: O(m×n), Space: O(m×n)`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 3: 0/1 Knapsack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
          3️⃣ 0/1 Knapsack Problem
        </h3>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Given weights & values, maximize value within capacity (can't take fraction of item).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i][w] = max(dp[i-1][w], values[i] + dp[i-1][w-weights[i]])
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Either take item or skip
                dp[i][w] = Math.max(
                    dp[i - 1][w],  // Skip
                    values[i - 1] + dp[i - 1][w - weights[i - 1]]  // Take
                );
            } else {
                dp[i][w] = dp[i - 1][w];  // Can't take (too heavy)
            }
        }
    }

    return dp[n][capacity];
}

// Example: weights=[1,3,4,5], values=[1,4,5,7], capacity=7
// Answer: 9 (take items 2 and 3: values 4+5)

// Time: O(n×capacity), Space: O(n×capacity)`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 4: Edit Distance */}
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
          4️⃣ Edit Distance (LeetCode #72)
        </h3>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-6">
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            Minimum operations to convert word1 to word2 (insert, delete, replace).
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> "horse" → "ros" = 3 operations
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;  // Delete all
    for (let j = 0; j <= n; j++) dp[0][j] = j;  // Insert all

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];  // No operation needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],      // Delete
                    dp[i][j - 1],      // Insert
                    dp[i - 1][j - 1]   // Replace
                );
            }
        }
    }

    return dp[m][n];
}

// Example: "horse" → "ros"
//       ""  r  o  s
// ""     0  1  2  3
// h      1  1  2  3
// o      2  2  1  2
// r      3  2  2  2
// s      4  3  3  2
// e      5  4  4  3  ← answer

// Time: O(m×n), Space: O(m×n)`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
