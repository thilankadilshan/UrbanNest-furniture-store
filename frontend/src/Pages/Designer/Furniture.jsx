// src/Pages/Designer/Furniture.jsx
import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import { useSpring, a } from "@react-spring/three";

const modelPaths = {
  Chair: "/models/chair.glb",
  Table: "/models/table.glb",
  Sofa: "/models/sofa.glb",
};

const Furniture = ({ type, position }) => {
  const { scene } = useGLTF(modelPaths[type]);
  const [spring, api] = useSpring(() => ({ position }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ position: [x / 10, 0, y / 10] }); // scale drag to 3D units
  });

  return (
    <Suspense fallback={null}>
      <a.primitive
        {...bind()}
        object={scene}
        scale={0.5}
        position={spring.position}
      />
    </Suspense>
  );
};

export default Furniture;
