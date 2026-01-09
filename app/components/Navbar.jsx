"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  // Check for user on mount and when pathname changes
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    } else {
      setUser(null);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth");
  };

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
              sheekoG
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {user && (
              <>
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
                    pathname.startsWith("/backend")
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Backend
                </Link>

                <Link
                  href="/languages"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname.startsWith("/languages")
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Languages
                </Link>

                <Link
                  href="/journey"
                  className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    pathname.startsWith("/journey")
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-purple-400"
                  }`}
                >
                  <span>📅</span> My Journey
                </Link>
              </>
            )}

            {user ? (
              <div className="flex items-center gap-4 ml-4">
                <span className="text-sm text-slate-400">
                  Hi, <span className="text-blue-400 font-bold">{user.username || 'Guest'}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg text-sm font-bold bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Login
              </Link>
            )}
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
      {isOpen && (
        <div className="lg:hidden border-t border-slate-700 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-6">
            {user && (
              <>
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
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all mb-2 ${
                    pathname.startsWith("/backend")
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Backend
                </Link>

                <Link
                  href="/languages"
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname.startsWith("/languages")
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Languages
                </Link>

                <Link
                  href="/journey"
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all mb-2 flex items-center gap-2 ${
                    pathname.startsWith("/journey")
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <span>📅</span> My Journey
                </Link>
              </>
            )}

            {user ? (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="px-4 py-2 text-sm text-slate-400 mb-2">
                  Logged in as <span className="text-blue-400 font-bold">{user.username || 'Guest'}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 rounded-lg text-sm font-bold bg-red-500/10 text-red-400 border border-red-500/20"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="block mt-4 px-4 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
