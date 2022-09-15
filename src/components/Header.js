import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "../App.scss";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <Home />
    </div>
  );
}

export default Header;
