"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SearchingSortingCard({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-card group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl transition-colors duration-500 hover:border-orange-500/30 ${className}`}
    >
      {/* Mouse Spotlight Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(249, 115, 22, 0.1), transparent)`,
        }}
      />
      
      {/* Content wrapper with depth */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
