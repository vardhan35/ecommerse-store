import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Sidebar = ({ cartItem, user }) => {
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

  const handleClick = (e) => {
    e.preventDefault();
    if (!user) {
      window.alert("You Have Not LoggedIn");
    } else {
      if (count == 0) {
        window.alert("You Have Not Added anything to Cart!!!");
      } else {
        window.alert("Your Oder Is Placed");
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="userInfo">
        {!user ? (
          <>
            <h1>Welcome</h1>
            <p>
              To our <span className="alert">myStore</span> Bazzar
            </p>
          </>
        ) : (
          <>
            {!user.user ? (
              <>
                <h1>Welcome</h1>
                <p>
                  To our <span className="alert">myStore</span> Bazzar
                </p>
              </>
            ) : (
              <>
                <h1>{user.user.firstName}</h1>
                <p>{user.user.email}</p>
              </>
            )}
          </>
        )}
      </div>
      <div className="cartInfo">
        <h2>Your Orders</h2>
        <div className="total">
          <h3>Total Qty : {count}</h3>
          <h3>Total Price : {prize},₹</h3>
        </div>
        <button type="button" onClick={(e) => handleClick(e)}>
          Placed Order
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.cart.cart,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Sidebar);
