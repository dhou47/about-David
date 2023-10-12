// css import
import "./background.css";

// package imports
import { Canvas } from "react-three-fiber";
import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Background = () => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  }, []);

  return (
    <div className="galaxy-draw-board">
      <Canvas>
        <OrbitControls />
        <Stars ref={controlsRef} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
};

export default Background;
