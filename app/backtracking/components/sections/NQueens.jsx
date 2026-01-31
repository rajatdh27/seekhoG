"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  LayoutGrid, 
  Crown, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw
} from "lucide-react";

export default function NQueens() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [boardSize, setBoardSize] = useState(4);
  const [solutions, setSolutions] = useState([]);
  const [currentSolution, setCurrentSolution] = useState(0);

  const solveNQueens = () => {
    const n = boardSize;
    const allSolutions = [];

    const isSafe = (board, row, col) => {
      // Check column
      for (let i = 0; i < row; i++) {
        if (board[i] === col) return false;
      }
      // Check diagonals
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i] === j) return false;
      }
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

    solve(Array(n).fill(-1), 0);
    setSolutions(allSolutions);
    setCurrentSolution(0);
  };

  const nQueensCode = {
    javascript: `// N-Queens Solver
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill(-1); // index=row, val=col

    function isSafe(row, col) {
        for (let prevRow = 0; prevRow < row; prevRow++) {
            const prevCol = board[prevRow];
            // Same column or same diagonal
            if (prevCol === col || 
                Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
                return false;
            }
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            // Found valid placement
            const solution = board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1));
            result.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;    // Place
                backtrack(row + 1);  // Recurse
                board[row] = -1;     // Backtrack
            }
        }
    }

    backtrack(0);
    return result
`,
    python: `# N-Queens Solver
def solve_n_queens(n):
    result = []
    board = [-1] * n

    def is_safe(row, col):
        for prev_row in range(row):
            prev_col = board[prev_row]
            if prev_col == col or \
               abs(prev_row - row) == abs(prev_col - col):
                return False
        return True

    def backtrack(row):
        if row == n:
            solution = []
            for i in range(n):
                line = ['.'] * n
                line[board[i]] = 'Q'
                solution.append("".join(line))
            result.append(solution)
            return

        for col in range(n):
            if is_safe(row, col):
                board[row] = col    # Place
                backtrack(row + 1)  # Recurse
                board[row] = -1     # Backtrack

    backtrack(0)
    return result`,
    java: `// N-Queens Solver
class Solution {
    List<List<String>> result = new ArrayList<>();
    int[] board; // index=row, val=col

    public List<List<String>> solveNQueens(int n) {
        board = new int[n];
        backtrack(0, n);
        return result;
    }

    void backtrack(int row, int n) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                char[] line = new char[n];
                Arrays.fill(line, '.');
                line[board[i]] = 'Q';
                solution.add(new String(line));
            }
            result.add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                backtrack(row + 1, n);
                // Backtrack implicit by overwriting board[row]
            }
        }
    }

    boolean isSafe(int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i] == col || Math.abs(i - row) == Math.abs(board[i] - col))
                return false;
        }
        return true;
    }
}`,
    cpp: `// N-Queens Solver
class Solution {
    vector<vector<string>> result;
    vector<int> board;

    bool isSafe(int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i] == col || abs(i - row) == abs(board[i] - col))
                return false;
        }
        return true;
    }

    void backtrack(int row, int n) {
        if (row == n) {
            vector<string> sol;
            for (int i = 0; i < n; i++) {
                string line(n, '.');
                line[board[i]] = 'Q';
                sol.push_back(line);
            }
            result.push_back(sol);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                backtrack(row + 1, n);
            }
        }
    }

public:
    vector<vector<string>> solveNQueens(int n) {
        board.resize(n);
        backtrack(0, n);
        return result;
    }
};
`,
    go: `// N-Queens Solver
func solveNQueens(n int) [][]string {
    var result [][]string
    board := make([]int, n)

    var isSafe func(int, int) bool
    isSafe = func(row, col int) bool {
        for i := 0; i < row; i++ {
            if board[i] == col || abs(i-row) == abs(board[i]-col) {
                return false
            }
        }
        return true
    }

    var backtrack func(int)
    backtrack = func(row int) {
        if row == n {
            solution := make([]string, n)
            for i := 0; i < n; i++ {
                line := make([]byte, n)
                for j := 0; j < n; j++ {
                    if board[i] == j {
                        line[j] = 'Q'
                    } else {
                        line[j] = '.'
                    }
                }
                solution[i] = string(line)
            }
            result = append(result, solution)
            return
        }

        for col := 0; col < n; col++ {
            if isSafe(row, col) {
                board[row] = col
                backtrack(row + 1)
            }
        }
    }

    backtrack(0)
    return result
}

func abs(x int) int {
    if x < 0 { return -x }
    return x
}`
  };

  const currentBoard = solutions.length > 0 ? solutions[currentSolution] : null;

  return (
    <PerspectiveCard color="fuchsia">
      <SectionHeader 
        title="N-Queens Problem" 
        description="The classic backtracking challenge."
        icon={LayoutGrid} 
        color="fuchsia" 
      />

      <div className="space-y-12">
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 mt-1">
              <Crown size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Place <code className="text-fuchsia-400">N</code> chess queens on an <code className="text-fuchsia-400">N×N</code> board so that no two queens attack each other.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["No shared row", "No shared column", "No shared diagonal"].map((rule, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                    <AlertTriangle size={14} className="text-rose-400" /> {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Solver */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
           <div className="absolute inset-0 bg-fuchsia-500/5 transition-colors duration-500" />
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="mb-8 w-full max-w-md">
               <div className="flex justify-between text-sm font-bold text-slate-400 mb-2">
                 <span>Board Size: {boardSize}×{boardSize}</span>
                 <span>{solutions.length} Solutions</span>
               </div>
               <input
                 type="range"
                 min="4"
                 max="8"
                 value={boardSize}
                 onChange={(e) => {
                   setBoardSize(parseInt(e.target.value));
                   setSolutions([]);
                   setCurrentSolution(0);
                 }}
                 className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
               />
             </div>

             {solutions.length === 0 ? (
               <button
                 onClick={solveNQueens}
                 className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl font-black text-lg transition-all shadow-lg shadow-fuchsia-600/20 active:scale-95 flex items-center gap-2"
               >
                 <RotateCcw size={20} /> Solve N-Queens
               </button>
             ) : (
               <div className="w-full flex flex-col items-center">
                 <div 
                   className="grid gap-1 mb-8 bg-slate-950 p-2 rounded-xl border border-white/10 shadow-2xl"
                   style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}
                 >
                   {Array(boardSize).fill(0).map((_, r) => 
                     Array(boardSize).fill(0).map((_, c) => {
                       const isQueen = currentBoard[r] === c;
                       const isBlack = (r + c) % 2 === 1;
                       return (
                         <motion.div
                           key={`${r}-${c}`}
                           initial={{ scale: 0.8 }}
                           animate={{ scale: 1 }}
                           className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl
                             ${isBlack ? 'bg-slate-800' : 'bg-slate-700'}
                             ${isQueen ? 'bg-fuchsia-600/20 ring-2 ring-inset ring-fuchsia-500' : ''}
                             rounded-md
                           `}
                         >
                           {isQueen && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>♛</motion.span>}
                         </motion.div>
                       );
                     })
                   )}
                 </div>

                 <div className="flex items-center gap-4">
                   <button
                     onClick={() => setCurrentSolution(Math.max(0, currentSolution - 1))}
                     disabled={currentSolution === 0}
                     className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl disabled:opacity-50 transition-colors"
                   >
                     <ArrowRight size={20} className="rotate-180" />
                   </button>
                   <span className="font-mono font-bold text-fuchsia-400">
                     {currentSolution + 1} / {solutions.length}
                   </span>
                   <button
                     onClick={() => setCurrentSolution(Math.min(solutions.length - 1, currentSolution + 1))}
                     disabled={currentSolution === solutions.length - 1}
                     className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl disabled:opacity-50 transition-colors"
                   >
                     <ArrowRight size={20} />
                   </button>
                 </div>
               </div>
             )}
           </div>
        </div>

        <CodeImplementation 
          languages={nQueensCode}
          color="fuchsia"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}