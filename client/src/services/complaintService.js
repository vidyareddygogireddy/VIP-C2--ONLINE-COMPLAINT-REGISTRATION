import api from '../utils/api';

export const getComplaints = async () => {
  const res = await api.get('/complaints');
  return res.data;
};
