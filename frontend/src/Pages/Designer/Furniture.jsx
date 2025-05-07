// // src/Pages/Designer/Furniture.jsx
// import React, { Suspense } from "react";
// import { useGLTF } from "@react-three/drei";

// const modelPaths = {
//   Chair: "/models/chair.glb",
//   Table: "/models/table.glb",
//   Sofa: "/models/sofa.glb",
// };

// const Furniture = ({ type, position }) => {
//   const { scene } = useGLTF(modelPaths[type]);

//   return (
//     <Suspense fallback={null}>
//       <primitive object={scene} position={position} scale={0.5} />
//     </Suspense>
//   );
// };

// export default Furniture;
