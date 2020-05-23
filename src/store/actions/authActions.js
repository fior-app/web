import axios from "axios";
import AxiosConfig from "../../config/axios-config";

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

        axios
          .get("/users/me")
          .then((res) => {
            dispatch({
              type: "CURRENT_USER",
              payload: res.data,
            });
          })
          .catch((error) => {
            dispatch({
              type: "CURRENT_USER_ERROR",
              error,
            });
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

export const userMe = () => {
  return (dispatch) => {
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
};
