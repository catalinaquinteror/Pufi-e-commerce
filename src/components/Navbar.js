import React from "react";
import pufi from "../img/pufi.svg";
import puff from "../img/puff.svg";
import rain from "../img/rain.svg";
import cart from "../img/cart.svg";
import nap from "../img/nap.svg";
import { Link } from "react-router-dom";
// import "../styles/navbar.scss";
import "../App.scss";

function NavBar() {
  return (
    <nav className="nav-wrapper">
      <div className="navbar-container">
        {/* <Link to="/" className="logo"> */}
        <div className="nav-logo">
          <img src={pufi} alt="" />
        </div>
        {/* </Link> */}

        <div className="nav-buttons">
          <img src={puff} alt="" />
          <img src={rain} alt="" />
          <img src={cart} alt="" />
          <img src={nap} alt="" />
        </div>
        <div className="nav-text">
        <ul>
          <li>PUFI PUFF</li>
          <li>PUFI RAIN</li>
          <li>PUFI CART</li>
          <li>PUFI NAP</li>
        </ul>
        </div>
        <div className="nav-login">
          <p>MI CUENTA ˅ | MI COMPRA</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
