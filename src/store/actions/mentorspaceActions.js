import axios from 'axios';
import { EventSourcePolyfill } from 'event-source-polyfill';
import * as actions from './types';
import * as utils from '../../util/utils';
// import firebase from "../../services/firebase";

export const getGroupsMe = () => (dispatch) => {
  dispatch({ type: actions.GET_MY_GROUPS_START });
  axios
    .get('/groups/me')
    .then((res) => {
      dispatch({
        type: actions.GET_MY_GROUPS,
        payload: res.data,
      });
      dispatch({ type: actions.GET_MY_GROUPS_SUCCESS });
      dispatch({ type: actions.GET_MY_GROUPS_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_MY_GROUPS_FAILED,
        payload: error,
      });
      dispatch({ type: actions.GET_MY_GROUPS_END });
    });
};

export const getGroup = (groupId) => (dispatch) => {
  dispatch({ type: actions.GET_GROUP_START });
  axios
    .get(`/groups/${groupId}`)
    .then((res) => {
      dispatch({
        type: actions.GET_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_GROUP_FAILED,
        payload: error,
      });
    });
};

export const getGroupMembers = (groupId) => (dispatch) => {
  dispatch({ type: actions.GET_GROUP_MEMBERS_START });
  axios
    .get(`/groups/${groupId}/members`)
    .then((res) => {
      dispatch({
        type: actions.GET_GROUP_MEMBERS,
        payload: res.data,
      });
      dispatch({ type: actions.GET_GROUP_MEMBERS_SUCCESS });
      dispatch({ type: actions.GET_GROUP_MEMBERS_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_GROUP_MEMBERS_FAILED,
        payload: error,
      });
      dispatch({ type: actions.GET_GROUP_MEMBERS_END });
    });
};

export const getGroupMessages = (groupId) => (dispatch) => {
  dispatch({ type: actions.GET_GROUP_MESSAGES_START });
  axios
    .get(`/chatrooms/groups/${groupId}/messages`)
    .then((res) => {
      dispatch({
        type: actions.GET_GROUP_MESSAGES,
        payload: res.data,
      });
      dispatch({ type: actions.GET_GROUP_MESSAGES_SUCCESS });
      dispatch({ type: actions.GET_GROUP_MESSAGES_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_GROUP_MESSAGES_FAILED,
        payload: error,
      });
      dispatch({ type: actions.GET_GROUP_MESSAGES_END });
    });
};

export const getGroupMessagesStream = (roomId) => (dispatch) => {
  dispatch({ type: actions.GROUP_MESSAGES_STREAM_START });

  const es = new EventSourcePolyfill(
    `${process.env.REACT_APP_API_BASE_URL}/sse/chatroom/${roomId}`,
    {
      headers: {
        Authorization: `Bearer ${utils.getWithExpiry('token')}`,
      },
    },
  );

  es.onmessage = (res) => {
    dispatch({
      type: actions.GROUP_MESSAGES_STREAM,
      payload: JSON.parse(res.data),
    });
    dispatch({ type: actions.GROUP_MESSAGES_STREAM_END });
  };

  es.onerror = (error) => {
    dispatch({
      type: actions.GROUP_MESSAGES_STREAM_FAILED,
      payload: error,
    });
    dispatch({ type: actions.GROUP_MESSAGES_STREAM_END });
  };
};

export const createMentorspace = (mentorspace, cb) => (dispatch) => {
  // const firestore = getFirestore();

  dispatch({ type: actions.CREATE_GROUP_START });

  // firestore.collection('mentorspaces').add({
  //   ...mentorspace,
  //   createdAt: Date.now(),
  // }).then(() => {
  //   dispatch({ type: actions.CREATE_GROUP_SUCCESS });
  //   dispatch({ type: actions.CREATE_GROUP_END });
  //   if (cb) cb();
  //   getGroupsMe()(dispatch);
  // }).catch((error) => {
  //   dispatch({
  //     type: actions.CREATE_GROUP_FAILED,
  //     payload: error,
  //   });
  //   dispatch({ type: actions.CREATE_GROUP_END });
  // });

  // firebase
  //   .firestore()
  //   .collection("mentorspaces")
  //   .add({
  //     ...mentorspace,
  //     created: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   .then(() => {
  //     dispatch({ type: actions.CREATE_GROUP_SUCCESS });
  //     dispatch({ type: actions.CREATE_GROUP_END });
  //     if (cb) cb();
  //     getGroupsMe()(dispatch);
  //   })
  //   .catch((error) => {
  //     dispatch({
  //       type: actions.CREATE_GROUP_FAILED,
  //       payload: error,
  //     });
  //     dispatch({ type: actions.CREATE_GROUP_END });
  //   });

  axios
    .post('/groups/', mentorspace)
    .then(() => {
      dispatch({ type: actions.CREATE_GROUP_SUCCESS });
      dispatch({ type: actions.CREATE_GROUP_END });
      if (cb) cb();
      getGroupsMe()(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.CREATE_GROUP_FAILED,
        payload: error,
      });
      dispatch({ type: actions.CREATE_GROUP_END });
    });
};

export const sendGroupMessage = (roomId, message) => (dispatch) => {
  dispatch({ type: actions.SEND_GROUP_MESSAGE_START });
  axios
    .post(`/chatrooms/${roomId}/send`, message)
    .then(() => {
      dispatch({ type: actions.SEND_GROUP_MESSAGE_SUCCESS });
      dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.SEND_GROUP_MESSAGE_FAILED,
        payload: error,
      });
      dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
    });
};

export const inviteMember = (groupId, email, isMentor = false, comment = null) => (dispatch) => {
  dispatch({ type: actions.INVITE_MEMBER_START });
  axios
    .post(`/groups/${groupId}/member`, { email, isMentor, comment })
    .then(() => {
      dispatch({ type: actions.INVITE_MEMBER_SUCCESS });
      dispatch({ type: actions.INVITE_MEMBER_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.INVITE_MEMBER_FAILED,
        payload: error,
      });
      dispatch({ type: actions.INVITE_MEMBER_END });
    });
};

export const getMentorspaceRequests = () => (dispatch) => {
  dispatch({ type: actions.GET_GROUPS_REQUESTS_START });
  axios
    .get('/groups/me/requests')
    .then((res) => {
      dispatch({
        type: actions.GET_GROUPS_REQUESTS,
        payload: res.data,
      });
      dispatch({ type: actions.GET_GROUPS_REQUESTS_SUCCESS });
      dispatch({ type: actions.GET_GROUPS_REQUESTS_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.GET_GROUPS_REQUESTS_FAILED,
        payload: error,
      });
      dispatch({ type: actions.GET_GROUPS_REQUESTS_END });
    });
};

export const changeGroupState = (groupId, state) => (dispatch) => {
  dispatch({ type: actions.CHANGE_GROUP_STATE_START });
  axios
    .post(`/groups/${groupId}/member/state`, state)
    .then(() => {
      dispatch({ type: actions.CHANGE_GROUP_STATE_SUCCESS });
      dispatch({ type: actions.CHANGE_GROUP_STATE_END });
      getMentorspaceRequests()(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: actions.CHANGE_GROUP_STATE_FAILED,
        payload: error,
      });
      dispatch({ type: actions.CHANGE_GROUP_STATE_END });
    });
};

export const sendGroupMessageToFirebase = (roomId, message) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.SEND_GROUP_MESSAGE_START });

  firestore
    .collection('messages')
    .add({
      ...message,
      sentAt: firestore.FieldValue.serverTimestamp(),
      roomId,
      sender: getState().auth.currentUser,
    })
    .then(() => {
      dispatch({ type: actions.SEND_GROUP_MESSAGE_SUCCESS });
      dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
    })
    .catch((error) => {
      dispatch({
        type: actions.SEND_GROUP_MESSAGE_FAILED,
        payload: error,
      });
      dispatch({ type: actions.SEND_GROUP_MESSAGE_END });
    });
};

export const addMilestoneToFirebase = (groupId, title, due) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.UPSERT_GROUP_MILESTONE_START });

  firestore
    .collection('milestones')
    .add({
      title,
      due,
      isComplete: false,
      tasks: [],
      createdAt: firestore.FieldValue.serverTimestamp(),
      groupId,
      createdBy: getState().auth.currentUser,
    })
    .then(() => {
      dispatch({ type: actions.UPSERT_GROUP_MILESTONE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.UPSERT_GROUP_MILESTONE_FAILED,
        payload: error,
      });
    });
};

export const editMilestoneOnFirebase = (milestoneId, title, due) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.UPSERT_GROUP_MILESTONE_START });

  firestore
    .collection('milestones')
    .doc(milestoneId)
    .update({
      title,
      due,
    })
    .then(() => {
      dispatch({ type: actions.UPSERT_GROUP_MILESTONE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.UPSERT_GROUP_MILESTONE_FAILED,
        payload: error,
      });
    });
};

export const deleteMilestoneOnFirebase = (milestoneId) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.DELETE_GROUP_MILESTONE_START, milestoneId });

  firestore
    .collection('milestones')
    .doc(milestoneId)
    .delete()
    .then(() => {
      dispatch({ type: actions.DELETE_GROUP_MILESTONE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.DELETE_GROUP_MILESTONE_FAILED,
        payload: error,
      });
    });
};

export const setMilestoneStateOnFirebase = (milestoneId, state) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.SET_STATE_MILESTONE_START });

  firestore
    .collection('milestones')
    .doc(milestoneId)
    .update({
      isComplete: state,
    })
    .then(() => {
      dispatch({ type: actions.SET_STATE_MILESTONE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_STATE_MILESTONE_FAILED,
        payload: error,
      });
    });
};

export const updateTasksMilestoneOnFirebase = (milestoneId, tasks) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.UPDATE_TASKS_MILESTONE_START, payload: milestoneId });

  firestore
    .collection('milestones')
    .doc(milestoneId)
    .update({
      tasks,
    })
    .then(() => {
      dispatch({ type: actions.UPDATE_TASKS_MILESTONE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.UPDATE_TASKS_MILESTONE_FAILED,
        payload: error,
      });
    });
};

export const addMeetingToFirebase = (groupId, data) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore();

  dispatch({ type: actions.UPSERT_GROUP_MEETING_START });

  firestore
    .collection('meetings')
    .add({
      ...data,
      createdAt: firestore.FieldValue.serverTimestamp(),
      groupId,
      createdBy: getState().auth.currentUser,
    })
    .then(() => {
      dispatch({ type: actions.UPSERT_GROUP_MEETING_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: actions.UPSERT_GROUP_MEETING_FAILED,
        payload: error,
      });
    });
};
