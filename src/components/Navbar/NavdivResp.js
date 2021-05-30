import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/user/userActions";

const NavdivResp = ({ user, logout }) => {
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
    <div className="navdivResp">
      <div className="navlistResp">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="login">
        {isclick ? (
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
