"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  title,
  description,
  emoji,
  gradientFrom = "blue-600",
  gradientTo = "indigo-600",
  gradientFromDark = "blue-700",
  gradientToDark = "indigo-800",
  primaryButton,
  secondaryButton
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} dark:from-${gradientFromDark} dark:to-${gradientToDark} text-white py-16 px-6`}
    >
      <div className="max-w-7xl mx-auto">
        {emoji && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="text-6xl mb-4"
          >
            {emoji}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-xl md:text-2xl text-${gradientFrom.split('-')[0]}-100 max-w-3xl`}
        >
          {description}
        </motion.p>
        {(primaryButton || secondaryButton) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            {primaryButton && (
              <a
                href={primaryButton.href}
                className={`px-6 py-3 bg-white text-${gradientFrom.split('-')[0]}-600 rounded-lg font-semibold hover:bg-${gradientFrom.split('-')[0]}-50 transition-colors`}
              >
                {primaryButton.text}
              </a>
            )}
            {secondaryButton && (
              <a
                href={secondaryButton.href}
                className={`px-6 py-3 bg-${gradientFrom.split('-')[0]}-700 text-white rounded-lg font-semibold hover:bg-${gradientFrom.split('-')[0]}-800 transition-colors border border-${gradientFrom.split('-')[0]}-500`}
              >
                {secondaryButton.text}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
