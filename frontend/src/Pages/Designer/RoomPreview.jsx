// src/Pages/Designer/RoomPreview.jsx
import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "@google/model-viewer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./RoomPreview.css";

export const RoomPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const viewerRef = useRef();

  const [roomData, setRoomData] = useState(location.state);
  const [modelSrc, setModelSrc] = useState("/models/room.glb");
  const [selectedFurniture, setSelectedFurniture] = useState("");

  const applyWallColor = (colorHex) => {
    const viewer = viewerRef.current;
    const materialName = "WallMaterial";

    const onLoad = () => {
      if (viewer.model && viewer.model.materials) {
        viewer.model.materials.forEach((material) => {
          if (material.name === materialName) {
            const r = parseInt(colorHex.slice(1, 3), 16) / 255;
            const g = parseInt(colorHex.slice(3, 5), 16) / 255;
            const b = parseInt(colorHex.slice(5, 7), 16) / 255;
            material.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
          }
        });
      }
      viewer.removeEventListener("load", onLoad);
    };

    viewer.addEventListener("load", onLoad);
  };

  // Scale room
  useEffect(() => {
    if (roomData && viewerRef.current) {
      const viewer = viewerRef.current;
      const width = parseFloat(roomData.width);
      const length = parseFloat(roomData.length);
      const height = parseFloat(roomData.height);

      const scaleX = width / 10;
      const scaleY = height / 8;
      const scaleZ = length / 10;

      viewer.scale = `${scaleX} ${scaleY} ${scaleZ}`;

      applyWallColor(roomData.color);
    }
  }, [roomData]);

  // Download Image
  const takeScreenshot = () => {
    const viewer = viewerRef.current;
    viewer.toDataURL().then((dataUrl) => {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "room-design.png";
      a.click();
    });
  };

  // Add furniture dynamically using GLTFLoader + Three.js
  const addFurniture = (furnitureFile) => {
    const viewer = viewerRef.current;
    const scene = viewer.scene; // ModelViewer's Three.js scene

    const loader = new GLTFLoader();
    loader.load(`/models/furniture/${furnitureFile}`, (gltf) => {
      const furniture = gltf.scene;

      // Set position in front of camera (easy to see)
      furniture.position.set(0, 0, -2);

      // Set reasonable scale (adjust if needed)
      furniture.scale.set(1, 1, 1);

      // Optional — give each model unique name so no duplicates
      furniture.name = furnitureFile;

      scene.add(furniture);
    });
  };

  const handleFurnitureChange = (e) => {
    const selected = e.target.value;
    setSelectedFurniture(selected);
    if (selected) {
      addFurniture(selected);
    }
  };

  return (
    <div className="room-preview-container">
      <h2>Room Preview</h2>
      <model-viewer
        ref={viewerRef}
        src={modelSrc}
        camera-controls
        shadow-intensity="1"
        exposure="1"
        style={{ width: "100%", height: "600px" }}
      ></model-viewer>

      <div className="controls">
        <select
          value={selectedFurniture}
          onChange={handleFurnitureChange}
          className="dropdown"
        >
          <option value="">Select Furniture</option>
          <option value="chair.glb">Chair</option>
          <option value="table.glb">Table</option>
          <option value="sofa.glb">Sofa</option>
          <option value="lamp.glb">Lamp</option>
          <option value="cabinet.glb">Cabinet</option>
        </select>

        <button onClick={takeScreenshot}>Download Image</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};
