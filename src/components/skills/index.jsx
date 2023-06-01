import React, { useRef } from "react";
import "./skills.css";
import { skills } from "../../data/skills";

const index = (props) => {
  const { refProp } = props;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tech stack</span>

      <div ref={refProp} className="skills__container container grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill__wrapper">
            <div className="container flex__container">
              <div className="skill__icon">
                <img src={skill.icon} alt={skill.label} />
              </div>
              <div className="skill_label">{skill.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
