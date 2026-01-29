"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  ArrowDownUp, 
  BrainCircuit, 
  ArrowUp, 
  ArrowDown, 
  CheckCircle2, 
  XCircle,
  Table as TableIcon
} from "lucide-react";

export default function DPApproachesSection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const memoizationCode = {
    javascript: `// Top-Down: Memoization
function fibMemo(n, memo = {}) {
    // 1. Base cases
    if (n <= 1) return n;

    // 2. Check cache
    if (n in memo) return memo[n];

    // 3. Compute and store
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}`,
    python: `# Top-Down: Memoization
def fib_memo(n, memo={}):
    # 1. Base cases
    if n <= 1: return n
    
    # 2. Check cache
    if n in memo: return memo[n]
    
    # 3. Compute and store
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]`,
    java: `// Top-Down: Memoization
import java.util.HashMap;

public class Fibonacci {
    private HashMap<Integer, Integer> memo = new HashMap<>();

    public int fib(int n) {
        if (n <= 1) return n;
        
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        int result = fib(n - 1) + fib(n - 2);
        memo.put(n, result);
        return result;
    }
}`,
    cpp: `// Top-Down: Memoization
#include <vector>
using namespace std;

int fib(int n, vector<int>& memo) {
    if (n <= 1) return n;
    
    if (memo[n] != -1) return memo[n];
    
    return memo[n] = fib(n-1, memo) + fib(n-2, memo);
}

// Initial call: vector<int> memo(n+1, -1);`,
    go: `// Top-Down: Memoization
func fib(n int, memo map[int]int) int {
    if n <= 1 {
        return n
    }
    
    if val, exists := memo[n]; exists {
        return val
    }
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}`
  };

  const tabulationCode = {
    javascript: `// Bottom-Up: Tabulation
function fibTab(n) {
    if (n <= 1) return n;
    
    // 1. Create table
    const dp = new Array(n + 1);
    
    // 2. Base cases
    dp[0] = 0;
    dp[1] = 1;
    
    // 3. Fill iteratively
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}`,
    python: `# Bottom-Up: Tabulation
def fib_tab(n):
    if n <= 1: return n
    
    # 1. Create table
    dp = [0] * (n + 1)
    
    # 2. Base cases
    dp[1] = 1
    
    # 3. Fill iteratively
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
        
    return dp[n]`,
    java: `// Bottom-Up: Tabulation
public int fib(int n) {
    if (n <= 1) return n;
    
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}`,
    cpp: `// Bottom-Up: Tabulation
#include <vector>
using namespace std;

int fib(int n) {
    if (n <= 1) return n;
    
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}`,
    go: `// Bottom-Up: Tabulation
func fib(n int) int {
    if n <= 1 {
        return n
    }
    
    dp := make([]int, n+1)
    dp[0] = 0
    dp[1] = 1
    
    for i := 2; i <= n; i++ {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n]
}`
  };

  return (
    <PerspectiveCard color="purple">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
          <ArrowDownUp size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Memoization vs Tabulation</h2>
          <p className="text-slate-400 font-medium">Top-down vs Bottom-up: Two ways to conquer complexity.</p>
        </div>
      </div>

      {/* Memoization */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <ArrowDown size={24} className="text-purple-400" /> 1. Top-Down (Memoization)
        </h3>
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-8 mb-6">
          <p className="text-slate-300 mb-6 font-medium leading-relaxed">
            Start with the main problem and break it down recursively. Store the result of each subproblem in a <strong className="text-purple-400">cache (memo)</strong> so you never solve it twice.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex gap-3">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Easy to write (natural recursion)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Solves only needed subproblems</span>
            </div>
            <div className="flex gap-3">
              <XCircle className="text-rose-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Recursion stack overhead</span>
            </div>
            <div className="flex gap-3">
              <XCircle className="text-rose-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Harder to optimize space</span>
            </div>
          </div>
          
          <CodeImplementation 
            languages={memoizationCode}
            color="purple"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* Tabulation */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <ArrowUp size={24} className="text-pink-400" /> 2. Bottom-Up (Tabulation)
        </h3>
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-8 mb-6">
          <p className="text-slate-300 mb-6 font-medium leading-relaxed">
            Start with the smallest subproblems (base cases) and iteratively build up the solution in a <strong className="text-pink-400">table</strong>. Avoids recursion completely.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex gap-3">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">No recursion overhead (faster)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Easy to optimize space (O(1))</span>
            </div>
            <div className="flex gap-3">
              <XCircle className="text-rose-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Solves all subproblems</span>
            </div>
            <div className="flex gap-3">
              <XCircle className="text-rose-400 shrink-0" size={20} />
              <span className="text-sm text-slate-400">Less intuitive ordering</span>
            </div>
          </div>
          
          <CodeImplementation 
            languages={tabulationCode}
            color="pink"
            initialLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <TableIcon size={24} className="text-purple-400" />
          <h3 className="text-lg font-black text-white">Quick Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-white/5 text-slate-200 uppercase font-bold tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">Memoization</th>
                <th className="px-6 py-4">Tabulation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { feature: "Approach", memo: "Top-Down (Recursive)", tab: "Bottom-Up (Iterative)" },
                { feature: "State Storage", memo: "Map / Array (Sparse)", tab: "Array / Matrix (Dense)" },
                { feature: "Speed", memo: "Slower (Function calls)", tab: "Faster (Loops)" },
                { feature: "Space Opt.", memo: "Hard (Stack needed)", tab: "Easy (Rolling variables)" },
                { feature: "Subproblems", memo: "On-demand", tab: "All" }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-200">{row.feature}</td>
                  <td className="px-6 py-4 text-purple-300">{row.memo}</td>
                  <td className="px-6 py-4 text-pink-300">{row.tab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PerspectiveCard>
  );
}