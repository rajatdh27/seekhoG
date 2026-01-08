"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dataStructures = [
  {
    id: "array",
    name: "Arrays",
    nameHindi: "ऐरे",
    icon: "📊",
    gradient: "from-blue-600 to-indigo-600",
    description: "Master array fundamentals, patterns, and 130+ problems",
    stats: { patterns: "9+", problems: "130+", companies: "8" },
    features: ["Interactive Visualizer", "6 Languages", "Company Problems"],
  },
  {
    id: "stack",
    name: "Stacks",
    nameHindi: "स्टैक",
    icon: "📚",
    gradient: "from-purple-600 to-pink-600",
    description: "Learn LIFO operations, patterns, and 120+ problems",
    stats: { patterns: "6+", problems: "120+", applications: "8" },
    features: ["Push/Pop Demo", "Real-world Uses", "Interview Patterns"],
  },
];

const features = [
  {
    icon: "🎯",
    title: "Interactive Learning",
    description: "Visualize algorithms with real-time animations and demos",
  },
  {
    icon: "💻",
    title: "Multi-Language Support",
    description: "Code examples in C, C++, Java, JavaScript, Python, Go",
  },
  {
    icon: "🏢",
    title: "Company-Focused",
    description: "Problems from Google, Amazon, Meta, Microsoft & more",
  },
  {
    icon: "⚡",
    title: "Performance Optimized",
    description: "Blazing fast with lazy loading and code splitting",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2 text-white drop-shadow-lg">
              <span className="block">सीखो</span>
              <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
                Data Structures
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-light tracking-wide">
              Learn • Practice • Master
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Interactive visualizations, comprehensive explanations, and 250+ interview problems to ace your coding interviews
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/array"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Learning
            </Link>
            <Link
              href="/stack"
              className="px-8 py-4 bg-purple-700 text-white rounded-xl font-bold text-lg hover:bg-purple-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-purple-500"
            >
              Explore Stacks
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Data Structures Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100"
        >
          Available Data Structures
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-slate-600 dark:text-slate-400 mb-12"
        >
          Deep dive into each data structure with interactive learning
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {dataStructures.map((ds, idx) => (
            <motion.div
              key={ds.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link href={`/${ds.id}`}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden h-full hover:shadow-3xl transition-shadow">
                  <div className={`bg-gradient-to-r ${ds.gradient} p-8 text-white`}>
                    <div className="text-6xl mb-4">{ds.icon}</div>
                    <h3 className="text-3xl font-bold mb-3">{ds.name}</h3>
                    <p className="text-white/90">{ds.description}</p>
                  </div>

                  <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(ds.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            {value}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {ds.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className={`text-center font-semibold bg-gradient-to-r ${ds.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                        Explore {ds.name} →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100"
          >
            Why Choose This Platform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg"
          >
            Everything you need to succeed in your coding interviews
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Everything You Need to Succeed
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "250+", label: "Practice Problems" },
              { value: "15+", label: "Patterns Covered" },
              { value: "6", label: "Programming Languages" },
              { value: "8+", label: "Top Tech Companies" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6"
        >
          Ready to Master Data Structures?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-8"
        >
          Start learning with interactive visualizations and real interview problems
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/array"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
