import Background from "./components/starBackground/background";
import NavigationSection from "./components/navigation/navigationSection";
import BodySection from "./components/mainBody/bodySection";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return isLoading ? (
    <video width="100%" height="100%" autoPlay muted>
      <source src={`/assets/loading_6s.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <div
      style={
        isLoading
          ? {
              opacity: 0,
              visibility: "hidden",
            }
          : {
              opacity: 1,
              visibility: "visible",
              transition: "opacity 2s, visibility 2s",
            }
      }
    >
      <div className="App">
        <div className="background-container">
          <Background />
        </div>
        <div className="content-container">
          <NavigationSection />
          <BodySection />
        </div>
      </div>
    </div>
  );
}
