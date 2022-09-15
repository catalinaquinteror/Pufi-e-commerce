import React from "react";
// import home from "../img/home.jpg";
import "../App.scss";

function Home() {
  return (
    <div className="home">
      <h1>ESTÁR CÓMODO, <br/>NUNCA FUE TAN FÁCIL.</h1>
      {/* <img src={home} alt=""/> */}
      <div className="home-button"><button>SHOP</button></div>
    </div>
  );
}

export default Home;
