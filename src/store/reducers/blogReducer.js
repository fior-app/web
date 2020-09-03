import * as actions from '../actions/types';

const initState = {
  writePost: {
    loading: false,
    error: null,
    success: false,
    post: null,
  },
  deletePost: {
    loading: false,
    error: null,
    success: false,
  },
  posts: {
    error: null,
    loading: false,
    posts: [],
  },
  myPosts: {
    error: null,
    loading: false,
    posts: [],
  },
  post: {
    error: null,
    loading: false,
    post: null,
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

const updateBlogPostInitiatingStart = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    ...initState.writePost,
  },
});

const updateBlogPostInitiatingFailed = (state, payload) => ({
  ...state,
  writePost: {
    ...state.writePost,
    ...initState.writePost,
    error: payload,
  },
});

const updateBlogPostInitiatingSuccess = (state, payload) => ({
  ...state,
  writePost: {
    ...state.writePost,
    post: payload,
  },
});

const updateBlogPostStart = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: true,
  },
});

const updateBlogPostFailed = (state, payload) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: false,
    error: payload,
    success: false,
  },
});

const updateBlogPostSuccess = (state) => ({
  ...state,
  writePost: {
    ...state.writePost,
    loading: false,
    error: null,
    success: true,
  },
});

const deleteBlogPostInitiating = (state) => ({
  ...state,
  deletePost: {
    ...state.deletePost,
    ...initState.deletePost,
  },
});

const deleteBlogPostStart = (state) => ({
  ...state,
  deletePost: {
    ...state.deletePost,
    loading: true,
  },
});

const deleteBlogPostFailed = (state, payload) => ({
  ...state,
  deletePost: {
    ...state.deletePost,
    loading: false,
    error: payload,
    success: false,
  },
});

const deleteBlogPostSuccess = (state) => ({
  ...state,
  deletePost: {
    ...state.deletePost,
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

const getBlogPostsFailed = (state, payload) => ({
  ...state,
  posts: {
    ...state.posts,
    error: payload,
    loading: false,
  },
});

const getBlogPostsSuccess = (state, payload) => ({
  ...state,
  posts: {
    ...state.posts,
    error: null,
    posts: payload,
    loading: false,
  },
});

const getMyPostsStart = (state) => ({
  ...state,
  myPosts: {
    ...state.posts,
    loading: true,
  },
});

const getMyPostsFailed = (state, payload) => ({
  ...state,
  myPosts: {
    ...state.posts,
    error: payload,
    loading: false,
  },
});

const getMyPostsSuccess = (state, payload) => ({
  ...state,
  myPosts: {
    ...state.posts,
    error: null,
    posts: payload,
    loading: false,
  },
});

const getBlogPostStart = (state) => ({
  ...state,
  post: {
    ...state.post,
    loading: true,
    post: null,
  },
});

const getBlogPostFailed = (state, payload) => ({
  ...state,
  post: {
    ...state.posts,
    loading: false,
    post: null,
    error: payload,
  },
});

const getBlogPostSuccess = (state, payload) => ({
  ...state,
  post: {
    ...state.posts,
    loading: false,
    error: null,
    post: payload,
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

    case actions.UPDATE_BLOG_POST_INITIATING_START:
      return updateBlogPostInitiatingStart(state);

    case actions.UPDATE_BLOG_POST_INITIATING_FAILED:
      return updateBlogPostInitiatingFailed(state, action.payload);

    case actions.UPDATE_BLOG_POST_INITIATING_SUCCESS:
      return updateBlogPostInitiatingSuccess(state, action.payload);

    case actions.UPDATE_BLOG_POST_START:
      return updateBlogPostStart(state);

    case actions.UPDATE_BLOG_POST_FAILED:
      return updateBlogPostFailed(state, action.payload);

    case actions.UPDATE_BLOG_POST_SUCCESS:
      return updateBlogPostSuccess(state);

    case actions.DELETE_BLOG_POST_INITIATING:
      return deleteBlogPostInitiating(state);

    case actions.DELETE_BLOG_POST_START:
      return deleteBlogPostStart(state);

    case actions.DELETE_BLOG_POST_FAILED:
      return deleteBlogPostFailed(state, action.payload);

    case actions.DELETE_BLOG_POST_SUCCESS:
      return deleteBlogPostSuccess(state);

    case actions.GET_POSTS_START:
      return getBlogPostsStart(state);

    case actions.GET_POSTS_FAILED:
      return getBlogPostsFailed(state, action.payload);

    case actions.GET_POSTS_SUCCESS:
      return getBlogPostsSuccess(state, action.payload);

    case actions.GET_MY_POSTS_START:
      return getMyPostsStart(state);

    case actions.GET_MY_POSTS_FAILED:
      return getMyPostsFailed(state, action.payload);

    case actions.GET_MY_POSTS_SUCCESS:
      return getMyPostsSuccess(state, action.payload);

    case actions.GET_POST_START:
      return getBlogPostStart(state);

    case actions.GET_POST_SUCCESS:
      return getBlogPostSuccess(state, action.payload);

    case actions.GET_POST_FAILED:
      return getBlogPostFailed(state, action.payload);

    default:
      return state;
  }
};

export default blogReducer;
