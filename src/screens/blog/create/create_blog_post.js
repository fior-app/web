import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  Button, Form, Container, Message,
} from 'semantic-ui-react';
import { initiateCreatingBlogPost, createBlogPost } from '../../../store/actions/blogActions';

const CreateBlogPost = ({
  loading,
  error,
  success,
  handleCreateBlogPost,
  dispatchInitiateCreating,
}) => {
  const initialState = {
    title: '',
    text: '',
    skills: [],
  };

  const [postState, setPostState] = useState(initialState);

  useEffect(() => {
    dispatchInitiateCreating();
  }, []);

  const handleOnChangeInput = (e, { name, value }) => {
    setPostState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h3>Create Post</h3>
      <Form
        className="spacer"
        onSubmit={() => handleCreateBlogPost(postState)}
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
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateBlogPost: (post) => dispatch(createBlogPost(post)),
  dispatchInitiateCreating: () => dispatch(initiateCreatingBlogPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogPost);
