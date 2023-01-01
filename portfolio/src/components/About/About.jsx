import React from "react";
import "./About.css";
import aboutImg from "../../assets/Images/devsajjad.jpg";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="about-wrap">
            <div className="about-left">
              <img src={aboutImg} alt="" />
            </div>
            <div
              className="about-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p>GET TO KNOW</p>
              <h1>About me</h1>
              <div className="about-box-wrap">
                <div className="about-box" data-aos="fade-up">
                  <i class="fas fa-award"></i>
                  <h3>Experience</h3>
                  <p>3+ Years working</p>
                </div>
                <div className="about-box" data-aos="fade-down">
                  <i class="fa-sharp fa-solid fa-users"></i>
                  <h3>Clients</h3>
                  <p>50+ Worldwide</p>
                </div>
                <div className="about-box" data-aos="fade-up">
                  <i class="fa-solid fa-briefcase"></i>
                  <h3>Projects</h3>
                  <p>120+ Completed</p>
                </div>
              </div>
              <div
                className="about-content"
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <p>
                  I’m Sajjad Hossain Passionate at web development. I’m working
                  minimum of 14-15 hours every day, I love to do this it’s my
                  life-everything. My goal is to satisfy clients, try to
                  understand what they want for there website, help them from
                  beginning to end the project and give support for every
                  problem. If need I communicate by video or audio conversations
                  to understand the problems and project requirements. After
                  completing website and projects I give instructions, How they
                  can manage, edit, update, add page and post on the website by
                  themselves. if needed I send video tutorials.
                </p>
              </div>
              <a
                href="https://www.fiverr.com/sajjadhossain26"
                className="hero_btn about"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
