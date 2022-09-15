

import "./App.scss";
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Board from "./components/Board";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="App">


      
      {/* <Navbar/>
      <Home/> */}
      <Header/>
      <Board/>
      <Newsletter/>
    </div>
  );
}

export default App;
