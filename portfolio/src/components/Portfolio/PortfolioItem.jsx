import React from "react";
import "./Portfolio.css";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePortfolio } from "../../redux/portfolio/action";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PortfolioItem = () => {
  const { portfolio, skliton } = useSelector((state) => state.portfolio);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSingleShow = (id) => {
    dispatch(getSinglePortfolio(id));
    navigate("/single-portfolio");
  };
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="portfolio-wrap">
            <h1>Portfolio</h1>
            <div className="portfolio-img" data-aos="fade-up">
              {skliton && (
                <>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                  <div className="portfolio-item">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={300} />
                    </SkeletonTheme>
                  </div>
                </>
              )}
              {portfolio.map((data) => (
                <div className="portfolio-item">
                  <img
                    onClick={() => handleSingleShow(data._id)}
                    src={`images/portfolio/${data.image}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
