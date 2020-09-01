import axios from 'axios';
import * as actions from './types';

export const getPosts = () => (dispatch) => {
  dispatch({ type: actions.GET_POSTS_START });
  axios
    .get('/posts/')
    .then((res) => {
      dispatch({
        type: actions.GET_POSTS,
        payload: res.data,
      });
      dispatch({ type: actions.GET_POSTS_SUCCESS });
      dispatch({ type: actions.GET_POSTS_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_POSTS_FAILED,
        payload: error,
      });
      dispatch({ type: actions.GET_POSTS_END });
    });
};

export const initiateCreatingBlogPost = () => (dispatch) => {
  dispatch({ type: actions.CREATE_BLOG_POST_INITIATING });
};

export const createBlogPost = (post) => (dispatch) => {
  dispatch({ type: actions.CREATE_BLOG_POST_START });
  axios
    .post('/posts/', post)
    .then(() => {
      dispatch({ type: actions.CREATE_BLOG_POST_SUCCESS });
      getPosts()(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.CREATE_BLOG_POST_FAILED,
        payload: error,
      });
    });
};
