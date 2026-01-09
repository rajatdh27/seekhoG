'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // 1. Check if user is logged in
    const storedUser = localStorage.getItem('user');
    
    // 2. Define public paths that don't need login
    const isPublicPath = pathname === '/auth';

    if (!storedUser && !isPublicPath) {
      // Not logged in and trying to access a private page -> Redirect to Auth
      setAuthorized(false);
      router.push('/auth');
    } else {
      // authorized
      setAuthorized(true);
    }
  }, [pathname, router]);

  // While checking, we can show a blank screen or a loader to prevent flicker
  if (!authorized && pathname !== '/auth') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-blue-500 animate-pulse font-mono">Verifying Access...</div>
      </div>
    );
  }

  return children;
}
