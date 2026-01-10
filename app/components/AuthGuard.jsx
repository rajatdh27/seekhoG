'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const publicPaths = ['/auth', '/leaderboard'];

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Initialize authorized state based on whether the path is public
  const [authorized, setAuthorized] = useState(() => {
    return publicPaths.includes(pathname);
  });

  // Derived state pattern: Reset state on path change
  // This runs during render if pathname changes, preventing "flash of content"
  // and ensuring 'authorized' is false for private routes before the effect runs.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    const isPublic = publicPaths.includes(pathname);
    setAuthorized(isPublic);
  }

  useEffect(() => {
    // 1. Check if user is logged in
    const storedUser = localStorage.getItem('user');
    
    // 2. Check if current path is public
    const isPublicPath = publicPaths.includes(pathname);

    if (!storedUser && !isPublicPath) {
      // Not logged in and trying to access a private page -> Redirect to Auth
      router.push('/auth');
    } else {
      // Authorized (either public path or user is logged in)
      setTimeout(() => {
        setAuthorized((prev) => {
          if (!prev) return true;
          return prev;
        });
      }, 0);
    }
  }, [pathname, router]);

  // While checking, we can show a blank screen or a loader to prevent flicker
  if (!authorized) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-blue-500 animate-pulse font-mono">Verifying Access...</div>
      </div>
    );
  }

  return children;
}
