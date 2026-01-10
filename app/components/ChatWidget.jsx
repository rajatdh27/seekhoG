'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Minimize2, AlertCircle, Smile } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { SOCKET_URL, CHAT_CONFIG, SEND_SOUND_URL, chatAPI } from '../utils/api';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [connectionError, setConnectionError] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const stompClientRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const pickerRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Close emoji picker when clicking outside it
  useEffect(() => {
    function handleClickOutsidePicker(event) {
      if (
        showEmojiPicker &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    }

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutsidePicker);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePicker);
    };
  }, [showEmojiPicker]);

  // Load user info and history whenever chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser);
            setUsername(parsed.username || parsed.email || 'User');
          } catch {
            setUsername('Guest');
          }
        } else {
          setUsername((prev) => prev.startsWith('Guest_') ? prev : `Guest_${Math.floor(Math.random() * 1000)}`);
        }
        setConnectionError(false);

        // Fetch Chat History
        chatAPI.getHistory().then(({ data }) => {
          if (Array.isArray(data)) {
            setMessages(data);
          }
        });
      }, 0);
    }
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click is outside chatRef AND outside the toggle button
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        // We use a small delay to allow interactions with buttons that might trigger closure
        setIsOpen(false);
        setShowEmojiPicker(false);
      }
    }
    
    if (isOpen) {
      // Using capture: true ensures we catch the event before other components stop propagation
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, { capture: true });
    };
  }, [isOpen]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const connect = useCallback(() => {
    const socket = new SockJS(SOCKET_URL);
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        setIsConnected(true);
        setConnectionError(false);
        // Subscribe to Public Topic
        client.subscribe(CHAT_CONFIG.subscribeTopic, (message) => {
          if (message.body) {
            const parsedMessage = JSON.parse(message.body);
            setMessages((prev) => [...prev, parsedMessage]);
          }
        });
        
        // Announce join (optional, depending on backend)
        client.publish({
            destination: CHAT_CONFIG.sendDestination,
            body: JSON.stringify({ sender: username, content: 'joined the chat', type: 'JOIN' })
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
        setConnectionError(true);
      },
      onWebSocketClose: () => {
        setIsConnected(false);
        // Only set error if we were previously connected or if it failed immediately
        // For standard disconnects we might not want this, but for "issues with backend" request, strict error showing is better.
        // We'll set it to true to indicate "Connection Lost"
        setConnectionError(true);
      }
    });

    client.activate();
    stompClientRef.current = client;
  }, [username]);

  // Connect/Disconnect logic
  useEffect(() => {
    if (isOpen && !stompClientRef.current) {
      connect();
    }
    // We intentionally don't disconnect on close to keep history briefly, 
    // but you could add return () => disconnect() here.
  }, [isOpen, connect]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() && stompClientRef.current && isConnected) {
      const chatMessage = {
        sender: username,
        content: inputValue,
        type: 'CHAT'
      };

      stompClientRef.current.publish({
        destination: CHAT_CONFIG.sendDestination,
        body: JSON.stringify(chatMessage)
      });
      
      // Play send sound
      try {
        const audio = new Audio(SEND_SOUND_URL);
        audio.volume = 0.4;
        audio.play().catch(() => {}); // Ignore errors if browser blocks autoplay
      } catch {}

      setInputValue('');
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emojiObject) => {
    setInputValue((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="mb-4 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col ring-1 ring-white/10"
            style={{ maxHeight: '600px', height: '70vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-4 border-b border-slate-700/50 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                {connectionError ? (
                  <>
                    <div className="bg-red-500/20 p-1.5 rounded-full">
                      <AlertCircle size={16} className="text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm">Community Chat</h3>
                      <p className="text-[10px] font-medium text-red-400">Connection Failed</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative">
                      <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 animate-pulse'}`} />
                      {isConnected && <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm tracking-tight">Community Chat</h3>
                      <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                        {isConnected ? (
                          <>
                            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                            {messages.length} messages
                          </>
                        ) : 'Connecting...'}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-all p-2 hover:bg-white/5 rounded-xl active:scale-95"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-slate-900/50 to-slate-950/50 scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent">
              {connectionError && (
                 <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-3">
                    <div className="bg-red-500/10 p-4 rounded-full">
                      <AlertCircle size={32} className="text-red-500/80" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium text-sm">Connection Lost</p>
                      <p className="text-slate-500 text-xs mt-1 max-w-[200px] mx-auto">Unable to reach the chat server. Please try again later.</p>
                    </div>
                 </div>
              )}
              
              {!connectionError && messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-full">
                    <MessageCircle size={32} className="text-slate-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-300 font-medium text-sm">Welcome to the chat!</p>
                    <p className="text-slate-500 text-xs">Be the first to say hello.</p>
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => {
                  const isMe = msg.sender === username;
                  const isJoin = msg.type === 'JOIN' || msg.content === 'joined the chat';
                  
                  if (isJoin && !msg.sender) return null;

                  if (isJoin) {
                     return (
                        <div key={idx} className="flex justify-center my-4">
                           <span className="text-[10px] font-bold text-slate-500 bg-slate-800/40 border border-slate-700/30 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                              {msg.sender} joined
                           </span>
                        </div>
                     );
                  }

                  if (!msg.content && !isJoin) return null;

                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${isMe ? 'items-start' : 'items-end'} group`}
                    >
                      <div className="flex items-end gap-2 max-w-[85%]">
                        {isMe && (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shrink-0">
                            {msg.sender[0]?.toUpperCase()}
                          </div>
                        )}
                        
                        <div className={`flex flex-col ${isMe ? 'items-start' : 'items-end'}`}>
                          <span className={`text-[10px] font-medium text-slate-400 mb-1 px-1 ${isMe ? 'text-blue-400' : ''}`}>
                            {msg.sender}
                          </span>
                          <div
                            className={`px-4 py-2.5 text-sm leading-relaxed shadow-md backdrop-blur-sm ${
                              isMe 
                                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tl-none shadow-blue-500/10' 
                                : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-2xl rounded-tr-none'
                            }`}
                          >
                            {msg.content}
                          </div>
                        </div>

                        {!isMe && (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300 shadow-lg shrink-0">
                            {msg.sender[0]?.toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50">
              <form onSubmit={sendMessage} className="relative flex items-center gap-2">
                <AnimatePresence>
                  {showEmojiPicker && (
                    <motion.div 
                      ref={pickerRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-4 z-50 shadow-2xl rounded-2xl overflow-hidden border border-slate-700/50"
                    >
                      <EmojiPicker 
                        onEmojiClick={onEmojiClick} 
                        theme="dark" 
                        width={300}
                        height={350}
                        previewConfig={{ showPreview: false }}
                        skinTonesDisabled
                        searchDisabled={false}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center p-1 pl-2 focus-within:border-blue-500/50 focus-within:bg-slate-800/80 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all shadow-inner">
                  <button
                    ref={toggleButtonRef}
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className={`p-2 rounded-xl transition-all ${showEmojiPicker ? 'text-yellow-400 bg-yellow-400/10' : 'text-slate-400 hover:text-yellow-400 hover:bg-slate-700/50'}`}
                  >
                    <Smile size={20} />
                  </button>

                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={connectionError ? "Chat unavailable" : "Type a message..."}
                    disabled={connectionError || !isConnected}
                    className="flex-1 bg-transparent border-none text-slate-200 text-sm px-3 py-2 focus:outline-none placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!inputValue.trim() || !isConnected || connectionError}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center group"
                >
                  <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 90, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={() => setIsOpen(true)}
          className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all pointer-events-auto group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Tooltip / Label */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 text-slate-200 text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-slate-700/50 shadow-xl backdrop-blur-md pointer-events-none translate-x-2 group-hover:translate-x-0">
            Community Chat
          </span>
        </motion.button>
      )}
    </div>
  );
}
