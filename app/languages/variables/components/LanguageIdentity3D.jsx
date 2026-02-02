"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LanguageIdentity3D({ 
  name, 
  slogan, 
  domains = [], 
  icon, 
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
    yellow: "bg-yellow-500 shadow-yellow-500/20 border-yellow-400/30",
    indigo: "bg-indigo-600 shadow-indigo-500/20 border-indigo-400/30",
    rose: "bg-rose-600 shadow-rose-500/20 border-rose-400/30",
  };

  const themeClass = colors[color] || colors.blue;

  return (
    <div 
      className="relative h-64 flex items-center justify-center perspective-1000 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-full h-48 rounded-2xl transform-style-3d cursor-pointer transition-all duration-500`}
        animate={{ 
          rotateX: isHovered ? 20 : 0,
          rotateY: isHovered ? 0 : 0,
          y: isHovered ? 10 : 0
        }}
      >
        {/* Main Language Card */}
        <div className={`absolute inset-0 ${themeClass} bg-opacity-20 backdrop-blur-md border rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center transform-style-3d overflow-hidden`}>
          <div className="absolute top-0 right-0 p-4 opacity-10 text-white transform translate-z-10 text-6xl font-black select-none">
            {icon}
          </div>
          
          <h3 className="text-3xl font-black text-white transform translate-z-20 mb-1 drop-shadow-lg">{name}</h3>
          <p className="text-xs text-white/90 font-bold uppercase tracking-widest transform translate-z-20">
            {slogan}
          </p>
        </div>

        {/* Floating Domain Pills */}
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d pointer-events-none">
          {domains.map((domain, i) => {
            // Calculate distinct positions for floating elements
            const yOffset = i === 0 ? -70 : i === 1 ? -50 : -90;
            const xOffset = i === 0 ? 0 : i === 1 ? 60 : -60;
            const zOffset = 40 + (i * 20);

            return (
              <motion.div
                key={domain}
                className={`absolute px-3 py-1.5 bg-slate-950 border border-white/20 rounded-lg text-white font-bold text-xs shadow-2xl flex items-center gap-2 whitespace-nowrap`}
                initial={{ opacity: 0, y: 0, x: 0, z: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? yOffset : 0,
                  x: isHovered ? xOffset : 0,
                  z: isHovered ? zOffset : 0,
                  rotateX: -20
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 12, 
                  delay: i * 0.05 
                }}
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
                {domain}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Ground Shadow */}
      <motion.div 
        className="absolute bottom-4 w-40 h-8 bg-black/40 blur-xl rounded-full"
        animate={{ 
          scale: isHovered ? 0.8 : 1,
          opacity: isHovered ? 0.5 : 0.3
        }}
      />

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(20px); }
        .translate-z-20 { transform: translateZ(40px); }
      `}</style>
    </div>
  );
}
