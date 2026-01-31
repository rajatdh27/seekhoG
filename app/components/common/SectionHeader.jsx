"use client";

import React from "react";

/**
 * Standard Header for DSA Sections
 * @param {Object} props
 * @param {string} props.title - Main section title
 * @param {string} [props.description] - Optional subtitle or description
 * @param {React.ElementType} props.icon - Lucide icon component
 * @param {string} [props.color] - Theme color (e.g., "blue", "emerald", "amber")
 * @param {string} [props.className] - Additional classes for the container
 */
export default function SectionHeader({ 
  title, 
  description, 
  icon: Icon, 
  color = "blue",
  className = "mb-8"
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`w-14 h-14 bg-${color}-500/10 rounded-2xl flex items-center justify-center text-${color}-500 border border-${color}-500/20 shrink-0 shadow-lg shadow-${color}-500/5`}>
        {Icon && <Icon size={28} />}
      </div>
      <div>
        <h2 className="text-4xl font-black text-white tracking-tight">{title}</h2>
        {description && (
          <p className="text-slate-400 font-medium mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
