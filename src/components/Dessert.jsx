import { AddToCart } from "../Icons";

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
      <button>
        <AddToCart /> Add to cart
      </button>
      <div className="details">
        <span className="category">Waffle</span>
        <p className="title">Waffle with Berries</p>
        <p className="price">$6.50</p>
      </div>
    </div>
  );
};
