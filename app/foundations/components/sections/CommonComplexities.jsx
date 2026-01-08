import { motion } from "framer-motion";

export default function CommonComplexities() {
  const complexities = [
    { name: "O(1)", color: "green", desc: "Constant", examples: ["Array access", "Hash table lookup", "Push/Pop stack"] },
    { name: "O(log n)", color: "blue", desc: "Logarithmic", examples: ["Binary search", "Balanced BST operations"] },
    { name: "O(n)", color: "yellow", desc: "Linear", examples: ["Array traversal", "Linear search"] },
    { name: "O(n log n)", color: "orange", desc: "Linearithmic", examples: ["Merge sort", "Quick sort (avg)", "Heap sort"] },
    { name: "O(n²)", color: "red", desc: "Quadratic", examples: ["Bubble sort", "Nested loops", "Selection sort"] },
    { name: "O(2ⁿ)", color: "purple", desc: "Exponential", examples: ["Recursive fibonacci", "Subset generation"] },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟦 5. Common Time Complexities
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {complexities.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-${c.color}-50 dark:bg-${c.color}-900/20 p-6 rounded-xl border border-${c.color}-200 dark:border-${c.color}-800`}
          >
            <h3 className={`text-2xl font-bold text-${c.color}-900 dark:text-${c.color}-100 mb-2`}>
              {c.name}
            </h3>
            <p className={`text-lg font-semibold text-${c.color}-700 dark:text-${c.color}-300 mb-3`}>
              {c.desc}
            </p>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {c.examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`text-${c.color}-600`}>•</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          ⚡ Complexity Hierarchy (Best to Worst)
        </h3>
        <div className="text-lg font-mono text-slate-700 dark:text-slate-300">
          O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)
        </div>
      </div>
    </div>
  );
}
