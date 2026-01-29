"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Grid3X3, 
  Play, 
  RotateCcw, 
  Search, 
  Check, 
  ArrowRight
} from "lucide-react";

export default function SudokuSolver() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentCell, setCurrentCell] = useState({ row: -1, col: -1 });
  const [animationSpeed, setAnimationSpeed] = useState(50);

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

  const isValidMove = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) if (board[row][x] === num) return false;
    for (let x = 0; x < 9; x++) if (board[x][col] === num) return false;
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (board[i + startRow][j + startCol] === num) return false;
    return true;
  };

  const solveSudokuAnimation = async () => {
    setIsAnimating(true);
    const newBoard = sudokuBoard.map(row => [...row]);

    const solve = async (board) => {
      let row = -1, col = -1;
      let found = false;

      for (let i = 0; i < 9 && !found; i++) {
        for (let j = 0; j < 9 && !found; j++) {
          if (board[i][j] === 0) {
            row = i; col = j; found = true;
          }
        }
      }

      if (!found) return true;

      for (let num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
          setCurrentCell({ row, col });
          board[row][col] = num;
          setSudokuBoard(board.map(r => [...r]));
          await new Promise(resolve => setTimeout(resolve, animationSpeed));

          if (await solve(board)) return true;

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

  const resetPuzzle = () => {
    setSudokuBoard(initialPuzzle.map(row => [...row]));
    setCurrentCell({ row: -1, col: -1 });
    setIsAnimating(false);
  };

  const sudokuCode = {
    javascript: `// Sudoku Solver
function solveSudoku(board) {
    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            // Check row, col, and 3x3 box
            if (board[row][i] == num) return false;
            if (board[i][col] == num) return false;
            
            const r = 3 * Math.floor(row/3) + Math.floor(i/3);
            const c = 3 * Math.floor(col/3) + i%3;
            if (board[r][c] == num) return false;
        }
        return true;
    }

    function solve() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === 0) { // Found empty cell
                    for (let k = 1; k <= 9; k++) {
                        if (isValid(r, c, k)) {
                            board[r][c] = k;    // Place
                            if (solve()) return true; // Recurse
                            board[r][c] = 0;    // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // Solved
    }
    solve();
}`,
    python: `# Sudoku Solver
def solve_sudoku(board):
    def is_valid(row, col, num):
        for i in range(9):
            if board[row][i] == str(num): return False
            if board[i][col] == str(num): return False
            if board[3*(row//3) + i//3][3*(col//3) + i%3] == str(num):
                return False
        return True

    def solve():
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    for k in "123456789":
                        if is_valid(r, c, k):
                            board[r][c] = k    # Place
                            if solve(): return True
                            board[r][c] = "."  # Backtrack
                    return False
        return True
    
    solve()`,
    java: `// Sudoku Solver
public void solveSudoku(char[][] board) {
    solve(board);
}

boolean solve(char[][] board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

boolean isValid(char[][] board, int row, int col, char c) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == c) return false;
        if (board[i][col] == c) return false;
        if (board[3*(row/3) + i/3][3*(col/3) + i%3] == c) return false;
    }
    return true;
}`,
    cpp: `// Sudoku Solver
bool solve(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

bool isValid(vector<vector<char>>& board, int row, int col, char c) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == c) return false;
        if (board[i][col] == c) return false;
        if (board[3*(row/3) + i/3][3*(col/3) + i%3] == c) return false;
    }
    return true;
}`,
    go: `// Sudoku Solver
func solveSudoku(board [][]byte) {
    solve(board)
}

func solve(board [][]byte) bool {
    for i := 0; i < 9; i++ {
        for j := 0; j < 9; j++ {
            if board[i][j] == '.' {
                for c := byte('1'); c <= '9'; c++ {
                    if isValid(board, i, j, c) {
                        board[i][j] = c
                        if solve(board) {
                            return true
                        }
                        board[i][j] = '.'
                    }
                }
                return false
            }
        }
    }
    return true
}

func isValid(board [][]byte, row, col int, c byte) bool {
    for i := 0; i < 9; i++ {
        if board[row][i] == c { return false }
        if board[i][col] == c { return false }
        if board[3*(row/3) + i/3][3*(col/3) + i%3] == c { return false }
    }
    return true
}`
  };

  return (
    <PerspectiveCard color="fuchsia">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center text-fuchsia-500 border border-fuchsia-500/20">
          <Grid3X3 size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Sudoku Solver</h2>
          <p className="text-slate-400 font-medium">Constraint satisfaction with backtracking.</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Interactive Board */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="bg-white p-2 rounded-xl shadow-2xl shadow-fuchsia-500/10">
              <div className="grid grid-cols-9 gap-px bg-slate-300 border-2 border-slate-800">
                {sudokuBoard.map((row, r) => row.map((cell, c) => {
                  const isOriginal = originalCells.has(`${r}-${c}`);
                  const isCurrent = currentCell.row === r && currentCell.col === c;
                  return (
                    <motion.div
                      key={`${r}-${c}`}
                      animate={{ 
                        backgroundColor: isCurrent ? "#fdf4ff" : "#ffffff",
                        scale: isCurrent ? 0.95 : 1
                      }}
                      className={`
                        w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold
                        ${isOriginal ? "text-slate-900" : "text-fuchsia-600"}
                        ${(r + 1) % 3 === 0 && r < 8 ? "border-b-2 border-slate-800" : ""}
                        ${(c + 1) % 3 === 0 && c < 8 ? "border-r-2 border-slate-800" : ""}
                      `}
                    >
                      {cell !== 0 ? cell : ""}
                    </motion.div>
                  );
                }))}
              </div>
            </div>

            <div className="flex-1 space-y-6 w-full">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={solveSudokuAnimation}
                  disabled={isAnimating}
                  className="px-6 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Play size={20} fill="currentColor" /> {isAnimating ? "Solving..." : "Solve"}
                </button>
                <button
                  onClick={resetPuzzle}
                  disabled={isAnimating}
                  className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <RotateCcw size={20} /> Reset
                </button>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Algorithm Steps</h4>
                {[
                  { icon: Search, text: "Find empty cell (0)" },
                  { icon: ArrowRight, text: "Try digits 1-9" },
                  { icon: Check, text: "Validate row, col, box" },
                  { icon: RotateCcw, text: "Backtrack if stuck" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <step.icon size={16} className="text-fuchsia-500" /> {step.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CodeImplementation 
          languages={sudokuCode}
          color="fuchsia"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}