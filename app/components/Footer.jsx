"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Heart, Code2, Layers, Cpu, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-pink-300 transition-all duration-300">
                SeekhoG.
              </span>
            </Link>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
              The ultimate engineering hub for mastering algorithms, system design, and low-level programming. Built for the modern developer.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Layers size={18} className="text-blue-500" /> Modules
            </h4>
            <ul className="space-y-4">
              {[
                { name: "DSA Foundations", href: "/foundations" },
                { name: "Searching & Sorting", href: "/searching-sorting" },
                { name: "Backend Engineering", href: "/backend" },
                { name: "System Design", href: "/backend/system-design" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Cpu size={18} className="text-purple-500" /> Deep Dives
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Arrays & Strings", href: "/array" },
                { name: "Trees & Graphs", href: "/tree" },
                { name: "Dynamic Programming", href: "/dynamic-programming" },
                { name: "Low-Level Concepts", href: "/languages" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-purple-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-purple-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Globe size={18} className="text-emerald-500" /> Community
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Leaderboard", href: "/leaderboard" },
                { name: "My Journey", href: "/journey" },
                { name: "Social Hub", href: "/social" },
                { name: "About Us", href: "/" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {currentYear} SeekhoG. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-white/5">
            <span>Made with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>and</span>
            <Code2 size={12} className="text-blue-500" />
            <span>for Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
