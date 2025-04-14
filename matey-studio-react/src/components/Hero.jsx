import React, { useState, useRef } from "react";
import arrow from "../assets/arrow.png";
import { animate, motion, useScroll } from "framer-motion";

const Hero = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const btnRef = useRef(null);
  const [hasHovered, setHasHovered] = useState(false);

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = btnRef.current.getBoundingClientRect();

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

  const blobs = [
    {
      className: "blob blob-blue one",
      anim: {
        x: [0, 15, -15, 0],
        y: [0, 10, -10, 0],
        scale: [1, 1.1, 0.95, 1],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-blue two",
      anim: {
        x: [0, 60, -80, 0],
        y: [0, 70, -70, 0],
        scale: [1, 1.05, 0.95, 1],
      },
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-blue three",
      anim: {
        x: [0, 70, -70, 0],
        y: [0, 70, -70, 0],
        scale: [1, 1.15, 0.95, 1],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-blue four",
      anim: {
        x: [0, 70, -80, 0],
        y: [0, 80, -20, 0],
        scale: [1, 1.35, 0.95, 1],
      },
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-blue five",
      anim: {
        x: [0, 40, -50, 0],
        y: [0, 20, -20, 0],
        scale: [1, 1.05, 0.95, 1],
      },
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-dark one",
      anim: {
        x: [0, -30, 80, 0],
        y: [0, -10, 10, 0],
        scale: [1, 0.95, 1.05, 1],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },

    {
      className: "blob blob-dark two",
      anim: {
        x: [0, 70, -70, 0],
        y: [0, -75, 15, 0],
        scale: [0.7, 1.28, 0.92, 0.7],
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-dark three",
      anim: {
        x: [0, 35, -5, 0],
        y: [0, -35, 15, 0],
        scale: [1, 1.08, 0.92, 1],
      },
      transition: {
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-dark four",
      anim: {
        x: [0, 25, -5, 0],
        y: [0, -35, 45, 0],
        scale: [1, 1.08, 0.92, 1],
      },
      transition: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      className: "blob blob-dark five",
      anim: {
        x: [0, 5, -5, 0],
        y: [0, -35, 15, 0],
        scale: [1, 1.58, 0.92, 1],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  ];

  return (
    <section className="hero">
      <div className="blobs">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={blob.className}
            animate={blob.anim}
            transition={blob.transition}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Matey Studio.</h1>
        <p className="hero-subtitle">
          We develop custom AI solutions for innovative companies.
        </p>
        <div className="hero-btns" ref={btnRef}>
          <a
            href=""
            className="btn btn-primary"
            onMouseEnter={handleHover}
            onMouseLeave={() => setIndicatorStyle({ opacity: 0 })}
          >
            our services
          </a>
          <a
            href=""
            className="btn btn-secondary"
            onMouseEnter={handleHover}
            onMouseLeave={() => setIndicatorStyle({ opacity: 0 })}
          >
            contact us <img src={arrow} alt="" />
          </a>
          <span
            className="hero-indicator"
            style={indicatorStyle}
          ></span>
        </div>
      </div>

      <div className="gradient-overlay"></div>
    </section>
  );
};

export default Hero;
