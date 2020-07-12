import * as actions from "./../actions/types";

const initState = {
  writePost: {
    loading: false,
    error: null,
    success: false,
  },
  posts: {
    error: null,
    loading: false,
    posts: [],
  },
};

const writePostStart = (state) => {
  return { ...state, writePost: { ...state.writePost, loading: true } };
};

const writePostEnd = (state) => {
  return { ...state, writePost: { ...state.writePost, loading: false } };
};

const writePostFailed = (state, payload) => {
  return { ...state, writePost: { ...state.writePost, error: payload } };
};

const writePostSuccess = (state) => {
  return {
    ...state,
    writePost: { ...state.writePost, error: null, success: true },
  };
};

const getBlogPostsStart = (state) => {
  return { ...state, posts: { ...state.posts, loading: true } };
};

const getBlogPostsEnd = (state) => {
  return { ...state, posts: { ...state.posts, loading: false } };
};

const getBlogPostsFailed = (state, payload) => {
  return { ...state, posts: { ...state.posts, error: payload } };
};

const getBlogPostsSuccess = (state) => {
  return { ...state, posts: { ...state.posts, error: null } };
};

const getBlogPosts = (state, payload) => {
  return { ...state, posts: { ...state.posts, posts: payload } };
};

const clearWritePost = (state) => {
  return {
    ...state,
    writePost: {
      ...state.writePost,
      error: null,
      success: false,
      loading: false,
    },
  };
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.WRITE_POST_START:
      return writePostStart(state);

    case actions.WRITE_POST_END:
      return writePostEnd(state);

    case actions.WRITE_POST_SUCCESS:
      return writePostSuccess(state);

    case actions.WRITE_POST_FAILED:
      return writePostFailed(state, action.payload);

    case actions.CLEAR_WRITE_POST:
      return clearWritePost(state);

    case actions.GET_POSTS_START:
      return getBlogPostsStart(state);

    case actions.GET_POSTS_END:
      return getBlogPostsEnd(state);

    case actions.GET_POSTS_SUCCESS:
      return getBlogPostsSuccess(state);

    case actions.GET_POSTS_FAILED:
      return getBlogPostsFailed(state, action.payload);

    case actions.GET_POSTS:
      return getBlogPosts(state, action.payload);

    default:
      return state;
  }
};

export default blogReducer;
