import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <ul className={isOpen ? "nav-list active" : "nav-list"}>
        <li>
          <Link to="Home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="Rooms" smooth={true} duration={500} onClick={closeMenu}>
            Rooms
          </Link>
        </li>
        <li>
          <Link to="Feedback" smooth={true} duration={500} onClick={closeMenu}>
            Feedback
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;

