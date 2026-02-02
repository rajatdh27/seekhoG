"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function LanguageShowcase3D({ 
  name, 
  slogan, 
  domains = [], 
  icon, 
  color = "blue",
  keywords = [] 
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Spring-animated mouse tracking for "Game-like" parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const colors = {
    blue: { bg: "bg-blue-600", shadow: "shadow-blue-500/50", glow: "blue", text: "text-blue-400", border: "border-blue-400/50" },
    green: { bg: "bg-emerald-600", shadow: "shadow-emerald-500/50", glow: "emerald", text: "text-emerald-400", border: "border-emerald-400/50" },
    orange: { bg: "bg-orange-500", shadow: "shadow-orange-500/50", glow: "orange", text: "text-orange-400", border: "border-orange-400/50" },
    purple: { bg: "bg-purple-600", shadow: "shadow-purple-500/50", glow: "purple", text: "text-purple-400", border: "border-purple-400/50" },
    red: { bg: "bg-red-600", shadow: "shadow-red-500/50", glow: "red", text: "text-red-400", border: "border-red-400/50" },
    cyan: { bg: "bg-cyan-600", shadow: "shadow-cyan-500/50", glow: "cyan", text: "text-cyan-400", border: "border-cyan-400/50" },
    yellow: { bg: "bg-yellow-500", shadow: "shadow-yellow-500/50", glow: "yellow", text: "text-yellow-400", border: "border-yellow-400/50" },
    indigo: { bg: "bg-indigo-500", shadow: "shadow-indigo-500/50", glow: "indigo", text: "text-indigo-400", border: "border-indigo-400/50" },
    rose: { bg: "bg-rose-600", shadow: "shadow-rose-500/50", glow: "rose", text: "text-rose-400", border: "border-rose-400/50" },
  };

  const theme = colors[color] || colors.blue;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      className="relative w-full h-[600px] flex items-center justify-center perspective-1000 overflow-visible cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Ambient Glow - Intensifies on hover */}
      <motion.div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-${theme.glow}-500/20 blur-[120px] pointer-events-none rounded-full`} 
        animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.4 : 0.2 }}
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-80 h-[450px] transform-style-3d"
        animate={{ y: isHovered ? -10 : 0 }}
      >
        {/* === THE CORE ARTIFACT === */}
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
          
          {/* Glass Crystal Container */}
          <motion.div 
            className={`absolute w-56 h-56 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center transform-style-3d overflow-hidden`}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              borderColor: isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
            }}
          >
            {/* Energy Core - Pulse speed increases on hover */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-tr from-${theme.glow}-500/30 to-transparent blur-2xl`}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: isHovered ? [1, 1.2, 1] : 1 
              }}
              transition={{ duration: isHovered ? 1 : 3, repeat: Infinity }}
            />
            
            {/* Spinning Data Rings */}
            <motion.div 
              className={`absolute inset-4 border-2 border-${theme.glow}-400/40 rounded-full border-dashed`}
              animate={{ rotateZ: 360 }}
              transition={{ duration: isHovered ? 5 : 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={`absolute inset-10 border border-white/20 rounded-full`}
              animate={{ rotateZ: -360 }}
              transition={{ duration: isHovered ? 8 : 20, repeat: Infinity, ease: "linear" }}
            />

            {/* The Icon - Smaller and more balanced */}
            <motion.div 
              className="relative z-10 text-7xl filter drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] select-none"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : 1,
                y: isHovered ? [0, -10, 0] : 0
              }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
            >
              {icon}
            </motion.div>
          </motion.div>
        </div>

        {/* === ACTIVE DOMAIN SATELLITES === */}
        {domains.map((domain, i) => {
          const angle = (i / domains.length) * Math.PI * 2;
          const radius = isHovered ? 220 : 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.6;

          return (
            <motion.div
              key={domain}
              className="absolute top-1/2 left-1/2 transform-style-3d"
              animate={{ x, y, scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className={`absolute -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 bg-slate-950/90 border-2 border-${theme.glow}-500/40 backdrop-blur-xl rounded-2xl text-white font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 group-hover:shadow-${theme.glow}-500/20`}>
                <motion.div 
                  className={`w-2 h-2 rounded-full ${theme.bg}`} 
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {domain}
              </div>
            </motion.div>
          );
        })}

        {/* === FUTURISTIC BASE === */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-64 h-64 transform-style-3d pointer-events-none">
           {[1, 2, 3].map((r) => (
             <motion.div 
               key={r}
               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-${theme.glow}-500/${10 + r*10}`}
               style={{ 
                 width: `${120 + r*40}px`, 
                 height: `${120 + r*40}px`,
                 transform: `rotateX(75deg) translateZ(${r * -15}px)`
               }}
               animate={{ 
                 opacity: isHovered ? 0.8 : 0.3,
                 scale: isHovered ? 1.1 : 1
               }}
             />
           ))}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[350px] bg-gradient-to-t from-${theme.glow}-500/30 to-transparent blur-3xl transform -translate-y-[175px]`} />
        </div>

      </motion.div>

      {/* Dynamic Label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-50 pointer-events-none">
        <motion.h2 
          className="text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {name}
        </motion.h2>
        <motion.div 
          className={`inline-block px-6 py-1.5 rounded-full bg-slate-900 border-2 border-${theme.glow}-500/50 text-${theme.glow}-400 text-xs font-black uppercase tracking-[0.4em] shadow-lg`}
          animate={{ y: isHovered ? -5 : 0 }}
        >
          {slogan}
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
