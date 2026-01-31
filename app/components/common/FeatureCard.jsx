"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Card for DSA Features/Concepts
 * @param {Object} props
 * @param {React.ElementType} props.icon - Lucide icon component
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description/text
 * @param {React.ReactNode} [props.footer] - Optional footer content (e.g. usage badge)
 * @param {string} [props.color] - Theme color (blue, emerald, rose, etc.)
 * @param {'vertical' | 'horizontal'} [props.variant] - Layout orientation
 * @param {string} [props.className] - Additional classes
 */
export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  footer, 
  color = "blue",
  variant = "vertical",
  className = ""
}) {
  const isVertical = variant === "vertical";

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 bg-slate-900 border border-white/5 rounded-2xl group hover:border-${color}-500/30 transition-all flex ${isVertical ? "flex-col gap-3" : "gap-4"} ${className}`}
    >
      <div className={`shrink-0 ${isVertical ? "w-10 h-10 mb-1" : "w-12 h-12"} rounded-xl bg-${color}-500/10 text-${color}-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-${color}-500/20`}>
        {Icon && <Icon size={isVertical ? 20 : 24} />}
      </div>
      
      <div className="flex-1">
        <h4 className={`font-black text-white uppercase tracking-tighter ${isVertical ? "text-sm mb-1" : "text-base mb-1"}`}>
          {title}
        </h4>
        <p className={`${isVertical ? "text-[10px]" : "text-xs"} text-slate-400 font-medium leading-relaxed`}>
          {description}
        </p>
        
        {footer && (
          <div className="mt-4 pt-3 border-t border-white/5">
            {footer}
          </div>
        )}
      </div>
    </motion.div>
  );
}
