import { AddToCart, DecrementQuantity, IncrementQuantity } from "../Icons";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts";

export const Dessert = ({ images, name, category, price }) => {
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
      {/* <button className="cart-btn">
        <AddToCart /> Add to cart
      </button> */}
      <div className="quantity-btns">
        <button>
          <IncrementQuantity />
        </button>
        <span>4</span>
        <button>
          <DecrementQuantity />
        </button>
      </div>
      <div className="details">
        <span className="category">{category}</span>
        <p className="title">{name}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};
