"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  GitBranch, 
  TrendingUp, 
  Coins, 
  Home, 
  ArrowRight 
} from "lucide-react";

export default function DP1DSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const climbingStairsCode = {
    javascript: `// Climbing Stairs: 1D DP
function climbStairs(n) {
    if (n <= 2) return n;
    
    // 1. Initialize State
    let prev2 = 1; // n=1
    let prev1 = 2; // n=2
    
    // 2. Iterate
    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}
// Space: O(1)`,
    python: `# Climbing Stairs: 1D DP
def climb_stairs(n):
    if n <= 2: return n
    
    # 1. Initialize State
    prev2, prev1 = 1, 2
    
    # 2. Iterate
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2
        
    return prev1
# Space: O(1)`,
    java: `// Climbing Stairs: 1D DP
public int climbStairs(int n) {
    if (n <= 2) return n;
    
    // 1. Initialize State
    int prev2 = 1;
    int prev1 = 2;
    
    // 2. Iterate
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}`,
    cpp: `// Climbing Stairs: 1D DP
int climbStairs(int n) {
    if (n <= 2) return n;
    
    int prev2 = 1;
    int prev1 = 2;
    
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}`,
    go: `// Climbing Stairs: 1D DP
func climbStairs(n int) int {
    if n <= 2 {
        return n
    }
    
    prev2, prev1 := 1, 2
    
    for i := 3; i <= n; i++ {
        curr := prev1 + prev2
        prev2 = prev1
        prev1 = curr
    }
    
    return prev1
}`
  };

  const houseRobberCode = {
    javascript: `// House Robber
function rob(nums) {
    if (nums.length === 0) return 0;
    
    let prev2 = 0;
    let prev1 = 0;
    
    for (let num of nums) {
        let curr = Math.max(prev1, num + prev2);
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}`,
    python: `# House Robber
def rob(nums):
    prev2, prev1 = 0, 0
    
    for num in nums:
        curr = max(prev1, num + prev2)
        prev2 = prev1
        prev1 = curr
        
    return prev1`,
    java: `// House Robber
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    int prev2 = 0, prev1 = 0;
    
    for (int num : nums) {
        int curr = Math.max(prev1, num + prev2);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
    cpp: `// House Robber
int rob(vector<int>& nums) {
    int prev2 = 0, prev1 = 0;
    
    for (int num : nums) {
        int curr = max(prev1, num + prev2);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
    go: `// House Robber
func rob(nums []int) int {
    prev2, prev1 := 0, 0
    
    for _, num := range nums {
        curr := max(prev1, num + prev2)
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}

func max(a, b int) int {
    if a > b { return a }
    return b
}`
  };

  const coinChangeCode = {
    javascript: `// Coin Change (Min coins)
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
}`,
    python: `# Coin Change (Min coins)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
                
    return dp[amount] if dp[amount] != float('inf') else -1`,
    java: `// Coin Change (Min coins)
import java.util.Arrays;

public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
    cpp: `// Coin Change (Min coins)
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
    go: `// Coin Change (Min coins)
func coinChange(coins []int, amount int) int {
    dp := make([]int, amount + 1)
    for i := range dp {
        dp[i] = amount + 1
    }
    dp[0] = 0
    
    for i := 1; i <= amount; i++ {
        for _, coin := range coins {
            if i >= coin {
                if dp[i-coin]+1 < dp[i] {
                    dp[i] = dp[i-coin] + 1
                }
            }
        }
    }
    
    if dp[amount] > amount { return -1 }
    return dp[amount]
}`
  };

  return (
    <PerspectiveCard color="rose">
      <SectionHeader 
        title="1D DP Problems" 
        description="Solving problems with linear state dependencies."
        icon={GitBranch} 
        color="rose" 
      />

      {/* Intro to 1D DP */}
      <div className="mb-12 p-8 bg-slate-900/50 border border-white/5 rounded-[2rem]">
        <h3 className="text-xl font-black text-white mb-4">Linear Dependencies</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          In 1D DP, the current state <code className="text-rose-400 bg-white/5 px-1 rounded">dp[i]</code> depends only on previous states like <code className="text-rose-400 bg-white/5 px-1 rounded">dp[i-1]</code> or <code className="text-rose-400 bg-white/5 px-1 rounded">dp[i-2]</code>. These problems can often be space-optimized to O(1).
        </p>
      </div>

      {/* Problem 1: Climbing Stairs */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp size={24} className="text-rose-400" />
          <h3 className="text-2xl font-black text-white">1. Climbing Stairs</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-rose-500 font-bold">Goal:</span> 
            <span>Ways to reach step N (1 or 2 steps at a time)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>dp[i] = dp[i-1] + dp[i-2]</span>
          </div>
        </div>

        <CodeImplementation 
          languages={climbingStairsCode}
          color="rose"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* Problem 2: House Robber */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Home size={24} className="text-pink-400" />
          <h3 className="text-2xl font-black text-white">2. House Robber</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-pink-500 font-bold">Goal:</span> 
            <span>Maximize money without robbing adjacent houses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>dp[i] = max(dp[i-1], nums[i] + dp[i-2])</span>
          </div>
        </div>

        <CodeImplementation 
          languages={houseRobberCode}
          color="pink"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* Problem 3: Coin Change */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Coins size={24} className="text-orange-400" />
          <h3 className="text-2xl font-black text-white">3. Coin Change</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 font-bold">Goal:</span> 
            <span>Fewest coins to make up amount</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>dp[i] = min(dp[i], dp[i-coin] + 1)</span>
          </div>
        </div>

        <CodeImplementation 
          languages={coinChangeCode}
          color="orange"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}
