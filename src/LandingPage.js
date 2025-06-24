import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome!</h1>
      <button className="landing-button" onClick={handleGoToLogin}>
        Click here to log in
      </button>
    </div>
  );
}

export default LandingPage;
