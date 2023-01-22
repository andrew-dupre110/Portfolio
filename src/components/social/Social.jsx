import React from "react";
import { socialMedias } from "../../data/socialMedias.jsx";

const Social = () => {
  return (
    <div className="home_social">
      {socialMedias.map((social, idx) => (
        <a
          key={idx}
          href={social.link}
          className={`home_social-icon ${social.label}`}
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
