import axios from "axios";

export const signInEmail = (credentials) => {
  return (dispatch) => {
    axios
      .post("/auth/signin/email", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          error,
        });
      });
  };
};
