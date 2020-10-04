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

const getSingleQuestionStart = (state) => {
  return {
    ...state, singleQuestion: {
      ...state.singleQuestion,
      loading: true,
    },
  };
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

const getCreateAnswerSuccess = (state, question) => {
  return {
    ...state, 
    createAnswer: {
      ...state.createAnswer,
      isloading: false,
      successMsg: "Answ"
    }
  };
};

const getCreateAnswerFailure = (state, error) => {
  return {
    ...state, createAnswer: {
      ...state.createAnswer,
      isloading: false,
      successMsg: null,
    }
  };
};

const getAnswerStart = (state) => {
  return {
    ...state, answers: {
      ...state.answers,
      loading: true,
    }
  };
};

const getAnswerSuccess = (state, answers) => {
  return {
    ...state,
    answers: {
      ...state.answers,
      loading: false,
      answers: answers
    }
  };
};

const getAnswerFailure = (state, error) => {
  return {
    ...state, answers: {
      ...state.answers,
      loading: false,
      error: error,
    }
  };
};

const createQuestionStart = (state) => {
  return { ...state, isLoading: true, successMsg: null };
};

const createQuestionSuccess = (state) => {
  return { ...state, isLoading: false, successMsg: "Question uploaded successfully!" };
};

const createQuestionFailure = (state) => {
  return { ...state, isLoading: false, successMsg: null };
};


const clearQuestion = (state) => {
  return { ...state, isLoading: false, successMsg: null };
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

    case actions.CREATE_QUESTION_START:
      return createQuestionStart(state);

    case actions.CREATE_QUESTION_SUCCESS:
      return createQuestionSuccess(state);

    case actions.CREATE_QUESTION_FAILED:
      return createQuestionFailure(state);

    case actions.GET_CREATE_ANSWER_START:
      return getCreateAnswerStart(state);

    case actions.GET_CREATE_ANSWER_SUCCESS:
      return getCreateAnswerSuccess(state);

    case actions.GET_CREATE_ANSWER_FAILED:
      return getCreateAnswerFailure(state, action.payload);

    case actions.GET_SINGLE_QUESTION_START:
      return getSingleQuestionStart(state);

    case actions.GET_SINGLE_QUESTION_SUCCESS:
      return getSingleQuestionSuccess(state, action.payload);

    case actions.GET_SINGLE_QUESTION_FAILED:
      return getSingleQuestionFailure(state, action.payload);

    case actions.CREATE_ANSWER_START:
      return getSingleQuestionStart(state);

    case actions.CREATE_ANSWER_SUCCESS:
      return getSingleQuestionSuccess(state);

    case actions.CREATE_ANSWER_FAILED:
      return getSingleQuestionFailure(state, action.payload);

    case actions.CLEAR_CEATE_QESTION_STATE:
      return clearQuestion(state);

    default:
      return state;
  }
};

export default questionReducer;
