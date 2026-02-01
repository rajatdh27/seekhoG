"use client";

import React, { isValidElement } from "react";
import { motion } from "framer-motion";

/**
 * Highly Reusable Card for DSA Sections
 * Replaces specialized CheatCards, SnippetCards, and ComplexityCards.
 * 
 * @param {Object} props
 * @param {React.ElementType | React.ReactNode} props.icon - Lucide icon or custom element
 * @param {string} props.title - Main heading
 * @param {string} [props.description] - Main text content
 * @param {string} [props.badge] - Small emphasis text (e.g. "O(1)", "Medium")
 * @param {React.ReactNode} [props.footer] - Content at the bottom (e.g. list, code)
 * @param {React.ReactNode} [props.children] - Additional body content
 * @param {string} [props.color] - Theme color (blue, emerald, amber, rose, indigo, purple, cyan, pink)
 * @param {'vertical' | 'horizontal' | 'compact'} [props.variant] - Layout style
 * @param {string} [props.className] - Container override classes
 * @param {Object} [props.motionProps] - Custom framer-motion props
 */
export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  badge,
  footer, 
  children,
  color = "blue",
  variant = "vertical",
  className = "",
  motionProps = { whileHover: { y: -5 } }
}) {
  const isVertical = variant === "vertical";
  const isCompact = variant === "compact";
  const isHorizontal = variant === "horizontal";

  const colorMap = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 shadow-blue-500/5",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40 shadow-emerald-500/5",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40 shadow-amber-500/5",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20 hover:border-rose-500/40 shadow-rose-500/5",
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/40 shadow-indigo-500/5",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40 shadow-purple-500/5",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40 shadow-cyan-500/5",
    pink: "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:border-pink-500/40 shadow-pink-500/5",
    fuchsia: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20 hover:border-fuchsia-500/40 shadow-fuchsia-500/5",
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/20 hover:border-teal-500/40 shadow-teal-500/5",
    orange: "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40 shadow-orange-500/5",
  };

  const selectedColor = colorMap[color] || colorMap.blue;

  // Determine how to render the icon
  const renderIcon = () => {
    if (isValidElement(Icon) || typeof Icon === 'string' || typeof Icon === 'number') {
      return Icon;
    }
    // Assume it's a component (function or object-component)
    return <Icon size={isCompact ? 20 : 28} />;
  };

  return (
    <motion.div 
      {...motionProps}
      className={`p-6 bg-slate-900 border border-white/5 rounded-3xl group transition-all flex shadow-2xl relative overflow-hidden
        ${isVertical ? "flex-col gap-4" : "gap-5"} 
        ${isHorizontal ? "items-start" : ""}
        ${isCompact ? "p-4 gap-3 items-center" : ""}
        ${className}
      `}
    >
      {/* Glow Effect */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity pointer-events-none bg-${color}-500`} />

      {/* Icon Container */}
      {Icon && (
        <div className={`shrink-0 flex items-center justify-center rounded-2xl border transition-all group-hover:scale-110 
          ${isCompact ? "w-10 h-10" : "w-14 h-14"} 
          ${selectedColor}
        `}>
          {renderIcon()}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h4 className={`font-black text-white uppercase tracking-tighter 
            ${isCompact ? "text-xs" : "text-base"} 
            ${isVertical ? "mb-1" : ""}
          `}>
            {title}
          </h4>
          {badge && (
            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${selectedColor}`}>
              {badge}
            </span>
          )}
        </div>

        {description && (
          <p className={`${isCompact || isVertical ? "text-[10px]" : "text-xs"} text-slate-400 font-medium leading-relaxed`}>
            {description}
          </p>
        )}

        {children && <div className="mt-3">{children}</div>}
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-white/5">
            {footer}
          </div>
        )}
      </div>
    </motion.div>
  );
}
