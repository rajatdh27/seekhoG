"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface ContentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  href: string;
  status?: string;
  badges?: string[];
  actionText?: string;
  comingSoonText?: string;
}

export default function ContentCard({ 
  title, 
  description, 
  icon, 
  gradient, 
  href, 
  status = "live", 
  badges = [], 
  actionText = "Explore Topic", 
  comingSoonText = "Coming Soon..." 
}: ContentCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const CardContent = () => (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } as any}
      className={`group h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-white/20 shadow-2xl relative overflow-hidden flex flex-col ${status !== "live" ? "opacity-75" : ""}`}
    >
      {/* Mouse Spotlight Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(var(--glow-rgb), 0.1), transparent)`,
        } as any}
      />

      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>

      {/* Live badge */}
      {status === "live" ? (
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute top-6 right-6 bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5"
        >
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          LIVE
        </div>
      ) : (
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute top-6 right-6 bg-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30"
        >
          SOON
        </div>
      )}

      {/* Icon */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
      >
        <span className="text-3xl text-white">{icon}</span>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex-1">
        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {title}
        </h3>
        <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
          {description}
        </p>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge, i) => (
              <span key={i} className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded-md uppercase tracking-wider">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] transition-all ${status === "live" ? "text-blue-400 group-hover:text-white group-hover:gap-3" : "text-slate-600"}`}
      >
        <span>{status === "live" ? actionText : comingSoonText}</span>
        {status === "live" && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </div>

      {/* Decorative corner element */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 pointer-events-none`}></div>
    </motion.div>
  );

  return (
    <div 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="h-full perspective-container"
      style={{
        "--glow-rgb": "255, 255, 255" // Default glow color, can be customized or extracted from gradient
      } as any}
    >
      {status === "live" ? (
        <Link href={href} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <div className="h-full cursor-not-allowed">
          <CardContent />
        </div>
      )}
    </div>
  );
}
