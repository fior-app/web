import * as actions from '../actions/types';

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

const createBlogPostInitiating = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    ...initState.writePost,
  },
});

const createBlogPostStart = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: true,
  },
});

const createBlogPostFailed = (state, payload) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: false,
    error: payload,
    success: false,
  },
});

const createBlogPostSuccess = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: false,
    error: null,
    success: true,
  },
});

const getBlogPostsStart = (state) => ({
  ...state,
  posts: {
    ...state.posts,
    loading: true,
  },
});

const getBlogPostsEnd = (state) => ({
  ...state,
  posts: {
    ...state.posts,
    loading: false,
  },
});

const getBlogPostsFailed = (state, payload) => ({
  ...state,
  posts: {
    ...state.posts,
    error: payload,
  },
});

const getBlogPostsSuccess = (state) => ({
  ...state,
  posts: {
    ...state.posts,
    error: null,
  },
});

const getBlogPosts = (state, payload) => ({
  ...state,
  posts: {
    ...state.posts,
    posts: payload,
  },
});

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CREATE_BLOG_POST_INITIATING:
      return createBlogPostInitiating(state);

    case actions.CREATE_BLOG_POST_START:
      return createBlogPostStart(state);

    case actions.CREATE_BLOG_POST_FAILED:
      return createBlogPostFailed(state, action.payload);

    case actions.CREATE_BLOG_POST_SUCCESS:
      return createBlogPostSuccess(state);

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
