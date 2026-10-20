import { useEffect, useState } from "react";
import "./App.css";
import logoE from "./assets/logoE.png";
import Home from "./componentsSub/Home.tsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Keep the solid black screen visible for 1.5 seconds
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // 2. Unmount the splash screen layer completely after the 800ms fade transition
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2300); // 1500ms display + 800ms fade duration

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <div className={`app-container ${!isLoading ? "scroll-allowed" : ""}`}>
      {/* 1. Black Screen Overlay Layer */}
      {isVisible && (
        <div className={`pure-splash ${!isLoading ? "fade-out" : ""}`}>
          <div className="h-full w-full">
            <img
              src={logoE}
              alt="App Splash Logo"
              className="splash-image animate-pulse mt-50   w-70 m-auto"
            />
          </div>
        </div>
      )}

      {/* 2. Main Content Layer */}
      <div className={`main-app ${!isLoading ? "fade-in" : ""}`}>
        <Home />
      </div>
    </div>
  );
}

export default App;
