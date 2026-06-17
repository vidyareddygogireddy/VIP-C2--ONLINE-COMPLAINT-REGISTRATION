import React from 'react';
import { useParams } from 'react-router-dom';

function Feedback() {
  const { id } = useParams();
  return (
    <div>
      <h1>Submit Feedback</h1>
      <p>Provide feedback for resolved complaint ID: {id}</p>
    </div>
  );
}

export default Feedback;
