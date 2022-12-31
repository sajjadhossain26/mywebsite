import React from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.png";
import mon from "../../assets/Images/mon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import sun from "../../assets/Images/sun.png";
import Mmenu from "../../assets/Images/menu.png";
import Closemenu from "../../assets/Images/close-menu.png";

const Header = () => {
  const [theme, setTheme] = useState(sun);
  const [menu, setMenu] = useState(Mmenu);

  const themes = (e) => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      setTheme(mon);
    } else {
      setTheme(sun);
    }
  };

  const handleMenu = (e) => {
    let checkMenu = document.querySelector(".ul-menu");
    checkMenu.classList.toggle("add");
    if (checkMenu.classList.contains("add")) {
      setMenu(Closemenu);
    } else {
      setMenu(Mmenu);
    }
  };

  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="header-wrap">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="menu">
              <ul className="ul-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  {theme === mon ? (
                    <i onClick={themes} class="fas fa-sun"></i>
                  ) : (
                    <i onClick={themes} class="fas fa-moon"></i>
                  )}
                </li>
              </ul>
              <img id="mobile-menu" onClick={handleMenu} src={menu} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
