import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div className="text-center p-5 bg-light rounded shadow-sm mt-5">
      <h1 className="display-4 fw-bold text-primary mb-3">Online Complaint Portal</h1>
      <p className="lead text-muted mb-4">
        File, track, and resolve your complaints efficiently. Our dedicated team is here to support you at every stage.
      </p>
      <div className="d-sm-flex justify-content-sm-center gap-3">
        {isLoggedIn ? (
          <Link to="/" className="btn btn-primary btn-lg px-4">
            Go to My Dashboard
          </Link>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-secondary btn-lg px-4">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
