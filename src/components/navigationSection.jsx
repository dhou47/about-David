// util imports
import { ReactComponent as HtmlLogo } from "../assets/htmlLogo.svg";
import { ReactComponent as CssLogo } from "../assets/cssLogo.svg";
import { ReactComponent as JsLogo } from "../assets/javascriptLogo.svg";
import { ReactComponent as ReactLogo } from "../assets/reactLogo.svg";
import { ReactComponent as ReduxLogo } from "../assets/reduxLogo.svg";
import { ReactComponent as NodejsLogo } from "../assets/nodejsLogo.svg";
import { ReactComponent as D3Logo } from "../assets/d3jsLogo.svg";
import { ReactComponent as TypeScriptLogo } from "../assets/typeScriptLogo.svg";
import { ReactComponent as NextJsLogo } from "../assets/nextjsLogo.svg";
import { ReactComponent as MongodbLogo } from "../assets/mongodbLogo.svg";
import { ReactComponent as TailwindLogo } from "../assets/tailwindLogo.svg";

import "./navigationSection.css";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  //   const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * props.randRotate * 1.5;
    meshRef.current.rotation.y += delta * props.randRotate;
    meshRef.current.rotation.z += delta * props.randRotate;
  }, []);
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={2}
      //   onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

const NavigationSection = () => {
  return (
    <div className="nav-bar">
      <div className="titles">
        <h2>Daiwei Hou</h2>
        <h4> Frontend Developer | dhou@ucdavis.edu | (530)-219-2018 </h4>
      </div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box
          position={[-15.8, 0, -1]}
          color={"purple"}
          randRotate={Math.random()}
        />
        <Box
          position={[-7.2, 0, 0]}
          color={"green"}
          randRotate={Math.random()}
        />
        <Box
          position={[-4, 0, 0]}
          color={"orange"}
          randRotate={Math.random()}
        />
        <Box
          position={[-1.2, 0, 0]}
          color={"blue"}
          randRotate={Math.random()}
        />
        <Box position={[4, 0, 0]} color={"yellow"} randRotate={Math.random()} />
        <Box
          position={[7.2, 0, 0]}
          color={"skyblue"}
          randRotate={Math.random()}
        />
        <Box
          position={[10.8, 0, 0]}
          color={"black"}
          randRotate={Math.random()}
        />
      </Canvas>
      <class className="carousal">
        <HtmlLogo />
        <CssLogo />
        <JsLogo />
        <ReactLogo />
        <ReduxLogo />
        <NodejsLogo />
        <D3Logo />
        <TypeScriptLogo />
        <NextJsLogo />
        <MongodbLogo />
        <TailwindLogo />
      </class>
    </div>
  );
};

export default NavigationSection;
