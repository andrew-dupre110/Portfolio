import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
