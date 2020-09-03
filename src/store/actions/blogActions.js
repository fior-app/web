import axios from 'axios';
import * as actions from './types';

export const getPosts = () => (dispatch) => {
  dispatch({ type: actions.GET_POSTS_START });
  axios
    .get('/posts/')
    .then((res) => {
      dispatch({
        type: actions.GET_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_POSTS_FAILED,
        payload: error,
      });
    });
};

export const getMyPosts = () => (dispatch) => {
  dispatch({ type: actions.GET_MY_POSTS_START });
  axios
    .get('/posts/me')
    .then((res) => {
      dispatch({
        type: actions.GET_MY_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_MY_POSTS_FAILED,
        payload: error,
      });
    });
};

export const getPost = (postId) => (dispatch) => {
  dispatch({ type: actions.GET_POST_START });
  axios
    .get(`/posts/${postId}`)
    .then((res) => {
      dispatch({
        type: actions.GET_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_POST_FAILED,
        payload: error,
      });
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

export const initiateUpdatingBlogPost = (postId) => (dispatch) => {
  dispatch({ type: actions.UPDATE_BLOG_POST_INITIATING_START });
  axios
    .get(`/posts/${postId}`)
    .then((res) => {
      dispatch({
        type: actions.UPDATE_BLOG_POST_INITIATING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.UPDATE_BLOG_POST_INITIATING_FAILED,
        payload: error,
      });
    });
};

export const updateBlogPost = (postId, post) => (dispatch) => {
  dispatch({ type: actions.UPDATE_BLOG_POST_START });
  axios
    .patch(`/posts/${postId}`, post)
    .then(() => {
      dispatch({ type: actions.UPDATE_BLOG_POST_SUCCESS });
      getPosts()(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.UPDATE_BLOG_POST_FAILED,
        payload: error,
      });
    });
};

export const initiateDeleteBlogPost = () => (dispatch) => {
  dispatch({ type: actions.DELETE_BLOG_POST_INITIATING });
};

export const deleteBlogPost = (postId) => (dispatch) => {
  dispatch({ type: actions.DELETE_BLOG_POST_START });
  axios
    .delete(`/posts/${postId}`)
    .then(() => {
      dispatch({ type: actions.DELETE_BLOG_POST_SUCCESS });
      getPosts()(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.DELETE_BLOG_POST_FAILED,
        payload: error,
      });
    });
};
