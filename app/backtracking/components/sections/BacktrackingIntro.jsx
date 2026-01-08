"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BacktrackingIntro() {
  const [maze, setMaze] = useState([
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
  ]);
  const [path, setPath] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const solveMaze = async () => {
    setIsAnimating(true);
    setPath([]);
    setCurrentStep(-1);

    const n = maze.length;
    const solution = [];
    const visited = Array(n).fill(0).map(() => Array(n).fill(false));

    const solve = async (row, col, currentPath) => {
      if (row < 0 || row >= n || col < 0 || col >= n) return false;
      if (maze[row][col] === 0 || visited[row][col]) return false;

      visited[row][col] = true;
      const newPath = [...currentPath, [row, col]];

      await new Promise(resolve => setTimeout(resolve, 300));
      setPath([...newPath]);
      setCurrentStep(newPath.length - 1);

      if (row === n - 1 && col === n - 1) {
        solution.push(...newPath);
        return true;
      }

      // Try all 4 directions
      if (await solve(row, col + 1, newPath)) return true; // Right
      if (await solve(row + 1, col, newPath)) return true; // Down
      if (await solve(row, col - 1, newPath)) return true; // Left
      if (await solve(row - 1, col, newPath)) return true; // Up

      // Backtrack
      visited[row][col] = false;
      await new Promise(resolve => setTimeout(resolve, 200));
      setPath([...currentPath]);
      setCurrentStep(currentPath.length - 1);

      return false;
    };

    await solve(0, 0, []);
    setIsAnimating(false);
  };

  const resetMaze = () => {
    setPath([]);
    setCurrentStep(-1);
    setIsAnimating(false);
  };

  const isInPath = (row, col) => {
    return path.some(([r, c]) => r === row && c === col);
  };

  const getPathIndex = (row, col) => {
    return path.findIndex(([r, c]) => r === row && c === col);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        🔄 Introduction to Backtracking
      </motion.h2>

      <div className="space-y-8">
        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Backtracking</strong> is an algorithmic technique for solving problems recursively by trying to build a solution incrementally. When you realize that the current solution cannot lead to a valid solution, you{" "}
            <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
              backtrack (remove the last step)
            </span>{" "}
            and try another path. It's like exploring a maze - when you hit a dead end, you go back and try a different route.
          </p>
        </motion.div>

        {/* Interactive Maze Solver */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Maze Solver (Backtracking Visualization)
          </h3>

          {/* Maze Grid */}
          <div className="flex justify-center mb-6">
            <div className="inline-grid grid-cols-4 gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg">
              {maze.map((row, rowIdx) =>
                row.map((cell, colIdx) => {
                  const inPath = isInPath(rowIdx, colIdx);
                  const pathIdx = getPathIndex(rowIdx, colIdx);
                  const isCurrent = pathIdx === currentStep;
                  const isStart = rowIdx === 0 && colIdx === 0;
                  const isEnd = rowIdx === maze.length - 1 && colIdx === maze[0].length - 1;

                  return (
                    <motion.div
                      key={`${rowIdx}-${colIdx}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (rowIdx * 4 + colIdx) * 0.05 }}
                      className={`w-16 h-16 rounded-lg flex items-center justify-center font-bold text-sm relative ${
                        cell === 0
                          ? "bg-slate-300 dark:bg-slate-700"
                          : inPath
                          ? isCurrent
                            ? "bg-gradient-to-br from-yellow-400 to-orange-400 text-white animate-pulse"
                            : "bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white"
                          : isStart
                          ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white"
                          : isEnd
                          ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                          : "bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500"
                      }`}
                    >
                      {isStart && "START"}
                      {isEnd && "END"}
                      {!isStart && !isEnd && cell === 0 && "🚫"}
                      {!isStart && !isEnd && cell === 1 && inPath && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-xs"
                        >
                          {pathIdx + 1}
                        </motion.div>
                      )}
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 border-4 border-yellow-300 rounded-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                      )}
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={solveMaze}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 disabled:from-fuchsia-300 disabled:to-pink-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              {isAnimating ? "Solving..." : "Solve Maze"}
            </button>
            <button
              onClick={resetMaze}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Reset
            </button>
          </div>

          {/* Info */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-fuchsia-200 dark:border-fuchsia-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Steps:</span>
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  {path.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Current:</span>
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  {currentStep >= 0 ? currentStep + 1 : "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  {isAnimating ? "Solving" : path.length > 0 ? "Solved" : "Ready"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Grid:</span>
                <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">
                  4×4
                </span>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="mt-4 bg-fuchsia-100 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-fuchsia-900 dark:text-fuchsia-200">How it works:</strong> The algorithm tries to move in all 4 directions (Right → Down → Left → Up). When it reaches a dead end (blocked cell or already visited), it <strong>backtracks</strong> to the previous position and tries a different direction. The yellow cell shows the current exploration point!
            </p>
          </div>
        </motion.div>

        {/* Backtracking Template */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-fuchsia-50 dark:from-indigo-900/20 dark:to-fuchsia-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>📋</span> Backtracking Template
          </h3>
          <div className="bg-slate-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`function backtrack(state, choices) {
    // Base case: solution found
    if (isValidSolution(state)) {
        processSolution(state);
        return;
    }

    // Base case: invalid state (pruning)
    if (isInvalid(state)) {
        return;
    }

    // Explore all choices
    for (let choice of choices) {
        // Make choice
        makeChoice(state, choice);

        // Recurse
        backtrack(state, getNextChoices());

        // Undo choice (backtrack)
        undoChoice(state, choice);
    }
}`}</code>
            </pre>
          </div>
        </motion.div>

        {/* Key Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <CharacteristicCard
            icon="🌳"
            title="State Space Tree"
            description="Explores decision tree where each node represents a partial solution"
            example="Each branch = a choice"
          />
          <CharacteristicCard
            icon="✂️"
            title="Pruning"
            description="Eliminate invalid paths early to avoid unnecessary exploration"
            example="Skip if constraint violated"
          />
          <CharacteristicCard
            icon="↩️"
            title="Backtrack"
            description="When a path fails, undo the last choice and try another"
            example="Remove choice from state"
          />
        </motion.div>

        {/* Classic Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🎯</span> Classic Backtracking Problems
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ProblemCard
              icon="♟️"
              title="N-Queens"
              description="Place N queens on N×N board without conflicts"
              difficulty="Medium"
            />
            <ProblemCard
              icon="🔢"
              title="Sudoku Solver"
              description="Fill 9×9 grid following Sudoku rules"
              difficulty="Hard"
            />
            <ProblemCard
              icon="🎒"
              title="Subset Sum"
              description="Find subset that sums to target"
              difficulty="Medium"
            />
            <ProblemCard
              icon="🔤"
              title="Permutations"
              description="Generate all permutations of array"
              difficulty="Medium"
            />
            <ProblemCard
              icon="📦"
              title="Combination Sum"
              description="Find combinations that sum to target"
              difficulty="Medium"
            />
            <ProblemCard
              icon="🗺️"
              title="Word Search"
              description="Find word in 2D grid"
              difficulty="Medium"
            />
          </div>
        </motion.div>

        {/* When to Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> Use Backtracking When
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Need to explore all possible solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Problem has constraints to satisfy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Can prune invalid paths early</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Choices can be undone easily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Solution space can be represented as tree</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <span>💡</span> Optimization Tips
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Add pruning conditions to reduce search space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Order choices intelligently (most constrained first)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Use memoization to avoid repeated computations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Early termination when solution found (if only one needed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Use bit manipulation for state representation</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
function CharacteristicCard({ icon, title, description, example }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-fuchsia-400 dark:hover:border-fuchsia-500 transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-base font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-2">{title}</h4>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{description}</p>
      <p className="text-xs text-fuchsia-600 dark:text-fuchsia-400 italic">💡 {example}</p>
    </div>
  );
}

function ProblemCard({ icon, title, description, difficulty }) {
  const difficultyColor = {
    Easy: "text-green-600 dark:text-green-400",
    Medium: "text-yellow-600 dark:text-yellow-400",
    Hard: "text-red-600 dark:text-red-400",
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h4>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
      <div className={`text-xs font-semibold ${difficultyColor[difficulty]}`}>
        {difficulty}
      </div>
    </div>
  );
}
