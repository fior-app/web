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


  const questionReducer = (state = initState, action) => {

    switch (action.type) {
      case actions.CREATE_QUESTION_START:
        return createQuestionStart(state);
  
      case actions.CREATE_QUESTION_SUCCESS:
        return createQuestionSuccess(state);
  
      case actions.CREATE_QUESTION_FAILED:
        return createQuestionFailure(state);
        
      default:
        return state;
    }
  };
  
  export default questionReducer;