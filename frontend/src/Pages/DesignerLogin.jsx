// src/Pages/DesignerLogin/DesignerLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/DesignerLogin.css";

export const DesignerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "designer1" && password === "designer1pass123") {
      navigate("/3ddesignlanding");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="designer-login-container">
      <form className="designer-login-form" onSubmit={handleLogin}>
        <h2>Login as Designer</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
