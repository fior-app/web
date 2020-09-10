import axios from 'axios';
import * as actions from './types';

export const userMeFetch = (dispatch) => {
  axios
    .get('/users/me')
    .then((res) => {
      dispatch({
        type: 'CURRENT_USER',
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'CURRENT_USER_ERROR',
        error,
      });
    });
};

export const updateMe = (name, bio) => (dispatch) => {
  dispatch({ type: actions.UPDATE_ME_START });
  axios
    .put('/users/me', {
      name,
      bio,
    })
    .then(() => {
      dispatch({ type: actions.UPDATE_ME_SUCCESS });
      userMeFetch(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.UPDATE_ME_FAILED,
        payload: error,
      });
    });
};

export const setMentor = (isMentor) => (dispatch) => {
  dispatch({ type: actions.SET_MENTOR_START });
  axios
    .post('/users/me/setMentor', {
      isMentor
    })
    .then(() => {
      dispatch({ type: actions.SET_MENTOR_SUCCESS });
      userMeFetch(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_MENTOR_FAILED,
        payload: error,
      });
    });
};

export const searchMentors = (query, skip = 0, limit = 25) => (dispatch) => {
  dispatch({ type: actions.SEARCH_MENTORS_START });
  axios
    .get('/users/mentors', {
      params: {
        query,
        skip,
        limit
      }
    })
    .then((res) => {
      dispatch({
        type: actions.SEARCH_MENTORS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SEARCH_MENTORS_FAILED,
        payload: error,
      });
    });
};
