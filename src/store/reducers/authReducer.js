import * as actions from '../actions/types';

const initState = {
  authState: {
    signingIn: false,
    error: null,
  },
  currentUser: null,
  isRegisterSuccess: false,
  isRegistering: false,
  initialSignIn: false,
};

const signInEmailStart = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: true,
  },
});

const signInEmailEnd = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: false,
  },
});

const signInEmailFailed = (state, payload) => ({
  ...state,
  authState: {
    ...state.authState,
    error: payload,
  },
});

const signInEmailSuccess = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    error: null,
  },
});

const googleSignInStart = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: true,
  },
});

const googleSignInSuccess = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: false,
  },
});

const initialSignIn = (state) => ({
  ...state,
  initialSignIn: true,
});

const linkedinSignInStart = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: true,
  },
});

const linkedinSignInSuccess = (state) => ({
  ...state,
  authState: {
    ...state.authState,
    signingIn: false,
  },
});

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

    case 'INITIAL_SIGNIN':
      return initialSignIn(state);

    case actions.LINKEDIN_SIGN_IN_START:
      return linkedinSignInStart(state);

    case actions.LINKEDIN_SIGN_IN_SUCCESS:
      return linkedinSignInSuccess(state);

    case 'REGISTER_START':
      return {
        ...state,
        authError: null,
        isRegistering: true,
        isRegisterSuccess: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        authError: null,
        isRegistering: false,
        isRegisterSuccess: true,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        authError: 'Register failed!',
        isRegistering: false,
        isRegisterSuccess: false,
      };
    case 'CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        initialSignIn: false,
      };
    case 'CURRENT_USER_ERROR':
      return {
        ...state,
        currentUser: null,
        initialSignIn: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
