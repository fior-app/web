import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import groupsReducer from './groupsReducer';
import blogReducer from './blogReducer';
import questionReducer from './questionReducer';
import skillReducer from './skillReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  groups: groupsReducer,
  blog: blogReducer,
  question: questionReducer,
  skills: skillReducer,
});

export default rootReducer;
