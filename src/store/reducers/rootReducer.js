import { combineReducers } from "redux";
import authReducer from "./authReducer";
import groupsReducer from "./groupsReducer";
import blogReducer from "./blogReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  blog: blogReducer,
  question: questionReducer,
});

export default rootReducer;
