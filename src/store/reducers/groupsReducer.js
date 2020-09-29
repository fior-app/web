import * as actions from '../actions/types';

const initState = {
  groups: {
    error: null,
    loading: false,
    groups: [],
  },
  groupsRequests: {
    error: null,
    loading: false,
    groups: [],
  },
  createGroup: {
    loading: false,
    error: null,
  },
  changeGroupState: {
    loading: false,
    error: null,
  },
  group: {
    error: null,
    loading: false,
    member: null,
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
  addGroupMilestone: {
    creating: false,
    error: null,
  },
  inviteMember: {
    loading: false,
    error: null,
  },
};

const createGroupStart = (state) => ({
  ...state,
  createGroup: {
    ...state.createGroup,
    loading: true,
  },
});

const createGroupEnd = (state) => ({
  ...state,
  createGroup: {
    ...state.createGroup,
    loading: false,
  },
});

const createGroupFailed = (state, payload) => ({
  ...state,
  createGroup: {
    ...state.createGroup,
    error: payload,
  },
});

const createGroupSuccess = (state) => ({
  ...state,
  createGroup: {
    ...state.createGroup,
    error: null,
  },
});

const getGroupsMeStart = (state) => ({
  ...state,
  groups: {
    ...state.groups,
    loading: true,
  },
});

const getGroupsMeEnd = (state) => ({
  ...state,
  groups: {
    ...state.groups,
    loading: false,
  },
});

const getGroupsMeFailed = (state, payload) => ({
  ...state,
  groups: {
    ...state.groups,
    error: payload,
  },
});

const getGroupsMeSuccess = (state) => ({
  ...state,
  groups: {
    ...state.groups,
    error: null,
  },
});

const getGroupsMe = (state, payload) => ({
  ...state,
  groups: {
    ...state.groups,
    groups: payload,
  },
});

const getGroupStart = (state) => ({
  ...state,
  group: {
    ...state.group,
    member: null,
    loading: true,
  },
});


const getGroupFailed = (state, payload) => ({
  ...state,
  group: {
    ...state.group,
    error: payload,
    loading: false
  },
});

const getGroupSuccess = (state, payload) => ({
  ...state,
  group: {
    ...state.group,
    member: payload,
    error: null,
    loading: false
  },
});

const getGroup = (state, payload) => ({
  ...state,
  group: {
    ...state.group,
    member: payload,
  },
});

const getGroupMembersStart = (state) => ({
  ...state,
  groupMembers: {
    ...state.groupMembers,
    loading: true,
  },
});

const getGroupMembersEnd = (state) => ({
  ...state,
  groupMembers: {
    ...state.groupMembers,
    loading: false,
  },
});

const getGroupMembersFailed = (state, payload) => ({
  ...state,
  groupMembers: {
    ...state.groupMembers,
    error: payload,
  },
});

const getGroupMembersSuccess = (state) => ({
  ...state,
  groupMembers: {
    ...state.groupMembers,
    error: null,
  },
});

const getGroupMembers = (state, payload) => ({
  ...state,
  groupMembers: {
    ...state.groupMembers,
    members: payload,
  },
});

const getGroupMessagesStart = (state) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    loading: true,
  },
});

const getGroupMessagesEnd = (state) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    loading: false,
  },
});

const getGroupMessagesFailed = (state, payload) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    error: payload,
  },
});

const getGroupMessagesSuccess = (state) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    error: null,
  },
});

const getGroupMessages = (state, payload) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    messages: payload,
  },
});

const sendGroupMessageStart = (state) => ({
  ...state,
  sendGroupMessage: {
    ...state.sendGroupMessage,
    sending: true,
  },
});

const sendGroupMessageEnd = (state) => ({
  ...state,
  sendGroupMessage: {
    ...state.sendGroupMessage,
    sending: false,
  },
});

const sendGroupMessageFailed = (state, payload) => ({
  ...state,
  sendGroupMessage: {
    ...state.sendGroupMessage,
    error: payload,
  },
});

const sendGroupMessageSuccess = (state) => ({
  ...state,
  sendGroupMessage: {
    ...state.sendGroupMessage,
    error: null,
  },
});

const addGroupMilestoneStart = (state) => ({
  ...state,
  addGroupMilestone: {
    ...state.addGroupMilestone,
    creating: true,
    error: null
  },
});

const addGroupMilestoneFailed = (state, payload) => ({
  ...state,
  addGroupMilestone: {
    ...state.addGroupMilestone,
    error: payload,
    creating: false
  },
});

const addGroupMilestoneSuccess = (state) => ({
  ...state,
  addGroupMilestone: {
    ...state.addGroupMilestone,
    error: null,
    creating: false
  },
});

const streamGroupMessage = (state, payload) => ({
  ...state,
  groupMessages: {
    ...state.groupMessages,
    messages: [...state.groupMessages.messages, payload],
  },
});

const inviteMemberStart = (state) => ({
  ...state,
  inviteMember: {
    ...state.inviteMember,
    loading: true,
  },
});

const inviteMemberEnd = (state) => ({
  ...state,
  inviteMember: {
    ...state.inviteMember,
    loading: false,
  },
});

const inviteMemberFailed = (state, payload) => ({
  ...state,
  inviteMember: {
    ...state.inviteMember,
    error: payload,
  },
});

const inviteMemberSuccess = (state) => ({
  ...state,
  inviteMember: {
    ...state.inviteMember,
    error: null,
  },
});

const getGroupsRequestsStart = (state) => ({
  ...state,
  groupsRequests: {
    ...state.groupsRequests,
    loading: true,
  },
});

const getGroupsRequestsEnd = (state) => ({
  ...state,
  groupsRequests: {
    ...state.groupsRequests,
    loading: false,
  },
});

const getGroupsRequestsFailed = (state, payload) => ({
  ...state,
  groupsRequests: {
    ...state.groupsRequests,
    error: payload,
  },
});

const getGroupsRequestsSuccess = (state) => ({
  ...state,
  groupsRequests: {
    ...state.groupsRequests,
    error: null,
  },
});

const getGroupsRequests = (state, payload) => ({
  ...state,
  groupsRequests: {
    ...state.groupsRequests,
    groups: payload,
  },
});

const changeGroupStateStart = (state) => ({
  ...state,
  changeGroupState: {
    ...state.changeGroupState,
    loading: true,
  },
});

const changeGroupStateEnd = (state) => ({
  ...state,
  changeGroupState: {
    ...state.changeGroupState,
    loading: false,
  },
});

const changeGroupStateFailed = (state, payload) => ({
  ...state,
  changeGroupState: {
    ...state.changeGroupState,
    error: payload,
  },
});

const changeGroupStateSuccess = (state) => ({
  ...state,
  changeGroupState: {
    ...state.changeGroupState,
    error: null,
  },
});

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

    case actions.GET_GROUP_SUCCESS:
      return getGroupSuccess(state, action.payload);

    case actions.GET_GROUP_FAILED:
      return getGroupFailed(state, action.payload);

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

    case actions.ADD_GROUP_MILESTONE_START:
      return addGroupMilestoneStart(state);

    case actions.ADD_GROUP_MILESTONE_SUCCESS:
      return addGroupMilestoneSuccess(state);

    case actions.ADD_GROUP_MILESTONE_FAILED:
      return addGroupMilestoneFailed(state, action.payload);

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

    case actions.GET_GROUPS_REQUESTS_START:
      return getGroupsRequestsStart(state);

    case actions.GET_GROUPS_REQUESTS_END:
      return getGroupsRequestsEnd(state);

    case actions.GET_GROUPS_REQUESTS_SUCCESS:
      return getGroupsRequestsSuccess(state);

    case actions.GET_GROUPS_REQUESTS_FAILED:
      return getGroupsRequestsFailed(state, action.payload);

    case actions.GET_GROUPS_REQUESTS:
      return getGroupsRequests(state, action.payload);

    case actions.CHANGE_GROUP_STATE_START:
      return changeGroupStateStart(state);

    case actions.CHANGE_GROUP_STATE_END:
      return changeGroupStateEnd(state);

    case actions.CHANGE_GROUP_STATE_SUCCESS:
      return changeGroupStateSuccess(state);

    case actions.CHANGE_GROUP_STATE_FAILED:
      return changeGroupStateFailed(state, action.payload);

    default:
      return state;
  }
};

export default groupsReducer;
