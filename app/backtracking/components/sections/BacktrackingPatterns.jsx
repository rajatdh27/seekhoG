"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BacktrackingPatterns() {
  const [selectedPattern, setSelectedPattern] = useState(null);

  const patterns = [
    {
      id: 1,
      name: "Decision Making",
      icon: "🎯",
      description: "At each step, make a choice from available options",
      when: "When you need to explore all possible decisions",
      template: `function backtrack(state, choices) {
    if (isComplete(state)) {
        addSolution(state);
        return;
    }

    for (choice in choices) {
        if (isValid(state, choice)) {
            makeChoice(state, choice);    // Choose
            backtrack(state, newChoices); // Explore
            undoChoice(state, choice);    // Unchoose
        }
    }
}`,
      examples: ["N-Queens", "Sudoku Solver", "Maze Solving"],
      complexity: "Varies by problem - typically exponential",
    },
    {
      id: 2,
      name: "Subsets Pattern",
      icon: "📦",
      description: "Include or exclude each element - binary choice",
      when: "Generating all possible combinations/subsets",
      template: `function subsets(nums, start, current, result) {
    result.push([...current]);  // Add current subset

    for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);           // Include
        subsets(nums, i + 1, current, result);
        current.pop();                   // Exclude
    }
}`,
      examples: ["Power Set", "Combination Sum", "Letter Combinations"],
      complexity: "O(n × 2ⁿ) - 2ⁿ subsets",
    },
    {
      id: 3,
      name: "Permutations Pattern",
      icon: "🔄",
      description: "Try each element in each position",
      when: "All arrangements matter (order is important)",
      template: `function permute(nums, used, current, result) {
    if (current.length === nums.length) {
        result.push([...current]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        current.push(nums[i]);           // Choose
        used[i] = true;
        permute(nums, used, current, result);
        used[i] = false;                 // Unchoose
        current.pop();
    }
}`,
      examples: ["Permutations", "N-Queens (alternate)", "String Arrangements"],
      complexity: "O(n × n!) - n! permutations",
    },
    {
      id: 4,
      name: "Path Finding",
      icon: "🗺️",
      description: "Explore paths in grid/graph, backtrack on dead ends",
      when: "Finding paths through maze, grid, or graph",
      template: `function findPath(grid, row, col, path, visited) {
    if (isDestination(row, col)) {
        solutions.push([...path]);
        return;
    }

    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (isValid(newRow, newCol) && !visited[newRow][newCol]) {
            visited[newRow][newCol] = true;
            path.push([newRow, newCol]);
            findPath(grid, newRow, newCol, path, visited);
            path.pop();                      // Backtrack
            visited[newRow][newCol] = false;
        }
    }
}`,
      examples: ["Maze Solver", "Word Search", "Island Hopping"],
      complexity: "O(4ⁿ) for grid of size n",
    },
    {
      id: 5,
      name: "Constraint Satisfaction",
      icon: "✅",
      description: "Check constraints before/after each choice",
      when: "Problem has specific rules/constraints to satisfy",
      template: `function solve(state) {
    if (isComplete(state)) {
        return state;
    }

    const variable = selectUnassigned(state);
    for (const value of possibleValues(variable)) {
        if (isConsistent(state, variable, value)) {
            state[variable] = value;         // Assign

            const result = solve(state);
            if (result !== null) return result;

            state[variable] = null;          // Backtrack
        }
    }
    return null;
}`,
      examples: ["Sudoku", "Graph Coloring", "Crossword Puzzle"],
      complexity: "Varies - often exponential",
    },
    {
      id: 6,
      name: "Optimization Pattern",
      icon: "🎯",
      description: "Prune branches that can't lead to better solution",
      when: "Finding optimal solution with pruning",
      template: `let bestSolution = null;
let bestValue = -Infinity;

function optimize(state, currentValue) {
    if (isComplete(state)) {
        if (currentValue > bestValue) {
            bestValue = currentValue;
            bestSolution = [...state];
        }
        return;
    }

    for (const choice of choices) {
        if (canImprove(currentValue, choice)) {  // Prune
            makeChoice(state, choice);
            optimize(state, currentValue + getValue(choice));
            undoChoice(state, choice);
        }
    }
}`,
      examples: ["0/1 Knapsack (backtracking)", "TSP with pruning", "Job Assignment"],
      complexity: "Better than brute force with pruning",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🎨 Common Backtracking Patterns
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
        Master these 6 fundamental patterns to solve most backtracking problems efficiently.
      </p>

      {/* Patterns Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {patterns.map((pattern) => (
          <motion.div
            key={pattern.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedPattern(selectedPattern === pattern.id ? null : pattern.id)}
            className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
              selectedPattern === pattern.id
                ? "border-fuchsia-600 dark:border-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/20 shadow-lg"
                : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-fuchsia-400"
            }`}
          >
            <div className="text-4xl mb-3">{pattern.icon}</div>
            <h3 className="text-xl font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-2">
              {pattern.name}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              {pattern.description}
            </p>
            <div className="text-xs text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
              Click to see details →
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Pattern Details */}
      {selectedPattern && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-fuchsia-300 dark:border-fuchsia-700 mb-12"
        >
          {patterns
            .filter((p) => p.id === selectedPattern)
            .map((pattern) => (
              <div key={pattern.id}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{pattern.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-fuchsia-900 dark:text-fuchsia-100">
                      {pattern.name}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">{pattern.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-2">
                      ⏰ When to Use
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{pattern.when}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-2">
                      ⚡ Complexity
                    </h4>
                    <p className="text-sm font-mono bg-fuchsia-100 dark:bg-fuchsia-900/40 px-3 py-2 rounded">
                      {pattern.complexity}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-3">
                    📝 Template Code
                  </h4>
                  <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-100">
                      <code>{pattern.template}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-3">
                    💡 Example Problems
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pattern.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg border border-fuchsia-300 dark:border-fuchsia-700 text-sm font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      )}

      {/* Decision Tree Visualization */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌳 Backtracking Decision Tree
        </h3>
        <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          <p className="text-center text-slate-700 dark:text-slate-300 mb-6">
            General structure of backtracking algorithm
          </p>
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6">
            <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
{`                    ┌─────────────┐
                    │   Start     │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Is Goal?   │
                    └──┬───────┬──┘
                  Yes  │       │ No
                    ┌──▼──┐    │
                    │Save │    │
                    │Soln │    │
                    └─────┘    │
                           ┌───▼────┐
                           │ For    │
                           │ Each   │
                           │ Choice │
                           └───┬────┘
                               │
                        ┌──────▼──────┐
                        │  Is Valid?  │
                        └──┬───────┬──┘
                      Yes  │       │ No
                    ┌──────▼──┐    │
                    │  Make   │    │ (Skip)
                    │ Choice  │    │
                    └────┬────┘    │
                         │         │
                    ┌────▼────┐    │
                    │ Recurse │    │
                    └────┬────┘    │
                         │         │
                    ┌────▼────┐    │
                    │  Undo   │    │
                    │ Choice  │    │
                    └────┬────┘    │
                         │         │
                         └─────────┘
                               │
                        ┌──────▼──────┐
                        │   Return    │
                        └─────────────┘`}
            </pre>
          </div>
        </div>
      </div>

      {/* Backtracking vs Other Approaches */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ When to Use Backtracking
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
              <span>✅</span> Use Backtracking When:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Need to explore ALL possible solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Problem has constraint satisfaction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Choices can be undone (reversible decisions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Solution space can be represented as tree</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Need to generate all combinations/permutations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Can prune invalid branches early</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
              <span>❌</span> Don't Use Backtracking When:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Problem has overlapping subproblems (use DP instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Greedy choice property exists (use Greedy instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Single optimal path exists (use BFS/DFS instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Solution space is too large to explore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Problem can be solved in polynomial time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>No way to prune invalid branches</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optimization Techniques */}
      <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-fuchsia-300 dark:border-fuchsia-700">
        <h3 className="text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-6">
          ⚡ Optimization Techniques
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              technique: "Early Termination",
              desc: "Return as soon as first solution is found",
              code: "if (isSolution) return true;",
            },
            {
              technique: "Pruning",
              desc: "Skip branches that can't lead to valid solution",
              code: "if (!canPossiblySucceed) continue;",
            },
            {
              technique: "Memoization",
              desc: "Cache results of expensive validation checks",
              code: "if (memo.has(state)) return memo.get(state);",
            },
            {
              technique: "Sorting",
              desc: "Sort choices to find solution faster",
              code: "choices.sort((a, b) => heuristic(b) - heuristic(a));",
            },
            {
              technique: "Constraint Propagation",
              desc: "Update constraints after each choice",
              code: "updateConstraints(state, choice);",
            },
            {
              technique: "Symmetry Breaking",
              desc: "Avoid exploring symmetric solutions",
              code: "if (isSymmetric(state, seen)) continue;",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-fuchsia-200 dark:border-fuchsia-700"
            >
              <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-2">
                {item.technique}
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
              <code className="text-xs bg-slate-900 text-slate-100 px-2 py-1 rounded block overflow-x-auto">
                {item.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
