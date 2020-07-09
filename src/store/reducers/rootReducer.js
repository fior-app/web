import { combineReducers } from "redux";
import authReducer from "./authReducer";
import groupsReducer from "./groupsReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  blog: blogReducer,
});

export default rootReducer;
