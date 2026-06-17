import api from '../utils/api';

export const login = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res.data;
};
