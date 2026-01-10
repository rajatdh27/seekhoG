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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            style={{ maxHeight: '600px', height: '70vh' }}
          >
            {/* Header */}
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {connectionError ? (
                  <>
                    <AlertCircle size={16} className="text-red-500" />
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm">Community Connect</h3>
                      <p className="text-xs text-red-400">Chat Unavailable</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500 animate-pulse'}`} />
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm">Community Connect</h3>
                      <p className="text-xs text-slate-400">
                        {isConnected ? 'Online' : 'Connecting...'}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-lg"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {connectionError && (
                 <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <AlertCircle size={32} className="text-slate-600 mb-2" />
                    <p className="text-slate-400 text-sm">Unable to connect to chat server.</p>
                    <p className="text-slate-500 text-xs mt-1">Please try again later.</p>
                 </div>
              )}
              
              {!connectionError && messages.length === 0 ? (
                <div className="text-center text-slate-500 mt-10 text-sm">
                  <p>Welcome to the chat!</p>
                  <p className="text-xs mt-1">Say hello to other learners.</p>
                </div>
              ) : (
                messages.map((msg, idx) => {
                  const isMe = msg.sender === username;
                  const isJoin = msg.type === 'JOIN' || msg.content === 'joined the chat';
                  
                  // Skip "joined the chat" messages if there is no sender
                  if (isJoin && !msg.sender) {
                    return null;
                  }

                  if (isJoin) {
                     return (
                        <div key={idx} className="flex justify-center my-2">
                           <span className="text-[10px] text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full uppercase tracking-wider font-semibold">
                              {msg.sender} joined
                           </span>
                        </div>
                     );
                  }

                  // If message has no content and isn't a join message, skip it
                  if (!msg.content && !isJoin) return null;

                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${isMe ? 'items-start' : 'items-end'}`}
                    >
                      <span className={`text-[10px] text-slate-400 mb-1 ${isMe ? 'ml-1' : 'mr-1'}`}>
                        {msg.sender}
                      </span>
                      <div
                        className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                          isMe 
                            ? 'bg-green-600 text-white rounded-tl-sm' 
                            : 'bg-slate-800 text-slate-200 rounded-tr-sm border border-slate-700'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={sendMessage} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2 relative">
              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute bottom-full left-0 mb-2 z-50"
                  >
                    <EmojiPicker 
                      onEmojiClick={onEmojiClick} 
                      theme="dark" 
                      width="100%" 
                      height={350}
                      previewConfig={{ showPreview: false }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className={`p-2 rounded-xl transition-all ${showEmojiPicker ? 'text-yellow-400 bg-slate-700' : 'text-slate-400 hover:text-yellow-400 hover:bg-slate-700'}`}
              >
                <Smile size={20} />
              </button>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={connectionError ? "Chat unavailable" : "Type a message..."}
                disabled={connectionError || !isConnected}
                className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || !isConnected || connectionError}
                className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-900/20"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all pointer-events-auto group relative"
        >
          <MessageCircle size={28} className="group-hover:animate-pulse" />
          
          {/* Tooltip / Label */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 pointer-events-none">
            Connect
          </span>
        </motion.button>
      )}
    </div>
  );
}
