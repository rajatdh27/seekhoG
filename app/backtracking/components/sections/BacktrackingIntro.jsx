"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  RotateCcw, 
  Map, 
  GitBranch, 
  XCircle, 
  CheckCircle2, 
  Search, 
  LayoutGrid
} from "lucide-react";

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
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const concepts = [
    { title: "State Space Tree", description: "Visualizing all possible states as a tree where each branch is a choice.", icon: GitBranch, color: "emerald" },
    { title: "Pruning", description: "Cutting off branches early when we know they won't lead to a solution.", icon: XCircle, color: "rose" },
    { title: "Backtracking", description: "The act of undoing a choice to return to a previous valid state.", icon: RotateCcw, color: "blue" }
  ];

  const solveMaze = async () => {
    setIsAnimating(true);
    setPath([]);
    setCurrentStep(-1);

    const n = maze.length;
    const visited = Array(n).fill(0).map(() => Array(n).fill(false));

    const solve = async (row, col, currentPath) => {
      if (row < 0 || row >= n || col < 0 || col >= n) return false;
      if (maze[row][col] === 0 || visited[row][col]) return false;

      visited[row][col] = true;
      const newPath = [...currentPath, [row, col]];

      await new Promise(resolve => setTimeout(resolve, 300));
      setPath([...newPath]);
      setCurrentStep(newPath.length - 1);

      if (row === n - 1 && col === n - 1) return true;

      // Try directions: Right, Down, Left, Up
      if (await solve(row, col + 1, newPath)) return true;
      if (await solve(row + 1, col, newPath)) return true;
      if (await solve(row, col - 1, newPath)) return true;
      if (await solve(row - 1, col, newPath)) return true;

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

  const isInPath = (row, col) => path.some(([r, c]) => r === row && c === col);
  const getPathIndex = (row, col) => path.findIndex(([r, c]) => r === row && c === col);

  const templateCode = {
    javascript: `function backtrack(state) {
    // 1. Base Case: Success
    if (isSolution(state)) {
        output(state);
        return;
    }

    // 2. Explore Choices
    for (let choice of getChoices(state)) {
        if (isValid(state, choice)) {
            // Make Choice
            state.add(choice);
            
            // Recurse
            backtrack(state);
            
            // Undo Choice (Backtrack)
            state.remove(choice);
        }
    }
}`,
    python: `def backtrack(state):
    # 1. Base Case: Success
    if is_solution(state):
        output(state)
        return

    # 2. Explore Choices
    for choice in get_choices(state):
        if is_valid(state, choice):
            # Make Choice
            state.add(choice)
            
            # Recurse
            backtrack(state)
            
            # Undo Choice (Backtrack)
            state.remove(choice)`,
    java: `void backtrack(List<Integer> state) {
    // 1. Base Case: Success
    if (isSolution(state)) {
        output(state);
        return;
    }

    // 2. Explore Choices
    for (int choice : getChoices(state)) {
        if (isValid(state, choice)) {
            // Make Choice
            state.add(choice);
            
            // Recurse
            backtrack(state);
            
            // Undo Choice (Backtrack)
            state.remove(state.size() - 1);
        }
    }
}`,
    cpp: `void backtrack(vector<int>& state) {
    // 1. Base Case: Success
    if (isSolution(state)) {
        output(state);
        return;
    }

    // 2. Explore Choices
    for (int choice : getChoices(state)) {
        if (isValid(state, choice)) {
            // Make Choice
            state.push_back(choice);
            
            // Recurse
            backtrack(state);
            
            // Undo Choice (Backtrack)
            state.pop_back();
        }
    }
}`,
    go: `func backtrack(state []int) {
    // 1. Base Case: Success
    if isSolution(state) {
        output(state)
        return
    }

    // 2. Explore Choices
    for _, choice := range getChoices(state) {
        if isValid(state, choice) {
            // Make Choice
            state = append(state, choice)
            
            // Recurse
            backtrack(state)
            
            // Undo Choice (Backtrack)
            state = state[:len(state)-1]
        }
    }
}`
  };

  return (
    <PerspectiveCard color="fuchsia">
      <SectionHeader 
        title="What is Backtracking?" 
        description="Solving problems by trying, failing, and trying again."
        icon={RotateCcw} 
        color="fuchsia" 
      />

      <div className="space-y-12">
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          <strong className="text-white">Backtracking</strong> is an algorithmic technique that explores all potential solutions recursively. It builds candidates incrementally and <strong className="text-fuchsia-400">abandons</strong> a candidate ("backtracks") as soon as it determines the candidate cannot lead to a valid solution.
        </p>

        {/* Interactive Maze */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-fuchsia-500/5 group-hover:bg-fuchsia-500/10 transition-colors duration-500" />
           <h3 className="text-xl font-black text-white mb-6 relative z-10 flex items-center gap-2">
             <Map size={20} className="text-fuchsia-400" /> Visualizing the Search
           </h3>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
             <div className="grid grid-cols-4 gap-2 bg-slate-950 p-4 rounded-xl border border-white/5">
               {maze.map((row, r) => row.map((cell, c) => {
                 const inPath = isInPath(r, c);
                 const isCurrent = getPathIndex(r, c) === currentStep;
                 const isStart = r === 0 && c === 0;
                 const isEnd = r === 3 && c === 3;
                 
                 return (
                   <motion.div
                     key={`${r}-${c}`}
                     initial={{ scale: 0.8 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className={`w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold relative
                       ${cell === 0 ? "bg-slate-800" : "bg-slate-700"}
                       ${isStart ? "ring-2 ring-emerald-500" : ""}
                       ${isEnd ? "ring-2 ring-blue-500" : ""}
                       ${inPath ? "bg-fuchsia-600 text-white" : ""}
                     `}
                   >
                     {isStart && "S"}
                     {isEnd && "E"}
                     {!isStart && !isEnd && cell === 0 && "🚧"}
                     {isCurrent && (
                       <motion.div 
                         layoutId="cursor"
                         className="absolute inset-0 border-2 border-yellow-400 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.5)]" 
                       />
                     )}
                   </motion.div>
                 );
               }))}
             </div>

             <div className="flex-1 space-y-4">
               <div className="flex gap-4">
                 <button
                   onClick={solveMaze}
                   disabled={isAnimating}
                   className="flex-1 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-fuchsia-600/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isAnimating ? "Exploring..." : "Start Search"}
                 </button>
                 <button
                   onClick={resetMaze}
                   disabled={isAnimating}
                   className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                 >
                   Reset
                 </button>
               </div>
               
               <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 text-xs text-slate-400 font-mono">
                 <div>Step: {currentStep + 1}</div>
                 <div>Status: {isAnimating ? "Backtracking..." : path.length > 0 ? "Found!" : "Ready"}</div>
                 <div className="mt-2 text-fuchsia-300">
                   {isAnimating ? "Trying path... if blocked, go back." : "Click Start to see the algorithm in action."}
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Template Code */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <LayoutGrid size={24} className="text-purple-400" /> The Blueprint
          </h3>
          <CodeImplementation 
            languages={templateCode}
            color="fuchsia"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* Key Concepts Grid */}
        <ConceptGrid items={concepts} columns={3} />

      </div>
    </PerspectiveCard>
  );
}