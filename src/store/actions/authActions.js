import axios from "axios";
import AxiosConfig from "../../config/axios-config";

// Sign in action
export const signInEmail = (credentials) => {
  return (dispatch) => {
    axios
      .post("/auth/signin/email", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        AxiosConfig.config();
        dispatch({
          type: "LOGIN_SUCCESS",
        });
        userMeFetch(dispatch);
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          error,
        });
      });
  };
};

// Register action
export const registerWithEmailAndPassword = (credentials) => {
  return (dispatch) => {
    axios
      .post("/auth/signup", {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        AxiosConfig.config();
        dispatch({
          type: "REGISTER_SUCCESS",
        });
        userMeFetch(dispatch);
      })
      .catch((error) => {
        dispatch({ type: "REGISTER_ERROR", error });
      });
  };
};

export const userMe = () => {
  return (dispatch) => {
    userMeFetch(dispatch);
  };
};

const userMeFetch = (dispatch) => {
  axios
    .get("/users/me")
    .then((res) => {
      dispatch({
        type: "CURRENT_USER",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "CURRENT_USER_ERROR",
        error,
      });
    });
};
