// src/Pages/Designer/3DDesignLanding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./3DDesignLanding.css";

export const ThreeDDesignLanding = () => {
  const [room, setRoom] = useState({
    width: "",
    length: "",
    height: "",
    color: "#ffffff",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all dimensions are provided
    if (!room.width || !room.length || !room.height) {
      alert("Please enter all room dimensions.");
      return;
    }

    navigate("/roompreview", { state: room });
  };

  return (
    <div className="design-landing">
      <form onSubmit={handleSubmit} className="design-form">
        <h2>Enter Room Dimensions</h2>

        <label>Width (ft)</label>
        <input
          type="number"
          step="0.1"
          placeholder="e.g. 10.5"
          value={room.width}
          onChange={(e) => setRoom({ ...room, width: e.target.value })}
          required
        />

        <label>Length (ft)</label>
        <input
          type="number"
          step="0.1"
          placeholder="e.g. 12.0"
          value={room.length}
          onChange={(e) => setRoom({ ...room, length: e.target.value })}
          required
        />

        <label>Height (ft)</label>
        <input
          type="number"
          step="0.1"
          placeholder="e.g. 8.0"
          value={room.height}
          onChange={(e) => setRoom({ ...room, height: e.target.value })}
          required
        />

        <label>Wall Color:</label>
        <input
          type="color"
          value={room.color}
          onChange={(e) => setRoom({ ...room, color: e.target.value })}
        />

        <button type="submit">Preview Room</button>
      </form>
    </div>
  );
};
