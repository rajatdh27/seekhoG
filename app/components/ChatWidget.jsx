'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Minimize2, AlertCircle, Smile, ArrowLeft, Lock, Users } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { SOCKET_URL, CHAT_CONFIG, SEND_SOUND_URL, chatAPI } from '../utils/api';
import { useChat } from '../context/ChatContext';

export default function ChatWidget() {
  const { 
    isOpen, 
    setIsOpen, 
    activeConversation, 
    resetToGlobal,
    setOnline,
    setOffline
  } = useChat();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [connectionError, setConnectionError] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  
  const stompClientRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const pickerRef = useRef(null);
  const subscriptionRef = useRef(null);
  const presenceSubRef = useRef(null);

  const sendReadReceipt = useCallback((convoId) => {
      if (stompClientRef.current?.connected && convoId && userId) {
          stompClientRef.current.publish({
              destination: '/app/mark-read',
              body: JSON.stringify({ conversationId: convoId, readerId: userId })
          });
      }
  }, [userId]);

  const subscribeToTopic = useCallback((convoId, isPrivate) => {
      if (!stompClientRef.current || !stompClientRef.current.connected) return;

      if (subscriptionRef.current) {
          subscriptionRef.current.unsubscribe();
      }

      const topic = isPrivate 
        ? `/topic/conversation.${convoId}`
        : CHAT_CONFIG.subscribeTopic;

      console.log("Subscribing to WebSocket Topic:", topic);

      const callback = (message) => {
          console.log("Received Message via WebSocket:", message.body);
          if (message.body) {
              const data = JSON.parse(message.body);
              
              if (data.type === 'READ_RECEIPT') {
                  setMessages((prev) => prev.map(m => {
                      if (m.senderId === userId || m.sender === username) {
                          return { ...m, status: 'READ' };
                      }
                      return m;
                  }));
                  return;
              }

              setMessages((prev) => {
                  const filtered = prev.filter(m => m.id || m.content !== data.content);
                  return [...filtered, data];
              });

              if (isPrivate && data.senderId !== userId) {
                  if (document.hasFocus()) {
                      sendReadReceipt(convoId);
                  }
              }
          }
      };

      subscriptionRef.current = stompClientRef.current.subscribe(topic, callback);
      if (isPrivate) {
          stompClientRef.current.subscribe(`/queue/conversation.${convoId}`, callback);
      }
  }, [userId, username, sendReadReceipt]);

  const connect = useCallback(() => {
    const socket = new SockJS(SOCKET_URL);
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        setIsConnected(true);
        setConnectionError(false);
        console.log("Connected to WebSocket");
        
        presenceSubRef.current = client.subscribe('/topic/presence', (message) => {
            console.log("Presence Event:", message.body);
            const event = JSON.parse(message.body);
            if (event.status === 'ONLINE') setOnline(event.userId);
            else if (event.status === 'OFFLINE') setOffline(event.userId);
        });

        if (activeConversation && conversationId) {
            subscribeToTopic(conversationId, true);
            sendReadReceipt(conversationId);
        } else {
            subscribeToTopic(null, false);
        }
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        setConnectionError(true);
      },
      onWebSocketClose: () => {
        setIsConnected(false);
      }
    });

    client.activate();
    stompClientRef.current = client;
  }, [username, activeConversation, conversationId, setOnline, setOffline, subscribeToTopic, sendReadReceipt]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUsername(parsed.username || parsed.email || 'User');
        setUserId(parsed.id);
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && !stompClientRef.current) {
        connect();
    }
  }, [connect]);

  useEffect(() => {
    if (!isOpen) return;
    if (activeConversation && !userId) {
        const stored = localStorage.getItem('user');
        if (stored) setUserId(JSON.parse(stored).id);
        return;
    }

    setLoadingHistory(true);
    setMessages([]);
    setConnectionError(false);

    if (activeConversation) {
        const initPrivateChat = async () => {
            try {
                const { data, error } = await chatAPI.createPrivateChat(userId, activeConversation.id);
                if (error) throw new Error(error);
                
                let convoId = data.id || data.conversationId || (typeof data === 'number' || typeof data === 'string' ? data : null);
                if (!convoId) throw new Error("Invalid Room ID");

                setConversationId(convoId);
                const historyRes = await chatAPI.getPrivateHistory(convoId);
                if (historyRes.data) {
                    setMessages([...historyRes.data].reverse());
                }
                subscribeToTopic(convoId, true);
                sendReadReceipt(convoId);
            } catch (err) {
                console.error("Private chat init failed", err);
                setConnectionError(true);
                setMessages([{ sender: "System", content: "Failed to sync with chat room. Please refresh.", type: "ERROR" }]);
            } finally {
                setLoadingHistory(false);
            }
        };
        initPrivateChat();
    } else {
        setConversationId(null);
        chatAPI.getHistory().then(({ data }) => {
            if (Array.isArray(data)) {
                setMessages([...data].reverse());
            }
            setLoadingHistory(false);
        });
        subscribeToTopic(null, false);
    }
  }, [activeConversation, isOpen, subscribeToTopic, userId, sendReadReceipt]);

  useEffect(() => {
      const handleFocus = () => {
          if (isOpen && activeConversation && conversationId) {
              sendReadReceipt(conversationId);
          }
      };
      window.addEventListener('focus', handleFocus);
      return () => window.removeEventListener('focus', handleFocus);
  }, [isOpen, activeConversation, conversationId, sendReadReceipt]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowEmojiPicker(false);
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, { capture: true });
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, loadingHistory]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() && stompClientRef.current && isConnected) {
      const isPrivate = !!activeConversation;
      const chatMessage = {
        sender: username,
        senderId: userId,
        content: inputValue,
        type: 'TEXT',
        status: 'SENT',
        ...(isPrivate && { conversationId: conversationId })
      };

      const destination = isPrivate ? '/app/private-message' : CHAT_CONFIG.sendDestination;
      setMessages((prev) => [...prev, chatMessage]);
      stompClientRef.current.publish({
        destination: destination,
        body: JSON.stringify(chatMessage)
      });
      try {
        const audio = new Audio(SEND_SOUND_URL);
        audio.volume = 0.4;
        audio.play().catch(() => {}); 
      } catch {}
      setInputValue('');
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emojiObject) => {
    setInputValue((prev) => prev + emojiObject.emoji);
  };

  const renderStatus = (msg) => {
      if (msg.status === 'READ') return <span className="text-[10px] text-blue-400 font-black ml-1">✓✓</span>;
      return <span className="text-[10px] text-slate-500 font-bold ml-1">✓</span>;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div ref={chatRef} initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="mb-4 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col ring-1 ring-white/10" style={{ maxHeight: '600px', height: '70vh' }}>
            <div className={`p-4 border-b border-slate-700/50 flex items-center justify-between backdrop-blur-md ${activeConversation ? 'bg-gradient-to-r from-indigo-900/80 to-purple-900/80' : 'bg-gradient-to-r from-slate-800/80 to-slate-900/80'}`}>
              <div className="flex items-center gap-3">
                {activeConversation && <button onClick={resetToGlobal} className="text-white/70 hover:text-white transition-colors mr-1"><ArrowLeft size={18} /></button>}
                {connectionError ? <div className="flex items-center gap-2"><AlertCircle size={16} className="text-red-500" /><h3 className="font-bold text-slate-100 text-sm">Offline</h3></div> : (
                  <>
                    <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 animate-pulse'}`} />
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-2">{activeConversation ? <><Lock size={12} className="text-purple-400" /> {activeConversation.username}</> : <><Users size={14} className="text-blue-400" /> Community Chat</>}</h3>
                      <p className="text-[10px] font-medium text-slate-400">{isConnected ? (activeConversation ? `Private (Room: ${conversationId || '...'})` : `${messages.length} messages`) : 'Connecting...'}</p>
                    </div>
                  </>
                )}
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-all p-2 hover:bg-white/5 rounded-xl"><Minimize2 size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-slate-900/50 to-slate-950/50 scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent">
              {loadingHistory && <div className="flex justify-center py-10"><div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" /></div>}
              {!loadingHistory && !connectionError && messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
                  <div className={`p-4 rounded-full ${activeConversation ? 'bg-purple-500/20' : 'bg-blue-500/20'}`}><MessageCircle size={32} className="text-slate-400" /></div>
                  <p className="text-slate-300 font-medium text-sm">{activeConversation ? `Start chatting with ${activeConversation.username}` : "Welcome to the chat!"}</p>
                </div>
              ) : (
                messages.map((msg, idx) => {
                  const isMe = (msg.sender && msg.sender === username) || (msg.senderId && msg.senderId === userId);
                  let displayName = msg.sender;
                  if (!displayName) {
                      if (isMe) displayName = username;
                      else if (activeConversation) displayName = activeConversation.username;
                      else displayName = "User";
                  }
                  if (displayName && displayName.includes('@')) displayName = displayName.split('@')[0];
                  if (msg.type === 'JOIN') return <div key={idx} className="flex justify-center my-4"><span className="text-[10px] font-bold text-slate-500 bg-slate-800/40 border border-slate-700/30 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">{displayName} joined</span></div>;
                  if (!msg.content) return null;
                  return (
                    <div key={idx} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} group`}>
                      <div className="flex items-end gap-2 max-w-[85%]">
                        {!isMe && <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300 shadow-lg shrink-0">{displayName[0]?.toUpperCase() || '?'}</div>}
                        <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                          <span className={`text-[10px] font-medium text-slate-400 mb-1 px-1 ${isMe ? 'text-blue-400' : ''}`}>{displayName}</span>
                          <div className={`px-4 py-2.5 text-sm leading-relaxed shadow-md backdrop-blur-sm ${isMe ? (activeConversation ? 'bg-gradient-to-br from-purple-600 to-indigo-600' : 'bg-gradient-to-br from-blue-600 to-indigo-600') + ' text-white rounded-2xl rounded-tr-none' : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-2xl rounded-tl-none'}`}>
                            {msg.content}
                            {isMe && activeConversation && renderStatus(msg)}
                          </div>
                        </div>
                        {isMe && <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg shrink-0 ${activeConversation ? 'bg-purple-600' : 'bg-blue-600'}`}>{displayName[0]?.toUpperCase() || '?'}</div>}
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50">
              <form onSubmit={sendMessage} className="relative flex items-center gap-2">
                <AnimatePresence>
                  {showEmojiPicker && (
                    <motion.div ref={pickerRef} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute bottom-full left-0 mb-4 z-50 shadow-2xl rounded-2xl overflow-hidden border border-slate-700/50">
                      <EmojiPicker onEmojiClick={onEmojiClick} theme="dark" width={300} height={350} previewConfig={{ showPreview: false }} skinTonesDisabled />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center p-1 pl-2 focus-within:border-blue-500/50 transition-all">
                  <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className={`p-2 rounded-xl transition-all ${showEmojiPicker ? 'text-yellow-400 bg-yellow-400/10' : 'text-slate-400 hover:text-yellow-400'}`}><Smile size={20} /></button>
                  <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={connectionError ? "Chat unavailable" : (activeConversation && !conversationId ? "Loading secure room..." : (activeConversation ? `Message ${activeConversation.username}...` : "Type a message..."))} disabled={connectionError || !isConnected} className="flex-1 bg-transparent border-none text-slate-200 text-sm px-3 py-2 focus:outline-none placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
                <button type="submit" disabled={!inputValue.trim() || !isConnected || connectionError || (activeConversation && !conversationId)} className={`text-white p-3 rounded-xl active:scale-95 disabled:opacity-50 transition-all shadow-lg flex items-center justify-center group ${activeConversation ? 'bg-purple-600 hover:bg-purple-500' : 'bg-blue-600 hover:bg-blue-500'}`}><Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.button initial={{ scale: 0, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0, rotate: 90, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={() => setIsOpen(true)} className={`relative text-white p-4 rounded-full shadow-2xl transition-all pointer-events-auto group overflow-hidden ${activeConversation ? 'bg-gradient-to-br from-purple-600 to-indigo-600' : 'bg-gradient-to-br from-blue-600 to-indigo-600'}`}>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          {activeConversation ? <Lock size={28} className="relative z-10" /> : <MessageCircle size={28} className="relative z-10" />}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 text-slate-200 text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-slate-700/50 shadow-xl backdrop-blur-md pointer-events-none translate-x-2 group-hover:translate-x-0">{activeConversation ? 'Private Chat' : 'Community Chat'}</span>
        </motion.button>
      )}
    </div>
  );
}
