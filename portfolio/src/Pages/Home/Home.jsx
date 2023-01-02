import React from "react";
import "./Home.css";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import heroImage from "../../assets/Images/hero.png";
import { TypeAnimation } from "react-type-animation";
import cv from "../../assets/Images/Sajjadhossain.pdf";
import Lottie from "react-lottie";
import { useRef } from "react";
import hero from "../../assets/Images/hero.json";

const Home = () => {
  const ani = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { skliton } = useSelector((state) => state.portfolio);

  return (
    <>
      <div className="Hero">
        <div className="container">
          <div className="hero-content-wrap">
            <div className="left-content">
              <h1 data-aos="fade-up-right">It's Me Sajjad Hossain</h1>

              <span>
                {
                  <TypeAnimation
                    sequence={[
                      "Mern Stack Developer", // Types 'One'
                      1000, // Waits 1s
                      "Wordpress expert", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      "", // Types 'Three' without deleting 'Two'
                      () => {
                        console.log("Done typing!"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "2em" }}
                  />
                }
              </span>
              <div className="cv">
                <a
                  href={cv}
                  data-aos="zoom-in-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="hero_btn"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="social-icon">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/dev.sajjadhossain"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/developer-sajjad-hossain-208843220/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/developer_sajjad/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/DevSajjadbd" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sajjadhossain26" target="_blank">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-content">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Experience />
      <PortfolioItem />
      <Contact />
    </>
  );
};

export default Home;
