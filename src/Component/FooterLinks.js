import React from "react";

// css
import "../Css/FooterLinks.css";

const FooterLinks = (props) => {
  return (
    <ul className="footer__links">
      <h1>{props.heading}</h1>
      <li>
        <p>{props.link1}</p>
      </li>
      <li>
        <p>{props.link2}</p>
      </li>
      <li>
        <p>{props.link3}</p>
      </li>
      <li>
        <p>{props.link4}</p>
      </li>
      <li>
        <p>{props.link5}</p>
      </li>
    </ul>
  );
};

export default FooterLinks;
