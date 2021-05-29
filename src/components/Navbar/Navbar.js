import React, { useState } from "react";
import NavbarResponsive from "./NavbarResponsive";
import Navdiv from "./Navdiv";

const Navbar = () => {
  const [isclick, setisClick] = useState(false);

  const handleClick = () => {
    setisClick(!isclick);
  };
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <h1>
            My<span>Store</span>
          </h1>
        </div>
        <Navdiv />
        <button
          type="submit"
          className="navbar_hamburger"
          onClick={handleClick}
        >
          <i className={isclick ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
      </div>
      <NavbarResponsive handleClick={handleClick} isClick={isclick} />
    </div>
  );
};

export default Navbar;
