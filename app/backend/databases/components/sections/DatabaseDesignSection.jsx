"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DatabaseDesignSection() {
  const [selectedNF, setSelectedNF] = useState("1NF");

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
          <span className="text-4xl">🏗️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Database Design
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Normalization, relationships, and best practices
          </p>
        </div>
      </div>

      {/* Normalization Forms */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📐 Database Normalization
        </h3>
        <div className="flex gap-2 mb-6 flex-wrap">
          {["1NF", "2NF", "3NF", "BCNF"].map((nf) => (
            <button
              key={nf}
              onClick={() => setSelectedNF(nf)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedNF === nf
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {nf}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedNF}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700"
        >
          {selectedNF === "1NF" && (
            <>
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                1NF - First Normal Form
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Each column contains atomic (indivisible) values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>No repeating groups or arrays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Each record is unique</span>
                </li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                  <p className="text-xs font-semibold mb-2">❌ Violates 1NF:</p>
                  <code className="text-xs">phones: "123-456, 789-012"</code>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                  <p className="text-xs font-semibold mb-2">✅ Follows 1NF:</p>
                  <code className="text-xs">phone_numbers table</code>
                </div>
              </div>
            </>
          )}
          {selectedNF === "2NF" && (
            <>
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                2NF - Second Normal Form
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Must be in 1NF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>All non-key attributes depend on the entire primary key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>No partial dependencies</span>
                </li>
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <p className="text-xs mb-2">Example: If PK is (student_id, course_id), student_name should not be in this table</p>
                <p className="text-xs">Move student_name to a students table</p>
              </div>
            </>
          )}
          {selectedNF === "3NF" && (
            <>
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                3NF - Third Normal Form
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Must be in 2NF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>No transitive dependencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Non-key attributes depend only on the primary key</span>
                </li>
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <p className="text-xs mb-2">Example: If zip_code determines city, don't store both with address</p>
                <p className="text-xs">Create separate zip_codes table</p>
              </div>
            </>
          )}
          {selectedNF === "BCNF" && (
            <>
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                BCNF - Boyce-Codd Normal Form
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Must be in 3NF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Every determinant is a candidate key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Stricter version of 3NF</span>
                </li>
              </ul>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                <p className="text-xs">Most strict normal form commonly used in practice</p>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Relationships */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔗 Database Relationships
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              type: "One-to-One",
              icon: "1️⃣↔️1️⃣",
              desc: "Each record in Table A relates to one record in Table B",
              example: "User ↔ UserProfile"
            },
            {
              type: "One-to-Many",
              icon: "1️⃣↔️✨",
              desc: "Each record in Table A can relate to many in Table B",
              example: "User → Posts (one user, many posts)"
            },
            {
              type: "Many-to-Many",
              icon: "✨↔️✨",
              desc: "Multiple records in both tables can relate",
              example: "Students ↔ Courses (junction table)"
            }
          ].map((rel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <div className="text-3xl mb-3 text-center">{rel.icon}</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-center">{rel.type}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{rel.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded text-center">
                <code className="text-xs">{rel.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
        <h3 className="text-xl font-semibold mb-4 text-orange-900 dark:text-orange-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Normalization reduces data redundancy and improves data integrity</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>3NF is the sweet spot for most applications - good balance of normalization vs performance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
            <span>Use foreign keys to establish relationships between tables</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
