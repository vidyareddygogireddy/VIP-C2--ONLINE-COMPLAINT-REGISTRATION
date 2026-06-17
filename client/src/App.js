import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AgentDashboard from './pages/AgentDashboard';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const getUserRole = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
      const user = JSON.parse(userStr);
      return user.role;
    } catch (e) {
      return null;
    }
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* Main Route redirects based on authentication */}
          <Route path="/" element={
            isAuthenticated() ? (
              getUserRole() === 'ADMIN' ? <Navigate to="/admin-dashboard" /> :
              getUserRole() === 'AGENT' ? <Navigate to="/agent-dashboard" /> :
              <Navigate to="/user-dashboard" />
            ) : (
              <Navigate to="/home" />
            )
          } />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboards */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/agent-dashboard" element={<AgentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
