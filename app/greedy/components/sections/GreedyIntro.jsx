"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import ConceptGrid from "@/app/components/common/ConceptGrid";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  Gem, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  XCircle,
  Coins,
  ArrowRight,
  Target
} from "lucide-react";

export default function GreedyIntro() {
  const [amount, setAmount] = useState(63);
  const [coinsUsed, setCoinsUsed] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const coins = [25, 10, 5, 1];

  const philosophy = [
    { title: "Locally Optimal", description: "Pick best option at current step", icon: Zap, color: "violet" },
    { title: "Globally Optimal?", description: "Hopefully! (Not guaranteed)", icon: Target, color: "purple" }
  ];

  const simulateGreedy = async () => {
    setIsAnimating(true);
    setCoinsUsed([]);
    let remaining = amount;
    const result = [];

    for (let coin of coins) {
      while (remaining >= coin) {
        await new Promise(r => setTimeout(r, 400));
        remaining -= coin;
        result.push(coin);
        setCoinsUsed([...result]);
      }
    }
    setIsAnimating(false);
  };

  const greedyTemplateCode = {
    javascript: `// General Greedy Template
function greedyAlgorithm(items) {
    // 1. Sort items by some criteria (value, cost, ratio, etc.)
    items.sort(criteriaComparator);
    
    const solution = [];
    
    for (let item of items) {
        // 2. Make locally optimal choice
        if (isFeasible(solution, item)) {
            // 3. Add to solution (never backtrack)
            solution.push(item);
        }
    }
    
    return solution;
}`,
    python: `# General Greedy Template
def greedy_algorithm(items):
    # 1. Sort items by criteria
    items.sort(key=criteria_key)
    
    solution = []
    
    for item in items:
        # 2. Make locally optimal choice
        if is_feasible(solution, item):
            # 3. Add to solution (never backtrack)
            solution.append(item)
            
    return solution`,
    java: `// General Greedy Template
public List<Item> greedyAlgorithm(List<Item> items) {
    // 1. Sort items
    Collections.sort(items, comparator);
    
    List<Item> solution = new ArrayList<>();
    
    for (Item item : items) {
        // 2. Make locally optimal choice
        if (isFeasible(solution, item)) {
            // 3. Add to solution
            solution.add(item);
        }
    }
    return solution;
}`,
    cpp: `// General Greedy Template
vector<Item> greedyAlgorithm(vector<Item>& items) {
    // 1. Sort items
    sort(items.begin(), items.end(), comparator);
    
    vector<Item> solution;
    
    for (const auto& item : items) {
        // 2. Make locally optimal choice
        if (isFeasible(solution, item)) {
            // 3. Add to solution
            solution.push_back(item);
        }
    }
    return solution;
}`,
    go: `// General Greedy Template
func greedyAlgorithm(items []Item) []Item {
    // 1. Sort items
    sort.Slice(items, func(i, j int) bool {
        return items[i].Val > items[j].Val
    })
    
    solution := []Item{}
    
    for _, item := range items {
        // 2. Make locally optimal choice
        if isFeasible(solution, item) {
            // 3. Add to solution
            solution = append(solution, item)
        }
    }
    return solution
}`
  };

  return (
    <PerspectiveCard color="violet">
      <SectionHeader 
        title="Introduction" 
        description="Make the best choice right now."
        icon={Gem} 
        color="violet" 
      />

      <div className="space-y-12">
        <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <Zap size={20} className="text-violet-400" /> The Greedy Philosophy
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A greedy algorithm builds a solution piece by piece, always choosing the next piece that offers the most immediate benefit. It never looks back and never changes its mind.
          </p>
          <ConceptGrid items={philosophy} columns={2} variant="horizontal" />
        </div>

        {/* Interactive Visualizer */}
        <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-[2.5rem] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Coins size={120} />
          </div>
          
          <h3 className="text-xl font-black text-white mb-6 relative z-10">
            Greedy in Action: Coin Change
          </h3>

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="flex-1 space-y-6">
              <div>
                <label className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-2 block">
                  Target Amount: {amount}¢
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="99" 
                  value={amount} 
                  onChange={(e) => { setAmount(parseInt(e.target.value)); setCoinsUsed([]); }}
                  disabled={isAnimating}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
              </div>
              
              <button 
                onClick={simulateGreedy}
                disabled={isAnimating}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-600/20 active:scale-95 disabled:opacity-50"
              >
                {isAnimating ? "Thinking..." : "Make Change Greedily"}
              </button>
            </div>

            <div className="flex-1 bg-slate-950/80 p-6 rounded-2xl border border-white/10 min-h-[160px]">
              <div className="flex flex-wrap gap-2 content-start">
                {coinsUsed.map((coin, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-10 h-10 rounded-full bg-yellow-500 text-yellow-900 font-bold flex items-center justify-center shadow-md border-2 border-yellow-300"
                  >
                    {coin}
                  </motion.div>
                ))}
                {coinsUsed.length === 0 && !isAnimating && (
                  <span className="text-slate-500 text-sm italic">Coins will appear here...</span>
                )}
              </div>
              {coinsUsed.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 flex justify-between">
                  <span>Count: {coinsUsed.length}</span>
                  <span>Total: {coinsUsed.reduce((a,b)=>a+b,0)}¢</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Code Template */}
        <div>
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <Target size={20} className="text-purple-400" /> The Blueprint
          </h3>
          <CodeImplementation 
            languages={greedyTemplateCode}
            color="violet"
            initialLanguage={currentLanguage}
          />
        </div>

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
            <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} /> When it Works
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Problem has <strong>optimal substructure</strong></li>
              <li>• Has <strong>greedy choice property</strong></li>
              <li>• E.g., Activity Selection, Fractional Knapsack</li>
            </ul>
          </div>
          
          <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
            <h4 className="font-bold text-rose-400 mb-3 flex items-center gap-2">
              <XCircle size={18} /> When it Fails
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Requires considering future consequences</li>
              <li>• Greedy choice leads to dead end</li>
              <li>• E.g., 0/1 Knapsack, Longest Path</li>
            </ul>
          </div>
        </div>

      </div>
    </PerspectiveCard>
  );
}