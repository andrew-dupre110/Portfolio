import React from "react";
import "./home.css";
import Social from "../social/Social.jsx";
import Data from "./data/Data.jsx";
import ScrollDown from "./scroll/ScollDown.jsx";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
