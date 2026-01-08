"use client";
import { motion } from "framer-motion";

export default function TDDSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
          <span className="text-4xl">📝</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Test-Driven Development
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Write tests before production code - Red, Green, Refactor
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">📝 Test-Driven Development (TDD)</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          TDD is a software development approach where tests are written before the production code. The code is then written to make the tests pass, followed by refactoring.
        </p>
      </div>

      {/* TDD Cycle */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">🔄 The Red-Green-Refactor Cycle</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex flex-col items-center justify-center text-white shrink-0">
              <span className="text-3xl">🔴</span>
              <span className="text-xs font-bold">RED</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">1. Write a Failing Test</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Write a test for the next bit of functionality. The test should fail because the feature doesn't exist yet.</p>
            </div>
          </div>
          <div className="text-center text-2xl text-emerald-600">↓</div>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex flex-col items-center justify-center text-white shrink-0">
              <span className="text-3xl">🟢</span>
              <span className="text-xs font-bold">GREEN</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">2. Make It Pass</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Write the minimum code necessary to make the test pass. Focus on making it work, not perfect.</p>
            </div>
          </div>
          <div className="text-center text-2xl text-emerald-600">↓</div>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shrink-0">
              <span className="text-3xl">♻️</span>
              <span className="text-xs font-bold">REFACTOR</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">3. Refactor</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Clean up code while keeping tests green. Improve structure, remove duplication, enhance readability.</p>
            </div>
          </div>
          <div className="text-center text-xl font-bold text-emerald-600">↑ Repeat ↑</div>
        </div>
      </div>

      {/* Benefits vs Challenges */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Benefits of TDD</h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Better Design:</strong> Forces you to think about interfaces first</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Confidence:</strong> Refactor fearlessly with safety net</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Documentation:</strong> Tests show how code should be used</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Less Debugging:</strong> Catch bugs immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>100% Coverage:</strong> Every line has a test</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
          <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⚠️ Challenges</h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-600">⚡</span>
              <span><strong>Learning Curve:</strong> Takes time to master</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">⚡</span>
              <span><strong>Slower Initially:</strong> Feels slower at first</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">⚡</span>
              <span><strong>Test Maintenance:</strong> Tests need updating too</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">⚡</span>
              <span><strong>Not Always Suitable:</strong> Hard for UI, exploratory work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">⚡</span>
              <span><strong>Team Buy-in:</strong> Requires discipline from all</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
