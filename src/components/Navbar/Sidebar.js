import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Sidebar = ({ cartItem }) => {
  const [count, setcount] = useState();
  const [prize, setprize] = useState();
  useEffect(() => {
    let count = 0;
    let prize = 0;
    cartItem.forEach((item) => {
      count += item.qty;
      prize += item.price * item.qty;
    });
    setcount(count);
    setprize(prize);
  }, [cartItem, count]);

  return (
    <div className="sidebar">
      <div className="userInfo">
        <h3>Harsh</h3>
        <p>hvgk0305@gmail.com</p>
      </div>
      <div className="cartInfo">
        <h2>Your Orders</h2>
        <div className="total">
          <h3>Total Qty : {count}</h3>
          <h3>Total Price : {prize},rs</h3>
        </div>
        <button>Placed Order</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Sidebar);
