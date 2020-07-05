import { combineReducers } from "redux";
import authReducer from "./authReducer";
import groupsReducer from "./groupsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
});

export default rootReducer;
