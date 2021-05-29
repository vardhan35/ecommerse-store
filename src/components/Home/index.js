import React from "react";
import { connect } from "react-redux";
import ProdItem from "./ProdItem";
import uuid from "react-uuid";
import Sidebar from "../Navbar/Sidebar";

const Index = ({ products }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        {products.map((item) => {
          return <ProdItem key={uuid()} itemData={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

export default connect(mapStateToProps)(Index);
