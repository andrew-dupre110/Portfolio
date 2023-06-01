import React, { useState } from "react";
import { menu } from "../../data/headerMenu.jsx";
import "./header.css";

const Header = (props) => {
  const { executeScroll, activeLink, homeRef, AboutRef, skillsRef } = props;
  const [toggle, setToggle] = useState(false);

  const handleClickedRef = (linkTo) => {
    switch (linkTo) {
      case "#home":
        executeScroll(homeRef);
        break;
      case "#about":
        executeScroll(AboutRef);
        break;
      case "#skills":
        executeScroll(skillsRef);
      default:
        break;
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav_logo">
          Andrew
        </a>

        <div className={`nav_menu ${toggle && "show-menu"}`}>
          <ul className="nav_list grid">
            {menu.map((menuItem) => (
              <React.Fragment key={menuItem.link}>
                <li className="nav_item">
                  <a
                    href={menuItem.link}
                    className={`nav_link ${
                      activeLink == menuItem.link && "active__link"
                    }`}
                    onClick={() => handleClickedRef(menuItem.link)}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
