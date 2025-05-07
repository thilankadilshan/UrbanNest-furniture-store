// src/Pages/Designer/RoomPreview.jsx
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RoomModel from "./RoomModel";
import Furniture from "./Furniture";

export const RoomPreview = () => {
  const { state } = useLocation();
  const { selectedFurniture } = state;
  const [target, setTarget] = useState("room"); // 'room' or 'furniture'
  const controlsRef = useRef();

  const handleClick = (clickedOn) => {
    setTarget(clickedOn);
  };

  return (
    <div style={{ height: "100vh", background: "#eee" }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <OrbitControls
          ref={controlsRef}
          enableRotate={true}
          enableZoom={true}
          enablePan={true}
          enabled={true}
          target={target === "room" ? [0, 1, 0] : [2, 0, 0]} // change camera focus
        />

        <RoomModel onClick={() => handleClick("room")} />

        {selectedFurniture.map((item, i) => (
          <Furniture
            key={i}
            type={item}
            position={[i * 2 - 2, 0, 0]}
            onClick={() => handleClick("furniture")}
          />
        ))}
      </Canvas>
    </div>
  );
};
