import * as actions from '../actions/types';

const initState = {
  skills: {
    loading: false,
    error: null,
    items: [],
  },
  userSkills: {
    loading: false,
    error: null,
    items: [],
  },
};

const getSkillsStart = (state) => ({
  ...state,
  skills: {
    ...state.skills,
    loading: true,
  },
});

const getSkillsSuccess = (state, skills) => ({
  ...state,
  skills: {
    ...state.skills,
    loading: false,
    items: skills,
  },
});

const getSkillsFailure = (state, error) => ({
  ...state,
  skills: {
    ...state.skills,
    loading: false,
    error,
  },
});

const getUserSkillsStart = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: true,
  },
});

const getUserSkillsSuccess = (state, userSkills) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
    items: userSkills,
  },
});

const getUserSkillsFailure = (state, error) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
    error,
  },
});

const addUserSkillsStart = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: true,
  },
});

const addUserSkillsSuccess = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
  },
});

const addUserSkillsFailure = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
  },
});

const deleteUserSkillsStart = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: true,
  },
});

const deleteUserSkillsSuccess = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
  },
});

const deleteUserSkillsFailure = (state) => ({
  ...state,
  userSkills: {
    ...state.userSkills,
    loading: false,
  },
});

const skillReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_SKILLS_START:
      return getSkillsStart(state);

    case actions.GET_SKILLS_SUCCESS:
      return getSkillsSuccess(state, action.payload);

    case actions.GET_SKILLS_FAILED:
      return getSkillsFailure(state, action.payload);

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
