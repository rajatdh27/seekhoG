"use client";

import { motion } from "framer-motion";
import { Users, Code, GitBranch, Zap, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-purple-500/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 pt-32 pb-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-purple-400" /> Our Mission & Vision
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent mb-8"
          >
            About SeekhoG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Empowering the next generation of software engineers with deep, accessible, and practical knowledge. We believe in learning by doing and mastering the fundamentals.
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Our Story</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              SeekhoG was born from a simple observation: while there are countless resources to learn programming, few bridge the gap between theory and real-world application effectively. We wanted to create a platform that not only teaches the 'what' but also the 'why' and 'how'.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our journey started with a focus on Data Structures and Algorithms, the bedrock of efficient software. We've since expanded to cover backend development, system design, and the core concepts that transcend any single language or framework.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2.5rem] flex items-center justify-center p-8"
          >
            <Code size={128} className="text-white opacity-20" />
            <p className="absolute text-2xl font-black text-white">From Idea to Impact</p>
          </motion.div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-center mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Community First", description: "We foster a collaborative and supportive environment for learners of all levels." },
            { icon: Code, title: "Technical Excellence", description: "We are committed to providing accurate, in-depth, and up-to-date content." },
            { icon: GitBranch, title: "Practical Application", description: "We emphasize real-world problem-solving and hands-on learning." },
            { icon: Target, title: "Continuous Learning", description: "We believe in lifelong learning and constantly evolve our platform." },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <value.icon size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
