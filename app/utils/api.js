import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export const SOCKET_URL = `${BASE_URL}/ws`;

export const SEND_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3';

export const CHAT_CONFIG = {
  subscribeTopic: '/topic/public',
  sendDestination: '/app/sendMessage',
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000, // 60s timeout for Render cold starts
});

// Helper function to handle errors consistently and keep code DRY
const handleRequest = async (request) => {
  try {
    const response = await request();
    return { data: response.data, error: null };
  } catch (err) {
    console.error("API Call Failed:", err);
    
    // Handle Timeout specifically
    if (err.code === 'ECONNABORTED') {
      return { data: null, error: "Server is waking up from sleep (Free Tier). Please try again in 30 seconds." };
    }

    // Return a structured error object
    let errorMessage = "Something went wrong";
    
    if (err.response?.data) {
        if (typeof err.response.data === 'string') {
            errorMessage = err.response.data;
        } else if (err.response.data.message) {
            errorMessage = err.response.data.message;
        } else if (err.response.data.error) {
            errorMessage = err.response.data.error;
        }
    } else if (err.message) {
        errorMessage = err.message;
    }

    return { 
      data: null, 
      error: errorMessage
    };
  }
};

export const authAPI = {
  login: (username, password) => 
    handleRequest(() => api.post('/api/auth/login', { username, password })),
  
  signup: (username, password, name) => 
    handleRequest(() => api.post('/api/auth/signup', { username, password, name })),
  
  anonymous: async () => {
    // Return guest object immediately without calling backend
    return { 
      data: { id: 'guest', username: 'Guest', role: 'GUEST' }, 
      error: null 
    };
  },
};

export const journeyAPI = {
  getLogs: (userId) => 
    handleRequest(() => api.get(`/api/journey/${userId}`)),
  
  saveLog: (payload) => 
    handleRequest(() => api.post('/api/journey', payload)),
  
  deleteLog: (id) => 
    handleRequest(() => api.delete(`/api/journey/${id}`)),

  exportExcel: (payload) => 
    api.post('/api/journey/export/excel', payload, { responseType: 'blob' }),

  exportPdf: (payload) => 
    api.post('/api/journey/export/pdf', payload, { responseType: 'blob' }),
};

export const leaderboardAPI = {
  getTopUsers: () => 
    handleRequest(() => api.get('/api/leaderboard')),
};

export const friendsAPI = {
  sendRequest: (requesterId, targetUsername) => 
    handleRequest(() => api.post('/api/friends/request', null, { 
      params: { requesterId, targetUsername } 
    })),
  
  acceptRequest: (requestId) => 
    handleRequest(() => api.post(`/api/friends/accept/${requestId}`)),

  rejectRequest: (requestId) => 
    handleRequest(() => api.post(`/api/friends/reject/${requestId}`)),
  
  getFriends: (userId) => 
    handleRequest(() => api.get(`/api/friends/${userId}`)),
    
  getPendingRequests: (userId) => 
    handleRequest(() => api.get(`/api/friends/pending/${userId}`)),

  getSentRequests: (userId) => 
    handleRequest(() => api.get(`/api/friends/sent/${userId}`)),
};

export const userAPI = {
  search: (query) => 
    handleRequest(() => api.get(`/api/users/search?query=${query}`)),
};

export const chatAPI = {
  getHistory: () => 
    handleRequest(() => api.get('/api/chat/history')),

  getPrivateHistory: (conversationId) => 
    handleRequest(() => api.get(`/api/chat/history/${conversationId}`)),
    
  createPrivateChat: (requesterId, targetUserId) => {
    console.log("API: Creating Private Chat", { requesterId, targetUserId });
    // Send all likely parameter names to ensure backend finds one
    return handleRequest(() => api.post(`/api/chat/create/private/${targetUserId}`, {}, {
        params: { myUserId: requesterId, requesterId, userId: requesterId }
    }));
  },
    
  getUserConversations: (userId) => 
    handleRequest(() => api.get('/api/chat/conversations', {
        params: { userId, myUserId: userId }
    })),

  markAsRead: (conversationId, userId) => 
    handleRequest(() => api.post(`/api/chat/read/${conversationId}`, null, {
        params: { userId }
    })),
};

export default api;
