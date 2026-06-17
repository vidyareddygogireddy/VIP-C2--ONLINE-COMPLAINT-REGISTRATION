import api from '../utils/api';

export const getAssignedComplaints = async () => {
  const res = await api.get('/agent/complaints');
  return res.data;
};
