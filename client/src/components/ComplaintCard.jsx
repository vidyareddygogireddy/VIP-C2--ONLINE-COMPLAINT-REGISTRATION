import React from 'react';

function ComplaintCard({ complaint }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{complaint?.title}</h5>
          <span className={`badge ${
            complaint?.status === 'Resolved' ? 'bg-success' :
            complaint?.status === 'In Progress' ? 'bg-warning text-dark' :
            'bg-secondary'
          }`}>
            {complaint?.status}
          </span>
        </div>
        <h6 className="card-subtitle mb-2 text-muted small">{complaint?.category}</h6>
        <p className="card-text">{complaint?.description}</p>
        <div className="text-muted small mt-2">
          Filed on: {complaint?.createdAt ? new Date(complaint.createdAt).toLocaleDateString() : 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default ComplaintCard;
