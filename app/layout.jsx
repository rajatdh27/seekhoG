import "./globals.css";
import DSThemeProvider from "./providers/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export const metadata = {
  title: "Data Structures Mastery - Learn & Practice",
  description: "Master data structures with interactive visualizations, detailed explanations, and 100+ interview problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100" suppressHydrationWarning>
        <DSThemeProvider>
          <div className="max-w-6xl mx-auto p-4">
            
            {/* HEADER */}
            <header className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">DS Visualizer</h1>

              <div className="flex items-center gap-3">
                {/* NAVIGATION */}
                <nav className="text-sm text-slate-600 dark:text-slate-300 flex gap-4">
                  <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                  <Link href="/array" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Arrays</Link>
                  <Link href="/stack" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Stack</Link>
                </nav>

                {/* THEME TOGGLE */}
                <ThemeToggle />
              </div>
            </header>

            {/* PAGE CONTENT */}
            <main>{children}</main>

            {/* FOOTER */}
            <footer className="mt-8 text-xs text-slate-500">
              Built for learning — visual, interactive explanations.
            </footer>
          </div>
        </DSThemeProvider>
      </body>
    </html>
  );
}
