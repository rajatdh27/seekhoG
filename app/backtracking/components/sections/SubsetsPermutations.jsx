"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SubsetsPermutations() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [activeTab, setActiveTab] = useState("subsets"); // "subsets" or "permutations"

  // Subsets demo
  const [subsetInput, setSubsetInput] = useState([1, 2, 3]);
  const [generatedSubsets, setGeneratedSubsets] = useState([]);
  const [isGeneratingSubsets, setIsGeneratingSubsets] = useState(false);

  // Permutations demo
  const [permInput, setPermInput] = useState([1, 2, 3]);
  const [generatedPerms, setGeneratedPerms] = useState([]);
  const [isGeneratingPerms, setIsGeneratingPerms] = useState(false);

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const subsetsCode = {
    c: `#include <stdio.h>
#include <stdlib.h>

void backtrack(int* nums, int n, int start, int* current, int currentSize,
               int** result, int* resultSizes, int* returnSize) {
    // Add current subset to result
    result[*returnSize] = (int*)malloc(currentSize * sizeof(int));
    for (int i = 0; i < currentSize; i++) {
        result[*returnSize][i] = current[i];
    }
    resultSizes[*returnSize] = currentSize;
    (*returnSize)++;

    // Try adding each remaining element
    for (int i = start; i < n; i++) {
        current[currentSize] = nums[i];     // Make choice
        backtrack(nums, n, i + 1, current, currentSize + 1,
                 result, resultSizes, returnSize);  // Recurse
        // Backtrack (no explicit undo needed)
    }
}

int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int maxSubsets = 1 << numsSize;  // 2^n subsets
    int** result = (int**)malloc(maxSubsets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxSubsets * sizeof(int));
    *returnSize = 0;

    int* current = (int*)malloc(numsSize * sizeof(int));
    backtrack(nums, numsSize, 0, current, 0, result, *returnColumnSizes, returnSize);

    free(current);
    return result;
}

void printSubsets(int** subsets, int* sizes, int count) {
    printf("[");
    for (int i = 0; i < count; i++) {
        printf("[");
        for (int j = 0; j < sizes[i]; j++) {
            printf("%d", subsets[i][j]);
            if (j < sizes[i] - 1) printf(",");
        }
        printf("]");
        if (i < count - 1) printf(",");
    }
    printf("]\\n");
}

int main() {
    int nums[] = {1, 2, 3};
    int numsSize = 3;
    int returnSize;
    int* returnColumnSizes;

    int** result = subsets(nums, numsSize, &returnSize, &returnColumnSizes);

    printf("All subsets: ");
    printSubsets(result, returnColumnSizes, returnSize);

    // Free memory
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
    free(returnColumnSizes);

    return 0;
}

// Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
private:
    void backtrack(vector<int>& nums, int start, vector<int>& current,
                   vector<vector<int>>& result) {
        // Add current subset to result
        result.push_back(current);

        // Try adding each remaining element
        for (int i = start; i < nums.size(); i++) {
            current.push_back(nums[i]);          // Make choice
            backtrack(nums, i + 1, current, result);  // Recurse
            current.pop_back();                  // Backtrack
        }
    }

public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(nums, 0, current, result);
        return result;
    }
};

void printSubsets(const vector<vector<int>>& subsets) {
    cout << "[";
    for (int i = 0; i < subsets.size(); i++) {
        cout << "[";
        for (int j = 0; j < subsets[i].size(); j++) {
            cout << subsets[i][j];
            if (j < subsets[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < subsets.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3};

    vector<vector<int>> result = solution.subsets(nums);

    cout << "All subsets: ";
    printSubsets(result);
    // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

    return 0;
}

// Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    java: `import java.util.*;

public class SubsetsSolution {
    private void backtrack(int[] nums, int start, List<Integer> current,
                          List<List<Integer>> result) {
        // Add current subset to result
        result.add(new ArrayList<>(current));

        // Try adding each remaining element
        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);                     // Make choice
            backtrack(nums, i + 1, current, result);  // Recurse
            current.remove(current.size() - 1);       // Backtrack
        }
    }

    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    public static void main(String[] args) {
        SubsetsSolution solution = new SubsetsSolution();
        int[] nums = {1, 2, 3};

        List<List<Integer>> result = solution.subsets(nums);

        System.out.println("All subsets: " + result);
        // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
    }
}

// Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    javascript: `class Solution {
    backtrack(nums, start, current, result) {
        // Add current subset to result
        result.push([...current]);

        // Try adding each remaining element
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);                    // Make choice
            this.backtrack(nums, i + 1, current, result);  // Recurse
            current.pop();                            // Backtrack
        }
    }

    subsets(nums) {
        const result = [];
        this.backtrack(nums, 0, [], result);
        return result;
    }
}

// Example usage
const solution = new Solution();
const nums = [1, 2, 3];

const result = solution.subsets(nums);

console.log("All subsets:", JSON.stringify(result));
// Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

// Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    python: `class Solution:
    def backtrack(self, nums, start, current, result):
        """Generate all subsets using backtracking"""
        # Add current subset to result
        result.append(current[:])  # Make a copy

        # Try adding each remaining element
        for i in range(start, len(nums)):
            current.append(nums[i])            # Make choice
            self.backtrack(nums, i + 1, current, result)  # Recurse
            current.pop()                      # Backtrack

    def subsets(self, nums):
        """Return all subsets (power set) of nums"""
        result = []
        self.backtrack(nums, 0, [], result)
        return result

# Example usage
solution = Solution()
nums = [1, 2, 3]

result = solution.subsets(nums)

print("All subsets:", result)
# Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

# Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
# Space Complexity: O(n) for recursion depth`,

    go: `package main

import "fmt"

type Solution struct{}

func (s *Solution) backtrack(nums []int, start int, current []int, result *[][]int) {
    // Add current subset to result (make a copy)
    subset := make([]int, len(current))
    copy(subset, current)
    *result = append(*result, subset)

    // Try adding each remaining element
    for i := start; i < len(nums); i++ {
        current = append(current, nums[i])         // Make choice
        s.backtrack(nums, i+1, current, result)    // Recurse
        current = current[:len(current)-1]         // Backtrack
    }
}

func (s *Solution) subsets(nums []int) [][]int {
    result := [][]int{}
    s.backtrack(nums, 0, []int{}, &result)
    return result
}

func main() {
    solution := &Solution{}
    nums := []int{1, 2, 3}

    result := solution.subsets(nums)

    fmt.Println("All subsets:", result)
    // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
}

// Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,
  };

  const permutationsCode = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void backtrack(int* nums, int n, int start, bool* used,
               int* current, int currentSize,
               int** result, int* returnSize) {
    // If permutation is complete
    if (currentSize == n) {
        result[*returnSize] = (int*)malloc(n * sizeof(int));
        for (int i = 0; i < n; i++) {
            result[*returnSize][i] = current[i];
        }
        (*returnSize)++;
        return;
    }

    // Try each unused number
    for (int i = 0; i < n; i++) {
        if (used[i]) continue;

        current[currentSize] = nums[i];    // Make choice
        used[i] = true;
        backtrack(nums, n, start, used, current, currentSize + 1,
                 result, returnSize);      // Recurse
        used[i] = false;                   // Backtrack
    }
}

int** permute(int* nums, int numsSize, int* returnSize) {
    int maxPerms = 1;
    for (int i = 1; i <= numsSize; i++) maxPerms *= i;  // n!

    int** result = (int**)malloc(maxPerms * sizeof(int*));
    bool* used = (bool*)calloc(numsSize, sizeof(bool));
    int* current = (int*)malloc(numsSize * sizeof(int));
    *returnSize = 0;

    backtrack(nums, numsSize, 0, used, current, 0, result, returnSize);

    free(used);
    free(current);
    return result;
}

int main() {
    int nums[] = {1, 2, 3};
    int numsSize = 3;
    int returnSize;

    int** result = permute(nums, numsSize, &returnSize);

    printf("All permutations: [");
    for (int i = 0; i < returnSize; i++) {
        printf("[");
        for (int j = 0; j < numsSize; j++) {
            printf("%d", result[i][j]);
            if (j < numsSize - 1) printf(",");
        }
        printf("]");
        if (i < returnSize - 1) printf(",");
    }
    printf("]\\n");

    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);

    return 0;
}

// Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
private:
    void backtrack(vector<int>& nums, vector<bool>& used,
                   vector<int>& current, vector<vector<int>>& result) {
        // If permutation is complete
        if (current.size() == nums.size()) {
            result.push_back(current);
            return;
        }

        // Try each unused number
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;

            current.push_back(nums[i]);      // Make choice
            used[i] = true;
            backtrack(nums, used, current, result);  // Recurse
            used[i] = false;                 // Backtrack
            current.pop_back();
        }
    }

public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        vector<bool> used(nums.size(), false);
        backtrack(nums, used, current, result);
        return result;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3};

    vector<vector<int>> result = solution.permute(nums);

    cout << "All permutations: [";
    for (int i = 0; i < result.size(); i++) {
        cout << "[";
        for (int j = 0; j < result[i].size(); j++) {
            cout << result[i][j];
            if (j < result[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < result.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

    return 0;
}

// Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    java: `import java.util.*;

public class PermutationsSolution {
    private void backtrack(int[] nums, boolean[] used,
                          List<Integer> current, List<List<Integer>> result) {
        // If permutation is complete
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        // Try each unused number
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            current.add(nums[i]);                     // Make choice
            used[i] = true;
            backtrack(nums, used, current, result);   // Recurse
            used[i] = false;                          // Backtrack
            current.remove(current.size() - 1);
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new boolean[nums.length], new ArrayList<>(), result);
        return result;
    }

    public static void main(String[] args) {
        PermutationsSolution solution = new PermutationsSolution();
        int[] nums = {1, 2, 3};

        List<List<Integer>> result = solution.permute(nums);

        System.out.println("All permutations: " + result);
        // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    }
}

// Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    javascript: `class Solution {
    backtrack(nums, used, current, result) {
        // If permutation is complete
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        // Try each unused number
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            current.push(nums[i]);                    // Make choice
            used[i] = true;
            this.backtrack(nums, used, current, result);  // Recurse
            used[i] = false;                          // Backtrack
            current.pop();
        }
    }

    permute(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false);
        this.backtrack(nums, used, [], result);
        return result;
    }
}

// Example usage
const solution = new Solution();
const nums = [1, 2, 3];

const result = solution.permute(nums);

console.log("All permutations:", JSON.stringify(result));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,

    python: `class Solution:
    def backtrack(self, nums, used, current, result):
        """Generate all permutations using backtracking"""
        # If permutation is complete
        if len(current) == len(nums):
            result.append(current[:])  # Make a copy
            return

        # Try each unused number
        for i in range(len(nums)):
            if used[i]:
                continue

            current.append(nums[i])        # Make choice
            used[i] = True
            self.backtrack(nums, used, current, result)  # Recurse
            used[i] = False                # Backtrack
            current.pop()

    def permute(self, nums):
        """Return all permutations of nums"""
        result = []
        used = [False] * len(nums)
        self.backtrack(nums, used, [], result)
        return result

# Example usage
solution = Solution()
nums = [1, 2, 3]

result = solution.permute(nums)

print("All permutations:", result)
# Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

# Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
# Space Complexity: O(n) for recursion depth`,

    go: `package main

import "fmt"

type Solution struct{}

func (s *Solution) backtrack(nums []int, used []bool, current []int, result *[][]int) {
    // If permutation is complete
    if len(current) == len(nums) {
        perm := make([]int, len(current))
        copy(perm, current)
        *result = append(*result, perm)
        return
    }

    // Try each unused number
    for i := 0; i < len(nums); i++ {
        if used[i] {
            continue
        }

        current = append(current, nums[i])         // Make choice
        used[i] = true
        s.backtrack(nums, used, current, result)   // Recurse
        used[i] = false                            // Backtrack
        current = current[:len(current)-1]
    }
}

func (s *Solution) permute(nums []int) [][]int {
    result := [][]int{}
    used := make([]bool, len(nums))
    s.backtrack(nums, used, []int{}, &result)
    return result
}

func main() {
    solution := &Solution{}
    nums := []int{1, 2, 3}

    result := solution.permute(nums)

    fmt.Println("All permutations:", result)
    // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
}

// Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
// Space Complexity: O(n) for recursion depth`,
  };

  const generateSubsets = async () => {
    setIsGeneratingSubsets(true);
    setGeneratedSubsets([]);

    const result = [];
    const backtrack = (start, current) => {
      result.push([...current]);

      for (let i = start; i < subsetInput.length; i++) {
        current.push(subsetInput[i]);
        backtrack(i + 1, current);
        current.pop();
      }
    };

    backtrack(0, []);

    // Animate adding each subset
    for (let i = 0; i < result.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setGeneratedSubsets(prev => [...prev, result[i]]);
    }

    setIsGeneratingSubsets(false);
  };

  const generatePermutations = async () => {
    setIsGeneratingPerms(true);
    setGeneratedPerms([]);

    const result = [];
    const used = new Array(permInput.length).fill(false);

    const backtrack = (current) => {
      if (current.length === permInput.length) {
        result.push([...current]);
        return;
      }

      for (let i = 0; i < permInput.length; i++) {
        if (used[i]) continue;

        current.push(permInput[i]);
        used[i] = true;
        backtrack(current);
        used[i] = false;
        current.pop();
      }
    };

    backtrack([]);

    // Animate adding each permutation
    for (let i = 0; i < result.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setGeneratedPerms(prev => [...prev, result[i]]);
    }

    setIsGeneratingPerms(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🔢 Subsets & Permutations
      </h2>

      {/* Tab Selector */}
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setActiveTab("subsets")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === "subsets"
              ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg"
              : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📦 Subsets (Power Set)
        </button>
        <button
          onClick={() => setActiveTab("permutations")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === "permutations"
              ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg"
              : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🔄 Permutations
        </button>
      </div>

      {/* Interactive Demo */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          {activeTab === "subsets" ? "🧪 Subsets Generator" : "🧪 Permutations Generator"}
        </h3>

        <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          {activeTab === "subsets" ? (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Input Array: {JSON.stringify(subsetInput)}
                </label>
                <button
                  onClick={generateSubsets}
                  disabled={isGeneratingSubsets}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    isGeneratingSubsets
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:shadow-lg"
                  }`}
                >
                  {isGeneratingSubsets ? "Generating..." : "Generate All Subsets"}
                </button>
              </div>

              <div className="bg-white dark:bg-slate-700 rounded-lg p-6 min-h-[200px]">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  Generated Subsets ({generatedSubsets.length} / {Math.pow(2, subsetInput.length)}):
                </div>
                <div className="flex flex-wrap gap-3">
                  {generatedSubsets.map((subset, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-lg border border-fuchsia-300 dark:border-fuchsia-700"
                    >
                      [{subset.join(", ")}]
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Input Array: {JSON.stringify(permInput)}
                </label>
                <button
                  onClick={generatePermutations}
                  disabled={isGeneratingPerms}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    isGeneratingPerms
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:shadow-lg"
                  }`}
                >
                  {isGeneratingPerms ? "Generating..." : "Generate All Permutations"}
                </button>
              </div>

              <div className="bg-white dark:bg-slate-700 rounded-lg p-6 min-h-[200px]">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  Generated Permutations ({generatedPerms.length} / {[1,2,3,4,5,6].slice(0, permInput.length).reduce((a,b)=>a*b, 1)}):
                </div>
                <div className="flex flex-wrap gap-3">
                  {generatedPerms.map((perm, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-lg border border-fuchsia-300 dark:border-fuchsia-700"
                    >
                      [{perm.join(", ")}]
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Key Differences */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔍 Key Differences
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-fuchsia-50 dark:bg-fuchsia-900/20">
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Aspect
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Subsets
                </th>
                <th className="border border-fuchsia-200 dark:border-fuchsia-800 px-4 py-3 text-left">
                  Permutations
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Definition
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Any combination of elements (order doesn't matter)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  All arrangements of elements (order matters)
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Count
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  2<sup>n</sup> total subsets
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  n! permutations
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Example [1,2,3]
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Time Complexity
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  O(n × 2<sup>n</sup>)
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  O(n × n!)
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-semibold">
                  Tracking
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Use start index to avoid duplicates
                </td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">
                  Use boolean array to track used elements
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💻 Implementation
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              {lang.icon} {lang.name}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{activeTab === "subsets" ? subsetsCode[currentLanguage] : permutationsCode[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Complexity Analysis */}
      <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-fuchsia-300 dark:border-fuchsia-700">
        <h3 className="text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-6">
          ⚡ Complexity Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-3">
              {activeTab === "subsets" ? "Subsets" : "Permutations"}
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Time:</strong>{" "}
              <span className="font-mono bg-fuchsia-100 dark:bg-fuchsia-900/40 px-2 py-1 rounded">
                {activeTab === "subsets" ? "O(n × 2ⁿ)" : "O(n × n!)"}
              </span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Space:</strong>{" "}
              <span className="font-mono bg-fuchsia-100 dark:bg-fuchsia-900/40 px-2 py-1 rounded">
                O(n)
              </span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {activeTab === "subsets"
                ? "2ⁿ subsets, each takes O(n) to copy. For n=3: 8 subsets."
                : "n! permutations, each takes O(n) to copy. For n=3: 6 permutations."}
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-3">
              Growth Rate
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>n = 3:</span>
                <span className="font-mono">{activeTab === "subsets" ? "8 results" : "6 results"}</span>
              </div>
              <div className="flex justify-between">
                <span>n = 4:</span>
                <span className="font-mono">{activeTab === "subsets" ? "16 results" : "24 results"}</span>
              </div>
              <div className="flex justify-between">
                <span>n = 5:</span>
                <span className="font-mono">{activeTab === "subsets" ? "32 results" : "120 results"}</span>
              </div>
              <div className="flex justify-between">
                <span>n = 10:</span>
                <span className="font-mono">{activeTab === "subsets" ? "1,024 results" : "3,628,800 results"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
