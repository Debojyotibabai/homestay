import React, { useState } from "react";

// css
import "../Css/Footer.css";

// component
import FooterLinks from "./FooterLinks";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  const [footerLinks] = useState([
    {
      heading: "ABOUT",
      link1: "Investors",
      link2: "How this work",
      link3: "Made possible by hosts",
      link4: "Careers",
      link5: "Newsroom",
    },
    {
      heading: "COMMUNITY",
      link1: "Diversity and belonging",
      link2: "Accessibility",
      link3: "Fortline stays",
      link4: "Guest refferals",
    },
    {
      heading: "HOST",
      link1: "Host your home",
      link2: "Host your experience",
      link3: "Host your car",
      link4: "Responsible Hosting",
    },
    {
      heading: "SUPPORT",
      link1: "Help center",
      link2: "Cancellation options",
      link3: "Neighbourhood support",
      link4: "Trust and safety",
      link5: "Admin login",
    },
  ]);

  return (
    <div className="footer__section">
      <div className="footer">
        <div className="left__side__footer">
          {footerLinks.map((link, index) => {
            return (
              <FooterLinks
                key={index}
                heading={link.heading}
                link1={link.link1}
                link2={link.link2}
                link3={link.link3}
                link4={link.link4}
                link5={link.link5}
              />
            );
          })}
        </div>
        <div className="right__side__footer" data-aos="zoom-in">
          <h1>Subscribe for newsletter</h1>
          <form>
            <input type="text" placeholder="Email address" />
            <button
              onClick={() => {
                alert("Subscribed");
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p>All rights reserved.</p>
    </div>
  );
};

export default Footer;
