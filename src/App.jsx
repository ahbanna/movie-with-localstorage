import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies/Movies";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="main row">
        <div className="movies-container col-md-8">
          <Movies></Movies>
        </div>
        <div className="side-cart-container col-md-4">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
}

export default App;
