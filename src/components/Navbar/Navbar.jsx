import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
          <img src={images.logo} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">HOME</a>
        </li>
        <li className="p__opensans">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">MENU</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">GALLERY</a>
        </li>
      </ul>
      <div className="app__navbar-order">
        <a href="#order">ORDER</a>
      </div>
      <div className="app__navbar-smallscreen">
        <RxHamburgerMenu
          className="vertical__menu"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RxHamburgerMenu
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">HOME</a>
              </li>
              <li className="p__opensans">
                <a href="#about">ABOUT</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">MENU</a>
              </li>
              <li className="p__opensans">
                <a href="#gallery">GALLERY</a>
              </li>
              <li className="p__opensans">
                <a href="#order">ORDER</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
