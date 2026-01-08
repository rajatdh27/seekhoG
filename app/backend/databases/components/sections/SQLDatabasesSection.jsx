"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SQLDatabasesSection() {
  const [selectedQuery, setSelectedQuery] = useState("select");
  const [showQueryResult, setShowQueryResult] = useState(false);

  const sqlQueries = {
    select: {
      name: "SELECT",
      desc: "Retrieve data from database",
      code: `SELECT name, email, age
FROM users
WHERE age > 25
ORDER BY name ASC
LIMIT 10;`,
      result: "Returns: 10 users older than 25, sorted by name"
    },
    insert: {
      name: "INSERT",
      desc: "Add new records",
      code: `INSERT INTO users (name, email, age)
VALUES
  ('Alice', 'alice@example.com', 28),
  ('Bob', 'bob@example.com', 32);`,
      result: "2 rows inserted successfully"
    },
    update: {
      name: "UPDATE",
      desc: "Modify existing records",
      code: `UPDATE users
SET age = 29, updated_at = NOW()
WHERE email = 'alice@example.com';`,
      result: "1 row updated successfully"
    },
    delete: {
      name: "DELETE",
      desc: "Remove records",
      code: `DELETE FROM users
WHERE last_login < '2023-01-01'
  AND active = false;`,
      result: "Inactive users since 2023 deleted"
    },
    join: {
      name: "JOIN",
      desc: "Combine data from multiple tables",
      code: `SELECT u.name, o.total, o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.total > 100
ORDER BY o.created_at DESC;`,
      result: "Returns users with orders over $100"
    },
    aggregate: {
      name: "AGGREGATE",
      desc: "Calculate summary statistics",
      code: `SELECT
  category,
  COUNT(*) as total_products,
  AVG(price) as avg_price,
  MAX(price) as max_price
FROM products
GROUP BY category
HAVING COUNT(*) > 5;`,
      result: "Categories with 5+ products and their statistics"
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🗄️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            SQL Databases
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Relational databases and Structured Query Language
          </p>
        </div>
      </div>

      {/* What is SQL */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🎯 What is SQL?
          </h3>
          <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
            <strong>SQL (Structured Query Language)</strong> is the standard language for managing relational databases.
            Data is organized in tables with rows and columns, and relationships are defined between tables.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Tables → Rows (Records) → Columns (Fields) → Relationships</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Popular SQL Databases */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🌟 Popular SQL Databases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "PostgreSQL",
              icon: "🐘",
              desc: "Advanced open-source database",
              pros: ["Full ACID compliance", "JSON support", "Advanced features", "Great performance"],
              cons: ["More complex setup", "Slightly slower writes"],
              useCase: "Complex queries, data integrity, JSON data, geospatial"
            },
            {
              name: "MySQL",
              icon: "🐬",
              desc: "Most popular open-source DB",
              pros: ["Easy to use", "Fast reads", "Wide adoption", "Great documentation"],
              cons: ["Limited features", "Weaker consistency"],
              useCase: "Web applications, content management, e-commerce"
            },
            {
              name: "SQL Server",
              icon: "🪟",
              desc: "Microsoft's enterprise database",
              pros: ["Enterprise features", "Windows integration", "BI tools", "Strong ACID"],
              cons: ["Expensive licensing", "Windows-centric"],
              useCase: ".NET apps, enterprise systems, business intelligence"
            },
            {
              name: "SQLite",
              icon: "💎",
              desc: "Lightweight embedded database",
              pros: ["No server needed", "Single file", "Zero config", "Fast for small data"],
              cons: ["No concurrency", "Limited scalability", "Single user"],
              useCase: "Mobile apps, embedded systems, prototyping, local storage"
            }
          ].map((db, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{db.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{db.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{db.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">Strengths</h5>
                  <ul className="space-y-1">
                    {db.pros.slice(0, 2).map((pro, i) => (
                      <li key={i} className="text-xs flex items-start gap-1">
                        <span className="text-green-500">✓</span>
                        <span className="text-slate-700 dark:text-slate-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-2">Trade-offs</h5>
                  <ul className="space-y-1">
                    {db.cons.slice(0, 2).map((con, i) => (
                      <li key={i} className="text-xs flex items-start gap-1">
                        <span className="text-orange-500">⚠</span>
                        <span className="text-slate-700 dark:text-slate-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Best for:</strong> {db.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SQL Query Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 Interactive SQL Queries
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(sqlQueries).map(([key, query]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedQuery(key);
                  setShowQueryResult(false);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedQuery === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600'
                }`}
              >
                {query.name}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {sqlQueries[selectedQuery].name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {sqlQueries[selectedQuery].desc}
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm font-mono text-green-400 overflow-auto">
                  {sqlQueries[selectedQuery].code}
                </pre>
              </div>

              <button
                onClick={() => setShowQueryResult(!showQueryResult)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                {showQueryResult ? 'Hide Result' : 'Execute Query'}
              </button>

              {showQueryResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-400 dark:border-green-700"
                >
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
                    <span>✅</span> Query executed successfully
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                    {sqlQueries[selectedQuery].result}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SQL Data Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📋 Common SQL Data Types
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { type: "VARCHAR(n)", desc: "Variable-length string", example: "VARCHAR(255) - 'John Doe'" },
            { type: "INTEGER", desc: "Whole number", example: "42, -10, 1000000" },
            { type: "DECIMAL(p,s)", desc: "Exact decimal number", example: "DECIMAL(10,2) - 99.99" },
            { type: "BOOLEAN", desc: "True or false value", example: "TRUE, FALSE" },
            { type: "DATE", desc: "Date value", example: "'2024-01-15'" },
            { type: "TIMESTAMP", desc: "Date and time", example: "'2024-01-15 14:30:00'" },
            { type: "TEXT", desc: "Large text data", example: "Blog posts, descriptions" },
            { type: "JSON", desc: "JSON data (PostgreSQL)", example: `'{"key": "value"}'` },
            { type: "UUID", desc: "Unique identifier", example: "'550e8400-e29b-41d4-a716-...'" }
          ].map((dataType, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <h4 className="font-mono font-bold text-cyan-900 dark:text-cyan-100 mb-2">
                {dataType.type}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{dataType.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs">{dataType.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SQL Constraints */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔒 SQL Constraints
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              constraint: "PRIMARY KEY",
              desc: "Uniquely identifies each row",
              example: "id INT PRIMARY KEY",
              icon: "🔑"
            },
            {
              constraint: "FOREIGN KEY",
              desc: "Links to another table's primary key",
              example: "user_id INT REFERENCES users(id)",
              icon: "🔗"
            },
            {
              constraint: "UNIQUE",
              desc: "No duplicate values allowed",
              example: "email VARCHAR(255) UNIQUE",
              icon: "✨"
            },
            {
              constraint: "NOT NULL",
              desc: "Value cannot be null",
              example: "name VARCHAR(100) NOT NULL",
              icon: "⚠️"
            },
            {
              constraint: "CHECK",
              desc: "Value must satisfy condition",
              example: "age INT CHECK (age >= 18)",
              icon: "✅"
            },
            {
              constraint: "DEFAULT",
              desc: "Default value if not specified",
              example: "created_at TIMESTAMP DEFAULT NOW()",
              icon: "🎯"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">{item.constraint}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <code className="text-xs font-mono">{item.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced SQL Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚀 Advanced SQL Features
        </h3>
        <div className="space-y-4">
          {[
            {
              feature: "Indexes",
              desc: "Speed up query performance by creating index structures",
              example: "CREATE INDEX idx_user_email ON users(email);",
              benefit: "10-100x faster queries on indexed columns"
            },
            {
              feature: "Views",
              desc: "Virtual tables based on queries for reusability",
              example: "CREATE VIEW active_users AS SELECT * FROM users WHERE active = true;",
              benefit: "Simplify complex queries, security layer"
            },
            {
              feature: "Stored Procedures",
              desc: "Pre-compiled SQL code stored in database",
              example: "CREATE PROCEDURE GetUserOrders(user_id INT) AS ...",
              benefit: "Better performance, reusable logic"
            },
            {
              feature: "Triggers",
              desc: "Automatically execute code on certain events",
              example: "CREATE TRIGGER update_timestamp BEFORE UPDATE ON users ...",
              benefit: "Enforce business rules, audit trails"
            },
            {
              feature: "Window Functions",
              desc: "Perform calculations across rows related to current row",
              example: "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) FROM employees;",
              benefit: "Running totals, rankings, moving averages"
            },
            {
              feature: "CTEs (Common Table Expressions)",
              desc: "Temporary result sets for complex queries",
              example: "WITH top_users AS (SELECT ...) SELECT * FROM top_users;",
              benefit: "Better readability, recursive queries"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 text-lg">{item.feature}</h4>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-semibold whitespace-nowrap">
                  {item.benefit}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.desc}</p>
              <div className="bg-slate-900 p-3 rounded">
                <code className="text-xs font-mono text-green-400">{item.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>SQL databases organize data in tables with strict schemas and relationships between tables</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>PostgreSQL offers advanced features and JSON support; MySQL is simpler and faster for basic operations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Use constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE) to enforce data integrity</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Indexes dramatically improve query performance but slow down writes - use strategically</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
