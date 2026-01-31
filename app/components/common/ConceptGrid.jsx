"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

/**
 * Reusable Grid for DSA Concepts
 * @param {Object} props
 * @param {Array} props.items - Array of { icon, title, description, footer, color }
 * @param {number} [props.columns] - Number of columns at large screens (default: 3)
 * @param {'vertical' | 'horizontal'} [props.variant] - Card layout orientation
 * @param {string} [props.className] - Additional classes for the grid
 */
export default function ConceptGrid({ 
  items = [], 
  columns = 3, 
  variant = "vertical",
  className = ""
}) {
  const gridCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns] || "lg:grid-cols-3"} gap-4 ${className}`}>
      {items.map((item, index) => (
        <FeatureCard
          key={index}
          {...item}
          variant={variant}
        />
      ))}
    </div>
  );
}
