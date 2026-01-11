'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { authAPI } from '../utils/api';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ username: '', password: '', name: '' });
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear errors on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { username, password, name } = formData;
      const { data, error } = isLogin 
        ? await authAPI.login(username, password)
        : await authAPI.signup(username, password, name);

      if (error) {
        // Ensure error is a string for rendering
        setError(typeof error === 'string' ? error : 'Network error. Please try again.');
      } else if (data) {
        console.log('Auth Success:', data);
        localStorage.setItem('user', JSON.stringify(data));
        router.push('/'); 
      }
    } catch (e) {
      console.error("Unexpected error:", e);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    // Instant local transition for guest mode
    const { data } = await authAPI.anonymous();
    if (data) {
      console.log('Anonymous Login Success (Local Mode):', data);
      localStorage.setItem('user', JSON.stringify(data));
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              SeekhoG
            </h1>
            <p className="text-slate-400 text-sm">
              {isLogin ? 'Welcome back! Ready to learn?' : 'Join us and master Data Structures.'}
            </p>
          </div>

          {/* Anonymous Login - Highlighted Option */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAnonymousLogin}
            disabled={loading}
            className="w-full mb-6 py-3 px-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-orange-500/50 rounded-xl flex items-center justify-center gap-3 transition-all group"
          >
            <span className="text-2xl">🕵️</span>
            <div className="text-left">
              <div className="text-orange-400 font-bold text-sm">Dev / Guest Access</div>
              <div className="text-orange-300/60 text-xs">Login Instantly (No credentials needed)</div>
            </div>
            {loading && <div className="ml-auto text-orange-400 animate-spin">⌛</div>}
          </motion.button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800 text-slate-500">Or use credentials</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="e.g. Rajat Thakur"
                    required={!isLogin}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div>
              <label className="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold shadow-lg transition-all ${
                loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </motion.button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
