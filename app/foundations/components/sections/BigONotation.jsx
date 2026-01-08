import { motion } from "framer-motion";

export default function BigONotation() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟪 4. Big-O, Big-Theta & Big-Omega
      </h2>
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Mathematical notations to describe algorithm complexity bounds.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-3">Big-O (O)</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            <strong>Upper Bound</strong> - Worst case complexity
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• f(n) = O(g(n)) means f(n) ≤ c × g(n)</li>
            <li>• Most commonly used notation</li>
            <li>• Represents maximum time/space needed</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-3">Big-Omega (Ω)</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            <strong>Lower Bound</strong> - Best case complexity
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• f(n) = Ω(g(n)) means f(n) ≥ c × g(n)</li>
            <li>• Represents minimum time needed</li>
            <li>• Less commonly used</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">Big-Theta (Θ)</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            <strong>Tight Bound</strong> - Average case complexity
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• f(n) = Θ(g(n)) means c₁×g(n) ≤ f(n) ≤ c₂×g(n)</li>
            <li>• Most precise notation</li>
            <li>• Represents exact growth rate</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📊 Visual Comparison
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Example: Linear Search</h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600">Ω(1):</span>
                <span>Best case - element found at first position</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">O(n):</span>
                <span>Worst case - element at last position or not found</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">Θ(n):</span>
                <span>Average case - element somewhere in middle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">✅ Key Takeaways</h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Big-O provides upper bound (worst case)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Big-Omega provides lower bound (best case)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Big-Theta provides tight bound (exact growth rate)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
