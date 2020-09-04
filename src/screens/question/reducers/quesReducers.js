import * as actions from "../actions/types";

const initState = {
    questions: null,
    isLoading: false,
    error: null,
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
      case actions.CREATE_QUESTION_START:
        return createQuestionStart(state);
  
      case actions.CREATE_QUESTION_SUCCESS:
        return createQuestionSuccess(state);
  
      case actions.CREATE_QUESTION_FAILED:
        return createQuestionFailure(state);

        case actions.GET_QUESTIONS_START:
            return getQuestionsStart(state);
      
          case actions.GET_QUESTIONS_SUCCESS:
            return getQuestionsSuccess(state, action.payload);
      
          case actions.GET_QUESTIONS_FAILED:
            return getQuestionsFailure(state, action.payload);

      default:
        return state;
    }
  };
  
  export default questionReducer;