import React from "react";
import "./App.css";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
