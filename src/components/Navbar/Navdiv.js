import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/user/userActions";

const Navdiv = ({ user, logout }) => {
  const handleClick = (e) => {
    e.preventDefault();
    logout({ user: null });
  };
  return (
    <div className="navdiv">
      <div className="navlist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="login">
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <NavLink to="/" onClick={(e) => handleClick(e)}>
            Logout
          </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navdiv);
