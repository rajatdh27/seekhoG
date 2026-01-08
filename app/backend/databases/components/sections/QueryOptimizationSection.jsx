"use client";
import { motion } from "framer-motion";

export default function QueryOptimizationSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl">
          <span className="text-4xl">⚡</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Query Optimization
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Indexes, performance tuning, and best practices
          </p>
        </div>
      </div>

      {/* Indexes */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚀 Database Indexes
        </h3>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border-l-4 border-pink-600 mb-6">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            <strong>Indexes</strong> are data structures that improve query speed by creating quick lookup paths.
            Like a book's index - instead of scanning every page, jump directly to the right location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            {
              type: "B-Tree Index",
              desc: "Default index type, balanced tree structure",
              useCase: "Range queries, sorting, most common use case",
              example: "CREATE INDEX idx_user_email ON users(email);"
            },
            {
              type: "Hash Index",
              desc: "Fast exact match lookups",
              useCase: "Equality comparisons only (=)",
              example: "CREATE INDEX idx_session USING HASH ON sessions(token);"
            },
            {
              type: "Composite Index",
              desc: "Index on multiple columns",
              useCase: "Queries filtering on multiple columns",
              example: "CREATE INDEX idx_user_status ON users(status, created_at);"
            },
            {
              type: "Unique Index",
              desc: "Ensures column values are unique",
              useCase: "Email, username, enforcing uniqueness",
              example: "CREATE UNIQUE INDEX idx_username ON users(username);"
            }
          ].map((index, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-xl border border-pink-200 dark:border-pink-800"
            >
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">{index.type}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{index.desc}</p>
              <p className="text-xs text-pink-700 dark:text-pink-400 mb-3">
                <strong>Use for:</strong> {index.useCase}
              </p>
              <div className="bg-slate-900 p-2 rounded">
                <code className="text-xs text-green-400">{index.example}</code>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">✅ When to Index</h4>
            <ul className="space-y-2 text-sm">
              <li>• WHERE clause columns</li>
              <li>• JOIN columns</li>
              <li>• ORDER BY columns</li>
              <li>• Foreign keys</li>
              <li>• Columns in GROUP BY</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
            <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">❌ When NOT to Index</h4>
            <ul className="space-y-2 text-sm">
              <li>• Small tables (&lt;1000 rows)</li>
              <li>• Columns with low cardinality</li>
              <li>• Frequently updated columns</li>
              <li>• Tables with heavy writes</li>
              <li>• Columns rarely used in queries</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Query Optimization Tips */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💡 Query Optimization Tips
        </h3>
        <div className="space-y-4">
          {[
            {
              tip: "Use SELECT specific columns",
              bad: "SELECT * FROM users;",
              good: "SELECT id, name, email FROM users;",
              why: "Reduces data transfer and memory usage"
            },
            {
              tip: "Limit results",
              bad: "SELECT * FROM posts ORDER BY created_at DESC;",
              good: "SELECT * FROM posts ORDER BY created_at DESC LIMIT 100;",
              why: "Prevents loading millions of rows"
            },
            {
              tip: "Avoid SELECT DISTINCT when possible",
              bad: "SELECT DISTINCT user_id FROM orders;",
              good: "SELECT user_id FROM orders GROUP BY user_id;",
              why: "DISTINCT requires sorting all results"
            },
            {
              tip: "Use EXISTS instead of IN for subqueries",
              bad: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);",
              good: "SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders WHERE user_id = u.id);",
              why: "EXISTS stops at first match, faster"
            },
            {
              tip: "Avoid functions on indexed columns",
              bad: "WHERE YEAR(created_at) = 2024",
              good: "WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'",
              why: "Functions prevent index usage"
            },
            {
              tip: "Use JOINs instead of subqueries when possible",
              bad: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);",
              good: "SELECT DISTINCT u.* FROM users u JOIN orders o ON u.id = o.user_id;",
              why: "JOINs are usually faster than subqueries"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-5 rounded-xl border border-rose-200 dark:border-rose-800"
            >
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3">{item.tip}</h4>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                  <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-1">❌ Slow:</p>
                  <code className="text-xs">{item.bad}</code>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✅ Fast:</p>
                  <code className="text-xs">{item.good}</code>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Why:</strong> {item.why}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EXPLAIN Command */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔍 Using EXPLAIN
        </h3>
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border-2 border-pink-300 dark:border-pink-700">
          <p className="text-lg text-pink-900 dark:text-pink-100 mb-4">
            Use <strong>EXPLAIN</strong> to see how the database executes your query
          </p>
          <div className="bg-slate-900 p-4 rounded-lg mb-4">
            <pre className="text-sm font-mono text-green-400">
{`EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
ORDER BY order_count DESC
LIMIT 10;`}
            </pre>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["Seq Scan (slow)", "Index Scan (fast)", "Bitmap Scan (medium)"].map((scan, idx) => (
              <div key={idx} className="bg-white/50 dark:bg-slate-800/50 p-3 rounded text-center">
                <p className="text-xs font-semibold">{scan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
        <h3 className="text-xl font-semibold mb-4 text-pink-900 dark:text-pink-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
            <span>Indexes dramatically speed up reads but slow down writes - use strategically</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
            <span>Always SELECT specific columns, never SELECT * in production</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
            <span>Use EXPLAIN to analyze query performance and identify bottlenecks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
            <span>Avoid functions on indexed columns - they prevent index usage</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
