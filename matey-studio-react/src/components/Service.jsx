import React from "react";

const Service = () => {
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
              <div className="card-preview">
                <div className="chat-simulation">
                  <div className="chat">
                    <span>👨🏻‍💻</span>
                    <div className="chat-message">
                      <p>
                        <strong>You</strong> &nbsp; 8:15 AM
                      </p>
                      <p>
                        Shedule a Google meeting with John for 3:45PM
                        tomorrow
                      </p>
                    </div>
                  </div>
                  <div className="chat">
                    <span>AI</span>
                    <div className="chat-message">
                      <p>
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
                  <input
                    type="text"
                    placeholder="Message AI Assistant..."
                  />
                  <button className="send-btn">↑</button>
                </div>
              </div>
              <h3>Chatbot Development</h3>
              <p>
                We develop intelligent chatbots that leverage advanced
                NLP to elevate customer interactions and streamline
                your business processes.
              </p>
            </div>

            <div className="service-card">
              <div className="card-preview">
                <div className="image-simulation">
                  <p>Generating image...</p>
                </div>
                <div className="image-input">
                  <input
                    type="text"
                    placeholder="Generate an image of..."
                  />
                  <button className="generate-btn">Generate</button>
                </div>
              </div>
              <h3>Content Creation</h3>
              <p>
                Our content creation solutions effortlessly generate
                high-quality, engaging content according to your
                brand's guidelines to captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
