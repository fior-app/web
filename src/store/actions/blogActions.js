import axios from "axios";
import * as actions from "./types";

export const writeBlog = (post) => {
  return (dispatch) => {
    dispatch({ type: actions.WRITE_POST_START });
    axios
      .post("/posts/", post)
      .then((res) => {
        dispatch({ type: actions.WRITE_POST_SUCCESS });
        dispatch({ type: actions.WRITE_POST_END });
        getPosts()(dispatch);
      })
      .catch((error) => {
        dispatch({ type: actions.WRITE_POST_FAILED, payload: error });
        dispatch({ type: actions.WRITE_POST_END });
      });
  };
};

export const clearWritePost = () => {
  return (dispatch) => {
    dispatch({ type: actions.CLEAR_WRITE_POST });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_POSTS_START });
    axios
      .get("/posts/")
      .then((res) => {
        dispatch({ type: actions.GET_POSTS, payload: res.data });
        dispatch({ type: actions.GET_POSTS_SUCCESS });
        dispatch({ type: actions.GET_POSTS_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_POSTS_FAILED, payload: error });
        dispatch({ type: actions.GET_POSTS_END });
      });
  };
};
