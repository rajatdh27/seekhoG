"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VariableVisualizer3D({ 
  name = "score", 
  value = "100", 
  type = "int", 
  color = "blue" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    blue: "bg-blue-500",
    emerald: "bg-emerald-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    rose: "bg-rose-500",
    cyan: "bg-cyan-500",
    yellow: "bg-yellow-500",
    indigo: "bg-indigo-500",
  };

  const themeColor = colors[color] || colors.blue;
  const glowColor = themeColor.replace("bg-", "shadow-");

  return (
    <div 
      className="relative w-64 h-64 flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Cube Container */}
      <motion.div
        className="relative w-32 h-32 transform-style-3d cursor-pointer"
        animate={{ 
          rotateX: isHovered ? -20 : -10, 
          rotateY: isHovered ? 45 : 25,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Front Face (Variable Name) */}
        <div className={`absolute inset-0 ${themeColor} opacity-90 border-2 border-white/20 flex flex-col items-center justify-center translate-z-16 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] backface-hidden`}>
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Variable</span>
          <span className="text-white text-3xl font-black">{name}</span>
          <div className="mt-2 px-2 py-0.5 bg-black/20 rounded text-[10px] font-mono text-white/80">{type}</div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 ${themeColor} opacity-80 border-2 border-white/20 translate-z--16 rotate-y-180 rounded-xl`} />

        {/* Right Face */}
        <div className={`absolute inset-0 ${themeColor} opacity-70 border-2 border-white/20 rotate-y-90 translate-x-16 rounded-xl`} />

        {/* Left Face */}
        <div className={`absolute inset-0 ${themeColor} opacity-70 border-2 border-white/20 rotate-y--90 translate-x--16 rounded-xl`} />

        {/* Top Face (Lid) - Opens up */}
        <motion.div 
          className={`absolute inset-0 ${themeColor} opacity-100 border-2 border-white/20 rotate-x-90 translate-y--16 rounded-xl origin-bottom flex items-center justify-center`}
          animate={{ rotateX: isHovered ? 130 : 90 }}
        >
           <div className="w-8 h-1 bg-white/20 rounded-full" />
        </motion.div>

        {/* Bottom Face */}
        <div className={`absolute inset-0 ${themeColor} opacity-60 border-2 border-white/20 rotate-x--90 translate-y-16 rounded-xl shadow-xl`} />

        {/* Inner Content (The Value) - Reveals when lid opens */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center transform-style-3d"
          animate={{ y: isHovered ? -40 : 0, opacity: isHovered ? 1 : 0 }}
        >
          <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.5)] border-2 border-white/50">
            {value}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floor Shadow */}
      <div className="absolute -bottom-10 w-32 h-8 bg-black/40 blur-xl rounded-full transform rotate-x-60" />
      
      {/* Interaction Hint */}
      <motion.div 
        className="absolute bottom-4 text-xs font-bold text-slate-500 uppercase tracking-widest"
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        Hover to Reveal
      </motion.div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-16 { transform: translateZ(64px); }
        .translate-z--16 { transform: translateZ(-64px); }
        .translate-x-16 { transform: translateX(64px); }
        .translate-x--16 { transform: translateX(-64px); }
        .translate-y-16 { transform: translateY(64px); }
        .translate-y--16 { transform: translateY(-64px); }
        .rotate-y-90 { transform: rotateY(90deg); }
        .rotate-y--90 { transform: rotateY(-90deg); }
        .rotate-y-180 { transform: rotateY(180deg); }
        .rotate-x-90 { transform: rotateX(90deg); }
        .rotate-x--90 { transform: rotateX(-90deg); }
        .origin-bottom { transform-origin: bottom; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
