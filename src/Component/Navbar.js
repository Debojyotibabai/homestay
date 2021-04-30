import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* logo */}
      <NavLink className="logo" to="/">
        Home<span>Stay</span>
      </NavLink>

      {/* navlinks */}
      <ul>
        <li>
          <NavLink
            activeClassName="active__navlink"
            exact
            to="/"
            className="navlink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active__navlink"
            exact
            to="/about"
            className="navlink"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active__navlink"
            exact
            to="/hotels"
            className="navlink"
          >
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active__navlink"
            exact
            to="/cars"
            className="navlink"
          >
            Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active__navlink"
            exact
            to="/contact"
            className="navlink"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* authentication */}
      <div>
        <button className="signin">Sign in</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
