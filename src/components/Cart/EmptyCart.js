import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="emptycart">
      <h1>Cart Empty</h1>
      <button>
        <Link to="/"> «Back to Shopping</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
