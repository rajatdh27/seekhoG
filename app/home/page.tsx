"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  Database, 
  Server, 
  Cpu, 
  ArrowRight, 
  Zap
} from "lucide-react";

// --- Components ---

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = to / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to]);

  return <span>{count}{suffix}</span>;
};

const FeatureCard = ({ title, subtitle, icon: Icon, stats, href, color, gradient }: {
  title: string;
  subtitle: string;
  icon: any;
  stats: { value: number; label: string; suffix?: string }[];
  href: string;
  color: string;
  gradient: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="relative group h-full"
    >
      <Link href={href}>
        <div className={`h-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-slate-500 shadow-2xl relative overflow-hidden flex flex-col`}>
          
          {/* Mouse Spotlight Glow */}
          <motion.div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            style={{
              background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(var(--glow-rgb), 0.15), transparent)`,
            }}
          />

          {/* Floating Icon */}
          <div 
            style={{ transform: "translateZ(50px)" }}
            className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
          >
            <Icon size={40} className="text-white" />
          </div>

          <div style={{ transform: "translateZ(30px)" }} className="flex-1">
            <h3 className="text-3xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
              {title}
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">
              {subtitle}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-2xl font-black text-white mb-1`}>
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            style={{ transform: "translateZ(20px)" }}
            className="mt-10 flex items-center gap-2 font-black uppercase tracking-[0.2em] text-sm group-hover:gap-4 transition-all"
          >
            <span>Start Journey</span>
            <ArrowRight size={18} />
          </div>

          {/* Background Decoration */}
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-500`} />
        </div>
      </Link>
    </motion.div>
  );
};

export default function HomeHub() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("group");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Futuristic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-blue-400" /> Evolution of Learning
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent"
          >
            SeekhoG<span className="text-blue-500">.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A high-performance engineering hub to master the architecture of software. 
            From bits to distributed systems.
          </motion.p>
        </div>
      </section>

      {/* The Master Pillars */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ "--glow-rgb": "59, 130, 246" }}
          >
            <FeatureCard 
              title="Data Structures"
              subtitle="Master the fundamental building blocks of efficient software and advanced algorithmic patterns."
              icon={Database}
              href="/"
              color="blue-500"
              gradient="from-blue-600 to-indigo-600"
              stats={[
                { value: 14, label: "Topics", suffix: "" },
                { value: 100, label: "Live", suffix: "%" },
                { value: 350, label: "Problems", suffix: "+" }
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ "--glow-rgb": "168, 85, 247" }}
          >
            <FeatureCard 
              title="Backend Dev"
              subtitle="Scale from basic APIs to high-concurrency systems and distributed architecture."
              icon={Server}
              href="/backend"
              color="purple-500"
              gradient="from-purple-600 to-pink-600"
              stats={[
                { value: 11, label: "Modules", suffix: "" },
                { value: 100, label: "Depth", suffix: "%" },
                { value: 99, label: "Expertise", suffix: "th" }
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ "--glow-rgb": "245, 158, 11" }}
          >
            <FeatureCard 
              title="Core Concepts"
              subtitle="Deep dive into memory, variables, and cross-language execution models."
              icon={Cpu}
              href="/languages/variables"
              color="amber-500"
              gradient="from-amber-500 to-orange-600"
              stats={[
                { value: 12, label: "Concepts", suffix: "" },
                { value: 10, label: "Languages", suffix: "+" },
                { value: 500, label: "Examples", suffix: "+" }
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Interactive Footer CTA */}
      <section className="relative z-10 px-6 py-40 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10 relative z-10"
          >
            <div className="text-6xl md:text-8xl">🚀</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Ready to break the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Limits of Code?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth" className="px-12 py-6 bg-blue-600 hover:bg-blue-50 text-white hover:text-blue-600 rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-blue-600/20 active:scale-95">
                Join the Network
              </Link>
              <Link href="/" className="px-12 py-6 bg-slate-800 hover:bg-slate-700 text-white rounded-[2rem] font-black text-xl transition-all border border-white/10 active:scale-95">
                Start Browsing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Bottom Line */}
      <footer className="relative z-10 px-6 py-10 border-t border-white/5 text-center">
        <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.5em]">
          SeekhoG &copy; 2026 • Engineering Excellence
        </p>
      </footer>

      {/* Global CSS for the mouse spotlight effect */}
      <style jsx global>{`
        :root {
          --mouse-x: 0px;
          --mouse-y: 0px;
        }
      `}</style>
    </div>
  );
}