import { AddToCart } from "../Icons";

export const Dessert = () => {
  return (
    <div className="dessert">
      <img
        src="https://res.cloudinary.com/dc2c49xov/desserts/creme-brulee-mobile.jpg"
        alt=""
      />
      <button>
        <AddToCart /> Add to cart
      </button>
    </div>
  );
};
