"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DatabaseIntro() {
  const [selectedType, setSelectedType] = useState("relational");

  const databaseTypes = [
    {
      id: "relational",
      name: "Relational (SQL)",
      icon: "🗄️",
      desc: "Structured tables with relationships",
      examples: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"],
      useCase: "Structured data, complex queries, transactions",
      pros: ["ACID compliance", "Data integrity", "Powerful queries", "Mature ecosystem"],
      cons: ["Rigid schema", "Harder to scale horizontally", "Can be slower for large data"]
    },
    {
      id: "document",
      name: "Document (NoSQL)",
      icon: "📄",
      desc: "JSON-like documents, flexible schema",
      examples: ["MongoDB", "CouchDB", "Firestore"],
      useCase: "Flexible schemas, rapid development, hierarchical data",
      pros: ["Schema flexibility", "Easy to scale", "Fast reads", "Developer-friendly"],
      cons: ["No ACID by default", "Eventual consistency", "Duplication"]
    },
    {
      id: "keyvalue",
      name: "Key-Value",
      icon: "🔑",
      desc: "Simple key-value pairs, ultra-fast",
      examples: ["Redis", "DynamoDB", "Memcached"],
      useCase: "Caching, sessions, real-time analytics",
      pros: ["Blazing fast", "Simple model", "Highly scalable", "Low latency"],
      cons: ["Limited query capability", "No relationships", "Simple data only"]
    },
    {
      id: "graph",
      name: "Graph",
      icon: "🕸️",
      desc: "Nodes and relationships, connected data",
      examples: ["Neo4j", "ArangoDB", "Amazon Neptune"],
      useCase: "Social networks, recommendations, fraud detection",
      pros: ["Natural relationships", "Fast traversals", "Flexible schema", "Pattern matching"],
      cons: ["Learning curve", "Specialized use cases", "Smaller ecosystem"]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">💾</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Introduction to Databases
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The foundation of data storage and retrieval
          </p>
        </div>
      </div>

      {/* What is a Database */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-violet-600">
          <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">
            🎯 What is a Database?
          </h3>
          <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
            A <strong>database</strong> is an organized collection of structured data that can be easily accessed, managed, and updated.
            It's the persistent storage layer of applications, storing everything from user profiles to transaction records.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Application ↔ Database ↔ Persistent Storage</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Database Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗂️ Types of Databases
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {databaseTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              whileHover={{ scale: 1.02 }}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                selectedType === type.id
                  ? 'border-violet-500 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 shadow-lg'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl">{type.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {type.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{type.desc}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Database Type Details */}
        <motion.div
          key={selectedType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl border-2 border-violet-300 dark:border-violet-700"
        >
          {(() => {
            const selected = databaseTypes.find(t => t.id === selectedType);
            return (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{selected.icon}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {selected.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">{selected.desc}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                      <span>✅</span> Advantages
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
                      <span>⚠️</span> Considerations
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

                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Popular Examples:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-100 dark:bg-violet-900/40 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-violet-900 dark:text-violet-200">Best for:</strong>{" "}
                    <span className="text-slate-700 dark:text-slate-300">{selected.useCase}</span>
                  </p>
                </div>
              </>
            );
          })()}
        </motion.div>
      </div>

      {/* DBMS vs Database */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔧 DBMS vs Database
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
          >
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <span>💾</span> Database
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The actual collection of data stored on disk
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-sm space-y-2">
              <p>• Physical or logical collection of data</p>
              <p>• Tables, documents, key-value pairs</p>
              <p>• Files on disk (data files, indexes)</p>
              <p>• Example: "users_db", "products_db"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
          >
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <span>🔧</span> DBMS
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Database Management System - software to manage databases
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg text-sm space-y-2">
              <p>• Software layer managing databases</p>
              <p>• Query processing & optimization</p>
              <p>• User authentication & security</p>
              <p>• Example: PostgreSQL, MySQL, MongoDB</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Database Operations (CRUD) */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Core Database Operations (CRUD)
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              op: "Create",
              icon: "➕",
              sql: "INSERT INTO users VALUES (...)",
              nosql: "db.users.insertOne({...})",
              color: "green"
            },
            {
              op: "Read",
              icon: "📖",
              sql: "SELECT * FROM users WHERE id=1",
              nosql: "db.users.findOne({_id: 1})",
              color: "blue"
            },
            {
              op: "Update",
              icon: "✏️",
              sql: "UPDATE users SET name='...' WHERE id=1",
              nosql: "db.users.updateOne({_id: 1}, {...})",
              color: "yellow"
            },
            {
              op: "Delete",
              icon: "🗑️",
              sql: "DELETE FROM users WHERE id=1",
              nosql: "db.users.deleteOne({_id: 1})",
              color: "red"
            }
          ].map((crud, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br from-${crud.color}-50 to-${crud.color}-100 dark:from-${crud.color}-900/20 dark:to-${crud.color}-800/20 p-5 rounded-xl border-2 border-${crud.color}-300 dark:border-${crud.color}-700`}
            >
              <div className="text-4xl mb-2 text-center">{crud.icon}</div>
              <h4 className="font-bold text-center text-slate-900 dark:text-slate-100 mb-3">
                {crud.op}
              </h4>
              <div className="space-y-2">
                <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">SQL:</p>
                  <code className="text-xs font-mono">{crud.sql}</code>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">NoSQL:</p>
                  <code className="text-xs font-mono">{crud.nosql}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* When to Use What */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤔 Choosing the Right Database
        </h3>
        <div className="space-y-4">
          {[
            {
              scenario: "E-commerce Platform",
              choice: "SQL (PostgreSQL)",
              reason: "Need ACID transactions for payments, complex queries for inventory, relational data (orders, products, users)"
            },
            {
              scenario: "Social Media Feed",
              choice: "NoSQL (MongoDB)",
              reason: "Flexible post schema, rapid reads, denormalized data for fast timeline generation"
            },
            {
              scenario: "Session Management",
              choice: "Key-Value (Redis)",
              reason: "Ultra-fast reads/writes, TTL support, simple key-value structure perfect for sessions"
            },
            {
              scenario: "Recommendation Engine",
              choice: "Graph (Neo4j)",
              reason: "Natural representation of user-item relationships, fast graph traversals for recommendations"
            },
            {
              scenario: "Analytics Dashboard",
              choice: "Column Store (ClickHouse)",
              reason: "Optimized for analytical queries, fast aggregations on large datasets"
            },
            {
              scenario: "Content Management",
              choice: "Hybrid (PostgreSQL + Redis)",
              reason: "PostgreSQL for content storage, Redis for caching frequently accessed pages"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-violet-50 dark:bg-violet-900/20 p-5 rounded-xl border border-violet-200 dark:border-violet-800"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h4 className="font-bold text-violet-900 dark:text-violet-100">
                  {item.scenario}
                </h4>
                <span className="px-3 py-1 bg-violet-600 text-white rounded-full text-sm font-semibold w-fit">
                  {item.choice}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.reason}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Database Performance Metrics */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📊 Key Performance Metrics
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { metric: "Throughput", desc: "Queries per second (QPS)", icon: "⚡", target: "1000+ QPS" },
            { metric: "Latency", desc: "Query response time", icon: "⏱️", target: "<100ms" },
            { metric: "Availability", desc: "Uptime percentage", icon: "💪", target: "99.99%" },
            { metric: "Scalability", desc: "Growth capacity", icon: "📈", target: "Horizontal" },
            { metric: "Consistency", desc: "Data accuracy", icon: "🎯", target: "Strong/Eventual" },
            { metric: "Durability", desc: "Data persistence", icon: "💾", target: "ACID/BASE" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">{item.metric}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
              <div className="bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded text-xs font-mono">
                Target: {item.target}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
        <h3 className="text-xl font-semibold mb-4 text-violet-900 dark:text-violet-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
            <span>Databases are the persistent storage layer - choose based on your data structure and access patterns</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
            <span>SQL databases excel at complex queries and transactions; NoSQL databases offer flexibility and scalability</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
            <span>CRUD operations (Create, Read, Update, Delete) are the foundation of database interactions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
            <span>Consider throughput, latency, consistency, and scalability when choosing a database</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
