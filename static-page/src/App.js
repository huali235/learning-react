import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

root.render(<App />);
