import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser, isAuthenticated } from '../services/api';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Sign Out
        </button>
      </header>

      <main className="dashboard-content">
        <p className="welcome-text">
          Welcome to your dashboard! You have successfully signed in.
          This is a protected page that requires authentication.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
