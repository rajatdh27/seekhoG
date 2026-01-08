"use client";
import { motion } from "framer-motion";

export default function DP1DSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl">
          <span className="text-4xl">📊</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            1D Dynamic Programming
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Problems with single dimensional state
          </p>
        </div>
      </div>

      {/* Problem 1: Climbing Stairs */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-rose-700 dark:text-rose-400 mb-6">
          1️⃣ Climbing Stairs (LeetCode #70)
        </h3>
        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800 mb-6">
          <p className="text-lg text-rose-900 dark:text-rose-100 mb-4">
            You're climbing stairs with n steps. Can climb 1 or 2 steps at a time. How many ways to reach the top?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i] = dp[i-1] + dp[i-2] (same as Fibonacci!)
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`// Tabulation Solution
function climbStairs(n) {
    if (n <= 2) return n;

    const dp = new Array(n + 1);
    dp[1] = 1;  // 1 way to reach step 1
    dp[2] = 2;  // 2 ways to reach step 2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Space Optimized
function climbStairsOptimized(n) {
    if (n <= 2) return n;

    let prev2 = 1, prev1 = 2;

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

// Time: O(n), Space: O(1) ✅`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 2: House Robber */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
          2️⃣ House Robber (LeetCode #198)
        </h3>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Rob houses along street. Can't rob adjacent houses. Maximize stolen amount.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i] = max(dp[i-1], nums[i] + dp[i-2])
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function rob(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        // Either rob current + dp[i-2], or skip current
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}

// Space Optimized
function robOptimized(nums) {
    let prev2 = 0, prev1 = 0;

    for (let num of nums) {
        let curr = Math.max(prev1, num + prev2);
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

// Example: [2,7,9,3,1]
// dp[0] = 2
// dp[1] = max(2, 7) = 7
// dp[2] = max(7, 9+2) = 11
// dp[3] = max(11, 3+7) = 11
// dp[4] = max(11, 1+11) = 12

// Time: O(n), Space: O(1)`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 3: Coin Change */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          3️⃣ Coin Change (LeetCode #322)
        </h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            Given coins of different denominations, find minimum number of coins to make amount.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i] = min(dp[i], dp[i - coin] + 1) for each coin
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;  // 0 coins needed for amount 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example: coins = [1,2,5], amount = 11
// dp[0] = 0
// dp[1] = 1 (1)
// dp[2] = 1 (2)
// dp[3] = 2 (2+1)
// dp[4] = 2 (2+2)
// dp[5] = 1 (5)
// ...
// dp[11] = 3 (5+5+1)

// Time: O(amount × coins), Space: O(amount)`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 4: Longest Increasing Subsequence */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          4️⃣ Longest Increasing Subsequence (LeetCode #300)
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-6">
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            Find length of longest increasing subsequence in array.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recurrence:</strong> dp[i] = max(dp[j] + 1) where nums[j] &lt; nums[i]
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);  // Each element is LIS of length 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example: [10,9,2,5,3,7,101,18]
// dp[0] = 1 (10)
// dp[1] = 1 (9)
// dp[2] = 1 (2)
// dp[3] = 2 (2,5)
// dp[4] = 2 (2,3)
// dp[5] = 3 (2,5,7)
// dp[6] = 4 (2,5,7,101)
// dp[7] = 4 (2,5,7,18)
// Max = 4

// Time: O(n²), Space: O(n)
// Can optimize to O(n log n) with binary search`}</code>
          </pre>
        </div>
      </div>

      {/* Problem 5: Decode Ways */}
      <div>
        <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
          5️⃣ Decode Ways (LeetCode #91)
        </h3>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 mb-6">
          <p className="text-lg text-teal-900 dark:text-teal-100 mb-4">
            Decode string where 'A'=1, 'B'=2, ..., 'Z'=26. Count number of ways to decode.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Example:</strong> "226" → "BZ"(2,26), "VF"(22,6), "BBF"(2,2,6) → 3 ways
          </p>
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{`function numDecodings(s) {
    const n = s.length;
    if (n === 0 || s[0] === '0') return 0;

    const dp = new Array(n + 1);
    dp[0] = 1;  // Empty string
    dp[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= n; i++) {
        // Single digit (1-9)
        if (s[i - 1] !== '0') {
            dp[i] = dp[i - 1];
        }

        // Two digits (10-26)
        const twoDigit = parseInt(s.substring(i - 2, i));
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] = (dp[i] || 0) + dp[i - 2];
        }
    }

    return dp[n] || 0;
}

// Example: "226"
// dp[0] = 1
// dp[1] = 1 (2)
// dp[2] = 2 (2,2) or (22)
// dp[3] = 3 (2,2,6) or (22,6) or (2,26)

// Time: O(n), Space: O(n)`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
