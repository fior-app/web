const initState = {
  authError: null,
  currentUser: null,
  isRegisterSuccess: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed!",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
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
