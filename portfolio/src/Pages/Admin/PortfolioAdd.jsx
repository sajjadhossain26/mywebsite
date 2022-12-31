import React from "react";
import { useState } from "react";
import "./Portfolio.css";
import { useDispatch } from "react-redux";
import { createPortfolio } from "../../redux/portfolio/action.js";
import { Link } from "react-router-dom";
const PortfolioAdd = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    image: [],
    file: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // portfolio photo upload
  const handleInputImage = (e) => {
    setInput((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const data = new FormData();
  data.append("title", input.title);
  data.append("description", input.description);
  data.append("category", input.category);
  data.append("image", input.file);

  const handlePortfolioForm = async (e) => {
    e.preventDefault();
    dispatch(createPortfolio(data, e, setInput));
  };

  return (
    <>
      <div className="add-portfolio">
        <div className="container">
          <div className="portfolio-form">
            <div className="back-portfolio">
              <Link to="/me/portfolio/manage" className="manage-btn">
                Back
              </Link>
            </div>
            <form
              method="POST"
              encType="multipart/form-data"
              onSubmit={handlePortfolioForm}
            >
              <input
                name="title"
                type="text"
                placeholder="title"
                onChange={handleInput}
                value={input.title}
              />
              <input
                name="description"
                type="text"
                placeholder="description"
                onChange={handleInput}
                value={input.description}
              />
              <input
                name="category"
                type="text"
                placeholder="category"
                onChange={handleInput}
                value={input.category}
              />
              <input
                name="image"
                type="file"
                placeholder="image"
                onChange={handleInputImage}
              />
              <button className="submit" type="submit">
                ADD PORTFOLIO
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioAdd;
