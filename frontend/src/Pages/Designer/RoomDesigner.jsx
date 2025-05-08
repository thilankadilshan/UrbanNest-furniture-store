// src/Pages/Designer/RoomDesigner.jsx
import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  useGLTF,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { useLocation, useNavigate } from "react-router-dom";
import "./RoomDesigner.css";

function Room({ scale, wallColor, roomRef }) {
  const { scene, materials } = useGLTF("/models/room.glb");

  if (materials.WallMaterial) {
    materials.WallMaterial.color.set(wallColor);
  }

  return (
    <group ref={roomRef}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

function Furniture({ modelPath, position, scale, furnitureRef }) {
  const { scene } = useGLTF(modelPath);

  return (
    <group position={position} scale={scale} ref={furnitureRef}>
      <primitive object={scene} />
    </group>
  );
}

export const RoomDesigner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { width, length, height, color } = location.state;

  const roomScale = [width / 5, height / 3, length / 5];

  const [furnitures, setFurnitures] = useState([]);
  const [selectedObjectRef, setSelectedObjectRef] = useState(null);
  const [selectedObjectId, setSelectedObjectId] = useState(null); // to track furniture id
  const [transformMode, setTransformMode] = useState("translate");

  const roomRef = useRef();

  const handleAddFurniture = (modelName) => {
    const modelPath = `/models/furniture/${modelName}`;
    const newFurniture = {
      modelPath,
      position: [0, 0, 0],
      scale: [0.4, 0.4, 0.4],
      id: Date.now(),
      ref: React.createRef(),
    };
    setFurnitures([...furnitures, newFurniture]);
  };

  const handleRemoveSelected = () => {
    if (!selectedObjectRef) return;

    // Don't allow deleting room
    if (selectedObjectRef === roomRef) return;

    // Remove selected furniture
    setFurnitures(furnitures.filter((f) => f.id !== selectedObjectId));

    // Clear selection
    setSelectedObjectRef(null);
    setSelectedObjectId(null);
  };

  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "room-design.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="room-designer-container">
      <h2>Room Designer</h2>

      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <Suspense
          fallback={
            <Html>
              <h3>Loading...</h3>
            </Html>
          }
        >
          <ambientLight intensity={0.5} />
          <Environment preset="warehouse" />
          <ContactShadows
            position={[0, -1, 0]}
            scale={20}
            blur={2}
            opacity={0.5}
          />

          {/* Room */}
          <Room scale={roomScale} wallColor={color} roomRef={roomRef} />

          {/* Furniture */}
          {furnitures.map((item) => (
            <Furniture
              key={item.id}
              modelPath={item.modelPath}
              position={item.position}
              scale={item.scale}
              furnitureRef={item.ref}
            />
          ))}

          {/* TransformControls */}
          {selectedObjectRef && (
            <TransformControls
              mode={transformMode}
              object={selectedObjectRef.current}
            />
          )}

          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>

      <div className="controls">
        {/* Add Furniture */}
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              handleAddFurniture(value);
            }
          }}
          className="dropdown"
        >
          <option value="">Add Furniture</option>
          <option value="chair.glb">Chair</option>
          <option value="table.glb">Table</option>
          <option value="sofa.glb">Sofa</option>
          <option value="lamp.glb">Lamp</option>
          <option value="cabinet.glb">Cabinet</option>
        </select>

        {/* Select Object */}
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "room") {
              setSelectedObjectRef(roomRef);
              setSelectedObjectId(null);
            } else {
              const furniture = furnitures.find(
                (f) => f.id.toString() === value
              );
              if (furniture) {
                setSelectedObjectRef(furniture.ref);
                setSelectedObjectId(furniture.id);
              }
            }
          }}
          className="dropdown"
        >
          <option value="">Select Object</option>
          <option value="room">Room</option>
          {furnitures.map((item) => (
            <option key={item.id} value={item.id}>
              {item.modelPath.split("/").pop()}
            </option>
          ))}
        </select>

        {/* Transform Mode */}
        <select
          value={transformMode}
          onChange={(e) => setTransformMode(e.target.value)}
          className="dropdown"
        >
          <option value="translate">Move</option>
          <option value="rotate">Rotate</option>
          <option value="scale">Scale</option>
        </select>

        <button onClick={handleRemoveSelected} disabled={!selectedObjectId}>
          Remove Selected
        </button>
        <button onClick={downloadImage}>Download Image</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};
