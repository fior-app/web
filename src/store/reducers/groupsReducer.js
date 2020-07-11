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
  groupMembers: {
    members: [],
    loading: false,
    error: null,
  },
  groupMessages: {
    messages: [],
    loading: false,
    error: null,
  },
  sendGroupMessage: {
    sending: false,
    error: null,
  },
  inviteMember: {
    loading: false,
    error: null,
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

const getGroupMembersStart = (state) => {
  return { ...state, groupMembers: { ...state.groupMembers, loading: true } };
};

const getGroupMembersEnd = (state) => {
  return { ...state, groupMembers: { ...state.groupMembers, loading: false } };
};

const getGroupMembersFailed = (state, payload) => {
  return { ...state, groupMembers: { ...state.groupMembers, error: payload } };
};

const getGroupMembersSuccess = (state) => {
  return { ...state, groupMembers: { ...state.groupMembers, error: null } };
};

const getGroupMembers = (state, payload) => {
  return {
    ...state,
    groupMembers: { ...state.groupMembers, members: payload },
  };
};

const getGroupMessagesStart = (state) => {
  return { ...state, groupMessages: { ...state.groupMessages, loading: true } };
};

const getGroupMessagesEnd = (state) => {
  return {
    ...state,
    groupMessages: { ...state.groupMessages, loading: false },
  };
};

const getGroupMessagesFailed = (state, payload) => {
  return {
    ...state,
    groupMessages: { ...state.groupMessages, error: payload },
  };
};

const getGroupMessagesSuccess = (state) => {
  return { ...state, groupMessages: { ...state.groupMessages, error: null } };
};

const getGroupMessages = (state, payload) => {
  return {
    ...state,
    groupMessages: { ...state.groupMessages, messages: payload },
  };
};

const sendGroupMessageStart = (state) => {
  return {
    ...state,
    sendGroupMessage: { ...state.sendGroupMessage, sending: true },
  };
};

const sendGroupMessageEnd = (state) => {
  return {
    ...state,
    sendGroupMessage: { ...state.sendGroupMessage, sending: false },
  };
};

const sendGroupMessageFailed = (state, payload) => {
  return {
    ...state,
    sendGroupMessage: { ...state.sendGroupMessage, error: payload },
  };
};

const sendGroupMessageSuccess = (state) => {
  return {
    ...state,
    sendGroupMessage: { ...state.sendGroupMessage, error: null },
  };
};

const streamGroupMessage = (state, payload) => {
  return {
    ...state,
    groupMessages: {
      ...state.groupMessages,
      messages: [...state.groupMessages.messages, payload],
    },
  };
};

const inviteMemberStart = (state) => {
  return { ...state, inviteMember: { ...state.inviteMember, loading: true } };
};

const inviteMemberEnd = (state) => {
  return { ...state, inviteMember: { ...state.inviteMember, loading: false } };
};

const inviteMemberFailed = (state, payload) => {
  return { ...state, inviteMember: { ...state.inviteMember, error: payload } };
};

const inviteMemberSuccess = (state) => {
  return { ...state, inviteMember: { ...state.inviteMember, error: null } };
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

    case actions.GET_GROUP_MEMBERS_START:
      return getGroupMembersStart(state);

    case actions.GET_GROUP_MEMBERS_END:
      return getGroupMembersEnd(state);

    case actions.GET_GROUP_MEMBERS_SUCCESS:
      return getGroupMembersSuccess(state);

    case actions.GET_GROUP_MEMBERS_FAILED:
      return getGroupMembersFailed(state, action.payload);

    case actions.GET_GROUP_MEMBERS:
      return getGroupMembers(state, action.payload);

    case actions.CREATE_GROUP_START:
      return createGroupStart(state);

    case actions.CREATE_GROUP_END:
      return createGroupEnd(state);

    case actions.CREATE_GROUP_SUCCESS:
      return createGroupSuccess(state);

    case actions.CREATE_GROUP_FAILED:
      return createGroupFailed(state, action.payload);

    case actions.GET_GROUP_MESSAGES_START:
      return getGroupMessagesStart(state);

    case actions.GET_GROUP_MESSAGES_END:
      return getGroupMessagesEnd(state);

    case actions.GET_GROUP_MESSAGES_SUCCESS:
      return getGroupMessagesSuccess(state);

    case actions.GET_GROUP_MESSAGES_FAILED:
      return getGroupMessagesFailed(state, action.payload);

    case actions.GET_GROUP_MESSAGES:
      return getGroupMessages(state, action.payload);

    case actions.SEND_GROUP_MESSAGE_START:
      return sendGroupMessageStart(state);

    case actions.SEND_GROUP_MESSAGE_END:
      return sendGroupMessageEnd(state);

    case actions.SEND_GROUP_MESSAGE_SUCCESS:
      return sendGroupMessageSuccess(state);

    case actions.SEND_GROUP_MESSAGE_FAILED:
      return sendGroupMessageFailed(state, action.payload);

    case actions.GROUP_MESSAGES_STREAM:
      return streamGroupMessage(state, action.payload);

    case actions.INVITE_MEMBER_START:
      return inviteMemberStart(state);

    case actions.INVITE_MEMBER_END:
      return inviteMemberEnd(state);

    case actions.INVITE_MEMBER_SUCCESS:
      return inviteMemberSuccess(state);

    case actions.INVITE_MEMBER_FAILED:
      return inviteMemberFailed(state, action.payload);

    default:
      return state;
  }
};

export default groupsReducer;
