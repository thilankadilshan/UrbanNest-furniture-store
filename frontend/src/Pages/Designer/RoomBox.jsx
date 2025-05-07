// src/Pages/Designer/RoomBox.jsx
import React from "react";

const Wall = ({ position, rotation, width, height, color }) => (
  <mesh position={position} rotation={rotation}>
    <planeGeometry args={[width, height]} />
    <meshStandardMaterial color={color} side={2} />
  </mesh>
);

const RoomBox = ({ width, height, length, color }) => {
  const halfW = width / 2;
  const halfH = height / 2;
  const halfL = length / 2;

  return (
    <>
      {/* Floor */}
      <Wall
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={width}
        height={length}
        color="#e0e0e0"
      />
      {/* Ceiling */}
      <Wall
        position={[0, height, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        width={width}
        height={length}
        color={color}
      />
      {/* Back Wall */}
      <Wall
        position={[0, halfH, -halfL]}
        rotation={[0, 0, 0]}
        width={width}
        height={height}
        color={color}
      />
      {/* Front Wall (optional: skip for open view) */}
      {/* <Wall position={[0, halfH, halfL]} rotation={[0, Math.PI, 0]} width={width} height={height} color={color} /> */}
      {/* Left Wall */}
      <Wall
        position={[-halfW, halfH, 0]}
        rotation={[0, Math.PI / 2, 0]}
        width={length}
        height={height}
        color={color}
      />
      {/* Right Wall */}
      <Wall
        position={[halfW, halfH, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        width={length}
        height={height}
        color={color}
      />
    </>
  );
};

export default RoomBox;
