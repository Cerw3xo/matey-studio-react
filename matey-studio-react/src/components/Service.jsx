import React from "react";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";

const Service = () => {
  const particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <section className="about-us">
        <div className="container">
          <h2>
            We're Halo. We develop custom AI solutions for innovative
            companies.
          </h2>
          <button className="btn">
            {" "}
            <span className="btn-text"> Get in touch</span>
          </button>
        </div>
        <span className="background-text">Halo</span>
      </section>

      <section className="what-we-do">
        <h2 className="service-heading">What we do</h2>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="glow"></div>
              <div className="card-preview">
                <div className="chat-simulation">
                  <div className="chat">
                    <span>👨🏻‍💻</span>
                    <div className="chat-message">
                      <p className="chat-author">
                        <strong>You</strong> &nbsp; 8:15 AM
                      </p>
                      <p>
                        Shedule a Google meeting with John for 3:45PM
                        tomorrow!
                      </p>
                    </div>
                  </div>
                  <div className="chat">
                    <span className="chat-ai">AI</span>
                    <div className="chat-message">
                      <p className="chat-author">
                        <strong>AI Assistant</strong> &nbsp; 8:15 AM
                      </p>
                      <p>
                        I've successfully scheduled a Google meeting
                        with John for 3:45PM tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat-input">
                  <span>+</span>
                  <p>Message AI Assistant...</p>
                  <div className="input-arrow">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="card-heading">
                <h3>Chatbot Development</h3>
                <p>
                  We develop intelligent chatbots that leverage
                  advanced NLP to elevate customer interactions and
                  streamline your business processes.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="glow"></div>
              <div className="card-preview">
                <div className="image-simulation">
                  {particles.map((part, i) => (
                    <motion.div key={i} className="particles" />
                  ))}
                  <p>Generating image...</p>
                </div>
                <div className="image-input">
                  <p>Generate an image of..</p>
                  <button className="generate-btn">Generate</button>
                </div>
              </div>
              <div className="card-heading">
                <h3>Content Creation</h3>
                <p>
                  Our content creation solutions effortlessly generate
                  high-quality, engaging content according to your
                  brand's guidelines to captivate your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-detail">
          <div className="card">
            <div className="glow"></div>
            <div className="card-effect"></div>
            <h3 className="card-title">Workflow Automations</h3>
            <p className="card-desc">
              We automate your workflows to streamline repetitive
              tasks, enhance efficiency, save time, and eliminate
              errors.{" "}
            </p>
          </div>
          <div className="card">
            <div className="glow"></div>
            <div className="card-effect"></div>
            <h3 className="card-title">LLM Development</h3>
            <p className="card-desc">
              We develop Large Language Models that transform how your
              company interacts with data and customers.
            </p>
          </div>
          <div className="card">
            <div className="glow"></div>
            <div className="card-effect"></div>
            <h3 className="card-title">AI Consulting</h3>
            <p className="card-desc">
              Our experts provide strategic guidance, enabling your
              business to implement AI solutions that drive
              transformative growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
