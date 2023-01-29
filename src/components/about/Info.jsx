import React from "react";

const Info = () => {
  const PROJECT_COUNT = 1;

  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i class="uil uil-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtile">6 Months Working</span>
        </div>

        <div className="about__box ">
          <i class="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtile">{PROJECT_COUNT} + Projects</span>
        </div>

        <div className="about__box">
          <i class="uil uil-band-aid about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtile">Online 24/7</span>
        </div>
      </div>
    </>
  );
};

export default Info;
