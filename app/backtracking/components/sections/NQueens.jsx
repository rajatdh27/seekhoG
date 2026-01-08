"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NQueens() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [boardSize, setBoardSize] = useState(4);
  const [solutions, setSolutions] = useState([]);
  const [currentSolution, setCurrentSolution] = useState(0);

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const solveNQueens = () => {
    const n = boardSize;
    const allSolutions = [];

    const isSafe = (board, row, col) => {
      // Check column
      for (let i = 0; i < row; i++) {
        if (board[i] === col) return false;
      }

      // Check diagonal (top-left to bottom-right)
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i] === j) return false;
      }

      // Check diagonal (top-right to bottom-left)
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i] === j) return false;
      }

      return true;
    };

    const solve = (board, row) => {
      if (row === n) {
        allSolutions.push([...board]);
        return;
      }

      for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
          board[row] = col;
          solve(board, row + 1);
          board[row] = -1; // backtrack
        }
      }
    };

    const board = Array(n).fill(-1);
    solve(board, 0);
    setSolutions(allSolutions);
    setCurrentSolution(0);
  };

  const codeExamples = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_N 20

// Check if placing queen at (row, col) is safe
bool isSafe(int board[], int row, int col, int n) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i] == col) return false;
    }

    // Check diagonal (top-left to bottom-right)
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i] == j) return false;
    }

    // Check diagonal (top-right to bottom-left)
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i] == j) return false;
    }

    return true;
}

// Print board solution
void printSolution(int board[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("%c ", board[i] == j ? 'Q' : '.');
        }
        printf("\\n");
    }
    printf("\\n");
}

// Solve N-Queens using backtracking
void solveNQueens(int board[], int row, int n, int* count) {
    if (row == n) {
        (*count)++;
        printf("Solution %d:\\n", *count);
        printSolution(board, n);
        return;
    }

    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row] = col;              // Make choice
            solveNQueens(board, row + 1, n, count);
            board[row] = -1;               // Backtrack
        }
    }
}

// Usage
int main() {
    int n = 4;
    int board[MAX_N];
    int count = 0;

    for (int i = 0; i < n; i++) {
        board[i] = -1;
    }

    printf("N-Queens for N=%d\\n\\n", n);
    solveNQueens(board, 0, n, &count);
    printf("Total solutions: %d\\n", count);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

class NQueens {
private:
    int n;
    vector<vector<int>> solutions;

    // Check if placing queen at (row, col) is safe
    bool isSafe(vector<int>& board, int row, int col) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i] == col) return false;
        }

        // Check diagonal (top-left to bottom-right)
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i] == j) return false;
        }

        // Check diagonal (top-right to bottom-left)
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i] == j) return false;
        }

        return true;
    }

    // Backtracking solver
    void solve(vector<int>& board, int row) {
        if (row == n) {
            solutions.push_back(board);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;              // Make choice
                solve(board, row + 1);
                board[row] = -1;               // Backtrack
            }
        }
    }

public:
    // Constructor
    NQueens(int size) : n(size) {}

    // Solve and return all solutions
    vector<vector<int>> solveNQueens() {
        solutions.clear();
        vector<int> board(n, -1);
        solve(board, 0);
        return solutions;
    }

    // Print a solution
    void printSolution(const vector<int>& board) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << (board[i] == j ? "Q " : ". ");
            }
            cout << endl;
        }
        cout << endl;
    }

    // Print all solutions
    void printAllSolutions() {
        cout << "N-Queens for N=" << n << "\\n\\n";
        int count = 1;
        for (const auto& solution : solutions) {
            cout << "Solution " << count++ << ":" << endl;
            printSolution(solution);
        }
        cout << "Total solutions: " << solutions.size() << endl;
    }
};

// Usage
int main() {
    int n = 4;
    NQueens solver(n);
    solver.solveNQueens();
    solver.printAllSolutions();
    return 0;
}`,

    java: `import java.util.*;

public class NQueens {
    private int n;
    private List<List<Integer>> solutions;

    // Constructor
    public NQueens(int n) {
        this.n = n;
        this.solutions = new ArrayList<>();
    }

    // Check if placing queen at (row, col) is safe
    private boolean isSafe(List<Integer> board, int row, int col) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board.get(i) == col) return false;
        }

        // Check diagonal (top-left to bottom-right)
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board.get(i) == j) return false;
        }

        // Check diagonal (top-right to bottom-left)
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board.get(i) == j) return false;
        }

        return true;
    }

    // Backtracking solver
    private void solve(List<Integer> board, int row) {
        if (row == n) {
            solutions.add(new ArrayList<>(board));
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board.set(row, col);           // Make choice
                solve(board, row + 1);
                board.set(row, -1);            // Backtrack
            }
        }
    }

    // Solve and return all solutions
    public List<List<Integer>> solveNQueens() {
        solutions.clear();
        List<Integer> board = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            board.add(-1);
        }
        solve(board, 0);
        return solutions;
    }

    // Print a solution
    public void printSolution(List<Integer> board) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(board.get(i) == j ? "Q " : ". ");
            }
            System.out.println();
        }
        System.out.println();
    }

    // Print all solutions
    public void printAllSolutions() {
        System.out.println("N-Queens for N=" + n + "\\n");
        int count = 1;
        for (List<Integer> solution : solutions) {
            System.out.println("Solution " + count++ + ":");
            printSolution(solution);
        }
        System.out.println("Total solutions: " + solutions.size());
    }

    // Usage
    public static void main(String[] args) {
        int n = 4;
        NQueens solver = new NQueens(n);
        solver.solveNQueens();
        solver.printAllSolutions();
    }
}`,

    javascript: `class NQueens {
    constructor(n) {
        this.n = n;
        this.solutions = [];
    }

    // Check if placing queen at (row, col) is safe
    isSafe(board, row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i] === col) return false;
        }

        // Check diagonal (top-left to bottom-right)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i] === j) return false;
        }

        // Check diagonal (top-right to bottom-left)
        for (let i = row - 1, j = col + 1; i >= 0 && j < this.n; i--, j++) {
            if (board[i] === j) return false;
        }

        return true;
    }

    // Backtracking solver
    solve(board, row) {
        if (row === this.n) {
            this.solutions.push([...board]);
            return;
        }

        for (let col = 0; col < this.n; col++) {
            if (this.isSafe(board, row, col)) {
                board[row] = col;              // Make choice
                this.solve(board, row + 1);
                board[row] = -1;               // Backtrack
            }
        }
    }

    // Solve and return all solutions
    solveNQueens() {
        this.solutions = [];
        const board = Array(this.n).fill(-1);
        this.solve(board, 0);
        return this.solutions;
    }

    // Print a solution
    printSolution(board) {
        for (let i = 0; i < this.n; i++) {
            let row = "";
            for (let j = 0; j < this.n; j++) {
                row += board[i] === j ? "Q " : ". ";
            }
            console.log(row);
        }
        console.log();
    }

    // Print all solutions
    printAllSolutions() {
        console.log(\`N-Queens for N=\${this.n}\\n\`);
        this.solutions.forEach((solution, index) => {
            console.log(\`Solution \${index + 1}:\`);
            this.printSolution(solution);
        });
        console.log(\`Total solutions: \${this.solutions.length}\`);
    }
}

// Usage
const n = 4;
const solver = new NQueens(n);
solver.solveNQueens();
solver.printAllSolutions();`,

    python: `class NQueens:
    def __init__(self, n):
        self.n = n
        self.solutions = []

    # Check if placing queen at (row, col) is safe
    def is_safe(self, board, row, col):
        # Check column
        for i in range(row):
            if board[i] == col:
                return False

        # Check diagonal (top-left to bottom-right)
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i] == j:
                return False
            i -= 1
            j -= 1

        # Check diagonal (top-right to bottom-left)
        i, j = row - 1, col + 1
        while i >= 0 and j < self.n:
            if board[i] == j:
                return False
            i -= 1
            j += 1

        return True

    # Backtracking solver
    def solve(self, board, row):
        if row == self.n:
            self.solutions.append(board[:])
            return

        for col in range(self.n):
            if self.is_safe(board, row, col):
                board[row] = col              # Make choice
                self.solve(board, row + 1)
                board[row] = -1               # Backtrack

    # Solve and return all solutions
    def solve_n_queens(self):
        self.solutions = []
        board = [-1] * self.n
        self.solve(board, 0)
        return self.solutions

    # Print a solution
    def print_solution(self, board):
        for i in range(self.n):
            row = ""
            for j in range(self.n):
                row += "Q " if board[i] == j else ". "
            print(row)
        print()

    # Print all solutions
    def print_all_solutions(self):
        print(f"N-Queens for N={self.n}\\n")
        for idx, solution in enumerate(self.solutions, 1):
            print(f"Solution {idx}:")
            self.print_solution(solution)
        print(f"Total solutions: {len(self.solutions)}")

# Usage
n = 4
solver = NQueens(n)
solver.solve_n_queens()
solver.print_all_solutions()`,

    go: `package main

import "fmt"

type NQueens struct {
    n         int
    solutions [][]int
}

// NewNQueens creates a new solver
func NewNQueens(n int) *NQueens {
    return &NQueens{
        n:         n,
        solutions: make([][]int, 0),
    }
}

// Check if placing queen at (row, col) is safe
func (nq *NQueens) isSafe(board []int, row, col int) bool {
    // Check column
    for i := 0; i < row; i++ {
        if board[i] == col {
            return false
        }
    }

    // Check diagonal (top-left to bottom-right)
    for i, j := row-1, col-1; i >= 0 && j >= 0; i, j = i-1, j-1 {
        if board[i] == j {
            return false
        }
    }

    // Check diagonal (top-right to bottom-left)
    for i, j := row-1, col+1; i >= 0 && j < nq.n; i, j = i-1, j+1 {
        if board[i] == j {
            return false
        }
    }

    return true
}

// Backtracking solver
func (nq *NQueens) solve(board []int, row int) {
    if row == nq.n {
        solution := make([]int, nq.n)
        copy(solution, board)
        nq.solutions = append(nq.solutions, solution)
        return
    }

    for col := 0; col < nq.n; col++ {
        if nq.isSafe(board, row, col) {
            board[row] = col              // Make choice
            nq.solve(board, row+1)
            board[row] = -1               // Backtrack
        }
    }
}

// SolveNQueens solves and returns all solutions
func (nq *NQueens) SolveNQueens() [][]int {
    nq.solutions = make([][]int, 0)
    board := make([]int, nq.n)
    for i := range board {
        board[i] = -1
    }
    nq.solve(board, 0)
    return nq.solutions
}

// PrintSolution prints a solution
func (nq *NQueens) PrintSolution(board []int) {
    for i := 0; i < nq.n; i++ {
        for j := 0; j < nq.n; j++ {
            if board[i] == j {
                fmt.Print("Q ")
            } else {
                fmt.Print(". ")
            }
        }
        fmt.Println()
    }
    fmt.Println()
}

// PrintAllSolutions prints all solutions
func (nq *NQueens) PrintAllSolutions() {
    fmt.Printf("N-Queens for N=%d\\n\\n", nq.n)
    for idx, solution := range nq.solutions {
        fmt.Printf("Solution %d:\\n", idx+1)
        nq.PrintSolution(solution)
    }
    fmt.Printf("Total solutions: %d\\n", len(nq.solutions))
}

// Usage
func main() {
    n := 4
    solver := NewNQueens(n)
    solver.SolveNQueens()
    solver.PrintAllSolutions()
}`,
  };

  const currentBoard = solutions.length > 0 ? solutions[currentSolution] : null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl">
          <span className="text-4xl">♟️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            N-Queens Problem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Place N queens on N×N board without conflicts
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-fuchsia-600">
          <h3 className="text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-4">
            📝 Problem Statement
          </h3>
          <p className="text-lg text-fuchsia-900 dark:text-fuchsia-100 mb-4">
            Place N queens on an N×N chessboard such that no two queens attack each other. Queens can attack any piece in the same row, column, or diagonal.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold text-fuchsia-700 dark:text-fuchsia-300 mb-2">
              Constraints:
            </p>
            <ul className="text-sm space-y-1">
              <li>• No two queens in the same row</li>
              <li>• No two queens in the same column</li>
              <li>• No two queens in the same diagonal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Solver */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎮 Interactive N-Queens Solver
        </h3>

        <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-6 rounded-xl">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Board Size: {boardSize}×{boardSize}
            </label>
            <input
              type="range"
              min="4"
              max="8"
              value={boardSize}
              onChange={(e) => setBoardSize(parseInt(e.target.value))}
              className="w-full h-2 bg-fuchsia-200 rounded-lg appearance-none cursor-pointer dark:bg-fuchsia-700"
            />
          </div>

          <button
            onClick={solveNQueens}
            className="px-6 py-3 mb-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Solve {boardSize}-Queens
          </button>

          {currentBoard && (
            <>
              <div className="flex justify-center mb-4">
                <div className={`inline-grid gap-1 p-4 bg-white dark:bg-slate-800 rounded-lg`} style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}>
                  {Array(boardSize).fill(0).map((_, row) =>
                    Array(boardSize).fill(0).map((_, col) => {
                      const hasQueen = currentBoard[row] === col;
                      const isLight = (row + col) % 2 === 0;

                      return (
                        <motion.div
                          key={`${row}-${col}`}
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: row * 0.1 + col * 0.05 }}
                          className={`w-12 h-12 flex items-center justify-center text-2xl font-bold ${
                            isLight
                              ? "bg-fuchsia-100 dark:bg-fuchsia-800"
                              : "bg-fuchsia-200 dark:bg-fuchsia-700"
                          }`}
                        >
                          {hasQueen && "♛"}
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => setCurrentSolution(Math.max(0, currentSolution - 1))}
                  disabled={currentSolution === 0}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all"
                >
                  ← Previous
                </button>
                <div className="text-sm font-semibold">
                  Solution {currentSolution + 1} of {solutions.length}
                </div>
                <button
                  onClick={() => setCurrentSolution(Math.min(solutions.length - 1, currentSolution + 1))}
                  disabled={currentSolution === solutions.length - 1}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all"
                >
                  Next →
                </button>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <span className="text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                  Total Solutions Found: {solutions.length}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{codeExamples[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Complexity */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Complexity Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-6 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">
              Time Complexity
            </h4>
            <div className="text-3xl font-bold text-fuchsia-600 mb-2 font-mono">O(N!)</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Worst case tries all N! permutations, but pruning significantly reduces actual complexity
            </p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">
              Space Complexity
            </h4>
            <div className="text-3xl font-bold text-pink-600 mb-2 font-mono">O(N)</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For the recursion stack and board representation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
