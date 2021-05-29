import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import uuid from "react-uuid";
import Sidebar from "../Navbar/Sidebar";
import EmptyCart from "./EmptyCart";

const index = ({ products }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        {products.length === 0 ? (
          <EmptyCart />
        ) : (
          products.map((item) => {
            return <CartItem key={uuid()} itemData={item} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.cart,
  };
};

export default connect(mapStateToProps)(index);
