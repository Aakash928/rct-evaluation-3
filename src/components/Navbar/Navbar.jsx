import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      logout();
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <span data-cy="navbar-cart-items-count">
          Cart: {cartItemsCount && `(${cartItemsCount})`}
        </span>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
