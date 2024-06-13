import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#banner">
          <img src="./images/seek-logo.jpg" alt="Logo" />
        </a>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
      <ul className={`navbar-list ${isMobileMenuOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <Link
            to="manifest"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            MANIFEST
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="past-events"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            PAST EVENTS
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="team"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            TEAM
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
