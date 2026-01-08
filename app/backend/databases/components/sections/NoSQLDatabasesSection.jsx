"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NoSQLDatabasesSection() {
  const [selectedDB, setSelectedDB] = useState("mongodb");

  const nosqlDatabases = {
    mongodb: {
      name: "MongoDB",
      type: "Document Store",
      icon: "🍃",
      desc: "Flexible JSON-like documents",
      query: `db.users.find({
  age: { $gt: 25 },
  status: "active"
}).sort({ created_at: -1 }).limit(10)`,
      pros: ["Flexible schema", "Easy to scale", "Rich queries", "JSON-native"],
      cons: ["No joins", "Memory intensive", "Eventual consistency"],
      useCase: "Content management, catalogs, real-time analytics"
    },
    redis: {
      name: "Redis",
      type: "Key-Value Store",
      icon: "🔴",
      desc: "In-memory data structure store",
      query: `SET session:user123 "{"userId":123,"token":"abc"}"
GET session:user123
EXPIRE session:user123 3600
LPUSH notifications "New message"`,
      pros: ["Ultra-fast", "Rich data types", "Pub/Sub", "Atomic operations"],
      cons: ["Limited by RAM", "No complex queries", "Data persistence concerns"],
      useCase: "Caching, sessions, real-time leaderboards, queues"
    },
    cassandra: {
      name: "Cassandra",
      type: "Wide-Column Store",
      icon: "🏛️",
      desc: "Distributed, highly available",
      query: `SELECT * FROM users
WHERE user_id = 123
  AND created_at > '2024-01-01'
ORDER BY created_at DESC;`,
      pros: ["Linear scalability", "High availability", "No single point of failure", "Fast writes"],
      cons: ["No joins", "Limited queries", "Complex setup"],
      useCase: "Time-series data, IoT, messaging, large-scale apps"
    },
    dynamodb: {
      name: "DynamoDB",
      type: "Key-Value & Document",
      icon: "⚡",
      desc: "AWS managed NoSQL database",
      query: `{
  "TableName": "Users",
  "Key": { "userId": { "S": "123" } },
  "FilterExpression": "age > :age",
  "ExpressionAttributeValues": {
    ":age": { "N": "25" }
  }
}`,
      pros: ["Fully managed", "Auto-scaling", "Low latency", "AWS integration"],
      cons: ["Vendor lock-in", "Cost at scale", "Limited queries"],
      useCase: "Serverless apps, gaming, mobile backends"
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
          <span className="text-4xl">📦</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            NoSQL Databases
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Flexible, scalable, schema-less databases
          </p>
        </div>
      </div>

      {/* What is NoSQL */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border-l-4 border-emerald-600">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
            🎯 What is NoSQL?
          </h3>
          <p className="text-lg text-emerald-900 dark:text-emerald-100 mb-4">
            <strong>NoSQL (Not Only SQL)</strong> databases are non-relational databases designed for flexibility, scalability, and performance.
            They sacrifice some ACID properties for horizontal scalability and flexible schemas.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Flexible Schema + Horizontal Scaling + BASE over ACID</strong>
            </p>
          </div>
        </div>
      </div>

      {/* NoSQL Database Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗂️ NoSQL Database Types
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {Object.entries(nosqlDatabases).map(([key, db]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedDB(key)}
              whileHover={{ scale: 1.02 }}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                selectedDB === key
                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 shadow-lg'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-700'
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-4xl">{db.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{db.name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{db.type}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{db.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Selected Database Details */}
        <motion.div
          key={selectedDB}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-xl border-2 border-emerald-300 dark:border-emerald-700"
        >
          {(() => {
            const selected = nosqlDatabases[selectedDB];
            return (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{selected.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {selected.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{selected.type} - {selected.desc}</p>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-lg mb-6">
                  <p className="text-xs text-slate-400 mb-2">Example Query:</p>
                  <pre className="text-sm font-mono text-green-400 overflow-auto whitespace-pre-wrap">
                    {selected.query}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                      <span>✅</span> Strengths
                    </h5>
                    <ul className="space-y-2">
                      {selected.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span className="text-slate-700 dark:text-slate-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                      <span>⚠️</span> Trade-offs
                    </h5>
                    <ul className="space-y-2">
                      {selected.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span className="text-slate-700 dark:text-slate-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-emerald-900 dark:text-emerald-200">Best for:</strong>{" "}
                    <span className="text-slate-700 dark:text-slate-300">{selected.useCase}</span>
                  </p>
                </div>
              </>
            );
          })()}
        </motion.div>
      </div>

      {/* CAP Theorem */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ CAP Theorem
        </h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100 mb-4">
            In distributed systems, you can only guarantee <strong>2 out of 3</strong> properties:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letter: "C",
                name: "Consistency",
                desc: "All nodes see the same data at the same time",
                icon: "🎯"
              },
              {
                letter: "A",
                name: "Availability",
                desc: "Every request receives a response (success/failure)",
                icon: "💪"
              },
              {
                letter: "P",
                name: "Partition Tolerance",
                desc: "System continues despite network failures",
                icon: "🔗"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-5 rounded-xl text-center"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {item.letter}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { combo: "CP", dbs: "MongoDB, HBase, Redis", desc: "Consistency + Partition tolerance → May sacrifice availability" },
            { combo: "AP", dbs: "Cassandra, DynamoDB, CouchDB", desc: "Availability + Partition tolerance → Eventual consistency" },
            { combo: "CA", dbs: "PostgreSQL, MySQL (single node)", desc: "Consistency + Availability → No partition tolerance" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">{item.combo}</div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">{item.dbs}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
        <h3 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>NoSQL databases prioritize scalability and flexibility over strict consistency</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>MongoDB for flexible documents, Redis for caching, Cassandra for massive scale</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>CAP theorem: You can only have 2 of 3 - Consistency, Availability, Partition Tolerance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
            <span>Choose NoSQL when you need horizontal scaling, flexible schemas, or specialized data models</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
