import React from 'react';
import { useParams } from 'react-router-dom';

function ComplaintDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Complaint Details</h1>
      <p>Viewing details for complaint ID: {id}</p>
    </div>
  );
}

export default ComplaintDetails;
