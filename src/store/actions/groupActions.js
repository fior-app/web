import * as actions from "./types";
import axios from "axios";

export const getGroupsMe = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_MY_GROUPS_START });
    axios
      .get("/groups/me")
      .then((res) => {
        dispatch({ type: actions.GET_MY_GROUPS, payload: res.data });
        dispatch({ type: actions.GET_MY_GROUPS_SUCCESS });
        dispatch({ type: actions.GET_MY_GROUPS_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_MY_GROUPS_FAILED, payload: error });
        dispatch({ type: actions.GET_MY_GROUPS_END });
      });
  };
};

export const createGroup = (group) => {
  return (dispatch) => {
    dispatch({ type: actions.CREATE_GROUP_START });
    axios
      .post("/groups/", group)
      .then((res) => {
        dispatch({ type: actions.CREATE_GROUP_SUCCESS });
        dispatch({ type: actions.CREATE_GROUP_END });
        getGroupsMe()(dispatch);
      })
      .catch((error) => {
        dispatch({ type: actions.CREATE_GROUP_FAILED, payload: error });
        dispatch({ type: actions.CREATE_GROUP_END });
      });
  };
};
