import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { addjustQty, removeFromCart } from "../../redux/cart/cartActions";
const CartItem = ({ itemData, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(itemData.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div className="item" id={uuid()}>
      <img className="item_img" src={itemData.image} alt="" />
      <div className="item_info">
        <h2 className="item_title">{itemData.name}</h2>
        <p>{itemData.price}</p>
        <p>Ratings : ⭐⭐⭐⭐</p>
      </div>
      <div className="cartitem_action">
        <div className="qty">
          <label htmlFor="qty">Qty : </label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className="cartitem_action_button"
          type="button"
          onClick={() => removeFromCart(itemData.id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(addjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
