import React, { useState } from "react";
import { menu } from "../../data/headerMenu";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
                    className={`nav_link ${menuItem.isActive && "active_link"}`}
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
