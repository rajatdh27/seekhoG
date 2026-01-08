import { motion } from "framer-motion";

export default function FoundationsCheatsheet() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        📋 Foundations Cheatsheet
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Time Complexities</h3>
          <div className="space-y-2 font-mono text-sm text-slate-700 dark:text-slate-300">
            <div className="flex justify-between"><span>O(1)</span><span>Constant</span></div>
            <div className="flex justify-between"><span>O(log n)</span><span>Logarithmic</span></div>
            <div className="flex justify-between"><span>O(n)</span><span>Linear</span></div>
            <div className="flex justify-between"><span>O(n log n)</span><span>Linearithmic</span></div>
            <div className="flex justify-between"><span>O(n²)</span><span>Quadratic</span></div>
            <div className="flex justify-between"><span>O(2ⁿ)</span><span>Exponential</span></div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">Mathematics</h3>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div>log₂(1024) = 10</div>
            <div>2¹⁰ = 1024</div>
            <div>P(n,r) = n!/(n-r)!</div>
            <div>C(n,r) = n!/[r!(n-r)!]</div>
            <div>log(ab) = log(a) + log(b)</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">Real-World Impact</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✓ Small data: All algorithms fast</li>
            <li>✓ Big data: Complexity matters!</li>
            <li>✓ O(n²) → Hours on 1M items</li>
            <li>✓ O(n log n) → Seconds on 1M items</li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">Big-O Rules</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✓ Drop constants: O(2n) → O(n)</li>
            <li>✓ Drop lower terms: O(n² + n) → O(n²)</li>
            <li>✓ Focus on worst case</li>
            <li>✓ Different inputs = different variables</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">🎓 Next Steps</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Now that you've mastered the foundations, you're ready to dive into data structures!
        </p>
        <div className="flex gap-4">
          <a href="/array" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Start with Arrays →
          </a>
        </div>
      </div>
    </div>
  );
}
