import * as actions from "../actions/types";

const initState = {
  questions: null,
  isLoading: false,
  error: null,
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

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_QUESTIONS_START:
      return getQuestionsStart(state);

    case actions.GET_QUESTIONS_SUCCESS:
      console.log(action.payload);
      return getQuestionsSuccess(state, action.payload);

    case actions.GET_QUESTIONS_FAILED:
      return getQuestionsFailure(state, action.payload);

    default:
      return state;
  }
};

export default questionReducer;
