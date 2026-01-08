import "./globals.css";
import DSThemeProvider from "./providers/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export const metadata = {
  title: "sheekoDSA - Complete DSA Master Document",
  description: "Master data structures with interactive visualizations, detailed explanations, and 250+ interview problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100" suppressHydrationWarning>
        <DSThemeProvider>
          {/* HEADER */}
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform font-mono">
                    sheekoDSA
                  </div>
                </Link>

                <div className="flex items-center gap-6">
                  {/* NAVIGATION */}
                  <nav className="hidden md:flex items-center gap-1">
                    <Link
                      href="/"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
                    >
                      Home
                    </Link>
                    <Link
                      href="/foundations"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all"
                    >
                      🟩 Foundations
                    </Link>
                    <Link
                      href="/searching-sorting"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
                    >
                      🔍 Search & Sort
                    </Link>
                    <Link
                      href="/array"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      📊 Arrays
                    </Link>
                    <Link
                      href="/linked-list"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all"
                    >
                      🔗 Linked List
                    </Link>
                    <Link
                      href="/stack"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      📚 Stack
                    </Link>
                  </nav>

                  {/* THEME TOGGLE */}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main>{children}</main>

          {/* FOOTER */}
          <footer className="bg-slate-900 dark:bg-black text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 font-mono">
                    sheekoDSA
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Master data structures & algorithms with interactive visualizations and comprehensive explanations.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Data Structures</h3>
                  <div className="space-y-2">
                    <Link href="/array" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                      Arrays
                    </Link>
                    <Link href="/linked-list" className="block text-slate-400 hover:text-green-400 transition-colors text-sm">
                      Linked Lists
                    </Link>
                    <Link href="/stack" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                      Stacks
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Resources</h3>
                  <div className="space-y-2">
                    <div className="text-slate-400 text-sm">250+ Practice Problems</div>
                    <div className="text-slate-400 text-sm">Interactive Visualizers</div>
                    <div className="text-slate-400 text-sm">6 Programming Languages</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
                Built for learning — visual, interactive explanations.
              </div>
            </div>
          </footer>
        </DSThemeProvider>
      </body>
    </html>
  );
}
