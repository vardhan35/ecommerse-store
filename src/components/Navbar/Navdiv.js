import React from "react";
import { NavLink } from "react-router-dom";

const Navdiv = () => {
  return (
    <div className="navdiv">
      <div className="navlist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="login">
        <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
};

export default Navdiv;
