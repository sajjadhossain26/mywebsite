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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                hic cum deserunt quas, cupiditate aspernatur doloribus magnam
                fuga necessitatibus consequatur!
              </p>
              <button
                className="hero_btn"
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                view all services
              </button>
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
                <img src={icon} alt="" />
              </div>
              <h1>Full Website creation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                nobis quasi corporis quisquam deleniti officiis culpa voluptates
                accusantium corrupti necessitatibus?
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h1>Full Website creation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                nobis quasi corporis quisquam deleniti officiis culpa voluptates
                accusantium corrupti necessitatibus?
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h1>Full Website creation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                nobis quasi corporis quisquam deleniti officiis culpa voluptates
                accusantium corrupti necessitatibus?
              </p>
            </div>
            <div className="right-content-wrap">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h1>Full Website creation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                nobis quasi corporis quisquam deleniti officiis culpa voluptates
                accusantium corrupti necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
