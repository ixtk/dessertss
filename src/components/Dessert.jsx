import { AddToCart, DecrementQuantity, IncrementQuantity } from "../Icons";
import { useState } from "react";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts";

export const Dessert = ({ dessert, setCartItems, cartItems }) => {
  const [quantity, setQuantity] = useState(0);
  const images = dessert.images;

  const updateCart = (dessert, action) => {
    const cartItemNames = cartItems.map((dessertObj) => dessertObj.name);

    const newQuantity = action === "add" ? quantity + 1 : quantity - 1;
    setQuantity(newQuantity);

    if (newQuantity === 0) {
      setCartItems(
        cartItems.filter((dessertObj) => dessertObj.name !== dessert.name)
      );
    } else {
      if (cartItemNames.includes(dessert.name)) {
        setCartItems(
          cartItems.map((dessertObj) => {
            if (dessertObj.name === dessert.name) {
              return { ...dessertObj, quantity: newQuantity };
            }
            return dessertObj;
          })
        );
      } else {
        setCartItems([
          ...cartItems,
          {
            ...dessert,
            quantity: newQuantity,
          },
        ]);
      }
    }
  };

  return (
    <div className="dessert">
      <picture>
        <source
          media="(min-width:650px)"
          srcset={`${BASE_URL}/${images.tablet}`}
        />
        <source
          media="(min-width:465px)"
          srcset={`${BASE_URL}/${images.mobile}`}
        />
        <img src={`${BASE_URL}/${images.desktop}`} />
      </picture>
      {quantity === 0 ? (
        <button className="cart-btn" onClick={() => updateCart(dessert, "add")}>
          <AddToCart /> Add to cart
        </button>
      ) : (
        <div className="quantity-btns">
          <button onClick={() => updateCart(dessert, "remove")}>
            <DecrementQuantity />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              updateCart(dessert, "add");
            }}
          >
            <IncrementQuantity />
          </button>
        </div>
      )}

      <div className="details">
        <span className="category">{dessert.category}</span>
        <p className="title">{dessert.name}</p>
        <p className="price">${dessert.price}</p>
      </div>
    </div>
  );
};
