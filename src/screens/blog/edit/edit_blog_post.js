import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Button, Form, Container, Message,
} from 'semantic-ui-react';
import {
  initiateCreatingBlogPost,
  initiateUpdatingBlogPost,
  createBlogPost,
  updateBlogPost,
} from '../../../store/actions/blogActions';

const EditBlogPost = ({
  loading,
  error,
  success,
  post,
  handleCreateBlogPost,
  handleUpdateBlogPost,
  dispatchInitiateCreating,
  dispatchInitiateUpdating,
}) => {
  const initialState = {
    title: '',
    text: '',
    skills: [],
  };

  const { postId } = useParams('postId');

  const [postState, setPostState] = useState(initialState);

  useEffect(() => {
    if (postId) {
      dispatchInitiateUpdating(postId);
    } else {
      dispatchInitiateCreating();
    }
  }, [postId, dispatchInitiateCreating, dispatchInitiateUpdating]);

  useEffect(() => {
    if (post != null) {
      setPostState((state) => ({ ...state, title: post.title, text: post.text }));
    } else {
      setPostState(initialState);
    }
  }, [post]);

  const handleOnChangeInput = (e, { name, value }) => {
    setPostState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (postId) {
      handleUpdateBlogPost(postId, postState);
    } else {
      handleCreateBlogPost(postState);
    }
  };

  return (
    <Container>
      <h3>{!postId ? 'Create Post' : 'Edit Post'}</h3>
      <Form
        className="spacer"
        onSubmit={handleSubmit}
        success={success}
        error={error}
      >
        <Form.Field>
          <Form.Input
            label="Title"
            type="text"
            placeholder="Give a catchy title"
            name="title"
            value={postState.title}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            label="Post"
            name="text"
            placeholder="Tell more about this..."
            value={postState.text}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        <Message
          error
          header="Hmm... Something went wrong"
          content={error}
        />
        <Message
          success
          header="Success"
          content="Post successfully added"
        />
        <Form.Field>
          <Button
            type="submit"
            disabled={loading}
            loading={loading}
          >
            Save
          </Button>
        </Form.Field>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.writePost.loading,
  success: state.blog.writePost.success,
  error: state.blog.writePost.error,
  post: state.blog.writePost.post,
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateBlogPost: (post) => dispatch(createBlogPost(post)),
  handleUpdateBlogPost: (postId, post) => dispatch(updateBlogPost(postId, post)),
  dispatchInitiateCreating: () => dispatch(initiateCreatingBlogPost()),
  dispatchInitiateUpdating: (postId) => dispatch(initiateUpdatingBlogPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPost);
