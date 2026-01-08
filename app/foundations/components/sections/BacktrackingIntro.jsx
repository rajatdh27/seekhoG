import { motion } from "framer-motion";

export default function BacktrackingIntro() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟥 7. Backtracking Basics
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Backtracking is a pattern for exploring all possible solutions by trying candidates and abandoning them if they don't work.
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🎯 Backtracking Template
        </h3>
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-slate-100"><code>{`def backtrack(candidate):
    if is_solution(candidate):
        output(candidate)
        return
    
    # Explore all possible next steps
    for next_candidate in get_candidates(candidate):
        if is_valid(next_candidate):
            # Choose
            make_move(next_candidate)
            # Explore
            backtrack(next_candidate)
            # Unchoose (backtrack)
            undo_move(next_candidate)`}</code></pre>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">📋 Classic Problems</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• N-Queens Problem</li>
            <li>• Sudoku Solver</li>
            <li>• Generate all subsets/permutations</li>
            <li>• Word search in grid</li>
            <li>• Combination sum</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">⚡ Key Concepts</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• Choose: Make a decision</li>
            <li>• Explore: Recurse with that choice</li>
            <li>• Unchoose: Backtrack if no solution</li>
            <li>• Pruning: Skip invalid branches early</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">✅ When to Use Backtracking</h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Need to find all solutions (not just one)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Solution involves making a sequence of choices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Constraints can be checked incrementally</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
