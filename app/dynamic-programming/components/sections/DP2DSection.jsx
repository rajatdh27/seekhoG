"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Grid, 
  ArrowDownRight, 
  Box, 
  ArrowRightLeft
} from "lucide-react";

export default function DP2DSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const uniquePathsCode = {
    javascript: `// Unique Paths: 2D DP
function uniquePaths(m, n) {
    // 1. Initialize Table
    // dp[i][j] = paths to reach cell (i, j)
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    // 2. Iterate
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // Can arrive from top or left
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}
// Space: O(m*n), Optimized: O(n)`,
    python: `# Unique Paths: 2D DP
def unique_paths(m, n):
    # 1. Initialize Table
    dp = [[1] * n for _ in range(m)]
    
    # 2. Iterate
    for i in range(1, m):
        for j in range(1, n):
            # From top + from left
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
            
    return dp[m-1][n-1]
# Space: O(m*n)`,
    java: `// Unique Paths: 2D DP
public int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];
    
    // Base cases
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}`,
    cpp: `// Unique Paths: 2D DP
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}`,
    go: `// Unique Paths: 2D DP
func uniquePaths(m int, n int) int {
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
        for j := range dp[i] {
            dp[i][j] = 1
        }
    }
    
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    
    return dp[m-1][n-1]
}`
  };

  const lcsCode = {
    javascript: `// Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}`,
    python: `# Longest Common Subsequence
def longest_common_subsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                
    return dp[m][n]`,
    java: `// Longest Common Subsequence
public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i-1) == text2.charAt(j-1)) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}`,
    cpp: `// Longest Common Subsequence
int longestCommonSubsequence(string text1, string text2) {
    int m = text1.length(), n = text2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}`,
    go: `// Longest Common Subsequence
func longestCommonSubsequence(text1 string, text2 string) int {
    m, n := len(text1), len(text2)
    dp := make([][]int, m+1)
    for i := range dp { dp[i] = make([]int, n+1) }
    
    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if text1[i-1] == text2[j-1] {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                if dp[i-1][j] > dp[i][j-1] {
                    dp[i][j] = dp[i-1][j]
                } else {
                    dp[i][j] = dp[i][j-1]
                }
            }
        }
    }
    return dp[m][n]
}`
  };

  const knapsackCode = {
    javascript: `// 0/1 Knapsack
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]], 
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity];
}`,
    python: `# 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
                
    return dp[n][capacity]`,
    java: `// 0/1 Knapsack
public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity];
}`,
    cpp: `// 0/1 Knapsack
int knapsack(vector<int>& weights, vector<int>& values, int capacity) {
    int n = weights.size();
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity];
}`,
    go: `// 0/1 Knapsack
func knapsack(weights, values []int, capacity int) int {
    n := len(weights)
    dp := make([][]int, n+1)
    for i := range dp { dp[i] = make([]int, capacity+1) }
    
    for i := 1; i <= n; i++ {
        for w := 0; w <= capacity; w++ {
            if weights[i-1] <= w {
                val := values[i-1] + dp[i-1][w-weights[i-1]]
                if val > dp[i-1][w] {
                    dp[i][w] = val
                } else {
                    dp[i][w] = dp[i-1][w]
                }
            } else {
                dp[i][w] = dp[i-1][w]
            }
        }
    }
    return dp[n][capacity]
}`
  };

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="2D DP Problems" 
        description="Matrix problems and multi-variable states."
        icon={Grid} 
        color="cyan" 
      />

      {/* Intro to 2D DP */}
      <div className="mb-12 p-8 bg-slate-900/50 border border-white/5 rounded-[2rem]">
        <h3 className="text-xl font-black text-white mb-4">Grid & Matrix States</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          When the state depends on two variables (like row & column <code className="text-cyan-400 bg-white/5 px-1 rounded">i, j</code> or index & capacity <code className="text-cyan-400 bg-white/5 px-1 rounded">i, w</code>), we use a 2D table.
        </p>
      </div>

      {/* Problem 1: Unique Paths */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <ArrowDownRight size={24} className="text-cyan-400" />
          <h3 className="text-2xl font-black text-white">1. Unique Paths</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cyan-500 font-bold">Goal:</span> 
            <span>Paths from (0,0) to (m,n) moving only Right/Down</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>dp[i][j] = dp[i-1][j] + dp[i][j-1]</span>
          </div>
        </div>

        <CodeImplementation 
          languages={uniquePathsCode}
          color="cyan"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* Problem 2: LCS */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <ArrowRightLeft size={24} className="text-amber-400" />
          <h3 className="text-2xl font-black text-white">2. Longest Common Subsequence</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-500 font-bold">Goal:</span> 
            <span>Longest subsequence present in both strings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>match ? 1+dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1])</span>
          </div>
        </div>

        <CodeImplementation 
          languages={lcsCode}
          color="amber"
          initialLanguage={currentLanguage}
        />
      </div>

      {/* Problem 3: Knapsack */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Box size={24} className="text-purple-400" />
          <h3 className="text-2xl font-black text-white">3. 0/1 Knapsack</h3>
        </div>
        
        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-6 font-mono text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-purple-500 font-bold">Goal:</span> 
            <span>Maximize value within weight capacity W</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">Recurrence:</span> 
            <span>max(dp[i-1][w], val + dp[i-1][w-wt])</span>
          </div>
        </div>

        <CodeImplementation 
          languages={knapsackCode}
          color="purple"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}
