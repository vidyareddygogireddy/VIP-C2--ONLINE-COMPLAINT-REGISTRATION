import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgentDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');
  
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  let currentUserId = '';
  
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      currentUserId = user.id;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchAssignedComplaints();
  }, []);

  const fetchAssignedComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/complaints', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Filter complaints to show only those assigned to the logged-in agent
      const assigned = response.data.filter(
        (complaint) => complaint.agent && complaint.agent._id === currentUserId
      );
      setComplaints(assigned);
    } catch (err) {
      setError('Failed to fetch complaints. Make sure you are logged in as an Agent.');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/complaints/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Status updated successfully!');
      fetchAssignedComplaints(); // Refresh list to update display
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update status');
    }
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h3 className="card-title mb-4 text-success">Agent Dashboard - Assigned Complaints</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        {complaints.length === 0 ? (
          <p className="text-muted">You do not have any assigned complaints yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead className="table-success">
                <tr>
                  <th>Filer</th>
                  <th>Title & Description</th>
                  <th>Category</th>
                  <th>Status (Change)</th>
                  <th>Date Filed</th>
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
                      {/* Simple Bootstrap form select for status */}
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
                    <td>{new Date(complaint.createdAt).toLocaleDateString()}</td>
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

export default AgentDashboard;
