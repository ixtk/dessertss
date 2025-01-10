import "./App.css";
import desserts from "./data.json";
import { Dessert } from "./components/Dessert";

function App() {
  return (
    <div className="container">
      <main>
        <div className="desserts-col">
          <h1>Desserts</h1>
          <div className="desserts-container">
            {desserts.map((dessertObj) => {
              return <Dessert {...dessertObj} key={dessertObj.name} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
