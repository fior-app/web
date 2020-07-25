import axios from "axios";
import * as actions from "../actions/types";

export const getQuestions = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_QUESTIONS_START });
    axios
      .get("/questions")
      .then((res) => {
        dispatch({ type: actions.GET_QUESTIONS_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.GET_QUESTIONS_FAILED, payload: error });
      });
  };
};
