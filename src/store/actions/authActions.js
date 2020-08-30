import axios from 'axios';
import AxiosConfig from '../../config/axios-config';
import * as utils from '../../util/utils';
import * as actions from './types';
import { userMeFetch } from './userActions';

// Sign in action
export const signInEmail = (credentials) => (dispatch) => {
  dispatch({ type: actions.SIGN_IN_EMAIL_START });
  axios
    .post('/auth/signin/email', credentials)
    .then((res) => {
      utils.setWithExpiry('token', res.data.token);
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

// Register action
export const registerWithEmailAndPassword = (user) => (dispatch) => {
  dispatch({ type: 'REGISTER_START' });
  axios
    .post('/auth/signup', user)
    .then((res) => {
      utils.setWithExpiry('token', res.data.token);
      AxiosConfig.config();
      dispatch({
        type: 'REGISTER_SUCCESS',
      });
      userMeFetch(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: 'REGISTER_ERROR',
        error,
      });
    });
};

export const signInGoogle = (idToken) => (dispatch) => {
  dispatch({ type: actions.GOOGLE_SIGN_IN_START });
  axios
    .post('/auth/signin/google', { idToken })
    .then((res) => {
      utils.setWithExpiry('token', res.data.token);
      AxiosConfig.config();
      dispatch({ type: actions.GOOGLE_SIGN_IN_SUCCESS });
      userMeFetch(dispatch);
    })
    .catch(() => {
      // TODO - Handle error
    });
};

export const signInLinkedIn = (code, requestUri) => (dispatch) => {
  dispatch({ type: actions.LINKEDIN_SIGN_IN_START });
  axios
    .post('/auth/signin/linkedin', {
      code,
      requestUri,
    })
    .then((res) => {
      utils.setWithExpiry('token', res.data.token);
      AxiosConfig.config();
      dispatch({ type: actions.LINKEDIN_SIGN_IN_SUCCESS });
      userMeFetch(dispatch);
    })
    .catch(() => {
      // TODO - Handle error
    });
};

export const userMe = () => (dispatch) => {
  userMeFetch(dispatch);
};

export const userMeInitial = () => (dispatch) => {
  dispatch({
    type: 'INITIAL_SIGNIN',
  });
  userMeFetch(dispatch);
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'SIGN_OUT' });
};
