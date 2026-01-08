import { motion } from "framer-motion";

export default function SearchingSortingIntro() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🔍 Searching & Sorting Algorithms
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Two of the most fundamental operations in computer science - finding data and organizing it efficiently.
      </p>

      {/* Main Concepts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">Searching</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Finding a specific element in a collection of data
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Linear Search:</strong> Check every element one by one - O(n)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Binary Search:</strong> Divide and conquer on sorted data - O(log n)</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-3">Sorting</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Arranging data in a specific order (ascending/descending)
          </p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Simple sorts:</strong> Bubble, Selection, Insertion - O(n²)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span><strong>Efficient sorts:</strong> Merge, Quick - O(n log n)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Algorithm Comparison */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚡ Quick Comparison
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300 dark:border-slate-600">
                <th className="text-left p-3 text-slate-900 dark:text-slate-100">Algorithm</th>
                <th className="text-center p-3 text-slate-900 dark:text-slate-100">Type</th>
                <th className="text-center p-3 text-slate-900 dark:text-slate-100">Best</th>
                <th className="text-center p-3 text-slate-900 dark:text-slate-100">Average</th>
                <th className="text-center p-3 text-slate-900 dark:text-slate-100">Worst</th>
                <th className="text-center p-3 text-slate-900 dark:text-slate-100">Space</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Linear Search</td>
                <td className="text-center p-3">Search</td>
                <td className="text-center p-3 text-green-600">O(1)</td>
                <td className="text-center p-3">O(n)</td>
                <td className="text-center p-3">O(n)</td>
                <td className="text-center p-3">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Binary Search</td>
                <td className="text-center p-3">Search</td>
                <td className="text-center p-3 text-green-600">O(1)</td>
                <td className="text-center p-3 text-blue-600">O(log n)</td>
                <td className="text-center p-3 text-blue-600">O(log n)</td>
                <td className="text-center p-3">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Bubble Sort</td>
                <td className="text-center p-3">Sort</td>
                <td className="text-center p-3">O(n)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Selection Sort</td>
                <td className="text-center p-3">Sort</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Insertion Sort</td>
                <td className="text-center p-3">Sort</td>
                <td className="text-center p-3">O(n)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3">O(1)</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="p-3 font-semibold">Merge Sort</td>
                <td className="text-center p-3">Sort</td>
                <td className="text-center p-3 text-green-600">O(n log n)</td>
                <td className="text-center p-3 text-green-600">O(n log n)</td>
                <td className="text-center p-3 text-green-600">O(n log n)</td>
                <td className="text-center p-3">O(n)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Quick Sort</td>
                <td className="text-center p-3">Sort</td>
                <td className="text-center p-3 text-green-600">O(n log n)</td>
                <td className="text-center p-3 text-green-600">O(n log n)</td>
                <td className="text-center p-3 text-red-600">O(n²)</td>
                <td className="text-center p-3">O(log n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
          📚 What You'll Learn
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span><strong>Visual animations:</strong> Watch each algorithm work step-by-step</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span><strong>Code in 6 languages:</strong> C, C++, Java, JavaScript, Python, Go</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span><strong>How they work:</strong> Understand the logic behind each algorithm</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <span><strong>When to use:</strong> Best and worst case scenarios</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
