import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginDetails,setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
   setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.email && loginDetails.password) {
      login(loginDetails.email, loginDetails.password);
    }
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginDetails.email}
          onChange={handleOnChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginDetails.password}
          onChange={handleOnChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
