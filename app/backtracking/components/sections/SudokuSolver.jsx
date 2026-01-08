"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SudokuSolver() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");
  const [boardSize] = useState(9);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentCell, setCurrentCell] = useState({ row: -1, col: -1 });
  const [animationSpeed, setAnimationSpeed] = useState(100);

  // Initial sudoku puzzle (0 represents empty cell)
  const initialPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [sudokuBoard, setSudokuBoard] = useState(initialPuzzle.map(row => [...row]));
  const [originalCells, setOriginalCells] = useState(new Set());

  useEffect(() => {
    const original = new Set();
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (initialPuzzle[i][j] !== 0) {
          original.add(`${i}-${j}`);
        }
      }
    }
    setOriginalCells(original);
  }, []);

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const codes = {
    c: `#include <stdio.h>
#include <stdbool.h>

#define N 9

// Check if num is valid at board[row][col]
bool isValid(int board[N][N], int row, int col, int num) {
    // Check row
    for (int x = 0; x < N; x++)
        if (board[row][x] == num)
            return false;

    // Check column
    for (int x = 0; x < N; x++)
        if (board[x][col] == num)
            return false;

    // Check 3x3 box
    int startRow = row - row % 3;
    int startCol = col - col % 3;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            if (board[i + startRow][j + startCol] == num)
                return false;

    return true;
}

bool solveSudoku(int board[N][N]) {
    int row = -1, col = -1;
    bool isEmpty = false;

    // Find empty cell
    for (int i = 0; i < N && !isEmpty; i++) {
        for (int j = 0; j < N && !isEmpty; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;
                isEmpty = true;
            }
        }
    }

    // No empty cell found - solved!
    if (!isEmpty)
        return true;

    // Try digits 1-9
    for (int num = 1; num <= N; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;     // Make choice

            if (solveSudoku(board))    // Recurse
                return true;

            board[row][col] = 0;       // Backtrack
        }
    }

    return false;  // Trigger backtracking
}

void printBoard(int board[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%d ", board[i][j]);
        printf("\\n");
    }
}

int main() {
    int board[N][N] = {
        {5, 3, 0, 0, 7, 0, 0, 0, 0},
        {6, 0, 0, 1, 9, 5, 0, 0, 0},
        {0, 9, 8, 0, 0, 0, 0, 6, 0},
        {8, 0, 0, 0, 6, 0, 0, 0, 3},
        {4, 0, 0, 8, 0, 3, 0, 0, 1},
        {7, 0, 0, 0, 2, 0, 0, 0, 6},
        {0, 6, 0, 0, 0, 0, 2, 8, 0},
        {0, 0, 0, 4, 1, 9, 0, 0, 5},
        {0, 0, 0, 0, 8, 0, 0, 7, 9}
    };

    if (solveSudoku(board)) {
        printf("Sudoku solved successfully:\\n");
        printBoard(board);
    } else {
        printf("No solution exists\\n");
    }

    return 0;
}

// Time Complexity: O(9^(n*n)) worst case
// Space Complexity: O(n*n) for recursion stack`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

class SudokuSolver {
private:
    static const int N = 9;

    // Check if num is valid at board[row][col]
    bool isValid(vector<vector<int>>& board, int row, int col, int num) {
        // Check row
        for (int x = 0; x < N; x++)
            if (board[row][x] == num)
                return false;

        // Check column
        for (int x = 0; x < N; x++)
            if (board[x][col] == num)
                return false;

        // Check 3x3 box
        int startRow = row - row % 3;
        int startCol = col - col % 3;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i + startRow][j + startCol] == num)
                    return false;

        return true;
    }

public:
    bool solveSudoku(vector<vector<int>>& board) {
        int row = -1, col = -1;
        bool isEmpty = false;

        // Find empty cell
        for (int i = 0; i < N && !isEmpty; i++) {
            for (int j = 0; j < N && !isEmpty; j++) {
                if (board[i][j] == 0) {
                    row = i;
                    col = j;
                    isEmpty = true;
                }
            }
        }

        // No empty cell found - solved!
        if (!isEmpty)
            return true;

        // Try digits 1-9
        for (int num = 1; num <= N; num++) {
            if (isValid(board, row, col, num)) {
                board[row][col] = num;     // Make choice

                if (solveSudoku(board))    // Recurse
                    return true;

                board[row][col] = 0;       // Backtrack
            }
        }

        return false;  // Trigger backtracking
    }

    void printBoard(const vector<vector<int>>& board) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                cout << board[i][j] << " ";
            cout << endl;
        }
    }
};

int main() {
    vector<vector<int>> board = {
        {5, 3, 0, 0, 7, 0, 0, 0, 0},
        {6, 0, 0, 1, 9, 5, 0, 0, 0},
        {0, 9, 8, 0, 0, 0, 0, 6, 0},
        {8, 0, 0, 0, 6, 0, 0, 0, 3},
        {4, 0, 0, 8, 0, 3, 0, 0, 1},
        {7, 0, 0, 0, 2, 0, 0, 0, 6},
        {0, 6, 0, 0, 0, 0, 2, 8, 0},
        {0, 0, 0, 4, 1, 9, 0, 0, 5},
        {0, 0, 0, 0, 8, 0, 0, 7, 9}
    };

    SudokuSolver solver;
    if (solver.solveSudoku(board)) {
        cout << "Sudoku solved successfully:" << endl;
        solver.printBoard(board);
    } else {
        cout << "No solution exists" << endl;
    }

    return 0;
}

// Time Complexity: O(9^(n*n)) worst case
// Space Complexity: O(n*n) for recursion stack`,

    java: `public class SudokuSolver {
    private static final int N = 9;

    // Check if num is valid at board[row][col]
    private boolean isValid(int[][] board, int row, int col, int num) {
        // Check row
        for (int x = 0; x < N; x++)
            if (board[row][x] == num)
                return false;

        // Check column
        for (int x = 0; x < N; x++)
            if (board[x][col] == num)
                return false;

        // Check 3x3 box
        int startRow = row - row % 3;
        int startCol = col - col % 3;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i + startRow][j + startCol] == num)
                    return false;

        return true;
    }

    public boolean solveSudoku(int[][] board) {
        int row = -1, col = -1;
        boolean isEmpty = false;

        // Find empty cell
        for (int i = 0; i < N && !isEmpty; i++) {
            for (int j = 0; j < N && !isEmpty; j++) {
                if (board[i][j] == 0) {
                    row = i;
                    col = j;
                    isEmpty = true;
                }
            }
        }

        // No empty cell found - solved!
        if (!isEmpty)
            return true;

        // Try digits 1-9
        for (int num = 1; num <= N; num++) {
            if (isValid(board, row, col, num)) {
                board[row][col] = num;     // Make choice

                if (solveSudoku(board))    // Recurse
                    return true;

                board[row][col] = 0;       // Backtrack
            }
        }

        return false;  // Trigger backtracking
    }

    public void printBoard(int[][] board) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                System.out.print(board[i][j] + " ");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] board = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };

        SudokuSolver solver = new SudokuSolver();
        if (solver.solveSudoku(board)) {
            System.out.println("Sudoku solved successfully:");
            solver.printBoard(board);
        } else {
            System.out.println("No solution exists");
        }
    }
}

// Time Complexity: O(9^(n*n)) worst case
// Space Complexity: O(n*n) for recursion stack`,

    javascript: `class SudokuSolver {
    constructor() {
        this.N = 9;
    }

    // Check if num is valid at board[row][col]
    isValid(board, row, col, num) {
        // Check row
        for (let x = 0; x < this.N; x++)
            if (board[row][x] === num)
                return false;

        // Check column
        for (let x = 0; x < this.N; x++)
            if (board[x][col] === num)
                return false;

        // Check 3x3 box
        const startRow = row - (row % 3);
        const startCol = col - (col % 3);
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (board[i + startRow][j + startCol] === num)
                    return false;

        return true;
    }

    solveSudoku(board) {
        let row = -1, col = -1;
        let isEmpty = false;

        // Find empty cell
        for (let i = 0; i < this.N && !isEmpty; i++) {
            for (let j = 0; j < this.N && !isEmpty; j++) {
                if (board[i][j] === 0) {
                    row = i;
                    col = j;
                    isEmpty = true;
                }
            }
        }

        // No empty cell found - solved!
        if (!isEmpty)
            return true;

        // Try digits 1-9
        for (let num = 1; num <= this.N; num++) {
            if (this.isValid(board, row, col, num)) {
                board[row][col] = num;     // Make choice

                if (this.solveSudoku(board))    // Recurse
                    return true;

                board[row][col] = 0;       // Backtrack
            }
        }

        return false;  // Trigger backtracking
    }

    printBoard(board) {
        for (let i = 0; i < this.N; i++) {
            console.log(board[i].join(" "));
        }
    }
}

// Example usage
const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solver = new SudokuSolver();
if (solver.solveSudoku(board)) {
    console.log("Sudoku solved successfully:");
    solver.printBoard(board);
} else {
    console.log("No solution exists");
}

// Time Complexity: O(9^(n*n)) worst case
// Space Complexity: O(n*n) for recursion stack`,

    python: `class SudokuSolver:
    def __init__(self):
        self.N = 9

    def is_valid(self, board, row, col, num):
        """Check if num is valid at board[row][col]"""
        # Check row
        for x in range(self.N):
            if board[row][x] == num:
                return False

        # Check column
        for x in range(self.N):
            if board[x][col] == num:
                return False

        # Check 3x3 box
        start_row = row - row % 3
        start_col = col - col % 3
        for i in range(3):
            for j in range(3):
                if board[i + start_row][j + start_col] == num:
                    return False

        return True

    def solve_sudoku(self, board):
        """Solve sudoku using backtracking"""
        row, col = -1, -1
        is_empty = False

        # Find empty cell
        for i in range(self.N):
            for j in range(self.N):
                if board[i][j] == 0:
                    row, col = i, j
                    is_empty = True
                    break
            if is_empty:
                break

        # No empty cell found - solved!
        if not is_empty:
            return True

        # Try digits 1-9
        for num in range(1, self.N + 1):
            if self.is_valid(board, row, col, num):
                board[row][col] = num     # Make choice

                if self.solve_sudoku(board):    # Recurse
                    return True

                board[row][col] = 0       # Backtrack

        return False  # Trigger backtracking

    def print_board(self, board):
        """Print the sudoku board"""
        for i in range(self.N):
            print(" ".join(str(num) for num in board[i]))

# Example usage
board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

solver = SudokuSolver()
if solver.solve_sudoku(board):
    print("Sudoku solved successfully:")
    solver.print_board(board)
else:
    print("No solution exists")

# Time Complexity: O(9^(n*n)) worst case
# Space Complexity: O(n*n) for recursion stack`,

    go: `package main

import "fmt"

const N = 9

type SudokuSolver struct{}

// Check if num is valid at board[row][col]
func (s *SudokuSolver) isValid(board [][]int, row, col, num int) bool {
    // Check row
    for x := 0; x < N; x++ {
        if board[row][x] == num {
            return false
        }
    }

    // Check column
    for x := 0; x < N; x++ {
        if board[x][col] == num {
            return false
        }
    }

    // Check 3x3 box
    startRow := row - row%3
    startCol := col - col%3
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if board[i+startRow][j+startCol] == num {
                return false
            }
        }
    }

    return true
}

func (s *SudokuSolver) solveSudoku(board [][]int) bool {
    row, col := -1, -1
    isEmpty := false

    // Find empty cell
    for i := 0; i < N && !isEmpty; i++ {
        for j := 0; j < N && !isEmpty; j++ {
            if board[i][j] == 0 {
                row, col = i, j
                isEmpty = true
            }
        }
    }

    // No empty cell found - solved!
    if !isEmpty {
        return true
    }

    // Try digits 1-9
    for num := 1; num <= N; num++ {
        if s.isValid(board, row, col, num) {
            board[row][col] = num     // Make choice

            if s.solveSudoku(board) { // Recurse
                return true
            }

            board[row][col] = 0       // Backtrack
        }
    }

    return false // Trigger backtracking
}

func (s *SudokuSolver) printBoard(board [][]int) {
    for i := 0; i < N; i++ {
        for j := 0; j < N; j++ {
            fmt.Printf("%d ", board[i][j])
        }
        fmt.Println()
    }
}

func main() {
    board := [][]int{
        {5, 3, 0, 0, 7, 0, 0, 0, 0},
        {6, 0, 0, 1, 9, 5, 0, 0, 0},
        {0, 9, 8, 0, 0, 0, 0, 6, 0},
        {8, 0, 0, 0, 6, 0, 0, 0, 3},
        {4, 0, 0, 8, 0, 3, 0, 0, 1},
        {7, 0, 0, 0, 2, 0, 0, 0, 6},
        {0, 6, 0, 0, 0, 0, 2, 8, 0},
        {0, 0, 0, 4, 1, 9, 0, 0, 5},
        {0, 0, 0, 0, 8, 0, 0, 7, 9},
    }

    solver := &SudokuSolver{}
    if solver.solveSudoku(board) {
        fmt.Println("Sudoku solved successfully:")
        solver.printBoard(board)
    } else {
        fmt.Println("No solution exists")
    }
}

// Time Complexity: O(9^(n*n)) worst case
// Space Complexity: O(n*n) for recursion stack`,
  };

  const solveSudokuAnimation = async () => {
    setIsAnimating(true);
    const newBoard = sudokuBoard.map(row => [...row]);

    const solve = async (board) => {
      // Find empty cell
      let row = -1, col = -1;
      let found = false;

      for (let i = 0; i < 9 && !found; i++) {
        for (let j = 0; j < 9 && !found; j++) {
          if (board[i][j] === 0) {
            row = i;
            col = j;
            found = true;
          }
        }
      }

      if (!found) return true; // Solved!

      // Try numbers 1-9
      for (let num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
          setCurrentCell({ row, col });
          await new Promise(resolve => setTimeout(resolve, animationSpeed));

          board[row][col] = num;
          setSudokuBoard(board.map(r => [...r]));

          if (await solve(board)) {
            return true;
          }

          // Backtrack
          board[row][col] = 0;
          setSudokuBoard(board.map(r => [...r]));
          await new Promise(resolve => setTimeout(resolve, animationSpeed));
        }
      }

      return false;
    };

    await solve(newBoard);
    setCurrentCell({ row: -1, col: -1 });
    setIsAnimating(false);
  };

  const isValidMove = (board, row, col, num) => {
    // Check row
    for (let x = 0; x < 9; x++)
      if (board[row][x] === num) return false;

    // Check column
    for (let x = 0; x < 9; x++)
      if (board[x][col] === num) return false;

    // Check 3x3 box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (board[i + startRow][j + startCol] === num) return false;

    return true;
  };

  const resetPuzzle = () => {
    setSudokuBoard(initialPuzzle.map(row => [...row]));
    setCurrentCell({ row: -1, col: -1 });
    setIsAnimating(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
      <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        🎯 Sudoku Solver
      </h2>

      {/* Interactive Sudoku Solver */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🧩 Interactive Sudoku Solver
        </h3>

        <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
          {/* Sudoku Board */}
          <div className="flex justify-center mb-6">
            <div className="inline-block p-4 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
              <div className="grid grid-cols-9 gap-0">
                {sudokuBoard.map((row, i) =>
                  row.map((cell, j) => {
                    const isOriginal = originalCells.has(`${i}-${j}`);
                    const isCurrent = currentCell.row === i && currentCell.col === j;
                    const isBoxBorder = (j + 1) % 3 === 0 && j < 8;
                    const isRowBorder = (i + 1) % 3 === 0 && i < 8;

                    return (
                      <motion.div
                        key={`${i}-${j}`}
                        animate={{
                          scale: isCurrent ? 1.1 : 1,
                          backgroundColor: isCurrent
                            ? "#fcd34d"
                            : isOriginal
                            ? "#e0e7ff"
                            : "#ffffff",
                        }}
                        className={`
                          w-10 h-10 flex items-center justify-center text-lg font-bold
                          border border-slate-300 dark:border-slate-600
                          ${isBoxBorder ? "border-r-2 border-r-fuchsia-600" : ""}
                          ${isRowBorder ? "border-b-2 border-b-fuchsia-600" : ""}
                          ${isOriginal ? "text-slate-900 dark:text-slate-100" : "text-fuchsia-600 dark:text-fuchsia-400"}
                          ${isCurrent ? "ring-2 ring-yellow-400" : ""}
                        `}
                      >
                        {cell !== 0 ? cell : ""}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 items-center">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Animation Speed: {animationSpeed}ms
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="50"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                className="w-32"
                disabled={isAnimating}
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={solveSudokuAnimation}
                disabled={isAnimating}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  isAnimating
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:shadow-lg"
                }`}
              >
                {isAnimating ? "Solving..." : "Solve Sudoku"}
              </button>

              <button
                onClick={resetPuzzle}
                disabled={isAnimating}
                className="px-6 py-2 rounded-lg font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all disabled:opacity-50"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 border border-slate-300 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Original</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white dark:bg-slate-700 border border-slate-300 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Empty/Solved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-300 border border-slate-300 rounded"></div>
              <span className="text-slate-700 dark:text-slate-300">Current</span>
            </div>
          </div>
        </div>
      </div>

      {/* Algorithm Explanation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔍 How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1. Find Empty",
              desc: "Search for an empty cell (0)",
              icon: "🔎",
            },
            {
              step: "2. Try Numbers",
              desc: "Try digits 1-9 if valid",
              icon: "🔢",
            },
            {
              step: "3. Validate",
              desc: "Check row, column, and 3×3 box",
              icon: "✅",
            },
            {
              step: "4. Recurse",
              desc: "Move to next empty cell",
              icon: "➡️",
            },
            {
              step: "5. Backtrack",
              desc: "If stuck, undo and try next number",
              icon: "⬅️",
            },
            {
              step: "6. Solution",
              desc: "No empty cells = Solved!",
              icon: "🎉",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-1">
                {item.step}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
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
            <code>{codes[currentLanguage]}</code>
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
              Time Complexity
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <span className="font-mono bg-fuchsia-100 dark:bg-fuchsia-900/40 px-2 py-1 rounded">
                O(9^(n×n))
              </span>{" "}
              worst case
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For each cell, we try up to 9 digits. In worst case with many empty cells, this leads to exponential time.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-3">
              Space Complexity
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <span className="font-mono bg-fuchsia-100 dark:bg-fuchsia-900/40 px-2 py-1 rounded">
                O(n×n)
              </span>{" "}
              for recursion stack
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Maximum recursion depth is the number of cells (9×9 = 81), storing the call stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
