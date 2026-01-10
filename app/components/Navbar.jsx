"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User as UserIcon, 
  LogOut, 
  ChevronDown, 
  LayoutDashboard, 
  BookOpen, 
  Globe, 
  Terminal,
  Sparkles,
  ArrowRight,
  Trophy,
  Users
} from "lucide-react";

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

  const userInitial = user?.username?.charAt(0).toUpperCase() || "G";
  const displayName = user?.username ? user.username.split('@')[0] : "Explorer";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-white/5"
          : "bg-slate-900/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent transition-transform font-mono tracking-tighter">
                sheekoG
                </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {user && (
              <div className="flex items-center gap-1 mr-4 pr-4 border-r border-white/10">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive("/")
                      ? "bg-white/10 text-blue-400 shadow-inner"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <BookOpen className="w-4 h-4" /> DSA
                </Link>

                <Link
                  href="/backend"
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    pathname.startsWith("/backend")
                      ? "bg-white/10 text-purple-400 shadow-inner"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Globe className="w-4 h-4" /> Backend
                </Link>

                <Link
                  href="/languages"
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    pathname.startsWith("/languages")
                      ? "bg-white/10 text-emerald-400 shadow-inner"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Terminal className="w-4 h-4" /> Languages
                </Link>
              </div>
            )}

            <Link
              href="/leaderboard"
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                pathname.startsWith("/leaderboard")
                  ? "bg-white/10 text-yellow-400 shadow-inner"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Trophy className="w-4 h-4" /> Leaderboard
            </Link>

            <Link
              href="/social"
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                pathname.startsWith("/social")
                  ? "bg-white/10 text-pink-400 shadow-inner"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Users className="w-4 h-4" /> Social
            </Link>

            {user ? (
              <Menu as="div" className="relative ml-2">
                <MenuButton className="flex items-center gap-3 p-1 pr-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform relative">
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                    {userInitial}
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter leading-none">Pro Member</span>
                        <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-200 truncate max-w-[120px]">
                        {displayName}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </MenuButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl bg-slate-900 border border-white/10 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
                    <div className="px-4 py-3 border-b border-white/5 mb-2">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Signed in as</p>
                        <p className="text-sm font-bold text-white truncate">{user.username}</p>
                    </div>
                    
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          href="/leaderboard"
                          className={`${
                            focus ? "bg-white/10 text-white" : "text-slate-400"
                          } group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition-all`}
                        >
                          <div className={`p-2 rounded-lg ${focus ? 'bg-yellow-500 text-white' : 'bg-yellow-500/10 text-yellow-400'} transition-all`}>
                            <Trophy className="w-4 h-4" />
                          </div>
                          Leaderboard
                        </Link>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          href="/journey"
                          className={`${
                            focus ? "bg-white/10 text-white" : "text-slate-400"
                          } group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition-all mt-1`}
                        >
                          <div className={`p-2 rounded-lg ${focus ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-400'} transition-all`}>
                            <LayoutDashboard className="w-4 h-4" />
                          </div>
                          My Journey
                        </Link>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? "bg-rose-500/10 text-rose-400" : "text-slate-400"
                          } group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition-all mt-1`}
                        >
                          <div className={`p-2 rounded-lg ${active ? 'bg-rose-500 text-white' : 'bg-rose-500/10 text-rose-400'} transition-all`}>
                            <LogOut className="w-4 h-4" />
                          </div>
                          Logout Session
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <Link
                href="/auth"
                className="relative group px-6 py-2.5 rounded-xl text-sm font-black transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-sm opacity-40 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-blue-600 text-white px-6 py-2.5 rounded-xl border border-blue-400/20 shadow-xl group-hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                    Start Learning <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )}
          </nav>

          {/* Right Side - Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {user && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg">
                    {userInitial}
                </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-inner"
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
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
            >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                {user && (
                <div className="space-y-2">
                    <div className="px-4 mb-4 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-black shadow-lg relative">
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                            {userInitial}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-0.5">
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Pro Member</span>
                                <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                            </div>
                            <p className="text-lg font-bold text-white truncate">{displayName}</p>
                        </div>
                    </div>

                    <Link
                    href="/"
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                        isActive("/")
                        ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner"
                        : "text-slate-400 hover:text-white"
                    }`}
                    >
                    <BookOpen className="w-5 h-5" /> DSA Curriculum
                    </Link>

                    <Link
                    href="/backend"
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                        pathname.startsWith("/backend")
                        ? "bg-purple-600/10 text-purple-400 border border-purple-500/20 shadow-inner"
                        : "text-slate-400 hover:text-white"
                    }`}
                    >
                    <Globe className="w-5 h-5" /> Backend Mastery
                    </Link>

                    <Link
                    href="/languages"
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                        pathname.startsWith("/languages")
                        ? "bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 shadow-inner"
                        : "text-slate-400 hover:text-white"
                    }`}
                    >
                    <Terminal className="w-5 h-5" /> Programming Languages
                    </Link>
                </div>
                )}

                <Link
                href="/leaderboard"
                className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                    pathname.startsWith("/leaderboard")
                    ? "bg-yellow-600/10 text-yellow-400 border border-yellow-500/20 shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
                >
                <Trophy className="w-5 h-5" /> Global Leaderboard
                </Link>

                <Link
                href="/social"
                className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                    pathname.startsWith("/social")
                    ? "bg-pink-600/10 text-pink-400 border border-pink-500/20 shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
                >
                <Users className="w-5 h-5" /> Social Hub
                </Link>

                {user && (
                <div className="space-y-2">
                    <Link
                    href="/journey"
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                        pathname.startsWith("/journey")
                        ? "bg-amber-600/10 text-amber-400 border border-amber-500/20 shadow-inner"
                        : "text-slate-400 hover:text-white"
                    }`}
                    >
                    <LayoutDashboard className="w-5 h-5" /> My Journey
                    </Link>

                    <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold text-rose-400 hover:bg-rose-500/10 transition-all border border-transparent hover:border-rose-500/20 mt-4"
                    >
                    <LogOut className="w-5 h-5" /> Logout Session
                    </button>
                </div>
                )}

                {!user && (
                <Link
                    href="/auth"
                    className="block w-full px-4 py-4 rounded-2xl text-center text-base font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/20"
                >
                    Login to Start Learning
                </Link>
                )}
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}