import React from "react";
import logo from "../assets/logo-ai.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Matey</p>
        </div>
        <nav className="nav">
          <ul className="nav-bar">
            <li>
              <a className="nav-item" href="#home">
                services
              </a>
            </li>
            <li>
              <a className="nav-item" href="#services">
                process
              </a>
            </li>
            <li>
              <a className="nav-item" href="#projects">
                team
              </a>
            </li>
            <li>
              <a className="nav-item" href="#contact">
                pricing
              </a>
            </li>
            <li>
              <a className="nav-item" href="#contact">
                reviews
              </a>
            </li>
            <li>
              <a className="nav-item" href="#contact">
                FAQ
              </a>
            </li>
            <li>
              <a className="nav-item" href="#contact">
                contact
              </a>
            </li>
            <span className="nav-indicator"></span>
          </ul>
        </nav>
        <div className="nav-toggle">&#9776;</div>
      </div>
    </header>
  );
};

export default Navbar;
