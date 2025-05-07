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
    selectedFurniture: [],
  });
  const navigate = useNavigate();

  const furnitureOptions = ["Chair", "Table", "Sofa"];

  const handleFurnitureChange = (item) => {
    setRoom((prev) => {
      const alreadySelected = prev.selectedFurniture.includes(item);
      return {
        ...prev,
        selectedFurniture: alreadySelected
          ? prev.selectedFurniture.filter((i) => i !== item)
          : [...prev.selectedFurniture, item],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/roompreview", { state: room });
  };

  return (
    <>
      <div className="design-landing">
        <form onSubmit={handleSubmit} className="design-form">
          <h2>Enter Room Details</h2>
          <input
            type="number"
            step="0.1"
            placeholder="Width (ft)"
            value={room.width}
            onChange={(e) => setRoom({ ...room, width: e.target.value })}
            required
          />
          <input
            type="number"
            step="0.1"
            placeholder="Length (ft)"
            value={room.length}
            onChange={(e) => setRoom({ ...room, length: e.target.value })}
            required
          />
          <input
            type="number"
            step="0.1"
            placeholder="Height (ft)"
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
          <div className="furniture-selection">
            <label>Select Furniture:</label>
            {furnitureOptions.map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  checked={room.selectedFurniture.includes(item)}
                  onChange={() => handleFurnitureChange(item)}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <button type="submit">Proceed</button>
        </form>
      </div>
    </>
  );
};
