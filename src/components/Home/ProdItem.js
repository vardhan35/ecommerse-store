import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { addToCart } from "../../redux/cart/cartActions";
const ProdItem = ({ itemData, addToCart }) => {
  return (
    <div className="item" id={uuid()}>
      <img className="item_img" src={itemData.image} alt="" />
      <div className="item_info">
        <h2 className="item_title">{itemData.name}</h2>
        <p>{itemData.price},₹</p>
        <p>Ratings : ⭐⭐⭐⭐</p>
      </div>
      <div className="item_action">
        <button
          className="item_action_button"
          type="button"
          onClick={() => addToCart(itemData.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProdItem);
