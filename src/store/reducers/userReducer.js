import * as actions from '../actions/types';

const initState = {
  updateState: {
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

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.UPDATE_ME_START:
      return updateMeStart(state);

    case actions.UPDATE_ME_SUCCESS:
      return updateMeSuccess(state);

    case actions.UPDATE_ME_FAILED:
      return updateMeFailed(state, action.payload);

    default:
      return state;
  }
};

export default userReducer;
