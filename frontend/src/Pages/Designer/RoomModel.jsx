// src/Pages/Designer/RoomModel.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

const RoomModel = ({ onClick }) => {
  const { scene } = useGLTF("/models/simple_room.glb");
  return <primitive object={scene} scale={1} onClick={onClick} />;
};

export default RoomModel;
