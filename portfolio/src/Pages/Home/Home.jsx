import React from "react";
import "./Home.css";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";

const Home = () => {
  const { skliton } = useSelector((state) => state.portfolio);
  return (
    <>
      <div className="Hero">
        <div className="container">
          <div className="content">
            <h1 data-aos="fade-up-right">
              Hi, I am a full stack web developer
            </h1>
            <p data-aos="fade-up-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              commodi molestiae consequuntur, deleniti voluptas iusto nihil eos
              sunt nesciunt, voluptatibus deserunt delectus dolores iure, dicta
              beatae? Ullam beatae ab odit perspiciatis cupiditate corporis quod
              quasi voluptatem cumque adipisci eum maxime
            </p>
            <button
              data-aos="zoom-in-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="hero_btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Services />

      <PortfolioItem />

      <Contact />
    </>
  );
};

export default Home;
