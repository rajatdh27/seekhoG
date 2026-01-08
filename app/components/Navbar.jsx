"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigationSections = {
  basics: {
    title: "Foundations",
    items: [
      { href: "/foundations", label: "Foundations", icon: "🟩", color: "green" },
      { href: "/searching-sorting", label: "Search & Sort", icon: "🔍", color: "orange" },
    ],
  },
  linear: {
    title: "Linear Structures",
    items: [
      { href: "/array", label: "Arrays", icon: "📊", color: "blue" },
      { href: "/linked-list", label: "Linked List", icon: "🔗", color: "green" },
      { href: "/stack", label: "Stack", icon: "📚", color: "purple" },
    ],
  },
  nonLinear: {
    title: "Non-Linear Structures",
    items: [
      { href: "/tree", label: "Trees", icon: "🌳", color: "emerald" },
      { href: "/graph", label: "Graphs", icon: "🕸️", color: "cyan" },
    ],
  },
  advanced: {
    title: "Advanced Topics",
    items: [
      { href: "/hashing", label: "Hashing", icon: "🔐", color: "indigo" },
      { href: "/trie", label: "Trie", icon: "🗂️", color: "lime" },
      { href: "/dynamic-programming", label: "Dynamic Programming", icon: "🧩", color: "pink" },
    ],
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700"
          : "bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform font-mono">
              sheekoDSA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              DSA
            </Link>

            <Link
              href="/backend"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/backend")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              Backend
            </Link>

            {/* Topics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-1"
              >
                Topics
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 py-2 max-h-[70vh] overflow-y-auto"
                  >
                    {Object.entries(navigationSections).map(([key, section]) => (
                      <div key={key} className="px-2 py-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
                          {section.title}
                        </div>
                        <div className="space-y-0.5">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                                isActive(item.href)
                                  ? `bg-${item.color}-900/20 text-${item.color}-400 font-semibold`
                                  : "text-slate-300 hover:bg-slate-700"
                              }`}
                            >
                              <span className="text-base">{item.icon}</span>
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Side - Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-700 bg-slate-900"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link
                href="/"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all mb-2 ${
                  isActive("/")
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                DSA
              </Link>

              <Link
                href="/backend"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all mb-4 ${
                  isActive("/backend")
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                Backend
              </Link>

              {Object.entries(navigationSections).map(([key, section]) => (
                <div key={key} className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-4">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                          isActive(item.href)
                            ? `bg-${item.color}-900/20 text-${item.color}-400 font-semibold`
                            : "text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
