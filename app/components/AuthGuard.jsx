'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const publicPaths = ['/auth', '/leaderboard'];

  // Initialize authorized state based on whether the path is public
  // This avoids a cascading render for public pages
  const [authorized, setAuthorized] = useState(() => {
    return publicPaths.includes(pathname);
  });

  useEffect(() => {
    // 1. Check if user is logged in
    const storedUser = localStorage.getItem('user');
    
    // 2. Check if current path is public
    const isPublicPath = publicPaths.includes(pathname);

    if (!storedUser && !isPublicPath) {
      // Not logged in and trying to access a private page -> Redirect to Auth
      setAuthorized(false);
      router.push('/auth');
    } else {
      // Authorized (either public path or user is logged in)
      // Only update state if it's currently false to avoid unnecessary re-renders
      if (!authorized) {
        setAuthorized(true);
      }
    }
  }, [pathname, router, authorized]);

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