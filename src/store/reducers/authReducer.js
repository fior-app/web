import * as actions from "../actions/types";

const initState = {
  emailAuth: {
    signingIn: false,
    error: null,
  },
  currentUser: null,
  isRegisterSuccess: false,
};
const signInEmailStart = (state) => {
  return { ...state, emailAuth: { ...state.emailAuth, signingIn: true } };
};

const signInEmailEnd = (state) => {
  return { ...state, emailAuth: { ...state.emailAuth, signingIn: false } };
};

const signInEmailFailed = (state, payload) => {
  return { ...state, emailAuth: { ...state.emailAuth, error: payload } };
};

const signInEmailSuccess = (state) => {
  return { ...state, emailAuth: { ...state.emailAuth, error: null } };
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SIGN_IN_EMAIL_START:
      return signInEmailStart(state);

    case actions.SIGN_IN_EMAIL_END:
      return signInEmailEnd(state);

    case actions.SIGN_IN_EMAIL_SUCCESS:
      return signInEmailSuccess(state);

    case actions.SIGN_IN_EMAIL_FAILED:
      return signInEmailFailed(state, action.payload);

    case "REGISTER_SUCCESS":
      return {
        ...state,
        authError: null,
        isRegisterSuccess: true,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        authError: "Register failed!",
        isRegisterSuccess: false,
      };
    case "CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "CURRENT_USER_ERROR":
      return {
        ...state,
        currentUser: null,
      };
    case "SIGN_OUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
