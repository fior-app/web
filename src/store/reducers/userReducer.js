import * as actions from '../actions/types';

const initState = {
  updateState: {
    isLoading: false,
    error: null,
  },
  setMentorState: {
    isLoading: false,
    error: null,
  },
};

const updateMeStart = (state) => ({
  ...state,
  updateState: {
    ...state.updateState,
    isLoading: true,
    error: null,
  },
});

const updateMeSuccess = (state) => ({
  ...state,
  updateState: {
    ...state.updateState,
    isLoading: false,
  },
});

const updateMeFailed = (state, payload) => ({
  ...state,
  updateState: {
    ...state.updateState,
    isLoading: false,
    error: payload,
  },
});

const setMentorStart = (state) => ({
  ...state,
  setMentorState: {
    ...state.setMentorState,
    isLoading: true,
    error: null,
  },
});

const setMentorSuccess = (state) => ({
  ...state,
  setMentorState: {
    ...state.setMentorState,
    isLoading: false,
  },
});

const setMentorFailed = (state, payload) => ({
  ...state,
  setMentorState: {
    ...state.setMentorState,
    isLoading: false,
    error: payload,
  },
});


const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.UPDATE_ME_START:
      return updateMeStart(state);

    case actions.UPDATE_ME_SUCCESS:
      return updateMeSuccess(state);

    case actions.UPDATE_ME_FAILED:
      return updateMeFailed(state, action.payload);

    case actions.SET_MENTOR_START:
      return setMentorStart(state);

    case actions.SET_MENTOR_SUCCESS:
      return setMentorSuccess(state);

    case actions.SET_MENTOR_FAILED:
      return setMentorFailed(state, action.payload);

    default:
      return state;
  }
};

export default userReducer;
