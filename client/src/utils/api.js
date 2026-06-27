import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://vip-c2-online-complaint-registration.onrender.com/api',
});

export default api;
