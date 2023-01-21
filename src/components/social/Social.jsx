import React from "react";
import { socialMedias } from "../../data/socialMedias";

const Social = () => {
  return (
    <div className="home_social">
      {socialMedias.map((social, idx) => (
        <a
          key={idx}
          href={social.link}
          className="home_social-icon"
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;