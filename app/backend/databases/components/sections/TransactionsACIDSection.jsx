"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TransactionsACIDSection() {
  const [showTransaction, setShowTransaction] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Transactions & ACID
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Ensuring data integrity and consistency
          </p>
        </div>
      </div>

      {/* What is a Transaction */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            🎯 What is a Transaction?
          </h3>
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            A <strong>transaction</strong> is a sequence of database operations that must execute as a single unit.
            Either all operations succeed (COMMIT) or all fail (ROLLBACK) - no partial completion.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>BEGIN → Operations → COMMIT (or ROLLBACK on error)</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 Bank Transfer Example
        </h3>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Transfer $100 from Account A to Account B - must be atomic!
          </p>
          <div className="bg-slate-900 p-4 rounded-lg mb-4">
            <pre className="text-sm font-mono text-green-400">
{`BEGIN TRANSACTION;

  -- Deduct from Account A
  UPDATE accounts
  SET balance = balance - 100
  WHERE account_id = 'A';

  -- Add to Account B
  UPDATE accounts
  SET balance = balance + 100
  WHERE account_id = 'B';

COMMIT; -- Both succeed, or ROLLBACK if either fails`}
            </pre>
          </div>
          <button
            onClick={() => setShowTransaction(!showTransaction)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            {showTransaction ? "Hide Explanation" : "Show What Happens"}
          </button>
          {showTransaction && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 space-y-3"
            >
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-400 dark:border-green-700">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">✅ If Successful:</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Both operations complete. Account A: -$100, Account B: +$100. COMMIT saves changes.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-400 dark:border-red-700">
                <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">❌ If Error Occurs:</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  ROLLBACK undoes ALL changes. Money not lost or duplicated. Database remains consistent.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ACID Properties */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔐 ACID Properties
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              letter: "A",
              name: "Atomicity",
              icon: "⚛️",
              desc: "All or nothing - transaction is indivisible",
              example: "Transfer succeeds completely or not at all",
              color: "blue"
            },
            {
              letter: "C",
              name: "Consistency",
              icon: "🎯",
              desc: "Database moves from one valid state to another",
              example: "Constraints and rules are always enforced",
              color: "green"
            },
            {
              letter: "I",
              name: "Isolation",
              icon: "🔒",
              desc: "Concurrent transactions don't interfere",
              example: "Two transfers don't see each other's partial state",
              color: "orange"
            },
            {
              letter: "D",
              name: "Durability",
              icon: "💾",
              desc: "Committed changes persist even after crashes",
              example: "Data survives power loss, written to disk",
              color: "purple"
            }
          ].map((acid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-gradient-to-br from-${acid.color}-50 to-${acid.color}-100 dark:from-${acid.color}-900/20 dark:to-${acid.color}-800/20 p-6 rounded-xl border-2 border-${acid.color}-300 dark:border-${acid.color}-700`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{acid.icon}</span>
                <div>
                  <div className={`text-3xl font-bold text-${acid.color}-600 dark:text-${acid.color}-400`}>
                    {acid.letter}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{acid.name}</h4>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{acid.desc}</p>
              <div className={`bg-${acid.color}-100 dark:bg-${acid.color}-900/40 p-3 rounded-lg`}>
                <p className="text-xs">
                  <strong>Example:</strong> {acid.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Isolation Levels */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔐 Transaction Isolation Levels
        </h3>
        <div className="space-y-4">
          {[
            {
              level: "Read Uncommitted",
              desc: "Lowest isolation - can read uncommitted changes",
              problem: "Dirty reads possible",
              useCase: "Rarely used - very risky"
            },
            {
              level: "Read Committed",
              desc: "Can only read committed data",
              problem: "Non-repeatable reads possible",
              useCase: "Default in PostgreSQL, Oracle"
            },
            {
              level: "Repeatable Read",
              desc: "Same data read multiple times stays consistent",
              problem: "Phantom reads possible",
              useCase: "Good balance for most apps"
            },
            {
              level: "Serializable",
              desc: "Highest isolation - transactions fully isolated",
              problem: "Slowest, most locking",
              useCase: "Critical financial operations"
            }
          ].map((level, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-purple-900 dark:text-purple-100">{level.level}</h4>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold whitespace-nowrap">
                  {level.useCase}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{level.desc}</p>
              <p className="text-xs text-orange-700 dark:text-orange-400">
                <strong>Trade-off:</strong> {level.problem}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BASE vs ACID */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ ACID vs BASE
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700"
          >
            <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">ACID</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Traditional SQL databases prioritize consistency
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500">✓</span>
                <span>Strong consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500">✓</span>
                <span>Data integrity guaranteed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Harder to scale horizontally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Lower availability</span>
              </li>
            </ul>
            <div className="mt-4 bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded">
              <p className="text-xs font-semibold">PostgreSQL, MySQL, Oracle</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-xl border-2 border-emerald-300 dark:border-emerald-700"
          >
            <h4 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">BASE</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              NoSQL databases prioritize availability
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>High availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Easy horizontal scaling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">⚠</span>
                <span>Eventual consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">⚠</span>
                <span>Soft state (temporary inconsistency)</span>
              </li>
            </ul>
            <div className="mt-4 bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded">
              <p className="text-xs font-semibold">Cassandra, DynamoDB, MongoDB</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Transactions ensure data integrity through all-or-nothing execution</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>ACID properties (Atomicity, Consistency, Isolation, Durability) guarantee database reliability</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Higher isolation levels provide more safety but reduce concurrency</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>ACID for strong consistency (SQL), BASE for high availability (NoSQL)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
