import * as actions from "./types";
import axios from "axios";
import { EventSourcePolyfill } from "event-source-polyfill";
import * as utils from "../../util/utils";

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

export const getGroup = (groupId) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_GROUP_START });
    axios
      .get("/groups/" + groupId)
      .then((res) => {
        dispatch({ type: actions.GET_GROUP, payload: res.data });
        dispatch({ type: actions.GET_GROUP_SUCCESS });
        dispatch({ type: actions.GET_GROUP_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_GROUP_FAILED, payload: error });
        dispatch({ type: actions.GET_GROUP_END });
      });
  };
};

export const getGroupMembers = (groupId) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_GROUP_MEMBERS_START });
    axios
      .get("/groups/" + groupId + "/members")
      .then((res) => {
        dispatch({ type: actions.GET_GROUP_MEMBERS, payload: res.data });
        dispatch({ type: actions.GET_GROUP_MEMBERS_SUCCESS });
        dispatch({ type: actions.GET_GROUP_MEMBERS_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_GROUP_MEMBERS_FAILED, payload: error });
        dispatch({ type: actions.GET_GROUP_MEMBERS_END });
      });
  };
};

export const getGroupMessages = (groupId) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_GROUP_MESSAGES_START });
    axios
      .get("/chatrooms/groups/" + groupId + "/messages")
      .then((res) => {
        dispatch({ type: actions.GET_GROUP_MESSAGES, payload: res.data });
        dispatch({ type: actions.GET_GROUP_MESSAGES_SUCCESS });
        dispatch({ type: actions.GET_GROUP_MESSAGES_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_GROUP_MESSAGES_FAILED, payload: error });
        dispatch({ type: actions.GET_GROUP_MESSAGES_END });
      });
  };
};

export const getGroupMessagesStream = (roomId) => {
  return (dispatch) => {
    dispatch({ type: actions.GROUP_MESSAGES_STREAM_START });

    let es = new EventSourcePolyfill(
      process.env.REACT_APP_API_BASE_URL + "/sse/chatroom/" + roomId,
      {
        headers: {
          Authorization: "Bearer " + utils.getWithExpiry("token"),
        },
      }
    );

    es.onmessage = (res) => {
      dispatch({
        type: actions.GROUP_MESSAGES_STREAM,
        payload: JSON.parse(res.data),
      });
      dispatch({ type: actions.GROUP_MESSAGES_STREAM_END });
    };

    es.onerror = (error) => {
      dispatch({ type: actions.GROUP_MESSAGES_STREAM_FAILED, payload: error });
      dispatch({ type: actions.GROUP_MESSAGES_STREAM_END });
    };
  };
};

export const createGroup = (group, cb) => {
  return (dispatch) => {
    dispatch({ type: actions.CREATE_GROUP_START });
    axios
      .post("/groups/", group)
      .then((res) => {
        dispatch({ type: actions.CREATE_GROUP_SUCCESS });
        dispatch({ type: actions.CREATE_GROUP_END });
        cb && cb();
        getGroupsMe()(dispatch);
      })
      .catch((error) => {
        dispatch({ type: actions.CREATE_GROUP_FAILED, payload: error });
        dispatch({ type: actions.CREATE_GROUP_END });
      });
  };
};

export const sendGroupMessage = (roomId, message) => {
  return (dispatch) => {
    dispatch({ type: actions.SEND_GROUP_MESSAGE_START });
    axios
      .post("/chatrooms/" + roomId + "/send", message)
      .then((res) => {
        dispatch({ type: actions.SEND_GROUP_MESSAGE_SUCCESS });
        dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
      })
      .catch((error) => {
        dispatch({ type: actions.SEND_GROUP_MESSAGE_FAILED, payload: error });
        dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
      });
  };
};

export const inviteMember = (groupId, email) => {
  return (dispatch) => {
    dispatch({ type: actions.INVITE_MEMBER_START });
    console.log(`/groups/${groupId}/member`);
    axios
      .post(`/groups/${groupId}/member`, email)
      .then((res) => {
        dispatch({ type: actions.INVITE_MEMBER_SUCCESS });
        dispatch({ type: actions.INVITE_MEMBER_END });
      })
      .catch((error) => {
        dispatch({ type: actions.INVITE_MEMBER_FAILED, payload: error });
        dispatch({ type: actions.INVITE_MEMBER_END });
      });
  };
};

export const getMentorspaceRequests = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_GROUPS_REQUESTS_START });
    axios
      .get("/groups/me/requests")
      .then((res) => {
        dispatch({ type: actions.GET_GROUPS_REQUESTS, payload: res.data });
        dispatch({ type: actions.GET_GROUPS_REQUESTS_SUCCESS });
        dispatch({ type: actions.GET_GROUPS_REQUESTS_END });
      })
      .catch((error) => {
        dispatch({ type: actions.GET_GROUPS_REQUESTS_FAILED, payload: error });
        dispatch({ type: actions.GET_GROUPS_REQUESTS_END });
      });
  };
};

export const changeGroupState = (groupId, state) => {
  return (dispatch) => {
    dispatch({ type: actions.CHANGE_GROUP_STATE_START });
    console.log(state);
    console.log(`/groups/${groupId}/member/state`);
    axios
      .post(`/groups/${groupId}/member/state`, state)
      .then((res) => {
        console.log(res);
        dispatch({ type: actions.CHANGE_GROUP_STATE_SUCCESS });
        dispatch({ type: actions.CHANGE_GROUP_STATE_END });
        getGroup(groupId)(dispatch);
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actions.CHANGE_GROUP_STATE_FAILED, payload: error });
        dispatch({ type: actions.CHANGE_GROUP_STATE_END });
      });
  };
};
