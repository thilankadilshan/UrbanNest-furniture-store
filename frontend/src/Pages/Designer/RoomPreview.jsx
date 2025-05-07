// src/Pages/Designer/RoomPreview.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RoomBox from "./RoomBox";
import Furniture from "./Furniture";

export const RoomPreview = () => {
  const { state } = useLocation();
  const { width, height, length, color, selectedFurniture } = state;

  return (
    <div style={{ height: "100vh", background: "#eee" }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <OrbitControls />
        <RoomBox
          width={parseFloat(width)}
          height={parseFloat(height)}
          length={parseFloat(length)}
          color={color}
        />
        {selectedFurniture.map((item, i) => (
          <Furniture key={i} type={item} position={[i * 2 - 2, 0, 0]} />
        ))}
      </Canvas>
    </div>
  );
};
