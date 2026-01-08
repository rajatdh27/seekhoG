"use client";
import { motion } from "framer-motion";

export default function DPPatternsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🎨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Common DP Patterns
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Recognize and apply these patterns to solve DP problems
          </p>
        </div>
      </div>

      {/* Pattern 1: Fibonacci Pattern */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-6">
          1️⃣ Fibonacci Pattern
        </h3>
        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-6 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800 mb-6">
          <p className="text-lg text-fuchsia-900 dark:text-fuchsia-100 mb-4">
            Current state depends on previous 1-2 states. <strong>dp[i] = f(dp[i-1], dp[i-2])</strong>
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Problems:</strong> Fibonacci, Climbing Stairs, House Robber, Decode Ways
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Template for Fibonacci Pattern
function fibonacciPattern(n) {
    const dp = new Array(n + 1);
    dp[0] = baseCase0;
    dp[1] = baseCase1;

    for (let i = 2; i <= n; i++) {
        dp[i] = someFunction(dp[i - 1], dp[i - 2]);
    }

    return dp[n];
}

// Space Optimization: Only need last 2 values
function fibonacciPatternOptimized(n) {
    let prev2 = baseCase0, prev1 = baseCase1;

    for (let i = 2; i <= n; i++) {
        let curr = someFunction(prev1, prev2);
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 2: Bounded Knapsack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
          2️⃣ Bounded Knapsack Pattern
        </h3>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Make choices with constraints (capacity, budget). <strong>Take or skip</strong> decision.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Problems:</strong> 0/1 Knapsack, Partition Equal Subset Sum, Target Sum
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Template for Knapsack Pattern
function knapsackPattern(items, capacity) {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (items[i - 1].weight <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],  // Skip item
                    items[i - 1].value + dp[i - 1][w - items[i - 1].weight]  // Take
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 3: Unbounded Knapsack */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-rose-700 dark:text-rose-400 mb-6">
          3️⃣ Unbounded Knapsack Pattern
        </h3>
        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800 mb-6">
          <p className="text-lg text-rose-900 dark:text-rose-100 mb-4">
            Unlimited supply of items. Can use same item multiple times.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Problems:</strong> Coin Change, Rod Cutting, Minimum Cost For Tickets
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Template for Unbounded Knapsack
function unboundedKnapsack(items, capacity) {
    const dp = new Array(capacity + 1).fill(0);

    for (let w = 0; w <= capacity; w++) {
        for (let item of items) {
            if (item.weight <= w) {
                dp[w] = Math.max(dp[w], item.value + dp[w - item.weight]);
            }
        }
    }

    return dp[capacity];
}

// Coin Change Example
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 4: String DP */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          4️⃣ String DP Pattern
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Compare two strings or parts of strings. Usually 2D DP.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Problems:</strong> LCS, Edit Distance, Distinct Subsequences, Regular Expression
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Template for String DP
function stringDP(str1, str2) {
    const m = str1.length, n = str2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Initialize base cases
    for (let i = 0; i <= m; i++) dp[i][0] = initialize(i);
    for (let j = 0; j <= n; j++) dp[0][j] = initialize(j);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + matchScore;
            } else {
                dp[i][j] = someFunction(
                    dp[i - 1][j],     // Skip char from str1
                    dp[i][j - 1],     // Skip char from str2
                    dp[i - 1][j - 1]  // Skip both
                );
            }
        }
    }

    return dp[m][n];
}`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern 5: Grid Path */}
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
          5️⃣ Grid/Path DP Pattern
        </h3>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-6">
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            Navigate grid, count paths, or find min/max path sum.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Problems:</strong> Unique Paths, Minimum Path Sum, Triangle, Dungeon Game
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Template for Grid Path DP
function gridPathDP(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    // Initialize first cell
    dp[0][0] = grid[0][0];

    // Initialize first row and column
    for (let i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + grid[i][0];
    for (let j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + grid[0][j];

    // Fill rest of table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + someFunction(
                dp[i - 1][j],  // From top
                dp[i][j - 1]   // From left
            );
        }
    }

    return dp[m - 1][n - 1];
}

// For unique paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]
// For min path sum: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
