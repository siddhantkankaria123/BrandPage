import React, { useState } from "react";
import "./navbar.css";
import brandImage from "../assets/brand_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showNav, setNav] = useState(false);
  function handleHamburger() {
    setNav(!showNav);
  }
  console.log(showNav);
  return (
    <nav className="container">
      <div className="logo">
        <img className="brand-image" src={brandImage} alt="brandImage" />
      </div>
      <ul
        className={
          showNav ? "menu-details mobile-menu-details" : "menu-details"
        }
      >
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="hamburger-menu">
        <a href="#" onClick={handleHamburger}>
          <GiHamburgerMenu />
        </a>
      </div>
      <div className="button-container">
        <button className="login">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
