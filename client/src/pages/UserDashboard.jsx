import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintList from '../components/ComplaintList';

function UserDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchMyComplaints();
  }, []);

  const fetchMyComplaints = async () => {
    try {
      const response = await api.get('/complaints/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComplaints(response.data);
    } catch (err) {
      console.error('Failed to fetch complaints', err);
    }
  };

  const handleCreateComplaint = async (complaintData) => {
    setError('');
    setSuccess('');

    try {
      await api.post(
        '/complaints',
        complaintData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Complaint registered successfully!');
      fetchMyComplaints();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit complaint.');
    }
  };

  const handleDeleteComplaint = async (id) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      try {
        await api.delete(`/complaints/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchMyComplaints();
      } catch (err) {
        console.error('Failed to delete complaint', err);
      }
    }
  };

  return (
    <div className="row mt-4">
      {/* Submit Complaint Section */}
      <div className="col-md-5 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title mb-3">File a New Complaint</h4>
            
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <ComplaintForm onSubmit={handleCreateComplaint} />
          </div>
        </div>
      </div>

      {/* Complaints List Section */}
      <div className="col-md-7">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title mb-3">My Registered Complaints</h4>
            {complaints.length === 0 ? (
              <p className="text-muted">You have not registered any complaints yet.</p>
            ) : (
              <ComplaintList complaints={complaints} onDelete={handleDeleteComplaint} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
