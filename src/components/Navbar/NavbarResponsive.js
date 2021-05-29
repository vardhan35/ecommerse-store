import React from "react";
import NavdivResp from "./NavdivResp";
import SidebarResp from "./SidebarResp";

const NavbarResponsive = ({ isClick }) => {
  return (
    <div className={isClick ? "navbarResp_active" : "navbarResp"}>
      <NavdivResp />
      <SidebarResp />
    </div>
  );
};

export default NavbarResponsive;
