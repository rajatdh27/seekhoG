"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const colors = {
  emerald: {
    border: "hover:border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.1)", // emerald-500
  },
  orange: {
    border: "hover:border-orange-500/30",
    glow: "rgba(249, 115, 22, 0.1)", // orange-500
  },
  blue: {
    border: "hover:border-blue-500/30",
    glow: "rgba(59, 130, 246, 0.1)", // blue-500
  },
  pink: {
    border: "hover:border-pink-500/30",
    glow: "rgba(236, 72, 153, 0.1)", // pink-500
  },
  indigo: {
    border: "hover:border-indigo-500/30",
    glow: "rgba(99, 102, 241, 0.1)", // indigo-500
  },
  teal: {
    border: "hover:border-teal-500/30",
    glow: "rgba(20, 184, 166, 0.1)", // teal-500
  },
  amber: {
    border: "hover:border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.1)", // amber-500
  },
  purple: {
    border: "hover:border-purple-500/30",
    glow: "rgba(168, 85, 247, 0.1)", // purple-500
  },
};

export default function PerspectiveCard({ children, className = "", color = "emerald" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const theme = colors[color] || colors.emerald;

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
      className={`perspective-card group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl transition-colors duration-500 ${theme.border} ${className}`}
    >
      {/* Mouse Spotlight Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), ${theme.glow}, transparent)`,
        }}
      />
      
      {/* Content wrapper with depth */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
