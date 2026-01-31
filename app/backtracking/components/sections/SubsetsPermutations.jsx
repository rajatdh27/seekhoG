"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  GitMerge, 
  Copy, 
  RotateCw, 
  Play,
  Layers,
  List
} from "lucide-react";

export default function SubsetsPermutations() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [activeTab, setActiveTab] = useState("subsets");
  const [isAnimating, setIsAnimating] = useState(false);
  const [results, setResults] = useState([]);

  const subsetsCode = {
    javascript: `// Generate All Subsets
function subsets(nums) {
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}`,
    python: `# Generate All Subsets
def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])
        
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
            
    backtrack(0, [])
    return result`,
    java: `// Generate All Subsets
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, 0, new ArrayList<>(), result);
    return result;
}

void backtrack(int[] nums, int start, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(nums, i + 1, current, result);
        current.remove(current.size() - 1);
    }
}`,
    cpp: `// Generate All Subsets
void backtrack(vector<int>& nums, int start, vector<int>& current, vector<vector<int>>& result) {
    result.push_back(current);
    
    for (int i = start; i < nums.size(); i++) {
        current.push_back(nums[i]);
        backtrack(nums, i + 1, current, result);
        current.pop_back();
    }
}

vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(nums, 0, current, result);
    return result;
}`,
    go: `// Generate All Subsets
func subsets(nums []int) [][]int {
    var result [][]int
    
    var backtrack func(int, []int)
    backtrack = func(start int, current []int) {
        temp := make([]int, len(current))
        copy(temp, current)
        result = append(result, temp)
        
        for i := start; i < len(nums); i++ {
            current = append(current, nums[i])
            backtrack(i+1, current)
            current = current[:len(current)-1]
        }
    }
    
    backtrack(0, []int{})
    return result
}`
  };

  const permutationsCode = {
    javascript: `// Generate All Permutations
function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }
    
    backtrack([]);
    return result;
}`,
    python: `# Generate All Permutations
def permute(nums):
    result = []
    used = [False] * len(nums)
    
    def backtrack(current):
        if len(current) == len(nums):
            result.append(current[:])
            return
            
        for i in range(len(nums)):
            if used[i]: continue
            
            used[i] = True
            current.append(nums[i])
            backtrack(current)
            current.pop()
            used[i] = False
            
    backtrack([])
    return result`,
    java: `// Generate All Permutations
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(nums, new boolean[nums.length], new ArrayList<>(), result);
    return result;
}

void backtrack(int[] nums, boolean[] used, List<Integer> current, List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        used[i] = true;
        current.add(nums[i]);
        backtrack(nums, used, current, result);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}`,
    cpp: `// Generate All Permutations
void backtrack(vector<int>& nums, vector<bool>& used, vector<int>& current, vector<vector<int>>& result) {
    if (current.size() == nums.size()) {
        result.push_back(current);
        return;
    }
    
    for (int i = 0; i < nums.size(); i++) {
        if (used[i]) continue;
        
        used[i] = true;
        current.push_back(nums[i]);
        backtrack(nums, used, current, result);
        current.pop_back();
        used[i] = false;
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    vector<bool> used(nums.size(), false);
    backtrack(nums, used, current, result);
    return result;
}`,
    go: `// Generate All Permutations
func permute(nums []int) [][]int {
    var result [][]int
    used := make([]bool, len(nums))
    
    var backtrack func([]int)
    backtrack = func(current []int) {
        if len(current) == len(nums) {
            temp := make([]int, len(current))
            copy(temp, current)
            result = append(result, temp)
            return
        }
        
        for i := 0; i < len(nums); i++ {
            if used[i] { continue }
            
            used[i] = true
            current = append(current, nums[i])
            backtrack(current)
            current = current[:len(current)-1]
            used[i] = false
        }
    }
    
    backtrack([]int{})
    return result
}`
  };

  const runDemo = async () => {
    setIsAnimating(true);
    setResults([]);
    const nums = [1, 2, 3];
    const generated = [];

    if (activeTab === "subsets") {
      const backtrack = async (start, current) => {
        generated.push([...current]);
        setResults([...generated]);
        await new Promise(r => setTimeout(r, 100));
        
        for (let i = start; i < nums.length; i++) {
          current.push(nums[i]);
          await backtrack(i + 1, current);
          current.pop();
        }
      };
      await backtrack(0, []);
    } else {
      const used = [false, false, false];
      const backtrack = async (current) => {
        if (current.length === nums.length) {
          generated.push([...current]);
          setResults([...generated]);
          await new Promise(r => setTimeout(r, 100));
          return;
        }
        for (let i = 0; i < nums.length; i++) {
          if (used[i]) continue;
          used[i] = true;
          current.push(nums[i]);
          await backtrack(current);
          current.pop();
          used[i] = false;
        }
      };
      await backtrack([]);
    }
    setIsAnimating(false);
  };

  return (
    <PerspectiveCard color="purple">
      <SectionHeader 
        title="Subsets & Permutations" 
        description="Combinatorial generation patterns."
        icon={GitMerge} 
        color="purple" 
      />

      {/* Interactive Demo */}
      <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 mb-12">
        <div className="flex gap-4 mb-8 p-1 bg-slate-950 rounded-xl w-fit">
          <button
            onClick={() => { setActiveTab("subsets"); setResults([]); }}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === "subsets" 
                ? "bg-purple-600 text-white shadow-lg" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Copy size={18} className="inline mr-2" /> Subsets
          </button>
          <button
            onClick={() => { setActiveTab("permutations"); setResults([]); }}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === "permutations" 
                ? "bg-purple-600 text-white shadow-lg" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <RotateCw size={18} className="inline mr-2" /> Permutations
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <List size={20} className="text-purple-400" /> Input: [1, 2, 3]
            </h3>
            <button
              onClick={runDemo}
              disabled={isAnimating}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-black flex items-center gap-2 transition-all shadow-lg shadow-purple-600/20 active:scale-95 disabled:opacity-50"
            >
              <Play size={20} fill="currentColor" /> Generate {activeTab}
            </button>
            <p className="mt-4 text-sm text-slate-400">
              {activeTab === "subsets" 
                ? "Generates 2ⁿ = 8 subsets. Order doesn't matter."
                : "Generates n! = 6 permutations. Order matters."}
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 min-h-[200px]">
            <div className="flex flex-wrap gap-2">
              {results.map((res, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded font-mono text-sm border border-purple-500/30"
                >
                  [{res.join(",")}]
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CodeImplementation 
        languages={activeTab === "subsets" ? subsetsCode : permutationsCode}
        color="purple"
        initialLanguage={currentLanguage}
      />
    </PerspectiveCard>
  );
}