import Background from "./components/starBackground/background";
import NavigationSection from "./components/navigation/navigationSection";
import BodySection from "./components/mainBody/bodySection";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="background-container">
        <Background />
      </div>
      <div className="content-container">
        <NavigationSection />
        <BodySection />
      </div>
    </div>
  );
}
