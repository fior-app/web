import axios from "axios";
import * as actions from "../actions/types";

export const updateMe = (name, bio) => {
  return (dispatch) => {
    dispatch({ type: actions.UPDATE_ME_START });
    axios
      .put("/users/me", { name, bio })
      .then(() => {
        dispatch({ type: actions.UPDATE_ME_SUCCESS });
        userMeFetch(dispatch);
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.UPDATE_ME_FAILED, payload: error });
      });
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
