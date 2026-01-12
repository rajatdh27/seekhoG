'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Search, 
  MessageCircle, 
  X, 
  Check, 
  Loader2, 
  Trophy,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  UserMinus,
  Mail,
  Zap,
  Globe
} from 'lucide-react';
import { friendsAPI, leaderboardAPI, userAPI, chatAPI } from '../utils/api';
import { useRouter } from 'next/navigation';
import { useChat } from '../context/ChatContext';
import ChatWidget from '../components/ChatWidget';

export default function SocialPage() {
  const router = useRouter();
  const { openChat, onlineUsers } = useChat();
  const [activeTab, setActiveTab] = useState('friends');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [friends, setFriends] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [community, setCommunity] = useState([]); 
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const [actionLoading, setActionLoading] = useState(null); 
  const [recentlySent, setRecentlySent] = useState(new Set());
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchSocialData = async (userId) => {
    setLoading(true);
    try {
      const [friendsRes, requestsRes, sentRes, leaderboardRes, conversationsRes] = await Promise.all([
        friendsAPI.getFriends(userId),
        friendsAPI.getPendingRequests(userId),
        friendsAPI.getSentRequests(userId),
        leaderboardAPI.getTopUsers(),
        chatAPI.getUserConversations(userId)
      ]);

      setFriends(friendsRes.data || []);
      setIncomingRequests(requestsRes.data || []);
      setSentRequests(sentRes.data || []);
      setCommunity(leaderboardRes.data || []);
      setConversations(conversationsRes.data || []);
    } catch (err) {
      console.error("Failed to load social data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
        if (searchTerm.trim()) {
            setIsSearching(true);
            try {
                const { data } = await userAPI.search(searchTerm);
                if (data) setSearchResults(data);
            } catch (err) {
                console.error("Search failed", err);
            } finally {
                setIsSearching(false);
            }
        } else {
            setSearchResults([]);
            setIsSearching(false);
        }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth');
      return;
    }
    try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        fetchSocialData(parsedUser.id);
    } catch (e) {
        console.error("Failed to parse user", e);
        router.push('/auth');
    }
  }, [router]);

  const handleSendRequest = async (targetUserId, targetUsername) => {
    setActionLoading(targetUserId);
    setError(null);
    try {
      const { error } = await friendsAPI.sendRequest(user.id, targetUsername);
      if (error) throw new Error(error);
      setSuccess(`Request sent to ${targetUsername}`);
      setRecentlySent(prev => new Set(prev).add(targetUserId));
      const { data } = await friendsAPI.getSentRequests(user.id);
      if(data) setSentRequests(data);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to send request");
      setTimeout(() => setError(null), 3000);
    } finally {
      setActionLoading(null);
    }
  };

  const handleAcceptRequest = async (requestId, senderName) => {
    setActionLoading(requestId);
    try {
      const { error } = await friendsAPI.acceptRequest(requestId);
      if (error) throw new Error(error);
      setIncomingRequests(prev => prev.filter(req => req.id !== requestId));
      fetchSocialData(user.id);
      setSuccess(`Now friends with ${senderName}!`);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to accept request");
    } finally {
      setActionLoading(null);
    }
  };

  const handleRejectRequest = async (requestId) => {
    setActionLoading(requestId);
    try {
      const { error } = await friendsAPI.rejectRequest(requestId);
      if (error) throw new Error(error);
      setIncomingRequests(prev => prev.filter(req => req.id !== requestId));
    } catch (err) {
      setError(err.message || "Failed to reject request");
    } finally {
      setActionLoading(null);
    }
  };

  const handleCancelRequest = async (requestId) => {
      setActionLoading(requestId);
      try {
        const { error } = await friendsAPI.rejectRequest(requestId); 
        if (error) throw new Error(error);
        setSentRequests(prev => prev.filter(req => req.id !== requestId));
        setSuccess("Request cancelled");
        setTimeout(() => setSuccess(null), 3000);
      } catch (err) {
        setError(err.message || "Failed to cancel request");
      } finally {
        setActionLoading(null);
      }
  };

  const getRelationshipStatus = (targetId, targetUsername) => {
    if (targetId === user?.id || targetUsername === user?.username) return 'ME';
    if (friends.some(f => f.id === targetId || f.username === targetUsername || f.requesterName === targetUsername || f.addresseeName === targetUsername)) return 'FRIEND';
    if (recentlySent.has(targetId)) return 'SENT';
    if (sentRequests.some(r => r.addresseeId === targetId || r.addresseeName === targetUsername)) return 'SENT'; 
    if (incomingRequests.some(r => r.requesterId === targetId || r.requesterName === targetUsername)) return 'INCOMING';
    return 'NONE'; 
  };

  const formatName = (userObj) => {
      if (!userObj) return "Unknown";
      const name = userObj.name || userObj.username || userObj.requesterName || userObj.addresseeName;
      if (!name) return "Unknown";
      if (name.includes('@') && !userObj.name) return name.split('@')[0];
      return name;
  };

  const getRequestName = (req, type) => {
      const name = type === 'incoming' ? (req.requesterName || req.sender) : (req.addresseeName || req.receiver);
      return name || "Unknown User";
  };

  const displayList = searchTerm.trim() ? searchResults : community;
  const isLeaderboardView = !searchTerm.trim();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 p-4 md:p-8 lg:p-12 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-br from-blue-600/10 via-indigo-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} className="fill-blue-400" /> Professional Network
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">Social Hub</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">Connect with top developers, share insights, and build your engineering circle.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-6 bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] shadow-2xl">
            <div className="flex -space-x-3">
                {friends.slice(0, 3).map((f, i) => {
                    const fName = f.username || f.requesterName || f.addresseeName || '?';
                    return <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold ring-2 ring-blue-500/20">{fName.charAt(0).toUpperCase()}</div>;
                })}
                {friends.length > 3 && <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">+{friends.length - 3}</div>}
            </div>
            <div className="h-10 w-px bg-white/10 mx-2" />
            <div className="flex gap-8">
                <div className="text-center">
                    <div className="text-2xl font-black text-white leading-none">{friends.length}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Friends</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-black text-blue-400 leading-none">{incomingRequests.length}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Requests</div>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex p-1.5 bg-slate-900/80 backdrop-blur-md border border-white/5 rounded-2xl w-fit">
                    {[
                        { id: 'friends', icon: Users, label: 'My Network' },
                        { id: 'requests', icon: Mail, label: 'Inbox', count: incomingRequests.length },
                        { id: 'sent', icon: ArrowUpRight, label: 'Sent', count: sentRequests.length },
                        { id: 'community', icon: Globe, label: 'Explore Community' }
                    ].map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>
                            {activeTab === tab.id && <motion.div layoutId="activeTabGlow" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/40" />}
                            <tab.icon size={18} className="relative z-10" />
                            <span className="relative z-10">{tab.label}</span>
                            {tab.count > 0 && <span className="relative z-10 bg-white text-blue-600 text-[10px] px-1.5 py-0.5 rounded-md font-black ring-2 ring-blue-600/20">{tab.count}</span>}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    {success && <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-2xl flex items-center gap-3 font-bold text-sm shadow-xl"><ShieldCheck size={18} /> {success}</motion.div>}
                    {error && <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-6 py-3 rounded-2xl flex items-center gap-3 font-bold text-sm shadow-xl"><X size={18} /> {error}</motion.div>}
                </AnimatePresence>
            </div>
        </div>

        <div className="min-h-[500px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-96 space-y-6">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center"><Zap size={20} className="text-blue-500 animate-pulse" /></div>
                </div>
                <p className="text-slate-200 font-bold text-lg text-center">Syncing with Grid...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {activeTab === 'friends' && (
                <motion.div key="friends" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {friends.length === 0 ? (
                    <div className="col-span-full py-32 text-center rounded-[3rem] bg-slate-900/20 border border-white/5 border-dashed">
                      <div className="inline-flex p-6 bg-slate-800/50 rounded-full mb-6"><Users className="w-12 h-12 text-slate-600" /></div>
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">Build Your Circle</h3>
                      <button onClick={() => setActiveTab('community')} className="px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-2xl font-black transition-all flex items-center gap-2 mx-auto">Find Developers <ArrowUpRight size={18} /></button>
                    </div>
                  ) : (
                    friends.map((friend) => {
                      const isMeRequester = friend.requesterId === user.id;
                      const friendUserId = isMeRequester ? friend.addresseeId : friend.requesterId;
                      const isOnline = onlineUsers.has(friendUserId);
                      
                      // Explicitly extract the friend's info from the friendship record
                      const friendInfo = {
                        id: friendUserId,
                        name: isMeRequester ? friend.addresseeName : friend.requesterName,
                        username: isMeRequester ? (friend.addresseeUsername || friend.addresseeName) : (friend.requesterUsername || friend.requesterName),
                        email: friend.email // Fallback if available
                      };

                      const displayName = formatName(friendInfo);
                      const rawName = friendInfo.username || "User";
                      const displayEmail = rawName.includes('@') ? rawName : (friend.email || "");
                      const commits = friend.totalLogs || 0;
                      return (
                        <motion.div layout key={friend.id || rawName} className="bg-slate-900/40 backdrop-blur-sm border border-white/10 p-6 rounded-[2.5rem] hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col justify-between h-full shadow-lg">
                          <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 ${isOnline ? 'bg-emerald-500/10 opacity-100' : 'bg-blue-600/5 opacity-0 group-hover:opacity-100'}`} />
                          <div className="flex items-start justify-between mb-6 relative z-10">
                            <div className="flex items-center gap-4">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-inner ring-1 ${isOnline ? 'bg-gradient-to-br from-emerald-600 to-teal-700 ring-emerald-500/30' : 'bg-slate-800 ring-white/10'}`}>{displayName.charAt(0).toUpperCase()}</div>
                              <div>
                                <h3 className="text-lg font-bold text-white leading-tight capitalize">{displayName}</h3>
                                <p className="text-slate-400 text-xs font-medium mt-0.5 truncate max-w-[140px]">{displayEmail}</p>
                              </div>
                            </div>
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${isOnline ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-500 border-white/5'}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`} /> {isOnline ? 'Online' : 'Offline'}
                            </div>
                          </div>
                          <div className="bg-black/20 p-4 rounded-2xl border border-white/5 mb-6 relative z-10">
                              <div className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Total Contributions</div>
                              <div className="text-2xl font-black text-white">{commits}</div>
                          </div>
                          <div className="flex gap-3 mt-auto relative z-10">
                            <button onClick={() => openChat({id: friendUserId, username: rawName, name: displayName})} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"><MessageCircle size={16} /> Message</button>
                            <button className="p-3 bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-xl transition-all border border-white/5 active:scale-95"><UserMinus size={16} /></button>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </motion.div>
              )}

              {activeTab === 'chats' && (
                <motion.div key="chats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-white">Recent Conversations</h2>
                    <span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-600/30">
                        {conversations.length} Active
                    </span>
                  </div>
                  {conversations.length === 0 ? (
                    <div className="py-24 text-center rounded-[3rem] bg-slate-900/20 border border-white/5 border-dashed">
                      <div className="inline-flex p-6 bg-slate-800/50 rounded-full mb-6 text-slate-600"><MessageCircle className="w-12 h-12" /></div>
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">No recent chats</h3>
                      <button onClick={() => setActiveTab('friends')} className="text-blue-400 font-bold hover:underline mt-2">Start a conversation with a friend</button>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {conversations.map((convo) => {
                        const otherParticipant = convo.otherParticipant || {};
                        const isOnline = onlineUsers.has(otherParticipant.id);
                        const displayName = formatName(otherParticipant);
                        
                        return (
                          <motion.div 
                            key={convo.id} 
                            onClick={() => openChat({id: otherParticipant.id, username: otherParticipant.username, name: otherParticipant.name})}
                            className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex items-center justify-between gap-6 hover:border-blue-500/40 cursor-pointer transition-all group shadow-xl"
                          >
                              <div className="flex items-center gap-6 overflow-hidden">
                                  <div className="relative">
                                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black ${isOnline ? 'bg-gradient-to-br from-emerald-600 to-teal-700' : 'bg-slate-800'}`}>
                                          {displayName.charAt(0).toUpperCase()}
                                      </div>
                                      {isOnline && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-[#020617] rounded-full" />}
                                  </div>
                                  <div className="overflow-hidden">
                                      <h3 className="font-black text-white text-xl tracking-tight capitalize truncate">{displayName}</h3>
                                      <p className={`text-sm mt-1 truncate ${convo.unreadCount > 0 ? 'text-white font-bold' : 'text-slate-500'}`}>
                                          {convo.lastMessageContent || "No messages yet"}
                                      </p>
                                  </div>
                              </div>
                              <div className="flex flex-col items-end gap-2 shrink-0">
                                  {convo.lastMessageTime && (
                                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                                          {new Date(convo.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                      </span>
                                  )}
                                  {convo.unreadCount > 0 && (
                                      <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-black min-w-[20px] text-center">
                                          {convo.unreadCount}
                                      </span>
                                  )}
                              </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'requests' && (
                <motion.div key="requests" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-white">Pending Invitations</h2>
                    <span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-600/30">{incomingRequests.length} Waiting</span>
                  </div>
                  {incomingRequests.length === 0 ? (
                    <div className="py-24 text-center rounded-[3rem] bg-slate-900/20 border border-white/5 border-dashed">
                      <div className="inline-flex p-6 bg-slate-800/50 rounded-full mb-6 text-slate-600"><Mail className="w-12 h-12" /></div>
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">Inbox is empty</h3>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {incomingRequests.map((req) => {
                        const rawName = getRequestName(req, 'incoming');
                        return (
                          <motion.div layout key={req.id} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-blue-500/40 transition-all shadow-xl">
                              <div className="flex items-center gap-6 text-center sm:text-left">
                                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-white text-2xl font-black">{formatName(req).charAt(0).toUpperCase()}</div>
                                  <div>
                                      <h3 className="font-black text-white text-xl tracking-tight capitalize">{formatName(req)}</h3>
                                      <p className="text-slate-500 text-xs font-bold truncate max-w-[200px]">{rawName}</p>
                                      <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mt-1"><Sparkles size={14} /> Wants to collaborate</div>
                                  </div>
                              </div>
                              <div className="flex items-center gap-3 w-full sm:w-auto">
                                  <button onClick={() => handleAcceptRequest(req.id, formatName(req))} disabled={actionLoading === req.id} className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">{actionLoading === req.id ? <Loader2 className="animate-spin w-4 h-4" /> : <Check size={18} />} Accept</button>
                                  <button onClick={() => handleRejectRequest(req.id)} disabled={actionLoading === req.id} className="flex-1 sm:flex-none bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"><X size={18} /> Decline</button>
                              </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'sent' && (
                <motion.div key="sent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-white">Sent Requests</h2>
                    <span className="bg-slate-800 text-slate-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-slate-700">{sentRequests.length} Pending</span>
                  </div>
                  {sentRequests.length === 0 ? (
                    <div className="py-24 text-center rounded-[3rem] bg-slate-900/20 border border-white/5 border-dashed">
                      <div className="inline-flex p-6 bg-slate-800/50 rounded-full mb-6 text-slate-600"><ArrowUpRight className="w-12 h-12" /></div>
                      <h3 className="text-2xl font-bold text-slate-200 mb-2">No pending sent requests</h3>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {sentRequests.map((req) => {
                        const rawName = getRequestName(req, 'outgoing');
                        return (
                          <motion.div layout key={req.id} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 transition-all shadow-xl">
                              <div className="flex items-center gap-6 text-center sm:text-left">
                                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 text-2xl font-black">{formatName(req).charAt(0).toUpperCase()}</div>
                                  <div>
                                      <h3 className="font-black text-white text-xl tracking-tight capitalize">{formatName(req)}</h3>
                                      <p className="text-slate-500 text-xs font-bold truncate max-w-[200px]">{rawName}</p>
                                      <div className="flex items-center gap-2 text-slate-500 font-bold text-sm mt-1"><Clock size={14} /> Awaiting response</div>
                                  </div>
                              </div>
                              <button onClick={() => handleCancelRequest(req.id)} disabled={actionLoading === req.id} className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">{actionLoading === req.id ? <Loader2 className="animate-spin w-4 h-4" /> : <X size={18} />} Cancel</button>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'community' && (
                <motion.div key="community" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                  <div className="relative group max-w-3xl mx-auto">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">{isSearching ? <Loader2 className="animate-spin text-blue-500" size={24} /> : <Search className="text-slate-500" size={24} />}</div>
                    <input type="text" placeholder="Search by username or email (e.g. rajat@...)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-slate-900/80 backdrop-blur-xl border border-white/10 text-slate-100 pl-16 pr-6 py-6 rounded-[2rem] focus:outline-none focus:border-blue-500 transition-all font-bold text-lg shadow-2xl" />
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isLeaderboardView ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-500/10 text-blue-500'}`}>{isLeaderboardView ? <Trophy size={20} /> : <Search size={20} />}</div>
                        {isLeaderboardView ? 'Top Ranked Developers' : `Search Results (${displayList.length})`}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayList.length === 0 && !isSearching ? (
                        <div className="col-span-full py-32 text-center rounded-[3rem] bg-slate-900/20 border border-white/5 border-dashed"><p className="text-slate-500 text-lg font-bold">No developers found matching &quot;{searchTerm}&quot;</p></div>
                    ) : (
                        displayList.map((person) => {
                        const status = getRelationshipStatus(person.id, person.username);
                        if (status === 'ME') return null;
                        return (
                            <motion.div layout key={person.id || person.username} className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-[2.5rem] hover:border-blue-500/30 transition-all flex flex-col items-center text-center group relative overflow-hidden shadow-lg">
                                <div className="w-24 h-24 rounded-[2rem] bg-slate-800 flex items-center justify-center text-white text-4xl font-black mb-4 border-2 border-white/5 group-hover:scale-105 transition-all shadow-2xl">{formatName(person).charAt(0).toUpperCase()}</div>
                                <h3 className="text-xl font-bold text-white mb-1 capitalize tracking-tight">{formatName(person)}</h3>
                                <p className="text-slate-500 text-[10px] font-bold truncate max-w-[180px] mb-6">{person.username}</p>
                                <button onClick={() => status === 'NONE' && handleSendRequest(person.id, person.username)} disabled={status !== 'NONE' || actionLoading === person.id} className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${status === 'FRIEND' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : status === 'SENT' ? 'bg-blue-600/10 text-blue-400 border border-blue-600/30' : status === 'INCOMING' ? 'bg-amber-500/10 text-amber-400' : 'bg-white text-black hover:bg-blue-600 hover:text-white'}`}>
                                    {actionLoading === person.id ? <Loader2 className="animate-spin w-4 h-4" /> : status === 'FRIEND' ? <><ShieldCheck size={14} /> Connected</> : status === 'SENT' ? <><Clock size={14} /> Pending</> : status === 'INCOMING' ? <><Mail size={14} /> Inbox</> : <><UserPlus size={14} /> Add Connection</>}
                                </button>
                            </motion.div>
                        );
                        })
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}
