import axios from "axios";
import swal from "sweetalert";

import {
  PORTFOLIO_ADDED,
  PORTFOLIO_DELETE,
  PORTFOLIO_EDIT,
  PORTFOLIO_FAILED,
  PORTFOLIO_REQUEST,
  PORTFOLIO_SUCCESS,
  SINGLE_PORTFOLIO,
} from "./actionTypes";

export const createPortfolio = (data, e, setInput) => async (dispatch) => {
  try {
    await axios
      .post("/api/me/", data)
      .then((res) => {
        dispatch({
          type: PORTFOLIO_ADDED,
          payload: res.data.portfolio,
        });
        e.target.reset();
        setInput({
          title: "",
          description: "",
          category: "",
          image: "",
        });
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .catch((error) => {
        dispatch({
          type: PORTFOLIO_FAILED,
          payload: error.message,
        });
        swal({
          title: "failed!",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
      });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAILED,
      payload: error.message,
    });
    swal({
      title: "failed!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
  }
};

// all portfolio
export const allPortfolio = () => async (dispatch) => {
  try {
    dispatch({
      type: PORTFOLIO_REQUEST,
    });
    setInterval(() => {
      axios
        .get("/api/me")
        .then((res) => {
          dispatch({
            type: PORTFOLIO_SUCCESS,
            payload: res.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: PORTFOLIO_FAILED,
            payload: error.message,
          });
        });
    }, 3000);
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAILED,
      payload: error.message,
    });
  }
};

// single product
export const getSinglePortfolio = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_PORTFOLIO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAILED,
      payload: error.message,
    });
    swal("Error", "product added failed", "error");
  }
};

// delete product
export const editAction = (id) => async (dispatch) => {
  try {
    await axios.put(`/api/me/${id}`);
    dispatch({
      type: PORTFOLIO_EDIT,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAILED,
      payload: error.message,
    });
    swal("Error", "product delete failed", "error");
  }
};

// delete product
export const deleteAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/me/${id}`);
    dispatch({
      type: PORTFOLIO_DELETE,
      payload: id,
    });
    swal("Success", "product delete Success", "success");
  } catch (error) {
    dispatch({
      type: PORTFOLIO_FAILED,
      payload: error.message,
    });
    swal("Error", "product delete failed", "error");
  }
};
