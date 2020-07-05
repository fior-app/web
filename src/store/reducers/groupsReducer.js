import * as actions from "./../actions/types";

const initState = {
  groups: {
    error: null,
    loading: false,
    groups: [],
  },
  createGroup: {
    loading: false,
    error: null,
  },
  group: {
    error: null,
    loading: false,
    group: null,
  },
};

const createGroupStart = (state) => {
  return { ...state, createGroup: { ...state.createGroup, loading: true } };
};

const createGroupEnd = (state) => {
  return { ...state, createGroup: { ...state.createGroup, loading: false } };
};

const createGroupFailed = (state, payload) => {
  return { ...state, createGroup: { ...state.createGroup, error: payload } };
};

const createGroupSuccess = (state) => {
  return { ...state, createGroup: { ...state.createGroup, error: null } };
};

const getGroupsMeStart = (state) => {
  return { ...state, groups: { ...state.groups, loading: true } };
};

const getGroupsMeEnd = (state) => {
  return { ...state, groups: { ...state.groups, loading: false } };
};

const getGroupsMeFailed = (state, payload) => {
  return { ...state, groups: { ...state.groups, error: payload } };
};

const getGroupsMeSuccess = (state) => {
  return { ...state, groups: { ...state.groups, error: null } };
};

const getGroupsMe = (state, payload) => {
  return { ...state, groups: { ...state.groups, groups: payload } };
};

const getGroupStart = (state) => {
  return { ...state, group: { ...state.group, loading: true } };
};

const getGroupEnd = (state) => {
  return { ...state, group: { ...state.group, loading: false } };
};

const getGroupFailed = (state, payload) => {
  return { ...state, group: { ...state.group, error: payload } };
};

const getGroupSuccess = (state) => {
  return { ...state, group: { ...state.group, error: null } };
};

const getGroup = (state, payload) => {
  return { ...state, group: { ...state.group, group: payload } };
};

const groupsReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_MY_GROUPS_START:
      return getGroupsMeStart(state);

    case actions.GET_MY_GROUPS_END:
      return getGroupsMeEnd(state);

    case actions.GET_MY_GROUPS_SUCCESS:
      return getGroupsMeSuccess(state);

    case actions.GET_MY_GROUPS_FAILED:
      return getGroupsMeFailed(state, action.payload);

    case actions.GET_MY_GROUPS:
      return getGroupsMe(state, action.payload);

    case actions.GET_GROUP_START:
      return getGroupStart(state);

    case actions.GET_GROUP_END:
      return getGroupEnd(state);

    case actions.GET_GROUP_SUCCESS:
      return getGroupSuccess(state);

    case actions.GET_GROUP_FAILED:
      return getGroupFailed(state, action.payload);

    case actions.GET_GROUP:
      return getGroup(state, action.payload);

    case actions.CREATE_GROUP_START:
      return createGroupStart(state);

    case actions.CREATE_GROUP_END:
      return createGroupEnd(state);

    case actions.CREATE_GROUP_SUCCESS:
      return createGroupSuccess(state);

    case actions.CREATE_GROUP_FAILED:
      return createGroupFailed(state, action.payload);

    default:
      return state;
  }
};

export default groupsReducer;