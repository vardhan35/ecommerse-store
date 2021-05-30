import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/user/userActions";

const Navdiv = ({ user, logout }) => {
  const [isclick, setisClick] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    logout({ user: null });
  };
  useEffect(() => {
    if (user) {
      setisClick(!isclick);
    }
  }, [user]);
  return (
    <div className="navdiv">
      <div className="navlist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="login">
        {isclick ? (
          <NavLink to="/" onClick={(e) => handleClick(e)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navdiv);
