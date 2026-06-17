import React from 'react';

function ComplaintList({ complaints, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date Filed</th>
            {onDelete && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.title}</td>
              <td>{complaint.category}</td>
              <td>
                <span className={`badge ${
                  complaint.status === 'Resolved' ? 'bg-success' :
                  complaint.status === 'In Progress' ? 'bg-warning text-dark' :
                  'bg-secondary'
                }`}>
                  {complaint.status}
                </span>
              </td>
              <td>{new Date(complaint.createdAt).toLocaleDateString()}</td>
              {onDelete && (
                <td>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(complaint._id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComplaintList;
