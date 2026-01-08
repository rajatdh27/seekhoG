import { motion } from "framer-motion";

export default function FoundationsIntro() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          🟩 1. What is DSA?
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            <strong>Data Structures and Algorithms (DSA)</strong> is the study of efficient data storage and algorithmic problem-solving. It's the core foundation of software engineering and competitive coding.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600 mb-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
              Why Learn DSA?
            </h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                <span><strong>Ace Coding Interviews:</strong> Top tech companies (FAANG) heavily test DSA knowledge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                <span><strong>Write Efficient Code:</strong> Optimize performance and reduce resource consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                <span><strong>Problem-Solving Skills:</strong> Develop logical thinking and algorithmic reasoning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                <span><strong>Build Scalable Systems:</strong> Design software that handles millions of users</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            The DSA Learning Journey
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Data Structures</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Ways to organize and store data: Arrays, Linked Lists, Trees, Graphs, Hash Tables
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Algorithms</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Step-by-step procedures: Searching, Sorting, Dynamic Programming, Graph Algorithms
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Complexity Analysis</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Understanding performance: Time complexity, Space complexity, Big-O notation
              </p>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
              <div className="text-3xl mb-2">🧩</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Problem-Solving</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Mastering patterns: Two pointers, Sliding window, Recursion, Backtracking
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-600 mb-6">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              📚 What You'll Learn in This Section
            </h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                <span><strong>Mathematics fundamentals:</strong> Logarithms, Exponents, and why they matter in algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                <span><strong>Time & Space Complexity:</strong> Big-O, Big-Theta, Big-Omega notation explained simply</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                <span><strong>Common complexities:</strong> O(1), O(log n), O(n), O(n log n), O(n²) with real-world examples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                <span><strong>Why complexity matters:</strong> How choosing the right algorithm saves hours of execution time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                <span><strong>Code examples in 6 languages:</strong> C, C++, Java, JavaScript, Python, Go</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              🎓 Learning Path
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">Master Foundations</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Complexity analysis, recursion, mathematics</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">Learn Data Structures</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Arrays, linked lists, stacks, queues, trees, graphs</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">Study Algorithms</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Sorting, searching, dynamic programming, greedy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">Practice Problems</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Solve 300-500 problems across all patterns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
