import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/user/userActions";

const NavdivResp = ({ user, logout }) => {
  const handleClick = (e) => {
    e.preventDefault();
    logout({ user: null });
  };
  return (
    <div className="navdivResp">
      <div className="navlistResp">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="login">
        {user ? (
          <NavLink to="/login" onClick={(e) => handleClick(e)}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logoutUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavdivResp);
