import "./navigationSection.css";
import * as THREE from "three";
import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

const Box = React.memo((props) => {
  const meshRef = useRef();
  const { scene } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  // const [isHovering, setIsHovering] = useState(false);
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const deltaX = (e.clientX - startPosition.x) * 0.01;
      const deltaY = (e.clientY - startPosition.y) * 0.01;

      meshRef.current.rotation.y -= deltaX;
      meshRef.current.rotation.x += deltaY;

      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, startPosition]);

  const textures = [
    new THREE.TextureLoader().load(props.assets[0]),
    new THREE.TextureLoader().load(props.assets[1]),
    new THREE.TextureLoader().load(props.assets[2]),
    new THREE.TextureLoader().load(props.assets[3]),
    new THREE.TextureLoader().load(props.assets[4]),
    new THREE.TextureLoader().load(props.assets[5]),
  ];

  const materials = textures.map(
    (texture) => new THREE.MeshLambertMaterial({ map: texture })
  );

  useFrame((state, delta) => {
    if (!isDragging) {
      meshRef.current.rotation.x +=
        delta * props.randRotate < 0.01 ? 0.01 : delta * props.randRotate;
      meshRef.current.rotation.y +=
        delta * props.randRotate < 0.01 ? 0.01 : delta * props.randRotate;
      meshRef.current.rotation.z +=
        delta * props.randRotate < 0.01 ? 0.01 : delta * props.randRotate;
    }
  }, []);

  useEffect(() => {
    meshRef.current.material = materials;
    scene.needsUpdate = true;
  }, [materials, scene]);

  // for testing purposes
  // end testing trunk

  return (
    <mesh
      onPointerOver={(e) => {
        props.onSetVisibible(true);
      }}
      onPointerLeave={(e) => {
        props.onSetVisibible(false);
      }}
      {...props}
      ref={meshRef}
      scale={2}
      onPointerDown={(e) => onMouseDown(e)}
    >
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
});

const NavigationSection = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  return (
    <div className="nav-bar">
      <span className="contact-info">dhou@ucdavis.edu | 530-219-2018</span>
      <img
        className="satellite-pic"
        src="/assets/satellite.png"
        alt="satellite"
        width={"350rem"}
        height={"250rem"}
      />
      <div className="titles">
        <h2>💫Daiwei Hou</h2>
        <h4> Frontend Developer | React Developer</h4>
      </div>

      <div className="cube-canvas">
        <ul
          className="skillset skillset-left"
          style={
            showText1
              ? {
                  opacity: 1,
                  visibility: "visible",
                  transition: "opacity 1s, visibility .1s",
                }
              : {
                  opacity: 0,
                  visibility: "hidden",
                  transition: "opacity 1s, visibility 0s 1s",
                }
          }
        >
          <li>Html</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Redux.js</li>
        </ul>
        <Canvas>
          <ambientLight />
          <pointLight intensity={3} position={[10, 10, 10]} color="red" />
          <Suspense fallback={null}>
            <Box
              onSetVisibible={setShowText1}
              position={[-3, 0, 0]}
              randRotate={Math.random()}
              assets={[
                "/assets/htmlLogo.png",
                "/assets/cssLogo.png",
                "/assets/javascriptLogo.png",
                "/assets/nodejsLogo.png",
                "/assets/reduxLogo.png",
                "/assets/githubLogo.png",
              ]}
            />
            <Box
              onSetVisibible={setShowText2}
              position={[3, 0, 0]}
              randRotate={Math.random()}
              assets={[
                "/assets/typescriptLogo.png",
                "/assets/tailwindLogo.png",
                "/assets/mongodbLogo.png",
                "/assets/nextjsLogo.png",
                "/assets/d3Logo.png",
                "/assets/jqueryLogo.png",
              ]}
            />
          </Suspense>
        </Canvas>
        <ul
          className="skillset skillset-right"
          style={
            showText2
              ? {
                  opacity: 1,
                  visibility: "visible",
                  transition: "opacity 1s, visibility .1s",
                }
              : {
                  opacity: 0,
                  visibility: "hidden",
                  transition: "opacity 1s, visibility 0s 1s",
                }
          }
        >
          <li>Jquery</li>
          <li>TypeScript</li>
          <li>Tailwind</li>
          <li>Next.js</li>
          <li>D3.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationSection;
