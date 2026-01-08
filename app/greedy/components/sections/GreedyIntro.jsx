"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GreedyIntro() {
  const [coinAmount, setCoinAmount] = useState(63);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const coins = [25, 10, 5, 1]; // Quarter, Dime, Nickel, Penny

  const makeChange = () => {
    setIsAnimating(true);
    let remaining = coinAmount;
    const result = [];

    for (const coin of coins) {
      while (remaining >= coin) {
        result.push(coin);
        remaining -= coin;
      }
    }

    setSelectedCoins(result);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const resetChange = () => {
    setSelectedCoins([]);
  };

  const coinCount = (value) => selectedCoins.filter((c) => c === value).length;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        💎 Introduction to Greedy Algorithms
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
            A <strong>greedy algorithm</strong> makes the{" "}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">
              locally optimal choice
            </span>{" "}
            at each step with the hope of finding a{" "}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">global optimum</span>.
            It builds up a solution piece by piece, always choosing the next piece that offers the most
            immediate benefit.
          </p>
        </motion.div>

        {/* Interactive Coin Change Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Interactive Coin Change Problem (Greedy Approach)
          </h3>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Amount to make change for: ${coinAmount}
            </label>
            <input
              type="range"
              min="1"
              max="99"
              value={coinAmount}
              onChange={(e) => {
                setCoinAmount(parseInt(e.target.value));
                resetChange();
              }}
              className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer dark:bg-violet-700"
            />
          </div>

          {/* Coin Display */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {coins.map((coin, idx) => (
              <motion.div
                key={coin}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border-2 border-violet-200 dark:border-violet-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    {coin}¢
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    {coin === 25 ? "Quarter" : coin === 10 ? "Dime" : coin === 5 ? "Nickel" : "Penny"}
                  </div>
                  {selectedCoins.length > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-lg font-bold text-green-600 dark:text-green-400"
                    >
                      × {coinCount(coin)}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={makeChange}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-violet-300 disabled:to-purple-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Make Change (Greedy)
            </button>
            <button
              onClick={resetChange}
              className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Reset
            </button>
          </div>

          {/* Result Display */}
          {selectedCoins.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-violet-200 dark:border-violet-700"
            >
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Greedy Solution:
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedCoins.map((coin, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg"
                  >
                    {coin}¢
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-violet-600 dark:text-violet-400 font-semibold">
                Total coins used: {selectedCoins.length}
              </div>
            </motion.div>
          )}

          {/* Key Insight */}
          <div className="mt-4 bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-violet-900 dark:text-violet-200">Greedy Choice:</strong> Always pick
              the largest coin that doesn't exceed the remaining amount. This greedy approach works for
              standard US coins and gives the optimal solution!
            </p>
          </div>
        </motion.div>

        {/* Greedy Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
            <span>📖</span> Key Properties of Greedy Algorithms
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <PropertyCard
              title="Greedy Choice Property"
              description="A global optimum can be arrived at by selecting a local optimum"
              example="Choose the largest coin first"
            />
            <PropertyCard
              title="Optimal Substructure"
              description="An optimal solution contains optimal solutions to subproblems"
              example="Optimal change uses optimal subchanges"
            />
            <PropertyCard
              title="No Backtracking"
              description="Once a choice is made, it is never reconsidered"
              example="Never un-select a chosen coin"
            />
            <PropertyCard
              title="Efficient"
              description="Usually faster than dynamic programming (O(n) or O(n log n))"
              example="Single pass through coins"
            />
          </div>
        </motion.div>

        {/* When to Use Greedy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200 flex items-center gap-2">
              <span>✅</span> When Greedy Works
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Activity selection problem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Fractional knapsack</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Huffman coding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Minimum spanning tree (Prim's, Kruskal's)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>Dijkstra's shortest path</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>❌</span> When Greedy Fails
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>0/1 Knapsack problem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Longest path in a graph</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>TSP (Traveling Salesman)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Coin change with arbitrary denominations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400">•</span>
                <span>Maximum independent set</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Classic Greedy Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200 flex items-center gap-2">
            <span>🎯</span> Classic Greedy Problems
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ProblemCard
              icon="📅"
              title="Activity Selection"
              description="Select maximum number of non-overlapping activities"
              strategy="Sort by finish time, pick earliest"
            />
            <ProblemCard
              icon="🎒"
              title="Fractional Knapsack"
              description="Maximize value with weight constraint"
              strategy="Sort by value/weight ratio"
            />
            <ProblemCard
              icon="🌳"
              title="Huffman Coding"
              description="Optimal prefix-free encoding"
              strategy="Build tree from min frequencies"
            />
            <ProblemCard
              icon="💰"
              title="Coin Change"
              description="Make change with minimum coins"
              strategy="Pick largest coin first"
            />
            <ProblemCard
              icon="⛽"
              title="Gas Station"
              description="Complete circular route"
              strategy="Start from feasible station"
            />
            <ProblemCard
              icon="🔗"
              title="Job Sequencing"
              description="Maximize profit with deadlines"
              strategy="Sort by profit, fill slots"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
function PropertyCard({ title, description, example }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-violet-400 dark:hover:border-violet-500 transition-all">
      <h4 className="text-base font-bold text-violet-700 dark:text-violet-400 mb-2">{title}</h4>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{description}</p>
      <p className="text-xs text-violet-600 dark:text-violet-400 italic">💡 {example}</p>
    </div>
  );
}

function ProblemCard({ icon, title, description, strategy }) {
  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h4>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
      <div className="text-xs text-violet-600 dark:text-violet-400 flex items-center gap-2">
        <span>→</span>
        <span>{strategy}</span>
      </div>
    </div>
  );
}
