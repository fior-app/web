const initState = {
  authError: null,
  currentUser: null,
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
    default:
      return state;
  }
};

export default authReducer;
