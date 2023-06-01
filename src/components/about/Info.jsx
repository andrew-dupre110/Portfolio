import React from "react";

const Info = () => {
  const PROJECT_COUNT = 1;
  const STARTING_DATE = new Date("2022-07-01");

  const year_of_experience = () => {
    const DATE_TO = new Date();

    return (
      DATE_TO.getMonth() -
      STARTING_DATE.getMonth() +
      12 * (DATE_TO.getFullYear() - STARTING_DATE.getFullYear())
    );
  };

  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="uil uil-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtile">
            {year_of_experience()} Months Working
          </span>
        </div>

        <div className="about__box ">
          <i className="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtile">{PROJECT_COUNT} + Projects</span>
        </div>

        <div className="about__box">
          <i className="uil uil-band-aid about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtile">Online 24/7</span>
        </div>
      </div>
    </>
  );
};

export default Info;
