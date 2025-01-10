import { useState } from "react";
import "./App.css";
import { Dessert } from "./components/Dessert";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <main>
        <div className="desserts-col">
          <h1>Desserts</h1>
          <div className="desserts-container">
            <Dessert />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
