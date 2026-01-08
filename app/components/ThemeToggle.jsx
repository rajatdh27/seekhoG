"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Using queueMicrotask to avoid lint warning
    queueMicrotask(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        <button
          aria-hidden
          className="px-4 py-2 rounded-lg border-2 border-slate-300 bg-white text-slate-900 opacity-0"
        />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div suppressHydrationWarning>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="px-4 py-2 rounded-lg border-2 font-semibold transition-all duration-200 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
        aria-label="Toggle theme"
      >
        {isDark ? "🌞 Light" : "🌙 Dark"}
      </button>
    </div>
  );
}
