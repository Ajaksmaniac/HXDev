import { projectsReducer } from "./projectsReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  projectsReducer,
});

export default allReducers;
