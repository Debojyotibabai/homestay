import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "../Css/Navbar.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  // navbar open value
  const [value, setValue] = useState(false);

  return (
    // navbar
    <div className="navbar">
      {/* logo */}
      <NavLink className="logo" to="/">
        Home<span>Stay</span>
      </NavLink>

      <div className={value ? "links links__active" : "links"}>
        {/* navlinks */}
        <ul>
          <li>
            <NavLink
              activeClassName="active__navlink"
              exact
              to="/"
              className="navlink"
              onClick={() => {
                setValue(!value);
              }}
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
              onClick={() => {
                setValue(!value);
              }}
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
              onClick={() => {
                setValue(!value);
              }}
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
              onClick={() => {
                setValue(!value);
              }}
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
              onClick={() => {
                setValue(!value);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* authentication */}
        <div className="auth">
          <button
            className="signin"
            onClick={() => {
              setValue(!value);
            }}
          >
            Sign in
          </button>
          <button
            className="signup"
            onClick={() => {
              setValue(!value);
            }}
          >
            Sign up
          </button>
        </div>
      </div>

      {/* menu icon */}
      <div
        className="navbar__menu"
        onClick={() => {
          setValue(!value);
        }}
      >
        {value ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;
