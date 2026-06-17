import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState('');
  
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchAllComplaints();
    fetchAgents();
  }, []);

  const fetchAllComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/complaints', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComplaints(response.data);
    } catch (err) {
      setError('Failed to fetch all complaints. Make sure you are logged in as Admin.');
    }
  };

  const fetchAgents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/agents', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAgents(response.data);
    } catch (err) {
      console.error('Failed to fetch agents', err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/complaints/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAllComplaints(); // Refresh table
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update status');
    }
  };

  const handleAgentChange = async (complaintId, agentId) => {
    if (!agentId) return;
    try {
      await axios.put(
        `http://localhost:5000/api/complaints/${complaintId}/assign`,
        { agentId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Agent assigned successfully!');
      fetchAllComplaints(); // Refresh table to see update
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to assign agent');
    }
  };

  const handleDeleteComplaint = async (id) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      try {
        await axios.delete(`http://localhost:5000/api/complaints/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchAllComplaints();
      } catch (err) {
        alert('Failed to delete complaint');
      }
    }
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h3 className="card-title mb-4">Admin Dashboard - Manage Complaints</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        {complaints.length === 0 ? (
          <p className="text-muted">No complaints filed in the system yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Filer</th>
                  <th>Title & Description</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Assigned Agent</th>
                  <th>Date Filed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint._id}>
                    <td>
                      <div><strong>{complaint.user?.name || 'Unknown'}</strong></div>
                      <small className="text-muted">{complaint.user?.email || 'N/A'}</small>
                    </td>
                    <td>
                      <strong>{complaint.title}</strong>
                      <p className="mb-0 text-muted small">{complaint.description}</p>
                    </td>
                    <td>{complaint.category}</td>
                    <td>
                      <select 
                        className={`form-select form-select-sm fw-semibold ${
                          complaint.status === 'Resolved' ? 'text-success border-success' :
                          complaint.status === 'In Progress' ? 'text-warning border-warning' :
                          'text-secondary'
                        }`}
                        value={complaint.status} 
                        onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={complaint.agent?._id || ''}
                        onChange={(e) => handleAgentChange(complaint._id, e.target.value)}
                      >
                        <option value="">-- Unassigned --</option>
                        {agents.map((agent) => (
                          <option key={agent._id} value={agent._id}>
                            {agent.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{new Date(complaint.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteComplaint(complaint._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
