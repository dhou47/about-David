// css import
import "./background.css";

// package imports
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import React from "react";
import { OrbitControls, Stars, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
// import * as htmlToImage from "html-to-image";

const Background = () => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  }, []);

  return (
    <div className="galaxy-draw-board">
      {/* component inside Canvas will not be re-rendered by react-dom, react-fiber instead */}
      <Canvas width="100" height="100">
        <OrbitControls />
        <Stars ref={controlsRef} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
};

export default Background;
