import React from "react";
import arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="blobs">
        <div className="blob blob-blue one"></div>
        <div className="blob blob-blue two"></div>
        <div className="blob blob-blue three"></div>
        <div className="blob blob-blue four"></div>
        <div className="blob blob-blue five"></div>
        <div className="blob blob-blue six"></div>
        <div className="blob blob-blue seven"></div>
        <div className="blob blob-blue eight"></div>
        <div className="blob blob-blue nine"></div>
        <div className="blob blob-dark one"></div>
        <div className="blob blob-dark two"></div>
        <div className="blob blob-dark three"></div>
        <div className="blob blob-dark four"></div>
        <div className="blob blob-dark five"></div>
        <div className="blob blob-dark six"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Matey Studio.</h1>
        <p className="hero-subtitle">
          We develop custom AI solutions for innovative companies.
        </p>
        <div className="hero-btns">
          <a href="" className="btn btn-primary">
            our services
          </a>
          <a href="" className="btn btn-secondary">
            contact us <img src={arrow} alt="" />
          </a>
        </div>
      </div>

      <div className="gradient-overlay"></div>
    </section>
  );
};

export default Hero;
