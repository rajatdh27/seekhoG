"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LanguageChoice3D({ 
  title, 
  description, 
  languages = [], 
  icon: Icon, 
  color = "blue" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    blue: "bg-blue-600 shadow-blue-500/20 border-blue-400/30",
    green: "bg-emerald-600 shadow-emerald-500/20 border-emerald-400/30",
    orange: "bg-orange-600 shadow-orange-500/20 border-orange-400/30",
    purple: "bg-purple-600 shadow-purple-500/20 border-purple-400/30",
    red: "bg-red-600 shadow-red-500/20 border-red-400/30",
    cyan: "bg-cyan-600 shadow-cyan-500/20 border-cyan-400/30",
  };

  const themeClass = colors[color] || colors.blue;

  return (
    <div 
      className="relative h-80 flex items-center justify-center perspective-1000 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-64 h-48 rounded-2xl transform-style-3d cursor-pointer transition-all duration-500`}
        animate={{ 
          rotateX: isHovered ? 25 : 0,
          rotateY: isHovered ? 0 : 0,
          y: isHovered ? 20 : 0
        }}
      >
        {/* Base Platform */}
        <div className={`absolute inset-0 ${themeClass} bg-opacity-20 backdrop-blur-md border rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center transform-style-3d`}>
          <div className="transform translate-z-10 mb-4 p-4 bg-white/10 rounded-full text-white">
            {Icon && <Icon size={32} />}
          </div>
          <h3 className="text-xl font-black text-white transform translate-z-10 mb-2">{title}</h3>
          <p className="text-xs text-white/70 font-medium transform translate-z-10 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Floating Language Pills */}
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d pointer-events-none">
          {languages.map((lang, i) => (
            <motion.div
              key={lang}
              className={`absolute px-4 py-2 bg-slate-900 border border-white/20 rounded-lg text-white font-bold text-sm shadow-2xl flex items-center gap-2`}
              initial={{ opacity: 0, y: 0, z: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? -80 - (i * 50) : 0,
                z: isHovered ? 60 + (i * 20) : 0,
                rotateX: -25
              }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 15, 
                delay: i * 0.1 
              }}
            >
              <div className={`w-2 h-2 rounded-full bg-${color}-400`} />
              {lang}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ground Shadow */}
      <motion.div 
        className="absolute bottom-10 w-48 h-12 bg-black/40 blur-xl rounded-full"
        animate={{ 
          scale: isHovered ? 0.8 : 1,
          opacity: isHovered ? 0.4 : 0.2
        }}
      />

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(20px); }
      `}</style>
    </div>
  );
}
