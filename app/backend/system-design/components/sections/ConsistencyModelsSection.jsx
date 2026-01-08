"use client";
import { motion } from "framer-motion";

export default function ConsistencyModelsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Consistency Models
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            CAP theorem, Eventual consistency, and Trade-offs
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl border-l-4 border-cyan-600 mb-8">
        <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">🔄 Consistency in Distributed Systems</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          <strong>Consistency</strong> ensures all nodes see the same data at the same time. Different consistency models offer trade-offs between performance, availability, and correctness.
        </p>
      </div>

      {/* CAP Theorem */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🔺 CAP Theorem</h4>
        <p className="text-sm text-slate-400 mb-4">
          In a distributed system, you can only guarantee 2 out of 3 properties:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500">
            <h5 className="text-lg font-bold text-blue-400 mb-2">Consistency (C)</h5>
            <p className="text-xs text-slate-300">All nodes see the same data at the same time</p>
          </div>
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-500">
            <h5 className="text-lg font-bold text-green-400 mb-2">Availability (A)</h5>
            <p className="text-xs text-slate-300">Every request receives a response (success or failure)</p>
          </div>
          <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500">
            <h5 className="text-lg font-bold text-purple-400 mb-2">Partition Tolerance (P)</h5>
            <p className="text-xs text-slate-300">System continues despite network partitions</p>
          </div>
        </div>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Since network partitions are unavoidable, choose between:

CP (Consistency + Partition Tolerance):
  - Sacrifice availability during partitions
  - Examples: MongoDB, HBase, Redis
  - Use case: Banking, financial transactions

AP (Availability + Partition Tolerance):
  - Sacrifice consistency during partitions
  - Examples: Cassandra, DynamoDB, CouchDB
  - Use case: Social media feeds, shopping carts

CA (Consistency + Availability):
  - Not practical in distributed systems
  - Examples: RDBMS in single server
  - Network partitions will happen!`}
        </pre>
      </div>

      {/* Consistency Models */}
      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <span>🔒</span> Strong Consistency
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            After a write completes, all subsequent reads will see that write. Linearizability.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold text-green-700 dark:text-green-400 mb-1">Examples:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Traditional RDBMS</li>
                <li>Zookeeper, etcd</li>
                <li>MongoDB (with majority write concern)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-700 dark:text-green-400 mb-1">Trade-offs:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>✓ Easy to reason about</li>
                <li>✗ Higher latency</li>
                <li>✗ Lower availability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
          <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
            <span>⏱️</span> Eventual Consistency
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            If no new updates are made, eventually all reads will return the same value. No guaranteed time frame.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold text-yellow-700 dark:text-yellow-400 mb-1">Examples:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>DNS</li>
                <li>Cassandra, DynamoDB</li>
                <li>Social media feeds</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-yellow-700 dark:text-yellow-400 mb-1">Trade-offs:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>✓ High availability</li>
                <li>✓ Low latency</li>
                <li>✗ Stale reads possible</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <span>📖</span> Read-After-Write Consistency
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            A user who writes data will immediately see their own writes on subsequent reads. Other users may see stale data.
          </p>
          <div className="text-xs text-slate-700 dark:text-slate-300">
            <p className="font-bold text-blue-700 dark:text-blue-400 mb-1">Implementation:</p>
            <ul className="list-disc list-inside">
              <li>Read from leader for user's own data</li>
              <li>Track timestamp of last write</li>
              <li>Sticky sessions to same replica</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
            <span>🔢</span> Causal Consistency
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Operations that are causally related must be seen in the same order by all nodes. Concurrent operations can be seen in different orders.
          </p>
          <div className="text-xs text-slate-700 dark:text-slate-300">
            <p className="font-bold text-purple-700 dark:text-purple-400 mb-1">Example:</p>
            <code className="block bg-white dark:bg-slate-800 p-2 rounded">
              If comment B replies to post A, all users must see A before B
            </code>
          </div>
        </div>
      </div>

      {/* Quorum Consensus */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🗳️ Quorum Consensus</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`N = Total number of replicas
W = Write quorum (nodes that must acknowledge write)
R = Read quorum (nodes to read from)

Strong Consistency: W + R > N
Example: N=3, W=2, R=2 → 2+2 > 3 ✓

Eventual Consistency: W + R ≤ N
Example: N=3, W=1, R=1 → 1+1 ≤ 3 ✓

Common Configurations:
- N=3, W=2, R=2 (Strong, fault-tolerant)
- N=3, W=1, R=1 (Fast, eventual)
- N=3, W=3, R=1 (Read-optimized)
- N=3, W=1, R=3 (Write-optimized)

Trade-off:
Higher W,R → Stronger consistency, higher latency
Lower W,R → Weaker consistency, lower latency`}
        </pre>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Choosing Consistency Model</h4>
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Use Strong Consistency When:</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Financial transactions, payments</li>
              <li>Inventory management</li>
              <li>User authentication</li>
              <li>Critical data correctness required</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Use Eventual Consistency When:</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Social media feeds, likes, comments</li>
              <li>Product catalogs, recommendations</li>
              <li>Analytics and metrics</li>
              <li>Availability more important than correctness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
