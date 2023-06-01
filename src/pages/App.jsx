import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import useIsInViewport from "../utils/intersectionObserver.js";
import About from "../components/about/About.jsx";
import Header from "../components/header/Header.jsx";
import Home from "../components/home/Home.jsx";
import Skills from "../components/skills";

function App() {
  const [activeLink, setActiveLink] = useState("#home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const executeScroll = (ref) => {
    setActiveLink(`#${ref.current.id}`);
    ref.current.scrollIntoView();
  };

  const homeIntersecting = useIsInViewport(homeRef);
  const aboutIntersecting = useIsInViewport(aboutRef);
  const skillsIntersecting = useIsInViewport(skillsRef);

  useEffect(() => {
    if (homeIntersecting) {
      setActiveLink("#home");
    }
    if (aboutIntersecting) {
      setActiveLink("#about");
    }
    if (skillsIntersecting) {
      setActiveLink("#skills");
    }
  }, [homeIntersecting, aboutIntersecting]);

  return (
    <div>
      <Header
        executeScroll={executeScroll}
        activeLink={activeLink}
        homeRef={homeRef}
        AboutRef={aboutRef}
        skillsRef={skillsRef}
      />
      <main className="main">
        <Home refProp={homeRef} />
        <About refProp={aboutRef} />
        <Skills refProp={skillsRef} />
      </main>
    </div>
  );
}

export default App;
