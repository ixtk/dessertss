import "./App.css";
import desserts from "./data.json";
import { Dessert } from "./components/Dessert";
import { RemoveItem, CarbonNeutral } from "./Icons";

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
        <div className="cart">
          <h2>Your cart (7)</h2>
          <ul>
            <li>
              <p className="title">Classic Teiramisu</p>
              <span className="quantity">1x</span>
              <span className="price">@$5.50</span>
              <span className="total">$5.50</span>
              <button className="remove-btn">
                <RemoveItem />
              </button>
            </li>
            <li>
              <p className="title">Classic Teiramisu</p>
              <span className="quantity">1x</span>
              <span className="price">@$5.50</span>
              <span className="total">$5.50</span>
              <button className="remove-btn">
                <RemoveItem />
              </button>
            </li>
            <li>
              <p className="title">Classic Teiramisu</p>
              <span className="quantity">1x</span>
              <span className="price">@$5.50</span>
              <span className="total">$5.50</span>
              <button className="remove-btn">
                <RemoveItem />
              </button>
            </li>
            <li>
              <p className="title">Classic Teiramisu</p>
              <span className="quantity">1x</span>
              <span className="price">@$5.50</span>
              <span className="total">$5.50</span>
              <button className="remove-btn">
                <RemoveItem />
              </button>
            </li>
            <li>
              <p className="title">Classic Teiramisu</p>
              <span className="quantity">1x</span>
              <span className="price">@$5.50</span>
              <span className="total">$5.50</span>
              <button className="remove-btn">
                <RemoveItem />
              </button>
            </li>
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
