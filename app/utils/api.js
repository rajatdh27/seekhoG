import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to handle errors consistently and keep code DRY
const handleRequest = async (request) => {
  try {
    const response = await request();
    return { data: response.data, error: null };
  } catch (err) {
    console.error("API Call Failed:", err);
    // Return a structured error object
    return { 
      data: null, 
      error: err.response?.data?.message || err.message || "Something went wrong" 
    };
  }
};

export const authAPI = {
  login: (username, password) => 
    handleRequest(() => api.post('/api/auth/login', { username, password })),
  
  signup: (username, password) => 
    handleRequest(() => api.post('/api/auth/signup', { username, password })),
  
  anonymous: () => 
    handleRequest(() => api.post('/api/auth/anonymous')),
};

export default api;
