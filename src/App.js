// import "./styles.css";
// import { useEffect } from "react";
// import THREE from "three";
import LinePlot from "./linePlot";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Daiwei Hou</h1>
        <h2>Frontend Developer | dhou@ucdavis.edu | (530)-219-2018</h2>
      </header>
      <body>
        <LinePlot data={[1, 10, 3, 2, -1, 4, 5, 5, 52, 1, 3]} />
      </body>
    </div>
  );
}
