import axios from 'axios';
import * as actions from './types';

export const createQuestion = (question,cb) => (dispatch) => {
    dispatch({ type: actions.CREATE_QUESTION_START });
    axios
      .post('/questions', {
        title: question.title,
        description: question.description,
        skills: ['5efb583740b34a17b590e9eb'],
      })
      .then((res) => {
        dispatch({
          type: actions.CREATE_QUESTION_SUCCESS,
          payload: res.data,
        });
        cb();
      })
      .catch((error) => {
        dispatch({
          type: actions.CREATE_QUESTION_FAILED,
          payload: error,
        });
      });
  };
  
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

  export const getQuestion = (questionId) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_SINGLE_QUESTION_START });
      axios 
        .get("/questions/" + questionId)
        .then((res) => {
          dispatch({ type: actions.GET_SINGLE_QUESTION_SUCCESS, payload: res.data });
        })
        .catch((error) => {
          dispatch({ type: actions.GET_SINGLE_QUESTION_FAILED, payload: error });
        });
    };
  };

  export const createAnswer =  (answer,questionId,cb) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_CREATE_ANSWER_START });
      axios
      .post(`/questions/${questionId}/answers`,answer)
      .then((res) => {
        console.log(res)
        getAnswer(questionId)(dispatch);
        dispatch({ type: actions.GET_CREATE_ANSWER_SUCCESS, payload: res.data, });
      })
      .catch((error) => {
          dispatch({ type: actions.GET_CREATE_ANSWER_FAILED, payload: error });
        });
    };
  };

  export const getAnswer = (questionId) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_ANSWER_START });
      axios
        .get(`/questions/${questionId}/answers`)
        .then((res) => {
          dispatch({ type: actions.GET_ANSWER_SUCCESS, payload: res.data });
        })
        .catch((error) => {
          dispatch({ type: actions.GET_ANSWER_FAILED, payload: error });
        });
    };
  };