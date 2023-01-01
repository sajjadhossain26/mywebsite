import React from "react";
import icon from "../../assets/Images/si-1.png";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="content-wrap">
          <div className="left-content">
            <div data-aos="fade-down-left" className="left-content-wrap">
              <p>My Services</p>
              <h1>What I do</h1>

              <p>
                Looking For Professional Web Designer/Developer? You're at the
                Right Place! Hi, I hope you're great! I am a Web Designer and
                Developer. I will do any kind of Website. A complete solution
                for all kind of website services! I can assure you give you
                Creative and High Quality Services to grow your business. I
                always dedicate myself completely to the task for 100% job
                satisfaction. client satisfaction is my first priority. Thank
                you.
              </p>
              <div className="services-btn">
                <a
                  href="https://www.fiverr.com/sajjadhossain26"
                  className="hero_btn about"
                  data-aos="zoom-in-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  HIRE ME
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="right-content"
          >
            <div className="right-content-wrap">
              <div className="icon">
                <i class="fa fa-industry"></i>
              </div>
              <h2>Full Website creation</h2>
              <p>
                I can create any type of website for your business, company,
                e-commerce store, portfolio, blog etc. I provide unique, clean &
                awesome graphical design interface.
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <i class="fa-solid fa-store"></i>
              </div>
              <h2>Online store & shopping</h2>
              <p>
                I can create a fully functional online store with any type of
                payment gateway support and add shopping cart functionality into
                you’re existing website.
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <i class="fa-solid fa-bug"></i>
              </div>
              <h2>Fixing problems</h2>
              <p>
                Website problem & bugs it’s a common problem for every website.
                Don’t worry about bugs and problems. I can fix any type of
                problems & bugs for any website.
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h2>Maintenance & Optimized</h2>
              <p>
                Slow loading website it’s the biggest problem for every website.
                I can boost your website’s speed by optimization your website.
                And if you don’t have time to maintain your website don’t worry
                I’m here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
