import React from 'react';
import './LoginPage.css'; 
function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
      /><br />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
      /><br />
      <button className="login-button">Login</button>
    </div>
  );
}

export default LoginPage;
