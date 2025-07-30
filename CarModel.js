import React from "react";
import { useGLTF } from "@react-three/drei";

export default function CarModel({ url }) {
  const { scene } = useGLTF(url, true);
  return <primitive object={scene} scale={1.5} />;
}
