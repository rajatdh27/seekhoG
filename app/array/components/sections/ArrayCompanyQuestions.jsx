"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const companies = [
  { name: "Google", icon: "🔍", color: "blue", count: 156 },
  { name: "Amazon", icon: "📦", color: "orange", count: 203 },
  { name: "Microsoft", icon: "🪟", color: "cyan", count: 142 },
  { name: "Meta", icon: "👍", color: "indigo", count: 98 },
  { name: "Apple", icon: "🍎", color: "slate", count: 87 },
  { name: "Netflix", icon: "📺", color: "red", count: 45 },
  { name: "Adobe", icon: "🎨", color: "red", count: 76 },
  { name: "Uber", icon: "🚗", color: "green", count: 54 },
];

export default function ArrayCompanyQuestions() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100"
      >
        Company-Wise Questions
      </motion.h2>

      <p className="text-slate-700 dark:text-slate-300 mb-8">
        Practice problems frequently asked by top tech companies. Track your progress and focus on companies you're targeting.
      </p>

      {/* Company Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {companies.map((company, idx) => (
          <motion.button
            key={company.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedCompany(company)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedCompany.name === company.name
                ? `border-${company.color}-500 bg-${company.color}-50 dark:bg-${company.color}-900/30 shadow-lg`
                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
            }`}
          >
            <div className="text-3xl mb-1">{company.icon}</div>
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
              {company.name}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {company.count} problems
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Company Info */}
      <motion.div
        key={selectedCompany.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
      >
        <div className="text-7xl mb-4">{selectedCompany.icon}</div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {selectedCompany.name}
        </h3>
        <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
          {selectedCompany.count} Array Problems
        </p>
        <div className="text-6xl mb-4">🚧</div>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Company-specific problem database coming soon! Track frequency, difficulty, and recent appearances.
        </p>
      </motion.div>
    </div>
  );
}
