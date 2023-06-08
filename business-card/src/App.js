import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="card-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

root.render(<App />);
