import { useSelector } from "react-redux";

const SinglePortfolio = () => {
  const { singlePortfolio } = useSelector((state) => state.portfolio);
  return (
    <>
      <div className="single">
        <div className="container">
          <div className="single-wrap">
            <div className="single-portfolio">
              <h1>{singlePortfolio.title}</h1>
              <img src={`images/portfolio/${singlePortfolio.image}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
