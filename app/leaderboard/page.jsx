'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, TrendingUp, AlertCircle, User } from 'lucide-react';
import { leaderboardAPI } from '../utils/api';

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data, error } = await leaderboardAPI.getTopUsers();
        if (data) {
          setLeaders(data);
        } else {
          setError(true); // Graceful fallback
        }
      } catch (err) {
        console.error("Leaderboard fetch failed", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />;
    if (rank === 2) return <Medal className="w-7 h-7 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.5)]" />;
    if (rank === 3) return <Medal className="w-7 h-7 text-amber-600 drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]" />;
    return <span className="text-xl font-bold text-slate-500">#{rank}</span>;
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)] scale-105 z-10";
    if (rank === 2) return "bg-gradient-to-r from-slate-400/10 to-slate-500/10 border-slate-400/30";
    if (rank === 3) return "bg-gradient-to-r from-orange-700/10 to-amber-800/10 border-orange-700/30";
    return "bg-slate-900/50 border-slate-800 hover:bg-slate-800/80";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-bl from-purple-900/10 via-blue-900/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4" /> Global Rankings
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Top Learners
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Recognizing the most consistent and dedicated developers in our community.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          {loading ? (
            // Skeleton Loader
            [...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-slate-900/50 rounded-2xl border border-slate-800 animate-pulse" />
            ))
          ) : error ? (
            // Graceful Error State
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-400 mb-2">Leaderboard Unavailable</h3>
              <p className="text-slate-600">The rankings are taking a break. Check back later!</p>
            </motion.div>
          ) : leaders.length === 0 ? (
            // Empty State
            <div className="text-center py-20 text-slate-500">
              <p>No champions yet. Be the first to start a streak!</p>
            </div>
          ) : (
            // Leaderboard List
            leaders.map((leader, index) => {
              const rank = index + 1;
              return (
                <motion.div
                  key={leader.username}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${getRankStyle(rank)}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 flex justify-center">
                      {getRankIcon(rank)}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-white/10 shadow-inner">
                        <span className="text-lg font-black text-slate-300">
                          {leader.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {leader.username.split('@')[0]}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          Last active: {leader.lastActive ? new Date(leader.lastActive).toLocaleDateString() : 'Recently'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black text-white leading-none">
                      {leader.totalLogs}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                      Commits
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
