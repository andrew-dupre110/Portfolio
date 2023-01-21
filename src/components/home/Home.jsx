import React from "react";
import "./home.css";
import Social from "../social/Social";
import Data from "./data/Data";
import ScrollDown from "./scroll/ScollDown";

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
