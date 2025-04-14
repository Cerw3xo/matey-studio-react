import React from "react";
import logo from "../assets/logo-ai.png";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const [hasHovered, setHasHovered] = useState(false);

  const handleHover = (e) => {
    const rect = e.currentTarget
      .querySelector(".nav-item")
      ?.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    const newStyle = {
      width: `${rect.width}px`,
      left: `${rect.left - parentRect.left}px`,
      opacity: 1,
    };

    if (!hasHovered) {
      newStyle.transition = "none";
      setHasHovered(true);
    }
    setIndicatorStyle(newStyle);
  };

  return (
    <header className="header">
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Matey</p>
        </div>
        <nav className="nav">
          <ul className="nav-bar" ref={navRef}>
            {[
              "services",
              "process",
              "team",
              "pricing",
              "reviews",
              "FAQ",
              "contact",
            ].map((item, index) => (
              <li
                key={index}
                onMouseEnter={handleHover}
                onMouseLeave={() => setIndicatorStyle({ opacity: 0 })}
              >
                <a className="nav-item" href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
            <span
              className="nav-indicator"
              style={indicatorStyle}
            ></span>
          </ul>
        </nav>
        <div className="nav-toggle">&#9776;</div>
      </div>
    </header>
  );
};

export default Navbar;
