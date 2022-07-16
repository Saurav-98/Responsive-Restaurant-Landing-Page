import React from "react";

import "./Navbar.css";
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";

import { images } from "../../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="app-navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.gericht} alt="gericht-logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#pages">Pages</a>
        </li>
        <li className="p__opensans">
          <a href="#contactus">Contact Us</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">Blog</a>
        </li>
        <li className="p__opensans">
          <a href="#landing">Landing</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#home" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen_links">
        <GiHamburgerMenu
          color="var(--color-golden)"
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiKnifeFork
              className="overlay__close"
              fontSize={27}
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#pages">Pages</a>
              </li>
              <li className="p__opensans">
                <a href="#contactus">Contact Us</a>
              </li>
              <li className="p__opensans">
                <a href="#blog">Blog</a>
              </li>
              <li className="p__opensans">
                <a href="#landing">Landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
