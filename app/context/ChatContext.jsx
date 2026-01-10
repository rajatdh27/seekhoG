'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null); // null = global, object = private friend/convo
  const [onlineUsers, setOnlineUsers] = useState(new Set()); // Set of user IDs or usernames

  const openChat = (friend = null) => {
    setActiveConversation(friend);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const resetToGlobal = () => {
    setActiveConversation(null);
  };

  const setOnline = useCallback((userId) => {
    console.log("User Online:", userId);
    setOnlineUsers(prev => new Set(prev).add(userId));
  }, []);

  const setOffline = useCallback((userId) => {
    console.log("User Offline:", userId);
    setOnlineUsers(prev => {
      const next = new Set(prev);
      next.delete(userId);
      return next;
    });
  }, []);

  return (
    <ChatContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      activeConversation, 
      setActiveConversation,
      onlineUsers,
      setOnline,
      setOffline,
      openChat, 
      closeChat,
      resetToGlobal 
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);