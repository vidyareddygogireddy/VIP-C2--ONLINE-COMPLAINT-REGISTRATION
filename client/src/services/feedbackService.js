import api from '../utils/api';

export const submitFeedback = async (id, feedback) => {
  const res = await api.post(`/feedback/${id}`, feedback);
  return res.data;
};
