import "./App.css";
import desserts from "./data.json";
import { Dessert } from "./components/Dessert";
import { RemoveItem, CarbonNeutral } from "./Icons";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container">
      <main>
        <div className="desserts-col">
          <h1>Desserts</h1>
          <div className="desserts-container">
            {desserts.map((dessertObj) => {
              return (
                <Dessert
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  dessert={dessertObj}
                  key={dessertObj.name}
                />
              );
            })}
          </div>
        </div>
        <div className="cart">
          <h2>Your cart (7)</h2>
          <ul>
            {cartItems.map((dessertObj) => {
              return (
                <li key={dessertObj.name}>
                  <p className="title">{dessertObj.name}</p>
                  <span className="quantity">{dessertObj.quantity}x</span>
                  <span className="price">@${dessertObj.price.toFixed(2)}</span>
                  <span className="total">
                    ${(dessertObj.price * dessertObj.quantity).toFixed(2)}
                  </span>
                  <button className="remove-btn">
                    <RemoveItem />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="summary">
            <div className="total">
              <p>Order total</p>
              <p className="price">$46.50</p>
            </div>
            <p className="carbon-neutral">
              <CarbonNeutral />
              This is a <strong>carbon-neutral</strong> delivery
            </p>
            <button className="order-btn">Confirm Order</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
