import axios from "axios";
import * as actions from "./types";

export const getUserSkills = () => {
  return (dispatch) => fetchUserSkills(dispatch)
};

export const addUserSkills = (skillIds) => {
  return (dispatch) => {
    dispatch({ type: actions.ADD_USER_SKILLS_START });
    Promise.all(
      skillIds.map((skillId) => axios.post("/userskills", { skillId }))
    ).then((res) => {
      dispatch({ type: actions.ADD_USER_SKILLS_SUCCESS, payload: res });
      fetchUserSkills(dispatch)
    }).catch((error) => {
      console.log(error);
      dispatch({ type: actions.ADD_USER_SKILLS_FAILED, payload: error });
    });
  };
};

export const deleteUserSkill = (userSkillId) => {
  return (dispatch) => {
    dispatch({ type: actions.DELETE_USER_SKILLS_START });
    axios.delete("/userskills/" + userSkillId).then((res) => {
      dispatch({ type: actions.DELETE_USER_SKILLS_SUCCESS, payload: res });
      fetchUserSkills(dispatch)
    }).catch((error) => {
      console.log(error);
      dispatch({ type: actions.DELETE_USER_SKILLS_FAILED, payload: error });
    });
  };
};

const fetchUserSkills = (dispatch) => {
  dispatch({ type: actions.GET_USER_SKILLS_START });
  axios
    .get("/userskills")
    .then((res) => {
      dispatch({ type: actions.GET_USER_SKILLS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actions.GET_USER_SKILLS_FAILED, payload: error });
    });
}
