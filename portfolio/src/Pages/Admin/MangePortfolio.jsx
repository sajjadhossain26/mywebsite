import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAction } from "../../redux/portfolio/action";

const MangePortfolio = () => {
  const { portfolio } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteAction(id));
  };
  return (
    <>
      {" "}
      <div className="manage-portfolio">
        <div className="container">
          <div className="manage-item">
            <div className="">
              <div className="card">
                <h2>All Portfolio</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Photo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map((data, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.category}</td>
                        <td>
                          <img src={`/images/portfolio/${data.image}`} alt="" />
                        </td>
                        <td>
                          <a href="#">
                            <i className="fa fa-eye"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-edit"></i>
                            <i
                              onClick={() => handleDelete(data._id)}
                              className="fa fa-trash"
                            ></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="add-portfolio">
              <Link className="manage-btn" to="/me/portfolio">
                ADD PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangePortfolio;
