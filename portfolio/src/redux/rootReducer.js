import { combineReducers } from "redux";
import portfolioReducer from "./portfolio/portfolioReducer.js";
const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export default rootReducer;
