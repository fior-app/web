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

const getSingleQuestionSuccess = (state, question) => {
    return {
      ...state, singleQuestion: {
        ...state.singleQuestion,
        loading: false,
        question: question,
      },
    };
  };
  
  const getSingleQuestionFailure = (state, error) => {
    return {
      ...state, singleQuestion: {
        ...state.singleQuestion,
        loading: false,
        error: error,
      }
    };
  };
  
  const getCreateAnswerStart = (state) => {
    return {
      ...state, createAnswer: {
        ...state.createAnswer,
        isloading: true,
        successMsg: null
      }
    };
  };

  const questionReducer = (state = initState, action) => {

    switch (action.type) {
      case actions.GET_ANSWER_START:
        return getAnswerStart(state);
  
      case actions.GET_ANSWER_SUCCESS:
        return getAnswerSuccess(state, action.payload);
  
      case actions.GET_ANSWER_FAILED:
        return getAnswerFailure(state, action.payload);
  
      case actions.GET_QUESTIONS_START:
        return getQuestionsStart(state);
  
      case actions.GET_QUESTIONS_SUCCESS:
        return getQuestionsSuccess(state, action.payload);
  
      case actions.GET_QUESTIONS_FAILED:
        return getQuestionsFailure(state, action.payload);
  
      case actions.GET_SINGLE_QUESTION_START:
        return getSingleQuestionStart(state);
  
      case actions.GET_SINGLE_QUESTION_SUCCESS:
        return getSingleQuestionSuccess(state, action.payload);
  
      case actions.GET_SINGLE_QUESTION_FAILED:
        return getSingleQuestionFailure(state, action.payload);
  
  
      default:
        return state;
    }
  };
  
  export default questionReducer;
  