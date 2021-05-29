import React from "react";
import Navdiv from "./Navdiv";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <h1>
            My<span>Store</span>
          </h1>
        </div>
        <Navdiv />
      </div>
    </div>
  );
};

export default Navbar;
