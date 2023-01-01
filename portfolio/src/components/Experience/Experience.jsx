import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="container">
        <h1>MY Experience</h1>
        <div className="experience-box">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2>Frontend Development</h2>
            <div className="content">
              <div className="inner">
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>HTML/CSS/SCSS</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>BOOTSTRAP/TAILWIND CSS</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>JAVASCRIPT</h3>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>REDUX</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>REACT</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>WORDPRESS</h3>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="right"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2>Backend Development</h2>
            <div className="content">
              <div className="inner">
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>MONGO DB</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>NODE JS</h3>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>EXPRESS</h3>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>

              <div className="inner">
                <div className="left-item">
                  <div className="icon">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div className="left-text">
                    <h3>MySQL</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
