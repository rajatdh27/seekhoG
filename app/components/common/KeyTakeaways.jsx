"use client";

import { motion } from "framer-motion";

export default function KeyTakeaways({
  title = "Key Takeaways",
  icon = "💡",
  items = [],
  gradientFrom = "blue-500",
  gradientTo = "indigo-500"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 border border-${gradientFrom}/30 rounded-2xl p-6 mb-8`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className={`text-${gradientFrom} text-xl mt-1`}>•</span>
            <span className="text-slate-200 leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
