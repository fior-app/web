import axios from 'axios';
import * as actions from './types';

export const getQuestions = () => (dispatch) => {
  dispatch({ type: actions.GET_QUESTIONS_START });
  axios
    .get('/questions')
    .then((res) => {
      // console.log(res)
      dispatch({
        type: actions.GET_QUESTIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      // console.log(error)
      dispatch({
        type: actions.GET_QUESTIONS_FAILED,
        payload: error,
      });
    });
};
