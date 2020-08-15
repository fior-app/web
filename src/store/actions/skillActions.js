import axios from 'axios';
import * as actions from './types';

const fetchUserSkills = (dispatch) => {
  dispatch({ type: actions.GET_USER_SKILLS_START });
  axios
    .get('/userskills')
    .then((res) => {
      dispatch({
        type: actions.GET_USER_SKILLS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_USER_SKILLS_FAILED,
        payload: error,
      });
    });
};

export const getUserSkills = () => (dispatch) => fetchUserSkills(dispatch);

export const addUserSkills = (skillIds) => (dispatch) => {
  dispatch({ type: actions.ADD_USER_SKILLS_START });
  Promise.all(
    skillIds.map((skillId) => axios.post('/userskills', { skillId })),
  )
    .then((res) => {
      dispatch({
        type: actions.ADD_USER_SKILLS_SUCCESS,
        payload: res,
      });
      fetchUserSkills(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.ADD_USER_SKILLS_FAILED,
        payload: error,
      });
    });
};

export const deleteUserSkill = (userSkillId) => (dispatch) => {
  dispatch({ type: actions.DELETE_USER_SKILLS_START });
  axios.delete(`/userskills/${userSkillId}`)
    .then((res) => {
      dispatch({
        type: actions.DELETE_USER_SKILLS_SUCCESS,
        payload: res,
      });
      fetchUserSkills(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.DELETE_USER_SKILLS_FAILED,
        payload: error,
      });
    });
};
