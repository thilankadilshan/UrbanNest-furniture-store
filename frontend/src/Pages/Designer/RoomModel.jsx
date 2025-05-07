// src/Pages/Designer/RoomModel.jsx
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const RoomModel = ({ color = "#ffffff", onClick }) => {
  const { scene } = useGLTF("/models/simple_room.glb");

  useEffect(() => {
    // Example: Set color on specific wall meshes by name
    const wallNames = ["Wall_Back", "Wall_Left", "Wall_Right", "Wall_Ceiling"]; // adjust these names!
    wallNames.forEach((name) => {
      const mesh = scene.getObjectByName(name);
      if (mesh) {
        mesh.material = mesh.material.clone(); // avoid mutating shared material
        mesh.material.color.set(color);
      }
    });
  }, [scene, color]);

  return <primitive object={scene} scale={1} onClick={onClick} />;
};

export default RoomModel;
