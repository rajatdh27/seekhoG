"use client";
import { motion } from "framer-motion";

export default function ScalabilityPatternsSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
          <span className="text-4xl">📈</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Scalability Patterns
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Vertical vs Horizontal scaling, Sharding, and Patterns
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-l-4 border-green-600 mb-8">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">📈 What is Scalability?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          <strong>Scalability</strong> is the capability of a system to handle a growing amount of work by adding resources without changing the system architecture.
        </p>
      </div>

      {/* Vertical vs Horizontal */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">⬆️</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Vertical Scaling (Scale Up)</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Add more power to existing machine (more CPU, RAM, disk)
          </p>
          <div className="space-y-3 text-xs">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-bold text-green-700 dark:text-green-400 mb-1">Pros:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Simple to implement</li>
                <li>No code changes needed</li>
                <li>Lower latency (single machine)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-400 mb-1">Cons:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Hardware limits (max CPU/RAM)</li>
                <li>Single point of failure</li>
                <li>Expensive (exponential cost)</li>
                <li>Downtime during upgrade</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">↔️</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">Horizontal Scaling (Scale Out)</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Add more machines to the pool
          </p>
          <div className="space-y-3 text-xs">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-bold text-green-700 dark:text-green-400 mb-1">Pros:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>No hardware limits</li>
                <li>High availability (redundancy)</li>
                <li>Cost-effective (commodity hardware)</li>
                <li>Rolling updates (zero downtime)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-400 mb-1">Cons:</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>More complex architecture</li>
                <li>Code changes needed</li>
                <li>Network latency between machines</li>
                <li>Data consistency challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Database Scaling Patterns */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🗄️ Database Scaling Patterns</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-lg font-bold text-green-400 mb-3">Replication (Read Scaling)</h5>
            <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`┌──────────┐
│  Master  │ (Writes)
│ Database │
└────┬─────┘
     │ Replication
     ├────────────┬────────────┐
     ▼            ▼            ▼
┌────────┐  ┌────────┐  ┌────────┐
│ Replica│  │ Replica│  │ Replica│
│   DB   │  │   DB   │  │   DB   │
└────────┘  └────────┘  └────────┘
  (Reads)     (Reads)     (Reads)

Benefits:
• Horizontal read scaling
• High availability
• Geographic distribution

Challenges:
• Replication lag
• Data consistency
• Failover complexity`}
            </pre>
          </div>
          <div>
            <h5 className="text-lg font-bold text-blue-400 mb-3">Sharding (Write Scaling)</h5>
            <pre className="text-xs font-mono text-blue-400 overflow-auto whitespace-pre">
{`Users A-H     Users I-P     Users Q-Z
   ▼             ▼             ▼
┌────────┐  ┌────────┐  ┌────────┐
│Shard 1 │  │Shard 2 │  │Shard 3 │
│Users   │  │Users   │  │Users   │
│ A-H    │  │ I-P    │  │ Q-Z    │
└────────┘  └────────┘  └────────┘

Sharding Strategies:
1. Range-based (A-Z)
2. Hash-based (userId % 3)
3. Geography-based (US, EU, APAC)

Benefits:
• Horizontal write scaling
• Better performance
• Cost-effective

Challenges:
• Complex queries (joins)
• Rebalancing shards
• Hotspot shards`}
            </pre>
          </div>
        </div>
      </div>

      {/* Caching Strategies */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">💾 Caching Strategies</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Cache-Aside (Lazy Loading)</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              App checks cache first, on miss loads from DB and updates cache
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              Read: Cache → DB → Cache<br/>
              Write: DB → Cache invalidate
            </code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Write-Through</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Write to cache and DB synchronously
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              Write: Cache + DB (sync)<br/>
              Read: Cache always has data
            </code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Write-Back</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Write to cache first, DB async
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              Write: Cache → DB (async)<br/>
              Risk: Data loss if cache fails
            </code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Write-Around</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Write to DB, skip cache
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
              Write: DB only<br/>
              Read: Cache-aside pattern
            </code>
          </div>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🎯 Common Scalability Patterns</h4>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">CQRS (Command Query Responsibility Segregation)</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Separate read and write models. Write to master DB, read from optimized read replicas or materialized views.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Event Sourcing</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Store all changes as events instead of current state. Rebuild state by replaying events.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Partitioning / Sharding</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Split data across multiple databases based on partition key (user ID, geography, etc).
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">CDN & Edge Computing</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Serve static content from edge locations close to users. Reduce latency and origin server load.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
