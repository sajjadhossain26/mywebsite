import {
  PORTFOLIO_ADDED,
  PORTFOLIO_DELETE,
  PORTFOLIO_EDIT,
  PORTFOLIO_FAILED,
  PORTFOLIO_REQUEST,
  PORTFOLIO_SUCCESS,
  SINGLE_PORTFOLIO,
} from "./actionTypes.js";
import initialState from "./initialState.js";

const portfolioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PORTFOLIO_REQUEST:
      return {
        ...state,
        skliton: true,
      };

    case PORTFOLIO_SUCCESS:
      return {
        ...state,
        skliton: false,
        portfolio: payload,
      };

    case PORTFOLIO_FAILED:
      return {
        ...state,
        skliton: false,
        error: payload,
      };

    case SINGLE_PORTFOLIO:
      return {
        ...state,
        singlePortfolio: state.portfolio.find((data) => data._id === payload),
      };

    case PORTFOLIO_EDIT:
      return {
        ...state,
        singlePortfolio: state.portfolio.find((data) => data._id === payload),
      };

    case PORTFOLIO_DELETE:
      return {
        ...state,
        portfolio: state.portfolio.filter((data) => data._id !== payload),
      };

    case PORTFOLIO_ADDED:
      return {
        ...state,
        portfolio: [...state.portfolio, payload],
      };

    default:
      return state;
  }
};

export default portfolioReducer;
