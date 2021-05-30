import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user/userActions";

const index = ({ login }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conformPassword, setconformpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === conformPassword) {
      login({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        loggedIn: true,
      });
      setfirstName("");
      setlastName("");
      setemail("");
      setpassword("");
      setconformpassword("");
    } else {
      window.alert("Passwords Does Not Match");
    }
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            id="firstName"
            placeholder="Give Your First Name..."
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            required
            autoComplete="on"
          />
          <input
            type="text"
            id="lastName"
            placeholder="Give Your Last Name..."
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            required
            autoComplete="on"
          />
          <input
            type="email"
            id="email"
            placeholder="Give Your Email..."
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            autoComplete="on"
          />
          <input
            type="password"
            id="password"
            placeholder="Give Your Password..."
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            autoComplete="off"
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Conform Your Password..."
            value={conformPassword}
            onChange={(e) => {
              setconformpassword(e.target.value);
            }}
            required
            autoComplete="off"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(index);
