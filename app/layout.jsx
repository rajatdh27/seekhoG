import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "sheekoG - Complete DSA & Backend Master Document",
  description: "Master data structures, algorithms, and backend development with interactive visualizations, detailed explanations, and 350+ interview problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-900 text-slate-100" suppressHydrationWarning>
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-black text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 font-mono">
                    sheekoG
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Master DSA & backend development with interactive visualizations and comprehensive explanations.
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
                    <Link href="/tree" className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      Trees
                    </Link>
                    <Link href="/graph" className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                      Graphs
                    </Link>
                    <Link href="/hashing" className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                      Hashing
                    </Link>
                    <Link href="/trie" className="block text-slate-400 hover:text-lime-400 transition-colors text-sm">
                      Trie
                    </Link>
                    <Link href="/dynamic-programming" className="block text-slate-400 hover:text-pink-400 transition-colors text-sm">
                      Dynamic Programming
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
      </body>
    </html>
  );
}
