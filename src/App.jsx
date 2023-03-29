import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies/Movies";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) => {
    const previousWatchTime = localStorage.getItem("watchTime");
    if (previousWatchTime) {
      const sum = parseInt(previousWatchTime) + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div className="App">
      <div className="main row">
        <div className="movies-container col-md-8">
          <Movies handleWatchTime={handleWatchTime}></Movies>
        </div>
        <div className="side-cart-container col-md-4">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </div>
  );
}

export default App;
