import * as actions from '../actions/types';

const initState = {
  userSkills: [],
  isLoading: false,
  error: null,
};

const getUserSkillsStart = (state) => ({
  ...state,
  isLoading: true,
});

const getUserSkillsSuccess = (state, userSkills) => ({
  ...state,
  isLoading: true,
  userSkills,
});

const getUserSkillsFailure = (state, error) => ({
  ...state,
  isLoading: true,
  error,
});

const addUserSkillsStart = (state) => ({
  ...state,
  isLoading: true,
});

const addUserSkillsSuccess = (state) => ({
  ...state,
  isLoading: false,
});

const addUserSkillsFailure = (state) => ({
  ...state,
  isLoading: false,
});

const deleteUserSkillsStart = (state) => ({
  ...state,
  isLoading: true,
});

const deleteUserSkillsSuccess = (state) => ({
  ...state,
  isLoading: false,
});

const deleteUserSkillsFailure = (state) => ({
  ...state,
  isLoading: false,
});

const skillReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_USER_SKILLS_START:
      return getUserSkillsStart(state);

    case actions.GET_USER_SKILLS_SUCCESS:
      return getUserSkillsSuccess(state, action.payload);

    case actions.GET_USER_SKILLS_FAILED:
      return getUserSkillsFailure(state, action.payload);

    case actions.ADD_USER_SKILLS_START:
      return addUserSkillsStart(state);

    case actions.ADD_USER_SKILLS_SUCCESS:
      return addUserSkillsSuccess(state);

    case actions.ADD_USER_SKILLS_FAILED:
      return addUserSkillsFailure(state);

    case actions.DELETE_USER_SKILLS_START:
      return deleteUserSkillsStart(state);

    case actions.DELETE_USER_SKILLS_SUCCESS:
      return deleteUserSkillsSuccess(state);

    case actions.DELETE_USER_SKILLS_FAILED:
      return deleteUserSkillsFailure(state);

    default:
      return state;
  }
};

export default skillReducer;
