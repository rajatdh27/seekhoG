"use client";
import { motion } from "framer-motion";

export default function DPApproachesSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Memoization vs Tabulation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Two approaches to implement Dynamic Programming
          </p>
        </div>
      </div>

      {/* Approach 1: Memoization (Top-Down) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          1️⃣ Memoization (Top-Down DP)
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Start with original problem, break down recursively, and <strong>cache results</strong> in a memo (HashMap/Array).
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Write recursive solution</div>
            <div>2. Add memo (cache) to store computed values</div>
            <div>3. Check memo before computing</div>
            <div>4. Store result in memo after computing</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`// Example: Fibonacci with Memoization
function fibMemo(n, memo = {}) {
    // Base cases
    if (n <= 1) return n;

    // Check if already computed
    if (memo[n] !== undefined) {
        return memo[n];
    }

    // Compute and store in memo
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

    return memo[n];
}

// Time: O(n) - each subproblem computed once
// Space: O(n) - memo + recursion stack

console.log(fibMemo(50));  // Fast! ⚡

// Example: Climbing Stairs (n steps, can climb 1 or 2 at a time)
function climbStairsMemo(n, memo = {}) {
    if (n <= 2) return n;

    if (memo[n]) return memo[n];

    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);

    return memo[n];
}

// Visualization of memoization:
// fib(5) → compute fib(4) and fib(3)
//   fib(4) → compute fib(3) and fib(2) ← fib(3) already in memo!
//   fib(3) → retrieved from memo ✓`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
              ✅ Advantages
            </h4>
            <div className="space-y-1 text-sm">
              <div>• Easier to write (natural recursion)</div>
              <div>• Intuitive problem decomposition</div>
              <div>• Only computes needed subproblems</div>
              <div>• Good for sparse problems</div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
              ❌ Disadvantages
            </h4>
            <div className="space-y-1 text-sm">
              <div>• Recursion stack overhead</div>
              <div>• Stack overflow for large n</div>
              <div>• Extra space for call stack</div>
              <div>• Harder to optimize space</div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach 2: Tabulation (Bottom-Up) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
          2️⃣ Tabulation (Bottom-Up DP)
        </h3>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Start with base cases, build up iteratively using a <strong>DP table/array</strong>. No recursion!
          </p>
          <div className="space-y-2 text-sm">
            <div>1. Identify base cases</div>
            <div>2. Create DP table (array/matrix)</div>
            <div>3. Fill table iteratively from base cases</div>
            <div>4. Return final result from table</div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
            <code>{`// Example: Fibonacci with Tabulation
function fibTab(n) {
    if (n <= 1) return n;

    // Create DP table
    const dp = new Array(n + 1);

    // Base cases
    dp[0] = 0;
    dp[1] = 1;

    // Fill table bottom-up
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Time: O(n)
// Space: O(n)

// Space Optimized Version (only need last 2 values)
function fibTabOptimized(n) {
    if (n <= 1) return n;

    let prev2 = 0, prev1 = 1;

    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

// Time: O(n)
// Space: O(1) ✅ Optimal!

// Example: Climbing Stairs
function climbStairsTab(n) {
    if (n <= 2) return n;

    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Visualization of tabulation:
// dp[0] = 0
// dp[1] = 1
// dp[2] = dp[1] + dp[0] = 1
// dp[3] = dp[2] + dp[1] = 2
// dp[4] = dp[3] + dp[2] = 3
// dp[5] = dp[4] + dp[3] = 5`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
              ✅ Advantages
            </h4>
            <div className="space-y-1 text-sm">
              <div>• No recursion overhead</div>
              <div>• No stack overflow issues</div>
              <div>• Easier to optimize space</div>
              <div>• Generally faster in practice</div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">
              ❌ Disadvantages
            </h4>
            <div className="space-y-1 text-sm">
              <div>• Harder to write initially</div>
              <div>• Need to find correct order</div>
              <div>• Computes all subproblems</div>
              <div>• Less intuitive</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Steps */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Converting Recursion → Memoization → Tabulation
        </h3>
        <div className="space-y-6">
          {/* Step 1: Recursion */}
          <div>
            <h4 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3">
              Step 1: Start with Recursion (Slow)
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`function minCostClimbingStairs(cost) {
    function dp(i) {
        if (i >= cost.length) return 0;
        return cost[i] + Math.min(dp(i + 1), dp(i + 2));
    }
    return Math.min(dp(0), dp(1));
}
// Time: O(2^n) - Exponential!`}</code>
              </pre>
            </div>
          </div>

          {/* Step 2: Add Memoization */}
          <div>
            <h4 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-3">
              Step 2: Add Memoization (Fast)
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`function minCostClimbingStairsMemo(cost) {
    const memo = {};

    function dp(i) {
        if (i >= cost.length) return 0;
        if (memo[i] !== undefined) return memo[i];  // ← Check memo

        memo[i] = cost[i] + Math.min(dp(i + 1), dp(i + 2));  // ← Store
        return memo[i];
    }

    return Math.min(dp(0), dp(1));
}
// Time: O(n) ✅`}</code>
              </pre>
            </div>
          </div>

          {/* Step 3: Convert to Tabulation */}
          <div>
            <h4 className="text-lg font-bold text-pink-700 dark:text-pink-400 mb-3">
              Step 3: Convert to Tabulation (Optimal)
            </h4>
            <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-slate-100">
                <code>{`function minCostClimbingStairsTab(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);

    dp[n] = 0;  // Base case
    dp[n - 1] = cost[n - 1];  // Base case

    // Fill table backwards
    for (let i = n - 2; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
    }

    return Math.min(dp[0], dp[1]);
}
// Time: O(n), Space: O(n)`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ Memoization vs Tabulation Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900/30">
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Aspect</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Memoization (Top-Down)</th>
                <th className="border border-purple-300 dark:border-purple-700 p-4 text-left">Tabulation (Bottom-Up)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: "Approach",
                  memo: "Recursion + Caching",
                  tab: "Iteration + DP Table",
                },
                {
                  aspect: "Direction",
                  memo: "Top to bottom (original → base)",
                  tab: "Bottom to top (base → original)",
                },
                {
                  aspect: "Implementation",
                  memo: "Easier (natural recursion)",
                  tab: "Harder (find correct order)",
                },
                {
                  aspect: "Space",
                  memo: "O(n) table + O(n) stack",
                  tab: "O(n) table only",
                },
                {
                  aspect: "Performance",
                  memo: "Slightly slower (recursion)",
                  tab: "Slightly faster (no recursion)",
                },
                {
                  aspect: "Space Optimization",
                  memo: "Difficult",
                  tab: "Easy (rolling array)",
                },
                {
                  aspect: "Subproblems",
                  memo: "Only needed ones",
                  tab: "All subproblems",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="border border-purple-300 dark:border-purple-700 p-4 font-bold">
                    {row.aspect}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-xs">
                    {row.memo}
                  </td>
                  <td className="border border-purple-300 dark:border-purple-700 p-4 text-xs">
                    {row.tab}
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
