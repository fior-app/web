import axios from "axios";
import AxiosConfig from "../../config/axios-config";
import * as utils from "../../util/utils";
import * as actions from "../actions/types";

// Sign in action
export const signInEmail = (credentials) => {
  return (dispatch) => {
    dispatch({ type: actions.SIGN_IN_EMAIL_START });
    axios
      .post("/auth/signin/email", credentials)
      .then((res) => {
        utils.setWithExpiry("token", res.data.token);
        AxiosConfig.config();
        dispatch({
          type: actions.SIGN_IN_EMAIL_SUCCESS,
        });
        dispatch({
          type: actions.SIGN_IN_EMAIL_END,
        });
        userMeFetch(dispatch);
      })
      .catch((error) => {
        dispatch({
          type: actions.SIGN_IN_EMAIL_FAILED,
          payload: error.response,
        });
        dispatch({
          type: actions.SIGN_IN_EMAIL_END,
        });
      });
  };
};

// Register action
export const registerWithEmailAndPassword = (user) => {
  return (dispatch) => {
    axios
      .post("/auth/signup", user)
      .then((res) => {
        utils.setWithExpiry("token", res.data.token);
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

export const signInGoogle = (idToken) => {
  return (dispatch) => {
    dispatch({ type: actions.GOOGLE_SIGN_IN_START });
    axios
      .post("/auth/signin/google", { idToken })
      .then((res) => {
        utils.setWithExpiry("token", res.data.token);
        AxiosConfig.config();
        dispatch({ type: actions.GOOGLE_SIGN_IN_SUCCESS });
        userMeFetch(dispatch);
      })
      .catch((error) => console.log(error));
  };
};

export const signInLinkedIn = (code, requestUri) => {
  return (dispatch) => {
    dispatch({ type: actions.LINKEDIN_SIGN_IN_START });
    axios
      .post("/auth/signin/linkedin", { code, requestUri })
      .then((res) => {
        utils.setWithExpiry("token", res.data.token);
        AxiosConfig.config();
        dispatch({ type: actions.LINKEDIN_SIGN_IN_SUCCESS });
        userMeFetch(dispatch);
      })
      .catch((error) => console.log(error));
  };
};

export const userMe = () => {
  return (dispatch) => {
    userMeFetch(dispatch);
  };
};

export const userMeInitial = () => {
  return (dispatch) => {
    dispatch({
      type: "INITIAL_SIGNIN",
    });
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

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "SIGN_OUT" });
    console.log("Signed out");
  };
};
