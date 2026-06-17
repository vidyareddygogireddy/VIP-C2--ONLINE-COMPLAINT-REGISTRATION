import api from '../utils/api';

export const submitFeedback = async (id, feedback) => {
  const res = await api.post(/feedback/, feedback);
  return res.data;
};
