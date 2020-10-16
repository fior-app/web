import * as actions from "../actions/types";

const initState = {
  questions: null,
  isLoading: false,
  error: null,
  successMsg: null,
  singleQuestion: {
    question: null,
    loading: false,
    error: null,
  },
  createAnswer: {
    loading: false,
    error: null
  },
  answers: {
    answers: null,
    loading: false,
    error: null
  }
};

const getQuestionsStart = (state) => {
  return { ...state, isLoading: true };
};

const getQuestionsSuccess = (state, questions) => {
  return { ...state, isLoading: true, questions };
};

const getQuestionsFailure = (state, error) => {
  return { ...state, isLoading: true, error };
};
