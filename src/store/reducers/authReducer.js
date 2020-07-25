import * as actions from "../actions/types";

const initState = {
  authState: {
    signingIn: false,
    error: null,
  },
  currentUser: null,
  isRegisterSuccess: false,
  initialSignIn: false,
};
const signInEmailStart = (state) => {
  return { ...state, authState: { ...state.authState, signingIn: true } };
};

const signInEmailEnd = (state) => {
  return { ...state, authState: { ...state.authState, signingIn: false } };
};

const signInEmailFailed = (state, payload) => {
  return { ...state, authState: { ...state.authState, error: payload } };
};

const signInEmailSuccess = (state) => {
  return { ...state, authState: { ...state.authState, error: null } };
};

const googleSignInStart = (state) => {
  return { ...state, authState: { ...state.authState, signingIn: true } };
};

const googleSignInSuccess = (state) => {
  return { ...state, authState: { ...state.authState, signingIn: false } };
};

const initialSignIn = (state) => {
  return { ...state, initialSignIn: true };
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

    case actions.GOOGLE_SIGN_IN_START:
      return googleSignInStart(state);

    case actions.GOOGLE_SIGN_IN_SUCCESS:
      return googleSignInSuccess(state);

    case "INITIAL_SIGNIN":
      return initialSignIn(state);

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
        initialSignIn: false,
      };
    case "CURRENT_USER_ERROR":
      return {
        ...state,
        currentUser: null,
        initialSignIn: false,
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
